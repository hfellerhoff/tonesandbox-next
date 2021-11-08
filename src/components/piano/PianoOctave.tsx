import React from 'react';
import { PianoStyle } from '.';
import styles from './piano.module.css';
import PianoKey from './PianoKey';

interface Props {
  octave: number;
  style: PianoStyle;
  activeNotes: Record<string, boolean>;
}

const C1 = 24;
const PianoOctave = ({ octave, style, activeNotes }: Props) => {
  return (
    <>
      <div className={styles.octave}>
        <PianoKey
          note='C'
          octave={octave}
          style={style}
          activeNotes={activeNotes}
        />
        <PianoKey
          note='C#'
          octave={octave}
          style={style}
          activeNotes={activeNotes}
        />
        <PianoKey
          note='D'
          octave={octave}
          style={style}
          activeNotes={activeNotes}
        />
        <PianoKey
          note='D#'
          octave={octave}
          style={style}
          activeNotes={activeNotes}
        />
        <PianoKey
          note='E'
          octave={octave}
          style={style}
          activeNotes={activeNotes}
        />
        <PianoKey
          note='F'
          octave={octave}
          style={style}
          activeNotes={activeNotes}
        />
        <PianoKey
          note='F#'
          octave={octave}
          style={style}
          activeNotes={activeNotes}
        />
        <PianoKey
          note='G'
          octave={octave}
          style={style}
          activeNotes={activeNotes}
        />
        <PianoKey
          note='G#'
          octave={octave}
          style={style}
          activeNotes={activeNotes}
        />
        <PianoKey
          note='A'
          octave={octave}
          style={style}
          activeNotes={activeNotes}
        />
        <PianoKey
          note='A#'
          octave={octave}
          style={style}
          activeNotes={activeNotes}
        />
        <PianoKey
          note='B'
          octave={octave}
          style={style}
          activeNotes={activeNotes}
        />
      </div>
    </>
  );
};

export default PianoOctave;
