import React from 'react';
import clsx from 'clsx';
import styles from './MinecraftWindow.module.css';
import CodeBlock from "@theme/CodeBlock";

const DEFAULT_IP_BOX = [
  {
    id: "title",
    name: "Server IP",
  },
  {
    id: "1",
    name: <>
      Java Edition
      <CodeBlock language="javascript">
        IP: 139.99.91.188:25569
      </CodeBlock>
    </>,
  },
  {
    id: "2",
    name: <>
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
      title = "Minecraft",
      useDropdown = "false",
      dropdownContents = DEFAULT_IP_BOX
    }
  ) => {
  return (
    <div className={styles.browserWindow} style={{width}}>
      <div className={styles.browserWindowHeader}>
          <img src={require("@site/static//img/icons/grassblock_icon.png").default} width="40rem"></img>
        
        <div className={styles.browserWindowAddressBar}>{title}</div>
        <div className={styles.browserWindowMenuIcon}>
        {useDropdown.toLowerCase() == "true" ? ( 
            /* we have cute little ip box as default content */
            <div class="dropdown dropdown--hoverable">
            <button className={clsx("button button--link", styles.dropdown_button)}>
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
            <ul className={clsx("dropdown__menu", styles.dropdown_menu)}> {
                dropdownContents.map((item) => ( /* loop thru drop down items */
                  item.id == "title" ? 
                    (<li><a key={item.id}><em>{item.name}</em></a></li>) 
                    :
                    (<li><a class="dropdown__link" ><p key={item.id}>{item.name}</p></a></li>)
                  )
                )
              }
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
      <div className={styles.browserWindowBody}>{children}</div>
    </div>
  );
}

export default MinecraftWindow;