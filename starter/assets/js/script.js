
//Timer
var timer = document.querySelector('#time');
// Buttons
var startButton = document.querySelector("#start");
//Start screen
var startScreen = document.querySelector('.start')
// Scores
var highscores = document.querySelector('.scores'); 

var seconds = 60;
timer.textContent = 60;

// Start button
startButton.addEventListener("click",  function () {
  // removes page wrapper
startScreen.setAttribute("style", "display: none;");
//showQuestions();
startTimer ();
});

// Start timer
function startTimer () {
  var Countdown = setInterval (function () {
      timer.textContent = seconds
      seconds--;
  if (seconds == 0) {
      // clears countdown
      clearInterval(Countdown); 
      timer.textContent = 60
      alert("You have run out of time!")
  }
  }, 1000) 
}
