import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/Layout';
import Date from '../components/Date';

import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData, PostType } from '../utils/posts';

interface Props {
  allPostsData: PostType[];
};

const Home: React.FC<Props> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello there, my name's <strong>Manuel</strong> and I'm a Software Engineer.
          You can get in touch with me on{' '}
          <a href='https://twitter.com/zapmal0' target='_blank'>Twitter</a>.
        </p>
        <p>
          Want to read my blog posts? Scroll down.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date!} />
              </small>
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
