import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';

const author = 'Manuel Zapata';
export const siteTitle = 'Manuel\'s Website';

interface Props {
  home?: boolean;
}

const Layout: React.FC<Props> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta 
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta 
          name='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image 
              priority
              src='/images/profile.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={author}
            />
            <h1 className={utilStyles.heading2Xl}>{author}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={author}
                />
              </a>
            </Link>
             <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{author}</a>
              </Link>
            </h2>
          </>
        )
      }
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
