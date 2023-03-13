document.addEventListener("DOMContentLoaded",event => {
    const drukknop = document.getElementById("button")
    console.log(drukknop)

    drukknop.addEventListener("click", ()=>{
        const h = document.getElementById("hoofd")
        console.log(h);
        h.style.color = "red";
        h.innerHTML = "Hey";

    })


    const title = document.querySelector("h1")
    console.log(title)

    const alleH = document.querySelectorAll("h1")
    console.log(alleH)
    alleH.forEach(element => {
        element.style.color = "green"
        element.addEventListener("mouseleave", event=>{
            element.style.color="blue"
        })

    });






});