import React from 'react';
import {Route, IndexRoute,browserHistory,Router } from 'react-router';

import Root from "./components/Root"
import BatmanContainer from "./containers/BatmanContainer";
import StarwarsFilmsContainer from "./containers/StarwarsFilmsContainer";
import {Home} from "./components/home";


export default (
    <Router history={browserHistory}>
    <Route path={"/"} component={Root}>
        <IndexRoute component={Home}/>
        <Route path ={"/movies"}  component={BatmanContainer}/>
        <Route path={"/starwarsfilms"} component={StarwarsFilmsContainer}/>
    </Route>
    </Router>
);
