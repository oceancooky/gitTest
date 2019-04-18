
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { background-color: #f4f4f4; padding-top: ",[0,20],"; }\n.",[1],"content { background-color: #fff; }\n.",[1],"content .",[1],"menu:last-child { border: none; }\nwx-picker { width: 100%; }\n",],undefined,{path:"./pages/user/bankcards/newcard/newcard.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/user/bankcards/newcard/newcard.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      