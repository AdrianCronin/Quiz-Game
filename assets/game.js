


// test area
var button1 = document.querySelector("#testButton1");
var testDivEl = document.querySelector("#testDiv");

button1.addEventListener("click", function(event){
    console.log("Button 1 worked");
    testDivEl.setAttribute("style", "display: none;");
});
