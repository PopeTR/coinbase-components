import React from 'react';
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const Navigation = ({ title, header, logoBlack, logoBlue, activeState }) => {
 
    const handleTitle = (title) => {
        if (title.includes("-")) {
            const words = title.split("-")
            const newWords = words.map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1)
            }) 
            return newWords.join(" ")
        } else { return title }
    }

    const svgHandler = () => {
        if (activeState === header) {
            return parse(logoBlue.join(""))  
        } else {
            return parse(logoBlack.join(""))   
        }
    }
    
    return(
        <Link to={`/${title}`} className={styles.navItemLink}>
            <div className={styles.navItemContainer}>
                <div className={styles.navItemImgContainer}>
                    <div className={styles.navItemImgWrap}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            {svgHandler()}
                        </svg>
                    </div>
                </div>
                <span className={styles.navItemText}>{handleTitle(title)}</span>
            </div>
        </Link>
    )
}


export default Navigation;