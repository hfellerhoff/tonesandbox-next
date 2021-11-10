import Head from 'next/head';
import React from 'react';
import Header from '../../../src/components/header/Header';
import CenteredLayout from '../../../src/components/layout/CenteredLayout';
import Sequencer from '../../../src/components/sequencer/Sequencer';

interface Props {}

const SequencerPage = (props: Props) => {
  return (
    <div>
      <Head>
        <title>
          Sequencer - ToneSandbox - Play, create, and experiment with music
        </title>
        <meta
          name='description'
          content='Create chords and melodies with the ToneSandbox Sequencer. ToneSandbox is a browser-based music DAW and experimentation app.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <CenteredLayout>
        <Sequencer />
      </CenteredLayout>
    </div>
  );
};

export default SequencerPage;
