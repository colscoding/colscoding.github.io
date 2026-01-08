(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();class ge extends HTMLElement{shadow;_initialized=!1;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._initialized||(this.render(),this.setupEventListeners(),this._initialized=!0),this.onConnected()}disconnectedCallback(){this.onDisconnected()}attributeChangedCallback(e,t,o){t!==o&&this._initialized&&this.onAttributeChanged(e,t,o)}getBaseStyles(){return`
            :host {
                display: block;
                box-sizing: border-box;
            }
            
            :host([hidden]) {
                display: none;
            }
            
            *,
            *::before,
            *::after {
                box-sizing: inherit;
            }
            
            /* Respect reduced motion preferences */
            @media (prefers-reduced-motion: reduce) {
                *,
                *::before,
                *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            }
        `}render(){this.shadow.innerHTML=`
            <style>
                ${this.getBaseStyles()}
                ${this.getStyles()}
            </style>
            ${this.getTemplate()}
        `}setupEventListeners(){}onConnected(){}onDisconnected(){}onAttributeChanged(e,t,o){}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}query(e){return this.shadow.querySelector(e)}queryAll(e){return this.shadow.querySelectorAll(e)}}const It={1:{bg:"rgba(74, 144, 226, 0.15)",text:"#2563eb",border:"#3b82f6"},2:{bg:"rgba(34, 197, 94, 0.15)",text:"#16a34a",border:"#22c55e"},3:{bg:"rgba(234, 179, 8, 0.15)",text:"#ca8a04",border:"#eab308"},4:{bg:"rgba(249, 115, 22, 0.15)",text:"#ea580c",border:"#f97316"},5:{bg:"rgba(239, 68, 68, 0.15)",text:"#dc2626",border:"#ef4444"},6:{bg:"rgba(168, 85, 247, 0.15)",text:"#9333ea",border:"#a855f7"},7:{bg:"rgba(236, 72, 153, 0.15)",text:"#db2777",border:"#ec4899"}};class _n extends ge{static get observedAttributes(){return["label","value","unit","icon","zone","zone-name","connected","show-avg"]}getStyles(){return`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 8px;
                transition: background-color 0.3s ease, border-color 0.3s ease;
                border-radius: 8px;
                min-width: 100px;
            }
            
            :host([zone]) {
                border-left: 4px solid var(--zone-border-color, transparent);
            }
            
            .label {
                font-size: clamp(12px, 3cqh, 16px);
                color: var(--color-text-secondary, #656d76);
                margin-bottom: 4px;
                display: flex;
                align-items: center;
                gap: 4px;
            }
            
            .icon {
                font-size: 1.1em;
            }
            
            .value-container {
                display: flex;
                align-items: baseline;
                gap: 4px;
            }
            
            .value {
                font-size: clamp(32px, 16cqh, 72px);
                font-weight: bold;
                color: var(--zone-text-color, var(--color-text-primary, #1f2328));
                line-height: 1;
                transition: color 0.3s ease;
            }
            
            .value.disconnected {
                color: var(--color-text-muted, #8b949e);
            }
            
            .unit {
                font-size: clamp(12px, 4cqh, 18px);
                color: var(--color-text-secondary, #656d76);
            }
            
            .avg-indicator {
                font-size: clamp(8px, 2cqh, 12px);
                color: var(--color-text-muted, #8b949e);
                vertical-align: super;
            }
            
            .zone-badge {
                font-size: clamp(10px, 2.5cqh, 14px);
                padding: 2px 8px;
                border-radius: 12px;
                margin-top: 4px;
                background-color: var(--zone-bg-color, transparent);
                color: var(--zone-text-color, var(--color-text-secondary, #656d76));
                font-weight: 500;
                opacity: 0;
                transform: translateY(-4px);
                transition: opacity 0.2s ease, transform 0.2s ease;
            }
            
            :host([zone]) .zone-badge {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* High contrast mode support */
            :host-context([data-high-contrast="true"]) .value {
                text-decoration: underline;
                text-decoration-style: dotted;
                text-underline-offset: 4px;
            }
            
            :host-context([data-high-contrast="true"]) {
                border-width: 3px;
            }
        `}getTemplate(){const e=this.getAttribute("label")||"",t=this.getAttribute("value")||"--",o=this.getAttribute("unit")||"",s=this.getAttribute("icon")||"",a=this.getAttribute("zone-name")||"",r=this.hasAttribute("show-avg"),i=this.getAttribute("connected")!=="false";return`
            <div class="label">
                ${s?`<span class="icon" aria-hidden="true">${s}</span>`:""}
                <span>${e}</span>
            </div>
            <div class="value-container">
                <span class="value ${i?"":"disconnected"}" 
                      aria-live="polite" 
                      aria-label="${e}: ${t} ${o}">
                    ${t}${r?'<span class="avg-indicator">(3s)</span>':""}
                </span>
                ${o?`<span class="unit">${o}</span>`:""}
            </div>
            <div class="zone-badge" aria-live="polite">
                ${a?`Zone: ${a}`:""}
            </div>
        `}onAttributeChanged(e,t,o){e==="zone"&&this.updateZoneStyles(o),this.render()}updateZoneStyles(e){if(e&&It[e]){const t=It[e];this.style.setProperty("--zone-bg-color",t.bg),this.style.setProperty("--zone-text-color",t.text),this.style.setProperty("--zone-border-color",t.border),this.style.backgroundColor=t.bg}else this.style.removeProperty("--zone-bg-color"),this.style.removeProperty("--zone-text-color"),this.style.removeProperty("--zone-border-color"),this.style.backgroundColor=""}setValue(e){this.setAttribute("value",String(e))}setZone(e,t){e!==null?(this.setAttribute("zone",String(e)),t&&this.setAttribute("zone-name",t)):(this.removeAttribute("zone"),this.removeAttribute("zone-name"))}setConnected(e){this.setAttribute("connected",String(e))}}customElements.define("bpt-metric-display",_n);const fe=[{name:"Recovery",min:0,max:.55,color:"#4a90d9"},{name:"Endurance",min:.55,max:.75,color:"#22c55e"},{name:"Tempo",min:.75,max:.9,color:"#eab308"},{name:"Threshold",min:.9,max:1.05,color:"#f97316"},{name:"VO2max",min:1.05,max:1.2,color:"#ef4444"},{name:"Anaerobic",min:1.2,max:1.5,color:"#a855f7"},{name:"Neuromuscular",min:1.5,max:2,color:"#ec4899"}];class Pn extends ge{animationFrame=null;currentDisplayValue=0;static get observedAttributes(){return["value","ftp","max","show-zones","size"]}getStyles(){return`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                --gauge-size: 200px;
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
                stroke: var(--color-bg-tertiary, #f0f0f0);
                stroke-width: 12;
                stroke-linecap: round;
            }
            
            .gauge-zone {
                fill: none;
                stroke-width: 12;
                stroke-linecap: round;
                opacity: 0.3;
                transition: opacity 0.3s ease;
            }
            
            .gauge-zone.active {
                opacity: 1;
            }
            
            .gauge-value-arc {
                fill: none;
                stroke: var(--gauge-color, #2196F3);
                stroke-width: 14;
                stroke-linecap: round;
                transition: stroke 0.3s ease;
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
                font-weight: bold;
                color: var(--gauge-color, var(--color-text-primary, #1f2328));
                line-height: 1;
                transition: color 0.3s ease;
            }
            
            .gauge-unit {
                font-size: calc(var(--gauge-size) * 0.08);
                color: var(--color-text-secondary, #656d76);
            }
            
            .gauge-zone-label {
                font-size: calc(var(--gauge-size) * 0.07);
                color: var(--gauge-color, var(--color-text-secondary, #656d76));
                margin-top: 4px;
                font-weight: 500;
                transition: color 0.3s ease;
            }
            
            .gauge-ftp {
                font-size: calc(var(--gauge-size) * 0.06);
                color: var(--color-text-muted, #8b949e);
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
        `}getTemplate(){const e=parseInt(this.getAttribute("size")||"200",10);this.style.setProperty("--gauge-size",`${e}px`);const t=parseInt(this.getAttribute("value")||"0",10),o=parseInt(this.getAttribute("ftp")||"200",10),s=parseInt(this.getAttribute("max")||"500",10),a=this.getAttribute("show-zones")!=="false",r=80,i=2*Math.PI*r,c=i*.75,l=o>0?t/o:0,p=this.getZone(l),d=p?p.color:"#2196F3",m=Math.min(t/s,1),u=c*(1-m);return`
            <div class="gauge-container">
                <svg class="gauge-svg" viewBox="0 0 200 200">
                    <!-- Background arc -->
                    <circle 
                        class="gauge-background"
                        cx="100" cy="100" r="${r}"
                        stroke-dasharray="${c} ${i}"
                    />
                    
                    ${a?this.renderZoneArcs(r,c,i,l):""}
                    
                    <!-- Value arc -->
                    <circle 
                        class="gauge-value-arc ${l>1.2?"high-power":""}"
                        cx="100" cy="100" r="${r}"
                        stroke-dasharray="${c} ${i}"
                        stroke-dashoffset="${u}"
                        style="stroke: ${d}"
                    />
                </svg>
                
                <div class="gauge-center">
                    <div class="gauge-value" style="color: ${d}">${t}</div>
                    <div class="gauge-unit">watts</div>
                    ${p?`<div class="gauge-zone-label" style="color: ${d}">${p.name}</div>`:""}
                    ${o>0?`<div class="gauge-ftp">FTP: ${o}W</div>`:""}
                </div>
            </div>
        `}renderZoneArcs(e,t,o,s){const a=parseInt(this.getAttribute("ftp")||"200",10),r=parseInt(this.getAttribute("max")||"500",10);return a<=0?"":fe.map((i,c)=>{const l=i.min*a/r,p=Math.min(i.max*a/r,1),d=(p-l)*t,m=t*(1-p);return`
                <circle 
                    class="gauge-zone ${s>=i.min&&s<i.max?"active":""}"
                    cx="100" cy="100" r="${e}"
                    stroke="${i.color}"
                    stroke-dasharray="${d} ${o}"
                    stroke-dashoffset="${m}"
                    data-zone="${c+1}"
                />
            `}).join("")}getZone(e){for(const t of fe)if(e>=t.min&&e<t.max)return t;return e>=fe[fe.length-1].max?fe[fe.length-1]:null}onAttributeChanged(){this.render()}onDisconnected(){this.animationFrame&&cancelAnimationFrame(this.animationFrame)}animateToValue(e,t=300){const o=this.currentDisplayValue,s=performance.now(),a=r=>{const i=r-s,c=Math.min(i/t,1),l=1-Math.pow(1-c,3),p=Math.round(o+(e-o)*l);this.currentDisplayValue=p,this.setAttribute("value",String(p)),c<1&&(this.animationFrame=requestAnimationFrame(a))};this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(a)}setValue(e,t=!1){t?this.animateToValue(e):(this.currentDisplayValue=e,this.setAttribute("value",String(e)))}setFTP(e){this.setAttribute("ftp",String(e))}}customElements.define("bpt-power-gauge",Pn);const $t={1:{bg:"rgba(74, 144, 226, 0.15)",fill:"#3b82f6",text:"#2563eb"},2:{bg:"rgba(34, 197, 94, 0.15)",fill:"#22c55e",text:"#16a34a"},3:{bg:"rgba(234, 179, 8, 0.15)",fill:"#eab308",text:"#ca8a04"},4:{bg:"rgba(249, 115, 22, 0.15)",fill:"#f97316",text:"#ea580c"},5:{bg:"rgba(239, 68, 68, 0.15)",fill:"#ef4444",text:"#dc2626"},6:{bg:"rgba(168, 85, 247, 0.15)",fill:"#a855f7",text:"#9333ea"},7:{bg:"rgba(236, 72, 153, 0.15)",fill:"#ec4899",text:"#db2777"}};class Nn extends ge{static get observedAttributes(){return["zone","zone-name","percent","type","compact"]}getStyles(){return`
            :host {
                display: flex;
                flex-direction: column;
                gap: 4px;
                padding: 8px;
                border-radius: 8px;
                background: var(--zone-bg-color, var(--color-bg-secondary, #f6f8fa));
                transition: background-color 0.3s ease;
                min-width: 80px;
            }

            :host([compact]) {
                padding: 4px 8px;
                min-width: 60px;
            }

            .zone-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
            }

            .zone-number {
                font-size: 12px;
                font-weight: 700;
                color: var(--zone-text-color, var(--color-text-primary, #1f2328));
                background: var(--zone-fill-color, #d0d7de);
                padding: 2px 8px;
                border-radius: 10px;
                white-space: nowrap;
            }

            :host([compact]) .zone-number {
                font-size: 10px;
                padding: 1px 6px;
            }

            .zone-name {
                font-size: 11px;
                color: var(--zone-text-color, var(--color-text-secondary, #656d76));
                font-weight: 500;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            :host([compact]) .zone-name {
                display: none;
            }

            .gauge-container {
                height: 8px;
                background: var(--color-bg-tertiary, #e1e4e8);
                border-radius: 4px;
                overflow: hidden;
                position: relative;
            }

            :host([compact]) .gauge-container {
                height: 6px;
            }

            .gauge-fill {
                height: 100%;
                background: var(--zone-fill-color, #3b82f6);
                border-radius: 4px;
                transition: width 0.3s ease, background-color 0.3s ease;
                min-width: 4px;
            }

            .gauge-markers {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: flex;
                justify-content: space-between;
                padding: 0 2px;
                pointer-events: none;
            }

            .gauge-marker {
                width: 1px;
                height: 100%;
                background: rgba(255, 255, 255, 0.3);
            }

            /* High contrast mode */
            :host-context([data-high-contrast="true"]) .gauge-fill {
                background-image: repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 2px,
                    rgba(255,255,255,0.2) 2px,
                    rgba(255,255,255,0.2) 4px
                );
            }

            /* Hidden state */
            :host([hidden]) {
                display: none;
            }
        `}getTemplate(){const e=this.getAttribute("zone")||"",t=this.getAttribute("zone-name")||"",o=parseFloat(this.getAttribute("percent")||"0");return`
            <div class="zone-header">
                <span class="zone-number" aria-label="Zone ${e}">Z${e}</span>
                <span class="zone-name">${t}</span>
            </div>
            <div class="gauge-container" role="progressbar" aria-valuenow="${o}" aria-valuemin="0" aria-valuemax="100" aria-label="${t} zone progress">
                <div class="gauge-fill" style="width: ${Math.max(4,o)}%"></div>
                <div class="gauge-markers">
                    <span class="gauge-marker"></span>
                    <span class="gauge-marker"></span>
                    <span class="gauge-marker"></span>
                </div>
            </div>
        `}onAttributeChanged(e,t,o){e==="zone"&&this.updateZoneStyles(o),e==="percent"&&this.updateGaugeFill(parseFloat(o||"0")),(e==="zone"||e==="zone-name")&&this.render()}updateZoneStyles(e){if(e&&$t[e]){const t=$t[e];this.style.setProperty("--zone-bg-color",t.bg),this.style.setProperty("--zone-fill-color",t.fill),this.style.setProperty("--zone-text-color",t.text)}else this.style.removeProperty("--zone-bg-color"),this.style.removeProperty("--zone-fill-color"),this.style.removeProperty("--zone-text-color")}updateGaugeFill(e){const t=this.shadow.querySelector(".gauge-fill"),o=this.shadow.querySelector(".gauge-container");t&&(t.style.width=`${Math.max(4,e)}%`),o&&o.setAttribute("aria-valuenow",String(e))}setZone(e,t,o){this.setAttribute("zone",String(e)),this.setAttribute("zone-name",t),this.setAttribute("percent",String(Math.round(o))),this.updateZoneStyles(String(e))}clear(){this.removeAttribute("zone"),this.removeAttribute("zone-name"),this.setAttribute("percent","0")}}customElements.define("bpt-zone-gauge",Nn);const ye={power:{color:"#f97316",gradientStart:"rgba(249, 115, 22, 0.4)",gradientEnd:"rgba(249, 115, 22, 0.05)",label:"Power",unit:"W",defaultMax:400},heartrate:{color:"#ef4444",gradientStart:"rgba(239, 68, 68, 0.4)",gradientEnd:"rgba(239, 68, 68, 0.05)",label:"Heart Rate",unit:"bpm",defaultMax:200}};class Rn extends ge{_data=[];_animationId=null;_lastRenderTime=0;_isVisible=!0;_duration=60;_maxValue;_type;_svgPath=null;_svgArea=null;_currentValueEl=null;_avgValueEl=null;static get observedAttributes(){return["type","duration","max-value","hidden"]}constructor(){super(),this._type="power",this._maxValue=ye.power.defaultMax}getStyles(){return`
            :host {
                display: block;
                width: 100%;
                background: var(--color-bg-secondary, #f6f8fa);
                border-radius: 8px;
                overflow: hidden;
                contain: layout style paint;
            }

            :host([hidden]) {
                display: none;
            }

            .chart-container {
                position: relative;
                width: 100%;
                height: 120px;
                padding: 8px;
            }

            .chart-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 4px 4px 4px;
                font-size: 11px;
                color: var(--color-text-secondary, #656d76);
            }

            .chart-label {
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 4px;
            }

            .chart-values {
                display: flex;
                gap: 12px;
            }

            .chart-value {
                display: flex;
                align-items: baseline;
                gap: 2px;
            }

            .chart-value-number {
                font-size: 14px;
                font-weight: 700;
                color: var(--chart-color, #f97316);
            }

            .chart-value-label {
                font-size: 10px;
                color: var(--color-text-muted, #8b949e);
            }

            .chart-svg-container {
                position: relative;
                width: 100%;
                height: 80px;
            }

            svg {
                width: 100%;
                height: 100%;
                display: block;
            }

            .chart-line {
                fill: none;
                stroke: var(--chart-color, #f97316);
                stroke-width: 2;
                stroke-linecap: round;
                stroke-linejoin: round;
                vector-effect: non-scaling-stroke;
            }

            .chart-area {
                fill: url(#chartGradient);
                opacity: 0.8;
            }

            .chart-grid-line {
                stroke: var(--color-border, #d0d7de);
                stroke-width: 1;
                stroke-dasharray: 4 4;
                opacity: 0.5;
            }

            .chart-axis-label {
                font-size: 9px;
                fill: var(--color-text-muted, #8b949e);
            }

            .no-data-message {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 12px;
                color: var(--color-text-muted, #8b949e);
            }

            /* Reduced motion */
            @media (prefers-reduced-motion: reduce) {
                .chart-line,
                .chart-area {
                    transition: none;
                }
            }
        `}getTemplate(){const e=ye[this._type]||ye.power;return`
            <div class="chart-container">
                <div class="chart-header">
                    <span class="chart-label">
                        <span>${e.label}</span>
                        <span style="font-weight: normal; font-size: 10px;">(${this._duration}s)</span>
                    </span>
                    <div class="chart-values">
                        <div class="chart-value">
                            <span class="chart-value-number" id="currentValue">--</span>
                            <span class="chart-value-label">${e.unit}</span>
                        </div>
                        <div class="chart-value">
                            <span class="chart-value-number" id="avgValue" style="opacity: 0.7;">--</span>
                            <span class="chart-value-label">avg</span>
                        </div>
                    </div>
                </div>
                <div class="chart-svg-container">
                    <svg viewBox="0 0 300 80" preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                            <linearGradient id="chartGradient-${this._type}" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="${e.gradientStart}" />
                                <stop offset="100%" stop-color="${e.gradientEnd}" />
                            </linearGradient>
                        </defs>
                        <!-- Grid lines -->
                        <line class="chart-grid-line" x1="0" y1="20" x2="300" y2="20" />
                        <line class="chart-grid-line" x1="0" y1="40" x2="300" y2="40" />
                        <line class="chart-grid-line" x1="0" y1="60" x2="300" y2="60" />
                        <!-- Axis labels -->
                        <text class="chart-axis-label" x="2" y="18">${this._maxValue}</text>
                        <text class="chart-axis-label" x="2" y="78">0</text>
                        <!-- Chart paths -->
                        <path class="chart-area" id="chartArea" d="M0,80 L300,80" style="fill: url(#chartGradient-${this._type});" />
                        <path class="chart-line" id="chartLine" d="" style="stroke: ${e.color};" />
                    </svg>
                    <div class="no-data-message" id="noDataMessage">Waiting for data...</div>
                </div>
            </div>
        `}onConnected(){this._svgPath=this.shadow.getElementById("chartLine"),this._svgArea=this.shadow.getElementById("chartArea"),this._currentValueEl=this.shadow.getElementById("currentValue"),this._avgValueEl=this.shadow.getElementById("avgValue");const e=ye[this._type]||ye.power;this.style.setProperty("--chart-color",e.color),this.startAnimation(),document.addEventListener("visibilitychange",this.handleVisibilityChange)}onDisconnected(){this.stopAnimation(),document.removeEventListener("visibilitychange",this.handleVisibilityChange)}onAttributeChanged(e,t,o){switch(e){case"type":this._type=o||"power",this._maxValue=ye[this._type]?.defaultMax||400,this.render(),this.onConnected();break;case"duration":this._duration=parseInt(o||"60",10),this.render();break;case"max-value":this._maxValue=parseInt(o||"400",10),this.render();break;case"hidden":this._isVisible=o===null,this._isVisible?this.startAnimation():this.stopAnimation();break}}handleVisibilityChange=()=>{document.hidden?this.stopAnimation():this._isVisible&&this.startAnimation()};addDataPoint(e,t=Date.now()){this._data.push({timestamp:t,value:e});const o=t-(this._duration+5)*1e3;for(;this._data.length>0&&this._data[0].timestamp<o;)this._data.shift();e>this._maxValue*.9&&(this._maxValue=Math.ceil(e*1.2/50)*50)}clear(){this._data=[],this.renderChart()}startAnimation(){if(this._animationId!==null)return;const e=t=>{t-this._lastRenderTime>=33&&(this.renderChart(),this._lastRenderTime=t),this._animationId=requestAnimationFrame(e)};this._animationId=requestAnimationFrame(e)}stopAnimation(){this._animationId!==null&&(cancelAnimationFrame(this._animationId),this._animationId=null)}renderChart(){if(!this._svgPath||!this._svgArea)return;const t=Date.now()-this._duration*1e3,o=this._data.filter(l=>l.timestamp>=t),s=this.shadow.getElementById("noDataMessage");if(s&&(s.style.display=o.length===0?"block":"none"),o.length===0){this._svgPath.setAttribute("d",""),this._svgArea.setAttribute("d","M0,80 L300,80");return}const a=300,r=80,i=[],c=[];if(o.forEach(l=>{const p=(l.timestamp-t)/(this._duration*1e3)*a,d=r-Math.min(l.value,this._maxValue)/this._maxValue*r;i.push(`${p.toFixed(1)},${d.toFixed(1)}`),c.push(`${p.toFixed(1)},${d.toFixed(1)}`)}),i.length>0){const l="M"+i.join(" L");this._svgPath.setAttribute("d",l);const p=(o[0].timestamp-t)/(this._duration*1e3)*a,d=(o[o.length-1].timestamp-t)/(this._duration*1e3)*a,m=`M${p.toFixed(1)},${r} L`+c.join(" L")+` L${d.toFixed(1)},${r} Z`;this._svgArea.setAttribute("d",m)}if(this._currentValueEl&&o.length>0){const l=o[o.length-1].value;this._currentValueEl.textContent=Math.round(l).toString()}if(this._avgValueEl&&o.length>0){const l=o.reduce((p,d)=>p+d.value,0)/o.length;this._avgValueEl.textContent=Math.round(l).toString()}}getData(){return[...this._data]}}customElements.define("bpt-live-chart",Rn);class On extends ge{intervalId=null;startTimestamp=0;pausedElapsed=0;static get observedAttributes(){return["elapsed","state","show-milliseconds"]}getStyles(){return`
            :host {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-family: 'SF Mono', 'Monaco', 'Menlo', monospace;
            }
            
            .timer {
                font-size: clamp(20px, 5vw, 32px);
                font-weight: 600;
                color: var(--color-text-primary, #1f2328);
                letter-spacing: 0.5px;
                transition: color 0.3s ease;
            }
            
            :host([state="recording"]) .timer {
                color: var(--color-success, #15803d);
            }
            
            :host([state="paused"]) .timer {
                color: var(--color-warning, #a16207);
                animation: blink 1s ease-in-out infinite;
            }
            
            :host([state="idle"]) .timer {
                color: var(--color-text-muted, #8b949e);
            }
            
            .milliseconds {
                font-size: 0.5em;
                opacity: 0.7;
            }
            
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
            
            /* Reduced motion */
            @media (prefers-reduced-motion: reduce) {
                :host([state="paused"]) .timer {
                    animation: none;
                }
            }
        `}getTemplate(){const e=parseInt(this.getAttribute("elapsed")||"0",10),t=this.hasAttribute("show-milliseconds"),o=this.formatTime(e,t);return`
            <time class="timer" datetime="PT${e}S" aria-live="off">
                ${o}
            </time>
        `}formatTime(e,t=!1){const o=Math.floor(e/3600),s=Math.floor(e%3600/60),a=Math.floor(e%60),r=c=>c.toString().padStart(2,"0");let i=`${r(o)}:${r(s)}:${r(a)}`;if(t){const c=Math.floor(e%1*100);i+=`<span class="milliseconds">.${r(c)}</span>`}return i}onAttributeChanged(e){e==="state"&&this.handleStateChange(),this.render()}handleStateChange(){const e=this.getAttribute("state");e==="recording"&&!this.intervalId?this.startTicking():e!=="recording"&&this.intervalId&&this.stopTicking()}startTicking(){this.startTimestamp=Date.now()-this.pausedElapsed*1e3,this.intervalId=window.setInterval(()=>{const e=(Date.now()-this.startTimestamp)/1e3;this.setAttribute("elapsed",String(e))},100)}stopTicking(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null),this.pausedElapsed=parseFloat(this.getAttribute("elapsed")||"0")}onDisconnected(){this.stopTicking()}start(){this.setAttribute("state","recording"),this.emit("timer-start")}pause(){this.setAttribute("state","paused"),this.emit("timer-pause")}resume(){this.setAttribute("state","recording"),this.emit("timer-resume")}stop(){this.setAttribute("state","idle"),this.pausedElapsed=0,this.emit("timer-stop",{elapsed:parseFloat(this.getAttribute("elapsed")||"0")})}reset(){this.pausedElapsed=0,this.startTimestamp=Date.now(),this.setAttribute("elapsed","0"),this.emit("timer-reset")}getElapsed(){return parseFloat(this.getAttribute("elapsed")||"0")}getState(){return this.getAttribute("state")||"idle"}}customElements.define("bpt-workout-timer",On);const At={info:{bg:"#1d4ed8",icon:"ℹ️"},success:{bg:"#15803d",icon:"✅"},error:{bg:"#b91c1c",icon:"❌"},warning:{bg:"#a16207",icon:"⚠️"}};class le extends ge{timeoutId=null;static get observedAttributes(){return["message","type","duration","dismissible"]}getStyles(){return`
            :host {
                position: fixed;
                top: 80px;
                left: 50%;
                transform: translateX(-50%) translateY(-20px);
                z-index: 10001;
                opacity: 0;
                transition: transform 0.3s ease, opacity 0.3s ease;
                pointer-events: none;
            }
            
            :host(.visible) {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
                pointer-events: auto;
            }
            
            :host(.hiding) {
                transform: translateX(-50%) translateY(-20px);
                opacity: 0;
            }
            
            .toast {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 12px 20px;
                border-radius: 8px;
                background-color: var(--toast-bg, #1d4ed8);
                color: white;
                font-size: 14px;
                font-weight: 500;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                max-width: 90vw;
            }
            
            .icon {
                font-size: 18px;
                flex-shrink: 0;
            }
            
            .message {
                flex: 1;
            }
            
            .dismiss-btn {
                background: none;
                border: none;
                color: white;
                font-size: 18px;
                cursor: pointer;
                padding: 0 4px;
                opacity: 0.8;
                transition: opacity 0.2s ease;
                flex-shrink: 0;
            }
            
            .dismiss-btn:hover {
                opacity: 1;
            }
            
            .dismiss-btn:focus-visible {
                outline: 2px solid white;
                outline-offset: 2px;
            }
            
            /* Reduced motion */
            @media (prefers-reduced-motion: reduce) {
                :host {
                    transition: none;
                }
            }
        `}getTemplate(){const e=this.getAttribute("message")||"",t=this.getAttribute("type")||"info",o=this.getAttribute("dismissible")!=="false",s=At[t]||At.info;return this.style.setProperty("--toast-bg",s.bg),`
            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <span class="icon" aria-hidden="true">${s.icon}</span>
                <span class="message">${e}</span>
                ${o?`
                    <button class="dismiss-btn" aria-label="Dismiss notification">&times;</button>
                `:""}
            </div>
        `}setupEventListeners(){const e=this.query(".dismiss-btn");e&&e.addEventListener("click",()=>this.dismiss())}onConnected(){requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.classList.add("visible")})});const e=parseInt(this.getAttribute("duration")||"3000",10);e>0&&(this.timeoutId=window.setTimeout(()=>this.dismiss(),e))}onDisconnected(){this.timeoutId&&clearTimeout(this.timeoutId)}dismiss(){this.timeoutId&&clearTimeout(this.timeoutId),this.classList.remove("visible"),this.classList.add("hiding"),setTimeout(()=>{this.remove()},300)}static show(e,t="info",o={}){const s=document.createElement("bpt-toast");return s.setAttribute("message",e),s.setAttribute("type",t),o.duration!==void 0&&s.setAttribute("duration",String(o.duration)),o.dismissible!==void 0&&s.setAttribute("dismissible",String(o.dismissible)),document.body.appendChild(s),s}static info(e,t){return le.show(e,"info",t)}static success(e,t){return le.show(e,"success",t)}static error(e,t){return le.show(e,"error",t)}static warning(e,t){return le.show(e,"warning",t)}}customElements.define("bpt-toast",le);class Vn extends ge{previousActiveElement=null;focusTrapHandler=null;static get observedAttributes(){return["title","icon","open","close-on-overlay"]}getStyles(){return`
            :host {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1000;
                display: none;
                align-items: center;
                justify-content: center;
            }
            
            :host([open]) {
                display: flex;
            }
            
            .overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                opacity: 0;
                transition: opacity 0.2s ease;
            }
            
            :host([open]) .overlay {
                opacity: 1;
            }
            
            .modal {
                position: relative;
                background: var(--modal-bg, white);
                border-radius: 12px;
                max-width: 90%;
                max-height: 85vh;
                min-width: 300px;
                display: flex;
                flex-direction: column;
                box-shadow: 0 8px 24px var(--color-shadow, rgba(0, 0, 0, 0.15));
                transform: scale(0.95) translateY(20px);
                opacity: 0;
                transition: transform 0.2s ease, opacity 0.2s ease;
            }
            
            :host([open]) .modal {
                transform: scale(1) translateY(0);
                opacity: 1;
            }
            
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 24px;
                border-bottom: 1px solid var(--color-border, #d0d7de);
            }
            
            .title {
                font-size: 20px;
                font-weight: 600;
                color: var(--color-text-primary, #1f2328);
                margin: 0;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .icon {
                font-size: 24px;
            }
            
            .close-btn {
                background: none;
                border: none;
                font-size: 24px;
                color: var(--color-text-secondary, #656d76);
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
                transition: background-color 0.15s ease;
                line-height: 1;
            }
            
            .close-btn:hover {
                background-color: var(--color-bg-hover, rgba(0, 0, 0, 0.05));
            }
            
            .close-btn:focus-visible {
                outline: 2px solid var(--color-accent, #2196F3);
                outline-offset: 2px;
            }
            
            .body {
                padding: 20px 24px;
                overflow-y: auto;
                flex: 1;
                color: var(--color-text-primary, #1f2328);
            }
            
            .footer {
                padding: 16px 24px;
                border-top: 1px solid var(--color-border, #d0d7de);
                display: flex;
                justify-content: flex-end;
                gap: 8px;
            }
            
            ::slotted([slot="footer"]) {
                display: flex;
                gap: 8px;
            }
            
            /* Default button styles for slotted buttons */
            .btn {
                padding: 8px 16px;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: background-color 0.15s ease;
            }
            
            .btn-secondary {
                background: white;
                border: 1px solid var(--color-border, #d0d7de);
                color: var(--color-text-primary, #1f2328);
            }
            
            .btn-secondary:hover {
                background: var(--color-bg-secondary, #f6f8fa);
            }
            
            .btn-primary {
                background: var(--color-accent, #2196F3);
                border: none;
                color: white;
            }
            
            .btn-primary:hover {
                background: var(--color-accent-hover, #1976d2);
            }
            
            .btn-danger {
                background: var(--color-error, #cf222e);
                border: none;
                color: white;
            }
            
            .btn-danger:hover {
                background: #a40e26;
            }
            
            /* Reduced motion */
            @media (prefers-reduced-motion: reduce) {
                .overlay,
                .modal {
                    transition: none;
                }
            }
        `}getTemplate(){const e=this.getAttribute("title")||"",t=this.getAttribute("icon")||"";return`
            <div class="overlay" part="overlay"></div>
            <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div class="header">
                    <h2 class="title" id="modal-title">
                        ${t?`<span class="icon" aria-hidden="true">${t}</span>`:""}
                        ${e}
                    </h2>
                    <button class="close-btn" aria-label="Close dialog">&times;</button>
                </div>
                <div class="body">
                    <slot></slot>
                </div>
                <div class="footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        `}setupEventListeners(){this.query(".close-btn")?.addEventListener("click",()=>this.close()),this.query(".overlay")?.addEventListener("click",()=>{this.getAttribute("close-on-overlay")!=="false"&&this.close()}),this.addEventListener("keydown",o=>{o.key==="Escape"&&this.close()}),this.addEventListener("click",o=>{const a=o.target.dataset?.action;a&&(this.emit("modal-action",{action:a}),(a==="cancel"||a==="confirm")&&this.close())})}onConnected(){this.hasAttribute("open")&&this.onOpen()}onAttributeChanged(e,t,o){e==="open"&&(o!==null?this.onOpen():this.onClose())}onOpen(){this.previousActiveElement=document.activeElement,this.setupFocusTrap(),requestAnimationFrame(()=>{this.shadow.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')?.focus()}),this.emit("modal-open")}onClose(){this.removeFocusTrap(),this.previousActiveElement?.focus(),this.emit("modal-close")}setupFocusTrap(){this.focusTrapHandler=e=>{if(e.key!=="Tab")return;const t=this.shadow.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=t[0],s=t[t.length-1];e.shiftKey&&document.activeElement===o?(e.preventDefault(),s?.focus()):!e.shiftKey&&document.activeElement===s&&(e.preventDefault(),o?.focus())},this.addEventListener("keydown",this.focusTrapHandler)}removeFocusTrap(){this.focusTrapHandler&&(this.removeEventListener("keydown",this.focusTrapHandler),this.focusTrapHandler=null)}open(){this.setAttribute("open","")}close(){this.removeAttribute("open")}toggle(){this.hasAttribute("open")?this.close():this.open()}static confirm(e){return new Promise(t=>{const o=document.createElement("bpt-modal");o.setAttribute("title",e.title),e.icon&&o.setAttribute("icon",e.icon);const s=document.createElement("div");typeof e.message=="string"?s.innerHTML=`<p>${e.message}</p>`:s.appendChild(e.message),o.appendChild(s);const a=document.createElement("div");a.setAttribute("slot","footer");const r=document.createElement("button");r.className="btn btn-secondary",r.textContent=e.cancelText||"Cancel",r.dataset.action="cancel";const i=document.createElement("button");i.className=`btn btn-${e.variant||"primary"}`,i.textContent=e.confirmText||"Confirm",i.dataset.action="confirm",a.appendChild(r),a.appendChild(i),o.appendChild(a),o.addEventListener("modal-action",(c=>{t(c.detail.action==="confirm"),o.remove()})),o.addEventListener("modal-close",()=>{t(!1),o.remove()}),document.body.appendChild(o),o.open()})}static alert(e,t,o){return new Promise(s=>{const a=document.createElement("bpt-modal");a.setAttribute("title",e),o&&a.setAttribute("icon",o);const r=document.createElement("p");r.textContent=t,a.appendChild(r);const i=document.createElement("div");i.setAttribute("slot","footer");const c=document.createElement("button");c.className="btn btn-primary",c.textContent="OK",c.dataset.action="confirm",i.appendChild(c),a.appendChild(i),a.addEventListener("modal-close",()=>{s(),a.remove()}),document.body.appendChild(a),a.open()})}}customElements.define("bpt-modal",Vn);const Fn="BikeTrackerDB",Hn=4,ne="activeWorkout",oe="completedWorkouts",se="rawDebugData";let Re=null;async function X(){return Re||new Promise((n,e)=>{const t=indexedDB.open(Fn,Hn);t.onerror=()=>{console.error("Failed to open IndexedDB:",t.error),e(t.error)},t.onsuccess=()=>{Re=t.result,n(Re)},t.onupgradeneeded=o=>{const s=o.target.result;if(s.objectStoreNames.contains(ne)||s.createObjectStore(ne,{keyPath:"id"}),s.objectStoreNames.contains(oe)||s.createObjectStore(oe,{keyPath:"id"}).createIndex("startTime","startTime",{unique:!1}),!s.objectStoreNames.contains(se)){const a=s.createObjectStore(se,{keyPath:"id",autoIncrement:!0});a.createIndex("timestamp","timestamp",{unique:!1}),a.createIndex("sensor","sensor",{unique:!1})}}})}async function Un(n,e){try{const t=await X(),o={timestamp:Date.now(),sensor:n,data:e};return new Promise((s,a)=>{const c=t.transaction([se],"readwrite").objectStore(se).add(o);c.onsuccess=()=>s(),c.onerror=()=>a(c.error)})}catch(t){console.warn("Could not save debug log:",t)}}async function Mt(){try{const n=await X();return new Promise((e,t)=>{const r=n.transaction([se],"readonly").objectStore(se).index("timestamp").getAll();r.onsuccess=()=>e(r.result||[]),r.onerror=()=>t(r.error)})}catch(n){return console.warn("Could not load debug logs:",n),[]}}async function zn(){try{const n=await X();return new Promise((e,t)=>{const a=n.transaction([se],"readwrite").objectStore(se).clear();a.onsuccess=()=>e(),a.onerror=()=>t(a.error)})}catch(n){console.warn("Could not clear debug logs:",n)}}async function rn(n,e){try{const t=await X(),o={id:"current",startTime:e??Date.now(),lastUpdated:Date.now(),heartrate:n.heartrate,power:n.power,cadence:n.cadence,speed:n.speed,distance:n.distance,altitude:n.altitude,gps:n.gps,treadmill:n.treadmill||[],laps:n.laps||[]};return new Promise((s,a)=>{const c=t.transaction([ne],"readwrite").objectStore(ne).put(o);c.onsuccess=()=>s(),c.onerror=()=>a(c.error)})}catch(t){console.warn("Could not save active workout:",t)}}async function yt(){try{const n=await X();return new Promise((e,t)=>{const a=n.transaction([ne],"readwrite").objectStore(ne).delete("current");a.onsuccess=()=>e(),a.onerror=()=>t(a.error)})}catch(n){console.warn("Could not clear active workout:",n)}}async function vt(){try{const n=await X();return new Promise((e,t)=>{const a=n.transaction([ne],"readonly").objectStore(ne).get("current");a.onsuccess=()=>{if(a.result){const r=a.result;r.treadmill||(r.treadmill=[]),r.laps||(r.laps=[]),e(r)}else e(null)},a.onerror=()=>t(a.error)})}catch(n){return console.warn("Could not load active workout:",n),null}}async function Wn(n,e,t){const o=`workout_${e}`;try{const s=await X(),a={id:o,startTime:e,lastUpdated:t,isCompleted:!0,measurements:{...n},synced:!1};return new Promise((r,i)=>{const p=s.transaction([oe],"readwrite").objectStore(oe).put(a);p.onsuccess=()=>r(o),p.onerror=()=>i(p.error)})}catch(s){throw console.error("Failed to save completed workout:",s),s}}async function qn(){try{const n=await X();return new Promise((e,t)=>{const r=n.transaction([oe],"readonly").objectStore(oe).index("startTime").getAll();r.onsuccess=()=>{e((r.result||[]).reverse())},r.onerror=()=>t(r.error)})}catch(n){return console.warn("Could not load workout history:",n),[]}}let be=null,G=null;const jn=(n,e,t)=>{G={measurements:n,startTime:e},be||(be=setTimeout(async()=>{G&&(await rn(G.measurements,G.startTime),G=null),be=null},2e3))},lt=async()=>{be&&(clearTimeout(be),be=null),G&&(await rn(G.measurements,G.startTime),G=null)},dt=()=>typeof window<"u"&&"indexedDB"in window,Zn=async()=>{await lt();const n=await vt();return n?(await Wn({heartrate:n.heartrate,power:n.power,cadence:n.cadence,speed:n.speed,distance:n.distance,altitude:n.altitude,gps:n.gps,treadmill:n.treadmill,laps:n.laps},n.startTime,n.lastUpdated),await yt(),`workout_${n.startTime}`):null},Yn=async()=>!!await vt(),cn=qn,Gn=async n=>{const e=await X();return new Promise((t,o)=>{const a=e.transaction(oe,"readwrite").objectStore(oe),r=a.get(n);r.onsuccess=()=>{const i=r.result;i?(i.synced=!0,i.syncedTime=Date.now(),a.put(i),t()):o(new Error("Workout not found"))},r.onerror=()=>o(r.error)})};function Kn(n,e,t,o){const a=n*Math.PI/180,r=t*Math.PI/180,i=(t-n)*Math.PI/180,c=(o-e)*Math.PI/180,l=Math.sin(i/2)*Math.sin(i/2)+Math.cos(a)*Math.cos(r)*Math.sin(c/2)*Math.sin(c/2);return 6371e3*(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)))}const re={heartrate:{min:0,max:300},power:{min:0,max:3e3},cadence:{min:0,max:300},speed:{min:0,max:150},distance:{min:0,max:1e6},altitude:{min:-500,max:9e3}};class Jn{heartrate=[];power=[];cadence=[];speed=[];distance=[];altitude=[];gps=[];treadmill=[];treadmillSpeed=[];laps=[];_persistenceEnabled;_startTime=null;_onChangeCallbacks=[];constructor(e=!0){this._persistenceEnabled=e&&dt(),this._persistenceEnabled&&typeof window<"u"&&(window.addEventListener("beforeunload",()=>{lt()}),document.addEventListener("visibilitychange",()=>{document.hidden&&lt()}))}setStartTime(e){this._startTime=e}getStartTime(){return this._startTime}onChange(e){this._onChangeCallbacks.push(e)}offChange(e){const t=this._onChangeCallbacks.indexOf(e);t>-1&&this._onChangeCallbacks.splice(t,1)}_notifyChange(){for(const e of this._onChangeCallbacks)try{e()}catch(t){console.error("State change callback error:",t)}this._persistenceEnabled&&jn(this.toJSON(),this._startTime)}addHeartrate(e){const{min:t,max:o}=re.heartrate;if(e.value<=t||e.value>=o){console.warn(`Invalid heartrate value: ${e.value}`);return}this.heartrate.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addPower(e){const{min:t,max:o}=re.power;if(e.value<t||e.value>=o){console.warn(`Invalid power value: ${e.value}`);return}this.power.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addCadence(e){const{min:t,max:o}=re.cadence;if(e.value<t||e.value>=o){console.warn(`Invalid cadence value: ${e.value}`);return}this.cadence.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addSpeed(e){const{min:t,max:o}=re.speed;if(e.value<t||e.value>=o){console.warn(`Invalid speed value: ${e.value}`);return}this.speed.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addDistance(e){const{min:t,max:o}=re.distance;if(e.value<t||e.value>=o){console.warn(`Invalid distance value: ${e.value}`);return}this.distance.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addAltitude(e){const{min:t,max:o}=re.altitude;if(e.value<t||e.value>=o){console.warn(`Invalid altitude value: ${e.value}`);return}this.altitude.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addTreadmillSpeed(e){const{min:t,max:o}=re.speed;if(e.value<t||e.value>=o){console.warn(`Invalid treadmill speed value: ${e.value}`);return}this.treadmillSpeed.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addGps(e){if(this.gps.length>0){const t=this.gps[this.gps.length-1],o=Kn(t.lat,t.lon,e.lat,e.lon);let s=0;this.distance.length>0&&(s=this.distance[this.distance.length-1].value),this.addDistance({timestamp:e.timestamp,value:s+o})}else this.distance.length===0&&this.addDistance({timestamp:e.timestamp,value:0});this.gps.push(e),this._notifyChange()}add(e,t){switch(e){case"heartrate":this.addHeartrate(t);break;case"power":this.addPower(t);break;case"cadence":this.addCadence(t);break;case"speed":this.addSpeed(t);break;case"distance":this.addDistance(t);break;case"altitude":this.addAltitude(t);break;case"treadmillSpeed":this.addTreadmillSpeed(t);break;default:throw new Error(`Unknown measurement type: ${e}`)}}async clear(e=!0){this.heartrate=[],this.power=[],this.cadence=[],this.speed=[],this.distance=[],this.altitude=[],this.treadmillSpeed=[],this.laps=[],this._startTime=null,e&&this._persistenceEnabled&&await yt(),this._notifyChange()}addLap(e){const t=Date.now(),o=this.laps.length+1,s={timestamp:t,number:o,elapsedMs:e?t-e:void 0};return this.laps.push(s),this._notifyChange(),s}getLapCount(){return this.laps.length}toJSON(){return{heartrate:[...this.heartrate],power:[...this.power],cadence:[...this.cadence],speed:[...this.speed],distance:[...this.distance],altitude:[...this.altitude],treadmillSpeed:[...this.treadmillSpeed],gps:[...this.gps],laps:[...this.laps]}}restore(e,t){this.heartrate=[...e.heartrate||[]],this.power=[...e.power||[]],this.cadence=[...e.cadence||[]],this.speed=[...e.speed||[]],this.distance=[...e.distance||[]],this.altitude=[...e.altitude||[]],this.treadmillSpeed=[...e.treadmillSpeed||[]],this.laps=[...e.laps||[]],this._startTime=t;for(const o of this._onChangeCallbacks)try{o()}catch(s){console.error("State change callback error:",s)}}setPersistenceEnabled(e){this._persistenceEnabled=e&&dt()}hasData(){return this.heartrate.length>0||this.power.length>0||this.cadence.length>0}getCounts(){return{heartrate:this.heartrate.length,power:this.power.length,cadence:this.cadence.length,speed:this.speed.length,distance:this.distance.length,altitude:this.altitude.length,gps:this.gps.length,treadmillSpeed:this.treadmillSpeed.length}}addTreadmillData(e){if(this.treadmill.push(e),e.speed!=null){const t={timestamp:e.timestamp,value:e.speed};this.addTreadmillSpeed(t),this.addSpeed(t)}e.speed==null&&this._notifyChange()}}const Xn=()=>({measurementsState:new Jn,connectionsState:{power:{isConnected:!1,disconnect:null},heartrate:{isConnected:!1,disconnect:null},cadence:{isConnected:!1,disconnect:null},speed:{isConnected:!1,disconnect:null},distance:{isConnected:!1,disconnect:null},altitude:{isConnected:!1,disconnect:null},gps:{isConnected:!1,disconnect:null}},timeState:{running:!1,startTime:null,endTime:null}});function Qn({measurementsState:n,connectionsState:e}){typeof window<"u"&&(window.bike=n,window.connectionsState=e)}var Ee;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Ee||(Ee={}));class nt extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const eo=n=>{var e,t;return n?.androidBridge?"android":!((t=(e=n?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},to=n=>{const e=n.CapacitorCustomPlatform||null,t=n.Capacitor||{},o=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:eo(n),a=()=>s()!=="web",r=d=>{const m=l.get(d);return!!(m?.platforms.has(s())||i(d))},i=d=>{var m;return(m=t.PluginHeaders)===null||m===void 0?void 0:m.find(u=>u.name===d)},c=d=>n.console.error(d),l=new Map,p=(d,m={})=>{const u=l.get(d);if(u)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),u.proxy;const h=s(),g=i(d);let y;const b=async()=>(!y&&h in m?y=typeof m[h]=="function"?y=await m[h]():y=m[h]:e!==null&&!y&&"web"in m&&(y=typeof m.web=="function"?y=await m.web():y=m.web),y),v=(C,L)=>{var _,D;if(g){const x=g?.methods.find($=>L===$.name);if(x)return x.rtype==="promise"?$=>t.nativePromise(d,L.toString(),$):($,Q)=>t.nativeCallback(d,L.toString(),$,Q);if(C)return(_=C[L])===null||_===void 0?void 0:_.bind(C)}else{if(C)return(D=C[L])===null||D===void 0?void 0:D.bind(C);throw new nt(`"${d}" plugin is not implemented on ${h}`,Ee.Unimplemented)}},w=C=>{let L;const _=(...D)=>{const x=b().then($=>{const Q=v($,C);if(Q){const Y=Q(...D);return L=Y?.remove,Y}else throw new nt(`"${d}.${C}()" is not implemented on ${h}`,Ee.Unimplemented)});return C==="addListener"&&(x.remove=async()=>L()),x};return _.toString=()=>`${C.toString()}() { [capacitor code] }`,Object.defineProperty(_,"name",{value:C,writable:!1,configurable:!1}),_},f=w("addListener"),T=w("removeListener"),I=(C,L)=>{const _=f({eventName:C},L),D=async()=>{const $=await _;T({eventName:C,callbackId:$},L)},x=new Promise($=>_.then(()=>$({remove:D})));return x.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await D()},x},E=new Proxy({},{get(C,L){switch(L){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return g?I:f;case"removeListener":return T;default:return w(L)}}});return o[d]=E,l.set(d,{name:d,proxy:E,platforms:new Set([...Object.keys(m),...g?[h]:[]])}),E};return t.convertFileSrc||(t.convertFileSrc=d=>d),t.getPlatform=s,t.handleError=c,t.isNativePlatform=a,t.isPluginAvailable=r,t.registerPlugin=p,t.Exception=nt,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},no=n=>n.Capacitor=to(n),V=no(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Pe=V.registerPlugin;class wt{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let o=!1;this.listeners[e]||(this.listeners[e]=[],o=!0),this.listeners[e].push(t);const a=this.windowListeners[e];a&&!a.registered&&this.addWindowListener(a),o&&this.sendRetainedArgumentsForEvent(e);const r=async()=>this.removeListener(e,t);return Promise.resolve({remove:r})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,o){const s=this.listeners[e];if(!s){if(o){let a=this.retainedEventArguments[e];a||(a=[]),a.push(t),this.retainedEventArguments[e]=a}return}s.forEach(a=>a(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new V.Exception(e,Ee.Unimplemented)}unavailable(e="not available"){return new V.Exception(e,Ee.Unavailable)}async removeListener(e,t){const o=this.listeners[e];if(!o)return;const s=o.indexOf(t);this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(o=>{this.notifyListeners(e,o)}))}}const Bt=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Dt=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class oo extends wt{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[s,a]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Dt(s).trim(),a=Dt(a).trim(),t[s]=a}),t}async setCookie(e){try{const t=Bt(e.key),o=Bt(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,a=(e.path||"/").replace("path=",""),r=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${s}; path=${a}; ${r};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Pe("CapacitorCookies",{web:()=>new oo});const so=async n=>new Promise((e,t)=>{const o=new FileReader;o.onload=()=>{const s=o.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},o.onerror=s=>t(s),o.readAsDataURL(n)}),ao=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,a,r)=>(s[a]=n[e[r]],s),{})},ro=(n,e=!0)=>n?Object.entries(n).reduce((o,s)=>{const[a,r]=s;let i,c;return Array.isArray(r)?(c="",r.forEach(l=>{i=e?encodeURIComponent(l):l,c+=`${a}=${i}&`}),c.slice(0,-1)):(i=e?encodeURIComponent(r):r,c=`${a}=${i}`),`${o}&${c}`},"").substr(1):null,io=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=ao(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const a=new URLSearchParams;for(const[r,i]of Object.entries(n.data||{}))a.set(r,i);t.body=a.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const a=new FormData;if(n.data instanceof FormData)n.data.forEach((i,c)=>{a.append(c,i)});else for(const i of Object.keys(n.data))a.append(i,n.data[i]);t.body=a;const r=new Headers(t.headers);r.delete("content-type"),t.headers=r}else(s.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class co extends wt{async request(e){const t=io(e,e.webFetchExtra),o=ro(e.params,e.shouldEncodeUrlParams),s=o?`${e.url}?${o}`:e.url,a=await fetch(s,t),r=a.headers.get("content-type")||"";let{responseType:i="text"}=a.ok?e:{};r.includes("application/json")&&(i="json");let c,l;switch(i){case"arraybuffer":case"blob":l=await a.blob(),c=await so(l);break;case"json":c=await a.json();break;case"document":case"text":default:c=await a.text()}const p={};return a.headers.forEach((d,m)=>{p[m]=d}),{data:c,headers:p,status:a.status,url:a.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Pe("CapacitorHttp",{web:()=>new co});var _t;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(_t||(_t={}));var Pt;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(Pt||(Pt={}));class lo extends wt{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Pe("SystemBars",{web:()=>new lo});const uo="modulepreload",mo=function(n,e){return new URL(n,e).href},Nt={},bt=function(e,t,o){let s=Promise.resolve();if(t&&t.length>0){let l=function(p){return Promise.all(p.map(d=>Promise.resolve(d).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),c=i?.nonce||i?.getAttribute("nonce");s=l(t.map(p=>{if(p=mo(p,o),p in Nt)return;Nt[p]=!0;const d=p.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(o)for(let h=r.length-1;h>=0;h--){const g=r[h];if(g.href===p&&(!d||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${m}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":uo,d||(u.as="script"),u.crossOrigin="",u.href=p,c&&u.setAttribute("nonce",c),document.head.appendChild(u),d)return new Promise((h,g)=>{u.addEventListener("load",h),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return s.then(r=>{for(const i of r||[])i.status==="rejected"&&a(i.reason);return e().catch(a)})},Rt=Pe("App",{web:()=>bt(()=>import("./web-grZbhJ-i.js"),[],import.meta.url).then(n=>new n.AppWeb)});class po{views=new Map;routes=[];currentViewId=null;container;constructor(e){this.container=e,window.addEventListener("popstate",()=>{this.handleLocationChange()}),V.isNativePlatform()&&Rt.addListener("backButton",({canGoBack:t})=>{t?window.history.back():Rt.exitApp()})}registerView(e){this.views.set(e.id,e);let t=document.getElementById(`page-${e.id}`);t||(t=document.createElement("div"),t.id=`page-${e.id}`,t.className="page-view",t.style.display="none",this.container.appendChild(t)),e.init(t)}addRoute(e,t){this.routes.push({path:e,viewId:t})}navigate(e,t=!1){t?window.history.replaceState({},"",e):window.history.pushState({},"",e),this.handleLocationChange()}start(){this.handleLocationChange()}back(){window.history.back()}handleLocationChange(){const e=window.location.pathname;let t=this.routes.find(o=>o.path===e);t||(t=this.routes.find(o=>o.path==="/")||this.routes[0]),t&&this.switchView(t.viewId)}switchView(e){if(this.currentViewId===e)return;if(this.currentViewId){const o=this.views.get(this.currentViewId);if(o){o.onLeave();const s=document.getElementById(`page-${this.currentViewId}`);s&&(s.style.display="none")}}const t=this.views.get(e);if(t){const o=document.getElementById(`page-${e}`);o&&(o.style.display=""),t.onEnter(),this.currentViewId=e,window.dispatchEvent(new CustomEvent("route-changed",{detail:{viewId:e}}))}}}class ho{id="dashboard";init(e){console.log("Dashboard View initialized")}onEnter(){console.log("Entered Dashboard View")}onLeave(){console.log("Left Dashboard View")}}const Te="http://78.109.17.187",go="super-secret-bike-tracker-key";function Se(n={}){const e={...n};return e["X-API-Key"]=go,e}async function ln(){try{const n=await fetch(`${Te}/health`,{headers:Se()});return n.ok?(await n.json()).database==="connected":!1}catch{return!1}}async function fo({streamName:n,title:e,sport:t="cycling",userId:o}){const s=await fetch(`${Te}/api/workouts`,{method:"POST",headers:Se({"Content-Type":"application/json"}),body:JSON.stringify({streamName:n,title:e,sport:t,userId:o})});if(!s.ok){const a=await s.json();throw new Error(a.error||"Failed to create workout")}return s.json()}async function Ge({page:n=1,limit:e=20,status:t,userId:o,startDate:s,endDate:a,sport:r}={}){const i=new URLSearchParams;i.set("page",n.toString()),i.set("limit",e.toString()),t&&i.set("status",t),o&&i.set("userId",o),s&&i.set("startDate",s.toISOString()),a&&i.set("endDate",a.toISOString()),r&&i.set("sport",r);const c=await fetch(`${Te}/api/workouts?${i}`,{headers:Se()});if(!c.ok){const l=await c.json();throw new Error(l.error||"Failed to list workouts")}return c.json()}async function yo(n,e=!1){const t=new URLSearchParams;e&&t.set("includeTelemetry","true");const o=await fetch(`${Te}/api/workouts/${n}?${t}`,{headers:Se()});if(!o.ok){const s=await o.json();throw new Error(s.error||"Failed to get workout")}return o.json()}async function vo(n,e=!0){const t=await fetch(`${Te}/api/workouts/${n}/complete`,{method:"POST",headers:Se({"Content-Type":"application/json"}),body:JSON.stringify({archiveTelemetry:e})});if(!t.ok){const o=await t.json();throw new Error(o.error||"Failed to complete workout")}return t.json()}async function wo(n){const e=await fetch(`${Te}/api/workouts/${n}`,{method:"DELETE",headers:Se()});if(!e.ok){const t=await e.json();throw new Error(t.error||"Failed to delete workout")}return e.json()}function pe(n){if(!n)return"--";const e=Math.floor(n/3600),t=Math.floor(n%3600/60),o=n%60;return e>0?`${e}h ${t}m`:t>0?`${t}m ${o}s`:`${o}s`}function ae(n){return n?new Date(n).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"--"}const bo="http://78.109.17.187",Eo="super-secret-bike-tracker-key";async function xo(n){const e={"Content-Type":"application/json"};e["X-API-Key"]=Eo;const t=await fetch(`${bo}/api/users/${n}/ftp-history`,{headers:e});if(!t.ok)throw new Error(`Failed to fetch FTP history: ${t.statusText}`);return t.json()}function S(n,e="polite"){const t=document.getElementById("srAnnouncements");t&&(t.setAttribute("aria-live",e),t.textContent=n,setTimeout(()=>{t.textContent=""},1e3))}const dn=[];function ie(n){dn.push(n)}function To(n){const e=n.target;if(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable){n.key==="Escape"&&e.blur();return}for(const t of dn){const o=n.key.toLowerCase()===t.key.toLowerCase(),s=t.ctrl?n.ctrlKey||n.metaKey:!n.ctrlKey&&!n.metaKey,a=t.shift?n.shiftKey:!n.shiftKey,r=t.alt?n.altKey:!n.altKey;if(o&&s&&a&&r){n.preventDefault(),t.action();return}}}function So(){ie({key:" ",description:"Start/pause/resume workout (context-aware)",action:()=>{const e=document.getElementById("startButton"),t=document.getElementById("pauseButton"),o=document.getElementById("resumeButton");e&&e.style.display!=="none"?e.click():t&&t.style.display!=="none"?t.click():o&&o.style.display!=="none"&&o.click()}}),ie({key:"Escape",description:"Close modal or menu",action:()=>{const e=document.querySelectorAll('.stream-modal[style*="display: block"], .stream-modal:not([style*="display: none"])');for(const o of e)if(o.style.display!=="none"){const s=o.querySelector(".close-button");if(s){s.click(),S("Dialog closed");return}}const t=document.querySelector("details[open]");t&&(t.removeAttribute("open"),S("Menu closed"))}}),ie({key:"m",description:"Toggle menu",action:()=>{const e=document.querySelector("header details");if(e)if(e.hasAttribute("open"))e.removeAttribute("open"),S("Menu closed");else{e.setAttribute("open",""),S("Menu opened");const o=e.querySelector("#controls button");o&&o.focus()}}}),ie({key:"s",description:"Open settings",action:()=>{const e=document.getElementById("settingsButton");e&&(e.click(),S("Settings opened"))}}),ie({key:"h",description:"Open workout history",action:()=>{const e=window.router;if(e)e.navigate("/history"),S("Workout history opened");else{const t=document.getElementById("workoutHistoryButton");t&&(t.click(),S("Workout history opened"))}}}),ie({key:"e",description:"Export workout data",action:()=>{const e=document.getElementById("exportData");e&&e.click()}}),ie({key:"l",description:"Mark lap",action:()=>{const e=document.getElementById("lapButton");e&&e.click()}}),document.addEventListener("keydown",To);const n=document.querySelector("header summary");n&&n.setAttribute("aria-keyshortcuts","M"),console.log("Keyboard navigation initialized")}function ko(n){const e=n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(e.length===0)return;const t=e[0],o=e[e.length-1];t.focus(),n.addEventListener("keydown",s=>{s.key==="Tab"&&(s.shiftKey?document.activeElement===t&&(s.preventDefault(),o.focus()):document.activeElement===o&&(s.preventDefault(),t.focus()))})}function Oe(n){const e=document.getElementById("startButton"),t=document.getElementById("pauseButton"),o=document.getElementById("resumeButton"),s=document.getElementById("stopButton");e&&e.setAttribute("aria-label","Start workout"),t&&t.setAttribute("aria-label","Pause workout"),o&&o.setAttribute("aria-label","Resume workout"),s&&s.setAttribute("aria-label","Stop and save workout");const a=document.getElementById("workoutControls");a&&a.setAttribute("data-workout-state",n)}function Co(n){const e=document.createElement("div");e.className="custom-modal",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-labelledby","modal-title");const t=n.icon?`${n.icon} ${n.title}`:n.title;e.innerHTML=`
        <div class="custom-modal-overlay"></div>
        <div class="custom-modal-container">
            <div class="custom-modal-header">
                <h2 id="modal-title">${t}</h2>
                <button class="modal-close-btn" aria-label="Close dialog">&times;</button>
            </div>
            <div class="custom-modal-body"></div>
            <div class="custom-modal-footer"></div>
        </div>
    `;const o=e.querySelector(".custom-modal-body");typeof n.content=="string"?o.innerHTML=n.content:o.appendChild(n.content);const s=e.querySelector(".custom-modal-footer");return n.buttons.forEach((a,r)=>{const i=document.createElement("button");i.textContent=a.text,i.className=`modal-btn modal-btn-${a.variant}`,i.addEventListener("click",a.onClick),(a.variant==="primary"||r===0&&!n.buttons.some(c=>c.variant==="primary"))&&i.setAttribute("data-autofocus","true"),s.appendChild(i)}),e}function Lo(n){const e=n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),t=e[0],o=e[e.length-1],s=a=>{a.key==="Tab"&&(a.shiftKey?document.activeElement===t&&(a.preventDefault(),o?.focus()):document.activeElement===o&&(a.preventDefault(),t?.focus()))};return n.addEventListener("keydown",s),()=>n.removeEventListener("keydown",s)}function Ke(n){const e=Co(n),t=document.activeElement;document.body.appendChild(e),e.offsetHeight,e.classList.add("modal-visible");const o=Lo(e),s=e.querySelector("[data-autofocus]");setTimeout(()=>{s?.focus()},50);const a=()=>{e.classList.remove("modal-visible"),setTimeout(()=>{e.remove(),o(),t?.focus(),n.onClose?.()},200)};e.querySelector(".modal-close-btn")?.addEventListener("click",a),n.closeOnOverlay!==!1&&e.querySelector(".custom-modal-overlay")?.addEventListener("click",a);const i=l=>{l.key==="Escape"&&(l.preventDefault(),a())};document.addEventListener("keydown",i);const c=n.onClose;return n.onClose=()=>{document.removeEventListener("keydown",i),c?.()},S(`${n.title} dialog opened`,"polite"),a}function Io(n,e,t={}){return new Promise(o=>{const{confirmText:s="Confirm",cancelText:a="Cancel",confirmVariant:r="primary",icon:i}=t;let c=null;c=Ke({title:n,content:`<p class="modal-message">${e}</p>`,icon:i,buttons:[{text:a,variant:"secondary",onClick:()=>{c?.(),o(!1)}},{text:s,variant:r,onClick:()=>{c?.(),o(!0)}}],onClose:()=>o(!1)})})}function un(n,e,t,o){const s=m=>{if(m.length===0)return{avg:null,max:null,count:0};const u=m.map(g=>g.value),h=u.reduce((g,y)=>g+y,0);return{avg:Math.round(h/u.length),max:Math.max(...u),count:u.length}},a=t.power.map(m=>m.value),r=[],i=[1,5,10,30,60,300,1200,3600],c=m=>{if(a.length<m)return 0;let u=0;for(let g=0;g<m;g++)u+=a[g];let h=u/m;for(let g=m;g<a.length;g++)u=u-a[g-m]+a[g],u/m>h&&(h=u/m);return Math.round(h)};for(const m of i)a.length>=m&&r.push({duration:m,watts:c(m)});let l=0,p=0;try{const m=localStorage.getItem("bpt-user-profile");if(m&&a.length>0){const h=JSON.parse(m).ftp||200,g=[];let y=0;for(let b=0;b<a.length;b++)y+=a[b],b>=30&&(y-=a[b-30]),b>=29&&g.push(y/30);if(g.length>0){const b=g.map(T=>Math.pow(T,4)),v=b.reduce((T,I)=>T+I,0)/b.length,w=Math.pow(v,.25);p=w/h,l=(e-n)/1e3*w*p/(h*3600)*100}}}catch(m){console.warn("Error calculating TSS",m)}const d={duration:e-n,startTime:n,endTime:e,power:s(t.power),heartrate:s(t.heartrate),cadence:s(t.cadence),powerCurve:r.length>0?r:void 0,trainingLoad:l>0?Math.round(l):void 0,intensityFactor:p>0?parseFloat(p.toFixed(2)):void 0};if(o){const m=o.getPowerZoneDistribution(),u=o.getHrZoneDistribution();m.totalTimeMs>0&&(d.powerZoneDistribution=m),u.totalTimeMs>0&&(d.hrZoneDistribution=u)}return d}function $o(n){const e=Math.floor(n/1e3),t=Math.floor(e/3600),o=Math.floor(e%3600/60),s=e%60,a=[];return t>0&&a.push(`${t}h`),o>0&&a.push(`${o}m`),(s>0||a.length===0)&&a.push(`${s}s`),a.join(" ")}function Ao(n){const e=Math.floor(n/60),t=n%60;return`${e}:${String(t).padStart(2,"0")}`}const Mo={1:"#3b82f6",2:"#22c55e",3:"#eab308",4:"#f97316",5:"#ef4444",6:"#a855f7",7:"#ec4899"};function Ot(n,e){const t=document.createElement("div");if(t.className="zone-distribution",n.zones.filter(a=>a.timeInZoneMs>0).length===0)return t;const s=Math.max(...n.zones.map(a=>a.timeInZoneMs));return t.innerHTML=`
        <h4 class="zone-distribution-title">${e}</h4>
        <div class="zone-chart">
            ${n.zones.map(a=>{const r=s>0?a.timeInZoneMs/s*100:0,i=Math.round(a.timeInZoneMs/1e3),c=Mo[a.zone]||"#888",l=Ao(i);return`
                    <div class="zone-bar-row" title="${a.name}: ${l}">
                        <span class="zone-bar-label">Z${a.zone}</span>
                        <div class="zone-bar-container">
                            <div class="zone-bar" style="width: ${Math.max(r,2)}%; background-color: ${c};" aria-valuenow="${i}" aria-label="${a.name}"></div>
                        </div>
                        <span class="zone-bar-time">${l}</span>
                    </div>
                `}).join("")}
        </div>
    `,t}function Bo(n,e=[]){const t=document.createElement("div");t.className="workout-summary";const o=(a,r)=>a!==null?`${a}${r}`:"--";let s="";if(e.length>0&&(s=`
            <div class="summary-records" style="background: rgba(255, 215, 0, 0.1); border: 1px solid var(--color-accent); border-radius: 8px; padding: 12px; margin-bottom: 16px;">
                <h4 style="margin: 0 0 8px 0; color: var(--color-accent); display: flex; align-items: center; gap: 8px;">
                    🏆 New Personal Records!
                </h4>
                <ul style="margin: 0; padding-left: 20px; list-style-type: none;">
                    ${e.map(a=>`<li style="margin-bottom: 4px;">🆕 ${a}</li>`).join("")}
                </ul>
            </div>
        `),t.innerHTML=`
        ${s}
        <div class="summary-duration">
            <span class="summary-label">Duration</span>
            <span class="summary-value">${$o(n.duration)}</span>
        </div>
        <div class="summary-grid">
            <div class="summary-metric">
                <span class="summary-metric-icon">⚡</span>
                <span class="summary-metric-label">Power</span>
                <div class="summary-metric-values">
                    <span class="summary-avg">Avg: ${o(n.power.avg,"W")}</span>
                    <span class="summary-max">Max: ${o(n.power.max,"W")}</span>
                </div>
            </div>
            <div class="summary-metric">
                <span class="summary-metric-icon">❤️</span>
                <span class="summary-metric-label">Heart Rate</span>
                <div class="summary-metric-values">
                    <span class="summary-avg">Avg: ${o(n.heartrate.avg," bpm")}</span>
                    <span class="summary-max">Max: ${o(n.heartrate.max," bpm")}</span>
                </div>
            </div>
            <div class="summary-metric">
                <span class="summary-metric-icon">🚴</span>
                <span class="summary-metric-label">Cadence</span>
                <div class="summary-metric-values">
                    <span class="summary-avg">Avg: ${o(n.cadence.avg," rpm")}</span>
                    <span class="summary-max">Max: ${o(n.cadence.max," rpm")}</span>
                </div>
            </div>
        </div>
        <div class="summary-samples">
            <span class="summary-samples-text">
                ${n.power.count+n.heartrate.count+n.cadence.count} data points recorded
            </span>
        </div>
    `,n.powerZoneDistribution&&n.powerZoneDistribution.totalTimeMs>0){const a=Ot(n.powerZoneDistribution,"⚡ Power Zone Distribution");t.appendChild(a)}if(n.hrZoneDistribution&&n.hrZoneDistribution.totalTimeMs>0){const a=Ot(n.hrZoneDistribution,"❤️ Heart Rate Zone Distribution");t.appendChild(a)}return t}function Do(n,e,t=[]){return new Promise(o=>{let s=null;const a=Bo(n,t);s=Ke({title:"Workout Complete",content:a,icon:"🏁",closeOnOverlay:!1,buttons:[{text:"🗑️ Discard",variant:"danger",onClick:()=>{s?.(),e.onDiscard(),o("discard")}},{text:"▶️ Keep Recording",variant:"secondary",onClick:()=>{s?.(),e.onKeepRecording(),o("keep")}},{text:"💾 Save & Finish",variant:"primary",onClick:()=>{s?.(),e.onExport(),o("export")}}],onClose:()=>{e.onKeepRecording(),o("keep")}})})}let z=1,Ie=1,ke=!1,he="",Me="",Be="",de="list",j=new Date,De="cloud";function J(n){if(!n.summary)return{};if(typeof n.summary=="string")try{return JSON.parse(n.summary)}catch{return{}}return n.summary}function _o(){const n=document.getElementById("historyPrevPage"),e=document.getElementById("historyNextPage"),t=document.getElementById("historyRefresh"),o=document.getElementById("workoutTypeFilter"),s=document.getElementById("workoutDateStart"),a=document.getElementById("workoutDateEnd"),r=document.getElementById("viewListBtn"),i=document.getElementById("viewCalendarBtn"),c=document.getElementById("viewAnalyticsBtn"),l=document.getElementById("workoutListView"),p=document.getElementById("workoutCalendarView"),d=document.getElementById("workoutAnalyticsView"),m=document.getElementById("calendarPrevMonth"),u=document.getElementById("calendarNextMonth"),h=document.getElementById("sourceCloudBtn"),g=document.getElementById("sourceLocalBtn");h&&g&&(h.addEventListener("click",()=>Vt("cloud")),g.addEventListener("click",()=>Vt("local"))),Po();const y=v=>{de=v,r&&(r.classList.toggle("active",v==="list"),r.setAttribute("aria-pressed",(v==="list").toString()),r.style.background=v==="list"?"var(--color-bg-active)":"transparent"),i&&(i.classList.toggle("active",v==="calendar"),i.setAttribute("aria-pressed",(v==="calendar").toString()),i.style.background=v==="calendar"?"var(--color-bg-active)":"transparent"),c&&(c.classList.toggle("active",v==="analytics"),c.setAttribute("aria-pressed",(v==="analytics").toString()),c.style.background=v==="analytics"?"var(--color-bg-active)":"transparent"),l&&(l.style.display=v==="list"?"block":"none"),p&&(p.style.display=v==="calendar"?"block":"none"),d&&(d.style.display=v==="analytics"?"block":"none")};r?.addEventListener("click",()=>{y("list"),K()}),i?.addEventListener("click",()=>{y("calendar"),$e()}),c?.addEventListener("click",()=>{y("analytics"),ut()});const b=()=>{o&&(he=o.value),s&&(Me=s.value),a&&(Be=a.value),z=1,de==="list"?K():de==="calendar"?$e():de==="analytics"&&ut()};o?.addEventListener("change",b),s?.addEventListener("change",b),a?.addEventListener("change",b),m?.addEventListener("click",()=>{j.setMonth(j.getMonth()-1),$e()}),u?.addEventListener("click",()=>{j.setMonth(j.getMonth()+1),$e()}),n?.addEventListener("click",async()=>{z>1&&(z--,await K())}),e?.addEventListener("click",async()=>{z<Ie&&(z++,await K())}),t?.addEventListener("click",async()=>{await K()})}async function Po(){const n=document.getElementById("workoutHistoryButton"),e=dt();try{ke=await ln()}catch{ke=!1}!ke&&e&&(De="local",mn()),n&&(n.disabled=!(ke||e),n.title=ke||e?"View workout history":"History not available")}function No(n){const e=un(n.startTime,n.lastUpdated,n.measurements);return{id:n.id,title:"Local Workout",sport:"cycling",startTime:new Date(n.startTime).toISOString(),endTime:new Date(n.lastUpdated).toISOString(),duration:Math.round((n.lastUpdated-n.startTime)/1e3),status:"COMPLETED",summary:JSON.stringify(e),createdAt:new Date(n.startTime).toISOString(),updatedAt:new Date(n.lastUpdated).toISOString(),_synced:n.synced}}async function K(){const n=document.getElementById("workoutList"),e=document.getElementById("historyPageInfo"),t=document.getElementById("historyPrevPage"),o=document.getElementById("historyNextPage");if(n){n.innerHTML='<div class="workout-loading">Loading workouts...</div>';try{let s=[];if(De==="local"){const a=await cn();a.sort((l,p)=>p.startTime-l.startTime);const r=a.length;Ie=Math.ceil(r/10)||1;const i=(z-1)*10;s=a.slice(i,i+10).map(No),e&&(e.textContent=`Page ${z} of ${Ie} (${r} local)`)}else{const a={page:z,limit:10};he&&(a.sport=he),Me&&(a.startDate=new Date(Me)),Be&&(a.endDate=new Date(Be));const r=await Ge(a);s=r.workouts;const{pagination:i}=r;Ie=i.totalPages,e&&(e.textContent=`Page ${i.page} of ${i.totalPages} (${i.total} total)`)}if(t&&(t.disabled=z<=1),o&&(o.disabled=z>=Ie),s.length===0){n.innerHTML=`
        <div class="workout-empty">
          <p>No workouts found</p>
          <p class="workout-empty-hint">Start a workout to see it here!</p>
        </div>
      `;return}n.innerHTML=s.map(a=>Oo(a)).join(""),n.querySelectorAll(".workout-card").forEach(a=>{const r=a.dataset.workoutId;r&&(a.querySelector(".workout-view-btn")?.addEventListener("click",i=>{i.stopPropagation(),Je(r)}),a.querySelector(".workout-delete-btn")?.addEventListener("click",i=>{i.stopPropagation(),Ho(r)}),a.querySelector(".workout-sync-btn")?.addEventListener("click",i=>{i.stopPropagation(),Ro(r)}))})}catch(s){console.error("Failed to load workouts:",s);const a=s instanceof Error?s.message:"Unknown error";n.innerHTML=`
      <div class="workout-error">
        <p>Failed to load workouts</p>
        <p class="workout-error-detail">${a}</p>
      </div>
    `}}}function Vt(n){De!==n&&(De=n,mn(),z=1,K())}function mn(){const n=document.getElementById("sourceCloudBtn"),e=document.getElementById("sourceLocalBtn");n&&e&&(De==="cloud"?(n.classList.add("active"),n.setAttribute("aria-pressed","true"),n.style.background="var(--color-bg-active)",e.classList.remove("active"),e.setAttribute("aria-pressed","false"),e.style.background="transparent"):(e.classList.add("active"),e.setAttribute("aria-pressed","true"),e.style.background="var(--color-bg-active)",n.classList.remove("active"),n.setAttribute("aria-pressed","false"),n.style.background="transparent"))}async function Ro(n){const t=(await cn()).find(o=>o.id===n);if(t)try{S("Syncing workout...","polite");const o=await fo({streamName:`sync-${n}`,title:`Synced: ${ae(new Date(t.startTime))}`,sport:"cycling"});if(o.success&&o.workout)if((await vo(o.workout.id,!1)).success)await Gn(n),S("Workout synced successfully","assertive"),await K();else throw new Error("Failed to complete workout on server")}catch(o){console.error("Sync failed",o),S("Sync failed","assertive")}}function Oo(n){const e=n.status.toLowerCase(),t=J(n),s=n._synced===!1?'<button class="workout-sync-btn" title="Upload to server">☁️ Sync</button>':n._synced===!0?'<span title="Synced" style="margin-right:8px;">✅</span>':"";return`
    <div class="workout-card" data-workout-id="${n.id}">
      <div class="workout-card-header">
        <span class="workout-title">${n.title||"Untitled Workout"}</span>
        <span class="workout-status workout-status-${e}">${n.status}</span>
      </div>
      <div class="workout-card-body">
        <div class="workout-date">
          📅 ${ae(n.startTime)}
        </div>
        <div class="workout-stats">
          ${n.duration?`<span class="workout-stat">⏱️ ${pe(n.duration)}</span>`:""}
          ${t.avgPower?`<span class="workout-stat">⚡ ${t.avgPower}W avg</span>`:""}
          ${t.maxPower?`<span class="workout-stat">⚡ ${t.maxPower}W max</span>`:""}
          ${t.avgHeartrate?`<span class="workout-stat">❤️ ${t.avgHeartrate} bpm</span>`:""}
          ${t.totalEnergy?`<span class="workout-stat">🔥 ${t.totalEnergy} kJ</span>`:""}
        </div>
      </div>
      <div class="workout-card-actions">
        ${s}
        <button class="workout-view-btn" title="View details">👁️ View</button>
        <button class="workout-delete-btn" title="Delete workout">🗑️</button>
      </div>
    </div>
  `}async function Je(n){const e=document.getElementById("workoutDetailPanel"),t=document.getElementById("workoutListPanel");if(!(!e||!t)){t.style.display="none",e.style.display="block",e.innerHTML='<div class="workout-loading">Loading workout details...</div>';try{const o=await yo(n,!0);e.innerHTML=Vo(o),e.querySelector(".workout-back-btn")?.addEventListener("click",()=>{e.style.display="none",t.style.display="block"}),e.querySelector(".workout-export-btn")?.addEventListener("click",()=>{Fo(o)})}catch(o){console.error("Failed to load workout details:",o);const s=o instanceof Error?o.message:"Unknown error";e.innerHTML=`
      <div class="workout-error">
        <p>Failed to load workout</p>
        <p class="workout-error-detail">${s}</p>
        <button class="workout-back-btn">← Back to list</button>
      </div>
    `,e.querySelector(".workout-back-btn")?.addEventListener("click",()=>{e.style.display="none",t.style.display="block"})}}}function Vo(n){const e=J(n),t=n.status.toLowerCase();return`
    <div class="workout-detail">
      <div class="workout-detail-header">
        <button class="workout-back-btn">← Back</button>
        <h3>${n.title||"Untitled Workout"}</h3>
        <span class="workout-status workout-status-${t}">${n.status}</span>
      </div>

      <div class="workout-detail-meta">
        <div class="meta-item">
          <span class="meta-label">Sport</span>
          <span class="meta-value">${n.sport||"cycling"}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Start Time</span>
          <span class="meta-value">${ae(n.startTime)}</span>
        </div>
        ${n.endTime?`
          <div class="meta-item">
            <span class="meta-label">End Time</span>
            <span class="meta-value">${ae(n.endTime)}</span>
          </div>
        `:""}
        ${n.duration?`
          <div class="meta-item">
            <span class="meta-label">Duration</span>
            <span class="meta-value">${pe(n.duration)}</span>
          </div>
        `:""}
      </div>

      ${Object.keys(e).length>0?`
        <div class="workout-detail-summary">
          <h4>Summary</h4>
          <div class="summary-grid">
            ${e.avgPower?`
              <div class="summary-item">
                <span class="summary-label">Avg Power</span>
                <span class="summary-value">${e.avgPower} W</span>
              </div>
            `:""}
            ${e.maxPower?`
              <div class="summary-item">
                <span class="summary-label">Max Power</span>
                <span class="summary-value">${e.maxPower} W</span>
              </div>
            `:""}
            ${e.avgCadence?`
              <div class="summary-item">
                <span class="summary-label">Avg Cadence</span>
                <span class="summary-value">${e.avgCadence} rpm</span>
              </div>
            `:""}
            ${e.avgHeartrate?`
              <div class="summary-item">
                <span class="summary-label">Avg Heart Rate</span>
                <span class="summary-value">${e.avgHeartrate} bpm</span>
              </div>
            `:""}
            ${e.totalEnergy?`
              <div class="summary-item">
                <span class="summary-label">Total Energy</span>
                <span class="summary-value">${e.totalEnergy} kJ</span>
              </div>
            `:""}
          </div>
        </div>
      `:""}

      ${n.description?`
        <div class="workout-detail-description">
          <h4>Notes</h4>
          <p>${n.description}</p>
        </div>
      `:""}

      <div class="workout-detail-actions">
        ${n.telemetry?`
          <button class="workout-export-btn">💾 Export Data</button>
        `:""}
      </div>
    </div>
  `}function Fo(n){const t=`workout-${new Date(n.startTime).toISOString().replace(/[:.]/g,"-").slice(0,19)}`,o={id:n.id,title:n.title,sport:n.sport,startTime:n.startTime,endTime:n.endTime,duration:n.duration,summary:n.summary,telemetry:n.telemetry},s=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),a=URL.createObjectURL(s),r=document.createElement("a");r.href=a,r.download=`${t}.json`,r.click(),URL.revokeObjectURL(a)}async function Ho(n){if(confirm("Are you sure you want to delete this workout? This cannot be undone."))try{await wo(n),await K()}catch(e){console.error("Failed to delete workout:",e);const t=e instanceof Error?e.message:"Unknown error";alert(`Failed to delete workout: ${t}`)}}async function $e(){const n=document.getElementById("workoutCalendarGrid"),e=document.getElementById("calendarMonthLabel");if(!n||!e)return;const t=["January","February","March","April","May","June","July","August","September","October","November","December"];e.textContent=`${t[j.getMonth()]} ${j.getFullYear()}`,n.innerHTML='<div style="grid-column: 1 / -1; text-align: center; padding: 20px;">Loading calendar...</div>';const o=j.getFullYear(),s=j.getMonth(),a=new Date(o,s,1),r=new Date(o,s+1,0,23,59,59,999);try{const i={startDate:a,endDate:r,limit:1e3};he&&(i.sport=he);const l=(await Ge(i)).workouts;Uo(l),zo(l)}catch(i){console.error("Failed to load calendar:",i),n.innerHTML='<div style="grid-column: 1 / -1; text-align: center; color: var(--color-error);">Failed to load calendar data</div>'}}function Uo(n){const e=document.getElementById("workoutCalendarGrid");if(!e)return;e.innerHTML="",["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach(i=>{const c=document.createElement("div");c.textContent=i,c.style.textAlign="center",c.style.fontWeight="bold",c.style.padding="4px",c.style.fontSize="0.9em",c.style.color="var(--color-text-secondary)",e.appendChild(c)});const o=j.getFullYear(),s=j.getMonth(),a=new Date(o,s,1).getDay(),r=new Date(o,s+1,0).getDate();for(let i=0;i<a;i++){const c=document.createElement("div");e.appendChild(c)}for(let i=1;i<=r;i++){const c=document.createElement("div");c.style.border="1px solid var(--color-border)",c.style.borderRadius="4px",c.style.minHeight="60px",c.style.padding="4px",c.style.background="var(--card-bg)",c.style.position="relative";const l=document.createElement("div");l.textContent=i.toString(),l.style.fontSize="0.8em",l.style.marginBottom="4px",c.appendChild(l),n.filter(m=>{const u=new Date(m.startTime);return u.getDate()===i&&u.getMonth()===s&&u.getFullYear()===o}).forEach(m=>{const u=document.createElement("div");u.title=`${m.title||"Workout"} (${pe(m.duration||0)})`,u.style.fontSize="0.7em",u.style.whiteSpace="nowrap",u.style.overflow="hidden",u.style.textOverflow="ellipsis",u.style.cursor="pointer",u.style.padding="2px",u.style.marginTop="2px",u.style.borderRadius="2px",u.style.background="var(--color-bg-active)",u.style.color="var(--color-text-primary)";const h=m.sport==="running"?"🏃":"🚴";u.textContent=`${h} ${pe(m.duration||0)}`,u.addEventListener("click",g=>{g.stopPropagation(),Je(m.id)}),c.appendChild(u)});const d=new Date;i===d.getDate()&&s===d.getMonth()&&o===d.getFullYear()&&(c.style.borderColor="var(--color-accent)",l.style.fontWeight="bold",l.style.color="var(--color-accent)"),e.appendChild(c)}}function zo(n){const e=document.getElementById("monthlyStats");if(!e)return;const t=n.length,o=n.reduce((r,i)=>r+(i.duration||0),0),s=n.reduce((r,i)=>{const c=J(i);return r+(c.totalDistance||0)},0),a=n.reduce((r,i)=>{const c=J(i);return r+(c.totalEnergy||0)},0);e.innerHTML=`
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Workouts</div>
            <div style="font-weight: bold;">${t}</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Duration</div>
            <div style="font-weight: bold;">${pe(o)}</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Distance</div>
            <div style="font-weight: bold;">${(s/1e3).toFixed(1)} km</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Energy</div>
            <div style="font-weight: bold;">${a.toFixed(0)} kJ</div>
        </div>
    `}async function ut(){if(!document.getElementById("workoutAnalyticsView"))return;const e=document.getElementById("prList");e&&(e.innerHTML='<div style="padding: 12px; text-align: center;">Loading records...</div>');try{const t={limit:1e3};he&&(t.sport=he),Me&&(t.startDate=new Date(Me)),Be&&(t.endDate=new Date(Be));const s=(await Ge(t)).workouts;let a=[];if(s.length>0&&s[0].userId)try{a=await xo(s[0].userId)}catch(r){console.warn("Failed to load FTP history",r)}Wo(s,a)}catch(t){console.error("Failed to load analytics:",t),e&&(e.innerHTML='<div style="color: var(--color-error); text-align: center;">Failed to load data</div>')}}function Wo(n,e=[]){qo(n),jo(n),Zo(n),Go(n),Ko(e),Jo(n)}function qo(n){const e=document.getElementById("prList");if(!e)return;let t={val:0,date:"",id:""},o={val:0,date:"",id:""},s={val:0,date:"",id:""},a={val:0,date:"",id:""};n.forEach(i=>{const c=J(i),l=ae(i.startTime);c.maxPower&&c.maxPower>t.val&&(t={val:c.maxPower,date:l,id:i.id}),c.maxHeartrate&&c.maxHeartrate>o.val&&(o={val:c.maxHeartrate,date:l,id:i.id}),i.duration&&i.duration>s.val&&(s={val:i.duration,date:l,id:i.id}),c.totalDistance&&c.totalDistance>a.val&&(a={val:c.totalDistance,date:l,id:i.id})});const r=(i,c,l,p)=>`
        <div class="pr-row" data-id="${p}" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--color-border); cursor: pointer;">
            <div style="font-weight: 500;">${i}</div>
            <div style="text-align: right;">
                <div style="font-weight: bold; color: var(--color-accent);">${c}</div>
                <div style="font-size: 0.8em; color: var(--color-text-secondary);">${l}</div>
            </div>
        </div>
    `;e.innerHTML=`
        ${t.val>0?r("Max Power (1s)",`${t.val} W`,t.date,t.id):""}
        ${o.val>0?r("Max Heart Rate",`${o.val} bpm`,o.date,o.id):""}
        ${s.val>0?r("Longest Duration",pe(s.val),s.date,s.id):""}
        ${a.val>0?r("Longest Distance",`${(a.val/1e3).toFixed(1)} km`,a.date,a.id):""}
    `,e.querySelectorAll(".pr-row").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.id;c&&Je(c)})})}function jo(n){const e=document.getElementById("trainingLoadChart");if(!e)return;const t={};for(let s=3;s>=0;s--){const a=new Date;a.setDate(a.getDate()-s*7);const r=Ft(a);t[`${a.getFullYear()}-W${r}`]=0}n.forEach(s=>{const a=J(s);if(a.trainingLoad){const r=new Date(s.startTime),i=`${r.getFullYear()}-W${Ft(r)}`;t[i]!==void 0&&(t[i]+=a.trainingLoad)}});const o=Math.max(...Object.values(t),100);e.innerHTML=Object.entries(t).map(([s,a])=>{const r=a/o*100;return`
            <div style="display: flex; flex-direction: column; align-items: center; width: 20%;">
                <div style="font-size: 0.8em; font-weight: bold; margin-bottom: 4px;">${Math.round(a)}</div>
                <div style="width: 100%; height: 100px; display: flex; align-items: flex-end; justify-content: center;">
                    <div style="width: 80%; background: var(--color-accent); height: ${r}%; border-radius: 4px 4px 0 0; min-height: 4px;"></div>
                </div>
                <div style="font-size: 0.7em; color: var(--color-text-secondary); margin-top: 4px;">${s.split("-")[1]}</div>
            </div>
        `}).join("")}function Ft(n){n=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())),n.setUTCDate(n.getUTCDate()+4-(n.getUTCDay()||7));const e=new Date(Date.UTC(n.getUTCFullYear(),0,1));return Math.ceil(((n.getTime()-e.getTime())/864e5+1)/7)}function Zo(n){const e=document.getElementById("powerCurveChart");if(!e)return;const t={},o=[1,5,10,30,60,300,1200,3600];if(n.forEach(d=>{const m=J(d);m.powerCurve&&m.powerCurve.forEach(u=>{(!t[u.duration]||u.watts>t[u.duration])&&(t[u.duration]=u.watts)}),m.maxPower&&(!t[1]||m.maxPower>t[1])&&(t[1]=m.maxPower)}),Object.keys(t).length===0){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">No power data available</div>';return}const s=e.clientWidth||300,a=200,r=30,i=Math.max(...Object.values(t))*1.1,c=o.map((d,m)=>{if(!t[d])return null;const u=r+m*((s-r*2)/(o.length-1)),h=a-r-t[d]/i*(a-r*2);return{x:u,y:h,val:t[d],duration:d}}).filter(d=>d!==null);if(c.length<2){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">Insufficient data points</div>';return}const l=`M ${c.map(d=>`${d.x},${d.y}`).join(" L ")}`,p=`
        <svg width="100%" height="100%" viewBox="0 0 ${s} ${a}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${r}" y1="${r}" x2="${r}" y2="${a-r}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${r}" y1="${a-r}" x2="${s-r}" y2="${a-r}" stroke="var(--color-border)" stroke-width="1" />
            
            <!-- Path -->
            <path d="${l}" fill="none" stroke="var(--color-accent)" stroke-width="2" />
            
            <!-- Points -->
            ${c.map(d=>`
                <circle cx="${d.x}" cy="${d.y}" r="4" fill="var(--card-bg)" stroke="var(--color-accent)" stroke-width="2" />
                <text x="${d.x}" y="${d.y-10}" text-anchor="middle" font-size="10" fill="var(--color-text-primary)">${d.val}W</text>
                <text x="${d.x}" y="${a-10}" text-anchor="middle" font-size="10" fill="var(--color-text-secondary)">${Yo(d.duration)}</text>
            `).join("")}
        </svg>
    `;e.innerHTML=p}function Yo(n){return n<60?`${n}s`:n<3600?`${n/60}m`:`${n/3600}h`}function Go(n){const e=document.getElementById("fitnessTrendChart");if(!e)return;const t=[...n].sort((E,C)=>new Date(E.startTime).getTime()-new Date(C.startTime).getTime());if(t.length<2){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">Not enough data for trend analysis</div>';return}const o=new Map;t.forEach(E=>{const C=J(E);if(C.trainingLoad){const L=new Date(E.startTime).toISOString().split("T")[0],_=o.get(L)||0;o.set(L,_+C.trainingLoad)}});const s=[],a=new Date(t[0].startTime),r=new Date,i=Math.exp(-1/42),c=Math.exp(-1/7);let l=0,p=0;for(let E=new Date(a);E<=r;E.setDate(E.getDate()+1)){const C=E.toISOString().split("T")[0],L=o.get(C)||0;l=l*i+L*(1-i),p=p*c+L*(1-c),s.push({date:new Date(E),ctl:l,atl:p,tsb:l-p})}const d=e.clientWidth||600,m=250,u={top:20,right:30,bottom:30,left:40},h=d-u.left-u.right,g=m-u.top-u.bottom,y=Math.max(...s.map(E=>Math.max(E.ctl,E.atl)))*1.1,b=r.getTime()-a.getTime();if(b===0)return;const v=E=>u.left+(E.getTime()-a.getTime())/b*h,w=E=>u.top+g-E/y*g,f="M "+s.map(E=>`${v(E.date)},${w(E.ctl)}`).join(" L "),T="M "+s.map(E=>`${v(E.date)},${w(E.atl)}`).join(" L "),I=`
        <svg width="100%" height="100%" viewBox="0 0 ${d} ${m}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${u.left}" y1="${u.top}" x2="${u.left}" y2="${m-u.bottom}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${u.left}" y1="${m-u.bottom}" x2="${d-u.right}" y2="${m-u.bottom}" stroke="var(--color-border)" stroke-width="1" />
            
            <!-- CTL Line (Fitness) - Blue -->
            <path d="${f}" fill="none" stroke="#3b82f6" stroke-width="2" />
            
            <!-- ATL Line (Fatigue) - Pink/Purple -->
            <path d="${T}" fill="none" stroke="#ec4899" stroke-width="2" stroke-dasharray="4" />
            
            <!-- Legend -->
            <g transform="translate(${u.left+10}, ${u.top})">
                <rect x="0" y="0" width="10" height="10" fill="#3b82f6" />
                <text x="15" y="10" font-size="12" fill="var(--color-text-secondary)">Fitness (CTL)</text>
                
                <rect x="100" y="0" width="10" height="10" fill="none" stroke="#ec4899" stroke-width="2" stroke-dasharray="4" />
                <text x="115" y="10" font-size="12" fill="var(--color-text-secondary)">Fatigue (ATL)</text>
            </g>

            <!-- Latest Stats -->
             <text x="${d-u.right}" y="${u.top}" text-anchor="end" font-size="12" fill="var(--color-text-primary)">
                CTL: ${Math.round(l)} | ATL: ${Math.round(p)} | TSB: ${Math.round(l-p)}
            </text>
        </svg>
    `;e.innerHTML=I}function Ko(n){const e=document.getElementById("ftpHistoryChart");if(!e)return;if(n.length===0){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">No FTP history available</div>';return}const t=[...n].sort((v,w)=>new Date(v.createdAt).getTime()-new Date(w.createdAt).getTime()),o=e.clientWidth||600,s=200,a={top:20,right:30,bottom:30,left:40},r=o-a.left-a.right,i=s-a.top-a.bottom,c=Math.max(...t.map(v=>v.ftp))*1.1,l=Math.max(0,Math.min(...t.map(v=>v.ftp))*.9),p=c-l||100,d=new Date(t[0].createdAt),u=new Date().getTime()-d.getTime(),h=v=>{const w=new Date(v);return a.left+(w.getTime()-d.getTime())/u*r},g=v=>a.top+i-(v-l)/p*i;let y="";if(t.length>0){y=`M ${h(t[0].createdAt)},${g(t[0].ftp)}`;for(let v=1;v<t.length;v++){const w=h(t[v].createdAt),f=g(t[v-1].ftp),T=g(t[v].ftp);y+=` L ${w},${f} L ${w},${T}`}y+=` L ${o-a.right},${g(t[t.length-1].ftp)}`}const b=`
        <svg width="100%" height="100%" viewBox="0 0 ${o} ${s}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${a.left}" y1="${a.top}" x2="${a.left}" y2="${s-a.bottom}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${a.left}" y1="${s-a.bottom}" x2="${o-a.right}" y2="${s-a.bottom}" stroke="var(--color-border)" stroke-width="1" />
            
            <!-- FTP Line -->
            <path d="${y}" fill="none" stroke="var(--color-accent)" stroke-width="2" />
            
            <!-- Points -->
            ${t.map(v=>`
                <circle cx="${h(v.createdAt)}" cy="${g(v.ftp)}" r="4" fill="var(--card-bg)" stroke="var(--color-accent)" stroke-width="2">
                    <title>${v.ftp} W (${ae(v.createdAt)})</title>
                </circle>
                <text x="${h(v.createdAt)}" y="${g(v.ftp)-10}" text-anchor="middle" font-size="10" fill="var(--color-text-primary)">${v.ftp}</text>
            `).join("")}

            <!-- Axis Labels (simplified) -->
            <text x="${a.left}" y="${s-10}" font-size="10" fill="var(--color-text-secondary)">${ae(d)}</text>
            <text x="${o-a.right}" y="${s-10}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">Today</text>
        </svg>
    `;e.innerHTML=b}function Jo(n){const e=document.getElementById("prHistoryList");if(!e)return;const t=[...n].sort((c,l)=>new Date(c.startTime).getTime()-new Date(l.startTime).getTime()),o=[];let s=0,a=0;const r={};if(t.forEach(c=>{const l=J(c),p=ae(c.startTime);if(l.maxPower&&l.maxPower>s){if(s>0){const d=l.maxPower-s;o.push({date:p,metric:"Max Power",value:`${l.maxPower} W`,improvement:`+${d} W`,workoutId:c.id})}else o.push({date:p,metric:"Max Power",value:`${l.maxPower} W`,improvement:"New!",workoutId:c.id});s=l.maxPower}if(l.maxHeartrate&&l.maxHeartrate>a){if(a>0){const d=l.maxHeartrate-a;o.push({date:p,metric:"Max Heart Rate",value:`${l.maxHeartrate} bpm`,improvement:`+${d} bpm`,workoutId:c.id})}else o.push({date:p,metric:"Max Heart Rate",value:`${l.maxHeartrate} bpm`,improvement:"New!",workoutId:c.id});a=l.maxHeartrate}if(l.powerCurve){const d=[60,300,1200],m={60:"1m Power",300:"5m Power",1200:"20m Power"};l.powerCurve.forEach(u=>{if(d.includes(u.duration)){const h=r[u.duration]||0;u.watts>h&&(h>0?o.push({date:p,metric:m[u.duration],value:`${u.watts} W`,improvement:`+${u.watts-h} W`,workoutId:c.id}):o.push({date:p,metric:m[u.duration],value:`${u.watts} W`,improvement:"New!",workoutId:c.id}),r[u.duration]=u.watts)}})}}),o.length===0){e.innerHTML='<div style="text-align: center; color: var(--color-text-secondary); padding: 20px;">No records found</div>';return}const i=o.reverse();e.innerHTML=i.map(c=>`
        <div class="pr-history-row" data-id="${c.workoutId}" style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border-bottom: 1px solid var(--color-border); cursor: pointer;">
            <div style="flex: 1;">
                <div style="font-weight: 500;">${c.metric}</div>
                <div style="font-size: 0.8em; color: var(--color-text-secondary);">${c.date}</div>
            </div>
            <div style="text-align: right;">
                <div style="font-weight: bold; color: var(--color-accent);">${c.value}</div>
                <div style="font-size: 0.8em; color: var(--color-success);">${c.improvement}</div>
            </div>
        </div>
    `).join(""),e.querySelectorAll(".pr-history-row").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.id;l&&Je(l)})})}async function Ht(){de==="list"?await K():de==="calendar"?await $e():de==="analytics"&&await ut()}class Xo{id="history";isInitialized=!1;init(e){const t=document.getElementById("workoutHistoryTemplate");if(t){const o=t.content.cloneNode(!0);e.appendChild(o),setTimeout(()=>{_o(),this.isInitialized=!0},0)}else console.error("History template not found!"),e.innerHTML="<p>Error loading history view</p>"}onEnter(){this.isInitialized?Ht():setTimeout(()=>Ht(),50)}onLeave(){}}const Qo={id:"ramp-test",name:"Ramp Test",description:"Standard Ramp Test to estimate FTP. Start at 100W, increase by 20W every minute until failure.",tags:["test","ftp"],steps:[{type:"warmup",duration:300,targetType:"open",description:"Free warmup"},{type:"active",duration:60,targetValue:100,targetType:"power",description:"Step 1"},{type:"active",duration:60,targetValue:120,targetType:"power",description:"Step 2"},{type:"active",duration:60,targetValue:140,targetType:"power",description:"Step 3"},{type:"active",duration:60,targetValue:160,targetType:"power",description:"Step 4"},{type:"active",duration:60,targetValue:180,targetType:"power",description:"Step 5"},{type:"active",duration:60,targetValue:200,targetType:"power",description:"Step 6"},{type:"active",duration:60,targetValue:220,targetType:"power",description:"Step 7"},{type:"active",duration:60,targetValue:240,targetType:"power",description:"Step 8"},{type:"active",duration:60,targetValue:260,targetType:"power",description:"Step 9"},{type:"active",duration:60,targetValue:280,targetType:"power",description:"Step 10"},{type:"active",duration:60,targetValue:300,targetType:"power",description:"Step 11"},{type:"active",duration:60,targetValue:320,targetType:"power",description:"Step 12"},{type:"active",duration:60,targetValue:340,targetType:"power",description:"Step 13"},{type:"active",duration:60,targetValue:360,targetType:"power",description:"Step 14"},{type:"active",duration:60,targetValue:380,targetType:"power",description:"Step 15"},{type:"active",duration:60,targetValue:400,targetType:"power",description:"Step 16 (Elite!)"},{type:"cooldown",duration:300,targetType:"open",description:"Cooldown"}]},es={id:"sweet-spot-3x10",name:"Sweet Spot 3x10",description:"Classic Sweet Spot workout to build aerobic engine. 3 intervals of 10 minutes at 88-93% FTP.",tags:["sweet-spot","aerobic"],steps:[{type:"warmup",duration:600,targetType:"percent_ftp",targetValue:50,description:"Warmup"},{type:"active",duration:600,targetType:"percent_ftp",targetValue:90,description:"Sweet Spot"},{type:"rest",duration:300,targetType:"percent_ftp",targetValue:50,description:"Recovery"},{type:"active",duration:600,targetType:"percent_ftp",targetValue:90,description:"Sweet Spot"},{type:"rest",duration:300,targetType:"percent_ftp",targetValue:50,description:"Recovery"},{type:"active",duration:600,targetType:"percent_ftp",targetValue:90,description:"Sweet Spot"},{type:"cooldown",duration:600,targetType:"percent_ftp",targetValue:50,description:"Cooldown"}]},ts={id:"vo2-30-30",name:"VO2 Max 30/30s",description:"High intensity intervals. 3 sets of 8x 30s ON / 30s OFF.",tags:["vo2max","hiit"],steps:[{type:"warmup",duration:600,targetType:"percent_ftp",targetValue:50,description:"Warmup"},{type:"warmup",duration:60,targetType:"percent_ftp",targetValue:100,description:"Opener"},{type:"rest",duration:120,targetType:"percent_ftp",targetValue:50,description:"Recover"},...Array(8).fill(null).flatMap((n,e)=>[{type:"active",duration:30,targetType:"percent_ftp",targetValue:120,description:`Rep ${e+1}`},{type:"rest",duration:30,targetType:"percent_ftp",targetValue:50,description:"Float"}]),{type:"rest",duration:300,targetType:"percent_ftp",targetValue:50,description:"Set Recovery"},...Array(8).fill(null).flatMap((n,e)=>[{type:"active",duration:30,targetType:"percent_ftp",targetValue:120,description:`Rep ${e+1}`},{type:"rest",duration:30,targetType:"percent_ftp",targetValue:50,description:"Float"}]),{type:"cooldown",duration:600,targetType:"percent_ftp",targetValue:40,description:"Cooldown"}]},ns=[Qo,es,ts];function os(n){return n.steps.reduce((e,t)=>e+t.duration,0)}function H(n,e="info",t=3e3){if(customElements.get("bpt-toast")){le.show(n,e,{duration:t});return}const o=document.createElement("div"),s=e==="error"?"#b91c1c":e==="success"?"#15803d":e==="warning"?"#a16207":"#1d4ed8";o.setAttribute("role","alert"),o.setAttribute("aria-live","assertive"),o.style.cssText=`
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: ${s};
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 1001;
    font-size: 14px;
    max-width: 90%;
    text-align: center;
    font-weight: 500;
  `,o.textContent=n,document.body.appendChild(o),setTimeout(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches?o.remove():(o.style.opacity="0",o.style.transition="opacity 0.3s ease",setTimeout(()=>o.remove(),300))},t)}function O(n){const e=document.getElementById(n);if(!e)throw new Error(`Critical DOM element missing: #${n}. Ensure index.html is correct.`);return e}const pn="bpt-user-profile",Ut={ftp:null,maxHr:null,weight:null,onboardingComplete:!1,lastUpdated:null};function _e(){try{const n=localStorage.getItem(pn);if(n)return{...Ut,...JSON.parse(n)}}catch(n){console.warn("Failed to load user profile:",n)}return{...Ut}}function mt(n){try{n.lastUpdated=Date.now(),localStorage.setItem(pn,JSON.stringify(n))}catch(e){console.warn("Failed to save user profile:",e)}}const ue=[{id:"welcome",title:"Welcome to Bike Power Tracker!",icon:"🚴",content:`
            <p>Let's set up your profile for personalized training zones and better workout analysis.</p>
            <p>This will only take a minute, and you can update these settings anytime.</p>
        `},{id:"ftp",title:"Functional Threshold Power (FTP)",icon:"⚡",content:`
            <p>Your FTP is the highest power you can sustain for about an hour.</p>
            <p>If you don't know your FTP, you can skip this and do an FTP test later.</p>
        `,inputType:"number",inputLabel:"Your FTP",inputPlaceholder:"e.g., 200",inputUnit:"watts",inputMin:50,inputMax:500,profileKey:"ftp",helpText:"Typical range: 100-400W for recreational to elite cyclists"},{id:"maxhr",title:"Maximum Heart Rate",icon:"❤️",content:`
            <p>Your max HR is used to calculate heart rate training zones.</p>
            <p>A common estimate is 220 minus your age, but actual max HR varies.</p>
        `,inputType:"number",inputLabel:"Your Max HR",inputPlaceholder:"e.g., 185",inputUnit:"bpm",inputMin:100,inputMax:230,profileKey:"maxHr",helpText:"If unsure, use 220 - your age as a starting point"},{id:"weight",title:"Body Weight",icon:"⚖️",content:`
            <p>Your weight is used to calculate power-to-weight ratio (W/kg), an important metric for climbing.</p>
        `,inputType:"number",inputLabel:"Your Weight",inputPlaceholder:"e.g., 70",inputUnit:"kg",inputMin:30,inputMax:200,profileKey:"weight",helpText:"Used for calculating watts per kilogram (W/kg)"},{id:"sensors",title:"Connect Your Sensors",icon:"📡",content:`
            <p>Bike Power Tracker works with Bluetooth cycling sensors:</p>
            <ul style="text-align: left; margin: 16px auto; max-width: 280px;">
                <li><strong>⚡ Power Meter</strong> - Measures your power output in watts</li>
                <li><strong>🚴 Cadence Sensor</strong> - Tracks your pedaling speed (RPM)</li>
                <li><strong>❤️ Heart Rate Monitor</strong> - Monitors your heart rate</li>
            </ul>
            <p>Use the menu (☰) to connect your sensors before starting a workout.</p>
        `},{id:"shortcuts",title:"Keyboard Shortcuts",icon:"⌨️",content:`
            <p>Quick access to common actions:</p>
            <table style="margin: 16px auto; text-align: left; border-collapse: collapse;">
                <tr><td style="padding: 4px 12px;"><kbd>Space</kbd></td><td>Start/pause workout</td></tr>
                <tr><td style="padding: 4px 12px;"><kbd>L</kbd></td><td>Mark lap</td></tr>
                <tr><td style="padding: 4px 12px;"><kbd>M</kbd></td><td>Open menu</td></tr>
                <tr><td style="padding: 4px 12px;"><kbd>S</kbd></td><td>Open settings</td></tr>
                <tr><td style="padding: 4px 12px;"><kbd>E</kbd></td><td>Export data</td></tr>
                <tr><td style="padding: 4px 12px;"><kbd>Escape</kbd></td><td>Close modal</td></tr>
            </table>
        `},{id:"done",title:"You're All Set!",icon:"🎉",content:`
            <p>Your profile has been saved. You can update your settings anytime from the menu.</p>
            <p>Ready to start your first workout? Connect a sensor and press the <strong>▶️ Start</strong> button!</p>
        `}];function ss(){const n=document.createElement("div");return n.id="onboardingModal",n.className="stream-modal",n.setAttribute("role","dialog"),n.setAttribute("aria-labelledby","onboardingTitle"),n.setAttribute("aria-modal","true"),n.style.display="none",n.innerHTML=`
        <div class="stream-modal-content onboarding-modal" style="max-width: 480px;">
            <div class="stream-modal-header">
                <h2 id="onboardingTitle">
                    <span id="onboardingIcon">🚴</span>
                    <span id="onboardingStepTitle">Welcome</span>
                </h2>
                <button id="skipOnboarding" class="close-button" aria-label="Skip onboarding">&times;</button>
            </div>
            <div class="stream-modal-body" style="text-align: center; padding: 24px;">
                <div id="onboardingContent"></div>
                <div id="onboardingInput" style="margin: 20px 0; display: none;">
                    <label for="onboardingInputField" id="onboardingInputLabel" style="display: block; margin-bottom: 8px; font-weight: bold;"></label>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
                        <input type="number" id="onboardingInputField" 
                            style="width: 120px; padding: 12px; font-size: 18px; text-align: center; border: 2px solid #d0d7de; border-radius: 8px;"
                            aria-describedby="onboardingHelpText">
                        <span id="onboardingInputUnit" style="font-size: 16px; color: #666;"></span>
                    </div>
                    <p id="onboardingHelpText" style="margin-top: 8px; font-size: 12px; color: #666;"></p>
                </div>
                <div class="onboarding-progress" style="margin: 24px 0;">
                    <div id="onboardingProgressDots" style="display: flex; justify-content: center; gap: 8px;"></div>
                </div>
                <div class="onboarding-buttons" style="display: flex; justify-content: center; gap: 12px; margin-top: 20px;">
                    <button id="onboardingPrev" style="padding: 12px 24px; border: 1px solid #d0d7de; background: white; border-radius: 8px; cursor: pointer; font-size: 16px;">
                        ← Back
                    </button>
                    <button id="onboardingNext" style="padding: 12px 24px; border: none; background: #2196F3; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold;">
                        Next →
                    </button>
                </div>
            </div>
        </div>
    `,n}function as(n,e,t){n.innerHTML="";for(let o=0;o<t;o++){const s=document.createElement("span");s.style.cssText=`
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${o===e?"#2196F3":"#d0d7de"};
            transition: background 0.3s ease;
        `,s.setAttribute("aria-hidden","true"),n.appendChild(s)}}function rs(n,e,t,o){const{icon:s,title:a,content:r,inputContainer:i,inputField:c,inputLabel:l,inputUnit:p,helpText:d,prevBtn:m,nextBtn:u,progressDots:h}=o;if(s.textContent=n.icon,a.textContent=n.title,r.innerHTML=n.content,n.inputType==="number"&&n.profileKey){i.style.display="block",l.textContent=n.inputLabel||"",c.placeholder=n.inputPlaceholder||"",c.min=String(n.inputMin||0),c.max=String(n.inputMax||9999),p.textContent=n.inputUnit||"",d.textContent=n.helpText||"";const g=t[n.profileKey];c.value=g?String(g):"",c.focus()}else i.style.display="none";m.style.display=e===0?"none":"inline-block",e===ue.length-1?u.textContent="Get Started! 🚀":(n.inputType,u.textContent="Next →"),as(h,e,ue.length),S(`Step ${e+1} of ${ue.length}: ${n.title}`)}function is(n=!1){return new Promise(e=>{const t=_e();if(!n&&t.onboardingComplete){e(t);return}let o=document.getElementById("onboardingModal");o||(o=ss(),document.body.appendChild(o));const s=O("onboardingIcon"),a=O("onboardingStepTitle"),r=O("onboardingContent"),i=O("onboardingInput"),c=O("onboardingInputField"),l=O("onboardingInputLabel"),p=O("onboardingInputUnit"),d=O("onboardingHelpText"),m=O("onboardingPrev"),u=O("onboardingNext"),h=O("skipOnboarding"),g=O("onboardingProgressDots"),y={icon:s,title:a,content:r,inputContainer:i,inputField:c,inputLabel:l,inputUnit:p,helpText:d,prevBtn:m,nextBtn:u,progressDots:g};let b=0;const v=()=>{const E=ue[b];if(E.inputType==="number"&&E.profileKey){const C=c.value?parseFloat(c.value):null;C!==null&&E.profileKey!=="onboardingComplete"&&E.profileKey!=="lastUpdated"&&(t[E.profileKey]=C)}},w=()=>{rs(ue[b],b,t,y)},f=()=>{if(ue[b].inputType==="number"&&!c.checkValidity()){c.reportValidity();return}v(),b<ue.length-1?(b++,w()):(t.onboardingComplete=!0,mt(t),o.style.display="none",H("Profile saved! Ready to ride 🚴","success"),S("Onboarding complete. Profile saved."),e(t))},T=()=>{v(),b>0&&(b--,w())},I=()=>{t.onboardingComplete=!0,mt(t),o.style.display="none",S("Onboarding skipped"),e(t)};u.addEventListener("click",f),m.addEventListener("click",T),h.addEventListener("click",I),c.addEventListener("keydown",E=>{E.key==="Enter"&&f()}),o.style.display="flex",w(),ko(o.querySelector(".stream-modal-content"))})}function cs(){return!_e().onboardingComplete}function ls(){cs()&&setTimeout(()=>{is()},500)}class ds{audioCtx=null;gainNode=null;isMuted=!1;constructor(){}init(){this.ensureContext()}ensureContext(){if(!this.audioCtx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.audioCtx=new e,this.gainNode=this.audioCtx.createGain(),this.gainNode.connect(this.audioCtx.destination),this.gainNode.gain.value=.5)}this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}setMuted(e){this.isMuted=e}beep(e=440,t=200,o="sine"){if(this.isMuted||(this.ensureContext(),!this.audioCtx||!this.gainNode))return;const s=this.audioCtx.createOscillator(),a=this.audioCtx.createGain();s.type=o,s.frequency.setValueAtTime(e,this.audioCtx.currentTime),a.gain.setValueAtTime(0,this.audioCtx.currentTime),a.gain.linearRampToValueAtTime(.5,this.audioCtx.currentTime+.01),a.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+t/1e3),s.connect(a),a.connect(this.gainNode),s.start(),s.stop(this.audioCtx.currentTime+t/1e3)}playCountdown(){this.beep(440,150)}playStart(){this.beep(880,400)}playSuccess(){if(this.isMuted||(this.ensureContext(),!this.audioCtx||!this.gainNode))return;const e=this.audioCtx.currentTime;this.scheduleNote(523.25,e,.1),this.scheduleNote(659.25,e+.1,.1),this.scheduleNote(783.99,e+.2,.2)}scheduleNote(e,t,o){if(!this.audioCtx||!this.gainNode)return;const s=this.audioCtx.createOscillator(),a=this.audioCtx.createGain();s.frequency.value=e,a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.3,t+.01),a.gain.exponentialRampToValueAtTime(.001,t+o),s.connect(a),a.connect(this.gainNode),s.start(t),s.stop(t+o)}speak(e){if(this.isMuted||!window.speechSynthesis)return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e);t.rate=1,t.pitch=1,t.volume=1,window.speechSynthesis.speak(t)}}const je=new ds;class us{state;timerInterval=null;onStateChange=null;userFtp=200;constructor(e){const t=_e();t.ftp&&(this.userFtp=t.ftp),this.state={workout:e,currentStepIndex:0,stepElapsedTime:0,totalElapsedTime:0,currentStep:e.steps[0],nextStep:e.steps.length>1?e.steps[1]:null,targetPower:this.calculateTargetPower(e.steps[0]),isPaused:!0,isFinished:!1}}setCallback(e){this.onStateChange=e,e(this.state)}start(){this.state.isFinished||!this.state.isPaused&&this.timerInterval||(this.state.isPaused=!1,this.emitState(),this.timerInterval=setInterval(()=>{this.tick()},1e3))}pause(){this.state.isPaused=!0,this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this.emitState()}nextStep(){this.advanceStep()}stop(){this.pause(),this.onStateChange=null}tick(){if(this.state.isPaused||this.state.isFinished)return;this.state.stepElapsedTime++,this.state.totalElapsedTime++;const e=this.state.currentStep.duration-this.state.stepElapsedTime;e<=3&&e>0&&je.playCountdown(),this.state.stepElapsedTime>=this.state.currentStep.duration?this.advanceStep():this.emitState()}advanceStep(){const e=this.state.currentStepIndex+1;if(e>=this.state.workout.steps.length){this.finish();return}this.state.currentStepIndex=e,this.state.currentStep=this.state.workout.steps[e],this.state.nextStep=e+1<this.state.workout.steps.length?this.state.workout.steps[e+1]:null,this.state.stepElapsedTime=0,this.state.targetPower=this.calculateTargetPower(this.state.currentStep),je.playStart(),this.emitState()}finish(){this.state.isFinished=!0,this.pause(),je.playSuccess(),this.emitState()}calculateTargetPower(e){return e.targetValue?e.targetType==="power"?e.targetValue:e.targetType==="percent_ftp"?Math.round(this.userFtp*(e.targetValue/100)):null:null}emitState(){this.onStateChange&&this.onStateChange({...this.state})}getState(){return{...this.state}}}const hn="bpt_custom_workouts";function Et(){try{const n=localStorage.getItem(hn);return n?JSON.parse(n):[]}catch(n){return console.error("Failed to load custom workouts",n),[]}}function gn(n){const e=Et(),t=e.findIndex(o=>o.id===n.id);t>=0?e[t]=n:e.push(n),fn(e)}function ms(n){const t=Et().filter(o=>o.id!==n);fn(t)}function fn(n){try{localStorage.setItem(hn,JSON.stringify(n))}catch(e){console.error("Failed to save custom workouts",e),alert("Failed to save workout. Storage might be full.")}}let N=null;function ps(){ys(),hs(),xe()}function hs(){const n=document.getElementById("importWorkoutBtn"),e=document.getElementById("importWorkoutInput");n&&e&&(n.addEventListener("click",()=>{e.click()}),e.addEventListener("change",t=>{const o=t.target.files;o&&o.length>0&&(gs(o[0]),e.value="")}))}async function gs(n){try{const e=await n.text(),t=JSON.parse(e);if(!t.name||!Array.isArray(t.steps))throw new Error("Invalid workout format");t.id=crypto.randomUUID(),t.tags=[...t.tags||[],"imported"],gn(t),xe(),S(`Imported workout: ${t.name}`,"assertive")}catch(e){console.error("Import failed",e),alert("Failed to import workout: Invalid file format.")}}function fs(n){const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(n,null,2)),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download",`${n.name.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.json`),document.body.appendChild(t),t.click(),t.remove()}function xe(){const n=document.getElementById("workoutList");if(!n)return;n.innerHTML="";const e=Et();if(e.length>0){const t=document.createElement("h3");t.textContent="My Workouts",t.style.margin="0 0 8px 0",t.style.fontSize="1rem",t.style.color="var(--color-text-secondary)",n.appendChild(t),e.forEach(a=>zt(a,n,!0));const o=document.createElement("hr");o.style.margin="16px 0",o.style.border="0",o.style.borderTop="1px solid var(--color-border)",n.appendChild(o);const s=document.createElement("h3");s.textContent="Library",s.style.margin="0 0 8px 0",s.style.fontSize="1rem",s.style.color="var(--color-text-secondary)",n.appendChild(s)}ns.forEach(t=>zt(t,n,!1))}function zt(n,e,t){const o=os(n),s=document.createElement("div");s.className="workout-item",s.setAttribute("role","button"),s.setAttribute("tabindex","0"),s.style.position="relative";let a="";a+=`<button class="export-workout-btn" aria-label="Export ${n.name}" title="Export JSON" style="background: none; border: none; font-size: 1.2rem; cursor: pointer;">📤</button>`,t&&(a+=`<button class="delete-workout-btn" aria-label="Delete ${n.name}" title="Delete" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--color-error);">🗑️</button>`);const r="position: absolute; right: 10px; top: 10px; display: flex; gap: 8px; z-index: 2;";s.innerHTML=`
        <div class="workout-item-header">
            <span class="workout-item-title">${n.name}</span>
            <span class="workout-item-duration">⏱️ ${pe(o*1e3)}</span>
        </div>
        <div class="workout-item-desc">${n.description}</div>
        <div class="workout-tags">
            ${(n.tags||[]).map(c=>`<span class="workout-tag">${c}</span>`).join("")}
        </div>
        <div style="${r}">
            ${a}
        </div>
    `,s.querySelector(".export-workout-btn")?.addEventListener("click",c=>{c.stopPropagation(),fs(n)}),t&&s.querySelector(".delete-workout-btn")?.addEventListener("click",l=>{l.stopPropagation(),confirm(`Delete workout "${n.name}"?`)&&(ms(n.id),xe(),S(`Deleted workout: ${n.name}`,"assertive"))}),s.addEventListener("click",c=>{if(c.target.tagName==="BUTTON")return;Wt(n);const l=document.getElementById("workoutSelectionModal");l&&(l.style.display="none")}),s.addEventListener("keydown",c=>{if(c.key==="Enter"||c.key===" "){c.preventDefault(),Wt(n);const l=document.getElementById("workoutSelectionModal");l&&(l.style.display="none")}}),e.appendChild(s)}function Wt(n){if(N){if(!confirm("A workout is already active. Stop it and start this one?"))return;N.stop()}je.init(),N=new us(n),N.setCallback(vs);const e=document.getElementById("workoutPlayerOverlay");e&&(e.style.display="block"),S(`Starting workout: ${n.name}. Ready to start.`,"assertive")}function ys(){const n=document.getElementById("workoutPlayerOverlay"),e=document.getElementById("wpMinimize"),t=document.getElementById("wpClose"),o=document.getElementById("wpSkip");n&&(t?.addEventListener("click",()=>{N&&confirm("Stop current workout?")&&(N.stop(),N=null,n.style.display="none",S("Workout stopped","polite"))}),e?.addEventListener("click",()=>{const s=n.querySelector(".workout-player-body");if(s){const a=s.style.display==="none";s.style.display=a?"block":"none",e.textContent=a?"_":"□"}}),o?.addEventListener("click",()=>{N&&(N.nextStep(),S("Skipped to next step","polite"))}))}function vs(n){const e=document.getElementById("wpWorkoutName"),t=document.getElementById("wpStepDescription"),o=document.getElementById("wpStepTime"),s=document.getElementById("wpStepDuration"),a=document.getElementById("wpTargetPower"),r=document.getElementById("wpNextStep"),i=document.getElementById("wpProgress");if(e&&(e.textContent=n.workout.name),n.currentStep){t&&(t.textContent=n.currentStep.description||n.currentStep.type.toUpperCase());const c=n.currentStep.duration-n.stepElapsedTime;o&&(o.textContent=ot(c)),s&&(s.textContent=ot(n.currentStep.duration)),a&&(a.textContent=n.targetPower?n.targetPower.toString():"--")}if(r)if(n.nextStep){const c=ws(n.nextStep);r.textContent=`${n.nextStep.type} (${ot(n.nextStep.duration)}${c})`}else r.textContent="Finish";if(i){const c=n.stepElapsedTime/n.currentStep.duration*100;i.style.width=`${Math.min(100,c)}%`,n.currentStep.type==="active"?i.style.backgroundColor="#ff9800":n.currentStep.type==="rest"||n.currentStep.type==="warmup"?i.style.backgroundColor="#2196F3":i.style.backgroundColor="#4CAF50"}if(n.isFinished){const c=document.getElementById("workoutPlayerOverlay");c&&(c.style.display="none"),N=null,alert("Workout Complete!"),S("Workout Complete!","assertive")}}function ot(n){const e=Math.floor(n/60),t=n%60;return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}function ws(n){return n.targetValue?` @ ~${n.targetValue}${n.targetType==="percent_ftp"?"%":"W"}`:""}function qt(){N&&N.start()}function jt(){N&&N.pause()}let me=[];function yn(){const n=document.getElementById("createWorkoutBtn"),e=document.getElementById("closeBuilderModal"),t=document.getElementById("wbCancel"),o=document.getElementById("wbSave"),s=document.getElementById("wbAddStepRef");n&&n.addEventListener("click",bs),e&&e.addEventListener("click",pt),t&&t.addEventListener("click",pt),o&&o.addEventListener("click",Ts),s&&s.addEventListener("click",xs);const a=document.getElementById("wbTargetType");a&&a.addEventListener("change",()=>{const r=document.getElementById("wbTargetValue");r&&(r.parentElement.style.display=a.value==="open"?"none":"block")})}function bs(){const n=document.getElementById("workoutBuilderModal"),e=document.getElementById("workoutSelectionModal");e&&(e.style.display="none"),n&&(n.style.display="flex",Es())}function pt(){const n=document.getElementById("workoutBuilderModal");n&&(n.style.display="none")}function Es(){me=[],document.getElementById("wbName").value="",document.getElementById("wbDesc").value="",xt()}function xs(){const n=document.getElementById("wbStepType").value,e=document.getElementById("wbStepDuration").value,t=document.getElementById("wbTargetType").value,o=document.getElementById("wbTargetValue").value,s=parseInt(e,10);if(isNaN(s)||s<=0){alert("Invalid duration");return}let a;if(t!=="open"&&(a=parseInt(o,10),isNaN(a))){alert("Invalid target value");return}const r={type:n,duration:s,targetType:t,targetValue:a,description:`${vn(n)} (${wn(s)})`};me.push(r),xt(),S(`Added step: ${r.description}`,"polite")}function xt(){const n=document.getElementById("wbStepsList");if(n){if(me.length===0){n.innerHTML=`<div class="wb-step-empty" style="text-align: center; color: var(--color-text-secondary); padding: 1rem; border: 1px dashed var(--color-border);">
                        No steps added yet.
                    </div>`;return}n.innerHTML="",me.forEach((e,t)=>{const o=document.createElement("div");o.className="wb-step-item",o.style.background="var(--card-bg-hover)",o.style.padding="8px",o.style.borderRadius="4px",o.style.display="flex",o.style.justifyContent="space-between",o.style.alignItems="center",o.style.border="1px solid var(--color-border)";const s=e.targetType==="open"?"Open effort":`${e.targetValue} ${e.targetType==="percent_ftp"?"%":"W"}`;o.innerHTML=`
            <div>
                <strong>${t+1}. ${vn(e.type)}</strong> - ${wn(e.duration)}
                <div style="font-size: 0.85em; color: var(--color-text-secondary)">${s}</div>
            </div>
            <button class="remove-step-btn" data-index="${t}" style="color: var(--color-error); background: none; border: none; cursor: pointer;">🗑️</button>
        `,n.appendChild(o)}),n.querySelectorAll(".remove-step-btn").forEach(e=>{e.addEventListener("click",t=>{const o=parseInt(t.target.getAttribute("data-index")||"-1",10);o>=0&&(me.splice(o,1),xt())})})}}function Ts(){const n=document.getElementById("wbName").value.trim(),e=document.getElementById("wbDesc").value.trim();if(!n){alert("Please enter a workout name");return}if(me.length===0){alert("Please add at least one step");return}const t={id:crypto.randomUUID(),name:n,description:e,steps:me,tags:["custom"]};gn(t),xe(),pt(),S(`Workout saved: ${n}`,"assertive")}function vn(n){return n.charAt(0).toUpperCase()+n.slice(1)}function wn(n){const e=Math.floor(n/60),t=n%60;return e>0?`${e}m ${t}s`:`${t}s`}class Ss{id="workouts";isInitialized=!1;init(e){const t=document.getElementById("workoutSelectionTemplate");if(t){const o=t.content.cloneNode(!0);e.appendChild(o),setTimeout(()=>{ps(),yn(),this.isInitialized=!0},0)}else console.error("Workouts template not found!"),e.innerHTML="<p>Error loading workouts view</p>"}onEnter(){this.isInitialized?xe():setTimeout(()=>xe(),50)}onLeave(){}}const bn="bpt-settings",B={power:!0,cadence:!0,heartrate:!0,speed:!0,distance:!0,altitude:!0,treadmillSpeed:!1,power3s:!1,highContrast:!1,colorblindPatterns:!1,voiceEnabled:!1,voiceLaps:!0,voiceZones:!0,exportTcx:!0,exportCsv:!0,exportJson:!1,exportFit:!1,debugMode:!1};function te(){const n=localStorage.getItem(bn);return n?{...B,...JSON.parse(n)}:{...B}}function ks(n){localStorage.setItem(bn,JSON.stringify(n)),window.dispatchEvent(new CustomEvent("settings-changed"))}const Z={isEnabled(){return!!te().debugMode},async log(n,e){if(this.isEnabled())try{const t=this.bufferToHex(e.buffer);await Un(n,t)}catch(t){console.warn("Failed to log debug data",t)}},bufferToHex(n){return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,"0")).join("").toUpperCase()},async exportLogs(){const n=await Mt(),e=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),o=document.createElement("a");o.href=t,o.download=`bpt-debug-logs-${Date.now()}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t)},async clearLogs(){await zn()},async getLogCount(){return(await Mt()).length}};function Cs(){const n=document.getElementById("saveSettings"),e=document.getElementById("settingFtp"),t=document.getElementById("settingMaxHr"),o=document.getElementById("settingWeight"),s=document.getElementById("settingSpeed"),a=document.getElementById("settingDistance"),r=document.getElementById("settingAltitude"),i=document.getElementById("settingPower"),c=document.getElementById("settingCadence"),l=document.getElementById("settingHeartrate"),p=document.getElementById("settingTreadmillSpeed"),d=document.getElementById("settingPower3s"),m=document.getElementById("settingHighContrast"),u=document.getElementById("settingColorblindPatterns"),h=document.getElementById("settingVoiceEnabled"),g=document.getElementById("settingVoiceLaps"),y=document.getElementById("settingVoiceZones"),b=document.getElementById("settingExportTcx"),v=document.getElementById("settingExportCsv"),w=document.getElementById("settingExportJson"),f=document.getElementById("settingExportFit"),T=document.getElementById("settingDebugMode"),I=document.getElementById("debugControls"),E=document.getElementById("downloadDebugLogs"),C=document.getElementById("clearDebugLogs"),L=x=>{const $=(Y,Bn)=>{document.querySelectorAll(`.metric-group-${Y}`).forEach(Dn=>{Dn.style.display=Bn?"flex":"none"})};$("speed",x.speed),$("distance",x.distance),$("altitude",x.altitude),$("power",x.power),$("cadence",x.cadence),$("heartrate",x.heartrate),$("treadmillSpeed",x.treadmillSpeed),document.querySelectorAll(".metric-group-power").forEach(Y=>{x.power3s?Y.setAttribute("data-show-avg","true"):Y.removeAttribute("data-show-avg")}),x.highContrast?document.documentElement.setAttribute("data-high-contrast","true"):document.documentElement.removeAttribute("data-high-contrast"),x.colorblindPatterns?document.documentElement.setAttribute("data-colorblind-patterns","true"):document.documentElement.removeAttribute("data-colorblind-patterns"),I&&(I.style.display=x.debugMode?"flex":"none")},_=()=>{const $={..._e(),ftp:e?.value?Number(e.value):null,maxHr:t?.value?Number(t.value):null,weight:o?.value?Number(o.value):null};mt($),window.dispatchEvent(new CustomEvent("user-profile-changed"));const Q={speed:s?.checked??B.speed,distance:a?.checked??B.distance,altitude:r?.checked??B.altitude,power:i?.checked??B.power,cadence:c?.checked??B.cadence,heartrate:l?.checked??B.heartrate,treadmillSpeed:p?.checked??B.treadmillSpeed,power3s:d?.checked??B.power3s,highContrast:m?.checked??B.highContrast,colorblindPatterns:u?.checked??B.colorblindPatterns,voiceEnabled:h?.checked??B.voiceEnabled,voiceLaps:g?.checked??B.voiceLaps,voiceZones:y?.checked??B.voiceZones,exportTcx:b?.checked??B.exportTcx,exportCsv:v?.checked??B.exportCsv,exportJson:w?.checked??B.exportJson,exportFit:f?.checked??B.exportFit,debugMode:T?.checked??B.debugMode};ks(Q),L(Q)},D=()=>{const x=te(),$=_e();e&&(e.value=$.ftp?.toString()??""),t&&(t.value=$.maxHr?.toString()??""),o&&(o.value=$.weight?.toString()??""),i&&(i.checked=x.power),c&&(c.checked=x.cadence),l&&(l.checked=x.heartrate),s&&(s.checked=x.speed),a&&(a.checked=x.distance),r&&(r.checked=x.altitude),p&&(p.checked=x.treadmillSpeed),d&&(d.checked=x.power3s),m&&(m.checked=x.highContrast),u&&(u.checked=x.colorblindPatterns),h&&(h.checked=x.voiceEnabled),g&&(g.checked=x.voiceLaps),y&&(y.checked=x.voiceZones),b&&(b.checked=x.exportTcx),v&&(v.checked=x.exportCsv),w&&(w.checked=x.exportJson),f&&(f.checked=x.exportFit),T&&(T.checked=x.debugMode),L(x)};n?.addEventListener("click",_),E?.addEventListener("click",()=>{Z.exportLogs()}),C?.addEventListener("click",async()=>{confirm("Are you sure you want to clear all debug logs?")&&(await Z.clearLogs(),alert("Logs cleared."))}),D()}class Ls{id="settings";init(e){const t=document.getElementById("settingsTemplate");if(t){const o=t.content.cloneNode(!0);e.appendChild(o),setTimeout(()=>{Cs()},0)}else console.error("Settings template not found!"),e.innerHTML="<p>Error loading settings view</p>"}onEnter(){console.log("Entered Settings View")}onLeave(){console.log("Left Settings View")}}var q=(n=>(n.Dashboard="dashboard",n.History="history",n.Workouts="workouts",n.Settings="settings",n))(q||{});class Is{container;router;constructor(e){this.router=e,this.container=document.createElement("nav"),this.container.id="bottom-nav",this.container.className="bottom-nav",this.render(),document.body.appendChild(this.container),window.addEventListener("route-changed",t=>{const o=t.detail;this.setActive(o.viewId)})}render(){this.container.innerHTML=`
            <button class="nav-item active" data-target="${q.Dashboard}">
                <span class="nav-icon">📊</span>
                <span class="nav-label">Dashboard</span>
            </button>
            <button class="nav-item" data-target="${q.History}">
                <span class="nav-icon">📅</span>
                <span class="nav-label">History</span>
            </button>
            <button class="nav-item" data-target="${q.Workouts}">
                <span class="nav-icon">🏋️</span>
                <span class="nav-label">Workouts</span>
            </button>
            <button class="nav-item" data-target="${q.Settings}">
                <span class="nav-icon">⚙️</span>
                <span class="nav-label">Settings</span>
            </button>
        `,this.container.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target;t===q.Dashboard?this.router.navigate("/"):t&&this.router.navigate("/"+t)})})}setActive(e){this.container.querySelectorAll(".nav-item").forEach(t=>{t.dataset.target===e?(t.classList.add("active"),t.setAttribute("aria-current","page")):(t.classList.remove("active"),t.removeAttribute("aria-current"))})}}function $s(){const n=new po(O("mainContent")),e=new ho,t=new Xo,o=new Ss,s=new Ls;return n.registerView(e),n.registerView(t),n.registerView(o),n.registerView(s),n.addRoute("/",q.Dashboard),n.addRoute("/history",q.History),n.addRoute("/workouts",q.Workouts),n.addRoute("/settings",q.Settings),new Is(n),n}const ht=n=>{const e=Math.floor(n/1e3),t=Math.floor(e/3600),o=Math.floor(e%3600/60),s=e%60;return`${t.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`};function Zt(n){return n.startTime?n.running?"recording":"paused":"idle"}function Ce(n,e){const{startButton:t,pauseButton:o,resumeButton:s,stopButton:a}=n;switch(t.style.display="none",o.style.display="none",s.style.display="none",a.style.display="none",e){case"idle":t.style.display="inline-flex";break;case"recording":o.style.display="inline-flex";break;case"paused":s.style.display="inline-flex",a.style.display="inline-flex";break}}const As=n=>{const e=document.getElementById("startButton"),t=document.getElementById("pauseButton"),o=document.getElementById("resumeButton"),s=document.getElementById("stopButton"),a=document.getElementById("time"),r=document.getElementById("metricsTable");if(!e||!t||!o||!s||!a||!r){console.warn("Workout control elements not found in DOM");return}const i={startButton:e,pauseButton:t,resumeButton:o,stopButton:s};setInterval(()=>{let c="00:00:00";const l=Zt(n);if(n.startTime&&n.running){const p=Date.now()-n.startTime;c=ht(p)}else if(n.startTime&&n.endTime){const p=n.endTime-n.startTime;c=ht(p)}a.textContent!==c&&(a.textContent=c),r.classList.remove("recording","paused"),l==="recording"?r.classList.add("recording"):l==="paused"&&r.classList.add("paused")},100),Ce(i,Zt(n)),e.addEventListener("click",()=>{n.startTime=Date.now(),n.endTime=null,n.running=!0,qt(),Ce(i,"recording"),Oe("recording"),S("Workout started","assertive")}),t.addEventListener("click",()=>{n.running=!1,n.endTime=Date.now(),jt(),Ce(i,"paused"),Oe("paused"),S("Workout paused. Press resume to continue or stop to save.","assertive")}),o.addEventListener("click",()=>{if(n.endTime&&n.startTime){const c=Date.now()-n.endTime;n.startTime+=c}n.endTime=null,n.running=!0,qt(),Ce(i,"recording"),Oe("recording"),S("Workout resumed","assertive")}),s.addEventListener("click",()=>{n.running=!1,jt(),Ce(i,"paused"),Oe("paused"),S("Workout stopped and saved. Press resume to continue or export your data.","assertive");const c=new CustomEvent("workoutComplete",{detail:{startTime:n.startTime,endTime:n.endTime,duration:n.endTime&&n.startTime?n.endTime-n.startTime:0}});document.dispatchEvent(c)})},ee=(n,e)=>{const t=[];let o=0;for(const s of e){for(;o<n.length&&n[o].timestamp<s;)o++;const a=o-1;let r;const i=o>=n.length;if(a<0)r=n[o];else if(i)r=n[a];else{const c=n[a]?.timestamp??0,l=n[o]?.timestamp??0;r=s-c<=l-s?n[a]:n[o]}r?.timestamp!==void 0&&Math.abs(r.timestamp-s)<1e3?t.push(r.value):t.push(null)}return t},Tt=n=>{const e=n.gps.map(f=>({timestamp:f.timestamp,value:f.lat})),t=n.gps.map(f=>({timestamp:f.timestamp,value:f.lon})),o=[n.heartrate,n.cadence,n.power,n.speed,n.distance,n.altitude,e];if(!o.some(f=>f.length>0))return[];const a=o.map(f=>f.length>0?f[0].timestamp:1/0),r=Math.min(...a),i=Math.max(...o.map(f=>f.length>0?f[f.length-1].timestamp:-1/0)),c=1e3,l=[];let p=r;for(;p<=i;)l.push(p),p+=c;const d=ee(n.heartrate,l),m=ee(n.cadence,l),u=ee(n.power,l),h=ee(n.speed,l),g=ee(n.distance,l),y=ee(n.altitude,l),b=ee(e,l),v=ee(t,l),w=[];for(let f=0;f<l.length;f++)w.push({timestamp:l[f],heartrate:d[f],cadence:m[f],power:u[f],speed:h[f],distance:g[f],altitude:y[f],lat:b[f],lon:v[f]});return w},Ms=n=>{const e=Tt(n);if(!e||e.length===0)return"";const t="timestamp,power,cadence,heartrate,speed,distance,altitude,lat,lon",o=e.map(s=>{const a=new Date(s.timestamp).toISOString(),r=s.power!==null?Math.round(s.power):"",i=s.cadence!==null?Math.round(s.cadence):"",c=s.heartrate!==null?Math.round(s.heartrate):"",l=s.speed!==null?s.speed.toFixed(1):"",p=s.distance!==null?Math.round(s.distance):"",d=s.altitude!==null?Math.round(s.altitude):"",m=s.lat!==null?s.lat.toFixed(6):"",u=s.lon!==null?s.lon.toFixed(6):"";return`${a},${r},${i},${c},${l},${p},${d},${m},${u}`});return[t,...o].join(`
`)},Bs=n=>n!==null?`<HeartRateBpm><Value>${Math.round(n)}</Value></HeartRateBpm>`:"",Ds=n=>n!==null?`<Cadence>${Math.round(n)}</Cadence>`:"",_s=n=>n===null?"":`<Extensions>
              <TPX xmlns="http://www.garmin.com/xmlschemas/ActivityExtension/v2">
                <Watts>${Math.round(n)}</Watts>
              </TPX>
            </Extensions>`,Ps=n=>{const e=new Date(n.timestamp).toISOString();let t="";n.lat!==null&&n.lon!==null&&(t=`
        <Position>
            <LatitudeDegrees>${n.lat}</LatitudeDegrees>
            <LongitudeDegrees>${n.lon}</LongitudeDegrees>
        </Position>`);let o="";n.altitude!==null&&(o=`<AltitudeMeters>${n.altitude}</AltitudeMeters>`);let s="";n.distance!==null&&(s=`<DistanceMeters>${n.distance}</DistanceMeters>`);const a=[];return n.heartrate!==null&&a.push(Bs(n.heartrate)),n.cadence!==null&&a.push(Ds(n.cadence)),n.power!==null&&a.push(_s(n.power)),`
<Trackpoint>
    <Time>${e}</Time>
    ${t}
    ${o}
    ${s}
    ${a.join(`
`)}
</Trackpoint>
    `.trim()},Ns=n=>{const e=Tt(n);if(!e||e.length===0)return"";const t=e[0].timestamp,o=e[e.length-1].timestamp,s=Math.round((o-t)/1e3),a=new Date(t).toISOString();return`<?xml version="1.0" encoding="UTF-8"?>
    <TrainingCenterDatabase xmlns="http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2">
        <Activities>
            <Activity Sport="Biking">
                <Id>${a}</Id>
                <Lap StartTime="${a}">
                    <TotalTimeSeconds>${s}</TotalTimeSeconds>
                    <Calories>0</Calories>
                    <Intensity>Active</Intensity>
                    <TriggerMethod>Manual</TriggerMethod>
                    <Track>
${e.map(Ps).join(`
`)}
                    </Track>
                </Lap>
            </Activity>
        </Activities>
    </TrainingCenterDatabase>`},Rs=32,Yt=2067,Os=0,Vs=1,Fs=34,Hs=18,Us=19,zs=20,Ws=21,F=0,st=2,Le=132,P=134,qs=0,js=1,Zs=2,Ys=3,Gs=4,Ks=253,Js=3,Xs=4,Qs=7,ea=253,ta=2,na=7,oa=8,sa=5,aa=6,ra=0,ia=1,ca=253,la=2,da=7,ua=8,ma=0,pa=1,ha=253,ga=0,fa=1,ya=253,va=0,wa=1,ba=2,Ea=3,xa=4,Ta=5,Sa=4,ka=255,Ca=2,La=6,Gt=0,Ia=8,$a=9,Aa=26,Ma=0,Ve=1,Ba=0,Da=Date.UTC(1989,11,31,0,0,0);function Kt(n,e,t){const o=[0,52225,55297,5120,61441,15360,10240,58369,40961,27648,30720,46081,20480,39937,34817,17408];let s=0;for(let a=e;a<t;a++){const r=n[a];let i=o[s&15];s=s>>4&4095,s=s^i^o[r&15],i=o[s&15],s=s>>4&4095,s=s^i^o[r>>4&15]}return s}function at(n){return Math.round((n-Da)/1e3)}class _a{buffer=[];definedMessages=new Map;writeHeader(){this.buffer.push(14),this.buffer.push(Rs),this.buffer.push(Yt&255),this.buffer.push(Yt>>8&255),this.buffer.push(0,0,0,0),this.buffer.push(46,70,73,84),this.buffer.push(0,0)}writeDefinition(e,t,o){this.buffer.push(64|e&15),this.buffer.push(0),this.buffer.push(0),this.buffer.push(t&255),this.buffer.push(t>>8&255),this.buffer.push(o.length);for(const s of o)this.buffer.push(s.fieldDefNum),this.buffer.push(s.size),this.buffer.push(s.baseType);this.definedMessages.set(e,!0)}writeData(e,t){this.buffer.push(e&15);for(const o of t);}writeUint8(e){this.buffer.push(e&255)}writeUint16(e){this.buffer.push(e&255),this.buffer.push(e>>8&255)}writeUint32(e){this.buffer.push(e&255),this.buffer.push(e>>8&255),this.buffer.push(e>>16&255),this.buffer.push(e>>24&255)}writeDataHeader(e){this.buffer.push(e&15)}finalize(){const e=new Uint8Array(this.buffer),t=this.buffer.length-14;e[4]=t&255,e[5]=t>>8&255,e[6]=t>>16&255,e[7]=t>>24&255;const o=Kt(e,0,12);e[12]=o&255,e[13]=o>>8&255;const s=Kt(e,0,e.length),a=new Uint8Array(e.length+2);return a.set(e),a[e.length]=s&255,a[e.length+1]=s>>8&255,a}getBuffer(){return this.buffer}}const Pa=n=>{const e=Tt(n);if(!e||e.length===0)return null;const t=new _a;t.writeHeader();const o=e[0].timestamp,s=e[e.length-1].timestamp,a=at(o),r=at(s),i=(s-o)/1e3,c=Math.round(i*1e3),l=0,p=1,d=2,m=3,u=4,h=5,g=6;t.writeDefinition(l,Os,[{fieldDefNum:qs,size:1,baseType:F},{fieldDefNum:js,size:2,baseType:Le},{fieldDefNum:Zs,size:2,baseType:Le},{fieldDefNum:Ys,size:4,baseType:P},{fieldDefNum:Gs,size:4,baseType:P}]),t.writeDataHeader(l),t.writeUint8(Sa),t.writeUint16(ka),t.writeUint16(1),t.writeUint32(12345678),t.writeUint32(a),t.writeDefinition(p,Vs,[{fieldDefNum:0,size:2,baseType:Le},{fieldDefNum:1,size:1,baseType:st}]),t.writeDataHeader(p),t.writeUint16(100),t.writeUint8(1),t.writeDefinition(d,Ws,[{fieldDefNum:ha,size:4,baseType:P},{fieldDefNum:ga,size:1,baseType:F},{fieldDefNum:fa,size:1,baseType:F}]),t.writeDataHeader(d),t.writeUint32(a),t.writeUint8(Gt),t.writeUint8(Ma),t.writeDefinition(m,zs,[{fieldDefNum:Ks,size:4,baseType:P},{fieldDefNum:Js,size:1,baseType:st},{fieldDefNum:Xs,size:1,baseType:st},{fieldDefNum:Qs,size:2,baseType:Le}]);for(const y of e){const b=at(y.timestamp);t.writeDataHeader(m),t.writeUint32(b),t.writeUint8(y.heartrate!==null?Math.min(255,Math.round(y.heartrate)):255),t.writeUint8(y.cadence!==null?Math.min(255,Math.round(y.cadence)):255),t.writeUint16(y.power!==null?Math.round(y.power):65535)}return t.writeDataHeader(d),t.writeUint32(r),t.writeUint8(Gt),t.writeUint8(Ve),t.writeDefinition(u,Us,[{fieldDefNum:ca,size:4,baseType:P},{fieldDefNum:la,size:4,baseType:P},{fieldDefNum:da,size:4,baseType:P},{fieldDefNum:ua,size:4,baseType:P},{fieldDefNum:ma,size:1,baseType:F},{fieldDefNum:pa,size:1,baseType:F}]),t.writeDataHeader(u),t.writeUint32(r),t.writeUint32(a),t.writeUint32(c),t.writeUint32(c),t.writeUint8($a),t.writeUint8(Ve),t.writeDefinition(h,Hs,[{fieldDefNum:ea,size:4,baseType:P},{fieldDefNum:ta,size:4,baseType:P},{fieldDefNum:na,size:4,baseType:P},{fieldDefNum:oa,size:4,baseType:P},{fieldDefNum:sa,size:1,baseType:F},{fieldDefNum:aa,size:1,baseType:F},{fieldDefNum:ra,size:1,baseType:F},{fieldDefNum:ia,size:1,baseType:F}]),t.writeDataHeader(h),t.writeUint32(r),t.writeUint32(a),t.writeUint32(c),t.writeUint32(c),t.writeUint8(Ca),t.writeUint8(La),t.writeUint8(Ia),t.writeUint8(Ve),t.writeDefinition(g,Fs,[{fieldDefNum:ya,size:4,baseType:P},{fieldDefNum:va,size:4,baseType:P},{fieldDefNum:wa,size:2,baseType:Le},{fieldDefNum:ba,size:1,baseType:F},{fieldDefNum:Ea,size:1,baseType:F},{fieldDefNum:xa,size:1,baseType:F},{fieldDefNum:Ta,size:4,baseType:P}]),t.writeDataHeader(g),t.writeUint32(r),t.writeUint32(c),t.writeUint16(1),t.writeUint8(Ba),t.writeUint8(Aa),t.writeUint8(Ve),t.writeUint32(r),t.finalize()},Na=5e3;function Ra(n){const{message:e,onUndo:t,onExpire:o,timeout:s=Na,icon:a="🗑️"}=n;document.querySelector(".undo-notification")?.remove();const i=document.createElement("div");i.className="undo-notification",i.setAttribute("role","alert"),i.setAttribute("aria-live","assertive");const c=Math.ceil(s/1e3);let l=c;i.innerHTML=`
        <div class="undo-notification-content">
            <span class="undo-notification-icon" aria-hidden="true">${a}</span>
            <span class="undo-notification-message">${e}</span>
        </div>
        <div class="undo-notification-actions">
            <button class="undo-notification-btn" type="button">
                Undo <span class="undo-countdown">(${l}s)</span>
            </button>
        </div>
        <div class="undo-progress-bar">
            <div class="undo-progress-fill"></div>
        </div>
    `,document.body.appendChild(i);const p=i.querySelector(".undo-notification-btn"),d=i.querySelector(".undo-countdown"),m=i.querySelector(".undo-progress-fill"),u=window.matchMedia("(prefers-reduced-motion: reduce)").matches;u||(m.style.transition=`width ${s}ms linear`,m.offsetHeight),m.style.width="0%",requestAnimationFrame(()=>{i.classList.add("undo-notification-visible")});let h=!1,g=null,y=null;const b=(v=!1)=>{g&&(clearInterval(g),g=null),y&&(clearTimeout(y),y=null),u?(i.remove(),v&&!h&&o&&o()):(i.classList.remove("undo-notification-visible"),i.classList.add("undo-notification-hiding"),setTimeout(()=>{i.remove(),v&&!h&&o&&o()},200))};return g=setInterval(()=>{l--,l>0?d.textContent=`(${l}s)`:g&&clearInterval(g)},1e3),y=setTimeout(()=>{b(!0)},s),p.addEventListener("click",()=>{h=!0,b(!1),t(),S("Action undone","assertive")}),p.focus(),S(`${e} Press undo within ${c} seconds to restore.`,"assertive"),()=>b(!1)}function Oa(n,e){return{power:[...n.power],heartrate:[...n.heartrate],cadence:[...n.cadence],startTime:e.startTime,endTime:e.endTime,running:e.running}}function Va(n,e,t){e.power=[...n.power],e.heartrate=[...n.heartrate],e.cadence=[...n.cadence],t.startTime=n.startTime,t.endTime=n.endTime,t.running=n.running}class Fa{synth;voice=null;constructor(){this.synth=window.speechSynthesis,this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=()=>this.loadVoice()),this.loadVoice()}loadVoice(){const e=this.synth.getVoices();this.voice=e.find(t=>t.lang.startsWith("en"))||e[0]||null}formatTimeForSpeech(e){const t=Math.floor(e/1e3),o=Math.floor(t/3600),s=Math.floor(t%3600/60),a=t%60,r=[];return o>0&&r.push(`${o} hours`),s>0&&r.push(`${s} minutes`),(a>0||r.length===0)&&r.push(`${a} seconds`),r.join(" ")}speak(e){if(!te().voiceEnabled)return;this.synth.speaking&&this.synth.cancel();const o=new SpeechSynthesisUtterance(e);this.voice&&(o.voice=this.voice),this.synth.speak(o)}announceLap(e,t,o){if(!te().voiceLaps)return;const a=this.formatTimeForSpeech(t),r=`Lap ${e}. Time ${a}. Average Power ${Math.round(o)} watts.`;this.speak(r)}announceZoneChange(e){if(!te().voiceZones)return;const o=`Entering ${e} Zone`;this.speak(o)}}const gt=new Fa;function Ha({measurementsState:n,timeState:e}){const t=document.getElementById("lapButton"),o=document.getElementById("lapCounter"),s=document.getElementById("lapCount"),a=document.getElementById("startButton"),r=document.getElementById("pauseButton"),i=document.getElementById("resumeButton"),c=document.getElementById("stopButton");if(!t||!o||!s){console.warn("Lap button elements not found in DOM");return}const l=()=>{const u=n.getLapCount();s.textContent=String(u),o.style.display=u>0?"block":"none"},p=()=>{const u=e.running&&e.startTime!==null;t.style.display=u?"inline-flex":"none"},d=()=>{if(!e.running||!e.startTime)return;const u=n.laps,h=u.length>0?u[u.length-1].timestamp:e.startTime,g=n.addLap(e.startTime);l();const y=g.timestamp,b=y-h,v=n.power.filter(I=>I.timestamp>=h&&I.timestamp<=y),w=v.length>0?v.reduce((I,E)=>I+E.value,0)/v.length:0;gt.announceLap(g.number,b,w);const f=g.elapsedMs?ht(g.elapsedMs):"",T=`Lap ${g.number}${f?` at ${f}`:""}`;H(`🏁 ${T}`,"info"),S(T,"assertive"),console.log(`Lap marked: ${g.number} at ${new Date(g.timestamp).toISOString()}`)};t.addEventListener("click",d);const m=new MutationObserver(()=>{p()});[a,r,i,c].forEach(u=>{u&&m.observe(u,{attributes:!0,attributeFilter:["style"]})}),p(),l(),a?.addEventListener("click",()=>{setTimeout(p,10)}),r?.addEventListener("click",()=>{setTimeout(p,10)}),i?.addEventListener("click",()=>{setTimeout(p,10)}),c?.addEventListener("click",()=>{setTimeout(()=>{p()},10)}),console.log("Lap button initialized")}function Ua(){const n=document.getElementById("lapCounter"),e=document.getElementById("lapCount");n&&e&&(e.textContent="0",n.style.display="none")}class za{state={maxPower:0,maxHr:0,longestDuration:0,longestDistance:0,powerCurve:{}};constructor(e){this.processHistory(e)}processHistory(e){e.forEach(t=>{const o=Wa(t);o.power?.max&&o.power.max>this.state.maxPower&&(this.state.maxPower=o.power.max),o.heartrate?.max&&o.heartrate.max>this.state.maxHr&&(this.state.maxHr=o.heartrate.max),t.duration&&t.duration>this.state.longestDuration&&(this.state.longestDuration=t.duration),o.powerCurve&&o.powerCurve.forEach(s=>{const a=this.state.powerCurve[s.duration]||0;s.watts>a&&(this.state.powerCurve[s.duration]=s.watts)})})}checkNewRecords(e){const t=[];if(e.power.max&&e.power.max>this.state.maxPower&&t.push(`Max Power: ${e.power.max} W`),e.heartrate.max&&e.heartrate.max>this.state.maxHr&&t.push(`Max Heart Rate: ${e.heartrate.max} bpm`),e.duration&&e.duration>this.state.longestDuration&&t.push(`Longest Ride: ${qa(e.duration)}`),e.powerCurve){const o=[1,5,60,300,1200,3600],s={1:"1s Power",5:"5s Power",60:"1m Power",300:"5m Power",1200:"20m Power",3600:"1h Power"};e.powerCurve.forEach(a=>{if(o.includes(a.duration)){const r=this.state.powerCurve[a.duration]||0;if(a.watts>r){if(a.duration===1&&t.some(i=>i.startsWith("Max Power")))return;t.push(`${s[a.duration]}: ${a.watts} W`)}}})}return t}}function Wa(n){if(!n.summary)return{};if(typeof n.summary=="string")try{return JSON.parse(n.summary)}catch{return{}}return n.summary}function qa(n){const e=Math.floor(n/1e3),t=Math.floor(e/3600),o=Math.floor(e%3600/60),s=e%60;return t>0?`${t}h ${o}m`:`${o}m ${s}s`}const Jt={power:!0,cadence:!0,heartrate:!0,exportTcx:!0,exportCsv:!0,exportJson:!1,exportFit:!1},ja=()=>{const n=document.getElementById("toggleYourMetrics"),e=document.getElementById("yourMetrics");n&&e&&(n.checked=e.style.display!=="none",n.addEventListener("change",s=>{const a=s.target;e.style.display=a.checked?"flex":"none"}));const t=document.getElementById("toggleStreamMetrics"),o=document.getElementById("streamMetrics");t&&o&&(t.checked=o.style.display!=="none",t.addEventListener("change",s=>{const a=s.target;o.style.display=a.checked?"flex":"none"}))},Za=({measurementsState:n,timeState:e,zoneState:t})=>{const o=document.getElementById("discardButton");if(!o){console.warn("Discard button not found in DOM");return}o.addEventListener("click",async()=>{if(!(n.power.length>0||n.heartrate.length>0||n.cadence.length>0||e.startTime!==null)){Ye(n,e);return}const a=n.power.length+n.heartrate.length+n.cadence.length;if(await Io("Discard Workout",`Are you sure you want to discard this workout? You have ${a} data points that will be deleted. You'll have 5 seconds to undo this action.`,{confirmText:"Discard",cancelText:"Keep Data",confirmVariant:"danger",icon:"🗑️"})){const i=Oa(n,e);Ye(n,e),t&&t.reset(),document.dispatchEvent(new CustomEvent("workout-discarded")),Ua(),Ra({message:"Workout data discarded",icon:"🗑️",timeout:5e3,onUndo:()=>{Va(i,n,e),Ya(i),S("Workout data restored","polite")},onExpire:()=>{S("Discard complete","polite")}})}})};function Ya(n){const e=document.getElementById("startButton"),t=document.getElementById("pauseButton"),o=document.getElementById("resumeButton"),s=document.getElementById("stopButton"),a=document.getElementById("time");if(n.running?(e&&(e.style.display="none"),t&&(t.style.display="inline-flex"),o&&(o.style.display="none"),s&&(s.style.display="inline-flex")):n.startTime!==null&&(e&&(e.style.display="none"),t&&(t.style.display="none"),o&&(o.style.display="inline-flex"),s&&(s.style.display="inline-flex")),a&&n.startTime!==null){const r=(n.endTime||Date.now())-n.startTime,i=Math.floor(r/1e3),c=Math.floor(i/3600),l=Math.floor(i%3600/60),p=i%60;a.textContent=`${String(c).padStart(2,"0")}:${String(l).padStart(2,"0")}:${String(p).padStart(2,"0")}`}}function Ye(n,e){e.running=!1,e.startTime=null,e.endTime=null,n.power=[],n.heartrate=[],n.cadence=[];const t=document.getElementById("startButton"),o=document.getElementById("pauseButton"),s=document.getElementById("resumeButton"),a=document.getElementById("stopButton");t&&(t.style.display="inline-flex"),o&&(o.style.display="none"),s&&(s.style.display="none"),a&&(a.style.display="none");const r=document.getElementById("time");r&&(r.textContent="00:00:00")}function Ga(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}-${String(n.getHours()).padStart(2,"0")}-${String(n.getMinutes()).padStart(2,"0")}-${String(n.getSeconds()).padStart(2,"0")}`}function Fe(n,e){const t=URL.createObjectURL(n),o=document.createElement("a");o.href=t,o.download=e,o.click(),URL.revokeObjectURL(t)}const Ka=(n,e)=>{const t=document.getElementById("exportData");if(!t){console.warn("Export button not found in DOM");return}t.addEventListener("click",()=>{try{const o=localStorage.getItem("bpt-settings"),s=o?{...Jt,...JSON.parse(o)}:Jt,a=Ga();if(s.exportJson){const r={power:n.power,heartrate:n.heartrate,cadence:n.cadence};if(e){const l=e.toJSON();(l.powerZones.some(p=>p.timeInZoneMs>0)||l.hrZones.some(p=>p.timeInZoneMs>0))&&(r.zoneDistribution={power:l.powerZones.map(p=>({zone:p.zone,name:p.name,timeSeconds:Math.round(p.timeInZoneMs/1e3)})),heartrate:l.hrZones.map(p=>({zone:p.zone,name:p.name,timeSeconds:Math.round(p.timeInZoneMs/1e3)})),ftp:l.ftp,maxHr:l.maxHr})}const i=JSON.stringify(r,null,2),c=new Blob([i],{type:"application/json"});Fe(c,`bike-measurements-${a}.json`)}if(s.exportTcx){const r=Ns(n);if(r){const i=new Blob([r],{type:"application/xml"});Fe(i,`bike-workout-${a}.tcx`)}}if(s.exportCsv){const r=Ms(n);if(r){const i=new Blob([r],{type:"text/csv"});Fe(i,`bike-workout-${a}.csv`)}}if(s.exportFit){const r=Pa(n);if(r){const i=new Blob([new Uint8Array(r)],{type:"application/fit"});Fe(i,`bike-workout-${a}.fit`)}}}catch(o){console.error("Error exporting data:",o)}})},Ja=({measurementsState:n,timeState:e,zoneState:t})=>{document.addEventListener("workoutComplete",async o=>{const s=o.detail;if(!(n.power.length>0||n.heartrate.length>0||n.cadence.length>0)&&!s.startTime)return;const r=un(s.startTime||e.startTime||Date.now(),s.endTime||e.endTime||Date.now(),n,t);let i=[];try{if(await ln()){const c=await Ge({limit:1e3});i=new za(c.workouts).checkNewRecords(r),i.length>0&&S(`Congratulations! You set ${i.length} new personal records!`,"assertive")}}catch(c){console.warn("Failed to check for PRs:",c)}await Do(r,{onExport:async()=>{try{await Zn(),S("Workout saved to local history","polite")}catch(l){console.error("Failed to save to local history",l),S("Failed to save to local history","assertive")}document.getElementById("exportData")?.click(),Ye(n,e)},onDiscard:()=>{Ye(n,e),S("Workout discarded","polite")},onKeepRecording:()=>{document.getElementById("resumeButton")?.click()}},i)})};function R(n){return document.getElementById(n)}const Ze={get power(){return{display:R("power"),connect:R("connectPower")}},get heartrate(){return{display:R("heartrate"),connect:R("connectHeartrate")}},get cadence(){return{display:R("cadence"),connect:R("connectCadence")}},get gps(){return{display:null,connect:R("connectGps")}},get speed(){return{display:R("speed"),connect:null}},get distance(){return{display:R("distance"),connect:null}},get altitude(){return{display:R("altitude"),connect:null}},get treadmill(){return{display:R("value-incline"),connect:R("connectTreadmill")}},get treadmillSpeed(){return{display:R("treadmillSpeed"),connect:null}}},Xa="bpt-user-profile";function Qa(){try{const n=localStorage.getItem(Xa);if(n)return JSON.parse(n)}catch(n){console.warn("Failed to load user profile:",n)}return{ftp:null,maxHr:null}}function En(n){return[{name:"Active Recovery",min:0,max:Math.round(n*.55)},{name:"Endurance",min:Math.round(n*.55),max:Math.round(n*.75)},{name:"Tempo",min:Math.round(n*.75),max:Math.round(n*.9)},{name:"Threshold",min:Math.round(n*.9),max:Math.round(n*1.05)},{name:"VO2max",min:Math.round(n*1.05),max:Math.round(n*1.2)},{name:"Anaerobic",min:Math.round(n*1.2),max:Math.round(n*1.5)},{name:"Neuromuscular",min:Math.round(n*1.5),max:9999}]}function xn(n){return[{name:"Recovery",min:Math.round(n*.5),max:Math.round(n*.6)},{name:"Aerobic",min:Math.round(n*.6),max:Math.round(n*.7)},{name:"Tempo",min:Math.round(n*.7),max:Math.round(n*.8)},{name:"Threshold",min:Math.round(n*.8),max:Math.round(n*.9)},{name:"Anaerobic",min:Math.round(n*.9),max:n}]}function er(n,e){const t=En(e);for(let o=0;o<t.length;o++)if(n>=t[o].min&&n<t[o].max)return{zone:o+1,name:t[o].name};return null}function tr(n,e){const t=xn(e);for(let o=0;o<t.length;o++)if(n>=t[o].min&&n<=t[o].max)return{zone:o+1,name:t[o].name};return null}class nr{_powerZones=[];_hrZones=[];_lastPowerZone=null;_lastHrZone=null;_lastUpdateTime=null;_ftp=null;_maxHr=null;_currentPowerZone=null;_currentHrZone=null;_onChangeCallbacks=[];constructor(){this.loadProfile()}loadProfile(){const e=Qa();if(this._ftp=e.ftp,this._maxHr=e.maxHr,this._ftp){const t=En(this._ftp);this._powerZones=t.map((o,s)=>({zone:s+1,name:o.name,min:o.min,max:o.max,timeInZoneMs:0}))}if(this._maxHr){const t=xn(this._maxHr);this._hrZones=t.map((o,s)=>({zone:s+1,name:o.name,min:o.min,max:o.max,timeInZoneMs:0}))}}onChange(e){this._onChangeCallbacks.push(e)}offChange(e){const t=this._onChangeCallbacks.indexOf(e);t>-1&&this._onChangeCallbacks.splice(t,1)}_notifyChange(){for(const e of this._onChangeCallbacks)try{e()}catch(t){console.error("Zone state change callback error:",t)}}updatePower(e,t=Date.now()){if(!this._ftp)return null;const o=er(e,this._ftp);if(!o)return null;const s=o.zone;if(this._lastUpdateTime!==null&&this._lastPowerZone!==null){const c=t-this._lastUpdateTime,l=this._powerZones[this._lastPowerZone-1];l&&c>0&&c<5e3&&(l.timeInZoneMs+=c)}this._lastPowerZone=s,this._lastUpdateTime=t;const a=this._powerZones[s-1],r=a.max-a.min,i=r>0?Math.min(100,Math.max(0,(e-a.min)/r*100)):50;return this._currentPowerZone={zone:s,name:o.name,percentInZone:i},this._notifyChange(),this._currentPowerZone}updateHeartRate(e,t=Date.now()){if(!this._maxHr)return null;const o=tr(e,this._maxHr);if(!o)return null;const s=o.zone;if(this._lastUpdateTime!==null&&this._lastHrZone!==null){const c=t-this._lastUpdateTime,l=this._hrZones[this._lastHrZone-1];l&&c>0&&c<5e3&&(l.timeInZoneMs+=c)}this._lastHrZone=s,(this._lastUpdateTime===null||t-this._lastUpdateTime>50)&&(this._lastUpdateTime=t);const a=this._hrZones[s-1],r=a.max-a.min,i=r>0?Math.min(100,Math.max(0,(e-a.min)/r*100)):50;return this._currentHrZone={zone:s,name:o.name,percentInZone:i},this._notifyChange(),this._currentHrZone}getCurrentPowerZone(){return this._currentPowerZone}getCurrentHrZone(){return this._currentHrZone}getPowerZoneDistribution(){const e=this._powerZones.reduce((t,o)=>t+o.timeInZoneMs,0);return{zones:[...this._powerZones],totalTimeMs:e}}getHrZoneDistribution(){const e=this._hrZones.reduce((t,o)=>t+o.timeInZoneMs,0);return{zones:[...this._hrZones],totalTimeMs:e}}hasPowerZones(){return this._ftp!==null&&this._ftp>0}hasHrZones(){return this._maxHr!==null&&this._maxHr>0}getFtp(){return this._ftp}getMaxHr(){return this._maxHr}reset(){this._powerZones.forEach(e=>e.timeInZoneMs=0),this._hrZones.forEach(e=>e.timeInZoneMs=0),this._lastPowerZone=null,this._lastHrZone=null,this._lastUpdateTime=null,this._currentPowerZone=null,this._currentHrZone=null,this._notifyChange()}toJSON(){return{powerZones:[...this._powerZones],hrZones:[...this._hrZones],ftp:this._ftp,maxHr:this._maxHr}}}const Xt=5e3,or=100;let ce;function sr(){let n=document.getElementById("powerZoneGauge"),e=document.getElementById("hrZoneGauge");if(!n){const t=document.querySelector(".metric-group-power");t&&(n=document.createElement("bpt-zone-gauge"),n.id="powerZoneGauge",n.setAttribute("type","power"),n.setAttribute("compact",""),n.style.display="none",t.appendChild(n))}if(!e){const t=document.querySelector(".metric-group-heartrate");t&&(e=document.createElement("bpt-zone-gauge"),e.id="hrZoneGauge",e.setAttribute("type","heartrate"),e.setAttribute("compact",""),e.style.display="none",t.appendChild(e))}return{powerGauge:n,hrGauge:e}}function ar(){let n=document.getElementById("powerLiveChart"),e=document.getElementById("hrLiveChart"),t=document.getElementById("liveChartsContainer");if(!t){const o=document.getElementById("yourMetrics");if(o){t=document.createElement("div"),t.id="liveChartsContainer",t.className="live-charts-container",t.style.display="none";const s=document.getElementById("metricsTable");s&&s.nextSibling?o.insertBefore(t,s.nextSibling):o.appendChild(t)}}return t&&(n||(n=document.createElement("bpt-live-chart"),n.id="powerLiveChart",n.setAttribute("type","power"),n.setAttribute("duration","60"),t.appendChild(n)),e||(e=document.createElement("bpt-live-chart"),e.id="hrLiveChart",e.setAttribute("type","heartrate"),e.setAttribute("duration","60"),t.appendChild(e))),{powerChart:n,hrChart:e}}function rr(n){let e=document.getElementById("toggleLiveCharts");if(!e){const t=document.getElementById("topBarControls");if(t){e=document.createElement("button"),e.id="toggleLiveCharts",e.className="workout-btn workout-btn-chart",e.setAttribute("aria-label","Toggle live charts"),e.setAttribute("title","Toggle Charts"),e.innerHTML="📊",e.style.display="none";const o=document.querySelector(".workout-controls");o?t.insertBefore(e,o):t.appendChild(e)}}return e&&e.setAttribute("aria-pressed",n?"true":"false"),e}function ir(n,e,t){if(n){const o=t.getCurrentPowerZone();o&&t.hasPowerZones()?(n.style.display="",n.setZone(o.zone,o.name,o.percentInZone)):t.hasPowerZones()||(n.style.display="none")}if(e){const o=t.getCurrentHrZone();o&&t.hasHrZones()?(e.style.display="",e.setZone(o.zone,o.name,o.percentInZone)):t.hasHrZones()||(e.style.display="none")}}function rt(n,e,t){const o=n.closest(".metric-group");if(!o)return;const s={1:"#3b82f6",2:"#22c55e",3:"#eab308",4:"#f97316",5:"#ef4444",6:"#a855f7",7:"#ec4899"};if(e!==null&&e>=1&&e<=7){const a=s[e];n.style.color=a,o.style.borderLeftColor=a,o.style.borderLeftWidth="4px",o.style.borderLeftStyle="solid"}else n.style.color="",o.style.borderLeftColor="",o.style.borderLeftWidth="",o.style.borderLeftStyle=""}const cr=({connectionsState:n,measurementsState:e})=>{ce=new nr;const{powerGauge:o,hrGauge:s}=sr(),{powerChart:a,hrChart:r}=ar();let i=localStorage.getItem("bpt-charts-visible")==="true";const c=rr(i),l=document.getElementById("liveChartsContainer");l&&(l.style.display=i?"flex":"none"),c&&c.addEventListener("click",()=>{i=!i,localStorage.setItem("bpt-charts-visible",i?"true":"false"),c.setAttribute("aria-pressed",i?"true":"false"),l&&(l.style.display=i?"flex":"none")});let p=0,d=0,m=null,u=null,h=te();window.addEventListener("storage",w=>{w.key==="bpt-settings"&&(h=te())}),window.addEventListener("settings-changed",()=>{h=te()});const g=()=>{if(a&&e.power.length>p){for(let w=p;w<e.power.length;w++){const f=e.power[w];a.addDataPoint(f.value,f.timestamp)}p=e.power.length}if(r&&e.heartrate.length>d){for(let w=d;w<e.heartrate.length;w++){const f=e.heartrate[w];r.addDataPoint(f.value,f.timestamp)}d=e.heartrate.length}},y=()=>{const w=document.getElementById("value-incline"),f=document.querySelector(".metric-group-incline");let T=!1,I="--";if(e.treadmill.length>0){const E=e.treadmill[e.treadmill.length-1];Date.now()-E.timestamp<Xt&&E.incline!=null&&(T=!0,I=E.incline.toFixed(1)+"%")}w&&(w.textContent=I),f&&(f.style.display=T?"":"none")},b=w=>{if(w==="gps")return;const f=Ze[w]?.display,T=n[w];if(!f||!T)return;const I=f.closest(".metric-group"),E=h[w];if(I)if(E===!1){I.style.display="none";return}else I.style.display==="none"&&(I.style.display="");if(!T.isConnected){f.textContent="--",(w==="power"||w==="heartrate")&&rt(f,null);return}const C=e[w];if(!Array.isArray(C)||C.length===0){f.textContent="--";return}const L=C[C.length-1];if(!L||typeof L.value!="number"||typeof L.timestamp!="number"){f.textContent="--";return}if(Date.now()-L.timestamp>Xt){f.textContent="--";return}if(f.textContent=String(L.value),w==="power"){const D=ce.updatePower(L.value,L.timestamp),x=D?.zone??null;x!==m&&(x!==null&&m!==null&&gt.announceZoneChange(D.name),m=x),rt(f,x)}else if(w==="heartrate"){const D=ce.updateHeartRate(L.value,L.timestamp),x=D?.zone??null;x!==u&&(x!==null&&u!==null&&gt.announceZoneChange(D.name),u=x),rt(f,x)}},v=["power","heartrate","cadence","speed","distance","altitude","treadmillSpeed"];return setInterval(()=>{v.forEach(b),y(),ir(o,s,ce),g()},or),document.addEventListener("workoutStarted",()=>{c&&(c.style.display="inline-flex")}),document.addEventListener("workoutStopped",()=>{c&&(c.style.display="none")}),window.addEventListener("storage",w=>{w.key==="bpt-user-profile"&&ce.loadProfile()}),document.addEventListener("workout-discarded",()=>{ce.reset(),p=0,d=0,a&&a.clear(),r&&r.clear()}),ce},Ne="http://78.109.17.187",lr="super-secret-bike-tracker-key";function Xe(n={}){const e={...n};return e["X-API-Key"]=lr,e}async function dr(n){const e=await fetch(`${Ne}/api/streams/create`,{method:"POST",headers:Xe({"Content-Type":"application/json"}),body:JSON.stringify({streamName:n})});if(!e.ok){const t=await e.json();throw new Error(t.error||"Failed to create stream")}return e.json()}async function ur(){const n=await fetch(`${Ne}/api/streams`,{headers:Xe()});if(!n.ok){const e=await n.text();throw new Error(e||"Failed to list streams")}return n.json()}async function mr(n,e,t="anonymous"){const o=await fetch(`${Ne}/api/streams/${n}/messages`,{method:"POST",headers:Xe({"Content-Type":"application/json"}),body:JSON.stringify({message:e,author:t})});if(!o.ok){const s=await o.json();throw new Error(s.error||"Failed to add message")}return o.json()}function Tn(n,e,t,o){const s=new AbortController;let a=!0;const r={close:()=>{a=!1,s.abort()},get active(){return a}};return(async()=>{try{const i=await fetch(n,{method:"GET",headers:Xe({Accept:"text/event-stream","Cache-Control":"no-cache"}),signal:s.signal});if(!i.ok)throw new Error(`SSE connection failed: ${i.status} ${i.statusText}`);if(!i.body)throw new Error("SSE response has no body");const c=i.body.getReader(),l=new TextDecoder;let p="";for(;a;){const{done:d,value:m}=await c.read();if(d)break;p+=l.decode(m,{stream:!0});const u=p.split(`

