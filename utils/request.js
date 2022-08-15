const baseUrl = 'http://demonuxtapi.dishait.cn/mobile/index'

export const http = (url, method, data) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中...'
		})
		uni.request({
			url: baseUrl + url,
			method: methods || 'GET',
			data: data || {},
			success: (res => {
				resolve(res)
			}),
			fail: (err => {
				reject(err)
			}),
			complete: () => {
				uni.hideLoading()
			}
		})
	})
}
