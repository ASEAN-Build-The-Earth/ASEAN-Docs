import React from 'react';
import clsx from 'clsx';
import styles from './PageContainer.module.css';
import { useColorMode } from '@docusaurus/theme-common';

import DarkBanner from "@site/static/img/background/supportpage_banner_dark.png";
import LightBanner from "@site/static/img/background/supportpage_banner_light.png";

export default function PageContainer({children}) {
    const { isDarkTheme } = useColorMode();

    return ( 
        <div className={clsx('hero hero--info', styles.hero_banner)}> 
            {   isDarkTheme ?
                <img src={DarkBanner} className={styles.banner_img} alt="[Error]: Could not load website banner.dark"/> :
                <img src={LightBanner} className={styles.banner_img}alt="[Error]: Could not load website banner.light"/>
            }
            <div className={styles.contents_container}>
                <div class="row row--no-gutters">
                    {children}
                </div>          
            </div>
        </div>
    );
}