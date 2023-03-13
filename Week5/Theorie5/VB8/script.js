document.addEventListener("DOMContentLoaded",event => {
    const li = document.querySelectorAll("li")
    console.log(li)

    const ul = document.querySelector("ul")
    ul.removeChild(li[2])

})