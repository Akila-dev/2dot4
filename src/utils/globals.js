import { create } from 'zustand';

// eslint-disable-next-line no-unused-vars
export const useIntroStore = create((set) => ({
	showIntro: true,
	stopintro: () => set({ showIntro: false }),
}));
