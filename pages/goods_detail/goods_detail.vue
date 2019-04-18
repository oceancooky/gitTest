<template>
	<view class="content">
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper class="swiper" circular="true" :indicator-dots="false" :autoplay="false" :duration="500" @change="getIndex">
					<swiper-item v-for="(item, index) in goodspic" :key="index">
						<view class="swiper-item">
							<image :src="item" @tap="previewImage(index)"></image>
						</view>
					</swiper-item>
				</swiper>
				<view class="pic_index">{{picIndex}}/{{goodspic.length}}</view>
			</view>
		</view>
		<view class="goods-maininfo">
			<view class="price flex-con">
				<view class="r-price">￥<view>{{goods.price}}</view>
				</view>
				<view class="o-price">￥{{goods.origin_price}}</view>
			</view>
			<view class="title">
				{{goods.name}}
			</view>
			<view class="subtilte">{{goods.intro}}</view>
			<view class="flex-con justify-bet title-sub">
				<view>销量：{{goods.sale}}</view>
				<view>运费：{{goods.postage>0?goods.postage:'免运费'}}</view>
			</view>
		</view>

		<view class="selected padding-content flex-con more more-b more-r" @tap="selectOp">
			已选 <view class="">{{selectSpecTxet}}</view>
		</view>

		<view class="padding-content menu menu-title bor-bot">
			产品详情
		</view>

		<view class="detial-content">
			<rich-text :nodes="Html"></rich-text>
		</view>

		<view class="bottom-menu fix-bottom">
			<view class="bottom-menu-con flex-con">
				<view class="s-btn flex-con-col">
					<image src="/static/img/details_icon_cus.png" mode="widthFix"></image>客服
					<button open-type="contact" v-if="customerOnline"></button>
					<button @tap="showTips" v-else></button>
				</view>
				<navigator class="s-btn flex-con-col" url="/pages/tabbar/tabbar-3/tabbar-3" open-type="switchTab">
					<image src="/static/img/details_icon_cart.png" mode="widthFix"></image>购物车
				</navigator>
				<view class="sub-btn" @tap="operateType(0)">加入购物车</view>
				<view class="sub-btn buynow" @tap="operateType(1)">立即购买</view>
			</view>
		</view>

		<view class="popup" @touchmove.stop.prevent="moveHandle" v-if="popUp" @tap="hidePop"></view>

		<view class="select-pop" :class="{ active: popUp }" @touchmove.stop.prevent="moveHandle">
			<view class="close-btn" @tap="hidePop"></view>
			<view class="padding-top20 flex-con justify-bet slelect-content">
				<view class="selectImg flex-con">
					<image :src="selectSpec.selectImg" mode="widthFix"></image>
				</view>
				<view class="selectInfo flex-con-col">
					<view class="selectPrice flex-con">价格：￥{{selectSpec.selectPrice}}
						<view>￥{{selectSpec.selectOriginPrice}}</view>
					</view>
					<view class="selectSpec">已选择：{{selectSpecTxet}}</view>
				</view>
			</view>

			<scroll-view scroll-y="true" class="spec-croll">
				<view v-for="(item, index) in specList" :key="index">
					<view class="selec-title padding-content martop20 font-bold">
						{{item.key}}
					</view>
					<view class="padding-content flex-con specWrap">
						<view class="spec-view martop20" :class="idx == item.checked?'seleType':''" v-for="(subitem, idx) in item.value"
						 :key="idx" @tap="sleType(index, idx)">{{subitem}}</view>
					</view>
				</view>
				<block v-if="field == 2">
					<view class="selec-title padding-content martop20 font-bold">
						购买类型
					</view>
					<view class="padding-content flex-con specWrap">
						<view class="spec-view martop20" :class="buyType == 2?'seleType':''" @tap="sleBuyType(2)">代售</view>
						<view class="spec-view martop20" :class="buyType == 1?'seleType':''" @tap="sleBuyType(1)">自用</view>
					</view>
				</block>
				<view class="selec-title padding-content martop20 font-bold flex-con justify-bet">
					购买数量
					<view class="goods-card-num flex-con">
						<button @tap="calNum(-1)"></button><input type="number" placeholder="1" :value="num" @blur="getInputNum">
						<button @tap="calNum(1)"></button>
					</view>
				</view>
			</scroll-view>
			<view class="submit-btn flex-con" v-if='isDone'>
				<button class="add-cart" @tap="addCart">加入购物车</button>
				<button @tap="buyNow">立即购买</button></view>
			<view class="submit-btn flex-con" v-else>
				<button @tap="confirm">确定</button></view>
		</view>

		<view class='tip-wrap' v-if="showTipBox" @touchmove.stop.prevent="moveHandle">
			<view class='tip-box flex-con-col'>
				<view class="tip-title">当前不在工作时间范围内，请您晚点再来咨询呀~</view>
				<button class='tip_confirm_btn' @tap='showTips'>
					<text>我知道了</text>
				</button>
			</view>
		</view>

		<login :showmask="ismask"></login>
	</view>

