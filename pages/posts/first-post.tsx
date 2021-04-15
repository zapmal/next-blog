import Link from 'next/link';
import Head from 'next/head';

import Layout from '../../components/Layout';

const FirstPost = () => {
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

export default FirstPost;
