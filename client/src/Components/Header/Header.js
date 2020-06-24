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

        this.setState((oldState) => ({ customLinks: [...oldState.customLinks, ...response.data] }))
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
                            <NavLink activeClassName={styles.NavLinkActive} className={styles.NavLink} exact to={"/customPage/" + link.url} >{link.title}</NavLink>)
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

export default Header