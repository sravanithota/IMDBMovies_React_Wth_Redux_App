import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import store from './store/store';

import '../styles/stylesheet.scss';


ReactDOM.render(
<Provider store={store}>
    <Router history={browserHistory} routes={routes} />
</Provider>
    , document.getElementById('container'));
