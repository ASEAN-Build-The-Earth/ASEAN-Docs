import React from 'react';
import styles from './ResponsiveIframe.module.css';

function ResponsiveIframe({link}) {
    return (
        <div id={styles.wrap}>
            <iframe id={styles.scaled_frame} src={link} frameborder="0"></iframe>
        </div>
    );
}

export default ResponsiveIframe;