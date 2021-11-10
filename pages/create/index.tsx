import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../src/components/layout/Layout';

const CreatePage: NextPage = () => {
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
      <Layout></Layout>
    </>
  );
};

export default CreatePage;
