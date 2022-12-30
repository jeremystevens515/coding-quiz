// variables by parent
// header
var headerSection = document.querySelector('.header');
var countdown = document.querySelector('#countdown');

// main
// welcome section
var welcomeSection = document.querySelector('.welcome');
var startQuizButton = document.querySelector('.start-quiz-button');

// question section
var questionText = document.querySelector('.question');
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


// create timer
function timer() {
    var timeLeft = 75;

    var timerInterval = setInterval(function(){
        if (timeLeft > 0) {
            countdown.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// create function that sets display to none
function displayNone (element) {
    element.style.display = 'none';
}

function displayFlex (element) {
    element.style.display = 'flex';
}

// write questions with answers
// make sections visible
function question1() {
    questionText.textContent = 'Commonly used data types do NOT include: '
    answer1Button.textContent = 'strings';
    answer2Button.textContent = 'booleans';
    answer3Button.textContent = 'alerts';
    answer4Button.textContent = 'numbers';
}

function question2() {
    questionText.textContent = 'The condition of an if/else statement is enclosed within _____.';
    answer1Button.textContent = 'quotes';
    answer2Button.textContent = 'curly brackets';
    answer3Button.textContent = 'parentheses';
    answer4Button.textContent = 'square brackets';
}

function question3() {
    questionText.textContent = 'Arrays in JavaScript are used to store _____.';
    answer1Button.textContent = 'numbers and strings';
    answer2Button.textContent = 'other arrays';
    answer3Button.textContent = 'booleans';
    answer4Button.textContent = 'all of the above';
}

function question4() {
    questionText.textContent = 'String values must be enclosed within _____ when being assigned to variables.';
    answer1Button.textContent = 'commas';
    answer2Button.textContent = 'curly brackets';
    answer3Button.textContent = 'quotes';
    answer4Button.textContent = 'parentheses';
}

function question5() {
    questionText.textContent = 'A useful tool used during development and debugging for printing content to the debugger is:'
    answer1Button.textContent = 'JavaScript';
    answer2Button.textContent = 'terminal/bash';
    answer3Button.textContent = 'for loops';
    answer4Button.textContent = 'console.log';
}
// write logic for scoring quiz


// add eventlisteners
startQuizButton.addEventListener('click', timer);