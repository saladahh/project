let changeColour = document.querySelector(".change-colour");
let changeColor = document.querySelector(".change-color");
let optionOneButton = document.querySelector(".option-one");
let opening = document.querySelector(".story-opening");
let optionTwo = document.querySelector(".option-two-screen");
let optionTwoButton = document.querySelector(".option-two");
let optionTwoEnd = document.querySelector(".option-two-end");
let optionOneEnd = document.querySelector(".option-one-end");
let optionOnescreen = document.querySelector(".option-one-screen");
let changeText = document.querySelector(".change-text");
let title = document.querySelector(".title");
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/

optionOneButton.onclick = function() {
    opening.style.display = "none";
    optionOnescreen.style.display = "block";
    optionOneEnd.style.display = "block";
    optionOneButton.style.display = "none";
    optionTwoButton.style.display = "none";
    changeColour.style.display = "none";
    changeColor.style.display = "none";
    changeText.style.display = "none";


};



optionTwoButton.onclick = function() {
    optionTwoEnd.style.display = "block";
    optionTwo.style.display = "block";
    opening.style.display = "none";
    optionOneButton.style.display = "none";
    optionTwoButton.style.display = "none";
    changeColour.style.display = "none";
    changeColor.style.display = "none";
    changeText.style.display = "none";

};


changeColor.onclick = function() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "grey";
    document.body.style.color = "blue";
    return false;
};
changeColour.onclick = function() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "black";

    document.body.style.color = "Blue";
    return false;


};
changeText.onclick = function() {
    title.innerHTML = "Hike";
    
};