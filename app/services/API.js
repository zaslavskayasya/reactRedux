import React from 'react'
import axios from 'axios'

let API = {
    getCurrent: function (cityName) {
        return new Promise (function (resolve, reject) {
            axios.get('http://api.openweathermap.org/data/2.5/weather?q='
                + cityName + '&APPID=10f85ac758b2669f8007875b727e20f8'
            ).then(function(data){
                resolve(data);
                 console.log(data);
            })
        })
    }
}


export default API;