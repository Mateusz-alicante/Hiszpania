import React from 'react'

import { connect } from 'react-redux'

const Dashboard = (props) => (
    <div>
        <div>
        
        
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(Dashboard)