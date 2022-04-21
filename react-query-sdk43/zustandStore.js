import create from "zustand";

const changeNumber = (number) => ({
  page: {
    url: `https://swapi.dev/api/people/?page=${number}`,
    number: number,
    previous: null,
    next: null,
  },
});

export const useStore = create((set) => ({
  page: {
    url: `https://swapi.dev/api/people/?page=1`,
    number: 1,
    previous: null,
    next: null,
  },
  decreasePage: () => set((state) => changeNumber(state.page.number - 1)),
  increasePage: (amount) =>
    set((state) => changeNumber(state.page.number + amount)),
  resetPage: (state) => set({ page: { ...state.page, page: 1 } }),
  changeNextPrevious: (next, previous) =>
    set((state) => ({
      page: { ...state.page, next: next, previous: previous },
    })),
}));
