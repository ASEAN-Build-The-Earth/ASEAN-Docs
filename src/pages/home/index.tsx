import React from 'react';
import { Redirect } from '@docusaurus/router';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/* supports for `@site/home` index. But, will redirect to `@site/` for the actual page */
export default function ToHomepage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return <>
    <Head>
      <meta title="Home" />
      <meta property="og:title" content="ASEAN BTE" />
      <meta
        property="og:description"
        content={siteConfig.tagline}
      />
      <meta
        property="description"
        content={siteConfig.tagline}
      />
      <link rel="canonical" href="https://builders-doc.netlify.app" />
    </Head>
    <Redirect to="/" />
  </>
}