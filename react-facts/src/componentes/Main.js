import React from 'react';

const Main = (props) => {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className='main--title'>Fun facts about React</h1>
            <ul className='main--facts'>
                <li>First released in 2013</li>
                <li>Created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    );
};

export default Main;