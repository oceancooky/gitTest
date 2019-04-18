<template>
	<view>
		<view class="padding-content flex-con-col martop20">

			<view class="flex-con">
				<icon type="success" size="54" />
				<view class="pay_success">支付成功</view>
			</view>

			<view class="flex-con">
				<navigator open-type="redirect" class="success-nav" :url="'/pages/user/orders/order-detail/order-detail?id=' + id">查看订单</navigator>
				<navigator open-type="switchTab" class="success-nav goback" url="/pages/tabbar/tabbar-1/tabbar-1">返回首页</navigator>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
			};
		},
		onLoad(options){
			this.id = options.id
		}
	}
</script>

<style>
	.pay_success {
		margin-left: 30upx;
		font-size: 44upx;
		font-weight: 500;
		color: #222222
	}

	.martop20 {
		margin-top: 90upx;
	}

	.success-nav {
		width: 220upx;
		height: 74upx;
		line-height: 74upx;
		border: 1upx solid rgba(204, 204, 204, 1);
		border-radius: 6upx;
		font-size: 30upx;
		color: #222222;
		text-align: center;
		margin: 100upx 20upx;
	}

	.success-nav.goback {
		border: 1upx solid rgba(204, 20, 20, 1);
		color: #CB0E0E;
	}
</style>
