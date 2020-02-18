// const Characters = document.getElementById('length');
// const generateEl = document.getElementById('generate');
// const wantLower = document.getElementById('lowercase');
// const wantUpper = document.getElementById('lowercase');
// const wantNumbers = document.getElementById('lowercase');
// const wantSymbols = document.getElementById('lowercase');


var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", ",", "."];

var all = []

// generateEl.addEventListener('click', () => {
   
// }) 

var Characters = prompt("In Numbers, how many Characters do you want for your password?")
var wantLower = confirm("Do you want lowerCase letters in your password?")
var wantUpper = confirm("Do you want upperCase Letters in your password?");
var wantNumbers = confirm("Do you want numbers in your password?");
var wantSymbols = confirm("Do you want symbols Letters in your password?");

if (wantLower === true) {
    var all = all.concat(lowerCase); 
}
if (wantUpper === true) {
    var all = all.concat(upperCase);
}
if (wantNumbers === true) {
    var all = all.concat(numbers);
}
if (wantSymbols === true) {
    var all = all.concat(symbols);
}

for (var i = 0; i < Characters; i++) {
    document.write(all[Math.floor(Math.random() * all.length)])
}