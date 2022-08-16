const to = (url, option = {}) => {
	uni.navigateTo({
		url,
		...option
	})
}


const tab = (url, option = {}) => {
		uni.switchTab({
			url,
			...option
		})
	}

export default {
	to,
	tab
}
