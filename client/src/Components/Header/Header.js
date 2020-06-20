import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => (
    <div>
        <h1 className={styles.title}>Biznes w Hiszpanii</h1>
        <div className={styles.NavContainer}>
            <NavLink className={styles.NavLink} to="/" >Home</NavLink>
            <NavLink className={styles.NavLink} to="/new" >New Article</NavLink>
            <NavLink className={styles.NavLink} to="/login" >Login</NavLink>
        </div>
    </div>
)

export default Header