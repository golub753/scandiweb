const defaultState = {
    clothes: []
}

const GET_ALL_CLOTHES = "GET_ALL_CLOTHES";

export const clothesReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ALL_CLOTHES:
            return {...state, clothes: [...state.clothes, ...action.payload.category.products]}
        default:
            return state;
    }
}

export const getAllClothesAction = (payload) => ({type: GET_ALL_CLOTHES, payload});