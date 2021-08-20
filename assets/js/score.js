// create a function to print high scores - printHighScores()
function printHighScores() {
    // get high scores from local storage
    var highScores = JSON.parse(localStorage.getItem("highscores"));

    // use an if statement to check if any store high scores
    if(highScores != null){
      // for each score
      for(var i = 0; i < highScores.length; i++){
        // create li tag for each high score
        var highScoreList = document.createElement("li");
        highScoreList.textContent = highScores[i].initials + " - " + highScores[i].score;
        // display initials and high score on page
        document.getElementById("highscores").appendChild(highScoreList);
      }
    }
    else {
      var temp = document.getElementById("highscores");
      temp.textContent = "NO HIGH SCORES HAVE BEEN RECORDED";     
    }
  } // end printHighScores()
  

  // create clearHighScores() function to clear scores for high scores list
  function clearHighScores() {
    localStorage.removeItem("highscores");
    location.reload();
  }

  
  // clear scores with evertListener
  var clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", function(){
    clearHighScores();
  })

  
  // run print high scores when page loads
  printHighScores();