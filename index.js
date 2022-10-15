//initilizing some value
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;


//finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttempts =cardBody.querySelector(".remainingAttempts");


form.addEventListener("submit",function(event){
    event.preventDefault();
    
    attempts++;
    if(attempts == 5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if(attempts < 6){
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML= `Remaining Attempts: ${totalAttempts-attempts}`;
    }
    guessingNumber.value = "";
})

function checkResult(guessingNumber){
    const randomNumber = getRandomNumber(5);
    if(guessingNumber == randomNumber){

        resultText.innerHTML =`you have won`;
        totalWons++;
    }
    else{

        resultText.innerHTML =`you have lost. random number was: ${randomNumber} `;
        totalLosts++;
    }
    lostWonMessage.innerHTML =`Won: ${totalWons}, Lost: ${totalLosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit){

    return Math.floor(Math.random() * limit) + 1;
}

//slide show starts here 

const slideshowElements=document.querySelectorAll(".slideshow-element");
console.log(slideshowElements);
let countElement = 1;
setInterval(() => { 
    countElement ++;
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");
    if(countElement > slideshowElements.length){
        slideshowElements[0].classList.add("current");
        countElement = 1;

    }
    else{

        currentElement.nextElementSibling.classList.add("current");
    }

    
    
}, 2000); 

//slide show ends here