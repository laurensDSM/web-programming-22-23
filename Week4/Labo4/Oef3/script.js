function sortByPriceAscending(json){

const convert = JSON.parse(json)
const sorteer = convert.sort(function(a,b){
    if (a.price > b.price){
        return 1
    }else if(a.price == b.price){
        if (a.name.toLowerCase() > b.name.toLowerCase()){
            return 1
        }
        else{
            return -1
        }
    }
    else{
        return -1
    }
})
return sorteer;
}




console.log(sortByPriceAscending(' [{"name":"coffee","price":9.99},{"name":"eggs","price":1},{"name":"rice","price":4.04} ]'));
// uitkomst ' [{"name":"eggs","price":1},{"name":"rice","price":4.04},{"name":"coffee","price":9.99} ]'

console.log(sortByPriceAscending(' [{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"abc","price":4.04},{"name":"Rice","price":4.04},{"name":"donut","price":4.04} ]'));
