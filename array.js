let array = [40, 100, 50, 33]
let mappedArray = array.map(el => el * 2)
console.log(mappedArray)

const filteredArray = array.filter(el => el > 60)
console.log(filteredArray)

const sortedArray = array.sort()
console.log(sortedArray)

const found = array.find(el => el > 26)
console.log(found)

const findIndex = array.findIndex( el => el > 25)
console.log(findIndex)