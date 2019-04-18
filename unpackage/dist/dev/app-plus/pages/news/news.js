
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"article_title { font-weight: bold; font-size: ",[0,36],"; color: #222; }\n.",[1],"article_date { font-size: ",[0,26],"; color: #666; margin-bottom: ",[0,30],"; }\nbody { padding-bottom: ",[0,30],"; }\n",],undefined,{path:"./pages/news/news.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/news/news.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      