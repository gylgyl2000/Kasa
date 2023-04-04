import { useState } from 'react';
import ArrowLeft from "../../assets/arrowLeft.png"
import ArrowRight from "../../assets/arrowRight.png"
import styles from './Slider.module.css'

const Slider = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <div className={styles.imgSlide}>
            <img className={styles.slides} src={slides[currentSlide]} alt={slides[currentSlide]} />
            {(slides.length > 1 ) ? (
                <>
                    <button className={styles.leftBtn} onClick={ () => setCurrentSlide( (currentSlide === 0) ? (slides.length -1) : (currentSlide -1) ) }>
                        <img className={styles.arrowImg} src={ArrowLeft} />
                    </button>
                    <button className={styles.rightBtn} onClick={() => setCurrentSlide( (currentSlide === slides.length-1) ? 0 : (currentSlide +1) )}>
                        <img className={styles.arrowImg} src={ArrowRight} />
                    </button>
                    <h2 className={styles.count}>{currentSlide +1}/{slides.length}</h2>
                </>
            ) : null}
            
        </div>
    );
};

export default Slider;