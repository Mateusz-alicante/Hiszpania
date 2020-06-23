import React from 'react'

import styles from './SimpleFair.module.css'
import { Link } from 'react-router-dom'

import moment from 'moment'
import 'moment/locale/pl';

const SimpleArticle = ({fair}) => (

        <Link className={styles.link} to={"/fairs/" + fair._id} >
            <div className={styles.container}>
                <h1 className={styles.title}>{fair.title}</h1>

                <h3 className={styles.subtitle}>{fair.subtitle}</h3>
                <div className={styles.imageContainer}>
                    <img src={fair.image} className={styles.image} />
                    <p className={styles.imageDescription}>{fair.imageDescription}</p>
                </div>
                <div className={styles.gridContainer}>

                <div className={styles.bottomGrid}>
                    <p className={styles.category}><span className={styles.innerLabel}>Kategoria:</span>{fair.category}</p>
                    <p className={styles.date}><span className={styles.innerLabel}>Daty:</span> {moment(fair.startDate).locale('pl').format("D/MM/YYYY")} -- {moment(fair.endDate).locale('pl').format("D/MM/YYYY")}</p>
                    <p className={styles.location}><span className={styles.innerLabel}>Położenie:</span> {fair.location}</p>
                </div>
                </div>
            </div>
        </Link>

    )

export default SimpleArticle