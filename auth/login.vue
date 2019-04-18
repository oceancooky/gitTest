<!--用户授权 start  -->
<template name='auth'>
	<view class='login_confirm_wrap' v-if="showmask">
		<view class='login_confirm_box flex-con-col'>
			<image src='/static/img/logo.png' class="login-logo" mode="widthFix"></image>
			<button class='login_confirm_btn' open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="bindGetUserInfo">
				<text>授权登录</text>
			</button>
		</view>
	</view>
</template>

<script>
	import auth from './auth.js'
	export default {
		name: 'login',
		props: {
			showmask: Boolean,
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			auth()
		},
		methods: {

		}
	}
</script>

<style>
	.login_confirm_wrap {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}

	.login_confirm_box {
		width: 380upx;
		height: 380upx;
		background-color: #fff;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		border-radius: 10upx;
		text-align: center;
		overflow: hidden;
		padding: 30upx;
	}

	.login_confirm_btn {
		height: 60upx;
		background-color: #ebc38a;
		outline: none;
		border: 0;
		color: #fff;
		font-size: 24upx;
		border-radius: 30upx;
		width: 200upx;
		margin-top: 50upx;
	}

	.login-title {
		height: 35%;
		font-size: 32upx;
	}

	.login_confirm_motto {
		height: 35%;
		font-size: 26upx;
	}
	.login-logo{
		width: 150upx;
		height: auto;
		/* border-radius: 50%; */
		border-radius: 6upx;
	}
</style>
