import React from "react";
import ButtonInfo from "./ButtonInfo";

const Footer = (props) => {
    const socialNetworks = {
        email: 'mailto:luisccc99@gmail.com',
        linkedin: 'https://www.linkedin.com/in/luis-cccc/'
    }

    return (
        <div className="business-card__footer">
            <ButtonInfo link={socialNetworks.linkedin} title="LinkedIn" />
            <ButtonInfo link={socialNetworks.email} title="Email"/>
        </div>
    );
};

export default Footer;