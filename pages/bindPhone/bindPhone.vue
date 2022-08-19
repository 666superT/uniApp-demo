<template>
	<view>
		<view class="login-head p-2">
			<uni-icons type="back" color="#fff" size="30" @click="handleBack"></uni-icons>
		</view>
		<view class="login-body p-5">
			<view class="title">绑定手机号</view>
			<i-input placeholder="请输入手机号" v-model="phone" icon="phone"></i-input>
			<i-input placeholder="验证码" v-model="code" icon="email">
				<view class="text-white btn bg-main flex justify-center align-center" @click="handleSendPhoneNumber">
					{{msg}}
				</view>
			</i-input>
			<button class="bg-main text-white mt-3" @click="handleBinding">绑定</button>
		</view>
	</view>
</template>

<script>
	// import deepCopy from '@/utils/deepCopy'
	import {
		getCode,
		bindPhone
	} from '@/api/my'
	export default {
		data() {
			return {
				phone: '',
				code: '',
				msg: '发送',
				s: 0
			};
		},
		methods: {
			handleBack() {
				uni.switchTab({
					url: '/pages/my/my'
				})
			},
			resetForm() {
				this.phone = ''
				this.code = ''
			},
			// 获取验证码
			async handleSendPhoneNumber() {
				try {
					if (this.s > 0) return

					let timer = null
					const res = await getCode({
						phone: this.phone
					})
					// console.log(res);
					if (res.code === 20000) {
						uni.showToast({
							title: '验证码' + res.data,
							icon: "none"
						})
						this.code = String(res.data)
						this.s = 60
						timer = setInterval(() => {
							this.msg = `${this.s}s`
							this.s--
							if (this.s < 1) {
								clearInterval(timer)
								this.msg = '发送'
							}
						}, 1000)
					}
				} catch (e) {
					//TODO handle the exception
					console.log(e);
				}
			},
			// 绑定手机号
			async handleBinding() {
				console.log(666);
				uni.showLoading()
				try {
					const res = await bindPhone({
						phone: this.phone,
						code: this.code
					})
					console.log(res);
					if (res.code === 20000) {
						uni.switchTab({
							url: "/pages/my/my"
						})
					}
				} catch (e) {
					//TODO handle the exception
					console.log(e);
				} finally {
					uni.hideLoading()
				}
			}
		}
	}
</script>

<style lang="scss">
	.btn {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		border-radius: 0 10rpx 10rpx 0;
		font-size: 30rpx;
		width: 200rpx;
	}

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
	}
</style>
