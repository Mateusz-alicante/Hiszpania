import React from 'react'

import { NavLink } from 'react-router-dom'

const Header = () => (
    <div>
        <h1>Biznes w Hiszpanii</h1>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/new" >New Article</NavLink>
        <NavLink to="/login" >Login</NavLink>
    </div>
)

export default Header