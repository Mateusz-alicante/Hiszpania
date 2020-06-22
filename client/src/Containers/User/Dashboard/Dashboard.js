import React from 'react'

import { connect } from 'react-redux'
import styles from './dashboard.module.css'

import logout from './DashboardIcons/logout.svg'
import newArticle from './DashboardIcons/new article.svg'
import me from './DashboardIcons/me.svg'
import list from './DashboardIcons/list.svg'
import social from './DashboardIcons/social.svg'

const Dashboard = (props) => (
    <div className={styles.container} >
        <div className={styles.grid} >
            {props.redux.auth.isAdmin && <img src={newArticle} />}
            {props.redux.auth.isAdmin && <img src={list} />}
            {props.redux.auth.isAdmin && <img src={social} />}
            <img src={me} />
            <img src={logout} />
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(Dashboard)