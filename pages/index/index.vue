<template>
	<view class="content">
		<i-search></i-search>
		
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="(v,i) in bannerList" :key="i" class="px-2 s-item">
				<image :src="v.src" class="rounded banner-img"></image>
			</swiper-item>
		</swiper>
		
		<view class="icons flex">
			<view class="icons-item py-1" v-for="(v,i) in iconsList" :key="i">
				<image :src="v.src" class="icons-img"></image>
				<view class="title">
					{{v.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {getIndex,getCoupon} from '@/api/index.js'
	export default {
		data() {
			return {
				bannerList:[],
				iconsList:[]
			}
		},
		onLoad() {
			this.render()
		},
		methods: {
			async render(){
				const res=await getIndex()
				console.log(res);
				this.bannerList=res.data.data[1].data,
				this.iconsList=res.data.data[2].data
			},
			async handleGetCoupon(){
				const res=await getCoupon()
				console.log(res);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.s-item{
		box-sizing: border-box;
	}
	.banner-img{
		width: 100%;
		height: 100%;
	}
	.icons{
		padding: 20rpx 0;
		flex-wrap: wrap;
		.icons-item{
			flex: 25%;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			.icons-img{
				width: 72rpx;
				height: 72rpx;
				border-radius: 50px;
			}
			.title{
				font-size: 24rpx;
				color: #6c757d;
				margin-top: 20rpx;
			}
		}
	}
</style>
