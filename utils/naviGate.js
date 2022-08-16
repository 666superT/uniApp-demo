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

// function back(url, option = {}){
// 	uni.navigateBack()
// }
export default {
	to,
	tab
}
