import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'
import image from './logo.svg'
import userIcon from './user.svg'
import Axios from 'axios'

import {connect} from 'react-redux'
import { setRender } from '../Utils/Redux/Actions/Render'

class Header extends React.Component {
    state = {
        customLinks: []
    }

    componentDidMount() {
        this.fethUrls()
    }

    fethUrls = async () => {
        const response = await Axios.get('/api/content/loadPagesUrls')

        this.setState((oldState) => ({ customLinks: [...oldState.customLinks, ...response.data] }))
    }

    componentDidUpdate() {
        if (this.props.redux.render.header) {
            this.setState({customLinks: []})
            this.fethUrls()
            this.props.dispatch(setRender('header', false))
        }
    }

    render() {
        return (
            <div className={styles.Header}>
                <img className={styles.logo} src={image} />

                <div className={styles.NavContainer}>
                    <div className={styles.overflowNav}>

                        <NavLink activeClassName={styles.NavLinkActive} className={styles.NavLink} exact to="/" >Artykuły</NavLink>
                        <NavLink activeClassName={styles.NavLinkActive} className={styles.NavLink} exact to="/fairs" >Targi</NavLink>


                        {this.state.customLinks.map((link) => (
                            <NavLink key={link.url} activeClassName={styles.NavLinkActive} className={styles.NavLink} exact to={"/customPage/" + link.url} >{link.title}</NavLink>)
                        )}
                    </div>




                    <div className={styles.iconcontainer}>
                        <NavLink activeClassName={styles.NavLinkActive} className={styles.imageLink} to="/user" ><img className={styles.userIcon} src={userIcon} /></NavLink>
                    </div>


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(Header)