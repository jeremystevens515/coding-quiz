// variables by parent
// header
var headerSection = document.querySelector('.header');
var timerElement = document.querySelector('#countdown');

// main
// welcome section
var welcomeSection = document.querySelector('.welcome');
var startQuizButton = document.querySelector('.start-quiz-button');

// question section
var questionSection = document.querySelector('.question');
var answer1Button = document.querySelector('#answer1');
var answer2Button = document.querySelector('#answer2');
var answer3Button = document.querySelector('#answer3');
var answer4Button = document.querySelector('#answer4');
var feedback = document.querySelector1('.feedback');

// final score section
var finalScoreSection = document.querySelector('.final-score');
var finalScore = document.querySelector('.final-score');
var userInit = document.querySelector('.initials');
var submitInitButton = document.querySelector('.submit-init-button');

// variables in highscore.html
var highscoreList = document.querySelector('.highscore-list');
var clearHighscoresButton = document.querySelector('#clear-highscores');
var goBackButton = document.querySelector('#go-back');


timerElement.textContent = 75;

// add eventlistener

// create timer

// write questions with answers

// write logic for scoring quiz

startQuizButton.addEventListener('click', sayHello);

function sayHello() {
    console.log('hello');
}