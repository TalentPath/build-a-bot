const axios = require("axios").default;

const getStation = async(latitude, longitude) =>
{   
    // weatherStationAPI = `https://api.weather.gov/points/${latitude},${longitude}`;

    // let response2 = await axios.request(weatherStationAPI).then(resp2=>
    // {
    //     console.log(resp2.data.properties.forecastHourly);
    // }
    // );

    var options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {lat: latitude, long: longitude, format: 'json', u: 'f'},
        headers: {
          'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
          'x-rapidapi-key': '83be9ccb27msheec8414b1075d1fp173447jsn0260598cb005'
        }
      };
      
      let response = await axios.request(options);

      return response.data.current_observation.condition;
}

module.exports = { getStation }