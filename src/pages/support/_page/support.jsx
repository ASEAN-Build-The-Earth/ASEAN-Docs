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
                        <h4><MarkdownBlock className={styles.propaganda_msg}>
                                <Translate id="support.subtitle" description="Propaganda message for supporting aseanbte (recommended to edit the '1 U.S. Dollar' to local currency translating to) ">
                                    Hello, if you want to see the server grow.
                                    Consider donating to us at the minimum of [1 U.S. Dollar](https://www.google.com/search?q=1+usd),
                                    \n                   
                                    you are helping us go one step further in achieving our goal.
                                </Translate>
                            </MarkdownBlock>
                        </h4>
                        <br/>
                        <h1><Translate id="support.propaganda.title" description="The topic in support page propaganda">
                                Where would my funds go?
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
                                    <h4><Translate id="support.propaganda.1.title" description="First quote of 'Where will my money go?' topic">
                                            Supports minecraft server quality and performance.
                                        </Translate>
                                    </h4>
                                    <dt id={styles.quote_description}><sup>
                                        <Translate id="support.propaganda.1.description" description="Description of 'Supports minecraft server' from support page quote">
                                            90% of the funding here would go to server funding which is paying for our virtual private server (VPS)  
                                            which hosts our servers as well as discord bots. By providing funding you are keeping our servers alive day by day.
                                        </Translate>
                                    </sup></dt>
                                </blockquote>
                            </div>
                            <div className={clsx("col col--6", styles.quote_row)}>
                                <blockquote id={styles.propaganda_quote}>
                                    <span className="badge badge--info">10%</span>
                                    <h4><Translate id="support.propaganda.2.title" description="Second quote of 'Where will my money go?' topic">
                                            Savings
                                        </Translate>
                                    </h4>
                                    <dt id={styles.quote_description}><sup>
                                        <Translate id="support.propaganda.2.description" description="Description of 'Supports our builder workflow' from support page quote">
                                            The 10% would be saved up and only be spent in the team investing in new systems or products or if a major incident happens 
                                        </Translate>
                                    </sup></dt>
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
