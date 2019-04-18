<template>
	<view>
		<block v-if="!nodata">
			<view class="list flex-con">
				<view class="list-item font-thin">头像</view>
				<view class="list-item font-thin item-name">昵称</view>
				<view class="list-item font-thin">消费额</view>
			</view>
			<view class="list flex-con" v-for="(item, index) in list" :key="index">
				<view class="list-item font-weg flex-con">
					<image :src="item.avatar" mode="widthFix"></image>
				</view>
				<view class="list-item font-weg item-name line-clamp-1">{{item.nickname}}</view>
				<view class="list-item font-weg">+{{item.pay_total}}</view>
			</view>

			<view class="bottom-menu fix-bottom">
				<view class="bottom-menu-con padding-content flex-con justify-bet">
					总金额<view>￥{{total}}</view>
				</view>
			</view>
		</block>
		<naData :nodata="nodata" :nodataText="nodataText"></naData>
		<loading :isLoading="isLoading"></loading>
	</view>
</template>

<script>
	import naData from 'template/no_data'
	import loading from 'template/loading'
	export default {
		components: {
			naData,
			loading
		},
		data() {
			return {
				list: [],
				total: 0,
				nodata: false,
				nodataText: '您还没有团队成员~',
				isLoading: false,
			};
		},
		onPullDownRefresh() {
			setTimeout(() => {
				this.list = []
				this.getList()
				uni.stopPullDownRefresh()
			}, 800);
		},
		onLoad(options) {
			this.showLoading()
			this.getList()
		},
		methods: {
			getList() {
				var that = this
				this.$api.get('/api/member/myGroup', {}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						that.total = res.data.data.total
						var list = res.data.data.list
						setTimeout(function() {
							if (list.length == 0) {
								that.nodata = true
							} else {
								that.list = list
							}
						}, 700)
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
				})
			},
			showLoading() {
				this.isLoading = true
				setTimeout(() => {
					this.isLoading = false
				}, 800);
			},
		}
	}
</script>

<style>
	page {
		background-color: #f8f8f8;
		padding-bottom: 98upx;
	}

	.list {
		border-bottom: solid 1upx #e6e6e6;
		background-color: #FFFFFF;
	}

	.list-item {
		height: 90upx;
		line-height: 90upx;
		flex: 1;
		text-align: center;
		font-size: 28upx;
		font-weight: 400;
		justify-content: center;
	}

	.list-item image {
		width: 64upx;
		height: 64upx;
		border-radius: 50%;
	}

	.item-name {
		flex: 2;
	}

	.font-weg {
		color: rgba(34, 34, 34, 1);
	}

	.font-thin {
		color: rgba(102, 102, 102, 1);
	}

	.bottom-menu {
		height: 98upx;
		width: 100%;
		background-color: #fff;
		border-top: solid 1upx #f4f5f7;
	}

	.bottom-menu-con {
		height: 100%;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(34, 34, 34, 1);

	}

	.bottom-menu-con view {
		font-size: 42upx;
		font-weight: 500;
		color: rgba(203, 14, 14, 1);
	}
</style>
