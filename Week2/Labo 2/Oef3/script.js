/*
Oefening 3:
charAt  retourneert het karakter van de gespecifieerde positie.
length retourneert de lengte van een string

A/Maak een functie die het aantal klinkers van een bepaald woord telt

B/ Maak een functie die de eerste letter van een woord in een hoofdletter zet (toUpperCase())

*/

//A
let woord = prompt("Geef een woord in")
function telklinkers(){
    let count = 0
    for(let i=0; i<woord.length; i++){
        if( woord.charAt(i) == "a" || woord.charAt(i) == "e" || woord.charAt(i) == "i" || woord.charAt(i) == "o" || woord.charAt(i) == "u" )
        {
            count++
        }
    }
    return count
};

console.log(telklinkers(woord))






//B 
function hoofdletter(naam){
    let letter1 = naam.slice(0,1)
    letter1 = letter1.toUpperCase()
    let rest = naam.slice(1 , naam.length -1)
    let index = naam.length
    console.log(index)
    let laasteLetter = naam.slice(index -1,naam.length)
    laasteLetter = laasteLetter.toUpperCase()
    return letter1 + rest + laasteLetter

}

let hoofdletters = function(woord){
return woord.toUpperCase()
}
console.log(hoofdletter("laurens"))
console.log(hoofdletters("ma"))


