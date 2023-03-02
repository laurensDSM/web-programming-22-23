//Oefening 1 : Vermenigvuldig elk element van een array met een waarde.
//Gegeven een reeks getallen en een constante k, schrijf een functie die een nieuwe reeks teruggeeft waarin elk element het product is van het overeenkomstige element in de oorspronkelijke reeks en k.
//Example input: multiply([1, 2, 3, 4], 2)
//Example output: [2, 4, 6, 8]

function multiply(arr,value){
    return arr.map((number) => number * value);

}
let resultaat = multiply([1,2,3,4,5],2)
console.log(resultaat)

//Oefening 2 : Filter elementen eruit die niet aan een bepaald criteria voldoen
//Gegeven een array van strings, schrijf een functie die een nieuwe array retourneert die alleen de elementen bevat die een lengte hebben die groter is dan of gelijk is aan een bepaalde lengte.
//Example input: filterByLength(["apple", "banana", "kiwi", "orange"], 5)
//Example output: ["apple", "banana", "orange"]

function filterByLength(arr, value){
    return arr.filter((fruit) => fruit.length >= value)
}

let result2 = filterByLength(["apple", "banana", "kiwi", "orange"], 5);
console.log(result2)

//Oefening 3 : Combineer map() en filter()
//Schrijf, gegeven een reeks getallen, een functie die een nieuwe reeks teruggeeft die alleen de positieve elementen van de oorspronkelijke reeks bevat, waarbij elk positief element is vermenigvuldigd met een constante k.
//Example input: transformAndFilter([-3, 0, 2, 5, -1], 3)
//Example output: [6, 15]

function transformAndFilter(arr,value){
    return arr.filter((number) => number > 0 ).map((number) => number * value)
}

let resultaat3 = transformAndFilter([-3, 0, 2, 5, -1], 3)
console.log(resultaat3)
//Oefening 4 : Som van een reeks van getallen
//Schrijf, gegeven een reeks getallen, een functie die de som van alle getallen in de reeks teruggeeft.
//Example input: sum([1, 2, 3, 4, 5])
//Example output: 15

function sum(arr){
    return arr.reduce((counter,currentValue) => counter + currentValue,0)
}

let result4 = sum([1, 2, 3, 4, 5])
console.log(result4)

//Oefening 5 : Tel het aantal keer een element voorkomt in een array
//Gegeven een array van strings, schrijf een functie die een object retourneert waarbij elke sleutel een uniek element in de array is, en de waarde is het aantal keren dat dat element in de array voorkomt.
//Example input: countOccurrences(["apple", "banana", "apple", "kiwi", "banana", "banana"])
//Example output: { "apple": 2, "banana": 3, "kiwi": 1 }


//Oefening 6: Flattening an array of arrays
//Gegeven een array van arrays, schrijf een functie die een nieuwe array retourneert waarin alle elementen van de geneste arrays worden gecombineerd tot een enkele array.
//Example input: flatten([[1, 2], [3, 4, 5], [6]])
//Example output: [1, 2, 3, 4, 5, 6]