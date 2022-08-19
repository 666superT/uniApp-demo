<template>
	<view>
		<uni-nav-bar :border="false" @clickRight="handleRightClick" backgroundColor="#5ccc84" color="#fff"
			rightIcon="more-filled" title="我的"></uni-nav-bar>
		<view class="animate__animated animate__heartBeat">
			<view class="content bg-main">
				<view class="my-body p-3 flex">
					<image src="#" class="avator"></image>
					<view class="word ml-3">
						<view class="title" @click="handleGoToLoginPage">
							立即登录
						</view>
						<view class="sub-title mt-3">
							登录解锁更多功能
						</view>
					</view>
				</view>
				<!-- 导航 -->
				<view class="login-foot p-3 mt-3">
					<view class="rounded py-3 bg-white icon-box flex align-center">
						<view class="icon-item">
							<uni-icons type="compose" size="30" color="#fec216"></uni-icons>
							<view class="">订单</view>
						</view>
						<view class="icon-item">
							<uni-icons type="chat" size="30" color="#fec216"></uni-icons>
							<view class="">消息</view>
						</view>
						<view class="icon-item">
							<uni-icons type="star" size="30" color="#fec216"></uni-icons>
							<view class="">收藏</view>
						</view>
						<view class="icon-item">
							<uni-icons type="contact" size="30" color="#fec216"></uni-icons>
							<view class="">在学</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 优惠券 -->
			<view class="px-3 mt-5">
				<view class="item py-2 px-1 flex justify-between align-center">
					<view class="left flex align-center">
						<uni-icons type="contact" size="30" color="#5fa5ee"></uni-icons>
						<view class="ml-2">我的优惠券</view>
					</view>
					<view class="right">
						<uni-icons type="right" size="30" color="#c8c8c8"></uni-icons>
					</view>
				</view>
				<view class="item py-2 px-1 flex justify-between align-center border-bottom border-top">
					<view class="left flex align-center">
						<uni-icons type="contact" size="30" color="#5fa5ee"></uni-icons>
						<view class="ml-2">常见问题</view>
					</view>
					<view class="right">
						<uni-icons type="right" size="30" color="#c8c8c8"></uni-icons>
					</view>
				</view>
				<view class="item py-2 px-1 flex justify-between align-center">
					<view class="left flex align-center">
						<uni-icons type="contact" size="30" color="#5fa5ee"></uni-icons>
						<view class="ml-2">设置</view>
					</view>
					<view class="right">
						<uni-icons type="right" size="30" color="#c8c8c8"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleRightClick() {
				console.log(666);
			},
			// 去登录页面
			handleGoToLoginPage() {
				this.$goTo.to('/pages/login/login')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 350rpx;
		border-radius: 0 0 50px 50px;

		.my-body {
			box-sizing: border-box;

			.avator {
				width: 120rpx;
				height: 120rpx;
				background: #fff;
				border-radius: 50%;
			}

			.word {
				color: #fff;

				.sub-title {
					font-size: 24rpx;
				}
			}
		}

		.login-foot {
			box-sizing: border-box;
			position: relative;

			.icon-box {
				// position: absolute;
				// top: 0;
				// width: 100%;
				justify-content: space-around;
				box-shadow: 0 1px 6px rgba(0, 0, 0, .1);

				.icon-item {
					display: flex;
					flex-direction: column;
					align-items: center;
					font-size: 32rpx;
					justify-content: space-between;
				}
			}
		}

	}
</style>