</template>

<script>
	import login from 'auth/login'
	export default {
		components: {
			login
		},
		data() {
			return {
				ismask: false,
				picIndex: 1,
				popUp: false,
				id: '',
				goods: {},
				goodspic: [],
				Html: '',
				specList: {},
				selectSpec: {},
				selectSpecTxet: '',
				buyType: 1,
				num: 1,
				isDone: false,
				opType: 1,
				field: 0,
				customerOnline: true,
				showTipBox: false,
			};
		},
		onShow() {
			this.getCustomerTime()
		},
		onLoad(options) {
			uni.showNavigationBarLoading()
			this.id = options.id
			this.field = options.field
			this.getdetail()
		},
		onShareAppMessage(res) {
			if (res.from === 'button') {
				console.log(res.target)
			}
			return {
				title: this.goods.name,
				path: '/pages/goods_detail/goods_detail?id=' + this.id + '&field=' + this.field,
				imageUrl: this.goodspic[0]
			}
		},
		methods: {
			getIndex(e) {
				this.picIndex = e.detail.current + 1
			},
			getdetail() {
				var that = this
				this.$api.get('/api/goods/detail', {
					field_id: this.id,
					field: this.field
				}, function(res) {
					console.log(res)
					uni.hideNavigationBarLoading()
					if (res.data.code == 200) {
						var data = res.data.data
						that.goods = data
						that.goodspic = data.photo_images
						that.Html = that.formatImg(data.content)
						// that.contentPic = that.getimgsrc(data.content)
						if (data.spec_group.length > 0) { //多规格处理
							that.dealSpec()
						} else {
							console.log('单规格')
							that.selectSpecTxet = data.default_spec_text
							that.selectSpec = {
								selectid: data.products.id, //获取规格id
								selectImg: data.products.image ? data.products.image : data.thumb_image, //规格图片
								selectPrice: data.products.price, //规格价格
								selectOriginPrice: data.products.origin_price
							}
						}
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						setTimeout(function() {
							uni.navigateBack()
						}, 1000)

					}
				})
			},
			//格式详情图片  宽度100%
			formatImg: function(html) {
				var newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
					var match = match.replace(/style=\"(.*)\"/gi, 'style="width: 100%;display: block;float: left;"');
					return match;
				});
				return newContent;
			},

			// 			//存放详情图片
			// 			getimgsrc(html) {
			// 				var reg = /<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim;
			// 				var imgsrcArr = [];
			// 				var tem = ''
			// 				while (tem = reg.exec(html)) {
			// 					imgsrcArr.push(tem[2]);
			// 				}
			// 				return imgsrcArr;
			// 			},


			//初始化规格
			dealSpec() {
				var specList = this.goods.spec_group
				var default_spec_text = this.goods.default_spec_text
				for (var i = 0; i < specList.length; i++) {
					for (var j = 0; j < specList[i].value.length; j++) {
						if (default_spec_text.indexOf(specList[i].value[j]) != -1) {
							specList[i].checked = j
						}
					}
				}
				this.specList = specList
				this.specResult()
			},

			//拼接规格信息
			specResult() {
				var specTxet = ''
				var specList = this.specList
				for (var i = 0; i < specList.length; i++) {
					var itemCheckid = specList[i].checked
					specTxet = specTxet + specList[i].value[itemCheckid] + ','
				}
				specTxet = specTxet.slice(0, specTxet.length - 1)
				this.selectSpecTxet = specTxet
				this.selectSpec = {
					selectid: this.goods.products[specTxet].id, //获取规格id
					selectImg: this.goods.products[specTxet].image ? this.goods.products[specTxet].image : this.goods.thumb_image, //规格图片
					selectPrice: this.goods.products[specTxet].price, //规格价格
					selectOriginPrice: this.goods.products[specTxet].origin_price
				}
				console.log(this.selectSpec.selectid, this.selectSpecTxet)
			},

			//数量加减
			calNum(op) {
				this.num = this.num + op
				if (this.num <= 0) {
					this.num = 1
					uni.showToast({
						title: '数量最小为1',
						icon: 'none'
					})
				}
			},

			getInputNum(e) {
				this.num = Number(e.detail.value)
			},

			//购买类型
			sleBuyType(state) {
				this.buyType = state
			},

			//选择规格
			sleType(index, idx) {
				var that = this
				var specList = this.specList
				specList[index].checked = idx
				that.specList = {}
				that.specList = specList
				that.specResult()
			},

			//记录是立即购买还是加入购物车
			operateType(op) {
				this.opType = op
				this.showPop()
			},

			//立即购买
			buyNow() {
				//先添加到购物车
				var that = this
				this.$api.post('/api/order/directOrder', {
					field_id: this.id,
					field: this.field,
					field_product_id: this.selectSpec.selectid,
					number: this.num,
					type: this.buyType,
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						if (that.field == 0) {
							uni.navigateTo({
								url: '/pages/pay/pay'
							})
						} else {
							uni.navigateTo({
								url: '/pages/pay/otherpay/otherpay?field=' + that.field
							})
						}

					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
				})
			},

			//加入购物车
			addCart() {
				var that = this
				this.$api.get('/api/cart/addCart', {
					field_id: this.goods.id,
					field: this.field,
					field_product_id: this.selectSpec.selectid,
					num: this.num,
					type: this.buyType
				}, function(res) {
					console.log(res)
					var icon = res.data.code == 200 ? 'success' : 'none'
					uni.showToast({
						title: res.data.msg,
						icon: icon
					})
				})
			},

			//确认
			confirm() {
				this.hidePop()
				if (this.opType == 0) {
					this.addCart()
				} else {
					this.buyNow()
				}
			},

			selectOp() {
				this.isDone = true
				this.showPop()
			},

			showPop() {
				this.popUp = true
			},
			hidePop() {
				this.popUp = false
				this.isDone = false
			},
			//客服是否在线
			getCustomerTime() {
				var that = this
				this.$api.get('/api/common/getContent', {}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						that.customerOnline = res.data.data.customer_online.flag
					}
				})
			},
			showTips() {
				this.showTipBox = !this.showTipBox
			},

			//顶部大图
			previewImage(index) {
				uni.previewImage({
					current: this.goodspic[index],
					urls: this.goodspic
				});
			},

			// 			//详情大图
			// 			contentImage() {
			// 				uni.previewImage({
			// 
			// 					urls: this.contentPic
			// 				});
			// 			}
		}
	}
