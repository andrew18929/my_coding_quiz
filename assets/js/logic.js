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

// list of the questions I will use for the coding quiz
var questions = [
    {
        title: "What are variables used for in JavsScript",
        choices: ["For changing language settings", "For storing or holding data", "For changing a value's data type", "For deleting information"],
        answer: "For storing or holding data"
    },

    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        title: "The condition of an if/else statment is enclosed within ______",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "Arrays in JavaScript can be used to store",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },

    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    },

    {
        title: "Which of the following is an example of a single line comment:",
        choices: ["'Is this a comment?'", "// Is this a comment?", "console.log('Is this a comment?');", "console.log"],
        answer: "// Is this a comment?"
    },

    {
        title: "What is string concatenation",
        choices: ["When you assign a string to a variable", "When you change a variable's value", "When you join strings together", "When you print a string to the console"],
        answer: "When you join strings together"
    },

    {
        title: "What is the correct way to call the random method on the Math global object?",
        choices: ["math.random()", "Math(random)", "random.Math()", "Math.random()"],
        answer: "Math.random()"
    },

    {
        title: "What is the correct way to declare a new variable that you can change?",
        choices: ["const myName = 'Andrew';", "let myName = 'Andrew';", "myName = 'Andrew';", "let myName: 'Andrew';"],
        answer: "let myName = 'Andrew';"
    },

    {
        title: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
]

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
    timerEl.textContent = time;

// call function to get questions
    getQuestions();
} // end startQuiz()



// function to get questions getQuestions()
function getQuestions() {
    // get current question from array -optional: see if you can get questions at random
    var currentQuestion = questions[currentQuestionIndex];
    // make sure to update the title section with the current question
    questionsEl.children[0].textContent = currentQuestion.title;
    // make sure to clear out any old questions and choices
    while (choicesEl.hasChildNodes()) {
        choicesEl.removeChild(choicesEl.lastChild);
    }
    // create a for loop to loop over choices
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        // make sure to create a new button for each choice
        var userChoice = document.createElement("button");
        userChoice.textContent = currentQuestion.choices[i];
        // make sure to display choices on the screen
        choicesEl.appendChild(userChoice);
    }

    // make sure to create a new button for each choice
    choicesEl.children[0].addEventListener("click", function(event) {
        chosenAnswer(choicesEl.children[0]);
    });
    choicesEl.children[1].addEventListener("click", function(event) {
        chosenAnswer(choicesEl.children[1]);
    });
    choicesEl.children[2].addEventListener("click", function(event) {
        chosenAnswer(choicesEl.children[2]);
    });
    choicesEl.children[3].addEventListener("click", function(event) {
        chosenAnswer(choicesEl.children[3]);
    });
} // end getQuestions()


// create a function to track right and wrong answers 
function chosenAnswer(answerChoice) {
    // check to see if answer is wrong using if statement
    if(answerChoice.textContent != questions[currentQuestionIndex].answer) {
        // penalty on time if answered wrong
        time -= 10;
        // display feedback on page
        feedbackEl.textContent = "Incorrect";
    }    
    //else
    else {
        // display other feedback
        feedbackEl.textContent = "Correct";
    }

    // flash right/wrong feedback on page for a second
    feedbackEl.setAttribute("class", "feedback");
    setInterval(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    // move to next question
    currentQuestionIndex++;

    // check to see if there are any more questions using if statement
    if (currentQuestionIndex === questions.length) {
      // if none quiz end
      quizEnd();
    } else { // else get next question
        getQuestions();
    }
} // end chosenAnswer()

// create function to end the quiz
function quizEnd() {
    // stop timer
    clearInterval(timerId);
    timerEl.textContent = time;

    // show end screen
    var endScreenEl = document.getElementById("end");
    endScreenEl.setAttribute("clas", " ");

    // show final score after quiz is done
    var finalScoreEl = document.getElementById("score");
    finalScoreEl.textContent = time;

    // hide questions section
    questionsEl.setAttribute("class", "hide");
}// end quizEnd()

// function for timer clockCountdown()
function clockCountdown() {
    // make sure to update time
    time--;
    timerEl.textContent = time + "seconds till your time expires!";
    // if statement to check if quiz ran out of time
    if (time === 0) {
        quizEnd();
    }
}

// create fuction for highscore
// get value of initials imput
// make sure value is not an empty string by using if statement
// get saved scores from localStorage
// format new score object for current user
// save to local storage
// redirect to the highscores.html page
// end function

// click button for user to store initials

// click button to start quiz
submitBtn.onclick = startQuiz;