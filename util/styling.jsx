/**
 * This file contains custom styling by JSX components to be usein project/docs
 */
import React from 'react';
import clsx from 'clsx';
import styles from './css/styling.module.css'
import { useColorMode } from '@docusaurus/theme-common'; //theme detector

/**
 * Highlight component use for hightligting text's background 
 * ```html
 * <Highlight color="#25c2a0" textColor="#fff" >Docusaurus green</Highlight>
 * ```
 * @param children display text
 * @param color text highlight color
 * @param textColor display text's color
 * @returns styled text by color and textColor
 */
const Highlight = ({children, color, textColor}) => {
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
 * @returns nicely setup responsive pair of 2 div left and right
 */
const MakePair = ({pair_left, pair_right}) => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6')}>
            {/* center the div vertically */}
            <div style={{ height:"100%", display:"grid", placeItems:"center" }}> 
              <div className="text--center padding-horiz--md">
                {pair_left}
              </div>
            </div>
          </div>
          <div className={clsx('col col--6')}>
            <div style={{ height:"100%", display:"grid", placeItems:"center" }}> 
              <div className="text--center padding-horiz--md">
                {pair_right}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default { Highlight, MakePair };