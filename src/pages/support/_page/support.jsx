import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './support.module.css';
import Translate from '@docusaurus/Translate';
import MarkdownBlock from "@site/src/components/MarkdownBlock"

import PageContainer from './components/PageContainer';
import KofiWidget from './components/KofiWidget';
import Propaganda from './components/Propaganda';

/**This is main function exporting the support page
 * *Note: components folder doesnt contains text to translate, 
 * its all beautifully organized in this function
 * @returns Support page element deployed at `@site/support`
 */
export default function SupportPage() {
    return (
        <Layout
            title="Support us"
            description="Support ASEAN BTE by donating via kofi.">
            <main>
                <PageContainer>
                    <Propaganda>
                        <h1><Translate id="support.title" description="Header title of support page">
                                Support ASEAN BTE
                            </Translate>
                        </h1>
                        <span className={styles.propaganda_msg}><MarkdownBlock>
                                <Translate id="support.subtitle" description="Propaganda message for supporting aseanbte (recommended to edit the '1 U.S. Dollar' to local currency translating to) ">
                                    Hello. If you want to see the server building up,\n please consider donating to us at a minimum of [1 U.S. Dollar](https://www.google.com/search?q=1+usd).
                                    By doing that action,  you are helping us go one step further in achieving our goal.
                                </Translate>
                            </MarkdownBlock>
                        </span>
                        <br/>
                        <h1><Translate id="support.propaganda.title" description="The topic in support page propaganda">
                                Where would the funds go?
                            </Translate>
                        </h1>
                        <div className="row">
                            <div className={clsx("col col--6", styles.quote_row)}>
                                <blockquote id={styles.propaganda_quote}>
                                    <span className="badge badge--info">90%
                                    </span> <span className="badge badge--warning" id={styles.badge}>
                                        <Translate id="support.propaganda.1.badge" description="The badge-like component below the First support quote">
                                            main focus
                                        </Translate>
                                    </span>
                                    <dl id={styles.quote_container}>  
                                        <dt id={styles.quote_label}>
                                            <Translate id="support.propaganda.1.title" description="First quote of 'Where will my money go?' topic">
                                                Supporting Minecraft server quality and performance
                                            </Translate>
                                        </dt>
                                        <dd id={styles.quote_description}>
                                            <Translate id="support.propaganda.1.description" description="Description of 'Supports minecraft server' from support page quote">
                                                The 90% of the funds would go to our Virtual Private Server (VPS) 
                                                which hosts our Minecraft servers as well as Discord bots. By donating, 
                                                you are keeping our Minecraft servers alive day by day. 
                                            </Translate>
                                        </dd>
                                    </dl>
                                </blockquote>
                            </div>
                            <div className={clsx("col col--6", styles.quote_row)}>
                                <blockquote id={styles.propaganda_quote}>
                                    <span className="badge badge--info">10%</span>
                                    <dl id={styles.quote_container}>
                                        <dt id={styles.quote_label}>
                                            <Translate id="support.propaganda.2.title" description="Second quote of 'Where will my money go?' topic">
                                                Savings
                                            </Translate>
                                        </dt>
                                        <dd id={styles.quote_description}>
                                            <Translate id="support.propaganda.2.description" description="Description of 'Supports our builder workflow' from support page quote">
                                                10% of the funds would be saved up and to be spent on the team’s investments of new system or to fix major accidents.
                                            </Translate>
                                        </dd>
                                    </dl>    
                                </blockquote>
                            </div>
                        </div>
                    </Propaganda>
                    <KofiWidget>
                        <Translate id="support.kofiBox.visitPageButton" description="The visit kofi site button at the bottom of kofi widget">
                            Visit Donation Site
                        </Translate>
                    </KofiWidget>
                </PageContainer>
            </main>
        </Layout>
    );
}
