import { create } from 'zustand';

export const useCountryStore = create((set) => ({
	inViewCountry: 0,
	setInViewCountry: (country) => set({ inViewCountry: country }),
}));
