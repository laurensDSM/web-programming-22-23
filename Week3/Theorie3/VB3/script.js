let mijnArray = new Array()
let array = []
let leeftijd = [10,20,30,50]
let indexArray = [0 ,1, 2 , 3]



//voorbeeld 
let namen = []
namen[0] = "Tom"
namen[1] = "Ernie"
namen[2] = "Laurens"
namen[2] = "Tim"

console.log("Aantal namen in de array: " + namen.length  )
console.log("De eerste naam is: " + namen[0])
console.log("De tweede naam is: " + namen[1])
console.log("De derde naam is: " + namen[2])
console.log("Alle namen : " + namen)
console.log(namen)


namen.push("Staf")
namen[0] = "Mike"

console.log(namen)
console.warn(namen)

console.table(namen)


for(naam of namen){
    console.log(naam)
}