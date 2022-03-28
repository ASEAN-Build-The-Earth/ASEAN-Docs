import React, { useState } from 'react';
import styles from './InviteButton.module.css'
import { useColorMode } from '@docusaurus/theme-common'; //theme detector
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * @param children invite button label
 * @param link discord invite link
 * @returns div of discord invite button and iframe of server widget preview
 */
const InviteButton = ({children}) => {
  const { siteConfig } = useDocusaurusContext();
  const { isDarkTheme } = useColorMode();
  const [widget_in, setWidgetIn] = useState(0)
  let isAnimating;
  let isMouseOver;

  return (
  <div id={styles.wrap}>
    <table className={styles.cover_table}><tbody>
      <tr id={styles.scaled_element}><th className={styles.invite_table}>
        <Link className={styles.invite_button} to={siteConfig.customFields.discordInviteLink}>
          <b>{children}</b>
          <svg pointsAtY="1" width="18" height="18" aria-hidden="true" viewBox="0 -2 24 25">
          <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
        </Link>
      </th></tr>
      <tr><th style={
          isDarkTheme ? /* inline style cus im lazy */
          { padding: "0px", backgroundColor: "#23272a", borderRadius: "4px", borderColor: "#23272a"} : 
          { padding: "0px", backgroundColor: "#7289da", borderRadius: "4px", borderColor: "#7289da"}} 
        >
          <iframe /* discord widget iframe */
            title="ASEAN BTE Discord Server"
            className={styles.discord_widget} 
            src={isDarkTheme ? 'https://discord.com/widget?id=702883639574396969&theme=dark' : 'https://discord.com/widget?id=702883639574396969&theme=light'} 
            id={styles.scaled_element} allowtransparency="true" frameBorder="0" 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            /* widget animation */
            widget_in={widget_in}
            onMouseEnter={() => { isMouseOver = true; if(!isAnimating) setWidgetIn(1); }}
            onMouseLeave={() => { isMouseOver = false;  if(isAnimating !== true) setWidgetIn(2); }}
            onAnimationEnd={() =>  { isAnimating = false; if(isMouseOver !== undefined)  setWidgetIn(2); }}
            onAnimationStart={() =>{ isAnimating = true; }}            
          ></iframe> 
      </th></tr></tbody>
    </table>
  </div>
  );
}

export default InviteButton;