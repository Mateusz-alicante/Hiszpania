import React from 'react'
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'

import Login from './Login'
import NewUser from './NewUser'

const RouterLogin = () => (
        <div>
            <p>Login page</p>
            <Route path="/login" exact component={Login} />
            <Route path="/login/new" component={NewUser} />
        </div>
        
)

export default RouterLogin