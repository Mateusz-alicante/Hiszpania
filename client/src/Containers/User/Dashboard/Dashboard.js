import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './dashboard.module.css'

import logoutIcon from './DashboardIcons/logout.svg'
import newArticle from './DashboardIcons/new article.svg'
import me from './DashboardIcons/me.svg'
import list from './DashboardIcons/list.svg'
import social from './DashboardIcons/social.svg'

import { logout } from '../../../Components/Utils/Redux/Actions/Auth'

class Dashboard extends React.Component {

    logout = () => {
        this.props.dispatch(logout())
        this.props.history.push('/')
        toast.success("Zostałeś pomyślnie wylogowany z konta")
    }

    redirectTo = (path) => this.props.history.push(path)

    render() {
        const isAdmin = this.props.redux.auth.isAdmin
        return (
            <div className={styles.container} >
                <div className={styles.grid} >
                    {isAdmin && <img onClick={() => this.redirectTo('/user/newArticle/new')} src={newArticle} />}
                    {isAdmin && <img src={list} onClick={() => this.redirectTo('/user/newFair/new')} />}
                    {isAdmin && <img src={social} onClick={() => this.redirectTo('/user/pages')} />}
                    <img src={me} />
                    <img onClick={this.logout} src={logoutIcon} />
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(withRouter(Dashboard))