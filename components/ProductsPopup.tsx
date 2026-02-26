'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Cooperative, Product } from '../data/mockData';

type ProductsPopupProps = {
  cooperative: Cooperative | null;
  onClose: () => void;
};

export default function ProductsPopup({ cooperative, onClose }: ProductsPopupProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (cooperative) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [cooperative]);

  return (
    <AnimatePresence>
      {cooperative && (
      <motion.div
        key={cooperative.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="relative flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-white/40 bg-white shadow-xl backdrop-blur-md"
        >
          <div className="shrink-0 border-b border-palmier/10 bg-gradient-to-r from-palmier/5 to-terracotta/5 px-5 py-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-palmier">{cooperative.name}</h2>
                <p className="mt-0.5 text-sm text-palmier/70">
                  {cooperative.zone} • {cooperative.category}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer"
                className="rounded-full p-1.5 text-palmier/70 transition hover:bg-palmier/10 hover:text-palmier"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {cooperative.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex gap-3 overflow-hidden rounded-xl border border-white/60 bg-white/80 p-2.5 transition hover:border-terracotta/30 hover:shadow-md"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={product.images[0]}
          alt={product.alt}
          fill
          sizes="64px"
          className="object-cover transition group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="line-clamp-2 text-sm font-medium text-palmier group-hover:text-terracotta">
          {product.name}
        </p>
        <p className="mt-0.5 text-xs font-semibold text-terracotta">{product.price} MAD</p>
      </div>
    </Link>
  );
}
