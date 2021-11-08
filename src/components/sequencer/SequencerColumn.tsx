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
          <SequencerTile key={note} note={note} />
        ))}
      </div>
    </>
  );
};

export default SequencerColumn;
