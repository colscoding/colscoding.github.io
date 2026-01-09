(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();class fe extends HTMLElement{shadow;_initialized=!1;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._initialized||(this.render(),this.setupEventListeners(),this._initialized=!0),this.onConnected()}disconnectedCallback(){this.onDisconnected()}attributeChangedCallback(e,t,o){t!==o&&this._initialized&&this.onAttributeChanged(e,t,o)}getBaseStyles(){return`
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
        `}setupEventListeners(){}onConnected(){}onDisconnected(){}onAttributeChanged(e,t,o){}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}query(e){return this.shadow.querySelector(e)}queryAll(e){return this.shadow.querySelectorAll(e)}}const $t={1:{bg:"rgba(74, 144, 226, 0.15)",text:"#2563eb",border:"#3b82f6"},2:{bg:"rgba(34, 197, 94, 0.15)",text:"#16a34a",border:"#22c55e"},3:{bg:"rgba(234, 179, 8, 0.15)",text:"#ca8a04",border:"#eab308"},4:{bg:"rgba(249, 115, 22, 0.15)",text:"#ea580c",border:"#f97316"},5:{bg:"rgba(239, 68, 68, 0.15)",text:"#dc2626",border:"#ef4444"},6:{bg:"rgba(168, 85, 247, 0.15)",text:"#9333ea",border:"#a855f7"},7:{bg:"rgba(236, 72, 153, 0.15)",text:"#db2777",border:"#ec4899"}};class Nn extends fe{static get observedAttributes(){return["label","value","unit","icon","zone","zone-name","connected","show-avg"]}getStyles(){return`
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
        `}getTemplate(){const e=this.getAttribute("label")||"",t=this.getAttribute("value")||"--",o=this.getAttribute("unit")||"",s=this.getAttribute("icon")||"",a=this.getAttribute("zone-name")||"",i=this.hasAttribute("show-avg"),r=this.getAttribute("connected")!=="false";return`
            <div class="label">
                ${s?`<span class="icon" aria-hidden="true">${s}</span>`:""}
                <span>${e}</span>
            </div>
            <div class="value-container">
                <span class="value ${r?"":"disconnected"}" 
                      aria-live="polite" 
                      aria-label="${e}: ${t} ${o}">
                    ${t}${i?'<span class="avg-indicator">(3s)</span>':""}
                </span>
                ${o?`<span class="unit">${o}</span>`:""}
            </div>
            <div class="zone-badge" aria-live="polite">
                ${a?`Zone: ${a}`:""}
            </div>
        `}onAttributeChanged(e,t,o){e==="zone"&&this.updateZoneStyles(o),this.render()}updateZoneStyles(e){if(e&&$t[e]){const t=$t[e];this.style.setProperty("--zone-bg-color",t.bg),this.style.setProperty("--zone-text-color",t.text),this.style.setProperty("--zone-border-color",t.border),this.style.backgroundColor=t.bg}else this.style.removeProperty("--zone-bg-color"),this.style.removeProperty("--zone-text-color"),this.style.removeProperty("--zone-border-color"),this.style.backgroundColor=""}setValue(e){this.setAttribute("value",String(e))}setZone(e,t){e!==null?(this.setAttribute("zone",String(e)),t&&this.setAttribute("zone-name",t)):(this.removeAttribute("zone"),this.removeAttribute("zone-name"))}setConnected(e){this.setAttribute("connected",String(e))}}customElements.define("bpt-metric-display",Nn);const ye=[{name:"Recovery",min:0,max:.55,color:"#4a90d9"},{name:"Endurance",min:.55,max:.75,color:"#22c55e"},{name:"Tempo",min:.75,max:.9,color:"#eab308"},{name:"Threshold",min:.9,max:1.05,color:"#f97316"},{name:"VO2max",min:1.05,max:1.2,color:"#ef4444"},{name:"Anaerobic",min:1.2,max:1.5,color:"#a855f7"},{name:"Neuromuscular",min:1.5,max:2,color:"#ec4899"}];class Rn extends fe{animationFrame=null;currentDisplayValue=0;static get observedAttributes(){return["value","ftp","max","show-zones","size"]}getStyles(){return`
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
        `}getTemplate(){const e=parseInt(this.getAttribute("size")||"200",10);this.style.setProperty("--gauge-size",`${e}px`);const t=parseInt(this.getAttribute("value")||"0",10),o=parseInt(this.getAttribute("ftp")||"200",10),s=parseInt(this.getAttribute("max")||"500",10),a=this.getAttribute("show-zones")!=="false",i=80,r=2*Math.PI*i,c=r*.75,d=o>0?t/o:0,p=this.getZone(d),l=p?p.color:"#2196F3",m=Math.min(t/s,1),u=c*(1-m);return`
            <div class="gauge-container">
                <svg class="gauge-svg" viewBox="0 0 200 200">
                    <!-- Background arc -->
                    <circle 
                        class="gauge-background"
                        cx="100" cy="100" r="${i}"
                        stroke-dasharray="${c} ${r}"
                    />
                    
                    ${a?this.renderZoneArcs(i,c,r,d):""}
                    
                    <!-- Value arc -->
                    <circle 
                        class="gauge-value-arc ${d>1.2?"high-power":""}"
                        cx="100" cy="100" r="${i}"
                        stroke-dasharray="${c} ${r}"
                        stroke-dashoffset="${u}"
                        style="stroke: ${l}"
                    />
                </svg>
                
                <div class="gauge-center">
                    <div class="gauge-value" style="color: ${l}">${t}</div>
                    <div class="gauge-unit">watts</div>
                    ${p?`<div class="gauge-zone-label" style="color: ${l}">${p.name}</div>`:""}
                    ${o>0?`<div class="gauge-ftp">FTP: ${o}W</div>`:""}
                </div>
            </div>
        `}renderZoneArcs(e,t,o,s){const a=parseInt(this.getAttribute("ftp")||"200",10),i=parseInt(this.getAttribute("max")||"500",10);return a<=0?"":ye.map((r,c)=>{const d=r.min*a/i,p=Math.min(r.max*a/i,1),l=(p-d)*t,m=t*(1-p);return`
                <circle 
                    class="gauge-zone ${s>=r.min&&s<r.max?"active":""}"
                    cx="100" cy="100" r="${e}"
                    stroke="${r.color}"
                    stroke-dasharray="${l} ${o}"
                    stroke-dashoffset="${m}"
                    data-zone="${c+1}"
                />
            `}).join("")}getZone(e){for(const t of ye)if(e>=t.min&&e<t.max)return t;return e>=ye[ye.length-1].max?ye[ye.length-1]:null}onAttributeChanged(){this.render()}onDisconnected(){this.animationFrame&&cancelAnimationFrame(this.animationFrame)}animateToValue(e,t=300){const o=this.currentDisplayValue,s=performance.now(),a=i=>{const r=i-s,c=Math.min(r/t,1),d=1-Math.pow(1-c,3),p=Math.round(o+(e-o)*d);this.currentDisplayValue=p,this.setAttribute("value",String(p)),c<1&&(this.animationFrame=requestAnimationFrame(a))};this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(a)}setValue(e,t=!1){t?this.animateToValue(e):(this.currentDisplayValue=e,this.setAttribute("value",String(e)))}setFTP(e){this.setAttribute("ftp",String(e))}}customElements.define("bpt-power-gauge",Rn);const At={1:{bg:"rgba(74, 144, 226, 0.15)",fill:"#3b82f6",text:"#2563eb"},2:{bg:"rgba(34, 197, 94, 0.15)",fill:"#22c55e",text:"#16a34a"},3:{bg:"rgba(234, 179, 8, 0.15)",fill:"#eab308",text:"#ca8a04"},4:{bg:"rgba(249, 115, 22, 0.15)",fill:"#f97316",text:"#ea580c"},5:{bg:"rgba(239, 68, 68, 0.15)",fill:"#ef4444",text:"#dc2626"},6:{bg:"rgba(168, 85, 247, 0.15)",fill:"#a855f7",text:"#9333ea"},7:{bg:"rgba(236, 72, 153, 0.15)",fill:"#ec4899",text:"#db2777"}};class On extends fe{static get observedAttributes(){return["zone","zone-name","percent","type","compact"]}getStyles(){return`
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
        `}onAttributeChanged(e,t,o){e==="zone"&&this.updateZoneStyles(o),e==="percent"&&this.updateGaugeFill(parseFloat(o||"0")),(e==="zone"||e==="zone-name")&&this.render()}updateZoneStyles(e){if(e&&At[e]){const t=At[e];this.style.setProperty("--zone-bg-color",t.bg),this.style.setProperty("--zone-fill-color",t.fill),this.style.setProperty("--zone-text-color",t.text)}else this.style.removeProperty("--zone-bg-color"),this.style.removeProperty("--zone-fill-color"),this.style.removeProperty("--zone-text-color")}updateGaugeFill(e){const t=this.shadow.querySelector(".gauge-fill"),o=this.shadow.querySelector(".gauge-container");t&&(t.style.width=`${Math.max(4,e)}%`),o&&o.setAttribute("aria-valuenow",String(e))}setZone(e,t,o){this.setAttribute("zone",String(e)),this.setAttribute("zone-name",t),this.setAttribute("percent",String(Math.round(o))),this.updateZoneStyles(String(e))}clear(){this.removeAttribute("zone"),this.removeAttribute("zone-name"),this.setAttribute("percent","0")}}customElements.define("bpt-zone-gauge",On);const ve={power:{color:"#f97316",gradientStart:"rgba(249, 115, 22, 0.4)",gradientEnd:"rgba(249, 115, 22, 0.05)",label:"Power",unit:"W",defaultMax:400},heartrate:{color:"#ef4444",gradientStart:"rgba(239, 68, 68, 0.4)",gradientEnd:"rgba(239, 68, 68, 0.05)",label:"Heart Rate",unit:"bpm",defaultMax:200}};class Vn extends fe{_data=[];_animationId=null;_lastRenderTime=0;_isVisible=!0;_duration=60;_maxValue;_type;_svgPath=null;_svgArea=null;_currentValueEl=null;_avgValueEl=null;static get observedAttributes(){return["type","duration","max-value","hidden"]}constructor(){super(),this._type="power",this._maxValue=ve.power.defaultMax}getStyles(){return`
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
        `}getTemplate(){const e=ve[this._type]||ve.power;return`
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
        `}onConnected(){this._svgPath=this.shadow.getElementById("chartLine"),this._svgArea=this.shadow.getElementById("chartArea"),this._currentValueEl=this.shadow.getElementById("currentValue"),this._avgValueEl=this.shadow.getElementById("avgValue");const e=ve[this._type]||ve.power;this.style.setProperty("--chart-color",e.color),this.startAnimation(),document.addEventListener("visibilitychange",this.handleVisibilityChange)}onDisconnected(){this.stopAnimation(),document.removeEventListener("visibilitychange",this.handleVisibilityChange)}onAttributeChanged(e,t,o){switch(e){case"type":this._type=o||"power",this._maxValue=ve[this._type]?.defaultMax||400,this.render(),this.onConnected();break;case"duration":this._duration=parseInt(o||"60",10),this.render();break;case"max-value":this._maxValue=parseInt(o||"400",10),this.render();break;case"hidden":this._isVisible=o===null,this._isVisible?this.startAnimation():this.stopAnimation();break}}handleVisibilityChange=()=>{document.hidden?this.stopAnimation():this._isVisible&&this.startAnimation()};addDataPoint(e,t=Date.now()){this._data.push({timestamp:t,value:e});const o=t-(this._duration+5)*1e3;for(;this._data.length>0&&this._data[0].timestamp<o;)this._data.shift();e>this._maxValue*.9&&(this._maxValue=Math.ceil(e*1.2/50)*50)}clear(){this._data=[],this.renderChart()}startAnimation(){if(this._animationId!==null)return;const e=t=>{t-this._lastRenderTime>=33&&(this.renderChart(),this._lastRenderTime=t),this._animationId=requestAnimationFrame(e)};this._animationId=requestAnimationFrame(e)}stopAnimation(){this._animationId!==null&&(cancelAnimationFrame(this._animationId),this._animationId=null)}renderChart(){if(!this._svgPath||!this._svgArea)return;const t=Date.now()-this._duration*1e3,o=this._data.filter(d=>d.timestamp>=t),s=this.shadow.getElementById("noDataMessage");if(s&&(s.style.display=o.length===0?"block":"none"),o.length===0){this._svgPath.setAttribute("d",""),this._svgArea.setAttribute("d","M0,80 L300,80");return}const a=300,i=80,r=[],c=[];if(o.forEach(d=>{const p=(d.timestamp-t)/(this._duration*1e3)*a,l=i-Math.min(d.value,this._maxValue)/this._maxValue*i;r.push(`${p.toFixed(1)},${l.toFixed(1)}`),c.push(`${p.toFixed(1)},${l.toFixed(1)}`)}),r.length>0){const d="M"+r.join(" L");this._svgPath.setAttribute("d",d);const p=(o[0].timestamp-t)/(this._duration*1e3)*a,l=(o[o.length-1].timestamp-t)/(this._duration*1e3)*a,m=`M${p.toFixed(1)},${i} L`+c.join(" L")+` L${l.toFixed(1)},${i} Z`;this._svgArea.setAttribute("d",m)}if(this._currentValueEl&&o.length>0){const d=o[o.length-1].value;this._currentValueEl.textContent=Math.round(d).toString()}if(this._avgValueEl&&o.length>0){const d=o.reduce((p,l)=>p+l.value,0)/o.length;this._avgValueEl.textContent=Math.round(d).toString()}}getData(){return[...this._data]}}customElements.define("bpt-live-chart",Vn);class Fn extends fe{intervalId=null;startTimestamp=0;pausedElapsed=0;static get observedAttributes(){return["elapsed","state","show-milliseconds"]}getStyles(){return`
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
        `}formatTime(e,t=!1){const o=Math.floor(e/3600),s=Math.floor(e%3600/60),a=Math.floor(e%60),i=c=>c.toString().padStart(2,"0");let r=`${i(o)}:${i(s)}:${i(a)}`;if(t){const c=Math.floor(e%1*100);r+=`<span class="milliseconds">.${i(c)}</span>`}return r}onAttributeChanged(e){e==="state"&&this.handleStateChange(),this.render()}handleStateChange(){const e=this.getAttribute("state");e==="recording"&&!this.intervalId?this.startTicking():e!=="recording"&&this.intervalId&&this.stopTicking()}startTicking(){this.startTimestamp=Date.now()-this.pausedElapsed*1e3,this.intervalId=window.setInterval(()=>{const e=(Date.now()-this.startTimestamp)/1e3;this.setAttribute("elapsed",String(e))},100)}stopTicking(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null),this.pausedElapsed=parseFloat(this.getAttribute("elapsed")||"0")}onDisconnected(){this.stopTicking()}start(){this.setAttribute("state","recording"),this.emit("timer-start")}pause(){this.setAttribute("state","paused"),this.emit("timer-pause")}resume(){this.setAttribute("state","recording"),this.emit("timer-resume")}stop(){this.setAttribute("state","idle"),this.pausedElapsed=0,this.emit("timer-stop",{elapsed:parseFloat(this.getAttribute("elapsed")||"0")})}reset(){this.pausedElapsed=0,this.startTimestamp=Date.now(),this.setAttribute("elapsed","0"),this.emit("timer-reset")}getElapsed(){return parseFloat(this.getAttribute("elapsed")||"0")}getState(){return this.getAttribute("state")||"idle"}}customElements.define("bpt-workout-timer",Fn);const Bt={info:{bg:"#1d4ed8",icon:"ℹ️"},success:{bg:"#15803d",icon:"✅"},error:{bg:"#b91c1c",icon:"❌"},warning:{bg:"#a16207",icon:"⚠️"}};class le extends fe{timeoutId=null;static get observedAttributes(){return["message","type","duration","dismissible"]}getStyles(){return`
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
        `}getTemplate(){const e=this.getAttribute("message")||"",t=this.getAttribute("type")||"info",o=this.getAttribute("dismissible")!=="false",s=Bt[t]||Bt.info;return this.style.setProperty("--toast-bg",s.bg),`
            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <span class="icon" aria-hidden="true">${s.icon}</span>
                <span class="message">${e}</span>
                ${o?`
                    <button class="dismiss-btn" aria-label="Dismiss notification">&times;</button>
                `:""}
            </div>
        `}setupEventListeners(){const e=this.query(".dismiss-btn");e&&e.addEventListener("click",()=>this.dismiss())}onConnected(){requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.classList.add("visible")})});const e=parseInt(this.getAttribute("duration")||"3000",10);e>0&&(this.timeoutId=window.setTimeout(()=>this.dismiss(),e))}onDisconnected(){this.timeoutId&&clearTimeout(this.timeoutId)}dismiss(){this.timeoutId&&clearTimeout(this.timeoutId),this.classList.remove("visible"),this.classList.add("hiding"),setTimeout(()=>{this.remove()},300)}static show(e,t="info",o={}){const s=document.createElement("bpt-toast");return s.setAttribute("message",e),s.setAttribute("type",t),o.duration!==void 0&&s.setAttribute("duration",String(o.duration)),o.dismissible!==void 0&&s.setAttribute("dismissible",String(o.dismissible)),document.body.appendChild(s),s}static info(e,t){return le.show(e,"info",t)}static success(e,t){return le.show(e,"success",t)}static error(e,t){return le.show(e,"error",t)}static warning(e,t){return le.show(e,"warning",t)}}customElements.define("bpt-toast",le);class Hn extends fe{previousActiveElement=null;focusTrapHandler=null;static get observedAttributes(){return["title","icon","open","close-on-overlay"]}getStyles(){return`
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
        `}setupEventListeners(){this.query(".close-btn")?.addEventListener("click",()=>this.close()),this.query(".overlay")?.addEventListener("click",()=>{this.getAttribute("close-on-overlay")!=="false"&&this.close()}),this.addEventListener("keydown",o=>{o.key==="Escape"&&this.close()}),this.addEventListener("click",o=>{const a=o.target.dataset?.action;a&&(this.emit("modal-action",{action:a}),(a==="cancel"||a==="confirm")&&this.close())})}onConnected(){this.hasAttribute("open")&&this.onOpen()}onAttributeChanged(e,t,o){e==="open"&&(o!==null?this.onOpen():this.onClose())}onOpen(){this.previousActiveElement=document.activeElement,this.setupFocusTrap(),requestAnimationFrame(()=>{this.shadow.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')?.focus()}),this.emit("modal-open")}onClose(){this.removeFocusTrap(),this.previousActiveElement?.focus(),this.emit("modal-close")}setupFocusTrap(){this.focusTrapHandler=e=>{if(e.key!=="Tab")return;const t=this.shadow.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=t[0],s=t[t.length-1];e.shiftKey&&document.activeElement===o?(e.preventDefault(),s?.focus()):!e.shiftKey&&document.activeElement===s&&(e.preventDefault(),o?.focus())},this.addEventListener("keydown",this.focusTrapHandler)}removeFocusTrap(){this.focusTrapHandler&&(this.removeEventListener("keydown",this.focusTrapHandler),this.focusTrapHandler=null)}open(){this.setAttribute("open","")}close(){this.removeAttribute("open")}toggle(){this.hasAttribute("open")?this.close():this.open()}static confirm(e){return new Promise(t=>{const o=document.createElement("bpt-modal");o.setAttribute("title",e.title),e.icon&&o.setAttribute("icon",e.icon);const s=document.createElement("div");typeof e.message=="string"?s.innerHTML=`<p>${e.message}</p>`:s.appendChild(e.message),o.appendChild(s);const a=document.createElement("div");a.setAttribute("slot","footer");const i=document.createElement("button");i.className="btn btn-secondary",i.textContent=e.cancelText||"Cancel",i.dataset.action="cancel";const r=document.createElement("button");r.className=`btn btn-${e.variant||"primary"}`,r.textContent=e.confirmText||"Confirm",r.dataset.action="confirm",a.appendChild(i),a.appendChild(r),o.appendChild(a),o.addEventListener("modal-action",(c=>{t(c.detail.action==="confirm"),o.remove()})),o.addEventListener("modal-close",()=>{t(!1),o.remove()}),document.body.appendChild(o),o.open()})}static alert(e,t,o){return new Promise(s=>{const a=document.createElement("bpt-modal");a.setAttribute("title",e),o&&a.setAttribute("icon",o);const i=document.createElement("p");i.textContent=t,a.appendChild(i);const r=document.createElement("div");r.setAttribute("slot","footer");const c=document.createElement("button");c.className="btn btn-primary",c.textContent="OK",c.dataset.action="confirm",r.appendChild(c),a.appendChild(r),a.addEventListener("modal-close",()=>{s(),a.remove()}),document.body.appendChild(a),a.open()})}}customElements.define("bpt-modal",Hn);const Un="BikeTrackerDB",zn=4,ne="activeWorkout",oe="completedWorkouts",se="rawDebugData";let Oe=null;async function X(){return Oe||new Promise((n,e)=>{const t=indexedDB.open(Un,zn);t.onerror=()=>{console.error("Failed to open IndexedDB:",t.error),e(t.error)},t.onsuccess=()=>{Oe=t.result,n(Oe)},t.onupgradeneeded=o=>{const s=o.target.result;if(s.objectStoreNames.contains(ne)||s.createObjectStore(ne,{keyPath:"id"}),s.objectStoreNames.contains(oe)||s.createObjectStore(oe,{keyPath:"id"}).createIndex("startTime","startTime",{unique:!1}),!s.objectStoreNames.contains(se)){const a=s.createObjectStore(se,{keyPath:"id",autoIncrement:!0});a.createIndex("timestamp","timestamp",{unique:!1}),a.createIndex("sensor","sensor",{unique:!1})}}})}async function Wn(n,e){try{const t=await X(),o={timestamp:Date.now(),sensor:n,data:e};return new Promise((s,a)=>{const c=t.transaction([se],"readwrite").objectStore(se).add(o);c.onsuccess=()=>s(),c.onerror=()=>a(c.error)})}catch(t){console.warn("Could not save debug log:",t)}}async function Mt(){try{const n=await X();return new Promise((e,t)=>{const i=n.transaction([se],"readonly").objectStore(se).index("timestamp").getAll();i.onsuccess=()=>e(i.result||[]),i.onerror=()=>t(i.error)})}catch(n){return console.warn("Could not load debug logs:",n),[]}}async function qn(){try{const n=await X();return new Promise((e,t)=>{const a=n.transaction([se],"readwrite").objectStore(se).clear();a.onsuccess=()=>e(),a.onerror=()=>t(a.error)})}catch(n){console.warn("Could not clear debug logs:",n)}}async function un(n,e){try{const t=await X(),o={id:"current",startTime:e??Date.now(),lastUpdated:Date.now(),heartrate:n.heartrate,power:n.power,cadence:n.cadence,speed:n.speed,distance:n.distance,altitude:n.altitude,gps:n.gps,treadmill:n.treadmill||[],laps:n.laps||[]};return new Promise((s,a)=>{const c=t.transaction([ne],"readwrite").objectStore(ne).put(o);c.onsuccess=()=>s(),c.onerror=()=>a(c.error)})}catch(t){console.warn("Could not save active workout:",t)}}async function bt(){try{const n=await X();return new Promise((e,t)=>{const a=n.transaction([ne],"readwrite").objectStore(ne).delete("current");a.onsuccess=()=>e(),a.onerror=()=>t(a.error)})}catch(n){console.warn("Could not clear active workout:",n)}}async function Et(){try{const n=await X();return new Promise((e,t)=>{const a=n.transaction([ne],"readonly").objectStore(ne).get("current");a.onsuccess=()=>{if(a.result){const i=a.result;i.treadmill||(i.treadmill=[]),i.laps||(i.laps=[]),e(i)}else e(null)},a.onerror=()=>t(a.error)})}catch(n){return console.warn("Could not load active workout:",n),null}}async function jn(n,e,t){const o=`workout_${e}`;try{const s=await X(),a={id:o,startTime:e,lastUpdated:t,isCompleted:!0,measurements:{...n},synced:!1};return new Promise((i,r)=>{const p=s.transaction([oe],"readwrite").objectStore(oe).put(a);p.onsuccess=()=>i(o),p.onerror=()=>r(p.error)})}catch(s){throw console.error("Failed to save completed workout:",s),s}}async function Zn(){try{const n=await X();return new Promise((e,t)=>{const i=n.transaction([oe],"readonly").objectStore(oe).index("startTime").getAll();i.onsuccess=()=>{e((i.result||[]).reverse())},i.onerror=()=>t(i.error)})}catch(n){return console.warn("Could not load workout history:",n),[]}}let be=null,G=null;const Yn=(n,e,t)=>{G={measurements:n,startTime:e},be||(be=setTimeout(async()=>{G&&(await un(G.measurements,G.startTime),G=null),be=null},2e3))},mt=async()=>{be&&(clearTimeout(be),be=null),G&&(await un(G.measurements,G.startTime),G=null)},pt=()=>typeof window<"u"&&"indexedDB"in window,Gn=async()=>{await mt();const n=await Et();return n?(await jn({heartrate:n.heartrate,power:n.power,cadence:n.cadence,speed:n.speed,distance:n.distance,altitude:n.altitude,gps:n.gps,treadmill:n.treadmill,laps:n.laps},n.startTime,n.lastUpdated),await bt(),`workout_${n.startTime}`):null},Kn=async()=>!!await Et(),mn=Zn,Jn=async n=>{const e=await X();return new Promise((t,o)=>{const a=e.transaction(oe,"readwrite").objectStore(oe),i=a.get(n);i.onsuccess=()=>{const r=i.result;r?(r.synced=!0,r.syncedTime=Date.now(),a.put(r),t()):o(new Error("Workout not found"))},i.onerror=()=>o(i.error)})};function Xn(n,e,t,o){const a=n*Math.PI/180,i=t*Math.PI/180,r=(t-n)*Math.PI/180,c=(o-e)*Math.PI/180,d=Math.sin(r/2)*Math.sin(r/2)+Math.cos(a)*Math.cos(i)*Math.sin(c/2)*Math.sin(c/2);return 6371e3*(2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)))}const re={heartrate:{min:0,max:300},power:{min:0,max:3e3},cadence:{min:0,max:300},speed:{min:0,max:150},distance:{min:0,max:1e6},altitude:{min:-500,max:9e3}};class Qn{heartrate=[];power=[];cadence=[];speed=[];distance=[];altitude=[];gps=[];treadmill=[];treadmillSpeed=[];laps=[];_persistenceEnabled;_startTime=null;_onChangeCallbacks=[];constructor(e=!0){this._persistenceEnabled=e&&pt(),this._persistenceEnabled&&typeof window<"u"&&(window.addEventListener("beforeunload",()=>{mt()}),document.addEventListener("visibilitychange",()=>{document.hidden&&mt()}))}setStartTime(e){this._startTime=e}getStartTime(){return this._startTime}onChange(e){this._onChangeCallbacks.push(e)}offChange(e){const t=this._onChangeCallbacks.indexOf(e);t>-1&&this._onChangeCallbacks.splice(t,1)}_notifyChange(){for(const e of this._onChangeCallbacks)try{e()}catch(t){console.error("State change callback error:",t)}this._persistenceEnabled&&Yn(this.toJSON(),this._startTime)}addHeartrate(e){const{min:t,max:o}=re.heartrate;if(e.value<=t||e.value>=o){console.warn(`Invalid heartrate value: ${e.value}`);return}this.heartrate.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addPower(e){const{min:t,max:o}=re.power;if(e.value<t||e.value>=o){console.warn(`Invalid power value: ${e.value}`);return}this.power.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addCadence(e){const{min:t,max:o}=re.cadence;if(e.value<t||e.value>=o){console.warn(`Invalid cadence value: ${e.value}`);return}this.cadence.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addSpeed(e){const{min:t,max:o}=re.speed;if(e.value<t||e.value>=o){console.warn(`Invalid speed value: ${e.value}`);return}this.speed.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addDistance(e){const{min:t,max:o}=re.distance;if(e.value<t||e.value>=o){console.warn(`Invalid distance value: ${e.value}`);return}this.distance.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addAltitude(e){const{min:t,max:o}=re.altitude;if(e.value<t||e.value>=o){console.warn(`Invalid altitude value: ${e.value}`);return}this.altitude.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addTreadmillSpeed(e){const{min:t,max:o}=re.speed;if(e.value<t||e.value>=o){console.warn(`Invalid treadmill speed value: ${e.value}`);return}this.treadmillSpeed.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addGps(e){if(this.gps.length>0){const t=this.gps[this.gps.length-1],o=Xn(t.lat,t.lon,e.lat,e.lon);let s=0;this.distance.length>0&&(s=this.distance[this.distance.length-1].value),this.addDistance({timestamp:e.timestamp,value:s+o})}else this.distance.length===0&&this.addDistance({timestamp:e.timestamp,value:0});e.speed!==null&&this.addSpeed({timestamp:e.timestamp,value:e.speed*3.6}),e.altitude!==null&&this.addAltitude({timestamp:e.timestamp,value:e.altitude}),this.gps.push(e),this._notifyChange()}add(e,t){switch(e){case"heartrate":this.addHeartrate(t);break;case"power":this.addPower(t);break;case"cadence":this.addCadence(t);break;case"speed":this.addSpeed(t);break;case"distance":this.addDistance(t);break;case"altitude":this.addAltitude(t);break;case"treadmillSpeed":this.addTreadmillSpeed(t);break;default:throw new Error(`Unknown measurement type: ${e}`)}}async clear(e=!0){this.heartrate=[],this.power=[],this.cadence=[],this.speed=[],this.distance=[],this.altitude=[],this.treadmillSpeed=[],this.laps=[],this._startTime=null,e&&this._persistenceEnabled&&await bt(),this._notifyChange()}addLap(e){const t=Date.now(),o=this.laps.length+1,s={timestamp:t,number:o,elapsedMs:e?t-e:void 0};return this.laps.push(s),this._notifyChange(),s}getLapCount(){return this.laps.length}toJSON(){return{heartrate:[...this.heartrate],power:[...this.power],cadence:[...this.cadence],speed:[...this.speed],distance:[...this.distance],altitude:[...this.altitude],treadmillSpeed:[...this.treadmillSpeed],gps:[...this.gps],laps:[...this.laps]}}restore(e,t){this.heartrate=[...e.heartrate||[]],this.power=[...e.power||[]],this.cadence=[...e.cadence||[]],this.speed=[...e.speed||[]],this.distance=[...e.distance||[]],this.altitude=[...e.altitude||[]],this.treadmillSpeed=[...e.treadmillSpeed||[]],this.laps=[...e.laps||[]],this._startTime=t;for(const o of this._onChangeCallbacks)try{o()}catch(s){console.error("State change callback error:",s)}}setPersistenceEnabled(e){this._persistenceEnabled=e&&pt()}hasData(){return this.heartrate.length>0||this.power.length>0||this.cadence.length>0}getCounts(){return{heartrate:this.heartrate.length,power:this.power.length,cadence:this.cadence.length,speed:this.speed.length,distance:this.distance.length,altitude:this.altitude.length,gps:this.gps.length,treadmillSpeed:this.treadmillSpeed.length}}addTreadmillData(e){if(this.treadmill.push(e),e.speed!=null){const t={timestamp:e.timestamp,value:e.speed};this.addTreadmillSpeed(t),this.addSpeed(t)}e.speed==null&&this._notifyChange()}}const eo=()=>({measurementsState:new Qn,connectionsState:{power:{isConnected:!1,disconnect:null},heartrate:{isConnected:!1,disconnect:null},cadence:{isConnected:!1,disconnect:null},speed:{isConnected:!1,disconnect:null},distance:{isConnected:!1,disconnect:null},altitude:{isConnected:!1,disconnect:null},gps:{isConnected:!1,disconnect:null}},timeState:{running:!1,startTime:null,endTime:null}});function to({measurementsState:n,connectionsState:e}){typeof window<"u"&&(window.bike=n,window.connectionsState=e)}var Ee;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Ee||(Ee={}));class st extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const no=n=>{var e,t;return n?.androidBridge?"android":!((t=(e=n?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},oo=n=>{const e=n.CapacitorCustomPlatform||null,t=n.Capacitor||{},o=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:no(n),a=()=>s()!=="web",i=l=>{const m=d.get(l);return!!(m?.platforms.has(s())||r(l))},r=l=>{var m;return(m=t.PluginHeaders)===null||m===void 0?void 0:m.find(u=>u.name===l)},c=l=>n.console.error(l),d=new Map,p=(l,m={})=>{const u=d.get(l);if(u)return console.warn(`Capacitor plugin "${l}" already registered. Cannot register plugins twice.`),u.proxy;const h=s(),g=r(l);let y;const b=async()=>(!y&&h in m?y=typeof m[h]=="function"?y=await m[h]():y=m[h]:e!==null&&!y&&"web"in m&&(y=typeof m.web=="function"?y=await m.web():y=m.web),y),v=(C,L)=>{var P,_;if(g){const A=g?.methods.find(x=>L===x.name);if(A)return A.rtype==="promise"?x=>t.nativePromise(l,L.toString(),x):(x,D)=>t.nativeCallback(l,L.toString(),x,D);if(C)return(P=C[L])===null||P===void 0?void 0:P.bind(C)}else{if(C)return(_=C[L])===null||_===void 0?void 0:_.bind(C);throw new st(`"${l}" plugin is not implemented on ${h}`,Ee.Unimplemented)}},w=C=>{let L;const P=(..._)=>{const A=b().then(x=>{const D=v(x,C);if(D){const Q=D(..._);return L=Q?.remove,Q}else throw new st(`"${l}.${C}()" is not implemented on ${h}`,Ee.Unimplemented)});return C==="addListener"&&(A.remove=async()=>L()),A};return P.toString=()=>`${C.toString()}() { [capacitor code] }`,Object.defineProperty(P,"name",{value:C,writable:!1,configurable:!1}),P},f=w("addListener"),T=w("removeListener"),I=(C,L)=>{const P=f({eventName:C},L),_=async()=>{const x=await P;T({eventName:C,callbackId:x},L)},A=new Promise(x=>P.then(()=>x({remove:_})));return A.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await _()},A},E=new Proxy({},{get(C,L){switch(L){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return g?I:f;case"removeListener":return T;default:return w(L)}}});return o[l]=E,d.set(l,{name:l,proxy:E,platforms:new Set([...Object.keys(m),...g?[h]:[]])}),E};return t.convertFileSrc||(t.convertFileSrc=l=>l),t.getPlatform=s,t.handleError=c,t.isNativePlatform=a,t.isPluginAvailable=i,t.registerPlugin=p,t.Exception=st,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},so=n=>n.Capacitor=oo(n),R=so(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Te=R.registerPlugin;class xt{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let o=!1;this.listeners[e]||(this.listeners[e]=[],o=!0),this.listeners[e].push(t);const a=this.windowListeners[e];a&&!a.registered&&this.addWindowListener(a),o&&this.sendRetainedArgumentsForEvent(e);const i=async()=>this.removeListener(e,t);return Promise.resolve({remove:i})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,o){const s=this.listeners[e];if(!s){if(o){let a=this.retainedEventArguments[e];a||(a=[]),a.push(t),this.retainedEventArguments[e]=a}return}s.forEach(a=>a(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new R.Exception(e,Ee.Unimplemented)}unavailable(e="not available"){return new R.Exception(e,Ee.Unavailable)}async removeListener(e,t){const o=this.listeners[e];if(!o)return;const s=o.indexOf(t);this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(o=>{this.notifyListeners(e,o)}))}}const Dt=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Pt=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ao extends xt{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[s,a]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Pt(s).trim(),a=Pt(a).trim(),t[s]=a}),t}async setCookie(e){try{const t=Dt(e.key),o=Dt(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,a=(e.path||"/").replace("path=",""),i=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${s}; path=${a}; ${i};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Te("CapacitorCookies",{web:()=>new ao});const ro=async n=>new Promise((e,t)=>{const o=new FileReader;o.onload=()=>{const s=o.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},o.onerror=s=>t(s),o.readAsDataURL(n)}),io=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,a,i)=>(s[a]=n[e[i]],s),{})},co=(n,e=!0)=>n?Object.entries(n).reduce((o,s)=>{const[a,i]=s;let r,c;return Array.isArray(i)?(c="",i.forEach(d=>{r=e?encodeURIComponent(d):d,c+=`${a}=${r}&`}),c.slice(0,-1)):(r=e?encodeURIComponent(i):i,c=`${a}=${r}`),`${o}&${c}`},"").substr(1):null,lo=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=io(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const a=new URLSearchParams;for(const[i,r]of Object.entries(n.data||{}))a.set(i,r);t.body=a.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const a=new FormData;if(n.data instanceof FormData)n.data.forEach((r,c)=>{a.append(c,r)});else for(const r of Object.keys(n.data))a.append(r,n.data[r]);t.body=a;const i=new Headers(t.headers);i.delete("content-type"),t.headers=i}else(s.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class uo extends xt{async request(e){const t=lo(e,e.webFetchExtra),o=co(e.params,e.shouldEncodeUrlParams),s=o?`${e.url}?${o}`:e.url,a=await fetch(s,t),i=a.headers.get("content-type")||"";let{responseType:r="text"}=a.ok?e:{};i.includes("application/json")&&(r="json");let c,d;switch(r){case"arraybuffer":case"blob":d=await a.blob(),c=await ro(d);break;case"json":c=await a.json();break;case"document":case"text":default:c=await a.text()}const p={};return a.headers.forEach((l,m)=>{p[m]=l}),{data:c,headers:p,status:a.status,url:a.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Te("CapacitorHttp",{web:()=>new uo});var _t;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(_t||(_t={}));var Nt;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(Nt||(Nt={}));class mo extends xt{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Te("SystemBars",{web:()=>new mo});const po="modulepreload",ho=function(n){return"/"+n},Rt={},Tt=function(e,t,o){let s=Promise.resolve();if(t&&t.length>0){let c=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(l=>({status:"fulfilled",value:l}),l=>({status:"rejected",reason:l}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),r=i?.nonce||i?.getAttribute("nonce");s=c(t.map(d=>{if(d=ho(d),d in Rt)return;Rt[d]=!0;const p=d.endsWith(".css"),l=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${l}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":po,p||(m.as="script"),m.crossOrigin="",m.href=d,r&&m.setAttribute("nonce",r),document.head.appendChild(m),p)return new Promise((u,h)=>{m.addEventListener("load",u),m.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(i){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i}return s.then(i=>{for(const r of i||[])r.status==="rejected"&&a(r.reason);return e().catch(a)})},Ot=Te("App",{web:()=>Tt(()=>import("./web-CCUh2IfR.js"),[]).then(n=>new n.AppWeb)});class go{views=new Map;routes=[];currentViewId=null;container;isNative;constructor(e){this.container=e,this.isNative=R.isNativePlatform(),window.addEventListener("popstate",()=>{this.handleLocationChange()}),this.isNative&&window.addEventListener("hashchange",()=>{this.handleLocationChange()}),this.isNative&&Ot.addListener("backButton",({canGoBack:t})=>{t?window.history.back():Ot.exitApp()})}registerView(e){this.views.set(e.id,e);let t=document.getElementById(`page-${e.id}`);t||(t=document.createElement("div"),t.id=`page-${e.id}`,t.className="page-view",t.style.display="none",this.container.appendChild(t)),e.init(t)}addRoute(e,t){this.routes.push({path:e,viewId:t})}navigate(e,t=!1){this.isNative?t?window.location.replace("#"+e):window.location.hash=e:(t?window.history.replaceState({},"",e):window.history.pushState({},"",e),this.handleLocationChange())}start(){this.isNative&&(window.location.hash||(window.location.hash="/")),this.handleLocationChange()}back(){window.history.back()}handleLocationChange(){let e;if(this.isNative){const o=window.location.hash;e=o?o.slice(1):"/",(!e||e==="")&&(e="/")}else e=window.location.pathname,(e.endsWith("/index.html")||e.endsWith(".html"))&&(e="/");let t=this.routes.find(o=>o.path===e);t||(t=this.routes.find(o=>o.path==="/")||this.routes[0]),t&&this.switchView(t.viewId)}switchView(e){if(this.currentViewId===e)return;if(this.currentViewId){const o=this.views.get(this.currentViewId);if(o){o.onLeave();const s=document.getElementById(`page-${this.currentViewId}`);s&&(s.style.display="none")}}const t=this.views.get(e);if(t){const o=document.getElementById(`page-${e}`);o&&(o.style.display=""),t.onEnter(),this.currentViewId=e,window.dispatchEvent(new CustomEvent("route-changed",{detail:{viewId:e}}))}}}class fo{id="dashboard";init(e){console.log("Dashboard View initialized")}onEnter(){console.log("Entered Dashboard View")}onLeave(){console.log("Left Dashboard View")}}const Se="https://api.bikepowertracker.com",yo="super-secret-bike-tracker-key";function ke(n={}){const e={...n};return e["X-API-Key"]=yo,e}async function pn(){try{const n=await fetch(`${Se}/health`,{headers:ke()});return n.ok?(await n.json()).database==="connected":!1}catch{return!1}}async function vo({streamName:n,title:e,sport:t="cycling",userId:o}){const s=await fetch(`${Se}/api/workouts`,{method:"POST",headers:ke({"Content-Type":"application/json"}),body:JSON.stringify({streamName:n,title:e,sport:t,userId:o})});if(!s.ok){const a=await s.json();throw new Error(a.error||"Failed to create workout")}return s.json()}async function Ke({page:n=1,limit:e=20,status:t,userId:o,startDate:s,endDate:a,sport:i}={}){const r=new URLSearchParams;r.set("page",n.toString()),r.set("limit",e.toString()),t&&r.set("status",t),o&&r.set("userId",o),s&&r.set("startDate",s.toISOString()),a&&r.set("endDate",a.toISOString()),i&&r.set("sport",i);const c=await fetch(`${Se}/api/workouts?${r}`,{headers:ke()});if(!c.ok){const d=await c.json();throw new Error(d.error||"Failed to list workouts")}return c.json()}async function wo(n,e=!1){const t=new URLSearchParams;e&&t.set("includeTelemetry","true");const o=await fetch(`${Se}/api/workouts/${n}?${t}`,{headers:ke()});if(!o.ok){const s=await o.json();throw new Error(s.error||"Failed to get workout")}return o.json()}async function bo(n,e=!0){const t=await fetch(`${Se}/api/workouts/${n}/complete`,{method:"POST",headers:ke({"Content-Type":"application/json"}),body:JSON.stringify({archiveTelemetry:e})});if(!t.ok){const o=await t.json();throw new Error(o.error||"Failed to complete workout")}return t.json()}async function Eo(n){const e=await fetch(`${Se}/api/workouts/${n}`,{method:"DELETE",headers:ke()});if(!e.ok){const t=await e.json();throw new Error(t.error||"Failed to delete workout")}return e.json()}function he(n){if(!n)return"--";const e=Math.floor(n/3600),t=Math.floor(n%3600/60),o=n%60;return e>0?`${e}h ${t}m`:t>0?`${t}m ${o}s`:`${o}s`}function ae(n){return n?new Date(n).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"--"}const xo="https://api.bikepowertracker.com",To="super-secret-bike-tracker-key";async function So(n){const e={"Content-Type":"application/json"};e["X-API-Key"]=To;const t=await fetch(`${xo}/api/users/${n}/ftp-history`,{headers:e});if(!t.ok)throw new Error(`Failed to fetch FTP history: ${t.statusText}`);return t.json()}function S(n,e="polite"){const t=document.getElementById("srAnnouncements");t&&(t.setAttribute("aria-live",e),t.textContent=n,setTimeout(()=>{t.textContent=""},1e3))}const hn=[];function ie(n){hn.push(n)}function ko(n){const e=n.target;if(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable){n.key==="Escape"&&e.blur();return}for(const t of hn){const o=n.key.toLowerCase()===t.key.toLowerCase(),s=t.ctrl?n.ctrlKey||n.metaKey:!n.ctrlKey&&!n.metaKey,a=t.shift?n.shiftKey:!n.shiftKey,i=t.alt?n.altKey:!n.altKey;if(o&&s&&a&&i){n.preventDefault(),t.action();return}}}function Co(){ie({key:" ",description:"Start/pause/resume workout (context-aware)",action:()=>{const e=document.getElementById("startButton"),t=document.getElementById("pauseButton"),o=document.getElementById("resumeButton");e&&e.style.display!=="none"?e.click():t&&t.style.display!=="none"?t.click():o&&o.style.display!=="none"&&o.click()}}),ie({key:"Escape",description:"Close modal or menu",action:()=>{const e=document.querySelectorAll('.stream-modal[style*="display: block"], .stream-modal:not([style*="display: none"])');for(const o of e)if(o.style.display!=="none"){const s=o.querySelector(".close-button");if(s){s.click(),S("Dialog closed");return}}const t=document.querySelector("details[open]");t&&(t.removeAttribute("open"),S("Menu closed"))}}),ie({key:"m",description:"Toggle menu",action:()=>{const e=document.querySelector("header details");if(e)if(e.hasAttribute("open"))e.removeAttribute("open"),S("Menu closed");else{e.setAttribute("open",""),S("Menu opened");const o=e.querySelector("#controls button");o&&o.focus()}}}),ie({key:"s",description:"Open settings",action:()=>{const e=document.getElementById("settingsButton");e&&(e.click(),S("Settings opened"))}}),ie({key:"h",description:"Open workout history",action:()=>{const e=window.router;if(e)e.navigate("/history"),S("Workout history opened");else{const t=document.getElementById("workoutHistoryButton");t&&(t.click(),S("Workout history opened"))}}}),ie({key:"e",description:"Export workout data",action:()=>{const e=document.getElementById("exportData");e&&e.click()}}),ie({key:"l",description:"Mark lap",action:()=>{const e=document.getElementById("lapButton");e&&e.click()}}),document.addEventListener("keydown",ko);const n=document.querySelector("header summary");n&&n.setAttribute("aria-keyshortcuts","M"),console.log("Keyboard navigation initialized")}function Lo(n){const e=n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(e.length===0)return;const t=e[0],o=e[e.length-1];t.focus(),n.addEventListener("keydown",s=>{s.key==="Tab"&&(s.shiftKey?document.activeElement===t&&(s.preventDefault(),o.focus()):document.activeElement===o&&(s.preventDefault(),t.focus()))})}function Ve(n){const e=document.getElementById("startButton"),t=document.getElementById("pauseButton"),o=document.getElementById("resumeButton"),s=document.getElementById("stopButton");e&&e.setAttribute("aria-label","Start workout"),t&&t.setAttribute("aria-label","Pause workout"),o&&o.setAttribute("aria-label","Resume workout"),s&&s.setAttribute("aria-label","Stop and save workout");const a=document.getElementById("workoutControls");a&&a.setAttribute("data-workout-state",n)}function Io(n){const e=document.createElement("div");e.className="custom-modal",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-labelledby","modal-title");const t=n.icon?`${n.icon} ${n.title}`:n.title;e.innerHTML=`
        <div class="custom-modal-overlay"></div>
        <div class="custom-modal-container">
            <div class="custom-modal-header">
                <h2 id="modal-title">${t}</h2>
                <button class="modal-close-btn" aria-label="Close dialog">&times;</button>
            </div>
            <div class="custom-modal-body"></div>
            <div class="custom-modal-footer"></div>
        </div>
    `;const o=e.querySelector(".custom-modal-body");typeof n.content=="string"?o.innerHTML=n.content:o.appendChild(n.content);const s=e.querySelector(".custom-modal-footer");return n.buttons.forEach((a,i)=>{const r=document.createElement("button");r.textContent=a.text,r.className=`modal-btn modal-btn-${a.variant}`,r.addEventListener("click",a.onClick),(a.variant==="primary"||i===0&&!n.buttons.some(c=>c.variant==="primary"))&&r.setAttribute("data-autofocus","true"),s.appendChild(r)}),e}function $o(n){const e=n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),t=e[0],o=e[e.length-1],s=a=>{a.key==="Tab"&&(a.shiftKey?document.activeElement===t&&(a.preventDefault(),o?.focus()):document.activeElement===o&&(a.preventDefault(),t?.focus()))};return n.addEventListener("keydown",s),()=>n.removeEventListener("keydown",s)}function Je(n){const e=Io(n),t=document.activeElement;document.body.appendChild(e),e.offsetHeight,e.classList.add("modal-visible");const o=$o(e),s=e.querySelector("[data-autofocus]");setTimeout(()=>{s?.focus()},50);const a=()=>{e.classList.remove("modal-visible"),setTimeout(()=>{e.remove(),o(),t?.focus(),n.onClose?.()},200)};e.querySelector(".modal-close-btn")?.addEventListener("click",a),n.closeOnOverlay!==!1&&e.querySelector(".custom-modal-overlay")?.addEventListener("click",a);const r=d=>{d.key==="Escape"&&(d.preventDefault(),a())};document.addEventListener("keydown",r);const c=n.onClose;return n.onClose=()=>{document.removeEventListener("keydown",r),c?.()},S(`${n.title} dialog opened`,"polite"),a}function Ao(n,e,t={}){return new Promise(o=>{const{confirmText:s="Confirm",cancelText:a="Cancel",confirmVariant:i="primary",icon:r}=t;let c=null;c=Je({title:n,content:`<p class="modal-message">${e}</p>`,icon:r,buttons:[{text:a,variant:"secondary",onClick:()=>{c?.(),o(!1)}},{text:s,variant:i,onClick:()=>{c?.(),o(!0)}}],onClose:()=>o(!1)})})}function gn(n,e,t,o){const s=m=>{if(m.length===0)return{avg:null,max:null,count:0};const u=m.map(g=>g.value),h=u.reduce((g,y)=>g+y,0);return{avg:Math.round(h/u.length),max:Math.max(...u),count:u.length}},a=t.power.map(m=>m.value),i=[],r=[1,5,10,30,60,300,1200,3600],c=m=>{if(a.length<m)return 0;let u=0;for(let g=0;g<m;g++)u+=a[g];let h=u/m;for(let g=m;g<a.length;g++)u=u-a[g-m]+a[g],u/m>h&&(h=u/m);return Math.round(h)};for(const m of r)a.length>=m&&i.push({duration:m,watts:c(m)});let d=0,p=0;try{const m=localStorage.getItem("bpt-user-profile");if(m&&a.length>0){const h=JSON.parse(m).ftp||200,g=[];let y=0;for(let b=0;b<a.length;b++)y+=a[b],b>=30&&(y-=a[b-30]),b>=29&&g.push(y/30);if(g.length>0){const b=g.map(T=>Math.pow(T,4)),v=b.reduce((T,I)=>T+I,0)/b.length,w=Math.pow(v,.25);p=w/h,d=(e-n)/1e3*w*p/(h*3600)*100}}}catch(m){console.warn("Error calculating TSS",m)}const l={duration:e-n,startTime:n,endTime:e,power:s(t.power),heartrate:s(t.heartrate),cadence:s(t.cadence),powerCurve:i.length>0?i:void 0,trainingLoad:d>0?Math.round(d):void 0,intensityFactor:p>0?parseFloat(p.toFixed(2)):void 0};if(o){const m=o.getPowerZoneDistribution(),u=o.getHrZoneDistribution();m.totalTimeMs>0&&(l.powerZoneDistribution=m),u.totalTimeMs>0&&(l.hrZoneDistribution=u)}return l}function Bo(n){const e=Math.floor(n/1e3),t=Math.floor(e/3600),o=Math.floor(e%3600/60),s=e%60,a=[];return t>0&&a.push(`${t}h`),o>0&&a.push(`${o}m`),(s>0||a.length===0)&&a.push(`${s}s`),a.join(" ")}function Mo(n){const e=Math.floor(n/60),t=n%60;return`${e}:${String(t).padStart(2,"0")}`}const Do={1:"#3b82f6",2:"#22c55e",3:"#eab308",4:"#f97316",5:"#ef4444",6:"#a855f7",7:"#ec4899"};function Vt(n,e){const t=document.createElement("div");if(t.className="zone-distribution",n.zones.filter(a=>a.timeInZoneMs>0).length===0)return t;const s=Math.max(...n.zones.map(a=>a.timeInZoneMs));return t.innerHTML=`
        <h4 class="zone-distribution-title">${e}</h4>
        <div class="zone-chart">
            ${n.zones.map(a=>{const i=s>0?a.timeInZoneMs/s*100:0,r=Math.round(a.timeInZoneMs/1e3),c=Do[a.zone]||"#888",d=Mo(r);return`
                    <div class="zone-bar-row" title="${a.name}: ${d}">
                        <span class="zone-bar-label">Z${a.zone}</span>
                        <div class="zone-bar-container">
                            <div class="zone-bar" style="width: ${Math.max(i,2)}%; background-color: ${c};" aria-valuenow="${r}" aria-label="${a.name}"></div>
                        </div>
                        <span class="zone-bar-time">${d}</span>
                    </div>
                `}).join("")}
        </div>
    `,t}function Po(n,e=[]){const t=document.createElement("div");t.className="workout-summary";const o=(a,i)=>a!==null?`${a}${i}`:"--";let s="";if(e.length>0&&(s=`
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
            <span class="summary-value">${Bo(n.duration)}</span>
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
    `,n.powerZoneDistribution&&n.powerZoneDistribution.totalTimeMs>0){const a=Vt(n.powerZoneDistribution,"⚡ Power Zone Distribution");t.appendChild(a)}if(n.hrZoneDistribution&&n.hrZoneDistribution.totalTimeMs>0){const a=Vt(n.hrZoneDistribution,"❤️ Heart Rate Zone Distribution");t.appendChild(a)}return t}function _o(n,e,t=[]){return new Promise(o=>{let s=null;const a=Po(n,t);s=Je({title:"Workout Complete",content:a,icon:"🏁",closeOnOverlay:!1,buttons:[{text:"🗑️ Discard",variant:"danger",onClick:()=>{s?.(),e.onDiscard(),o("discard")}},{text:"▶️ Keep Recording",variant:"secondary",onClick:()=>{s?.(),e.onKeepRecording(),o("keep")}},{text:"💾 Save & Finish",variant:"primary",onClick:()=>{s?.(),e.onExport(),o("export")}}],onClose:()=>{e.onKeepRecording(),o("keep")}})})}let W=1,$e=1,Ce=!1,ge="",Me="",De="",de="list",Z=new Date,Pe="cloud";function J(n){if(!n.summary)return{};if(typeof n.summary=="string")try{return JSON.parse(n.summary)}catch{return{}}return n.summary}function No(){const n=document.getElementById("historyPrevPage"),e=document.getElementById("historyNextPage"),t=document.getElementById("historyRefresh"),o=document.getElementById("workoutTypeFilter"),s=document.getElementById("workoutDateStart"),a=document.getElementById("workoutDateEnd"),i=document.getElementById("viewListBtn"),r=document.getElementById("viewCalendarBtn"),c=document.getElementById("viewAnalyticsBtn"),d=document.getElementById("workoutListView"),p=document.getElementById("workoutCalendarView"),l=document.getElementById("workoutAnalyticsView"),m=document.getElementById("calendarPrevMonth"),u=document.getElementById("calendarNextMonth"),h=document.getElementById("sourceCloudBtn"),g=document.getElementById("sourceLocalBtn");h&&g&&(h.addEventListener("click",()=>Ft("cloud")),g.addEventListener("click",()=>Ft("local"))),Ro();const y=v=>{de=v,i&&(i.classList.toggle("active",v==="list"),i.setAttribute("aria-pressed",(v==="list").toString()),i.style.background=v==="list"?"var(--color-bg-active)":"transparent"),r&&(r.classList.toggle("active",v==="calendar"),r.setAttribute("aria-pressed",(v==="calendar").toString()),r.style.background=v==="calendar"?"var(--color-bg-active)":"transparent"),c&&(c.classList.toggle("active",v==="analytics"),c.setAttribute("aria-pressed",(v==="analytics").toString()),c.style.background=v==="analytics"?"var(--color-bg-active)":"transparent"),d&&(d.style.display=v==="list"?"block":"none"),p&&(p.style.display=v==="calendar"?"block":"none"),l&&(l.style.display=v==="analytics"?"block":"none")};i?.addEventListener("click",()=>{y("list"),K()}),r?.addEventListener("click",()=>{y("calendar"),Ae()}),c?.addEventListener("click",()=>{y("analytics"),ht()});const b=()=>{o&&(ge=o.value),s&&(Me=s.value),a&&(De=a.value),W=1,de==="list"?K():de==="calendar"?Ae():de==="analytics"&&ht()};o?.addEventListener("change",b),s?.addEventListener("change",b),a?.addEventListener("change",b),m?.addEventListener("click",()=>{Z.setMonth(Z.getMonth()-1),Ae()}),u?.addEventListener("click",()=>{Z.setMonth(Z.getMonth()+1),Ae()}),n?.addEventListener("click",async()=>{W>1&&(W--,await K())}),e?.addEventListener("click",async()=>{W<$e&&(W++,await K())}),t?.addEventListener("click",async()=>{await K()})}async function Ro(){const n=document.getElementById("workoutHistoryButton"),e=pt();try{Ce=await pn()}catch{Ce=!1}!Ce&&e&&(Pe="local",fn()),n&&(n.disabled=!(Ce||e),n.title=Ce||e?"View workout history":"History not available")}function Oo(n){const e=gn(n.startTime,n.lastUpdated,n.measurements);return{id:n.id,title:"Local Workout",sport:"cycling",startTime:new Date(n.startTime).toISOString(),endTime:new Date(n.lastUpdated).toISOString(),duration:Math.round((n.lastUpdated-n.startTime)/1e3),status:"COMPLETED",summary:JSON.stringify(e),createdAt:new Date(n.startTime).toISOString(),updatedAt:new Date(n.lastUpdated).toISOString(),_synced:n.synced}}async function K(){const n=document.getElementById("workoutList"),e=document.getElementById("historyPageInfo"),t=document.getElementById("historyPrevPage"),o=document.getElementById("historyNextPage");if(n){n.innerHTML='<div class="workout-loading">Loading workouts...</div>';try{let s=[];if(Pe==="local"){const a=await mn();a.sort((d,p)=>p.startTime-d.startTime);const i=a.length;$e=Math.ceil(i/10)||1;const r=(W-1)*10;s=a.slice(r,r+10).map(Oo),e&&(e.textContent=`Page ${W} of ${$e} (${i} local)`)}else{const a={page:W,limit:10};ge&&(a.sport=ge),Me&&(a.startDate=new Date(Me)),De&&(a.endDate=new Date(De));const i=await Ke(a);s=i.workouts;const{pagination:r}=i;$e=r.totalPages,e&&(e.textContent=`Page ${r.page} of ${r.totalPages} (${r.total} total)`)}if(t&&(t.disabled=W<=1),o&&(o.disabled=W>=$e),s.length===0){n.innerHTML=`
        <div class="workout-empty">
          <p>No workouts found</p>
          <p class="workout-empty-hint">Start a workout to see it here!</p>
        </div>
      `;return}n.innerHTML=s.map(a=>Fo(a)).join(""),n.querySelectorAll(".workout-card").forEach(a=>{const i=a.dataset.workoutId;i&&(a.querySelector(".workout-view-btn")?.addEventListener("click",r=>{r.stopPropagation(),Xe(i)}),a.querySelector(".workout-delete-btn")?.addEventListener("click",r=>{r.stopPropagation(),zo(i)}),a.querySelector(".workout-sync-btn")?.addEventListener("click",r=>{r.stopPropagation(),Vo(i)}))})}catch(s){console.error("Failed to load workouts:",s);const a=s instanceof Error?s.message:"Unknown error";n.innerHTML=`
      <div class="workout-error">
        <p>Failed to load workouts</p>
        <p class="workout-error-detail">${a}</p>
      </div>
    `}}}function Ft(n){Pe!==n&&(Pe=n,fn(),W=1,K())}function fn(){const n=document.getElementById("sourceCloudBtn"),e=document.getElementById("sourceLocalBtn");n&&e&&(Pe==="cloud"?(n.classList.add("active"),n.setAttribute("aria-pressed","true"),n.style.background="var(--color-bg-active)",e.classList.remove("active"),e.setAttribute("aria-pressed","false"),e.style.background="transparent"):(e.classList.add("active"),e.setAttribute("aria-pressed","true"),e.style.background="var(--color-bg-active)",n.classList.remove("active"),n.setAttribute("aria-pressed","false"),n.style.background="transparent"))}async function Vo(n){const t=(await mn()).find(o=>o.id===n);if(t)try{S("Syncing workout...","polite");const o=await vo({streamName:`sync-${n}`,title:`Synced: ${ae(new Date(t.startTime))}`,sport:"cycling"});if(o.success&&o.workout)if((await bo(o.workout.id,!1)).success)await Jn(n),S("Workout synced successfully","assertive"),await K();else throw new Error("Failed to complete workout on server")}catch(o){console.error("Sync failed",o),S("Sync failed","assertive")}}function Fo(n){const e=n.status.toLowerCase(),t=J(n),s=n._synced===!1?'<button class="workout-sync-btn" title="Upload to server">☁️ Sync</button>':n._synced===!0?'<span title="Synced" style="margin-right:8px;">✅</span>':"";return`
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
          ${n.duration?`<span class="workout-stat">⏱️ ${he(n.duration)}</span>`:""}
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
  `}async function Xe(n){const e=document.getElementById("workoutDetailPanel"),t=document.getElementById("workoutListPanel");if(!(!e||!t)){t.style.display="none",e.style.display="block",e.innerHTML='<div class="workout-loading">Loading workout details...</div>';try{const o=await wo(n,!0);e.innerHTML=Ho(o),e.querySelector(".workout-back-btn")?.addEventListener("click",()=>{e.style.display="none",t.style.display="block"}),e.querySelector(".workout-export-btn")?.addEventListener("click",()=>{Uo(o)})}catch(o){console.error("Failed to load workout details:",o);const s=o instanceof Error?o.message:"Unknown error";e.innerHTML=`
      <div class="workout-error">
        <p>Failed to load workout</p>
        <p class="workout-error-detail">${s}</p>
        <button class="workout-back-btn">← Back to list</button>
      </div>
    `,e.querySelector(".workout-back-btn")?.addEventListener("click",()=>{e.style.display="none",t.style.display="block"})}}}function Ho(n){const e=J(n),t=n.status.toLowerCase();return`
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
            <span class="meta-value">${he(n.duration)}</span>
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
  `}function Uo(n){const t=`workout-${new Date(n.startTime).toISOString().replace(/[:.]/g,"-").slice(0,19)}`,o={id:n.id,title:n.title,sport:n.sport,startTime:n.startTime,endTime:n.endTime,duration:n.duration,summary:n.summary,telemetry:n.telemetry},s=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),a=URL.createObjectURL(s),i=document.createElement("a");i.href=a,i.download=`${t}.json`,i.click(),URL.revokeObjectURL(a)}async function zo(n){if(confirm("Are you sure you want to delete this workout? This cannot be undone."))try{await Eo(n),await K()}catch(e){console.error("Failed to delete workout:",e);const t=e instanceof Error?e.message:"Unknown error";alert(`Failed to delete workout: ${t}`)}}async function Ae(){const n=document.getElementById("workoutCalendarGrid"),e=document.getElementById("calendarMonthLabel");if(!n||!e)return;const t=["January","February","March","April","May","June","July","August","September","October","November","December"];e.textContent=`${t[Z.getMonth()]} ${Z.getFullYear()}`,n.innerHTML='<div style="grid-column: 1 / -1; text-align: center; padding: 20px;">Loading calendar...</div>';const o=Z.getFullYear(),s=Z.getMonth(),a=new Date(o,s,1),i=new Date(o,s+1,0,23,59,59,999);try{const r={startDate:a,endDate:i,limit:1e3};ge&&(r.sport=ge);const d=(await Ke(r)).workouts;Wo(d),qo(d)}catch(r){console.error("Failed to load calendar:",r),n.innerHTML='<div style="grid-column: 1 / -1; text-align: center; color: var(--color-error);">Failed to load calendar data</div>'}}function Wo(n){const e=document.getElementById("workoutCalendarGrid");if(!e)return;e.innerHTML="",["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach(r=>{const c=document.createElement("div");c.textContent=r,c.style.textAlign="center",c.style.fontWeight="bold",c.style.padding="4px",c.style.fontSize="0.9em",c.style.color="var(--color-text-secondary)",e.appendChild(c)});const o=Z.getFullYear(),s=Z.getMonth(),a=new Date(o,s,1).getDay(),i=new Date(o,s+1,0).getDate();for(let r=0;r<a;r++){const c=document.createElement("div");e.appendChild(c)}for(let r=1;r<=i;r++){const c=document.createElement("div");c.style.border="1px solid var(--color-border)",c.style.borderRadius="4px",c.style.minHeight="60px",c.style.padding="4px",c.style.background="var(--card-bg)",c.style.position="relative";const d=document.createElement("div");d.textContent=r.toString(),d.style.fontSize="0.8em",d.style.marginBottom="4px",c.appendChild(d),n.filter(m=>{const u=new Date(m.startTime);return u.getDate()===r&&u.getMonth()===s&&u.getFullYear()===o}).forEach(m=>{const u=document.createElement("div");u.title=`${m.title||"Workout"} (${he(m.duration||0)})`,u.style.fontSize="0.7em",u.style.whiteSpace="nowrap",u.style.overflow="hidden",u.style.textOverflow="ellipsis",u.style.cursor="pointer",u.style.padding="2px",u.style.marginTop="2px",u.style.borderRadius="2px",u.style.background="var(--color-bg-active)",u.style.color="var(--color-text-primary)";const h=m.sport==="running"?"🏃":"🚴";u.textContent=`${h} ${he(m.duration||0)}`,u.addEventListener("click",g=>{g.stopPropagation(),Xe(m.id)}),c.appendChild(u)});const l=new Date;r===l.getDate()&&s===l.getMonth()&&o===l.getFullYear()&&(c.style.borderColor="var(--color-accent)",d.style.fontWeight="bold",d.style.color="var(--color-accent)"),e.appendChild(c)}}function qo(n){const e=document.getElementById("monthlyStats");if(!e)return;const t=n.length,o=n.reduce((i,r)=>i+(r.duration||0),0),s=n.reduce((i,r)=>{const c=J(r);return i+(c.totalDistance||0)},0),a=n.reduce((i,r)=>{const c=J(r);return i+(c.totalEnergy||0)},0);e.innerHTML=`
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Workouts</div>
            <div style="font-weight: bold;">${t}</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Duration</div>
            <div style="font-weight: bold;">${he(o)}</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Distance</div>
            <div style="font-weight: bold;">${(s/1e3).toFixed(1)} km</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Energy</div>
            <div style="font-weight: bold;">${a.toFixed(0)} kJ</div>
        </div>
    `}async function ht(){if(!document.getElementById("workoutAnalyticsView"))return;const e=document.getElementById("prList");e&&(e.innerHTML='<div style="padding: 12px; text-align: center;">Loading records...</div>');try{const t={limit:1e3};ge&&(t.sport=ge),Me&&(t.startDate=new Date(Me)),De&&(t.endDate=new Date(De));const s=(await Ke(t)).workouts;let a=[];if(s.length>0&&s[0].userId)try{a=await So(s[0].userId)}catch(i){console.warn("Failed to load FTP history",i)}jo(s,a)}catch(t){console.error("Failed to load analytics:",t),e&&(e.innerHTML='<div style="color: var(--color-error); text-align: center;">Failed to load data</div>')}}function jo(n,e=[]){Zo(n),Yo(n),Go(n),Jo(n),Xo(e),Qo(n)}function Zo(n){const e=document.getElementById("prList");if(!e)return;let t={val:0,date:"",id:""},o={val:0,date:"",id:""},s={val:0,date:"",id:""},a={val:0,date:"",id:""};n.forEach(r=>{const c=J(r),d=ae(r.startTime);c.maxPower&&c.maxPower>t.val&&(t={val:c.maxPower,date:d,id:r.id}),c.maxHeartrate&&c.maxHeartrate>o.val&&(o={val:c.maxHeartrate,date:d,id:r.id}),r.duration&&r.duration>s.val&&(s={val:r.duration,date:d,id:r.id}),c.totalDistance&&c.totalDistance>a.val&&(a={val:c.totalDistance,date:d,id:r.id})});const i=(r,c,d,p)=>`
        <div class="pr-row" data-id="${p}" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--color-border); cursor: pointer;">
            <div style="font-weight: 500;">${r}</div>
            <div style="text-align: right;">
                <div style="font-weight: bold; color: var(--color-accent);">${c}</div>
                <div style="font-size: 0.8em; color: var(--color-text-secondary);">${d}</div>
            </div>
        </div>
    `;e.innerHTML=`
        ${t.val>0?i("Max Power (1s)",`${t.val} W`,t.date,t.id):""}
        ${o.val>0?i("Max Heart Rate",`${o.val} bpm`,o.date,o.id):""}
        ${s.val>0?i("Longest Duration",he(s.val),s.date,s.id):""}
        ${a.val>0?i("Longest Distance",`${(a.val/1e3).toFixed(1)} km`,a.date,a.id):""}
    `,e.querySelectorAll(".pr-row").forEach(r=>{r.addEventListener("click",()=>{const c=r.dataset.id;c&&Xe(c)})})}function Yo(n){const e=document.getElementById("trainingLoadChart");if(!e)return;const t={};for(let s=3;s>=0;s--){const a=new Date;a.setDate(a.getDate()-s*7);const i=Ht(a);t[`${a.getFullYear()}-W${i}`]=0}n.forEach(s=>{const a=J(s);if(a.trainingLoad){const i=new Date(s.startTime),r=`${i.getFullYear()}-W${Ht(i)}`;t[r]!==void 0&&(t[r]+=a.trainingLoad)}});const o=Math.max(...Object.values(t),100);e.innerHTML=Object.entries(t).map(([s,a])=>{const i=a/o*100;return`
            <div style="display: flex; flex-direction: column; align-items: center; width: 20%;">
                <div style="font-size: 0.8em; font-weight: bold; margin-bottom: 4px;">${Math.round(a)}</div>
                <div style="width: 100%; height: 100px; display: flex; align-items: flex-end; justify-content: center;">
                    <div style="width: 80%; background: var(--color-accent); height: ${i}%; border-radius: 4px 4px 0 0; min-height: 4px;"></div>
                </div>
                <div style="font-size: 0.7em; color: var(--color-text-secondary); margin-top: 4px;">${s.split("-")[1]}</div>
            </div>
        `}).join("")}function Ht(n){n=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())),n.setUTCDate(n.getUTCDate()+4-(n.getUTCDay()||7));const e=new Date(Date.UTC(n.getUTCFullYear(),0,1));return Math.ceil(((n.getTime()-e.getTime())/864e5+1)/7)}function Go(n){const e=document.getElementById("powerCurveChart");if(!e)return;const t={},o=[1,5,10,30,60,300,1200,3600];if(n.forEach(l=>{const m=J(l);m.powerCurve&&m.powerCurve.forEach(u=>{(!t[u.duration]||u.watts>t[u.duration])&&(t[u.duration]=u.watts)}),m.maxPower&&(!t[1]||m.maxPower>t[1])&&(t[1]=m.maxPower)}),Object.keys(t).length===0){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">No power data available</div>';return}const s=e.clientWidth||300,a=200,i=30,r=Math.max(...Object.values(t))*1.1,c=o.map((l,m)=>{if(!t[l])return null;const u=i+m*((s-i*2)/(o.length-1)),h=a-i-t[l]/r*(a-i*2);return{x:u,y:h,val:t[l],duration:l}}).filter(l=>l!==null);if(c.length<2){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">Insufficient data points</div>';return}const d=`M ${c.map(l=>`${l.x},${l.y}`).join(" L ")}`,p=`
        <svg width="100%" height="100%" viewBox="0 0 ${s} ${a}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${i}" y1="${i}" x2="${i}" y2="${a-i}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${i}" y1="${a-i}" x2="${s-i}" y2="${a-i}" stroke="var(--color-border)" stroke-width="1" />
            
            <!-- Path -->
            <path d="${d}" fill="none" stroke="var(--color-accent)" stroke-width="2" />
            
            <!-- Points -->
            ${c.map(l=>`
                <circle cx="${l.x}" cy="${l.y}" r="4" fill="var(--card-bg)" stroke="var(--color-accent)" stroke-width="2" />
                <text x="${l.x}" y="${l.y-10}" text-anchor="middle" font-size="10" fill="var(--color-text-primary)">${l.val}W</text>
                <text x="${l.x}" y="${a-10}" text-anchor="middle" font-size="10" fill="var(--color-text-secondary)">${Ko(l.duration)}</text>
            `).join("")}
        </svg>
    `;e.innerHTML=p}function Ko(n){return n<60?`${n}s`:n<3600?`${n/60}m`:`${n/3600}h`}function Jo(n){const e=document.getElementById("fitnessTrendChart");if(!e)return;const t=[...n].sort((E,C)=>new Date(E.startTime).getTime()-new Date(C.startTime).getTime());if(t.length<2){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">Not enough data for trend analysis</div>';return}const o=new Map;t.forEach(E=>{const C=J(E);if(C.trainingLoad){const L=new Date(E.startTime).toISOString().split("T")[0],P=o.get(L)||0;o.set(L,P+C.trainingLoad)}});const s=[],a=new Date(t[0].startTime),i=new Date,r=Math.exp(-1/42),c=Math.exp(-1/7);let d=0,p=0;for(let E=new Date(a);E<=i;E.setDate(E.getDate()+1)){const C=E.toISOString().split("T")[0],L=o.get(C)||0;d=d*r+L*(1-r),p=p*c+L*(1-c),s.push({date:new Date(E),ctl:d,atl:p,tsb:d-p})}const l=e.clientWidth||600,m=250,u={top:20,right:30,bottom:30,left:40},h=l-u.left-u.right,g=m-u.top-u.bottom,y=Math.max(...s.map(E=>Math.max(E.ctl,E.atl)))*1.1,b=i.getTime()-a.getTime();if(b===0)return;const v=E=>u.left+(E.getTime()-a.getTime())/b*h,w=E=>u.top+g-E/y*g,f="M "+s.map(E=>`${v(E.date)},${w(E.ctl)}`).join(" L "),T="M "+s.map(E=>`${v(E.date)},${w(E.atl)}`).join(" L "),I=`
        <svg width="100%" height="100%" viewBox="0 0 ${l} ${m}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${u.left}" y1="${u.top}" x2="${u.left}" y2="${m-u.bottom}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${u.left}" y1="${m-u.bottom}" x2="${l-u.right}" y2="${m-u.bottom}" stroke="var(--color-border)" stroke-width="1" />
            
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
             <text x="${l-u.right}" y="${u.top}" text-anchor="end" font-size="12" fill="var(--color-text-primary)">
                CTL: ${Math.round(d)} | ATL: ${Math.round(p)} | TSB: ${Math.round(d-p)}
            </text>
        </svg>
    `;e.innerHTML=I}function Xo(n){const e=document.getElementById("ftpHistoryChart");if(!e)return;if(n.length===0){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">No FTP history available</div>';return}const t=[...n].sort((v,w)=>new Date(v.createdAt).getTime()-new Date(w.createdAt).getTime()),o=e.clientWidth||600,s=200,a={top:20,right:30,bottom:30,left:40},i=o-a.left-a.right,r=s-a.top-a.bottom,c=Math.max(...t.map(v=>v.ftp))*1.1,d=Math.max(0,Math.min(...t.map(v=>v.ftp))*.9),p=c-d||100,l=new Date(t[0].createdAt),u=new Date().getTime()-l.getTime(),h=v=>{const w=new Date(v);return a.left+(w.getTime()-l.getTime())/u*i},g=v=>a.top+r-(v-d)/p*r;let y="";if(t.length>0){y=`M ${h(t[0].createdAt)},${g(t[0].ftp)}`;for(let v=1;v<t.length;v++){const w=h(t[v].createdAt),f=g(t[v-1].ftp),T=g(t[v].ftp);y+=` L ${w},${f} L ${w},${T}`}y+=` L ${o-a.right},${g(t[t.length-1].ftp)}`}const b=`
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
            <text x="${a.left}" y="${s-10}" font-size="10" fill="var(--color-text-secondary)">${ae(l)}</text>
            <text x="${o-a.right}" y="${s-10}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">Today</text>
        </svg>
    `;e.innerHTML=b}function Qo(n){const e=document.getElementById("prHistoryList");if(!e)return;const t=[...n].sort((c,d)=>new Date(c.startTime).getTime()-new Date(d.startTime).getTime()),o=[];let s=0,a=0;const i={};if(t.forEach(c=>{const d=J(c),p=ae(c.startTime);if(d.maxPower&&d.maxPower>s){if(s>0){const l=d.maxPower-s;o.push({date:p,metric:"Max Power",value:`${d.maxPower} W`,improvement:`+${l} W`,workoutId:c.id})}else o.push({date:p,metric:"Max Power",value:`${d.maxPower} W`,improvement:"New!",workoutId:c.id});s=d.maxPower}if(d.maxHeartrate&&d.maxHeartrate>a){if(a>0){const l=d.maxHeartrate-a;o.push({date:p,metric:"Max Heart Rate",value:`${d.maxHeartrate} bpm`,improvement:`+${l} bpm`,workoutId:c.id})}else o.push({date:p,metric:"Max Heart Rate",value:`${d.maxHeartrate} bpm`,improvement:"New!",workoutId:c.id});a=d.maxHeartrate}if(d.powerCurve){const l=[60,300,1200],m={60:"1m Power",300:"5m Power",1200:"20m Power"};d.powerCurve.forEach(u=>{if(l.includes(u.duration)){const h=i[u.duration]||0;u.watts>h&&(h>0?o.push({date:p,metric:m[u.duration],value:`${u.watts} W`,improvement:`+${u.watts-h} W`,workoutId:c.id}):o.push({date:p,metric:m[u.duration],value:`${u.watts} W`,improvement:"New!",workoutId:c.id}),i[u.duration]=u.watts)}})}}),o.length===0){e.innerHTML='<div style="text-align: center; color: var(--color-text-secondary); padding: 20px;">No records found</div>';return}const r=o.reverse();e.innerHTML=r.map(c=>`
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
    `).join(""),e.querySelectorAll(".pr-history-row").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.id;d&&Xe(d)})})}async function Ut(){de==="list"?await K():de==="calendar"?await Ae():de==="analytics"&&await ht()}class es{id="history";isInitialized=!1;init(e){const t=document.getElementById("workoutHistoryTemplate");if(t){const o=t.content.cloneNode(!0);e.appendChild(o),setTimeout(()=>{No(),this.isInitialized=!0},0)}else console.error("History template not found!"),e.innerHTML="<p>Error loading history view</p>"}onEnter(){this.isInitialized?Ut():setTimeout(()=>Ut(),50)}onLeave(){}}const ts={id:"ramp-test",name:"Ramp Test",description:"Standard Ramp Test to estimate FTP. Start at 100W, increase by 20W every minute until failure.",tags:["test","ftp"],steps:[{type:"warmup",duration:300,targetType:"open",description:"Free warmup"},{type:"active",duration:60,targetValue:100,targetType:"power",description:"Step 1"},{type:"active",duration:60,targetValue:120,targetType:"power",description:"Step 2"},{type:"active",duration:60,targetValue:140,targetType:"power",description:"Step 3"},{type:"active",duration:60,targetValue:160,targetType:"power",description:"Step 4"},{type:"active",duration:60,targetValue:180,targetType:"power",description:"Step 5"},{type:"active",duration:60,targetValue:200,targetType:"power",description:"Step 6"},{type:"active",duration:60,targetValue:220,targetType:"power",description:"Step 7"},{type:"active",duration:60,targetValue:240,targetType:"power",description:"Step 8"},{type:"active",duration:60,targetValue:260,targetType:"power",description:"Step 9"},{type:"active",duration:60,targetValue:280,targetType:"power",description:"Step 10"},{type:"active",duration:60,targetValue:300,targetType:"power",description:"Step 11"},{type:"active",duration:60,targetValue:320,targetType:"power",description:"Step 12"},{type:"active",duration:60,targetValue:340,targetType:"power",description:"Step 13"},{type:"active",duration:60,targetValue:360,targetType:"power",description:"Step 14"},{type:"active",duration:60,targetValue:380,targetType:"power",description:"Step 15"},{type:"active",duration:60,targetValue:400,targetType:"power",description:"Step 16 (Elite!)"},{type:"cooldown",duration:300,targetType:"open",description:"Cooldown"}]},ns={id:"sweet-spot-3x10",name:"Sweet Spot 3x10",description:"Classic Sweet Spot workout to build aerobic engine. 3 intervals of 10 minutes at 88-93% FTP.",tags:["sweet-spot","aerobic"],steps:[{type:"warmup",duration:600,targetType:"percent_ftp",targetValue:50,description:"Warmup"},{type:"active",duration:600,targetType:"percent_ftp",targetValue:90,description:"Sweet Spot"},{type:"rest",duration:300,targetType:"percent_ftp",targetValue:50,description:"Recovery"},{type:"active",duration:600,targetType:"percent_ftp",targetValue:90,description:"Sweet Spot"},{type:"rest",duration:300,targetType:"percent_ftp",targetValue:50,description:"Recovery"},{type:"active",duration:600,targetType:"percent_ftp",targetValue:90,description:"Sweet Spot"},{type:"cooldown",duration:600,targetType:"percent_ftp",targetValue:50,description:"Cooldown"}]},os={id:"vo2-30-30",name:"VO2 Max 30/30s",description:"High intensity intervals. 3 sets of 8x 30s ON / 30s OFF.",tags:["vo2max","hiit"],steps:[{type:"warmup",duration:600,targetType:"percent_ftp",targetValue:50,description:"Warmup"},{type:"warmup",duration:60,targetType:"percent_ftp",targetValue:100,description:"Opener"},{type:"rest",duration:120,targetType:"percent_ftp",targetValue:50,description:"Recover"},...Array(8).fill(null).flatMap((n,e)=>[{type:"active",duration:30,targetType:"percent_ftp",targetValue:120,description:`Rep ${e+1}`},{type:"rest",duration:30,targetType:"percent_ftp",targetValue:50,description:"Float"}]),{type:"rest",duration:300,targetType:"percent_ftp",targetValue:50,description:"Set Recovery"},...Array(8).fill(null).flatMap((n,e)=>[{type:"active",duration:30,targetType:"percent_ftp",targetValue:120,description:`Rep ${e+1}`},{type:"rest",duration:30,targetType:"percent_ftp",targetValue:50,description:"Float"}]),{type:"cooldown",duration:600,targetType:"percent_ftp",targetValue:40,description:"Cooldown"}]},ss=[ts,ns,os];function as(n){return n.steps.reduce((e,t)=>e+t.duration,0)}function H(n,e="info",t=3e3){if(customElements.get("bpt-toast")){le.show(n,e,{duration:t});return}const o=document.createElement("div"),s=e==="error"?"#b91c1c":e==="success"?"#15803d":e==="warning"?"#a16207":"#1d4ed8";o.setAttribute("role","alert"),o.setAttribute("aria-live","assertive"),o.style.cssText=`
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
  `,o.textContent=n,document.body.appendChild(o),setTimeout(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches?o.remove():(o.style.opacity="0",o.style.transition="opacity 0.3s ease",setTimeout(()=>o.remove(),300))},t)}function F(n){const e=document.getElementById(n);if(!e)throw new Error(`Critical DOM element missing: #${n}. Ensure index.html is correct.`);return e}const yn="bpt-user-profile",zt={ftp:null,maxHr:null,weight:null,onboardingComplete:!1,lastUpdated:null};function _e(){try{const n=localStorage.getItem(yn);if(n)return{...zt,...JSON.parse(n)}}catch(n){console.warn("Failed to load user profile:",n)}return{...zt}}function gt(n){try{n.lastUpdated=Date.now(),localStorage.setItem(yn,JSON.stringify(n))}catch(e){console.warn("Failed to save user profile:",e)}}const ue=[{id:"welcome",title:"Welcome to Bike Power Tracker!",icon:"🚴",content:`
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
        `}];function rs(){const n=document.createElement("div");return n.id="onboardingModal",n.className="stream-modal",n.setAttribute("role","dialog"),n.setAttribute("aria-labelledby","onboardingTitle"),n.setAttribute("aria-modal","true"),n.style.display="none",n.innerHTML=`
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
    `,n}function is(n,e,t){n.innerHTML="";for(let o=0;o<t;o++){const s=document.createElement("span");s.style.cssText=`
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${o===e?"#2196F3":"#d0d7de"};
            transition: background 0.3s ease;
        `,s.setAttribute("aria-hidden","true"),n.appendChild(s)}}function cs(n,e,t,o){const{icon:s,title:a,content:i,inputContainer:r,inputField:c,inputLabel:d,inputUnit:p,helpText:l,prevBtn:m,nextBtn:u,progressDots:h}=o;if(s.textContent=n.icon,a.textContent=n.title,i.innerHTML=n.content,n.inputType==="number"&&n.profileKey){r.style.display="block",d.textContent=n.inputLabel||"",c.placeholder=n.inputPlaceholder||"",c.min=String(n.inputMin||0),c.max=String(n.inputMax||9999),p.textContent=n.inputUnit||"",l.textContent=n.helpText||"";const g=t[n.profileKey];c.value=g?String(g):"",c.focus()}else r.style.display="none";m.style.display=e===0?"none":"inline-block",e===ue.length-1?u.textContent="Get Started! 🚀":(n.inputType,u.textContent="Next →"),is(h,e,ue.length),S(`Step ${e+1} of ${ue.length}: ${n.title}`)}function ls(n=!1){return new Promise(e=>{const t=_e();if(!n&&t.onboardingComplete){e(t);return}let o=document.getElementById("onboardingModal");o||(o=rs(),document.body.appendChild(o));const s=F("onboardingIcon"),a=F("onboardingStepTitle"),i=F("onboardingContent"),r=F("onboardingInput"),c=F("onboardingInputField"),d=F("onboardingInputLabel"),p=F("onboardingInputUnit"),l=F("onboardingHelpText"),m=F("onboardingPrev"),u=F("onboardingNext"),h=F("skipOnboarding"),g=F("onboardingProgressDots"),y={icon:s,title:a,content:i,inputContainer:r,inputField:c,inputLabel:d,inputUnit:p,helpText:l,prevBtn:m,nextBtn:u,progressDots:g};let b=0;const v=()=>{const E=ue[b];if(E.inputType==="number"&&E.profileKey){const C=c.value?parseFloat(c.value):null;C!==null&&E.profileKey!=="onboardingComplete"&&E.profileKey!=="lastUpdated"&&(t[E.profileKey]=C)}},w=()=>{cs(ue[b],b,t,y)},f=()=>{if(ue[b].inputType==="number"&&!c.checkValidity()){c.reportValidity();return}v(),b<ue.length-1?(b++,w()):(t.onboardingComplete=!0,gt(t),o.style.display="none",H("Profile saved! Ready to ride 🚴","success"),S("Onboarding complete. Profile saved."),e(t))},T=()=>{v(),b>0&&(b--,w())},I=()=>{t.onboardingComplete=!0,gt(t),o.style.display="none",S("Onboarding skipped"),e(t)};u.addEventListener("click",f),m.addEventListener("click",T),h.addEventListener("click",I),c.addEventListener("keydown",E=>{E.key==="Enter"&&f()}),o.style.display="flex",w(),Lo(o.querySelector(".stream-modal-content"))})}function ds(){return!_e().onboardingComplete}function us(){ds()&&setTimeout(()=>{ls()},500)}class ms{audioCtx=null;gainNode=null;isMuted=!1;constructor(){}init(){this.ensureContext()}ensureContext(){if(!this.audioCtx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.audioCtx=new e,this.gainNode=this.audioCtx.createGain(),this.gainNode.connect(this.audioCtx.destination),this.gainNode.gain.value=.5)}this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}setMuted(e){this.isMuted=e}beep(e=440,t=200,o="sine"){if(this.isMuted||(this.ensureContext(),!this.audioCtx||!this.gainNode))return;const s=this.audioCtx.createOscillator(),a=this.audioCtx.createGain();s.type=o,s.frequency.setValueAtTime(e,this.audioCtx.currentTime),a.gain.setValueAtTime(0,this.audioCtx.currentTime),a.gain.linearRampToValueAtTime(.5,this.audioCtx.currentTime+.01),a.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+t/1e3),s.connect(a),a.connect(this.gainNode),s.start(),s.stop(this.audioCtx.currentTime+t/1e3)}playCountdown(){this.beep(440,150)}playStart(){this.beep(880,400)}playSuccess(){if(this.isMuted||(this.ensureContext(),!this.audioCtx||!this.gainNode))return;const e=this.audioCtx.currentTime;this.scheduleNote(523.25,e,.1),this.scheduleNote(659.25,e+.1,.1),this.scheduleNote(783.99,e+.2,.2)}scheduleNote(e,t,o){if(!this.audioCtx||!this.gainNode)return;const s=this.audioCtx.createOscillator(),a=this.audioCtx.createGain();s.frequency.value=e,a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.3,t+.01),a.gain.exponentialRampToValueAtTime(.001,t+o),s.connect(a),a.connect(this.gainNode),s.start(t),s.stop(t+o)}speak(e){if(this.isMuted||!window.speechSynthesis)return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e);t.rate=1,t.pitch=1,t.volume=1,window.speechSynthesis.speak(t)}}const Ze=new ms;class ps{state;timerInterval=null;onStateChange=null;userFtp=200;constructor(e){const t=_e();t.ftp&&(this.userFtp=t.ftp),this.state={workout:e,currentStepIndex:0,stepElapsedTime:0,totalElapsedTime:0,currentStep:e.steps[0],nextStep:e.steps.length>1?e.steps[1]:null,targetPower:this.calculateTargetPower(e.steps[0]),isPaused:!0,isFinished:!1}}setCallback(e){this.onStateChange=e,e(this.state)}start(){this.state.isFinished||!this.state.isPaused&&this.timerInterval||(this.state.isPaused=!1,this.emitState(),this.timerInterval=setInterval(()=>{this.tick()},1e3))}pause(){this.state.isPaused=!0,this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this.emitState()}nextStep(){this.advanceStep()}stop(){this.pause(),this.onStateChange=null}tick(){if(this.state.isPaused||this.state.isFinished)return;this.state.stepElapsedTime++,this.state.totalElapsedTime++;const e=this.state.currentStep.duration-this.state.stepElapsedTime;e<=3&&e>0&&Ze.playCountdown(),this.state.stepElapsedTime>=this.state.currentStep.duration?this.advanceStep():this.emitState()}advanceStep(){const e=this.state.currentStepIndex+1;if(e>=this.state.workout.steps.length){this.finish();return}this.state.currentStepIndex=e,this.state.currentStep=this.state.workout.steps[e],this.state.nextStep=e+1<this.state.workout.steps.length?this.state.workout.steps[e+1]:null,this.state.stepElapsedTime=0,this.state.targetPower=this.calculateTargetPower(this.state.currentStep),Ze.playStart(),this.emitState()}finish(){this.state.isFinished=!0,this.pause(),Ze.playSuccess(),this.emitState()}calculateTargetPower(e){return e.targetValue?e.targetType==="power"?e.targetValue:e.targetType==="percent_ftp"?Math.round(this.userFtp*(e.targetValue/100)):null:null}emitState(){this.onStateChange&&this.onStateChange({...this.state})}getState(){return{...this.state}}}const vn="bpt_custom_workouts";function St(){try{const n=localStorage.getItem(vn);return n?JSON.parse(n):[]}catch(n){return console.error("Failed to load custom workouts",n),[]}}function wn(n){const e=St(),t=e.findIndex(o=>o.id===n.id);t>=0?e[t]=n:e.push(n),bn(e)}function hs(n){const t=St().filter(o=>o.id!==n);bn(t)}function bn(n){try{localStorage.setItem(vn,JSON.stringify(n))}catch(e){console.error("Failed to save custom workouts",e),alert("Failed to save workout. Storage might be full.")}}let O=null;function gs(){ws(),fs(),xe()}function fs(){const n=document.getElementById("importWorkoutBtn"),e=document.getElementById("importWorkoutInput");n&&e&&(n.addEventListener("click",()=>{e.click()}),e.addEventListener("change",t=>{const o=t.target.files;o&&o.length>0&&(ys(o[0]),e.value="")}))}async function ys(n){try{const e=await n.text(),t=JSON.parse(e);if(!t.name||!Array.isArray(t.steps))throw new Error("Invalid workout format");t.id=crypto.randomUUID(),t.tags=[...t.tags||[],"imported"],wn(t),xe(),S(`Imported workout: ${t.name}`,"assertive")}catch(e){console.error("Import failed",e),alert("Failed to import workout: Invalid file format.")}}function vs(n){const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(n,null,2)),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download",`${n.name.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.json`),document.body.appendChild(t),t.click(),t.remove()}function xe(){const n=document.getElementById("workoutList");if(!n)return;n.innerHTML="";const e=St();if(e.length>0){const t=document.createElement("h3");t.textContent="My Workouts",t.style.margin="0 0 8px 0",t.style.fontSize="1rem",t.style.color="var(--color-text-secondary)",n.appendChild(t),e.forEach(a=>Wt(a,n,!0));const o=document.createElement("hr");o.style.margin="16px 0",o.style.border="0",o.style.borderTop="1px solid var(--color-border)",n.appendChild(o);const s=document.createElement("h3");s.textContent="Library",s.style.margin="0 0 8px 0",s.style.fontSize="1rem",s.style.color="var(--color-text-secondary)",n.appendChild(s)}ss.forEach(t=>Wt(t,n,!1))}function Wt(n,e,t){const o=as(n),s=document.createElement("div");s.className="workout-item",s.setAttribute("role","button"),s.setAttribute("tabindex","0"),s.style.position="relative";let a="";a+=`<button class="export-workout-btn" aria-label="Export ${n.name}" title="Export JSON" style="background: none; border: none; font-size: 1.2rem; cursor: pointer;">📤</button>`,t&&(a+=`<button class="delete-workout-btn" aria-label="Delete ${n.name}" title="Delete" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--color-error);">🗑️</button>`);const i="position: absolute; right: 10px; top: 10px; display: flex; gap: 8px; z-index: 2;";s.innerHTML=`
        <div class="workout-item-header">
            <span class="workout-item-title">${n.name}</span>
            <span class="workout-item-duration">⏱️ ${he(o*1e3)}</span>
        </div>
        <div class="workout-item-desc">${n.description}</div>
        <div class="workout-tags">
            ${(n.tags||[]).map(c=>`<span class="workout-tag">${c}</span>`).join("")}
        </div>
        <div style="${i}">
            ${a}
        </div>
    `,s.querySelector(".export-workout-btn")?.addEventListener("click",c=>{c.stopPropagation(),vs(n)}),t&&s.querySelector(".delete-workout-btn")?.addEventListener("click",d=>{d.stopPropagation(),confirm(`Delete workout "${n.name}"?`)&&(hs(n.id),xe(),S(`Deleted workout: ${n.name}`,"assertive"))}),s.addEventListener("click",c=>{if(c.target.tagName==="BUTTON")return;qt(n);const d=document.getElementById("workoutSelectionModal");d&&(d.style.display="none")}),s.addEventListener("keydown",c=>{if(c.key==="Enter"||c.key===" "){c.preventDefault(),qt(n);const d=document.getElementById("workoutSelectionModal");d&&(d.style.display="none")}}),e.appendChild(s)}function qt(n){if(O){if(!confirm("A workout is already active. Stop it and start this one?"))return;O.stop()}Ze.init(),O=new ps(n),O.setCallback(bs);const e=document.getElementById("workoutPlayerOverlay");e&&(e.style.display="block"),S(`Starting workout: ${n.name}. Ready to start.`,"assertive")}function ws(){const n=document.getElementById("workoutPlayerOverlay"),e=document.getElementById("wpMinimize"),t=document.getElementById("wpClose"),o=document.getElementById("wpSkip");n&&(t?.addEventListener("click",()=>{O&&confirm("Stop current workout?")&&(O.stop(),O=null,n.style.display="none",S("Workout stopped","polite"))}),e?.addEventListener("click",()=>{const s=n.querySelector(".workout-player-body");if(s){const a=s.style.display==="none";s.style.display=a?"block":"none",e.textContent=a?"_":"□"}}),o?.addEventListener("click",()=>{O&&(O.nextStep(),S("Skipped to next step","polite"))}))}function bs(n){const e=document.getElementById("wpWorkoutName"),t=document.getElementById("wpStepDescription"),o=document.getElementById("wpStepTime"),s=document.getElementById("wpStepDuration"),a=document.getElementById("wpTargetPower"),i=document.getElementById("wpNextStep"),r=document.getElementById("wpProgress");if(e&&(e.textContent=n.workout.name),n.currentStep){t&&(t.textContent=n.currentStep.description||n.currentStep.type.toUpperCase());const c=n.currentStep.duration-n.stepElapsedTime;o&&(o.textContent=at(c)),s&&(s.textContent=at(n.currentStep.duration)),a&&(a.textContent=n.targetPower?n.targetPower.toString():"--")}if(i)if(n.nextStep){const c=Es(n.nextStep);i.textContent=`${n.nextStep.type} (${at(n.nextStep.duration)}${c})`}else i.textContent="Finish";if(r){const c=n.stepElapsedTime/n.currentStep.duration*100;r.style.width=`${Math.min(100,c)}%`,n.currentStep.type==="active"?r.style.backgroundColor="#ff9800":n.currentStep.type==="rest"||n.currentStep.type==="warmup"?r.style.backgroundColor="#2196F3":r.style.backgroundColor="#4CAF50"}if(n.isFinished){const c=document.getElementById("workoutPlayerOverlay");c&&(c.style.display="none"),O=null,alert("Workout Complete!"),S("Workout Complete!","assertive")}}function at(n){const e=Math.floor(n/60),t=n%60;return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}function Es(n){return n.targetValue?` @ ~${n.targetValue}${n.targetType==="percent_ftp"?"%":"W"}`:""}function jt(){O&&O.start()}function Zt(){O&&O.pause()}let pe=[];function En(){const n=document.getElementById("createWorkoutBtn"),e=document.getElementById("closeBuilderModal"),t=document.getElementById("wbCancel"),o=document.getElementById("wbSave"),s=document.getElementById("wbAddStepRef");n&&n.addEventListener("click",xs),e&&e.addEventListener("click",ft),t&&t.addEventListener("click",ft),o&&o.addEventListener("click",ks),s&&s.addEventListener("click",Ss);const a=document.getElementById("wbTargetType");a&&a.addEventListener("change",()=>{const i=document.getElementById("wbTargetValue");i&&(i.parentElement.style.display=a.value==="open"?"none":"block")})}function xs(){const n=document.getElementById("workoutBuilderModal"),e=document.getElementById("workoutSelectionModal");e&&(e.style.display="none"),n&&(n.style.display="flex",Ts())}function ft(){const n=document.getElementById("workoutBuilderModal");n&&(n.style.display="none")}function Ts(){pe=[],document.getElementById("wbName").value="",document.getElementById("wbDesc").value="",kt()}function Ss(){const n=document.getElementById("wbStepType").value,e=document.getElementById("wbStepDuration").value,t=document.getElementById("wbTargetType").value,o=document.getElementById("wbTargetValue").value,s=parseInt(e,10);if(isNaN(s)||s<=0){alert("Invalid duration");return}let a;if(t!=="open"&&(a=parseInt(o,10),isNaN(a))){alert("Invalid target value");return}const i={type:n,duration:s,targetType:t,targetValue:a,description:`${xn(n)} (${Tn(s)})`};pe.push(i),kt(),S(`Added step: ${i.description}`,"polite")}function kt(){const n=document.getElementById("wbStepsList");if(n){if(pe.length===0){n.innerHTML=`<div class="wb-step-empty" style="text-align: center; color: var(--color-text-secondary); padding: 1rem; border: 1px dashed var(--color-border);">
                        No steps added yet.
                    </div>`;return}n.innerHTML="",pe.forEach((e,t)=>{const o=document.createElement("div");o.className="wb-step-item",o.style.background="var(--card-bg-hover)",o.style.padding="8px",o.style.borderRadius="4px",o.style.display="flex",o.style.justifyContent="space-between",o.style.alignItems="center",o.style.border="1px solid var(--color-border)";const s=e.targetType==="open"?"Open effort":`${e.targetValue} ${e.targetType==="percent_ftp"?"%":"W"}`;o.innerHTML=`
            <div>
                <strong>${t+1}. ${xn(e.type)}</strong> - ${Tn(e.duration)}
                <div style="font-size: 0.85em; color: var(--color-text-secondary)">${s}</div>
            </div>
            <button class="remove-step-btn" data-index="${t}" style="color: var(--color-error); background: none; border: none; cursor: pointer;">🗑️</button>
        `,n.appendChild(o)}),n.querySelectorAll(".remove-step-btn").forEach(e=>{e.addEventListener("click",t=>{const o=parseInt(t.target.getAttribute("data-index")||"-1",10);o>=0&&(pe.splice(o,1),kt())})})}}function ks(){const n=document.getElementById("wbName").value.trim(),e=document.getElementById("wbDesc").value.trim();if(!n){alert("Please enter a workout name");return}if(pe.length===0){alert("Please add at least one step");return}const t={id:crypto.randomUUID(),name:n,description:e,steps:pe,tags:["custom"]};wn(t),xe(),ft(),S(`Workout saved: ${n}`,"assertive")}function xn(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Tn(n){const e=Math.floor(n/60),t=n%60;return e>0?`${e}m ${t}s`:`${t}s`}class Cs{id="workouts";isInitialized=!1;init(e){const t=document.getElementById("workoutSelectionTemplate");if(t){const o=t.content.cloneNode(!0);e.appendChild(o),setTimeout(()=>{gs(),En(),this.isInitialized=!0},0)}else console.error("Workouts template not found!"),e.innerHTML="<p>Error loading workouts view</p>"}onEnter(){this.isInitialized?xe():setTimeout(()=>xe(),50)}onLeave(){}}const Sn="bpt-settings",M={power:!0,cadence:!0,heartrate:!0,speed:!0,distance:!0,altitude:!0,treadmillSpeed:!1,power3s:!1,highContrast:!1,colorblindPatterns:!1,voiceEnabled:!1,voiceLaps:!0,voiceZones:!0,exportTcx:!0,exportCsv:!0,exportJson:!1,exportFit:!1,debugMode:!1};function te(){const n=localStorage.getItem(Sn);return n?{...M,...JSON.parse(n)}:{...M}}function Ls(n){localStorage.setItem(Sn,JSON.stringify(n)),window.dispatchEvent(new CustomEvent("settings-changed"))}const Y={isEnabled(){return!!te().debugMode},async log(n,e){if(this.isEnabled())try{const t=this.bufferToHex(e.buffer);await Wn(n,t)}catch(t){console.warn("Failed to log debug data",t)}},bufferToHex(n){return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,"0")).join("").toUpperCase()},async exportLogs(){const n=await Mt(),e=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),o=document.createElement("a");o.href=t,o.download=`bpt-debug-logs-${Date.now()}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t)},async clearLogs(){await qn()},async getLogCount(){return(await Mt()).length}};let me=null;const Is=()=>{window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),me=n,yt()}),window.addEventListener("appinstalled",()=>{console.log("PWA was installed successfully"),me=null,yt()})},Yt=()=>me!==null,$s=async()=>{if(!me)return"unavailable";try{await me.prompt();const{outcome:n}=await me.userChoice;return console.log(`User response to the install prompt: ${n}`),me=null,yt(),n}catch(n){return console.error("Error triggering install prompt:",n),"unavailable"}},yt=()=>{const n=document.getElementById("installPwaButton"),e=document.getElementById("installPwaContainer");n&&(n.style.display=Yt()?"block":"none"),e&&(e.style.display=Yt()?"block":"none")};function As(){const n=document.getElementById("saveSettings"),e=document.getElementById("settingFtp"),t=document.getElementById("settingMaxHr"),o=document.getElementById("settingWeight"),s=document.getElementById("settingSpeed"),a=document.getElementById("settingDistance"),i=document.getElementById("settingAltitude"),r=document.getElementById("settingPower"),c=document.getElementById("settingCadence"),d=document.getElementById("settingHeartrate"),p=document.getElementById("settingTreadmillSpeed"),l=document.getElementById("settingPower3s"),m=document.getElementById("settingHighContrast"),u=document.getElementById("settingColorblindPatterns"),h=document.getElementById("settingVoiceEnabled"),g=document.getElementById("settingVoiceLaps"),y=document.getElementById("settingVoiceZones"),b=document.getElementById("settingExportTcx"),v=document.getElementById("settingExportCsv"),w=document.getElementById("settingExportJson"),f=document.getElementById("settingExportFit"),T=document.getElementById("settingDebugMode"),I=document.getElementById("debugControls"),E=document.getElementById("downloadDebugLogs"),C=document.getElementById("clearDebugLogs"),L=document.getElementById("installPwaButton"),P=x=>{const D=(Re,Pn)=>{document.querySelectorAll(`.metric-group-${Re}`).forEach(_n=>{_n.style.display=Pn?"flex":"none"})};D("speed",x.speed),D("distance",x.distance),D("altitude",x.altitude),D("power",x.power),D("cadence",x.cadence),D("heartrate",x.heartrate),D("treadmillSpeed",x.treadmillSpeed),document.querySelectorAll(".metric-group-power").forEach(Re=>{x.power3s?Re.setAttribute("data-show-avg","true"):Re.removeAttribute("data-show-avg")}),x.highContrast?document.documentElement.setAttribute("data-high-contrast","true"):document.documentElement.removeAttribute("data-high-contrast"),x.colorblindPatterns?document.documentElement.setAttribute("data-colorblind-patterns","true"):document.documentElement.removeAttribute("data-colorblind-patterns"),I&&(I.style.display=x.debugMode?"flex":"none")},_=()=>{const D={..._e(),ftp:e?.value?Number(e.value):null,maxHr:t?.value?Number(t.value):null,weight:o?.value?Number(o.value):null};gt(D),window.dispatchEvent(new CustomEvent("user-profile-changed"));const Q={speed:s?.checked??M.speed,distance:a?.checked??M.distance,altitude:i?.checked??M.altitude,power:r?.checked??M.power,cadence:c?.checked??M.cadence,heartrate:d?.checked??M.heartrate,treadmillSpeed:p?.checked??M.treadmillSpeed,power3s:l?.checked??M.power3s,highContrast:m?.checked??M.highContrast,colorblindPatterns:u?.checked??M.colorblindPatterns,voiceEnabled:h?.checked??M.voiceEnabled,voiceLaps:g?.checked??M.voiceLaps,voiceZones:y?.checked??M.voiceZones,exportTcx:b?.checked??M.exportTcx,exportCsv:v?.checked??M.exportCsv,exportJson:w?.checked??M.exportJson,exportFit:f?.checked??M.exportFit,debugMode:T?.checked??M.debugMode};Ls(Q),P(Q)},A=()=>{const x=te(),D=_e();e&&(e.value=D.ftp?.toString()??""),t&&(t.value=D.maxHr?.toString()??""),o&&(o.value=D.weight?.toString()??""),r&&(r.checked=x.power),c&&(c.checked=x.cadence),d&&(d.checked=x.heartrate),s&&(s.checked=x.speed),a&&(a.checked=x.distance),i&&(i.checked=x.altitude),p&&(p.checked=x.treadmillSpeed),l&&(l.checked=x.power3s),m&&(m.checked=x.highContrast),u&&(u.checked=x.colorblindPatterns),h&&(h.checked=x.voiceEnabled),g&&(g.checked=x.voiceLaps),y&&(y.checked=x.voiceZones),b&&(b.checked=x.exportTcx),v&&(v.checked=x.exportCsv),w&&(w.checked=x.exportJson),f&&(f.checked=x.exportFit),T&&(T.checked=x.debugMode),P(x)};n?.addEventListener("click",_),E?.addEventListener("click",()=>{Y.exportLogs()}),C?.addEventListener("click",async()=>{confirm("Are you sure you want to clear all debug logs?")&&(await Y.clearLogs(),alert("Logs cleared."))}),L?.addEventListener("click",async()=>{const x=await $s();x==="accepted"?console.log("PWA installation accepted"):x==="dismissed"?console.log("PWA installation dismissed"):alert("Installation is not available at this time. The app may already be installed or your browser does not support installation.")}),A()}class Bs{id="settings";init(e){const t=document.getElementById("settingsTemplate");if(t){const o=t.content.cloneNode(!0);e.appendChild(o),setTimeout(()=>{As()},0)}else console.error("Settings template not found!"),e.innerHTML="<p>Error loading settings view</p>"}onEnter(){console.log("Entered Settings View")}onLeave(){console.log("Left Settings View")}}var j=(n=>(n.Dashboard="dashboard",n.History="history",n.Workouts="workouts",n.Settings="settings",n))(j||{});class Ms{container;router;constructor(e){this.router=e,this.container=document.createElement("nav"),this.container.id="bottom-nav",this.container.className="bottom-nav",this.render(),document.body.appendChild(this.container),window.addEventListener("route-changed",t=>{const o=t.detail;this.setActive(o.viewId)})}render(){this.container.innerHTML=`
            <button class="nav-item active" data-target="${j.Dashboard}">
                <span class="nav-icon">📊</span>
                <span class="nav-label">Dashboard</span>
            </button>
            <button class="nav-item" data-target="${j.History}">
                <span class="nav-icon">📅</span>
                <span class="nav-label">History</span>
            </button>
            <button class="nav-item" data-target="${j.Workouts}">
                <span class="nav-icon">🏋️</span>
                <span class="nav-label">Workouts</span>
            </button>
            <button class="nav-item" data-target="${j.Settings}">
                <span class="nav-icon">⚙️</span>
                <span class="nav-label">Settings</span>
            </button>
        `,this.container.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target;t===j.Dashboard?this.router.navigate("/"):t&&this.router.navigate("/"+t)})})}setActive(e){this.container.querySelectorAll(".nav-item").forEach(t=>{t.dataset.target===e?(t.classList.add("active"),t.setAttribute("aria-current","page")):(t.classList.remove("active"),t.removeAttribute("aria-current"))})}}function Ds(){const n=new go(F("mainContent")),e=new fo,t=new es,o=new Cs,s=new Bs;n.registerView(e),n.registerView(t),n.registerView(o),n.registerView(s),n.addRoute("/",j.Dashboard),n.addRoute("/history",j.History),n.addRoute("/workouts",j.Workouts),n.addRoute("/settings",j.Settings),new Ms(n);const a=document.getElementById("settingsButton");return a&&a.addEventListener("click",()=>{n.navigate("/settings");const i=document.querySelector("nav details");i&&(i.open=!1)}),n}const vt=n=>{const e=Math.floor(n/1e3),t=Math.floor(e/3600),o=Math.floor(e%3600/60),s=e%60;return`${t.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`};function Gt(n){return n.startTime?n.running?"recording":"paused":"idle"}function Le(n,e){const{startButton:t,pauseButton:o,resumeButton:s,stopButton:a}=n;switch(t.style.display="none",o.style.display="none",s.style.display="none",a.style.display="none",e){case"idle":t.style.display="inline-flex";break;case"recording":o.style.display="inline-flex";break;case"paused":s.style.display="inline-flex",a.style.display="inline-flex";break}}const Ps=n=>{const e=document.getElementById("startButton"),t=document.getElementById("pauseButton"),o=document.getElementById("resumeButton"),s=document.getElementById("stopButton"),a=document.getElementById("time"),i=document.getElementById("metricsTable");if(!e||!t||!o||!s||!a||!i){console.warn("Workout control elements not found in DOM");return}const r={startButton:e,pauseButton:t,resumeButton:o,stopButton:s};setInterval(()=>{let d="00:00:00";const p=Gt(n);if(n.startTime&&n.running){const l=Date.now()-n.startTime;d=vt(l)}else if(n.startTime&&n.endTime){const l=n.endTime-n.startTime;d=vt(l)}a.textContent!==d&&(a.textContent=d),i.classList.remove("recording","paused"),p==="recording"?i.classList.add("recording"):p==="paused"&&i.classList.add("paused")},100),Le(r,Gt(n));const c=(d,p)=>{const l=m=>{m.stopPropagation(),p()};d.addEventListener("click",l)};c(e,()=>{n.startTime=Date.now(),n.endTime=null,n.running=!0,jt(),Le(r,"recording"),Ve("recording"),S("Workout started","assertive")}),c(t,()=>{n.running=!1,n.endTime=Date.now(),Zt(),Le(r,"paused"),Ve("paused"),S("Workout paused. Press resume to continue or stop to save.","assertive")}),c(o,()=>{if(n.endTime&&n.startTime){const d=Date.now()-n.endTime;n.startTime+=d}n.endTime=null,n.running=!0,jt(),Le(r,"recording"),Ve("recording"),S("Workout resumed","assertive")}),c(s,()=>{n.running=!1,Zt(),Le(r,"paused"),Ve("paused"),S("Workout stopped and saved. Press resume to continue or export your data.","assertive");const d=new CustomEvent("workoutComplete",{detail:{startTime:n.startTime,endTime:n.endTime,duration:n.endTime&&n.startTime?n.endTime-n.startTime:0}});document.dispatchEvent(d)})},ee=(n,e)=>{const t=[];let o=0;for(const s of e){for(;o<n.length&&n[o].timestamp<s;)o++;const a=o-1;let i;const r=o>=n.length;if(a<0)i=n[o];else if(r)i=n[a];else{const c=n[a]?.timestamp??0,d=n[o]?.timestamp??0;i=s-c<=d-s?n[a]:n[o]}i?.timestamp!==void 0&&Math.abs(i.timestamp-s)<1e3?t.push(i.value):t.push(null)}return t},Ct=n=>{const e=n.gps.map(f=>({timestamp:f.timestamp,value:f.lat})),t=n.gps.map(f=>({timestamp:f.timestamp,value:f.lon})),o=[n.heartrate,n.cadence,n.power,n.speed,n.distance,n.altitude,e];if(!o.some(f=>f.length>0))return[];const a=o.map(f=>f.length>0?f[0].timestamp:1/0),i=Math.min(...a),r=Math.max(...o.map(f=>f.length>0?f[f.length-1].timestamp:-1/0)),c=1e3,d=[];let p=i;for(;p<=r;)d.push(p),p+=c;const l=ee(n.heartrate,d),m=ee(n.cadence,d),u=ee(n.power,d),h=ee(n.speed,d),g=ee(n.distance,d),y=ee(n.altitude,d),b=ee(e,d),v=ee(t,d),w=[];for(let f=0;f<d.length;f++)w.push({timestamp:d[f],heartrate:l[f],cadence:m[f],power:u[f],speed:h[f],distance:g[f],altitude:y[f],lat:b[f],lon:v[f]});return w},_s=n=>{const e=Ct(n);if(!e||e.length===0)return"";const t="timestamp,power,cadence,heartrate,speed,distance,altitude,lat,lon",o=e.map(s=>{const a=new Date(s.timestamp).toISOString(),i=s.power!==null?Math.round(s.power):"",r=s.cadence!==null?Math.round(s.cadence):"",c=s.heartrate!==null?Math.round(s.heartrate):"",d=s.speed!==null?s.speed.toFixed(1):"",p=s.distance!==null?Math.round(s.distance):"",l=s.altitude!==null?Math.round(s.altitude):"",m=s.lat!==null?s.lat.toFixed(6):"",u=s.lon!==null?s.lon.toFixed(6):"";return`${a},${i},${r},${c},${d},${p},${l},${m},${u}`});return[t,...o].join(`
`)},Ns=n=>n!==null?`<HeartRateBpm><Value>${Math.round(n)}</Value></HeartRateBpm>`:"",Rs=n=>n!==null?`<Cadence>${Math.round(n)}</Cadence>`:"",Os=n=>n===null?"":`<Extensions>
              <TPX xmlns="http://www.garmin.com/xmlschemas/ActivityExtension/v2">
                <Watts>${Math.round(n)}</Watts>
              </TPX>
            </Extensions>`,Vs=n=>{const e=new Date(n.timestamp).toISOString();let t="";n.lat!==null&&n.lon!==null&&(t=`
        <Position>
            <LatitudeDegrees>${n.lat}</LatitudeDegrees>
            <LongitudeDegrees>${n.lon}</LongitudeDegrees>
        </Position>`);let o="";n.altitude!==null&&(o=`<AltitudeMeters>${n.altitude}</AltitudeMeters>`);let s="";n.distance!==null&&(s=`<DistanceMeters>${n.distance}</DistanceMeters>`);const a=[];return n.heartrate!==null&&a.push(Ns(n.heartrate)),n.cadence!==null&&a.push(Rs(n.cadence)),n.power!==null&&a.push(Os(n.power)),`
<Trackpoint>
    <Time>${e}</Time>
    ${t}
    ${o}
    ${s}
    ${a.join(`
`)}
</Trackpoint>
    `.trim()},Fs=n=>{const e=Ct(n);if(!e||e.length===0)return"";const t=e[0].timestamp,o=e[e.length-1].timestamp,s=Math.round((o-t)/1e3),a=new Date(t).toISOString();return`<?xml version="1.0" encoding="UTF-8"?>
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
${e.map(Vs).join(`
`)}
                    </Track>
                </Lap>
            </Activity>
        </Activities>
    </TrainingCenterDatabase>`},Hs=32,Kt=2067,Us=0,zs=1,Ws=34,qs=18,js=19,Zs=20,Ys=21,U=0,rt=2,Ie=132,N=134,Gs=0,Ks=1,Js=2,Xs=3,Qs=4,ea=253,ta=3,na=4,oa=7,sa=253,aa=2,ra=7,ia=8,ca=5,la=6,da=0,ua=1,ma=253,pa=2,ha=7,ga=8,fa=0,ya=1,va=253,wa=0,ba=1,Ea=253,xa=0,Ta=1,Sa=2,ka=3,Ca=4,La=5,Ia=4,$a=255,Aa=2,Ba=6,Jt=0,Ma=8,Da=9,Pa=26,_a=0,Fe=1,Na=0,Ra=Date.UTC(1989,11,31,0,0,0);function Xt(n,e,t){const o=[0,52225,55297,5120,61441,15360,10240,58369,40961,27648,30720,46081,20480,39937,34817,17408];let s=0;for(let a=e;a<t;a++){const i=n[a];let r=o[s&15];s=s>>4&4095,s=s^r^o[i&15],r=o[s&15],s=s>>4&4095,s=s^r^o[i>>4&15]}return s}function it(n){return Math.round((n-Ra)/1e3)}class Oa{buffer=[];definedMessages=new Map;writeHeader(){this.buffer.push(14),this.buffer.push(Hs),this.buffer.push(Kt&255),this.buffer.push(Kt>>8&255),this.buffer.push(0,0,0,0),this.buffer.push(46,70,73,84),this.buffer.push(0,0)}writeDefinition(e,t,o){this.buffer.push(64|e&15),this.buffer.push(0),this.buffer.push(0),this.buffer.push(t&255),this.buffer.push(t>>8&255),this.buffer.push(o.length);for(const s of o)this.buffer.push(s.fieldDefNum),this.buffer.push(s.size),this.buffer.push(s.baseType);this.definedMessages.set(e,!0)}writeData(e,t){this.buffer.push(e&15);for(const o of t);}writeUint8(e){this.buffer.push(e&255)}writeUint16(e){this.buffer.push(e&255),this.buffer.push(e>>8&255)}writeUint32(e){this.buffer.push(e&255),this.buffer.push(e>>8&255),this.buffer.push(e>>16&255),this.buffer.push(e>>24&255)}writeDataHeader(e){this.buffer.push(e&15)}finalize(){const e=new Uint8Array(this.buffer),t=this.buffer.length-14;e[4]=t&255,e[5]=t>>8&255,e[6]=t>>16&255,e[7]=t>>24&255;const o=Xt(e,0,12);e[12]=o&255,e[13]=o>>8&255;const s=Xt(e,0,e.length),a=new Uint8Array(e.length+2);return a.set(e),a[e.length]=s&255,a[e.length+1]=s>>8&255,a}getBuffer(){return this.buffer}}const Va=n=>{const e=Ct(n);if(!e||e.length===0)return null;const t=new Oa;t.writeHeader();const o=e[0].timestamp,s=e[e.length-1].timestamp,a=it(o),i=it(s),r=(s-o)/1e3,c=Math.round(r*1e3),d=0,p=1,l=2,m=3,u=4,h=5,g=6;t.writeDefinition(d,Us,[{fieldDefNum:Gs,size:1,baseType:U},{fieldDefNum:Ks,size:2,baseType:Ie},{fieldDefNum:Js,size:2,baseType:Ie},{fieldDefNum:Xs,size:4,baseType:N},{fieldDefNum:Qs,size:4,baseType:N}]),t.writeDataHeader(d),t.writeUint8(Ia),t.writeUint16($a),t.writeUint16(1),t.writeUint32(12345678),t.writeUint32(a),t.writeDefinition(p,zs,[{fieldDefNum:0,size:2,baseType:Ie},{fieldDefNum:1,size:1,baseType:rt}]),t.writeDataHeader(p),t.writeUint16(100),t.writeUint8(1),t.writeDefinition(l,Ys,[{fieldDefNum:va,size:4,baseType:N},{fieldDefNum:wa,size:1,baseType:U},{fieldDefNum:ba,size:1,baseType:U}]),t.writeDataHeader(l),t.writeUint32(a),t.writeUint8(Jt),t.writeUint8(_a),t.writeDefinition(m,Zs,[{fieldDefNum:ea,size:4,baseType:N},{fieldDefNum:ta,size:1,baseType:rt},{fieldDefNum:na,size:1,baseType:rt},{fieldDefNum:oa,size:2,baseType:Ie}]);for(const y of e){const b=it(y.timestamp);t.writeDataHeader(m),t.writeUint32(b),t.writeUint8(y.heartrate!==null?Math.min(255,Math.round(y.heartrate)):255),t.writeUint8(y.cadence!==null?Math.min(255,Math.round(y.cadence)):255),t.writeUint16(y.power!==null?Math.round(y.power):65535)}return t.writeDataHeader(l),t.writeUint32(i),t.writeUint8(Jt),t.writeUint8(Fe),t.writeDefinition(u,js,[{fieldDefNum:ma,size:4,baseType:N},{fieldDefNum:pa,size:4,baseType:N},{fieldDefNum:ha,size:4,baseType:N},{fieldDefNum:ga,size:4,baseType:N},{fieldDefNum:fa,size:1,baseType:U},{fieldDefNum:ya,size:1,baseType:U}]),t.writeDataHeader(u),t.writeUint32(i),t.writeUint32(a),t.writeUint32(c),t.writeUint32(c),t.writeUint8(Da),t.writeUint8(Fe),t.writeDefinition(h,qs,[{fieldDefNum:sa,size:4,baseType:N},{fieldDefNum:aa,size:4,baseType:N},{fieldDefNum:ra,size:4,baseType:N},{fieldDefNum:ia,size:4,baseType:N},{fieldDefNum:ca,size:1,baseType:U},{fieldDefNum:la,size:1,baseType:U},{fieldDefNum:da,size:1,baseType:U},{fieldDefNum:ua,size:1,baseType:U}]),t.writeDataHeader(h),t.writeUint32(i),t.writeUint32(a),t.writeUint32(c),t.writeUint32(c),t.writeUint8(Aa),t.writeUint8(Ba),t.writeUint8(Ma),t.writeUint8(Fe),t.writeDefinition(g,Ws,[{fieldDefNum:Ea,size:4,baseType:N},{fieldDefNum:xa,size:4,baseType:N},{fieldDefNum:Ta,size:2,baseType:Ie},{fieldDefNum:Sa,size:1,baseType:U},{fieldDefNum:ka,size:1,baseType:U},{fieldDefNum:Ca,size:1,baseType:U},{fieldDefNum:La,size:4,baseType:N}]),t.writeDataHeader(g),t.writeUint32(i),t.writeUint32(c),t.writeUint16(1),t.writeUint8(Na),t.writeUint8(Pa),t.writeUint8(Fe),t.writeUint32(i),t.finalize()},Fa=5e3;function Ha(n){const{message:e,onUndo:t,onExpire:o,timeout:s=Fa,icon:a="🗑️"}=n;document.querySelector(".undo-notification")?.remove();const r=document.createElement("div");r.className="undo-notification",r.setAttribute("role","alert"),r.setAttribute("aria-live","assertive");const c=Math.ceil(s/1e3);let d=c;r.innerHTML=`
        <div class="undo-notification-content">
            <span class="undo-notification-icon" aria-hidden="true">${a}</span>
            <span class="undo-notification-message">${e}</span>
        </div>
        <div class="undo-notification-actions">
            <button class="undo-notification-btn" type="button">
                Undo <span class="undo-countdown">(${d}s)</span>
            </button>
        </div>
        <div class="undo-progress-bar">
            <div class="undo-progress-fill"></div>
        </div>
    `,document.body.appendChild(r);const p=r.querySelector(".undo-notification-btn"),l=r.querySelector(".undo-countdown"),m=r.querySelector(".undo-progress-fill"),u=window.matchMedia("(prefers-reduced-motion: reduce)").matches;u||(m.style.transition=`width ${s}ms linear`,m.offsetHeight),m.style.width="0%",requestAnimationFrame(()=>{r.classList.add("undo-notification-visible")});let h=!1,g=null,y=null;const b=(v=!1)=>{g&&(clearInterval(g),g=null),y&&(clearTimeout(y),y=null),u?(r.remove(),v&&!h&&o&&o()):(r.classList.remove("undo-notification-visible"),r.classList.add("undo-notification-hiding"),setTimeout(()=>{r.remove(),v&&!h&&o&&o()},200))};return g=setInterval(()=>{d--,d>0?l.textContent=`(${d}s)`:g&&clearInterval(g)},1e3),y=setTimeout(()=>{b(!0)},s),p.addEventListener("click",()=>{h=!0,b(!1),t(),S("Action undone","assertive")}),p.focus(),S(`${e} Press undo within ${c} seconds to restore.`,"assertive"),()=>b(!1)}function Ua(n,e){return{power:[...n.power],heartrate:[...n.heartrate],cadence:[...n.cadence],startTime:e.startTime,endTime:e.endTime,running:e.running}}function za(n,e,t){e.power=[...n.power],e.heartrate=[...n.heartrate],e.cadence=[...n.cadence],t.startTime=n.startTime,t.endTime=n.endTime,t.running=n.running}class Wa{synth;voice=null;constructor(){if(this.synth=window.speechSynthesis||null,!this.synth){console.warn("Speech Synthesis not supported on this device");return}this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=()=>this.loadVoice()),this.loadVoice()}loadVoice(){if(!this.synth)return;const e=this.synth.getVoices();this.voice=e.find(t=>t.lang.startsWith("en"))||e[0]||null}formatTimeForSpeech(e){const t=Math.floor(e/1e3),o=Math.floor(t/3600),s=Math.floor(t%3600/60),a=t%60,i=[];return o>0&&i.push(`${o} hours`),s>0&&i.push(`${s} minutes`),(a>0||i.length===0)&&i.push(`${a} seconds`),i.join(" ")}speak(e){if(!this.synth||!te().voiceEnabled)return;this.synth.speaking&&this.synth.cancel();const o=new SpeechSynthesisUtterance(e);this.voice&&(o.voice=this.voice),this.synth.speak(o)}announceLap(e,t,o){if(!this.synth||!te().voiceLaps)return;const a=this.formatTimeForSpeech(t),i=`Lap ${e}. Time ${a}. Average Power ${Math.round(o)} watts.`;this.speak(i)}announceZoneChange(e){if(!this.synth||!te().voiceZones)return;const o=`Entering ${e} Zone`;this.speak(o)}}const wt=new Wa;function qa({measurementsState:n,timeState:e}){const t=document.getElementById("lapButton"),o=document.getElementById("lapCounter"),s=document.getElementById("lapCount"),a=document.getElementById("startButton"),i=document.getElementById("pauseButton"),r=document.getElementById("resumeButton"),c=document.getElementById("stopButton");if(!t||!o||!s){console.warn("Lap button elements not found in DOM");return}const d=()=>{const u=n.getLapCount();s.textContent=String(u),o.style.display=u>0?"block":"none"},p=()=>{const u=e.running&&e.startTime!==null;t.style.display=u?"inline-flex":"none"},l=()=>{if(!e.running||!e.startTime)return;const u=n.laps,h=u.length>0?u[u.length-1].timestamp:e.startTime,g=n.addLap(e.startTime);d();const y=g.timestamp,b=y-h,v=n.power.filter(I=>I.timestamp>=h&&I.timestamp<=y),w=v.length>0?v.reduce((I,E)=>I+E.value,0)/v.length:0;wt.announceLap(g.number,b,w);const f=g.elapsedMs?vt(g.elapsedMs):"",T=`Lap ${g.number}${f?` at ${f}`:""}`;H(`🏁 ${T}`,"info"),S(T,"assertive"),console.log(`Lap marked: ${g.number} at ${new Date(g.timestamp).toISOString()}`)};t.addEventListener("click",l);const m=new MutationObserver(()=>{p()});[a,i,r,c].forEach(u=>{u&&m.observe(u,{attributes:!0,attributeFilter:["style"]})}),p(),d(),a?.addEventListener("click",()=>{setTimeout(p,10)}),i?.addEventListener("click",()=>{setTimeout(p,10)}),r?.addEventListener("click",()=>{setTimeout(p,10)}),c?.addEventListener("click",()=>{setTimeout(()=>{p()},10)}),console.log("Lap button initialized")}function ja(){const n=document.getElementById("lapCounter"),e=document.getElementById("lapCount");n&&e&&(e.textContent="0",n.style.display="none")}class Za{state={maxPower:0,maxHr:0,longestDuration:0,longestDistance:0,powerCurve:{}};constructor(e){this.processHistory(e)}processHistory(e){e.forEach(t=>{const o=Ya(t);o.power?.max&&o.power.max>this.state.maxPower&&(this.state.maxPower=o.power.max),o.heartrate?.max&&o.heartrate.max>this.state.maxHr&&(this.state.maxHr=o.heartrate.max),t.duration&&t.duration>this.state.longestDuration&&(this.state.longestDuration=t.duration),o.powerCurve&&o.powerCurve.forEach(s=>{const a=this.state.powerCurve[s.duration]||0;s.watts>a&&(this.state.powerCurve[s.duration]=s.watts)})})}checkNewRecords(e){const t=[];if(e.power.max&&e.power.max>this.state.maxPower&&t.push(`Max Power: ${e.power.max} W`),e.heartrate.max&&e.heartrate.max>this.state.maxHr&&t.push(`Max Heart Rate: ${e.heartrate.max} bpm`),e.duration&&e.duration>this.state.longestDuration&&t.push(`Longest Ride: ${Ga(e.duration)}`),e.powerCurve){const o=[1,5,60,300,1200,3600],s={1:"1s Power",5:"5s Power",60:"1m Power",300:"5m Power",1200:"20m Power",3600:"1h Power"};e.powerCurve.forEach(a=>{if(o.includes(a.duration)){const i=this.state.powerCurve[a.duration]||0;if(a.watts>i){if(a.duration===1&&t.some(r=>r.startsWith("Max Power")))return;t.push(`${s[a.duration]}: ${a.watts} W`)}}})}return t}}function Ya(n){if(!n.summary)return{};if(typeof n.summary=="string")try{return JSON.parse(n.summary)}catch{return{}}return n.summary}function Ga(n){const e=Math.floor(n/1e3),t=Math.floor(e/3600),o=Math.floor(e%3600/60),s=e%60;return t>0?`${t}h ${o}m`:`${o}m ${s}s`}const Qt={power:!0,cadence:!0,heartrate:!0,exportTcx:!0,exportCsv:!0,exportJson:!1,exportFit:!1},Ka=()=>{const n=document.getElementById("toggleYourMetrics"),e=document.getElementById("yourMetrics");n&&e&&(n.checked=e.style.display!=="none",n.addEventListener("change",s=>{const a=s.target;e.style.display=a.checked?"flex":"none"}));const t=document.getElementById("toggleStreamMetrics"),o=document.getElementById("streamMetrics");t&&o&&(t.checked=o.style.display!=="none",t.addEventListener("change",s=>{const a=s.target;o.style.display=a.checked?"flex":"none"}))},Ja=({measurementsState:n,timeState:e,zoneState:t})=>{const o=document.getElementById("discardButton");if(!o){console.warn("Discard button not found in DOM");return}((a,i)=>{const r=c=>{c.stopPropagation(),i()};a.addEventListener("click",r)})(o,async()=>{if(!(n.power.length>0||n.heartrate.length>0||n.cadence.length>0||e.startTime!==null)){Ge(n,e);return}const i=n.power.length+n.heartrate.length+n.cadence.length;if(await Ao("Discard Workout",`Are you sure you want to discard this workout? You have ${i} data points that will be deleted. You'll have 5 seconds to undo this action.`,{confirmText:"Discard",cancelText:"Keep Data",confirmVariant:"danger",icon:"🗑️"})){const c=Ua(n,e);Ge(n,e),t&&t.reset(),document.dispatchEvent(new CustomEvent("workout-discarded")),ja(),Ha({message:"Workout data discarded",icon:"🗑️",timeout:5e3,onUndo:()=>{za(c,n,e),Xa(c),S("Workout data restored","polite")},onExpire:()=>{S("Discard complete","polite")}})}})};function Xa(n){const e=document.getElementById("startButton"),t=document.getElementById("pauseButton"),o=document.getElementById("resumeButton"),s=document.getElementById("stopButton"),a=document.getElementById("time");if(n.running?(e&&(e.style.display="none"),t&&(t.style.display="inline-flex"),o&&(o.style.display="none"),s&&(s.style.display="inline-flex")):n.startTime!==null&&(e&&(e.style.display="none"),t&&(t.style.display="none"),o&&(o.style.display="inline-flex"),s&&(s.style.display="inline-flex")),a&&n.startTime!==null){const i=(n.endTime||Date.now())-n.startTime,r=Math.floor(i/1e3),c=Math.floor(r/3600),d=Math.floor(r%3600/60),p=r%60;a.textContent=`${String(c).padStart(2,"0")}:${String(d).padStart(2,"0")}:${String(p).padStart(2,"0")}`}}function Ge(n,e){e.running=!1,e.startTime=null,e.endTime=null,n.power=[],n.heartrate=[],n.cadence=[];const t=document.getElementById("startButton"),o=document.getElementById("pauseButton"),s=document.getElementById("resumeButton"),a=document.getElementById("stopButton");t&&(t.style.display="inline-flex"),o&&(o.style.display="none"),s&&(s.style.display="none"),a&&(a.style.display="none");const i=document.getElementById("time");i&&(i.textContent="00:00:00")}function Qa(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}-${String(n.getHours()).padStart(2,"0")}-${String(n.getMinutes()).padStart(2,"0")}-${String(n.getSeconds()).padStart(2,"0")}`}function He(n,e){const t=URL.createObjectURL(n),o=document.createElement("a");o.href=t,o.download=e,o.click(),URL.revokeObjectURL(t)}const er=(n,e)=>{const t=document.getElementById("exportData");if(!t){console.warn("Export button not found in DOM");return}((s,a)=>{const i=r=>{r.stopPropagation(),a()};s.addEventListener("click",i)})(t,()=>{try{const s=localStorage.getItem("bpt-settings"),a=s?{...Qt,...JSON.parse(s)}:Qt,i=Qa();if(a.exportJson){const r={power:n.power,heartrate:n.heartrate,cadence:n.cadence};if(e){const p=e.toJSON();(p.powerZones.some(l=>l.timeInZoneMs>0)||p.hrZones.some(l=>l.timeInZoneMs>0))&&(r.zoneDistribution={power:p.powerZones.map(l=>({zone:l.zone,name:l.name,timeSeconds:Math.round(l.timeInZoneMs/1e3)})),heartrate:p.hrZones.map(l=>({zone:l.zone,name:l.name,timeSeconds:Math.round(l.timeInZoneMs/1e3)})),ftp:p.ftp,maxHr:p.maxHr})}const c=JSON.stringify(r,null,2),d=new Blob([c],{type:"application/json"});He(d,`bike-measurements-${i}.json`)}if(a.exportTcx){const r=Fs(n);if(r){const c=new Blob([r],{type:"application/xml"});He(c,`bike-workout-${i}.tcx`)}}if(a.exportCsv){const r=_s(n);if(r){const c=new Blob([r],{type:"text/csv"});He(c,`bike-workout-${i}.csv`)}}if(a.exportFit){const r=Va(n);if(r){const c=new Blob([new Uint8Array(r)],{type:"application/fit"});He(c,`bike-workout-${i}.fit`)}}}catch(s){console.error("Error exporting data:",s)}})},tr=({measurementsState:n,timeState:e,zoneState:t})=>{document.addEventListener("workoutComplete",async o=>{const s=o.detail;if(!(n.power.length>0||n.heartrate.length>0||n.cadence.length>0)&&!s.startTime)return;const i=gn(s.startTime||e.startTime||Date.now(),s.endTime||e.endTime||Date.now(),n,t);let r=[];try{if(await pn()){const c=await Ke({limit:1e3});r=new Za(c.workouts).checkNewRecords(i),r.length>0&&S(`Congratulations! You set ${r.length} new personal records!`,"assertive")}}catch(c){console.warn("Failed to check for PRs:",c)}await _o(i,{onExport:async()=>{try{await Gn(),S("Workout saved to local history","polite")}catch(d){console.error("Failed to save to local history",d),S("Failed to save to local history","assertive")}document.getElementById("exportData")?.click(),Ge(n,e)},onDiscard:()=>{Ge(n,e),S("Workout discarded","polite")},onKeepRecording:()=>{document.getElementById("resumeButton")?.click()}},r)})};function V(n){return document.getElementById(n)}const Ye={get power(){return{display:V("power"),connect:V("connectPower")}},get heartrate(){return{display:V("heartrate"),connect:V("connectHeartrate")}},get cadence(){return{display:V("cadence"),connect:V("connectCadence")}},get gps(){return{display:null,connect:V("connectGps")}},get speed(){return{display:V("speed"),connect:null}},get distance(){return{display:V("distance"),connect:null}},get altitude(){return{display:V("altitude"),connect:null}},get treadmill(){return{display:V("value-incline"),connect:V("connectTreadmill")}},get treadmillSpeed(){return{display:V("treadmillSpeed"),connect:null}}},nr="bpt-user-profile";function or(){try{const n=localStorage.getItem(nr);if(n)return JSON.parse(n)}catch(n){console.warn("Failed to load user profile:",n)}return{ftp:null,maxHr:null}}function kn(n){return[{name:"Active Recovery",min:0,max:Math.round(n*.55)},{name:"Endurance",min:Math.round(n*.55),max:Math.round(n*.75)},{name:"Tempo",min:Math.round(n*.75),max:Math.round(n*.9)},{name:"Threshold",min:Math.round(n*.9),max:Math.round(n*1.05)},{name:"VO2max",min:Math.round(n*1.05),max:Math.round(n*1.2)},{name:"Anaerobic",min:Math.round(n*1.2),max:Math.round(n*1.5)},{name:"Neuromuscular",min:Math.round(n*1.5),max:9999}]}function Cn(n){return[{name:"Recovery",min:Math.round(n*.5),max:Math.round(n*.6)},{name:"Aerobic",min:Math.round(n*.6),max:Math.round(n*.7)},{name:"Tempo",min:Math.round(n*.7),max:Math.round(n*.8)},{name:"Threshold",min:Math.round(n*.8),max:Math.round(n*.9)},{name:"Anaerobic",min:Math.round(n*.9),max:n}]}function sr(n,e){const t=kn(e);for(let o=0;o<t.length;o++)if(n>=t[o].min&&n<t[o].max)return{zone:o+1,name:t[o].name};return null}function ar(n,e){const t=Cn(e);for(let o=0;o<t.length;o++)if(n>=t[o].min&&n<=t[o].max)return{zone:o+1,name:t[o].name};return null}class rr{_powerZones=[];_hrZones=[];_lastPowerZone=null;_lastHrZone=null;_lastUpdateTime=null;_ftp=null;_maxHr=null;_currentPowerZone=null;_currentHrZone=null;_onChangeCallbacks=[];constructor(){this.loadProfile()}loadProfile(){const e=or();if(this._ftp=e.ftp,this._maxHr=e.maxHr,this._ftp){const t=kn(this._ftp);this._powerZones=t.map((o,s)=>({zone:s+1,name:o.name,min:o.min,max:o.max,timeInZoneMs:0}))}if(this._maxHr){const t=Cn(this._maxHr);this._hrZones=t.map((o,s)=>({zone:s+1,name:o.name,min:o.min,max:o.max,timeInZoneMs:0}))}}onChange(e){this._onChangeCallbacks.push(e)}offChange(e){const t=this._onChangeCallbacks.indexOf(e);t>-1&&this._onChangeCallbacks.splice(t,1)}_notifyChange(){for(const e of this._onChangeCallbacks)try{e()}catch(t){console.error("Zone state change callback error:",t)}}updatePower(e,t=Date.now()){if(!this._ftp)return null;const o=sr(e,this._ftp);if(!o)return null;const s=o.zone;if(this._lastUpdateTime!==null&&this._lastPowerZone!==null){const c=t-this._lastUpdateTime,d=this._powerZones[this._lastPowerZone-1];d&&c>0&&c<5e3&&(d.timeInZoneMs+=c)}this._lastPowerZone=s,this._lastUpdateTime=t;const a=this._powerZones[s-1],i=a.max-a.min,r=i>0?Math.min(100,Math.max(0,(e-a.min)/i*100)):50;return this._currentPowerZone={zone:s,name:o.name,percentInZone:r},this._notifyChange(),this._currentPowerZone}updateHeartRate(e,t=Date.now()){if(!this._maxHr)return null;const o=ar(e,this._maxHr);if(!o)return null;const s=o.zone;if(this._lastUpdateTime!==null&&this._lastHrZone!==null){const c=t-this._lastUpdateTime,d=this._hrZones[this._lastHrZone-1];d&&c>0&&c<5e3&&(d.timeInZoneMs+=c)}this._lastHrZone=s,(this._lastUpdateTime===null||t-this._lastUpdateTime>50)&&(this._lastUpdateTime=t);const a=this._hrZones[s-1],i=a.max-a.min,r=i>0?Math.min(100,Math.max(0,(e-a.min)/i*100)):50;return this._currentHrZone={zone:s,name:o.name,percentInZone:r},this._notifyChange(),this._currentHrZone}getCurrentPowerZone(){return this._currentPowerZone}getCurrentHrZone(){return this._currentHrZone}getPowerZoneDistribution(){const e=this._powerZones.reduce((t,o)=>t+o.timeInZoneMs,0);return{zones:[...this._powerZones],totalTimeMs:e}}getHrZoneDistribution(){const e=this._hrZones.reduce((t,o)=>t+o.timeInZoneMs,0);return{zones:[...this._hrZones],totalTimeMs:e}}hasPowerZones(){return this._ftp!==null&&this._ftp>0}hasHrZones(){return this._maxHr!==null&&this._maxHr>0}getFtp(){return this._ftp}getMaxHr(){return this._maxHr}reset(){this._powerZones.forEach(e=>e.timeInZoneMs=0),this._hrZones.forEach(e=>e.timeInZoneMs=0),this._lastPowerZone=null,this._lastHrZone=null,this._lastUpdateTime=null,this._currentPowerZone=null,this._currentHrZone=null,this._notifyChange()}toJSON(){return{powerZones:[...this._powerZones],hrZones:[...this._hrZones],ftp:this._ftp,maxHr:this._maxHr}}}const en=5e3,ir=100;let ce;function cr(){let n=document.getElementById("powerZoneGauge"),e=document.getElementById("hrZoneGauge");if(!n){const t=document.querySelector(".metric-group-power");t&&(n=document.createElement("bpt-zone-gauge"),n.id="powerZoneGauge",n.setAttribute("type","power"),n.setAttribute("compact",""),n.style.display="none",t.appendChild(n))}if(!e){const t=document.querySelector(".metric-group-heartrate");t&&(e=document.createElement("bpt-zone-gauge"),e.id="hrZoneGauge",e.setAttribute("type","heartrate"),e.setAttribute("compact",""),e.style.display="none",t.appendChild(e))}return{powerGauge:n,hrGauge:e}}function lr(){let n=document.getElementById("powerLiveChart"),e=document.getElementById("hrLiveChart"),t=document.getElementById("liveChartsContainer");if(!t){const o=document.getElementById("yourMetrics");if(o){t=document.createElement("div"),t.id="liveChartsContainer",t.className="live-charts-container",t.style.display="none";const s=document.getElementById("metricsTable");s&&s.nextSibling?o.insertBefore(t,s.nextSibling):o.appendChild(t)}}return t&&(n||(n=document.createElement("bpt-live-chart"),n.id="powerLiveChart",n.setAttribute("type","power"),n.setAttribute("duration","60"),t.appendChild(n)),e||(e=document.createElement("bpt-live-chart"),e.id="hrLiveChart",e.setAttribute("type","heartrate"),e.setAttribute("duration","60"),t.appendChild(e))),{powerChart:n,hrChart:e}}function dr(n){let e=document.getElementById("toggleLiveCharts");if(!e){const t=document.getElementById("topBarControls");if(t){e=document.createElement("button"),e.id="toggleLiveCharts",e.className="workout-btn workout-btn-chart",e.setAttribute("aria-label","Toggle live charts"),e.setAttribute("title","Toggle Charts"),e.innerHTML="📊",e.style.display="none";const o=document.querySelector(".workout-controls");o?t.insertBefore(e,o):t.appendChild(e)}}return e&&e.setAttribute("aria-pressed",n?"true":"false"),e}function ur(n,e,t){if(n){const o=t.getCurrentPowerZone();o&&t.hasPowerZones()?(n.style.display="",n.setZone(o.zone,o.name,o.percentInZone)):t.hasPowerZones()||(n.style.display="none")}if(e){const o=t.getCurrentHrZone();o&&t.hasHrZones()?(e.style.display="",e.setZone(o.zone,o.name,o.percentInZone)):t.hasHrZones()||(e.style.display="none")}}function ct(n,e,t){const o=n.closest(".metric-group");if(!o)return;const s={1:"#3b82f6",2:"#22c55e",3:"#eab308",4:"#f97316",5:"#ef4444",6:"#a855f7",7:"#ec4899"};if(e!==null&&e>=1&&e<=7){const a=s[e];n.style.color=a,o.style.borderLeftColor=a,o.style.borderLeftWidth="4px",o.style.borderLeftStyle="solid"}else n.style.color="",o.style.borderLeftColor="",o.style.borderLeftWidth="",o.style.borderLeftStyle=""}const mr=({connectionsState:n,measurementsState:e})=>{ce=new rr;const{powerGauge:o,hrGauge:s}=cr(),{powerChart:a,hrChart:i}=lr();let r=localStorage.getItem("bpt-charts-visible")==="true";const c=dr(r),d=document.getElementById("liveChartsContainer");d&&(d.style.display=r?"flex":"none"),c&&c.addEventListener("click",()=>{r=!r,localStorage.setItem("bpt-charts-visible",r?"true":"false"),c.setAttribute("aria-pressed",r?"true":"false"),d&&(d.style.display=r?"flex":"none")});let p=0,l=0,m=null,u=null,h=te();window.addEventListener("storage",w=>{w.key==="bpt-settings"&&(h=te())}),window.addEventListener("settings-changed",()=>{h=te()});const g=()=>{if(a&&e.power.length>p){for(let w=p;w<e.power.length;w++){const f=e.power[w];a.addDataPoint(f.value,f.timestamp)}p=e.power.length}if(i&&e.heartrate.length>l){for(let w=l;w<e.heartrate.length;w++){const f=e.heartrate[w];i.addDataPoint(f.value,f.timestamp)}l=e.heartrate.length}},y=()=>{const w=document.getElementById("value-incline"),f=document.querySelector(".metric-group-incline");let T=!1,I="--";if(e.treadmill.length>0){const E=e.treadmill[e.treadmill.length-1];Date.now()-E.timestamp<en&&E.incline!=null&&(T=!0,I=E.incline.toFixed(1)+"%")}w&&(w.textContent=I),f&&(f.style.display=T?"":"none")},b=w=>{if(w==="gps")return;const f=Ye[w]?.display,T=n[w];if(!f||!T)return;const I=f.closest(".metric-group"),E=h[w];if(I)if(E===!1){I.style.display="none";return}else I.style.display==="none"&&(I.style.display="");if(!T.isConnected){f.textContent="--",(w==="power"||w==="heartrate")&&ct(f,null);return}const C=e[w];if(!Array.isArray(C)||C.length===0){f.textContent="--";return}const L=C[C.length-1];if(!L||typeof L.value!="number"||typeof L.timestamp!="number"){f.textContent="--";return}if(Date.now()-L.timestamp>en){f.textContent="--";return}if(f.textContent=String(L.value),w==="power"){const _=ce.updatePower(L.value,L.timestamp),A=_?.zone??null;A!==m&&(A!==null&&m!==null&&wt.announceZoneChange(_.name),m=A),ct(f,A)}else if(w==="heartrate"){const _=ce.updateHeartRate(L.value,L.timestamp),A=_?.zone??null;A!==u&&(A!==null&&u!==null&&wt.announceZoneChange(_.name),u=A),ct(f,A)}},v=["power","heartrate","cadence","speed","distance","altitude","treadmillSpeed"];return setInterval(()=>{v.forEach(b),y(),ur(o,s,ce),g()},ir),document.addEventListener("workoutStarted",()=>{c&&(c.style.display="inline-flex")}),document.addEventListener("workoutStopped",()=>{c&&(c.style.display="none")}),window.addEventListener("storage",w=>{w.key==="bpt-user-profile"&&ce.loadProfile()}),document.addEventListener("workout-discarded",()=>{ce.reset(),p=0,l=0,a&&a.clear(),i&&i.clear()}),ce},Ne="https://api.bikepowertracker.com",pr="super-secret-bike-tracker-key";function Qe(n={}){const e={...n};return e["X-API-Key"]=pr,e}async function hr(n){const e=await fetch(`${Ne}/api/streams/create`,{method:"POST",headers:Qe({"Content-Type":"application/json"}),body:JSON.stringify({streamName:n})});if(!e.ok){const t=await e.json();throw new Error(t.error||"Failed to create stream")}return e.json()}async function gr(){const n=await fetch(`${Ne}/api/streams`,{headers:Qe()});if(!n.ok){const e=await n.text();throw new Error(e||"Failed to list streams")}return n.json()}async function fr(n,e,t="anonymous"){const o=await fetch(`${Ne}/api/streams/${n}/messages`,{method:"POST",headers:Qe({"Content-Type":"application/json"}),body:JSON.stringify({message:e,author:t})});if(!o.ok){const s=await o.json();throw new Error(s.error||"Failed to add message")}return o.json()}function Ln(n,e,t,o){const s=new AbortController;let a=!0;const i={close:()=>{a=!1,s.abort()},get active(){return a}};return(async()=>{try{const r=await fetch(n,{method:"GET",headers:Qe({Accept:"text/event-stream","Cache-Control":"no-cache"}),signal:s.signal});if(!r.ok)throw new Error(`SSE connection failed: ${r.status} ${r.statusText}`);if(!r.body)throw new Error("SSE response has no body");const c=r.body.getReader(),d=new TextDecoder;let p="";for(;a;){const{done:l,value:m}=await c.read();if(l)break;p+=d.decode(m,{stream:!0});const u=p.split(`

