<template>
	<view class="content classify_page">
		<scroll-view class="sort_scroll_wrap" scroll-y="true">

			<view class="classify-tab" :class="index == currentTab ? 'avtive':''" v-for="(item,index) in tabs" :key="index" @tap="changeTab(index)">
				{{item.name}}
			</view>

		</scroll-view>

		<scroll-view class="goods_scroll_wrap" scroll-y="true" @scrolltolower='loadmore'>
			<navigator class="goods_card_container" v-for="(item, index) in list" :key="index" :url="'/pages/goods_detail/goods_detail?id='+ item.id + '&field=' + field">
				<goodsCard :goodsinfo="item"  />
			</navigator>

			<loadMore :loadingType="loadingType" :contentText="contentText"></loadMore>
			<naData :nodata="nodata" :nodataText="nodataText"  :nodataImg='nodataImg'></naData>
		</scroll-view>
	</view>
</template>

<script>
	import loadMore from 'template/load_more.vue'
	import naData from 'template/no_data'
	import goodsCard from 'template/goods_card'
	export default {
		components: {
			goodsCard,
			loadMore,
			naData
		},
		data() {
			return {
				currentTab: 0,
				cat_id: 0,
				tabs: [],
				list: [],
				field: 0,
				page_size: 10,
				page_num: 1,
				nodata: false,
				nodataText: "",
				nodataImg:'/static/img/empty.png',
				loadingType: 0,
			}
		},
		onShareAppMessage(res) {
			if (res.from === 'button') {
				console.log(res.target)
			}
			return {
				title: '龙腾虎跃商城',
				path: '/pages/tabbar/tabbar-1/tabbar-1',
			}
		},
		onLoad() {
			this.gettabs()
			this.getList()
		},
		methods: {
			changeTab(index) {
				this.currentTab = index
				this.cat_id = this.tabs[index].id
				this.list = []
				this.getList(index)
			},
			//获取分类
			gettabs() {
				var that = this
				this.$api.get('/api/category/getCategory', {
					field: 0
				}, function(res) {
					if (res.data.code == 200) {
						var tabs = res.data.data
						tabs.unshift({
							name: '全部',
							id: 0
						})
						that.tabs = res.data.data
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
					}
				})
			},
			//获取对应分类商品
			getList(index) {
				var that = this
				this.nodata = false
				this.$api.get('/api/category/getGoodsByCategory', {
					field: 0,
					cat_id: this.cat_id,
					page_size: this.page_size,
					page_num: this.page_num
				}, function(res) {
					if (res.data.code == 200) {
						var oldList = that.list
						var list = res.data.data
						if (index) {
							that.list = res.data.data
							if (that.list.length == 0) {
								that.nodata = true
							}
						} else {
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
							}, 300)
						}

					}
				})
			},
			loadmore() {
				if (this.loadingType !== 0) {
					return;
				}
				this.loadingType = 1;
				this.page_num = this.page_num + 1
				console.log(this.page_num)
				this.getList()
			}

		}
	}
</script>

<style>
	page,
	.content,
	.classify_page {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.classify_page {
		display: flex;
		align-content: center;
		justify-content: space-between;
		border-top: solid 1upx #f4f5f7;
		box-sizing: border-box;
		/* position: fixed; */
	}

	.sort_scroll_wrap {
		width: 180upx;
		height: 100%;
		background-color: #f4f4f4;
	}

	.goods_scroll_wrap {
		height: 100%;
		flex: 2;
	}

	.classify-tab {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		font-size: 28upx;
		color: #222222;
	}

	.classify-tab.avtive {
		background-color: #fff;
	}

	.goods_card_container {
		padding: 20upx;
		border-bottom: solid 1upx #f4f5f7;
	}
	.nodata image{
		width: 96upx;
	}
</style>
