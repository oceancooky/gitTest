<template>
	<view>
		<view class="top_tap">
			<view class="top_tap_item" :class="currentTab==index?'on':''" @tap='tabChange(index)' v-for="(item,index) in tabs"
			 :key="index">{{item}}
				<view class='line'></view>
			</view>
		</view>

		<view class="order-item" v-for="(item, index) in list" :key="index">
			<navigator :url="'order-detail/order-detail?id='+item.id">
				<view class="order-item-state padding-content flex-con justify-bet">{{item.create_time_text}}
					<view class="order-item-text">{{item.operable.status_text}}</view>
				</view>
				<view class="order-item-goods">
					<goodsCard :goodsinfo="goodsitem" v-for="(goodsitem, goodsidx) in item.goods_info" :key="goodsidx" />
				</view>
			</navigator>
			<view class="order-item-state padding-content flex-con justify-bet">
				<view class="order-item-cost flex-con">{{item.pay_status?'实付款: ':'应付款: '}}
					<view>￥{{item.pay_status?item.pay_amount:item.order_amount}}</view>
				</view>
				<view class="order-item-btns flex-con">
					<button v-for="(subitem, idx) in item.operable.btn" :class="{confirm:subitem.operate=='pay' || subitem.operate=='confirm'}"
					 :key="idx" @tap="operate(item.id, index, subitem.operate)">{{subitem.name}}</button>
				</view>
			</view>
		</view>

		<view class="popup" @touchmove.stop.prevent="moveHandle" v-if="popUp" @tap="hidePop"></view>
		<view class="diyModal flex-con-col" v-if="popUp" @touchmove.stop.prevent="moveHandle">
			<view class="diyModal-title padding-content">已付款订单请联系客服取消~</view>

			<view class="diyModal-btn flex-con">
				<button @tap="hidePop">取消</button>
				<button open-type="contact">确定</button>
			</view>

		</view>

		<loadMore :loadingType="loadingType" :contentText="contentText"></loadMore>
		<loading :isLoading="isLoading"></loading>
		<naData :nodata="nodata" :nodataText="nodataText"></naData>
	</view>
</template>

<script>
	import loading from 'template/loading'
	import goodsCard from 'template/goods_card'
	import loadMore from 'template/load_more.vue'
	import naData from 'template/no_data'
	export default {
		components: {
			goodsCard,
			loadMore,
			naData,
			loading
		},
		data() {
			return {
				currentTab: 0,
				page_num: 1,
				page_size: 5,
				list: [],
				nodata: false,
				nodataText: "还没有相关订单哦~",
				tabs: ['全部', '待付款', '待发货', '待收货', '已完成'],
				loadingType: 0,
				upDate: false,
				popUp: false,
				isLoading: false,
			}
		},
		onLoad(options) {
			if (options.tabIndex) {
				var currentTab = Number(options.tabIndex) + 1
				this.currentTab = currentTab
			}
			this.showLoading()
			this.getList()
		},
		onShow() {
			if (this.upDate) {
				this.list = []
				this.getList()
			}
		},
		onHide() {
			this.popUp = false
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
			// tab栏的切换
			tabChange: function(index) {
				this.currentTab = index
				this.loadingType = 0;
				this.page_num = 1
				this.list = []
				this.showLoading()
				this.getList()
			},

			showLoading() {
				this.isLoading = true
				console.log(this.isLoading)
				setTimeout(() => {
					this.isLoading = false
					console.log(this.isLoading)
				}, 800);
			},

			getList() {
				var that = this
				this.nodata = false
				this.$api.get('/api/order/getList', {
					page_num: this.page_num,
					page_size: this.page_size,
					step: this.currentTab
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
			},

			//订单操作
			operate(id, index, op) {
				var that = this
				console.log(id, op)
				if (op == 'call_cancel') { //电话取消
					that.popUp = true
					// 					uni.makePhoneCall({
					// 						phoneNumber: '123456789'
					// 					})
				} else if (op == "pay") { //立即付款
					that.doPay(id, index)
				} else if (op == "invoice") { //查看发票
					that.scanInvoice(id, index)
				} else if (op == "cancel") { //直接取消
					uni.showModal({
						title: '确认取消订单吗?',
						confirmColor: '#e9101f',
						success: function(res) {
							if (res.confirm) {
								that.sendOP(id, index, op)
							}
						}
					})
				} else if (op == "delete" || op == "remove") {
					uni.showModal({
						title: '确认删除订单吗?',
						confirmColor: '#e9101f',
						success: function(res) {
							if (res.confirm) {
								that.sendOP(id, index, op)
							}
						}
					})
				} else if (op == "reset") {
					// that.doPay(id, index)
					that.sendOP(id, index, op)
				} else if (op == "again") {
					that.sendOP(id, index, op)
				} else if (op == "delivery") {
					uni.navigateTo({
						url: 'logistics/logistics?id=' + id
					})
				} else if (op == "confirm") {
					uni.showModal({
						title: '确认收货吗?',
						confirmColor: '#e9101f',
						success: function(res) {
							if (res.confirm) {
								that.sendOP(id, index, op)
							}
						}
					})
				}
			},
			sendOP(id, index, op) {
				var that = this
				this.$api.get('/api/order/operate', {
					order_id: id,
					operate: op
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						uni.showToast({
							title: res.data.msg,
						})
						if (op == "again") {
							uni.switchTab({
								url: '/pages/tabbar/tabbar-3/tabbar-3'
							})
						} else if (op == "delete" || op == "remove") {
							var list = that.list
							list.splice(index, 1)
							that.list = list
						} else {
							that.renewRow(id, index)
						}

					} else {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
					}
				})
			},
			doPay: function(id, index) {
				var that = this
				this.$api.post('/api/miniprogram.payment/unifiedOrder', {
					order_id: id
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						var payObj = res.data.data;
						payObj.success = function() {
							uni.showToast({
								title: '支付成功!',
							})
							that.renewRow(id, index)
						}
						payObj.fail = function() {
							uni.showToast({
								title: '您取消了支付',
								icon: 'none'
							})
						}
						uni.requestPayment(payObj)
					}else{
						uni.showToast({
							title: res.data.msg,
							icon:'none'
						})
					}
				})
			},
			renewRow(id, index) {
				this.$api.get('/api/order/renewRow', {
					order_id: id
				}, (res) => {
					if (res.statusCode == 200) {
						var list = this.list;
						list[index] = res.data.data;
						this.list = []
						this.list = list
					}
				})
			},
			hidePop() {
				this.popUp = false
			},

			//查看发票
			scanInvoice(id, index) {
				var filePath = []
				filePath[0] = this.list[index].invoice_file_url
				uni.previewImage({
					current: filePath[0],
					urls: filePath
				});
			}
		}
	}
</script>

<style>
	page {
		background-color: #F8F8F8;
	}

	.goods_card {
		height: 150upx;
	}

	.goods_card_img {
		width: 150upx;
		height: 150upx;
	}

	.goods_card-price-r {
		color: #2A353A;
		font-size: 26upx;
	}

	.goods_card {
		margin-bottom: 20upx;
	}

	.order-item-goods .goods_card:last-child {
		margin-bottom: 0;
	}

	.write_box_btn view {
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30upx;
		color: #222;
		font-weight: bold;
	}
	.goods_card_info {
		padding: 8upx 0;
	}
</style>
