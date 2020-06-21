import React from 'react'
import axios from 'axios'

import setAuthInfo from '../../Utils/Redux/Actions/Auth'
import { connect } from 'react-redux'

import { Link, Redirect } from 'react-router-dom'
import styles from './Login.module.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component {
    state = {
        auth: {
            email: "",
            password: ""
        },
        status: "",
        redirect: false
    }

    onLoginChange = (value) => this.setState((oldState) => ({
        auth: {
            ...oldState.auth,
            email: value
        }
    }))

    onPasswordChange = (value) => this.setState((oldState) => ({
        auth: {
            ...oldState.auth,
            password: value
        }
    }))

    onFormSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post('/api/auth/login', {
            email: this.state.auth.email,
            password: this.state.auth.password
        }).catch((e) => this.setState({ status: `Error: ${e.response.data}` }))

        if (response && response.status == 200) {
            this.setState({ status: "Successfully created new user!" })
            this.props.dispatch(setAuthInfo({ token: response.headers['x-auth-token'], ...response.data }))
            this.loginSuccessful()
        }

        console.log(response)
    }

    loginSuccessful = () => {
        toast.success("Pomyślnie zalogowałeś się na konto!, przekierowano Cię do pulpitu nawigacyjnego konta", {
            autoClose: 6000,
        })
        this.setState({ redirect: '/user' })
    }



    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Login:</h1>
                <form className={styles.form} onSubmit={(e) => this.onFormSubmit(e)}>
                    <label>email:</label>
                    <input type="text" value={this.state.auth.email} onChange={(e) => this.onLoginChange(e.target.value)} />

                    <label>password:</label>
                    <input type="password" value={this.state.auth.password} onChange={(e) => this.onPasswordChange(e.target.value)} />
                    <div className={styles.buttonContainer}>
                        <button>Prześlij</button>
                    </div>
                </form>
                <Link to="/user/new">Create new account</Link>
                {this.state.redirect && <Redirect to={this.state.redirect} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}

export default connect(mapStateToProps)(Login)