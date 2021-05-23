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
console.log(quizQuestions[0].question); // testing 

var questionIndex = 0;
var questionContainerEl = document.getElementById("questionContainer");

// this function takes the current question data from the quiz questions array and displays it on the page
function renderCurrentQuestion() {
    // makes the question an h1 element
    var questionTextEl = document.getElementById("questionText");
    questionTextEl.textContent = quizQuestions[questionIndex].question;
    // TODO: make answer buttons?
    
};

renderCurrentQuestion();


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