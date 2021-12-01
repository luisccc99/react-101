import React from 'react';
import logo from '../logo.svg'
console.log(logo);

const Navbar = () => {
    return (
        <nav id="navbar">
            <div id="title-page">
                <img src={logo} alt="React Logo" />
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    );
};

export default Navbar;