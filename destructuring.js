// todo Without destruction
let userOne = {
  name: "Ghada",
  age: 30,
  fullstack: {
    track: "js",
    skill: 'ES6',
  },
};
let resultOne = (users) => {
  return `My name is ${users.name}, I'm ${users.age} and we are learning ${users.fullstack.track}: ${users.fullstack.skill} `;
};
console.log(resultOne(userOne));

let resultTwo = ({name, age, fullstack: {track, skill}}) =>{
    return `My name is ${name}, I'm ${age} and we are learning ${track}: ${skill} `;
}
console.log(resultTwo(userOne))