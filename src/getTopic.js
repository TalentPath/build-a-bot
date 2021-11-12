const axios = require("axios").default;

const getTopic = async(message) => {
    let resp = "error"
    const options = {
        method: 'POST',
        url: 'https://textprobe.p.rapidapi.com/entities',
        headers: {
          'content-type': 'application/json',
          'x-rapidapi-host': 'textprobe.p.rapidapi.com',
          'x-rapidapi-key': 'iWZLmUjilamshMIZ2BzSutl9KfyTp1GodFRjsn6q6oXIlZRVHD'
        },
        data: {text: message , lang:"en"}
    };
    
    try{
    response = await axios.request(options);
        let place = response.data.entities.filter((entity)=>entity.entity_type==='Place');
        if(place.length > 0){
            resp = place[0].wikidata_name;
            //console.log(place[0].wikidata_name);
        }
            
    } catch{
        return "error";
    }
    return resp;
}

module.exports = {getTopic};