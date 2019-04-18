<template>
	<view class="content">
		<view class="top_tap fix-top" v-if="isVip">
			<view class="top_tap_item" :class="currentTab==index?'on':''" @tap='tabChange(index)' v-for="(item,index) in tabs"
			 :key="index">{{item}}
			</view>
		</view>
		<block v-if="!nodata">
			<view class="top-menu" :class="{fixed90:isVip}">
				<view class="top-menu-con  padding-content flex-con justify-bet">
					<label>
						<checkbox value="selectAll" :checked="selectAll" @tap="selAll" />全选</label>
					<view :class="{active:isEdit}" @tap="editIng">编辑</view>
				</view>
			</view>

			<view class="cart" :class="{mar184:isVip}">
				<view class="padding-content flex-con cart-item" v-for="(item, index) in list" :key="index">
					<checkbox value="" @tap="changeCheck(index, item.id, 1)" :checked="item.checked" />
					<view class="goods_card_container" @tap="goDetail(item)">
						<goodsCard :showNum="isShowNum" :id="item.id" :num="item.number" v-on:itemNum="setGoodsNum" :goodsinfo="item" />
					</view>
				</view>
				<view class="padding-content flex-con cart-item overdueList" v-for="(item, idx) in overdueList" :key="idx">

					<view class="flex-con-col">
						<view class='overdue overdue-del' v-if="isEdit" @tap="delOverdue(item,idx)">删除</view>
						<view class='overdue' v-else>失效</view>
					</view>

					<navigator class="goods_card_container" :url="'/pages/goods_detail/goods_detail?id=' + item.field_id + '&field=' + currentTab">
						<goodsCard :showNum="isShowNum" :id="item.id" :num="item.number" v-on:itemNum="setGoodsNum" :goodsinfo="item" />
						<view class="overdue-reason">套餐已失效或商品已下架</view>
					</navigator>
				</view>
			</view>



		</block>

		<view class="bottom-menu fix-bottom" v-if="list.length>0">

			<view class="bottom-menu-con padding-content flex-con justify-end" v-if='isEdit'>
				<button @tap="deleteCargo" class="del-butt">删除</button>
			</view>
			<view class="bottom-menu-con padding-content flex-con justify-bet" v-else>
				<view class="total flex-con">合计<view class="flex-con total-price">
						<view class="total-price-sym">￥</view>{{listInfo.amount}}
					</view>
				</view>
				<button @tap="goPay">去结算({{cargoNum}})</button>
			</view>
		</view>

		<naData :nodata="nodata" :nodataText="nodataText" :nodataImg='nodataImg'></naData>
		<login :showmask="ismask"></login>
	</view>
</template>

<script>
	import goodsCard from 'template/goods_card'
	import naData from 'template/no_data'
	import login from 'auth/login'
	export default {
		components: {
			goodsCard,
			naData,
			login
		},
		data() {
			return {
				isShowNum: true,
				selectAll: false,
				list: [],
				ismask: false,
				overdueList: [],
				listInfo: {},
				currentTab: 0,
				isEdit: false,
				cargoNum: 0,
				tabs: ['热卖专区', '购物商城', '积分商城'],
				// zoneInfo: {},
				// showPop: false,
				isVip: 0,
				nodata: false,
				nodataText: "购物车为空",
				nodataImg: '/static/img/empty_cart.png',
			}
		},
		onLoad() {

			// this.getZone()
		},
		onShow() {
			this.isVip = this.$store.state.globalData.userInfo.is_member
			this.getList()
		},
		onShareAppMessage(res) {
			if (res.from === 'button') {
				console.log(res.target)
			}
			return {
				title: '龙腾虎跃商城',
				path: '/pages/tabbar/tabbar-1/tabbar-1',
				imageUrl: '/static/img/logo.png'
			}
		},
		methods: {
			//接收子组件传递的数量
			setGoodsNum(data) {
				this.changeNum(data)
			},

			//是否编辑
			editIng() {
				this.isEdit = !this.isEdit
			},

			//去结算
			goPay() {
				if (this.cargoNum == 0) {
					return uni.showToast({
						title: '请先选中商品哦~',
						icon: "none"
					})
				}
				if (this.currentTab == 0) {
					uni.navigateTo({
						url: '/pages/pay/pay'
					})
				} else {
					uni.navigateTo({
						url: '/pages/pay/otherpay/otherpay?field=' + this.currentTab
					})
				}

			},

			tabChange: function(index) {

				this.currentTab = index
				this.getList()
			},

			//获取购物车列表
			getList() {
				var that = this
				// this.nodata = false
				this.$api.get('/api/cart/getList', {
					field: this.currentTab
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						that.listInfo = res.data.data
						var list = res.data.data.list
						var normalList = []
						var outList = []
						if (list.length == 0) {
							that.list = list
							that.nodata = true
						} else {
							that.nodata = false
							for (var i = 0; i < list.length; i++) {
								if (list[i].is_valid == 1) {
									normalList.push(list[i])
								} else {
									outList.push(list[i])
								}
							}
							console.log(normalList, outList)
							that.list = normalList
							that.overdueList = outList
							that.isCheckedAll()
						}

					}
				})
			},

			goDetail(item) {
				uni.navigateTo({
					url: '/pages/goods_detail/goods_detail?id=' + item.field_id + '&field=' + this.currentTab
				})
			},

			//全选或是反选
			selAll() {
				var that = this
				var list = this.list
				that.selectAll = !that.selectAll
				var checkId = ''
				for (var i in list) {
					list[i].checked = that.selectAll
					checkId += list[i].id + ','
				}
				that.list = list
				checkId = checkId.slice(0, checkId.length - 1)
				that.changeCheck(null, checkId)
			},

			//更新数量
			changeNum(data) {
				var that = this
				this.$api.get('/api/cart/changeNum', {
					cart_id: data.id,
					num: data.num
				}, function(res) {
					if (res.data.code != 200) {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					} else {
						that.getList()
					}
				})
			},
			//更新选中状态
			changeCheck(index, id) {
				var that = this
				if (index != null) {
					var list = this.list
					list[index].checked = list[index].checked == 0 ? 1 : 0
					that.list = list
					that.isCheckedAll()
				}
				this.$api.get('/api/cart/changeChecked', {
					field: this.currentTab,
					cart_id: id
				}, function(res) {
					if (res.data.code == 200) {
						that.getList()
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
				})
			},

			//验证是否全选
			isCheckedAll() {
				var that = this
				var checkedNum = 0
				var cargoNum = 0
				for (var i in that.list) {
					if (that.list[i].checked == 1) {
						checkedNum++
						cargoNum += that.list[i].number
					}
				}
				that.cargoNum = cargoNum
				if (checkedNum == that.list.length) {
					that.selectAll = true
				} else {
					that.selectAll = false
				}
			},

			//删除选中
			deleteCargo() {
				var that = this
				uni.showModal({
					title: '确认删除选中商品吗?',
					confirmColor: '#e9101f',
					success: function(res) {
						if (res.confirm) {
							var list = that.list
							var checkId = ''
							for (var i in list) {
								if (list[i].checked == 1) {
									checkId += list[i].id + ','
								}
							}
							checkId = checkId.slice(0, checkId.length - 1)
							that.$api.get('/api/cart/delCart', {
								cart_id: checkId
							}, function(res) {
								if (res.data.code == 200) {
									that.getList()
									that.isEdit = false
								} else {
									uni.showToast({
										title: res.data.msg,
										icon: 'none'
									})
								}
							})
						}
					}
				})
			},

			//删除失效
			delOverdue(item, idx) {
				var that = this
				uni.showModal({
					title: '确认删除选中商品吗?',
					confirmColor: '#e9101f',
					success: function(res) {
						if (res.confirm) {
							that.$api.get('/api/cart/delCart', {
								cart_id: item.id
							}, function(res) {
								if (res.data.code == 200) {
									that.getList()
									that.isEdit = false
								} else {
									uni.showToast({
										title: res.data.msg,
										icon: 'none'
									})
								}
							})
						}
					}
				})
			},
			//获取开放区域
			// 			getZone() {
			// 				var that = this
			// 				this.$api.get('/api/index/getInfo', {}, function(res) {
			// 					console.log(res)
			// 					if (res.data.code == 200) {
			// 						that.zoneInfo = res.data.data
			// 					}
			// 				})
			// 			},

			// 			closePop() {
			// 				this.showPop = false,
			// 					this.showCloseBut = false
			// 			}
		}
	}
