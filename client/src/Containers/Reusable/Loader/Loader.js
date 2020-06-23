import React from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import Loader from 'react-infinite-scroll-component'
import Spinner from '../Spinner/Spinner'

import styles from './Loader.module.css'


class Front extends React.Component {
    state = {
        loadedArticles: [],
        cycle: 0,
        hasMore: true
    }

    loadArticles = async () => {
        const response = await axios.get(this.props.url, {
            headers: {
                filters: this.props.redux.ArticleFilters,
                cycle: this.state.cycle
            }
        })

        this.setState((state) => ({cycle: state.cycle + 1}))

        if (response.data.length < 10) {
            this.setState({hasMore: false})
        }

        console.log(response)
        this.setState((state) => ({
            ...state,
            loadedArticles: [
                ...state.loadedArticles,
                ...response.data
            ]
        }))
    }

    componentDidMount() {
        this.loadArticles()
    }

    componentWillMount() {
        this.setState({ loadArticles: [], cycle: 0, hasMore: true})
    }

    render() {
        return(
            <div>  
                <Loader
                dataLength={this.state.loadedArticles.length / 2}
                next={this.loadArticles}
                hasMore={this.state.hasMore}
                loader={<Spinner />}
                >
                <div className={styles.articleContainer}>
                {this.state.loadedArticles.map((article) => this.props.inner(article))}
                </div>
                </Loader>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(Front)