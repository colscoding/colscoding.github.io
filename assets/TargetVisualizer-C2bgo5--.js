import{B as u}from"./index-Pr4wYPmb.js";import{s as g}from"./shared-DoXdG5VT.js";import"./feature-bluetooth-CV0r-lfI.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";class b extends u{static get observedAttributes(){return["target","actual","unit"]}getTemplate(){return""}onAttributeChanged(t,a,e){this.render()}getStyles(){return`
            ${g}
            :host {
                display: block;
                width: 100%;
                margin: 1rem 0;
            }
            .vis-container {
                position: relative;
                height: 40px;
                background: var(--surface-2);
                border-radius: 20px;
                overflow: hidden;
                border: 1px solid var(--color-border);
            }
            .center-line {
                position: absolute;
                left: 50%;
                top: 0;
                bottom: 0;
                width: 2px;
                background: var(--color-text-primary);
                transform: translateX(-50%);
                z-index: 2;
            }
            .target-zone {
                position: absolute;
                left: 40%;
                width: 20%;
                top: 0;
                bottom: 0;
                background: var(--color-success);
                opacity: 0.2;
                z-index: 1;
            }
            .actual-marker {
                position: absolute;
                top: 50%;
                width: 16px;
                height: 16px;
                background: var(--color-primary);
                border: 2px solid var(--surface-1);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                transition: left 0.3s ease-out;
                z-index: 3;
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }
            .actual-marker.high {
                background: var(--color-warning);
            }
            .actual-marker.low {
                background: var(--color-info);
            }
            .labels {
                display: flex;
                justify-content: space-between;
                font-size: 0.8rem;
                color: var(--color-text-secondary);
                margin-top: 4px;
            }
            .target-val {
                font-weight: bold;
                color: var(--color-text-primary);
            }
        `}formatPace(t){if(isNaN(t))return"--:--";const a=Math.floor(t),e=Math.round((t-a)*60);return`${a}:${e.toString().padStart(2,"0")}`}render(){const t=parseFloat(this.getAttribute("target")||"0"),a=parseFloat(this.getAttribute("actual")||"0"),e=this.getAttribute("unit")||"W",o=e==="min_km"||e==="min_mile";let s=50,n="";if(t>0){let r=a-t;o&&(r=-r);const m=t*.5;let i=r/m*50;i=Math.max(-50,Math.min(50,i)),s=50+i,Math.abs(r/t)>.1&&(n=r>0?"high":"low")}const l=o?this.formatPace(t):Math.round(t),c=e==="min_km"?"min/km":e==="min_mile"?"min/mi":e,d=o?"Slow":"Low",p=o?"Fast":"High";this.shadow.innerHTML=`
            <style>${this.getStyles()}</style>
            <div class="vis-container" role="img" aria-label="Target visualization: ${a}${e} vs Target ${t}${e}">
                <div class="target-zone"></div>
                <div class="center-line"></div>
                <div class="actual-marker ${n}" style="left: ${s}%"></div>
            </div>
            <div class="labels">
                <span>${d}</span>
                <span class="target-val">Target: ${l} ${c}</span>
                <span>${p}</span>
            </div>
        `}}customElements.define("bpt-target-visualizer",b);export{b as TargetVisualizer};
//# sourceMappingURL=TargetVisualizer-C2bgo5--.js.map
