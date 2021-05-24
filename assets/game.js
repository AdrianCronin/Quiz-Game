var quizQuestions = [
    {
        question: "What hand does Roger Federer play with?",
        a: "Left",
        b: "Right",
        c: "Ambidextrous",
        d: "Neither",
        correct: "b",
    }, {
        question: "Which Grand Slam has Roger Federer had the most success at?",
        a:"French Open",
        b:"US Open",
        c:"Wimbledon",
        d:"Australian Open",
        correct:"c",
    }, {
        question: "What type of sword is Roger Federer's infamous 'Sneak Attack by Roger' named after?",
        a: "Bastard Sword",
        b: "Katana",
        c: "Gladius",
        d: "Saber",
        correct: "d",
    }, {
        question: "Which Olympics did Roger Federer win a Gold Medal?",
        a: "Beijing 2008",
        b: "London 2012",
        c: "Rio 2016",
        d: "Tokyo 2020",
        correct: "a",
    }
];

var secondsLeft = 100; // intial timer value
var score = 0;
var questionIndex = 0; // will use this variable to point to array indexes
var questionContainerEl = document.getElementById("questionContainer");
var questionTextEl = document.getElementById("questionText");
var answerAEl = document.getElementById("answerA");
var answerBEl = document.getElementById("answerB");
var answerCEl = document.getElementById("answerC"); 
var answerDEl = document.getElementById("answerD");
var startButtonEl = document.getElementById("startButton");
var submitFormEl = document.getElementById("submitForm");
var timerTextEl = document.getElementById("timerText");
var endScoreEl = document.getElementById("endScore");
var scoreInitialsEl = document.getElementById("scoreInitials");
var currentCorrectAns = ""; // stores the current questions correct answer
var userSelectedAns = ""; // stores the users selected answer
var timerInterval; // stores the interval
var userInitials;  // Stores user's initials input for their score


// Runs when submit button or enter is pressed
submitFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    userInitials = scoreInitialsEl.value.trim();
    console.log(userInitials);
    window.open("/highscore.html", "_blank");
    // save initials to object?
    // TODO: add check for blank strings
    // save score to object?
    // got to highscores page
});

//create `endGame` function
    // clears timer
    // hides the quiz page
    // shows the game over screen
    // shows final score
    // takes user input and saves to highscore page
function endGame (){
    clearInterval(timerInterval);
    submitPage.style.display = "block";
    questionPage.style.display = "none";
    secondsLeft = 0;
    timerTextEl.textContent = "Timer: " + secondsLeft;
    endScoreEl.textContent = "Your Score: " + score;
};

// function will compare the selected answer to the correct answer
function answerQuestion (user, answer) {
    // adds points to score if correct, removes time left if incorrect.
    if (user === answer){
        score += secondsLeft;
    } else {
        secondsLeft -= 15;
    }
    questionIndex++; // moves pointer to next question
    // if the pointer moves past the last question go to end game screen otherwise go to next question
    if (questionIndex === quizQuestions.length) {
        endGame();
    } else {
        renderCurrentQuestion();
    }
};

// this function takes the current question data from the quiz questions array and displays it on the page
function renderCurrentQuestion() {
    currentCorrectAns = quizQuestions[questionIndex].correct;
    questionTextEl.textContent = quizQuestions[questionIndex].question; // injects the question into the h1 element
    answerAEl.textContent = quizQuestions[questionIndex].a; // injects the answers into the buttons
    answerBEl.textContent = quizQuestions[questionIndex].b;
    answerCEl.textContent = quizQuestions[questionIndex].c;
    answerDEl.textContent = quizQuestions[questionIndex].d;
};

// this function counts the timer down and displays it in the top
function startTimer () {
    timerInterval = setInterval(function() {
        secondsLeft--;
        console.log("Current score is " + score); //delete
        timerTextEl.textContent = "Timer: " + secondsLeft;
        if (secondsLeft <= 0) {
            endGame();
        };
    }, 1000);
};

// this function starts the game, hides the starting page and calls the timer function
function startGame() {
    startPage.style.display = "none";
    questionPage.style.display = "block";
    secondsLeft = 100;
    questionIndex = 0;
    startTimer();
    renderCurrentQuestion();
};

// start button runs the startGame fuction when clicked
startButtonEl.addEventListener("click", function() {
    startGame();
});
// store users answer on button press and runs the answerQuestion function passing the user selected answer and the correct answer from the array as arguments
answerAEl.addEventListener("click", function() {
    userSelectedAns = 'a';
    answerQuestion(userSelectedAns, currentCorrectAns);
});
answerBEl.addEventListener("click", function() {
    userSelectedAns = 'b';
    answerQuestion(userSelectedAns, currentCorrectAns);
});
answerCEl.addEventListener("click", function() {
    userSelectedAns = 'c';
    answerQuestion(userSelectedAns, currentCorrectAns);
});
answerDEl.addEventListener("click", function() {
    userSelectedAns = 'd';
    answerQuestion(userSelectedAns, currentCorrectAns);
});


// declare variables and arrays of quiz questions
// declare a `questionIndex` to point to the current question

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