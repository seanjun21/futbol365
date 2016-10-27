import React from 'react';
import {connect} from 'react-redux';
import actions from '../../redux/actions';

class SignupForm extends React.Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.dispatch(actions.addUser({
            username: this.refs.username.value,
            password: this.refs.password.value,
            league: this.refs.league.value
        }));
    }


    render() {
        return (
            <form className="form-horizontal" onSubmit={this.onSubmit}>

                {/* User ID */}
                <div className="form-group">
                    <label className="col-md-4 control-label">User ID</label>
                    <div className="col-md-4">
                        <input id="username" ref="username" name="username" type="text"
                               placeholder="Enter Your User ID"
                               className="form-control input-md"/>
                    </div>
                </div>

                {/* Password */}
                <div className="form-group">
                    <label className="col-md-4 control-label">Password</label>
                    <div className="col-md-4">
                        <input id="password" ref="password" name="password" type="password"
                               placeholder="Enter a Password"
                               className="form-control input-md"/>
                    </div>
                </div>

                {/* Favorite League */}
                <div className="form-group">
                    <label className="col-md-4 control-label">Favorite League</label>
                    <div className="col-md-4">
                        <select className="form-control" ref="league" type="league" defaultValue="None">
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
                </div>


                {/* SignUp Button */}
                <div className="form-group">
                    <label className="col-md-4 control-label"/>
                    <div className="col-md-4">
                        <button id="signup" className="btn btn-success">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
};

module.exports = connect(mapStateToProps)(SignupForm);