import React from 'react';

const Category = ({title, src}) => {
    return (
        <>
            <h3>{title}</h3>
            <a href="#">See more</a>
            <img src={src} />
        </>
    )
}

export default Category;