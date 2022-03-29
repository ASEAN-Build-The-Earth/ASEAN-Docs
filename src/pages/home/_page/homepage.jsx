import React from 'react';
import clsx from 'clsx';
import styles from './homepage.module.css';
import { useImage } from 'react-image'
import { Img } from 'react-image'
import Translate from '@docusaurus/Translate';

import MarkdownBlock from "@site/src/components/MarkdownBlock";
import HeaderBanner from "@site/static/media/background/homepage_banner.png";
import CompressedHeaderBanner from "@site/static/media/background/homepage_banner.min.png";
import WEPB_GrassblockIcon from "@site/static/media/icons/minecraft/dancing_grassblock.webp";
import GIF_GrassblockIcon from "@site/static/media/icons/minecraft/dancing_grassblock.gif";

import ButtonHeader from "./components/HomepageButton";
import InfoBox from "./components/InfoBox";
import SocialMedias from "./components/SocialMedias";



const socialMediaContents = {
  facebook: {
      label: <Translate id="home.socialMedias.facebook" 
        description="label of facebook on homepage">
          Facebook
        </Translate>,
      link: "/"
  },
  twitter: {
      label: <Translate id="home.socialMedias.twitter" 
        description="label of twitter on homepage">
          Twitter
        </Translate>,
      link: "https://twitter.com/AseanBte"
  },
  instagram: {
      label: <Translate id="home.socialMedias.instagram" 
        description="label of instagram on homepage">
          Instagram
        </Translate>,
      link: "https://www.instagram.com/bte.asean/"
  },
  youtube: {
      label: <Translate id="home.socialMedias.youtube" 
        description="label of youtube on homepage">
          Youtube
        </Translate>,
      link: "https://www.youtube.com/c/ASEANBTE"
  },
}

const ContentList = [
  {
    title: <Translate id="home.label" description="Homepage ASEAN BTE label">ASEAN BuildTheEarth</Translate>,
    description: (
      <>
        <br/>
        <MarkdownBlock>
          <Translate id="home.description" description="ASEAN BTE long description at the homepage">
            We are The Association of Southeast Asian Nations Build the Earth. 
            We are part of the [Build the earth project](https://buildtheearth.net/) which aims to build the world 1:1 scale in Minecraft! 
            We currently oversee the progress of Brunei, Myanmar, 
            Cambodia, Timor-Leste, Indonesia, Laos, Malaysia, the Philippines, 
            Singapore, Thailand, and Vietnam.
          </Translate>
        </MarkdownBlock>
        <hr/>
        <SocialMedias contents={socialMediaContents} />
      </>
    ),
  },
  {
    title: <Img src={[WEPB_GrassblockIcon, GIF_GrassblockIcon]} alt="Our Server" id={styles.info_section_icon} width="50" height="45" />,
    description: <InfoBox />
  }
];

function Content({ title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <div>{description}</div>
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

const DecayBanner = () => {
  const { src, error, isLoading } = useImage({ srcList: CompressedHeaderBanner, useSuspense: false })
  return (
    error !== null? <div className={clsx(styles.banner_container, styles.banner_loader)}/> 
    : isLoading?  <div className={clsx(styles.banner_container, styles.banner_loader)}/>
    : <div className={clsx(styles.banner_container, styles.banner_loader)} style={{backgroundImage:`url(${src})`}}/>
  );
} 
function BannerRanderer() {
    const { src, error, isLoading } = useImage({ srcList: HeaderBanner, useSuspense: false })
    return error !== null? <DecayBanner /> : isLoading?  <DecayBanner />
      : <div className={styles.banner_container}>
            <img src={src} className={styles.banner_img} alt="homepage banner"/>
    </div>
}

function Header() {
  return (
    <header className={clsx('hero hero--info', styles.hero_banner)}>
      <BannerRanderer/>
      <div className={clsx("container", styles.header_container)}>
        {/*these title is based on {siteConfig.title & tagline} but exports raw to use Translate tag */}
        <h1 className={clsx('hero__title', styles.banner_title, styles.shadowed)}>     
          <Translate id="home.banner.title" description="A hero title of homepage document">
            ASEAN BTE
          </Translate>
        </h1>
        <p className={clsx("hero__subtitle", styles.banner_description, styles.shadowed)}>
          <Translate id="home.banner.subtitle" description="A hero description of homepage document">
            We are building Southeast Asia in Minecraft 1:1 scale!
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
