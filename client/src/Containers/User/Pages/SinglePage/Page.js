import React from 'react'
import Axios from 'axios'
import { toast } from 'react-toastify';

import styles from './Page.module.css'

class Page extends React.Component {

    state = {
        pageTitle: "",
        pageBody: "",
        pageURL: this.props.match.params.url
    }

    componentDidUpdate() {
        if (this.state.pageURL != this.props.match.params.url) {
            this.setState({pageURL: this.props.match.params.url})
            this.fetchPage()
        }
    }

    componentDidMount() {
        this.fetchPage()
    }

    fetchPage = async () => {
        const response = await Axios.get('/api/content/loadPage/' + this.props.match.params.url)
        .catch((e) => toast.error(`Wystąpił błąd podczas ładowania artykułu. ${e} `))
        
        console.log(response)
        if (response.status == 200) {
            const data = response.data
            this.setState({
                pageTitle: data.title,
                pageBody: data.body
            })
        } 
    }

    render() {   

        return (
            <div className={styles.container}>
                <h2 className={styles.title}>{this.state.pageTitle}</h2>
                <div className={styles.article}>
                    <div className="ck-content" dangerouslySetInnerHTML={{ __html: this.state.pageBody}} />
                </div>
            </div>
        )
    }
}

export default Page