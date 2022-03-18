import React from 'react';
import clsx from 'clsx';
import styles from './KofiWidget.module.css';
import kofi_icon from "@site/static/img/icons/kofi_logo.png"
import LoadingSvg from '@site/src/components/LoadingSvg'

export default function KofiWidget({children}) {
    const [loading_anim, set_loading] = React.useState(true);   
    const [tiny_kofi_btn_anim, set_tiny_kofi_btn] = React.useState(0);   

    return (
        <div className={clsx("col", styles.kofi_card)}>
            <div className="card-demo">
                <div className="card" >
                    <div className="card__header" style={{paddingTop:"5px"}}>
                        <img src={kofi_icon} alt="kofi" 
                            tiny_kofi_btn_anim={tiny_kofi_btn_anim} 
                            onMouseDown={() => {set_tiny_kofi_btn(1)}}
                            onAnimationEnd={() => {set_tiny_kofi_btn(0)}} 
                            id={styles.button_icon}
                        />
                    </div>
                    <div className="card__body" style={{paddingTop:"0"}}>
                        <div className={styles.kofi_container}>
                            <iframe id="kofiframe" 
                                src="https://ko-fi.com/bteasean/?hidefeed=true&widget=true&embed=true&preview=true"
                                height="712px"
                                title="bteasean"
                                loading="eager"
                                className={styles.kofi_iframe}
                                loading_anim={loading_anim}
                                onAnimationStart={() => set_loading(true)}
                                onAnimationEnd={() => set_loading(false)}
                            />   
                            { loading_anim? <>
                                <div className={styles.kofi_bg}/>
                                <div className={ styles.loading_svg }>
                                    <LoadingSvg className={styles.svg_loader}/>
                                </div>
                            </> : <></>  
                            }
                        </div>
                    </div>
                    <div className="card__footer">
                        <a className={clsx("button button--block", styles.kofi_button)} href="https://ko-fi.com/bteasean" target="_blank">
                            {children}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}