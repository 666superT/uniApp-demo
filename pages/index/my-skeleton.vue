<template>
	<view>
		<view class="p-2">
			<i-skeleton width="100%" heigth="80rpx"></i-skeleton>
		</view>
		<view class="px-2">
			<i-skeleton width="100%" heigth="300rpx"></i-skeleton>
		</view>
		<view class="flex justify-center flex-wrap w-100 pt-1">
			<view class="flex flex-column align-center" style="width: 25%;" v-for="v in 8" :key="v">
				<i-skeleton width="72rpx" heigth="72rpx" OClass="my-2" circle></i-skeleton>
				<i-skeleton width="72rpx" heigth="32rpx"></i-skeleton>
			</view>
		</view>
		<view class="mt-5 flex justify-between px-2">
			<i-skeleton width="50%" heigth="100rpx" OClass="mr-2"></i-skeleton>
			<i-skeleton width="50%" heigth="100rpx"></i-skeleton>
		</view>
		<view class="mt-5 px-2">
			<i-skeleton width="100rpx" heigth="50rpx"></i-skeleton>
		</view>
		<view class="mt-5 flex justify-between px-2">
			<i-skeleton width="300rpx" heigth="180rpx"></i-skeleton>
			<view>
				<i-skeleton width="380rpx" heigth="40rpx"></i-skeleton>
				<i-skeleton width="200rpx" heigth="30rpx" OClass="my-2"></i-skeleton>
				<i-skeleton width="250rpx" heigth="50rpx"></i-skeleton>
			</view>
		</view>
	</view>
</template>