</script>

<style>
	page {
		background-color: #f4f4f4;
		padding-bottom: 99upx;
	}

	.content {
		width: 100%;
	}

	.top-menu {
		height: 80upx;
		width: 100%;
		background-color: #fff;
		border-top: solid 1upx #f4f5f7;
		border-bottom: solid 1upx #f4f5f7;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.top-menu-con {
		height: 100%;
		font-size: 30upx;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		line-height: 36upx;
		z-index: 10;
		background-color: #FFFFFF;
	}

	.top-menu-con .active {
		color: #CC1414;
	}

	.cart {
		margin-top: 98upx;
		background-color: #FFFFFF;
	}

	.mar184 {
		margin-top: 184upx;
		;
	}

	.cart-item {
		padding: 30upx;
		border-bottom: solid 1upx #f4f4f4;
	}

	.bottom-menu {
		height: 98upx;
		width: 100%;
		background-color: #fff;
		border-top: solid 1upx #f4f5f7;
	}

	.bottom-menu-con {
		height: 100%;
		font-size: 30upx;
		color: #222222;
	}

	button {
		margin: 0;
		color: #FFFFFF;
		height: 74upx;
		font-size: 30upx;
		font-weight: 400;
		background: rgba(204, 20, 20, 1);
		border-radius: 6upx;
		line-height: 74upx;
		padding: 0 64upx;
	}

	button.del-butt {
		color: #222222;
		background-color: #FFFFFF;
		border: 2upx solid rgba(153, 153, 153, 1);
	}

	.total {
		align-items: flex-end;
		line-height: 60upx;
	}

	.total-price {
		font-size: 48upx;
		font-weight: bold;
		color: rgba(204, 27, 39, 1);
		margin-left: 12upx;
		align-items: flex-end;
		line-height: 65upx;
	}

	.total-price-sym {
		font-size: 24upx;
		line-height: 50upx;
		margin-right: 5upx;
	}

	.top_tap_item {
		box-sizing: border-box;
	}

	.top_tap_item.on {
		background-color: #cb1522;
		color: #FFFFFF;
	}

	.fixed90 {
		top: 90upx;
	}

	.overdue {
		width: 70upx;
		height: 30upx;
		line-height: 30upx;
		text-align: center;
		border-radius: 30upx;
		background-color: #999999;
		color: #FFFFFF;
		font-size: 22upx;
		margin-right: 4upx;
		margin-top: 10upx;
	}

	.overdueList .goods_card_op {
		display: none;
	}

	.overdue-reason {
		position: absolute;
		left: 200upx;
		bottom: 0upx;
		font-size: 24upx;
		color: #666666;
	}

	.overdue-del {
		color: #FFFFFF;
		background-color: #CC1414;
	}

	.nodata {
		position: fixed;
	}

	.goods_card_container {
		position: relative;
	}

	.nodata image {
		width: 192upx;
	}
</style>
