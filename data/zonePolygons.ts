/**
 * Approximate polygon boundaries for zones in Drâa-Tafilalet, Morocco.
 * Based on province boundaries - coordinates in [lat, lng] for Leaflet.
 */

export type ZonePolygon = {
  zone: string;
  positions: [number, number][];
  color: string;
  fillOpacity: number;
};

export const zonePolygons: ZonePolygon[] = [];
