const prompt = require('prompt-sync')();
const { talkToBot } = require('./talkToBot');
const { getTopic } = require('./getTopic');

let input = '';

const a = async() => {
    console.log(`
    Hi, I'm your friendly chat-bot. Send me a message to get started.
    Enter 'quit' to exit. :(
    `);

    let resp = '', topic = '';
    while(input.toLowerCase() != 'quit'){
        input = prompt('How can I help: ');

        //console.log(input.search("weather"));
        if(input.search("weather") >= 0){
            topic = "weather";
        }

        switch(topic){
            case 'weather':
                resp = await getTopic(input);
                console.log(resp)
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
