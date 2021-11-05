const prompt = require('prompt-sync')();
const { talkToBot } = require('./talkToBot');
const { getTopic } = require('./getTopic');
const { getCoords } = require('./geocoding');

let input = '', record = '';
const GREETING = `
        Hi, I'm your friendly chat-bot. Send me a message to get started.
        Enter 'quit' to exit. :(
        `,
        BUFF = 'How can I help: ', WAIT = `
        hmmmm...sorry for the wait
        `;

const chat = async (message, promptFlag=false) => {
    record += message;
    if(promptFlag){
        let result = prompt(message)
        record += result;
        return result;
    }
    console.log(message);
}

const start = async() => {
    
    chat(GREETING);

    let resp = '', topic = '';
    while(input.toLowerCase() != 'quit'){
        topic = ''
        input = await chat(BUFF, true);

        if(input.search("weather") >= 0){
            topic = "weather";
        }

        switch(topic){
            case 'weather':
                let loc = await getTopic(input);
                chat(WAIT);
                resp = await getCoords(loc);
                chat(`
                    Bot: ${`Weather in ${loc}`}
                    Bot: ${`Current condition: ${resp.text} | Current temprature: ${resp.temperature} Fahrenheit`}
                `);
                break;
            default:
                resp = await talkToBot(input);
                chat(`
                    Bot: ${resp.cnt}
                `);
                break;
        }
    }
    console.log(record)
}

start();

