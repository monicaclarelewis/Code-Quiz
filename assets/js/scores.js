var highscoreEl = document.getElementById('highscores')
var highscore = localStorage.getItem('score')

function showHighScores() {
    var initialsEl = document.getElementById('initials')
    var initials = localStorage.getItem('initials')
    highscoreEl.textContent = `Hi ${initials} your high score is ` + highscore;
}

function clearScore() {
    localStorage.removeItem('score')
    window.location.reload();
    window.location.href = 'index.html'
}
document.getElementById('clear').onclick = clearScore
showHighScores()