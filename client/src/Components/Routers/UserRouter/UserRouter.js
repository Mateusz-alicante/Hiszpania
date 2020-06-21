import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Login from '../../Authentication/Login/Login'
import CreateUser from '../../Authentication/New/NewUser'
import Dashboard from '../../Main/UserDashboard/UserDashboard'
import Redirect from './Redirection'

const Router = (props) => (
    <div>
        <Route path="/user" exact component={Redirect} />
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/new" exact component={CreateUser} />
        <Route path="/user/dashboard" exact component={Dashboard} />
    </div>
)

export default Router