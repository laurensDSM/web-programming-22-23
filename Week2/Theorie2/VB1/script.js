

// pre ES6
function gooiDobbelSteen(){
    const getal = Math.round(Math.random()*(6-1) + 1);
    return getal;
}

for (let index = 0; index < 10; index++) {
   //console.log(gooiDobbelSteen())    
}

//post ES6

const dobbelSteen = function(){
    return Math.round(Math.random()*(6-1)+1)
}

for (let index = 0; index < 10; index++) {
    //console.log(dobbelSteen())
    
}

// dobbelsteen die niet input krijgt hoeveel dobbellstenen er zijn 
function dobbelsteengooier(aantalDobbelstenen){
    return (Math.round(Math.random() * ((6*aantalDobbelstenen)-(1*aantalDobbelstenen)))) + (1*aantalDobbelstenen)
}

for (let index = 0; index < 11; index++) {
    console.log(dobbelsteengooier(2))
    
}


