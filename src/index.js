const prompt = require('prompt-sync')();
const { talkToBot } = require('./talkToBot');
const { getCoords } = require('./geocoding');

let input = '';

const a = async() => {
    console.log(`
    Hi, I'm your friendly chat-bot. Send me a message to get started.
    Enter 'quit' to exit. :(
    `);

    let resp = '';
    while(input.toLowerCase() != 'quit'){
        input = prompt('');

        switch(input){
            case 'weather':
                break;
            case 'location':
                resp = await getCoords();
                console.log(resp);
                break;
            default:
                resp = await talkToBot(input);
                console.log(`
                    Bot: ${resp.cnt}
                `);
                break;
        }
    }
}

a();
