import React from 'react';
import clsx from 'clsx';
import styles from './Propaganda.module.css';

export default function Propaganda({children}) {
    return (
        <div className="col">
            <div className={clsx("row row--no-gutters", styles.propaganda_div)}>
                <div className="col">
                    <div className={styles.propaganda_container}>
                        <span className={styles.propaganda_text}>
                            {children}
                        </span>
                    </div> 
                </div>
                <div className={clsx("col", styles.propaganda_arrow)} />
            </div>              
        </div>
    )
} 