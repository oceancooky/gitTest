
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { padding-top: ",[0,100],"; background-color: #f4f4f4; }\n.",[1],"search-wrap { width: 100%; background-color: #FFFFFF; }\n.",[1],"search-box { width: ",[0,690],"; height: ",[0,64],"; margin: ",[0,16]," auto; border-radius: ",[0,32],"; background-color: #f4f4f4; font-size: ",[0,24],"; font-weight: 400; color: rgba(153, 153, 153, 1); -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"search-box wx-image { width: ",[0,25],"; height: auto; margin-right: ",[0,13],"; }\n.",[1],"search-box .",[1],"_input { -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; }\n.",[1],"zone_title { width: 100%; height: ",[0,100],"; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; position: relative; background-color: #f4f4f4; }\n.",[1],"zone_title wx-image { height: 100%; width: ",[0,174],"; }\n",],undefined,{path:"./pages/search/search.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/search/search.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      