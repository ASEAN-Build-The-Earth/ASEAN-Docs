import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './support.module.css';
import Translate from '@docusaurus/Translate';

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
                        <h1><Translate description="Header title of support page">
                                Support ASEAN BTE
                            </Translate>
                        </h1>
                        <h4><Translate description="Propaganda message for supporting aseanbte">
                                Hey if you want to see the server grow.
                                Consider donating to us! The minimum donation amount is $3
                                So feels free to donate any number you'd like.
                            </Translate>
                        </h4>
                        <br/>
                        <h1><Translate description="The topic in support page propaganda">
                                Where will my money go?
                            </Translate>
                        </h1>
                        <div className="row">
                            <div className={clsx("col col--6", styles.quote_row)}>
                                <blockquote id={styles.propaganda_quote}>
                                    <span className="badge badge--info">90%
                                    </span> <span className="badge badge--warning" id={styles.badge}>
                                        <Translate description="The badge-like component below the First support quote">
                                            main focus
                                        </Translate>
                                    </span>
                                    <h4><Translate description="First quote of 'Where will my money go?' topic">
                                            Supports minecraft server quality and performance.
                                        </Translate>
                                    </h4>
                                    <dt id={styles.quote_description}><sup>
                                        <Translate description="Description of 'Supports minecraft server' from support page quote">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna. 
                                        </Translate>
                                    </sup></dt>
                                </blockquote>
                            </div>
                            <div className={clsx("col col--6", styles.quote_row)}>
                                <blockquote id={styles.propaganda_quote}>
                                    <span className="badge badge--info">10%</span>
                                    <h4><Translate description="Second quote of 'Where will my money go?' topic">
                                            Supports our builder workflow.
                                        </Translate>
                                    </h4>
                                    <dt id={styles.quote_description}><sup>
                                        <Translate description="Description of 'Supports our builder workflow' from support page quote">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </Translate>
                                    </sup></dt>
                                </blockquote>
                            </div>
                        </div>
                    </Propaganda>
                    <KofiWidget>
                        <Translate description="The visit kofi site button at the bottom of kofi widget">
                            Visit Donation Site
                        </Translate>
                    </KofiWidget>
                </PageContainer>
            </main>
        </Layout>
    );
}