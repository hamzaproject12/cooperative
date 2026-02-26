'use client';

import { Truck, Shield, Package } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Livraison rapide', sub: 'Partout au Maroc' },
  { icon: Shield, label: 'Paiement sécurisé', sub: 'CMI / Visa / Mastercard' },
  { icon: Package, label: 'Retour garanti', sub: 'Sous 14 jours' },
];

export default function ReassuranceBanner() {
  return (
    <section className="rounded-2xl border border-white/40 bg-gradient-to-r from-sage/10 via-fond to-terracotta/10 py-6 shadow-soft">
      <div className="flex flex-wrap items-center justify-center gap-8 px-4 sm:gap-12">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-terracotta">
              <Icon size={24} />
            </div>
            <div>
              <p className="font-semibold text-palmier">{label}</p>
              <p className="text-xs text-palmier/70">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
