import create from 'zustand';

export type MIDIMessage = [instruction: number, note: number, velocity: number];

export const useMIDI = create((set) => ({
  messages: [] as MIDIMessage[],
  clear: () =>
    set((store) => ({
      ...store,
      messages: [],
    })),
  broadcast: (message: MIDIMessage) =>
    set((store) => ({
      ...store,
      messages: [...(store as any).messages, message],
    })),
}));
