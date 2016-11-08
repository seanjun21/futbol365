import React from 'react';
import LoginForm from './LoginForm';

function NavBar() {
    return <nav className="navbar navbar-inverse">
        <div className="container">

            {/* Brand Name */}
            <div className="navbar-header">
                <div className="navbar-brand">Futbol365</div>
            </div>

            {/* Login */}
            <LoginForm />
        </div>
    </nav>
}

export default NavBar;