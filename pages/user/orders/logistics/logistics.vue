<template>
	<view>

		<view class="log_goods flex-con padding-top20">
			<view class='log_goods_img'>
				<image :src='info.goods_img' mode='widthFix'></image>
			</view>
			<view class='log_goods_info'>
				<view class='log_goods_numb'>订单编号：
					<text>{{info.delivery_no}}</text>
				</view>
				<view class='log_goods_numb'>承运公司：{{info.delivery_company_name}}</view>
			</view>
		</view>

		<view class='delivery_msg' v-if="deliveryInfo.status==0">没有查询到物流信息</view>

		<view class='padding-top20 martop20' v-else>
			<view class='log_info' v-for="(item, index) in deliveryInfo.data" :key='index'>
				<view class='log_state'>
					<view class='log_state_cicle_big' v-if="index==0">
						<view class='log_state_cicle_nomal'></view>
					</view>
					<view class='log_state_cicle_small' v-else></view>
					<view class='log_state_line'></view>
				</view>
				<view class='log_text'>
					<view class='log_title'>
						{{item.context}}
					</view>
					<view class='log_date'>{{item.time}}</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				deliveryInfo: {},
				info: {}
			};
		},
		onLoad(options) {
			console.log(options)
			this.id = options.id
			if (options.from) {
				this.getAfterDelivery()
			} else {
				this.getInfo()
			}
		},
		methods: {
			getInfo() {
				var that = this
				this.$api.get('/api/delivery/getDeliveryInfo', {
					order_id: this.id
				}, function(res) {
					if (res.data.code == 200) {
						console.log(res)
						var data = res.data.data
						that.info = data
						that.deliveryInfo = data.delivery
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
				})
			},
			getAfterDelivery() {
				var that = this
				this.$api.get('/api/aftersale/getDeliveryInfo', {
					aftersale_id: this.id
				}, function(res) {
					if (res.data.code == 200) {
						console.log(res)
						var data = res.data.data
						that.info = data
						that.deliveryInfo = data.delivery
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
	.log_goods {
		height: 150upx;
		border-bottom: solid 20upx #f8f8f8;
		border-top: solid 1upx #ececec;
	}

	.log_goods_img {
		width: 150upx;
		height: 150upx;
		overflow: hidden;
		margin-right: 20upx;
	}

	.log_goods_img image {
		width: 100%;
		height: auto;
	}

	.log_goods_info {
		font-size: 28upx;
		color: #666;
		font-weight: bold;
	}

	.log_goods_info text {
		color: #cb0e0e;
	}

	.log_info {
		display: flex;
		position: relative;
		height: 130upx;
	}

	.log_state {
		width: 30upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
	}

	.log_text {
		color: #666;
		flex: 2
	}

	.log_title {
		font-size: 24upx;
		margin-bottom: 8upx;
		word-break: break-all;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.martop20 .log_info:first-child .log_title {
		font-weight: bold;
		color: #222222;
	}

	.log_date {
		font-size: 26upx;
	}

	.log_state_cicle_big {
		background-color: #eeb2b2;
		width: 30upx;
		height: 30upx;
		border-radius: 30upx;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	.log_state_cicle_nomal {
		background-color: #cb0e0e;
		width: 20upx;
		height: 20upx;
		border-radius: 20upx;
	}

	.log_state_line {
		width: 1upx;
		background-color: hsl(0, 0%, 93%);
		position: absolute;
		left: 50%;
		/* top: 34upx; */
		transform: translateX(-50%);
		z-index: 1;
		height: 100%;
	}

	.log_state_cicle_small {
		width: 15upx;
		height: 15upx;
		position: absolute;
		background-color: #ececec;
		border-radius: 15upx;
		left: 50%;
		transform: translateX(-50%);
	}

	.padding-top20 .log_info:last-child .log_state_line {
		display: none;
	}

	.delivery_msg {
		font-size: 26upx;
		color: #666;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%)
	}
</style>
