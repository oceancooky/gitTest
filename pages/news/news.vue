<template>
	<view>
		<view class="article_title padding-top20">{{info.title}}</view>
		<view class="article_date padding-content">发表于 {{info.create_time_text}}</view>
		<view class="padding-top20">
			<rich-text :nodes="Html"></rich-text>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				Html: '',
				info: {},
			};
		},
		onLoad(options) {
			this.id = options.id
			this.getInfo()
		},
		methods: {
			getInfo() {
				var that = this
				this.$api.get('/api/notice/detail', {
					id: this.id
				}, function(res) {
					if (res.data.code == 200) {
						console.log(res)
						that.info = res.data.data
						that.Html = that.formatImg(res.data.data.content)
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
	.article_title {
		font-weight: bold;
		font-size: 36upx;
		color: #222;
	}

	.article_date {
		font-size: 26upx;
		color: #666;
		margin-bottom: 30upx;
	}

	page {
		padding-bottom: 30upx;
	}
</style>
