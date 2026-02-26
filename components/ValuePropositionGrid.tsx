'use client';

import { Leaf, Droplets, MapPin, Heart } from 'lucide-react';

type ValuePropositionGridProps = {
  values?: Array<{ icon: 'leaf' | 'droplets' | 'map' | 'heart'; label: string }>;
  hook?: string;
  category?: string;
};

const icons = {
  leaf: Leaf,
  droplets: Droplets,
  map: MapPin,
  heart: Heart,
};

const valuesByCategory: Record<string, Array<{ icon: 'leaf' | 'droplets' | 'map' | 'heart'; label: string }>> = {
  Cosmétique: [
    { icon: 'leaf', label: '100% Bio & Naturel' },
    { icon: 'droplets', label: 'Distillation artisanale' },
    { icon: 'map', label: 'Direct des productrices locales' },
  ],
  Agriculture: [
    { icon: 'leaf', label: '100% Bio' },
    { icon: 'map', label: 'Producteurs locaux' },
    { icon: 'heart', label: 'Commerce Équitable' },
  ],
  Artisanat: [
    { icon: 'droplets', label: 'Fait main' },
    { icon: 'map', label: 'Savoir-faire traditionnel' },
    { icon: 'heart', label: 'Valorisation locale' },
  ],
  Terroir: [
    { icon: 'leaf', label: '100% Naturel' },
    { icon: 'map', label: 'Producteurs locaux' },
    { icon: 'heart', label: 'Traçabilité' },
  ],
};

const defaultValues = [
  { icon: 'leaf' as const, label: '100% Naturel' },
  { icon: 'droplets' as const, label: 'Artisanal' },
  { icon: 'map' as const, label: 'Producteurs locaux' },
];

const defaultHook =
  "Chaque achat soutient les coopératives de femmes de Kelâat M'Gouna et valorise des savoir-faire transmis de génération en génération.";

export default function ValuePropositionGrid({
  values,
  hook = defaultHook,
  category,
}: ValuePropositionGridProps) {
  const displayValues = values ?? (category ? valuesByCategory[category] : defaultValues) ?? defaultValues;
  return (
    <section className="rounded-2xl border border-white/40 bg-white/80 p-6 shadow-soft backdrop-blur-sm">
      <div className="grid gap-4 sm:grid-cols-3">
        {displayValues.map((item) => {
          const Icon = icons[item.icon];
          return (
            <div
              key={item.label}
              className="flex items-start gap-3 rounded-xl border border-sage/20 bg-sage/5 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-terracotta">
                <Icon size={20} />
              </div>
              <span className="font-medium text-palmier">{item.label}</span>
            </div>
          );
        })}
      </div>
      <p className="mt-5 text-center text-sm italic text-palmier/80">{hook}</p>
    </section>
  );
}
