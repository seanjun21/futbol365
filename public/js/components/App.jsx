import React from 'react';
import NavBar from './landing/NavBar';

function App(props) {
    return (
        <div className='app'>
            <NavBar />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default App;