import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import axios from 'axios';

import CONFIG from './config/config';
import App from './modules/app/main/MainContainer'
import configureStore from './store/configureStore';

axios.defaults.baseURL = CONFIG.API_URL;

render(
    <Provider store={ configureStore() }>
        <App />
    </Provider>,
    document.getElementById('root')
);
