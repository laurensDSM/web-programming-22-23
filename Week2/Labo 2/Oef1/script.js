
function print( action) {
		   const value = prompt("geef een woord in");            
		   action(value)
}

function printToAlertBox(zin){
    alert(zin)
}

function printToConsole(zin){
    console.log(zin)
}


print(printToConsole)
print(printToAlertBox);