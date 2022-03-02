/**
 * This file contains custom styling by JSX components to be usein project/docs
 */
import React from 'react';
import clsx from 'clsx';
import styles from './css/styling.module.css';
import CodeBlock from "@theme/CodeBlock";
import { useColorMode } from '@docusaurus/theme-common'; //theme detector

/**
 * Highlight component use for hightligting text's background 
 * ```html
 * <Hl color="#25c2a0" textColor="#fff" >Docusaurus green</Hl>
 * ```
 * @param children display text
 * @param color text highlight color
 * @param textColor display text's color
 * @returns styled text by color and textColor
 */
const Hl = ({children, color, textColor}) => {
  return <span
    style={{
      backgroundColor: color? color : null,
      borderRadius: '2px',
      color: textColor? textColor : '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
}



/**
 * Make a pair of 2 JSX/HTML elment to display by left and right of screen (responsive for mobile)
 * ```jsx
 * <MakePair pair_left={<>ELEMENTS</>} pair_right={<>ELEMENTS</>} />
 * ```
 * @param pair_left elements to display at the left side of pair
 * @param pair_right elements to display at the right side of pair
 * @param pair_right_m pair on the left side will snap to top of the row in mobile mode, so if you want right pair to be on top, use this
 * @returns nicely setup responsive pair of 2 div left and right
 */
const MakePair = ({pair_left, pair_right, pair_right_m}) => {
  // check if right pair is assign to be snap on top
  const isReverse = new Boolean(React.isValidElement(pair_right_m)); 
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" className={isReverse.valueOf()? clsx("row", styles.reverse_column) : clsx("row") }>
          <div className={clsx('col col--6')}>
            {/* center the div vertically */}
            <div style={{ height:"100%", display:"grid", placeItems:"center" }}> 
              <div className="text--center padding-horiz--md">
                { pair_left }
              </div>
            </div>
          </div>
          <div className={clsx('col col--6')}>
            <div style={{ height:"100%", display:"grid", placeItems:"center" }}> 
              <div className="text--center padding-horiz--md">
                { isReverse.valueOf()? pair_right_m : pair_right }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Insert a SVG ling to website
 * ```html
 * <StraightLine bend="right" />
 * ```
 * @param bend line option: "left": bend down to the left, "right": bend down to the right, "none": no bending
 * @returns div of svg displaying line
 */
const StraightLine = ({bend}) => {
  const getStyle = (bendType) => {
    switch (bendType.toLowerCase()) {
      case "right":
        return <svg width="100%" height="100%"><g><line x1="5%" y1="5%" x2="95%" y2="95%" stroke="rgb(190, 195, 201, 0.3)" stroke-width="3" fill="rgb(190, 195, 201, 0.3)"></line></g></svg>;
      case "left":
        return <svg width="100%" height="100%"><g><line x1="5%" y1="95%" x2="95%" y2="5%" stroke="rgb(190, 195, 201, 0.3)" stroke-width="3" fill="rgb(190, 195, 201, 0.3)"></line></g></svg>;
      case "none":
        return <svg width="100%" height="100%"><g><line x1="5%" y1="50%" x2="95%" y2="50%" stroke="rgb(190, 195, 201, 0.3)" stroke-width="3" fill="rgb(190, 195, 201, 0.3)"></line></g></svg>;
      default:
        return <strong style={{color:"red"}}>The Input line parameter invalid, please use "left", "right", "none"</strong>;
    };
  }
  return (
    <div style={{height:"3rem"}}>
      { getStyle(bend) }
    </div>
  )
}

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
const MinecraftWindow = ({
  children,
  width,
  title = "Minecraft",
  useDropdown = "false",
  dropdownContents = [ /* we have little ip box as default dropdown! */
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
    },
  ],
}) => {
  return (
    <div className={styles.browserWindow} style={{width}}>
      <div className={styles.browserWindowHeader}>
          <img src={require("../static//img/icons/grassblock_icon.png").default} width="40rem"></img>
        
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


export default {  Hl, MakePair, StraightLine, MinecraftWindow};