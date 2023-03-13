/*

4. Maak een scripts waarin je 1000 keer twee willekeurige getallen genereert tussen 1 en 6 (de ogen van een dobbelsteen). De 1000 resultaten neem je op in een array. Je maakt ook een array van 11 elementen waarin je noteert hoeveel maal de computer het getal 2,3,4...12 heeft gegenereerd (met andere woorden een histogram). Deze laatste array print je op een HTML pagina. Maar hiervoor 2 functies.

*/
const getallen =[]
let getal = 0
let een = 0
let twee = 0
let drie = 0
let vier = 0
let vijf = 0
let zes = 0
for (let index = 0; index < 1000; index++) {
    getal = Math.round(Math.floor() * 6 + 1)

    if(getal == 1){
        een++;
    }else if(getal==2){
        twee++;
    }
    else if(getal==3){
        drie++;
    }
    else if(getal==4){
        vier++;
    }
    else if(getal==5){
        vijf++;
    }
    else if(getal==6){
        zes++
    }
    getallen.push(getal)

}
console.log(getallen)
console.log("1: " + een )
console.log("2: " + twee )
console.log("3: " + drie )
console.log("4: " + vier )
console.log("5: " + vijf )
console.log("6: " + zes )