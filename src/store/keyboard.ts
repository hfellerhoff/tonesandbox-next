import create from 'zustand';

type Keyboard = {
  mousePrimary: boolean;
};

export const useKeyboard = create((set) => ({
  mousePrimary: false,
  update: (fields: Partial<Keyboard>) =>
    set((state) => ({ ...state, ...fields })),
}));
