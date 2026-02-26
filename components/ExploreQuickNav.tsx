'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const zones = [
  { name: 'AKNOUL', slug: 'aknoul', image: 'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'AKNOUL' },
  { name: 'TAINASTE', slug: 'tainaste', image: 'https://images.pexels.com/photos/8540941/pexels-photo-8540941.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'TAINASTE' },
];

const categories = [
  { name: 'Agriculture', slug: 'agriculture', image: 'https://images.pexels.com/photos/19188645/pexels-photo-19188645.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Agriculture' },
  { name: 'Cosmétique', slug: 'cosmetique', image: 'https://images.pexels.com/photos/32600548/pexels-photo-32600548.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Cosmétique' },
  { name: 'Artisanat', slug: 'artisanat', image: 'https://images.pexels.com/photos/5492122/pexels-photo-5492122.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Artisanat' },
  { name: 'Terroir', slug: 'terroir', image: 'https://images.pexels.com/photos/8540941/pexels-photo-8540941.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Terroir' },
];

export default function ExploreQuickNav() {
  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-palmier/70">
          Explorer par zone
        </p>
        <div className="flex gap-3 overflow-x-auto pb-1">
          {zones.map((z) => (
            <Link key={z.slug} href={`/zone/${z.slug}`}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 border-white/60 shadow-md"
              >
                <Image
                  src={z.image}
                  alt={z.alt}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <span className="mt-1 block text-center text-[10px] font-medium text-palmier line-clamp-1">
                {z.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-palmier/70">
          Explorer par type
        </p>
        <div className="flex gap-3 overflow-x-auto pb-1">
          {categories.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 border-white/60 shadow-md"
              >
                <Image
                  src={c.image}
                  alt={c.alt}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <span className="mt-1 block text-center text-[10px] font-medium text-palmier line-clamp-1">
                {c.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
