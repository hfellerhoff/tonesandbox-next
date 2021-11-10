import type { NextPage } from 'next';
import Head from 'next/head';
import { Heading } from '@theme-ui/components';
import Padding from '../src/components/layout/Padding';
import Layout from '../src/components/layout/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tone Sandbox - Play, create, and experiment with music</title>
        <meta
          name='description'
          content='A browser-based music DAW and experimentation app.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Padding
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        >
          <Heading
            sx={{
              fontSize: 6,
              lineHeight: 1.25,
              textAlign: 'right',
            }}
          >
            A home for music performance,
          </Heading>
          <Heading
            sx={{
              fontSize: 6,
              lineHeight: 1.25,
              textAlign: 'right',
            }}
          >
            creation, and experimentation
          </Heading>
        </Padding>
      </Layout>
    </>
  );
};

export default Home;
