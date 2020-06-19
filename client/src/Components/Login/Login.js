import React from 'react'
import axios from 'axios'

export default class Login extends React.Component {
    state = {
        auth: {
            login: "",
            password: ""
        }
    }

    onLoginChange = (value) => this.setState((oldState) => ({
        auth: {
            ...oldState.auth,
            login: value
        }
    }))

    onPasswordChange = (value) => this.setState((oldState) => ({
        auth: {
            ...oldState.auth,
            password: value
        }
    }))

    onFormSubmit = (e) => {
        e.preventDefault()
        
        axios.post('/api/auth/login', {
            login: this.state.auth.login,
            password: this.state.auth.password
        }).catch((e) => console.log(e))
    }


    render() {
        return (
            <div>
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <label>login</label>
                    <input type="text" value={this.state.auth.login} onChange={(e) => this.onLoginChange(e.target.value)}/>
                    
                    <label>password</label>
                    <input type="password" value={this.state.auth.password} onChange={(e) => this.onPasswordChange(e.target.value)}/>

                    <button />
                </form>
            </div>
        )
    }
}