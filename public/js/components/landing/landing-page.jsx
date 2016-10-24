import React from 'react';
import LoginForm from './login-form';
import SigupForm from './signup-form';

class LandingPage extends React.Component {

    render() {
        return <div>
            {/* NavBar */}
            <nav className="navbar navbar-inverse">
                <div className="container">

                    {/* Brand Name */}
                    <div className="navbar-header">
                        <div className="navbar-brand">Futbol365</div>
                    </div>

                    {/* Login */}
                    <LoginForm/>
                </div>
            </nav>

            {/* SignUp Section */}
            <div className="container">
                <div className="starter-template">

                    {/* Subtitle */}
                    <h1>Sign Up</h1>
                    <p className="lead">Follow Your Team's Dream Season</p>

                    {/* SignUp Form*/}
                    <SigupForm/>
                </div>
            </div>
        </div>
    }
}

export default LandingPage;
