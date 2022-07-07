const defaultState = {
    active: false,
}

const TOGGLE_BUG_STATE = 'TOGGLE_BUG_STATE';

export const bugReducer = (state = defaultState, action) => {
    switch(action.type) {
        case TOGGLE_BUG_STATE:
            const newAction = (state.active) ? false : true;
            return {...state, active: newAction}
        default:
            return state
    }
}

export const toggleBugStateAction = (payload) => ({type: TOGGLE_BUG_STATE, payload})