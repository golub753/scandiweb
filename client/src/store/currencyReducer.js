const defaultState = {
    currency: []
}

const GET_ALL_CURRENCY = "GET_ALL_CURRENCY"; 

export const currencyReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ALL_CURRENCY:
            return {...state, currency: {...state.currency, ...action.payload}}
        default:
            return state;
    }
}

export const getAllCurrencyAction = (payload) => ({type: GET_ALL_CURRENCY, payload});