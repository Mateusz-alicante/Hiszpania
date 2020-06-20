import React from 'react'
import axios from 'axios'

import { setAuthToken } from '../Utils/Redux/Actions/Auth'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

class Login extends React.Component {
    state = {
        auth: {
            email: "",
            password: ""
        },
        status: ""
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
        }).catch((e) => this.setState({status: `Error: ${e.response.data}`}))

        if ( response && response.status == 200) {
            this.setState({status: "Successfully created new user!"})
            this.props.dispatch(setAuthToken({ token: response.headers['x-auth-token']}))
        }
    }

    

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <label>email</label>
                    <input type="text" value={this.state.auth.email} onChange={(e) => this.onLoginChange(e.target.value)}/>
                    
                    <label>password</label>
                    <input type="password" value={this.state.auth.password} onChange={(e) => this.onPasswordChange(e.target.value)}/>

                    <button>Submit</button>
                </form>
                <p>{this.state.status}</p>
                <Link to="/login/new">Create new account</Link>
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