import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/normalize.css';
import './styles/style.css';
import { Provider } from 'react-redux/es/exports';
import App from './components/App';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
