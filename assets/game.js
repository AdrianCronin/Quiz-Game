var quizQuestions = [
    {
        question: "In what hand does Roger Federer hold a tennis racket?",
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
    }, {
        question: "How many languages does Roger Federer speak?",
        a: "One",
        b: "Two",
        c: "Three",
        d: "Four",
        correct: "d",
    }, {
        question: "How many of Roger Federer's children are twins?",
        a: "One",
        b: "Two",
        c: "Three",
        d: "Four",
        correct: "d",
    }, {
        question: "Which animal is commonly associated with Roger Federer?",
        a: "Goat",
        b: "Mamba",
        c: "Capybara",
        d: "Hawk",
        correct: "a",
    }
];

var secondsLeft = 0; // intial timer value
var score = 0; // initial score value
var questionIndex = 0; // will use this variable to point to the quizQuestion index
var buttonContainerEl = document.querySelector(".buttonContainer"); // listens for any button press on the quiz section
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
var currentCorrectAns = ""; // stores the targeted index question's correct answer
var userSelectedAns = ""; // stores the user's selected answer to compare against the correct answer
var timerInterval; // stores the interval
var userInitials; // stores user's input for the high score page

// function to save the score/initials into local storage
function storeScore() {
    var currentList = JSON.parse(localStorage.getItem("highScore")); // get current list out of localStorage with JSON and save to an array
    if (currentList == null) {
        currentList = []; // if there was nothing saved in storage convert `currentList` to an array instead of null
    };
    var savedScore = {initials: "", score: "",}; // creates an object to save the user inputs to
    savedScore.initials = userInitials; // saves user initials (from the submit function) to the object
    savedScore.score = score; // saves the user's final score to the object
    currentList.push(savedScore); // pushes the object onto the array from JSON
    localStorage.setItem("highScore", JSON.stringify(currentList)); // save the final array into storage with JSON
};

//  this function runs if time has run out or the last question has been answered
function endGame (){
    clearInterval(timerInterval); // clears timer here for situations when the game ends with time left
    submitPage.style.display = "block"; // shows the game over screen
    questionPage.style.display = "none"; // hides the quiz page
    secondsLeft = 0; // sets this to 0 in cases where time did not run out
    timerTextEl.textContent = "Timer: " + secondsLeft; // updates timer to show 0
    endScoreEl.textContent = "Your Score: " + score; // renders the final score to the page
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
        secondsLeft--; // decrement every second
        timerTextEl.textContent = "Timer: " + secondsLeft; // display updated seconds left to the page
        if (secondsLeft <= 0) {
            endGame(); // go to score submit page if time runs out or an incorrect answer makes the seconds left go below 0
        };
    }, 1000);
};

// this function starts the game, hides the starting, starts the timer, and shows the quiz page
function startGame() {
    startPage.style.display = "none";
    questionPage.style.display = "block";
    secondsLeft = 60;
    questionIndex = 0;
    startTimer();
    renderCurrentQuestion();
};

// Runs when submit button or enter is pressed
submitFormEl.addEventListener("submit", function sumbmitScore(event) {
    event.preventDefault(); // prevent page refresh
    userInitials = scoreInitialsEl.value.trim(); // remove any extra whitespace from the input
    if (userInitials === "") {
        alert("Please enter your initials to record your score"); // alerts the user if they enter nothing and reruns
        sumbmitScore(); 
    } else if (userInitials.length > 3) {
        userInitials = userInitials.slice(0, 3); // if the user enters more than 3 initials use only first 3 characters submitted
        storeScore(); 
        window.open("/highscore.html", "_self"); // opens highscore.html on form submit in the current window, this prevents user from multiple submissions
    } else {
        storeScore();
        window.open("/highscore.html", "_self"); 
    };
});

// start button runs the startGame fuction when clicked
startButtonEl.addEventListener("click", function() {
    startGame();
});

// when user presses an answer button adds points if correct, removes time if incorrect, moves to next question in both cases
buttonContainerEl.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches(".button")) {
    var userSelectedAns = element.getAttribute("data-answer"); // stores the data-answer attribute of the pressed button

    if (userSelectedAns === currentCorrectAns) {
        score += secondsLeft;
    } else {
      secondsLeft -= 5;
    }
    questionIndex++; // moves pointer to next question

    // if the pointer moves past the last question go to end game screen otherwise go to next question
    if (questionIndex === quizQuestions.length) {
        endGame();
    } else {
        renderCurrentQuestion(); // displays the next question to the page
    }
  };
});