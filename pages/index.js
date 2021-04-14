import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';

import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I build stuff with code.</p>
        <p>
          Here you'll find some blogs. This site was built following {' '}
          <a href="https://nextjs.org/learn">the official Next.js guide</a>.
        </p>
      </section>
    </Layout>
  );
}
