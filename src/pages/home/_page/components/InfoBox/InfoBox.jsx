import React from 'react';
import clsx from 'clsx';
import styles from "./InfoBox.module.css";
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';
import Details from '@theme/Details'
import text from "@site/src/components/TextDecoration";
import Translate from '@docusaurus/Translate';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import MarkdownBlock from "@site/src/components/MarkdownBlock";

const TabsSvg = () => <div className={styles.svg_arrow}>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" id={styles.tabs_svg}>
    <g><polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128" 
    style={{transform:"scale(0.35)"}}/></g>
  </svg>
</div>;

const InfoBoxContents = ({state, setOnAnim}) => {
  const [current_state] = React.useState(parseInt(state));
  return <>
    <div className={styles.container}>
      <div className={styles.ip_div} current_state={current_state}>
        <table className={clsx(styles.ip_box, styles.ip_box_anim)} current_state={current_state} onAnimationStart={() => setOnAnim(1)} onAnimationEnd={() => setOnAnim(0)}><td id={styles.box_styles}>
          <div align="Left"><i><b>
            <Translate id="home.infoBox.ip" description="'Server ip' box at the homepage">
              Server IP
            </Translate>
          </b></i></div>
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
        </td></table>
      </div>
      <div className={styles.req_div} current_state={current_state}>
        <table className={clsx(styles.req_box, styles.req_box_anim)} current_state={current_state}><td id={styles.box_styles}>
          <div align="Left"><i><b><sub>
            <Translate id="home.infoBox.requirement" description="Requirements box at homepage">
              Requirements
            </Translate>
          </sub></b></i></div>
          <div align="Left">
            <Details summary={
            <summary><Translate id="home.infoBox.requirement.content" description="the first and only requirement in the homepage requirement box">
                Minecraft
            </Translate></summary>}>
              <sub>
                <MarkdownBlock>
                  <Translate id="home.infoBox.requirement.content.description" description="Extra foldout section of Minecraft in homepage describing we supports all version of it">
                      [Java Edition](https://www.minecraft.net/en-us/store/minecraft-java-edition) and 
                      [Bedrock Edition](https://minecraft.fandom.com/wiki/Bedrock_Edition) are supported.
                  </Translate>
                </MarkdownBlock>
              </sub>
            </Details>
          </div>
          <div align="Left">
            <Admonition type="caution">
              <sub>
                <strong><text.Hl color="#C03A3A" textColor="#FEF6E8">
                  <Translate id="home.infoBox.requirement.cracked-1" description="section of 'Cracked Minecraft is not allowed'">
                    Cracked Minecraft
                  </Translate>
                </text.Hl> </strong> 
                <Translate id="home.infoBox.requirement.cracked-2" description="section of 'Cracked Minecraft is not allowed'">
                  is not ALLOWED.
                </Translate>
              </sub>
            </Admonition>
          </div>
        </td></table>
      </div>  
    </div>
  </>
}

const InfoBox = () => {
    const [on_anim, setOnAnim] = React.useState(0);
    return <Tabs className={styles.tabs}>
        <TabItem default value="tabs_box_left" label={<TabsSvg />} attributes={{className: styles.tabs_button, 'data-value': `tabs_box_left_${on_anim}`}}>
            <InfoBoxContents state="0" setOnAnim={setOnAnim} />
        </TabItem>
        <TabItem value="tabs_box_right" label={<TabsSvg />} attributes={{className: styles.tabs_button, 'data-value': `tabs_box_right_${on_anim}`}}>
            <InfoBoxContents state="1" setOnAnim={setOnAnim}/>
        </TabItem>
    </Tabs>
}

export default InfoBox;