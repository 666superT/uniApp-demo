import {
	APIConfig
} from '@/config/config'

class Http {
	// 请求拦截器
	static async _beforeRquest(config) {
		config.header = {
			appId: APIConfig.appId
		}
		config.url = APIConfig.baseUrl + config.url
		return config
	}

	// 请求体
	static async request({
		url,
		method = 'get',
		data = {},
		header = {},
		...options
	}) {
		const config = await Http._beforeRquest({
			url,
			method,
			data,
			header,
			...options
		})
		const res = await uni.request(config)
		return await Http._beforeResponse(res)
	}

	// 响应拦截器
	static async _beforeResponse(res) {
		console.log(res);
		return res[1].data
	}
}

export default Http

// export const http = ({
// 	url,
// 	method,
// 	data
// }) => {
// 	return new Promise((resolve, reject) => {
// 		uni.showLoading({
// 			title: '加载中...'
// 		})
// 		uni.request({
// 			url: baseUrl + url,
// 			method: method || 'GET',
// 			data: data || {},
// 			header: {
// 				appId
// 			},
// 			success: (res => {
// 				resolve(res.data)
// 			}),
// 			fail: (err => {
// 				reject(err)
// 			}),
// 			complete: () => {
// 				uni.hideLoading()
// 			}
// 		})
// 	})
// }
