import React from 'react';
import clsx from 'clsx';
import styles from './css/iframe.module.css';

export default function ResponsiveIframe({link}) {
    return (
        <div id={styles.wrap}>
            <iframe id={styles.scaled_frame} src={link} frameborder="0"></iframe>
        </div>
    );
  }