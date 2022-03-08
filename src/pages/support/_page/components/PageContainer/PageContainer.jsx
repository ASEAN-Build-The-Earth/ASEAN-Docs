import React from 'react';
import clsx from 'clsx';
import styles from './PageContainer.module.css';
import Image from '@theme/IdealImage';
import { useColorMode } from '@docusaurus/theme-common';

import DarkBanner from "@site/static/img/background/supportpage_banner_dark.png";
import LightBanner from "@site/static/img/background/supportpage_banner_light.png";

export default function PageContainer({children}) {
    const { isDarkTheme } = useColorMode();

    return ( 
        <div className={clsx('hero hero--info', styles.hero_banner)}> 
            {   isDarkTheme ?
                <Image img={DarkBanner} className={styles.banner_img} alt="[Error]: Could not load website banner.dark"/> :
                <Image img={LightBanner} className={styles.banner_img}alt="[Error]: Could not load website banner.light"/>
            }
            <div className={styles.contents_container}>
                <div class="row row--no-gutters">
                    {children}
                </div>          
            </div>
        </div>
    );
}