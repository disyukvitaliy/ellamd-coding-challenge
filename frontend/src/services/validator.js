export default class Validator {
	static emailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

	constructor (rules) {
		this.rules = rules
	}

	validate = (values) => {
		let errors = {}

		Object.keys(this.rules).forEach(attrName => {
			let error = this.validateAttr(values[attrName], this.rules[attrName])
			if (error) errors[attrName] = error
		})

		return errors
	}

	validateAttr = (value, rules) => {
		if (rules.required && !value) {
			return 'Required'
		}

		if (rules.email && !this.constructor.emailRegexp.test(value)) {
			return 'Wrong format'
		}
	}
}