import React from 'react';
import clsx from 'clsx';
import styles from './KofiWidget.module.css';
import kofi_icon from "@site/static/media/icons/kofi_logo.png"
import LoadingSvg from '@site/src/components/LoadingSvg'
import Link from '@docusaurus/Link';
import { useImage } from 'react-image';
import IframeBackground from "@site/static/media/background/homepage_banner.png";
import CompressedIframeBackground from "@site/static/media/background/homepage_banner.min.png";
const KofiIframeLink = "https://ko-fi.com/bteasean/?hidefeed=true&widget=true&embed=true&preview=true";

export default function KofiWidget({children}) {
    const [tiny_kofi_btn_anim, set_tiny_kofi_btn] = React.useState(0);   
    const [loading_anim, set_loading] = React.useState(true); 
    const Background = useImage({ srcList: IframeBackground, useSuspense: false })
    const CompressedBackground = useImage({ srcList: CompressedIframeBackground, useSuspense: false })

    return (
        <div className={clsx("col", styles.kofi_card)}>
            <div className="card-demo">
                <div className="card" >
                    <div className="card__header" style={{paddingTop:"5px"}}>
                        <img src={kofi_icon} alt="kofi" 
                            tiny_kofi_btn_anim={tiny_kofi_btn_anim} 
                            onMouseDown={() => { set_tiny_kofi_btn(1); }}
                            onAnimationEnd={() => { set_tiny_kofi_btn(0); }} 
                            id={styles.button_icon}>
                        </img>
                    </div>
                    <div className="card__body" style={{paddingTop:"0"}}>
                        <div className={styles.kofi_container}>
                            <iframe id="kofiframe" 
                                src={KofiIframeLink}
                                height="712px"
                                title="ASEAN BTE Kofi Widget"
                                loading="eager"
                                className={styles.kofi_iframe}
                                style={
                                    Background.error !== null? 
                                        CompressedBackground.error !== null? {} : 
                                        CompressedBackground.isLoading? {} : 
                                        { backgroundImage:`url(${CompressedBackground.src})` }
                                    : Background.isLoading?  
                                        CompressedBackground.error !== null? {} : 
                                        CompressedBackground.isLoading? {} : 
                                        { backgroundImage:`url(${CompressedBackground.src})` }
                                    : {backgroundImage:`url(${Background.src})`}
                                }>   
                            </iframe>{
                                /**
                                 * [Note]: the loading overlay fade out when CompressedBackground is loaded,
                                 * so we'll atleast have compressed background ready when the overlay faded out.
                                 */
                                loading_anim? CompressedBackground.isLoading? <>
                                    <div className={styles.kofi_overlay} />
                                    <div className={ styles.loading_svg }>
                                        <LoadingSvg className={styles.svg_loader}/>
                                    </div>
                                </> : <>
                                    <div className={clsx(styles.kofi_overlay, styles.kofi_overlay_fade)} 
                                        onAnimationEnd={() => { set_loading(false); }}>
                                    </div>
                                    <div className={clsx(styles.loading_svg, styles.loading_svg_fade) }>
                                        <LoadingSvg className={styles.svg_loader}/>
                                    </div>
                                </> : <></>
                        }</div>
                    </div>
                    <div className="card__footer">
                        <Link className={clsx("button button--block", styles.kofi_button)} to="https://ko-fi.com/bteasean">
                            {children}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}