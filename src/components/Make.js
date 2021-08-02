import React from 'react';

const Make = ({title, src}) => {
    return (
        <>
            <h1><a href="#!">{title}</a></h1>
            <a href="#!"><img src={src} alt={title}/></a>
        </>
    )
}

export default Make;