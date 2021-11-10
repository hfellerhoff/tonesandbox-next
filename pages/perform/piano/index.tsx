import { Box } from '@theme-ui/components';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Header from '../../../src/components/header/Header';
import CenteredLayout from '../../../src/components/layout/CenteredLayout';
import Layout from '../../../src/components/layout/Layout';
import Piano from '../../../src/components/piano';
import useHandlePlayback from '../../../src/hooks/useHandlePlayback';
import styles from './index.module.css';

const Home: NextPage = () => {
  const { activeNotes } = useHandlePlayback();

  return (
    <Layout>
      <Head>
        <title>ToneSandbox - Play, create, and experiment with music</title>
        <meta
          name='description'
          content='A browser-based music DAW and experimentation app.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box
        sx={{
          height: '100%',
        }}
      >
        <Piano activeNotes={activeNotes} />
      </Box>
    </Layout>
  );
};

export default Home;
