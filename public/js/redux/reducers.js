function reducer(state = {}, action) {
    switch (action.type) {
        case 'FETCH_FIXTURES_SUCCESS': {
            return action.fixtures;
        }
        case 'FETCH_TEAMS_SUCCESS': {
            return action.teams;
        }

        default: {
            return state;
        }
    }
}
export default reducer;
