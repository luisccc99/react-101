import React from 'react';

const ButtonInfo = (props) => {
    return(
        <div>
            <a className="btn-contact" href={props.link}>{props.title}</a>
        </div>
    );
};

export default ButtonInfo;