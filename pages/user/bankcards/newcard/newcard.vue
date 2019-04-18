<template>
	<view>
		<view class="content padding-content menu menu-title bor-bot">
			银行卡信息
		</view>
		<form @submit="addCard">
			<view class="padding-content content">
				<view class="menu">
					<input type="text" placeholder="请输入姓名" name="name">
				</view>
				<view class="menu more more-b">
					<!-- <input type="text" placeholder="请选择开户银行"> -->
					<picker @change="bindPickerChange" :value="index" :range="bank">
						<view>请选择开户银行： {{bank[index]}}</view>
					</picker>
				</view>
				<view class="menu">
					<input type="text" placeholder="支行名称" name='branchBank'>
				</view>
				<view class="menu">
					<input type="number" placeholder="请输入银行卡号" name="cardNum">
				</view>
			</view>
			<view class="tips padding-content">* 必须输入真实有效的银行账号，对应姓名，对应银行名称，开户支行</view>

			<view class="padding-content mar-top">
				<button class="big-btn" formType="submit">确认添加</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bank: ['中国工商银行',
					'中国农业银行',
					'中国银行',
					'中国建设银行',
					'中国邮政储蓄银行',
					'交通银行'
				],
				index: 0,
			};
		},
		onLoad() {
		},
		methods: {
			bindPickerChange: function(e) {
				console.log(e)
				this.index = e.target.value
			},
			addCard(e) {
				var that = this
				var nameReg = /^[\u4e00-\u9fa5]{2,4}$/
				var cardReg = /^([1-9]{1})(\d{15}|\d{16}|\d{18})$/
				if (!nameReg.test(e.detail.value.name)) {
					return uni.showToast({
						title: "请输入正确的姓名",
						icon: "none"
					})
				}
				if (!cardReg.test(e.detail.value.cardNum)) {
					return uni.showToast({
						title: "请输入正确的银行卡号",
						icon: "none"
					})
				}
				if (e.detail.value.branchBank == '') {
					return uni.showToast({
						title: "请输入支行名称",
						icon: "none"
					})
				}
				uni.showModal({
					title: "",
					content: '请务必填写正确的姓名、银行卡号、支行名称',
					confirmText: '添加',
					success: function(res) {
						if (res.confirm) {
							that.sendData(e)
						}
					}
				})

			},
			sendData(para) {
				console.log(para)
				this.$api.post('/api/bankcard/addCard', {
					bank: this.bank[this.index],
					card_no: para.detail.value.cardNum,
					username: para.detail.value.name,
					sub_bank: para.detail.value.branchBank
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						uni.showToast({
							title: res.data.msg
						})
						setTimeout(function() {
							uni.navigateBack()
						}, 1000)
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #f4f4f4;
		padding-top: 20upx;
	}

	.content {
		background-color: #fff;
	}

	.content .menu:last-child {
		border: none;
	}

	picker {
		width: 100%;
	}

	input {
		width: 100%;
	}
</style>
