<template>
	<view class="coupon">
		<view class="coupon-content">
			<view class="coupon-item mr-2" v-for="(v,index) in data" :key="index">
				<view class="coupon-left">
					<view class="price">
						￥{{v.price}}
					</view>
					<view class="value">
						{{v.value.title}}
					</view>
				</view>
				<view class="coupon-right">
					领取
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "i-coupon",
		props: {
			data: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.coupon {
		padding: 20rpx;
		width: 100%;
		box-sizing: border-box;

		.coupon-content {
			overflow-x: scroll;
			display: flex;
			// width: 100%;

			.coupon-item {
				display: flex;
				white-space: nowrap;
				text-align: center;

				.coupon-left {
					min-width: 310rpx;
					background: #d39e00;
					flex: 70%;
					padding: 20rpx;
					color: #fff;

					.value {
						font-size: 24rpx;
					}
				}

				.coupon-right {
					background: #ffc107;
					flex: 30%;
					border-left: 2px dashed #fff;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #fff;
					padding: 20rpx;
				}
			}
		}
	}
</style>
