// variables to reference DOM elements in index.html
var questionsEl = document.getElementById("quiz-questions");
var timerEl = document.getElementById("timer");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("begin");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// variable for quiz
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// begin quiz using a function startQuiz()
function startQuiz() {
// make sure to hide the start screen when quiz begins
    var startScreen = document.getElementById("start");
    startScreen.setAttribute("class", "start: hide"); //?
// make sure to un-hide questions
    questionsEl.setAttribute("class", " ");
// make sure to start timer
    timerID = setInterval(function() {
        clockCountdown();
    }, 1000);
// make sure to show starting time
// call function to get questions
}


// function to get questions getQuestion()
// optional: see if you can get questions at random
// make sure to update the title section with the current question
// make sure to clear out any old questions and choices
// create a for loop to loop over choices
// make sure to create a new button for each choice
// make sure to display choices on the screen
// need to attach an eventListener to each choice
// end function

// create a function to track right and wrong answers 
// check to see if answer is wrong using if statemet
// penalty
// display feedback on page
//else
// display other feedback
// flash right/wrong feedback on page for a secod
// move to next question
// check to see if there are any more questions using if statement
// if none quiz end
// else get next question
// end function

// create function to end the quiz
// stop timer
// show end screen
// show final score
// hide questions section
// end function

// create function for timer count down
// update time
// check if time ran out
// end function

// create fuction for highscore
// get value of initials imput
// make sure value is not an empty string by using if statement


// function for timer clockCountdown()




// click button to start quiz
submitBtn.onclick = startQuiz;