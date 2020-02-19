const results = document.querySelector("#result");
const UNInum = [48,57];
const UNIupper = [65,90];
const UNIlower = [97,122];
const UNIsym = [33,47];


document.getElementById("lengthAmount").innerHTML = "Length: 68";

document.getElementById("length").oninput = function(){

    if(document.getElementById("length").value > 0){
        document.getElementById("lengthAmount").innerHTML = "Length: " + document.getElementById("length").value;
    }
    else{
        document.getElementById("lengthAmount").innerHTML = "Length: 1";
    }
}

document.querySelector("#generate-btn").addEventListener('click', ()=> {
    const length = document.querySelector("#length").value;
    const upper = document.querySelector("#uppercase").checked;
    const lower = document.querySelector("#lowercase").checked;
    const numbers = document.querySelector("#numbers").checked;
    const symbols = document.querySelector("#symbols").checked;

    const randSelector = [];
    const password = [];

    if(upper === true) {
        for(let i=UNIupper[0]; i<= UNIupper[1]; i++) {
            randSelector.push(i);
        }
    }
    if(numbers===true){
        for(let i=UNInum[0]; i<= UNInum[1]; i++){
            randSelector.push(i);
        }
    }
    if(symbols===true){
        for(let i=UNIsym[0]; i<= UNIsym[1]; i++){
            randSelector.push(i);
        }
    }
    if(lower===true){
        for(let i=UNIlower[0]; i<= UNIlower[1]; i++){
            randSelector.push(i);
        }
    }
    
    for(let i = 0; i< length; i++){

    password.push(String.fromCharCode(randSelector[Math.floor(Math.random()*randSelector.length)]))
    }
        results.value = password.join("");

})

function copyPassword(){

    document.getElementById("result").select();

    document.execCommand("Copy");

    alert("Your Password has been Copied to your Clipboard!  Now just Paste it!");

}