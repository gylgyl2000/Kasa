import React from "react";
import DropDown from '../DropDown/DropDown';
import styles from './Collapse.module.css'

const Collapse = [
    {
        "id": "01",
        "title": "Fiabilité",
        "description": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        "id": "02",
        "title": "Respect",
        "description": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        "id": "03",
        "title": "Service",
        "description": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        "id": "04",
        "title": "Sécurité",
        "description": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]

const CollapseCard = () => {
    return (
        <div className={styles.infos}>
            {Collapse.map((el) => (
                <DropDown key={el.id} titre={el.title} texte={el.description}/>
            ))} 
        </div>
    );
};

export default CollapseCard;