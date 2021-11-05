var axios = require("axios").default;

const getCoords = async(message) => {

    options = "https://geocoding-api.open-meteo.com/v1/search?name=Berlin";
            
      let response = await axios.request(options);
      return response.data;
}

module.exports = {getCoords}