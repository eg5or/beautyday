import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import store from './redux/redux-store'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
