import fetch from 'isomorphic-fetch';
const SERVER_URL = window.location.origin;

/*----- Fetch Help Function -----*/

function fetchHelp(url, init = {}) {
    return fetch(url, init).then((res) => {
        if (res.status < 200 || res.status >= 300) {
            const error = new Error(res.statusText);
            error.res = res;
            throw error;
        }
        return res.json();
    });
}

/*----- Add users into database -----*/

function addUser(username) {
    return (dispatch) => {
        const init = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(username)
        };

        const url = `${SERVER_URL}/users`;
        const newFetch = fetchHelp(url, init);

        newFetch.then((username) => {
            return dispatch({
                type: 'ADD_USER_SUCCESS',
                username: username
            });
        }).catch((error) => {
            return dispatch({
                type: 'ADD_USER_ERROR',
                error: error
            })
        })
    }
}

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

exports.addUser = addUser;
exports.fetchTeams = fetchTeams;
exports.fetchFixtures = fetchFixtures;