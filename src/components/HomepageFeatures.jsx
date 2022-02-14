import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';

// https://github.com/yocontra/react-responsive
import { useMediaQuery } from 'react-responsive'

// <Highlight color="#C03A3A"></Highlight>
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

/* responsible thing */
const WideDesktop = ({ children }) => {
  const isDesktop = useMediaQuery({minWidth: 1440 })
  return isDesktop ? children : null
}
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({minWidth: 997, maxWidth: 1439 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 996 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}


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
        { /* Hard-coded resonsive cus idk how to make it better way lmao */}
          <WideDesktop>
            <div>
              <table align="Left"><tbody><tr><td>
                <div align="Left"><i><b>Server ip</b></i></div>
                <sub><CodeBlock className="language-js" title="java">
                139.99.91.188:25569
                </CodeBlock>
                <CodeBlock className="language-js" title="bedrock">
                IP: 139.99.91.188 
                PORT: 19132
                </CodeBlock></sub>
              </td></tr></tbody></table>
            </div>
            <table align="Right"><tbody><tr><td>
                <div align="Left"><i><b><sub>Requirements</sub></b></i></div>
                <li  align="Left"><Translate>Minecraft</Translate>: <a href="https://www.minecraft.net/en-us/store/minecraft-java-edition"><Translate>Java Edition</Translate></a> / <a href="https://minecraft.fandom.com/wiki/Bedrock_Edition"><Translate>Bedrock Edition</Translate></a><br/></li>
                <div align="Left"><i><b><sub>Disclaimer</sub></b></i></div>
                <li  align="Left"><Highlight color="#C03A3A"><Translate>Cracked Minecraft</Translate></Highlight> <Translate>is not allowed</Translate><br/></li>
            </td></tr></tbody></table>
          </WideDesktop>
          
          <Desktop>
            <div className={styles.center}>
              <table><tbody><tr><td>
                <div align="Left"><i><b>Server ip</b></i></div>
                <sub><CodeBlock className="language-js" title="java">
                139.99.91.188:25569
                </CodeBlock>
                <CodeBlock className="language-js" title="bedrock">
                IP: 139.99.91.188 
                PORT: 19132
                </CodeBlock></sub>
              </td></tr></tbody></table>
            </div>
            <table className={styles.center}><tbody><tr><td>
                <div align="Left"><i><b><sub>Requirements</sub></b></i></div>
                <li  align="Left"><Translate>Minecraft</Translate>: <a href="https://www.minecraft.net/en-us/store/minecraft-java-edition"><Translate>Java Edition</Translate></a> / <a href="https://minecraft.fandom.com/wiki/Bedrock_Edition"><Translate>Bedrock Edition</Translate></a><br/></li>
                <div align="Left"><i><b><sub>Disclaimer</sub></b></i></div>
                <li  align="Left"><Highlight color="#C03A3A"><Translate>Cracked Minecraft</Translate></Highlight> <Translate>is not allowed</Translate><br/></li>
            </td></tr></tbody></table>
          </Desktop>

          <Tablet>
            <div>
              <table align="Left"><tbody><tr><td>
                <div align="Left"><i><b>Server ip</b></i></div>
                <sub><CodeBlock className="language-js" title="java">
                139.99.91.188:25569
                </CodeBlock>
                <CodeBlock className="language-js" title="bedrock">
                IP: 139.99.91.188 
                PORT: 19132
                </CodeBlock></sub>
              </td></tr></tbody></table>
            </div>
            <table align="Right"><tbody><tr><td>
                <div align="Left"><i><b><sub>Requirements</sub></b></i></div>
                <li  align="Left"><Translate>Minecraft</Translate>: <a href="https://www.minecraft.net/en-us/store/minecraft-java-edition"><Translate>Java Edition</Translate></a> / <a href="https://minecraft.fandom.com/wiki/Bedrock_Edition"><Translate>Bedrock Edition</Translate></a><br/></li>
                <div align="Left"><i><b><sub>Disclaimer</sub></b></i></div>
                <li  align="Left"><Highlight color="#C03A3A"><Translate>Cracked Minecraft</Translate></Highlight> <Translate>is not allowed</Translate><br/></li>
            </td></tr></tbody></table>
          </Tablet>

          <Mobile>
            <div className={styles.center}>
              <table><tbody><tr><td>
                <div align="Left"><i><b>Server ip</b></i></div>
                <sub><CodeBlock className="language-js" title="java">
                139.99.91.188:25569
                </CodeBlock>
                <CodeBlock className="language-js" title="bedrock">
                IP: 139.99.91.188 
                PORT: 19132
                </CodeBlock></sub>
              </td></tr></tbody></table>
            </div>
            <table className={styles.center}><tbody><tr><td>
                <div align="Left"><i><b><sub>Requirements</sub></b></i></div>
                <li  align="Left"><Translate>Minecraft</Translate>: <a href="https://www.minecraft.net/en-us/store/minecraft-java-edition"><Translate>Java Edition</Translate></a> / <a href="https://minecraft.fandom.com/wiki/Bedrock_Edition"><Translate>Bedrock Edition</Translate></a><br/></li>
                <div align="Left"><i><b><sub>Disclaimer</sub></b></i></div>
                <li  align="Left"><Highlight color="#C03A3A"><Translate>Cracked Minecraft</Translate></Highlight> <Translate>is not allowed</Translate><br/></li>
            </td></tr></tbody></table>
          </Mobile>
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


