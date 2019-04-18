<template>
	<view>
		<form @submit="formSubmit">
			<view class="padding-content flex-con menu">
				<view class="menu-name">收货人:</view><input type="text" placeholder="请输入收货人姓名" name="name">
			</view>
			<view class="padding-content menu">
				<view class="menu-name">联系电话:</view><input type="number" placeholder="请输入收货人联系电话" name="phone">
			</view>
			<view class="padding-content flex-con menu more more-b more-r">

				<picker @change="bindPickerChange" mode="region" :value="region">
					<view>所在地区: {{region[0]}}，{{region[1]}}，{{region[2]}}</view>
				</picker>
			</view>
			<view class="padding-content menu">
				<view class="menu-name">详细地址:</view><input type="text" placeholder="请输入详细的收货地址" name="address">
			</view>
			<view class="padding-content menu isDefault">
				设为默认地址
				<switch name="isDefault" color='#CB0E0E' checked='true' />
			</view>

			<button class="fix-btn" formType="submit">{{butText}}</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				region: ['北京市', '北京市', '东城区'],
				customItem: '全部',
				butText: '确认',
				from: 0
			};
		},
		onLoad(options) {
			if (options.from) {
				this.from = options.from
				this.butText = '立即使用'
			}
		},
		methods: {
			bindPickerChange(e) {
				this.region = e.detail.value
			},
			formSubmit: function(e) {
				console.log(e)
				var that = this
				var formData = e.detail.value
				var phoneReg = /^1[3-578]\d{9}$/
				if (!phoneReg.test(formData.phone)) {
					return uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none'
					})
				}
				var para = {
					name: formData.name,
					phone: formData.phone,
					province: this.region[0],
					city: this.region[1],
					area: this.region[2],
					address: formData.address,
					is_default: formData.isDefault ? 1 : 0
				}
				this.$api.post('/api/address/addOrEditAddress', para, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						if (that.from == 1) {
							var pages = getCurrentPages();
							var prevPage = pages[pages.length - 2];
							prevPage.$vm.isUpdate = true
							uni.navigateBack()
							
						} else {
							uni.showToast({
								title: "添加成功!"
							})
							setTimeout(function() {
								uni.navigateBack()
							}, 1000)
						}
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
				})
			},
		}
	}
</script>

<style>
	.menu .menu-name {
		width: 130upx;
	}

	.menu input {
		flex: 2;
	}

	picker {
		width: 100%;
		height: 100%;
	}

	.isDefault {
		border-bottom: solid 20upx #F8F8F8;
	}
</style>
