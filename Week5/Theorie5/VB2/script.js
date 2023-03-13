
document.addEventListener("DOMContentLoaded",event=>{
    console.log("DOM ready");

    const el = document.getElementById("test")    
    console.log(el)
    el.addEventListener("click",(event)=>{
        console.log("click",event)
        el.style.color = "red";
    })

    document.addEventListener("mousemove",(event) =>{
      //  console.log(event)

    })

    document.addEventListener("dblclick",(event) =>{
        // console.log(event)
  
      })
  



});


