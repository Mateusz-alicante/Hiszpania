import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Header from '../../Header/Header'
import FrontPage from '../../Main/Articles/Front/Front'
import SingleArticle from '../../Main/Articles/Single/Single'

import FrontPageFairs from '../../Main/Fairs/Front/Front'
import SingleFair from '../../Main/Fairs/Single/Single'

import UserRouter from '../UserRouter/UserRouter'

import { ToastContainer } from 'react-toastify';

const Router = (props) => (
    <BrowserRouter>
        <Header />
        <Switch>

            <Route path="/" exact component={FrontPage}  />
            <Route path="/articles/:id" component={SingleArticle} />

            <Route path="/fairs" exact component={FrontPageFairs} />
            <Route path="/fairs/:id" component={SingleFair} />
            
            <Route path="/user" exact={false} component={UserRouter} />
        </Switch>
        <ToastContainer />
    </BrowserRouter>
)

export default Router