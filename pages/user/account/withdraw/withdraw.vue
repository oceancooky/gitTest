<template>
	<view>
		<view class="martop20 padding-content menu">
			提现金额 <input type="digit" class="withdraw-num" placeholder-class="withdrawPlace" :placeholder="'当前账户可提现购物币为' + info.user_coin_profit"
			 @input="getAmount">
		</view>

		<block v-if="list.length>0">
			<view class="martop20 padding-content menu more more-b more-r">
				<!-- <input type="text" placeholder="请选择开户银行"> -->
				<picker @change="bindPickerChange" :value="index" :range="list" :range-key="'card_no'">
					<view>{{list[index].card_no}}</view>
				</picker>
			</view>

		</block>
		<navigator class="martop20 padding-content menu more more-b more-r" url="../../bankcards/newcard/newcard">

			<view class="add-newcard flex-con">添加银行卡</view>
		</navigator>

		<view class="tips padding-content">* 每月只可以提现{{time?time:1}}次</view>

		<view class="padding-content mar-top">
			<button class="big-btn" @tap="applyWithdraw">申请提现</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				index: 0,
				info: {},
				amount: 0,
				time: ''
			};
		},
		onShow() {
			this.info = this.$store.state.globalData.userInfo.member
			this.getList()
		},
		onLoad(options){
			this.time = options.time
		},
		methods: {
			getList() {
				var that = this
				this.$api.get('/api/bankcard/getList', {}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						var list = res.data.data
						if (list.length > 0) {
							for (var i in list) {
								list[i].card_no = list[i].bank + ' ' + list[i].card_no.substr(0, 4) + ' **** ' + list[i].card_no.substr(
									list[i].card_no.length -
									4, list[i].card_no.length);
							}
							that.list = list
							console.log(that.list)
						}

					} else {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
					}
				})
			},
			bindPickerChange: function(e) {
				this.index = e.target.value
			},

			getAmount(e) {
				var val = e.detail.value
				var canUse = this.info.user_coin_profit * 100 / 100
				var idx = String(val).indexOf(".") + 1; //获取小数点的位置
				var count = String(val).length - idx; //获取小数点后的个数
				if (idx > 0 && count > 2) {
					this.amount = 0
					uni.showToast({
						title: "最多输入两位小数，请重新输入",
						icon: "none"
					})
				} else if (val > canUse) {
					this.amount = 0
					uni.showToast({
						title: "已超出最大可提现数量，请重新输入",
						icon: "none"
					})
				} else {
					this.amount = e.detail.value
				}
			},
			applyWithdraw() {
				var that = this
				if (this.amount == 0) {
					return uni.showToast({
						title: "请重新输入提现金额",
						icon: "none"
					})
				}
				uni.showModal({
					title: '确认提现￥' + this.amount + '吗？',
					content: '',
					confirmColor: '#e9101f',
					success: function(res) {
						if (res.confirm) {
							that.$api.post('/api/finance/applyCoinWithdraw', {
								amount: that.amount,
								bank_card_id: that.list[that.index].id
							}, function(res) {
								console.log(res)
								if (res.data.code == 200) {
									uni.showToast({
										title: '提现申请成功！',
									})
									setTimeout(function() {
										uni.navigateBack()
									}, 800)
								} else {
									uni.showToast({
										title: res.data.msg,
										icon: "none"
									})
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #f8f8f8;
	}

	.menu {
		background-color: #FFFFFF;
	}

	picker {
		width: 100%;
	}

	.withdrawPlace {
		font-size: 28upx;
		color: #666666;
		text-align: right;
		font-weight: normal;
	}

	.withdraw-num {
		font-size: 40upx;
		font-weight: 500;
		color: rgba(203, 14, 14, 1);
		text-align: right;
	}

	.add-newcard {
		color: #4483EB;
	}

	.add-newcard::before {
		content: '';
		width: 24upx;
		height: 24upx;
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA4ElEQVRoQ+2Yuw3CQAxAbdHAABmAmiEowlpQhEFYgwIKdqCkozt6OjBKkYLohHSylaN4qRN/nt85UVSCr3afniq6yIY1eZ92zSwypUYG62PRQCFRJjAGhkIoVEgAhZzA2EIohEJOAijkBMgWQiEUchKorlDbPa6qsgruY5pwZjelgWlY57MwgZr0+9xM4D8mkA4qugyrRWX9M5bJJSqXidz5mKv+Jo4a5xCHP3OFRDkDnIFCZca3oxAKoZCTAAo5AbKFUAiFnARQyAkwfAttunQU0XmuLlN5nbdN66z56/EP51QdYOsjoJsAAAAASUVORK5CYII=');
		background-repeat: no-repeat;
		background-size: 24upx 24upx;
		background-position: left center;
		margin-right: 10upx;
	}
</style>
