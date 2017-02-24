import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Menu from './Menu'
import GeoForecastComponent from './GeoForecastComponent'
import SearchCityComponent from './SearchCityComponent'
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'


class App extends React.Component{
     render(){
         return(
             <div className="MainContainer">
                 <Menu/>
             </div>
         )
     }
}

export default App;