import React from 'react';
import styles from './ImgLoader.module.css'
import clsx from 'clsx';
import LoadingSvg from '@site/src/components/LoadingSvg'

const Loader = ({children, fillColor, width, height, ...props}) => <div /* Loading div, a place holder skeleton of images */
    className={ props.className? clsx(styles.img_loader, props.className) : styles.img_loader} 
    style={{
        maxWidth: props.maxWidth? props.maxWidth : `${width}px`,
        paddingBottom: props.aspect? `${props.aspect}%` : `${( height / width ) * 100}%`,
        minWidth: `${props.minWidth? props.minWidth : "320px" }`,
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

const LoaderDissolve = ({children, ...props}) => {
    const [firstLoaded, setFirstLoaded] = React.useState(false);

    return (
        firstLoaded? <></>  
        : <div 
            className={ props.className? clsx(styles.img_loader_dissolve, props.className) : styles.img_loader_dissolve} 
            style={{ ...props.style }}
            firstLoaded={firstLoaded}
            onAnimationEnd={() => setFirstLoaded(true)}
        >
            <LoadingSvg className={styles.loading_svg_dissolve} />
            <span className={styles.loading_description_dissolve}>
                {children}
            </span>
        </div> 
    );
}

export default { Loader, LoaderDissolve }