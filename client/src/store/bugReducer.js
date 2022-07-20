const defaultState = {
    active: false,
    bug: false,
    toggler: false
}

const TOGGLE_BUG_STATE = 'TOGGLE_BUG_STATE';
const TOGGLE_CURRENCY_STATE = 'TOGGLE_CURRENCY_STATE';
const TOGGLE_OVERLAY = 'TOGGLE_OVERLAY';
const CLOSE_TOGGLERS = 'CLOSE_TOGGLERS';

export const bugReducer = (state = defaultState, action) => {
    switch(action.type) {
        case TOGGLE_BUG_STATE: {
            const newActionBug = (state.bug) ? false : true;
            const newActionToggler = (state.toggler) ? false : false;
            return {...state, bug: newActionBug, toggler: newActionToggler}
        }
        case TOGGLE_CURRENCY_STATE: {
            const newActionBug = (state.bug) ? false : false;
            const newActionToggler = (state.toggler) ? false : true;
            return {...state, bug: newActionBug, toggler: newActionToggler}
        }
        case TOGGLE_OVERLAY: {
            const newActionOverlay = (state.bug || state.toggler) ? true: false;
            (newActionOverlay) ? document.body.style.overflow = 'hidden': document.body.style.overflow = 'auto';
            return {...state, active: newActionOverlay}
        }
        case CLOSE_TOGGLERS: {
            const newActionBug = false;
            const newActionToggler = false;
            const newActionOverlay = false;
            return {...state, active: newActionOverlay, bug: newActionBug, toggler: newActionToggler}
        }
        default:
            return state
    }
}

export const toggleBugStateAction = (payload) => ({type: TOGGLE_BUG_STATE, payload})
export const toggleCurrencyStateAction = (payload) => ({type: TOGGLE_CURRENCY_STATE, payload})
export const toggleOverlayAction = (payload) => ({type: TOGGLE_OVERLAY, payload})
export const closeTogglersAction = (payload) => ({type: CLOSE_TOGGLERS, payload})