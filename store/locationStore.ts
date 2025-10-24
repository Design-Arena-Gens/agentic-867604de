import { create } from 'zustand';

interface Location {
  lat: number;
  lng: number;
  name: string;
}

interface LocationStore {
  location: Location | null;
  setLocation: (location: Location) => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
  location: null,
  setLocation: (location) => set({ location }),
}));
