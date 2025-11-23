import React from 'react';

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
       return <svg width="100%" height="100%"><g><line x1="5%" y1="5%" x2="95%" y2="95%" stroke="rgb(190, 195, 201, 0.3)" strokeWidth="3" fill="rgb(190, 195, 201, 0.3)"></line></g></svg>;
     case "left":
       return <svg width="100%" height="100%"><g><line x1="5%" y1="95%" x2="95%" y2="5%" stroke="rgb(190, 195, 201, 0.3)" strokeWidth="3" fill="rgb(190, 195, 201, 0.3)"></line></g></svg>;
     case "none":
       return <svg width="100%" height="100%"><g><line x1="5%" y1="50%" x2="95%" y2="50%" stroke="rgb(190, 195, 201, 0.3)" strokeWidth="3" fill="rgb(190, 195, 201, 0.3)"></line></g></svg>;
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

export default StraightLine;