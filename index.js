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
    current_city: {},
    cities: []
}, action) {
    if (action.type === 'CHOOSE_CITY') {
        return{
            ...state,
        }
    } else
    if (action.type === 'ADD_CITY') {
        return{
            ...state,
            cities: [...state.cities, action.name,] ,
        }
    } else if (action.type === "DELETE_CITY") {
        let indexC = action.index;
        let arrayC = state.cities;
        console.log(indexC);
        return{
            ...state,
          cities: arrayC.splice(indexC, 1),
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