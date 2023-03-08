
//Timer
var timer = document.querySelector('#time');
// Scores
var highscores = document.querySelector('.scores'); 
// Buttons
var startButton = document.querySelector("#start");
//Start screen
var startScreen = document.querySelector('.start')
// Questions
var revealQuestion = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var question = document.querySelector('choices'); 
var Currentquestion = "";

var seconds = 60;
timer.textContent = 60;

var Questiontrack = 0;

// Start button
startButton.addEventListener("click",  function () {
startScreen.setAttribute("style", "display: none;"); // removes page wrapper
showQuestions();
startTimer ();
});

//Question function
function showQuestions () { 
revealQuestion.setAttribute("class", "");
questionTitle.textContent = Questions[Questiontrack].question
// adds questions, choices & answer
for (var i = 0; i < Questions[Questiontrack].choices.length; i++) {
var btn = document.createElement('button');
// button content 
btn.textContent = Questions[Questiontrack].choices[i]
questions.appendChild(btn);
btn.setAttribute("id", "options" + i)}
}


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
