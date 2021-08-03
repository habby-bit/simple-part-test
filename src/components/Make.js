import React from 'react';

const Make = ({ title, src }) => {
    return (
        <div className="makeContainer">
            <a href="#!">
                <p>{title}</p>
                <img src={src} alt={title}/>
            </a>
        </div>
    )
}

export default Make;