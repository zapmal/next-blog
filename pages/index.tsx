import Head from 'next/head';
import React from 'react';
import Layout, { siteTitle } from '../components/Layout';

import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData, Post } from '../utils/posts';

interface Props {
  allPostsData: Post[];
};

const Home: React.FC<Props> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello there, I'm <strong>Manuel</strong> and I'm a Software Engineer.
          You can contact me on{' '}
          <a href='https://twitter.com/zapmal0' target='_blank'>Twitter</a>.
        </p>
        <p>
          Here you'll find some blogs. This site was built following{' '}
          <a href='https://nextjs.org/learn'>the official Next.js guide</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
