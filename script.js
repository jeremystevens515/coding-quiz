// variables by parent, which store references to html elements
// header
var headerSection = document.querySelector('.header');
var timerEl = document.querySelector('.timer');
var countdown = document.querySelector('#countdown');
var myTimer;
var score = 75;
var scoreisFinal = false;

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
var initialsForm = document.querySelector('initials-form');
var userInitialsInput = document.querySelector('#initials');
var submitInitialsButton = document.querySelector('#submit-initials-button');

// default view
function displayWelcomePage () {
    questionSection.style.display = 'none';
    finalScoreSection.style.display = 'none';
}

// test timer
function timer() {
    welcomeSection.style.display = 'none';
    questionSection.style.display = 'flex';
    console.log(scoreisFinal);
    myTimer = setInterval(timerInterval, 1000);
}

function timerInterval() {
        // if score is greater than zero, subtract 1 every second
    if (scoreisFinal) {
        clearInterval(myTimer);
        displayFinalScore(score);
    }  else if (score >= 0) {
        countdown.textContent = score;
        score--;
    // if score reaches less than zero, set score to zero, stop timer, and display final score section
    } else if (score <= 0) {
        score = 0;
        clearInterval(myTimer);
        displayFinalScore(score);
    } else {
        clearInterval(myTimer);
    }
}

// grading
// wrong answer
function wrongAnswer () {
    console.log('wrong button click');
    feedback.textContent = 'Incorrect';
    score = score - 15;
    countdown.textContent = score;
    console.log('Current score is: ' + score);
}

//  correct answer
function correctAnswer () {
    console.log('correct button click');
    feedback.textContent = 'Correct!'
}

// delay display event functions
function delayQ2() {
    setTimeout(displayQuestion2, 500);
}

function delayQ3() {
    setTimeout(displayQuestion3, 500);
}

function delayQ4() {
    setTimeout(displayQuestion4, 500);
}

function delayQ5() {
    setTimeout(displayQuestion5, 500);
}

function delayFinalScore() {
    setTimeout(displayFinalScore(score), 500);
}
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
    answersContainer.addEventListener('click', delayQ2);
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
    answersContainer.removeEventListener('click', delayQ2);

    // add new event listeners
    answer1Button.addEventListener('click', wrongAnswer);
    answer2Button.addEventListener('click', wrongAnswer);
    answer3Button.addEventListener('click', correctAnswer);
    answer4Button.addEventListener('click', wrongAnswer);
    answersContainer.addEventListener('click', delayQ3);
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
    answersContainer.removeEventListener('click', delayQ3);
    
    // add new event listeners
    answer1Button.addEventListener('click', wrongAnswer);
    answer2Button.addEventListener('click', wrongAnswer);
    answer3Button.addEventListener('click', wrongAnswer);
    answer4Button.addEventListener('click', correctAnswer);
    answersContainer.addEventListener('click', delayQ4);
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
    // remove event listeners from previous question
    answer1Button.removeEventListener('click', wrongAnswer);
    answer2Button.removeEventListener('click', wrongAnswer);
    answer3Button.removeEventListener('click', wrongAnswer);
    answer4Button.removeEventListener('click', correctAnswer);
    answersContainer.removeEventListener('click', delayQ4);
    // add new event listeners
    answer1Button.addEventListener('click', wrongAnswer);
    answer2Button.addEventListener('click', wrongAnswer);
    answer3Button.addEventListener('click', correctAnswer);
    answer4Button.addEventListener('click', wrongAnswer);
    answersContainer.addEventListener('click', delayQ5);
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

    // remove event listeners from previous question
    answer1Button.removeEventListener('click', wrongAnswer);
    answer2Button.removeEventListener('click', wrongAnswer);
    answer3Button.removeEventListener('click', correctAnswer);
    answer4Button.removeEventListener('click', wrongAnswer);
    answersContainer.removeEventListener('click', delayQ5);

    // add new event listeners
    answer1Button.addEventListener('click', wrongAnswer);
    answer2Button.addEventListener('click', wrongAnswer);
    answer3Button.addEventListener('click', wrongAnswer);
    answer4Button.addEventListener('click', correctAnswer);
    answersContainer.addEventListener('click', delayFinalScore);
}

// display final score
// final score
function displayFinalScore (score) {
    scoreisFinal = true;
    console.log('final score section');
    console.log('score is final' + scoreisFinal);
    timerEl.style.display ='none';
    welcomeSection.style.display = 'none';
    questionSection.style.display = 'none';
    finalScoreSection.style.display = 'flex';
    finalScore.textContent = score;
    console.log('final score: ' + score);
    localStorage.setItem('score', score);
    submitInitialsButton.addEventListener('click', saveUserInfo);
    submitInitialsButton.addEventListener('click', redirectToHighscores);
} 

// submit initials
function saveUserInfo(event) {
    event.preventDefault();
    console.log('submit button clicked');
    var initials = userInitialsInput.value;
    console.log(initials);
    localStorage.setItem('initials', initials)
}

// redirect to highscore page
function redirectToHighscores () {
    window.location.href='highscore.html';
}

// initalize
function init() {
    displayWelcomePage();
    startQuizButton.addEventListener('click', timer);
    displayQuestion1();
    console.log('initial score is: ' + score)
}

init();