import React from "react";

//Styles
import styles from './Hero.module.css'
import { Div } from './HeroImage.style'

//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../server/config'

const HeroImage = ({ image, title, summary }) => (
    <Div
        desktopImage={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${image.backdrop}`}
        mobileImage={`${IMAGE_BASE_URL}${POSTER_SIZE}${image.poster}`}
    >
        <div className={styles["description-container"]}>
            <div className={styles.description}>
                <h1>{title}</h1>
                <p>{summary}</p>
            </div>
        </div>
    </Div>
)
export default HeroImage;