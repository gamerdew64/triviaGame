// This code will need to be executed when the DOM has fully loaded
$(document).ready(function()
{
  // This function controls the timing and fade of our loading gif. This will last for 3 seconds.
  $("#loader").delay(3000).fadeOut("fast");
});

// This controls the actions that are performed when the user clicks the begin button
$(document).on("click", "#beginButton", function()
{
  // This calls the function that begins the game
  gameStats.gameBegin();
})

$(document).on('click','#submitAnswersButton', function()
{
  // This calls the function that collects answers and compares them against the correct one
  gameStats.gameDone();
})

//This is a varable that is assigned to an array of 8 different questions
var gameQuestions = [{
  question: "Who recorded the hit single 'Come Sail Away' in 1977?",
  possibleAnswers: ["The Beatles", "Kiss", "Steeley Dan", "Styx"],
  correctAnswer: "Styx"
}, {
  question: "Which band hits include 'The Big Money', 'Red Sector A', 'Show Dont Tell' and '2112 Overture' ?",
  possibleAnswers: ["The Eagles", "Rush", "The Rolling Stones", "Fleetwood Mac"],
  correctAnswer: "Rush"
}, {
  question: "Who was not a member of the traveling Wilburys?",
  possibleAnswers: ["Bob Dylan", "Roy Orbison", "Tom Petty", "Eric Clapton"],
  correctAnswer: "Eric Clapton"
}, {
  question: "Which band had a greatest hits album called '10 from 6'?",
  possibleAnswers: ["Boston", "Journey", "Bad Company", "Cheap Trick"],
  correctAnswer: "Bad Company"
}, {
  question: "Which Pink Floyd album was released first?",
  possibleAnswers: ["Animals", "Dark Side of The Moon", "The Wall", "Wish You Were Here"],
  correctAnswer: "Dark Side of The Moon"
}, {
  question: "Who was the drummer for Thin Lizzy?",
  possibleAnswers: ["Aynsley Dunbar", "Joey Kramer", "Brian Downey", "Brad Delp"],
  correctAnswer: "Brian Downey"
}, {
  question: "What was the old man drinking in Billy Joel's 'Piano Man' song?",
  possibleAnswers: ["Manhattan", "Tonic and Gin", "Bloody Mary", "Vodka Tonic"],
  correctAnswer: "Tonic and Gin"
}, {
  question: "Who originally recorded 'Stone Cold Crazy'?",
  possibleAnswers: ["Queen", "Metallica", "Guns N' Roses", "Thin Lizzy"],
  correctAnswer: "Queen"
}];

var gameStats =
{
  correctValue: 0,
  incorrectValue: 0,
  // Game will last 60 seconds and then finish
  counter: 60,

  // var gameCountdown = function()
  gameCountdown: function()
  {
    gameStats.counter--;
    $('#counter').html(gameStats.counter);
    if(gameStats.counter==0)
    {
      // Testing to make sure that the a message generates in the console when the time is up
      // console.log("Time is Up!")

      gameStats.gameDone();
    }
  },

  // var gameBegin = function()
  gameBegin: function()
  {
    gameTimer = setInterval(gameStats.gameCountdown,1000);
    //NEED TO CHANGE BACK TO 120. USING 20 FOR TESTING
    $('#gameSection').prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>');
    // Whenever we hit begin, the button is going to get removed
    $('#beginButton').remove();

    // // This is to test the behavior to make sure that the browser is understanding that the user clicked the begin button
    // console.log("Begin Button Clicked");

    for(var i = 0; i<gameQuestions.length; i++)
    {
      $('#gameSection').append("<h2>" + gameQuestions[i].question + "</h2>");
      for(var j = 0; j<gameQuestions[j].possibleAnswers.length; j++)
      {
        // We are appending each question with a radio type, a name (that is equal to the number of the question), and a value that is equal to the answer.
        // This will let us store the value in the buttons themselves
        $('#gameSection').append("<input type= 'radio' name= 'question-" + i + "' value='" + gameQuestions[i].possibleAnswers[j] + "'>" + gameQuestions[i].possibleAnswers[j]);
      }
    }
    $('#gameSection').append('<br><button id="submitAnswersButton">Submit</button>');
  },

  // This function takes the input gathered for each question and compares it to the correct answer
      // If the answer is correct, the correct answers are incremented
      // If the answer is incorrect, the incorrect answers are incremented
  // var gameDone = function()
  gameDone: function()
  {
    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-0"]:checked'), function()
    {
      if($(this).val()==gameQuestions[0].correctAnswer)
      {
        //Increment correct answers
        gameStats.correctValue++;
      }
      else
      {
        //Increment incorrect answers
        gameStats.incorrectValue++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-1"]:checked'), function()
    {
      if($(this).val()==gameQuestions[1].correctAnswer)
      {
        //Increment correct answers
        gameStats.correctValue++;
      }
      else
      {
        //Increment incorrect answers
        gameStats.incorrectValue++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-2"]:checked'), function()
    {
      if($(this).val()==gameQuestions[2].correctAnswer)
      {
        //Increment correct answers
        gameStats.correctValue++;
      }
      else
      {
        //Increment incorrect answers
        gameStats.incorrectValue++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-3"]:checked'), function()
    {
      if($(this).val()==gameQuestions[3].correctAnswer)
      {
        //Increment correct answers
        gameStats.correctValue++;
      }
      else
      {
        //Increment incorrect answers
        gameStats.incorrectValue++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-4"]:checked'), function()
    {
      if($(this).val()==gameQuestions[4].correctAnswer)
      {
        //Increment correct answers
        gameStats.correctValue++;
      }
      else
      {
        //Increment incorrect answers
        gameStats.incorrectValue++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-5"]:checked'), function()
    {
      if($(this).val()==gameQuestions[5].correctAnswer)
      {
        //Increment correct answers
        gameStats.correctValue++;
      }
      else
      {
        //Increment incorrect answers
        gameStats.incorrectValue++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-6"]:checked'), function()
    {
      if($(this).val()==gameQuestions[6].correctAnswer)
      {
        //Increment correct answers
        gameStats.correctValue++;
      }
      else
      {
        //Increment incorrect answers
        gameStats.incorrectValue++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-7"]:checked'), function()
    {
      if($(this).val()==gameQuestions[7].correctAnswer)
      {
        //Increment correct answers
        gameStats.correctValue++;
      }
      else
      {
        //Increment incorrect answers
        gameStats.incorrectValue++;
      }
    });

  // Calls the "result" function that spashes the result totals on the screen
  this.endResults();
  },

  // This function clears the timer, removes the current elements from the DOM, shows the user a game over message, and displays the total number of correct, incorrect, and unanswered questions.
  // var endResults = function()
  endResults: function()
  {
    // Clearing and resetting the timer
    clearInterval(gameTimer);
    // Removing the set of matched elements from the DOM so that they can be replaced with new content
    $('#gameSection h2').remove();
    // New message to display on the screen after the submit button has been pressed (see above)
    $('#gameSection').html("<h2 id=gameOver>Game Over!</h2>");
    // Shows the total number of correct answers
    $('#gameSection').append("<h3 id=correctAnswers>Correct Answers: " + this.correctValue + "</h3>");
    // Shows the total number of incorrect answers
    $('#gameSection').append("<h3 id=incorrectAnswers>Incorrect Answers: " + this.incorrectValue + "</h3>");
    // How many questiosn where there? If if it wasn't correct or incorrect, then it must not have been answered
    $('#gameSection').append("<h3 id=unansweredQuestions>Unanswered: " + (gameQuestions.length-(this.incorrectValue+this.correctValue))+ "</h3>");
  }
}
