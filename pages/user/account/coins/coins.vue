<template>
	<view>
		<view class="content-wrap">
			<view class="content-num flex-con">
				<view>{{info.user_coin}}</view>购物币 <navigator class="withdraw-record" url="record/record">提现明细</navigator>
			</view>
			<view class="content-nav flex-con justify-bet">
				<navigator class="content-nav-item" url="income/income">购物币明细</navigator>
				<navigator class="content-nav-item withdraw-btn" :url="'../withdraw/withdraw?time=' + time">申请提现</navigator>
			</view>
		</view>

		<view class="withdraw-tips">注：购物币每自然月只可提现{{time?time:1}}次</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{},
				time:''
			};
		},
		onLoad(){
			this.info=this.$store.state.globalData.userInfo.member
			this.getWithdrawTime()
		},
		methods:{
			getWithdrawTime() {
				var that = this
				this.$api.get('/api/common/getContent', {}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						that.time = res.data.data.coin_withdraw_times
					}
				})
			},
		},
	}
</script>

<style>
	.content-wrap {
		background-color: #D4B47A;
	}

	.withdraw-tips {
		color: #BA9552;
	}

	.withdraw-btn {
		background-color: #FFFFFF;
		color: #D4B47A;
	}

	.withdraw-record {
		font-size: 26upx;
		font-weight: 400;
		color: #FFFFFF;
		position: absolute;
		right: 60upx;
		top: 0;
	}
</style>
