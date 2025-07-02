// HOFs

//  var calculate=(param1)=>{
//     console.log("This is calculate");
//     param1();
//  }
// var sumOfTwo= ()=>{
//     console.log("sum of two");
// }
// calculate(sumOfTwo);



// function hof(callback) {
//     callback(); // using passed function
// }

// function hof2() {
//     return function() {
//         console.log("Returned function");
//     }
// }


// function calculate (logicalFunction,a,b){
//     return logicalFunction(a,b);
// }

// function add (a,b){
//     return a+b;
// }

// function sub (a,b){
//     return a-b;
// }
// console.log(calculate(add,3,5));
// console.log(calculate(sub,8,4));



function studentFullDetails(first,secound,third,name,fess){
return `${first(name,fess)}\n${secound(fess)} \n${third(name)}`
}
function first(name,fess){
    return `Name: \n${name} \nFees is ${fess}`
}
function secound(fess){
    return `EMI: ${fess/10}`;
}
function third (name){
    return `Welcome ${name}`;
}
console.log(studentFullDetails(first,secound,third,"Palkit",10000));