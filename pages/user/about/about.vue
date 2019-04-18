<template>
	<view>
		<view class="padding-top20">
			<rich-text :nodes="Html"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Html: '',
				from: 0
			};
		},
		onLoad(options) {
			if (options.from) {
				this.from = options.from
				uni.setNavigationBarTitle({
					title: '用户协议'
				});
			}
			this.getInfo()
		},
		methods: {
			getInfo() {
				var that = this
				this.$api.get('/api/common/getContent', {}, function(res) {
					console.log(res)

					if (res.data.code == 200) {
						if (that.from == 0) {
							that.Html = that.formatImg(res.data.data.aboutUs)
						} else {
							that.Html = that.formatImg(res.data.data.privacyAgreement)
						}

					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
				})
			},
			//格式详情图片  宽度100%
			formatImg: function(html) {
				var newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
					var match = match.replace(/style=\"(.*)\"/gi, 'style="width: 100%;display: block;float: left;"');
					return match;
				});
				return newContent;
			},
		},
	}
</script>

<style>
	page {
		padding-bottom: 30upx;
	}
</style>
