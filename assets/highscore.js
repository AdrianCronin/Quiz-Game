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

function sortScores () {


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
