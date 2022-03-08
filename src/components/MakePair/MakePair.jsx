import React from 'react';
import styles from './MakePair.module.css'
import clsx from 'clsx';

/**
 * Make a pair of 2 JSX/HTML elment to display by left and right of screen (responsive for mobile)
 * ```jsx
 * <MakePair pair_left={<>ELEMENTS</>} pair_right={<>ELEMENTS</>} />
 * ```
 * @param pair_left elements to display at the left side of pair
 * @param pair_right elements to display at the right side of pair
 * @param pair_right_m pair on the left side will snap to top of the row in mobile mode, so if you want right pair to be on top, use this
 * @returns nicely setup responsive pair of 2 div left and right
 */
const MakePair = ({pair_left, pair_right, pair_right_m}) => {
    // check if right pair is assign to be snap on top
    const isReverse = new Boolean(React.isValidElement(pair_right_m)); 
    return (
        <section className={styles.container}>
            <div className="container">
                <div 
                    className = {
                        isReverse.valueOf() ? 
                        clsx("row", styles.reverse_column) :
                        clsx("row") 
                    }
                > 
                    <div className={"col col--6"}>
                        <div className={styles.place_center}> 
                            <div className="text--center padding-horiz--md">
                            { pair_left }
                            </div>
                        </div>
                    </div>
                    <div className="col col--6">
                        <div className={styles.place_center}> 
                            <div className="text--center padding-horiz--md">
                            { isReverse.valueOf()? pair_right_m : pair_right }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
  
export default MakePair;
