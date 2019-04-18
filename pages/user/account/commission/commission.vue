<template>
	<view>
		<view class="content-wrap">
			<view class="content-num flex-con">
				<view>{{info.user_balance}}</view>佣金
			</view>
			<view class="content-nav flex-con justify-bet">
				<navigator class="content-nav-item" url="income/income">佣金来源</navigator>
				<navigator class="content-nav-item" url="record/record">提现明细</navigator>
			</view>
		</view>

		<view class="withdraw-tips">注：佣金每自然月固定日期会全部转账到您的银行卡</view>

		<!-- <view class="martop20 padding-content">
			<view class="list flex-con justify-bet font-bold">
				<view class="list-item">级数</view>
				<view class="list-item font-weg">累计预扣预缴应纳税所得额</view>
				<view class="list-item">预扣率</view>
				<view class="list-item font-thin">速算扣除数</view>
			</view>
			<view class="list flex-con justify-bet">
				<view class="list-item">1</view>
				<view class="list-item font-weg">不超过36000的部分</view>
				<view class="list-item">3%</view>
				<view class="list-item font-thin">0</view>
			</view>
			<view class="list flex-con justify-bet">
				<view class="list-item">2</view>
				<view class="list-item font-weg">超过36000至144000的部分</view>
				<view class="list-item">10%</view>
				<view class="list-item font-thin">2520</view>
			</view>
			<view class="list flex-con justify-bet">
				<view class="list-item">3</view>
				<view class="list-item font-weg">超过144000至300000的部分</view>
				<view class="list-item">20%</view>
				<view class="list-item font-thin">16920</view>
			</view>
			<view class="list flex-con justify-bet">
				<view class="list-item">4</view>
				<view class="list-item font-weg">超过300000至420000的部分</view>
				<view class="list-item">25%</view>
				<view class="list-item font-thin">31920</view>
			</view>
			<view class="list flex-con justify-bet">
				<view class="list-item">5</view>
				<view class="list-item font-weg">超过420000至660000的部分</view>
				<view class="list-item">30%</view>
				<view class="list-item font-thin">52920</view>
			</view>
			<view class="list flex-con justify-bet">
				<view class="list-item">6</view>
				<view class="list-item font-weg">超过660000至960000的部分</view>
				<view class="list-item">35%</view>
				<view class="list-item font-thin">85920</view>
			</view>
			<view class="list flex-con justify-bet">
				<view class="list-item">7</view>
				<view class="list-item font-weg">超过960000的部分</view>
				<view class="list-item">45%</view>
				<view class="list-item font-thin">181920</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{}
			};
		},
		onLoad(){
			this.info=this.$store.state.globalData.userInfo.member
		},
		methods:{},
	}
</script>

<style>
	.content-wrap {
		background-color: #F34735;
	}

	.martop20 {
		margin-top: 40upx;
	}

	.list {
		/* border-bottom: solid 1upx #e6e6e6; */
	}

	.list-item {
		height: 90upx;
		line-height: 90upx;
		text-align: center;
		font-size: 26upx;
		color: rgba(34, 34, 34, 1);
		width: 84upx;
	}

	.font-weg {
		width: 370upx;
	}

	.font-thin {
		width: 140upx;
	}

	.martop20 .list:nth-of-type(odd) {
		background-color: #FFFFFF;
	}

	.martop20 .list:nth-of-type(even) {
		background-color: #f4f5f7;
	}
</style>
