const defaultState = {
    links: []
}

const GET_LINKS = "GET_LINKS"; 

export const linksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_LINKS:
            return {...state, links: [...state.links, ...action.payload]}
        default:
            return state;
    }
}

export const getLinksAction = (payload) => ({type: GET_LINKS, payload})