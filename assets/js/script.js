
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
var feedback = document.querySelector('#feedback');
//Quiz end
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submit');
//Highscores
var clearHighscores = document.querySelector('#clear');
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
  //Set choices as buttons
 var choiceBtn = document.createElement('button')
 choiceBtn.setAttribute('class', 'choice')
 choiceBtn.setAttribute('value', choice)
 choiceBtn.textContent = i + 1 + '. ' + choice;
 choices.appendChild(choiceBtn)
}
};

function answerClicked(event) {
  // get response from user event (click)
  var buttonElement = event.target;

  // stopping the event if the user clicks on something that isn't a choice
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
    // if the user answers correctly
  } else {
    Correct()
  }

  //moves to the next question
  Questiontrack++

  //if the time is up or there are no more questions
  if (seconds <= 0 || Questiontrack === Questions.length) {
    endGame()
  } else {
    showQuestions()
  }
}

choices.onclick = answerClicked;

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

//when the game ends (from time running out or questions are all answered)
function endGame() {
 clearInterval(timerId)

  endScreen.removeAttribute('class')

  finalScore.textContent = seconds
  console.log(timer)
  revealQuestion.setAttribute('class', 'hide')
  feedback.setAttribute("class", 'hide')
};


//TODO
//Set highscores on the highscore page 

//Save button to store intials and score
submitBtn.addEventListener("click", function() {
  console.log(initials.value) 
  console.log(timer.textContent) 

  //Save intiials and score to localStorage
  localStorage.setItem("initials", initials.value);
  localStorage.setItem("score", timer.textContent);

  
});
