import React from "react";
import ButtonInfo from "./ButtonInfo";

const Footer = () => {
    const socialNetworks = [
        { 
            name: 'Gmail', 
            url: 'mailto:luisccc99@gmail.com',
            image: 'https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg'
        },
        { 
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/luis-cccc/',
            image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
        }, 
        { 
            name: 'GitHub', 
            url: 'https://github.com/luisccc99',
            image: 'https://cutewallpaper.org/24/github-logo-png/github-logo-icon-free-download-on-iconfinder.png'
        }
    ];

    const buttons = socialNetworks.map((elem, index) => {
        return (
            <ButtonInfo key={index} link={elem.url} title={elem.name} image={elem.image}/> 
        );
    });

    return (
        <div className="business-card__footer">
            {buttons}
        </div>
    );
};

export default Footer;