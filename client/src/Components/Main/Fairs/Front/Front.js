import React from 'react'

import Loader from '../../../../Containers/Reusable/Loader/Loader'
import SimpleFair from './SimpleFair'

import styles from './Front.module.css'

import Filters from '../../../../Containers/Reusable/ExpandableOptions/ExpandableOptions'


class Front extends React.Component {

    handleInnerComponent = (fair) => (
        <SimpleFair key={fair._id} fair={fair} />
    )

    render() {
        return (
            <div>
                <Filters />
                <Loader
                    type="fairs"
                    url="/api/content/loadFairs"
                    inner={this.handleInnerComponent}
                />
            </div>

        )
    }
}

export default Front