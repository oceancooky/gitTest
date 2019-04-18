<template>
	<view class="">
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


		<view class="content martop20 padding-content orders-goods-wrap">
			<view class="order-item-goods" v-for="(item, index) in goods" :key="index">
				<goodsCard :goodsinfo="item" />
			</view>
		</view>
		<view class="content padding-content menu menu-title remark">
			留言:<input type="text" value="" placeholder="选填, 请填写其他需求" @input="getRemark" />
		</view>
		<view class="content padding-content menu menu-title more more-b more-r invoice" @tap="setInvoice">
			发票<view>{{invoiceText}}</view>
		</view>

		<view class="content padding-top20">
			<view class="info-item flex-con justify-bet">商品金额<view>￥{{order.goods_total?order.goods_total:0}}</view>
			</view>
			<view class="info-item flex-con justify-bet">支付方式<view>现金</view>
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
				<button @tap="generateOrder">提交订单</button>
			</view>
		</view>

		<view class="popup" @touchmove.stop.prevent="moveHandle" v-if="popUp || isInvoice" @tap="noInvoice"></view>

		<view class="select-pop" :class="{ active: popUp }" @touchmove.stop.prevent="moveHandle">
			<view class="close-btn" @tap="noInvoice"></view>
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
				isLoading: false,
			};
		},
		onShow() {
			if (this.isUpdate) {
				this.getOrderInfo()
			}
		},
		onLoad() {
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
						that.order = res.data.data
						that.goods = res.data.data.goods_info
						console.log(res.data.data.address)
						that.address = res.data.data.address
					} else {
						uni.showToast({
							title: res.data.msg,
							mask: true,
							icon: 'none'
						});
					}
				})
			},


			//生成订单
			generateOrder() {
				if (!this.address.id) {
					return uni.showToast({
						title: '请添加一个地址',
						icon: 'none'
					})
				}
				var that = this
				// 				var para = {
				// 					
				// 				}
				this.$api.post('/api/order/generateOrder', {
					pay_way: 1,
					coin: "",
					address_id: this.address.id,
					remark: this.remark,
					invoice_info: this.invoiceData.title ? JSON.stringify(this.invoiceData) : ''
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						var order_id = res.data.data.order_id
						that.doPay(order_id)
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
									url: 'pay_success/pay_success?id=' + order_id,
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
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
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
			}
		}
	}
</script>

<style>
	@import url("pay.css");
</style>
