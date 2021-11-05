const axios = require("axios").default;
const prompt = require('prompt-sync')();
const { getStation } = require("./usweather.js");

const getCoords = async() => {
  
  let location = "";

  location = prompt("Please enter a location: ");

  apiAddr = `https://geocoding-api.open-meteo.com/v1/search?name=${location}`;
          
  let response = await axios.request(apiAddr).then(resp=>
    {
      console.log(resp.data.results.length);
      resp.data.results.forEach(place => {
        console.log(place.name, place.country, place.latitude, place.longitude);
      });


    let latitude = resp.data.results[0].latitude;
    let longitude = resp.data.results[0].longitude;

      getStation(latitude, longitude);
    });
    

}

module.exports = {getCoords}

getCoords();