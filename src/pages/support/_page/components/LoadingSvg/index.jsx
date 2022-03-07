import React from "react"
import styles from "./index.module.css"
import { useColorMode } from '@docusaurus/theme-common';

/**
 * Loading SVG Style 4 
 * By Nikhil Krishnan from: [https://codepen.io/nikhil8krishnan/pen/rVoXJa] under MIT License
 * @param color the color of the svg
 * @returns an animated loading icon
 */
const Svg = ({color}) => {
    return (
        <svg version="1.1" 
            id="L4" x="0px" y="0px" 
            style={{
                position: "absolute",
                width: "260px",
                top: "50%",
                left: "50%",
                transform: "translate(-28%, -50%)",
            }}
            viewBox="0 0 100 100" enable-background="new 0 0 0 0">
            <circle fill={color} stroke="none" cx="6" cy="50" r="6">
                <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.1"/>    
            </circle>
            <circle fill={color} stroke="none" cx="26" cy="50" r="6">
                <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite" 
                begin="0.2"/>       
            </circle>
            <circle fill={color} stroke="none" cx="46" cy="50" r="6">
                <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite" 
                begin="0.3"/>     
            </circle>
        </svg>
    );
}

export default function LoadingSvg() {
    const { isDarkTheme } = useColorMode();
    return (
        <div className={styles.loading_svg}>
            { isDarkTheme? <Svg color="#666666"/> : <Svg color="#888888"/> }
        </div>
    );
}