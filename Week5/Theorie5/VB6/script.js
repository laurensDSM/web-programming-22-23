//document.createElement() h1 h2 p 
//document.createTextNode() text zelf
// document.appendChild() toevoegen aan bestaande elemeten 

document.addEventListener("DOMContentLoaded",(event) => {
    const div = document.createElement('div')
    div.appendChild(document.createTextNode('Hello'))
    document.body.appendChild(div)

    let node = document.createElement('li')
    let textnode = document.createTextNode('Water')
    node.appendChild(textnode);
    document.getElementById('mijnList').appendChild(node);
})

// fout in de code