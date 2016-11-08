function reducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_USER_SUCCESS': {
            return Object.assign({}, state, {
                username: action.user.username,
                league: action.user.league
            })
        }

        default: {
            return state;
        }
    }
}
export default reducer;
