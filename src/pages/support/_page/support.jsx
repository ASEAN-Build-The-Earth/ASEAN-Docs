import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './support.module.css';
import LoadingSvg from './components/LoadingSvg'


export default function SupportPage() {
    const [loading_anim, set_loading] = React.useState(true);   

    return (
        <Layout
          title="Support us"
          description="via kofi">
          <main>
            <div className={clsx('hero hero--primary', styles.hero_banner)} style={{height:"100%"}}> 
                <div class="container">
                    <div class="row row--no-gutters">
                        <div class="col">
                            dsfdfs
                        </div>
                        <div class="col">
                            <div class="card-demo">
                            <div class="card">
                                <div class="card__header">
                                <h3>Lorem Ipsum</h3>
                                </div>
                                <div class="card__body">
                                    <div className={styles.kofi_container}>
                                        <iframe id='kofiframe' 
                                            src='https://ko-fi.com/bteasean/?hidefeed=true&widget=true&embed=true&preview=true' 
                                            height='712px' 
                                            title='bteasean'
                                            loading="eager"
                                            className={styles.kofi_iframe}
                                            loading_anim={loading_anim}
                                            onAnimationStart={() => set_loading(true)}
                                            onAnimationEnd={() => set_loading(false)}
                                        />   
                                        { loading_anim? <><div className={styles.kofi_bg}/><LoadingSvg /></> : <></>  }
                                    </div>
                                </div>
                                <div class="card__footer">
                                    <button class="button button--secondary button--block">See All</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
          </main>
        </Layout>
      );
}