`);p=u.pop()||"";for(const h of u){if(!h.trim())continue;const g=h.match(/^data:\s*(.+)$/m);if(g)try{const y=JSON.parse(g[1]);y.type==="connected"&&t?t(y):y.type==="message"&&e(y)}catch(y){console.error("Error parsing SSE data:",y)}}}}catch(r){if(r.name==="AbortError")return;console.error("SSE connection error:",r),o&&o(r)}finally{a=!1}})(),i}function yr(n,e,t,o){const s=`${Ne}/api/streams/${n}/listen`;return Ln(s,e,t,o)}function vr(n,e,t){const o=`${Ne}/api/streams/listenAll`;return Ln(o,n,e,t)}async function wr(n,e){const t=JSON.stringify({power:e.power??null,cadence:e.cadence??null,heartrate:e.heartrate??null,speed:e.speed??null,distance:e.distance??null,altitude:e.altitude??null,incline:e.incline??null,timestamp:e.timestamp,elapsed:e.elapsed,dataType:"workout_metrics"});return fr(n,t,"bike-power-tracker")}class br{modal=null;currentConnection=null;streamMetricsSection=null;allStreamsMetricsSection=null;allStreamsConnection=null;streamCards=new Map;streamRows=new Map;isCompactView=!1;constructor(){this.initModal(),this.initInlineViewer(),this.initAllStreamsViewer()}initInlineViewer(){if(this.streamMetricsSection=document.getElementById("streamMetrics"),!this.streamMetricsSection){console.warn("Stream metrics section not found in DOM");return}const e=document.getElementById("closeStreamView");e&&e.addEventListener("click",()=>this.disconnectFromStream())}initAllStreamsViewer(){if(this.allStreamsMetricsSection=document.getElementById("allStreamsMetrics"),!this.allStreamsMetricsSection){console.warn("All streams metrics section not found in DOM");return}const e=document.getElementById("closeAllStreamsView");e&&e.addEventListener("click",()=>this.disconnectFromAllStreams());const t=document.getElementById("toggleViewBtn");t&&t.addEventListener("click",()=>this.toggleAllStreamsView())}toggleAllStreamsView(){this.isCompactView=!this.isCompactView;const e=document.getElementById("allStreamsGrid"),t=document.getElementById("allStreamsList"),o=document.getElementById("toggleViewBtn");this.isCompactView?(e&&(e.style.display="none"),t&&(t.style.display="flex"),o&&(o.textContent="🔲",o.title="Toggle grid view",o.classList.add("active"))):(e&&(e.style.display="grid"),t&&(t.style.display="none"),o&&(o.textContent="📋",o.title="Toggle compact view",o.classList.remove("active")))}initModal(){const e=document.createElement("div");e.id="streamViewerModal",e.className="stream-modal",e.innerHTML=`
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
    `,document.body.appendChild(e),this.modal=e,this.setupEventListeners()}setupEventListeners(){const e=document.getElementById("closeStreamModal"),t=document.getElementById("refreshStreamList"),o=document.getElementById("viewAllStreamsBtn");e&&e.addEventListener("click",()=>this.close()),t&&t.addEventListener("click",()=>this.refreshStreamList()),o&&o.addEventListener("click",()=>this.connectToAllStreams()),this.modal&&this.modal.addEventListener("click",s=>{s.target===this.modal&&this.close()})}async open(){this.modal&&(this.modal.style.display="flex"),await this.refreshStreamList()}close(){this.modal&&(this.modal.style.display="none")}async refreshStreamList(){const e=document.getElementById("streamsList");if(e){e.innerHTML='<p class="loading">Loading streams...</p>';try{const{streams:t}=await gr();if(t.length===0){e.innerHTML='<p class="no-streams">No active streams found</p>';return}e.innerHTML="",t.forEach(o=>{const s=this.createStreamItem(o);e.appendChild(s)})}catch(t){console.error("Failed to load streams:",t);const o=t instanceof Error?t.message:"Unknown error";e.innerHTML=`<p class="error">Failed to load streams: ${o}</p>`}}}createStreamItem(e){const t=document.createElement("div");t.className="stream-item";const s=e.name.startsWith("workout-")?"🚴":"💬";return t.innerHTML=`
      <div class="stream-item-info">
        <div class="stream-item-name">${s} ${e.name}</div>
        <div class="stream-item-meta">
          ${e.length} message${e.length!==1?"s":""}
        </div>
      </div>
      <button class="connect-button" data-stream="${e.name}">
        👁️ View
      </button>
    `,t.querySelector(".connect-button")?.addEventListener("click",()=>{this.connectToStream(e.name)}),t}connectToStream(e){if(this.disconnectFromStream(),!this.streamMetricsSection){console.error("Stream metrics section not available");return}this.streamMetricsSection.style.display="flex";const t=document.getElementById("toggleStreamMetrics");t&&(t.checked=!0);const o=document.getElementById("streamTitle"),s=document.getElementById("streamStatus");o&&(o.textContent=e),s&&(s.textContent="Connecting...",s.className="status-badge connecting"),this.close(),this.currentConnection=yr(e,a=>this.handleStreamMessage(a),()=>this.handleStreamConnected(),a=>this.handleStreamError(a))}connectToAllStreams(){if(this.disconnectFromStream(),this.disconnectFromAllStreams(),!this.allStreamsMetricsSection){console.error("All streams metrics section not available");return}this.allStreamsMetricsSection.style.display="flex",this.close();const e=document.getElementById("allStreamsGrid"),t=document.getElementById("allStreamsList");e&&(e.innerHTML=""),t&&(t.innerHTML=""),this.streamCards.clear(),this.streamRows.clear();const o=document.getElementById("allStreamsStatus");o&&(o.textContent="Connecting...",o.className="status-badge connecting"),this.allStreamsConnection=vr(s=>this.handleAllStreamsMessage(s),()=>this.handleAllStreamsConnected(),s=>this.handleAllStreamsError(s))}handleAllStreamsConnected(){console.log("Connected to all streams");const e=document.getElementById("allStreamsStatus");e&&(e.textContent="🟢 Connected",e.className="status-badge connected")}handleAllStreamsError(e){console.error("All streams error:",e);const t=document.getElementById("allStreamsStatus");t&&(this.allStreamsConnection&&this.allStreamsConnection.active?(t.textContent="🔄 Reconnecting...",t.className="status-badge reconnecting"):(t.textContent="🔴 Error",t.className="status-badge error"))}disconnectFromAllStreams(){this.allStreamsConnection&&(this.allStreamsConnection.close(),this.allStreamsConnection=null),this.allStreamsMetricsSection&&(this.allStreamsMetricsSection.style.display="none");const e=document.getElementById("yourMetrics");e&&(e.style.display="flex")}handleAllStreamsMessage(e){try{const t=e.stream,o=typeof e.data=="string"?JSON.parse(e.data):e.data;this.updateStreamCard(t,o)}catch(t){console.error("Error parsing stream message:",t,e)}}updateStreamCard(e,t){const o=document.getElementById("allStreamsGrid"),s=document.getElementById("allStreamsList");let a={};try{t.message?a=JSON.parse(t.message):a=t}catch{}if(o){let i=this.streamCards.get(e);if(i||(i=document.createElement("div"),i.className="stream-card",i.innerHTML=`
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
        `,o.appendChild(i),this.streamCards.set(e,i)),a.power!==void 0&&a.power!==null){const r=i.querySelector(".stream-card-power");r&&(r.textContent=String(a.power))}if(a.cadence!==void 0&&a.cadence!==null){const r=i.querySelector(".card-cadence");r&&(r.textContent=String(a.cadence))}if(a.heartrate!==void 0&&a.heartrate!==null){const r=i.querySelector(".card-heartrate");r&&(r.textContent=String(a.heartrate))}}if(s){let i=this.streamRows.get(e);if(i||(i=document.createElement("div"),i.className="stream-row",i.innerHTML=`
          <span class="stream-row-name" title="${e}">${e}</span>
          <span class="stream-row-power">--</span>
        `,s.appendChild(i),this.streamRows.set(e,i)),a.power!==void 0&&a.power!==null){const r=i.querySelector(".stream-row-power");r&&(r.textContent=String(a.power))}}}disconnectFromStream(){if(this.disconnectFromAllStreams(),this.currentConnection&&(this.currentConnection.close(),this.currentConnection=null),this.streamMetricsSection){this.streamMetricsSection.style.display="none";const t=document.getElementById("toggleStreamMetrics");t&&(t.checked=!1)}const e=document.getElementById("yourMetrics");e&&(e.style.display="flex"),this.resetViewer()}handleStreamConnected(){const e=document.getElementById("streamStatus");e&&(e.textContent="🟢 Connected",e.className="status-badge connected")}handleStreamMessage(e){try{const t=e.data?.message,o=typeof t=="string"?JSON.parse(t):e.data;(o.dataType==="workout_metrics"||o.power!==void 0||o.cadence!==void 0||o.heartrate!==void 0)&&this.updateMetrics(o);const s=document.getElementById("streamLastUpdate");if(s){const a=new Date;s.textContent=`Last update: ${a.toLocaleTimeString()}`}}catch(t){console.error("Error parsing stream message:",t,e)}}updateMetrics(e){const t=document.getElementById("streamPower"),o=document.getElementById("streamCadence"),s=document.getElementById("streamHeartrate"),a=document.getElementById("streamSpeed"),i=document.getElementById("streamDistance"),r=document.getElementById("streamAltitude"),c=document.getElementById("streamElapsed");t&&e.power!==null&&e.power!==void 0&&(t.textContent=String(e.power)),o&&e.cadence!==null&&e.cadence!==void 0&&(o.textContent=String(e.cadence)),s&&e.heartrate!==null&&e.heartrate!==void 0&&(s.textContent=String(e.heartrate)),a&&e.speed!==null&&e.speed!==void 0&&(a.textContent=String(e.speed)),i&&e.distance!==null&&e.distance!==void 0&&(i.textContent=String(e.distance)),r&&e.altitude!==null&&e.altitude!==void 0&&(r.textContent=String(e.altitude)),c&&e.elapsed&&(c.textContent=e.elapsed)}handleStreamError(e){console.error("Stream error:",e);const t=document.getElementById("streamStatus");t&&(this.currentConnection&&this.currentConnection.active?(t.textContent="🔄 Reconnecting...",t.className="status-badge reconnecting"):(t.textContent="🔴 Error",t.className="status-badge error"))}resetViewer(){["streamPower","streamCadence","streamHeartrate","streamSpeed","streamDistance","streamAltitude","streamElapsed"].forEach(o=>{const s=document.getElementById(o);s&&(s.textContent="--")});const t=document.getElementById("streamLastUpdate");t&&(t.textContent="Waiting for data...")}}function Er(){const n=new br,e=document.getElementById("viewStreamsButton");return e&&e.addEventListener("click",()=>n.open()),n}function xr(n,e){const t=document.getElementById("startStreamButton"),o=document.getElementById("streamNameModal"),s=document.getElementById("closeStreamNameModal"),a=document.getElementById("cancelStreamName"),i=document.getElementById("confirmStreamName"),r=document.getElementById("streamNameInput"),c=document.getElementById("activeStreamToolbar"),d=document.getElementById("toolbarStreamName"),p=document.getElementById("streamPlayPauseBtn"),l=document.getElementById("streamStopBtn"),m=document.querySelector(".stream-indicator"),u=f=>{c&&(f.isStreaming?(c.style.display="flex",document.body.classList.add("has-stream-toolbar"),d&&(d.textContent=f.streamName),p&&(f.isPaused?(p.textContent="▶️",p.title="Resume Stream",m?.classList.add("paused")):(p.textContent="⏸️",p.title="Pause Stream",m?.classList.remove("paused")))):(c.style.display="none",document.body.classList.remove("has-stream-toolbar")))};if(!t){console.warn("Start stream button not found in DOM");return}const h=()=>{o&&(o.style.display="none"),r&&(r.value="")},g=async()=>{const f=r?.value.trim()||"";try{const T=await n.startStreaming(f||void 0);t.textContent="🔴 Stop Streaming",t.classList.add("streaming"),u(n.getStatus()),H(`Streaming to: ${T}`,"success"),h()}catch(T){console.error("Failed to start streaming:",T);const I=T instanceof Error?T.message:"Unknown error";H("Failed to start streaming: "+I,"error")}},y=async()=>{try{await n.stopStreaming(),t.textContent="📡 Start Streaming",t.classList.remove("streaming"),u(n.getStatus()),H("Streaming stopped","info")}catch(f){console.error(f),H("Error stopping stream","error")}};p&&p.addEventListener("click",()=>{n.getStatus().isPaused?(n.resumeStreaming(),H("Stream Resumed","success")):(n.pauseStreaming(),H("Stream Paused","info")),u(n.getStatus())}),l&&l.addEventListener("click",async()=>{confirm("Stop streaming?")&&await y()}),s&&s.addEventListener("click",h),a&&a.addEventListener("click",h),i&&i.addEventListener("click",g),r&&r.addEventListener("keypress",f=>{f.key==="Enter"&&g()}),o&&o.addEventListener("click",f=>{f.target===o&&h()}),t.addEventListener("click",async()=>{if(n.isStreaming)await y();else if(o)o.style.display="flex",r?.focus();else try{const f=await n.startStreaming();t.textContent="🔴 Stop Streaming",t.classList.add("streaming"),u(n.getStatus()),H(`Streaming to: ${f}`,"success")}catch(f){console.error("Failed to start streaming:",f);const T=f instanceof Error?f.message:"Unknown error";H("Failed to start streaming: "+T,"error")}});const b=document.getElementById("pauseButton"),v=document.getElementById("stopButton"),w=()=>{e.running===!1&&n.isStreaming&&setTimeout(()=>{!e.running&&n.isStreaming&&(n.stopStreaming(),t.textContent="📡 Start Streaming",t.classList.remove("streaming"),u(n.getStatus()))},100)};b&&b.addEventListener("click",w),v&&v.addEventListener("click",w)}const Lt="bpt-dark-mode";function In(){try{const n=localStorage.getItem(Lt);return n==="light"||n==="dark"||n==="system"?n:null}catch{return null}}function Tr(n){try{localStorage.setItem(Lt,n)}catch{}}function It(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function we(n){document.documentElement.setAttribute("data-theme",n)}function $n(n){return n==="system"?It()?"dark":"light":n}function Sr(){const n=In();if(n){const t=$n(n);return we(t),t==="dark"}const e=It();return e&&we("dark"),e}function kr(n){const e=Sr();n.checked=e,n.addEventListener("change",()=>{const o=n.checked?"dark":"light";we(o),Tr(o),S(`Dark mode ${n.checked?"enabled":"disabled"}`)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",o=>{const s=In();if(!s||s==="system"){const a=o.matches?"dark":"light";we(a),n.checked=o.matches,S(`Dark mode ${o.matches?"enabled":"disabled"}`)}}),window.addEventListener("storage",o=>{if(o.key===Lt){const s=o.newValue;if(s){const a=$n(s);we(a),n.checked=a==="dark"}else{const a=It();we(a?"dark":"light"),n.checked=a}}})}function Cr(n){const e=Math.floor(n/1e3),t=Math.floor(e/60),o=Math.floor(t/60);return o>0?`${o}h ${t%60}m`:t>0?`${t}m ${e%60}s`:`${e}s`}function Lr(n){return new Date(n).toLocaleString()}function Ir(n){const e=document.createElement("dialog");e.id="workout-recovery-modal",e.className="modal",e.setAttribute("aria-labelledby","recovery-modal-title");const t=n.power.length+n.heartrate.length+n.cadence.length,o=n.lastUpdated-n.startTime;return e.innerHTML=`
        <div class="modal-content">
            <h2 id="recovery-modal-title">🔄 Recover Workout?</h2>
            <p>An interrupted workout was found from your last session.</p>
            
            <div class="recovery-summary">
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Started</span>
                    <span class="recovery-stat-value">${Lr(n.startTime)}</span>
                </div>
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Duration</span>
                    <span class="recovery-stat-value">${Cr(o)}</span>
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
    `,e}function $r(){if(document.getElementById("recovery-modal-styles"))return;const n=document.createElement("style");n.id="recovery-modal-styles",n.textContent=`
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
    `,document.head.appendChild(n)}async function Ar(n){$r();const e=Ir(n);return document.body.appendChild(e),new Promise(t=>{const o=e.querySelector("#recovery-restore-btn"),s=e.querySelector("#recovery-discard-btn"),a=()=>{e.close(),e.remove()};o.addEventListener("click",()=>{a(),t("restore")}),s.addEventListener("click",()=>{a(),t("discard")}),e.addEventListener("cancel",i=>{i.preventDefault()}),e.showModal()})}async function Br(n,e){try{if(!await Kn())return!1;const t=await Et();return t?await Ar(t)==="restore"?(n.restore({heartrate:t.heartrate,power:t.power,cadence:t.cadence,speed:t.speed,distance:t.distance,altitude:t.altitude,laps:t.laps,gps:t.gps||[]},t.startTime),e.startTime=t.startTime,e.running=!1,console.log(`Restored workout with ${t.power.length} power readings`),!0):(await bt(),console.log("User discarded recovered workout"),!1):!1}catch(t){return console.error("Error during workout recovery:",t),!1}}function Mr(){const n=document.getElementById("aboutButton"),e=document.getElementById("aboutModal"),t=document.getElementById("closeAboutModal");if(!n||!e)return;const o=()=>{e.style.display="flex";const a=document.querySelector("header details");a&&a.removeAttribute("open")},s=()=>{e.style.display="none"};n.addEventListener("click",o),t?.addEventListener("click",s),window.addEventListener("click",a=>{a.target===e&&s()})}const Dr=()=>{let n=null;const e=async()=>{try{"wakeLock"in navigator&&(n=await navigator.wakeLock.request("screen"),console.log("Screen wake lock activated"),n.addEventListener("release",()=>{console.log("Screen wake lock released")}))}catch(t){console.error("Wake lock request failed:",t)}};document.visibilityState==="visible"&&e(),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})};function Pr(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:o,onRegistered:s,onRegisteredSW:a,onRegisterError:i}=n;let r,c;const d=async(l=!0)=>{await c};async function p(){if("serviceWorker"in navigator){if(r=await Tt(async()=>{const{Workbox:l}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:l}},[]).then(({Workbox:l})=>new l("/sw.js",{scope:"/",type:"classic"})).catch(l=>{i?.(l)}),!r)return;r.addEventListener("activated",l=>{(l.isUpdate||l.isExternal)&&window.location.reload()}),r.addEventListener("installed",l=>{l.isUpdate||o?.()}),r.register({immediate:e}).then(l=>{a?a("/sw.js",l):s?.(l)}).catch(l=>{i?.(l)})}}return c=p(),d}const _r=()=>{if(R.isNativePlatform()){console.log("Service Worker disabled on native platform"),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(e=>{for(const t of e)t.unregister()});return}const n=Pr({onNeedRefresh(){Nr(n)},onOfflineReady(){console.log("App ready to work offline")},onRegistered(e){console.log("Service Worker registered successfully"),e&&setInterval(()=>{e.update()},3600*1e3)},onRegisterError(e){console.log("Service Worker registration failed:",e)}})},Nr=n=>{const e=document.getElementById("updateNotification");if(!e)return;e.style.display="block",document.getElementById("updateButton")?.addEventListener("click",()=>{n(!0)},{once:!0}),document.getElementById("dismissUpdate")?.addEventListener("click",()=>{e.style.display="none"},{once:!0})};function Rr({measurementsState:n,timeState:e,connectionsState:t,streamManager:o}){Ps(e);const s=mr({connectionsState:t,measurementsState:n});Dr(),_r(),Is(),Mr(),Er(),xr(o,e),En(),Co();const a=document.getElementById("toggleDarkMode");return a&&kr(a),us(),qa({measurementsState:n,timeState:e}),Br(n,e).then(i=>{i&&(console.log("Workout recovered from previous session"),document.dispatchEvent(new CustomEvent("workout-recovered")))}),Ja({measurementsState:n,timeState:e,zoneState:s}),er(n,s),Ka(),tr({measurementsState:n,timeState:e,zoneState:s}),s}var tn;(function(n){n[n.SCAN_MODE_LOW_POWER=0]="SCAN_MODE_LOW_POWER",n[n.SCAN_MODE_BALANCED=1]="SCAN_MODE_BALANCED",n[n.SCAN_MODE_LOW_LATENCY=2]="SCAN_MODE_LOW_LATENCY"})(tn||(tn={}));var nn;(function(n){n[n.CONNECTION_PRIORITY_BALANCED=0]="CONNECTION_PRIORITY_BALANCED",n[n.CONNECTION_PRIORITY_HIGH=1]="CONNECTION_PRIORITY_HIGH",n[n.CONNECTION_PRIORITY_LOW_POWER=2]="CONNECTION_PRIORITY_LOW_POWER"})(nn||(nn={}));function Or(n){return new DataView(Uint8Array.from(n).buffer)}function Vr(n){return Array.from(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}function Fr(n){return`0000${n.toString(16).padStart(4,"0")}-0000-1000-8000-00805f9b34fb`}function An(n){const e=[];let t,o,s=1,a=0;for(t=0;t<n.length;t++)o=n.charCodeAt(t),(o>47&&o<58||o>64&&o<71||o>96&&o<103)&&(a=a<<4^(o>64?o+9:o)&15,(s^=1)&&e.push(a&255));return Or(e)}function Be(n){return Vr(n).map(e=>{let t=e.toString(16);return t.length==1&&(t="0"+t),t}).join("")}function hi(n){if(typeof n=="string")return n;if(typeof n=="number")return Fr(n);throw new Error("Invalid UUID")}function gi(n){const e={};if(n)return n.forEach((t,o)=>{e[o.toString()]=t}),e}function on(n){if(n!==void 0){if(typeof n=="string"){const e=An(n);return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}return n instanceof DataView?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):n}}function Ue(n){if(n!==void 0)return n instanceof DataView?Be(n):Be(new DataView(n.buffer,n.byteOffset,n.byteLength))}const k=Te("BluetoothLe",{web:()=>Tt(()=>import("./web-DV0WoB3H.js"),[]).then(n=>new n.BluetoothLeWeb)}),Hr=()=>{let n=Promise.resolve();return e=>new Promise((t,o)=>{n=n.then(()=>e()).then(t).catch(o)})};function lt(n){return n?Hr():e=>e()}function B(n){if(typeof n!="string")throw new Error(`Invalid UUID type ${typeof n}. Expected string.`);if(n=n.toLowerCase(),!(n.search(/^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/)>=0))throw new Error(`Invalid UUID format ${n}. Expected 128 bit string (e.g. "0000180d-0000-1000-8000-00805f9b34fb").`);return n}class Ur{constructor(){this.scanListener=null,this.eventListeners=new Map,this.queue=lt(!0)}enableQueue(){this.queue=lt(!0)}disableQueue(){this.queue=lt(!1)}async initialize(e){await this.queue(async()=>{await k.initialize(e)})}async isEnabled(){return await this.queue(async()=>(await k.isEnabled()).value)}async requestEnable(){await this.queue(async()=>{await k.requestEnable()})}async enable(){await this.queue(async()=>{await k.enable()})}async disable(){await this.queue(async()=>{await k.disable()})}async startEnabledNotifications(e){await this.queue(async()=>{var t;const o="onEnabledChanged";await((t=this.eventListeners.get(o))===null||t===void 0?void 0:t.remove());const s=await k.addListener(o,a=>{e(a.value)});this.eventListeners.set(o,s),await k.startEnabledNotifications()})}async stopEnabledNotifications(){await this.queue(async()=>{var e;const t="onEnabledChanged";await((e=this.eventListeners.get(t))===null||e===void 0?void 0:e.remove()),this.eventListeners.delete(t),await k.stopEnabledNotifications()})}async isLocationEnabled(){return await this.queue(async()=>(await k.isLocationEnabled()).value)}async openLocationSettings(){await this.queue(async()=>{await k.openLocationSettings()})}async openBluetoothSettings(){await this.queue(async()=>{await k.openBluetoothSettings()})}async openAppSettings(){await this.queue(async()=>{await k.openAppSettings()})}async setDisplayStrings(e){await this.queue(async()=>{await k.setDisplayStrings(e)})}async requestDevice(e){return e=e?this.validateRequestBleDeviceOptions(e):void 0,await this.queue(async()=>await k.requestDevice(e))}async requestLEScan(e,t){e=this.validateRequestBleDeviceOptions(e),await this.queue(async()=>{var o;await((o=this.scanListener)===null||o===void 0?void 0:o.remove()),this.scanListener=await k.addListener("onScanResult",s=>{const a=Object.assign(Object.assign({},s),{manufacturerData:this.convertObject(s.manufacturerData),serviceData:this.convertObject(s.serviceData),rawAdvertisement:s.rawAdvertisement?this.convertValue(s.rawAdvertisement):void 0});t(a)}),await k.requestLEScan(e)})}async stopLEScan(){await this.queue(async()=>{var e;await((e=this.scanListener)===null||e===void 0?void 0:e.remove()),this.scanListener=null,await k.stopLEScan()})}async getDevices(e){if(!Array.isArray(e))throw new Error("deviceIds must be an array");return this.queue(async()=>(await k.getDevices({deviceIds:e})).devices)}async getConnectedDevices(e){if(!Array.isArray(e))throw new Error("services must be an array");return e=e.map(B),this.queue(async()=>(await k.getConnectedDevices({services:e})).devices)}async getBondedDevices(){return this.queue(async()=>(await k.getBondedDevices()).devices)}async connect(e,t,o){await this.queue(async()=>{var s;if(t){const a=`disconnected|${e}`;await((s=this.eventListeners.get(a))===null||s===void 0?void 0:s.remove());const i=await k.addListener(a,()=>{t(e)});this.eventListeners.set(a,i)}await k.connect(Object.assign({deviceId:e},o))})}async createBond(e,t){await this.queue(async()=>{await k.createBond(Object.assign({deviceId:e},t))})}async isBonded(e){return await this.queue(async()=>(await k.isBonded({deviceId:e})).value)}async disconnect(e){await this.queue(async()=>{await k.disconnect({deviceId:e})})}async getServices(e){return await this.queue(async()=>(await k.getServices({deviceId:e})).services)}async discoverServices(e){await this.queue(async()=>{await k.discoverServices({deviceId:e})})}async getMtu(e){return await this.queue(async()=>(await k.getMtu({deviceId:e})).value)}async requestConnectionPriority(e,t){await this.queue(async()=>{await k.requestConnectionPriority({deviceId:e,connectionPriority:t})})}async readRssi(e){return await this.queue(async()=>{const o=await k.readRssi({deviceId:e});return parseFloat(o.value)})}async read(e,t,o,s){return t=B(t),o=B(o),await this.queue(async()=>{const i=await k.read(Object.assign({deviceId:e,service:t,characteristic:o},s));return this.convertValue(i.value)})}async write(e,t,o,s,a){return t=B(t),o=B(o),this.queue(async()=>{if(!s?.buffer)throw new Error("Invalid data.");let i=s;R.getPlatform()!=="web"&&(i=Be(s)),await k.write(Object.assign({deviceId:e,service:t,characteristic:o,value:i},a))})}async writeWithoutResponse(e,t,o,s,a){t=B(t),o=B(o),await this.queue(async()=>{if(!s?.buffer)throw new Error("Invalid data.");let i=s;R.getPlatform()!=="web"&&(i=Be(s)),await k.writeWithoutResponse(Object.assign({deviceId:e,service:t,characteristic:o,value:i},a))})}async readDescriptor(e,t,o,s,a){return t=B(t),o=B(o),s=B(s),await this.queue(async()=>{const r=await k.readDescriptor(Object.assign({deviceId:e,service:t,characteristic:o,descriptor:s},a));return this.convertValue(r.value)})}async writeDescriptor(e,t,o,s,a,i){return t=B(t),o=B(o),s=B(s),this.queue(async()=>{if(!a?.buffer)throw new Error("Invalid data.");let r=a;R.getPlatform()!=="web"&&(r=Be(a)),await k.writeDescriptor(Object.assign({deviceId:e,service:t,characteristic:o,descriptor:s,value:r},i))})}async startNotifications(e,t,o,s,a){t=B(t),o=B(o),await this.queue(async()=>{var i;const r=`notification|${e}|${t}|${o}`;await((i=this.eventListeners.get(r))===null||i===void 0?void 0:i.remove());const c=await k.addListener(r,d=>{s(this.convertValue(d?.value))});this.eventListeners.set(r,c),await k.startNotifications(Object.assign({deviceId:e,service:t,characteristic:o},a))})}async stopNotifications(e,t,o){t=B(t),o=B(o),await this.queue(async()=>{var s;const a=`notification|${e}|${t}|${o}`;await((s=this.eventListeners.get(a))===null||s===void 0?void 0:s.remove()),this.eventListeners.delete(a),await k.stopNotifications({deviceId:e,service:t,characteristic:o})})}validateRequestBleDeviceOptions(e){return e.services&&(e.services=e.services.map(B)),e.optionalServices&&(e.optionalServices=e.optionalServices.map(B)),e.serviceData&&R.getPlatform()!=="web"&&(e.serviceData=e.serviceData.map(t=>Object.assign(Object.assign({},t),{serviceUuid:B(t.serviceUuid),dataPrefix:Ue(t.dataPrefix),mask:Ue(t.mask)}))),e.manufacturerData&&(R.getPlatform()!=="web"?e.manufacturerData=e.manufacturerData.map(t=>Object.assign(Object.assign({},t),{dataPrefix:Ue(t.dataPrefix),mask:Ue(t.mask)})):e.manufacturerData=e.manufacturerData.map(t=>Object.assign(Object.assign({},t),{dataPrefix:on(t.dataPrefix),mask:on(t.mask)}))),e}convertValue(e){return typeof e=="string"?An(e):e===void 0?new DataView(new ArrayBuffer(0)):e}convertObject(e){if(e===void 0)return;const t={};for(const o of Object.keys(e))t[o]=this.convertValue(e[o]);return t}}const $=new Ur,Bn=n=>{const e=n.getUint16(0,!0);let t=2;const o={},s=(e&2)!==0,a=(e&4)!==0,i=(e&8)!==0;if(n.byteLength>=t+2){const r=n.getUint16(t,!0);o.speed=r/100,t+=2}if(s&&n.byteLength>=t+2){const r=n.getUint16(t,!0);o.averageSpeed=r/100,t+=2}if(a&&n.byteLength>=t+3){const r=n.getUint8(t),c=n.getUint8(t+1),d=n.getUint8(t+2),p=r+(c<<8)+(d<<16);o.totalDistance=p,t+=3}if(i&&n.byteLength>=t+4){const r=n.getInt16(t,!0);o.incline=r/10,t+=2;const c=n.getInt16(t,!0);o.rampAngle=c/10,t+=2}return o},dt="00001818-0000-1000-8000-00805f9b34fb",sn="00002a63-0000-1000-8000-00805f9b34fb",ze="0000180d-0000-1000-8000-00805f9b34fb",an="00002a37-0000-1000-8000-00805f9b34fb",We="00001816-0000-1000-8000-00805f9b34fb",rn="00002a5b-0000-1000-8000-00805f9b34fb",qe="00001826-0000-1000-8000-00805f9b34fb",cn="00002acd-0000-1000-8000-00805f9b34fb",q=5,et=1e3;let ln=!1;const tt=async()=>{if(!ln)try{await $.initialize(),ln=!0}catch(n){throw console.error("Failed to initialize BleClient:",n),n}},zr=async()=>{const n=[],e=[];let t=null,o=!1,s=0;await tt();let a;try{a=await $.requestDevice({services:[dt],optionalServices:[]})}catch(l){throw console.error("Error requesting Power device:",l),l}t=a.deviceId;const i=a.name||"Power Sensor",r=l=>{e.forEach(m=>m(l))},c=async()=>{t&&(await $.connect(t,p),r("connected"),await $.startNotifications(t,dt,sn,l=>{Y.log(i,l);const m=l.getInt16(2,!0),u={timestamp:Date.now(),value:m};n.forEach(h=>h(u))}),s=0)},d=async()=>{if(o||s>=q){s>=q&&(console.error("Native Power sensor: Max reconnection attempts reached"),r("failed"));return}s++;const l=et*Math.pow(2,s-1);console.log(`Native Power sensor: Reconnection attempt ${s}/${q} in ${l}ms`),r("reconnecting"),await new Promise(m=>setTimeout(m,l));try{await c(),console.log("Native Power sensor: Reconnected successfully")}catch(m){console.error("Native Power sensor: Reconnection failed:",m),d()}},p=l=>{l===t&&!o&&(console.log("Native Power sensor: Disconnected"),r("disconnected"),d())};return await c(),{disconnect:async()=>{if(o=!0,t)try{await $.stopNotifications(t,dt,sn),await $.disconnect(t)}catch(l){console.error("Error disconnecting native bluetooth:",l)}},addListener:l=>{n.push(l)},deviceName:i,onStatusChange:l=>{e.push(l)}}},Wr=async()=>{const n=[],e=[];let t=null,o=!1,s=0;await tt();let a;try{a=await $.requestDevice({services:[ze],optionalServices:[ze]})}catch(l){throw console.error("Error requesting Heart Rate device:",l),l}t=a.deviceId;const i=a.name||"Heart Rate Monitor",r=l=>{e.forEach(m=>m(l))},c=async()=>{t&&(await $.connect(t,p),r("connected"),await $.startNotifications(t,ze,an,l=>{Y.log(i,l);const m=l.getUint8(0);let u;m&1?u=l.getUint16(1,!0):u=l.getUint8(1);const h={timestamp:Date.now(),value:u};n.forEach(g=>g(h))}),s=0)},d=async()=>{if(o||s>=q){s>=q&&(console.error("Native Heart Rate sensor: Max reconnection attempts reached"),r("failed"));return}s++;const l=et*Math.pow(2,s-1);console.log(`Native Heart Rate sensor: Reconnection attempt ${s}/${q} in ${l}ms`),r("reconnecting"),await new Promise(m=>setTimeout(m,l));try{await c(),console.log("Native Heart Rate sensor: Reconnected successfully")}catch(m){console.error("Native Heart Rate sensor: Reconnection failed:",m),d()}},p=l=>{l===t&&!o&&(console.log("Native Heart Rate sensor: Disconnected"),r("disconnected"),d())};return await c(),{disconnect:async()=>{if(o=!0,t)try{await $.stopNotifications(t,ze,an),await $.disconnect(t)}catch(l){console.error("Error disconnecting native bluetooth:",l)}},addListener:l=>{n.push(l)},deviceName:i,onStatusChange:l=>{e.push(l)}}},qr=async()=>{const n=[],e=[];let t=null,o=null,s=null,a=!1,i=0;await tt();let r;try{r=await $.requestDevice({services:[We],optionalServices:[We]})}catch(u){throw console.error("Error requesting Cadence device:",u),u}t=r.deviceId;const c=r.name||"Cadence Sensor",d=u=>{e.forEach(h=>h(u))},p=async()=>{t&&(await $.connect(t,m),d("connected"),await $.startNotifications(t,We,rn,u=>{Y.log(c,u);const h=u.getUint8(0);if(h&2){let g=1;h&1&&(g=7);const y=u.getUint16(g,!0),b=u.getUint16(g+2,!0);if(o!==null&&s!==null){let v=y-o,w=b-s;if(v<0&&(v+=65536),w<0&&(w+=65536),w>0){const f=w/1024,T=Math.round(v/f*60);if(T>=0&&T<300){const I={timestamp:Date.now(),value:T};n.forEach(E=>E(I))}}}o=y,s=b}}),i=0)},l=async()=>{if(a||i>=q){i>=q&&(console.error("Native Cadence sensor: Max reconnection attempts reached"),d("failed"));return}i++;const u=et*Math.pow(2,i-1);console.log(`Native Cadence sensor: Reconnection attempt ${i}/${q} in ${u}ms`),d("reconnecting"),await new Promise(h=>setTimeout(h,u));try{await p(),console.log("Native Cadence sensor: Reconnected successfully")}catch(h){console.error("Native Cadence sensor: Reconnection failed:",h),l()}},m=u=>{u===t&&!a&&(console.log("Native Cadence sensor: Disconnected"),d("disconnected"),l())};return await p(),{disconnect:async()=>{if(a=!0,t)try{await $.stopNotifications(t,We,rn),await $.disconnect(t)}catch(u){console.error("Error disconnecting native bluetooth:",u)}},addListener:u=>{n.push(u)},deviceName:c,onStatusChange:u=>{e.push(u)}}},jr=async()=>{const n=[],e=[];let t=null,o=!1,s=0;await tt();let a;try{a=await $.requestDevice({services:[qe],optionalServices:[qe]})}catch(l){throw console.error("Error requesting Treadmill device:",l),l}t=a.deviceId;const i=a.name||"Treadmill",r=l=>{e.forEach(m=>m(l))},c=l=>{l===t&&!o&&(console.log("Treadmill: Connection lost, attempting to reconnect..."),r("disconnected"),p())},d=async()=>{t&&(await $.connect(t,c),r("connected"),await $.startNotifications(t,qe,cn,l=>{Y.log(i,l);try{const m=Bn(l);if(m.speed!==void 0||m.incline!==void 0){const u={timestamp:Date.now(),speed:m.speed??null,incline:m.incline??null};n.forEach(h=>h(u))}}catch(m){console.error("Error parsing treadmill data",m)}}),s=0)},p=async()=>{if(o)return;if(s>=q){console.error("Treadmill: Max reconnection attempts reached"),r("failed");return}s++;const l=et*Math.pow(2,s-1);console.log(`Treadmill: Reconnection attempt ${s}/${q} in ${l}ms`),r("reconnecting"),await new Promise(m=>setTimeout(m,l));try{await d(),console.log("Treadmill: Reconnected successfully")}catch(m){console.error("Treadmill: Reconnection failed:",m),p()}};try{await d()}catch(l){if(t)try{await $.disconnect(t)}catch{}throw l}return{disconnect:async()=>{if(o=!0,t)try{await $.stopNotifications(t,qe,cn),await $.disconnect(t)}catch(l){console.error("Error disconnecting treadmill",l)}r("disconnected")},addListener:l=>{n.push(l)},deviceName:i,onStatusChange:l=>{e.push(l)}}},z=5,nt=1e3,Zr=async()=>{const n=[],e=[];let t=!1,o=0,s=null;const a=await navigator.bluetooth.requestDevice({filters:[{services:["cycling_power"]}],optionalServices:["cycling_power"]});if(!a.gatt)throw new Error("GATT server not available");const i=a.name||"Power Sensor",r=l=>{e.forEach(m=>m(l))},c=l=>{const u=l.target.value;if(!u)return;Y.log(i,u);const h=u.getInt16(2,!0),g={timestamp:Date.now(),value:h};n.forEach(y=>y(g))},d=async()=>{if(!a.gatt)return;s=await(await(await a.gatt.connect()).getPrimaryService("cycling_power")).getCharacteristic("cycling_power_measurement"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",c),o=0,r("connected")},p=async()=>{if(t||o>=z){o>=z&&(console.error("Power sensor: Max reconnection attempts reached"),r("failed"));return}o++;const l=nt*Math.pow(2,o-1);console.log(`Power sensor: Reconnection attempt ${o}/${z} in ${l}ms`),r("reconnecting"),await new Promise(m=>setTimeout(m,l));try{await d(),console.log("Power sensor: Reconnected successfully")}catch(m){console.error("Power sensor: Reconnection failed:",m),p()}};return a.addEventListener("gattserverdisconnected",()=>{t||(console.log("Power sensor: Connection lost, attempting to reconnect..."),r("disconnected"),p())}),await d(),{disconnect:()=>{t=!0,s&&(s.removeEventListener("characteristicvaluechanged",c),s.stopNotifications().catch(()=>{})),a.gatt?.disconnect()},addListener:l=>{n.push(l)},deviceName:i,onStatusChange:l=>{e.push(l)}}},Yr=async()=>{const n=[],e=[];let t=!1,o=0,s=null;const a=await navigator.bluetooth.requestDevice({filters:[{services:["heart_rate"]}],optionalServices:["heart_rate"]});if(!a.gatt)throw new Error("GATT server not available");const i=a.name||"Heart Rate Monitor",r=l=>{e.forEach(m=>m(l))},c=l=>{const u=l.target.value;if(!u)return;Y.log(i,u);const h=u.getUint8(0);let g;h&1?g=u.getUint16(1,!0):g=u.getUint8(1);const y={timestamp:Date.now(),value:g};n.forEach(b=>b(y))},d=async()=>{if(!a.gatt)return;s=await(await(await a.gatt.connect()).getPrimaryService("heart_rate")).getCharacteristic("heart_rate_measurement"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",c),o=0,r("connected")},p=async()=>{if(t||o>=z){o>=z&&(console.error("Heart rate sensor: Max reconnection attempts reached"),r("failed"));return}o++;const l=nt*Math.pow(2,o-1);console.log(`Heart rate sensor: Reconnection attempt ${o}/${z} in ${l}ms`),r("reconnecting"),await new Promise(m=>setTimeout(m,l));try{await d(),console.log("Heart rate sensor: Reconnected successfully")}catch(m){console.error("Heart rate sensor: Reconnection failed:",m),p()}};return a.addEventListener("gattserverdisconnected",()=>{t||(console.log("Heart rate sensor: Connection lost, attempting to reconnect..."),r("disconnected"),p())}),await d(),{disconnect:()=>{t=!0,s&&(s.removeEventListener("characteristicvaluechanged",c),s.stopNotifications().catch(()=>{})),a.gatt?.disconnect()},addListener:l=>{n.push(l)},deviceName:i,onStatusChange:l=>{e.push(l)}}},Gr=async()=>{const n=[],e=[];let t=!1,o=0,s=null,a=null,i=null;const r=await navigator.bluetooth.requestDevice({filters:[{services:["cycling_speed_and_cadence"]}],optionalServices:["cycling_speed_and_cadence"]});if(!r.gatt)throw new Error("GATT server not available");const c=r.name||"Cadence Sensor",d=u=>{e.forEach(h=>h(u))},p=u=>{const g=u.target.value;if(!g)return;Y.log(c,g);const y=g.getUint8(0);if(y&2){let b=1;y&1&&(b=7);const v=g.getUint16(b,!0),w=g.getUint16(b+2,!0);if(a!==null&&i!==null){let f=v-a,T=w-i;if(f<0&&(f+=65536),T<0&&(T+=65536),T>0){const I=T/1024,E=Math.round(f/I*60);if(E>=0&&E<300){const C={timestamp:Date.now(),value:E};n.forEach(L=>L(C))}}}a=v,i=w}},l=async()=>{if(!r.gatt)return;s=await(await(await r.gatt.connect()).getPrimaryService("cycling_speed_and_cadence")).getCharacteristic("csc_measurement"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",p),o=0,d("connected")},m=async()=>{if(t||o>=z){o>=z&&(console.error("Cadence sensor: Max reconnection attempts reached"),d("failed"));return}o++;const u=nt*Math.pow(2,o-1);console.log(`Cadence sensor: Reconnection attempt ${o}/${z} in ${u}ms`),d("reconnecting"),await new Promise(h=>setTimeout(h,u));try{await l(),console.log("Cadence sensor: Reconnected successfully")}catch(h){console.error("Cadence sensor: Reconnection failed:",h),m()}};return r.addEventListener("gattserverdisconnected",()=>{t||(console.log("Cadence sensor: Connection lost, attempting to reconnect..."),d("disconnected"),m())}),await l(),{disconnect:()=>{t=!0,s&&(s.removeEventListener("characteristicvaluechanged",p),s.stopNotifications().catch(()=>{})),r.gatt?.disconnect()},addListener:u=>{n.push(u)},deviceName:c,onStatusChange:u=>{e.push(u)}}},Kr=async()=>{const n=[],e=[];let t=!1,o=0,s=null,a;const i=await navigator.bluetooth.requestDevice({filters:[{services:["fitness_machine"]}],optionalServices:["fitness_machine"]});if(!i.gatt)throw new Error("GATT server not available");const r=i.name||"Treadmill",c=m=>{e.forEach(u=>u(m))},d=m=>{const h=m.target.value;if(h){Y.log(r,h);try{const g=Bn(h);if(g.speed!==void 0||g.incline!==void 0){const y={timestamp:Date.now(),speed:g.speed??null,incline:g.incline??null};n.forEach(b=>b(y))}}catch(g){console.error("Error parsing treadmill data",g)}}},p=async()=>{if(!i.gatt)return;a=await i.gatt.connect(),s=await(await a.getPrimaryService("fitness_machine")).getCharacteristic("treadmill_data"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",d),o=0,c("connected")},l=async()=>{if(t||o>=z){o>=z&&(console.error("Treadmill: Max reconnection attempts reached"),c("failed"));return}o++;const m=nt*Math.pow(2,o-1);console.log(`Treadmill: Reconnection attempt ${o}/${z} in ${m}ms`),c("reconnecting"),await new Promise(u=>setTimeout(u,m));try{await p(),console.log("Treadmill: Reconnected successfully")}catch(u){console.error("Treadmill: Reconnection failed:",u),l()}};i.addEventListener("gattserverdisconnected",()=>{t||(console.log("Treadmill: Connection lost, attempting to reconnect..."),c("disconnected"),l())});try{await p()}catch(m){throw a&&a.connected&&a.disconnect(),m}return{disconnect:()=>{if(t=!0,s)try{s.stopNotifications(),s.removeEventListener("characteristicvaluechanged",d)}catch{}i.gatt?.connected&&i.gatt.disconnect(),c("disconnected")},addListener:m=>{n.push(m)},deviceName:r,onStatusChange:m=>{e.push(m)}}},ot={connectPower:async()=>R.isNativePlatform()?zr():Zr(),connectHeartRate:async()=>R.isNativePlatform()?Wr():Yr(),connectCadence:async()=>R.isNativePlatform()?qr():Gr(),connectTreadmill:async()=>R.isNativePlatform()?jr():Kr()},Jr=async()=>ot.connectCadence(),Xr=async()=>ot.connectHeartRate(),Qr=async()=>ot.connectPower(),ei=async()=>ot.connectTreadmill(),ut=Te("BackgroundGeolocation"),ti=()=>{let n=null;return{start:async e=>{try{n=await ut.addWatcher({backgroundMessage:"Tracking your ride.",backgroundTitle:"Bike Power Tracker",requestPermissions:!0,stale:!1,distanceFilter:10},(t,o)=>{if(o)return o.code==="NOT_AUTHORIZED"&&window.confirm(`This app needs your location, but does not have permission.

