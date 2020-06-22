import React, {Suspense} from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import loading from '../../../Containers/Reusable/Spinner/Spinner'
import Login from '../../Authentication/Login/Login'
import CreateUser from '../../Authentication/New/NewUser'
// import Dashboard from '../../../Containers/User/Dashboard/Dashboard'
import Redirect from './Redirection'

const DashboardComponent = React.lazy(() => import('../../../Containers/User/Dashboard/Dashboard'))
const Dashboard = () => (
    <Suspense fallback={loading}>
        <DashboardComponent />
    </Suspense>
)

const Router = (props) => (
    <div>
        <Route path="/user" exact component={Redirect} />
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/new" exact component={CreateUser} />
        <Route path="/user/dashboard" exact component={Dashboard} />
    </div>
)

export default Router