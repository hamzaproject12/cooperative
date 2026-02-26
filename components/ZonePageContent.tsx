'use client';

import { motion } from 'framer-motion';
import { Package, Store } from 'lucide-react';
import ZoneProductGrid from './ZoneProductGrid';
import ZoneCooperativesCards from './ZoneCooperativesCards';
import ZoneNavigator from './ZoneNavigator';
import type { Cooperative } from '../data/mockData';
import type { Product } from '../data/mockData';

type ProductWithMeta = Product & {
  cooperativeSlug: string;
  category: string;
  cooperativeName?: string;
};

type ZonePageContentProps = {
  zone: string;
  zoneCooperatives: Cooperative[];
  bestSellerProducts: ProductWithMeta[];
  totalProducts: number;
  categories: string[];
};

export default function ZonePageContent({
  zone,
  zoneCooperatives,
  bestSellerProducts,
  totalProducts,
  categories,
}: ZonePageContentProps) {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 lg:px-10">
      {/* Stats box */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
          <motion.div
            whileHover={{ y: -2 }}
            className="flex flex-1 items-center gap-6 rounded-2xl border border-white/60 bg-white/95 p-6 shadow-[0_4px_24px_-8px_rgba(45,90,39,0.1)] backdrop-blur-sm sm:p-8"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-terracotta/15 shadow-sm">
              <Store size={32} className="text-terracotta" />
            </div>
            <div>
              <p className="text-2xl font-bold text-palmier sm:text-3xl">
                {zoneCooperatives.length} coopérative{zoneCooperatives.length > 1 ? 's' : ''}
              </p>
              <p className="mt-0.5 text-base text-palmier/75">dans la zone {zone}</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ y: -2 }}
            className="flex flex-1 items-center gap-6 rounded-2xl border border-white/60 bg-white/95 p-6 shadow-[0_4px_24px_-8px_rgba(45,90,39,0.1)] backdrop-blur-sm sm:p-8"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-palmier/15 shadow-sm">
              <Package size={32} className="text-palmier" />
            </div>
            <div>
              <p className="text-2xl font-bold text-palmier sm:text-3xl">{totalProducts} produits</p>
              <p className="mt-0.5 text-base text-palmier/75">
                {bestSellerProducts.length} best-sellers
              </p>
            </div>
          </motion.div>
        </div>
        {categories.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-palmier/20 bg-palmier/5 px-4 py-2 text-sm font-medium text-palmier"
              >
                {cat}
              </span>
            ))}
          </motion.div>
        )}
      </motion.section>

      {/* Cooperatives */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-palmier sm:text-2xl">Coopératives de la zone</h2>
          <span className="rounded-full bg-palmier/10 px-4 py-2 text-sm font-medium text-palmier">
            {zoneCooperatives.length} coopérative{zoneCooperatives.length > 1 ? 's' : ''}
          </span>
        </div>
        <ZoneCooperativesCards cooperatives={zoneCooperatives} />
      </motion.section>

      {/* Best-sellers - ZoneProductGrid inclut son propre header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ZoneProductGrid products={bestSellerProducts} allBestSellers />
      </motion.section>

      {/* Explore other zones */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="mb-6 text-xl font-semibold text-palmier">
          Explorer d&apos;autres zones
        </h2>
        <ZoneNavigator />
      </motion.section>
    </div>
  );
}
