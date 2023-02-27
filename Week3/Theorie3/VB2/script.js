function SayHiBye(voornaam, achternaam){

    function getFullName(){
        return voornaam + " " + achternaam
    }

    alert("hello, " + getFullName() )
}

SayHiBye("laurens", "smedt")


function makeCounter(){
    let count = 0;
    return function(){
        return count++
    }

}

let counter= makeCounter()
alert(counter())
alert(counter())


let zin = "hallo hoe gaat het met u "
function say(name){
    alert(`${zin}, ${name}`)
}
say("laurens")


let getal = 7;
function  uitkomst(){
    getal = getal + 4;
    console.log(getal)
}
uitkomst()