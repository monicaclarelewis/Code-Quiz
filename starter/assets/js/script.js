
// Elements
var timeEl = document.getElementsByClassName("timer");
scoresEl = document.getElementsByClassName("scores"), // high scores
// Buttons
startBtn = document.getElementsByClassName("start"),
submitHighscoreBtn = document.getElementById("submit"),
// Screens
introEl = document.getElementById("start-screen"),
quizEl = document.getElementById("questions"), 
endEl = document.getElementById("end-screen"),
highscoresEl = document.getElementById("highscores"),
// Inputs
initalsInput = document.getElementById("initials");
//let questNums = [...Array(questions.total).keys()], // array 0 to num of questions
//num = 1, // question number
//newInitials = "anon";


var secondsLeft = 60;

//Functions

//Start timer
function setTime() {
  startButton.disabled = true;
  renderBlanks()
  startTimer()
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      //This will need to move the user to the highscore page.
    }

  }, 4000);
}

setTime();
