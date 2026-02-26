'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp, ListFilter, Map } from 'lucide-react';
import CooperativeList from '../../components/CooperativeList';
import ExploreMap from '../../components/Map';
import FloatingSearchBar from '../../components/FloatingSearchBar';
import { cooperatives } from '../../data/mockData';
import { useCooperativeStore } from '../../store/useCooperativeStore';

export default function ExplorePage() {
  const [selectedZone, setSelectedZone] = useState('Toutes');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const activeCooperativeId = useCooperativeStore((state) => state.activeCooperativeId);
  const setActiveCooperativeId = useCooperativeStore((state) => state.setActiveCooperativeId);

  const zones = useMemo(() => {
    const uniqueZones = Array.from(new Set(cooperatives.map((cooperative) => cooperative.zone)));
    return ['Toutes', ...uniqueZones];
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(cooperatives.map((cooperative) => cooperative.category)),
    );
    return ['Toutes', ...uniqueCategories];
  }, []);

  const filteredCooperatives = useMemo(() => {
    return cooperatives.filter((cooperative) => {
      const zoneMatch = selectedZone === 'Toutes' || cooperative.zone === selectedZone;
      const categoryMatch =
        selectedCategory === 'Toutes' || cooperative.category === selectedCategory;
      return zoneMatch && categoryMatch;
    });
  }, [selectedZone, selectedCategory]);

  useEffect(() => {
    if (!activeCooperativeId) return;

    const existsInFilteredList = filteredCooperatives.some(
      (cooperative) => cooperative.id === activeCooperativeId,
    );
    if (!existsInFilteredList) {
      setActiveCooperativeId(null);
    }
  }, [activeCooperativeId, filteredCooperatives, setActiveCooperativeId]);

  const totalProducts = filteredCooperatives.reduce((count, cooperative) => {
    return count + cooperative.products.length;
  }, 0);

  return (
    <section id="cooperatives" className="flex h-full flex-col overflow-hidden">
      {/* Main content - full map + cooperatives panel */}
      <div className="relative flex min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/40 bg-white/70 shadow-lg">
        <div className="relative hidden size-full overflow-hidden lg:grid lg:grid-cols-[58%_42%]">
          <div className="relative flex h-full w-full min-w-0 flex-col overflow-hidden">
            <div className="relative min-h-0 w-full flex-1">
              <ExploreMap
                cooperatives={filteredCooperatives}
                className="h-full w-full rounded-none border-0"
              />
            </div>
          </div>

          <div className="flex min-w-0 flex-col overflow-hidden border-l border-white/50 bg-white/80 backdrop-blur-sm">
            <div className="shrink-0 space-y-3 border-b border-white/50 p-3">
              <FloatingSearchBar
                zones={zones}
                categories={categories}
                selectedZone={selectedZone}
                selectedCategory={selectedCategory}
                onZoneChange={setSelectedZone}
                onCategoryChange={setSelectedCategory}
                embedded
              />
              <div className="flex items-center justify-between rounded-xl bg-palmier/5 px-4 py-2.5">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-palmier">
                  <Map size={16} className="text-terracotta" />
                  {filteredCooperatives.length} coopérative{filteredCooperatives.length > 1 ? 's' : ''}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-palmier/80">
                  <ListFilter size={14} />
                  {totalProducts} produits
                </span>
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto p-3">
              <CooperativeList
                cooperatives={filteredCooperatives}
                compact
                className="border-0 bg-transparent p-0 shadow-none"
              />
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="relative h-full overflow-hidden lg:hidden">
          <ExploreMap
            cooperatives={filteredCooperatives}
            className="h-full min-h-[300px] rounded-none border-0"
            hideSpotlight
          />

          <button
            onClick={() => setIsSheetOpen((prev) => !prev)}
            className="absolute bottom-20 right-4 z-[1000] inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/95 px-4 py-2.5 text-sm font-semibold text-palmier shadow-xl backdrop-blur-md"
          >
            <ChevronUp
              size={16}
              className={`transition-transform ${isSheetOpen ? 'rotate-180' : ''}`}
            />
            Voir les coopératives
          </button>

          <AnimatePresence>
            {isSheetOpen ? (
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                className="absolute inset-x-0 bottom-0 z-[1001] flex max-h-[70vh] flex-col rounded-t-3xl border border-white/60 bg-white/95 shadow-2xl backdrop-blur-xl"
              >
                <div className="shrink-0 space-y-3 border-b border-white/50 p-4">
                  <div className="mx-auto h-1.5 w-14 rounded-full bg-palmier/25" />
                  <FloatingSearchBar
                    zones={zones}
                    categories={categories}
                    selectedZone={selectedZone}
                    selectedCategory={selectedCategory}
                    onZoneChange={setSelectedZone}
                    onCategoryChange={setSelectedCategory}
                    embedded
                  />
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-palmier">
                      {filteredCooperatives.length} coopérative
                      {filteredCooperatives.length > 1 ? 's' : ''} • {totalProducts} produits
                    </span>
                  </div>
                </div>
                <div className="min-h-0 flex-1 overflow-y-auto p-4">
                  <CooperativeList
                    cooperatives={filteredCooperatives}
                    compact
                    className="h-full border-0 bg-transparent p-0 shadow-none"
                  />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
