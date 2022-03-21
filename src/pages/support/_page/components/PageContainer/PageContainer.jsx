import React  from 'react';
import clsx from 'clsx';
import styles from './PageContainer.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import { useImage } from 'react-image'

import DarkBanner from "@site/static/img/background/supportpage_banner_dark.png";
import LightBanner from "@site/static/img/background/supportpage_banner_light.png";
import CompressedDarkBanner from "@site/static/img/background/supportpage_banner_dark.min.png";
import CompressedLightBanner from "@site/static/img/background/supportpage_banner_light.min.png";

const DarkDecayBanner = () => {
    const darkBanner = useImage({ srcList: CompressedDarkBanner, useSuspense: false });

    return (
        darkBanner.error !== null? <div className={clsx(styles.banner_container, styles.banner_loader)}/> 
        : darkBanner.isLoading?  <div className={clsx(styles.banner_container, styles.banner_loader)}/>
        : <div className={clsx(styles.banner_container, styles.banner_loader)} style={{backgroundImage:`url(${darkBanner.src})`}} />
    );
}
        
const LightDecayBanner = () => {
    const lightBanner = useImage({ srcList: CompressedLightBanner, useSuspense: false });

    return (
        lightBanner.error !== null? <div className={clsx(styles.banner_container, styles.banner_loader)}/> 
        : lightBanner.isLoading?  <div className={clsx(styles.banner_container, styles.banner_loader)}/>
        : <div className={clsx(styles.banner_container, styles.banner_loader)} style={{backgroundImage:`url(${lightBanner.src})`}}/>
    );
}

function BannerRandererDark() {
    const darkBanner = useImage({ srcList: DarkBanner, useSuspense: false });

    return (
        darkBanner.error? <DarkDecayBanner /> : darkBanner.isLoading? <DarkDecayBanner />
        : <div className={styles.banner_container}>
            <img src={darkBanner.src} className={styles.banner_img} alt="support.banner.dark" />
        </div>
    );
}

function BannerRandererLight() {
    const lightBanner = useImage({ srcList: LightBanner, useSuspense: false });

    return (
        lightBanner.error? <LightDecayBanner /> : lightBanner.isLoading? <LightDecayBanner />
        : <div className={styles.banner_container}>
            <img src={lightBanner.src} className={styles.banner_img} alt="support.banner.light" />
        </div>
    );
}

export default function PageContainer({children}) 
{
    const { isDarkTheme } = useColorMode();

    return ( 
        <div className={clsx('hero hero--info', styles.hero_banner)}> 
            { isDarkTheme? <BannerRandererDark /> : <BannerRandererLight /> }
            <div className={styles.contents_container}>
                <div class="row row--no-gutters">
                    {children}
                </div>          
            </div>
        </div>
    );
}