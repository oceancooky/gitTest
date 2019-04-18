<template>
	<view>
		<scroll-view scroll-x scroll-with-animation="true">
			<view class="top_tap" v-if="tabs.length>0" :class="tabs.length<6?'tabflex':''">
				<view class="top_tap_item" :class="currentTab==index?'on':''" v-for="(item, index) in tabs" :key="index" @tap='tabChange(index)'>{{item.name}}
				</view>
			</view>
		</scroll-view>

		<view class="goods_wrap" :class="{martop20:tabs.length==0}">
			<view class="" v-for="(item, index) in list" :key="index">
				<goods :goodsinfo="item" :field="field" />
			</view>
		</view>

		<loadMore :loadingType="loadingType" :contentText="contentText"></loadMore>

		<naData :nodata="nodata" :nodataText="nodataText"></naData>

		<view class='toTop' :class="{active:backTopValue}" @tap='backTop'>
			<image src='/static/img/top.png'></image>
		</view>

		<loading :isLoading="isLoading"></loading>
	</view>
</template>

<script>
	import goods from 'template/goods'
	import loadMore from 'template/load_more'
	import loading from 'template/loading'
	import naData from 'template/no_data'
	export default {
		components: {
			goods,
			loadMore,
			naData,
			loading
		},
		data() {
			return {
				currentTab: 0,
				cat_id: 0,
				field: 0,
				tabs: [],
				list: [],
				nodata: false,
				nodataText: "当前分类还没有商品哦~",
				loadingType: 0,
				page_num: 1,
				page_size: 8,
				backTopValue: false,
				isLoading: false,
				delyTime: 800
			};
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
			this.delyTime = 800
			this.loadingType = 1;
			this.page_num = this.page_num + 1
			console.log(this.page_num)
			this.getList()

		},
		// 监听滚动条坐标
		onPageScroll: function(e) {
			var scrollTop = e.scrollTop
			var backTopValue = scrollTop > 400 ? true : false
			this.backTopValue = backTopValue

		},
		onLoad(options) {
			this.field = options.field
			var pagetitle = ''
			if (options.field == 0) {
				pagetitle = '热卖专区'
			} else if (options.field == 1) {
				pagetitle = '购物商城'
			} else {
				pagetitle = '积分商城'
			}
			uni.setNavigationBarTitle({
				title: pagetitle
			});

			this.showLoading()
			this.gettabs()
			this.getList()
		},
		methods: {

			//分类切换
			tabChange(index) {
				this.currentTab = index
				this.cat_id = this.tabs[index].id
				this.loadingType = 0;
				this.page_num = 1
				this.list = []
				this.delyTime = 0
				// this.showLoading()
				this.getList()
			},

			showLoading() {
				this.isLoading = true
				setTimeout(() => {
					this.isLoading = false
				}, 800);
			},

			//获取分类
			gettabs() {
				var that = this
				this.$api.get('/api/category/getCategory', {
					field: this.field
				}, function(res) {
					if (res.data.code == 200) {
						var tabs = res.data.data
						if (tabs.length > 0) {
							tabs.unshift({
								name: '全部',
								id: 0
							})
						}

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
			getList() {
				var that = this
				this.nodata = false
				this.$api.get('/api/category/getGoodsByCategory', {
					field: this.field,
					cat_id: this.cat_id,
					page_size: this.page_size,
					page_num: this.page_num,
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
						}, that.delyTime)
					}
				})
			},
			// 滚动到顶部
			backTop: function() {
				// 控制滚动
				uni.pageScrollTo({
					scrollTop: 0
				})
			},
		}
	}
</script>

<style>
	page,
	.top_tap {
		background-color: #f4f4f4;

	}

	.top_tap {
		display: block;
		white-space: nowrap;
	}

	.top_tap .top_tap_item {
		padding: 0 40upx;
		display: inline-block;
	}

	.tabflex {
		display: flex;
	}

	.tabflex .top_tap_item {
		padding: 0;
	}
</style>
