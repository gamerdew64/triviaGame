// This code will need to be executed when the DOM has fully loaded
$(document).ready(function()
{
  // This function controls the timing and fade of our loading gif. This will last for 3 seconds.
  $("#loader").delay(3000).fadeOut("fast");
});

// This controls the actions that are performed when the user clicks the start button
$(document).on("click", "#beginButton", function()
{
  game.start();
})

$(document).on('click','#submitAnswersButton', function()
{
  game.done();
})

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
  question: "Of Pink Floyd's four most popular albums, which one came out first?",
  possibleAnswers: ["Animals", "Dark Side of The Moon", "The Wall", "Wish You Were Here"],
  correctAnswer: "Dark Side of the Moon"
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

var game =
{
  correct: 0,
  incorrect: 0,
  //NEED TO CHANGE BACK TO 120. USING 20 FOR TESTING
  counter: 20,
  countdown: function()
  {
    game.counter--;
    $('#counter').html(game.counter);
    if(game.counter==0)
    {
      console.log("Time is Up!")

      //This clear interval should be removed once I get the other screen to splash
      clearInterval(timer);
      game.done();
    }
  },

  // var start = function()
  start: function()
  {
    timer = setInterval(game.countdown,1000);
    //NEED TO CHANGE BACK TO 120. USING 20 FOR TESTING
    $('#gameSection').prepend('<h2>Time Remaining: <span id="counter">20</span> Seconds</h2>');
    // Whenever we hit start, the button is going to get removed
    $('#beginButton').remove();

    // // This is to test the behavior to make sure that the browser is understanding that the user clicked the start button
    // console.log("Start Button Clicked");

    for(var i = 0; i<gameQuestions.length; i++)
    {
      $('#gameSection').append("<h2>" + gameQuestions[i].question + "</h2>");
      for(var j = 0; j<gameQuestions[j].possibleAnswers.length; j++)
      {
        // Append each question with a radio type, a name (that is equal to the number of the question), and a value that is equal to the answer.
        // This will let us store the value in the buttons themselves
        $('#gameSection').append("<input type= 'radio' name= 'question-" + i + "' value='" + gameQuestions[i].possibleAnswers[j] + "'>" + gameQuestions[i].possibleAnswers[j]);
      }
    }
    $('#gameSection').append('<br><button id="submitAnswersButton">Submit</button>');
  },

  // var done = function()
  done: function()
  {
    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-0]":checked'), function()
    {
      if($(this).val()==gameQuestions[0].correctAnswer)
      {
        //Increment correct answers
        game.correct++;
      }
      else
      {
        //Increment incorrect answers
        game.incorrect++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-1]":checked'), function()
    {
      if($(this).val()==gameQuestions[1].correctAnswer)
      {
        //Increment correct answers
        game.correct++;
      }
      else
      {
        //Increment incorrect answers
        game.incorrect++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-2]":checked'), function()
    {
      if($(this).val()==gameQuestions[2].correctAnswer)
      {
        //Increment correct answers
        game.correct++;
      }
      else
      {
        //Increment incorrect answers
        game.incorrect++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-3]":checked'), function()
    {
      if($(this).val()==gameQuestions[3].correctAnswer)
      {
        //Increment correct answers
        game.correct++;
      }
      else
      {
        //Increment incorrect answers
        game.incorrect++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-4]":checked'), function()
    {
      if($(this).val()==gameQuestions[4].correctAnswer)
      {
        //Increment correct answers
        game.correct++;
      }
      else
      {
        //Increment incorrect answers
        game.incorrect++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-5]":checked'), function()
    {
      if($(this).val()==gameQuestions[5].correctAnswer)
      {
        //Increment correct answers
        game.correct++;
      }
      else
      {
        //Increment incorrect answers
        game.incorrect++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-6]":checked'), function()
    {
      if($(this).val()==gameQuestions[6].correctAnswer)
      {
        //Increment correct answers
        game.correct++;
      }
      else
      {
        //Increment incorrect answers
        game.incorrect++;
      }
    });

    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-7]":checked'), function()
    {
      if($(this).val()==gameQuestions[7].correctAnswer)
      {
        //Increment correct answers
        game.correct++;
      }
      else
      {
        //Increment incorrect answers
        game.incorrect++;
      }
    });

  // Calls the "result" function that spashes the result totals on the screen
  this.endResults();
  },

  // var endResults = function()
  endResults: function()
  {
    // Clearing and resetting the timer
    clearInterval(timer);
    // Removing the set of matched elements from the DOM so that they can be replaced with new content
    $('#gameSection h2').remove();
    // New message to display on the screen after the done button has been pressed (see above)
    $('#gameSection').html("<h2>All done!</h2>");
    // Shows the total number of correct answers
    $('#gameSection').append("<h3>Correct Answers: " + this.correct + "</h3>");
    // Shows the total number of incorrect answers
    $('#gameSection').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    // How many questiosn where there? If if it wasn't correct or incorrect, then it must not have been answered
    $('#gameSection').append("<h3>Unanswered: " + (gameQuestions.length-(this.incorrect+this.correct))+ "</h3>");
  }
}
