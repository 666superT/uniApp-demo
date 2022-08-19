function getDateType(data) {
	let dataType = Object.prototype.toString.call(data)

	let mapType = {
		"[object Boolean]": "boolean",
		"[object Number]": "number",
		"[object String]": "string",
		"[object Function]": "function",
		"[object Array]": "array",
		"[object Date]": "date",
		"[object RegExp]": "regExp",
		"[object Undefined]": "undefined",
		"[object Null]": "null",
		"[object Object]": "object"
	}

	return mapType[dataType]
}

function deepCopy(data) {
	let result
	if (getDateType(data) === 'array') {
		result = []
		for (var i = 0; i < data.length; i++) {
			result.push(arguments.callee(data[i]))
		}
	} else if (getDateType(data) === 'object') {
		result = {}
		for (let key in data) {
			result[key] = arguments.callee(data[key])
		}
	} else {
		return data
	}
	return result
}

export default deepCopy
