let str = 'Daniel'

// Daniel
console.log(str)

// ["D", "a", "n", "i", "e", "l"]
console.log(str.split(''))

// ["l", "e", "i", "n", "a", "D"]
console.log(str.split('').reverse())

// leinaD
console.log(str.split('').reverse().join(''))
