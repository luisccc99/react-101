import React from 'react';

const CardPhoto = (props) => {
    return (
        <div className='personal-image-container'>
            <img className="personal-image" src={props.image} alt="Luis Cruz"/>
        </div>
    );
};

export default CardPhoto;