<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="(v,i) in data" :key="i" class="px-2 s-item">
				<image :src="v.src" class="rounded banner-img"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: "i-swiper",
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
	.s-item {
		box-sizing: border-box;
	}

	.banner-img {
		width: 100%;
		height: 100%;
	}
</style>
