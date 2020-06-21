import React from 'react';

import Router from '../../Components/Routers/MainRouter/Router'
import styles from './root.module.css'

const Root = () => (
    <div className={styles.root}>
        <div className={styles.container}>
            <Router />
        </div> 
    </div>
)


export default Root;
