// variables by parent, which store references to html elements
// header
var headerSection = document.querySelector('.header');
var countdown = document.querySelector('#countdown');

// main
// welcome section
var welcomeSection = document.querySelector('.welcome');
var startQuizButton = document.querySelector('.start-quiz-button');

// question section
var questionSection = document.querySelector('.question');
var questionText = document.querySelector('.question-text');
var answer1Button = document.querySelector('#answer1');
var answer2Button = document.querySelector('#answer2');
var answer3Button = document.querySelector('#answer3');
var answer4Button = document.querySelector('#answer4');
var feedback = document.querySelector('.feedback');

// final score section
var finalScoreSection = document.querySelector('.final-score');
var finalScore = document.querySelector('.final-score');
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
    var timeLeft = 75;

    var timerInterval = setInterval(function(){
        if (timeLeft >= 0) {
            countdown.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timerInterval);
            
        }
    }, 1000);
}

// display question
function displayQuestion(object) {
    feedback.textContent = '';
    questionText.textContent = object.question;
    answer1Button.textContent = object.answer1.text;
    answer2Button.textContent = object.answer2.text;
    answer3Button.textContent = object.answer3.text;
    answer4Button.textContent = object.answer4.text;
}

// grade question
function grading(object) {
    answer1Button.addEventListener('click', isAns1Correct(object));
    answer2Button.addEventListener('click', getIsCorrect);
    answer3Button.addEventListener('click', getIsCorrect);
    answer4Button.addEventListener('click', getIsCorrect);
}

function isAns1Correct(object) {
    if (object.answer1.isCorrect) {
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Wrong";
    }
}



displayWelcomePage();
startQuizButton.addEventListener('click', timer);
displayQuestion(question1);