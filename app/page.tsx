/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ZoneNavigator from '../components/ZoneNavigator';
import CategoryNavigator from '../components/CategoryNavigator';

export default function HomePage() {
  return (
    <section className="space-y-10">
      {/* Hero */}
      <div className="relative min-h-[70vh] overflow-hidden rounded-2xl border border-white/20 shadow-xl">
        <Image
          src="/images/images/background.png"
          alt="Oasis et palmiers du sud marocain"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 py-16 text-center">
          <p className="mb-4 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md">
            Marketplace Régionale
          </p>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
            Découvrez le terroir d’Aknoul et de tainaste
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/90 sm:text-lg">
            Produits du terroir, artisanat et savoir-faire local.
          </p>
          <Link
            href="/explore"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Explorer la carte
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Zones */}
      <section id="zones" className="space-y-4">
        <h2 className="text-2xl font-semibold text-palmier">Choisissez votre zone</h2>
        <ZoneNavigator />
      </section>

      {/* Categories */}
      <section id="categories" className="space-y-4">
        <h2 className="text-2xl font-semibold text-palmier">Types de produits</h2>
        <CategoryNavigator />
      </section>
    </section>
  );
}
