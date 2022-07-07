import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productsReducer } from './productsReducer';
import { linksReducer } from './linksReducer';
import { clothesReducer } from './clothesReducer';
import { techReducer } from './techReducer';
import { currencyReducer } from './currencyReducer';
import { initialCurrencyReducer } from './initialCurrencyReducer';
import { ordersReducer } from './ordersReducer';
import { bugReducer } from './bugReducer';

const rootReducers = combineReducers({
    allProducts: productsReducer,
    links: linksReducer,
    clothes: clothesReducer,
    tech: techReducer,
    currency: currencyReducer,
    initialCurrency: initialCurrencyReducer,
    orders: ordersReducer,
    bug: bugReducer
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))