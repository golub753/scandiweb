const defaultState = {
    initialCurrency: JSON.parse(localStorage.getItem('currency')) ? JSON.parse(localStorage.getItem('currency')).initialCurrency : []
}

const GET_INITIAL_CURRENCY = "GET_INITIAL_CURRENCY"; 
const CHANGE_INITIAL_CURRENCY = "CHANGE_INITIAL_CURRENCY";

export const initialCurrencyReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_INITIAL_CURRENCY:
            localStorage.setItem('currency', JSON.stringify({...state, initialCurrency: {...state.initialCurrency, ...action.payload.currencies[0]}}));
            return {...state, initialCurrency: {...state.initialCurrency, ...action.payload.currencies[0]}} 
        case CHANGE_INITIAL_CURRENCY:
            localStorage.setItem('currency', JSON.stringify({...state, initialCurrency: {...state.initialCurrency, ...action.payload}}));
            return {...state, initialCurrency: {...state.initialCurrency, ...action.payload}}
        default:
            return state
    }
}

export const getInitialCurrencyAction = (payload) => ({type: GET_INITIAL_CURRENCY, payload});
export const changeInitialCurrencyAction = (payload) => ({type: CHANGE_INITIAL_CURRENCY, payload});