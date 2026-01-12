(function(){"use strict";const t=new Map;self.onmessage=a=>{const{type:s,id:e,interval:n}=a.data;if(s==="start"){t.has(e)&&clearInterval(t.get(e));const i=setInterval(()=>{self.postMessage({type:"tick",id:e})},n);t.set(e,i)}else s==="stop"&&t.has(e)&&(clearInterval(t.get(e)),t.delete(e))}})();
//# sourceMappingURL=timer.worker-Ty_JX1G0.js.map
