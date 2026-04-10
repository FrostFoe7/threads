import { create } from "zustand";

interface ReelState {
  isMuted: boolean;
  toggleMute: () => void;
  setMuted: (muted: boolean) => void;
  activeReelId: string | null;
  setActiveReelId: (id: string | null) => void;
}

export const useReelStore = create<ReelState>((set) => ({
  isMuted: true, // Default to muted
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
  setMuted: (muted: boolean) => set({ isMuted: muted }),
  activeReelId: null,
  setActiveReelId: (id: string | null) => set({ activeReelId: id }),
}));
