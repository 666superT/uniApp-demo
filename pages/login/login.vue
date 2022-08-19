<template>
	<view>
		<view class="login-head p-2">
			<uni-icons type="back" color="#fff" size="30" @click="handleBack"></uni-icons>
		</view>
		<view class="login-body p-5">
			<view class="title">{{filterLoginStatus}}</view>
			<i-input placeholder="请输入用户名" v-model="loginForm.username" icon="person"></i-input>
			<i-input placeholder="请输入密码" v-model="loginForm.password" icon="locked" type="password"></i-input>
			<i-input placeholder="请输入确认密码" v-model="loginForm.repassword" icon="locked" type="password"
				v-if="loginStatus==='register'"></i-input>
			<button :disabled='disabled' class="bg-main text-white mt-3"
				@click="handleLoginBtnEvent">{{filterLoginStatus}}</button>
			<view class="login-text my-5 flex justify-between">
				<view class="left text-main" @click="handleTriggerRegisterOrLogin">
					{{loginStatus==='login'?'注册账号':'去登录'}}
				</view>
				<view class="right">忘记密码?</view>
			</view>
			<view class="flex justify-center py-3">
				<view class="login-icon p-2 d-inline-block">
					<uni-icons type="weixin" color="#5ccc84" size="40"></uni-icons>
				</view>
			</view>
			<view class="flex justify-center py-3" v-if="loginStatus==='login'">
				<view class="login-foot flex align-center">
					<checkbox-group @change.capture='handleChangeCheckStatus'>
						<label>
							<checkbox :checked="checked" style="transform: scale(0.6);" class="mr-2" />
							<text class="login-foot-text">已阅读并同意用户协议&隐私声明</text>
						</label>
					</checkbox-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import deepCopy from '@/utils/deepCopy'
	import {
		currentStatus
	} from '@/config/currentStatus'
	import {
		register,
		login
	} from '@/api/my'
	export default {
		data() {
			return {
				checked: false,
				disabled: false,
				loginStatus: 'login',
				loginForm: {
					username: '',
					password: '',
					repassword: ''
				}
			};
		},
		methods: {
			handleBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleChangeCheckStatus() {
				this.checked = !this.checkedC
			},
			// 切换注册和登录
			handleTriggerRegisterOrLogin() {
				this.loginStatus = this.loginStatus === 'login' ? 'register' : 'login'
				// this.clumn = this.loginStatus === 'login' ? this.loginClumn : this.registerClumn
				// this.form = this.loginStatus === 'login' ? this.loginForm : this.registerForm
			},
			// 登录和注册
			handleLoginBtnEvent() {
				uni.showLoading({
					title: '提交中...',
					mask: false
				})
				this.loginStatus === 'login' ? this.handleLoginSubmit() : this.handleRegisterSubmit()
			},
			// 登录接口
			async handleLoginSubmit() {
				// let data = deepCopy(this.loginForm)
				if (!this.checked) {
					uni.showToast({
						title: '请先阅读并同意用户协议&隐私声明',
						icon: 'none'
					})
					return false
				}
				try {
					this.disabled = true
					let data = JSON.parse(JSON.stringify(this.loginForm))
					delete data.repassword
					const res = await login(data)
					console.log(res);
					if (res.code === 20000) {
						uni.showToast({
							title: '登录成功',
							icon: 'none'
						})
						this.$store.dispatch('setUserInfo', res)
						const phone = this.$store.state.user.phone
						if (phone) {
							uni.switchTab({
								url: "/pages/my/my"
							})
							return
						}
						this.$goTo.to('/pages/bindPhone/bindPhone')
					}
				} catch (e) {
					//TODO handle the exception
					console.log(e);
				} finally {
					uni.hideLoading()
					this.disabled = false
					// this.resetForm()
				}
			},
			// 注册接口
			async handleRegisterSubmit() {
				try {
					this.disabled = true
					let data = JSON.parse(JSON.stringify(this.loginForm))
					const res = await register(data)
					console.log(res);
					if (res.code === 20000) {
						uni.showToast({
							title: '注册成功',
							icon: 'none'
						})
						this.resetForm()
						this.loginStatus = 'login'
					}
				} catch (e) {
					//TODO handle the exception
					console.log(e);
				} finally {
					uni.hideLoading()
					this.disabled = false
					this.resetForm()
				}

			},
			resetForm() {
				this.loginForm = {
					username: '',
					password: '',
					repassword: ''
				}
			}
		},
		onLoad() {},
		computed: {
			filterLoginStatus() {
				return currentStatus[this.loginStatus]
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

		.checkbox {
			width: 44rpx;
			height: 44rpx;
		}

		.login-foot-text {
			font-size: 30rpx;
			color: #a9a5a0;
		}
	}
</style>
