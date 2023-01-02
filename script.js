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
var answersContainer = document.querySelector('.answers');
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
function timer(s) {
    welcomeSection.style.display = 'none';
    questionSection.style.display = 'flex';
    var timeLeft = s;

    var timerInterval = setInterval(function(){
        if (timeLeft >= 0) {
            score = timeLeft;
            countdown.textContent = score;
            console.log(timeLeft);
            timeLeft--;
            return;
        } else if (score === 0) {
            clearInterval(timerInterval);
            displayFinalScore(score)
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// grading
// wrong answer
function wrongAnswer () {
    console.log('container click');
    feedback.textContent = 'Incorrect';
    score = score - 15;
    countdown.textContent = score;
    console.log('Current score is: ' + score);
}
//  correct answer
function correctAnswer (event) {
    console.log('button click');
    // event.stopPropagation();
    feedback.textContent = 'Correct!'
}

// display questions
// question 1
function displayQuestion1(object) {
    feedback.textContent = '';
    questionText.textContent = object.question;
    answer1Button.textContent = object.answer1.text;
    answer2Button.textContent = object.answer2.text;
    answer3Button.textContent = object.answer3.text;
    answer4Button.textContent = object.answer4.text;

    answer3Button.addEventListener('click', correctAnswer);
    answersContainer.addEventListener('click', wrongAnswer, true);
    answersContainer.addEventListener('click', () => {setTimeout(displayQuestion2(question2), 1000); }), true;     
}

// question2
function displayQuestion2(object) {
    feedback.textContent = '';
    questionText.textContent = object.question;
    answer1Button.textContent = object.answer1.text;
    answer2Button.textContent = object.answer2.text;
    answer3Button.textContent = object.answer3.text;
    answer4Button.textContent = object.answer4.text;

    answer3Button.addEventListener('click', correctAnswer);
    answersContainer.addEventListener('click', wrongAnswer);
    answersContainer.addEventListener('click', () => {setTimeout(displayQuestion3(question3), 500); }); 
}

// question3
function displayQuestion3(object) {
    feedback.textContent = '';
    questionText.textContent = object.question;
    answer1Button.textContent = object.answer1.text;
    answer2Button.textContent = object.answer2.text;
    answer3Button.textContent = object.answer3.text;
    answer4Button.textContent = object.answer4.text;

    answer4Button.addEventListener('click', correctAnswer);
    answersContainer.addEventListener('click', wrongAnswer);
    answersContainer.addEventListener('click', () => {setTimeout(displayQuestion4(question4), 500); }); 
}

// question4
function displayQuestion4(object) {
    feedback.textContent = '';
    questionText.textContent = object.question;
    answer1Button.textContent = object.answer1.text;
    answer2Button.textContent = object.answer2.text;
    answer3Button.textContent = object.answer3.text;
    answer4Button.textContent = object.answer4.text;

    answer3Button.addEventListener('click', correctAnswer);
    answersContainer.addEventListener('click', wrongAnswer);
    answersContainer.addEventListener('click', () => {setTimeout(displayQuestion5(question5), 500); }); 
}

// question5
function displayQuestion5(object) {
    feedback.textContent = '';
    questionText.textContent = object.question;
    answer1Button.textContent = object.answer1.text;
    answer2Button.textContent = object.answer2.text;
    answer3Button.textContent = object.answer3.text;
    answer4Button.textContent = object.answer4.text;

    answer3Button.addEventListener('click', correctAnswer);
    answersContainer.addEventListener('click', wrongAnswer);
    answersContainer.addEventListener('click', () => {setTimeout(displayFinalScore(score), 500); }); 
}

// display final score
// final score
function displayFinalScore (score) {
    welcomeSection.style.display = 'none';
    questionSection.style.display = 'none';
    finalScoreSection.style.display = 'flex';
    finalScore.textContent = score;
} 

// main
displayWelcomePage();
startQuizButton.addEventListener('click', () => { timer(score); });
displayQuestion1(question1);
console.log('initial score is: ' + score)