
let frnNumber = document.querySelector("#random1");
let scndNumber = document.querySelector("#random2");
let btn = document.getElementById("trygame");


let symbol = ["*","/","+","-"];
let rnNumber1;
let rnNumber2;
let rnSymbol;
var timer =60;

let firstRandomNumber = () =>{
    rnNumber1 =Math.floor( Math.random()*10 + 10);
    frnNumber.innerHTML = rnNumber1;
}

let secondRandomNumber = () =>{
    rnNumber2 =Math.floor( Math.random()*10);
    scndNumber.innerHTML = rnNumber2;
}

let getSymbol = () =>{
    let rn = symbol.join("");
    rnSymbol =rn[Math.floor( Math.random()* [symbol.length])];
    document.querySelector("#symbols").innerHTML = rnSymbol;
}


let getTimer = () =>{
    let clrtimer = setInterval(()=>{
        if(timer > 0){
            timer--;
            document.querySelector("#timer").innerHTML = `Second:${timer}`;
        }else{
            clearInterval(clrtimer)
            document.querySelector("#panel").textContent = '';
            document.querySelector("#panel").innerHTML = `<h3>Correct: <span>${crtsocre}</span> Inncorrect:<span>${incorrectscore}</span> Blank:<span>${blkscore}</span></h3>`;
            btn.style.display = "block";
        }
    },1000);
}


// correctScore code start
let crtsocre = 0;
let correctScore = () =>{
    crtsocre = crtsocre+1;
}

// correctScore code end

// incorrectScore code start
let incorrectscore = 0;
let incorrectScore = () =>{
    incorrectscore += 1;
}
// incorrectScore code end

// blankScore code start
var blkscore = 0;
let blankScore = () =>{
    blkscore = blkscore+1;
}
// blankScore code end


document.querySelector("button").addEventListener("click",function(){
    let answer = document.getElementById("getanswer").value;

    if(answer === ''){
        blankScore();
        document.querySelector("#blank").innerHTML = blkscore;
        getSymbol();
        firstRandomNumber();
        secondRandomNumber();
      
    }else{
        if((rnNumber1+rnNumber2) === eval(answer) || (rnNumber1-rnNumber2) === eval(answer) || (rnNumber1*rnNumber2) === eval(answer) || (rnNumber1/rnNumber2) === eval(answer)){
            correctScore()
            getSymbol();
            firstRandomNumber();
            secondRandomNumber();
            document.querySelector("#correct").innerHTML =crtsocre;
            document.querySelector("#getanswer").value = '';
        }else{
            incorrectScore();
            getSymbol();
            firstRandomNumber();
            secondRandomNumber();
            document.querySelector("#getanswer").value = '';
            document.querySelector("#incorrect").innerHTML = incorrectscore;

    
        }
    }
    
})

btn.addEventListener("click",function(){
    window.location.reload();
})
getTimer();
getSymbol();
firstRandomNumber();
secondRandomNumber();

