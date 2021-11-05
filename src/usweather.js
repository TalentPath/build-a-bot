const axios = require("axios").default;

const getStation = async(latitude, longitude) =>
{   
    weatherStationAPI = `https://api.weather.gov/points/${latitude},${longitude}`;

    let response2 = await axios.request(weatherStationAPI).then(resp2=>
    {
        console.log(resp2.data.properties.forecastHourly);
    }
    );
}

module.exports = { getStation }