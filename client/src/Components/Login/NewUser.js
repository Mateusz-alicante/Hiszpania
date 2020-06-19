import React from 'react'
import axios from 'axios'

import { setAuthToken } from '../Utils/Redux/Actions/Auth'
import { connect } from 'react-redux'

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
        }).catch((e) => this.setState({status: `Error: ${e.response.data}`}))
        

        if ( response && response.status == 200) {
            this.setState({status: "Successfully created new user!"})
            this.props.dispatch(setAuthToken({ token: response.headers['x-auth-token']}))
        }
    }

    testAuth = () => {
        console.log(this.props.redux)
        axios.get('/api/auth/test', {
            headers: {
                authorization: this.props.redux.auth.token
            }
        }).catch((e) => console.log(e)).then((res) => console.log(res))
    }



    render() {
        return (
            <div>
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <label>email</label>
                    <input type="text" value={this.state.auth.email} onChange={(e) => this.onLoginChange(e.target.value)}/>
                    
                    <label>password</label>
                    <input type="password" value={this.state.auth.password} onChange={(e) => this.onPasswordChange(e.target.value)}/>

                    <label>name</label>
                    <input type="text" value={this.state.auth.name} onChange={(e) => this.onNameChange(e.target.value)}/>

                    <button>Submit</button>
                </form>
                <p>{this.state.status}</p>
                <button onClick={this.testAuth}>Test Auth</button>
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