import React from 'react';
import { Scale } from 'theory.js';
import SequencerColumn from './SequencerColumn';
import styles from './sequencer.module.css';
import SequencerLabelColumn from './SequencerLabelColumn';

interface Props {
  beats: number;
  scale: Scale;
  measure: number;
}

const SequencerMeasure = ({ beats, scale, measure }: Props) => {
  const beatNumbers = Array(beats)
    .fill(1)
    .map((v, i) => v + i);

  const notes = scale.getStringArray().reverse();

  return (
    <div className={styles.measure}>
      {measure === 1 && <SequencerLabelColumn notes={notes} />}
      {beatNumbers.map((number) => (
        <SequencerColumn key={number} notes={notes} />
      ))}
    </div>
  );
};

export default SequencerMeasure;
