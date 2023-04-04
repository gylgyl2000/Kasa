import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Card.module.css"

const Card = (props) => {
    return (
        <Link to={`/property/${props.id}`} className={styles.card}>
           <img src={props.cover} alt="Background" />
           <h4>{props.titre}</h4>
        </Link>
    );
};

export default Card;