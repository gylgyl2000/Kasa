import React from 'react';
import StarsActive from "../../assets/star-fill.svg"
import StarsInactive from "../../assets/star-empty.svg"
import styles from "./Rating.module.css"

const Rating = (props) => {

    let content = []

    for (let i = 0; i < 5; i++) {
        content.push(<img key={i} src={(i < props.rate) ? StarsActive : StarsInactive} alt="Rating"/>)
    }

    return (
        <div className={styles.star}>
            {content}
        </div>
    );
};

export default Rating;