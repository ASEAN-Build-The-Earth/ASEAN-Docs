/**
 * This file contains special custom styling that either only gonna be used once or cannot be use repeatly 
 */
import React from 'react';
import clsx from 'clsx';
import styles from './css/assets.module.css'
import { useColorMode } from '@docusaurus/theme-common'; //theme detector


/**
 * @param children invite button label
 * @param link discord invite link
 * @returns div of discord invite button and iframe of server widget preview
 */
const InviteButton = ({children, link}) => {
    const { isDarkTheme } = useColorMode();
    return (
    <div id={styles.wrap}>
      <table className={styles.cover_table}>
        <tr id={styles.scaled_element}><th className={styles.invite_table}>
          <a className={styles.invite_button} href={link} target="_blank">
          <b>{children}</b>
          <svg pointsAtY="1" width="18" height="18" aria-hidden="true" viewBox="0 -2 24 25" class=" ">
          <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
          </a>
        </th></tr>
        <tr><th style={{ padding: "0px", backgroundColor: "#23272a", borderRadius: "4px", borderColor: "#23272a"}}>
          <iframe src={isDarkTheme ? 'https://discord.com/widget?id=702883639574396969&theme=dark' : 'https://discord.com/widget?id=702883639574396969&theme=light'} 
            id={styles.scaled_element} height="500" allowtransparency="true" frameborder="0" 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">  
          </iframe>
        </th></tr>
      </table>
    </div>
    );
}


export default { InviteButton };

