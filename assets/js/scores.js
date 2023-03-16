var highscoreEl = document.getElementById('highscores')
var highscore = localStorage.getItem('score')

//Adding score to highscore page
function showHighScores() {
    var initialsEl = document.getElementById('initials')
    var initials = localStorage.getItem('initials')
    highscoreEl.textContent = `Hi ${initials} your high score is ` + highscore;
}

//Removing score with clear button + take you back to quiz
function clearScore() {
    localStorage.removeItem('score')
    window.location.reload();
    window.location.href = 'index.html'
}
document.getElementById('clear').onclick = clearScore
showHighScores()