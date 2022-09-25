export default class FormBuilder {
	constructor (object, root) {
		this.object = object
		this.root = root
	}

	toData () {
		let object = this.root ? {[this.root]: this.object} : this.object
		this.valueToData(object)
	}

	valueToData (value) {
		if (Array.isArray(value)) {
			return this.arrayToData(value)
		}

		if (typeof value === 'object') {
			return this.objectToData(value)
		}

		return [[[], value]]
	}

	objectToData (object) {
		return Object.keys(object).reduce((acc, key) => {
			let value = object[key]
			let arr = this.valueToData(value)
			arr.forEach(item => item[0].unshift(key))
			return acc.concat(arr)
		}, [])
	}

	arrayToData (array) {
		return array.reduce((acc, item) => {
			let arr = this.valueToData(item)
			arr.forEach(item => item[0].unshift(''))
			return acc.concat(arr)
		}, [])
	}
}