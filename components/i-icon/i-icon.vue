<template>
	<view class="d-inline-block">
		<i :class="getIcon" :style="getColor+getSize"></i>
	</view>
</template>

<script>
	export default {
		name: "i-icon",
		props: {
			icon: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: ''
			},
			size: {
				type: String,
				default: ''
			},
		},
		data() {
			return {

			};
		},
		computed: {
			getIcon() {
				return `iconfont ${this.icon}`
			},
			getColor() {
				return `color:${this.color};`
			},
			getSize() {
				return `font-size:${this.size}px;`
			}
		}
	}
</script>

<style lang="scss">

</style>
