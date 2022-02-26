import React from 'react';
import clsx from 'clsx';

/* Highlight component use for hightligting text's background 
  ```html
  <Highlight color="#25c2a0" textColor="#fff" >Docusaurus green</Highlight>
  ```
*/
export default function Highlight ({children, color, textColor}) 
{
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
