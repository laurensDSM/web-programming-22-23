let namen = ["tom", "laurens", "ernie"]

//testen van methoden

console.log(namen)
console.log(namen.length)

console.log(namen.reverse())
console.log(namen.sort())
console.log(namen.sort().reverse())
console.log(namen.pop()) //laatste element verwijderen
namen.push("Felix") //achteraan toevoegen
console.log(namen)
console.log(namen.shift()) // eerste element verwijderen
console.log(namen)
namen.push("Fleur")
namen.push("Michael")
console.log(namen)
namen.splice(0,3) //vanaf 0 tot en met 3de element wegdoen
console.log(namen)
namen.push("Fleur")
namen.push("Michael")
namen.push("Fleur")
console.log(namen)
namen.unshift("emilie") //element toevoegen vooraan
console.log(namen)
console.log(namen.indexOf("Fleur")) //plaats van fleur terug
console.log(namen.lastIndexOf("Fleur")) //laatste plaats waar fleur voorkomt

let getallen = [5,1,8,9,3]
let gevonden = namen.find(element => element == "Fleur")
console.log(gevonden)

if(namen.includes("Fleur")){
    console.log("Fleur zit in de array")
}
else{
    console.log("Fleur zit niet in de array")
}

