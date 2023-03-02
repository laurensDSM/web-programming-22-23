/*

2.Maak een array aan die een todo lijst voorstelt

A/ Voorzie een functie om items aan de lijst toe te voegen

B/ Voorzie een functie om het eerste element van de lijst te halen

C/ voorzie een functie om een prioriteit aan het todo lijstje toe te voegen (dit wil zeggen dat dit het eerste element van de todo lijst wordt

*/

const ToDoList = [];

function toevoegen(taak){
    ToDoList.push(taak)
}

function geefTaak(){
   return ToDoList.shift()
}

function prio(taak){
    ToDoList.unshift(taak)
    let index = ToDoList.indexOf(taak)
    if (index > -1){
        ToDoList.splice(index,1)
    }
}

function display(){
    ToDoList.forEach(value => {
         document.write(value)
         document.write("<br>")
        })
}

display(ToDoList)

toevoegen("afwassen")
toevoegen("kuisen")
toevoegen("vensters kuisen")
toevoegen("stofzuigen")
console.log(ToDoList)
console.log(geefTaak())
console.log(ToDoList)
prio("eten halen")
prio("kuisen")

console.log(ToDoList)

display(ToDoList)
