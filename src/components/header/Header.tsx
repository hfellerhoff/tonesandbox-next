import React from 'react';
import { MIDIMessage } from '../../store/midi';
import MIDI from '../midi';
import styles from './header.module.css';

interface Props {}

const Header = ({}: Props) => {
  return (
    <header className={styles.header}>
      <h1>ToneSandbox</h1>
      <MIDI />
    </header>
  );
};

export default Header;
