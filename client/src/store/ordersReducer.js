const defaultState = {
    orders: JSON.parse(localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')).orders : [],
    counter: JSON.parse(localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')).counter : 0
}

const ADD_ORDER = 'ADD_ORDER';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const ordersReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_ORDER: {
            const inBasket = state.orders.find(order => (order.id === action.payload.id));
            state.counter++;
            console.log('first');
            if (inBasket) {
                console.log('inBasket');
                if (action.payload.checkedAttributes.length < 1) {
                    console.log('not checked');
                    const firstAttr = action.payload.attributes.map((item, index) => {
                        return {name: item.name,value: item.items[0].value}
                    });
                    action.payload.checkedAttributes = firstAttr;
                }
                if (JSON.stringify(inBasket.checkedAttributes) === JSON.stringify(action.payload.checkedAttributes)) {
                    console.log('checked ===');
                    inBasket.counter++;
                    localStorage.setItem('state', JSON.stringify({...state, counter: state.counter}));
                    return {...state, counter: state.counter};
                } else {
                    console.log('checked !===');
                    inBasket.counter++;
                    localStorage.setItem('state', JSON.stringify({...state, orders: [...state.orders, action.payload], counter: state.counter}));
                    return {...state, orders: [...state.orders, action.payload], counter: state.counter}
                }
            } else {
                console.log('not in Baskter');
                if (action.payload.checkedAttributes.length < 1) {
                    console.log('not in basket checked');
                    const firstAttr = action.payload.attributes.map((item, index) => {
                        return {name: item.name,value: item.items[0].value}
                    });
                    action.payload.checkedAttributes = firstAttr;
                }
                localStorage.setItem('state', JSON.stringify({...state, orders: [...state.orders, action.payload], counter: state.counter}));
                return {...state, orders: [...state.orders, action.payload], counter: state.counter}
            }
        }
        case INCREMENT: {
            const inBasket = state.orders.find(order => (order.id === action.payload.id));
            inBasket.counter++;
            state.counter++;
            localStorage.setItem('state', JSON.stringify({...state, orders: [...state.orders], counter: state.counter}));
            return {...state, orders: [...state.orders], counter: state.counter};
        }  
        case DECREMENT: {
            const inBasket = state.orders.find(order => (order.id === action.payload.id));
            inBasket.counter--;
            state.counter--;
            if (inBasket.counter === 0) {
                const newOrders = state.orders.filter(order => !order.counter <= 0);
                localStorage.setItem('state', JSON.stringify({...state, orders: [...newOrders], counter: state.counter}));
                return {...state, orders: [...newOrders], counter: state.counter};
            }
            localStorage.setItem('state', JSON.stringify({...state, orders: [...state.orders], counter: state.counter}));
            return {...state, orders: [...state.orders], counter: state.counter};
        }
        default:
            return state;
    }
}

export const addOrderAction = (payload) => ({type: ADD_ORDER, payload})
export const incrementAction = (payload) => ({type: INCREMENT, payload});
export const decrementAction = (payload) => ({type: DECREMENT, payload});