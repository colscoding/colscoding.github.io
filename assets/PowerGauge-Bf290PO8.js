import{B as y}from"./index-Pr4wYPmb.js";import{s as b}from"./shared-DoXdG5VT.js";import{e as f}from"./elementCache-Cg-Rl8c9.js";import"./feature-bluetooth-CV0r-lfI.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";const g=[{name:"Recovery",min:0,max:.55},{name:"Endurance",min:.55,max:.75},{name:"Tempo",min:.75,max:.9},{name:"Threshold",min:.9,max:1.05},{name:"VO2 Max",min:1.05,max:1.2},{name:"Anaerobic",min:1.2,max:1.5},{name:"Neuromuscular",min:1.5,max:99.9}];class k extends y{animationFrame=null;currentDisplayValue=0;static get observedAttributes(){return["value","ftp","max","show-zones","size"]}getStyles(){return`
            ${b}

            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                --gauge-size: 200px;
                /* Default to accent color if no zone */
                --gauge-color: var(--color-primary-500); 
            }
            
            .gauge-container {
                position: relative;
                width: var(--gauge-size);
                height: var(--gauge-size);
            }
            
            .gauge-svg {
                width: 100%;
                height: 100%;
                transform: rotate(-135deg);
            }
            
            .gauge-background {
                fill: none;
                stroke: var(--bg-tertiary);
                stroke-width: 12;
                stroke-linecap: round;
            }
            
            .gauge-zone {
                fill: none;
                stroke-width: 12;
                stroke-linecap: round;
                opacity: 0.3;
                transition: opacity var(--transition-normal);
            }
            
            .gauge-zone.active {
                opacity: 1;
            }
            
            /* Zone Colors binding via CSS variables */
            .gauge-zone[data-zone="1"] { stroke: var(--zone-1-color); }
            .gauge-zone[data-zone="2"] { stroke: var(--zone-2-color); }
            .gauge-zone[data-zone="3"] { stroke: var(--zone-3-color); }
            .gauge-zone[data-zone="4"] { stroke: var(--zone-4-color); }
            .gauge-zone[data-zone="5"] { stroke: var(--zone-5-color); }
            .gauge-zone[data-zone="6"] { stroke: var(--zone-6-color); }
            .gauge-zone[data-zone="7"] { stroke: var(--zone-7-color); }
            
            .gauge-value-arc {
                fill: none;
                stroke: var(--gauge-color);
                stroke-width: 14;
                stroke-linecap: round;
                transition: stroke var(--transition-normal);
            }
            
            .gauge-center {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
            }
            
            .gauge-value {
                font-size: calc(var(--gauge-size) * 0.2);
                font-weight: var(--font-weight-bold);
                color: var(--gauge-color, var(--text-primary));
                line-height: 1;
                transition: color var(--transition-normal);
            }
            
            .gauge-unit {
                font-size: calc(var(--gauge-size) * 0.08);
                color: var(--text-secondary);
            }
            
            .gauge-zone-label {
                font-size: calc(var(--gauge-size) * 0.07);
                color: var(--gauge-color, var(--text-secondary));
                margin-top: var(--space-1);
                font-weight: var(--font-weight-medium);
                transition: color var(--transition-normal);
            }
            
            .gauge-ftp {
                font-size: calc(var(--gauge-size) * 0.06);
                color: var(--text-tertiary);
                margin-top: 2px;
            }
            
            /* Animation */
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.7; }
            }
            
            .gauge-value-arc.high-power {
                animation: pulse 0.5s ease-in-out infinite;
            }
        `}getTemplate(){const e=parseInt(this.getAttribute("size")||"200",10);this.style.setProperty("--gauge-size",`${e}px`);const t=parseInt(this.getAttribute("value")||"0",10),n=parseInt(this.getAttribute("ftp")||"200",10),l=parseInt(this.getAttribute("max")||"500",10),i=this.getAttribute("show-zones")!=="false",s=80,a=2*Math.PI*s,r=a*.75,c=n>0?t/n:0,o=this.getZone(c),u=o?g.indexOf(o):-1,m=u>=0?u+1:0;let h="var(--color-primary-500)";m>0&&(h=`var(--zone-${m}-color)`);const d=Math.min(t/l,1),p=r*(1-d);return this.style.setProperty("--gauge-color",h),`
            <div class="gauge-container">
                <svg class="gauge-svg" viewBox="0 0 200 200">
                    <!-- Background arc -->
                    <circle 
                        class="gauge-background"
                        cx="100" cy="100" r="${s}"
                        stroke-dasharray="${r} ${a}"
                    />
                    
                    ${i?this.renderZoneArcs(s,r,a,c):""}
                    
                    <!-- Value arc -->
                    <circle 
                        class="gauge-value-arc ${c>1.2?"high-power":""}"
                        cx="100" cy="100" r="${s}"
                        stroke-dasharray="${r} ${a}"
                        stroke-dashoffset="${p}"
                    />
                </svg>
                
                <div class="gauge-center">
                    <div class="gauge-value">${t}</div>
                    <div class="gauge-unit">watts</div>
                    ${o?`<div class="gauge-zone-label">${o.name}</div>`:""}
                    ${n>0?`<div class="gauge-ftp">FTP: ${n}W</div>`:""}
                </div>
            </div>
        `}renderZoneArcs(e,t,n,l){const i=parseInt(this.getAttribute("ftp")||"200",10),s=parseInt(this.getAttribute("max")||"500",10);return i<=0?"":g.map((a,r)=>{const c=a.min*i/s,o=Math.min(a.max*i/s,1),u=(o-c)*t,m=t*(1-o);return`
                <circle 
                    class="gauge-zone ${l>=a.min&&l<a.max?"active":""}"
                    cx="100" cy="100" r="${e}"
                    stroke-dasharray="${u} ${n}"
                    stroke-dashoffset="${m}"
                    data-zone="${r+1}"
                />
            `}).join("")}getZone(e){for(const t of g)if(e>=t.min&&e<t.max)return t;return e>=g[g.length-1].max?g[g.length-1]:null}onAttributeChanged(e,t,n){const s=2*Math.PI*80*.75;if(e==="value"&&this.shadow.childElementCount>0){const a=parseInt(n||"0",10),r=parseInt(this.getAttribute("ftp")||"200",10),c=parseInt(this.getAttribute("max")||"500",10),o=f.getShadow(this,".gauge-value");o&&(o.textContent=String(a));const u=r>0?a/r:0,m=this.getZone(u),h=m?g.indexOf(m):-1,d=h>=0?h+1:0;let p="var(--color-primary-500)";d>0&&(p=`var(--zone-${d}-color)`),this.style.setProperty("--gauge-color",p);const v=f.getShadow(this,".gauge-value-arc");if(v){const z=Math.min(a/c,1),x=s*(1-z);v.setAttribute("stroke-dashoffset",String(x)),u>1.2?v.classList.add("high-power"):v.classList.remove("high-power")}return}this.render()}onDisconnected(){this.animationFrame&&cancelAnimationFrame(this.animationFrame)}animateToValue(e,t=300){const n=this.currentDisplayValue,l=performance.now(),i=s=>{const a=s-l,r=Math.min(a/t,1),c=1-Math.pow(1-r,3),o=Math.round(n+(e-n)*c);this.currentDisplayValue=o,this.setAttribute("value",String(o)),r<1&&(this.animationFrame=requestAnimationFrame(i))};this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(i)}setValue(e,t=!1){t?this.animateToValue(e):(this.currentDisplayValue=e,this.setAttribute("value",String(e)))}setFTP(e){this.setAttribute("ftp",String(e))}}customElements.define("bpt-power-gauge",k);export{k as PowerGauge};
//# sourceMappingURL=PowerGauge-Bf290PO8.js.map
