<template>
	<view>
		<view class="list padding-content flex-con" v-if="!nodata">
			<view class="list-item font-thin">类目</view>
			<view class="list-item font-thin">积分</view>
			<view class="list-item font-thin">日期</view>
		</view>
		<view class="list padding-content flex-con" v-for="(item, index) in list" :key="index">
			<view class="list-item font-weg line-clamp-1">{{item.event}}</view>
			<view class="list-item font-weg">{{item.amount}}</view>
			<view class="list-item font-thin">{{item.create_date}}</view>
		</view>

		<loadMore :loadingType="loadingType" :contentText="contentText"></loadMore>
		<naData :nodata="nodata" :nodataText="nodataText"></naData>
		<loading :isLoading="isLoading"></loading>
	</view>
</template>

<script>
	import loadMore from 'template/load_more.vue'
	import naData from 'template/no_data'
	import loading from 'template/loading'
	export default {
		components: {
			loadMore,
			naData,
			loading
		},
		data() {
			return {
				page_num: 1,
				page_size: 20,
				list: [],
				nodataText: '还没有记录哦~',
				nodata: false,
				loadingType: 0,
				isLoading: false,
			};
		},
		onLoad(options) {
			this.showLoading()
			this.getList()
		},

		onPullDownRefresh() {
			this.loadingType = 0
			setTimeout(() => {
				this.list = []
				this.page_num = 1
				this.getList()
				uni.stopPullDownRefresh()
			}, 800);
		},
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.loadingType = 1;
			var page_num = this.page_num
			this.page_num = this.page_num + 1
			console.log(this.page_num)
			this.getList()

		},
		methods: {
			getList() {
				var that = this
				this.nodata = false
				this.$api.get('/api/finance/pointLog', {
					type: 2,
					page_num: this.page_num,
					page_size: this.page_size
				}, function(res) {
					if (res.data.code == 200) {
						var oldList = that.list
						var list = res.data.data
						setTimeout(function(res) {
							if (oldList.length == 0) {
								that.loadingType = 0;
								if (list.length <= 0) {
									that.nodata = true
								} else {
									that.list = list
								}
							} else {
								if (list.length <= 0) {
									that.loadingType = 2;
								} else {
									that.loadingType = 0;
									that.list = oldList.concat(list)
								}
							}
						}, 800)
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
					console.log(res)
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
	.list {
		border-bottom: solid 1upx #e6e6e6;
	}

	.list-item {
		height: 90upx;
		line-height: 90upx;
		flex: 1;
		text-align: center;
		font-size: 28upx;
		font-weight: 400;
	}

	.font-weg {
		color: rgba(34, 34, 34, 1);
	}

	.font-thin {
		color: rgba(102, 102, 102, 1);
	}
</style>
