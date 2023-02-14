//function expressions
let sumFunction = function(a,b){
   return a + b;
}

console.log(sumFunction(5,5))


//arrow function

let som = (a , b) =>{
   let getal = a + b;
    return getal
} 
let min = (a, b) => a - b ;

console.log(som(10,10))
console.log(min(110,10))


let double = n => n * 2
alert(double(10))