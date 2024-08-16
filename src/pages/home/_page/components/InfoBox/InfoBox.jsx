import React from 'react';
import clsx from 'clsx';
import styles from "./InfoBox.module.css";
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';
import Details from '@theme/Details'
import text from "@site/src/components/TextDecoration";
import Translate from '@docusaurus/Translate';
import MarkdownBlock from "@site/src/components/MarkdownBlock";

const SliderButtonSvg = () => <div className={styles.svg_arrow}>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" id={styles.slider_button_svg}>
    <g><polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128" 
    style={{transform:"scale(0.35)"}}/></g>
  </svg>
</div>;

const InfoBoxContents = {
    ServerIpBox: <>
        <div id={styles.box_label}>
            <Translate id="home.infoBox.ip" description="'Server ip' box at the homepage">
                Server IP
            </Translate>
        </div>
        <sub>
            <CodeBlock className="language-js" 
                title={<Translate id="home.infoBox.ip.java" description="Java label at homepage">Java</Translate>}>
                139.99.91.188:25569
            </CodeBlock>
            <CodeBlock className="language-js" 
                title={<Translate id="home.infoBox.ip.bedrock" description="Bedrock label at homepage">Bedrock</Translate>}>
                IP: 139.99.91.188 
                PORT: 19132
            </CodeBlock>
        </sub>
    </>,
    RequirementBox: <>
        <div id={styles.box_label}>
            <Translate id="home.infoBox.requirement" description="Requirements box at homepage">
                Requirements
            </Translate>
        </div>
        <div align="Left">
            <Details summary={<summary>
                <Translate id="home.infoBox.requirement.content" description="the first and only requirement in the homepage requirement box">
                    Minecraft
                </Translate>
            </summary>}>
                <span id={styles.req_box_quote}>
                    <MarkdownBlock>
                    <Translate id="home.infoBox.requirement.content.description" description="Extra foldout section of Minecraft in homepage describing we supports all version of it">
                        [Java Edition](https://www.minecraft.net/en-us/store/minecraft-java-edition) and 
                        [Bedrock Edition](https://minecraft.wiki/w/Bedrock_Edition) are supported.
                    </Translate>
                    </MarkdownBlock>
                </span>
            </Details>
        </div>
        <div align="Left">
            <Admonition type="caution">
                <span id={styles.req_box_caution}>
                    <strong><text.Hl color="#C03A3A" textColor="#FEF6E8">
                        <Translate id="home.infoBox.requirement.cracked-1" description="section of 'Cracked Minecraft is not allowed'">
                            Cracked Minecraft
                        </Translate>
                    </text.Hl> </strong> 
                    <Translate id="home.infoBox.requirement.cracked-2" description="section of 'Cracked Minecraft is not allowed'">
                        is not ALLOWED.
                    </Translate>
                </span>
            </Admonition>
        </div>
    </>
}

const InfoBox = () => {
    const [clicked_state, setClickedState] = React.useState("0 0"); 
    const [onDelay, setOnDelay] = React.useState(false);   

    function setState(state, disabled) {
        /* get variable from state data */
        let currentState = clicked_state.split(" ")[0];
        let currentDisabled = clicked_state.split(" ")[1];
        
        /* all state used: 
         * "0 0" » "1 0" » "1 1" » "2 0" » "2 1 => 0 0"
         * the state registered will be pick by css's [data] tag and apply animation to it.
         */
        if(`${currentState} ${currentDisabled}` == "2 1") {
            currentState = "0";
            currentDisabled = "0";
        }
        else {
            currentState = state == "-1"? currentState : state;
            currentDisabled = disabled == "-1"? currentDisabled : disabled;
        }

        setClickedState(`${currentState} ${currentDisabled}`);
    }
    function delayOnAnimationEnd() { 
        setOnDelay(true); 
        setTimeout(() => setOnDelay(false), 500); 
    }

    return (<>
        <div className="container">
            <ul className={styles.slider_button_container}>
                <li className={styles.slider_button} id={styles.slider_button_1} 
                    onClick={() => { if(!onDelay) setState("1", "-1"); }} 
                    onAnimationEnd={() => { setState("-1", "1"); delayOnAnimationEnd(); }}
                    clicked_state={clicked_state} >
                    <SliderButtonSvg />
                </li>
                <li className={styles.slider_button} id={styles.slider_button_2} 
                    onClick={() => { if(!onDelay) setState("2", "0"); }} 
                    onAnimationEnd={() => { setState("-1", "1"); delayOnAnimationEnd();}}
                    clicked_state={clicked_state} >
                    <SliderButtonSvg />
                </li>
            </ul>
            <div className={styles.info_box_container}>
                <div className={styles.ip_div} clicked_state={clicked_state}>
                    <table className={clsx(styles.ip_box, styles.ip_box_anim)} 
                        clicked_state={clicked_state}>
                        <tbody><tr><td id={styles.box_styles}>
                            {InfoBoxContents.ServerIpBox}
                        </td></tr></tbody>
                    </table>
                </div>
                <div className={styles.req_div} clicked_state={clicked_state}>
                    <table className={clsx(styles.req_box, styles.req_box_anim)} 
                        clicked_state={clicked_state}>
                        <tbody><tr><td id={styles.box_styles}>
                            {InfoBoxContents.RequirementBox}
                        </td></tr></tbody>
                    </table>
                </div>  
            </div>
        </div>
    </>)
}

export default InfoBox;