import React from 'react';
import styles from "./SocialMedias.module.css";
import Link from '@docusaurus/Link';

import RedditLogo from "@site/static/media/icons/social-media/reddit.svg";
import InstagramLogo from "@site/static/media/icons/social-media/instagram.svg";
import TwitterLogo from "@site/static/media/icons/social-media/twitter.svg";
import YoutubeLogo from "@site/static/media/icons/social-media/youtube.svg";

const SocialMedias = ({contents}) => {
    return (<>
        <Link href={contents.reddit.link} className={styles.social_media_column} id={styles.reddit_logo_pointer}> 
            <span id={styles.reddit_logo_label}>{contents.reddit.label}</span>
            <div className={styles.social_media_logo}>
                <div id={styles.reddit_logo_div} />
                <RedditLogo id={styles.reddit_logo}/>
                <div id={styles.reddit_logo_background} />
            </div> 
        </Link>
        <Link href={contents.twitter.link} className={styles.social_media_column} id={styles.twitter_logo_pointer}> 
            <span id={styles.twitter_logo_label}>{contents.twitter.label}</span>
            <div className={styles.social_media_logo}>
                <TwitterLogo id={styles.twitter_logo}/>
            </div> 
        </Link>
        <Link href={contents.instagram.link} className={styles.social_media_column} id={styles.instagram_logo_pointer}> 
            <div className={styles.social_media_column}> 
                <span id={styles.instagram_logo_label}>{contents.instagram.label}</span>
                <div className={styles.social_media_logo} id={styles.instagram_logo_div}>
                    <InstagramLogo id={styles.instagram_logo}/>
                </div> 
            </div>
        </Link>
        <Link href={contents.youtube.link} className={styles.social_media_column} id={styles.youtube_logo_pointer}> 
            <span id={styles.youtube_logo_label}>{contents.youtube.label}</span>
            <div className={styles.social_media_logo}>
                <div id={styles.youtube_logo_div} />
                    <YoutubeLogo id={styles.youtube_logo}/>
                <div id={styles.youtube_logo_background} />
            </div> 
        </Link>
    </>)
}

export default SocialMedias;
