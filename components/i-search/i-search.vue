<template>
		<view class="search" @click="handlEvent">
			<view class="search-item rounded-lg">
				<uni-icons color="#928E8A" style='position: relative;top: 10px;' type="search" size="20"></uni-icons>
				<view class="title ml-1 py-2">
					请输入搜索关键词
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		name: "i-search",
		data() {
			return {

			};
		},
		methods:{
			handlEvent(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		padding: 20rpx;

		.search-item {
			display: flex;
			justify-content: center;
			background: #f5f5f1;
			color: #928e8a;
		}
	}
</style>
