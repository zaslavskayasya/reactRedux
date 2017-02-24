import React from 'react';
import {connect} from 'react-redux'

class OneCityComponent extends React.Component {

    closeThis(){

        let removed =  document.getElementById('city_item');
        removed.parentNode.removeChild(removed);

        alert('removed')
    }
    render(){
        return(
            <li className="text_block" id="city_item">
               <span> {this.props.cityData.id} </span>
               <span> {this.props.cityData.name} </span>
               <span> {this.props.cityData.main} </span>
               <span onClick={this.closeThis.bind(this)} className="close"> X </span>
            </li>
        )
    }
}

export default connect(
    state => ({
        state
    }),
    dispatch => ({
        closeThis: (select) => {
            dispatch({
                type: 'DELETE_CITY',

            })
        }
    })
)(OneCityComponent);