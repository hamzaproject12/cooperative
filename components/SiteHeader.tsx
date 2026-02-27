'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, MapPin, ChevronRight } from 'lucide-react';

const zones = [
  { name: 'AKNOUL', slug: 'aknoul' },
  { name: 'TAINASTE', slug: 'tainaste' },
];

const categories = [
  { name: 'Agriculture', slug: 'agriculture' },
  { name: 'Cosmétique', slug: 'cosmetique' },
  { name: 'Artisanat', slug: 'artisanat' },
  { name: 'Terroir', slug: 'terroir' },
];

const mainNav = [
  { href: '/', label: 'Accueil' },
  { href: '/#zones', label: 'Zones' },
  { href: '/#categories', label: 'Catégories' },
  { href: '/explore', label: 'Carte' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHomeTop = pathname === '/' && !scrolled;
  const isTransparent = isHomeTop;

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false; // anchors - no active state
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-5 lg:px-10 ${
          isTransparent ? 'pointer-events-none' : ''
        }`}
      >
        <div
          className={`pointer-events-auto flex w-full max-w-[1400px] items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 sm:py-3.5 ${
            isTransparent
              ? 'border-b border-white/10 bg-black/20 shadow-xl backdrop-blur-md'
              : 'border border-palmier/10 bg-white/95 shadow-[0_4px_30px_-8px_rgba(45,90,39,0.12)] backdrop-blur-xl'
          }`}
        >
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <motion.span
              whileHover={{ scale: 1.02 }}
              className={`text-lg font-bold tracking-tight sm:text-xl ${
                isTransparent ? 'text-white' : 'text-palmier'
              }`}
            >
              Micro-Entreprises Rurales
            </motion.span>
          </Link>

          {/* Desktop nav */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="group relative px-3 py-2">
                <span
                  className={`relative z-10 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? isTransparent
                        ? 'text-white'
                        : 'text-terracotta'
                      : isTransparent
                        ? 'text-white'
                        : 'text-palmier/80 group-hover:text-palmier'
                  }`}
                >
                  {item.label}
                </span>
                {isActive(item.href) && (
                  <motion.span
                    layoutId="navIndicator"
                    className={`absolute bottom-1 left-2 right-2 h-0.5 rounded-full ${
                      isTransparent ? 'bg-white' : 'bg-terracotta'
                    }`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {!isActive(item.href) && (
                  <span
                    className={`absolute bottom-1 left-2 right-2 h-0.5 origin-center scale-x-0 rounded-full transition-transform group-hover:scale-x-100 ${
                      isTransparent ? 'bg-white/60' : 'bg-terracotta/40'
                    }`}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/explore" className="group flex items-center gap-2">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  isTransparent
                    ? 'bg-white/20 text-white hover:bg-white/30'
                    : 'bg-terracotta text-white shadow-md shadow-terracotta/20 hover:bg-terracotta/90 hover:shadow-lg'
                }`}
              >
                <Map size={18} className="transition group-hover:rotate-6" />
                Explorer
              </motion.span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <motion.button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
            whileTap={{ scale: 0.95 }}
            className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-xl md:hidden ${
              isTransparent ? 'bg-white/15 text-white' : 'bg-palmier/10 text-palmier'
            }`}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
                className={`h-0.5 w-5 rounded-full ${
                  isTransparent ? 'bg-white' : 'bg-palmier'
                }`}
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className={`h-0.5 w-5 rounded-full ${
                  isTransparent ? 'bg-white' : 'bg-palmier'
                }`}
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
                className={`h-0.5 w-5 rounded-full ${
                  isTransparent ? 'bg-white' : 'bg-palmier'
                }`}
              />
            </div>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl md:hidden"
            >
              <div className="flex-1 overflow-y-auto px-6 pt-24 pb-8">
                <nav className="space-y-1">
                  {mainNav.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-palmier transition hover:bg-palmier/5"
                      >
                        {item.label}
                        <ChevronRight size={18} className="text-palmier/40" />
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-8 space-y-4 border-t border-palmier/10 pt-6"
                  >
                    <p className="flex items-center gap-2 px-4 text-xs font-semibold uppercase tracking-wider text-palmier/60">
                      <MapPin size={14} />
                      Par zone
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {zones.map((z, i) => (
                        <motion.div
                          key={z.slug}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.28 + i * 0.03 }}
                        >
                          <Link
                            href={`/zone/${z.slug}`}
                            className="block rounded-xl border border-palmier/10 bg-palmier/5 px-4 py-3 text-sm font-medium text-palmier transition hover:border-terracotta/30 hover:bg-terracotta/5"
                          >
                            {z.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 space-y-4"
                  >
                    <p className="px-4 text-xs font-semibold uppercase tracking-wider text-palmier/60">
                      Par catégorie
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((c, i) => (
                        <motion.div
                          key={c.slug}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.43 + i * 0.03 }}
                        >
                          <Link
                            href={`/category/${c.slug}`}
                            className="block rounded-xl border border-palmier/10 bg-palmier/5 px-4 py-3 text-sm font-medium text-palmier transition hover:border-terracotta/30 hover:bg-terracotta/5"
                          >
                            {c.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="mt-8"
                  >
                    <Link
                      href="/explore"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-terracotta px-6 py-4 font-semibold text-white shadow-lg shadow-terracotta/25 transition hover:bg-terracotta/90"
                    >
                      <Map size={20} />
                      Explorer la carte
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
