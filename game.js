const prompt = require('prompt-sync');
const { shuffler } = require('.//shuffler');
const { getQuestions } = require('./getQuestions');

const playGame = async () => {
    let questions = await getQuestions();

}

playGame();