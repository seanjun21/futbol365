import fetch from 'isomorphic-fetch';

const FETCH_FIXTURES_SUCCESS = 'FETCH_FIXTURES_SUCCESS';

function fetchFixturesSuccess(fixtures) {
    return {
        type: FETCH_FIXTURES_SUCCESS,
        fixtures: fixtures
    }
}

const FETCH_FIXTURES_ERROR = 'FETCH_FIXTURES_ERROR';

function fetchFixturesError(error) {
    return {
        type: FETCH_FIXTURES_ERROR,
        error: error
    }
}

function fetchFixtures() {
    return (dispatch) => {
        const url = 'http://api.football-data.org/v1/teams/66/fixtures';
        return fetch(url, {
            headers: { 'X-Auth-Token': 'e34ad8f9aebb436eb3437851ca9b581a' }
        }).then((response) => {
            if (response.status < 200 || response.status >= 300) {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response.json();
        }).then((fixtures) => {
            return dispatch(fetchFixturesSuccess(fixtures));
        }).catch((error) => {
            return dispatch(fetchFixturesError(error));
        })
    };
}

exports.FETCH_FIXTURES_SUCCESS = FETCH_FIXTURES_SUCCESS;
exports.fetchFixturesSuccess = fetchFixturesSuccess;
exports.FETCH_FIXTURES_ERROR = FETCH_FIXTURES_ERROR;
exports.fetchFixturesError = fetchFixturesError;
exports.fetchFixtures = fetchFixtures;
