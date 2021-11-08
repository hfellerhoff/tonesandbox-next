import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Header from '../../src/components/header/Header';
import CenteredLayout from '../../src/components/layout/CenteredLayout';
import Piano from '../../src/components/piano';
import useHandlePlayback from '../../src/hooks/useHandlePlayback';
import styles from './index.module.css';

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
        <Piano activeNotes={activeNotes} />
      </CenteredLayout>
    </div>
  );
};

export default Home;
