import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'
import image from './logo.png'

const Header = () => (
    <div className={styles.Header}>
        <img className={styles.logo} src={image} />
        <div className={styles.NavContainer}>
            <NavLink activeClassName={styles.NavLinkActive} className={styles.NavLink} exact to="/" >Home</NavLink>
            <NavLink activeClassName={styles.NavLinkActive} className={styles.NavLink} to="/new" exact >New Article</NavLink>
            <NavLink activeClassName={styles.NavLinkActive} className={styles.NavLink} to="/login" exact >Login</NavLink>
        </div>
    </div>
)

export default Header