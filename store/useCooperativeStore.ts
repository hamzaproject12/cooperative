'use client';

import { create } from 'zustand';

type CooperativeStore = {
  activeCooperativeId: string | null;
  setActiveCooperativeId: (id: string | null) => void;
};

export const useCooperativeStore = create<CooperativeStore>((set) => ({
  activeCooperativeId: null,
  setActiveCooperativeId: (id) => set({ activeCooperativeId: id }),
}));
