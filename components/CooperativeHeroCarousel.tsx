'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

type CooperativeHeroCarouselProps = {
  name: string;
  category: string;
  descriptionShort: string;
  images: string[];
  rating?: number;
  reviewCount?: number;
  badges?: string[];
};

const CAROUSEL_INTERVAL = 5000;

export default function CooperativeHeroCarousel({
  name,
  category,
  descriptionShort,
  images: rawImages,
  rating = 4.8,
  reviewCount = 120,
  badges = ['100% Naturel', 'Fait main', 'Commerce Équitable'],
}: CooperativeHeroCarouselProps) {
  const images = rawImages.filter((src): src is string => typeof src === 'string' && src.length > 0);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    setProgress(0);
    const interval = 50;
    const increment = (100 / CAROUSEL_INTERVAL) * interval;
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrent((c) => (c + 1) % images.length);
          return 0;
        }
        return Math.min(p + increment, 100);
      });
    }, interval);
    return () => clearInterval(t);
  }, [current, images.length]);

  const displayBadges = badges.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative overflow-hidden rounded-2xl border border-white/50 shadow-[0_25px_50px_-12px_rgba(45,90,39,0.15)]"
    >
      <div className="grid min-h-[360px] grid-cols-1 md:min-h-[420px] md:grid-cols-2">
        {/* Left: Carousel with Ken Burns effect */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
          <AnimatePresence mode="wait">
            {images.length > 0 ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              <motion.div
                animate={{ scale: [1, 1.06] }}
                transition={{ duration: CAROUSEL_INTERVAL / 1000, ease: 'linear' }}
                className="absolute inset-0 origin-center"
              >
                <Image
                  src={images[current] ?? images[0]}
                  alt={`${name} - vue ${current + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  unoptimized={(images[current] ?? images[0])?.startsWith('/') ?? false}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent md:from-black/40 md:via-transparent md:to-transparent" />
            </motion.div>
            ) : (
              <div className="absolute inset-0 bg-sage/30" aria-hidden />
            )}
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <motion.button
                type="button"
                onClick={() => {
                  setCurrent((c) => (c - 1 + images.length) % images.length);
                  setProgress(0);
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-lg backdrop-blur-md transition hover:bg-white"
                aria-label="Image précédente"
              >
                <ChevronLeft size={22} className="text-palmier" />
              </motion.button>
              <motion.button
                type="button"
                onClick={() => {
                  setCurrent((c) => (c + 1) % images.length);
                  setProgress(0);
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-lg backdrop-blur-md transition hover:bg-white"
                aria-label="Image suivante"
              >
                <ChevronRight size={22} className="text-palmier" />
              </motion.button>
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setCurrent(i);
                      setProgress(0);
                    }}
                    className="group"
                    aria-label={`Image ${i + 1}`}
                  >
                    <div className="h-1.5 w-8 overflow-hidden rounded-full bg-white/40 transition group-hover:bg-white/60">
                      <motion.div
                        className="h-full rounded-full bg-white"
                        initial={false}
                        animate={{
                          width: i === current ? `${progress}%` : i < current ? '100%' : '0%',
                        }}
                        transition={{ duration: 0.15 }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Badges overlay - staggered entrance */}
          <motion.div
            className="absolute left-4 top-4 flex flex-wrap gap-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.3 },
              },
              hidden: {},
            }}
          >
            {displayBadges.map((badge, i) => (
              <motion.span
                key={badge}
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                  },
                }}
                className="rounded-full border border-white/60 bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-palmier shadow-lg backdrop-blur-md"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right: Headline & Trust - staggered animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-rose-light/90 via-fond to-sage/20 p-8 md:p-10"
        >
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-terracotta/5 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-sage/10 blur-xl" />

          <motion.span
            variants={itemVariants}
            className="mb-3 inline-block w-fit rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-terracotta"
          >
            {category}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-2xl font-bold tracking-tight text-palmier sm:text-3xl lg:text-4xl lg:leading-tight"
          >
            {name}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-4 flex items-center gap-3"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.5 + i * 0.06 },
                  }}
                >
                  <Star
                    size={18}
                    className={i < Math.floor(rating) ? 'fill-sable text-sable' : 'fill-sable/30 text-sable/30'}
                  />
                </motion.span>
              ))}
            </div>
            <span className="text-sm font-medium text-palmier/80">
              {rating}/5 <span className="text-palmier/60">({reviewCount} avis)</span>
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-md text-base leading-relaxed text-palmier/90"
          >
            {descriptionShort}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
