import React from 'react';

const Banner = (props) => {
    return (
        <div className={props.classBanner}>
            <h1>{props.title}</h1>
        </div>
    );
};

export default Banner;