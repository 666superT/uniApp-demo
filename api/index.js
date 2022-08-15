import {http} from '@/utils/request.js'

function getIndex(){
	return http({url:'/index'})
}

function getCoupon(){
	return http({url:'/coupon'})
}
export {getIndex,getCoupon}