import React from 'react';
import {connect} from 'react-redux';
import actions from '../redux/actions';

class FixturesPage extends React.Component {
    componentWillMount() {
        this.props.dispatch(actions.fetchTeams());
        this.props.dispatch(actions.fetchFixtures());
    }

    render() {
        console.log(this.props.teams, '<----- this.props.teams')  // Returned object does not include children
        console.log(this.props.fixtures, '<------ FIXTURES ARRAY');
        let date = this.props.fixtures ? this.props.fixtures.map(function(team, index){
          // Retrieve date object and parse to Google calendar format
          var dtg = team.date;
          var when = dtg.replace(/-|:/g, "");
            if (team.homeTeamName === 'Manchester United FC' || team.awayTeamName === 'Manchester United FC') {
                return <div key={index}>
                  <div className="row">
                    <div className="col-md-6">
                      <span>{team.homeTeamName} vs. {team.awayTeamName}</span>
                    </div>
                    {/* <span> --------> </span> */}
                      <div className="col-md-4">
                      <span>{team.date}</span>
                    </div>
                    <div className="col-md-2">
                      <span>
                      {/* Add to Google calendar and prepopulate teams and time */}
                        <a href={"https://www.google.com/calendar/render?action=TEMPLATE&text="+team.homeTeamName+" vs. "+team.awayTeamName+"&dates="+when+"/"+when}><button type="button" id="cal-button"><span className="glyphicon glyphicon-calendar"  aria-hidden="true"></span> Add to calendar</button></a>
                      </span>
                    </div>
                  </div>
                </div>;
            }
        }) : '';
        return (
            <div>
                {/* NavBar */}
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">

                        {/* Brand Name */}
                        <div className="navbar-header">
                            <div className="navbar-brand">Futbol365</div>
                        </div>

                        {/* Dropdowns */}
                          {/*The <li> items are add padding-bottom to the dropdown box */}
                         {/* <div className="dropdown" id="dropdown">
                          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Teams
                            <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li className="dropdown-header">Select a team to view schedule</li>
                            <li><a href="#">Manchester City FC</a></li>
                            <li><a href="#">Chelsea FC</a></li>
                            <li><a href="#">Leicester City FC</a></li>
                          </ul>
                        </div> */}

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
      teams: state.teams,
      fixtures: state.fixtures

    }
};

var Container = connect(mapStateToProps)(FixturesPage);

module.exports = Container;
