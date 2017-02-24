import React from 'react';
import GeoForecastItem from './GeoForecastItem'
import GeoForecastComponentContainer from '../services/ForecastAPI';


class GeoForecastComponent extends React.Component {

    render(){
        return(
            <div>
                <h3>{this.props.place}</h3>
                {this.props.day.map((day)=>{
                    return  (
 <div className="text_block">
                            <GeoForecastItem  day={day}   key={day.dt} />
</div>)

                })
                }
            </div>
        )
    }
}

export default GeoForecastComponent;