const defaultState = {
    allProducts: []
}

const ADD_ALL_PRODUCTS = 'ADD_ALL_PRODUCTS';
const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';

export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ALL_PRODUCTS:
            return {...state, allProducts: [...state.allProducts, ...action.payload]}
        case UPDATE_PRODUCTS:
            return state
        default:
            return state;
    }
}

export const addAllProductsAction = (payload) => ({type: ADD_ALL_PRODUCTS, payload})
export const updateProductsAction = (payload) => ({type: UPDATE_PRODUCTS, payload})