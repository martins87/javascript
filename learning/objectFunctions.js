const person = {
	name: 'Daniel',
	age: 31,
	birthDate: '04/10/1987'
}
		
const personDetails = Object.entries(person).forEach(([key, value]) => {
	console.log(`${key} = ${value}`)
})

console.log(personDetails)
