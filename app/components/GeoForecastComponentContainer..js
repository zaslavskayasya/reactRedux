import React from 'react'
import axios from 'axios'
import ForecastAPI from '../services/ForecastAPI';
import GeoForecastComponent from './GeoForecastComponent'
import { Container, Row, Col } from 'reactstrap';


class GeoForecastComponentContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            day: [],
            place: ''
        }
    }

    componentDidMount(){
            navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude);
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            ForecastAPI.getForecast(lat, lon).then((day)=> {
                    this.setState({
                        day: day.list,
                        place: day.city.name
                    })
                }
            )
        });
    }

    render(){

        return (
            <div>
                        <GeoForecastComponent  className="GeoItem"  day={this.state.day} place={this.state.place} />

            </div>
                )
            }

}
export default GeoForecastComponentContainer;


