// Tiffany May-Phillips & Chase Faggard - Talent Path - Build-a-bot - 11/5/2021

const { DbService } = require("m3o/db");
const prompt = require("prompt-sync")();

M3O_API_TOKEN = "ZTAyOWY3NDgtNGRjZS00MmRhLTg1ZWEtNDAxZDIzODU3OTg4";

GARBAGE_WORDS = ['of', 'the', 'in', 'on', 'at', 'to', 'a', 'is', 'what\'s', 'whats', 'what', 'is', 'your', 'it', 'for', 'i', 'do', 'you'];

SUPERLATIVE_WORDS = ["Astounding", "Bedazzling", "Brilliant", "Breathtaking", "Classy", "Compelling", "Dazzling", "Elite", "Enriching", "Epic", "First-rate", "Gripping", "Groundbreaking", "Iconic", "Impeccable", "Insightful", "Inspired", "Laudable", "Legendary", "Luminous", "Masterful", "Notable", "Pioneering", "Rich", "Riveting", "Sensational", "Stellar", "Thought-Provoking", "Touching", "Transcendent", "Unforgettable", "Vibrant", "World class"];

REMARK_WORDS = ["I don’t have the foggiest idea", "I haven’t a clue", "Who knows", "Don’t ask me", "Your guess is as good as mine", "Great question", "I’m not sure I’m the best person to answer that", "I don't know", "I'm not sure.."];

BYE_WORDS = ["Bye bye", "See you later", "See you soon", "Talk to you later", "Take it easy", "Farewell. Someone is really going to miss you. Not me... someone.", "Goodbye, don't cry! We won't", "Sayonara", "Catch you later", "Toodle-oo", "Catch you later, alligator", "See you down the road, toad", "It won't be the same without you here, work may actually get done", "Hasta la vista", "Tata", "Bon voyage"];

USER_PREFIX = "[You]:";

BOT_PREFIX = "[Terra 2.0]:";

const main = async () => {

    console.log(BOT_PREFIX + " Hi there. I'm Terra 2.0. Ask me anything!");
    console.log(BOT_PREFIX + " If you start to get tired of me at anytime, please type exit.");

    let keepGoing = true;

    while(keepGoing) {
        let question = prompt(USER_PREFIX + " ");
        if(question.toLowerCase() === "exit") keepGoing = false;
        else {
            const record = await readRecords(sanitize(question));

            if(record.records[0] != undefined) console.log(BOT_PREFIX + " " + record.records[0].answer);
            else {
                let rand = getRandomInt(REMARK_WORDS.length);
                console.log(`${BOT_PREFIX} ${REMARK_WORDS[rand]}. Will you please tell me?`);
                let answer = prompt(USER_PREFIX + " ");
                if(answer.toLowerCase() === "exit") keepGoing = false;
                else {
                    const newRecord = await createRecord(sanitize(question), answer);
                    rand = getRandomInt(SUPERLATIVE_WORDS.length);
                    console.log(`${BOT_PREFIX} ${SUPERLATIVE_WORDS[rand]}! Any more questions?`);
                }
            }
        }
    }
    let rand = getRandomInt(BYE_WORDS.length);
    console.log(BYE_WORDS[rand] + "!");
}

const sanitize = (str) => {
    let result = new RegExp('\\b(' + GARBAGE_WORDS.join('|') + ')\\b', 'g');
    return (str.toLowerCase() || '').replace(result, '').replace(/[ ]{2,}/, ' ').replace(/[^A-Za-z0-9\s]/g,"").replace(/\s{2,}/g, " ").replace(/\s/g, '');
}

const createRecord = async (question, answer) => {
    let dbService = new DbService(M3O_API_TOKEN);
    let rsp = await dbService.create({
        record: {
            "question": question,
            "answer": answer
        },
        table: "questionBank",
    });
    return rsp.id;
}

const readRecords = async (question) => {
    let dbService = new DbService(M3O_API_TOKEN);
    let rsp = await dbService.read({
        query: `question == "${question}"`,
        table: "questionBank"
    });
    return rsp;
}

const getRandomInt = max => {
    return Math.floor(Math.random() * max);
}

main();