<template>
	<view>
		<form @submit="formSubmit">
			<view class="padding-content flex-con menu">
				<view class="menu-name">收货人:</view><input type="text" placeholder="请输入收货人姓名" name="name" :value="address.name">
			</view>
			<view class="padding-content menu">
				<view class="menu-name">联系电话:</view><input type="number" placeholder="请输入收货人联系电话" name="phone" :value="address.phone">
			</view>
			<view class="padding-content flex-con menu more more-b more-r">

				<picker @change="bindPickerChange" mode="region" :value="region">
					<view>所在地区: {{region[0]}}，{{region[1]}}，{{region[2]}}</view>
				</picker>
			</view>
			<view class="padding-content menu">
				<view class="menu-name">详细地址:</view><input type="text" placeholder="请输入详细的收货地址" name="address" :value="address.address">
			</view>
			<view class="padding-content menu isDefault">
				设为默认地址
				<switch name="isDefault" color='#CB0E0E' :checked='address.is_default' />
			</view>

			<view class="padding-content menu bor-none" @tap="delAdd">
				<view class="menu-name menu-name-del">删除地址</view>
			</view>
			<button class="fix-btn" formType="submit">确认</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				region: [],
				customItem: '全部',
				id: '',
				address: {}
			};
		},
		onLoad(options) {
			console.log(options.id)
			this.id = options.id
			this.getAddressItem()
		},
		methods: {
			bindPickerChange(e) {
				this.region = e.detail.value
			},
			getAddressItem() {
				var that = this
				this.$api.get('/api/address/getAddressItem', {
					address_id: this.id
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						var data = res.data.data
						that.address = data
						that.region[0] = data.province_text
						that.region[1] = data.city_text
						that.region[2] = data.area_text
					}
				})
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
					id: this.id,
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
						uni.showToast({
							title: "修改成功!"
						})
						setTimeout(function() {
							uni.navigateBack()
						}, 1000)
					}
				})
			},
			delAdd() {
				var that = this
				uni.showModal({
					title: '确认删除该地址吗?',
					confirmColor: '#e9101f',
					success: function(res) {
						if (res.confirm) {
							that.$api.get('/api/address/delAddress', {
								id: that.id
							}, function(res) {
								console.log(res)
								if (res.data.code == 200) {
									uni.showToast({
										title: "删除成功!"
									})
									setTimeout(function() {
										uni.navigateBack()
									}, 1000)
								}
							})
						}
					}
				})

			}
		}
	}
</script>

<style>
	page{
		background-color: #F4F4F4;
	}
	.menu{
		background-color: #FFFFFF;
	}
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

	.menu-name-del {
		color: #CC1414;
	}
</style>