Open settings now?`)&&ut.openSettings(),console.error(o);if(t){const s={timestamp:t.time||Date.now(),lat:t.latitude,lon:t.longitude,accuracy:t.accuracy,altitude:t.altitude,speed:t.speed,heading:t.bearing};e(s)}})}catch(t){console.error("Error starting native GPS:",t)}},stop:async()=>{n&&(await ut.removeWatcher({id:n}),n=null)}}},ni=()=>{let n=null;return{start:async e=>{if(!("geolocation"in navigator)){console.warn("Geolocation is not supported by this browser.");return}n=navigator.geolocation.watchPosition(t=>{const o={timestamp:t.timestamp,lat:t.coords.latitude,lon:t.coords.longitude,accuracy:t.coords.accuracy,altitude:t.coords.altitude,speed:t.coords.speed,heading:t.coords.heading};e(o)},t=>{console.error("Error watching position:",t)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},stop:async()=>{n!==null&&(navigator.geolocation.clearWatch(n),n=null)}}},oi={create:()=>R.isNativePlatform()?ti():ni()},si=async n=>{const e=oi.create();return await e.start(n),{stop:async()=>e.stop(),deviceName:"GPS Sensor"}},Mn={power:"Power Meter",heartrate:"Heart Rate Monitor",cadence:"Cadence Sensor",speed:"Speed Sensor",distance:"Distance Sensor",altitude:"Altimeter",gps:"GPS",treadmill:"Treadmill",treadmillSpeed:"Treadmill Speed"},Dn={power:"⚡",heartrate:"❤️",cadence:"🚴",speed:"💨",distance:"📏",altitude:"🏔️",gps:"📍",treadmill:"🏃",treadmillSpeed:"🏃"};function ai(n,e){const t=Mn[e],o=n instanceof Error?n.message:String(n),s=n instanceof Error?n.name:"";return o.includes("User cancelled")||o.includes("cancelled the requestDevice")?{title:"Connection Cancelled",message:`${t} pairing was cancelled.`,suggestions:["Click the connect button to try again","Make sure your sensor is powered on and in range"],canRetry:!0}:o.includes("Bluetooth adapter not available")||o.includes("Web Bluetooth API is not available")||s==="NotFoundError"&&o.includes("Bluetooth")?{title:"Bluetooth Unavailable",message:"Bluetooth is not available on this device or browser.",suggestions:["Check that Bluetooth is enabled in your device settings","Try using Chrome, Edge, or another browser that supports Web Bluetooth","On macOS, ensure Bluetooth permissions are granted in System Preferences","On Windows, check that your Bluetooth adapter is working"],canRetry:!1}:o.includes("No Bluetooth devices")||o.includes("No devices found")||s==="NotFoundError"&&!o.includes("Bluetooth")?{title:"No Sensors Found",message:`No compatible ${t.toLowerCase()} was found nearby.`,suggestions:["Make sure your sensor is powered on","Wake up the sensor by spinning the pedals or moving","Bring the sensor closer to your device","Check that the sensor battery is not depleted","Ensure the sensor is not connected to another device"],canRetry:!0}:o.includes("GATT")||o.includes("Connection failed")||o.includes("connect")&&o.includes("fail")?{title:"Connection Failed",message:`Could not connect to the ${t.toLowerCase()}.`,suggestions:["Try moving closer to the sensor","Power cycle the sensor (turn off and on again)","Check that no other device is connected to this sensor","Restart Bluetooth on your device","If using a phone, try closing other Bluetooth apps"],canRetry:!0}:o.includes("SecurityError")||o.includes("permission")||s==="SecurityError"?{title:"Permission Denied",message:"Bluetooth permission was denied.",suggestions:["Check your browser settings to allow Bluetooth access",'If prompted, click "Allow" to grant Bluetooth permission',"Try refreshing the page and connecting again","On some browsers, you may need to access this site over HTTPS"],canRetry:!0}:o.includes("NetworkError")||o.includes("timeout")||s==="NetworkError"?{title:"Connection Timed Out",message:`The connection to your ${t.toLowerCase()} timed out.`,suggestions:["Make sure the sensor is in range and powered on","Try moving closer to the sensor","Power cycle the sensor and try again","Check for interference from other wireless devices"],canRetry:!0}:o.includes("Service")&&o.includes("not found")?{title:"Incompatible Sensor",message:`This device doesn't appear to be a compatible ${t.toLowerCase()}.`,suggestions:["Make sure you selected the correct sensor type","Check that your sensor supports standard Bluetooth protocols","Some sensors may require a firmware update","Consult your sensor's documentation for compatibility"],canRetry:!0}:{title:"Connection Error",message:`Failed to connect to ${t.toLowerCase()}.`,suggestions:["Make sure the sensor is powered on and nearby","Try power cycling the sensor","Restart Bluetooth on your device","Refresh the page and try again"],canRetry:!0}}function ri(n){const e=document.createElement("div");e.className="connection-error-content";const t=document.createElement("p");if(t.className="connection-error-message",t.textContent=n.message,e.appendChild(t),n.suggestions.length>0){const o=document.createElement("div");o.className="connection-error-troubleshooting";const s=document.createElement("h3");s.textContent="💡 Troubleshooting Tips",o.appendChild(s);const a=document.createElement("ul");a.setAttribute("role","list"),n.suggestions.forEach(i=>{const r=document.createElement("li");r.textContent=i,a.appendChild(r)}),o.appendChild(a),e.appendChild(o)}return e}function ii(n,e,t){return new Promise(o=>{const s=ai(n,e),a=Dn[e],i=ri(s);console.error(`[${e}] Connection error:`,n),S(`${s.title}. ${s.message}`,"assertive");let r=null;const c=[];c.push({text:"Dismiss",variant:"secondary",onClick:()=>{r?.(),o(!1)}}),s.canRetry&&c.push({text:"Try Again",variant:"primary",onClick:()=>{r?.(),t&&t(),o(!0)}}),r=Je({title:s.title,icon:a,content:i,buttons:c,closeOnOverlay:!0,onClose:()=>o(!1)})})}function ci(n,e){const t=Mn[n],o=Dn[n],s=document.createElement("div");s.className="connection-error-content";const a=document.createElement("p");a.className="connection-error-message",a.textContent=`Lost connection to your ${t.toLowerCase()} and automatic reconnection failed.`,s.appendChild(a);const i=document.createElement("div");i.className="connection-error-troubleshooting";const r=document.createElement("h3");r.textContent="💡 To reconnect:",i.appendChild(r);const c=document.createElement("ul");c.setAttribute("role","list"),["Make sure the sensor is still powered on","Move closer to the sensor",'Click "Try Again" to reconnect manually'].forEach(p=>{const l=document.createElement("li");l.textContent=p,c.appendChild(l)}),i.appendChild(c),s.appendChild(i),S(`${t} connection lost. Automatic reconnection failed.`,"assertive");let d=null;d=Je({title:"Connection Lost",icon:o,content:s,buttons:[{text:"Dismiss",variant:"secondary",onClick:()=>{d?.()}},{text:"Try Again",variant:"primary",onClick:()=>{d?.(),e?.()}}],closeOnOverlay:!0})}const li={power:"⚡",heartrate:"❤️",cadence:"🚴",speed:"💨",distance:"📏",altitude:"🏔️",gps:"📍",treadmill:"🏃",treadmillSpeed:"🏃"},je=n=>n.charAt(0).toUpperCase()+n.slice(1),di=({connectionsState:n,measurementsState:e})=>{const t=(c,d,p)=>{const l=Ye[c]?.connect;if(!l)return;const m=je(c),u=li[c];switch(d){case"connected":p?l.textContent=`${u} Disconnect ${m} (${p})`:l.textContent=`${u} Disconnect ${m}`;break;case"reconnecting":l.textContent=`${u} Reconnecting ${m}...`;break;case"disconnected":l.textContent=`${u} Connect ${m}`;break}},o=c=>{const d=n[c];if(d&&typeof d.disconnect=="function"){d.disconnect(),d.disconnect=null,d.isConnected=!1,t(c,"disconnected");const p=Ye[c]?.display;p&&(p.textContent="--")}},s=(c,d)=>p=>{const l=je(c);switch(p){case"connected":t(c,"connected",d),H(`${l} sensor reconnected`,"success");break;case"reconnecting":t(c,"reconnecting");break;case"failed":n[c]&&(n[c].isConnected=!1,n[c].disconnect=null),t(c,"disconnected"),ci(c,()=>a(c));break}},a=async c=>{try{t(c,"reconnecting");let d;if(c==="gps"){const h=await si(y=>{e.addGps(y)}),g=n[c];g&&(g.disconnect=async()=>{await h.stop()},g.isConnected=!0),t(c,"connected",h.deviceName),H(`Connected to ${je(c)}`,"success");return}else if(c==="treadmill")d=await ei(),d.addListener(h=>{e.addTreadmillData(h)});else if(c==="power")d=await Qr(),d.addListener(h=>{e.addPower(h)});else if(c==="heartrate")d=await Xr(),d.addListener(h=>{e.addHeartrate(h)});else if(c==="cadence")d=await Jr(),d.addListener(h=>{e.addCadence(h)});else return;const{disconnect:p,deviceName:l,onStatusChange:m}=d,u=n[c];u&&(u.disconnect=p,u.isConnected=!0),t(c,"connected",l),H(`Connected to ${je(c)}`,"success"),m&&m(s(c,l||"Sensor"))}catch(d){t(c,"disconnected"),await ii(d,c,()=>a(c))||n[c]&&(n[c].isConnected=!1)}},i=c=>{const d=Ye[c]?.connect;if(!d)return;const p=l=>{l.stopPropagation(),n[c]?.isConnected?o(c):a(c)};d.addEventListener("click",p)};["power","heartrate","cadence","gps","treadmill"].forEach(i)};class ui{isStreaming=!1;isPaused=!1;streamName=null;streamInterval=null;measurementsState;timeState;constructor(e,t){this.measurementsState=e,this.timeState=t}async startStreaming(e){if(this.isStreaming)return this.streamName;try{const t=e||`workout-${Date.now()}`,o=await hr(t);if(!o.success)throw new Error("Failed to create stream");return this.streamName=o.streamName,this.isStreaming=!0,this.isPaused=!1,this._startStreamingLoop(),this.streamName}catch(t){throw console.error("Failed to start streaming:",t),this.streamName=null,t}}pauseStreaming(){this.isStreaming&&(this.isPaused=!0)}resumeStreaming(){this.isStreaming&&(this.isPaused=!1)}async stopStreaming(){this.isStreaming&&(this.isStreaming=!1,this.isPaused=!1,this.streamInterval&&(clearInterval(this.streamInterval),this.streamInterval=null),this.streamName=null)}getStatus(){return{isStreaming:this.isStreaming,isPaused:this.isPaused,streamName:this.streamName}}_startStreamingLoop(){this.streamInterval=setInterval(async()=>{if(!(!this.isStreaming||this.isPaused||!this.timeState.running))try{await this._sendCurrentData()}catch(e){console.error("Error sending workout data:",e)}},1e3)}async _sendCurrentData(){if(!this.streamName)return;const e=this._getLatestValue("power"),t=this._getLatestValue("cadence"),o=this._getLatestValue("heartrate"),s=this._getLatestValue("speed"),a=this._getLatestValue("distance"),i=this._getLatestValue("altitude"),r=this._getLatestTreadmillIncline();if(e===null&&t===null&&o===null&&s===null&&a===null&&i===null&&r===null)return;const c=this.timeState.running&&this.timeState.startTime?Date.now()-this.timeState.startTime:this.timeState.endTime&&this.timeState.startTime?this.timeState.endTime-this.timeState.startTime:0;await wr(this.streamName,{timestamp:Date.now(),elapsed:Math.floor(c/1e3).toString(),power:e,cadence:t,heartrate:o,speed:s,distance:a,altitude:i,incline:r})}_getLatestValue(e){const t=this.measurementsState[e];if(!Array.isArray(t)||t.length===0)return null;const o=t[t.length-1];return Date.now()-o.timestamp>5e3?null:o.value}_getLatestTreadmillIncline(){const e=this.measurementsState.treadmill;if(!Array.isArray(e)||e.length===0)return null;const t=e[e.length-1];return Date.now()-t.timestamp>5e3?null:t.incline}}function mi({measurementsState:n,connectionsState:e,timeState:t}){return di({connectionsState:e,measurementsState:n}),{streamManager:new ui(n,t)}}const dn=()=>{try{const{measurementsState:n,connectionsState:e,timeState:t}=eo();to({measurementsState:n,connectionsState:e});const{streamManager:o}=mi({measurementsState:n,connectionsState:e,timeState:t});Rr({measurementsState:n,timeState:t,connectionsState:e,streamManager:o});const s=Ds();s.start(),window.router=s}catch(n){console.error("Failed to initialize app:",n)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",dn,{once:!0}):dn();console.log("Bike Power Tracker initialized");export{xt as W,An as h,gi as m,hi as w};
//# sourceMappingURL=index-Bdq_nS1h.js.map
