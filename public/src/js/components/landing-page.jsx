import React from 'react';

function LandingPage() {

    return (
        <div>
            {/* NavBar */}
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">

                    {/* Brand Name */}
                    <div className="navbar-header">
                        <div className="navbar-brand">Futbol365</div>
                    </div>

                    {/* Login */}
                    <form id="signin" className="navbar-form navbar-right" role="form">
                        <div className="input-group"><span className="input-group-addon"><i
                            className="glyphicon glyphicon-user"/></span>
                            <input id="email" type="email" className="form-control" name="email" value=""
                                   placeholder="Email Address"/>
                        </div>
                        &nbsp;

                        <div className="input-group"><span className="input-group-addon"><i
                            className="glyphicon glyphicon-lock"/></span>
                            <input id="password" type="password" className="form-control" name="password" value=""
                                   placeholder="Password"/>
                        </div>
                        &nbsp;
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </nav>

            {/* SignUp Section */}
            <div className="container">
                <div className="starter-template">

                    {/* Subtitle */}
                    <h1>Sign Up</h1>
                    <p className="lead">Follow Your Team's Dream Season</p>

                    {/* SignUp Form*/}
                    <form className="form-horizontal">
                        <fieldset>

                            {/* Email */}
                            <div className="form-group"><label className="col-md-4 control-label"
                                                               htmlFor="email">Email</label>
                                <div className="col-md-4"><input id="email" name="email" type="text"
                                                                 placeholder="Enter your email id"
                                                                 className="form-control input-md" required=""/></div>
                            </div>

                            {/* Password */}
                            <div className="form-group"><label className="col-md-4 control-label"
                                                               htmlFor="password">Password</label>
                                <div className="col-md-4"><input id="password" name="password" type="password"
                                                                 placeholder="Enter a password"
                                                                 className="form-control input-md" required=""/></div>
                            </div>

                            {/* Favorite Team */}
                            <div className="form-group"><label className="col-md-4 control-label" htmlFor="contact">Favorite
                                Team</label>
                                <div className="col-md-4"><input id="contact" name="contact" type="text"
                                                                 placeholder="Enter your favorite team"
                                                                 className="form-control input-md" required=""/></div>
                            </div>

                            {/* SignUp Button */}
                            <div className="form-group"><label className="col-md-4 control-label" htmlFor="signup"/>
                                <div className="col-md-4">
                                    <button id="signup" name="signup" className="btn btn-success">Sign Up</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default LandingPage;