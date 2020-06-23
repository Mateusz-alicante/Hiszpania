import React from 'react'

import Loader from '../../../../Containers/Reusable/Loader/Loader'

import Article from './SimpleArticle'

class Front extends React.Component {

    handleInnerComponent = (article) => (
        <Article
            key={article._id}
            id={article._id}
            image={article.image}
            imageDescription={article.imageDescription}
            title={article.title}
            subtitle={article.subtitle}
            style={{margin: '5%'}} />
    )

    render() {
        return (
            <Loader
                url="/api/content/loadArticles"
                inner={this.handleInnerComponent}
            />
        )
    }
}

export default Front