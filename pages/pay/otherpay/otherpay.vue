<template>
	<view class="">

		<block v-if="!order.all_sale_flag">
			<navigator class="content padding-content flex-con address more more-b more-r" v-if="address.id" url="/pages/user/address/address?from=1">
				<view class="address-edit"></view>
				<view class="address-info">
					<view class="address-name flex-con">
						{{address.name}}
						<view class="address-phone">{{address.phone}}</view>
					</view>
					<view class="address-detail flex-con">{{address.address}}
					</view>
				</view>
			</navigator>

			<navigator class="content padding-content flex-con address more more-b more-r" v-else url="/pages/user/address/newaddress/newaddress?from=1">
				<view class="address-edit"></view>
				<view class="address-info">
					<view class="address-detail flex-con">
						请添加一个地址
					</view>
				</view>
			</navigator>
		</block>


		<view class="content martop20 padding-content orders-goods-wrap">
			<view class="order-item-goods" v-for="(item, index) in goods" :key="index">
				<goodsCard :goodsinfo="item" />
			</view>
		</view>
		<view class="content padding-content menu menu-title remark">
			留言:<input type="text" value="" placeholder="选填, 请填写其他需求" @input="getRemark" />
		</view>
		<view class="content padding-content menu menu-title more more-b more-r invoice" @tap="setInvoice" v-if="!order.all_sale_flag">
			发票<view>{{invoiceText}}</view>
		</view>

		<view class="content padding-top20">
			<view class="info-item flex-con justify-bet">商品金额<view>￥{{order.goods_total?order.goods_total:0}}</view>
			</view>
			<view class="info-item flex-con justify-bet">支付方式<view v-if='payway == 1'>￥{{order.amount}}</view>
				<view v-if='payway == 2'>{{order.amount}}购物币</view>
				<view v-if='payway == 3'>￥{{realCost}} + {{coin}}购物币</view>
				<view v-if='payway == 4'>￥{{order.amount}} + {{order.point_total}}积分</view>
				<view v-if='payway == 5'>￥{{order.amount}}购物币 + {{order.point_total}}购物币</view>
				<view v-if='payway == 6'>￥{{realCost}} + {{coin}}购物币 + {{order.point_total}}积分</view>
			</view>
			<view class="info-item flex-con justify-bet">运费<view>￥{{order.freight?order.freight:0}}</view>
			</view>
		</view>

		<view class="bottom-menu fix-bottom">
			<view class="bottom-menu-con flex-con justify-bet">
				<view class="total flex-con">合计<view class="flex-con total-price">
						<view class="total-price-sym">￥</view>{{order.amount?order.amount:0}}
					</view>
				</view>
				<button @tap="choosePay">提交订单</button>
			</view>
		</view>

		<view class="popup" @touchmove.stop.prevent="moveHandle" v-if="popUp || isInvoice" @tap="hidePop"></view>

		<view class="select-pop" :class="{ active: popUp }" @touchmove.stop.prevent="moveHandle">
			<view class="close-btn" @tap="hidePop"></view>
		</view>

		<view class="select-pop" :class="{ active: isInvoice }" @touchmove.stop.prevent="moveHandle">
			<view class="close-btn" @tap="noInvoice"></view>

			<view class="padding-top20 flex-con font-bold justify-center pay-title">选择发票</view>
			<form @submit="formSubmit">
				<scroll-view scroll-y="true" class="scrollInvoice">
					<view class="selec-title padding-content martop20 font-bold flex-con justify-bet">发票类型</view>
					<view class="padding-top20 flex-con">
						<view class="invoice-type invoice_sel">电子发票</view>
						<view class="invoice-type">纸质发票</view>
					</view>


					<view class="selec-title padding-content font-bold flex-con justify-bet">抬头类型</view>
					<view class="padding-top20 flex-con">
						<view class="invoice-type cansel" :class="{invoice_sel:invoiceType == 1}" @tap="changeInvType(1)">单位</view>
						<view class="invoice-type cansel" :class="{invoice_sel:invoiceType == 2}" @tap="changeInvType(2)">个人</view>
					</view>
					<view class="padding-content invoice-box">
						<view class="menu">
							<view class="menu-name"><text>*</text>发票抬头:</view><input type="text" placeholder="抬头名称" name="title">
						</view>
						<block v-if="invoiceType == 1">
							<view class="menu">
								<view class="menu-name"><text>*</text>税号:</view><input type="idcard" placeholder="纳税人识别号" name="tax_no">
							</view>
							<view class="menu">
								<view class="menu-name">开户银行:</view><input type="text" placeholder="选填" name="bank">
							</view>
							<view class="menu">
								<view class="menu-name">银行账号:</view><input type="number" placeholder="选填" name="bank_no">
							</view>
							<view class="menu">
								<view class="menu-name">企业地址:</view><input type="text" placeholder="选填" name="address">
							</view>
							<view class="menu">
								<view class="menu-name">企业电话:</view><input type="number" placeholder="选填" name="phone">
							</view>
						</block>
						<view class="menu more more-b" @tap="noInvoice">
							<view class="menu-name">本次不开具发票,继续下单</view>
						</view>
					</view>

				</scroll-view>
				<button class="big-btn confirmbtn" formType="submit">确定</button>
			</form>
		</view>

		<view class="select-pop" :class="{ active: payPop }" @touchmove.stop.prevent="moveHandle">
			<view class="close-btn" @tap="hidePop()"></view>

			<view class="padding-top20 flex-con font-bold justify-center pay-title">选择付款方式</view>

			<view class="padding-top20 flex-con" v-if="field == 1">
				<view class="invoice-type cansel" :class="{invoice_sel:payway == 1}" @tap="changePay(1)">现金</view>
				<view class="invoice-type cansel" :class="{invoice_sel:payway == 2}" @tap="changePay(2)">购物币</view>
				<view class="invoice-type cansel" :class="{invoice_sel:payway == 3}" @tap="changePay(3)">现金+购物币</view>

			</view>

			<view class="padding-top20 flex-con" v-if="field == 2">
				<view class="invoice-type cansel" :class="{invoice_sel:payway == 4}" @tap="changePay(4)">现金+积分</view>
				<view class="invoice-type cansel" :class="{invoice_sel:payway == 5}" @tap="changePay(5)">购物币+积分</view>
				<view class="invoice-type cansel" :class="{invoice_sel:payway == 6}" @tap="changePay(6)">现金+购物币+积分</view>

			</view>

			<block v-if="payway == 1">
				<view class="menu padding-content font-bold">
					<view class="menu-name">订单金额:</view>
					<view>￥{{order.amount}}</view>
				</view>
			</block>
			<block v-if="payway == 2">
				<view class="menu padding-content font-bold">
					<view class="menu-name">购物币:</view>
					<view>{{order.amount}}</view>
				</view>
			</block>
			<block v-if="payway == 3">
				<view class="menu padding-content font-bold">
					<view class="menu-name">订单金额:</view>
					<view>￥{{realCost}}</view>
				</view>
				<view class="menu padding-content">
					<view class="menu-name font-bold">使用购物币:</view><input type="digit" class="coin-input" placeholder="输入购物币数量" name="phone"
					 @input="getCoin">
				</view>
			</block>

			<block v-if="payway == 4">
				<view class="menu padding-content font-bold">
					<view class="menu-name">账户可用积分:</view>
					<view>{{order.cur_point}}</view>
				</view>
				<view class="menu padding-content font-bold">
					<view class="menu-name">需要消耗积分:</view>
					<view>{{order.point_total}}</view>
				</view>
				<view class="menu padding-content font-bold">
					<view class="menu-name">应付金额:</view>
					<view>￥{{order.amount}}</view>
				</view>
			</block>

			<block v-if="payway == 5">
				<view class="menu padding-content font-bold">
					<view class="menu-name">账户可用积分:</view>
					<view>{{order.cur_point}}</view>
				</view>
				<view class="menu padding-content font-bold">
					<view class="menu-name">需要消耗积分:</view>
					<view>{{order.point_total}}</view>
				</view>
				<view class="menu padding-content font-bold">
					<view class="menu-name">账户可用购物币:</view>
					<view>{{order.cur_coin}}</view>
				</view>
				<view class="menu padding-content font-bold">
					<view class="menu-name">需要消耗购物币:</view>
					<view>{{order.amount}}</view>
				</view>
			</block>

			<block v-if="payway == 6">
				<view class="menu padding-content font-bold">
					<view class="menu-name">账户可用积分:</view>
					<view>{{order.cur_point}}</view>
				</view>
				<view class="menu padding-content font-bold">
					<view class="menu-name">需要消耗积分:</view>
					<view>{{order.point_total}}</view>
				</view>
				<view class="menu padding-content font-bold">
					<view class="menu-name">账户可用购物币:</view>
					<view>{{order.cur_coin}}</view>
				</view>
				<view class="menu padding-content">
					<view class="menu-name font-bold">使用购物币:</view>
					<input type="digit" class="coin-input" placeholder="输入购物币数量,1购物币=￥1" name="phone" @input="getCoin">
				</view>
				<view class="menu padding-content font-bold">
					<view class="menu-name">应付金额:</view>
					<view>￥{{realCost}}</view>
				</view>
			</block>



			<view class="padding-content" v-if='payway == 2 || payway == 3'>
				<view class="tips flex-con justify-end">1购物币=￥1,当前账户可用购物币{{order.cur_coin}},本次最多可用{{order.amount}}个购物币</view>
			</view>

			<!-- <view class="menu padding-content font-bold">
					<view class="menu-name">使用积分:</view><view>99</view>
				</view> -->
			<button class="big-btn confirmbtn" @tap="confirmOrder">支付</button>

		</view>
		
		<loading :isLoading="isLoading"></loading>

	</view>

