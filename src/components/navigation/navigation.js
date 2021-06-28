import React from 'react';
import styles from "./navigation.module.css";


class Navigation extends React.Component {
    render() {
        const { title, header, activeState } = this.props
        
        return(
            <a className={styles.navItemLink}>
                <div className={styles.navItemContainer}>
                    <div className={styles.navItemImgContainer}>
                        <div className={styles.navItemImgWrap}>
                            {/* <img width="12" height="12" src={"./images/home.png"}></img> */}
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path className={activeState === header ? `${styles.activeIcon}` : null} d="M6 0L0 4.88V12h4.5V7h3v5H12V4.88L6 0z" fill="black"></path></svg>
                        </div>
                    </div>
                    <span className={styles.navItemText}>{title}</span>
                </div>
            </a>
        )
    }


}

export default Navigation;