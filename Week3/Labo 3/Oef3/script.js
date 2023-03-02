/*
Schrijf een script om het kleinste en tweede kleinste element van een 
array terug te geven. (test zeker dat de array meer dan 2 elementen bevat).
*/

const getallen = [5,8,200,100,1,9]
//-1 indien b groter dan a
// 2 indien a groter dan b
// 0 indien a en b gelijk
function numberSort(a,b){
    if (b>a) {
        return -1
    }else if (a<b){
        return 1
    }
    else if (a == b){
        return 0
    }

}

function numberSort2(a,b){
    return a - b;
}

function deTweeKleinsteNummers(arr){
let sort = arr.sort((a,b) => a - b )
    return sort.slice(0,2)
}

document.write(deTweeKleinsteNummers(getallen))