import create from 'zustand';
import * as Tone from 'tone';

interface Instrument {
  name: string;
  instrument: Tone.Sampler;
}

const createSampler = (
  baseUrl: string,
  notes: string[],
  startOctave: number,
  endOctave: number
): {
  urls: Record<string, string>;
  baseUrl: string;
} => {
  let pianoNotes: string[] = [];

  for (let o = startOctave; o <= endOctave; o++) {
    notes.forEach((note) => pianoNotes.push(`${note}${o}`));
  }

  return {
    urls: pianoNotes.reduce((acc, cur) => {
      acc[cur] = `${cur}.ogg`;
      return acc;
    }, {} as Record<string, string>),
    baseUrl,
  };
};

export const useInstruments = create((set) => ({
  list: [],
  selected: null as Instrument | null,
  initialize: () =>
    set((state) => {
      const instruments: Instrument[] = [
        {
          name: 'Piano',
          instrument: new Tone.Sampler({
            ...createSampler('/assets/instruments/piano/', ['C'], 2, 6),
            release: 1,
          }),
        },
      ];

      return {
        list: instruments,
        selected: instruments[0],
      };
    }),
}));
