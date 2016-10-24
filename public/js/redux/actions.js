import fetch from 'isomorphic-fetch';

/*----- Add users into database -----*/



/*----- Fetch teams in a league -----*/

function fetchTeams() {
    return (dispatch) => {
        const url = 'http://api.football-data.org/v1/competitions/426/leagueTable';
        return fetch(url, {
            headers: {'X-Auth-Token': 'e34ad8f9aebb436eb3437851ca9b581a'}
        }).then((response) => {
            if (response.status < 200 || response.status >= 300) {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response.json();
        }).then((teams) => {
            return dispatch({
                type: 'FETCH_TEAMS_SUCCESS',
                teams: teams
            });
        }).catch((error) => {
            return dispatch({
                type: 'FETCH_TEAMS_ERROR',
                error: error
            });
        })
    };
}

/*----- Fetch fixtures for a team -----*/

function fetchFixtures() {
    return (dispatch) => {
        const url = 'http://api.football-data.org/v1/competitions/426/fixtures';
        return fetch(url, {
            headers: {'X-Auth-Token': 'e34ad8f9aebb436eb3437851ca9b581a'}
        }).then((response) => {
            if (response.status < 200 || response.status >= 300) {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response.json();
        }).then((fixtures) => {
            return dispatch({
                type: 'FETCH_FIXTURES_SUCCESS',
                fixtures: fixtures
            });
        }).catch((error) => {
            return dispatch({
                type: 'FETCH_FIXTURES_ERROR',
                error: error
            });
        })
    };
}

exports.fetchTeams = fetchTeams;
exports.fetchFixtures = fetchFixtures;