import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import PagesDashboard from '../Main/Pages'
import Editor from '../Editor/Editor'


const Router = (props) => (
    <div>
        <Route path="/user/pages" exact component={PagesDashboard} />
        <Route path="/user/pages/edit/:action" component={Editor} />
    </div>
)

export default Router