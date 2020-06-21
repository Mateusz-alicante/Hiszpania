import React from 'react'
import axios from 'axios'

import setAuthInfo from '../../Utils/Redux/Actions/Auth'
import { connect } from 'react-redux'

import { Link, Redirect } from 'react-router-dom'
import { toast } from 'react-toastify';

import style from './NewUser.module.css'

class NewUser extends React.Component {
    state = {
        auth: {
            email: "",
            password: "",
            name: ""
        },
        status: undefined
    }

    componentDidMount() {
        console.log(this.props.state)
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

    onNameChange = (value) => this.setState((oldState) => ({
        auth: {
            ...oldState.auth,
            name: value
        }
    }))

    onFormSubmit = async (e) => {
        e.preventDefault()
        
        const response = await axios.post('/api/auth/newUser', {
            email: this.state.auth.email,
            password: this.state.auth.password,
            name: this.state.auth.name
        }).catch((e) => toast.error(`Nieprawidłowe dane, oto szczegóły błędu: ${e.response.data}`))
        

        if ( response && response.status == 200) {
            this.setState({status: "Successfully created new user!"})
            this.props.dispatch(setAuthInfo({ token: response.headers['x-auth-token']}))
            this.CreateAccountSuccessful()

        }
    }



    CreateAccountSuccessful = () => {
        toast.success("Pomyślnie stworzono nowe konto!, przekierowano Cię do pulpitu nawigacyjnego konta", {
            autoClose: 6000,
        })
        this.props.history.push('/user')
    }


    render() {
        return (
            <div className={style.container}>
                <h1 className={style.title}>Stwórz nowe konto:</h1>
                <form className={style.form} onSubmit={(e) => this.onFormSubmit(e)}>
                    <label>email</label>
                    <input type="text" value={this.state.auth.email} onChange={(e) => this.onLoginChange(e.target.value)}/>
                    
                    <label>password</label>
                    <input type="password" value={this.state.auth.password} onChange={(e) => this.onPasswordChange(e.target.value)}/>

                    <label>name</label>
                    <input type="text" value={this.state.auth.name} onChange={(e) => this.onNameChange(e.target.value)}/>

                    <div className={style.buttonContainer}>
                        <button>Prześlij</button>
                    </div>
                </form>
                
                
                <Link to="/user">Login</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        redux: state
    }
}

export default connect(mapStateToProps)(NewUser)