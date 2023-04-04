import react from 'react';
import { useParams } from "react-router-dom"
import Logement from "../../data/logements"
import Slider from '../Slider/Slider';
import DropDown from '../DropDown/DropDown';
import Rating from '../Rating/Rating';
import styles from './Property.module.css'

const Property = () => {
    const params = useParams()
    const id = params.id
    const data = Logement.find((logement) => logement.id === id)
    
    return (
        <div>
            {
                (<div className={styles.logements}>
                    <Slider slides={data.pictures} />
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <div className={styles.loc}>
                                <h1>{data.title}</h1>
                                <p>{data.location}</p>
                            </div>

                            <div className={styles.tag}>
                                {(Array.isArray(data.tags) ? (
                                    <ul>
                                        {data.tags.map((el) => (
                                            <li key={el} className={styles.backgroundColor}>{el}</li>
                                        ))}
                                    </ul>
                                ) : (<p>{data.tags}</p>))}
                            </div>
                        </div>
                        <div className={styles.identity}>
                            <div className={styles.host}>
                                <p className={styles.textColor}>{data.host.name}</p>
                                <img src={data.host.picture} alt="photo de profil" />
                            </div>
                            <div className={styles.stars}>
                                <Rating rate={data.rating}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dropDownProp}>
                        <div className={styles.pro}>
                            <DropDown titre="Description" texte={data.description}/>
                        </div>
                        <div className={styles.pro}>
                            <DropDown titre="Equipements" texte={data.equipments}/>
                        </div>
                    </div>
                </div>)
            }
       </div>
    );
};

export default Property;