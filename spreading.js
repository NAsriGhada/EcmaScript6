// let user = {
//   name:'Ghada',
//   age:30,
//   adress:'Tunis'
// }
// let info = { 
//   track:'Full Stack JS',
//   framework:'React'
// }
// let fullinfo= {...user,...info}
// console.log(fullinfo)

// let addedInfo={...fullinfo, id:1}
// console.log(addedInfo)

// let arr1=['hello', 'world']
// let newarr=[...arr1]
// console.log(newarr)

// let arr2=['welcome', 'to', 'gomycode']
// let newArr=[...arr1,...arr2]
// console.log(newArr)
// let x=[...arr1, 'x']
// console.log(x)

const users = [{ name: "Yasmine" }, { name: "Elyes" }];
const addUser = [...users, { name: "Amine" }];
console.log(addUser)
const mappedUsers = users.map((el, i) => { return{...el, age: i} });
console.log(mappedUsers);
console.log(...mappedUsers);