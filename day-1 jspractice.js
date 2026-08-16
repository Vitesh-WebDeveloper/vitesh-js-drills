// Problems — Basic

// Destructure title and author out of { id: 7, title: "Dune", author: "Herbert", year: 1965 } in one line.
let {id,title,author,year} = {
    id: 7,
    title: "Dune",
    author: "Herbert",
    year: 1965
};
console.log(title,author);

// Given const a = [1,2,3] and const b = [4,5,6], produce a single combined array using spread.
const a = [1,2,3];
const b = [4,5,6];
console.log([...a,...b]);

// Given [5, 10, 15], use .map() to return a new array with 10 added to each value.
let usingMap = [5, 10, 15];
console.log(
    usingMap.map((ele) => {
     return (ele + 10);
    })
);

// Given ["mango","fig","kiwi","pomegranate"], use .filter() to keep only words longer than 4 letters.
let fruits = ["mango","fig","kiwi","pomegranate"];
console.log(
    fruits.filter((ele)=>{
      return (ele.length > 4);
    })
);

// Write greet(name = "Guest") that logs Hello, <name>.
//  *******(i couldn't understand question so couldn't solve it) *****



// Problems — Intermediate
//************
// Given { id: 1, stock: 12 }, write sell(item, qty) returning a new object with stock reduced — without touching the original.
// let {id,stock} = {
//     id: 1,
//     stock: 12
// };

// let [id,stock] = [item, qty];
// sell(item, qty)
//***********


// Given order totals [220, 340, 90], use .reduce() to compute the sum.
let reduceUsing = [220, 340, 90];
console.log(
    reduceUsing.reduce((acc,val)=>{
            return acc + val;
    })
);

// Write removeById(list, id) returning a new array with the matching object removed.
//********** */

// Convert function total(a, b) { return a + b; } to accept any number of arguments using rest parameters.
// function total(a, b) 
// { return a + b; }
function rest(...numbers) {
    console.log(
    numbers.reduce((acc,val)=>{
      return (acc + val);
    },0)
  );
}

rest(100,100,100);

// Given [{id:1,qty:1},{id:2,qty:3}], use .find() to get the item with id: 2.
let finding = [
    {
    id:1,
    qty:1
    },
    {
    id:2,
    qty:3
    }
]

console.log(
    finding.find((ele) =>
         ele.id === 2
        )
);




// Group 2 — Reference Types, Equality & Modern Safety Operators

// Problems — Basic
// Check what typeof returns for a string, number, boolean, array, and null. Note anything surprising.

// let str = "hello";
// console.log(typeof(str));
// let nu = 2;
// console.log(typeof(nu));
// let boo = true;
// let loo = false;
// console.log(typeof(boo),typeof(loo));
// let arr = [1,2,3,4]
// console.log(typeof(arr));
// let n = 0;
// let nul = null;
// console.log(typeof(n),typeof(nul));

// Write one example where == and === give different results.

// let fiftyO = 50;
// let fiftyT = "50";
// if (fiftyO == fiftyT) {
//     console.log("yes it is satifying == condition");
// } else {
//     console.log("no it is not satisfying == condition");
// }

// if (fiftyO === fiftyT) {
//     console.log("yes it is satifying === condition");
// } else {
//     console.log("no it is not satisfying === condition");
// }

// Given { address: null }, safely read .address.city without throwing, using ?..
let home = {
    address: null,
    pin:"oo0"
}
console.log(home.address?.city);

// Compare 0 ?? "N/A" and 0 || "N/A" — write both, note the difference.

// Write a shallow copy of { a: 1, b: 2 } two different ways.

