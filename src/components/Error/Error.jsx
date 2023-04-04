import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Error.module.css"


const Error = () => {
    return (
        <div className={styles.error}>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className={styles.link} to="/"> 
                <p>Retourner sur la page d’accueil</p>
            </Link>
        </div>
    );
};

export default Error;