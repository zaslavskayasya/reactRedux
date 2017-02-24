import React from 'react'
import axios from 'axios'

let ForecastAPI = {
    getForecast: function (lat, lon) {
        return new Promise (function (resolve, reject) {
            axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat +
                '&lon=' + lon +  '&APPID=10f85ac758b2669f8007875b727e20f8'
            ).then(function(data){
                resolve(data.data);
                console.log(data.data)
            })
        })
    }
}


export default ForecastAPI;