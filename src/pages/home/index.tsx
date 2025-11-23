import React from 'react';
import { Redirect } from '@docusaurus/router';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/* supports for `@site/home` index. But, will redirect to `@site/` for the actual page */
export default function ToHomepage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return <>
    <Head>
      <meta title="ASEAN BTE" />
      <meta property="og:title" content="ASEAN BTE" />
      <meta name="theme-color" content="#ffc561" />
      <meta data-rh="true" property="og:image" content={`${siteConfig.url}/media/icons/aseanbte_full_logo.jpg`} />
      <meta name="twitter:card" content="summary_large_image" data-rh="true" />
      <meta data-rh="true" name="twitter:image" content={`${siteConfig.url}/media/icons/aseanbte_full_logo.jpg`} />
      <meta property="og:description" content={siteConfig.tagline} />
      <meta property="description" content={siteConfig.tagline} />
      <meta property="og:url" content={siteConfig.url} />
      <link rel="canonical" href={siteConfig.url} />
    </Head>
    <Redirect to="/" />
  </>
}
