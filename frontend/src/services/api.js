import axios from 'axios'

class Api {
	constructor() {
		this.instance = axios.create({
			baseURL: '/web',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		});
	}

	get(uri, params = {}) {
		return this.instance.get(uri, {params: params});
	}

	post(uri, params = {}) {
		return this.instance.post(uri, params);
	}

	patch(uri, params = {}) {
		return this.instance.patch(uri, params);
	}

	delete(uri) {
		return this.instance.delete(uri);
	}
}

export default new Api()

