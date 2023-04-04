import React from 'react';
import styles from "./Cards.module.css"
import Card from '../Card/Card';

const Cards = (props) => {
    return (
        <div className={styles.cards}>
            {props.data.map((el)=> (
                <Card key={el.id} titre={el.title} cover={el.cover} id={el.id}/>
            ))}
        </div>
    );
};

export default Cards;