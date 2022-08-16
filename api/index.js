import {
	http
} from '@/utils/request.js'

function getIndex() {
	return http({
		url: '/index'
	})
}

function getCoupon() {
	return http({
		url: '/coupon'
	})
}

function getGroup(params) {
	return http({
		url: '/group',
		data: params
	})
}
export {
	getIndex,
	getCoupon,
	getGroup
}
