const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const button = document.querySelector("button");
const lenghtInput = document.querySelector("#lenght");
const p1 = document.querySelector("#p-1");
const p2 = document.querySelector("#p-2");

var settings = {
    useSymbols: true,
    useNumbers: true,
    n: 0
};


// Tracks the changes in the settings
lenghtInput.addEventListener("change", function(){
   settings.n = lenghtInput.value;
});

function boolSymbols(){
    settings.useSymbols = !settings.useSymbols
}

function boolNumbers(){
    settings.useNumbers = !settings.useNumbers
}

// Generates passwords
button.addEventListener('click', function() {
    if(settings.n === 0 || settings.n ===""){
        document.querySelector("#mandatory-input").textContent = "*";
    }else if(settings.n < 6){
        lenghtInput.value = 6;
        settings.n = 6;
        document.querySelector("#mandatory-input").textContent = "*";
    }else{
        document.querySelector("#mandatory-input").textContent = "";
        let password1 = "";
        let password2 = "";
        for(let i=0; i<settings.n;i++) password1 += characters[getRandom()];
        for(let i=0; i<settings.n;i++) password2 += characters[getRandom()];
        output(password1, password2);
    }
});

// Generates characters for passwords
function getRandom(){
    if(settings.useSymbols === true && settings.useNumbers === true){
        let rand = Math.floor(Math.random() * characters.length);
        return rand;
    }else if(settings.useSymbols === false && settings.useNumbers === true){
        let rand = Math.floor(Math.random() * 62);
        return rand;
    }else if(settings.useSymbols === true && settings.useNumbers === false){
        let rand = Math.floor(Math.random() * characters.length);
        let isNum;
        do{
            if(rand >= 52 && rand <=61){
                isNum = true;
                rand = Math.floor(Math.random() * characters.length);
            }else{
                isNum = false;
            }
        }while(isNum === true)
        return rand;
    }else if(settings.useSymbols === false && settings.useNumbers === false){
        let rand = Math.floor(Math.random() * 52);
        return rand;
    }
}

// Renders the generated password
function output(password1, password2){
    p1.textContent = password1;
    p2.textContent = password2;
}