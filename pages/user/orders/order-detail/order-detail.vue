<template>
	<view>
		<view class="padding-content flex-con-col order-state" :style="{backgroundColor:orderStatus[orderStatusNum].color}">
			<view class="order-state-title">{{orderStatus[orderStatusNum].title}}</view>
			<view class="order-state-subtitle">{{orderStatus[orderStatusNum].subtitle}}</view>
		</view>
		<view class="padding-content flex-con address" v-if="address.name">
			<view class="address-edit"></view>
			<view class="address-info">
				<view class="address-name flex-con">
					{{address.name}}
					<view class="address-phone">{{address.phone}}</view>
				</view>
				<view class="address-detail flex-con">{{address.address}}
				</view>
			</view>
		</view>

		<view class="content martop20 padding-content orders-goods-wrap">
			<view class="order-item-goods">
				<view v-for="(item, index) in order.goods_info" :key="index" @tap="isShowTip(2, item.field_id, item.field)">
					<goodsCard :goodsinfo="item" />
				</view>
			</view>
		</view>
		<view class="content padding-content menu menu-title remark">
			留言: <view>{{order.remark?order.remark:'无'}}</view>
		</view>

		<view class="content martop20 padding-top20">
			<view class="info-item flex-con justify-bet">商品金额<view>￥{{order.goods_total}}</view>
			</view>
			<view class="info-item flex-con justify-bet">支付方式<view><text>￥{{order.order_amount}}</text>
					<text v-if="order.coin_total>0">+{{order.coin_total}}购物币</text>
					<text v-if="order.point_total>0">+{{order.point_total}}积分</text></view>
			</view>
			<view class="info-item flex-con justify-bet">运费<view>￥{{order.freight}}</view>
			</view>
		</view>
		<view class="content padding-content menu menu-title goods-total">

			共{{order.goods_num}}件商品<view>合计：<text>￥{{order.order_amount}}</text>
				<text v-if="order.coin_total>0">+{{order.coin_total}}购物币</text>
				<text v-if="order.point_total>0">+{{order.point_total}}积分</text>
				<text v-if="order.freight>0">+{{order.freight}}运费</text>
			</view>

		</view>

		<view class="content martop20">
			<view class="padding-content menu menu-title">
				订单信息
			</view>
			<view class="padding-top20">
				<view class="info-item flex-con">订单编号:<view>{{order.order_no}}</view>
				</view>
				<view class="info-item flex-con">创建时间:<view>{{order.create_time_text}}</view>
				</view>
				<view class="info-item flex-con" v-if="order.pay_time_text">支付时间:<view>{{order.pay_time_text}}</view>
				</view>
			</view>
		</view>
		<view class='content padding-content contact'>
			<image src='/static/img/common_icon_call.png' mode='widthFix'></image>联系客服
			<button open-type="contact" v-if="customerOnline">1</button>
			<button @tap="isShowTip(1)" v-else></button>
		</view>
		<view class="content padding-content flex-con order-item-btns">
			<button v-for="(item, index) in btn" :class="{confirm:item.operate=='pay' || item.operate=='confirm'}" :key="index"
			 @tap="operate(item.operate)">{{item.name}}</button>
		</view>

		<view class='tip-wrap' v-if="showPop" @touchmove.stop.prevent="moveHandle">
			<view class='tip-box flex-con-col'>
				<view class="tip-title">{{tipContent}}</view>
				<button class='tip_confirm_btn' @tap='hidePop'>
					<text>我知道了</text>
				</button>
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

	</view>
</template>

