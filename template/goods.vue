<template>
	<view class="content">
		<navigator :url="'/pages/goods_detail/goods_detail?id='+ goodsinfo.id + '&field=' + field">
			<view class="goods-item">
				<view class="goods-img">
					<image :src="goodsinfo.thumb_image" alt="" mode="widthFix"></image>
				</view>
				<view class="goods-info">
					<view class="goods-title line-clamp-2">
						{{goodsinfo.name}}
					</view>

					<view class="flex-con justify-bet">
						<view class="goods-price">
							<view class="goods-price-r">¥{{goodsinfo.price}}</view>
							<view class="goods-price-o">¥{{goodsinfo.origin_price}}</view>
						</view>
						<view class="goods-card-ordernum" v-if="goodsinfo.num">
							x{{goodsinfo.num}}
						</view>
					</view>
				</view>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		name: 'goods',
		props: {
			goodsinfo: Object,
			field: Number
		},
		data() {
			return {

			}
		},
		onLoad() {},
		methods: {}
	}
</script>

<style>
	.goods-item {
		width: 335upx;
		height: 485upx;
		background: #fff;
		border-radius: 6upx;
		overflow: hidden;
		margin-bottom: 20upx;
	}

	.goods-img {
		width: 335upx;
		height: 335upx;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.goods-img image {
		width: 100%;
		height: auto;
	}

	.goods-info {

		height: 110upx;
		padding: 20upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.goods-title {
		font-size: 24upx;
		text-align: left;
		font-weight: 400;
		color: #333;
		line-height: 30upx;
		height: 60upx;
	}

	.goods-price {
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
	}

	.goods-price-r {
		font-size: 32upx;
		font-weight: 500;
		color: rgba(203, 14, 14, 1);
	}

	.goods-price-o {
		font-size: 22upx;
		font-weight: 300;
		color: rgba(153, 153, 153, 1);
		text-decoration: line-through;
		margin-left: 6upx;
		line-height: 40upx;
	}
</style>
