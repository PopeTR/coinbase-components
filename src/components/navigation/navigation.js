import React from 'react';
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = ({ title, header, activeState }) => {
 
    const handleTitle = (title) => {
        if (title.includes("-")) {
            const words = title.split("-")
            const newWords = words.map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1)
            }) 
            return newWords.join(" ")
        } else { return title }
    }
    
    return(
        <Link to={`/${title}`} className={styles.navItemLink}>
            <div className={styles.navItemContainer}>
                <div className={styles.navItemImgContainer}>
                    <div className={styles.navItemImgWrap}>
                        {/* <img width="12" height="12" src={"./images/home.png"}></img> */}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path className={activeState === header ? `${styles.activeIcon}` : null} d="M6 0L0 4.88V12h4.5V7h3v5H12V4.88L6 0z" fill="black"></path></svg>
                    </div>
                </div>
                <span className={styles.navItemText}>{handleTitle(title)}</span>
            </div>
        </Link>
    )
}


export default Navigation;