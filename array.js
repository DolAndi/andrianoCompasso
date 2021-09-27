const numbers = [1, 2, 3, 4, 5]
const newNumbers = numbers.map(function (number){
    return number +1
})

const total = numbers.reduce(function(total, next) {
    return total + next
})

numbers.forEach(function (number, index) {
    console.log(number, index)
})

console.log(newNumbers)
console.log(total)