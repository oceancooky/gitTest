<template>
	<view>
		<view class="top_tap">
			<view class="top_tap_item" :class="currentTab==index?'on':''" @tap='tabChange(index)' v-for="(item,index) in tabs"
			 :key="index">{{item.name}}
				<view class='line'></view>
			</view>
		</view>

		<view class="order-item" v-for="(item, index) in list" :key="index">
			<view class="order-item-goods">
				<goodsCard :goodsinfo="item" />
			</view>
			<view class="order-item-state padding-content flex-con justify-end">
				<view class="order-item-des flex-con" v-if="currentTab == 0">


					<text>订单号: {{item.order_no}}</text>
				</view>
				<view class="order-item-des flex-con" v-if="currentTab != 0">

					<image :src="item.type == 1?'/static/img/application_icon_exchange.png':'/static/img/application_icon_return.png'"
					 mode="widthFix"></image>
					{{item.type == 1?'换货申请':'退货申请'}}<text :class="item.status == 1?'order-afteron':'order-afteroff'">{{item.status_text}}</text>
				</view>
				<view class="order-item-btns flex-con justify-end">
					<button v-for="(subitem, idx) in item.btn" :key="idx" @tap="operate(item, index, subitem.operate)" class="cancel">{{subitem.status_text}}</button>
					<!-- <button v-if="currentTab == 0" open-type="contact" class="cancel">联系客服</button> -->
					<button v-if="currentTab == 0" @tap="applyAfter(item.enable_apply, item.order_goods_id)" class="cancel">申请售后</button>

				</view>
			</view>
		</view>

		<loadMore :loadingType="loadingType" :contentText="contentText"></loadMore>
		<naData :nodata="nodata" :nodataText="nodataText"></naData>
		<loading :isLoading="isLoading"></loading>

		<view class='mask' v-if='writeNo'>
			<view class='write_box'>
				<view class='write_box_title'>填写单号</view>

				<picker @change="bindPickerChange" :value="deliver_index" :range="company" :range-key="'freight_name'" class='delivery_picker'>
					<view class="picker">
						物流公司选择：{{company[deliver_index].freight_name}}
					</view>
				</picker>

				<!-- <input placeholder='填写物流公司'></input> -->
				<input placeholder='填写订单号' type='number' maxlength="20" @input="getDeliveryNo"></input>

				<view class='write_box_btn'>
					<view @tap='cancelWriteNo'>取消</view>
					<view @tap='submitWriteNo'>确定</view>
				</view>

			</view>

		</view>
	</view>
</template>

<script>
	import goodsCard from '../../../template/goods_card'
	import loadMore from 'template/load_more.vue'
	import naData from 'template/no_data'
	import loading from 'template/loading'
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
				tabs: [{
					name: '申请售后',
					url: '/api/aftersale/getEnableApply'
				}, {
					name: '处理中',
					url: '/api/aftersale/getApplying'
				}, {
					name: '申请记录',
					url: '/api/aftersale/getList'
				}],
				upDate:false,
				page_num: 1,
				page_size: 5,
				list: [],
				nodata: false,
				nodataText: "还没有相关订单哦~",
				loadingType: 0,
				company: [],
				writeNo: false,
				deliver_index: 0,
				deliveryNo: 0,
				afteId: 0,
				isLoading: false,
			};
		},
		onLoad() {
			this.showLoading()
			this.getList()
			this.getDeliveryCompany()
		},
		onShow() {
			if (this.upDate) {
				this.list = []
				this.getList()
			}
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
				setTimeout(() => {
					this.isLoading = false
				}, 800);
			},

			getList() {
				var that = this
				this.nodata = false
				this.$api.get(this.tabs[this.currentTab].url, {
					page_num: this.page_num,
					page_size: this.page_size,
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
			applyAfter(enable_apply, id) {
				if (enable_apply) {
					uni.navigateTo({
						url: 'apply/apply?id=' + id
					})
				} else {
					uni.showModal({
						title: '',
						content: '请先联系客服后再操作哦',
						showCancel:false,
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			},

			//操作
			operate(item, index, op) {
				console.log(item)
				var that = this
				this.afteId = item.id
				if (op == 'cancelApply') {
					uni.showModal({
						title: '确认取消申请吗?',
						confirmColor: '#e9101f',
						success: function(res) {
							if (res.confirm) {
								that.sendOP(item.id, index, op)
							}
						}
					})
				}
				if (op == 'writeDeliverNo') {
					that.writeNo = true

				}
				if (op == 'getDeliveryInfo') {
					uni.navigateTo({
						url: '../orders/logistics/logistics?from=1&id=' + item.id
					})
				}
			},

			//获取物流公司列表
			getDeliveryCompany: function() {
				var that = this;
				this.$api.get('/api/freight/getDeliveryCompany', null, function(res) {
					if (res.data.code == 200) {
						console.log(res)
						that.company = res.data.data
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
					}
				})
			},

			//选择器
			bindPickerChange: function(e) {
				this.deliver_index = e.detail.value
			},

			//获取输入的物流单号
			getDeliveryNo(e) {
				this.deliveryNo = e.detail.value
			},

			//取消填写物流单号
			cancelWriteNo() {
				this.deliver_index = 0
				this.writeNo = false
			},

			//发送操作请求
			sendOP(id, index, op) {
				var that = this
				this.$api.get('/api/aftersale/cancelApply', {
					aftersale_id: id
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						uni.showToast({
							title: "操作成功"
						})
						that.list = []
						that.page_num = 1
						that.getList()
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
				})
			},

			//提交售后物流信息
			submitWriteNo() {
				var that = this
				this.$api.post('/api/aftersale/writeDeliverNo', {
					aftersale_id: this.afteId,
					delivery_no: this.deliveryNo,
					delivery_company_id: this.company[this.deliver_index].id
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						uni.showToast({
							title: "操作成功"
						})
						that.writeNo = false
						that.list = []
						that.getList()
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F8F8F8;
	}

	.goods_card_price {
		opacity: 0;
	}

	.order-item-des {
		font-size: 24upx;
		color: #666666;
		font-weight: 500;
	}

	.order-item-des image {
		width: 28upx;
		height: auto;
		margin-right: 6upx;
	}

	.order-item-des text {
		margin-left: 10upx;
	}

	.order-item-btns {
		flex: 2;
	}

	.order-item-btns button {
		margin-right: 0;
	}

	.order-afteron {
		color: #CB0E0E;
	}

	.order-afteroff {
		color: #4483EB;
	}

	.mask {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.write_box {
		width: 80%;
		height: 400upx;
		background-color: #fff;
		border-radius: 6upx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.write_box_title {
		font-size: 30upx;
		color: #222;
		font-weight: bold;
		margin: 30upx auto;
		text-align: center;
	}

	.write_box input {
		width: 80%;
		height: 70upx;
		font-size: 28upx;
		margin: 20upx auto;
		border: solid 1upx #cdcdcd;
		border-radius: 6upx;
		padding-left: 20upx;
	}

	.write_box_btn {
		width: 100%;
		height: 100upx;
		display: flex;
		position: absolute;
		bottom: 0;
		border-top: solid 1upx #e6e6e6;
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

	.write_box_btn view:first-child {
		border-right: solid 1upx rgba(230, 230, 230, 0.5);
	}

	.write_box_btn view:last-child {
		border-left: solid 1upx rgba(230, 230, 230, 0.5);
	}

	.delivery_picker {
		margin: 20upx 48upx;
		font-size: 28upx;
		padding: 15upx 20upx;
		border: 1upx solid #cdcdcd;
		border-radius: 6upx;
	}
</style>
