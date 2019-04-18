<template>
	<view>
		<view class="content-wrap">
			<view class="content-num flex-con">
				<view>{{info.user_point}}</view>积分
			</view>
			<view class="content-nav flex-con justify-bet">
				<navigator class="content-nav-item" url="income/income">积分来源</navigator>
				<navigator class="content-nav-item" url="record/record">使用明细</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{}
			};
		},
		onLoad(){
			this.info=this.$store.state.globalData.userInfo.member
		},
		methods:{},
	}
</script>

<style>
	.content-wrap {
		background-color: #4483EB;
	}

</style>
