<template>
	<view>
		<view class="search-wrap active fix-top flex-con">
			<view class="search-box padding-content flex-con">
				<image src="/static/img/com_search.png" alt="" mode='widthFix'></image><input type="text" placeholder="请输入您想要的商品"
				 @confirm='getSearch' confirm-type="search" :value="keywords" @focus='isSearch' focus="true">
			</view>
		</view>

		<block v-if='showHot'>
			<view class="zone_title flex-con">
				<image src="/static/img/search_hot.png" alt="" mode="widthFix"></image>
			</view>

			<view class="goods_wrap">
				<view class="" v-for="(item, index) in HotsaleGoods" :key="index">
					<goods :goodsinfo="item" :field="field" />
				</view>
			</view>
		</block>

		<!-- <block v-if="!isSearching">
			<view class="">
				<view class="padding-content martop20 search-placeholder">
					<view class="search-title martop20 font-bold flex-con justify-bet">搜索记录 <view class="delete-btn" @tap="removeSearchCache"></view>
					</view>
					<view class="noCache" v-if="searchCache.length == 0">无</view>
					<view class="search-item martop20" v-for="(item, index) in searchCache" :key="index" @tap="getSearch(item)">
						{{item}}
					</view>
				</view>
			</view>

			<view v-if="isVip">
				<view class="padding-content martop20">
					<view class="search-title martop20 font-bold">热门搜索</view>
					<view class="search-item martop20" v-for="(item, index) in HotsaleGoods" :key="index" @tap="getSearch(item.name)">
						{{item.name}}
					</view>
				</view>
			</view>
		</block> -->

		<view class="goods_wrap" :class="{martop20:list.length>0}">
			<view class="" v-for="(item, index) in list" :key="index">
				<goods :goodsinfo="item" :field="field" />
			</view>
		</view>

		<view class='toTop' :class="{active:backTopValue}" @tap='backTop'>
			<image src='/static/img/top.png'></image>
		</view>

		<loadMore :loadingType="loadingType" :contentText="contentText"></loadMore>
		<naData :nodata="nodata" :nodataText="nodataText"></naData>
		<loading :isLoading="isLoading"></loading>
	</view>
</template>

<script>
	import goods from 'template/goods'
	import loadMore from 'template/load_more.vue'
	import naData from 'template/no_data'
	import loading from 'template/loading'
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		components: {
			goods,
			loadMore,
			naData,
			loading
		},
		computed: mapState(['globalData']),
		data() {
			return {
				HotsaleGoods: [],
				showHot: true,
				page_num: 1,
				page_size: 5,
				list: [],
				nodata: false,
				nodataText: "当前没有相关商品~",
				loadingType: 0,
				field: 0,
				keywords: '',
				isLoading: false,
				backTopValue: false,
				isSearching: false,
				searchCache: [],
				isVip: false
			};
		},
		// 监听滚动条坐标
		onPageScroll: function(e) {
			var scrollTop = e.scrollTop
			var backTopValue = scrollTop > 400 ? true : false
			this.backTopValue = backTopValue

		},

		onPullDownRefresh() {
			console.log(this.keywords)
			if (this.keywords != '') {
				this.loadingType = 0
				setTimeout(() => {
					this.list = []
					this.page_num = 1
					this.getList()
					uni.stopPullDownRefresh()
				}, 800);
			}
		},
		onReachBottom() {
			if (this.keywords != '') {
				if (this.loadingType !== 0) {
					return;
				}
				this.loadingType = 1;
				var page_num = this.page_num
				this.page_num = this.page_num + 1
				console.log(this.page_num)
				this.getList()
			}

		},
		onLoad() {
			this.getCache()
			if (this.$store.state.globalData.userInfo.is_member) {
				this.isVip = true
				this.getHotsaleGoods()
			}
		},
		methods: {
			showLoading() {
				this.isLoading = true
				setTimeout(() => {
					this.isLoading = false
				}, 800);
			},
			//获取搜索历史
			getCache() {
				var search = uni.getStorageSync('searchCache')
				if (search) {
					this.searchCache = search
				} else {
					this.searchCache = []
				}
			},
			//搜索记录存入缓存
			putCache(keyword) {
				var search = this.searchCache
				search.unshift(keyword)
				var temp = []; //一个新的临时数组去重
				for (var i = 0; i < search.length; i++) {
					if (temp.indexOf(search[i]) == -1) {
						temp.push(search[i]);
					}
				}
				uni.setStorage({
					key: "searchCache",
					data: temp
				})
			},

			//清除搜索记录
			removeSearchCache() {
				uni.removeStorageSync('searchCache')
				this.getCache()
			},

			//是否显示搜索记录与热门
			isSearch() {
				this.isSearching = false
				this.nodata = false
				this.list = []
				this.getCache()
			},

			//获取热门搜索
			getHotsaleGoods() {
				var that = this
				
				this.$api.get('/api/index/getHotSearch', {}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						that.HotsaleGoods = res.data.data
					}
				})
			},

			//获取关键词
			getSearch(e) {
				console.log(e)
				this.keywords = e.target ? e.target.value : e
				this.showLoading()
				// this.list = []
				this.getList()
				this.nodata = false
				this.isSearching = true
			},

			//获取搜索结果
			getList() {
				var that = this
				this.nodata = false
				this.showHot = false
				this.putCache(this.keywords) //写入缓存
				this.$api.get('/api/index/searchGoods', {
					keywords: this.keywords,
					page_size: 8,
					page_num: 1
				}, function(res) {
					console.log(res)
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
					}
				})
			}
		}
	}
