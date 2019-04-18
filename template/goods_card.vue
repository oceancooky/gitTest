<template>
	<view class="goods_card">
		<view class="goods_card_img" :class="{noimg:!goodsinfo.thumb_image}">
			<image :src="goodsinfo.thumb_image" alt="" mode="widthFix" lazy-load='true'></image>
		</view>

		<view class="goods_card_info">
			<view class="goods_card_title line-clamp-2">{{goodsinfo.name}}</view>
			<view class="flex-con">
				<view class="type-item" v-for="(item, index) in goodsinfo.spec_group" :key="index">{{item}}</view>
			</view>
			<view class="goods_card_op flex-con justify-bet">
				<view class="goods_card_price">
					<view class="goods_card-price-r">¥{{goodsinfo.price}}</view>
					<view class="goods_card-price-o" v-if="goodsinfo.origin_price">¥{{goodsinfo.origin_price}}</view>
				</view>
				<view class="goods-card-num flex-con" v-if="showNum" @tap.stop.prevent='stopPop'>
					<button @tap="calNum(-1)"></button><input type="number" placeholder="1" :value="num" @blur="getInputNum">
					<button @tap="calNum(1)"></button>
				</view>
				<view class="goods-card-ordernum flex-con" v-if="goodsinfo.num">
					<view>x{{goodsinfo.num}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'goodsCard',
		props: {
			showNum: Boolean,
			num: Number,
			goodsinfo: Object,
			id: Number,
		},
		methods: {
			calNum(op) {
				this.num = this.num + op
				if (this.num <= 0) {
					this.num = 1
					uni.showToast({
						title: '数量最小为1',
						icon: 'none'
					})
				}
				var data = {
					num: this.num,
					id: this.id
				}
				this.$emit('itemNum', data) //传递给父组件 更新购物车num
			},
			getInputNum(e) {
				console.log(e.detail.value)
				var data = {
					num: Number(e.detail.value),
					id: this.id
				}
				if (e.detail.value == '') {
					data.num = 1
				}
				this.$emit('itemNum', data)
			},

			//阻止冒泡
			stopPop() {}

		}
	}
</script>
<style>
	.goods_card {
		width: 100%;
		height: 180upx;
		display: flex;
		justify-content: space-between;
	}

	.goods_card_img {
		width: 180upx;
		height: 180upx;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.goods_card_img image {
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.goods_card_info {
		flex: 2;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 20upx;
		padding: 20upx 0;
	}

	.goods_card_title {
		font-size: 24upx;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		line-height: 30upx;
	}

	.goods_card_price {
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
	}

	.goods_card-price-r {
		font-size: 32upx;
		font-weight: 500;
		color: rgba(203, 14, 14, 1);
		/* line-height: 33upx; */
	}

	.goods_card-price-o {
		font-size: 22upx;
		font-weight: 300;
		color: rgba(153, 153, 153, 1);
		line-height: 40upx;
		text-decoration: line-through;
		margin-left: 10upx;
	}

	.type-item {
		background-color: #F6F5F5;
		font-size: 22upx;
		color: #999999;
		margin-right: 10upx;
		padding: 3upx 8upx;
	}

	.goods_card_container {
		flex: 2;
	}
	.noimg{
		background-image: url('data:image/png;base64,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');
		background-size: 100% ;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
