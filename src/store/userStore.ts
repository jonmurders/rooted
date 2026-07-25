import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SavedLocation } from "@/types/location";

export interface SavedPlant {
  plantId: string;
  nickname?: string;
  addedAt: string;
}

interface UserProfileState {
  location: SavedLocation | null;
  savedPlants: SavedPlant[];
  setLocation: (location: SavedLocation | null) => void;
  addPlant: (plantId: string, nickname?: string) => void;
  removePlant: (plantId: string) => void;
  hasPlant: (plantId: string) => boolean;
  exportProfile: () => string;
  importProfile: (json: string) => void;
  clearProfile: () => void;
}

const STORAGE_KEY = "rooted-profile";

/**
 * All user data (location + saved plants) lives in the browser via
 * localStorage — there is no account or server. This keeps the app fully
 * static and free to host. Users can export/import their profile as JSON
 * to move between browsers or devices.
 */
export const useUserStore = create<UserProfileState>()(
  persist(
    (set, get) => ({
      location: null,
      savedPlants: [],

      setLocation: (location) => set({ location }),

      addPlant: (plantId, nickname) =>
        set((state) => {
          if (state.savedPlants.some((p) => p.plantId === plantId)) {
            return state;
          }
          return {
            savedPlants: [
              ...state.savedPlants,
              { plantId, nickname, addedAt: new Date().toISOString() },
            ],
          };
        }),

      removePlant: (plantId) =>
        set((state) => ({
          savedPlants: state.savedPlants.filter((p) => p.plantId !== plantId),
        })),

      hasPlant: (plantId) =>
        get().savedPlants.some((p) => p.plantId === plantId),

      exportProfile: () =>
        JSON.stringify(
          { location: get().location, savedPlants: get().savedPlants },
          null,
          2,
        ),

      importProfile: (json) => {
        const parsed = JSON.parse(json) as {
          location: SavedLocation | null;
          savedPlants: SavedPlant[];
        };
        set({
          location: parsed.location ?? null,
          savedPlants: parsed.savedPlants ?? [],
        });
      },

      clearProfile: () => set({ location: null, savedPlants: [] }),
    }),
    { name: STORAGE_KEY },
  ),
);