</template>

<script>
	import goodsCard from 'template/goods_card'
	import loading from 'template/loading'
	export default {
		components: {
			goodsCard,
			loading
		},
		data() {
			return {
				popUp: false,
				isInvoice: false,
				order: {},
				goods: [],
				address: {},
				remark: '',
				isUpdate: false,
				invoiceType: 1,
				invoiceData: {},
				invoiceText: '本次不开具发票',
				payPop: false,
				payway: 1,
				coin: 0,
				realCost: 0,
				field: 1,
				isLoading: false,
			};
		},
		onShow() {
			if (this.isUpdate) {
				this.getOrderInfo()
			}
		},
		onLoad(options) {
			console.log(options.field)
			this.field = options.field
			if (options.field == 2) {
				this.payway = 4
			}
			this.getOrderInfo()
		},
		methods: {
			getOrderInfo() {
				var that = this
				this.isLoading = true
				this.$api.post('/api/order/cartOrder', {
					address_id: this.address.id,
					invoice_info: ''
				}, function(res) {
					console.log(res)
					that.isLoading = false
					if (res.data.code == 200) {
						var data = res.data.data
						that.order = data
						that.realCost = data.amount
						that.goods = data.goods_info
						that.address = data.address
					} else {
						uni.showToast({
							title: res.data.msg,
							mask: true,
							icon: 'none'
						});
					}
				})
			},

			choosePay() {
				this.payPop = true
				this.popUp = true
			},

			changePay(op) {
				this.payway = op
				if (op == 1) {
					this.realCost = this.order.amount
				}
				if (op == 2 || op == 5) {
					this.coin = this.order.amount
				}
				if (op == 3 || op == 4 || op == 6) {
					this.coin = 0
				}
			},

			//输入购物币并判断合理性
			getCoin(e) {
				// this.coin = e.detail.value
				var val = e.detail.value
				var totalCoin = this.order.cur_coin * 100 / 100

				var idx = String(val).indexOf(".") + 1; //获取小数点的位置

				var count = String(val).length - idx; //获取小数点后的个数
				if (idx > 0 && count > 2) {
					uni.showToast({
						title: "最多输入两位小数，请重新输入",
						icon: "none"
					})
				} else if (val > totalCoin) {
					uni.showToast({
						title: "已超过账户可用购物币，请重新输入",
						icon: "none"
					})
				} else if (val > this.order.amount) {
					uni.showToast({
						title: "已超过订单金额，请重新输入",
						icon: "none"
					})
				} else {
					this.coin = val
					this.realCost = this.order.amount * 100 / 100 - this.coin
				}
			},

			//确认订单
			confirmOrder() {
				var that = this
				if (this.payway == 2) {
					if (this.order.cur_coin < this.order.amount) {
						return uni.showToast({
							title: '当前账户购物币不足，请选用其他方式',
							icon: 'none'
						})
					}
					uni.showModal({
						title: '',
						content: '确认使用' + that.coin + '个购物币支付订单吗?',
						confirmColor: '#e9101f',
						success: function(res) {
							if (res.confirm) {
								that.generateOrder()
							}
						}
					})
				} else if (this.payway == 3) {
					if (this.coin == 0) {
						return uni.showToast({
							title: '请输入购物币数量',
							icon: 'none'
						})
					}
					uni.showModal({
						title: '',
						content: '确认使用' + that.coin + '购物币支付订单吗?',
						confirmColor: '#e9101f',
						success: function(res) {
							if (res.confirm) {
								that.generateOrder()
							}
						}
					})
				} else if (this.payway == 4) {
					if (this.order.cur_point < this.order.point_total) {
						return uni.showToast({
							title: '当前账户积分不足，请选择其他支付方式',
							icon: 'none'
						})
					}
					that.generateOrder()

				} else if (this.payway == 5) {
					if (this.order.cur_point < this.order.point_total) {
						return uni.showToast({
							title: '当前账户积分不足，请选择其他支付方式',
							icon: 'none'
						})
					}
					if (this.order.cur_coin < this.order.amount) {
						return uni.showToast({
							title: '当前购物币不足，请选择其他支付方式',
							icon: 'none'
						})
					}
					uni.showModal({
						title: '',
						content: '确认使用' + this.order.point_total + '积分+' + this.order.amount + '购物币支付订单吗?',
						confirmColor: '#e9101f',
						success: function(res) {
							if (res.confirm) {
								that.generateOrder()
							}
						}
					})
				} else if (this.payway == 6) {
					if (this.order.cur_point < this.order.point_total) {
						return uni.showToast({
							title: '当前账户积分不足，请选择其他支付方式',
							icon: 'none'
						})
					}
					that.generateOrder()
				} else {
					that.generateOrder()
				}
			},

			//生成订单
			generateOrder() {

				if (!this.address.id && !this.order.all_sale_flag) {
					return uni.showToast({
						title: '请添加一个地址',
						icon: 'none'
					})
				}
				var that = this
				this.$api.post('/api/order/generateOrder', {
					pay_way: this.payway,
					coin: this.coin,
					address_id: this.address.id,
					remark: this.remark,
					invoice_info: this.invoiceData.title ? JSON.stringify(this.invoiceData) : ''
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) { //含现金的支付
						var order_id = res.data.data.order_id
						that.doPay(order_id)
					} else if (res.data.code == 201) { //纯购物币支付
						var order_id = res.data.data.order_id
						uni.showToast({
							title: '下单成功！',
						})
						setTimeout(function() {
							uni.redirectTo({
								url: '/pages/pay/pay_success/pay_success?id=' + order_id,
							})
						}, 500)
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
				})
			},

			//支付
			doPay: function(order_id) {
				var that = this
				this.$api.post('/api/miniprogram.payment/unifiedOrder', {
					order_id: order_id
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						var payObj = res.data.data;
						payObj.success = function() {
							//todo 这里写支付成功后的逻辑操作
							that.isUpdate = false
							setTimeout(function() {
								uni.redirectTo({
									url: '/pages/pay/pay_success/pay_success?id=' + order_id,
								})
							}, 300)
						}
						payObj.fail = function() {
							//todo 这里写取消支付的逻辑
							uni.showToast({
								title: '您取消了支付',
								icon: 'none'
							})
							setTimeout(function() {
								uni.redirectTo({
									url: '/pages/user/orders/order-detail/order-detail?id=' + order_id,
								})
							}, 500)
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

			//提交发票信息
			formSubmit(e) {
				console.log(e.detail.value)
				var form = e.detail.value
				var data = {
					invoice_type: 1,
					title_type: this.invoiceType,
					title: form.title,
					tax_no: form.tax_no,
					bank: form.bank,
					bank_no: form.bank_no,
					address: form.address,
					phone: form.phone
				}
				console.log(data)
				if (this.invoiceType == 1) {
					if (data.title == '' || data.tax_no == '') {
						return uni.showToast({
							title: '星号项为必填项',
							icon: 'none'
						})
					}
				}
				if (this.invoiceType == 2) {
					if (data.title == '') {
						return uni.showToast({
							title: '星号项为必填项',
							icon: 'none'
						})
					}
				}

				this.invoiceData = data
				this.invoiceText = this.invoiceType == 1 ? '企业发票' : '个人发票'
				this.hidePop()
			},

			//不使用发票
			noInvoice() {
				this.invoiceData = {}
				this.hidePop()
				this.invoiceText = '本次不开具发票'
			},

			//发票弹窗
			setInvoice() {
				this.isInvoice = !this.isInvoice
			},

			//发票类型
			changeInvType(op) {
				this.invoiceType = op
				console.log(this.invoiceType)
			},
			//留言
			getRemark(e) {
				this.remark = e.detail.value
			},

			hidePop() {
				this.popUp = false
				this.isInvoice = false
				this.payPop = false
			}
		}
	}
</script>

<style>
	@import url("../pay.css");

	.menu .coin-input {
		text-align: right;

	}
</style>
