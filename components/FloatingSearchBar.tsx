'use client';

import { MapPinned, SlidersHorizontal, Tag } from 'lucide-react';

type FloatingSearchBarProps = {
  zones: string[];
  categories: string[];
  selectedZone: string;
  selectedCategory: string;
  onZoneChange: (zone: string) => void;
  onCategoryChange: (category: string) => void;
  embedded?: boolean;
};

export default function FloatingSearchBar({
  zones,
  categories,
  selectedZone,
  selectedCategory,
  onZoneChange,
  onCategoryChange,
  embedded = false,
}: FloatingSearchBarProps) {
  return (
    <div
      className={`rounded-xl border border-white/50 bg-white/95 px-3 py-2 shadow-md ${
        embedded ? 'static' : 'absolute left-3 right-3 top-3 z-[600] sm:left-4 sm:right-auto'
      } sm:px-4`}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-palmier">
          <SlidersHorizontal size={15} className="text-terracotta" />
          Recherche rapide
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <label className="inline-flex items-center gap-2 rounded-full border border-palmier/10 bg-fond px-3 py-1.5 text-sm text-palmier">
            <MapPinned size={14} className="text-terracotta" />
            <select
              value={selectedZone}
              onChange={(event) => onZoneChange(event.target.value)}
              className="min-w-[130px] bg-transparent text-sm outline-none"
            >
              {zones.map((zone) => (
                <option key={zone} value={zone}>
                  {zone}
                </option>
              ))}
            </select>
          </label>

          <label className="inline-flex items-center gap-2 rounded-full border border-palmier/10 bg-fond px-3 py-1.5 text-sm text-palmier">
            <Tag size={14} className="text-terracotta" />
            <select
              value={selectedCategory}
              onChange={(event) => onCategoryChange(event.target.value)}
              className="min-w-[170px] bg-transparent text-sm outline-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
