//confirm build in function

function ask(question, yes, no){
    if(confirm(question)) yes()
    else no()
}

function showOk(){
    alert("you agreed")
}

function showCancel(){
    alert("you canceld ")
}

ask("Do you agree ? ", showOk, showCancel)

