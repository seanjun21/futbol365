import actions from './actions';

function reducer(state={}, action) {
    switch (action.type) {
        case actions.FETCH_FIXTURES_SUCCESS: {
            return action.fixtures;
        }

        default: {
            return state;
        }
    }
}
export default reducer;