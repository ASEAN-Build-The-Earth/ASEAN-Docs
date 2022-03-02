import React from 'react';
import clsx from 'clsx';
import styles from './Homepage.module.css';

import Translate, { translate } from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';
import Details from '@theme/Details'
import Image from '@theme/IdealImage';

import styling from "../../util/styling"
import book_icon from "../../static/img/icons/book_1.png"
import grassblock_icon from "../../static/img/icons/dancing_grassblock.gif"
import feather_icon from "../../static/img/icons/feather.png"

const FeatureList = [
  {
    title: <Translate>ASEAN BuildTheEarth</Translate>,
    description: (
      <>
      <styling.Highlight color="#C03A3A">TODO: PLEASE WRITE LONG TEAM INTRODUCTION HERE</styling.Highlight>
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
                      <a href="https://www.minecraft.net/en-us/store/minecraft-java-edition"><styling.Highlight textColor="#19BE88"><Translate>Java Edition</Translate></styling.Highlight></a> 
                      <Translate> and </Translate> 
                      <a href="https://minecraft.fandom.com/wiki/Bedrock_Edition"><styling.Highlight textColor="#19BE88"><Translate>Bedrock Edition</Translate></styling.Highlight></a>
                      <Translate> is supported</Translate>
                    </sub>
                  </Details>
                </div>
                <div align="Left">
                      <Admonition type="caution">
                        <sub>
                          <styling.Highlight color="#C03A3A" textColor="#FEF6E8"><Translate>Cracked Minecraft</Translate></styling.Highlight> <Translate>is not allowed</Translate>
                        </sub>
                      </Admonition>
                    </div>
            </td></table>
          </div>  
        </div>

        {/* Go To Doc Button */}
        <div className={styles.button_div}>
          <Link to="intro/get-started" className={clsx("button button--link", styles.button_container)}>
          <nav aria-label="breadcrumbs">
            <ul className={clsx("breadcrumbs breadcrumbs--lg", styles.breadcrumbs_cover)}>
              <li class="breadcrumbs__item">
                <a class="breadcrumbs__link" href="#url">
                  Starts Building     
                </a>
              </li>
              <Image img={book_icon} alt="book" id={styles.button_icon} />
            </ul>
          </nav>
          </Link> 
          <div className={styles.buttons_overlay}> 
            <div style={{opacity:"0.2", transform:"translateX(-50px)"} /* main div that cover arrow loop thing */}>
              <div className={clsx(styles.arrow_1)}>
                <svg width="220%" height="100%" style={{fill:"none", stroke:"var(--ifm-color-primary)", strokeWidth:"40"}}>
                  <polyline points="-150,-50 -45,55 -150,150 " />
                  <polyline points="-50,-50 55,55 -50,150 " />
                  <polyline points=" 50,-50 155,55 50,150 " />
                  <polyline points="150,-50 255,55 150,150" />
                  <polyline points="250,-50 355,55 250,150" />
                  <polyline points="350,-50 455,55 350,150" />
                  <polyline points="450,-50 555,55 450,150" />
                  <polyline points="550,-50 655,55 550,150" />
                  <polyline points="650,-50 755,55 650,150" />
                  <polyline points="750,-50 855,55 750,150" />
                  <polyline points="850,-50 955,55 850,150" />
                  <polyline points="950,-50 1055,55 950,150" />
                </svg>
              </div>
              <div className={clsx(styles.arrow_2, styles.arrow_1)}>
                <svg width="220%" height="100%" style={{fill:"none", stroke:"var(--ifm-color-primary)", strokeWidth:"40"}}>
                  <polyline points="-150,-50 -45,55 -150,150 " />
                  <polyline points=" 50,-50 155,55 50,150 " />
                  <polyline points="150,-50 255,55 150,150" />
                  <polyline points="250,-50 355,55 250,150" />
                  <polyline points="350,-50 455,55 350,150" />
                  <polyline points="450,-50 555,55 450,150" />
                  <polyline points="550,-50 655,55 550,150" />
                  <polyline points="650,-50 755,55 650,150" />
                  <polyline points="750,-50 855,55 750,150" />
                  <polyline points="850,-50 955,55 850,150" />
                  <polyline points="950,-50 1055,55 950,150" />
                </svg>
              </div>
            </div>
            <div className={styles.button_overlay_text}>
              <p><strong>Go To Document </strong></p>
              <div className={styles.button_overlay_icon}>
                <Image img={feather_icon} alt="↗" style={{width:"100%", position:"absolute"}} />
              </div>
            </div>    
          </div>
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


