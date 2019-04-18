<template>
	<view class="goods_wrap">
		<view class="goods_con" v-for="(item, index) in list" :key="index" @tap='godetail'>
			<!-- <view class="goodsmask" v-if="!zoneOpen" @tap='showTips'></view> -->
			<goods :goodsinfo="item" :field="field" />
		</view>

		<naData :nodata="nodata" :nodataText="nodataText"></naData>
		<loading :isLoading="isLoading"></loading>
	</view>
</template>

<script>
	import goods from '../../template/goods'
	import naData from '../../template/no_data'
	import loading from 'template/loading'
	export default {
		components: {
			naData,
			goods,
			loading
		},
		data() {
			return {
				list: [],
				nodata: false,
				nodataText: '还没有代售商品哦~',
				field: 1,
				zoneOpen: true,
				showPop: false,
				isLoading: false,
			};
		},
		onLoad() {

		},
		onShow() {
			this.getlist()
			this.showLoading()
		},
		methods: {
			showLoading() {
				this.isLoading = true
				console.log(this.isLoading)
				setTimeout(() => {
					this.isLoading = false
					console.log(this.isLoading)
				}, 800);
			},
			getlist() {
				var that = this
				this.$api.get('/api/member/myGoods', {}, function(res) {
					console.log(res)
					if (res.data.code == 200) {
						var list = res.data.data
						setTimeout(function(res) {
							that.list = list
							if (that.list.length == 0) {
								that.nodata = true
							}
						}, 800)
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
	page {
		padding-top: 40upx;
		background-color: #f4f4f4;
	}

	.nodata {
		width: 405upx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-size: 28upx;
		font-weight: 500;
		color: rgba(155, 155, 155, 1);
		text-align: center;
		overflow: hidden;
	}

	.nodata image {
		width: 100%;
		height: auto;
		margin-bottom: 40upx;
	}

	.goods_con {
		position: relative;
	}

	.goodsmask {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 10;
		left: 0;
		top: 0;
	}
</style>
