import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Homepage from './home/_page';

/**
 * This is the main file indexing `@site/home` and `@site/`
 * @returns Homepage Element as Docusaurus layout for website
 */
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home" // default title already prefixed "ASEAN BTE" so this will label "Home | ASEAN BTE" in meta tag
      description={siteConfig.tagline} // return "We are building southeast asia in minecraft scale 1:1!"
    >
      <Homepage.Header />
      <main>
        <Homepage.Contents />
      </main>
    </Layout>
  );
}
