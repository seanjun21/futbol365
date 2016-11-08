import React from 'react';
import SigupForm from './SignUpForm';

function LandingPage() {
    return <div>
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

export default LandingPage;
