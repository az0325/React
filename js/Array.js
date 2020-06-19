const arr = [1, 2, 3]

// concat
arr.concat(4, 5, 6)
console.log(arr) // [1, 2, 3]


// splice
arr.splice(1, 0, 2, 3, 4)
console.log(arr) // [ 1, 2, 3, 4, 2, 3 ]


// reverse
arr.reverse()
console.log(arr) // [ 3, 2, 4, 3, 2, 1 ]


// indexOf
arr.indexOf(3)
console.log(arr)


// reduce
const ex = [5, 7, 2, 4]
const sum = ((a, x) => a += x, 0)
console.log(sum)
console.log(ex)


// map
const es = ex.map(x => x % 2 !== 0)
console.log(es)
console.log(ex)