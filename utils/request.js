const baseUrl = 'http://demonuxtapi.dishait.cn/mobile'
const appId='bd9d01ecc75dbbaaefce'
export const http = ({url, method, data}) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中...'
		})
		uni.request({
			url: baseUrl + url,
			method: method || 'GET',
			data: data || {},
			header:{
				appId
			},
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
