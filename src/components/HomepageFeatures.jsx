import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';
import Highlight from "../../util/styling"

const FeatureList = [
  {
    title: <Translate>ASEAN BuildTheEarth</Translate>,
    description: (
      <>
      <Highlight color="#C03A3A">TODO: PLEASE WRITE LONG TEAM INTRODUCTION HERE</Highlight>
        <br/>
        <Translate>Trial builder program allows visitors to build on the ASEAN server before becoming a builder in one of the build teams. Visitors can use their buildings that they have built in the trial area as an application submission for build teams on the BTE website.</Translate>
        <br/>
        <Translate>
          There are some easy houses for beginner in Singapore. They all have decent 3D models.
          Just contact a Leader, Co-Leader or an Admin if you want to be a trial builder, after that, do
        </Translate>
        <hr/> 
      </>
    ),
  },
  {
    title: <Translate>How to join ASEAN BTE</Translate>,
    description: (
      <>
        <strong><Translate>Get started as a new builder</Translate>:</strong>
        <div>
          <br/>
          <strong>1.</strong> <Translate>Join the server ip</Translate>.<br/><br/>
          <strong>2.</strong> <Translate>If you are a builder, please join our server with the BTE modpack.</Translate> <br/><br/>
          <strong>3.</strong> <Translate>We will give you Builder role in the server then you can build</Translate>!. <br/>
        </div>
        
        <hr/>
        <div>
          <div className={styles.ip_div}>
            <table className={styles.ip_box}><tbody><tr><td>
              <div align="Left"><i><b><Translate>Server ip</Translate></b></i></div>
              <sub><CodeBlock className="language-js" title="java">
              139.99.91.188:25569
              </CodeBlock>
              <CodeBlock className="language-js" title="bedrock">
              IP: 139.99.91.188 
              PORT: 19132
              </CodeBlock></sub>
            </td></tr></tbody></table>
          </div>
          <table className={styles.req_box}><tbody><tr><td>
              <div align="Left"><i><b><sub><Translate>Requirements</Translate></sub></b></i></div>
              <li  align="Left"><Translate>Minecraft</Translate>: <a href="https://www.minecraft.net/en-us/store/minecraft-java-edition"><Translate>Java Edition</Translate></a> / <a href="https://minecraft.fandom.com/wiki/Bedrock_Edition"><Translate>Bedrock Edition</Translate></a><br/></li>
              <div align="Left"><i><b><sub>Disclaimer</sub></b></i></div>
              <li  align="Left"><Highlight color="#C03A3A" textColor="#FEF6E8"><Translate>Cracked Minecraft</Translate></Highlight> <Translate>is not allowed</Translate><br/></li>
          </td></tr></tbody></table>

        </div>
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


