import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useBoardStore = create(
  persist(
    (set) => ({
      data: [],
      addBoard: (newBoard) => set((state) => ({ data: [...state.data, newBoard] })),
      removeBoard: (id) => set((state) => ({ data: state.data.filter((item) => item.id !== id) })),
      updateBoard: (updatedBoard) =>
        set((state) => ({
          data: state.data.map((item) => (item.id === updatedBoard.id ? updatedBoard : item)),
        })),
    }),
    {
      name: 'board-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
