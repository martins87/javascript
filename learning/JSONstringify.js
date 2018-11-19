const product = new Object
			
product.price = 75000
product['name'] = 'Model S'
product.availabilityDate = '26-03-2009'
product.company = {
	name: 'Tesla Motors',
	CEO: 'Elon Musk',
}

product.getCompanyCEO = function() {
	console.log(this.company.CEO)
}
			
product.getCompanyCEO()
	
let myJSON = JSON.stringify(product)
console.log(myJSON)
