var startButton = document.querySelector("#startButton");

// start button hides starting page section and shows quiz section
startButton.addEventListener("click", function(event) {
    console.log("start button worked");
    startPage.style.display = "none";
    // startPage.setAttribute("style", "display: none;");
    questionPage.setAttribute("style", "display: block;");
});


// declare variables and arrays of quiz questions
// declare a `questionIndex` to point to the current question

// create `endGame` function

// Create `startGame` function
    // call `startTimer`
    // hide the start screen
    // show the first question

// create a `startTimer` function
    // set starting `score`
    // start the timer counting down

// create `answerQuestion` function (listen from a parent element)
    // get the value associated with the clicked `button`
    // compare against correct answer for the current question
        // if correct...
            // add points
        // if incorrect...
            // remove time
            // kick out if time 0
    // continue to next question `renderCurrentQuestion()`

// create `renderCurrentQuestion` function
    // access the current question data from question[questionsIndex]