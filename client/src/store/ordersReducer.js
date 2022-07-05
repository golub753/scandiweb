const defaultState = {
    orders: []
}

const ADD_ORDER = 'ADD_ORDER';

export const ordersReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_ORDER:
            const inBasket = state.orders.find(order => (order.id === action.payload.id));
            let incrementCounter = 0;
            if (inBasket) {
                inBasket.counter++;
                incrementCounter += inBasket.counter;
                return {...state, counter: incrementCounter};
            } else {
                return {...state, orders: [...state.orders, action.payload], counter: 1}
            }
        default:
            return state;
    }
}

export const addOrderAction = (payload) => ({type: ADD_ORDER, payload})