// console.log("Start");
// function walkINRes(cb){
//     console.log('i am checking the menu');
//     setTimeout(cb,2000);
// }
// function checkMenu(cb){
//     console.log("im cheking the menu");
//      setTimeout(cb,2000);
// }
// function orderFood(cb){
//     console.log("I am ordering Food ")
//       setTimeout(cb,2000);
// }
// function havingLunch (cb){
//     console.log("I am Having My lunch")
//      setTimeout(cb,2000);
// }
// function payBill (cb){
//     console.log("Paying Bill")
//      setTimeout(cb,2000);
// }
// function walkOut(cb){
//     console.log("Walk Out");
//      setTimeout(cb,2000);
// }
// walkINRes(() => {
//   checkMenu(() => {
//     orderFood(() => {
//       havingLunch(() => {
//         payBill(() => {
//           walkOut(() => {
//             console.log("All done");
//           });
//         });
//       });
//     });
//   });
// });

var cart = ["shoes", "watches", "jeans"];
var noOfItem = cart.length;
var price = 25000000;
const orderID = Math.floor(Math.random() * 1000);
function Welcome() {
  console.log("welcome to LODU CART");
  console.log("Slowest delivery Ever");
}
function createOrder(cart, cb) {
  console.log("Creating order for:", cart);
  setTimeout(() => cb(cart, noOfItem), 2000); // ✅ correct
}
function placeOrder(cart, noOfItem, cb) {
  console.log(`Placing order for ${noOfItem} items...`);
  setTimeout(() => {
    cb(orderID, price, noOfItem);
  }, 2000);
}

function orderPayment(orderID, price, noOfItem, cb) {
setTimeout(() => {
  console.log(`Cart: ${cart}`);
  console.log(`Order ID: ${orderID}`);
  console.log(`Price: ₹${price}`);
  console.log(`No Of Items: ${noOfItem}`);
  cb(); 
}, 2000);
}

function orderStatus() {
    
  console.log("ORder Placed");
}
Welcome(); 
createOrder(cart, () => {
  placeOrder(cart, noOfItem, () => {
    orderPayment(orderID, price, noOfItem, () => {
      orderStatus();
    });
  });
});

