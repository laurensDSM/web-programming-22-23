
function countBs(input){
    let counter = 0
for (let index = 0; index <= input.length; index++) {
    if(input.charAt(index) == "B"){
        counter ++;
    }
}
if(counter == 1){  
return ("Er is maar 1 B gevonden")
}
else
{
    return ("Er zijn maar " + counter + "  B's gevonden")

}
}

console.log(countBs("Bert gaat naar school in Brussel"))



//Deel 2
countChar

function countChar(input, inputletter){
    let counter = 0
    console.log(inputletter)
for (let index = 0; index <= input.length; index++) {
    if(input.charAt(index) == inputletter){
        counter ++;
    }
}
if(counter == 1){  
return ("Er is maar 1 " + " " + inputletter + "  gevonden")
}
else
{
    return ("Er zijn maar " + counter + " " + inputletter + "  gevonden")

}
}

console.log(countChar("hoe gaat het met jou? waarde test " , "a" ))