function reducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_USER_SUCCESS': {
            return Object.assign({}, state, {
                username: action.username,
                league: action.league
            })
        }

        default: {
            return state;
        }
    }
}
export default reducer;
