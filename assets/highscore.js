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

// function will sort the scores from highest to lowest
function sortScores () {
    var length = scoreTest.length; 
    var points;
    for (a=0; a < length; a++) {
        points = scoreTest[a].score; 
        for (i=(a+1); i < length; i++){
            if (scoreTest[i].score > points) {
                var x = scoreTest[i];
                scoreTest.splice(i, 1);
                scoreTest.splice(a, 0, x);
                points = scoreTest[a].score;
            };
        };
    };
};

var scoreListEl = document.getElementById("scoreList");
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
console.log(scoreTest);
