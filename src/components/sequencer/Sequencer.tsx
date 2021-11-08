import React from 'react';
import { Note, Scale } from 'theory.js';
import styles from './sequencer.module.css';
import SequencerMeasure from './SequencerMeasure';

interface Props {}

const Sequencer = (props: Props) => {
  const measures = 8;
  const measureNumbers = Array(measures)
    .fill(1)
    .map((v, i) => v + i);

  const scale = new Scale(new Note('C4'), Scale.Major);

  return (
    <div className={styles.sequencer}>
      {measureNumbers.map((measure) => (
        <SequencerMeasure
          measure={measure}
          key={measure}
          beats={4}
          scale={scale}
        />
      ))}
    </div>
  );
};

export default Sequencer;
