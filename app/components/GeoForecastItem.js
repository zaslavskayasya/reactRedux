import React from 'react';
import moment from 'moment'
import { Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class GeoForecastItem extends React.Component {

    render(){
        return(
            <div>
                  {this.props.place}
                        <p>Date: { moment(this.props.day.dt).format("MMM do YY")} </p>
                        <p>Humidity: {this.props.day.humidity} </p>
                        <p>Clouds: {this.props.day.clouds} </p>
                        <p>Temperature: {this.props.day.deg} </p>

            </div>

        )
    }
}

export default GeoForecastItem;