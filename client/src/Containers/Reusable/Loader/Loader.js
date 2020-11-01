import React from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import Loader from 'react-infinite-scroller'
import Spinner from '../Spinner/Spinner'

import styles from './Loader.module.css'
import { setRender } from '../../../Components/Utils/Redux/Actions/Render'

class Front extends React.Component {
    state = {
        loadedArticles: [],
        cycle: 0,
        hasMore: true,
        filters: this.props.redux.FairFilters
    }

    loadArticles = async () => {
        console.log('loading articles')
        const response = await axios.get(this.props.url, {
            headers: {
                filters: JSON.stringify(this.state.filters),
                cycle: this.state.cycle
            }
        })
        await this.setState((state) => ({cycle: state.cycle + 1}))

        if (response.data.length < 10) {
            await this.setState({hasMore: false})
        }

        await this.setState((state) => ({
            ...state,
            loadedArticles: [
                ...state.loadedArticles,
                ...response.data
            ]
        }))
    }

    next = async () => {
        await this.loadArticles()
    }

    checkUpdates = async () => {
        if (this.props.redux.FairFilters != this.state.filters) {
            this.setState({filters: this.props.redux.FairFilters, loadedArticles: [], cycle: 0, hasMore: true})
        }

        if (this.props.redux.render.front) {
            this.props.dispatch(setRender('front', false))
            await this.setState({loadedArticles: [], cycle: 0, hasMore: true}) 
        }
    }


    componentDidUpdate() {
       this.checkUpdates() 
    }



    render() {
        return(
            <div>  
                <Loader
                pageStart={0}
                loadMore={this.loadArticles}
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