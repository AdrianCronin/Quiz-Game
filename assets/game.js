// start button hides starting page section and shows quiz section
var startButton = document.querySelector("#startButton");

startButton.addEventListener("click", function(event) {
    console.log("start button worked");
    startPage.setAttribute("style", "display: none;");
    questionPage.setAttribute("style", "display: block;");
});


// test area
var button1 = document.querySelector("#testButton1");
var testDivEl = document.querySelector("#testDiv");

button1.addEventListener("click", function(event){
    console.log("Button 1 worked");
    testDivEl.setAttribute("style", "display: none;");
});
