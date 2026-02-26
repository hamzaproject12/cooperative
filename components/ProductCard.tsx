'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import type { Product } from '../data/mockData';

type ProductCardProps = {
  product: Product;
  cooperativeSlug: string;
  index?: number;
  zoneTag?: string;
};

export default function ProductCard({
  product,
  cooperativeSlug,
  index = 0,
  zoneTag,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-2xl border border-white/40 bg-white/70 shadow-lg backdrop-blur-md transition hover:shadow-xl"
    >
      <Link href={`/product/${product.id}`} className="relative block h-56 w-full overflow-hidden">
        {zoneTag && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-palmier/90 px-2 py-1 text-xs font-medium text-white">
            {zoneTag}
          </span>
        )}
        <Image
          src={product.images[0]}
          alt={product.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
      </Link>

      <div className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <Link href={`/product/${product.id}`}>
            <h3 className="line-clamp-2 text-base font-semibold text-palmier hover:text-terracotta">
              {product.name}
            </h3>
          </Link>
          <span className="shrink-0 rounded-full bg-terracotta/10 px-3 py-1 text-sm font-semibold text-terracotta">
            {product.price} MAD
          </span>
        </div>

        {product.shortDescription ? (
          <p className="line-clamp-2 text-sm text-palmier/80">{product.shortDescription}</p>
        ) : null}

        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-palmier/60">
            <ShoppingBag size={14} />
            Produit local
          </span>

          <Link
            href={`/cooperative/${cooperativeSlug}`}
            className="inline-flex items-center gap-1 rounded-full bg-palmier px-3 py-2 text-sm font-medium text-white transition hover:bg-palmier/90"
          >
            Voir la coop
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
