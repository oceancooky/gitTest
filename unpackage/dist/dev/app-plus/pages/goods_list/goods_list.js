
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { padding-top: ",[0,40],"; background-color: #f4f4f4; }\n.",[1],"nodata { width: ",[0,405],"; position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); font-size: ",[0,28],"; font-weight: 500; color: rgba(155, 155, 155, 1); text-align: center; overflow: hidden; }\n.",[1],"nodata wx-image { width: 100%; height: auto; margin-bottom: ",[0,40],"; }\n.",[1],"goods_con{ position: relative; }\n.",[1],"goodsmask{ width: 100%; height: 100%; position: absolute; z-index: 10; left: 0; top: 0; }\n",],undefined,{path:"./pages/goods_list/goods_list.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/goods_list/goods_list.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      