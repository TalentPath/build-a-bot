const prompt = require('prompt-sync')();
const { talkToBot } = require('./talkToBot');

let input = '';

const a = async() => {
    console.log(`
    Hi, I'm your friendly chat-bot. Send me a message to get started.
    Enter 'quit' to exit. :(
    `);

    let resp = '';
    while(input.toLowerCase() != 'quit'){
        input = prompt('');
        resp = await talkToBot(input);
        console.log(resp.cnt);
    }
}

a();
