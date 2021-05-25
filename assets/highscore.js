var scoreListEl = document.getElementById("scoreList");
var sortList = JSON.parse(localStorage.getItem("highScore")); // gets the list of initials and high scores out of storage

// function will sort the scores from highest to lowest
function sortScores () {
    var length = sortList.length; 
    var points;
    // this loop will point at an index then compare the score value to every other index
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
    scoreListEl.innerHTML = ""; //delete existing rendered highscore list
    // for loop creates li's 
    for (i=0; i < sortList.length; i++) {
        var inits = sortList[i].initials.toUpperCase();
        var points = sortList[i].score;
        var li = document.createElement("li");
        li.textContent = (i+1) + ") " + inits + "  " + points;
        scoreListEl.appendChild(li);
    };
};

sortScores();
renderScores();
