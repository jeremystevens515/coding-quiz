var highscoreList = document.querySelector('.highscore-list');
var highscoreListItem = document.querySelector('.highscore-list-item');
var highscoreInitials = document.querySelector('#saved-initials');
var savedFinalScore = document.querySelector('#saved-score');
var clearHighscoresButton = document.querySelector('#clear-highscores');
var goBackButton = document.querySelector('#go-back');

function displayHighscore() {
    var savedInitials = localStorage.getItem('initials');
    console.log(savedInitials);
    var savedScore = localStorage.getItem('score');
    console.log(savedScore);
    highscoreInitials.textContent = savedInitials;
    savedFinalScore.textContent = savedScore;
    clearHighscoresButton.addEventListener('click', clearHighscores);
    goBackButton.addEventListener('click', toWelcomePage);
}

// go back to welcome page
function toWelcomePage () {
    window.location.href='index.html'
}
// clear highscores
function clearHighscores () {
    highscoreListItem.remove();
    localStorage.removeItem('initials');
    localStorage.removeItem('score');
    highscoreInitials.textContent = '(initials)';
    savedFinalScore.textContent = '(your score)';
}

displayHighscore();