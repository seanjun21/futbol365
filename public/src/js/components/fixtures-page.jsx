import React from 'react';
import {connect} from 'react-redux';
import actions from '../redux/actions';

class FixturesPage extends React.Component {
    componentWillMount() {
        this.props.dispatch(actions.fetchFixtures());
    }

    render() {
        console.log(this.props.fixtures, '<_____ WHY RENDER TWICE MAN YOU DRIVING ME CRAZY');
        let date = this.props.fixtures ? this.props.fixtures[0].date : '';
        return (
            <div>
                {/* NavBar */}
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">

                        {/* Brand Name */}
                        <div className="navbar-header">
                            <div className="navbar-brand">Futbol365</div>
                        </div>

                        {/* Log Out */}
                        <form id="signin" className="navbar-form navbar-right" role="form">
                            <div className="input-group"><span className="input-group-addon"><i
                                className="glyphicon glyphicon-lock"/></span>
                                <input id="password" type="password" className="form-control" name="password"
                                       placeholder="Temporary"/>
                            </div>
                            &nbsp;
                            <button type="submit" className="btn btn-primary">Log Out</button>
                        </form>
                    </div>
                </nav>

                <div className="container">
                    {date}
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (state, props) {
    return {
        fixtures: state.fixtures
    }
};

var Container = connect(mapStateToProps)(FixturesPage);

module.exports = Container;
