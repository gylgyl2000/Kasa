import React from 'react';
import Logo from "../../assets/LOGO.png"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerBox}>
                <img src={Logo} alt="Logo Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;