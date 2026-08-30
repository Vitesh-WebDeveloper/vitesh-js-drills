// IMP JS TOPICS

// 1. forEach : 
// EX : 
// let arr1 = [10,20,3,5];
// let foreach = arr1.forEach((ele)=>{
//       console.log(
//        ele * ele);
// });

// console.log(foreach);

// 2. map : 
// ex : 
// let arr2 = [10,20,3,5];
// let MAP = arr2.map((ele)=>{
//       console.log(
//        ele * ele);
//        return ;
// });


// 3.filter : 
// ex:
// let arr3 = [10,20,3,5];
// let FIlTER = arr3.filter((ele)=>{
//     return (ele <= 10);
// })

// console.log(FIlTER);

// 4.reduce :
// let arr4 = [10,20,3,5];
// let REDUCE = arr4.reduce((ele,cu)=>{
//     return ele + cu;
// });

// console.log(REDUCE);

// 5.find
// const users = [
//   { id: 101, name: 'Alice' },
//   { id: 205, name: 'Bob' },
//   { id: 309, name: 'Charlie' },
//   { id: 205, name: 'David' } // Note: Another user with ID 205
// ];

// // Find the user whose ID is 205
// const foundUser = users.find(user => {
//   return user.id === 205;
// });

// console.log(foundUser); 
// Output: { id: 205, name: 'Bob' }


// 6.promise
// let prom = () =>{
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             resolve("hey hello");
//         }, 2000);
//     })
// }

// console.log("uhhooo");

// let data = prom();
// data.then(()=>{

// console.log(data);
// })


// 7.async/await
// let asw = async  () =>{
// return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("hey hello");
//         }, 4000);
//     })
    
// }

// async function name() {
//     console.log("kk");
//     console.log("ok");
//     console.log("lk");
//     let newww = await asw();
//     console.log(newww);

//     console.log("teek hai");
       
// }

// name()

// 8.fetchApi
// let fe = async  () => {
//     let apt = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let f = await apt.json();
//     console.log(f);
    
// }
// fe();



// spread operator

// let a = {
//     name : "Vitesh",
//     age : 20
// };

// let aa = {
//     job : "webdeveloper",
//     intersts : "In FullStack"
// };

// let combined  = {...a, ...aa};

// console.log(combined);

// let word = "rail way"
// console.log([...word]);

// let numbers = [1,22,3,11,1,8,5,7,7];

// let remDupe = [...new Set(numbers)];

// console.log(numbers);

// console.log(remDupe);



// const numbers = [5, 2, 9, 1, 7];

// const min = Math.min(...numbers); // 1
// const max = Math.max(...numbers); // 9

// console.log(`Min: ${min}, Max: ${max}`);
