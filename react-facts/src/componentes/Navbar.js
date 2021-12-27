import React from 'react';
import logo from '../images/logo.svg'

const Navbar = () => {
    return (
        <nav id="navbar">
            <div id="title-logo">
                <img src={logo} alt="React Logo" />
                <h3>ReactFacts</h3>
            </div>
            <h4 className='margin-right'>React Course - Project 1</h4>
        </nav>
    );
};

export default Navbar;