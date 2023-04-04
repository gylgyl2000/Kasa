import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO.svg";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.navigation}>
            <img src={Logo} alt="Logo Kasa" />
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? `${styles.active}` : ""}>Accueil</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? `${styles.active}` : ""}>A propos</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;