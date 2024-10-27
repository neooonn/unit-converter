import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://quick-converter-be76b-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const dataBase = getDatabase(app)


console.log(dataBase)



let inputEl = document.querySelector(".input-el")
let convertBtn = document.querySelector(".convert-btn")


let lengthAnswer = document.querySelector(".length-answer")
let volumeAnswer = document.querySelector(".volume-answer")
let massAnswer = document.querySelector(".mass-answer")
let errorEl = document.querySelector("error-el")




function convert() {
    let inputValue = parseFloat(inputEl.value);
    if (!isNaN(inputValue)) {

        let feet = 3.28084;
        let gallon = 0.264172;
        let pounds = 2.20462;

        let meterToFoot = (inputValue * feet).toFixed(3);
        let footToMeter = (inputValue / feet).toFixed(3);
        lengthAnswer.textContent = `${inputValue} meters = ${meterToFoot} feet | ${inputValue} feet = ${footToMeter} meters`;

        let literToGallon = (inputValue * gallon).toFixed(3);
        let gallonToLiter = (inputValue / gallon).toFixed(3);
        volumeAnswer.textContent = `${inputValue} Liters = ${literToGallon} Gallons | ${inputValue} Gallons = ${gallonToLiter} Liters`;

        let kgToPound = (inputValue * pounds).toFixed(3);
        let poundToKg = (inputValue / pounds).toFixed(3);
        massAnswer.textContent = `${inputValue} Kilos = ${kgToPound} Pounds | ${inputValue} Pounds = ${poundToKg} Kilos`;

    } else {
        lengthAnswer.textContent = "";
        volumeAnswer.textContent = "";
        massAnswer.textContent = "";
    }
}
convertBtn.addEventListener("click", convert);
