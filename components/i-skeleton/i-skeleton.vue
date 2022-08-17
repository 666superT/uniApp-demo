<template>
	<view class="skeleton rounded animate__animated animate__ animate__infinite animate__pulse" :class="getClass"
		:style="getStyle"></view>
</template>

<script>
	export default {
		name: "i-skeleton",
		props: {
			OClass: {
				type: String,
				default: ''
			},
			circle: Boolean,
			width: {
				type: [Number, String],
				default: 0
			},
			heigth: {
				type: [Number, String],
				default: 0
			}
		},
		computed: {
			getClass() {
				let c = ''
				if (this.circle) {
					c += 'rounded-circle'
				}
				return `${c} ${this.OClass}`
			},
			getStyle() {
				return `height:${this.heigth};width:${this.width};`
			}
		}
	}
</script>

<style lang="scss">
	.skeleton {
		background: rgb(245, 245, 241);
	}
</style>
