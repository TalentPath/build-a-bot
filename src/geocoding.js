var axios = require("axios").default;

const getCoords = async(location) => {

    options = `https://geocoding-api.open-meteo.com/v1/search?name=${location}`;
            
      let response = await axios.request(options);
      return response.data;
}

module.exports = {getCoords}