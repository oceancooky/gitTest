<template>
	<view class="content padding-content">

		<form @submit="excode" v-if="!step2">
			<label for="" class="flex-con">
				<input type="number" placeholder="请输入常用手机号" name="phone" @input="getPhone">
			</label>
			<label for="" class="flex-con">
				<input type="text" placeholder="请输入验证码" name='code'>|
				<view class="small-btn resend" v-if="isSend">重新发送{{timer}}</view>
				<button class="small-btn" @tap="getCode" v-else>获取验证码</button>
			</label>
			<view class="pro flex-con">
				<checkbox name="isAgree" @tap='checkAgree' :checked="isAgree" />
				我同意
				<navigator url="../about/about?from=1">《龙腾虎跃隐私协议》</navigator>
			
			</view>

			<button class="big-btn mar-top" :disabled="!isAgree" formType="submit">提交</button>
		</form>

		<!-- <form @submit="formSubmit" v-if="step2">
			<label for="" class="flex-con">
				<input type="text" placeholder="请输入真实姓名" name="name">
			</label>
			<label for="" class="flex-con">
				<input type="idcard" placeholder="请输入身份证号" name="idcard">
			</label>
			<button class="big-btn mar-top" formType="submit" :disabled="!isAgree">注册</button>
			<view class="pro flex-con">
				<checkbox name="isAgree" @tap='checkAgree' :checked="isAgree" />
				我同意
				<navigator url="../about/about?from=1">《龙腾虎跃隐私协议》</navigator>

			</view>
		</form> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				step2: false,
				phone: '',
				isAgree: false,
				user_id: '',
				sms_token: '',
				timer: 59,
				isSend: false
			}
		},
		onLoad(options) {
			if(options.id){
				this.user_id = options.id
			}else{
				this.user_id = this.$store.state.userId
			}
		},
		methods: {
			getPhone(e) {
				// console.log(e)
				this.phone = e.detail.value
			},

			getCode(e) {
				var that = this
				var phoneReg = /^1[3-9]\d{9}$/
				if (!phoneReg.test(this.phone)) {
					return uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none'
					})
				}
				this.$api.get('/api/sms/send', {
					mobile: this.phone
				}, function(res) {
					console.log(res)
					uni.showToast({
						title: res.data.msg,
						icon: 'none'
					})
					if (res.data.code == 200) {
						that.isSend = true
						that.countDown()
					}
				})
			},
			excode(e) {
				var that = this
				this.$api.get('/api/sms/check', {
					mobile: this.phone,
					captcha: e.detail.value.code,
					user_id: this.user_id
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						uni.showToast({
							title: '注册成功！'
						})
						setTimeout(function() {
							uni.switchTab({
								url: '/pages/tabbar/tabbar-4/tabbar-4'
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

// 			formSubmit(e) {
// 				var that = this
// 				this.$api.post('/api/member/register', {
// 					sms_token: this.sms_token,
// 					real_name: e.detail.value.name,
// 					id_card_no: e.detail.value.idcard,
// 					user_id: this.user_id
// 				}, function(res) {
// 					console.log(res)
// 					if (res.data.code == 200) {
// 						uni.showToast({
// 							title: '注册成功！'
// 						})
// 						setTimeout(function() {
// 							uni.switchTab({
// 								url: '/pages/tabbar/tabbar-4/tabbar-4'
// 							})
// 						}, 300)
// 					} else {
// 						uni.showToast({
// 							title: res.data.msg,
// 							icon: 'none'
// 						})
// 					}
// 				})
// 			},

			//勾选协议
			checkAgree(e) {
				this.isAgree = !this.isAgree
			},

			//计时器
			countDown() {
				var that = this
				var timer = this.timer
				var interval = setInterval(function() {
					timer--
					that.timer = timer
					if (timer <= 0) {
						that.timer = 59
						that.isSend = false
						clearInterval(interval)
					}
				}, 1000)
			},
		}
	}
</script>

<style>
	label {
		width: 100%;
		padding-top: 30upx;
		color: #E6E6E6;
		font-weight: 100;
	}

	.pro {
		font-size: 26upx;
		color: #999999;
		margin-top: 30upx;
	}

	.pro navigator {
		color: #4483EB;
	}

	input {
		font-size: 28upx;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		border-bottom: solid #e6e6e6 1upx;
		flex: 2;
		/* height: 100upx; */
		height: 50upx;
		padding: 25upx 0;
	}

	checkbox {
		margin-right: 10upx;
	}

	.mar-top {
		margin-top: 64upx;
	}

	button[disabled] {
		color: #FFFFFF;
		background: #999999;
		box-shadow: none;
	}

	.resend {
		color: #FFFFFF;
		background-color: #E6E6E6;
		border: #E6E6E6;
		font-size: 24upx;
		text-align: center;
	}
</style>
