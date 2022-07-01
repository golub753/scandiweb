const defaultState = {
    tech: []
}

const GET_ALL_TECH = "GET_ALL_TECH"; 

export const techReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ALL_TECH:
            return {...state, tech: [...state.tech, ...action.payload.category.products]}
        default:
            return state;
    }
}

export const getAllTechAction = (payload) => ({type: GET_ALL_TECH, payload})