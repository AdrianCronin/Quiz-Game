var scoreListEl = document.getElementById("scoreList");
var sortList = JSON.parse(localStorage.getItem("highScore")); // gets the list of initials and high scores out of storage
var clearButtonEl = document.getElementById('clearButton');
var returnButtonEl = document.getElementById('returnButton');

// function will sort the scores from highest to lowest
function sortScores () {
    var length = sortList.length; 
    var points;
    // this nested loop will point at an index from storage then compare the score value to every other index's score value
    for (a=0; a < length; a++) {
        points = sortList[a].score; 
        for (i = (a + 1); i < length; i++){
            // this loops tests if any successive indexes are greater than the targeted index and moves it to that index if true
            if (sortList[i].score > points) {
                var x = sortList[i]; // stores the index value
                sortList.splice(i, 1); // removes the index from array
                sortList.splice(a, 0, x); // places stored index value into the `a` index 
                points = sortList[a].score; // sets the `points` variable to the replacement value
            };
        };
    };
};

// creates li elements for the initials and scores
function renderScores() {
    scoreListEl.innerHTML = ""; //clear existing rendered highscore list
    // for loop creates li's and spans
    for (i=0; i < sortList.length; i++) {
        var inits = (i+1) + ") " + sortList[i].initials.toUpperCase(); // puts the rank number before the initials
        var points = sortList[i].score;
        var li = document.createElement("li");
        var spanOne = document.createElement("span");
        spanOne.textContent = inits; 
        var spanTwo = document.createElement("span");
        spanTwo.textContent = points;
        // creating and appending spans so that I can justify: space-between the initials and score
        li.appendChild(spanOne);
        li.appendChild(spanTwo);
        scoreListEl.appendChild(li);
    };
};

// button clears the scores from local storage and from the array and renders a blank list
clearButtonEl.addEventListener("click", function() {
    localStorage.clear();
    sortList = []; 
    renderScores();
});

// button takes user back to game page
returnButtonEl.addEventListener("click", function() {
    window.open("../index.html", "_self");
});

// sorts and renders the scores when the page loads
sortScores();
renderScores();