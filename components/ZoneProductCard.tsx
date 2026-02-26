'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Flame, Sparkles } from 'lucide-react';
import type { Product } from '../data/mockData';

type ZoneProductCardProps = {
  product: Product;
  cooperativeSlug: string;
  cooperativeName?: string;
  category: string;
  index?: number;
  isBestSeller?: boolean;
};

export default function ZoneProductCard({
  product,
  cooperativeSlug,
  cooperativeName,
  category,
  index = 0,
  isBestSeller = false,
}: ZoneProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/90 shadow-[0_4px_24px_-8px_rgba(45,90,39,0.1)] backdrop-blur-md transition-shadow duration-300 hover:border-terracotta/25 hover:shadow-xl"
    >
      <Link
        href={`/product/${product.id}`}
        className="relative block aspect-[4/3] w-full overflow-hidden"
      >
        <Image
          src={product.images[0]}
          alt={product.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
        <div className="absolute inset-0 flex flex-col justify-end gap-1.5 p-4 sm:p-5">
          {isBestSeller && (
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-terracotta/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              <Flame size={10} />
              Best-seller
            </span>
          )}
          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
            <Sparkles size={10} />
            {category}
          </span>
          <h3 className="text-base font-bold text-white drop-shadow-lg line-clamp-2 group-hover:text-white sm:text-lg">
            {product.name}
          </h3>
        </div>
      </Link>

      <div className="relative p-4 sm:p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <p className="line-clamp-2 text-sm text-palmier/85 sm:text-base">
            {product.shortDescription || 'Produit artisanal local'}
          </p>
          <motion.span
            initial={false}
            whileHover={{ scale: 1.05 }}
            className="shrink-0 rounded-xl bg-terracotta/15 px-3 py-1.5 text-sm font-bold text-terracotta"
          >
            {product.price} MAD
          </motion.span>
        </div>

        <div className="flex items-center justify-between">
          {cooperativeName && (
            <span className="text-xs text-palmier/70">
              Par {cooperativeName}
            </span>
          )}
          {!isBestSeller ? (
            <Link
              href={`/cooperative/${cooperativeSlug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-palmier px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-palmier/90 hover:shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              La coopérative
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ) : (
            <Link
              href={`/product/${product.id}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-terracotta/90 hover:shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              Voir le produit
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
