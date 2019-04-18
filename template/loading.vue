<template>
	<view class="loader" v-if="isLoading">
		<view class="loader-inner pacman">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "loading",
		props: {
			isLoading: Boolean,
		},
		data() {
			return {}
		}
	}
</script>

<style>
	.loader {
		box-sizing: border-box;
		display: flex;
		flex: 0 1 auto;
		flex-direction: column;
		flex-grow: 1;
		flex-shrink: 0;
		flex-basis: 25%;
		width: 200upx;
		height: 200upx;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 1;
	}

	@-webkit-keyframes rotate_pacman_half_up {
		0% {
			-webkit-transform: rotate(270deg);
			transform: rotate(270deg);
		}

		50% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}

		100% {
			-webkit-transform: rotate(270deg);
			transform: rotate(270deg);
		}
	}

	@keyframes rotate_pacman_half_up {
		0% {
			-webkit-transform: rotate(270deg);
			transform: rotate(270deg);
		}

		50% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}

		100% {
			-webkit-transform: rotate(270deg);
			transform: rotate(270deg);
		}
	}

	@-webkit-keyframes rotate_pacman_half_down {
		0% {
			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
		}

		50% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
		}
	}

	@keyframes rotate_pacman_half_down {
		0% {
			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
		}

		50% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
		}
	}

	@-webkit-keyframes pacman-balls {
		75% {
			opacity: 0.7;
		}

		100% {
			-webkit-transform: translate(-100upx, -6.25upx);
			transform: translate(-100upx, -6.25upx);
		}
	}

	@keyframes pacman-balls {
		75% {
			opacity: 0.7;
		}

		100% {
			-webkit-transform: translate(-100upx, -6.25upx);
			transform: translate(-100upx, -6.25upx);
		}
	}

	.pacman {
		position: relative;
	}

	.pacman>view:nth-child(2) {
		-webkit-animation: pacman-balls 1s 0s infinite linear;
		animation: pacman-balls 1s 0s infinite linear;
	}

	.pacman>view:nth-child(3) {
		-webkit-animation: pacman-balls 1s 0.33s infinite linear;
		animation: pacman-balls 1s 0.33s infinite linear;
	}

	.pacman>view:nth-child(4) {
		-webkit-animation: pacman-balls 1s 0.66s infinite linear;
		animation: pacman-balls 1s 0.66s infinite linear;
	}

	.pacman>view:nth-child(5) {
		-webkit-animation: pacman-balls 1s 0.99s infinite linear;
		animation: pacman-balls 1s 0.99s infinite linear;
	}

	.pacman>view:first-of-type {
		width: 0upx;
		height: 0upx;
		border-right: 25upx solid transparent;
		border-top: 25upx solid #999;
		border-left: 25upx solid #999;
		border-bottom: 25upx solid #999;
		border-radius: 25upx;
		-webkit-animation: rotate_pacman_half_up 0.5s 0s infinite;
		animation: rotate_pacman_half_up 0.5s 0s infinite;
	}

	.pacman>view:nth-child(2) {
		width: 0upx;
		height: 0upx;
		border-right: 25upx solid transparent;
		border-top: 25upx solid #999;
		border-left: 25upx solid #999;
		border-bottom: 25upx solid #999;
		border-radius: 25upx;
		-webkit-animation: rotate_pacman_half_down 0.5s 0s infinite;
		animation: rotate_pacman_half_down 0.5s 0s infinite;
		margin-top: -50upx;
	}

	.pacman>view:nth-child(3),
	.pacman>view:nth-child(4),
	.pacman>view:nth-child(5),
	.pacman>view:nth-child(6) {
		background-color: #999;
		width: 15upx;
		height: 15upx;
		border-radius: 100%;
		margin: 2upx;
		width: 10upx;
		height: 10upx;
		position: absolute;
		-webkit-transform: translate(0, -6.25upx);
		-ms-transform: translate(0, -6.25upx);
		transform: translate(0, -6.25upx);
		top: 25upx;
		left: 100upx;
	}
</style>
