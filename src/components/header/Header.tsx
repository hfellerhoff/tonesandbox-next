import Link from 'next/link';
import React from 'react';
import { MIDIMessage } from '../../store/midi';
import MIDI from '../midi';
import styles from './header.module.css';

interface Props {}

const Header = ({}: Props) => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <h1>ToneSandbox</h1>
        </a>
      </Link>
      <MIDI />
    </header>
  );
};

export default Header;
