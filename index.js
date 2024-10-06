//higher order functions
//map,filter,reduce,forEach etc are built in hof
const addOne = (a) => a + 1;

const arr = [1, 2, 3];
const arr2 = arr.map(addOne);
console.log(arr2);

//................................................
// benifit of hof is that it promotes code re-usability and modularity
//modularity : each module or function handles  specific functionality 

//we can re use code over and over again on diff parameters

console.log(isNaN("uu"))
console.log(isNaN("77"))
console.log(isNaN(76))




function smartOp(data,op,pad){

    pad=isNaN(pad) ?0:pad
    let result=[]
    for (let elem of data){
        result.push(op(elem,pad))
    }
    return result

}

const data=[12,3,50]

function incr(num,pad){
    return num+pad
}
const result=smartOp(data,incr,2)
console.log(result)




