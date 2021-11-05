const axios = require("axios").default;
const prompt = require('prompt-sync')();
const { getStation } = require("./usweather.js");

const getCoords = async() => {
  
  let location = "";

  location = prompt("Please enter a location: ");

  apiAddr = `https://geocoding-api.open-meteo.com/v1/search?name=${location}`;
          
  let response = await axios.request(apiAddr);

  // console.log(response.data.results.length);
  // response.data.results.forEach(place => {
  //   console.log(place.name, place.country, place.latitude, place.longitude)
  // });

  let latitude = response.data.results[0].latitude;
  let longitude = response.data.results[0].longitude;

  let response2 = await getStation(latitude, longitude);
  
  return response2;
}

module.exports = {getCoords}