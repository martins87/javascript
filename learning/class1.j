class Person {
	constructor(_name = 'Lio', _age = 31) {
		this.name = _name
		this.age = _age
	}
			
	speak() {
		console.log(`Hello! My name is ${this.name}`)
	}
}
			
function createPerson(_name, _age) {
	return new Person(_name, _age)
}
			
const Lionel = createPerson()
const Daniel = createPerson('Daniel', 31)
			
Lionel.speak()
Daniel.speak()
