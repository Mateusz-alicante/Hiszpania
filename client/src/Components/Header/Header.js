import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'
import image from './logo.svg'
import userIcon from './user.svg'
import Axios from 'axios'

class Header extends React.Component {
    state = {
        customLinks: []
    }

    componentDidMount() {
        this.fethUrls()
    }

    fethUrls = async () => {
        const response = await Axios.get('/api/content/loadPagesUrls')
        
        this.setState((oldState) => ({customLinks: [...oldState.customLinks, ...response.data]}))
    }

    render() {
        return (
            <div className={styles.Header}>
                <img className={styles.logo} src={image} />
                <div className={styles.NavContainer}>
                    <NavLink activeClassName={styles.NavLinkActive} className={styles.NavLink} exact to="/" >Artykuły</NavLink>
                    <NavLink activeClassName={styles.NavLinkActive} className={styles.NavLink} exact to="/fairs" >Targi</NavLink>
                    <NavLink activeClassName={styles.NavLinkActive} className={styles.imageLink} to="/user" ><img className={styles.userIcon} src={userIcon} /></NavLink>

                    <div className={styles.customLinks}>
                        {this.state.customLinks.map((customLink) => (
                            <NavLink key={customLink.url} activeClassName={styles.NavLinkActive} className={styles.NavLink} exact to={`/customPage/${customLink.url}`} >{customLink.title}</NavLink>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Header