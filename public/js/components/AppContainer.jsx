import React from 'react';
import NavBar from './landing/NavBar';

function AppContainer(props) {
    return (
        <div className='app-container'>
            <NavBar />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default AppContainer;