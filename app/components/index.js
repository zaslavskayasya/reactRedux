import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App.js';
import GeoForecastComponentContainer from './app/components/GeoForecastComponentContainer.'
import SearchCityComponentContainer from './app/components/SearchCityComponentContainer'
import Menu from './app/components/Menu'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import {createStore} from 'redux';

const initialState = [

    'Lviv049'
];

function city(state = initialState, action) {
    if (action.type === 'ADD_CITY') {
        return [
            ...state,
             action.cityId,
        ]
    }
    return state;
}



const store = createStore(city);


ReactDOM.render(
    <Provider store={store} >
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="/Menu" component={Menu} >
                <Route path="/GeoForecastComponentContainer" component={GeoForecastComponentContainer} />
                <Route path="/SearchCityComponentContainer" component={SearchCityComponentContainer} />
            </Route>
        </Router>
    </Provider>

    ,
    document.getElementById('root')
);