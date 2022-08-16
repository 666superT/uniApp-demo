<template>
	<view class="py-2">
		<view class="input-body flex px-3 align-center rounded">
			<uni-icons :type="icon" color="#000"></uni-icons>
			<input :type="type" :placeholder="placeholder" :value="value" @input="handleInpEvent" class="ml-3">
		</view>
	</view>
</template>

<script>
	export default {
		name: "i-input",
		props: {
			placeholder: {
				type: String,
				default: ''
			},
			value: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: ''
			},
			icon: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			};
		},
		methods:{
			handleInpEvent(e){
				this.$emit('input',e.target.value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input-body {
		background: #f5f5f5;
		height: 100rpx;
	}
</style>
