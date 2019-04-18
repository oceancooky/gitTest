<template>
	<view>
		<view class="order-item">
			<view class="order-item-goods">
				<goodsCard :goodsinfo="info" :showNum="showNum" :num="num" v-on:itemNum="setGoodsNum" />
			</view>
			<!-- <view class="order-item-state padding-content flex-con justify-end">
				<view class="order-item-btns flex-con">

				</view>
			</view> -->
		</view>
		<view class="content martop20">
			<view class='menu padding-content font-bold'>选择售后类型</view>
			<view class="padding-content flex-con justify-bet">
				<view v-for="(item, index) in apptype" :key="index" @tap="currentTab(item.id)" class="type-btn flex-con justify-center"
				 :class="item.id == type?'sel':''">
					<image :src="item.id == type?item.img_sel:item.img_nor" mode="widthFix"></image>
					<!-- <image :src="item.img_sel" mode="widthFix" v-show="item.id == type"></image>
					<image :src="item.img_nor" mode="widthFix" v-show="item.id != type"></image> -->
					{{item.name}}
				</view>
			</view>
		</view>

		<view class="content">
			<view class='menu padding-content font-bold'>申请原因</view>
			<view class="content padding-content">
				<view class="text-container padding-top20">
					<textarea placeholder="请描述售后服务的具体原因~" @input="textdown"></textarea>
				</view>

				<view class='img_box'>
					<view v-for="(item, index) in imgpath" :key="index" class='choose_img nobord flex-con-col'>
						<image class='upload_img' :src="item" mode='widthFix'></image>

						<view class='img_delete_btn' @tap='delete_img(index)'>
							<image src='/static/img/common_del.png' mode='widthFix'></image>
						</view>
					</view>
					<view class='choose_img flex-con-col' @tap='choose_img'>
						<image src="/static/img/common_camare.png" class='photo_icon' mode='widthFix'></image>添加图片
						<view>(最多5张)</view>
					</view>
				</view>
			</view>
		</view>

		<view class="content">
			<view class='menu padding-content font-bold'>联系人</view>
			<view class="padding-content">
				<view class="padding-top20 flex-con contact-item">
					<view class="contact">姓名：</view>{{contact_info.name}}
				</view>
				<view class="padding-top20 flex-con contact-item">
					<view class="contact">联系电话：</view>{{contact_info.phone}}
				</view>
			</view>
		</view>

		<view class="padding-top20 martop20 flex-con-col sub-tips">
			提交申请后，售后专员可能与您电话沟通，
			<view>请保持手机畅通</view>
		</view>

		<view class="padding-top20 martop20"><button class="big-btn" @tap="submit()">提交</button></view>
		<loading :isLoading="isLoading"></loading>
	</view>
</template>

