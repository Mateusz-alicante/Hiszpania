import React from 'react'

import { connect } from 'react-redux'

const Dashboard = (props) => (
    <div>
        <p>This is my dashboard</p>
    </div>
)

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(Dashboard)