import React from "react";

const BodySection = (props) => {
    return (
        <div>
            <h3 className="body-section__title">{props.title}</h3>
            <p className="body-section__content">{props.content}</p>
        </div>
    );
};

export default BodySection;