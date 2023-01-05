// variables by parent, which store references to html elements
// header
var headerSection = document.querySelector('.header');
var countdown = document.querySelector('#countdown');
var score = 75;

// main
// welcome section
var welcomeSection = document.querySelector('.welcome');
var startQuizButton = document.querySelector('.start-quiz-button');

// question section
var questionSection = document.querySelector('.question');
var answersContainer = document.querySelector('#answers-container');
var answersList = document.querySelector('.answers');
var questionText = document.querySelector('.question-text');
var answer1Button = document.querySelector('#answer1');
var answer2Button = document.querySelector('#answer2');
var answer3Button = document.querySelector('#answer3');
var answer4Button = document.querySelector('#answer4');
var feedback = document.querySelector('.feedback');

// final score section
var finalScoreSection = document.querySelector('.final-score');
var finalScore = document.querySelector('#final-score');
var userInit = document.querySelector('.initials');
var submitInitButton = document.querySelector('.submit-init-button');

// variables in highscore.html
var highscoreList = document.querySelector('.highscore-list');
var clearHighscoresButton = document.querySelector('#clear-highscores');
var goBackButton = document.querySelector('#go-back');

// question objects
var question1 = {
    question: 'Commonly used data types do NOT include: ',
    answer1: {
        text: 'strings',
        isCorrect: false
    },
    answer2: {
        text: 'booleans',
        isCorrect: false
    },
    answer3: {
        text: 'alerts',
        isCorrect: true
    },
    answer4: {
        text: 'numbers',
        isCorrect: false
    }
}

var question2 = {
    question: 'The condition of an if/else statement is enclosed within _____.',
    answer1: {
        text: 'quotes',
        isCorrect: false
    },
    answer2: {
        text: 'curly brackets',
        isCorrect: false
    },
    answer3: {
        text: 'parentheses',
        isCorrect: true
    },
    answer4: {
        text: 'square brackets',
        isCorrect: false
    }
}

var question3 = {
    question: 'Arrays in JavaScript are used to store _____.',
    answer1: {
        text: 'numbers and strings',
        isCorrect: false
    },
    answer2: {
        text: 'other arrays',
        isCorrect: false
    },
    answer3: {
        text: 'booleans',
        isCorrect: false
    },
    answer4: {
        text: 'all of the above',
        isCorrect: true
    }
}

var question4 = {
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    answer1: {
        text: 'commas',
        isCorrect: false
    },
    answer2: {
        text: 'curly brackets',
        isCorrect: false
    },
    answer3: {
        text: 'quotes',
        isCorrect: true
    },
    answer4: {
        text: 'parentheses',
        isCorrect: false
    }
}

var question5 = {
    question: 'A useful tool used during development and debugging for printing content to the debugger is: ' ,
    answer1: {
        text: 'JavaScript',
        isCorrect: false
    },
    answer2: {
        text: 'terminal/bash',
        isCorrect: false
    },
    answer3: {
        text: 'for loops',
        isCorrect: false
    },
    answer4: {
        text: 'console.log',
        isCorrect: true
    }
}
// default view
function displayWelcomePage () {
    questionSection.style.display = 'none';
    finalScoreSection.style.display = 'none';
}

