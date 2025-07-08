// // const myPromise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     // resolve("foo");
// //     reject("failed");
// //   }, 3000);
// // });
// // myPromise.then((res) => {console.log(res)}).catch((err) => {console.log(err)});
// // // console.log(myPromise)


// const myPromise = new Promise((resolve, rejet) => {
//   setTimeout(() => {
//     resolve("Got placed");
//   }, 2000);
// })

// const myPromise2 = new Promise((resolve, rejet) => {
//   setTimeout(() => {
//     resolve("Party");
//   }, 3000);
// })


// myPromise.then((res) => {
//   console.log(res);
//   myPromise2.then((res) => {
//     setTimeout(() => {
//       console.log(res, "\nstarted working");
//     }, 4000);
//   }).catch((err) => {console.log(err)});
// })

// function placement(placementSteps, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("the placement " + placementSteps);
//       console.log(placementSteps);
//     }, delay)
//   })
// }

// placement(" Got the placement", 5000)
// .then(()=>placement("Party", 3000))
// .then(()=>placement("Working", 4000))
// .then(()=>placement("layoff", 1000))
// .catch((err) => console.log(err));


// const myPromise = new Promise((resolve, rejet) => {
//   setTimeout(() => {
//     resolve("Got placed");
//   }, 2000);
// })

// const myPromise2 = new Promise((resolve, rejet) => {
//   setTimeout(() => {
//     resolve("Party");
//     // console.log("party")
//   }, 3000);
// })

// myPromise.then((res) => {
//   console.log(res);
//   return myPromise2;
// })

// async function run() {
//   const res1 = await myPromise;
//   console.log(res1);
//   const res2 = await myPromise2;
//   console.log(res2);
// }
// run();

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("JetLine data");
    resolve("JetLine data");
  }, 2000);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("EasyJet Data");
    resolve("EasyJet Data");
  }, 3000);
});

const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Menzies Data");
    resolve("Menzies Data");
  }, 4000);
});

const myPromise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Netflix data");
    reject("Netflix data");
  }, 5000);
});

// Promise.all
// Promise.all([myPromise1, myPromise2, myPromise3, myPromise4])
//   .then(results => {
//     console.log(results);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//Promise.allSettled
// Promise.allSettled([myPromise1, myPromise2, myPromise3, myPromise4])
//   .then(results => {
//     console.log(results);
//   });

// Promise.race
// Promise.race([myPromise1, myPromise2, myPromise3, myPromise4])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// Promise.any
// Promise.any([myPromise1, myPromise2, myPromise3, myPromise4])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error.errors);
//   });