let arr =[1,3,4,6,6];
// const newArr = Array.map((x)=>x*2);
// console.log(newArr);

// Array.prototype.mapReplica =(logic)=>{
//     let outputArr =[];
//     for(int=0;i<arr.length;i++){
//         outputArr.push(logic(arr[i]))
//     }
//     return outputArr;
// }
Array.prototype.mapReplica = function (callback) {
    let outputArr = [];
    for (let i = 0; i < this.length; i++) {
        outputArr.push(callback(this[i]));
    }
    return outputArr;
}


function doubleData(x) {
    return x * 2;
}

const myprotodata = arr.mapReplica(doubleData);

console.log(myprotodata);


// let arr = ["apple", "banana", "grape", "kiwi", "mango"];

// Array.prototype.filterReplica = function () {
//  // let outputArr = [];
//   for(let i = 0; i<this.length; i++) {
//     if(this[i].length > 4) {
//       console.log(this[i]);
//     }
//   }
//   // return outputArr;
// }

// const ans = arr.filterReplica(arr);
// ans;

// let arr = [1, 2, 3, 4];
let initial = 0;

function result(acc, curr) {
  return acc + curr;
}

Array.prototype.replaceReplica = function (callback, initial) {
  let res = initial;
  for (let i = 0; i < this.length; i++) {
    res = callback(res, this[i]);
  }
  return res;
};

const ans = arr.replaceReplica(result, initial);
console.log(ans);