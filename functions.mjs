import message from "./module.mjs"

let sayHello = (name) => {
    return 'hello ' + name + ' and ' + message()
}
console.log(sayHello('John'))
