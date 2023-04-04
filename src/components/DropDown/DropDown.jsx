import React, { useState } from 'react';
import Logo from "../../assets/arrowDown.png";
import styles from './DropDown.module.css';

const DropDown = (props) => {

    const [anim, setAnime] = useState(false)

    const classToggle = () => {
        setAnime(!anim)
    }

    return (
        <div className={styles.all}>
            <div className={styles.info} onClick={classToggle}>
                <h4>{props.titre}</h4>
                <div className={`${styles.icon} ${anim ? `${styles.iconSwitch}`:""}`}>
                    <img src={Logo} alt="Flèche descendante" />
                </div>
            </div>
            <div className={`${styles.desc} ${anim ? `${styles.switch}`:""}`}>
                {(Array.isArray(props.texte) ? (
                    <ul>
                        {props.texte.map((value) => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                ) : (<p>{props.texte}</p>))}
            </div>
        </div>
    );
};

export default DropDown;