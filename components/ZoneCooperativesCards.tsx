'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Package } from 'lucide-react';
import type { Cooperative } from '../data/mockData';

type ZoneCooperativesCardsProps = {
  cooperatives: Cooperative[];
};

export default function ZoneCooperativesCards({ cooperatives }: ZoneCooperativesCardsProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cooperatives.map((coop, index) => (
        <motion.div
          key={coop.id}
          className="flex h-full min-h-[200px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ y: -2 }}
        >
          <Link
            href={`/cooperative/${coop.slug}`}
            className="group flex h-full w-full flex-1 items-stretch overflow-hidden rounded-2xl border border-white/60 bg-white/95 shadow-[0_4px_24px_-8px_rgba(45,90,39,0.1)] backdrop-blur-sm transition hover:border-terracotta/20 hover:shadow-xl"
          >
            <div className="relative w-36 shrink-0 self-stretch overflow-hidden rounded-l-2xl sm:w-44">
              <Image
                src={coop.coverImage}
                alt={coop.coverAlt}
                fill
                sizes="176px"
                className="object-cover object-left-top transition duration-600 group-hover:scale-110"
                unoptimized={coop.coverImage.startsWith('/')}
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                {coop.category}
              </span>
              <h3 className="mt-1 line-clamp-2 text-base font-semibold text-palmier group-hover:text-terracotta sm:text-lg">
                {coop.name}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-palmier/75">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} />
                  {coop.location.address.split(',')[0]}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Package size={14} />
                  {coop.products.length} produit{coop.products.length > 1 ? 's' : ''}
                </span>
              </div>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
                Voir la coopérative
                <ChevronRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
