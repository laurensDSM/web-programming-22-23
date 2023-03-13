document.addEventListener("DOMContentLoaded",event => {

    const button = document.querySelector("input")
    button.addEventListener("click",event=>{
        console.log("click")

        const li = document.createElement("li")
        const text = document.createTextNode("hallo tom")
        li.appendChild(text)
        const ul = document.querySelector("ul")
        ul.appendChild(li)
    })
})