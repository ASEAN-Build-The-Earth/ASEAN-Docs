import React from 'react';
import clsx from 'clsx';
import styles from './HomepageButton.module.css'

import Translate from '@docusaurus/Translate';;
import Link from '@docusaurus/Link';
import book_icon from "@site/static/img/icons/book_1.png"
import KofiIcon from "@site/static/img/icons/social-medias/kofi.svg"
import feather_icon from "@site/static/img/icons/feather.png"
import kofi_pixel_icon from "@site/static/img/icons/kofi_pixel_logo.png";

const Contents = {
    Support: {
        Label: <Translate id="home.bannerButton.support.label" 
            description="The big Start building button (please keep the text count very low to prevent newline)">
            Support Us
        </Translate>,
        OverlayLabel: <Translate id="home.bannerButton.support.labelOverlay" 
            description="The pop up message when you hover to the homepage Donate us button (please keep the text count for this low)">
            Donate on kofi
        </Translate>,
    },
    GetStarted: {
        Label: <Translate id="home.bannerButton.getStart.label" 
            description="The big Start building button (please keep the text count very low to prevent newline)">
            Get Started
        </Translate>,
        OverlayLabel: <Translate id="home.bannerButton.getStart.labelOverlay" 
            description="The pop up message when you hover to the homepage Start Building button (please keep the text count for this low)">
            Go To Document
        </Translate>,
    }
}

const ButtonContents = [
    {
        id : "donate_button",
        component: <>
            <div className={styles.button_div} id={styles.flip}>
                <div className={clsx("button button--link", styles.button_container)}>
                    <nav aria-label="breadcrumbs">
                        <ul className={clsx("breadcrumbs breadcrumbs--lg", styles.breadcrumbs_cover)}>
                            <li className="breadcrumbs__item">
                                <span className="breadcrumbs__link" id={styles.flip}>
                                    {Contents.Support.Label}
                                </span>
                            </li>
                            <li className={styles.icon_container}>
                                <KofiIcon id={styles.flip}/>
                            </li>
                        </ul>
                    </nav>
                </div> 
                <ButtonOverlay mirror="true" color="#FF5E5B" icon={<img src={kofi_pixel_icon} alt="↗" style={{width:"100%", position:"absolute", transform:"translateY(1rem)"}} />}>
                    <span className={styles.button_overlay_text_support} >
                        {Contents.Support.OverlayLabel}
                    </span>
                </ButtonOverlay>
                <Link to="/support" aria-label="Donate on kofi"
                    className={styles.link_redirector 
                    /*[Note]: the link that actually redirect to page is placed here 
                     * to prevent wierd prefetching html changes 
                     */}>
                </Link>
            </div>
        </>
    },
    {
        id : "get_started_button",
        component: <>
            <div className={styles.button_div}>
                <div className={clsx("button button--link", styles.button_container)}>
                    <nav aria-label="breadcrumbs">
                        <ul className={clsx("breadcrumbs breadcrumbs--lg", styles.breadcrumbs_cover)}>
                            <li className="breadcrumbs__item">
                                <span className="breadcrumbs__link">
                                    {Contents.GetStarted.Label}
                                </span>
                            </li>
                            <li className={styles.icon_container}>
                                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <circle id={styles.book_icon_background} cx="50" cy="50" r="50"/>
                                    <image href={book_icon} x="10%" y="10%" height="80%" width="80%" alt="get started ↗"/>
                                </svg>
                            </li>
                        </ul>
                    </nav>
                </div> 
                <ButtonOverlay icon={<img src={feather_icon} alt="↗" style={{width:"100%", position:"absolute"}} />}>
                    <span className={styles.button_overlay_text_getstart} >
                        {Contents.GetStarted.OverlayLabel}
                    </span>
                </ButtonOverlay>
                <Link to="/intro/get-started" className={styles.link_redirector} aria-label="Go To Document" />
            </div>
        </>
    }
]


function ButtonArrow ({color, transform}) {
    return <>
        <svg 
            width="300%" 
            height="100%" 
            style={{
                fill:"none", 
                stroke: ( typeof color === "string" ) ? color : "var(--ifm-color-primary)" , 
                strokeWidth:"40",
                transform: ( typeof transform === "string" ) ? `translateX(${transform})` : "translateX(0)",
            }}
        >   <polyline points="-150,-50 -45,55 -150,150"/>
            <polyline points=" 50,-50 155,55 50,150  " />
            <polyline points="150,-50 255,55 150,150 " />
            <polyline points="250,-50 355,55 250,150 " />
            <polyline points="350,-50 455,55 350,150 " />
            <polyline points="450,-50 555,55 450,150 " />
            <polyline points="550,-50 655,55 550,150 " />
            <polyline points="650,-50 755,55 650,150 " />
            <polyline points="750,-50 855,55 750,150 " />
            <polyline points="850,-50 955,55 850,150 " />
            <polyline points="950,-50 1055,55 950,150" />
        </svg>
    </>
}

function ButtonOverlay ({color, children, icon, mirror}) {
    return (
        <div className={styles.buttons_overlay}> 
            <div className={styles.arrow_div 
            /* main div that cover arrow loop thing 
            * also hard coded the transform pixel so it loop perfectly
            */
            }>  <div className={clsx(styles.arrow_1)}>
                    <ButtonArrow transform="-200px" color={color}/>
                </div>
                <div className={clsx(styles.arrow_2, styles.arrow_1)}>  
                    <ButtonArrow transform="-100px" color={color}/>
                </div> 
                <div className={clsx(styles.arrow_2, styles.arrow_1)}>  
                    <ButtonArrow transform="500px" color={color}/>
                </div>       
            </div>
            {
                mirror === "true" ? (
                    <div className={styles.button_overlay_div}>
                        <div style={{transform:"scaleX(-1)"}}>
                        <p><strong>{children}</strong></p>
                        </div>
                        <div className={styles.button_overlay_icon}>{icon}</div>
                    </div>  
                ) : (
                    <div className={styles.button_overlay_div}>
                        <p><strong>{children}</strong></p>
                        <div className={styles.button_overlay_icon}>{icon}</div>
                    </div>  
                )
            }
              
        </div>
    )
}

const ButtonHeader = () => {
    return (<>{
        ButtonContents.map((item) => (
            <div className={clsx('col col--6', styles.contents_column)} key={item.id}>
                <div className="text--center padding-horiz--md">
                    <div>
                        { item.component }                         
                    </div>
                </div>
            </div>
        ))
    }</>);
}

export default ButtonHeader;