import React from 'react';
import styles from './Img.module.css'
import clsx from 'clsx';
import { useImage } from 'react-image'
import ImgManager from '../ImgLoader/index'
import Translate from '@docusaurus/Translate';

const ErrorImage = ({error, width, height, ...props}) => { 
    console.log("[Error]: Could not load an image: ", error);
    return (
        <ImgManager.Loader width={width} height={height} {...props} fillColor="var(--ifm-color-danger-dark)">
            <em><Translate id="image.loader.error" description="Error message when any image could not be loaded.">
                Sorry, could not load this image :(
            </Translate></em>
        </ImgManager.Loader> 
    );
} 

function ImageRenderer({width, height, src, srcList, ...props}) 
{
    const img = useImage({
        srcList: src? src : srcList,
        useSuspense: false
    })

    const loadingMessage = <Translate id="image.loader.loading" description="Loading message of all image in document">
        Loading image...  
    </Translate>

    return ( 
        img.error !== null? <ErrorImage error={img.error} width={width} height={height} {...props}/> : 
        img.isLoading? <ImgManager.Loader width={width} height={height} {...props}>
            {loadingMessage}
        </ImgManager.Loader>
        : //<- Image is loaded
        /**[Note]:
         * We use the div as relative position with paddingBottom to the aspect ratio.
         * This makes the actual img tag to be absolute position.
         * Choosed this stradegy to solve when img tag is loaded but the actual picture isn't, 
         * that the div with image ratio will hold it untill it finally loaded
         */
        <div style={{ position:"relative", 
            paddingBottom: `${( height / width ) * 100}%`, 
            maxWidth: props.imgWidth? props.imgWidth : `${width}px`, 
        }}>
            <img src={img.src} 
                className={ props.className? clsx(styles.img_holder, props.className) : styles.img_holder} 
                style={{ width: props.imgWidth? props.imgWidth : null, ...props.style }} 
                alt={ props.alt? props.alt : "image" }>
            </img>
            <ImgManager.LoaderDissolve {...props}>
                {loadingMessage}
            </ImgManager.LoaderDissolve>
        </div>
    )
}

/**
 * Extended component for <img> tag
 * @param aspect aspect ratio of width and height, 
 * the aspect has to be the exact dimension of the image in pixel 
 * in order for the Img holder to generate loading skeleton correctly
 * `aspect="100px, 300px"` / `aspect="100 300"` / `aspect="100, 300"`
 * @param maxWidth max width image can expand to 
 * @param imgWidth use this to expand to width of higher than original aspect ratio
 * @param src source of the image (link/react import)
 * @param srcList list of images source, if one image failed it'll use other image in the list
 * @param ...props any probs that applied to the result img tag
 * @returns final <img /> tag with loading skeleton on loading of the image
 */
export default function Img({maxWidth, aspect, src, srcList, ...props}) {
    const aspectRatio = aspect.match(",")? aspect.split(", ") : aspect.split(" ")
    const Renderer = <ImageRenderer 
        width={aspectRatio[0].replace("px", "")} 
        height={aspectRatio[1].replace("px", "")} 
        src={src} 
        srcList={srcList} 
        {...props}>   
    </ImageRenderer>;

    return maxWidth? <div style={{maxWidth:maxWidth}}>{Renderer}</div> : Renderer;

}


