'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ExternalLink, Flame, MessageCircle, Sparkles } from 'lucide-react';
import type { Product } from '../data/mockData';

type ProductTag = 'best-seller' | 'low-stock' | 'new' | null;

type ProductCardVendorProps = {
  product: Product;
  index?: number;
  tag?: ProductTag;
  originalPrice?: number;
  stockCount?: number;
};

export default function ProductCardVendor({
  product,
  index = 0,
  tag = null,
  originalPrice,
  stockCount,
}: ProductCardVendorProps) {
  const [showQuickView, setShowQuickView] = useState(false);
  const hasDiscount = originalPrice != null && originalPrice > product.price;

  const tagLabel =
    tag === 'best-seller'
      ? 'Best-seller'
      : tag === 'low-stock' && stockCount != null
        ? `Plus que ${stockCount} en stock`
        : tag === 'new'
          ? 'Nouveau'
          : null;

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: index * 0.05 }}
        className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/80 shadow-lg backdrop-blur-sm transition hover:shadow-xl"
      >
        <Link href={`/product/${product.id}`} className="relative block aspect-[4/3] w-full overflow-hidden">
          {tagLabel && (
            <span
              className={`absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                tag === 'best-seller'
                  ? 'bg-terracotta/95 text-white'
                  : tag === 'low-stock'
                    ? 'bg-amber-500/95 text-white'
                    : 'bg-palmier/90 text-white'
              }`}
            >
              {tag === 'best-seller' && <Flame size={12} />}
              {tag === 'new' && <Sparkles size={12} />}
              {tagLabel}
            </span>
          )}
          <Image
            src={product.images[0]}
            alt={product.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowQuickView(true);
            }}
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-palmier shadow-md backdrop-blur-sm opacity-0 transition group-hover:opacity-100"
            title="Aperçu rapide"
          >
            <Eye size={16} />
          </button>
        </Link>

        <div className="space-y-2 p-3">
          <Link href={`/product/${product.id}`}>
            <h3 className="line-clamp-2 text-sm font-semibold text-palmier hover:text-terracotta sm:text-base">
              {product.name}
            </h3>
          </Link>

          <div className="flex flex-wrap items-center gap-1.5">
            {hasDiscount && (
              <span className="text-xs text-palmier/60 line-through">{originalPrice} MAD</span>
            )}
            <span className="text-base font-bold text-terracotta">{product.price} MAD</span>
          </div>

          <p className="line-clamp-2 text-xs text-palmier/80">{product.shortDescription}</p>

          <div className="flex gap-2 pt-1">
            <Link
              href={`/product/${product.id}`}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-palmier/30 px-3 py-2 text-xs font-medium text-palmier transition hover:bg-palmier/5 sm:text-sm"
              title="Voir plus de détails sur le produit"
            >
              <ExternalLink size={14} />
              Plus d&apos;infos
            </Link>
            <a
              href={`https://wa.me/212600000000?text=${encodeURIComponent(`Bonjour, je souhaite commander : ${product.name} (${product.price} MAD)`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#20BD5A] sm:text-sm"
              title="Commander directement par WhatsApp"
            >
              <MessageCircle size={14} />
              Commander
            </a>
          </div>
        </div>
      </motion.article>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 p-4"
            onClick={() => setShowQuickView(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.images[0]}
                  alt={product.alt}
                  fill
                  sizes="512px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-xl font-bold text-palmier">{product.name}</h3>
                <p className="text-terracotta font-bold">{product.price} MAD</p>
                <p className="text-palmier/85">{product.shortDescription}</p>
                <div className="flex gap-3 pt-2">
                  <Link
                    href={`/product/${product.id}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-terracotta px-4 py-3 font-semibold text-white hover:bg-terracotta/90"
                  >
                    Voir la fiche
                  </Link>
                  <button
                    type="button"
                    onClick={() => setShowQuickView(false)}
                    className="rounded-xl border border-palmier/30 px-4 py-3 font-medium text-palmier"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
