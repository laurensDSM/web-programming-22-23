for (let index = 0; index <= 10; index++) {

    // getal tussen 1 en 10
  // let getal = Math.round(Math.random()* 5 ) + 5
 //  let getal2 = Math.floor(Math.random() * 5) + 5

 //getal tussen 7 en 10
   // let getal = Math.round(Math.random() * 7) + 3;
    //let getal2 = Math.floor(Math.random() * 7) + 3;

    let getal = getRandomArbitrary(7,10)
    let getal2 = getRandomArbitrary(7,10)

   // console.log(getal);
  //  console.log(getal2)

  let getal1 = Math.round(Math.random()* 1)+ 3
//console.log(getal1)
//45 en 60
}


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

console.log(getRandomArbitrary(1,10))
