import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Editor from '../../Editor/Editor'
import Login from '../../Login/Main.js'
import Header from '../../Header/Header'
import FrontPage from '../../Main/Articles/Front/Front'
import SingleArticle from '../../Main/Articles/Single/Single'

import UserRouter from '../UserRouter/UserRouter'

const Router = (props) => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact component={FrontPage}  />
            <Route path="/articles/:id" component={SingleArticle} />
            <Route path="/new" exact component={Editor}  />
            <Route path="/user" exact={false} component={UserRouter} />
        </Switch>
    </BrowserRouter>
)

export default Router