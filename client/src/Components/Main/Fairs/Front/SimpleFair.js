import React from 'react'

import styles from './SimpleFair.module.css'
import { Link } from 'react-router-dom'

import moment from 'moment'
import 'moment/locale/pl';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { toast } from 'react-toastify'

import { setRender } from '../../../Utils/Redux/Actions/Render'

class SimpleArticle extends React.Component {

    warnDelteArticle = () => {
        confirmAlert({
            title: 'Czy na pewno chcesz wykasować targi?',
            message: `Po konfirmacjii targi pod tytułem ${this.props.fair.title} zostaną skasowane.`,
            buttons: [
                {
                    label: 'Tak',
                    onClick: () => this.deleteArticle()
                },
                {
                    label: 'Nie',

                }
            ]
        });

    }

    deleteArticle = async () => {
        const response = await axios.get('/api/content/deleteFair/' + this.props.fair._id, {
            headers: {
                authorization: this.props.redux.auth.token
            }
        }).catch((e) => {
            toast.error(`Wystąpił błąd podczas kasowania targów. ${e.response.data} `)
        })

        if (response && response.status == 200) {
            toast.success(`Targ został domyślnie skasowany`)
            console.log('setting front to true')
            await this.props.dispatch(setRender('front', true))
        }
    }


    render() {
        const { fair, redux } = this.props
        return (
            <div className={styles.container}>
            {redux.auth.isAdmin && (
                <div className={styles.buttonContianer}>
                    <button className={styles.editButton} onClick={() => this.props.history.push('/user/newFair/' + this.props.fair._id)}>edytuj</button>
                    <button className={styles.deleteButton} onClick={this.warnDelteArticle} >kasuj</button>
                </div>
            )}
                <Link className={styles.link} to={"/fairs/" + fair._id} >
                    <div >
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

            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(withRouter(SimpleArticle))
