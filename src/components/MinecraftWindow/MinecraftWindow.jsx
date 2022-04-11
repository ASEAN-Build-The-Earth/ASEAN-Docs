import React from 'react';
import clsx from 'clsx';
import styles from './MinecraftWindow.module.css';
import CodeBlock from "@theme/CodeBlock";
import Translate from '@docusaurus/Translate';
import MinecraftIcon from "@site/static/media/icons/minecraft/grassblock_icon.png";
const DEFAULT_IP_BOX = [
  {
    id: "title",
    content: "Server IP",
  },
  {
    id: "1",
    content: <>
      Java Edition
      <CodeBlock language="javascript">
        IP: 139.99.91.188:25569
      </CodeBlock>
    </>,
  },
  {
    id: "2",
    content: <>
      Bedrock Edition
      <CodeBlock language="javascript">
        IP: 139.99.91.188 
        PORT: 19132
      </CodeBlock>
    </>,
  }
]

/** 
 * heavily modified from: https://github.com/facebook/docusaurus/tree/main/website/src/components/BrowserWindow
 * ```jsx
 * <MinecraftWindow 
 *     width="fit-content" 
 *     title="MY_TITLE" 
 *     useDropdown="true" 
 *     dropdownContents={[ { id: "title", name: "Server IP" }, { id: "1", name: "139.99.91.188" } ]}
 * ><img src={THIS_THIS_CHRILDREN_PARAM}/>
 * </MinecraftWindow>
 * ```
 * @param children a chrildren to be cover by the window later
 * @param width width style for the window ( mostly uses "fit-content" )
 * @param title (default: "Minecraft"): title of the window
 * @param useDropdown (default: "false"): if "true", when the 3-dots icon is hovered info dropdown will pop up (default: server ip info box)
 * @param dropdownContents (Javascript List): a list of contents with key for drop downn box to function.
 * @returns chrildren covered with bordered window-like minecraft screen
 */
const MinecraftWindow = (
    {
      children,
      width,
      maxWidth,
      title = <Translate id="util.keyword.minecraft" description="Minecraft label of the MinecraftWindow style">Minecraft</Translate>,
      useDropdown = "false",
      dropdownContents = DEFAULT_IP_BOX
    }
  ) => {
  return (
    <div className={styles.browserWindow} style={maxWidth? {maxWidth} : {width}}>
      <div className={styles.browserWindowHeader}>
          <img src={MinecraftIcon} width="40rem" alt="Minecraft"/>
        <div className={styles.browserWindowAddressBar}>{title}</div>
        <div className={styles.browserWindowMenuIcon}>
        {useDropdown.toLowerCase() == "true" ? ( 
            /* we have cute little ip box as default content */
            <div className="dropdown dropdown--hoverable">
            <button className={clsx("button button--link", styles.dropdown_button)} aria-label="Hover to see tips" >
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
            <ul className={clsx("dropdown__menu", styles.dropdown_menu)}> 
              { dropdownContents.map((item) => ( /* loop thru drop down items */
                  item.id == "title" ? 
                  ( <li key={item.id}><span id={styles.minecraft_window_dropdown_title}>{item.content}</span></li> ) 
                  : ( <li key={item.id}><div className="dropdown__link" >{item.content}</div></li> )
                )
              )}
            </ul>
          </div>
          ) : (
            <div>
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.browserWindowBody} style={maxWidth? {maxWidth} : {width}}>{children}</div>
    </div>
  );
}

export default MinecraftWindow;