<script>
	import goodsCard from '../../../../template/goods_card'
	export default {
		components: {
			goodsCard
		},
		data() {
			return {
				id: '',
				order: {},
				cost: '',
				address: {},
				btn: [],
				open_area: 0,
				customerOnline: true,
				tipContent: '',
				showPop: false,
				popUp: false,
				timer: {},
				orderStatusNum: 0,
				orderStatus: [{
						color: '#FFFFFF',
						title: '',
						subtitle: ''
					},
					{
						color: '#CB0E0E',
						title: '等待买家付款',
						subtitle: '订单将于 --:--:-- 后自动关闭'
					},
					{
						color: '#737A81',
						title: '交易关闭',
						subtitle: '用户已取消'
					},

					{
						color: '#28BC83',
						title: '交易成功',
						subtitle: '欢迎再次光临！'
					},
					{
						color: '#737A81',
						title: '交易关闭',
						subtitle: '系统关闭'
					},
					{
						color: '#4483EB',
						title: '卖家已发货',
						subtitle: '订单将于 --:--:-- 后自动收货'
					},
					{
						color: '#CB0E0E',
						title: '等待卖家发货',
						subtitle: '卖家正在处理订单,即将发货！'
					},
				]
			};
		},
		onLoad(options) {
			this.id = options.id
			this.getOrder()
		},
		onShow() {
			this.getCustomerTime()
		},
		onHide() {
			this.popUp = false
		},
		onUnload() {
			clearInterval(this.tiktok)
		},
		methods: {
			getOrder() {
				var that = this
				this.$api.get('/api/order/getRow', {
					order_id: this.id
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						var data = res.data.data
						that.order = data
						that.btn = data.operable.btn
						if (data.consignee_info) {
							that.address = data.consignee_info
						}
						that.orderState(data.order_status, data.pay_status, data.delivery_status)
					}
				})
			},

			//顶部颜色
			orderState(status, pay, delivery) {
				if (status > 1 && status < 5) {
					this.orderStatusNum = status
				}
				if (status == 0) {
					if (pay == 0 && delivery == 0) {
						this.orderStatusNum = 1
						if (this.order.pay_overtime) {
							this.getTimer(this.order.pay_overtime)
						} else {
							this.orderStatus[1].title = this.order.operable.status_text
							this.orderStatus[1].subtitle = ''
						}

					}
					if (pay == 1 && delivery == 0) {
						this.orderStatusNum = 6
					}
				}
				if (status == 1) {
					if (pay == 1 && delivery == 0) {
						this.orderStatusNum = 6
					}
					if (pay && delivery) {
						this.orderStatusNum = 5
						this.getTimer(this.order.delivery_overtime)
					}
				}
			},

			//订单操作
			operate(op) {
				var that = this
				console.log(op)
				if (op == 'call_cancel') { //电话取消
					that.popUp = true
				} else if (op == "pay") { //立即付款
					that.doPay()
				} else if (op == "invoice") { //查看发票
					that.scanInvoice()
				} else if (op == "cancel") { //直接取消
					uni.showModal({
						title: '确认取消订单吗?',
						confirmColor: '#e9101f',
						success: function(res) {
							if (res.confirm) {
								that.sendOP(op)
							}
						}
					})
				} else if (op == "delete" || op == "remove") {
					uni.showModal({
						title: '确认删除订单吗?',
						confirmColor: '#e9101f',
						success: function(res) {
							if (res.confirm) {
								that.sendOP(op)
							}
						}
					})
				} else if (op == "reset") {
					// that.doPay()
					that.sendOP(op)
				} else if (op == "again") {
					that.sendOP(op)
				} else if (op == "delivery") {
					uni.navigateTo({
						url: '../logistics/logistics?id=' + that.id
					})
				} else if (op == "confirm") {
					uni.showModal({
						title: '确认收货吗?',
						confirmColor: '#e9101f',
						success: function(res) {
							if (res.confirm) {
								that.sendOP(op)
							}
						}
					})
				}
			},
			sendOP(op) {
				var that = this
				this.$api.get('/api/order/operate', {
					order_id: this.id,
					operate: op
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						uni.showToast({
							title: res.data.msg,
						})
						if (op == "delete" || op == "remove") {
							return uni.navigateBack()
						}
						if (op == "again") {
							uni.switchTab({
								url: '/pages/tabbar/tabbar-3/tabbar-3'
							})
						}

						var pages = getCurrentPages();
						var prevPage = pages[pages.length - 2];
						prevPage.$vm.upDate = true
						// that.renewRow(id, index)
						that.getOrder()
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
					}
				})
			},
			doPay: function() {
				var that = this
				this.$api.post('/api/miniprogram.payment/unifiedOrder', {
					order_id: this.id
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						var payObj = res.data.data;
						payObj.success = function() {
							uni.showToast({
								title: '支付成功!',
							})
							that.getOrder()
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

			//客服是否在线
			getCustomerTime() {
				var that = this
				this.$api.get('/api/common/getContent', {}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						that.customerOnline = res.data.data.customer_online.flag
					}
				})
			},

			isShowTip(op, field_id, field) {
				if (op == 1) {
					if (!this.customerOnline) {
						this.tipContent = '当前不在工作时间范围内，请您晚点再来咨询呀~'
						this.showPop = true
					}

				} else {
					uni.navigateTo({
						url: '/pages/goods_detail/goods_detail?id=' + field_id + '&field=' + field
					})
				}
			},
			hidePop() {
				this.showPop = false
				this.popUp = false
			},

			godetail(field_id, field) {
				if (field != 0 && this.open_area != field) {
					uni.showToast({
						title: '当前专区未开放，您暂时还无法查看该商品',
						icon: 'none'
					})
				} else {
					uni.navigateTo({
						url: '/pages/goods_detail/goods_detail?id=' + field_id + '&field=' + field
					})
				}
			},

			//查看发票
			scanInvoice(id, index) {
				var filePath = []
				filePath[0] = this.order.invoice_file_url
				uni.previewImage({
					current: filePath[0],
					urls: filePath
				});
			},

			//计时器
			getTimer(endtime) {
				var that = this
				var timer = {}
				that.tiktok = setInterval(function() {
					var result = endtime - Math.round(new Date() / 1000)
					timer.h = Math.floor(result / 3600 % 24) < 10 ? '0' + Math.floor(result / 3600 % 24) : Math.floor(result / 3600 %
						24);
					timer.m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 %
						60));
					timer.s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
					timer.d = Math.floor(result / 3600 / 24)
					if (that.orderStatusNum == 1) {
						that.orderStatus[1].subtitle = '订单将于 ' + timer.h + ':' + timer.m + ':' + timer.s + ' 后自动关闭'
					} else {
						that.orderStatus[5].subtitle = '订单将于 ' + timer.d + '天' + timer.h + ':' + timer.m + ':' + timer.s + ' 后自动收货'
					}
					that.timer = timer
					that.clearTimer()
				}, 1000)

			},
			//清除定时器
			clearTimer() {
				var that = this
				var timer = this.timer
				var url = ''
				if (timer.h == '00' && timer.m == '00' && timer.s == '00') {
					clearInterval(that.tiktok)
					if (that.orderStatusNum == 1) {
						url = '/api/order/closeOrder'
					} else {
						url = '/api/order/receiveOrder'
					}
					that.$api.get(url, {
						order_id: that.id
					}, function(res) {
						console.log(res)
						if (res.data.code == 200) {
							that.getOrder()
						}
					})
				}
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

	.content {
		background-color: #FFFFFF;
	}

	.order-state {
		height: 160upx;
		background: #FFFFFF;
		color: #FFFFFF;
		align-items: flex-start;
		padding-left: 108upx;
	}

	.order-state-title {
		font-size: 32upx;
		font-weight: 500;
	}

	.order-state-subtitle {
		font-size: 24upx;
		font-weight: 400;
	}

	.address {
		height: 174upx;
		background-color: #FFFFFF;
	}

	.address-info {
		flex: 2;
	}

	.address-name {
		ont-size: 30upx;
		font-weight: bold;
		color: rgba(34, 34, 34, 1);
	}

	.address-phone {
		font-size: 28upx;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 0.9;
		margin-left: 32upx;
	}

	.address-detail {
		font-size: 26upx;
		font-weight: 400;
		color: rgba(34, 34, 34, 1);
		margin-top: 20upx;
	}

	.address-edit {
		width: 78upx;
		height: 88upx;
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzgxNDBGQ0QzMUI1MTFFOUExMjFENUQ0MDA2RkJBOTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzgxNDBGQ0UzMUI1MTFFOUExMjFENUQ0MDA2RkJBOTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODE0MEZDQjMxQjUxMUU5QTEyMUQ1RDQwMDZGQkE5MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODE0MEZDQzMxQjUxMUU5QTEyMUQ1RDQwMDZGQkE5MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqQmMiYAAASsSURBVHjaxJgLiBVVGMdn72q6rVLa1aVso9LV0h4YamWwivYSc6nU6GEWWmS0ZFpkokbgAx9ZWboJama+SlEow7I2zVfaigmFRmkP1NhKKy3LTddu/wO/kWmaM3dm7pX7wY+z7Myd+c93vvN93zlFmUzG8VuXHjc4Ea2zqBI3i06itSgWv4lvRJ14T9SKU1EeuLtu6//+18SJb0XiLjFWXG25py1cL0aKA2KmeFWciPvCVMz7LxQfijcRWC9eFgPExaJEnCUuEH3FJPGVKBcviV2iW1yRcTx5rXhXpMUhMU4ssnimHtaLZ/mI6YTHFjFMLMu3J43AjxD4Pi+bF3HqTNC/g+drRDOxRNyXT5Hni7dFKV9vvHI4QSz/LR4jlk1cv8bH50XkAlHGCh0qGp3cbKqYRewuFc1zFdlf9BNHxBBLGjEp50HxMff9KXaKMaKF5blPiy9EezEqV5FjGSeKnwKun8fiWCh6iXPE2eIaPPa5uDzgdyaWR/P36GzeDBNpkrPJ6r+LuZZ8uUpUioPifpK58d6tpJtLyAjnBvy+Fo+nifNEIm9jXC3+Crg+GO/Vk7SXUGnMdK/jA3eIS8VTlncs870rtsjrGDdYrt/LOBlP+u041cbBy0G23veu2CI7MO4JqdsOFchm25mFi4hVv30p/sHbqSQiWzP+7Jw5M7nzDypfyyQiTzI2tVx3PXxTlpAxHtxviWvv808mEfmjp6kIC/pxlntKSNrGFlue0YaPOBryEaEidzDamsuVYiNl8xOSfSvK5y3CNIbdxbfiecsz3GfXJV047oK4PaRxGCg204oZb/0qjtGEdBXfkV6OWJ5xJ+MHSUXW8tJunpXst19EH1qvzST+4yRyU62uYgUHmUnwd7C6VyQVeYJOpShLfW2kLFYGlMVjIb97hOq0hoWVuHbPQYRpIDrmMfW09FShF3NtML4n1ppQWfJlz1CzN7D4cu4nnyM9DAxZ6XGsgs4n4+mychZp4mUGsTk/SpOaZae5gGe8IT6N9KPO3XtGua85vWEFG6oxCUWa7cNsetMr2dDl5MnL6MqNNYjhpIsnE057J1a8u7JdgT1EzyQiU6SGtSRqhzw4k+3CW5S0qGZmYjkpZxEbO9fWkZPL4oocRKu2T/zg+f942q921O7iiCLneCrQSN+1jdT56rgi3eT9AlPsTfCDaT5uFK9EEFhNRWrg44/6rk9jHGHpOQNFVtJimb316wHXD/IyI/hRcp7NqjheMfaQ+Czgnm3MTpq4jyTS3cXVUIeDbCsCTa6bIh4IuKcXcVjMglka8jHTGR8P0lTcpl25f0XPYmruCevxaCIaaHoH4OFdHoFrmT6TW5/IEhJfc+zSgWZ6d5jIKXQ9C7N1Jh6PnuIErYouu4KdYwkJ+2FfXNvavkYOI8pJ+IHJvIzV14ycti9GihnBEWBTz0snc6KWifiMEqpbmpnYFBST1dy4JqZAh8OD3pQ5c2B6t5gQQ6C7Ba7xrYv/eLKUjidN9t/mFMbSeNPM5hVuw+x6chg3bC+gQIe0txhdo7zTnWLpe1NBIW0GC22IWypTnhLonvtkCsxedJ0ulako54MFNJM1Sv8VYABNuywyv1aUKAAAAABJRU5ErkJggg==');
		background-size: 41upx 40upx;
		background-position: left center;
		background-repeat: no-repeat;
	}

	.order-item-goods {
		padding: 20upx 0;
		border-top: none;
	}

	.orders-goods-wrap .order-item-goods:last-child {
		border-bottom: none;
	}

	.menu-title {
		font-size: 28upx
	}

	.info-item {
		font-size: 26upx;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		line-height: 50upx;
	}

	.info-item view {
		margin-left: 20upx;
	}

	.remark {
		border-bottom: none;
		border-top: solid 1upx #e9e9e9;
		justify-content: flex-start;
	}

	.remark view {
		flex: 2;
		margin-left: 20upx;
		font-weight: 400;
		color: #666666;
	}

	.goods-total {
		font-size: 24upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		border-bottom: none;
		border-top: solid 1upx #e9e9e9;
	}

	.goods-total view {
		font-size: 30upx;
		font-weight: 500;
		color: rgba(203, 14, 14, 1);
		padding-right: 0;
		text-align: right;
		line-height: 30upx;
		width: 550upx;

	}

	.order-item-btns {
		justify-content: flex-end;
		height: 100upx;
		border-top: solid 1upx #e9e9e9;
	}

	.order-item-btns button {
		margin-right: 0;
		margin-left: 20upx;
		padding: 0 40upx;
	}

	.contact {
		height: 110upx;
		font-size: 28upx;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #4483eb;
		border-top: solid 1upx #e9e9e9;
		position: relative;
	}

	.contact image {
		width: 35upx;
		height: auto;
		margin-right: 15upx;
	}

	.contact button {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 10;
		left: 0;
		top: 0;
	}

	.goods_card_info {
		padding: 6upx 0;
	}
</style>
