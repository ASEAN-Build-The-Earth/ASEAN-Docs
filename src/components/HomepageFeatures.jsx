import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>How to join ASEAN BTE</Translate>,
    description: (
      <>
        <strong><Translate>Apply for ASEAN builder</Translate>:</strong>
        <div>
          <strong>1.</strong><Translate>Go to</Translate> <a href="https://buildtheearth.net/bte-asean"><code>https://buildtheearth.net/bte-asean</code></a>, <Translate>answer the application questions, then we will review it</Translate>.<br />
          <strong>2.</strong> <Translate>If you are a builder, please join our server with the BTE modpack.</Translate> <br />
          <strong>3.</strong> <Translate>We will give you Builder role in the server then you can build</Translate>!. <br />
          <p><Translate>Server IP</Translate>: <code>asean.my.to</code></p>
        </div>
      </>
    ),
  },
  {
    title: <Translate>Trial Builder Program</Translate>,
    description: (
      <>
        <Translate>Trial builder program allows visitors to build on the ASEAN server before becoming a builder in one of the build teams. Visitors can use their buildings that they have built in the trial area as an application submission for build teams on the BTE website.</Translate>
        <br />
        - <Translate>
          There are some easy houses for beginner in Singapore. They all have decent 3D models.
          Just contact a Leader, Co-Leader or an Admin if you want to be a trial builder, after that, do
        </Translate> <code>/warp trial</code> <Translate>in the server to be there. Outlines are all ready for you.</Translate> <br />
        - <Translate>Location</Translate>: <code>1.302362, 103.886411</code> <Translate>(search this on google map)</Translate>. <br />
        - <Translate>Official builders can also build in this trial area.</Translate>
      </>
    ),
  }
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
