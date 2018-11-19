const father = {
	name: { value: 'Edmundo', writable: false, enumerable: true },
	hairColor: { value: 'brown', writable: true, enumerable: false }
}
			
const son = Object.create(father)
son.name = 'Daniel'
			
console.log(father)
console.log(son)
		
for(let key in father) {
	console.log(key)
}
