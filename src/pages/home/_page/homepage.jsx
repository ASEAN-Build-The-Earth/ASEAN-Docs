import React from 'react';
import clsx from 'clsx';
import styles from './homepage.module.css';

import Translate from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';
import Details from '@theme/Details'
import ButtonHeader from "./components/HomepageButton"

import text from "@site/src/components/TextDecoration"
import grassblock_icon from "@site/static/img/icons/dancing_grassblock.gif"


const ContentList = [
  {
    title: <Translate>ASEAN BuildTheEarth</Translate>,
    description: (
      <>
        <br/>
        <Translate>
          We are The Association of Southeast Asian Nations Build the Earth. 
          We are part of the build the earth project which aims to build the world 1:1 scale in Minecraft! 
          We currently oversee the progress of Brunei, Myanmar, 
          Cambodia, Timor-Leste, Indonesia, Laos, Malaysia, the Philippines, 
          Singapore, Thailand, and Vietnam.
        </Translate>
        <br/>
        <hr/> 
      </>
    ),
  },
  {
    title: <><img src={grassblock_icon} alt="Our Server" style={{ filter: "drop-shadow(1px 1px 1px #222)"}} /></>,
    description: (
      <>
        {/* Server IP and Requirement box */}
        <div className={styles.container}>
          <div className={styles.ip_div}>
            <table className={styles.ip_box} ><td id={styles.box_styles}>
              <div align="Left"><i><b><Translate>Server ip</Translate></b></i></div>
              <sub><CodeBlock className="language-js" title="java">
                139.99.91.188:25569
              </CodeBlock>
              <CodeBlock className="language-js" title="bedrock">
                IP: 139.99.91.188 
                PORT: 19132
              </CodeBlock></sub>
            </td></table>
          </div>
          <div className={styles.req_div} >
            <table className={styles.req_box}><td id={styles.box_styles}>
              <div align="Left"><i><b><sub><Translate>Requirements</Translate></sub></b></i></div>
              <div align="Left">
                <Details summary={<summary><Translate>Minecraft</Translate></summary>}>
                  <sub style={{ lineHeight: 1}}>
                    <a href="https://www.minecraft.net/en-us/store/minecraft-java-edition">
                      <Translate descripton="a section of 'Java Edition and Bedrock Edition is supported'">
                        Java Edition
                      </Translate>
                    </a> <Translate descripton="a section of 'Java Edition and Bedrock Edition is supported'">
                        and
                      </Translate> <a href="https://minecraft.fandom.com/wiki/Bedrock_Edition">
                      <Translate descripton="section of 'Java Edition and Bedrock Edition is supported'">
                        Bedrock Edition
                      </Translate>
                    </a> <Translate descripton="section of 'Java Edition and Bedrock Edition is supported'">
                      is supported
                    </Translate>
                  </sub>
                </Details>
              </div>
              <div align="Left">
                <Admonition type="caution">
                  <sub>
                    <text.Hl color="#C03A3A" textColor="#FEF6E8">
                      <Translate descripton="section of 'Cracked Minecraft is not allowed'">
                        Cracked Minecraft
                      </Translate>
                    </text.Hl> <Translate descripton="section of 'Cracked Minecraft is not allowed'">is not allowed</Translate>
                  </sub>
                </Admonition>
              </div>
            </td></table>
          </div>  
        </div>
      </>
    ),
  }
];

function Content({ title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Contents() {
  return ( <>  
    <section className={styles.contents}>
    <div className="container">
        <div className="row" >
          {ContentList.map((props, idx) => (
            <Content key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  </>);
}

function Header() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/*this title is based on {siteConfig.title & tagline} but exports raw to use Translate tag */}
        <h1 className={clsx('hero__title', styles.title, styles.shadowed)}>     
          <Translate description="A hero title of homepage document">
            ASEAN BTE
          </Translate>
        </h1>
        <p className={clsx("hero__subtitle", styles.title, styles.shadowed)}>
          <Translate description="A hero description of homepage document">
            We are building southeast asia in Minecraft 1:1 scale!
          </Translate>
        </p>
        <div className={styles.intro_button}>
          <section className={clsx(styles.intro_button_contents)}>
          <div className="container">
            <div className={clsx("row", styles.reverse_row)} >
              <ButtonHeader />
            </div>
          </div>
        </section>
        </div>
        
      </div>
    </header>
  );
}

export default { Contents, Header }
