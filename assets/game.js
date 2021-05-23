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
var timerTextEl = document.getElementById("timerText");

// TODO: create a function that stores the user input and compares it to the current correct answer
var currentCorrectAns = ""; // store the current questions correct answer
var userSelectedAns = ""; // store the users selected answer

// store users answer on button press
answerAEl.addEventListener("click", function() {
    userSelectedAns = 'a';
    answerQuestion(userSelectedAns, currentCorrectAns);
    console.log(userSelectedAns);
});
answerBEl.addEventListener("click", function() {
    userSelectedAns = 'b';
    answerQuestion(userSelectedAns, currentCorrectAns);
    console.log(userSelectedAns);
});
answerCEl.addEventListener("click", function() {
    userSelectedAns = 'c';
    answerQuestion(userSelectedAns, currentCorrectAns);
    console.log(userSelectedAns);
});
answerDEl.addEventListener("click", function() {
    userSelectedAns = 'd';
    answerQuestion(userSelectedAns, currentCorrectAns);
    console.log(userSelectedAns);
});

// function will compare the selected answer to the correct answer
function answerQuestion (user, answer) {

    if (user === answer){
        console.log("YOU DID IT CORRECTLY");
        // TODO: add points
        score += secondsLeft;
        questionIndex++;
        renderCurrentQuestion();
        // TODO: move on to next question
    } else {
        console.log("YOU FAILED MISERABLY");
        // TODO: remove time
        // TODO: move on to next question
    }

};

// this function takes the current question data from the quiz questions array and displays it on the page
function renderCurrentQuestion() {
    // TODO: add check on quiz index, endgame if at max index
    currentCorrectAns = quizQuestions[questionIndex].correct;
    questionTextEl.textContent = quizQuestions[questionIndex].question; // injects the question into the h1 element
    answerAEl.textContent = quizQuestions[questionIndex].a; // injects the answers into the buttons
    answerBEl.textContent = quizQuestions[questionIndex].b;
    answerCEl.textContent = quizQuestions[questionIndex].c;
    answerDEl.textContent = quizQuestions[questionIndex].d;
};

// this function counts the timer down and displays it in the top
function startTimer () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        console.log("Current score is " + score);
        timerTextEl.textContent = "Timer: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // run end game function
        }
    }, 1000);
};

// this function starts the game, hides the starting page and calls the timer function
function startGame() {
    startPage.style.display = "none";
    questionPage.style.display = "block";
    secondsLeft = 100;
    questionIndex = 0;
    renderCurrentQuestion();
    startTimer();
}

// start button runs the startGame fuction when clicked
startButtonEl.addEventListener("click", function() {
    startGame();
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