import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../src/components/header/Header';
import CenteredLayout from '../src/components/layout/CenteredLayout';
import useHandlePlayback from '../src/hooks/useHandlePlayback';
import styles from './index.module.css';
import Link from 'next/link';
import CardLink from '../src/components/a/CardLink';

const Home: NextPage = () => {
  const { activeNotes } = useHandlePlayback();

  return (
    <div>
      <Head>
        <title>ToneSandbox - Play, create, and experiment with music</title>
        <meta
          name='description'
          content='A browser-based music DAW and experimentation app.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <CenteredLayout>
        <div className={styles.hero}>
          <CardLink title='Play' href='/play'>
            Play the piano. Connect a MIDI keyboard or play with your mouse.
          </CardLink>
          <CardLink title='Sequencer (WIP)' href='/sequencer'>
            Create melodies and chords. Save your creation and export it to
            MIDI.
          </CardLink>
        </div>
      </CenteredLayout>
    </div>
  );
};

export default Home;