`);p=u.pop()||"";for(const h of u){if(!h.trim())continue;const g=h.match(/^data:\s*(.+)$/m);if(g)try{const y=JSON.parse(g[1]);y.type==="connected"&&t?t(y):y.type==="message"&&e(y)}catch(y){console.error("Error parsing SSE data:",y)}}}}catch(i){if(i.name==="AbortError")return;console.error("SSE connection error:",i),o&&o(i)}finally{a=!1}})(),r}function pr(n,e,t,o){const s=`${Ne}/api/streams/${n}/listen`;return Tn(s,e,t,o)}function hr(n,e,t){const o=`${Ne}/api/streams/listenAll`;return Tn(o,n,e,t)}async function gr(n,e){const t=JSON.stringify({power:e.power??null,cadence:e.cadence??null,heartrate:e.heartrate??null,speed:e.speed??null,distance:e.distance??null,altitude:e.altitude??null,incline:e.incline??null,timestamp:e.timestamp,elapsed:e.elapsed,dataType:"workout_metrics"});return mr(n,t,"bike-power-tracker")}class fr{modal=null;currentConnection=null;streamMetricsSection=null;allStreamsMetricsSection=null;allStreamsConnection=null;streamCards=new Map;streamRows=new Map;isCompactView=!1;constructor(){this.initModal(),this.initInlineViewer(),this.initAllStreamsViewer()}initInlineViewer(){if(this.streamMetricsSection=document.getElementById("streamMetrics"),!this.streamMetricsSection){console.warn("Stream metrics section not found in DOM");return}const e=document.getElementById("closeStreamView");e&&e.addEventListener("click",()=>this.disconnectFromStream())}initAllStreamsViewer(){if(this.allStreamsMetricsSection=document.getElementById("allStreamsMetrics"),!this.allStreamsMetricsSection){console.warn("All streams metrics section not found in DOM");return}const e=document.getElementById("closeAllStreamsView");e&&e.addEventListener("click",()=>this.disconnectFromAllStreams());const t=document.getElementById("toggleViewBtn");t&&t.addEventListener("click",()=>this.toggleAllStreamsView())}toggleAllStreamsView(){this.isCompactView=!this.isCompactView;const e=document.getElementById("allStreamsGrid"),t=document.getElementById("allStreamsList"),o=document.getElementById("toggleViewBtn");this.isCompactView?(e&&(e.style.display="none"),t&&(t.style.display="flex"),o&&(o.textContent="🔲",o.title="Toggle grid view",o.classList.add("active"))):(e&&(e.style.display="grid"),t&&(t.style.display="none"),o&&(o.textContent="📋",o.title="Toggle compact view",o.classList.remove("active")))}initModal(){const e=document.createElement("div");e.id="streamViewerModal",e.className="stream-modal",e.innerHTML=`
      <div class="stream-modal-content">
        <div class="stream-modal-header">
          <h2>🌐 Live Streams</h2>
          <button id="closeStreamModal" class="close-button">&times;</button>
        </div>
        <div class="stream-modal-body">
          <div class="stream-list-container">
            <div class="stream-list-controls" style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <button id="refreshStreamList" class="refresh-button">🔄 Refresh List</button>
              <button id="viewAllStreamsBtn" class="connect-button" style="background-color: #4CAF50;">👁️ View All Streams</button>
            </div>
            <div id="streamsList" class="streams-list">
              <p class="loading">Loading streams...</p>
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(e),this.modal=e,this.setupEventListeners()}setupEventListeners(){const e=document.getElementById("closeStreamModal"),t=document.getElementById("refreshStreamList"),o=document.getElementById("viewAllStreamsBtn");e&&e.addEventListener("click",()=>this.close()),t&&t.addEventListener("click",()=>this.refreshStreamList()),o&&o.addEventListener("click",()=>this.connectToAllStreams()),this.modal&&this.modal.addEventListener("click",s=>{s.target===this.modal&&this.close()})}async open(){this.modal&&(this.modal.style.display="flex"),await this.refreshStreamList()}close(){this.modal&&(this.modal.style.display="none")}async refreshStreamList(){const e=document.getElementById("streamsList");if(e){e.innerHTML='<p class="loading">Loading streams...</p>';try{const{streams:t}=await ur();if(t.length===0){e.innerHTML='<p class="no-streams">No active streams found</p>';return}e.innerHTML="",t.forEach(o=>{const s=this.createStreamItem(o);e.appendChild(s)})}catch(t){console.error("Failed to load streams:",t);const o=t instanceof Error?t.message:"Unknown error";e.innerHTML=`<p class="error">Failed to load streams: ${o}</p>`}}}createStreamItem(e){const t=document.createElement("div");t.className="stream-item";const s=e.name.startsWith("workout-")?"🚴":"💬";return t.innerHTML=`
      <div class="stream-item-info">
        <div class="stream-item-name">${s} ${e.name}</div>
        <div class="stream-item-meta">
          ${e.length} message${e.length!==1?"s":""}
        </div>
      </div>
      <button class="connect-button" data-stream="${e.name}">
        👁️ View
      </button>
    `,t.querySelector(".connect-button")?.addEventListener("click",()=>{this.connectToStream(e.name)}),t}connectToStream(e){if(this.disconnectFromStream(),!this.streamMetricsSection){console.error("Stream metrics section not available");return}this.streamMetricsSection.style.display="flex";const t=document.getElementById("toggleStreamMetrics");t&&(t.checked=!0);const o=document.getElementById("streamTitle"),s=document.getElementById("streamStatus");o&&(o.textContent=e),s&&(s.textContent="Connecting...",s.className="status-badge connecting"),this.close(),this.currentConnection=pr(e,a=>this.handleStreamMessage(a),()=>this.handleStreamConnected(),a=>this.handleStreamError(a))}connectToAllStreams(){if(this.disconnectFromStream(),this.disconnectFromAllStreams(),!this.allStreamsMetricsSection){console.error("All streams metrics section not available");return}this.allStreamsMetricsSection.style.display="flex",this.close();const e=document.getElementById("allStreamsGrid"),t=document.getElementById("allStreamsList");e&&(e.innerHTML=""),t&&(t.innerHTML=""),this.streamCards.clear(),this.streamRows.clear();const o=document.getElementById("allStreamsStatus");o&&(o.textContent="Connecting...",o.className="status-badge connecting"),this.allStreamsConnection=hr(s=>this.handleAllStreamsMessage(s),()=>this.handleAllStreamsConnected(),s=>this.handleAllStreamsError(s))}handleAllStreamsConnected(){console.log("Connected to all streams");const e=document.getElementById("allStreamsStatus");e&&(e.textContent="🟢 Connected",e.className="status-badge connected")}handleAllStreamsError(e){console.error("All streams error:",e);const t=document.getElementById("allStreamsStatus");t&&(this.allStreamsConnection&&this.allStreamsConnection.active?(t.textContent="🔄 Reconnecting...",t.className="status-badge reconnecting"):(t.textContent="🔴 Error",t.className="status-badge error"))}disconnectFromAllStreams(){this.allStreamsConnection&&(this.allStreamsConnection.close(),this.allStreamsConnection=null),this.allStreamsMetricsSection&&(this.allStreamsMetricsSection.style.display="none");const e=document.getElementById("yourMetrics");e&&(e.style.display="flex")}handleAllStreamsMessage(e){try{const t=e.stream,o=typeof e.data=="string"?JSON.parse(e.data):e.data;this.updateStreamCard(t,o)}catch(t){console.error("Error parsing stream message:",t,e)}}updateStreamCard(e,t){const o=document.getElementById("allStreamsGrid"),s=document.getElementById("allStreamsList");let a={};try{t.message?a=JSON.parse(t.message):a=t}catch{}if(o){let r=this.streamCards.get(e);if(r||(r=document.createElement("div"),r.className="stream-card",r.innerHTML=`
          <div class="stream-card-name" title="${e}">${e}</div>
          <div class="stream-card-power">--</div>
          <div class="stream-card-secondary">
            <div class="stream-card-metric">
              <span>CAD</span>
              <span class="card-cadence">--</span>
            </div>
            <div class="stream-card-metric">
              <span>HR</span>
              <span class="card-heartrate">--</span>
            </div>
          </div>
        `,o.appendChild(r),this.streamCards.set(e,r)),a.power!==void 0&&a.power!==null){const i=r.querySelector(".stream-card-power");i&&(i.textContent=String(a.power))}if(a.cadence!==void 0&&a.cadence!==null){const i=r.querySelector(".card-cadence");i&&(i.textContent=String(a.cadence))}if(a.heartrate!==void 0&&a.heartrate!==null){const i=r.querySelector(".card-heartrate");i&&(i.textContent=String(a.heartrate))}}if(s){let r=this.streamRows.get(e);if(r||(r=document.createElement("div"),r.className="stream-row",r.innerHTML=`
          <span class="stream-row-name" title="${e}">${e}</span>
          <span class="stream-row-power">--</span>
        `,s.appendChild(r),this.streamRows.set(e,r)),a.power!==void 0&&a.power!==null){const i=r.querySelector(".stream-row-power");i&&(i.textContent=String(a.power))}}}disconnectFromStream(){if(this.disconnectFromAllStreams(),this.currentConnection&&(this.currentConnection.close(),this.currentConnection=null),this.streamMetricsSection){this.streamMetricsSection.style.display="none";const t=document.getElementById("toggleStreamMetrics");t&&(t.checked=!1)}const e=document.getElementById("yourMetrics");e&&(e.style.display="flex"),this.resetViewer()}handleStreamConnected(){const e=document.getElementById("streamStatus");e&&(e.textContent="🟢 Connected",e.className="status-badge connected")}handleStreamMessage(e){try{const t=e.data?.message,o=typeof t=="string"?JSON.parse(t):e.data;(o.dataType==="workout_metrics"||o.power!==void 0||o.cadence!==void 0||o.heartrate!==void 0)&&this.updateMetrics(o);const s=document.getElementById("streamLastUpdate");if(s){const a=new Date;s.textContent=`Last update: ${a.toLocaleTimeString()}`}}catch(t){console.error("Error parsing stream message:",t,e)}}updateMetrics(e){const t=document.getElementById("streamPower"),o=document.getElementById("streamCadence"),s=document.getElementById("streamHeartrate"),a=document.getElementById("streamSpeed"),r=document.getElementById("streamDistance"),i=document.getElementById("streamAltitude"),c=document.getElementById("streamElapsed");t&&e.power!==null&&e.power!==void 0&&(t.textContent=String(e.power)),o&&e.cadence!==null&&e.cadence!==void 0&&(o.textContent=String(e.cadence)),s&&e.heartrate!==null&&e.heartrate!==void 0&&(s.textContent=String(e.heartrate)),a&&e.speed!==null&&e.speed!==void 0&&(a.textContent=String(e.speed)),r&&e.distance!==null&&e.distance!==void 0&&(r.textContent=String(e.distance)),i&&e.altitude!==null&&e.altitude!==void 0&&(i.textContent=String(e.altitude)),c&&e.elapsed&&(c.textContent=e.elapsed)}handleStreamError(e){console.error("Stream error:",e);const t=document.getElementById("streamStatus");t&&(this.currentConnection&&this.currentConnection.active?(t.textContent="🔄 Reconnecting...",t.className="status-badge reconnecting"):(t.textContent="🔴 Error",t.className="status-badge error"))}resetViewer(){["streamPower","streamCadence","streamHeartrate","streamSpeed","streamDistance","streamAltitude","streamElapsed"].forEach(o=>{const s=document.getElementById(o);s&&(s.textContent="--")});const t=document.getElementById("streamLastUpdate");t&&(t.textContent="Waiting for data...")}}function yr(){const n=new fr,e=document.getElementById("viewStreamsButton");return e&&e.addEventListener("click",()=>n.open()),n}function vr(n,e){const t=document.getElementById("startStreamButton"),o=document.getElementById("streamNameModal"),s=document.getElementById("closeStreamNameModal"),a=document.getElementById("cancelStreamName"),r=document.getElementById("confirmStreamName"),i=document.getElementById("streamNameInput"),c=document.getElementById("activeStreamToolbar"),l=document.getElementById("toolbarStreamName"),p=document.getElementById("streamPlayPauseBtn"),d=document.getElementById("streamStopBtn"),m=document.querySelector(".stream-indicator"),u=f=>{c&&(f.isStreaming?(c.style.display="flex",document.body.classList.add("has-stream-toolbar"),l&&(l.textContent=f.streamName),p&&(f.isPaused?(p.textContent="▶️",p.title="Resume Stream",m?.classList.add("paused")):(p.textContent="⏸️",p.title="Pause Stream",m?.classList.remove("paused")))):(c.style.display="none",document.body.classList.remove("has-stream-toolbar")))};if(!t){console.warn("Start stream button not found in DOM");return}const h=()=>{o&&(o.style.display="none"),i&&(i.value="")},g=async()=>{const f=i?.value.trim()||"";try{const T=await n.startStreaming(f||void 0);t.textContent="🔴 Stop Streaming",t.classList.add("streaming"),u(n.getStatus()),H(`Streaming to: ${T}`,"success"),h()}catch(T){console.error("Failed to start streaming:",T);const I=T instanceof Error?T.message:"Unknown error";H("Failed to start streaming: "+I,"error")}},y=async()=>{try{await n.stopStreaming(),t.textContent="📡 Start Streaming",t.classList.remove("streaming"),u(n.getStatus()),H("Streaming stopped","info")}catch(f){console.error(f),H("Error stopping stream","error")}};p&&p.addEventListener("click",()=>{n.getStatus().isPaused?(n.resumeStreaming(),H("Stream Resumed","success")):(n.pauseStreaming(),H("Stream Paused","info")),u(n.getStatus())}),d&&d.addEventListener("click",async()=>{confirm("Stop streaming?")&&await y()}),s&&s.addEventListener("click",h),a&&a.addEventListener("click",h),r&&r.addEventListener("click",g),i&&i.addEventListener("keypress",f=>{f.key==="Enter"&&g()}),o&&o.addEventListener("click",f=>{f.target===o&&h()}),t.addEventListener("click",async()=>{if(n.isStreaming)await y();else if(o)o.style.display="flex",i?.focus();else try{const f=await n.startStreaming();t.textContent="🔴 Stop Streaming",t.classList.add("streaming"),u(n.getStatus()),H(`Streaming to: ${f}`,"success")}catch(f){console.error("Failed to start streaming:",f);const T=f instanceof Error?f.message:"Unknown error";H("Failed to start streaming: "+T,"error")}});const b=document.getElementById("pauseButton"),v=document.getElementById("stopButton"),w=()=>{e.running===!1&&n.isStreaming&&setTimeout(()=>{!e.running&&n.isStreaming&&(n.stopStreaming(),t.textContent="📡 Start Streaming",t.classList.remove("streaming"),u(n.getStatus()))},100)};b&&b.addEventListener("click",w),v&&v.addEventListener("click",w)}const St="bpt-dark-mode";function Sn(){try{const n=localStorage.getItem(St);return n==="light"||n==="dark"||n==="system"?n:null}catch{return null}}function wr(n){try{localStorage.setItem(St,n)}catch{}}function kt(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function ve(n){document.documentElement.setAttribute("data-theme",n)}function kn(n){return n==="system"?kt()?"dark":"light":n}function br(){const n=Sn();if(n){const t=kn(n);return ve(t),t==="dark"}const e=kt();return e&&ve("dark"),e}function Er(n){const e=br();n.checked=e,n.addEventListener("change",()=>{const o=n.checked?"dark":"light";ve(o),wr(o),S(`Dark mode ${n.checked?"enabled":"disabled"}`)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",o=>{const s=Sn();if(!s||s==="system"){const a=o.matches?"dark":"light";ve(a),n.checked=o.matches,S(`Dark mode ${o.matches?"enabled":"disabled"}`)}}),window.addEventListener("storage",o=>{if(o.key===St){const s=o.newValue;if(s){const a=kn(s);ve(a),n.checked=a==="dark"}else{const a=kt();ve(a?"dark":"light"),n.checked=a}}})}function xr(n){const e=Math.floor(n/1e3),t=Math.floor(e/60),o=Math.floor(t/60);return o>0?`${o}h ${t%60}m`:t>0?`${t}m ${e%60}s`:`${e}s`}function Tr(n){return new Date(n).toLocaleString()}function Sr(n){const e=document.createElement("dialog");e.id="workout-recovery-modal",e.className="modal",e.setAttribute("aria-labelledby","recovery-modal-title");const t=n.power.length+n.heartrate.length+n.cadence.length,o=n.lastUpdated-n.startTime;return e.innerHTML=`
        <div class="modal-content">
            <h2 id="recovery-modal-title">🔄 Recover Workout?</h2>
            <p>An interrupted workout was found from your last session.</p>
            
            <div class="recovery-summary">
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Started</span>
                    <span class="recovery-stat-value">${Tr(n.startTime)}</span>
                </div>
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Duration</span>
                    <span class="recovery-stat-value">${xr(o)}</span>
                </div>
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Data Points</span>
                    <span class="recovery-stat-value">${t.toLocaleString()}</span>
                </div>
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Power Readings</span>
                    <span class="recovery-stat-value">${n.power.length.toLocaleString()}</span>
                </div>
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Heart Rate Readings</span>
                    <span class="recovery-stat-value">${n.heartrate.length.toLocaleString()}</span>
                </div>
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Cadence Readings</span>
                    <span class="recovery-stat-value">${n.cadence.length.toLocaleString()}</span>
                </div>
                ${n.laps.length>0?`
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Laps</span>
                    <span class="recovery-stat-value">${n.laps.length}</span>
                </div>
                `:""}
            </div>
            
            <div class="modal-actions">
                <button type="button" id="recovery-restore-btn" class="btn btn-primary">
                    ✓ Restore Workout
                </button>
                <button type="button" id="recovery-discard-btn" class="btn btn-secondary">
                    ✕ Start Fresh
                </button>
            </div>
        </div>
    `,e}function kr(){if(document.getElementById("recovery-modal-styles"))return;const n=document.createElement("style");n.id="recovery-modal-styles",n.textContent=`
        #workout-recovery-modal {
            max-width: 400px;
        }
        
        .recovery-summary {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem;
            margin: 1.5rem 0;
            padding: 1rem;
            background: var(--surface-2, #2a2a2a);
            border-radius: 8px;
        }
        
        .recovery-stat {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }
        
        .recovery-stat-label {
            font-size: 0.75rem;
            color: var(--text-muted, #888);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .recovery-stat-value {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-primary, #fff);
        }
        
        #workout-recovery-modal .modal-actions {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-top: 1.5rem;
        }
        
        #workout-recovery-modal .btn {
            width: 100%;
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
        }
    `,document.head.appendChild(n)}async function Cr(n){kr();const e=Sr(n);return document.body.appendChild(e),new Promise(t=>{const o=e.querySelector("#recovery-restore-btn"),s=e.querySelector("#recovery-discard-btn"),a=()=>{e.close(),e.remove()};o.addEventListener("click",()=>{a(),t("restore")}),s.addEventListener("click",()=>{a(),t("discard")}),e.addEventListener("cancel",r=>{r.preventDefault()}),e.showModal()})}async function Lr(n,e){try{if(!await Yn())return!1;const t=await vt();return t?await Cr(t)==="restore"?(n.restore({heartrate:t.heartrate,power:t.power,cadence:t.cadence,speed:t.speed,distance:t.distance,altitude:t.altitude,laps:t.laps,gps:t.gps||[]},t.startTime),e.startTime=t.startTime,e.running=!1,console.log(`Restored workout with ${t.power.length} power readings`),!0):(await yt(),console.log("User discarded recovered workout"),!1):!1}catch(t){return console.error("Error during workout recovery:",t),!1}}let we=null;const Ir=()=>{window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),we=n,$r()}),window.addEventListener("appinstalled",()=>{console.log("PWA was installed successfully"),we=null,ft()})},$r=()=>{const n=document.getElementById("installPrompt");if(!n)return;n.style.display="block",document.getElementById("installButton")?.addEventListener("click",async()=>{if(!we)return;await we.prompt();const{outcome:o}=await we.userChoice;console.log(`User response to the install prompt: ${o}`),we=null,ft()}),document.getElementById("dismissInstall")?.addEventListener("click",()=>{ft()})},ft=()=>{const n=document.getElementById("installPrompt");n&&(n.style.display="none")};function Ar(){const n=document.getElementById("aboutButton"),e=document.getElementById("aboutModal"),t=document.getElementById("closeAboutModal");if(!n||!e)return;const o=()=>{e.style.display="flex";const a=document.querySelector("header details");a&&a.removeAttribute("open")},s=()=>{e.style.display="none"};n.addEventListener("click",o),t?.addEventListener("click",s),window.addEventListener("click",a=>{a.target===e&&s()})}const Mr=()=>{let n=null;const e=async()=>{try{"wakeLock"in navigator&&(n=await navigator.wakeLock.request("screen"),console.log("Screen wake lock activated"),n.addEventListener("release",()=>{console.log("Screen wake lock released")}))}catch(t){console.error("Wake lock request failed:",t)}};document.visibilityState==="visible"&&e(),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})};function Br(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:o,onRegistered:s,onRegisteredSW:a,onRegisterError:r}=n;let i,c;const l=async(d=!0)=>{await c};async function p(){if("serviceWorker"in navigator){if(i=await bt(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:d}},[],import.meta.url).then(({Workbox:d})=>new d("./sw.js",{scope:"./",type:"classic"})).catch(d=>{r?.(d)}),!i)return;i.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),i.addEventListener("installed",d=>{d.isUpdate||o?.()}),i.register({immediate:e}).then(d=>{a?a("./sw.js",d):s?.(d)}).catch(d=>{r?.(d)})}}return c=p(),l}const Dr=()=>{const n=Br({onNeedRefresh(){_r(n)},onOfflineReady(){console.log("App ready to work offline")},onRegistered(e){console.log("Service Worker registered successfully"),e&&setInterval(()=>{e.update()},36e5)},onRegisterError(e){console.log("Service Worker registration failed:",e)}})},_r=n=>{const e=document.getElementById("updateNotification");if(!e)return;e.style.display="block",document.getElementById("updateButton")?.addEventListener("click",()=>{n(!0)},{once:!0}),document.getElementById("dismissUpdate")?.addEventListener("click",()=>{e.style.display="none"},{once:!0})};function Pr({measurementsState:n,timeState:e,connectionsState:t,streamManager:o}){As(e);const s=cr({connectionsState:t,measurementsState:n});Mr(),Dr(),Ir(),Ar(),yr(),vr(o,e),yn(),So();const a=document.getElementById("toggleDarkMode");return a&&Er(a),ls(),Ha({measurementsState:n,timeState:e}),Lr(n,e).then(r=>{r&&(console.log("Workout recovered from previous session"),document.dispatchEvent(new CustomEvent("workout-recovered")))}),Za({measurementsState:n,timeState:e,zoneState:s}),Ka(n,s),ja(),Ja({measurementsState:n,timeState:e,zoneState:s}),s}var Qt;(function(n){n[n.SCAN_MODE_LOW_POWER=0]="SCAN_MODE_LOW_POWER",n[n.SCAN_MODE_BALANCED=1]="SCAN_MODE_BALANCED",n[n.SCAN_MODE_LOW_LATENCY=2]="SCAN_MODE_LOW_LATENCY"})(Qt||(Qt={}));var en;(function(n){n[n.CONNECTION_PRIORITY_BALANCED=0]="CONNECTION_PRIORITY_BALANCED",n[n.CONNECTION_PRIORITY_HIGH=1]="CONNECTION_PRIORITY_HIGH",n[n.CONNECTION_PRIORITY_LOW_POWER=2]="CONNECTION_PRIORITY_LOW_POWER"})(en||(en={}));function Nr(n){return new DataView(Uint8Array.from(n).buffer)}function Rr(n){return Array.from(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}function Or(n){return`0000${n.toString(16).padStart(4,"0")}-0000-1000-8000-00805f9b34fb`}function Cn(n){const e=[];let t,o,s=1,a=0;for(t=0;t<n.length;t++)o=n.charCodeAt(t),(o>47&&o<58||o>64&&o<71||o>96&&o<103)&&(a=a<<4^(o>64?o+9:o)&15,(s^=1)&&e.push(a&255));return Nr(e)}function Ae(n){return Rr(n).map(e=>{let t=e.toString(16);return t.length==1&&(t="0"+t),t}).join("")}function li(n){if(typeof n=="string")return n;if(typeof n=="number")return Or(n);throw new Error("Invalid UUID")}function di(n){const e={};if(n)return n.forEach((t,o)=>{e[o.toString()]=t}),e}function tn(n){if(n!==void 0){if(typeof n=="string"){const e=Cn(n);return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}return n instanceof DataView?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):n}}function He(n){if(n!==void 0)return n instanceof DataView?Ae(n):Ae(new DataView(n.buffer,n.byteOffset,n.byteLength))}const k=Pe("BluetoothLe",{web:()=>bt(()=>import("./web-DfurEqnw.js"),[],import.meta.url).then(n=>new n.BluetoothLeWeb)}),Vr=()=>{let n=Promise.resolve();return e=>new Promise((t,o)=>{n=n.then(()=>e()).then(t).catch(o)})};function it(n){return n?Vr():e=>e()}function M(n){if(typeof n!="string")throw new Error(`Invalid UUID type ${typeof n}. Expected string.`);if(n=n.toLowerCase(),!(n.search(/^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/)>=0))throw new Error(`Invalid UUID format ${n}. Expected 128 bit string (e.g. "0000180d-0000-1000-8000-00805f9b34fb").`);return n}class Fr{constructor(){this.scanListener=null,this.eventListeners=new Map,this.queue=it(!0)}enableQueue(){this.queue=it(!0)}disableQueue(){this.queue=it(!1)}async initialize(e){await this.queue(async()=>{await k.initialize(e)})}async isEnabled(){return await this.queue(async()=>(await k.isEnabled()).value)}async requestEnable(){await this.queue(async()=>{await k.requestEnable()})}async enable(){await this.queue(async()=>{await k.enable()})}async disable(){await this.queue(async()=>{await k.disable()})}async startEnabledNotifications(e){await this.queue(async()=>{var t;const o="onEnabledChanged";await((t=this.eventListeners.get(o))===null||t===void 0?void 0:t.remove());const s=await k.addListener(o,a=>{e(a.value)});this.eventListeners.set(o,s),await k.startEnabledNotifications()})}async stopEnabledNotifications(){await this.queue(async()=>{var e;const t="onEnabledChanged";await((e=this.eventListeners.get(t))===null||e===void 0?void 0:e.remove()),this.eventListeners.delete(t),await k.stopEnabledNotifications()})}async isLocationEnabled(){return await this.queue(async()=>(await k.isLocationEnabled()).value)}async openLocationSettings(){await this.queue(async()=>{await k.openLocationSettings()})}async openBluetoothSettings(){await this.queue(async()=>{await k.openBluetoothSettings()})}async openAppSettings(){await this.queue(async()=>{await k.openAppSettings()})}async setDisplayStrings(e){await this.queue(async()=>{await k.setDisplayStrings(e)})}async requestDevice(e){return e=e?this.validateRequestBleDeviceOptions(e):void 0,await this.queue(async()=>await k.requestDevice(e))}async requestLEScan(e,t){e=this.validateRequestBleDeviceOptions(e),await this.queue(async()=>{var o;await((o=this.scanListener)===null||o===void 0?void 0:o.remove()),this.scanListener=await k.addListener("onScanResult",s=>{const a=Object.assign(Object.assign({},s),{manufacturerData:this.convertObject(s.manufacturerData),serviceData:this.convertObject(s.serviceData),rawAdvertisement:s.rawAdvertisement?this.convertValue(s.rawAdvertisement):void 0});t(a)}),await k.requestLEScan(e)})}async stopLEScan(){await this.queue(async()=>{var e;await((e=this.scanListener)===null||e===void 0?void 0:e.remove()),this.scanListener=null,await k.stopLEScan()})}async getDevices(e){if(!Array.isArray(e))throw new Error("deviceIds must be an array");return this.queue(async()=>(await k.getDevices({deviceIds:e})).devices)}async getConnectedDevices(e){if(!Array.isArray(e))throw new Error("services must be an array");return e=e.map(M),this.queue(async()=>(await k.getConnectedDevices({services:e})).devices)}async getBondedDevices(){return this.queue(async()=>(await k.getBondedDevices()).devices)}async connect(e,t,o){await this.queue(async()=>{var s;if(t){const a=`disconnected|${e}`;await((s=this.eventListeners.get(a))===null||s===void 0?void 0:s.remove());const r=await k.addListener(a,()=>{t(e)});this.eventListeners.set(a,r)}await k.connect(Object.assign({deviceId:e},o))})}async createBond(e,t){await this.queue(async()=>{await k.createBond(Object.assign({deviceId:e},t))})}async isBonded(e){return await this.queue(async()=>(await k.isBonded({deviceId:e})).value)}async disconnect(e){await this.queue(async()=>{await k.disconnect({deviceId:e})})}async getServices(e){return await this.queue(async()=>(await k.getServices({deviceId:e})).services)}async discoverServices(e){await this.queue(async()=>{await k.discoverServices({deviceId:e})})}async getMtu(e){return await this.queue(async()=>(await k.getMtu({deviceId:e})).value)}async requestConnectionPriority(e,t){await this.queue(async()=>{await k.requestConnectionPriority({deviceId:e,connectionPriority:t})})}async readRssi(e){return await this.queue(async()=>{const o=await k.readRssi({deviceId:e});return parseFloat(o.value)})}async read(e,t,o,s){return t=M(t),o=M(o),await this.queue(async()=>{const r=await k.read(Object.assign({deviceId:e,service:t,characteristic:o},s));return this.convertValue(r.value)})}async write(e,t,o,s,a){return t=M(t),o=M(o),this.queue(async()=>{if(!s?.buffer)throw new Error("Invalid data.");let r=s;V.getPlatform()!=="web"&&(r=Ae(s)),await k.write(Object.assign({deviceId:e,service:t,characteristic:o,value:r},a))})}async writeWithoutResponse(e,t,o,s,a){t=M(t),o=M(o),await this.queue(async()=>{if(!s?.buffer)throw new Error("Invalid data.");let r=s;V.getPlatform()!=="web"&&(r=Ae(s)),await k.writeWithoutResponse(Object.assign({deviceId:e,service:t,characteristic:o,value:r},a))})}async readDescriptor(e,t,o,s,a){return t=M(t),o=M(o),s=M(s),await this.queue(async()=>{const i=await k.readDescriptor(Object.assign({deviceId:e,service:t,characteristic:o,descriptor:s},a));return this.convertValue(i.value)})}async writeDescriptor(e,t,o,s,a,r){return t=M(t),o=M(o),s=M(s),this.queue(async()=>{if(!a?.buffer)throw new Error("Invalid data.");let i=a;V.getPlatform()!=="web"&&(i=Ae(a)),await k.writeDescriptor(Object.assign({deviceId:e,service:t,characteristic:o,descriptor:s,value:i},r))})}async startNotifications(e,t,o,s,a){t=M(t),o=M(o),await this.queue(async()=>{var r;const i=`notification|${e}|${t}|${o}`;await((r=this.eventListeners.get(i))===null||r===void 0?void 0:r.remove());const c=await k.addListener(i,l=>{s(this.convertValue(l?.value))});this.eventListeners.set(i,c),await k.startNotifications(Object.assign({deviceId:e,service:t,characteristic:o},a))})}async stopNotifications(e,t,o){t=M(t),o=M(o),await this.queue(async()=>{var s;const a=`notification|${e}|${t}|${o}`;await((s=this.eventListeners.get(a))===null||s===void 0?void 0:s.remove()),this.eventListeners.delete(a),await k.stopNotifications({deviceId:e,service:t,characteristic:o})})}validateRequestBleDeviceOptions(e){return e.services&&(e.services=e.services.map(M)),e.optionalServices&&(e.optionalServices=e.optionalServices.map(M)),e.serviceData&&V.getPlatform()!=="web"&&(e.serviceData=e.serviceData.map(t=>Object.assign(Object.assign({},t),{serviceUuid:M(t.serviceUuid),dataPrefix:He(t.dataPrefix),mask:He(t.mask)}))),e.manufacturerData&&(V.getPlatform()!=="web"?e.manufacturerData=e.manufacturerData.map(t=>Object.assign(Object.assign({},t),{dataPrefix:He(t.dataPrefix),mask:He(t.mask)})):e.manufacturerData=e.manufacturerData.map(t=>Object.assign(Object.assign({},t),{dataPrefix:tn(t.dataPrefix),mask:tn(t.mask)}))),e}convertValue(e){return typeof e=="string"?Cn(e):e===void 0?new DataView(new ArrayBuffer(0)):e}convertObject(e){if(e===void 0)return;const t={};for(const o of Object.keys(e))t[o]=this.convertValue(e[o]);return t}}const A=new Fr,Ln=n=>{const e=n.getUint16(0,!0);let t=2;const o={},s=(e&2)!==0,a=(e&4)!==0,r=(e&8)!==0;if(n.byteLength>=t+2){const i=n.getUint16(t,!0);o.speed=i/100,t+=2}if(s&&n.byteLength>=t+2){const i=n.getUint16(t,!0);o.averageSpeed=i/100,t+=2}if(a&&n.byteLength>=t+3){const i=n.getUint8(t),c=n.getUint8(t+1),l=n.getUint8(t+2),p=i+(c<<8)+(l<<16);o.totalDistance=p,t+=3}if(r&&n.byteLength>=t+4){const i=n.getInt16(t,!0);o.incline=i/10,t+=2;const c=n.getInt16(t,!0);o.rampAngle=c/10,t+=2}return o},Ue="00001818-0000-1000-8000-00805f9b34fb",nn="00002a63-0000-1000-8000-00805f9b34fb",ze="0000180d-0000-1000-8000-00805f9b34fb",on="00002a37-0000-1000-8000-00805f9b34fb",We="00001816-0000-1000-8000-00805f9b34fb",sn="00002a5b-0000-1000-8000-00805f9b34fb",qe="00001826-0000-1000-8000-00805f9b34fb",an="00002acd-0000-1000-8000-00805f9b34fb",W=5,Qe=1e3,Hr=async()=>{const n=[],e=[];let t=null,o=!1,s=0;await A.initialize();const a=await A.requestDevice({services:[Ue],optionalServices:[Ue]});t=a.deviceId;const r=a.name||"Power Sensor",i=d=>{e.forEach(m=>m(d))},c=async()=>{t&&(await A.connect(t,p),i("connected"),await A.startNotifications(t,Ue,nn,d=>{Z.log(r,d);const m=d.getInt16(2,!0),u={timestamp:Date.now(),value:m};n.forEach(h=>h(u))}),s=0)},l=async()=>{if(o||s>=W){s>=W&&(console.error("Native Power sensor: Max reconnection attempts reached"),i("failed"));return}s++;const d=Qe*Math.pow(2,s-1);console.log(`Native Power sensor: Reconnection attempt ${s}/${W} in ${d}ms`),i("reconnecting"),await new Promise(m=>setTimeout(m,d));try{await c(),console.log("Native Power sensor: Reconnected successfully")}catch(m){console.error("Native Power sensor: Reconnection failed:",m),l()}},p=d=>{d===t&&!o&&(console.log("Native Power sensor: Disconnected"),i("disconnected"),l())};return await c(),{disconnect:async()=>{if(o=!0,t)try{await A.stopNotifications(t,Ue,nn),await A.disconnect(t)}catch(d){console.error("Error disconnecting native bluetooth:",d)}},addListener:d=>{n.push(d)},deviceName:r,onStatusChange:d=>{e.push(d)}}},Ur=async()=>{const n=[],e=[];let t=null,o=!1,s=0;await A.initialize();const a=await A.requestDevice({services:[ze],optionalServices:[ze]});t=a.deviceId;const r=a.name||"Heart Rate Monitor",i=d=>{e.forEach(m=>m(d))},c=async()=>{t&&(await A.connect(t,p),i("connected"),await A.startNotifications(t,ze,on,d=>{Z.log(r,d);const m=d.getUint8(0);let u;m&1?u=d.getUint16(1,!0):u=d.getUint8(1);const h={timestamp:Date.now(),value:u};n.forEach(g=>g(h))}),s=0)},l=async()=>{if(o||s>=W){s>=W&&(console.error("Native Heart Rate sensor: Max reconnection attempts reached"),i("failed"));return}s++;const d=Qe*Math.pow(2,s-1);console.log(`Native Heart Rate sensor: Reconnection attempt ${s}/${W} in ${d}ms`),i("reconnecting"),await new Promise(m=>setTimeout(m,d));try{await c(),console.log("Native Heart Rate sensor: Reconnected successfully")}catch(m){console.error("Native Heart Rate sensor: Reconnection failed:",m),l()}},p=d=>{d===t&&!o&&(console.log("Native Heart Rate sensor: Disconnected"),i("disconnected"),l())};return await c(),{disconnect:async()=>{if(o=!0,t)try{await A.stopNotifications(t,ze,on),await A.disconnect(t)}catch(d){console.error("Error disconnecting native bluetooth:",d)}},addListener:d=>{n.push(d)},deviceName:r,onStatusChange:d=>{e.push(d)}}},zr=async()=>{const n=[],e=[];let t=null,o=null,s=null,a=!1,r=0;await A.initialize();const i=await A.requestDevice({services:[We],optionalServices:[We]});t=i.deviceId;const c=i.name||"Cadence Sensor",l=u=>{e.forEach(h=>h(u))},p=async()=>{t&&(await A.connect(t,m),l("connected"),await A.startNotifications(t,We,sn,u=>{Z.log(c,u);const h=u.getUint8(0);if(h&2){let g=1;h&1&&(g=7);const y=u.getUint16(g,!0),b=u.getUint16(g+2,!0);if(o!==null&&s!==null){let v=y-o,w=b-s;if(v<0&&(v+=65536),w<0&&(w+=65536),w>0){const f=w/1024,T=Math.round(v/f*60);if(T>=0&&T<300){const I={timestamp:Date.now(),value:T};n.forEach(E=>E(I))}}}o=y,s=b}}),r=0)},d=async()=>{if(a||r>=W){r>=W&&(console.error("Native Cadence sensor: Max reconnection attempts reached"),l("failed"));return}r++;const u=Qe*Math.pow(2,r-1);console.log(`Native Cadence sensor: Reconnection attempt ${r}/${W} in ${u}ms`),l("reconnecting"),await new Promise(h=>setTimeout(h,u));try{await p(),console.log("Native Cadence sensor: Reconnected successfully")}catch(h){console.error("Native Cadence sensor: Reconnection failed:",h),d()}},m=u=>{u===t&&!a&&(console.log("Native Cadence sensor: Disconnected"),l("disconnected"),d())};return await p(),{disconnect:async()=>{if(a=!0,t)try{await A.stopNotifications(t,We,sn),await A.disconnect(t)}catch(u){console.error("Error disconnecting native bluetooth:",u)}},addListener:u=>{n.push(u)},deviceName:c,onStatusChange:u=>{e.push(u)}}},Wr=async()=>{const n=[],e=[];let t=null,o=!1,s=0;await A.initialize();const a=await A.requestDevice({services:[qe],optionalServices:[qe]});t=a.deviceId;const r=a.name||"Treadmill",i=d=>{e.forEach(m=>m(d))},c=d=>{d===t&&!o&&(console.log("Treadmill: Connection lost, attempting to reconnect..."),i("disconnected"),p())},l=async()=>{t&&(await A.connect(t,c),i("connected"),await A.startNotifications(t,qe,an,d=>{Z.log(r,d);try{const m=Ln(d);if(m.speed!==void 0||m.incline!==void 0){const u={timestamp:Date.now(),speed:m.speed??null,incline:m.incline??null};n.forEach(h=>h(u))}}catch(m){console.error("Error parsing treadmill data",m)}}),s=0)},p=async()=>{if(o)return;if(s>=W){console.error("Treadmill: Max reconnection attempts reached"),i("failed");return}s++;const d=Qe*Math.pow(2,s-1);console.log(`Treadmill: Reconnection attempt ${s}/${W} in ${d}ms`),i("reconnecting"),await new Promise(m=>setTimeout(m,d));try{await l(),console.log("Treadmill: Reconnected successfully")}catch(m){console.error("Treadmill: Reconnection failed:",m),p()}};try{await l()}catch(d){if(t)try{await A.disconnect(t)}catch{}throw d}return{disconnect:async()=>{if(o=!0,t)try{await A.stopNotifications(t,qe,an),await A.disconnect(t)}catch(d){console.error("Error disconnecting treadmill",d)}i("disconnected")},addListener:d=>{n.push(d)},deviceName:r,onStatusChange:d=>{e.push(d)}}},U=5,et=1e3,qr=async()=>{const n=[],e=[];let t=!1,o=0,s=null;const a=await navigator.bluetooth.requestDevice({filters:[{services:["cycling_power"]}],optionalServices:["cycling_power"]});if(!a.gatt)throw new Error("GATT server not available");const r=a.name||"Power Sensor",i=d=>{e.forEach(m=>m(d))},c=d=>{const u=d.target.value;if(!u)return;Z.log(r,u);const h=u.getInt16(2,!0),g={timestamp:Date.now(),value:h};n.forEach(y=>y(g))},l=async()=>{if(!a.gatt)return;s=await(await(await a.gatt.connect()).getPrimaryService("cycling_power")).getCharacteristic("cycling_power_measurement"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",c),o=0,i("connected")},p=async()=>{if(t||o>=U){o>=U&&(console.error("Power sensor: Max reconnection attempts reached"),i("failed"));return}o++;const d=et*Math.pow(2,o-1);console.log(`Power sensor: Reconnection attempt ${o}/${U} in ${d}ms`),i("reconnecting"),await new Promise(m=>setTimeout(m,d));try{await l(),console.log("Power sensor: Reconnected successfully")}catch(m){console.error("Power sensor: Reconnection failed:",m),p()}};return a.addEventListener("gattserverdisconnected",()=>{t||(console.log("Power sensor: Connection lost, attempting to reconnect..."),i("disconnected"),p())}),await l(),{disconnect:()=>{t=!0,s&&(s.removeEventListener("characteristicvaluechanged",c),s.stopNotifications().catch(()=>{})),a.gatt?.disconnect()},addListener:d=>{n.push(d)},deviceName:r,onStatusChange:d=>{e.push(d)}}},jr=async()=>{const n=[],e=[];let t=!1,o=0,s=null;const a=await navigator.bluetooth.requestDevice({filters:[{services:["heart_rate"]}],optionalServices:["heart_rate"]});if(!a.gatt)throw new Error("GATT server not available");const r=a.name||"Heart Rate Monitor",i=d=>{e.forEach(m=>m(d))},c=d=>{const u=d.target.value;if(!u)return;Z.log(r,u);const h=u.getUint8(0);let g;h&1?g=u.getUint16(1,!0):g=u.getUint8(1);const y={timestamp:Date.now(),value:g};n.forEach(b=>b(y))},l=async()=>{if(!a.gatt)return;s=await(await(await a.gatt.connect()).getPrimaryService("heart_rate")).getCharacteristic("heart_rate_measurement"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",c),o=0,i("connected")},p=async()=>{if(t||o>=U){o>=U&&(console.error("Heart rate sensor: Max reconnection attempts reached"),i("failed"));return}o++;const d=et*Math.pow(2,o-1);console.log(`Heart rate sensor: Reconnection attempt ${o}/${U} in ${d}ms`),i("reconnecting"),await new Promise(m=>setTimeout(m,d));try{await l(),console.log("Heart rate sensor: Reconnected successfully")}catch(m){console.error("Heart rate sensor: Reconnection failed:",m),p()}};return a.addEventListener("gattserverdisconnected",()=>{t||(console.log("Heart rate sensor: Connection lost, attempting to reconnect..."),i("disconnected"),p())}),await l(),{disconnect:()=>{t=!0,s&&(s.removeEventListener("characteristicvaluechanged",c),s.stopNotifications().catch(()=>{})),a.gatt?.disconnect()},addListener:d=>{n.push(d)},deviceName:r,onStatusChange:d=>{e.push(d)}}},Zr=async()=>{const n=[],e=[];let t=!1,o=0,s=null,a=null,r=null;const i=await navigator.bluetooth.requestDevice({filters:[{services:["cycling_speed_and_cadence"]}],optionalServices:["cycling_speed_and_cadence"]});if(!i.gatt)throw new Error("GATT server not available");const c=i.name||"Cadence Sensor",l=u=>{e.forEach(h=>h(u))},p=u=>{const g=u.target.value;if(!g)return;Z.log(c,g);const y=g.getUint8(0);if(y&2){let b=1;y&1&&(b=7);const v=g.getUint16(b,!0),w=g.getUint16(b+2,!0);if(a!==null&&r!==null){let f=v-a,T=w-r;if(f<0&&(f+=65536),T<0&&(T+=65536),T>0){const I=T/1024,E=Math.round(f/I*60);if(E>=0&&E<300){const C={timestamp:Date.now(),value:E};n.forEach(L=>L(C))}}}a=v,r=w}},d=async()=>{if(!i.gatt)return;s=await(await(await i.gatt.connect()).getPrimaryService("cycling_speed_and_cadence")).getCharacteristic("csc_measurement"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",p),o=0,l("connected")},m=async()=>{if(t||o>=U){o>=U&&(console.error("Cadence sensor: Max reconnection attempts reached"),l("failed"));return}o++;const u=et*Math.pow(2,o-1);console.log(`Cadence sensor: Reconnection attempt ${o}/${U} in ${u}ms`),l("reconnecting"),await new Promise(h=>setTimeout(h,u));try{await d(),console.log("Cadence sensor: Reconnected successfully")}catch(h){console.error("Cadence sensor: Reconnection failed:",h),m()}};return i.addEventListener("gattserverdisconnected",()=>{t||(console.log("Cadence sensor: Connection lost, attempting to reconnect..."),l("disconnected"),m())}),await d(),{disconnect:()=>{t=!0,s&&(s.removeEventListener("characteristicvaluechanged",p),s.stopNotifications().catch(()=>{})),i.gatt?.disconnect()},addListener:u=>{n.push(u)},deviceName:c,onStatusChange:u=>{e.push(u)}}},Yr=async()=>{const n=[],e=[];let t=!1,o=0,s=null,a;const r=await navigator.bluetooth.requestDevice({filters:[{services:["fitness_machine"]}],optionalServices:["fitness_machine"]});if(!r.gatt)throw new Error("GATT server not available");const i=r.name||"Treadmill",c=m=>{e.forEach(u=>u(m))},l=m=>{const h=m.target.value;if(h){Z.log(i,h);try{const g=Ln(h);if(g.speed!==void 0||g.incline!==void 0){const y={timestamp:Date.now(),speed:g.speed??null,incline:g.incline??null};n.forEach(b=>b(y))}}catch(g){console.error("Error parsing treadmill data",g)}}},p=async()=>{if(!r.gatt)return;a=await r.gatt.connect(),s=await(await a.getPrimaryService("fitness_machine")).getCharacteristic("treadmill_data"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",l),o=0,c("connected")},d=async()=>{if(t||o>=U){o>=U&&(console.error("Treadmill: Max reconnection attempts reached"),c("failed"));return}o++;const m=et*Math.pow(2,o-1);console.log(`Treadmill: Reconnection attempt ${o}/${U} in ${m}ms`),c("reconnecting"),await new Promise(u=>setTimeout(u,m));try{await p(),console.log("Treadmill: Reconnected successfully")}catch(u){console.error("Treadmill: Reconnection failed:",u),d()}};r.addEventListener("gattserverdisconnected",()=>{t||(console.log("Treadmill: Connection lost, attempting to reconnect..."),c("disconnected"),d())});try{await p()}catch(m){throw a&&a.connected&&a.disconnect(),m}return{disconnect:()=>{if(t=!0,s)try{s.stopNotifications(),s.removeEventListener("characteristicvaluechanged",l)}catch{}r.gatt?.connected&&r.gatt.disconnect(),c("disconnected")},addListener:m=>{n.push(m)},deviceName:i,onStatusChange:m=>{e.push(m)}}},tt={connectPower:async()=>V.isNativePlatform()?Hr():qr(),connectHeartRate:async()=>V.isNativePlatform()?Ur():jr(),connectCadence:async()=>V.isNativePlatform()?zr():Zr(),connectTreadmill:async()=>V.isNativePlatform()?Wr():Yr()},Gr=async()=>tt.connectCadence(),Kr=async()=>tt.connectHeartRate(),Jr=async()=>tt.connectPower(),Xr=async()=>tt.connectTreadmill(),In={power:"Power Meter",heartrate:"Heart Rate Monitor",cadence:"Cadence Sensor",speed:"Speed Sensor",distance:"Distance Sensor",altitude:"Altimeter",gps:"GPS",treadmill:"Treadmill",treadmillSpeed:"Treadmill Speed"},$n={power:"⚡",heartrate:"❤️",cadence:"🚴",speed:"💨",distance:"📏",altitude:"🏔️",gps:"📍",treadmill:"🏃",treadmillSpeed:"🏃"};function Qr(n,e){const t=In[e],o=n instanceof Error?n.message:String(n),s=n instanceof Error?n.name:"";return o.includes("User cancelled")||o.includes("cancelled the requestDevice")?{title:"Connection Cancelled",message:`${t} pairing was cancelled.`,suggestions:["Click the connect button to try again","Make sure your sensor is powered on and in range"],canRetry:!0}:o.includes("Bluetooth adapter not available")||o.includes("Web Bluetooth API is not available")||s==="NotFoundError"&&o.includes("Bluetooth")?{title:"Bluetooth Unavailable",message:"Bluetooth is not available on this device or browser.",suggestions:["Check that Bluetooth is enabled in your device settings","Try using Chrome, Edge, or another browser that supports Web Bluetooth","On macOS, ensure Bluetooth permissions are granted in System Preferences","On Windows, check that your Bluetooth adapter is working"],canRetry:!1}:o.includes("No Bluetooth devices")||o.includes("No devices found")||s==="NotFoundError"&&!o.includes("Bluetooth")?{title:"No Sensors Found",message:`No compatible ${t.toLowerCase()} was found nearby.`,suggestions:["Make sure your sensor is powered on","Wake up the sensor by spinning the pedals or moving","Bring the sensor closer to your device","Check that the sensor battery is not depleted","Ensure the sensor is not connected to another device"],canRetry:!0}:o.includes("GATT")||o.includes("Connection failed")||o.includes("connect")&&o.includes("fail")?{title:"Connection Failed",message:`Could not connect to the ${t.toLowerCase()}.`,suggestions:["Try moving closer to the sensor","Power cycle the sensor (turn off and on again)","Check that no other device is connected to this sensor","Restart Bluetooth on your device","If using a phone, try closing other Bluetooth apps"],canRetry:!0}:o.includes("SecurityError")||o.includes("permission")||s==="SecurityError"?{title:"Permission Denied",message:"Bluetooth permission was denied.",suggestions:["Check your browser settings to allow Bluetooth access",'If prompted, click "Allow" to grant Bluetooth permission',"Try refreshing the page and connecting again","On some browsers, you may need to access this site over HTTPS"],canRetry:!0}:o.includes("NetworkError")||o.includes("timeout")||s==="NetworkError"?{title:"Connection Timed Out",message:`The connection to your ${t.toLowerCase()} timed out.`,suggestions:["Make sure the sensor is in range and powered on","Try moving closer to the sensor","Power cycle the sensor and try again","Check for interference from other wireless devices"],canRetry:!0}:o.includes("Service")&&o.includes("not found")?{title:"Incompatible Sensor",message:`This device doesn't appear to be a compatible ${t.toLowerCase()}.`,suggestions:["Make sure you selected the correct sensor type","Check that your sensor supports standard Bluetooth protocols","Some sensors may require a firmware update","Consult your sensor's documentation for compatibility"],canRetry:!0}:{title:"Connection Error",message:`Failed to connect to ${t.toLowerCase()}.`,suggestions:["Make sure the sensor is powered on and nearby","Try power cycling the sensor","Restart Bluetooth on your device","Refresh the page and try again"],canRetry:!0}}function ei(n){const e=document.createElement("div");e.className="connection-error-content";const t=document.createElement("p");if(t.className="connection-error-message",t.textContent=n.message,e.appendChild(t),n.suggestions.length>0){const o=document.createElement("div");o.className="connection-error-troubleshooting";const s=document.createElement("h3");s.textContent="💡 Troubleshooting Tips",o.appendChild(s);const a=document.createElement("ul");a.setAttribute("role","list"),n.suggestions.forEach(r=>{const i=document.createElement("li");i.textContent=r,a.appendChild(i)}),o.appendChild(a),e.appendChild(o)}return e}function ti(n,e,t){return new Promise(o=>{const s=Qr(n,e),a=$n[e],r=ei(s);console.error(`[${e}] Connection error:`,n),S(`${s.title}. ${s.message}`,"assertive");let i=null;const c=[];c.push({text:"Dismiss",variant:"secondary",onClick:()=>{i?.(),o(!1)}}),s.canRetry&&c.push({text:"Try Again",variant:"primary",onClick:()=>{i?.(),t&&t(),o(!0)}}),i=Ke({title:s.title,icon:a,content:r,buttons:c,closeOnOverlay:!0,onClose:()=>o(!1)})})}function ni(n,e){const t=In[n],o=$n[n],s=document.createElement("div");s.className="connection-error-content";const a=document.createElement("p");a.className="connection-error-message",a.textContent=`Lost connection to your ${t.toLowerCase()} and automatic reconnection failed.`,s.appendChild(a);const r=document.createElement("div");r.className="connection-error-troubleshooting";const i=document.createElement("h3");i.textContent="💡 To reconnect:",r.appendChild(i);const c=document.createElement("ul");c.setAttribute("role","list"),["Make sure the sensor is still powered on","Move closer to the sensor",'Click "Try Again" to reconnect manually'].forEach(p=>{const d=document.createElement("li");d.textContent=p,c.appendChild(d)}),r.appendChild(c),s.appendChild(r),S(`${t} connection lost. Automatic reconnection failed.`,"assertive");let l=null;l=Ke({title:"Connection Lost",icon:o,content:s,buttons:[{text:"Dismiss",variant:"secondary",onClick:()=>{l?.()}},{text:"Try Again",variant:"primary",onClick:()=>{l?.(),e?.()}}],closeOnOverlay:!0})}const oi={power:"⚡",heartrate:"❤️",cadence:"🚴",speed:"💨",distance:"📏",altitude:"🏔️",gps:"📍",treadmill:"🏃",treadmillSpeed:"🏃"},ct=n=>n.charAt(0).toUpperCase()+n.slice(1),si=({connectionsState:n,measurementsState:e})=>{const t=(c,l,p)=>{const d=Ze[c]?.connect;if(!d)return;const m=ct(c),u=oi[c];switch(l){case"connected":p?d.textContent=`${u} Disconnect ${m} (${p})`:d.textContent=`${u} Disconnect ${m}`;break;case"reconnecting":d.textContent=`${u} Reconnecting ${m}...`;break;case"disconnected":d.textContent=`${u} Connect ${m}`;break}},o=c=>{const l=n[c];if(l&&typeof l.disconnect=="function"){l.disconnect(),l.disconnect=null,l.isConnected=!1,t(c,"disconnected");const p=Ze[c]?.display;p&&(p.textContent="--")}},s=(c,l)=>p=>{const d=ct(c);switch(p){case"connected":t(c,"connected",l),H(`${d} sensor reconnected`,"success");break;case"reconnecting":t(c,"reconnecting");break;case"failed":n[c]&&(n[c].isConnected=!1,n[c].disconnect=null),t(c,"disconnected"),ni(c,()=>a(c));break}},a=async c=>{try{t(c,"reconnecting");let l;if(c==="treadmill")l=await Xr(),l.addListener(h=>{e.addTreadmillData(h)});else if(c==="power")l=await Jr(),l.addListener(h=>{e.addPower(h)});else if(c==="heartrate")l=await Kr(),l.addListener(h=>{e.addHeartrate(h)});else if(c==="cadence")l=await Gr(),l.addListener(h=>{e.addCadence(h)});else return;const{disconnect:p,deviceName:d,onStatusChange:m}=l,u=n[c];u&&(u.disconnect=p,u.isConnected=!0),t(c,"connected",d),H(`Connected to ${ct(c)}`,"success"),m&&m(s(c,d||"Sensor"))}catch(l){t(c,"disconnected"),await ti(l,c,()=>a(c))||n[c]&&(n[c].isConnected=!1)}},r=c=>{const l=Ze[c]?.connect;l&&l.addEventListener("click",()=>{n[c]?.isConnected?o(c):a(c)})};["power","heartrate","cadence","treadmill"].forEach(r)};class ai{isStreaming=!1;isPaused=!1;streamName=null;streamInterval=null;measurementsState;timeState;constructor(e,t){this.measurementsState=e,this.timeState=t}async startStreaming(e){if(this.isStreaming)return this.streamName;try{const t=e||`workout-${Date.now()}`,o=await dr(t);if(!o.success)throw new Error("Failed to create stream");return this.streamName=o.streamName,this.isStreaming=!0,this.isPaused=!1,this._startStreamingLoop(),this.streamName}catch(t){throw console.error("Failed to start streaming:",t),this.streamName=null,t}}pauseStreaming(){this.isStreaming&&(this.isPaused=!0)}resumeStreaming(){this.isStreaming&&(this.isPaused=!1)}async stopStreaming(){this.isStreaming&&(this.isStreaming=!1,this.isPaused=!1,this.streamInterval&&(clearInterval(this.streamInterval),this.streamInterval=null),this.streamName=null)}getStatus(){return{isStreaming:this.isStreaming,isPaused:this.isPaused,streamName:this.streamName}}_startStreamingLoop(){this.streamInterval=setInterval(async()=>{if(!(!this.isStreaming||this.isPaused||!this.timeState.running))try{await this._sendCurrentData()}catch(e){console.error("Error sending workout data:",e)}},1e3)}async _sendCurrentData(){if(!this.streamName)return;const e=this._getLatestValue("power"),t=this._getLatestValue("cadence"),o=this._getLatestValue("heartrate"),s=this._getLatestValue("speed"),a=this._getLatestValue("distance"),r=this._getLatestValue("altitude"),i=this._getLatestTreadmillIncline();if(e===null&&t===null&&o===null&&s===null&&a===null&&r===null&&i===null)return;const c=this.timeState.running&&this.timeState.startTime?Date.now()-this.timeState.startTime:this.timeState.endTime&&this.timeState.startTime?this.timeState.endTime-this.timeState.startTime:0;await gr(this.streamName,{timestamp:Date.now(),elapsed:Math.floor(c/1e3).toString(),power:e,cadence:t,heartrate:o,speed:s,distance:a,altitude:r,incline:i})}_getLatestValue(e){const t=this.measurementsState[e];if(!Array.isArray(t)||t.length===0)return null;const o=t[t.length-1];return Date.now()-o.timestamp>5e3?null:o.value}_getLatestTreadmillIncline(){const e=this.measurementsState.treadmill;if(!Array.isArray(e)||e.length===0)return null;const t=e[e.length-1];return Date.now()-t.timestamp>5e3?null:t.incline}}function ri({measurementsState:n,connectionsState:e,timeState:t}){return si({connectionsState:e,measurementsState:n}),{streamManager:new ai(n,t)}}const{measurementsState:Ct,connectionsState:Lt,timeState:An}=Xn();Qn({measurementsState:Ct,connectionsState:Lt});const{streamManager:ii}=ri({measurementsState:Ct,connectionsState:Lt,timeState:An});Pr({measurementsState:Ct,timeState:An,connectionsState:Lt,streamManager:ii});const Mn=$s();Mn.start();window.router=Mn;console.log("Bike Power Tracker initialized");export{wt as W,Cn as h,di as m,li as w};
//# sourceMappingURL=index-RddhR7sC.js.map
