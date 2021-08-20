// variables to reference DOM elements
var questionsEl = document.getElementById("quiz-questions");
var timerEl = document.getElementById("timer");
var choicesEl = document.getElementById("multiple-choices");
var submitBtn = document.getElementById("submit-initials");
var startBtn = document.getElementById("begin");
var initialsEl = document.getElementById("enter-initials");
var feedbackEl = document.getElementById("feedback");

// variables to keep track of quiz state
var questionIndex = 0;
var time = questions.length * 10;
var timerId;

// begin quiz using function beginQuiz()
function beginQuiz() {
  // hide start screen
  var startScreen = document.getElementById("opening-screen");
  startScreen.setAttribute("class", "start hide");
  // make sure to unhide questions
  questionsEl.setAttribute("class", " ");
  // make sure to start timer when quiz begins
  timerId = setInterval(function(){
    timerCountdown();
  }, 1000);
  // make sure to show starting time
  timerEl.textContent = time;

  //call getQuestions() function to get questions
  getQuestions();
} // end beginQuiz()


// create getQuestions() function to get questions
function getQuestions() {
  // get current question object from array
  var currentQuestion = questions[questionIndex];
  // update title with current question
  questionsEl.children[0].textContent = currentQuestion.title;
  // clear out any old question choices
  while (choicesEl.hasChildNodes()) {
    choicesEl.removeChild(choicesEl.lastChild);
  }
  // loop over choices
  for(var i = 0; i < currentQuestion.choices.length; i++){
    // create new button for each choice
    var choiceButton = document.createElement("button");
    choiceButton.textContent = currentQuestion.choices[i];
    
    // display on the page
    choicesEl.appendChild(choiceButton);
  }

  // attach click event listener to each choice
  choicesEl.children[0].addEventListener("click", function(event){
    chosenAnswer(choicesEl.children[0]);
  });
  choicesEl.children[1].addEventListener("click", function(event){
    chosenAnswer(choicesEl.children[1]);
  });
  choicesEl.children[2].addEventListener("click", function(event){
    chosenAnswer(choicesEl.children[2]);
  });
  choicesEl.children[3].addEventListener("click", function(event){
    chosenAnswer(choicesEl.children[3]);
  });
} // end getQuestions()


// creat a function to track richt and wrong answers
function chosenAnswer(answerChoice) {
  // check if user guessed wrong  
  if(answerChoice.textContent != questions[questionIndex].answer){
    // penalize time
    time -= 10;
    // display new time on page and feedback
    feedbackEl.textContent = "Incorrect";
  }
  // else 
  else{
    // display correct feedback
    feedbackEl.textContent = "Correct";
  }

  // flash right/wrong feedback on page for half a second
  feedbackEl.setAttribute("class", "feedback");
  setInterval(function(){
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question
  questionIndex++;

  // check to see if there are any more questions using an if statement
  if(questionIndex === questions.length)
    // quizEnd
    quizEnd();
  else // else get next question
    getQuestions();
}


// create function to end the quiz
function quizEnd() {
  // this stops timer
  clearInterval(timerId);
  timerEl.textContent = time;

  // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.setAttribute("class", " ");

  // show the final score after the quiz is done
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide questions section
  questionsEl.setAttribute("class", "hide");
}


// functin for timerCountdown()
function timerCountdown() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if(time <= 0)
    quizEnd();
  
}


// create function for saving highscores
function saveHighScores() {
  // get value of input box
  var initials = initialsEl.value.toUpperCase();
  // make sure value wasn't empty
  if(initials === ""){ 
    alert("Input mustn't be blank'");
    return;
  }
  else if(initials.length > 4){
    alert("Input must be no more than 3 characters");
    return;
  }
  else{
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores;
    if(JSON.parse(localStorage.getItem("highscores")) != null)
      highscores = JSON.parse(window.localStorage.getItem("highscores"));
    else
      highscores = [];
    // format new score object for current user
    var newScore = {
      initials: initials,
      score: time
    };
    highscores.push(newScore);

    // save to localstorage
    localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    location.href = "high_scores.html";
  }
}


// creat function to see if enter button is pushed
function checkForEnterBtn(event) {
  // check if event key is enter
    if(event.keyCode === 13)
      // save high scores
      saveHighScores();
}

// user clicks button to submit initials
submitBtn.onclick = saveHighScores;

// user clicks button to start quiz
startBtn.onclick = beginQuiz;

initialsEl.onkeyup = checkForEnterBtn;