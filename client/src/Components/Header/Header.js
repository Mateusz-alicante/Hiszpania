import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'
import image from './logo.svg'
import userIcon from './user.svg'

const Header = () => (
    <div className={styles.Header}>
        <img className={styles.logo} src={image} />
        <div className={styles.NavContainer}>
            <NavLink activeClassName={styles.NavLinkActive} className={styles.NavLink} exact to="/" >Home</NavLink>
            <NavLink activeClassName={styles.NavLinkActive} className={styles.imageLink} to="/user" ><img className={styles.userIcon} src={userIcon} /></NavLink>
        </div>
    </div>
)

export default Header