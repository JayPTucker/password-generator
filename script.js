// DOM ELEMENTS
const resultEl = document.getElementById('formGroupExampleInput');
const lengthEl = document.getElementById('characterAmountNumber');
const lowercaseEl = document.getElementById('customSwitch1');
const uppercaseEl = document.getElementById('customSwitch2');
const numbersEl = document.getElementById('customSwitch3');
const symbolsEl = document.getElementById('customSwitch4');
const generateEl = document.getElementById('generate-btn');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};



// Generator Functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '=!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