</script>

<style>
	page {
		padding-top: 100upx;
		background-color: #f4f4f4;
	}

	/* .search-wrap {
		width: 100%;
		background-color: #FFFFFF;
	}

	.search-box {
		width: 690upx;
		height: 64upx;
		margin: 16upx auto;
		border-radius: 32upx;
		background-color: #f4f4f4;
		font-size: 24upx;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		box-sizing: border-box;
	}

	.search-box image {
		width: 25upx;
		height: auto;
		margin-right: 13upx;
	}

	.search-box input {
		flex: 2;
	} */

		.zone_title {
		width: 100%;
		height: 100upx;
		justify-content: center;
		position: relative;
		background-color: #f4f4f4;
	}

	.zone_title image {
		height: 100%;
		width: 174upx;
	}

	.search-title {
		font-size: 26rpx;
		color: rgba(51, 51, 51, 1);
		clear: both;
	}

	.search-item {
		height: 50upx;
		line-height: 50upx;
		border-radius: 50upx;
		padding: 0 30upx;
		font-size: 22rpx;
		background-color: #e2e2e2;
		color: rgba(51, 51, 51, 1);
		margin-right: 20upx;
		float: left;

	}

	.noCache {
		font-size: 24upx;
		color: #999;
		margin: 10upx 0 0 30upx;
	}

	.search-placeholder {
		overflow: hidden;
	}

	.delete-btn {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADT0lEQVRoQ+1ZS2hTQRQ91/w23QgViq21i4IbF9WiUNe6SW0y01IpShcu1IWurAt3/kAQPyhUBN34qxYKuZMXSrYVFyKIKCLqqvgBUZHiDzVN3siUCZQ2aSZNTSi82eTx3rmfM/fOnZkbwioftMr9R0Cg0REMIrDqI5BIJDaFQqFrWusdRBSrgtAfAPuZebwKmUXQmlKot7d3bTQafQNg3TKd8H3f70qn0y+WKV9bFZJSHgNw3hof11obMhUHEXUC2GeAWutTSqmTFYXKAGqKgJRyFMBhozufz2/MZDLvXByJx+MtsVjso8XeYOaDLnKlMOUIrJFSHtVaNy2lmIjiALbZmbwM4JujI01ENGKxT7XWmaXktNa5XC43ms1mvy/ElSRgnAdw0dGZusB83z+eTqfPORFIJpM7iShLROG6eOdmZICZU04EDKi/v7/N932z2OYGEbUAuG/TxYT8kptdZ9QIEe02aN/3h4joU1HS9/2fnuc9qWYNLMIKITqIaNoSuK6UOuTsmgNQSnkdwAE7WR2pVOqtg5h7GQ0IVJjOIAKV8q1cCkkp+wGMaa3PKqXOFPWYzSoajT4y66ZQKCQ9z/tR/CaEuAlgFxHtZeYH5n3DIiClVACSpngwc8T8WoeGilULwB5mnrAEzCZZsM8pZh5oKAEhxKTdkTEzMxOZmprKG4eEEMNEdNtWrWGl1F3z3N3dHWlvb89ZApPMPFc6GxaBgEAQgUrlx34vV4WCFApSKEihYB8INjKnVRCU0eAsVDpRnBtbS6TQBdPj0Vo/U0ptmXfm305EjwH8BtDDzM/nfZsmog4AJ5j5dENPo+Z43Nra2hMKhV4y89f58ySE6CKiv8z8av77RCKxHkCn53kPTXexoQScKoAD6L/fB/r6+prD4fAX64vHzOYWtmJDCOERUZ9V2LwwmuUMOa8BG+b3ANpMXufz+a2ZTOb1SjCQUprr5y0AUQAfmHmDq95qCZhOtOlIm7b4LwDmyvjZ1VgpHBF12Tt18fMRZr7qqrMqAkapEGLMdBNcDVSD01rfU0rN/W/gOqomMDg4GJqdnTUXdtMe3+xqaCmcKcEArkQikTsTExPFjoWT6qoJOGmtIyggUMfJLmkqiEAQgRpn4B8OPTheJPUHxwAAAABJRU5ErkJggg==');
	}
</style>
