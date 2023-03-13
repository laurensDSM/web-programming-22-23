document.addEventListener("DOMContentLoaded",event => {
    const a = document.querySelector("a")
    console.log(a)
    a.addEventListener("click",event =>{
        const div = document.querySelector("div")
        div.classList.add("toRed")
    })


});