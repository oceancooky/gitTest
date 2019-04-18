<template>
	<view class="nodata flex-con-col" v-if="nodata">
		<image :src="nodataImg?nodataImg:'/static/img/common_null.png'" mode="widthFix"></image>
		{{nodataText}}
	</view>
</template>

<script>
	export default {
		name: "noData",
		props: {
			nodata:Boolean,
			nodataText:String,
			nodataImg:String
		},
		data() {
			return {}
		}
	}
</script>

<style>
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
</style>
