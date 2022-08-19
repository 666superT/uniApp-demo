<template>
	<view class="nav bg-main">
		<view class="text-white flex align-center justify-center title">
			{{title}}
		</view>
		<uni-icons :type="icon" :color="color" size="30" class="icons"></uni-icons>
	</view>
</template>

<script>
	export default {
		name: "i-navbar",
		props: {
			icon: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.nav {
		height: 88rpx;
		position: relative;

		.title {
			height: 100%;
			font-weight: 700;
			font-size: 32rpx;
		}

		.icons {
			position: absolute;
			right: 20rpx;
			top: 20rpx;
			z-index: 3;
		}
	}
</style>
