import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productsReducer } from './productsReducer';
import { linksReducer } from './linksReducer';

const rootReducers = combineReducers({
    allProducts: productsReducer,
    links: linksReducer
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))