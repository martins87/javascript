const counter = {
	_value: 0,
		
	get value() {
		return this._value++
	},
  
	set value(value) {
		this._value = value
	}
}
			
console.log(counter.value)
