import React from 'react'
import moment from 'moment'

import styles from './SimplePage.module.css'

// confirmation alert
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

class SimplePage extends React.Component {

    alertDelete = () => {
        confirmAlert({
            title: 'Czy na pewno chcesz wykasować stronę?',
            message: `Po konfirmacjii strona pod tytułem ${this.props.page.title} zostanie skasowana.`,
            buttons: [
                {
                    label: 'Tak',
                    onClick: () => this.removePage()
                },
                {
                    label: 'Nie',
                    
                }
            ]
        });
    }

    removePage = async () => {
        const response = await axios.get('/api/content/deletePage/' + this.props.page._id, {
            headers: {
                authorization: this.props.redux.auth.token
            }
        }).catch((e) => {
            toast.error(`Wystąpił błąd podczas kasowania strony. ${e.response.data} `)
        })
        
        if (response && response.status == 200) {
            toast.success(`Strona została domyślnie skasowana`)
            this.props.rerender()
        }
      
    }

    editArticle = () => {
        this.props.history.push('/user/pages/edit/' + this.props.page.url)
    }

    render() {

        return (
            <div className={styles.container}>

                <div className={styles.buttonContianer}>
                    <button className={styles.editButton} onClick={this.editArticle}>edytuj</button>
                    <button className={styles.deleteButton} onClick={this.alertDelete}>kasuj</button>
                </div>

                <h3>Tytuł strony:</h3>
                <p>{this.props.page.title}</p>

                <h3>Ostatnio edytowana:</h3>
                <p>{moment(this.props.page.createdAt).locale('pl').format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(withRouter(SimplePage))