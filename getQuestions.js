const axios = require('axios');
const prompt = require('prompt-sync')();

const getQuestions = async () => {
    const categories = {
        'film': 11,
        'music': 12,
        'video games': 15,
        'anime': 31
    };

    const difficulties = ['easy', 'medium', 'hard'];
    
    let category; 
    let difficulty;
    while (!categories[category]) {
        console.log('Pick a category:\nfilm\nmusic\nvideo games\nanime');
        category = prompt('Enter choice here: ').toLowerCase();
    }
    while (!difficulties.includes(difficulty)) {
        console.log('Pick a difficulty:\neasy\nmedium\nhard');
        difficulty = prompt('Enter choice here: ').toLowerCase();
    }
    
    let questions = await axios.get(`https://opentdb.com/api.php?amount=5&category=${categories[category]}&difficulty=${difficulty}`)
        
    questions = questions.data.results;
    questions.forEach(item => {
        item.question = item.question.replaceAll('&quot;', '')
            .replaceAll('&#039;', "'")});
    return questions;
}

module.exports = {
    getQuestions
}