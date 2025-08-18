import { create } from "zustand";

export const store_zustand = create(
    (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({count: 0}),
    })
);