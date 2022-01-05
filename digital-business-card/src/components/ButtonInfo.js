import React from 'react';

const ButtonInfo = (props) => {
    return(
        <div className='btn-contact'>
            
            <a className="link__btn-contact" href={props.link}>
                <img src={props.image} width='35' alt={props.title} />
            </a>
        </div>
    );
};

export default ButtonInfo;