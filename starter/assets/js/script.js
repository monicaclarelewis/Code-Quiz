
//Timer
var timer = document.querySelector('#time');
// Buttons
var startButton = document.querySelector("#start");
//Start screen
var startScreen = document.querySelector('.start')
// Questions
var revealQuestion = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var question = document.getElementById('choices'); 
var answer = document.getElementById('Answer');
//Quiz end
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials'); 
var feedback = document.querySelector('#feedback');
var highscores = document.querySelector('#highscores'); 

var seconds = 60;

var Questiontrack = 0;

var userScore = 0;

var Currentquestion = "";

// Start button
startButton.addEventListener("click",  function () {
startScreen.setAttribute("style", "display: none;"); // removes page wrapper
showQuestions();
startTimer ();
});

// Timer
function startTimer () {
  var Countdown = setInterval (function () {
      timer.textContent = seconds
      seconds--;
  if (seconds < 0) {
      // clears countdown
      clearInterval(Countdown); 
      timer.textContent = 60
      alert("You have run out of time!")
  }
  }, 1000) 
};

//Questions
function showQuestions () { 
revealQuestion.setAttribute("class", "");
questionTitle.textContent = Questions[Questiontrack].question;
// adds questions, choices & answer
for (var i = 0; i < Questions[Questiontrack].choices.length; i++) {
// sets choices as button
var btn = document.createElement('button');
btn.textContent = Questions[Questiontrack].choices[i];
question.appendChild(btn);
btn.setAttribute("id", "options" + i)}
};

//Answering
choices.addEventListener("click", function(event) {
  if (event === answer) { // DOESN'T WORK 
    Correct();
  } else {
    seconds -= 10;
    Incorrect();
  }
});

//Correct answer
function Correct () {
  feedback.textContent = "Correct!"
  feedback.setAttribute("class", "")
};
//Incorrect answer
function Incorrect () {
  feedback.textContent = "Wrong!"
  feedback.setAttribute("class", "")
};

//TODO
//Next questions attribute
//End screen shows
//Set final time as score + show on screen
//Allow user to enter initials add score as highscore
//Set highscores on the highscore page