import React from 'react';

const Make = ({title, src}) => {
    return (
        <>
            <h1><a href="#">{title}</a></h1>
            <a href="#"><img src={src}/></a>
        </>
    )
}

export default Make;