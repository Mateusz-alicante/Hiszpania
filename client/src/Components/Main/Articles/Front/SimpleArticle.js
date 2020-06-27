import React from 'react'

import styles from './SimpleArticle.module.css'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

// confirmation alert
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

import {setRender} from '../../../Utils/Redux/Actions/Render'

class SimpleArticle extends React.Component {

    warnDelteArticle = () => {
        confirmAlert({
            title: 'Czy na pewno chcesz wykasować artykuł?',
            message: `Po konfirmacjii artykuł pod tytułem ${this.props.title} zostanie skasowany.`,
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
        const response = await axios.get('/api/content/deleteArticle/' + this.props.id, {
            headers: {
                authorization: this.props.redux.auth.token
            }
        }).catch((e) => {
            toast.error(`Wystąpił błąd podczas kasowania artykułu. ${e.response.data} `)
        })
        
        if (response && response.status == 200) {
            toast.success(`Artykuł został domyślnie skasowany`)
            this.props.dispatch(setRender('front', true))
        }
    }



    render() {
        const {
            image,
            imageDescription,
            title,
            id,
            subtitle,
            redux
        } = this.props

        return (
            <div className={styles.container}>

                {redux.auth.isAdmin && (
                    <div className={styles.buttonContianer}>
                        <button className={styles.editButton} onClick={() => this.props.history.push('/user/newArticle/' + id)}>edytuj</button>
                        <button className={styles.deleteButton} onClick={this.warnDelteArticle} >kasuj</button>
                    </div>
                )}
                <Link className={styles.link} to={"/articles/" + id} >
                    <div className={styles.imageContainer}>
                        <img src={image} className={styles.image} />
                        <p className={styles.imageDescription}>{imageDescription}</p>
                    </div>
                    <div className={styles.gridContainer}>
                        <h1 className={styles.title}>{title}</h1>

                        <p className={styles.subtitle}>{subtitle}</p>
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