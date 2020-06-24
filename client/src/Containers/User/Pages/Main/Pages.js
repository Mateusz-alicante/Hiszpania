import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

import styles from './Pages.module.css'
import SimplePage from './SimplePage/SimplePage'
import { relativeTimeThreshold } from 'moment'

class Pages extends React.Component {

    state={
        pages: []
    }

    componentDidMount() {
        this.fetchPages()
    }

    rerender = () => this.fetchPages()

    fetchPages = async () => {
        const response = await axios.get('/api/content/loadFullPages', {
            headers: {
                authorization: this.props.redux.auth.token
            }
        }).catch((e) => toast.error(`Wystąpił błąd podczas ładowania stron. ${e.response.data}`))

        if (response.status == 200) {
            this.setState({ pages: response.data})

        }
    }

    render() {
        return (
            <div>
                <div className={styles.buttonContainer}>
                    <Link className={styles.NewLink} to="/user/pages/edit/new">
                        <h3>Nowa strona</h3>
                        <span className="material-icons">add_circle_outline</span>
                    </Link>
                </div>

                <div>
                    <h2 className={styles.siteLabel}>Twoje strony:</h2>
                        {this.state.pages.map((page) => (
                            <SimplePage page={page} key={page._id} rerender={this.rerender} />
                        ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(Pages)