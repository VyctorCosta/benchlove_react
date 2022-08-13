const array = [1, 2, 3, 4, 5]

const newArray = array.filter((value, index, array) => {
  console.log(value % 2 === 0)
  return !(value < 2)
})
newArray.shift()

console.log(newArray)