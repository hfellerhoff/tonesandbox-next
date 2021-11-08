import React, { useState } from 'react';
import { useKeyboard } from '../../store/keyboard';
import styles from './sequencer.module.css';

interface Props {
  note: string;
}

const SequencerTile = ({ note }: Props) => {
  const isMouseDown = useKeyboard((state) => state.mousePrimary);
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onMouseEnter={() => isMouseDown && setIsActive((v) => !v)}
      onMouseDown={() => setIsActive((v) => !v)}
      className={`${styles.tile} ${isActive && styles['tile--active']}`}
    ></div>
  );
};

export default SequencerTile;
