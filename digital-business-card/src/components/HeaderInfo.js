import React from 'react';
import CardPhoto from './CardPhoto';

const HeaderInfo = (props) => {
    return (
        <div>
            <CardPhoto image={props.image} />
            <h1 className='header-info__name'>{props.name}</h1>
            <p className='header-info__position'>{props.position}</p>
            <p className='header-info__website'>{props.website}</p>
        </div>
    );
};


export default HeaderInfo;