import React from 'react';
import styles from './BedrockIpBox.module.css';
import CodeBlock from '@theme/CodeBlock';

/**
 * @param IP bedrock server ip
 * @param PORT bedrock server port
 * @returns pair of ip and port box as docusaurus CodeBlock element
 */
const BedrockIpBox = ({IP, PORT}) => {
    return (
      <>
        <span className={styles.ip_box}>
          <CodeBlock className="language-js" title="IP">
            {IP}
          </CodeBlock>
        </span>
        <span className={styles.ip_box}>
          <CodeBlock className="language-js" title="PORT">
            {PORT}
          </CodeBlock>
        </span>
      </>
    );
}

export default BedrockIpBox;