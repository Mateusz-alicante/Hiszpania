import React, {Suspense} from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Login from '../../Authentication/Login/Login'
import CreateUser from '../../Authentication/New/NewUser'
import Redirect from './Redirection'

import Spinner from '../../../Containers/Reusable/Spinner/Spinner'

const DashboardComponent = React.lazy(() => import('../../../Containers/User/Dashboard/Dashboard'))
const Dashboard = () => (
    <Suspense fallback={<Spinner />} >
        <DashboardComponent />
    </Suspense>
)

const CreateArticleComponent = React.lazy(() => import('../../Editor/Articles/Editor.js'))
const CreateArticle = () => (
    <Suspense fallback={<Spinner />} >
        <CreateArticleComponent />
    </Suspense>
)

const CreateFairComponent = React.lazy(() => import('../../Editor/Fairs/Editor'))
const CreateFair = () => (
    <Suspense fallback={<Spinner />} >
        <CreateFairComponent />
    </Suspense>
)


const Router = (props) => (
    <div>
        <Route path="/user" exact component={Redirect} />
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/new" exact component={CreateUser} />
        <Route path="/user/dashboard" exact component={Dashboard} />
        <Route path="/user/newArticle" exact component={CreateArticle} />
        <Route path="/user/newFair" exact component={CreateFair} />
    </div>
)

export default Router