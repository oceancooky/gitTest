<script>
	import store from 'utils/store.js'
	export default {
		onLaunch: function(para) {
			//版本更新
			const updateManager = uni.getUpdateManager();
			updateManager.onCheckForUpdate(function(res) {
				// 请求完新版本信息的回调
				console.log(res.hasUpdate);
			});

			updateManager.onUpdateReady(function(res) {
				uni.showModal({
					title: '更新提示',
					content: '新版已经就绪，是否重启小程序?',
					success(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						}
					}
				});
			});

			updateManager.onUpdateFailed(function(res) {
				uni.showModal({
					title: "已经有新版本了哟~",
					content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
				});
			});
		},
		onShow: function(res) {
			//扫码、分享注册会员
			console.log('onshow',res);
			var user_id = ''
			var sceneObj = {};
			var scene = decodeURIComponent(res.query.scene);
			(scene.match(/([\w\-.]*)=([^&]*)/g) || []).forEach((str) => {
				var tmp = str.split('=');
				sceneObj[tmp[0]] = tmp[1];
			})
			user_id = res.query.user_id ? res.query.user_id : sceneObj.user_id
			store.state.userId = user_id
			console.log(store.state.userId)
		},
		onHide: function() {
			console.log('App Hide');
		},

	};
</script>

<style>
	@import url("static/base.css");
</style>
