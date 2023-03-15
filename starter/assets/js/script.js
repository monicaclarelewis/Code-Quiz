
//Timer
var timer = document.querySelector('#time');
// Buttons
var startButton = document.querySelector("#start");
//Start screen
var startScreen = document.querySelector('.start')
// Questions
var revealQuestion = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choices = document.querySelector(".choices");
//Quiz end
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials'); 
var feedback = document.querySelector('#feedback');
var highscores = document.querySelector('#highscores'); 

var seconds = Questions.length * 15;

var Questiontrack = 0;

var userScore = 0;

var Currentquestion = "";

var timerId;
// Start button
startButton.addEventListener("click",  function () {
startScreen.setAttribute("style", "display: none;"); // removes page wrapper

timerId = setInterval(startTimer, 1000)

timer.textContent = seconds;
showQuestions();

});

// Timer
function startTimer () {
    timer.textContent = seconds
      seconds--;
  if (seconds < 0) {
      // clears countdown
    endGame()
  }
};

//Questions
function showQuestions () { 

revealQuestion.setAttribute("class", "");
var current = Questions[Questiontrack]

questionTitle.textContent = current.question

choices.innerHTML = ''

for (i = 0; i < current.choices.length; i++) {

 var choice = current.choices[i]

 var choiceBtn = document.createElement('button')

 choiceBtn.setAttribute('class', 'choice')
  choiceBtn.setAttribute('value', choice)

  choiceBtn.textContent = i + 1 + '. ' + choice;

  choices.appendChild(choiceBtn)
}
};

// //Answering
// choices.addEventListener("click", function(event) {
//   if ((event.target === Questions[Questiontrack].Answer)) { // DOESN'T WORK 
//     Correct();
//   } 
//   else {
//     seconds -= 10;
//     Incorrect();
//   }
// });

function answerClicked(event) {
  // get response from user event (click)
  var buttonElement = event.target;

  // what if a user clicks somerthing that is not an answer?
  if (!buttonElement.matches('.choice')) {
    return;
  }

  // check if user answered wrong
  if (buttonElement.value !== Questions[Questiontrack].Answer) {
    seconds -= 15

    if (seconds < 0) {
      seconds = 0
    }

    timer.textContent = seconds
    Incorrect()
  } else {
    Correct()
  }

  Questiontrack++

  if (seconds <= 0 || Questiontrack === Questions.length) {
    endGame()
  } else {
    showQuestions()
  }
}

choices.onclick = answerClicked;

function endGame() {
 clearInterval(timerId)

  endScreen.removeAttribute('class')

  finalScore.textContent = seconds
  console.log(timer)
  revealQuestion.setAttribute('class', 'hide')
}
//Correct answer
function Correct () {
  feedback.textContent = "Correct!"
  feedback.style.color = "green";
  feedback.setAttribute("class", "feedback")
};
//Incorrect answer
function Incorrect () {
  feedback.textContent = "Wrong!"
  feedback.style.color = "red";
  feedback.setAttribute("class", "feedback")
};

//TODO
//Next questions attribute
//End screen shows
//Set final time as score + show on screen
//Allow user to enter initials add score as highscore
//Set highscores on the highscore page 
