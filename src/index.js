const { talkToBot } = require('./talkToBot');

const a = async() => {
    let x = await talkToBot("Hey there!");
    console.log(x);
}

a();