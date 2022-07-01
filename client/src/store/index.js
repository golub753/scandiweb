import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productsReducer } from './productsReducer';
import { linksReducer } from './linksReducer';
import { clothesReducer } from './clothesReducer';
import { techReducer } from './techReducer';
import { currencyReducer } from './currencyReducer';

const rootReducers = combineReducers({
    allProducts: productsReducer,
    links: linksReducer,
    clothes: clothesReducer,
    tech: techReducer,
    currency: currencyReducer
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))