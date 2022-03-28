import React from 'react';
import ImgManager from '../ImgLoader'
import Translate from '@docusaurus/Translate';
import styles from './Video.module.css';

function VideoRenderer({sources, type, width, maxWidth, ...props})  
{
    const [loading, setLoading] = React.useState(true); 
    const [loaded, setLoaded] = React.useState(false); 
    const youtube = type === "youtube" ? true : false;
    const Renderer = <>
        { youtube ? <>
            <iframe 
                width="100%" height="327" 
                loading="lazy"
                onLoad={() => setLoading(false)} 
                src={`https://www.youtube.com/embed/${props.VIDEO_ID}?`
                + `playlist=${props.VIDEO_ID}`
                + `&start=1`
                + `&controls=0`
                + `&loop=1`
                + `&autoplay=1`
                + `&showinfo=0`
                + `&mute=1`
                + `&amp;rel=0`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen={false}
                muted>
            </iframe> 
            <div id={styles.youtube_header_blocker} />
        </> : <>
            <video width="100%" onCanPlayThrough={() => setLoading(false)}  controls="" name="media" autoPlay="true" loop muted>
                {sources}
                <Translate id="video.loader.loading" description="Loading message of all image in document">
                    Sorry, your browser does not support the video displayer.
                </Translate>
            </video>
        </>}
        <ImgManager.LoaderOverlay loading={loading} onLoaded={setLoaded} {...props}>
            <Translate id="video.loader.loading" description="Loading message of all image in document">
                Loading video...  
            </Translate>
        </ImgManager.LoaderOverlay>
    </>;

    return ( maxWidth?
        <div style={{ 
            position:"relative", 
            maxWidth: maxWidth? maxWidth : `${width}px`, 
        }}>
            {Renderer}
        </div> 
        : loaded? <div id={youtube? styles.youtube_displayer : styles.displayer}>{Renderer}</div> :
        <div style={{ position:"relative", maxWidth: `${width}px`, }}>
            {Renderer}
        </div>
    );
}

/**
 * Extended component for <video> tag
 * @param width width of the video in pixel (thi should match actual video file's width)
 * @param maxWidth max width video div can expand to 
 * @param children <source /> attributes of video
 * @param ...props any probs that applied to the result img tag
 * @returns final <video /> tag with loading skeleton on loading of the image
 */
export default function Video({children, type, maxWidth, width, ...props}) {
    return (<VideoRenderer 
        width={width} 
        sources={children}
        maxWidth={maxWidth}
        type={type}
        {...props}>   
    </VideoRenderer>);
}


