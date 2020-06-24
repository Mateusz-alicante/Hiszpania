import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

class Pages extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Link to="/user/pages/edit/new">
                        <h3>Nowa strona</h3>
                        <span className="material-icons">add_circle_outline</span>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(Pages)