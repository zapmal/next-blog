import React from 'react';
import Head from 'next/head';

import Layout from '../../components/Layout';
import Date from '../../components/Date';

import { getAllPostsIds, getPostData, PostType } from '../../utils/posts';
import utilStyles from '../../styles/utils.module.css';

interface Props {
  postData: PostType & {
    contentHtml: string;
  };
};

type Params = {
  params: { 
    id: string;
  },
};

const Post: React.FC<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date!} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostsIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default Post;
