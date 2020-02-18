// DOM ELEMENTS
const Characters = document.getElementById('length');
const generateEl = document.getElementById('generate');
const wantLower = document.getElementById('lowercase');
const wantUpper = document.getElementById('uppercase');
const wantNumbers = document.getElementById('numbers');
const wantSymbols = document.getElementById('symbols');
const password = document.getElementById('passwordresult');

// GENERATOR ITEMS
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", ",", "."];


// THE GENERATOR
generateEl.addEventListener('click', () => {
    var all = []

    if (wantLower.checked) {
        var all = all.concat(lowerCase)
    }
    if (wantUpper.checked) {
        var all = all.concat(upperCase);
    }
    if (wantNumbers.checked) {
        var all = all.concat(numbers);
    }
    if (wantSymbols.checked) {
        var all = all.concat(symbols);
    }

    for (var i = 0; i < Characters.value; i++) {
        document.write(all[Math.floor(Math.random() * all.length)]);
    }
}) 




