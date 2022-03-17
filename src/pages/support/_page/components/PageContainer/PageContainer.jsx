import React  from 'react';
import clsx from 'clsx';
import styles from './PageContainer.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import { useImage } from 'react-image'

import DarkBanner from "@site/static/img/background/supportpage_banner_dark.png";
import LightBanner from "@site/static/img/background/supportpage_banner_light.png";

const DecayBanner = () => <div className={clsx(styles.banner_container, styles.banner_loader)} />;

function BannerRanderer() {
    const { isDarkTheme } = useColorMode();
    const { src, error, isLoading } = useImage({
      srcList: isDarkTheme? DarkBanner : LightBanner,
      useSuspense: false
    })

    return isLoading || error? <DecayBanner />
      : <div className={styles.banner_container}>
            <img src={src} className={styles.banner_img} />
        </div>
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