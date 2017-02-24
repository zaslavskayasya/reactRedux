import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App.js';
import GeoForecastComponentContainer from './app/components/GeoForecastComponentContainer.'
import SearchCityComponentContainer from './app/components/SearchCityComponentContainer'
import Menu from './app/components/Menu'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import './node_modules/bootstrap/dist/css/bootstrap.css';

function city(state = {
    name: [],
    id: [],
    clouds: [],
    added: false,
    deleted: false,
}, action) {
    if (action.type === 'ADD_CITY') {
        return{
            ...state,
            id: [...state.id, action.cityData.id,] ,
            name: [...state.name, action.cityData.name,] ,
            clouds: [...state.clouds, action.cityData.main.humidity,] ,
            added: true,
        }
    }
    else if (action.type === 'DELETE_CITY') {
        return{
            ...state,
            deleted: true,



        }
    }
    return state;
}

const store = createStore(city, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());;


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