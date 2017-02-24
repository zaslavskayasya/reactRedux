import React from 'react';
import {connect} from 'react-redux'
import API from '../services/API'
import OneCityComponent from './OneCityComponent'
import {Input, Button } from 'reactstrap';

class SearchCityComponentContainer extends React.Component {

    /* findCity = ()=>{
     let cityName = document.getElementById('inputCity').value;
     alert(cityName)
     API.getCurrent(cityName).then((datan) => {
     this.setState({
     city: datan.data
     })
     })
     } */

    addCity(){
        let cityName = this.cityInput.value;
        console.log("addd", this.cityInput.value);

        API.getCurrent(cityName).then((data) => {
            this.props.onAddCity(data.data);
            console.log(data.data.main.humidity)

        })
    }

    render(){
        console.log(this.props.state.id);




        return(
            <div>

                <Input id="searchInput" type="text"  ref={(input)=> {this.cityInput = input}}/>
                <Button color="danger" onClick={this.addCity.bind(this)}>Add city</Button>
                <ul id="ul">
                    {(this.props.state.added)
                        ?  this.props.state.id.map((into, index)=>{
                        return <OneCityComponent key={index} cityData={this.props.state}/>
                    })
                        : <li>false</li>
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({
        state
    }),
    dispatch => ({
        onAddCity: (cityData) => {
            dispatch({
                type: 'ADD_CITY',
                cityData,
                added: true
            })
        }
    })
)(SearchCityComponentContainer);