import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import axios from 'axios';

import App from './modules/app/main/MainContainer'
import rootReducer from './reducers'

axios.defaults.baseURL = 'https://todos.venturedevs.net/api';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