// create timer
function timer() {
    welcomeSection.style.display = 'none';
    questionSection.style.display = 'flex';

    var timerInterval = setInterval(function(){
        if (score > 0) {
            countdown.textContent = score;
            // console.log(score);
            score--;
        } else if (score < 0) {
            score = 0;
            clearInterval(timerInterval);
            displayFinalScore(score);
        } else if (score === 0) {
            clearInterval(timerInterval);
            displayFinalScore(score);
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// grading
// wrong answer
function wrongAnswer (event) {
    // event.stopPropagation();
    console.log('wrong button click');
    feedback.textContent = 'Incorrect';
    score = score - 15;
    countdown.textContent = score;
    console.log('Current score is: ' + score);
}

//  correct answer
function correctAnswer (event) {
    // event.stopPropagation();
    console.log('correct button click');
    feedback.textContent = 'Correct!'
}
function testFunction () {setTimeout(function() {displayQuestion2(question2);}, 500);}
// display questions
// question 1
function displayQuestion1() {
    console.log('question 1');
    feedback.textContent = '';
    questionText.textContent = 'Commonly used data types do NOT include: ';
    answer1Button.textContent = 'strings';
    answer2Button.textContent = 'booleans;'
    answer3Button.textContent = 'alerts';
    answer4Button.textContent = 'numbers';

    // add event listeners
    answer1Button.addEventListener('click', wrongAnswer);
    answer2Button.addEventListener('click', wrongAnswer);
    answer3Button.addEventListener('click', correctAnswer);
    answer4Button.addEventListener('click', wrongAnswer);
    answersContainer.addEventListener('click', testFunction);
}
   

// question2
function displayQuestion2() {
    console.log('question 2');
    feedback.textContent = '';
    questionText.textContent = 'The condition of an if/else statement is enclosed within _____.';
    answer1Button.textContent = 'quotes';
    answer2Button.textContent = 'curly braces';
    answer3Button.textContent = 'parentheses';
    answer4Button.textContent = 'square brackets';

    // remove event listeners from previous question
    answer1Button.removeEventListener('click', wrongAnswer);
    answer2Button.removeEventListener('click', wrongAnswer);
    answer3Button.removeEventListener('click', correctAnswer);
    answer4Button.removeEventListener('click', wrongAnswer);
    answersContainer.removeEventListener('click', testFunction);

    // add event listeners
    answer1Button.addEventListener('click', wrongAnswer);
    answer2Button.addEventListener('click', wrongAnswer);
    answer3Button.addEventListener('click', correctAnswer);
    answer4Button.addEventListener('click', wrongAnswer);
    answersContainer.addEventListener('click', function () {
        setTimeout(function() {
            displayQuestion3(question3);
        }, 500);
    });

}

// question3
function displayQuestion3() {
    console.log('question 3');
    feedback.textContent = '';
    questionText.textContent = 'Arrays in JavaScript are used to store _____.'
    answer1Button.textContent = 'numbers and strings';
    answer2Button.textContent = 'other arrays';
    answer3Button.textContent = 'booleans';
    answer4Button.textContent = 'all of the above';

    // remove event listeners from previous question
    answer1Button.removeEventListener('click', wrongAnswer);
    answer2Button.removeEventListener('click', wrongAnswer);
    answer3Button.removeEventListener('click', correctAnswer);
    answer4Button.removeEventListener('click', wrongAnswer);
    answersContainer.removeEventListener('click', function () {setTimeout(function() {displayQuestion3(question3)}, 500);});
    
    // add event listeners
    answer1Button.addEventListener('click', wrongAnswer);
    answer2Button.addEventListener('click', wrongAnswer);
    answer3Button.addEventListener('click', wrongAnswer);
    answer4Button.addEventListener('click', correctAnswer);
    answersContainer.addEventListener('click', function () {setTimeout(function() {displayQuestion4(question4)}, 500);});
    // remove event listeners
    // answer1Button.removeEventListener('click', wrongAnswer);
    // answer2Button.removeEventListener('click', wrongAnswer);
    // answer3Button.removeEventListener('click', wrongAnswer);
    // answer4Button.removeEventListener('click', correctAnswer);
    // answersContainer.removeEventListener('click', function () {setTimeout(function() {displayQuestion4(question4)}, 500);});
}

// question4
function displayQuestion4() {
    console.log('question 4');
    feedback.textContent = '';
    questionText.textContent = 'String values must be enclosed within _____ when being assigned to variables.'
    answer1Button.textContent = 'commas';
    answer2Button.textContent = 'curly braces';
    answer3Button.textContent = 'quotes';
    answer4Button.textContent = 'parentheses';
    // add event listeners
    answer1Button.addEventListener('click', wrongAnswer);
    answer2Button.addEventListener('click', wrongAnswer);
    answer3Button.addEventListener('click', correctAnswer);
    answer4Button.addEventListener('click', wrongAnswer);
    answersContainer.addEventListener('click', function () {setTimeout(function() {displayQuestion5(question5)}), 500;});
    // remove event listeners
    // answer1Button.removeEventListener('click', wrongAnswer);
    // answer2Button.removeEventListener('click', wrongAnswer);
    // answer3Button.removeEventListener('click', correctAnswer);
    // answer4Button.removeEventListener('click', wrongAnswer);
    // answersContainer.removeEventListener('click', function () {setTimeout(function() {displayQuestion5(question5)}), 500;});
}

// question5
function displayQuestion5() {
    console.log('question 5');
    feedback.textContent = '';
    questionText.textContent = 'A useful tool used during development and debugging for printing content to the debugger is: '
    answer1Button.textContent = 'JavaScript';
    answer2Button.textContent = 'terminal/bash';
    answer3Button.textContent = 'for loops';
    answer4Button.textContent = 'console.log';
    // add event listeners
    answer1Button.addEventListener('click', wrongAnswer);
    answer2Button.addEventListener('click', wrongAnswer);
    answer3Button.addEventListener('click', correctAnswer);
    answer4Button.addEventListener('click', wrongAnswer);
    answersContainer.addEventListener('click', function () {setTimeout(function () {displayFinalScore(score)}, 500)});
    // remove event listeners
//     answer1Button.removeEventListener('click', wrongAnswer);
//     answer2Button.removeEventListener('click', wrongAnswer);
//     answer3Button.removeEventListener('click', correctAnswer);
//     answer4Button.removeEventListener('click', wrongAnswer);
//     answersContainer.removeEventListener('click', function () {setTimeout(function () {displayFinalScore(score)}, 500)});
}

// display final score
// final score
function displayFinalScore (score) {
    console.log('final score section');
    welcomeSection.style.display = 'none';
    questionSection.style.display = 'none';
    finalScoreSection.style.display = 'flex';
    finalScore.textContent = score;
    console.log('final score: ' + score);
} 

// init
// function init() {
//     displayWelcomePage();
//     startQuizButton.addEventListener('click', timer);
//     displayQuestion1(question1);
//     console.log('initial score is: ' + score)
// }

// init();

// starts quiz without timer to debug
console.log('initial score is: ' + score);
startQuizButton.addEventListener('click', function() {displayQuestion1(question1)});
console.log();