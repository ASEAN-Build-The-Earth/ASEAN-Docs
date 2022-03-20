import React from 'react';
import styles from './BedrockIpBox.module.css';
import CodeBlock from '@theme/CodeBlock';
import Translate from '@docusaurus/Translate';

/**
 * @param IP bedrock server ip
 * @param PORT bedrock server port
 * @returns pair of ip and port box as docusaurus CodeBlock element
 */
const BedrockIpBox = ({IP, PORT}) => {
    return (
      <>
        <span className={styles.ip_box}>
          <CodeBlock className="language-js" title={<Translate id="util.keyword.ip" description="IP label at the get-start page">IP</Translate>}>
            {IP}
          </CodeBlock>
        </span>
        <span className={styles.ip_box}>
          <CodeBlock className="language-js" title={<Translate id="util.keyword.port" description="PORT label at the get-start page">PORT</Translate>}>
            {PORT}
          </CodeBlock>
        </span>
      </>
    );
}

export default BedrockIpBox;