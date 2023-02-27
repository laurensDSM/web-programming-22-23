//every 

let everyNummers = [0,1,2,3,4,5,6,7,8,9,10]

/*
let everyResultaat = everyNummers.every(function(item, index, array){
    return (item > -10)
    //als elk element groter is dan -10 dan geeft hij true terug
})
*/
//verkorte schrijfwijze
let everyResultaat = everyNummers.every(item => item > -2)
console.log(everyResultaat)


//some -----------------------------------------------------------------------------
let someNummers = [0,1,2,3,4,5,6,7,8,9,10]
let someResultaat = someNummers.some(item => item > 9)
// is er een getal groter dan 9 indien ja return true else false
console.log(someResultaat)

//Filter--------------------------------------------------------------------
let filterNummers = [0,1,2,3,4,5,6,7,8,9,10]
let filterResultaat = filterNummers.filter(item => item > 2)
console.log(filterResultaat)
//alle getallen die groter zijn dan 2 worden in een nieuwe array gezet


//Map ----------------------------------------------------
let mapNummers = [0,1,2,3,4,5,6,7,8,9,10]
let mapResultaat = mapNummers.map(item => item * 2)
console.log(mapResultaat)

//for

let nummers = [0,1,2,3,4,5,6,7,8,9,10]
nummers.forEach(function(item,index,array){
    console.log("item" + item)
    console.log("index" + index)
    console.log("array" + array)
    
})

nummers.forEach(element => {
    console.log(element)
});

for(getal of nummers){
    console.log(getal)
}

for (let index = 0; index < nummers.length; index++) {
console.log("for loop: " + nummers[index])    
}