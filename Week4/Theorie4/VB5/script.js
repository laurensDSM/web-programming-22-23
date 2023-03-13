const cat = {name: "pluisje", age : 5}
console.log("De kat " + cat.name + " is " + cat.age + " jaar oud." )

const info = '{"name":"John", "age":30, "car":null}' //DIT IS JSON FORMAAT
const obj = JSON.parse(info)
console.log(obj)
console.log(obj.name)




const json = '{"name":"John", "age":30, "car":null}'
const resultaat = JSON.stringify(json)
console.log(resultaat)




/* The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.*/


const json1 = '{"result":true, "count":42}';
const obj1 = JSON.parse(json1);
console.log(obj1.result)


/* The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.*/
console.log(JSON.stringify({ x: 5, y: 6 })); //van javascript naar json formaat

const JSONformaat = JSON.stringify({ x: 5, y: 6 });
console.log(JSONformaat)
