import React from 'react';
import clsx from 'clsx';
import styles from './HomepageButton.module.css'

import Translate from '@docusaurus/Translate';;
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import book_icon from "@site/static/img/icons/book_1.png"
import kofi_icon from "@site/static/img/icons/kofi_logo.png"
import feather_icon from "@site/static/img/icons/feather.png"
import kofi_pixel_icon from "@site/static/img/icons/kofi_pixel_logo.png";

const ButtonContents = [
    {
        id : "donate_button",
        component: <>
            <div className={styles.button_div} style={{transform:"scaleX(-1)"}}>
                <Link to="support" className={clsx("button button--link", styles.button_container)}>
                    <nav aria-label="breadcrumbs">
                        <ul className={clsx("breadcrumbs breadcrumbs--lg", styles.breadcrumbs_cover)}>
                            <li class="breadcrumbs__item">
                                <a class="breadcrumbs__link" style={{transform:"scaleX(-1)"}}>
                                    <Translate description="The big Start building button (please keep the text count very low to prevent newline)">
                                        Support us
                                    </Translate>     
                                </a>
                            </li>
                            <Image img={kofi_icon} alt="kofi" id={styles.button_icon} style={{backgroundColor: "#13C3FF", padding:"0px"}}/>
                        </ul>
                    </nav>
                </Link> 
                <ButtonOverlay mirror="true" color="#FF5E5B" icon={<Image img={kofi_pixel_icon} alt="↗" style={{width:"100%", position:"absolute", transform:"translateY(1rem)"}} />}>
                    <span className={styles.button_overlay_text_support} >
                        <Translate description="The pop up message when you hover to the homepage Donate us button (please keep the text count for this low)">
                            Donate on kofi
                        </Translate>
                    </span>
                </ButtonOverlay>
            </div>
        </>
    },
    {
        id : "get_started_button",
        component: <>
            <div className={styles.button_div}>
                <Link to="intro/get-started" className={clsx("button button--link", styles.button_container)}>
                    <nav aria-label="breadcrumbs">
                        <ul className={clsx("breadcrumbs breadcrumbs--lg", styles.breadcrumbs_cover)}>
                            <li class="breadcrumbs__item">
                                <a class="breadcrumbs__link">
                                    <Translate description="The big Start building button (please keep the text count very low to prevent newline)">
                                        Start Building
                                    </Translate>     
                                </a>
                            </li>
                            <Image img={book_icon} alt="doc↗" id={styles.button_icon} />
                        </ul>
                    </nav>
                </Link> 
                <ButtonOverlay icon={<Image img={feather_icon} alt="↗" style={{width:"100%", position:"absolute", imageRendering: "pixelated"}} />}>
                    <span className={styles.button_overlay_text_getstart} >
                        <Translate description="The pop up message when you hover to the homepage Start Building button (please keep the text count for this low)">
                            Go To Document
                        </Translate>
                    </span>
                </ButtonOverlay>
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
    return (
        <>
            {
                ButtonContents.map((item) => ( /* loop thru drop down items */
                        <div className={clsx('col col--6', styles.contents_column)}>
                            <div className="text--center padding-horiz--md">
                                <div key={item.id}>
                                    { item.component }                         
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </>
    );
}

export default ButtonHeader;