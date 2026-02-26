'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Zones : AKNOUL, TAINASTE (données Excel)
const zones = [
  {
    name: 'AKNOUL',
    slug: 'aknoul',
    image:
      'https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Cercle d’Aknoul – environs d’Al Hoceima',
  },
  {
    name: 'TAINASTE',
    slug: 'tainaste',
    image:
      'https://images.pexels.com/photos/8540941/pexels-photo-8540941.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Cercle de Tainaste – environs d’Al Hoceima',
  },
] as const;

export default function ZoneNavigator() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {zones.map((zone, index) => (
        <motion.div
          key={zone.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Link href={`/zone/${zone.slug}`} className="block">
            <motion.article
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/50 shadow-[0_8px_30px_-12px_rgba(45,90,39,0.15)]"
            >
              <div className="absolute inset-0">
                <Image
                  src={zone.image}
                  alt={zone.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-lg font-semibold text-white md:text-xl">{zone.name}</h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm text-white/90">
                  Découvrir
                  <ChevronRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </motion.article>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
