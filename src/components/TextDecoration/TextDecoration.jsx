import React from 'react';
import styles from './TextDecoration.module.css';

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

  export default { Hl }