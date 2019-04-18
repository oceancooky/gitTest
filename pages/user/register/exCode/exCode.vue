<template>
	<view>
		<form @submit="formSubmit">
			<view class="padding-content menu">
				<view class="menu-name">邀请码:</view><input type="text" placeholder="请输入邀请码" name="code">

			</view>
			<button formType="submit" class="big-btn">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			formSubmit: function(e) {
				console.log(e)
				this.$api.get('/api/member/validateInviteCode', {
					code: e.detail.value.code
				}, function(res) {
					console.log(res)

					if (res.data.code != 200) {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
					} else {
						uni.showToast({
							title: res.data.msg,
						})
						setTimeout(function() {
							uni.navigateTo({
								url: '../register?id=' + res.data.data.user_id
							})
						}, 1000)

					}

				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #f4f4f4;
	}

	.menu {
		border: none;
		margin: 100upx 0 200upx 0;
		background-color: #FFFFFF;
	}

	.menu .menu-name {
		width: 130upx;
	}

	.menu input {
		flex: 2;
	}

	button {
		width: 50%;
	}
</style>
