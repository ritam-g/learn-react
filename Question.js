// arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// let arr=[...arr1,...arr2]
// console.log(arr);
// person = { name: "Alice", age: 25, city: "Delhi" };
// let p2={...person}
// p2.age=30
// console.log(person,p2);
// function sumAll(...data) {
//     let sum=0
//     for (let index = 0; index < data.length; index++) {
//         sum+=data[index]
        
//     }
//     return sum
// }
// console.log(sumAll(1, 2, 3));        // 6
// console.log(sumAll(10, 20));         // 30
// console.log(sumAll(5));   

numbers = [10, 20, 30, 40, 50]
let [first,...other]=numbers
console.log(first);
console.log(other);

