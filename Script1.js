function grandparent(){
    var a=200;
    console.log(a);
   // console.log(c)  // bahar se andar access nhi kr skte

    function parent(){
        var b=300;
        console.log(b);

        function child(){
            var c=500;
            console.log(c);
        }
        child();
    }
    parent();

}


grandparent();
// 1. Global context
function show() {
    console.log(this);
}
show(); // → window (in browser)

// 2. Object method
const user = {
    name: "Palkit",
    sayHi() {
        console.log(this.name);
    }
};
user.sayHi(); // → "Palkit"

// 3. Arrow function
const user2 = {
    name: "Ravi",
    greet: () => {
        console.log(this.name);
    }
};
user2.greet(); // → undefined (inherits global `this`)

// 4. call() method
function greet() {
    console.log(this.name);
}
const person = { name: "Neha" };
greet.call(person); // → "Neha"
