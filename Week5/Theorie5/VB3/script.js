document.addEventListener("DOMContentLoaded",(event)=>{
    console.log("DOM is geladen")
    const btnElement = document.getElementById("button")
    btnElement.addEventListener("click",(event)=>{
        const text = document.getElementById("mytext")
        console.log(text.value)
        if(text.value == ""){
            console.log("type iets")
            text.value="type nog eens iets"

        }
    })





});