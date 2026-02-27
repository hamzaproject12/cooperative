'use client';

import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SiteHeader from './SiteHeader';

type RouteAwareLayoutProps = {
  children: React.ReactNode;
};

export default function RouteAwareLayout({ children }: RouteAwareLayoutProps) {
  const pathname = usePathname();
  const isExplorePage = pathname === '/explore';

  return (
    <div
      className={`relative mx-auto flex max-w-[1440px] flex-col px-4 sm:px-6 lg:px-10 ${
        isExplorePage ? 'h-screen overflow-hidden' : 'min-h-screen'
      }`}
    >
      <SiteHeader />

      <main className={isExplorePage ? 'flex-1 overflow-hidden pt-24' : 'flex-1 pb-8 pt-24'}>
        {children}
      </main>

      {!isExplorePage ? (
        <footer className="mb-4 grid gap-6 rounded-2xl border border-white/40 bg-white/75 px-6 py-8 text-sm text-palmier/85 shadow-soft backdrop-blur-md md:grid-cols-4">
          <div>
            <Link href="/" className="text-base font-semibold">
              Micro-Entreprises Rurales
            </Link>
            <p className="mt-3 text-sm text-palmier/75">
              Marketplace multi-coopératives dédiée au terroir des zones AKNOUL et TAINASTE. Valorisez vos
              produits et soutenez l’economie locale.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Liens utiles</h3>
            <ul className="mt-3 space-y-2 text-palmier/75">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/explore">Explorer la carte</Link>
              </li>
              <li>
                <Link href="/#mission">Notre mission</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-3 space-y-2 text-palmier/75">
              <li>
                <Link href="/">Mentions legales</Link>
              </li>
              <li>
                <Link href="/">Politique de confidentialite</Link>
              </li>
              <li>
                <Link href="/">Conditions d’utilisation</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2 text-palmier/75">
              <li className="inline-flex items-center gap-2">
                <Mail size={14} />
                contact@oasis-moderne.ma
              </li>
              <li className="inline-flex items-center gap-2">
                <Phone size={14} />
                +212 6 12 34 56 78
              </li>
              <li className="inline-flex items-center gap-2">
                <Instagram size={14} />
                <Facebook size={14} />
                @oasis.moderne
              </li>
            </ul>
          </div>
        </footer>
      ) : null}
    </div>
  );
}
