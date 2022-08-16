<template>
	<view>
		<view class="login-head p-2">
			<uni-icons type="back" color="#fff" size="30" @click="handleBack"></uni-icons>
		</view>
		<view class="login-body p-5">
			<view class="title">登录</view>
			<i-input placeholder="请输入用户名" icon="person" v-model="user"></i-input>
			<i-input placeholder="请输入密码" icon="locked" v-model="pass" type="password"></i-input>
			<button class="bg-main text-white mt-3">登录</button>
			<view class="login-text my-5 flex justify-between">
				<view class="left text-main">注册账号</view>
				<view class="right text-">忘记密码?</view>
			</view>
			<view class="flex justify-center py-3">
				<view class="login-icon p-2 d-inline-block">
					<uni-icons type="weixin" color="#5ccc84" size="40"></uni-icons>
				</view>
			</view>
			<view class="flex justify-center py-3">
				<view class="login-foot flex align-center">
					<checkbox :value="checked" class="mr-2 checkbox" />
					<view class="login-foot-text">已阅读并同意用户协议&隐私声明</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: '',
				pass: '',
				checked:''
			};
		},
		methods: {
			handleBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.login-head {
		background-image: linear-gradient(120deg, #3bfdaf, #70d6f2);
		height: 220rpx;
		box-sizing: border-box;
	}

	.login-body {
		background: #fff;
		border-radius: 15px 15px 0 0;
		position: relative;
		top: -50rpx;

		.title {
			padding: 50rpx 0;
		}

		.login-btn {
			background: #5ccc84;
			color: #fff;
		}

		.login-text {
			font-size: 30rpx;

			.right {
				color: #a9a5a0;
			}
		}

		.login-icon {
			border-radius: 50%;
			border: 2rpx solid #5ccc84;
		}
		
		.checkbox{
			width: 44rpx;
			height: 44rpx;
		}
		.login-foot-text{
			font-size: 30rpx;
			color: #a9a5a0;
		}
	}
</style>
