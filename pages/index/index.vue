<template>
	<view class="content">
		<my-skeleton v-if="!lodingStatus"></my-skeleton>
		<block v-else>
			<!-- 搜索框 -->
			<i-search @click='handleGoToSearch'></i-search>

			<!-- 轮播图 -->
			<i-swiper :data="bannerList"></i-swiper>


			<view class="icons flex">
				<view class="icons-item py-1" v-for="(v,i) in iconsList" :key="i">
					<image :src="v.src" class="icons-img"></image>
					<view class="title">
						{{v.name}}
					</view>
				</view>
			</view>

			<!-- 优惠券 -->
			<i-coupon :data="couponData"></i-coupon>

			<view class="group">
				<view class="group-title">
					拼团
				</view>
				<view class="group-item">
					<view class="group-content" v-for="(v,i) in groupData" :key="i">
						<view class="cover">
							<image :src="v.cover" class="img"></image>
							<view class="type">
								{{v.type==='column'?'专栏':''}}
								{{v.type==='media'?'图文':''}}
								{{v.type==='audio'?'音频':''}}
								{{v.type==="video"?'视频':''}}
							</view>
						</view>
						<view class="title">
							{{v.title}}
						</view>
						<view class="price-content">
							<view class="price">
								￥{{v.price}}
							</view>
							<view class="t_price">
								￥{{v.t_price}}
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="group-2">
				<view class="group-title">
					<view class="left">
						最新列表
					</view>
					<view class="right">
						查看更多
					</view>
				</view>
				<view class="group-item">
					<view class="group-content" v-for="(v,i) in groupData2" :key="i">
						<view class="cover">
							<image :src="v.cover" class="img"></image>
							<view class="type">
								{{v.type==='column'?'专栏':''}}
								{{v.type==='media'?'图文':''}}
								{{v.type==='audio'?'音频':''}}
								{{v.type==="video"?'视频':''}}
							</view>
						</view>
						<view class="foot">
							<view class="title">
								{{v.title}}
							</view>
							<view class="price-content">
								<view class="price">
									￥{{v.price}}
								</view>
								<view class="t_price">
									￥{{v.t_price}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<image :src="imageAd" style="width:100%;height: 360rpx;"></image>
		</block>

	</view>
</template>

<script>
	import {
		getIndex,
		getCoupon,
		getGroup
	} from '@/api/index.js'
	import mySkeleton from '@/pages/index/my-skeleton'
	export default {
		components: {
			mySkeleton
		},
		data() {
			return {
				bannerList: [],
				iconsList: [],
				couponData: [],
				groupData: [],
				groupData2: [],
				imageAd: '',
				lodingStatus: false
			}
		},
		onLoad() {
			this.loder()
		},
		onPullDownRefresh() {
			this.loder()
		},
		methods: {
			async loder() {
				try {
					await this.render()
					this.lodingStatus = true
					await this.handleGetCoupon()
					await this.handleGetGroup()
					uni.stopPullDownRefresh()
				} catch (e) {
					//TODO handle the exception
					console.log(e);
					uni.stopPullDownRefresh()
				}

			},

			async render() {
				const res = await getIndex()
				// console.log(res);
				this.bannerList = res.data[1].data
				this.iconsList = res.data[2].data
				this.groupData2 = res.data[5].data
				this.imageAd = res.data[6].data
				return res
			},
			async handleGetCoupon() {
				const res = await getCoupon()
				// console.log(res);
				this.couponData = res.data
				return res
			},
			async handleGetGroup() {
				const res = await getGroup({
					page: 1,
					usable: 1
				})
				// console.log(res);
				this.groupData = res.data.rows
				return res
			},
			// 跳转搜索页面
			handleGoToSearch() {
				this.$goTo.to('/pages/search/search')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
	}

	.icons {
		padding: 20rpx 0;
		flex-wrap: wrap;

		.icons-item {
			flex: 25%;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;

			.icons-img {
				width: 72rpx;
				height: 72rpx;
				border-radius: 50px;
			}

			.title {
				font-size: 24rpx;
				color: #6c757d;
				margin-top: 20rpx;
			}
		}
	}


	.group {
		border-top: 20rpx solid #f5f5f3;
		border-bottom: 20rpx solid #f5f5f3;
		width: 100%;
		padding: 30rpx 10rpx;

		.group-title {
			font-size: 40rpx;
			font-weight: 800;
		}

		.group-item {
			width: 100%;
			overflow-x: scroll;
			display: flex;
			flex-shrink: 0;

			.group-content {
				.cover {
					margin-bottom: 5px;
					width: 340rpx;
					height: 180rpx;
					position: relative;

					.img {
						width: 100%;
						height: 100%;
					}

					.type {
						position: absolute;
						bottom: 10rpx;
						right: 10rpx;
						background: rgba(0, 0, 0, .5);
						color: #fff;
						padding: 0 10rpx;
						font-size: 24rpx;
					}
				}

				.price-content {
					display: flex;
					margin-top: 10rpx;

					.price {
						color: red;
					}

					.t_price {
						color: #ccc;
						font-size: 24rpx;
					}
				}
			}
		}
	}

	.group-2 {
		width: 100%;
		padding: 30rpx 10rpx;
		box-sizing: border-box;
		border-bottom: 20rpx solid #f5f5f3;

		.group-title {
			display: flex;
			justify-content: space-between;

			.left {
				font-size: 40rpx;
				font-weight: 800;
			}

			.right {
				color: #ccc;
				font-size: 24rpx;
			}
		}

		.group-item {
			width: 100%;

			.group-content {
				display: flex;

				.cover {
					margin-bottom: 5px;
					width: 340rpx;
					height: 180rpx;
					position: relative;

					.img {
						width: 100%;
						height: 100%;
					}

					.type {
						position: absolute;
						bottom: 10rpx;
						right: 10rpx;
						background: rgba(0, 0, 0, .5);
						color: #fff;
						padding: 0 10rpx;
						font-size: 24rpx;
					}
				}

				.foot {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					margin-left: 20rpx;

					.title {
						width: 400rpx;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}

				.price-content {
					margin-top: 10rpx;
					display: flex;

					.price {
						color: red;
					}

					.t_price {
						color: #ccc;
						font-size: 24rpx;
					}
				}
			}
		}
	}
</style>