</script>

<style>
	page {
		padding-bottom: 99upx;
		position: relative;
	}

	image {
		display: block;
	}

	.page-section-spacing {
		position: relative;
	}

	.swiper {
		height: 750upx;
	}

	.swiper-item {
		display: block;
		height: 750upx;
		line-height: 750upx;
		text-align: center;
		color: #FFFFFF;
	}

	.swiper-item image {
		width: 100%;
		height: 100%;
	}

	.swiper-list {
		margin-top: 40upx;
		margin-bottom: 0;
	}

	.goods-maininfo {
		padding: 20upx 30upx;
	}

	.pic_index {
		width: 80upx;
		height: 40upx;
		text-align: center;
		line-height: 40upx;
		border-radius: 40upx;
		color: #fff;
		font-size: 24upx;
		background-color: rgba(0, 0, 0, 0.2);
		position: absolute;
		bottom: 30upx;
		right: 30upx;
	}

	.price {
		align-items: flex-end;
	}

	.r-price {
		font-size: 24upx;
		font-weight: bold;
		color: rgba(203, 21, 34, 1);
	}

	.r-price view {
		font-size: 48upx;
		display: inline-block;
	}

	.o-price {
		font-size: 22upx;
		font-weight: 400;
		color: #999999;
		text-decoration: line-through;
		margin-left: 12upx;
		line-height: 50upx;
	}

	.selected {
		height: 80upx;
		font-size: 24upx;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		border-top: solid 1upx #f4f5f7;

	}

	.selected view {
		font-size: 30upx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		margin-left: 28upx;
	}

	.title {
		font-size: 32upx;
		font-weight: 500;
		color: rgba(34, 34, 34, 1);
		line-height: 40upx;
	}

	.subtilte {
		font-size: 24upx;
		color: #666666;
		margin-top: 10upx;
	}

	.title-sub {
		padding: 20upx 0;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
	}

	.menu-title {
		border-top: solid 20upx #f3f5f7;
	}

	.detial-content {
		width: 100%;
		overflow: hidden;
	}

	.detial-content image {
		width: 100%;
		height: auto;
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
		align-items: center;
	}

	.s-btn {
		height: 100%;
		width: 155upx;
		background-color: #FFFFFF;
		color: #666666;
		font-size: 22upx;
		position: relative;
	}

	.s-btn image {
		width: 44upx;
		height: auto;
		margin-bottom: 6upx;
	}

	.sub-btn {
		height: 100%;
		background-color: #FFA838;
		line-height: 98upx;
		text-align: center;
		color: #FFFFFF;
		font-size: 30upx;
		font-weight: 400;
		flex: 2;
	}

	.buynow {
		background-color: #CB0E0E;
	}

	.slelect-content {
		margin-top: 15upx;
	}

	.selectImg {
		width: 170upx;
		height: 170upx;
		overflow: hidden;
		border: 1upx solid rgba(233, 233, 233, 1)
	}

	.selectImg image {
		width: 100%;
		height: auto;
	}

	.selectInfo {
		flex: 2;
		margin-left: 20upx;
		justify-content: flex-end;
		align-items: flex-start;
		font-size: 24upx;
		height: 170upx;
	}

	.selectPrice {
		color: rgba(203, 14, 14, 1);
	}

	.selectPrice view {
		font-size: 20upx;
		color: #666666;
		text-decoration: line-through;
		margin-left: 10upx;
	}

	.selectSpec {
		color: rgba(51, 51, 51, 1);
		font-size: 26upx;
		margin: 20upx 0 12upx 0;
	}

	.selec-title {
		font-size: 26upx;
		color: rgba(51, 51, 51, 1);
	}

	.specWrap {
		overflow: hidden;
		flex-wrap: wrap;
	}

	.spec-view {
		height: 60upx;
		background: rgba(246, 245, 245, 1);
		border-radius: 5upx;
		padding: 0 30upx;
		font-size: 24upx;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		text-align: center;
		margin-right: 30upx;
		line-height: 60upx;
		min-width: 80upx;
	}

	.seleType {
		color: #FFFFFF;
		background-color: rgba(235, 42, 56, 1);
	}

	.goods-card-num {
		height: 60upx;
	}

	.goods-card-num button {
		width: 60upx;
		height: 60upx;
		background-size: 40upx 40upx;
	}

	.submit-btn {
		width: 100%;
		height: 100upx;
		position: absolute;
		bottom: 0;
	}

	.submit-btn button {
		height: 100%;
		line-height: 100upx;
		border-radius: 0;
		flex: 1;
		font-size: 30upx;
		color: #FFFFFF;
		background-color: #CB0E0E;
	}

	.submit-btn button.add-cart {
		background-color: #FFA838;
	}

	.spec-croll {
		height: 510upx;
	}

	.s-btn button {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 10;
		left: 0;
		top: 0;
	}
</style>
