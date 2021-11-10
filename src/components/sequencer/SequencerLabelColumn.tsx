import React from 'react';
import SequencerTile from './SequencerTile';
import styles from './sequencer.module.css';
import { Paragraph } from '@theme-ui/components';

interface Props {
  notes: string[];
}

const SequencerColumn = ({ notes }: Props) => {
  return (
    <>
      <div className={styles.column}>
        {notes.map((note) => (
          <Paragraph key={note} className={styles.label}>
            {note}
          </Paragraph>
        ))}
      </div>
    </>
  );
};

export default SequencerColumn;
