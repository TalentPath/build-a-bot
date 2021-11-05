var axios = require("axios").default;

const talkToBot = async(message) => {
    var options = {
        method: 'GET',
        url: 'https://acobot-brainshop-ai-v1.p.rapidapi.com/get',
        params: {bid: '178', 
          key: 'sX5A2PcYZbsN5EY6', 
          uid: 'mashape', 
          msg: message},
        headers: {
          'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com',
          'x-rapidapi-key': 'iWZLmUjilamshMIZ2BzSutl9KfyTp1GodFRjsn6q6oXIlZRVHD'
        }
      };
            
      let response = await axios.request(options);
      return response.data;
}

module.exports = {talkToBot}
