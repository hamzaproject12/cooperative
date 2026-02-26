'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { productTypes } from '../data/mockData';

export default function CategoryNavigator() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
      {productTypes.map((type, index) => (
        <motion.div
          key={type.slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
        >
          <Link href={`/category/${type.slug}`} className="block">
            <motion.article
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/40 shadow-lg"
            >
              <div className="absolute inset-0">
                <Image
                  src={type.image}
                  alt={type.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-3 text-center sm:p-4">
                <h3 className="text-sm font-semibold text-white sm:text-base md:text-lg">{type.label}</h3>
                {'description' in type && type.description && (
                  <p className="mt-0.5 line-clamp-2 max-w-[90%] text-[10px] text-white/85 sm:text-xs">
                    {type.description}
                  </p>
                )}
                <span className="mt-1.5 inline-flex items-center gap-1 text-xs text-white/90">
                  Voir les produits
                  <ChevronRight size={14} className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </motion.article>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
