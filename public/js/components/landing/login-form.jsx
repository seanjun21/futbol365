import React from 'react';

class LoginForm extends React.Component {
    render() {
        return (
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
        )
    }
}

export default LoginForm;