import { action, observable } from 'mobx';

export default observable({
	list: [],
	setList: action(function (list) {
		this.list = list
	})
});
