'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import L from 'leaflet';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Package } from 'lucide-react';
import type { Cooperative } from '../data/mockData';
import { useCooperativeStore } from '../store/useCooperativeStore';
import ProductsPopup from './ProductsPopup';
import 'leaflet/dist/leaflet.css';

type MapClientProps = {
  cooperatives: Cooperative[];
  className?: string;
  hideSpotlight?: boolean;
};

type MapFocusProps = {
  target: Cooperative | null;
};

function hasValidLatLng(cooperative: Cooperative) {
  return (
    Number.isFinite(cooperative.location?.lat) && Number.isFinite(cooperative.location?.lng)
  );
}

function MapResizeHandler() {
  const map = useMap();

  useEffect(() => {
    const run = () => {
      map.invalidateSize();
    };
    run();
    const t = setTimeout(run, 100);
    const handleResize = () => map.invalidateSize();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', handleResize);
    };
  }, [map]);

  return null;
}

function MapFocusController({ target }: MapFocusProps) {
  const map = useMap();

  useEffect(() => {
    if (!target) return;
    if (!hasValidLatLng(target)) return;

    const lat = Number(target.location.lat);
    const lng = Number(target.location.lng);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

    map.whenReady(() => {
      try {
        map.flyTo([lat, lng], 10, {
          animate: true,
          duration: 0.8,
        });
      } catch {
        // Ignore transient map state errors during rapid filter changes.
      }
    });
  }, [map, target]);

  return null;
}

/* Symbolic filled shapes for each category - center ~12,12 in 24x24 viewBox */
const CATEGORY_ICONS: Record<string, string> = {
  Agriculture:
    'M12 3c-3 0-6 2.5-6 6 0 4 6 12 6 12s6-8 6-12c0-3.5-3-6-6-6zm0 4a2 2 0 110 4 2 2 0 010-4z',
  Cosmétique:
    'M12 4c-2 0-3.5 1.5-4 3.5-.5 2 .5 4.5 1.5 6.5 1 2 2 3.5 2.5 4.5.5 1 1 2 2.5 2 1.5 0 2-1 2.5-2 .5-1 1.5-2.5 2.5-4.5 1-2 2-4.5 1.5-6.5C15.5 5.5 14 4 12 4z',
  Artisanat:
    'M7 5h10v2H7V5zm-1 3h12v11H6V8zm2 2v7h8v-7H8z',
  Terroir:
    'M12 3c-3.5 0-6 2.5-6 6 0 4 6 9 6 9s6-5 6-9c0-3.5-2.5-6-6-6zm0 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z',
};

const DEFAULT_ICON =
  'M12 2C8 2 5 5.5 5 9c0 6 7 13 7 13s7-7 7-13c0-3.5-3-7-7-7zm0 5a2 2 0 110 4 2 2 0 010-4z';

function getCategoryIconPath(category: string) {
  return CATEGORY_ICONS[category] ?? DEFAULT_ICON;
}

