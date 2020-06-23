import React from 'react'

import Loader from '../../../../Containers/Reusable/Loader/Loader'
import SimpleFair from './SimpleFair'

class Front extends React.Component {

    handleInnerComponent = (fair) => (
        <SimpleFair key={fair._id} fair={fair} />
    )
     
    render() {
        return (
            <Loader 
                url="/api/content/loadFairs"
                inner={this.handleInnerComponent}
            />
        )
    }
}

export default Front