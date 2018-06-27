// https://www.youtube.com/watch?v=3eWhkc_u5rE

// This controls the actions that are performed when the user clicks the start button
$(document).on("click", "#start", function()
{
  game.start();
})

$(document).on('click','#end', function()
{
  game.done();
})

var questions = [{
  question: "Who recorded the hit single 'Come Sail Away' in 1977?",
  answers: ["The Beatles", "Kiss", "Steeley Dan", "Styx"],
  correctAnswer: "Styx"
}, {
  question: "Which band hits include 'The Big Money', 'Red Sector A', 'Show Dont Tell' and '2112 Overture' ?",
  answers: ["The Eagles", "Rush", "The Rolling Stones", "Fleetwood Mac"],
  correctAnswer: "Rush"
}, {
  question: "Who was not a member of the traveling Wilburys?",
  answers: ["Bob Dylan", "Roy Orbison", "Tom Petty", "Eric Clapton"],
  correctAnswer: "Eric Clapton"
}, {
  question: "Which band had a greatest hits album called '10 from 6'?",
  answers: ["Boston", "Journey", "Bad Company", "Cheap Trick"],
  correctAnswer: "Bad Company"
}, {
  question: "Of Pink Floyd's four most popular albums, which one came out first?",
  answers: ["Animals", "Dark Side of The Moon", "The Wall", "Wish You Were Here"],
  correctAnswer: "Dark Side of the Moon"
}, {
  question: "Who was the drummer for Thin Lizzy?",
  answers: ["Aynsley Dunbar", "Joey Kramer", "Brian Downey", "Brad Delp"],
  correctAnswer: "Brian Downey"
}, {
  question: "What was the old man drinking in Billy Joel's 'Piano Man' song?",
  answers: ["Manhattan", "Tonic and Gin", "Bloody Mary", "Vodka Tonic"],
  correctAnswer: "Tonic and Gin"
}, {
  question: "Who originally recorded 'Stone Cold Crazy'?",
  answers: ["Queen", "Metallica", "Guns N' Roses", "Thin Lizzy"],
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
  start: function()
  {
    timer = setInterval(game.countdown,1000);
    //NEED TO CHANGE BACK TO 120. USING 20 FOR TESTING
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">20</span> Seconds</h2>');
    // Whenever we hit start, the button is going to get removed
    $('#start').remove();

    // // This is to test the behavior to make sure that the browser is understanding that the user clicked the start button
    // console.log("Start Button Clicked");

    for(var i = 0; i<questions.length; i++)
    {
      $('#subwrapper').append("<h2>" + questions[i].question + "</h2>");
      for(var j = 0; j<questions[j].answers.length; j++)
      {
        // Append each question with a radio type, a name (that is equal to the number of the question), and a value that is equal to the answer.
        // This will let us store the value in the buttons themselves
        $('#subwrapper').append("<input type= 'radio' name= 'question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
      }
    }
    $('#subwrapper').append('<br><button id="end">DONE</button>');
  },
  done: function()
  {
    // Looking for any input type that has the name of question one, and is currently checked/clicked
    $.each($('input[name="question-0]":checked'), function()
    {
      if($(this).val()==questions[0].correctAnswer)
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
      if($(this).val()==questions[1].correctAnswer)
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
      if($(this).val()==questions[2].correctAnswer)
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
      if($(this).val()==questions[3].correctAnswer)
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
      if($(this).val()==questions[4].correctAnswer)
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
      if($(this).val()==questions[5].correctAnswer)
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
      if($(this).val()==questions[6].correctAnswer)
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
      if($(this).val()==questions[7].correctAnswer)
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
  this.result();
  },

  result: function()
  {
    // Clearing and resetting the timer
    clearInterval(timer);
    // Removing the set of matched elements from the DOM so that they can be replaced with new content
    $('#subwrapper h2').remove();
    // New message to display on the screen after the done button has been pressed (see above)
    $('#subwrapper').html("<h2>All done!</h2>");
    // Shows the total number of correct answers
    $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
    // Shows the total number of incorrect answers
    $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    // How many questiosn where there? If if it wasn't correct or incorrect, then it must not have been answered
    $('#subwrapper').append("<h3>Unanswered: " + (questions.length-(this.incorrect+this.correct))+ "</h3>");
  }
}
