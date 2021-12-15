import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'How to join ASEAN BTE',
    description: (
      <>
        <strong>Apply for ASEAN builder:</strong>
        <div>
          <strong>1.</strong> Go to <a href="https://buildtheearth.net/bte-asean"><code>https://buildtheearth.net/bte-asean</code></a>, answer the application questions, then we will review it. <br />
          <strong>2.</strong> If you are a builder, please join our server with the BTE modpack. <br />
          <strong>3.</strong> We will give you Builder role in the server then you can build!. <br />
          <p>Server IP: <code>asean.my.to</code></p>
        </div>
      </>
    ),
  },
  {
    title: 'Trial Builder Program ',
    description: (
      <>
        Trial builder program allows visitors to build on the ASEAN server before becoming a builder in one of the build teams. Visitors can use their buildings that they have built in the trial area as an application submission for build teams on the BTE website.
        <br />
        - There are some easy houses for beginner in Singapore. They all have decent 3D models.
        Just contact a Leader, Co-Leader or an Admin if you want to be a trial builder, after that, do <code>/warp trial</code> in the server to be there. Outlines are all ready for you. <br />
        - Location: <code>1.302362, 103.886411</code> (search this on google map). <br />
        - Official builders can also build in this trial area.
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
