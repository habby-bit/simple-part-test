import React from 'react';

const Category = ({ title, src }) => {
    return (
        <div className="categoryContainer">
            <h4>{title}</h4>
            <div className="bottomCard">
                <a href="#!">See more</a>
                <img src={src} alt={title}/>
            </div>
        </div>
    )
}

export default Category;