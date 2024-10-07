import { create } from 'zustand';

export const useObituarieStore = create((set, get) => ({
  selectedObituarie: null,
  setObituarie: ({ obituarie }) => set({ selectedObituarie: obituarie }),
  deleteObituarie: () => set({ selectedObituarie: null }),
}));
