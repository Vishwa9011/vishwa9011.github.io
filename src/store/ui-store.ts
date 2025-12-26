import { create } from 'zustand';

type UiState = {
    isMobile: boolean | null;
    setIsMobile: (value: boolean) => void;
};

export const useUiStore = create<UiState>(set => ({
    isMobile: null,
    setIsMobile: value => set({ isMobile: value }),
}));
