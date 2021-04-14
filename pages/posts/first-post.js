import Link from 'next/link';
import Head from 'next/head';

import Layout from '../../components/Layout';

export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title>My first post</title>
    </Head>

      <h2>My first next.js post</h2>

      <Link href='/'>
        <a>Home</a>
      </Link>
    </Layout>
  );
};
