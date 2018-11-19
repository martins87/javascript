class Person {
	constructor(name) {
		this.name = name
	}
				
	speak() {
		console.log(`Olá! Meu nome é ${this.name}`)
	}
}

const Daniel = new Person('Daniel')
daniel.speak()
