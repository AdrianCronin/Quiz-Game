var startButton = document.querySelector("#startButton");

// start button hides starting page section and shows quiz section
startButton.addEventListener("click", function(event) {
    console.log("start button worked");
    startPage.style.display = "none";
    // startPage.setAttribute("style", "display: none;");
    questionPage.setAttribute("style", "display: block;");
});

// 


// test area
var button1 = document.querySelector("#testButton1");
var testDivEl = document.querySelector("#testDiv");

button1.addEventListener("click", function(event){
    console.log("Button 1 worked");
    if (testDivEl.style.display == "none") {
        testDivEl.style.display = "flex";
    } else {
        testDivEl.style.display = "none";
    }
});


// Create `startGame` function
    // hide the start screen
    // show the first question
    // start the timer counting down