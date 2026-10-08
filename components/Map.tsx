'use client';

import dynamic from 'next/dynamic';
import type { Cooperative } from '../data/mockData';

type MapProps = {
  cooperatives: Cooperative[];
  className?: string;
  hideSpotlight?: boolean;
  selectedZone?: string;
  onZoneSelect?: (zone: string) => void;
};

const MapClient = dynamic(() => import('./MapClient'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[60vh] items-center justify-center rounded-2xl border border-white/40 bg-white/70 text-palmier shadow-lg backdrop-blur-md">
      Chargement de la carte...
    </div>
  ),
});

export default function Map(props: MapProps) {
  return <MapClient {...props} />;
}
