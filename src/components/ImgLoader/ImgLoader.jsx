import React from 'react';
import styles from './ImgLoader.module.css'
import clsx from 'clsx';
import LoadingSvg from '@site/src/components/LoadingSvg'

const Loader = ({children, fillColor, width, height, ...props}) => <div /* Loading div, a place holder skeleton of images */
    className={ props.className? clsx(styles.img_loader, props.className) : styles.img_loader} 
    style={{
        paddingBottom: `${( height / width ) * 100}%`,
        maxWidth: props.imgWidth? props.imgWidth : `${width}px`, 
        ...props.style
    }}>
    <div className={styles.loader_asset_container}> {
            fillColor? <> 
                <LoadingSvg 
                    className={styles.loading_svg} 
                    fillColor={fillColor}>
                </LoadingSvg>
                <span className={styles.loading_description} style={{ color:fillColor }}>
                    {children}
                </span>
            </> : <>
                <LoadingSvg className={styles.loading_svg} />
                <span className={styles.loading_description} style={{ opacity:"0.5" }}>
                    {children}
                </span>
            </>
    } </div>
</div>;

const LoaderDissolve = ({children, ...props}) => 
{
    const [first_loaded, setFirstLoaded] = React.useState(false);
    return (
        first_loaded? <></>  
        : <div 
            className={ props.className? clsx(styles.img_loader_dissolve, props.className) : styles.img_loader_dissolve} 
            style={{ ...props.style }}
            onAnimationEnd={() => setFirstLoaded(true)}
            loading="true"
        >
            <LoadingSvg className={styles.loading_svg_dissolve} />
            <span className={styles.loading_description_dissolve}>
                {children}
            </span>
        </div> 
    );
}

const LoaderOverlay = ({onLoaded, loading, children, ...props}) => {
    const [loaded, setLoaded] = React.useState(false);
    const setDoneLoaded = () => { setLoaded(true); onLoaded(true)}
    return ( loaded? <></> :
        loading? <div 
            className={ props.className? clsx(styles.img_loader_dissolve, props.className) : styles.img_loader_dissolve} 
            style={{ ...props.style }}
        >
            <LoadingSvg className={styles.loading_svg_dissolve} />
            <span className={styles.loading_description_dissolve}>
                {children}
            </span>
        </div> 
        : <div 
            className={ props.className? clsx(styles.img_loader_dissolve, props.className) : styles.img_loader_dissolve} 
            onAnimationEnd={() => setDoneLoaded()}
            style={{ ...props.style }}
            loading="true"
        >
            <LoadingSvg className={styles.loading_svg_dissolve} />
            <span className={styles.loading_description_dissolve}>
                {children}
            </span>
        </div>
    );
}

export default { LoaderOverlay, LoaderDissolve, Loader }