import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import PianoOctave from './PianoOctave';
import styles from './piano.module.css';
import { useInstruments } from '../../store/instruments';
import { MIDIMessage, useMIDI } from '../../store/midi';
import { Note, Scale } from 'theory.js';
import * as Tone from 'tone';

interface Props {
  activeNotes: Record<string, boolean>;
  style?: PianoStyle;
  noScroll?: boolean;
}

export type PianoStyle = {
  width: number;
  height: number;
  gap: number;
};

const octaves = Array(8)
  .fill(1)
  .map((v, i) => v + i);

const Piano = ({
  activeNotes,
  style = {
    width: 4,
    height: 20,
    gap: 0.5,
  },
  noScroll = false,
}: Props) => {
  const pianoRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (pianoRef.current && !noScroll) {
      pianoRef.current.scrollTo({ left: pianoRef.current.clientWidth / 2 });
    }
  }, [pianoRef, noScroll]);

  return (
    <>
      {/* @ts-ignore */}
      <div ref={pianoRef} className={styles.piano}>
        {octaves.map((octave) => (
          <PianoOctave
            key={octave}
            octave={octave}
            style={style}
            activeNotes={activeNotes}
          />
        ))}
      </div>
    </>
  );
};

export default Piano;
