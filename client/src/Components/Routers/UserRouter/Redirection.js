import React from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const RedirectComponent = (props) => (
    <div>
        {!props.redux.auth.isLoggedIn && <Redirect to="/user/login" />}
        {props.redux.auth.isLoggedIn && <Redirect to="/user/dashboard" />}
        
    </div>
)

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(RedirectComponent)