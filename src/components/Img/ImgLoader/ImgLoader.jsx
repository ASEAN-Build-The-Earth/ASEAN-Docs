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

const LoaderDissolve = ({children, ...props}) => {
    const [first_loaded, setFirstLoaded] = React.useState(false);

    return (
        first_loaded? <></>  
        : <div 
            className={ props.className? clsx(styles.img_loader_dissolve, props.className) : styles.img_loader_dissolve} 
            style={{ ...props.style }}
            first_loaded={first_loaded.toString()}
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