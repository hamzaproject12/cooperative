'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Package } from 'lucide-react';
import type { Cooperative } from '../data/mockData';
import { useCooperativeStore } from '../store/useCooperativeStore';
import ProductsPopup from './ProductsPopup';

type CooperativeListProps = {
  cooperatives: Cooperative[];
  className?: string;
  compact?: boolean;
};

export default function CooperativeList({
  cooperatives,
  className,
  compact = false,
}: CooperativeListProps) {
  const activeCooperativeId = useCooperativeStore((state) => state.activeCooperativeId);
  const setActiveCooperativeId = useCooperativeStore((state) => state.setActiveCooperativeId);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [productsCooperative, setProductsCooperative] = useState<Cooperative | null>(null);

  useEffect(() => {
    if (!activeCooperativeId) return;

    const target = itemRefs.current[activeCooperativeId];
    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [activeCooperativeId]);

  return (
    <>
    <aside
      className={`overflow-y-auto rounded-2xl border border-white/40 bg-white/70 p-2 shadow-lg backdrop-blur-md md:p-3 ${
        compact ? 'h-full' : 'h-[60vh] lg:h-[72vh]'
      } ${className ?? ''}`}
    >
      <div className="space-y-1.5">
        {cooperatives.map((cooperative, index) => {
          const isActive = cooperative.id === activeCooperativeId;

          return (
            <motion.div
              key={cooperative.id}
              ref={(node) => {
                itemRefs.current[cooperative.id] = node;
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              onClick={() => setActiveCooperativeId(cooperative.id)}
              className={`group flex cursor-pointer overflow-hidden rounded-lg border transition ${
                isActive
                  ? 'border-terracotta/60 bg-terracotta/5 shadow-md ring-2 ring-terracotta/25'
                  : 'border-white/40 bg-white/70 hover:border-palmier/25 hover:shadow-md'
              }`}
            >
              {/* Image first - large & clear */}
              <div className="relative aspect-square h-28 w-28 shrink-0 overflow-hidden sm:h-36 sm:w-36">
                <Image
                  src={cooperative.coverImage}
                  alt={cooperative.coverAlt}
                  fill
                  sizes="(max-width: 640px) 112px, 144px"
                  className="object-cover object-center transition duration-400 group-hover:scale-105"
                  unoptimized={cooperative.coverImage.startsWith('/')}
                />
              </div>
              {/* Content + buttons */}
              <div className="flex min-w-0 flex-1 flex-col justify-center p-2.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-terracotta">
                  {cooperative.zone} • {cooperative.category}
                </span>
                <h3 className="mt-0.5 line-clamp-1 text-sm font-semibold text-palmier">
                  {cooperative.name}
                </h3>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setProductsCooperative(cooperative);
                    }}
                    className="inline-flex items-center gap-1 rounded-md bg-palmier/15 px-2 py-1.5 text-[11px] font-medium text-palmier transition hover:bg-palmier/25"
                  >
                    <Package size={11} />
                    Produits
                  </button>
                  <Link
                    href={`/cooperative/${cooperative.slug}`}
                    className="inline-flex items-center gap-0.5 rounded-md bg-terracotta/15 px-2 py-1.5 text-[11px] font-medium text-terracotta transition hover:bg-terracotta/25"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Profil
                    <ArrowUpRight size={11} />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </aside>
    <ProductsPopup
      cooperative={productsCooperative}
      onClose={() => setProductsCooperative(null)}
    />
    </>
  );
}
