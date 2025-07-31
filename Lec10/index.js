const https = require('node:https');
const fs = require('node:fs');
fs.readFile('./something.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

setTimeout(()=>{
    console.log("THIS IS SETTIMOUT")
},0)

https.get('https://encrypted.google.com/', (res) => {
    console.log("THIS IS API DATA")

}).on('error', (e) => {
  console.error(e);
});

setImmediate(()=>{
    console.log("SET IMMEDIATE")
})

setTimeout(()=>{
    console.log("THIS IS SETTIMOUT")
},0)

process.nextTick(()=>{
    console.log("NEXT TICK")
})

console.log("HELLOOOO")

process.nextTick(()=>{
    console.log("NEXT TICK 2")
})
