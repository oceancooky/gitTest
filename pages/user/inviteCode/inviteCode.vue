<template>
	<view>
		<view class="code-box">
			<view class="code-title">邀请码</view>
			<view class="code-num">{{userInfo.member.invite_code}}</view>
			<button class="code-copy" @tap="copyCode">复制</button>
			<image :src="userInfo.member.qrcode" mode="widthFix" class="code-img"></image>

			<view class="divide-line">
				<view></view>
			</view>
		</view>

		<view class="share-btn flex-con justify-bet">
			<button @tap="isAllowSave">保存二维码</button>
			<button open-type="share">分享好友</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				userInfo:{},
			};
		},

		//分享
		onShareAppMessage(res) {
			return {
				title: this.userInfo.nickname + '邀您注册龙腾虎跃会员啦',
				path: '/pages/tabbar/tabbar-1/tabbar-1?user_id=' + this.$store.state.globalData.userInfo.id,
				imageUrl: '/static/img/logo.png'
			}
		},
		onLoad() {
			this.userInfo = this.$store.state.globalData.userInfo
		},
		methods: {
			//复制邀请码
			copyCode() {
				uni.setClipboardData({
					data: this.userInfo.member.invite_code,
					success: function() {
						uni.showToast({
							title: "已复制",
						})
					}
				});
			},

			//保存图片
			saveImg() {
				var that = this
				uni.downloadFile({
					url: this.userInfo.member.qrcode,
					success: function(res) {
						console.log(res)
						var savedFilePath = res.tempFilePath
						uni.saveImageToPhotosAlbum({
							filePath: savedFilePath,
							success: function() {
								uni.showToast({
									title: '保存成功',
								})
							},
							fail: function(res) {
								console.log(res)
							}
						})
					}
				})
			},

			//判断是否授权
			isAllowSave: function() {
				var that = this
				this.$api.isAuthorize('scope.writePhotosAlbum', function(res) {
					console.log(res)
					that.saveImg()
				})
			},
		}
	}
</script>

<style>
	page {
		background: linear-gradient(0deg, rgba(255, 48, 0, 1), rgba(250, 64, 89, 1));
	}

	.code-box {
		background-color: #FFFFFF;
		width: 620upx;
		height: 734upx;
		position: absolute;
		left: 50%;
		top: 10%;
		transform: translateX(-50%);
		overflow: hidden;
		border-radius: 10upx;
		text-align: center;
	}

	.share-btn {
		position: absolute;
		left: 50%;
		bottom: 10%;
		transform: translateX(-50%);
		width: 620upx;
	}

	.share-btn button {
		width: 280upx;
		height: 88upx;
		line-height: 88upx;
		background: linear-gradient(-45deg, rgba(255, 180, 0, 1), rgba(255, 194, 48, 1));
		border-radius: 44upx;
		font-size: 30upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(219, 33, 39, 1);
	}

	.divide-line {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 48upx;
		display: flex;
	}

	.divide-line::after {
		content: '';
		position: absolute;
		right: -24upx;
		top: 0;
		width: 48upx;
		height: 48upx;
		border-radius: 48upx;
		background-color: #fc3a35;
	}

	.divide-line::before {
		content: '';
		position: absolute;
		left: -24upx;
		top: 0;
		width: 48upx;
		height: 48upx;
		border-radius: 48upx;
		background-color: #fc3a35;

	}

	.divide-line view {
		position: absolute;
		left: 0;
		top: 50%;
		width: 100%;
		height: 1upx;
		border-top: dashed 2upx #fc3a35;
	}

	.code-title {
		font-size: 30upx;
		font-weight: 400;
		color: rgba(253, 96, 117, 1);
		margin: 40upx 0 30upx 0;
	}

	.code-num {
		font-size: 100upx;
		font-weight: 400;
		color: rgba(249, 42, 120, 1);
	}

	.code-copy {
		width: 114upx;
		height: 50upx;
		line-height: 50upx;
		line-height: 44upx;
		background: linear-gradient(-45deg, rgba(255, 180, 0, 1), rgba(255, 194, 48, 1));
		border-radius: 8upx;
		color: #FFFFFF;
		font-size: 28upx;
		padding: 0;
		margin-top: 30upx;
	}

	.code-img {
		width: 280upx;
		height: auto;
		margin-top: 80upx;
	}
</style>
