import React from 'react'

import styles from './SimpleArticle.module.css'
import { Link } from 'react-router-dom'

const SimpleArticle = ({
    image,
    imageDescription,
    title,
    id,
    subtitle
}) => (
        <Link className={styles.link} to={"/articles/"+id} >
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={image} className={styles.image} />
                    <p className={styles.imageDescription}>{imageDescription}</p>
                </div>
                <div className={styles.gridContainer}>
                    <h1 className={styles.title}>{title}</h1>

                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
            </div>
        </Link>

    )

export default SimpleArticle