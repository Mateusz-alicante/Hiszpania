import React from 'react'

const SimpleArticle = ({
    image,
    imageDescription,
    title,
    id,
    subtitle
}) => (
    <div>
        <p>Article:</p>
        <img src={image} style={{ height: '10%'}} />
        <p>{imageDescription}</p>
        <p>{title}</p>
        <p>{subtitle}</p>
    </div>
)

export default SimpleArticle