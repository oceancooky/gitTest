
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { padding-bottom: ",[0,30],"; }\n",],undefined,{path:"./pages/user/about/about.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/user/about/about.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      