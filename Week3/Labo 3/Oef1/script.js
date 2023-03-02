/* 
1. Schrijf met behulp van een javascript functie een HTML pagina waarin je de voornaam van een klasgenoot moet typen en na bevestiging moet je zijn geboortejaar terugkrijgen. Maak gebruik van een array om te zoeken. 

Tip: maak 1 array waarin je namen van klasgenoten zet, en een tweede array waarin je geboortejaren inzet. (Ga van de veronderstelling uit dat de indexen van de 2 arrays overeenkomen.)


*/

const naam = prompt("Voer een naam in: ");
let namen = ["Tom" , "Jeroen", "Tim", "Klaas"]
let jaren = [2000, 1960, 1970, 2002]

let index = namen.indexOf(naam)
console.log("Het geboortejaar van " + naam + " is " + jaren[index])

// let index = namen.findIndex((value) => value.toUpperCase() == naam.toUpperCase())
