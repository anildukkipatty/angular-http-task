const angular = require('angular')
const Task = require('data.task')

angular.module('HTTP', [])
	.factory('HTTP', ['$http', ($http) => {
		const get = (url) => new Task((reject, resolve) =>
			$http.get(url)
				.then(resolve, reject)
		).map(d => d.data)

		const post = (url, data) => new Task((reject, resolve) =>
			$http.post(url, data)
				.then(resolve, reject)
		).map(d => d.data)

		const deleteMethod = (url) => new Task((reject, resolve) =>
			$http.delete(url)
				.then(resolve, reject)
		).map(d => d.data)

		return { get, post, delete: deleteMethod }
	}])