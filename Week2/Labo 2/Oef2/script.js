// Schrijf een functie die 2 argumenten meekrijgt en het kleinste getal teruggeeft. (vb. console.log(min(0,10)) //output 0


function min(getal1, getal2){

    if (getal1 > getal2) {
        return getal2
    }else return getal1
}


console.log(min(80,10))