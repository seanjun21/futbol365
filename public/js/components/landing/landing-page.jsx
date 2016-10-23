import React from 'react';

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
                    <form id="signin" className="navbar-form navbar-right" role="form">

                        {/* User ID */}
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"/></span>
                            <input id="user" type="user" className="form-control" name="user"
                                   placeholder="User ID"/>
                        </div>
                        &nbsp;

                        {/* Password */}
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"/></span>
                            <input id="password" type="password" className="form-control" name="password"
                                   placeholder="Password"/>
                        </div>
                        &nbsp;

                        {/* Login Button */}
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
                    <form className="form-horizontal" action="/users" method="post">
                        <fieldset>

                            {/* User ID */}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="user">User ID</label>
                                <div className="col-md-4">
                                    <input id="user" name="user" type="text"
                                           placeholder="Enter Your User ID"
                                           className="form-control input-md" required=""/>
                                </div>
                            </div>

                            {/* Password */}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="password">Password</label>
                                <div className="col-md-4">
                                    <input id="password" name="password" type="password"
                                           placeholder="Enter a Password"
                                           className="form-control input-md" required=""/>
                                </div>
                            </div>

                            {/* Favorite League */}
                            <div className="form-group">
                                <select className="selectpicker" title="Choose Your Favorite League" data-width="auto">
                                    <option>Premier League</option>
                                    <option>Championship</option>
                                    <option>League One</option>
                                    <option>1. Bundesliga</option>
                                    <option>2. Bundesliga</option>
                                    <option>DFB-Pokal</option>
                                    <option>Eredivisie</option>
                                    <option>Ligue 1</option>
                                    <option>Ligue 2</option>
                                    <option>Primera Division</option>
                                    <option>Liga Adelante</option>
                                    <option>Serie A</option>
                                    <option>Primeira Liga</option>
                                    <option>Champions League</option>
                                </select>
                            </div>


                            {/* SignUp Button */}
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="signup"/>
                                <div className="col-md-4">
                                    <input id="signup" name="signup" className="btn btn-success" type="submit" value="Sign Up"/>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default LandingPage;
