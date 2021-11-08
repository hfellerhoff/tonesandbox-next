import React from 'react';
import SequencerTile from './SequencerTile';
import styles from './sequencer.module.css';

interface Props {
  notes: string[];
}

const SequencerColumn = ({ notes }: Props) => {
  return (
    <>
      <div className={styles.column}>
        {notes.map((note) => (
          <span key={note} className={styles.label}>
            {note}
          </span>
        ))}
      </div>
    </>
  );
};

export default SequencerColumn;
