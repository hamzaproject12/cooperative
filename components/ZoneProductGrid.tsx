'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Package, SlidersHorizontal } from 'lucide-react';
import ZoneProductCard from './ZoneProductCard';
import type { Product } from '../data/mockData';

type ProductWithMeta = Product & {
  cooperativeSlug: string;
  category: string;
  cooperativeName?: string;
};

type ZoneProductGridProps = {
  products: ProductWithMeta[];
  allBestSellers?: boolean;
};

export default function ZoneProductGrid({ products, allBestSellers = false }: ZoneProductGridProps) {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    [products],
  );

  const filtered = useMemo(
    () =>
      categoryFilter
        ? products.filter((p) => p.category === categoryFilter)
        : products,
    [products, categoryFilter],
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-[0_8px_40px_-12px_rgba(45,90,39,0.12)] backdrop-blur-xl"
    >
      {/* Header unifié - Best-sellers + filtres + count */}
      <div className="relative overflow-hidden border-b border-palmier/10 bg-gradient-to-br from-palmier/5 via-white to-terracotta/5 px-6 py-6 sm:px-10 sm:py-8">
        <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-terracotta/5 blur-2xl" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-terracotta/15 shadow-sm">
              <Flame size={28} className="text-terracotta" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-palmier sm:text-2xl">
                Best-sellers des coopératives
              </h3>
              <p className="mt-1 flex items-center gap-2 text-base text-palmier/75">
                <Package size={14} />
                <span>
                  <strong className="font-semibold text-palmier">{filtered.length}</strong>
                  {' '}produit{filtered.length > 1 ? 's' : ''} phare{filtered.length > 1 ? 's' : ''}
                  {categoryFilter && (
                    <span className="text-palmier/60">
                      {' '}· {categoryFilter}
                    </span>
                  )}
                </span>
              </p>
            </div>
          </div>

          {categories.length > 1 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 text-sm font-medium text-palmier/70">
                <SlidersHorizontal size={16} />
                Filtrer
              </span>
              <div className="flex flex-wrap gap-2">
                <motion.button
                  type="button"
                  onClick={() => setCategoryFilter(null)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all ${
                    !categoryFilter
                      ? 'bg-terracotta text-white shadow-md shadow-terracotta/25'
                      : 'bg-white/80 text-palmier hover:bg-palmier/10'
                  }`}
                >
                  Tous
                </motion.button>
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    type="button"
                    onClick={() => setCategoryFilter(cat)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all ${
                      categoryFilter === cat
                        ? 'bg-terracotta text-white shadow-md shadow-terracotta/25'
                        : 'bg-white/80 text-palmier hover:bg-palmier/10'
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Grille des produits */}
      <div className="p-6 sm:p-8 lg:p-10">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="mb-4 rounded-full bg-palmier/10 p-4">
                <Package size={32} className="text-palmier/50" />
              </div>
              <p className="text-palmier/70">Aucun produit dans cette catégorie</p>
            </motion.div>
          ) : (
            <motion.div
              key={categoryFilter ?? 'all'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((product, index) => (
                <ZoneProductCard
                  key={product.id}
                  product={product}
                  cooperativeSlug={product.cooperativeSlug}
                  cooperativeName={product.cooperativeName}
                  category={product.category}
                  index={index}
                  isBestSeller={allBestSellers}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
