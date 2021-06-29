import React from 'react';
import styles from "./navigation.module.css";
import parse from 'html-react-parser';

class Navigation extends React.Component {
    

    render() {
        const { title, header, logo, activeState } = this.props

        // const inLineStyles = {
        //     activePath: {
        //         fill: activeState === header ? 'blue' : 'black',
        //     }
        // }
        console.log(activeState)
        
        return(
            <a className={styles.navItemLink}>
                <div className={styles.navItemContainer}>
                    <div className={styles.navItemImgContainer}>
                        <div className={styles.navItemImgWrap}>
                            {/* <img width="12" height="12" src={"./images/home.png"}></img> */}
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                {
                                    logo.map((l) => {
                                        return parse(`<path style=${{fill: activeState === header ? 'blue' : 'black'}} ${l}</path>`)
                                    })
                                }
                                
                            </svg>
                        </div>
                    </div>
                    <span className={styles.navItemText}>{title}</span>
                </div>
            </a>
        )
    }


}



export default Navigation;

{/* <path  d="M6 0L0 4.88V12h4.5V7h3v5H12V4.88L6 0z" fill="black"></path> */}