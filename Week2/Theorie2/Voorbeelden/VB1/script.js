//function declartion --> voorkeur
//hosting zal springen naar de functie
let randomgetal = GooiDobbelsteen()
console.log(randomgetal)

function GooiDobbelsteen(){ 
const getal = Math.round(Math.random()*5)+1
return getal;
}


// function expression eerst aanmaken daarna aanroepen
let dobbelsteen = function (){ 
    const getal = Math.round(Math.random()*5)+1
    return getal;
    }

const randomGetal = dobbelsteen();
console.log(randomGetal)
    


function ask(isHappy, log){
    if (isHappy) {
        log("isHappy")
    }else {
        log("Is niet blij")
    }
}
ask(true,LogToAlert);

function LogToAlert(text){
    alert(text)
}
function LogToConsole(text){
    console.log(text)
}


//arow functie
let som = (a,b) => a + b;
alert(som(4,10))

let btw = (getal) => getal * 1.21 ;

alert(btw(10))