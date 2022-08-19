import
Http
from '@/utils/request.js'

// 注册接口
function register(data) {
	return Http.request({
		url: '/reg',
		method: 'post',
		data
	})
}

// 登录接口
function login(data) {
	return Http.request({
		url: '/login',
		method: 'post',
		data
	})
}

// 获取验证码
function getCode(data) {
	return Http.request({
		url: "/get_captcha",
		method: 'post',
		data
	})
}

// 绑定手机号
function bindPhone(data) {
	return Http.request({
		url: "/bind_mobile",
		method: 'post',
		data
	})
}

export {
	register,
	login,
	getCode,
	bindPhone
}
