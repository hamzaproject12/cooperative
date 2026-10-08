'use client';

import { MapPinned, RotateCcw, SlidersHorizontal, Tag } from 'lucide-react';
import { zonePolygons } from '../data/zonePolygons';

type FloatingSearchBarProps = {
  zones: string[];
  categories: string[];
  selectedZone: string;
  selectedCategory: string;
  onZoneChange: (zone: string) => void;
  onCategoryChange: (category: string) => void;
  embedded?: boolean;
};

function formatZone(zone: string) {
  if (zone === 'Toutes') return 'Toutes les zones';
  return zone.charAt(0) + zone.slice(1).toLowerCase();
}

function formatCategory(category: string) {
  return category === 'Toutes' ? 'Toutes les catégories' : category;
}

export default function FloatingSearchBar({
  zones,
  categories,
  selectedZone,
  selectedCategory,
  onZoneChange,
  onCategoryChange,
  embedded = false,
}: FloatingSearchBarProps) {
  const zoneColor = zonePolygons.find((polygon) => polygon.zone === selectedZone)?.color;
  const hasActiveFilter = selectedZone !== 'Toutes' || selectedCategory !== 'Toutes';

  return (
    <div
      className={`rounded-xl border border-white/50 bg-white/95 px-3 py-2.5 shadow-md ${
        embedded ? 'static' : 'absolute left-3 right-3 top-3 z-[600] sm:left-4 sm:right-auto'
      } sm:px-4`}
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-palmier">
          <SlidersHorizontal size={15} className="text-terracotta" />
          Recherche rapide
        </div>

        {hasActiveFilter ? (
          <button
            type="button"
            onClick={() => {
              onZoneChange('Toutes');
              onCategoryChange('Toutes');
            }}
            className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-terracotta transition hover:bg-terracotta/10"
          >
            <RotateCcw size={12} />
            Réinitialiser
          </button>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <label className="flex min-w-0 items-center gap-2 rounded-full border border-palmier/10 bg-fond px-3 py-1.5 text-sm text-palmier">
          {zoneColor ? (
            <span
              className="size-3 shrink-0 rounded-full ring-2 ring-white"
              style={{ backgroundColor: zoneColor }}
            />
          ) : (
            <MapPinned size={14} className="shrink-0 text-terracotta" />
          )}
          <select
            value={selectedZone}
            onChange={(event) => onZoneChange(event.target.value)}
            aria-label="Zone"
            className="w-full min-w-0 cursor-pointer bg-transparent text-sm outline-none"
          >
            {zones.map((zone) => (
              <option key={zone} value={zone}>
                {formatZone(zone)}
              </option>
            ))}
          </select>
        </label>

        <label className="flex min-w-0 items-center gap-2 rounded-full border border-palmier/10 bg-fond px-3 py-1.5 text-sm text-palmier">
          <Tag size={14} className="shrink-0 text-terracotta" />
          <select
            value={selectedCategory}
            onChange={(event) => onCategoryChange(event.target.value)}
            aria-label="Catégorie"
            className="w-full min-w-0 cursor-pointer bg-transparent text-sm outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {formatCategory(category)}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
