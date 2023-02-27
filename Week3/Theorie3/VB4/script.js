let ToDoList = []

function toevoegen(taak){
    ToDoList.push(taak)
}

function geefTaak(){
    return ToDoList.shift()
}

function Prio(taak){
    ToDoList.unshift(taak)
}

toevoegen("kuisen")
toevoegen("afwassen")
console.log(ToDoList)

console.log(geefTaak())
console.log(ToDoList)
toevoegen("kippenhok kuisen")
Prio("auto wassen")
console.log(ToDoList)