<script>
	import loading from 'template/loading'
	import goodsCard from 'template/goods_card'
	import http from 'utils/http.js';
	import COOKIE from 'utils/cookie.js';
	export default {
		components: {
			goodsCard,
			loading
		},
		data() {
			return {
				type: 1,
				num: 1,
				showNum: false,
				content: '',
				imgpath: [],
				info: {},
				contact_info: {},
				applyimg: [],
				isLoading: false,
				apptype: [{
						id: 1,
						name: '换货',
						img_sel: '/static/img/exchange_sel.png',
						img_nor: '/static/img/exchange_nor.png'
					},
					{
						id: 2,
						name: '退货',
						img_sel: '/static/img/return_sel.png',
						img_nor: '/static/img/return_nor.png'
					}
				]
			};
		},
		onLoad(options) {
			this.id = options.id
			this.getInfo()
		},
		methods: {
			currentTab(id) {
				this.type = id
				console.log(this.type)
			},
			//接收子组件传递的数量
			setGoodsNum(data) {
				this.num = data.num
				if (this.num > this.info.number) {
					this.num = this.info.number
					return uni.showToast({
						title: "已超过订单商品数量",
						icon: "none"
					})
				}
			},

			getInfo() {
				var that = this
				this.$api.get('/api/aftersale/getDataToApply', {
					order_goods_id: this.id
				}, function(res) {
					if (res.data.code == 200) {
						that.info = res.data.data
						if (res.data.data.number > 1) {
							that.num = res.data.data.number
							that.showNum = true
						} else {
							that.info.num = res.data.data.number
						}
						that.contact_info = res.data.data.contact_info
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
					console.log(res)
				})
			},
			//选择图片
			choose_img: function(e) {
				var that = this
				var imgs = this.imgpath
				var applyimg = this.applyimg
				if (applyimg.length >= 5) {
					return uni.showToast({
						title: '最多选择五张照片~',
						icon: 'none'
					})
				}
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: function(res) {
						// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
						var tempFilePaths = res.tempFilePaths
						that.upimg(tempFilePaths[0], tempFilePaths)
					}
				})
			},
			//上传图片
			upimg: function(uppath, showTemp) {
				this.isLoading = true
				var cookie = COOKIE.getUserCookie();
				var cookestr = ''
				if (cookie) {
					var c = 0
					for (var i in cookie) {
						if (c !== 0) {
							cookestr += " "
						}
						cookestr += i + '=' + cookie[i];
						c++;
					}
				}
				var that = this
				var imgs = this.imgpath
				var list = this.applyimg
				uni.uploadFile({
					url: http.baseUrl + '/api/common/upload',
					filePath: uppath,
					name: 'file', //文件对应的参数名字(key)
					header: {
						'Cookie': cookestr
					},
					success: function(res) {
						console.log(res)
						var result = JSON.parse(res.data);
						console.log(result)
						if (result.code == 200) {
							// list = list + ',' + (result.data.url)
							that.isLoading = false
							imgs.push(showTemp)
							that.imgpath = imgs
							list.push(result.data.url)
							that.applyimg = list
							console.log(list)
						}
					}
				})
			},

			//删除图片
			delete_img(index) {
				console.log(this.applyimg[index])
				this.$api.post('/api/common/delImage', {
					image_url: this.applyimg[index]
				}, function(res) {
					console.log(res)
					if (res.data.code == 200) {}
				})
				var applyimg = this.applyimg
				var imgpath = this.imgpath
				applyimg.splice(index, 1)
				imgpath.splice(index, 1)
				this.applyimg = applyimg
				this.imgpath = imgpath
			},

			//获取文本
			textdown: function(e) {
				this.content = e.detail.value
			},

			//提交
			submit: function() {
				if (this.content == '') {
					return uni.showToast({
						title: '请填写申请原因',
						icon: 'none'
					})
				}
				var that = this
				var data = {
					order_goods_id: this.id,
					number: this.num,
					type: this.type,
					reason: this.content,
					images: this.applyimg.join(','),
				}
				uni.showLoading({
					title: '正在提交',
				})
				this.$api.post('/api/aftersale/submitApply', data, function(res) {
					console.log(res)
					uni.hideLoading()
					if (res.data.code == 200) {
						uni.showToast({
							title: '提交成功！',
							duration: 1000,
							mask: true,
						})
						var pages = getCurrentPages();
						var prevPage = pages[pages.length - 2];
						prevPage.$vm.upDate = true
						setTimeout(function() {
							uni.navigateBack()
						}, 1000)
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: "none",
							duration: 1000,
							mask: true,
						})
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F8F8F8;
	}

	.content {
		background-color: #FFFFFF;
		overflow: hidden;
	}

	.order-item {
		margin-top: 0;
	}

	.menu {
		height: 88upx;
		border: none;
	}

	.text-container {
		border: 2upx solid rgba(205, 205, 205, 1);
		border-radius: 6upx;
		height: 200upx;
	}

	textarea {
		height: 100%;
		width: 100%;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(204, 204, 204, 1);
	}

	.img_box {
		margin: 20upx 0 60upx 0;
	}

	.choose_img {
		width: 160upx;
		height: 160upx;
		border: dashed 1upx #999;
		color: #999;
		font-size: 24upx;
		float: left;
		box-sizing: border-box;
		margin: 0 8upx 20upx 0;
		border-radius: 6upx;
		overflow: hidden;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.choose_img.nobord {
		border: none;
	}

	.upload_img {
		width: 100%;
		height: auto;
	}

	.photo_icon {
		width: 48upx;
		height: auto;
		margin-bottom: 20upx;
	}

	.contact-item {
		font-size: 28upx;
		color: #222222;

	}

	.contact {
		width: 150upx;
	}

	.sub-tips {
		font-size: 22upx;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		line-height: 30upx;
	}

	.type-btn {
		width: 335upx;
		height: 110upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0upx 4upx 14upx 0upx rgba(102, 102, 102, 0.13);
		border-radius: 6upx;
		color: #999999;
		font-size: 32upx;
	}

	.type-btn image {
		width: 60upx;
		height: auto;
		margin-right: 14upx;
	}

	.sel {
		color: #4483EB;
		background-color: #F2F7FF;
		border: 3upx solid rgba(68, 131, 235, 1);
		box-shadow: 0upx 4upx 14upx 0upx rgba(102, 102, 102, 0.13);
	}

	.img_delete_btn {
		width: 40upx;
		height: 40upx;
		overflow: hidden;
		border-radius: 40upx;
		position: absolute;
		top: 0;
		right: 0;
	}

	.img_delete_btn image {
		width: 100%;
		height: auto;
	}
</style>
