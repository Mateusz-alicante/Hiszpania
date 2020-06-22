import React from 'react'
import axios from 'axios'

import styles from './Single.module.css'

class Single extends React.Component {

    state = {
        articleInfo: {
            title: "",
            subtitle: "",
            image: "",
            imageDescription: "",
            createdAt: "",
            author: "",
            tags: [],
            body: ""
        }
    }

    componentDidMount() {
        if (this.props.load !== 'fromProps') {
            this.fetchArticle()
        }
    }

    fetchArticle = async () => {
        const response = await axios.get('/api/content/loadSingleArticle', {
            params: {id: this.props.match.params.id}
        })
        .catch((e) => console.log(e))

        console.log(response)
        this.setState((state) => ({
            ...state,
            articleInfo: {
                ...response.data
            }
        }))
    }

    render() {
        let article = {}
        if (this.props.load === 'fromProps') {
            article = this.props.data
        } else {
            article = this.state.articleInfo
        } 
        return (
            <div className={styles.mainContainer}>
                <div className={styles.imageContainer} >
                    <img className={styles.image} src={article.image} />
                    <p className={styles.imageDescription}>{article.imageDescription}</p>
                </div>
                <div>
                    <h1 className={styles.title}>{article.title}</h1>
                    <h3 className={styles.subTitle}>{article.subtitle}</h3>
                </div>
                <div className={styles.bodyContainer}>
                    <div className="ck-content" dangerouslySetInnerHTML={{__html: article.body}} />
                </div>
            </div>
        )
}}

export default Single