const { shuffler } = require('./shuffler');

const question = async (currentQuestion) => {
    const answers = currentQuestion.incorrect_answers
        .concat(currentQuestion.correct_answer)
    const indexArr = shuffler();
    const answerObj = {
        'a': answers[indexArr[0]],
        'b': answers[indexArr[1]],
        'c': answers[indexArr[2]],
        'd': answers[indexArr[3]]
    };
    return answerObj;
} 

module.exports = {
    question
}