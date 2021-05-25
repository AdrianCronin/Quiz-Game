var scoreTest = [
    {
        initials: "abc",
        score: 4
    },{
        initials: "tlc",
        score: 2 
    },{
        initials: "MP",
        score: 1
    },{
        initials: "bLc",
        score: 3
    },{
        initials: "JC",
        score: 5
    }
];

var scoreListEl = document.getElementById("scoreList");

// function will sort the scores from highest to lowest
function sortScores () {
    var length = scoreTest.length; 
    var points;
    // this loop will point at an index then compare the score value to every other index
    for (a=0; a < length; a++) {
        points = scoreTest[a].score; 
        for (i = (a + 1); i < length; i++){
            // this loops tests if any following indexes are greater than the targeted index and moves it to that index if true
            if (scoreTest[i].score > points) {
                var x = scoreTest[i]; // stores the index value
                scoreTest.splice(i, 1); // removes the index from array
                scoreTest.splice(a, 0, x); // places stored index value into the `a` index 
                points = scoreTest[a].score; // sets the new variable to the new value
            };
        };
    };
};

// creates li elements for the initials and scores
function renderScores() {
    scoreListEl.innerHTML = ""; //delete existing highscore list
    // for loop creates lis 
    for (i=0; i < scoreTest.length; i++) {
        var inits = scoreTest[i].initials.toUpperCase();
        var points = scoreTest[i].score;
        var li = document.createElement("li");
        li.textContent = (i+1) + ") " + inits + "  " + points;
        scoreListEl.appendChild(li);
    };
};

sortScores();
renderScores();
