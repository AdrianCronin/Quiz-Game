var scoreTest = [
    {
        initials: "abc",
        score: 69
    },{
        initials: "tlc",
        score: 43 
    },{
        initials: "MP",
        score: 420
    },{
        initials: "bLc",
        score: 33
    },{
        initials: "JC",
        score: 123
    }
];

// function will sort the scores from highest to lowest
function sortScores () {
    var length = scoreTest.length; 
    var top = scoreTest[0].score; 
    for (i=0; i < length; i++){
        if (scoreTest[i].score > top) {
            var x = scoreTest[i];
            scoreTest.splice(i, 1);
            scoreTest.unshift(x);
            top = scoreTest[0];
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

renderScores();
sortScores();
