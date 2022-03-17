import React from 'react';
import styles from './Img.module.css'
import clsx from 'clsx';
import { useImage } from 'react-image'
import LoadingSvg from '@site/src/components/LoadingSvg'


const Loader = ({width, height, ...props}) => <div /* Loading div, a place holder skeleton of images */
    className={ props.className? clsx(styles.img_loader, props.className) : styles.img_loader} 
    style={{
        maxWidth: props.maxWidth? props.maxWidth : `${width}px`,
        ...props.style
    }}>
    <LoadingSvg 
        svgOnly="true"
        style={{width: props.aspect? `${props.aspect * 1.4}%` : `${( height / width ) * 100}%`}}
        className={styles.loading_svgs} >
    </LoadingSvg>
</div> 

function ImageRenderer({width, height, src, srcList, ...props}) 
{
    const [firstLoaded, setFirstLoaded] = React.useState(false);
    const img = useImage({
        srcList: src? src : srcList,
        useSuspense: false
    })

    return ( 
        img.error || img.isLoading? <Loader width={width} height={height} {...props} />
        : // Image is loaded
        /**[Note]:
         * We use the div as relative position with paddingBottom to the aspect ratio.
         * This makes the actual img tag to be absolute position.
         * Choosed this stradegy to solve when img tag is loaded but the actual picture isn't, 
         * that the div with image ratio will hold it untill it finally loaded
         */
        <div style={{position:"relative", 
            paddingBottom: props.aspect? `${props.aspect}%` : `${( height / width ) * 100}%`, 
            maxWidth: props.maxWidth? props.maxWidth : `${width}px`, 
            minWidth: `${props.minWidth? props.minWidth : "320px" }`,
        }}>
            <img src={img.src} className={ props.className? clsx(styles.img_holder, props.className) : styles.img_holder} style={{width: props.imgWidth? props.imgWidth : null, ...props.style}}/>
            {/* first loaded of image dissolve animation */
                firstLoaded? <></>  
                : <div 
                    className={ props.className? clsx(styles.img_loader_dissolve, props.className) : styles.img_loader_dissolve} 
                    firstLoaded={firstLoaded}
                    onAnimationEnd={() => setFirstLoaded(true)}
                    style={{
                        ...props.style
                    }}>
                    <LoadingSvg 
                        svgOnly="true"
                        style={{width: props.aspect? `${props.aspect * 1.4}%` : `${( height / width ) * 100}%`}}
                        className={styles.loading_svgs_dissolve} >    
                    </LoadingSvg>
                </div> 
            }
        </div>
    )
}

export default function Img({width, height, src, srcList, ...props}) {
    return <ImageRenderer 
        width={width} 
        height={height} 
        src={src} 
        srcList={srcList} 
        {...props}>   
    </ImageRenderer>
}


