var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://acobot-brainshop-ai-v1.p.rapidapi.com/get',
  params: {bid: '178', key: 'sX5A2PcYZbsN5EY6', uid: 'mashape', msg: 'Well that sucks!'},
  headers: {
    'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com',
    'x-rapidapi-key': 'iWZLmUjilamshMIZ2BzSutl9KfyTp1GodFRjsn6q6oXIlZRVHD'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});