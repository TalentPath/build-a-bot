const prompt = require('prompt-sync')();
const { getQuestions } = require('./getQuestions');
const { question } = require('./question');

const playGame = async () => {
    prompt('Click enter to play');
    let questions = await getQuestions();
    let index = 1;
    let score = 0;

    while (questions.length) {
        const currentQuestion = questions.shift();
        const answers = await question(currentQuestion);
        console.log(`Question ${index}\n`);
        console.log(currentQuestion.question + '\n');
        console.log(`a. ${answers.a}`);
        console.log(`b. ${answers.b}`);
        console.log(`c. ${answers.c}`);
        console.log(`d. ${answers.d}\n`);
    
        const userAnswer = prompt('Choose the correct letter: ').toLowerCase();
        if (answers[userAnswer] === currentQuestion.correct_answer) {
            score++;
            console.log('You are correct');
        } else {
            console.log(`That is incorrect. The correct answer is ${currentQuestion.correct_answer}`);
        }
        console.log(`Current Score: ${score}/${index}\n`);
        if (index < 5) {
            prompt('Click enter to go to the next question\n');
        } else {
            const gameEnd = prompt('Would you like to play again? Y or N?\n').toLowerCase();
            if (gameEnd === 'y') {
                playGame();
            } else {
                console.log('Thanks for playing!');
            }
        }
        index++;
    }

}

playGame();