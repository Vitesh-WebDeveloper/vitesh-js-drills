/*
Re-test
A.
What is the difference between:
let user = { name: "A" };
and:
const user = { name: "A" };
*/
/*ans : let and const are block-scoped, let can be redeclared,but const cannot be redeclared like suppose : 

let users = { name: "A" };
users = { name : "B"};
console.log(users); //output ={ name: 'B' }

 const user = { name: "A" };
 user = { name : "B"};
 console.log(user);// it is quitly opposite for const because we cannot redeclare the variables in const, but in object's we can.
*/

/*
Can this happen with const?
user.name = "B";
Can this happen?
ans: yes this happens because we are changing the variable inside object element,because we changed the property of the object, we didn't reassign user.

user = {};
Explain why.
ans : in case of let it happens but in case of const it wont. as i said let variable can be reassigned but const cannot.
*/





/*
B.
What is a closure?
ans : a closure is inner function of the parent function which can access the varibales of outer function and after it accessed it it can store the values. even if we run for several times.
Use this example and explain why this works:
*/
//here is the main function starts
function createCounter() {
    // we have assigned a variable count.
  let count = 1;
  //when we access the variables of outer function to the inner function is known as closure ,as we can see that im accessing count.
  function helio() {
    //count updation
    count++;
    //it is storing the count.
    console.log(count);
  };
  return helio;
}
let store = createCounter();// we are using store variable to store the inner function logic and count variable in it. and we do this just because the outer function runs only for one time when we call store as a function only inner function gets called everytime.
store();
store();
store();// the inner fn count value gets updated everytime because it remebers the previous count value.


/*
C.
What is the important difference between:
function test() {}
and:
const test = () => {};
I'm specifically looking for the this difference.
*/
// so the difference between 'function test() {}' and 'const test = () => {}' is normal function and arrow function. and they both are not same compared of specifiaclly .this because example : 
 const obj = {
    chip1: 'ryzen',
   normal : function() {
    console.log(this.chip1);
    //this gives 'ryzen', because a normal function has its own this.
   },
   arrow : () => {
    console.log(this.chip1);
    //this gives undefined, because a normal function has its own this. so it tries to find its parents this
   },
}
obj.normal();
obj.arrow();

/*
D.
Convert this to destructuring:
const product = {
  title: "Laptop",
  price: 50000,
  category: "Electronics"
};
const title = product.title;
const price = product.price;
*/

const product = {
  title: "Laptop",
  price: 50000,
  category: "Electronics"
};
// const title = product.title;
// const price = product.price;

const {title,price} = product;// at last we need to write the same object name or else we will get an error.
console.log(title,price);



/*
E.
Complete this:
function sum(...args) {
  // return the total
}
So:
sum(10, 20, 30);
returns:
60
*/
function sum(...args) {
  return console.log(args.reduce((acc,curr)=> acc+curr ,0));
}
sum(10, 20, 30);



/*
console.log(0 || "Guest");
console.log(0 ?? "Guest");

console.log("" || "Guest");
console.log("" ?? "Guest");

console.log(null || "Guest");
console.log(null ?? "Guest");
*/

// 0 || "Guest" -> 0 is falsy, so it jumps to the right. Returns "Guest".
// 0 ?? "Guest" -> 0 is not nullish, so it stays on the left. Returns 0.

// "" || "Guest" -> "" is falsy, so it jumps to the right. Returns "Guest".
// "" ?? "Guest" -> "" is not nullish, so it stays on the left. Returns "".

// null || "Guest" -> null is falsy, so it jumps to the right. Returns "Guest".
// null ?? "Guest" -> null is nullish, so it jumps to the right. Returns "Guest".



/*
G. One coding question
Write this from memory:
function getAdultNames(users) {
  // return names of everyone age >= 18
}
Do not check for specific ages like 19 or 22.
The logic must work for:
{ name: "Rahul", age: 25 }
too.
*/ 
// eg:
const testUsers = [
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 16 },
  { name: "Sneha", age: 18 },
  { name: "Priya", age: 12 }
];
function getAdultNames(users) {
    return users
    .filter(user => user.age >= 18)
    .map(user => user.name);
}
console.log(getAdultNames(testUsers));

