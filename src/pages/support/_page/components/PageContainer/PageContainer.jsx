import React  from 'react';
import clsx from 'clsx';
import styles from './PageContainer.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import { useImage } from 'react-image'

import DarkBanner from "@site/static/img/background/supportpage_banner_dark.png";
import CompressedDarkBanner from "@site/static/img/background/supportpage_banner_dark.min.png";
import LightBanner from "@site/static/img/background/supportpage_banner_light.png";
import CompressedLightBanner from "@site/static/img/background/supportpage_banner_light.min.png";

const DecayBanner = () => {
    const darkBanner = useImage({ srcList: CompressedDarkBanner, useSuspense: false })
    const lightBanner = useImage({ srcList: CompressedLightBanner, useSuspense: false })
    const { isDarkTheme } = useColorMode();

    return ( 
        isDarkTheme ? (
            darkBanner.error !== null? <div className={clsx(styles.banner_container, styles.banner_loader)}/> 
            : darkBanner.isLoading?  <div className={clsx(styles.banner_container, styles.banner_loader)}/>
            : <div className={clsx(styles.banner_container, styles.banner_loader)} style={{backgroundImage:`url(${darkBanner.src})`}}/>
        ) : (
            lightBanner.error !== null? <div className={clsx(styles.banner_container, styles.banner_loader)}/> 
            : lightBanner.isLoading?  <div className={clsx(styles.banner_container, styles.banner_loader)}/>
            : <div className={clsx(styles.banner_container, styles.banner_loader)} style={{backgroundImage:`url(${lightBanner.src})`}}/>
        )
    );
  } 

function BannerRanderer() {
    const darkBanner = useImage({ srcList: DarkBanner, useSuspense: false })
    const lightBanner = useImage({ srcList: LightBanner, useSuspense: false })
    const { isDarkTheme } = useColorMode();

    return (
        isDarkTheme ? (
            darkBanner.error? <DecayBanner /> : darkBanner.isLoading? <DecayBanner />
            : <div className={styles.banner_container}>
                <img src={darkBanner.src} className={styles.banner_img} alt="support.banner.dark" />
            </div>
        ) : (
            lightBanner.error? <DecayBanner /> : lightBanner.isLoading? <DecayBanner />
            : <div className={styles.banner_container}>
                <img src={lightBanner.src} className={styles.banner_img} alt="support.banner.light" />
            </div>
        )
    )
}

export default function PageContainer({children}) 
{
    return ( 
        <div className={clsx('hero hero--info', styles.hero_banner)}> 
            <BannerRanderer/>
            <div className={styles.contents_container}>
                <div class="row row--no-gutters">
                    {children}
                </div>          
            </div>
        </div>
    );
}