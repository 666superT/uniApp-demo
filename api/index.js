import
Http
from '@/utils/request.js'

function getIndex() {
	return Http.request({
		url: '/index'
	})
}

function getCoupon() {
	return Http.request({
		url: '/coupon'
	})
}

function getGroup(params) {
	return Http.request({
		url: '/group',
		data: params
	})
}
export {
	getIndex,
	getCoupon,
	getGroup
}
