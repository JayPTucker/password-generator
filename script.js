// CHARACTER SOURCES/DOMS START:

const results = document.querySelector("#result");
const wantUpper = [65,90];
const wantLower = [97,122];
const wantNumber = [48,57];
const wantSymbol = [33,47];

// CHARACTER SOURCES/DOMS END

// CHARACTER AMOUNT SLIDER START:

document.getElementById("lengthAmount").innerHTML = "Length: 68";

document.getElementById("length").oninput = function(){

    if(document.getElementById("length").value > 0){
        document.getElementById("lengthAmount").innerHTML = "Length: " + document.getElementById("length").value;
    }
    else{
        document.getElementById("lengthAmount").innerHTML = "Length: 1";
    }
}

// CHARACTER AMOUNT SLIDER END

// PASSWORD GENERATION START:

document.querySelector("#generate-btn").addEventListener('click', ()=> {
    // Linking the Variables to the IDs in the HTML of the Char Amount and Checkmarks
    const length = document.querySelector("#length").value;
    const upper = document.querySelector("#uppercase").checked;
    const lower = document.querySelector("#lowercase").checked;
    const numbers = document.querySelector("#numbers").checked;
    const symbols = document.querySelector("#symbols").checked;

    // Two blank arrays for insertion from the Generator below
    const randSelector = [];
    const password = [];

    // Checkbox Determination
    if(upper === true) {
        for(let i=wantUpper[0]; i<= wantUpper[1]; i++) {
            randSelector.push(i);
        }
    }
    if(lower===true){
        for(let i=wantLower[0]; i<= wantLower[1]; i++){
            randSelector.push(i);
        }
    }
    if(numbers===true){
        for(let i=wantNumber[0]; i<= wantNumber[1]; i++){
            randSelector.push(i);
        }
    }
    if(symbols===true){
        for(let i=wantSymbol[0]; i<= wantSymbol[1]; i++){
            randSelector.push(i);
        }
    }

    // Generator
    for(let i = 0; i< length; i++){
        password.push(String.fromCharCode(randSelector[Math.floor(Math.random()*randSelector.length)]))
    }

    results.value = password.join("");
})

// PASSWORD GENERATION END

// COPY FUNCTION START:

function copyPassword(){

    document.getElementById("result").select();

    document.execCommand("Copy");

    alert("Your Password has been Copied to your Clipboard!  Now just Paste it!");

}

// COPY FUNCTION END