import React from 'react';
import {connect} from 'react-redux';
import API from '../services/API'

class OneCityComponent extends React.Component {


    componentDidMount(){
        var cityName = this.props.into;
        API.getCurrent(cityName).then((data) => {
         })
    }

    closeThis(e){
        var cityArr = this.props.state.cities;
        alert(cityArr);
        let content = e.target.innerText;
        console.info(`Содержимое элемента: "${content}"!`);
        let index = cityArr.indexOf(content);
        console.info(index);
        this.props.closeThis(index);
    }


    render(){
        return(
            <li  id="city_item" className="text_block" >
                <span id="cityName" onClick={this.closeThis.bind(this)}>{this.props.into}</span>
                <span> {this.props.into.visibility}</span>
            </li>
        )
    }
}

export default connect(
    state => ({
        state
    }),
    dispatch => ({
        closeThis: (index) => {
            alert(index);
            dispatch({
                type: 'DELETE_CITY',
                index: index
            })
        }
    })
)(OneCityComponent);