function createMarkerSvg(category: string, active: boolean) {
  const color = active ? '#E2725B' : '#2D5A27';
  const ring = active ? '#F4A460' : '#ffffff';
  const size = active ? 44 : 40;
  const strokeWidth = active ? 3 : 2.5;
  const iconPath = getCategoryIconPath(category);

  const shadowId = `shadow-${active ? 'a' : 'n'}-${Math.random().toString(36).slice(2, 8)}`;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
      <defs>
        <filter id="${shadowId}" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="${active ? 2.5 : 1.5}" flood-opacity="0.35"/>
        </filter>
      </defs>
      <circle cx="12" cy="12" r="10" fill="${color}" stroke="${ring}" stroke-width="${strokeWidth}" filter="url(#${shadowId})"/>
      <path fill="white" d="${iconPath}" transform="translate(12,12) scale(0.4) translate(-12,-12)" opacity="0.95"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export default function MapClient({
  cooperatives,
  className,
  hideSpotlight = false,
}: MapClientProps) {
  const activeCooperativeId = useCooperativeStore((state) => state.activeCooperativeId);
  const setActiveCooperativeId = useCooperativeStore((state) => state.setActiveCooperativeId);
  const validCooperatives = useMemo(
    () => cooperatives.filter((cooperative) => hasValidLatLng(cooperative)),
    [cooperatives],
  );

  useEffect(() => {
    if (validCooperatives.length === 0) {
      setActiveCooperativeId(null);
      return;
    }

    if (!activeCooperativeId) {
      setActiveCooperativeId(validCooperatives[0].id);
      return;
    }

    const stillVisible = validCooperatives.some(
      (cooperative) => cooperative.id === activeCooperativeId,
    );
    if (!stillVisible) {
      setActiveCooperativeId(validCooperatives[0].id);
    }
  }, [activeCooperativeId, validCooperatives, setActiveCooperativeId]);

  const activeCooperative =
    validCooperatives.find((cooperative) => cooperative.id === activeCooperativeId) ?? null;
  const spotlightCooperative = activeCooperative ?? validCooperatives[0] ?? null;
  const [productsCooperative, setProductsCooperative] = useState<Cooperative | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const [hasValidSize, setHasValidSize] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const checkSize = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setHasValidSize(true);
      } else {
        setHasValidSize(false);
      }
    };

    checkSize();
    const ro = new ResizeObserver(checkSize);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative size-full min-h-0 overflow-hidden rounded-2xl border border-white/40 bg-white/70 shadow-lg backdrop-blur-md ${
        className ?? ''
      }`}
      style={{ minHeight: 200 }}
    >
      {hasValidSize ? (
      <MapContainer
        center={[31.7917, -4.937]}
        zoom={8}
        scrollWheelZoom
        className="h-full w-full !min-h-[200px]"
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <MapResizeHandler />
        <MapFocusController target={activeCooperative} />

        {validCooperatives.map((cooperative) => {
          const isActive = cooperative.id === activeCooperativeId;
          const markerIcon = L.icon({
            iconUrl: createMarkerSvg(cooperative.category, isActive),
            iconSize: isActive ? [44, 44] : [40, 40],
            iconAnchor: [22, 22],
            popupAnchor: [0, -22],
          });

          return (
            <Marker
              key={cooperative.id}
              position={[cooperative.location.lat, cooperative.location.lng]}
              icon={markerIcon}
              zIndexOffset={isActive ? 1000 : 0}
              eventHandlers={{
                click: () => setActiveCooperativeId(cooperative.id),
              }}
            >
              <Popup className="!rounded-xl">
                <div className="min-w-[260px] max-w-[300px] space-y-3">
                  <div className="relative h-32 overflow-hidden rounded-lg">
                    <Image
                      src={cooperative.coverImage}
                      alt={cooperative.coverAlt}
                      fill
                      sizes="300px"
                      className="object-cover"
                      unoptimized={cooperative.coverImage.startsWith('/')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-semibold uppercase tracking-wider text-white drop-shadow">
                      {cooperative.zone} • {cooperative.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-palmier">{cooperative.name}</h3>
                  <p className="line-clamp-2 text-xs text-palmier/80">{cooperative.descriptionShort}</p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 text-xs text-palmier/70">
                      <Package size={12} />
                      {cooperative.products.length} produits
                    </span>
                    <Link
                      href={`/cooperative/${cooperative.slug}`}
                      className="inline-flex items-center gap-1 rounded-lg bg-terracotta/15 px-3 py-1.5 text-xs font-medium text-terracotta transition hover:bg-terracotta/25"
                    >
                      Voir le profil
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      ) : (
        <div className="flex h-full min-h-[200px] items-center justify-center text-palmier/70">
          Chargement de la carte...
        </div>
      )}

      <AnimatePresence>
        {hasValidSize && spotlightCooperative && !hideSpotlight ? (
          <motion.div
            key={spotlightCooperative.id}
            initial={{ opacity: 0, x: -12, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -12, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="pointer-events-auto absolute bottom-3 left-3 z-[500] w-[240px] overflow-hidden rounded-xl border-2 border-terracotta/40 bg-white/95 shadow-xl ring-2 ring-terracotta/20 backdrop-blur-md sm:left-4 sm:bottom-4 sm:w-[280px]"
          >
            <div className="flex">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden sm:h-28 sm:w-28">
                <Image
                  src={spotlightCooperative.coverImage}
                  alt={spotlightCooperative.coverAlt}
                  fill
                  sizes="112px"
                  className="object-cover"
                  unoptimized={spotlightCooperative.coverImage.startsWith('/')}
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center p-2.5">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-terracotta sm:text-[10px]">
                  {spotlightCooperative.zone} • {spotlightCooperative.category}
                </span>
                <h3 className="mt-0.5 line-clamp-2 text-xs font-semibold text-palmier sm:text-sm">
                  {spotlightCooperative.name}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setProductsCooperative(spotlightCooperative);
                    }}
                    className="inline-flex items-center gap-0.5 rounded-md bg-palmier/15 px-1.5 py-1 text-[10px] font-medium text-palmier transition hover:bg-palmier/25"
                  >
                    <Package size={10} />
                    Produits
                  </button>
                  <Link
                    href={`/cooperative/${spotlightCooperative.slug}`}
                    className="inline-flex items-center gap-0.5 rounded-md bg-terracotta/15 px-1.5 py-1 text-[10px] font-medium text-terracotta transition hover:bg-terracotta/25"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Profil
                    <ArrowUpRight size={10} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ProductsPopup
        cooperative={productsCooperative}
        onClose={() => setProductsCooperative(null)}
      />
    </div>
  );
}
