import React from 'react';
import { Note } from 'theory.js';
import { PianoStyle } from '.';
import { useKeyboard } from '../../store/keyboard';
import { useMIDI } from '../../store/midi';
import styles from './piano.module.css';

interface Props {
  note: string;
  octave: number;
  style: PianoStyle;
  activeNotes: Record<string, boolean>;
}

const PianoKey = ({ note, octave, style, activeNotes }: Props) => {
  const broadcast = useMIDI((state) => state.broadcast);
  const isMouseDown = useKeyboard((state) => state.mousePrimary);

  const name = note + octave;

  const isAccidental = note.includes('#') || note.includes('b');

  const width = isAccidental ? style.width / 2 : style.width;
  const height = isAccidental ? style.height / 1.5 : style.height;

  const offset = isAccidental
    ? note === 'C#'
      ? 1
      : note === 'D#'
      ? 2
      : note === 'F#'
      ? 4
      : note === 'G#'
      ? 5
      : 6
    : 0;
  const left = offset * style.width - width / 2;

  const isActive = activeNotes[name];

  const playNote = (note: string) => {
    broadcast([144, new Note(note).midi, 100]);
  };
  const stopNote = (note: string) => {
    broadcast([128, new Note(note).midi, 100]);
  };

  return (
    <div
      className={`${styles.key} ${
        styles[isAccidental ? 'key--black' : 'key--white']
      } ${isActive && styles['key--pressed']}`}
      style={{
        left: `${left}rem`,
        width: `${width}rem`,
        height: `${height}rem`,
      }}
      onMouseDown={() => playNote(name)}
      onMouseUp={() => stopNote(name)}
      onMouseEnter={() => isMouseDown && playNote(name)}
      onMouseLeave={() => stopNote(name)}
      onFocus={() => playNote(name)}
    >
      {name}
    </div>
  );
};

export default PianoKey;
