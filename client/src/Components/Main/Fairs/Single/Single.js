import React from 'react'
import axios from 'axios'
import moment from 'moment'

import styles from './Single.module.css'

class Single extends React.Component {

    state = {
        fairInfo: {
            title: "",
            subtitle: "",
            image: "",
            imageDescription: "",
            createdAt: "",
            author: "",
            tags: [],
            body: "",
            startDate: 0,
            endDate: 0,
            category: "",
            location: ""
        }
    }

    componentDidMount() {
        if (this.props.load !== 'fromProps') {
            this.fetchFair()
        }
    }

    fetchFair = async () => {
        const response = await axios.get('/api/content/loadSingleFair', {
            params: { id: this.props.match.params.id }
        })
            .catch((e) => console.log(e))

        console.log(response)
        this.setState((state) => ({
            ...state,
            fairInfo: {
                ...response.data
            }
        }))
    }

    render() {
        let fair = {}
        if (this.props.load === 'fromProps') {
            fair = this.props.data
        } else {
            fair = this.state.fairInfo
        }
        return (
            <div className={styles.mainContainer}>


                <div className={styles.imageContainer} >
                    <img className={styles.image} src={fair.image} />
                    <p className={styles.imageDescription}>{fair.imageDescription}</p>
                </div>
                <div>
                    <h1 className={styles.title}>{fair.title}</h1>
                    <h3 className={styles.subTitle}>{fair.subtitle}</h3>
                </div>
                <div className={styles.dates}>
                    <h3><span className={styles.dateLabelSpan}>Kategoria targów: </span><span className={styles.dateSpan}>{fair.category}</span></h3>
                    <h3><span className={styles.dateLabelSpan}>Data rozpoczęcia targów: </span><span className={styles.dateSpan}>{moment(fair.startDate).locale('pl').format('Do dddd MMMM YYYY')}</span></h3>
                    <h3><span className={styles.dateLabelSpan}>Data zakończenia targów: </span><span className={styles.dateSpan}>{moment(fair.endDate).locale('pl').format('Do dddd MMMM YYYY')}</span></h3>
                    <h3><span className={styles.dateLabelSpan}>Położenie targów: </span><span className={styles.dateSpan}>{fair.location}</span></h3>
                </div>
                <div className={styles.bodyContainer}>
                    <div className="ck-content" dangerouslySetInnerHTML={{ __html: fair.body }} />
                </div>
            </div>
        )
    }
}

export default Single