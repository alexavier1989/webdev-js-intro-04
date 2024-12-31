"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input")
const submissionBtn = document.getElementById("submission-btn");
const responseEl = document.getElementById("response");

let age;

function ageDisclainer(){
    let response = "";
    if (age >= 21) {
        response = "You can vote and purchase alcohol.";
    } else if (18 <= age && age < 21) {
        response = "You can vote, but you cannot purchase alcohol.";
    }  else {
        response = "You cannot vote and you cannot purchase alcohol.";
    }
    responseEl.innerText = response;
}

function errorDisclainer(){
    responseEl.innerText = "Please enter a valid age.";
    ageInputEl.value = "";
    ageInputEl.focus();
    return;
}

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);

    if (isNaN(age) || age < 1 || age > 110) {
        responseEl.classList.add('error-text');
        ageInputEl.classList.add('error-input');
        errorDisclainer();
    } else {
        responseEl.classList.remove('error-text');
        ageInputEl.classList.remove('error-input');
        ageDisclainer(age);
    }
}


submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});


function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
