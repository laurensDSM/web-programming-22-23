console.log("oef1")

let antwoord= "n";

do {
    antwoord = prompt("om  verder te doen vul  n of nee in")
   // let getal = Math.round(Math.random() * 50 + 50)
   // let getal = Math.round(Math.random() *10) + 2
   let getal = Math.floor(Math.random() * 10) + 1;

    console.log(getal)
} while (antwoord == "n" || antwoord =="nee");