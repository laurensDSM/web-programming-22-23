document.addEventListener("DOMContentLoaded",(event) =>{

let node = document.body;
    if(node.hasChildNodes()){
        let nodes = node.childNodes;
        console.log(node)
        nodes.forEach((item, index) => {
            console.log(item)
            if(item.hasChildNodes()){
                item.childNodes.forEach((child,i)=>{
                    console.log("child" + child)
                })
            }
        })
    }
})
