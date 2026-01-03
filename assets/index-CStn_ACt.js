(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class R extends HTMLElement{shadow;_initialized=!1;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._initialized||(this.render(),this.setupEventListeners(),this._initialized=!0),this.onConnected()}disconnectedCallback(){this.onDisconnected()}attributeChangedCallback(e,t,o){t!==o&&this._initialized&&this.onAttributeChanged(e,t,o)}getBaseStyles(){return`
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
        `}setupEventListeners(){}onConnected(){}onDisconnected(){}onAttributeChanged(e,t,o){}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}query(e){return this.shadow.querySelector(e)}queryAll(e){return this.shadow.querySelectorAll(e)}}const Le={1:{bg:"rgba(74, 144, 226, 0.15)",text:"#2563eb",border:"#3b82f6"},2:{bg:"rgba(34, 197, 94, 0.15)",text:"#16a34a",border:"#22c55e"},3:{bg:"rgba(234, 179, 8, 0.15)",text:"#ca8a04",border:"#eab308"},4:{bg:"rgba(249, 115, 22, 0.15)",text:"#ea580c",border:"#f97316"},5:{bg:"rgba(239, 68, 68, 0.15)",text:"#dc2626",border:"#ef4444"},6:{bg:"rgba(168, 85, 247, 0.15)",text:"#9333ea",border:"#a855f7"},7:{bg:"rgba(236, 72, 153, 0.15)",text:"#db2777",border:"#ec4899"}};class ct extends R{static get observedAttributes(){return["label","value","unit","icon","zone","zone-name","connected","show-avg"]}getStyles(){return`
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
        `}getTemplate(){const e=this.getAttribute("label")||"",t=this.getAttribute("value")||"--",o=this.getAttribute("unit")||"",s=this.getAttribute("icon")||"",r=this.getAttribute("zone-name")||"",i=this.hasAttribute("show-avg"),a=this.getAttribute("connected")!=="false";return`
            <div class="label">
                ${s?`<span class="icon" aria-hidden="true">${s}</span>`:""}
                <span>${e}</span>
            </div>
            <div class="value-container">
                <span class="value ${a?"":"disconnected"}" 
                      aria-live="polite" 
                      aria-label="${e}: ${t} ${o}">
                    ${t}${i?'<span class="avg-indicator">(3s)</span>':""}
                </span>
                ${o?`<span class="unit">${o}</span>`:""}
            </div>
            <div class="zone-badge" aria-live="polite">
                ${r?`Zone: ${r}`:""}
            </div>
        `}onAttributeChanged(e,t,o){e==="zone"&&this.updateZoneStyles(o),this.render()}updateZoneStyles(e){if(e&&Le[e]){const t=Le[e];this.style.setProperty("--zone-bg-color",t.bg),this.style.setProperty("--zone-text-color",t.text),this.style.setProperty("--zone-border-color",t.border),this.style.backgroundColor=t.bg}else this.style.removeProperty("--zone-bg-color"),this.style.removeProperty("--zone-text-color"),this.style.removeProperty("--zone-border-color"),this.style.backgroundColor=""}setValue(e){this.setAttribute("value",String(e))}setZone(e,t){e!==null?(this.setAttribute("zone",String(e)),t&&this.setAttribute("zone-name",t)):(this.removeAttribute("zone"),this.removeAttribute("zone-name"))}setConnected(e){this.setAttribute("connected",String(e))}}customElements.define("bpt-metric-display",ct);const U=[{name:"Recovery",min:0,max:.55,color:"#4a90d9"},{name:"Endurance",min:.55,max:.75,color:"#22c55e"},{name:"Tempo",min:.75,max:.9,color:"#eab308"},{name:"Threshold",min:.9,max:1.05,color:"#f97316"},{name:"VO2max",min:1.05,max:1.2,color:"#ef4444"},{name:"Anaerobic",min:1.2,max:1.5,color:"#a855f7"},{name:"Neuromuscular",min:1.5,max:2,color:"#ec4899"}];class lt extends R{animationFrame=null;currentDisplayValue=0;static get observedAttributes(){return["value","ftp","max","show-zones","size"]}getStyles(){return`
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
        `}getTemplate(){const e=parseInt(this.getAttribute("size")||"200",10);this.style.setProperty("--gauge-size",`${e}px`);const t=parseInt(this.getAttribute("value")||"0",10),o=parseInt(this.getAttribute("ftp")||"200",10),s=parseInt(this.getAttribute("max")||"500",10),r=this.getAttribute("show-zones")!=="false",i=80,a=2*Math.PI*i,c=a*.75,l=o>0?t/o:0,d=this.getZone(l),u=d?d.color:"#2196F3",p=Math.min(t/s,1),m=c*(1-p);return`
            <div class="gauge-container">
                <svg class="gauge-svg" viewBox="0 0 200 200">
                    <!-- Background arc -->
                    <circle 
                        class="gauge-background"
                        cx="100" cy="100" r="${i}"
                        stroke-dasharray="${c} ${a}"
                    />
                    
                    ${r?this.renderZoneArcs(i,c,a,l):""}
                    
                    <!-- Value arc -->
                    <circle 
                        class="gauge-value-arc ${l>1.2?"high-power":""}"
                        cx="100" cy="100" r="${i}"
                        stroke-dasharray="${c} ${a}"
                        stroke-dashoffset="${m}"
                        style="stroke: ${u}"
                    />
                </svg>
                
                <div class="gauge-center">
                    <div class="gauge-value" style="color: ${u}">${t}</div>
                    <div class="gauge-unit">watts</div>
                    ${d?`<div class="gauge-zone-label" style="color: ${u}">${d.name}</div>`:""}
                    ${o>0?`<div class="gauge-ftp">FTP: ${o}W</div>`:""}
                </div>
            </div>
        `}renderZoneArcs(e,t,o,s){const r=parseInt(this.getAttribute("ftp")||"200",10),i=parseInt(this.getAttribute("max")||"500",10);return r<=0?"":U.map((a,c)=>{const l=a.min*r/i,d=Math.min(a.max*r/i,1),u=(d-l)*t,p=t*(1-d);return`
                <circle 
                    class="gauge-zone ${s>=a.min&&s<a.max?"active":""}"
                    cx="100" cy="100" r="${e}"
                    stroke="${a.color}"
                    stroke-dasharray="${u} ${o}"
                    stroke-dashoffset="${p}"
                    data-zone="${c+1}"
                />
            `}).join("")}getZone(e){for(const t of U)if(e>=t.min&&e<t.max)return t;return e>=U[U.length-1].max?U[U.length-1]:null}onAttributeChanged(){this.render()}onDisconnected(){this.animationFrame&&cancelAnimationFrame(this.animationFrame)}animateToValue(e,t=300){const o=this.currentDisplayValue,s=performance.now(),r=i=>{const a=i-s,c=Math.min(a/t,1),l=1-Math.pow(1-c,3),d=Math.round(o+(e-o)*l);this.currentDisplayValue=d,this.setAttribute("value",String(d)),c<1&&(this.animationFrame=requestAnimationFrame(r))};this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(r)}setValue(e,t=!1){t?this.animateToValue(e):(this.currentDisplayValue=e,this.setAttribute("value",String(e)))}setFTP(e){this.setAttribute("ftp",String(e))}}customElements.define("bpt-power-gauge",lt);const _e={1:{bg:"rgba(74, 144, 226, 0.15)",fill:"#3b82f6",text:"#2563eb"},2:{bg:"rgba(34, 197, 94, 0.15)",fill:"#22c55e",text:"#16a34a"},3:{bg:"rgba(234, 179, 8, 0.15)",fill:"#eab308",text:"#ca8a04"},4:{bg:"rgba(249, 115, 22, 0.15)",fill:"#f97316",text:"#ea580c"},5:{bg:"rgba(239, 68, 68, 0.15)",fill:"#ef4444",text:"#dc2626"},6:{bg:"rgba(168, 85, 247, 0.15)",fill:"#a855f7",text:"#9333ea"},7:{bg:"rgba(236, 72, 153, 0.15)",fill:"#ec4899",text:"#db2777"}};class dt extends R{static get observedAttributes(){return["zone","zone-name","percent","type","compact"]}getStyles(){return`
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
        `}onAttributeChanged(e,t,o){e==="zone"&&this.updateZoneStyles(o),e==="percent"&&this.updateGaugeFill(parseFloat(o||"0")),(e==="zone"||e==="zone-name")&&this.render()}updateZoneStyles(e){if(e&&_e[e]){const t=_e[e];this.style.setProperty("--zone-bg-color",t.bg),this.style.setProperty("--zone-fill-color",t.fill),this.style.setProperty("--zone-text-color",t.text)}else this.style.removeProperty("--zone-bg-color"),this.style.removeProperty("--zone-fill-color"),this.style.removeProperty("--zone-text-color")}updateGaugeFill(e){const t=this.shadow.querySelector(".gauge-fill"),o=this.shadow.querySelector(".gauge-container");t&&(t.style.width=`${Math.max(4,e)}%`),o&&o.setAttribute("aria-valuenow",String(e))}setZone(e,t,o){this.setAttribute("zone",String(e)),this.setAttribute("zone-name",t),this.setAttribute("percent",String(Math.round(o))),this.updateZoneStyles(String(e))}clear(){this.removeAttribute("zone"),this.removeAttribute("zone-name"),this.setAttribute("percent","0")}}customElements.define("bpt-zone-gauge",dt);const Z={power:{color:"#f97316",gradientStart:"rgba(249, 115, 22, 0.4)",gradientEnd:"rgba(249, 115, 22, 0.05)",label:"Power",unit:"W",defaultMax:400},heartrate:{color:"#ef4444",gradientStart:"rgba(239, 68, 68, 0.4)",gradientEnd:"rgba(239, 68, 68, 0.05)",label:"Heart Rate",unit:"bpm",defaultMax:200}};class ut extends R{_data=[];_animationId=null;_lastRenderTime=0;_isVisible=!0;_duration=60;_maxValue;_type;_svgPath=null;_svgArea=null;_currentValueEl=null;_avgValueEl=null;static get observedAttributes(){return["type","duration","max-value","hidden"]}constructor(){super(),this._type="power",this._maxValue=Z.power.defaultMax}getStyles(){return`
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
        `}getTemplate(){const e=Z[this._type]||Z.power;return`
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
        `}onConnected(){this._svgPath=this.shadow.getElementById("chartLine"),this._svgArea=this.shadow.getElementById("chartArea"),this._currentValueEl=this.shadow.getElementById("currentValue"),this._avgValueEl=this.shadow.getElementById("avgValue");const e=Z[this._type]||Z.power;this.style.setProperty("--chart-color",e.color),this.startAnimation(),document.addEventListener("visibilitychange",this.handleVisibilityChange)}onDisconnected(){this.stopAnimation(),document.removeEventListener("visibilitychange",this.handleVisibilityChange)}onAttributeChanged(e,t,o){switch(e){case"type":this._type=o||"power",this._maxValue=Z[this._type]?.defaultMax||400,this.render(),this.onConnected();break;case"duration":this._duration=parseInt(o||"60",10),this.render();break;case"max-value":this._maxValue=parseInt(o||"400",10),this.render();break;case"hidden":this._isVisible=o===null,this._isVisible?this.startAnimation():this.stopAnimation();break}}handleVisibilityChange=()=>{document.hidden?this.stopAnimation():this._isVisible&&this.startAnimation()};addDataPoint(e,t=Date.now()){this._data.push({timestamp:t,value:e});const o=t-(this._duration+5)*1e3;for(;this._data.length>0&&this._data[0].timestamp<o;)this._data.shift();e>this._maxValue*.9&&(this._maxValue=Math.ceil(e*1.2/50)*50)}clear(){this._data=[],this.renderChart()}startAnimation(){if(this._animationId!==null)return;const e=t=>{t-this._lastRenderTime>=33&&(this.renderChart(),this._lastRenderTime=t),this._animationId=requestAnimationFrame(e)};this._animationId=requestAnimationFrame(e)}stopAnimation(){this._animationId!==null&&(cancelAnimationFrame(this._animationId),this._animationId=null)}renderChart(){if(!this._svgPath||!this._svgArea)return;const t=Date.now()-this._duration*1e3,o=this._data.filter(l=>l.timestamp>=t),s=this.shadow.getElementById("noDataMessage");if(s&&(s.style.display=o.length===0?"block":"none"),o.length===0){this._svgPath.setAttribute("d",""),this._svgArea.setAttribute("d","M0,80 L300,80");return}const r=300,i=80,a=[],c=[];if(o.forEach(l=>{const d=(l.timestamp-t)/(this._duration*1e3)*r,u=i-Math.min(l.value,this._maxValue)/this._maxValue*i;a.push(`${d.toFixed(1)},${u.toFixed(1)}`),c.push(`${d.toFixed(1)},${u.toFixed(1)}`)}),a.length>0){const l="M"+a.join(" L");this._svgPath.setAttribute("d",l);const d=(o[0].timestamp-t)/(this._duration*1e3)*r,u=(o[o.length-1].timestamp-t)/(this._duration*1e3)*r,p=`M${d.toFixed(1)},${i} L`+c.join(" L")+` L${u.toFixed(1)},${i} Z`;this._svgArea.setAttribute("d",p)}if(this._currentValueEl&&o.length>0){const l=o[o.length-1].value;this._currentValueEl.textContent=Math.round(l).toString()}if(this._avgValueEl&&o.length>0){const l=o.reduce((d,u)=>d+u.value,0)/o.length;this._avgValueEl.textContent=Math.round(l).toString()}}getData(){return[...this._data]}}customElements.define("bpt-live-chart",ut);class mt extends R{intervalId=null;startTimestamp=0;pausedElapsed=0;static get observedAttributes(){return["elapsed","state","show-milliseconds"]}getStyles(){return`
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
        `}formatTime(e,t=!1){const o=Math.floor(e/3600),s=Math.floor(e%3600/60),r=Math.floor(e%60),i=c=>c.toString().padStart(2,"0");let a=`${i(o)}:${i(s)}:${i(r)}`;if(t){const c=Math.floor(e%1*100);a+=`<span class="milliseconds">.${i(c)}</span>`}return a}onAttributeChanged(e){e==="state"&&this.handleStateChange(),this.render()}handleStateChange(){const e=this.getAttribute("state");e==="recording"&&!this.intervalId?this.startTicking():e!=="recording"&&this.intervalId&&this.stopTicking()}startTicking(){this.startTimestamp=Date.now()-this.pausedElapsed*1e3,this.intervalId=window.setInterval(()=>{const e=(Date.now()-this.startTimestamp)/1e3;this.setAttribute("elapsed",String(e))},100)}stopTicking(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null),this.pausedElapsed=parseFloat(this.getAttribute("elapsed")||"0")}onDisconnected(){this.stopTicking()}start(){this.setAttribute("state","recording"),this.emit("timer-start")}pause(){this.setAttribute("state","paused"),this.emit("timer-pause")}resume(){this.setAttribute("state","recording"),this.emit("timer-resume")}stop(){this.setAttribute("state","idle"),this.pausedElapsed=0,this.emit("timer-stop",{elapsed:parseFloat(this.getAttribute("elapsed")||"0")})}reset(){this.pausedElapsed=0,this.startTimestamp=Date.now(),this.setAttribute("elapsed","0"),this.emit("timer-reset")}getElapsed(){return parseFloat(this.getAttribute("elapsed")||"0")}getState(){return this.getAttribute("state")||"idle"}}customElements.define("bpt-workout-timer",mt);const Me={info:{bg:"#1d4ed8",icon:"ℹ️"},success:{bg:"#15803d",icon:"✅"},error:{bg:"#b91c1c",icon:"❌"},warning:{bg:"#a16207",icon:"⚠️"}};class N extends R{timeoutId=null;static get observedAttributes(){return["message","type","duration","dismissible"]}getStyles(){return`
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
        `}getTemplate(){const e=this.getAttribute("message")||"",t=this.getAttribute("type")||"info",o=this.getAttribute("dismissible")!=="false",s=Me[t]||Me.info;return this.style.setProperty("--toast-bg",s.bg),`
            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <span class="icon" aria-hidden="true">${s.icon}</span>
                <span class="message">${e}</span>
                ${o?`
                    <button class="dismiss-btn" aria-label="Dismiss notification">&times;</button>
                `:""}
            </div>
        `}setupEventListeners(){const e=this.query(".dismiss-btn");e&&e.addEventListener("click",()=>this.dismiss())}onConnected(){requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.classList.add("visible")})});const e=parseInt(this.getAttribute("duration")||"3000",10);e>0&&(this.timeoutId=window.setTimeout(()=>this.dismiss(),e))}onDisconnected(){this.timeoutId&&clearTimeout(this.timeoutId)}dismiss(){this.timeoutId&&clearTimeout(this.timeoutId),this.classList.remove("visible"),this.classList.add("hiding"),setTimeout(()=>{this.remove()},300)}static show(e,t="info",o={}){const s=document.createElement("bpt-toast");return s.setAttribute("message",e),s.setAttribute("type",t),o.duration!==void 0&&s.setAttribute("duration",String(o.duration)),o.dismissible!==void 0&&s.setAttribute("dismissible",String(o.dismissible)),document.body.appendChild(s),s}static info(e,t){return N.show(e,"info",t)}static success(e,t){return N.show(e,"success",t)}static error(e,t){return N.show(e,"error",t)}static warning(e,t){return N.show(e,"warning",t)}}customElements.define("bpt-toast",N);class pt extends R{previousActiveElement=null;focusTrapHandler=null;static get observedAttributes(){return["title","icon","open","close-on-overlay"]}getStyles(){return`
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
        `}setupEventListeners(){this.query(".close-btn")?.addEventListener("click",()=>this.close()),this.query(".overlay")?.addEventListener("click",()=>{this.getAttribute("close-on-overlay")!=="false"&&this.close()}),this.addEventListener("keydown",o=>{o.key==="Escape"&&this.close()}),this.addEventListener("click",o=>{const r=o.target.dataset?.action;r&&(this.emit("modal-action",{action:r}),(r==="cancel"||r==="confirm")&&this.close())})}onConnected(){this.hasAttribute("open")&&this.onOpen()}onAttributeChanged(e,t,o){e==="open"&&(o!==null?this.onOpen():this.onClose())}onOpen(){this.previousActiveElement=document.activeElement,this.setupFocusTrap(),requestAnimationFrame(()=>{this.shadow.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')?.focus()}),this.emit("modal-open")}onClose(){this.removeFocusTrap(),this.previousActiveElement?.focus(),this.emit("modal-close")}setupFocusTrap(){this.focusTrapHandler=e=>{if(e.key!=="Tab")return;const t=this.shadow.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=t[0],s=t[t.length-1];e.shiftKey&&document.activeElement===o?(e.preventDefault(),s?.focus()):!e.shiftKey&&document.activeElement===s&&(e.preventDefault(),o?.focus())},this.addEventListener("keydown",this.focusTrapHandler)}removeFocusTrap(){this.focusTrapHandler&&(this.removeEventListener("keydown",this.focusTrapHandler),this.focusTrapHandler=null)}open(){this.setAttribute("open","")}close(){this.removeAttribute("open")}toggle(){this.hasAttribute("open")?this.close():this.open()}static confirm(e){return new Promise(t=>{const o=document.createElement("bpt-modal");o.setAttribute("title",e.title),e.icon&&o.setAttribute("icon",e.icon);const s=document.createElement("div");typeof e.message=="string"?s.innerHTML=`<p>${e.message}</p>`:s.appendChild(e.message),o.appendChild(s);const r=document.createElement("div");r.setAttribute("slot","footer");const i=document.createElement("button");i.className="btn btn-secondary",i.textContent=e.cancelText||"Cancel",i.dataset.action="cancel";const a=document.createElement("button");a.className=`btn btn-${e.variant||"primary"}`,a.textContent=e.confirmText||"Confirm",a.dataset.action="confirm",r.appendChild(i),r.appendChild(a),o.appendChild(r),o.addEventListener("modal-action",(c=>{t(c.detail.action==="confirm"),o.remove()})),o.addEventListener("modal-close",()=>{t(!1),o.remove()}),document.body.appendChild(o),o.open()})}static alert(e,t,o){return new Promise(s=>{const r=document.createElement("bpt-modal");r.setAttribute("title",e),o&&r.setAttribute("icon",o);const i=document.createElement("p");i.textContent=t,r.appendChild(i);const a=document.createElement("div");a.setAttribute("slot","footer");const c=document.createElement("button");c.className="btn btn-primary",c.textContent="OK",c.dataset.action="confirm",a.appendChild(c),r.appendChild(a),r.addEventListener("modal-close",()=>{s(),r.remove()}),document.body.appendChild(r),r.open()})}}customElements.define("bpt-modal",pt);const se=n=>{const e=Math.floor(n/1e3),t=Math.floor(e/3600),o=Math.floor(e%3600/60),s=e%60;return`${t.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`};function T(n,e="polite"){const t=document.getElementById("srAnnouncements");t&&(t.setAttribute("aria-live",e),t.textContent=n,setTimeout(()=>{t.textContent=""},1e3))}const We=[];function D(n){We.push(n)}function ht(n){const e=n.target;if(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable){n.key==="Escape"&&e.blur();return}for(const t of We){const o=n.key.toLowerCase()===t.key.toLowerCase(),s=t.ctrl?n.ctrlKey||n.metaKey:!n.ctrlKey&&!n.metaKey,r=t.shift?n.shiftKey:!n.shiftKey,i=t.alt?n.altKey:!n.altKey;if(o&&s&&r&&i){n.preventDefault(),t.action();return}}}function gt(){D({key:" ",description:"Start/pause/resume workout (context-aware)",action:()=>{const e=document.getElementById("startButton"),t=document.getElementById("pauseButton"),o=document.getElementById("resumeButton");e&&e.style.display!=="none"?e.click():t&&t.style.display!=="none"?t.click():o&&o.style.display!=="none"&&o.click()}}),D({key:"Escape",description:"Close modal or menu",action:()=>{const e=document.querySelectorAll('.stream-modal[style*="display: block"], .stream-modal:not([style*="display: none"])');for(const o of e)if(o.style.display!=="none"){const s=o.querySelector(".close-button");if(s){s.click(),T("Dialog closed");return}}const t=document.querySelector("details[open]");t&&(t.removeAttribute("open"),T("Menu closed"))}}),D({key:"m",description:"Toggle menu",action:()=>{const e=document.querySelector("header details");if(e)if(e.hasAttribute("open"))e.removeAttribute("open"),T("Menu closed");else{e.setAttribute("open",""),T("Menu opened");const o=e.querySelector("#controls button");o&&o.focus()}}}),D({key:"s",description:"Open settings",action:()=>{const e=document.getElementById("settingsButton");e&&(e.click(),T("Settings opened"))}}),D({key:"h",description:"Open workout history",action:()=>{const e=document.getElementById("workoutHistoryButton");e&&(e.click(),T("Workout history opened"))}}),D({key:"e",description:"Export workout data",action:()=>{const e=document.getElementById("exportData");e&&e.click()}}),D({key:"l",description:"Mark lap",action:()=>{const e=document.getElementById("lapButton");e&&e.click()}}),document.addEventListener("keydown",ht);const n=document.querySelector("header summary");n&&n.setAttribute("aria-keyshortcuts","M"),console.log("Keyboard navigation initialized")}function ft(n){const e=n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(e.length===0)return;const t=e[0],o=e[e.length-1];t.focus(),n.addEventListener("keydown",s=>{s.key==="Tab"&&(s.shiftKey?document.activeElement===t&&(s.preventDefault(),o.focus()):document.activeElement===o&&(s.preventDefault(),t.focus()))})}function J(n){const e=document.getElementById("startButton"),t=document.getElementById("pauseButton"),o=document.getElementById("resumeButton"),s=document.getElementById("stopButton");e&&e.setAttribute("aria-label","Start workout"),t&&t.setAttribute("aria-label","Pause workout"),o&&o.setAttribute("aria-label","Resume workout"),s&&s.setAttribute("aria-label","Stop and save workout");const r=document.getElementById("workoutControls");r&&r.setAttribute("data-workout-state",n)}function Ae(n){return n.startTime?n.running?"recording":"paused":"idle"}function j(n,e){const{startButton:t,pauseButton:o,resumeButton:s,stopButton:r}=n;switch(t.style.display="none",o.style.display="none",s.style.display="none",r.style.display="none",e){case"idle":t.style.display="inline-flex";break;case"recording":o.style.display="inline-flex";break;case"paused":s.style.display="inline-flex",r.style.display="inline-flex";break}}const yt=n=>{const e=document.getElementById("startButton"),t=document.getElementById("pauseButton"),o=document.getElementById("resumeButton"),s=document.getElementById("stopButton"),r=document.getElementById("time"),i=document.getElementById("metricsTable");if(!e||!t||!o||!s||!r||!i){console.warn("Workout control elements not found in DOM");return}const a={startButton:e,pauseButton:t,resumeButton:o,stopButton:s};setInterval(()=>{let c="00:00:00";const l=Ae(n);if(n.startTime&&n.running){const d=Date.now()-n.startTime;c=se(d)}else if(n.startTime&&n.endTime){const d=n.endTime-n.startTime;c=se(d)}r.textContent!==c&&(r.textContent=c),i.classList.remove("recording","paused"),l==="recording"?i.classList.add("recording"):l==="paused"&&i.classList.add("paused")},100),j(a,Ae(n)),e.addEventListener("click",()=>{n.startTime=Date.now(),n.endTime=null,n.running=!0,j(a,"recording"),J("recording"),T("Workout started","assertive")}),t.addEventListener("click",()=>{n.running=!1,n.endTime=Date.now(),j(a,"paused"),J("paused"),T("Workout paused. Press resume to continue or stop to save.","assertive")}),o.addEventListener("click",()=>{if(n.endTime&&n.startTime){const c=Date.now()-n.endTime;n.startTime+=c}n.endTime=null,n.running=!0,j(a,"recording"),J("recording"),T("Workout resumed","assertive")}),s.addEventListener("click",()=>{n.running=!1,j(a,"paused"),J("paused"),T("Workout stopped and saved. Press resume to continue or export your data.","assertive");const c=new CustomEvent("workoutComplete",{detail:{startTime:n.startTime,endTime:n.endTime,duration:n.endTime&&n.startTime?n.endTime-n.startTime:0}});document.dispatchEvent(c)})},de=(n,e)=>{const t=[];let o=0;for(const s of e){for(;o<n.length&&n[o].timestamp<s;)o++;const r=o-1;let i;const a=o>=n.length;if(r<0)i=n[o];else if(a)i=n[r];else{const c=n[r]?.timestamp??0,l=n[o]?.timestamp??0;i=s-c<=l-s?n[r]:n[o]}i?.timestamp!==void 0&&Math.abs(i.timestamp-s)<1e3?t.push(i.value):t.push(null)}return t},Te=n=>{const e=[n.heartrate,n.cadence,n.power];if(!e.some(m=>m.length>0))return[];const o=e.map(m=>m.length>0?m[0].timestamp:1/0),s=Math.min(...o),r=Math.max(...e.map(m=>m.length>0?m[m.length-1].timestamp:-1/0)),i=1e3,a=[];let c=s;for(;c<=r;)a.push(c),c+=i;const l=de(n.heartrate,a),d=de(n.cadence,a),u=de(n.power,a),p=[];for(let m=0;m<a.length;m++)p.push({timestamp:a[m],heartrate:l[m],cadence:d[m],power:u[m]});return p},vt=n=>{const e=Te(n);if(!e||e.length===0)return"";const t="timestamp,power,cadence,heartrate",o=e.map(s=>{const r=new Date(s.timestamp).toISOString(),i=s.power!==null?Math.round(s.power):"",a=s.cadence!==null?Math.round(s.cadence):"",c=s.heartrate!==null?Math.round(s.heartrate):"";return`${r},${i},${a},${c}`});return[t,...o].join(`
`)},bt=n=>n!==null?`<HeartRateBpm><Value>${Math.round(n)}</Value></HeartRateBpm>`:"",wt=n=>n!==null?`<Cadence>${Math.round(n)}</Cadence>`:"",Et=n=>n===null?"":`<Extensions>
              <TPX xmlns="http://www.garmin.com/xmlschemas/ActivityExtension/v2">
                <Watts>${Math.round(n)}</Watts>
              </TPX>
            </Extensions>`,xt=n=>{const e=new Date(n.timestamp).toISOString(),t=[];return n.heartrate!==null&&t.push(bt(n.heartrate)),n.cadence!==null&&t.push(wt(n.cadence)),n.power!==null&&t.push(Et(n.power)),`
<Trackpoint>
    <Time>${e}</Time>
    ${t.join(`
`)}
</Trackpoint>
    `.trim()},Tt=n=>{const e=Te(n);if(!e||e.length===0)return"";const t=e[0].timestamp,o=e[e.length-1].timestamp,s=Math.round((o-t)/1e3),r=new Date(t).toISOString();return`<?xml version="1.0" encoding="UTF-8"?>
    <TrainingCenterDatabase xmlns="http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2">
        <Activities>
            <Activity Sport="Biking">
                <Id>${r}</Id>
                <Lap StartTime="${r}">
                    <TotalTimeSeconds>${s}</TotalTimeSeconds>
                    <Calories>0</Calories>
                    <Intensity>Active</Intensity>
                    <TriggerMethod>Manual</TriggerMethod>
                    <Track>
${e.map(xt).join(`
`)}
                    </Track>
                </Lap>
            </Activity>
        </Activities>
    </TrainingCenterDatabase>`},St=32,$e=2067,kt=0,Ct=1,It=34,Bt=18,Lt=19,_t=20,Mt=21,B=0,ue=2,Y=132,C=134,At=0,$t=1,Dt=2,Pt=3,Nt=4,zt=253,Rt=3,Ot=4,Ft=7,Ut=253,Zt=2,Ht=7,Vt=8,Wt=5,qt=6,jt=0,Yt=1,Kt=253,Gt=2,Jt=7,Xt=8,Qt=0,en=1,tn=253,nn=0,on=1,sn=253,rn=0,an=1,cn=2,ln=3,dn=4,un=5,mn=4,pn=255,hn=2,gn=6,De=0,fn=8,yn=9,vn=26,bn=0,X=1,wn=0,En=Date.UTC(1989,11,31,0,0,0);function Pe(n,e,t){const o=[0,52225,55297,5120,61441,15360,10240,58369,40961,27648,30720,46081,20480,39937,34817,17408];let s=0;for(let r=e;r<t;r++){const i=n[r];let a=o[s&15];s=s>>4&4095,s=s^a^o[i&15],a=o[s&15],s=s>>4&4095,s=s^a^o[i>>4&15]}return s}function me(n){return Math.round((n-En)/1e3)}class xn{buffer=[];definedMessages=new Map;writeHeader(){this.buffer.push(14),this.buffer.push(St),this.buffer.push($e&255),this.buffer.push($e>>8&255),this.buffer.push(0,0,0,0),this.buffer.push(46,70,73,84),this.buffer.push(0,0)}writeDefinition(e,t,o){this.buffer.push(64|e&15),this.buffer.push(0),this.buffer.push(0),this.buffer.push(t&255),this.buffer.push(t>>8&255),this.buffer.push(o.length);for(const s of o)this.buffer.push(s.fieldDefNum),this.buffer.push(s.size),this.buffer.push(s.baseType);this.definedMessages.set(e,!0)}writeData(e,t){this.buffer.push(e&15);for(const o of t);}writeUint8(e){this.buffer.push(e&255)}writeUint16(e){this.buffer.push(e&255),this.buffer.push(e>>8&255)}writeUint32(e){this.buffer.push(e&255),this.buffer.push(e>>8&255),this.buffer.push(e>>16&255),this.buffer.push(e>>24&255)}writeDataHeader(e){this.buffer.push(e&15)}finalize(){const e=new Uint8Array(this.buffer),t=this.buffer.length-14;e[4]=t&255,e[5]=t>>8&255,e[6]=t>>16&255,e[7]=t>>24&255;const o=Pe(e,0,12);e[12]=o&255,e[13]=o>>8&255;const s=Pe(e,0,e.length),r=new Uint8Array(e.length+2);return r.set(e),r[e.length]=s&255,r[e.length+1]=s>>8&255,r}getBuffer(){return this.buffer}}const Tn=n=>{const e=Te(n);if(!e||e.length===0)return null;const t=new xn;t.writeHeader();const o=e[0].timestamp,s=e[e.length-1].timestamp,r=me(o),i=me(s),a=(s-o)/1e3,c=Math.round(a*1e3),l=0,d=1,u=2,p=3,m=4,g=5,h=6;t.writeDefinition(l,kt,[{fieldDefNum:At,size:1,baseType:B},{fieldDefNum:$t,size:2,baseType:Y},{fieldDefNum:Dt,size:2,baseType:Y},{fieldDefNum:Pt,size:4,baseType:C},{fieldDefNum:Nt,size:4,baseType:C}]),t.writeDataHeader(l),t.writeUint8(mn),t.writeUint16(pn),t.writeUint16(1),t.writeUint32(12345678),t.writeUint32(r),t.writeDefinition(d,Ct,[{fieldDefNum:0,size:2,baseType:Y},{fieldDefNum:1,size:1,baseType:ue}]),t.writeDataHeader(d),t.writeUint16(100),t.writeUint8(1),t.writeDefinition(u,Mt,[{fieldDefNum:tn,size:4,baseType:C},{fieldDefNum:nn,size:1,baseType:B},{fieldDefNum:on,size:1,baseType:B}]),t.writeDataHeader(u),t.writeUint32(r),t.writeUint8(De),t.writeUint8(bn),t.writeDefinition(p,_t,[{fieldDefNum:zt,size:4,baseType:C},{fieldDefNum:Rt,size:1,baseType:ue},{fieldDefNum:Ot,size:1,baseType:ue},{fieldDefNum:Ft,size:2,baseType:Y}]);for(const v of e){const f=me(v.timestamp);t.writeDataHeader(p),t.writeUint32(f),t.writeUint8(v.heartrate!==null?Math.min(255,Math.round(v.heartrate)):255),t.writeUint8(v.cadence!==null?Math.min(255,Math.round(v.cadence)):255),t.writeUint16(v.power!==null?Math.round(v.power):65535)}return t.writeDataHeader(u),t.writeUint32(i),t.writeUint8(De),t.writeUint8(X),t.writeDefinition(m,Lt,[{fieldDefNum:Kt,size:4,baseType:C},{fieldDefNum:Gt,size:4,baseType:C},{fieldDefNum:Jt,size:4,baseType:C},{fieldDefNum:Xt,size:4,baseType:C},{fieldDefNum:Qt,size:1,baseType:B},{fieldDefNum:en,size:1,baseType:B}]),t.writeDataHeader(m),t.writeUint32(i),t.writeUint32(r),t.writeUint32(c),t.writeUint32(c),t.writeUint8(yn),t.writeUint8(X),t.writeDefinition(g,Bt,[{fieldDefNum:Ut,size:4,baseType:C},{fieldDefNum:Zt,size:4,baseType:C},{fieldDefNum:Ht,size:4,baseType:C},{fieldDefNum:Vt,size:4,baseType:C},{fieldDefNum:Wt,size:1,baseType:B},{fieldDefNum:qt,size:1,baseType:B},{fieldDefNum:jt,size:1,baseType:B},{fieldDefNum:Yt,size:1,baseType:B}]),t.writeDataHeader(g),t.writeUint32(i),t.writeUint32(r),t.writeUint32(c),t.writeUint32(c),t.writeUint8(hn),t.writeUint8(gn),t.writeUint8(fn),t.writeUint8(X),t.writeDefinition(h,It,[{fieldDefNum:sn,size:4,baseType:C},{fieldDefNum:rn,size:4,baseType:C},{fieldDefNum:an,size:2,baseType:Y},{fieldDefNum:cn,size:1,baseType:B},{fieldDefNum:ln,size:1,baseType:B},{fieldDefNum:dn,size:1,baseType:B},{fieldDefNum:un,size:4,baseType:C}]),t.writeDataHeader(h),t.writeUint32(i),t.writeUint32(c),t.writeUint16(1),t.writeUint8(wn),t.writeUint8(vn),t.writeUint8(X),t.writeUint32(i),t.finalize()};function Sn(n){const e=document.createElement("div");e.className="custom-modal",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-labelledby","modal-title");const t=n.icon?`${n.icon} ${n.title}`:n.title;e.innerHTML=`
        <div class="custom-modal-overlay"></div>
        <div class="custom-modal-container">
            <div class="custom-modal-header">
                <h2 id="modal-title">${t}</h2>
                <button class="modal-close-btn" aria-label="Close dialog">&times;</button>
            </div>
            <div class="custom-modal-body"></div>
            <div class="custom-modal-footer"></div>
        </div>
    `;const o=e.querySelector(".custom-modal-body");typeof n.content=="string"?o.innerHTML=n.content:o.appendChild(n.content);const s=e.querySelector(".custom-modal-footer");return n.buttons.forEach((r,i)=>{const a=document.createElement("button");a.textContent=r.text,a.className=`modal-btn modal-btn-${r.variant}`,a.addEventListener("click",r.onClick),(r.variant==="primary"||i===0&&!n.buttons.some(c=>c.variant==="primary"))&&a.setAttribute("data-autofocus","true"),s.appendChild(a)}),e}function kn(n){const e=n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),t=e[0],o=e[e.length-1],s=r=>{r.key==="Tab"&&(r.shiftKey?document.activeElement===t&&(r.preventDefault(),o?.focus()):document.activeElement===o&&(r.preventDefault(),t?.focus()))};return n.addEventListener("keydown",s),()=>n.removeEventListener("keydown",s)}function ae(n){const e=Sn(n),t=document.activeElement;document.body.appendChild(e),e.offsetHeight,e.classList.add("modal-visible");const o=kn(e),s=e.querySelector("[data-autofocus]");setTimeout(()=>{s?.focus()},50);const r=()=>{e.classList.remove("modal-visible"),setTimeout(()=>{e.remove(),o(),t?.focus(),n.onClose?.()},200)};e.querySelector(".modal-close-btn")?.addEventListener("click",r),n.closeOnOverlay!==!1&&e.querySelector(".custom-modal-overlay")?.addEventListener("click",r);const a=l=>{l.key==="Escape"&&(l.preventDefault(),r())};document.addEventListener("keydown",a);const c=n.onClose;return n.onClose=()=>{document.removeEventListener("keydown",a),c?.()},T(`${n.title} dialog opened`,"polite"),r}function Cn(n,e,t={}){return new Promise(o=>{const{confirmText:s="Confirm",cancelText:r="Cancel",confirmVariant:i="primary",icon:a}=t;let c=null;c=ae({title:n,content:`<p class="modal-message">${e}</p>`,icon:a,buttons:[{text:r,variant:"secondary",onClick:()=>{c?.(),o(!1)}},{text:s,variant:i,onClick:()=>{c?.(),o(!0)}}],onClose:()=>o(!1)})})}function In(n,e,t,o){const s=i=>{if(i.length===0)return{avg:null,max:null,count:0};const a=i.map(l=>l.value),c=a.reduce((l,d)=>l+d,0);return{avg:Math.round(c/a.length),max:Math.max(...a),count:a.length}},r={duration:e-n,startTime:n,endTime:e,power:s(t.power),heartrate:s(t.heartrate),cadence:s(t.cadence)};if(o){const i=o.getPowerZoneDistribution(),a=o.getHrZoneDistribution();i.totalTimeMs>0&&(r.powerZoneDistribution=i),a.totalTimeMs>0&&(r.hrZoneDistribution=a)}return r}function Bn(n){const e=Math.floor(n/1e3),t=Math.floor(e/3600),o=Math.floor(e%3600/60),s=e%60,r=[];return t>0&&r.push(`${t}h`),o>0&&r.push(`${o}m`),(s>0||r.length===0)&&r.push(`${s}s`),r.join(" ")}function Ln(n){const e=Math.floor(n/60),t=n%60;return`${e}:${String(t).padStart(2,"0")}`}const _n={1:"#3b82f6",2:"#22c55e",3:"#eab308",4:"#f97316",5:"#ef4444",6:"#a855f7",7:"#ec4899"};function Ne(n,e){const t=document.createElement("div");if(t.className="zone-distribution",n.zones.filter(r=>r.timeInZoneMs>0).length===0)return t;const s=Math.max(...n.zones.map(r=>r.timeInZoneMs));return t.innerHTML=`
        <h4 class="zone-distribution-title">${e}</h4>
        <div class="zone-chart">
            ${n.zones.map(r=>{const i=s>0?r.timeInZoneMs/s*100:0,a=Math.round(r.timeInZoneMs/1e3),c=_n[r.zone]||"#888",l=Ln(a);return`
                    <div class="zone-bar-row" title="${r.name}: ${l}">
                        <span class="zone-bar-label">Z${r.zone}</span>
                        <div class="zone-bar-container">
                            <div class="zone-bar" style="width: ${Math.max(i,2)}%; background-color: ${c};" aria-valuenow="${a}" aria-label="${r.name}"></div>
                        </div>
                        <span class="zone-bar-time">${l}</span>
                    </div>
                `}).join("")}
        </div>
    `,t}function Mn(n){const e=document.createElement("div");e.className="workout-summary";const t=(o,s)=>o!==null?`${o}${s}`:"--";if(e.innerHTML=`
        <div class="summary-duration">
            <span class="summary-label">Duration</span>
            <span class="summary-value">${Bn(n.duration)}</span>
        </div>
        <div class="summary-grid">
            <div class="summary-metric">
                <span class="summary-metric-icon">⚡</span>
                <span class="summary-metric-label">Power</span>
                <div class="summary-metric-values">
                    <span class="summary-avg">Avg: ${t(n.power.avg,"W")}</span>
                    <span class="summary-max">Max: ${t(n.power.max,"W")}</span>
                </div>
            </div>
            <div class="summary-metric">
                <span class="summary-metric-icon">❤️</span>
                <span class="summary-metric-label">Heart Rate</span>
                <div class="summary-metric-values">
                    <span class="summary-avg">Avg: ${t(n.heartrate.avg," bpm")}</span>
                    <span class="summary-max">Max: ${t(n.heartrate.max," bpm")}</span>
                </div>
            </div>
            <div class="summary-metric">
                <span class="summary-metric-icon">🚴</span>
                <span class="summary-metric-label">Cadence</span>
                <div class="summary-metric-values">
                    <span class="summary-avg">Avg: ${t(n.cadence.avg," rpm")}</span>
                    <span class="summary-max">Max: ${t(n.cadence.max," rpm")}</span>
                </div>
            </div>
        </div>
        <div class="summary-samples">
            <span class="summary-samples-text">
                ${n.power.count+n.heartrate.count+n.cadence.count} data points recorded
            </span>
        </div>
    `,n.powerZoneDistribution&&n.powerZoneDistribution.totalTimeMs>0){const o=Ne(n.powerZoneDistribution,"⚡ Power Zone Distribution");e.appendChild(o)}if(n.hrZoneDistribution&&n.hrZoneDistribution.totalTimeMs>0){const o=Ne(n.hrZoneDistribution,"❤️ Heart Rate Zone Distribution");e.appendChild(o)}return e}function An(n,e){return new Promise(t=>{let o=null;const s=Mn(n);o=ae({title:"Workout Complete",content:s,icon:"🏁",closeOnOverlay:!1,buttons:[{text:"🗑️ Discard",variant:"danger",onClick:()=>{o?.(),e.onDiscard(),t("discard")}},{text:"▶️ Keep Recording",variant:"secondary",onClick:()=>{o?.(),e.onKeepRecording(),t("keep")}},{text:"💾 Export",variant:"primary",onClick:()=>{o?.(),e.onExport(),t("export")}}],onClose:()=>{e.onKeepRecording(),t("keep")}})})}const $n=5e3;function Dn(n){const{message:e,onUndo:t,onExpire:o,timeout:s=$n,icon:r="🗑️"}=n;document.querySelector(".undo-notification")?.remove();const a=document.createElement("div");a.className="undo-notification",a.setAttribute("role","alert"),a.setAttribute("aria-live","assertive");const c=Math.ceil(s/1e3);let l=c;a.innerHTML=`
        <div class="undo-notification-content">
            <span class="undo-notification-icon" aria-hidden="true">${r}</span>
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
    `,document.body.appendChild(a);const d=a.querySelector(".undo-notification-btn"),u=a.querySelector(".undo-countdown"),p=a.querySelector(".undo-progress-fill"),m=window.matchMedia("(prefers-reduced-motion: reduce)").matches;m||(p.style.transition=`width ${s}ms linear`,p.offsetHeight),p.style.width="0%",requestAnimationFrame(()=>{a.classList.add("undo-notification-visible")});let g=!1,h=null,v=null;const f=(w=!1)=>{h&&(clearInterval(h),h=null),v&&(clearTimeout(v),v=null),m?(a.remove(),w&&!g&&o&&o()):(a.classList.remove("undo-notification-visible"),a.classList.add("undo-notification-hiding"),setTimeout(()=>{a.remove(),w&&!g&&o&&o()},200))};return h=setInterval(()=>{l--,l>0?u.textContent=`(${l}s)`:h&&clearInterval(h)},1e3),v=setTimeout(()=>{f(!0)},s),d.addEventListener("click",()=>{g=!0,f(!1),t(),T("Action undone","assertive")}),d.focus(),T(`${e} Press undo within ${c} seconds to restore.`,"assertive"),()=>f(!1)}function Pn(n,e){return{power:[...n.power],heartrate:[...n.heartrate],cadence:[...n.cadence],startTime:e.startTime,endTime:e.endTime,running:e.running}}function Nn(n,e,t){e.power=[...n.power],e.heartrate=[...n.heartrate],e.cadence=[...n.cadence],t.startTime=n.startTime,t.endTime=n.endTime,t.running=n.running}function L(n,e="info",t=3e3){if(customElements.get("bpt-toast")){N.show(n,e,{duration:t});return}const o=document.createElement("div"),s=e==="error"?"#b91c1c":e==="success"?"#15803d":e==="warning"?"#a16207":"#1d4ed8";o.setAttribute("role","alert"),o.setAttribute("aria-live","assertive"),o.style.cssText=`
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
  `,o.textContent=n,document.body.appendChild(o),setTimeout(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches?o.remove():(o.style.opacity="0",o.style.transition="opacity 0.3s ease",setTimeout(()=>o.remove(),300))},t)}const qe="bpt-settings",I={power:!0,cadence:!0,heartrate:!0,power3s:!1,highContrast:!1,colorblindPatterns:!1,voiceEnabled:!1,voiceLaps:!0,voiceZones:!0,exportTcx:!0,exportCsv:!0,exportJson:!1,exportFit:!1};function ne(){const n=localStorage.getItem(qe);return n?{...I,...JSON.parse(n)}:{...I}}function zn(){const n=document.getElementById("settingsButton"),e=document.getElementById("settingsModal"),t=document.getElementById("closeSettingsModal"),o=document.getElementById("saveSettings"),s=document.getElementById("settingPower"),r=document.getElementById("settingCadence"),i=document.getElementById("settingHeartrate"),a=document.getElementById("settingPower3s"),c=document.getElementById("settingHighContrast"),l=document.getElementById("settingColorblindPatterns"),d=document.getElementById("settingVoiceEnabled"),u=document.getElementById("settingVoiceLaps"),p=document.getElementById("settingVoiceZones"),m=document.getElementById("settingExportTcx"),g=document.getElementById("settingExportCsv"),h=document.getElementById("settingExportJson"),v=document.getElementById("settingExportFit");if(!n||!e){console.warn("Settings elements not found in DOM");return}const f=()=>{const y=ne();s&&(s.checked=y.power),r&&(r.checked=y.cadence),i&&(i.checked=y.heartrate),a&&(a.checked=y.power3s),c&&(c.checked=y.highContrast),l&&(l.checked=y.colorblindPatterns),d&&(d.checked=y.voiceEnabled),u&&(u.checked=y.voiceLaps),p&&(p.checked=y.voiceZones),m&&(m.checked=y.exportTcx),g&&(g.checked=y.exportCsv),h&&(h.checked=y.exportJson),v&&(v.checked=y.exportFit),S(y)},w=()=>{const y={power:s?.checked??I.power,cadence:r?.checked??I.cadence,heartrate:i?.checked??I.heartrate,power3s:a?.checked??I.power3s,highContrast:c?.checked??I.highContrast,colorblindPatterns:l?.checked??I.colorblindPatterns,voiceEnabled:d?.checked??I.voiceEnabled,voiceLaps:u?.checked??I.voiceLaps,voiceZones:p?.checked??I.voiceZones,exportTcx:m?.checked??I.exportTcx,exportCsv:g?.checked??I.exportCsv,exportJson:h?.checked??I.exportJson,exportFit:v?.checked??I.exportFit};localStorage.setItem(qe,JSON.stringify(y)),S(y),E()},S=y=>{const x=(F,at)=>{document.querySelectorAll(`.metric-group-${F}`).forEach(it=>{it.style.display=at?"flex":"none"})};x("power",y.power),x("cadence",y.cadence),x("heartrate",y.heartrate),document.querySelectorAll(".metric-group-power").forEach(F=>{y.power3s?F.setAttribute("data-show-avg","true"):F.removeAttribute("data-show-avg")}),y.highContrast?document.documentElement.setAttribute("data-high-contrast","true"):document.documentElement.removeAttribute("data-high-contrast"),y.colorblindPatterns?document.documentElement.setAttribute("data-colorblind-patterns","true"):document.documentElement.removeAttribute("data-colorblind-patterns")},b=()=>{e.style.display="flex";const y=document.querySelector("header details");y&&y.removeAttribute("open")},E=()=>{e.style.display="none"};n.addEventListener("click",b),t?.addEventListener("click",E),o?.addEventListener("click",w),window.addEventListener("click",y=>{y.target===e&&E()}),f()}class Rn{synth;voice=null;constructor(){this.synth=window.speechSynthesis,this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=()=>this.loadVoice()),this.loadVoice()}loadVoice(){const e=this.synth.getVoices();this.voice=e.find(t=>t.lang.startsWith("en"))||e[0]||null}formatTimeForSpeech(e){const t=Math.floor(e/1e3),o=Math.floor(t/3600),s=Math.floor(t%3600/60),r=t%60,i=[];return o>0&&i.push(`${o} hours`),s>0&&i.push(`${s} minutes`),(r>0||i.length===0)&&i.push(`${r} seconds`),i.join(" ")}speak(e){if(!ne().voiceEnabled)return;this.synth.speaking&&this.synth.cancel();const o=new SpeechSynthesisUtterance(e);this.voice&&(o.voice=this.voice),this.synth.speak(o)}announceLap(e,t,o){if(!ne().voiceLaps)return;const r=this.formatTimeForSpeech(t),i=`Lap ${e}. Time ${r}. Average Power ${Math.round(o)} watts.`;this.speak(i)}announceZoneChange(e){if(!ne().voiceZones)return;const o=`Entering ${e} Zone`;this.speak(o)}}const be=new Rn;function On({measurementsState:n,timeState:e}){const t=document.getElementById("lapButton"),o=document.getElementById("lapCounter"),s=document.getElementById("lapCount"),r=document.getElementById("startButton"),i=document.getElementById("pauseButton"),a=document.getElementById("resumeButton"),c=document.getElementById("stopButton");if(!t||!o||!s){console.warn("Lap button elements not found in DOM");return}const l=()=>{const m=n.getLapCount();s.textContent=String(m),o.style.display=m>0?"block":"none"},d=()=>{const m=e.running&&e.startTime!==null;t.style.display=m?"inline-flex":"none"},u=()=>{if(!e.running||!e.startTime)return;const m=n.laps,g=m.length>0?m[m.length-1].timestamp:e.startTime,h=n.addLap(e.startTime);l();const v=h.timestamp,f=v-g,w=n.power.filter(y=>y.timestamp>=g&&y.timestamp<=v),S=w.length>0?w.reduce((y,x)=>y+x.value,0)/w.length:0;be.announceLap(h.number,f,S);const b=h.elapsedMs?se(h.elapsedMs):"",E=`Lap ${h.number}${b?` at ${b}`:""}`;L(`🏁 ${E}`,"info"),T(E,"assertive"),console.log(`Lap marked: ${h.number} at ${new Date(h.timestamp).toISOString()}`)};t.addEventListener("click",u);const p=new MutationObserver(()=>{d()});[r,i,a,c].forEach(m=>{m&&p.observe(m,{attributes:!0,attributeFilter:["style"]})}),d(),l(),r?.addEventListener("click",()=>{setTimeout(d,10)}),i?.addEventListener("click",()=>{setTimeout(d,10)}),a?.addEventListener("click",()=>{setTimeout(d,10)}),c?.addEventListener("click",()=>{setTimeout(()=>{d()},10)}),console.log("Lap button initialized")}function Fn(){const n=document.getElementById("lapCounter"),e=document.getElementById("lapCount");n&&e&&(e.textContent="0",n.style.display="none")}const ze={power:!0,cadence:!0,heartrate:!0,exportTcx:!0,exportCsv:!0,exportJson:!1,exportFit:!1},Un=()=>{const n=document.getElementById("toggleYourMetrics"),e=document.getElementById("yourMetrics");n&&e&&(n.checked=e.style.display!=="none",n.addEventListener("change",s=>{const r=s.target;e.style.display=r.checked?"flex":"none"}));const t=document.getElementById("toggleStreamMetrics"),o=document.getElementById("streamMetrics");t&&o&&(t.checked=o.style.display!=="none",t.addEventListener("change",s=>{const r=s.target;o.style.display=r.checked?"flex":"none"}))},Zn=({measurementsState:n,timeState:e,zoneState:t})=>{const o=document.getElementById("discardButton");if(!o){console.warn("Discard button not found in DOM");return}o.addEventListener("click",async()=>{if(!(n.power.length>0||n.heartrate.length>0||n.cadence.length>0||e.startTime!==null)){re(n,e);return}const r=n.power.length+n.heartrate.length+n.cadence.length;if(await Cn("Discard Workout",`Are you sure you want to discard this workout? You have ${r} data points that will be deleted. You'll have 5 seconds to undo this action.`,{confirmText:"Discard",cancelText:"Keep Data",confirmVariant:"danger",icon:"🗑️"})){const a=Pn(n,e);re(n,e),t&&t.reset(),document.dispatchEvent(new CustomEvent("workout-discarded")),Fn(),Dn({message:"Workout data discarded",icon:"🗑️",timeout:5e3,onUndo:()=>{Nn(a,n,e),Hn(a),T("Workout data restored","polite")},onExpire:()=>{T("Discard complete","polite")}})}})};function Hn(n){const e=document.getElementById("startButton"),t=document.getElementById("pauseButton"),o=document.getElementById("resumeButton"),s=document.getElementById("stopButton"),r=document.getElementById("time");if(n.running?(e&&(e.style.display="none"),t&&(t.style.display="inline-flex"),o&&(o.style.display="none"),s&&(s.style.display="inline-flex")):n.startTime!==null&&(e&&(e.style.display="none"),t&&(t.style.display="none"),o&&(o.style.display="inline-flex"),s&&(s.style.display="inline-flex")),r&&n.startTime!==null){const i=(n.endTime||Date.now())-n.startTime,a=Math.floor(i/1e3),c=Math.floor(a/3600),l=Math.floor(a%3600/60),d=a%60;r.textContent=`${String(c).padStart(2,"0")}:${String(l).padStart(2,"0")}:${String(d).padStart(2,"0")}`}}function re(n,e){e.running=!1,e.startTime=null,e.endTime=null,n.power=[],n.heartrate=[],n.cadence=[];const t=document.getElementById("startButton"),o=document.getElementById("pauseButton"),s=document.getElementById("resumeButton"),r=document.getElementById("stopButton");t&&(t.style.display="inline-flex"),o&&(o.style.display="none"),s&&(s.style.display="none"),r&&(r.style.display="none");const i=document.getElementById("time");i&&(i.textContent="00:00:00")}function Vn(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}-${String(n.getHours()).padStart(2,"0")}-${String(n.getMinutes()).padStart(2,"0")}-${String(n.getSeconds()).padStart(2,"0")}`}function Q(n,e){const t=URL.createObjectURL(n),o=document.createElement("a");o.href=t,o.download=e,o.click(),URL.revokeObjectURL(t)}const Wn=(n,e)=>{const t=document.getElementById("exportData");if(!t){console.warn("Export button not found in DOM");return}t.addEventListener("click",()=>{try{const o=localStorage.getItem("bpt-settings"),s=o?{...ze,...JSON.parse(o)}:ze,r=Vn();if(s.exportJson){const i={power:n.power,heartrate:n.heartrate,cadence:n.cadence};if(e){const l=e.toJSON();(l.powerZones.some(d=>d.timeInZoneMs>0)||l.hrZones.some(d=>d.timeInZoneMs>0))&&(i.zoneDistribution={power:l.powerZones.map(d=>({zone:d.zone,name:d.name,timeSeconds:Math.round(d.timeInZoneMs/1e3)})),heartrate:l.hrZones.map(d=>({zone:d.zone,name:d.name,timeSeconds:Math.round(d.timeInZoneMs/1e3)})),ftp:l.ftp,maxHr:l.maxHr})}const a=JSON.stringify(i,null,2),c=new Blob([a],{type:"application/json"});Q(c,`bike-measurements-${r}.json`)}if(s.exportTcx){const i=Tt(n);if(i){const a=new Blob([i],{type:"application/xml"});Q(a,`bike-workout-${r}.tcx`)}}if(s.exportCsv){const i=vt(n);if(i){const a=new Blob([i],{type:"text/csv"});Q(a,`bike-workout-${r}.csv`)}}if(s.exportFit){const i=Tn(n);if(i){const a=new Blob([new Uint8Array(i)],{type:"application/fit"});Q(a,`bike-workout-${r}.fit`)}}}catch(o){console.error("Error exporting data:",o)}})},qn=({measurementsState:n,timeState:e,zoneState:t})=>{document.addEventListener("workoutComplete",async o=>{const s=o.detail;if(!(n.power.length>0||n.heartrate.length>0||n.cadence.length>0)&&!s.startTime)return;const i=In(s.startTime||e.startTime||Date.now(),s.endTime||e.endTime||Date.now(),n,t);await An(i,{onExport:()=>{document.getElementById("exportData")?.click(),re(n,e)},onDiscard:()=>{re(n,e),T("Workout discarded","polite")},onKeepRecording:()=>{document.getElementById("resumeButton")?.click()}})})};function q(n){const e=document.getElementById(n);return e||console.warn(`Element with ID "${n}" not found in DOM`),e}const jn=q("connectPower"),Yn=q("connectHeartrate"),Kn=q("connectCadence"),Gn=q("power"),Jn=q("heartrate"),Xn=q("cadence"),oe={power:{display:Gn,connect:jn},heartrate:{display:Jn,connect:Yn},cadence:{display:Xn,connect:Kn}},Qn="bpt-user-profile";function eo(){try{const n=localStorage.getItem(Qn);if(n)return JSON.parse(n)}catch(n){console.warn("Failed to load user profile:",n)}return{ftp:null,maxHr:null}}function je(n){return[{name:"Active Recovery",min:0,max:Math.round(n*.55)},{name:"Endurance",min:Math.round(n*.55),max:Math.round(n*.75)},{name:"Tempo",min:Math.round(n*.75),max:Math.round(n*.9)},{name:"Threshold",min:Math.round(n*.9),max:Math.round(n*1.05)},{name:"VO2max",min:Math.round(n*1.05),max:Math.round(n*1.2)},{name:"Anaerobic",min:Math.round(n*1.2),max:Math.round(n*1.5)},{name:"Neuromuscular",min:Math.round(n*1.5),max:9999}]}function Ye(n){return[{name:"Recovery",min:Math.round(n*.5),max:Math.round(n*.6)},{name:"Aerobic",min:Math.round(n*.6),max:Math.round(n*.7)},{name:"Tempo",min:Math.round(n*.7),max:Math.round(n*.8)},{name:"Threshold",min:Math.round(n*.8),max:Math.round(n*.9)},{name:"Anaerobic",min:Math.round(n*.9),max:n}]}function to(n,e){const t=je(e);for(let o=0;o<t.length;o++)if(n>=t[o].min&&n<t[o].max)return{zone:o+1,name:t[o].name};return null}function no(n,e){const t=Ye(e);for(let o=0;o<t.length;o++)if(n>=t[o].min&&n<=t[o].max)return{zone:o+1,name:t[o].name};return null}class oo{_powerZones=[];_hrZones=[];_lastPowerZone=null;_lastHrZone=null;_lastUpdateTime=null;_ftp=null;_maxHr=null;_currentPowerZone=null;_currentHrZone=null;_onChangeCallbacks=[];constructor(){this.loadProfile()}loadProfile(){const e=eo();if(this._ftp=e.ftp,this._maxHr=e.maxHr,this._ftp){const t=je(this._ftp);this._powerZones=t.map((o,s)=>({zone:s+1,name:o.name,min:o.min,max:o.max,timeInZoneMs:0}))}if(this._maxHr){const t=Ye(this._maxHr);this._hrZones=t.map((o,s)=>({zone:s+1,name:o.name,min:o.min,max:o.max,timeInZoneMs:0}))}}onChange(e){this._onChangeCallbacks.push(e)}offChange(e){const t=this._onChangeCallbacks.indexOf(e);t>-1&&this._onChangeCallbacks.splice(t,1)}_notifyChange(){for(const e of this._onChangeCallbacks)try{e()}catch(t){console.error("Zone state change callback error:",t)}}updatePower(e,t=Date.now()){if(!this._ftp)return null;const o=to(e,this._ftp);if(!o)return null;const s=o.zone;if(this._lastUpdateTime!==null&&this._lastPowerZone!==null){const c=t-this._lastUpdateTime,l=this._powerZones[this._lastPowerZone-1];l&&c>0&&c<5e3&&(l.timeInZoneMs+=c)}this._lastPowerZone=s,this._lastUpdateTime=t;const r=this._powerZones[s-1],i=r.max-r.min,a=i>0?Math.min(100,Math.max(0,(e-r.min)/i*100)):50;return this._currentPowerZone={zone:s,name:o.name,percentInZone:a},this._notifyChange(),this._currentPowerZone}updateHeartRate(e,t=Date.now()){if(!this._maxHr)return null;const o=no(e,this._maxHr);if(!o)return null;const s=o.zone;if(this._lastUpdateTime!==null&&this._lastHrZone!==null){const c=t-this._lastUpdateTime,l=this._hrZones[this._lastHrZone-1];l&&c>0&&c<5e3&&(l.timeInZoneMs+=c)}this._lastHrZone=s,(this._lastUpdateTime===null||t-this._lastUpdateTime>50)&&(this._lastUpdateTime=t);const r=this._hrZones[s-1],i=r.max-r.min,a=i>0?Math.min(100,Math.max(0,(e-r.min)/i*100)):50;return this._currentHrZone={zone:s,name:o.name,percentInZone:a},this._notifyChange(),this._currentHrZone}getCurrentPowerZone(){return this._currentPowerZone}getCurrentHrZone(){return this._currentHrZone}getPowerZoneDistribution(){const e=this._powerZones.reduce((t,o)=>t+o.timeInZoneMs,0);return{zones:[...this._powerZones],totalTimeMs:e}}getHrZoneDistribution(){const e=this._hrZones.reduce((t,o)=>t+o.timeInZoneMs,0);return{zones:[...this._hrZones],totalTimeMs:e}}hasPowerZones(){return this._ftp!==null&&this._ftp>0}hasHrZones(){return this._maxHr!==null&&this._maxHr>0}getFtp(){return this._ftp}getMaxHr(){return this._maxHr}reset(){this._powerZones.forEach(e=>e.timeInZoneMs=0),this._hrZones.forEach(e=>e.timeInZoneMs=0),this._lastPowerZone=null,this._lastHrZone=null,this._lastUpdateTime=null,this._currentPowerZone=null,this._currentHrZone=null,this._notifyChange()}toJSON(){return{powerZones:[...this._powerZones],hrZones:[...this._hrZones],ftp:this._ftp,maxHr:this._maxHr}}}const so=5e3,ro=100;let P;function ao(){let n=document.getElementById("powerZoneGauge"),e=document.getElementById("hrZoneGauge");if(!n){const t=document.querySelector(".metric-group-power");t&&(n=document.createElement("bpt-zone-gauge"),n.id="powerZoneGauge",n.setAttribute("type","power"),n.setAttribute("compact",""),n.style.display="none",t.appendChild(n))}if(!e){const t=document.querySelector(".metric-group-heartrate");t&&(e=document.createElement("bpt-zone-gauge"),e.id="hrZoneGauge",e.setAttribute("type","heartrate"),e.setAttribute("compact",""),e.style.display="none",t.appendChild(e))}return{powerGauge:n,hrGauge:e}}function io(){let n=document.getElementById("powerLiveChart"),e=document.getElementById("hrLiveChart"),t=document.getElementById("liveChartsContainer");if(!t){const o=document.getElementById("yourMetrics");if(o){t=document.createElement("div"),t.id="liveChartsContainer",t.className="live-charts-container",t.style.display="none";const s=document.getElementById("metricsTable");s&&s.nextSibling?o.insertBefore(t,s.nextSibling):o.appendChild(t)}}return t&&(n||(n=document.createElement("bpt-live-chart"),n.id="powerLiveChart",n.setAttribute("type","power"),n.setAttribute("duration","60"),t.appendChild(n)),e||(e=document.createElement("bpt-live-chart"),e.id="hrLiveChart",e.setAttribute("type","heartrate"),e.setAttribute("duration","60"),t.appendChild(e))),{powerChart:n,hrChart:e}}function co(n){let e=document.getElementById("toggleLiveCharts");if(!e){const t=document.getElementById("topBarControls");if(t){e=document.createElement("button"),e.id="toggleLiveCharts",e.className="workout-btn workout-btn-chart",e.setAttribute("aria-label","Toggle live charts"),e.setAttribute("title","Toggle Charts"),e.innerHTML="📊",e.style.display="none";const o=document.querySelector(".workout-controls");o?t.insertBefore(e,o):t.appendChild(e)}}return e&&e.setAttribute("aria-pressed",n?"true":"false"),e}function lo(n,e,t){if(n){const o=t.getCurrentPowerZone();o&&t.hasPowerZones()?(n.style.display="",n.setZone(o.zone,o.name,o.percentInZone)):t.hasPowerZones()||(n.style.display="none")}if(e){const o=t.getCurrentHrZone();o&&t.hasHrZones()?(e.style.display="",e.setZone(o.zone,o.name,o.percentInZone)):t.hasHrZones()||(e.style.display="none")}}function pe(n,e,t){const o=n.closest(".metric-group");if(!o)return;const s={1:"#3b82f6",2:"#22c55e",3:"#eab308",4:"#f97316",5:"#ef4444",6:"#a855f7",7:"#ec4899"};if(e!==null&&e>=1&&e<=7){const r=s[e];n.style.color=r,o.style.borderLeftColor=r,o.style.borderLeftWidth="4px",o.style.borderLeftStyle="solid"}else n.style.color="",o.style.borderLeftColor="",o.style.borderLeftWidth="",o.style.borderLeftStyle=""}const uo=({connectionsState:n,measurementsState:e})=>{P=new oo;const{powerGauge:o,hrGauge:s}=ao(),{powerChart:r,hrChart:i}=io();let a=localStorage.getItem("bpt-charts-visible")==="true";const c=co(a),l=document.getElementById("liveChartsContainer");l&&(l.style.display=a?"flex":"none"),c&&c.addEventListener("click",()=>{a=!a,localStorage.setItem("bpt-charts-visible",a?"true":"false"),c.setAttribute("aria-pressed",a?"true":"false"),l&&(l.style.display=a?"flex":"none")});let d=0,u=0,p=null,m=null;const g=()=>{if(r&&e.power.length>d){for(let f=d;f<e.power.length;f++){const w=e.power[f];r.addDataPoint(w.value,w.timestamp)}d=e.power.length}if(i&&e.heartrate.length>u){for(let f=u;f<e.heartrate.length;f++){const w=e.heartrate[f];i.addDataPoint(w.value,w.timestamp)}u=e.heartrate.length}},h=f=>{const w=oe[f]?.display,S=n[f];if(!w||!S)return;if(!S.isConnected){w.textContent="--",(f==="power"||f==="heartrate")&&pe(w,null);return}const b=e[f];if(!Array.isArray(b)||b.length===0){w.textContent="--";return}const E=b[b.length-1];if(!E||typeof E.value!="number"||typeof E.timestamp!="number"){w.textContent="--";return}if(Date.now()-E.timestamp>so){w.textContent="--";return}if(w.textContent=String(E.value),f==="power"){const x=P.updatePower(E.value,E.timestamp),k=x?.zone??null;k!==p&&(k!==null&&p!==null&&be.announceZoneChange(x.name),p=k),pe(w,k)}else if(f==="heartrate"){const x=P.updateHeartRate(E.value,E.timestamp),k=x?.zone??null;k!==m&&(k!==null&&m!==null&&be.announceZoneChange(x.name),m=k),pe(w,k)}},v=["power","heartrate","cadence"];return setInterval(()=>{v.forEach(h),lo(o,s,P),g()},ro),document.addEventListener("workoutStarted",()=>{c&&(c.style.display="inline-flex")}),document.addEventListener("workoutStopped",()=>{c&&(c.style.display="none")}),window.addEventListener("storage",f=>{f.key==="bpt-user-profile"&&P.loadProfile()}),document.addEventListener("workout-discarded",()=>{P.reset(),d=0,u=0,r&&r.clear(),i&&i.clear()}),P},he=5,mo=1e3,po=async()=>{const n=[],e=[];let t=!1,o=0,s=null,r=null,i=null;const a=await navigator.bluetooth.requestDevice({filters:[{services:["cycling_speed_and_cadence"]}],optionalServices:["cycling_speed_and_cadence"]});if(!a.gatt)throw new Error("GATT server not available");const c=a.name||"Cadence Sensor",l=m=>{e.forEach(g=>g(m))},d=m=>{const h=m.target.value;if(!h)return;const v=h.getUint8(0);if(v&2){let f=1;v&1&&(f=7);const w=h.getUint16(f,!0),S=h.getUint16(f+2,!0);if(r!==null&&i!==null){let b=w-r,E=S-i;if(b<0&&(b+=65536),E<0&&(E+=65536),E>0){const y=E/1024,x=Math.round(b/y*60);if(x>=0&&x<300){const k={timestamp:Date.now(),value:x};n.forEach(F=>F(k))}}}r=w,i=S}},u=async()=>{if(!a.gatt)return;s=await(await(await a.gatt.connect()).getPrimaryService("cycling_speed_and_cadence")).getCharacteristic("csc_measurement"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",d),o=0,l("connected")},p=async()=>{if(t||o>=he){o>=he&&(console.error("Cadence sensor: Max reconnection attempts reached"),l("failed"));return}o++;const m=mo*Math.pow(2,o-1);console.log(`Cadence sensor: Reconnection attempt ${o}/${he} in ${m}ms`),l("reconnecting"),await new Promise(g=>setTimeout(g,m));try{await u(),console.log("Cadence sensor: Reconnected successfully")}catch(g){console.error("Cadence sensor: Reconnection failed:",g),p()}};return a.addEventListener("gattserverdisconnected",()=>{t||(console.log("Cadence sensor: Connection lost, attempting to reconnect..."),l("disconnected"),p())}),await u(),{disconnect:()=>{t=!0,s&&(s.removeEventListener("characteristicvaluechanged",d),s.stopNotifications().catch(()=>{})),a.gatt?.disconnect()},addListener:m=>{n.push(m)},deviceName:c,onStatusChange:m=>{e.push(m)}}},ho=async()=>po(),ge=5,go=1e3,fo=async()=>{const n=[],e=[];let t=!1,o=0,s=null;const r=await navigator.bluetooth.requestDevice({filters:[{services:["heart_rate"]}],optionalServices:["heart_rate"]});if(!r.gatt)throw new Error("GATT server not available");const i=r.name||"Heart Rate Monitor",a=u=>{e.forEach(p=>p(u))},c=u=>{const m=u.target.value;if(!m)return;const g=m.getUint8(0);let h;g&1?h=m.getUint16(1,!0):h=m.getUint8(1);const v={timestamp:Date.now(),value:h};n.forEach(f=>f(v))},l=async()=>{if(!r.gatt)return;s=await(await(await r.gatt.connect()).getPrimaryService("heart_rate")).getCharacteristic("heart_rate_measurement"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",c),o=0,a("connected")},d=async()=>{if(t||o>=ge){o>=ge&&(console.error("Heart rate sensor: Max reconnection attempts reached"),a("failed"));return}o++;const u=go*Math.pow(2,o-1);console.log(`Heart rate sensor: Reconnection attempt ${o}/${ge} in ${u}ms`),a("reconnecting"),await new Promise(p=>setTimeout(p,u));try{await l(),console.log("Heart rate sensor: Reconnected successfully")}catch(p){console.error("Heart rate sensor: Reconnection failed:",p),d()}};return r.addEventListener("gattserverdisconnected",()=>{t||(console.log("Heart rate sensor: Connection lost, attempting to reconnect..."),a("disconnected"),d())}),await l(),{disconnect:()=>{t=!0,s&&(s.removeEventListener("characteristicvaluechanged",c),s.stopNotifications().catch(()=>{})),r.gatt?.disconnect()},addListener:u=>{n.push(u)},deviceName:i,onStatusChange:u=>{e.push(u)}}},yo=async()=>fo(),fe=5,vo=1e3,bo=async()=>{const n=[],e=[];let t=!1,o=0,s=null;const r=await navigator.bluetooth.requestDevice({filters:[{services:["cycling_power"]}],optionalServices:["cycling_power"]});if(!r.gatt)throw new Error("GATT server not available");const i=r.name||"Power Sensor",a=u=>{e.forEach(p=>p(u))},c=u=>{const m=u.target.value;if(!m)return;const g=m.getInt16(2,!0),h={timestamp:Date.now(),value:g};n.forEach(v=>v(h))},l=async()=>{if(!r.gatt)return;s=await(await(await r.gatt.connect()).getPrimaryService("cycling_power")).getCharacteristic("cycling_power_measurement"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",c),o=0,a("connected")},d=async()=>{if(t||o>=fe){o>=fe&&(console.error("Power sensor: Max reconnection attempts reached"),a("failed"));return}o++;const u=vo*Math.pow(2,o-1);console.log(`Power sensor: Reconnection attempt ${o}/${fe} in ${u}ms`),a("reconnecting"),await new Promise(p=>setTimeout(p,u));try{await l(),console.log("Power sensor: Reconnected successfully")}catch(p){console.error("Power sensor: Reconnection failed:",p),d()}};return r.addEventListener("gattserverdisconnected",()=>{t||(console.log("Power sensor: Connection lost, attempting to reconnect..."),a("disconnected"),d())}),await l(),{disconnect:()=>{t=!0,s&&(s.removeEventListener("characteristicvaluechanged",c),s.stopNotifications().catch(()=>{})),r.gatt?.disconnect()},addListener:u=>{n.push(u)},deviceName:i,onStatusChange:u=>{e.push(u)}}},wo=async()=>bo(),Ke={power:"Power Meter",heartrate:"Heart Rate Monitor",cadence:"Cadence Sensor"},Ge={power:"⚡",heartrate:"❤️",cadence:"🚴"};function Eo(n,e){const t=Ke[e],o=n instanceof Error?n.message:String(n),s=n instanceof Error?n.name:"";return o.includes("User cancelled")||o.includes("cancelled the requestDevice")?{title:"Connection Cancelled",message:`${t} pairing was cancelled.`,suggestions:["Click the connect button to try again","Make sure your sensor is powered on and in range"],canRetry:!0}:o.includes("Bluetooth adapter not available")||o.includes("Web Bluetooth API is not available")||s==="NotFoundError"&&o.includes("Bluetooth")?{title:"Bluetooth Unavailable",message:"Bluetooth is not available on this device or browser.",suggestions:["Check that Bluetooth is enabled in your device settings","Try using Chrome, Edge, or another browser that supports Web Bluetooth","On macOS, ensure Bluetooth permissions are granted in System Preferences","On Windows, check that your Bluetooth adapter is working"],canRetry:!1}:o.includes("No Bluetooth devices")||o.includes("No devices found")||s==="NotFoundError"&&!o.includes("Bluetooth")?{title:"No Sensors Found",message:`No compatible ${t.toLowerCase()} was found nearby.`,suggestions:["Make sure your sensor is powered on","Wake up the sensor by spinning the pedals or moving","Bring the sensor closer to your device","Check that the sensor battery is not depleted","Ensure the sensor is not connected to another device"],canRetry:!0}:o.includes("GATT")||o.includes("Connection failed")||o.includes("connect")&&o.includes("fail")?{title:"Connection Failed",message:`Could not connect to the ${t.toLowerCase()}.`,suggestions:["Try moving closer to the sensor","Power cycle the sensor (turn off and on again)","Check that no other device is connected to this sensor","Restart Bluetooth on your device","If using a phone, try closing other Bluetooth apps"],canRetry:!0}:o.includes("SecurityError")||o.includes("permission")||s==="SecurityError"?{title:"Permission Denied",message:"Bluetooth permission was denied.",suggestions:["Check your browser settings to allow Bluetooth access",'If prompted, click "Allow" to grant Bluetooth permission',"Try refreshing the page and connecting again","On some browsers, you may need to access this site over HTTPS"],canRetry:!0}:o.includes("NetworkError")||o.includes("timeout")||s==="NetworkError"?{title:"Connection Timed Out",message:`The connection to your ${t.toLowerCase()} timed out.`,suggestions:["Make sure the sensor is in range and powered on","Try moving closer to the sensor","Power cycle the sensor and try again","Check for interference from other wireless devices"],canRetry:!0}:o.includes("Service")&&o.includes("not found")?{title:"Incompatible Sensor",message:`This device doesn't appear to be a compatible ${t.toLowerCase()}.`,suggestions:["Make sure you selected the correct sensor type","Check that your sensor supports standard Bluetooth protocols","Some sensors may require a firmware update","Consult your sensor's documentation for compatibility"],canRetry:!0}:{title:"Connection Error",message:`Failed to connect to ${t.toLowerCase()}.`,suggestions:["Make sure the sensor is powered on and nearby","Try power cycling the sensor","Restart Bluetooth on your device","Refresh the page and try again"],canRetry:!0}}function xo(n){const e=document.createElement("div");e.className="connection-error-content";const t=document.createElement("p");if(t.className="connection-error-message",t.textContent=n.message,e.appendChild(t),n.suggestions.length>0){const o=document.createElement("div");o.className="connection-error-troubleshooting";const s=document.createElement("h3");s.textContent="💡 Troubleshooting Tips",o.appendChild(s);const r=document.createElement("ul");r.setAttribute("role","list"),n.suggestions.forEach(i=>{const a=document.createElement("li");a.textContent=i,r.appendChild(a)}),o.appendChild(r),e.appendChild(o)}return e}function To(n,e,t){return new Promise(o=>{const s=Eo(n,e),r=Ge[e],i=xo(s);console.error(`[${e}] Connection error:`,n),T(`${s.title}. ${s.message}`,"assertive");let a=null;const c=[];c.push({text:"Dismiss",variant:"secondary",onClick:()=>{a?.(),o(!1)}}),s.canRetry&&c.push({text:"Try Again",variant:"primary",onClick:()=>{a?.(),t&&t(),o(!0)}}),a=ae({title:s.title,icon:r,content:i,buttons:c,closeOnOverlay:!0,onClose:()=>o(!1)})})}function So(n,e){const t=Ke[n],o=Ge[n],s=document.createElement("div");s.className="connection-error-content";const r=document.createElement("p");r.className="connection-error-message",r.textContent=`Lost connection to your ${t.toLowerCase()} and automatic reconnection failed.`,s.appendChild(r);const i=document.createElement("div");i.className="connection-error-troubleshooting";const a=document.createElement("h3");a.textContent="💡 To reconnect:",i.appendChild(a);const c=document.createElement("ul");c.setAttribute("role","list"),["Make sure the sensor is still powered on","Move closer to the sensor",'Click "Try Again" to reconnect manually'].forEach(d=>{const u=document.createElement("li");u.textContent=d,c.appendChild(u)}),i.appendChild(c),s.appendChild(i),T(`${t} connection lost. Automatic reconnection failed.`,"assertive");let l=null;l=ae({title:"Connection Lost",icon:o,content:s,buttons:[{text:"Dismiss",variant:"secondary",onClick:()=>{l?.()}},{text:"Try Again",variant:"primary",onClick:()=>{l?.(),e?.()}}],closeOnOverlay:!0})}const ko={power:"⚡",heartrate:"❤️",cadence:"🚴"},ye=n=>n.charAt(0).toUpperCase()+n.slice(1),Co=({connectionsState:n,measurementsState:e})=>{const t=["power","heartrate","cadence"],o={power:wo,heartrate:yo,cadence:ho},s=(c,l,d)=>{const u=oe[c]?.connect;if(!u)return;const p=ye(c),m=ko[c];switch(l){case"connected":d?u.textContent=`${m} Disconnect ${p} (${d})`:u.textContent=`${m} Disconnect ${p}`;break;case"reconnecting":u.textContent=`${m} Reconnecting ${p}...`;break;case"disconnected":u.textContent=`${m} Connect ${p}`;break}},r=c=>{const l=n[c];if(typeof l.disconnect=="function"){l.disconnect(),l.disconnect=null,l.isConnected=!1,s(c,"disconnected");const d=oe[c]?.display;d&&(d.textContent="--")}},i=(c,l)=>d=>{const u=ye(c);switch(d){case"connected":s(c,"connected",l),L(`${u} sensor reconnected`,"success");break;case"reconnecting":s(c,"reconnecting");break;case"failed":n[c].isConnected=!1,n[c].disconnect=null,s(c,"disconnected"),So(c,()=>a(c));break}},a=async c=>{try{const l=await o[c](),{disconnect:d,addListener:u,deviceName:p,onStatusChange:m}=l;n[c].disconnect=d,n[c].isConnected=!0,u(g=>{e.add(c,g)}),m&&m(i(c,p||ye(c))),s(c,"connected",p),p&&L(`Connected to ${p}`,"success")}catch(l){await To(l,c,()=>a(c))||console.log(`User dismissed ${c} connection error dialog`)}};t.forEach(c=>{const l=oe[c]?.connect;l&&l.addEventListener("click",async()=>{n[c].isConnected?r(c):await a(c)})})},Io="BikeTrackerDB",Bo=1,$="activeWorkout",Re="completedWorkouts";let ee=null;async function Se(){return ee||new Promise((n,e)=>{const t=indexedDB.open(Io,Bo);t.onerror=()=>{console.error("Failed to open IndexedDB:",t.error),e(t.error)},t.onsuccess=()=>{ee=t.result,n(ee)},t.onupgradeneeded=o=>{const s=o.target.result;s.objectStoreNames.contains($)||s.createObjectStore($,{keyPath:"id"}),s.objectStoreNames.contains(Re)||s.createObjectStore(Re,{keyPath:"id"}).createIndex("startTime","startTime",{unique:!1})}})}async function Je(n,e){try{const t=await Se(),o={id:"current",startTime:e??Date.now(),lastUpdated:Date.now(),heartrate:n.heartrate,power:n.power,cadence:n.cadence,laps:n.laps??[]};return new Promise((s,r)=>{const c=t.transaction($,"readwrite").objectStore($).put(o);c.onsuccess=()=>s(),c.onerror=()=>{console.error("Failed to save workout:",c.error),r(c.error)}})}catch(t){throw console.error("Error saving active workout:",t),t}}async function Xe(){try{const n=await Se();return new Promise((e,t)=>{const r=n.transaction($,"readonly").objectStore($).get("current");r.onsuccess=()=>{e(r.result??null)},r.onerror=()=>{console.error("Failed to load workout:",r.error),t(r.error)}})}catch(n){return console.error("Error loading active workout:",n),null}}async function Qe(){try{const n=await Se();return new Promise((e,t)=>{const r=n.transaction($,"readwrite").objectStore($).delete("current");r.onsuccess=()=>e(),r.onerror=()=>{console.error("Failed to clear workout:",r.error),t(r.error)}})}catch(n){throw console.error("Error clearing active workout:",n),n}}async function Lo(){const n=await Xe();if(!n)return!1;const e=n.heartrate.length>0||n.power.length>0||n.cadence.length>0,t=Date.now()-n.lastUpdated<1440*60*1e3;return e&&t}let W=null,_=null;function _o(n,e,t=1e3){_={measurements:n,startTime:e},!W&&(W=setTimeout(async()=>{_&&(await Je(_.measurements,_.startTime),_=null),W=null},t))}async function Oe(){W&&(clearTimeout(W),W=null),_&&(await Je(_.measurements,_.startTime),_=null)}function Fe(){try{return"indexedDB"in window&&indexedDB!==null}catch{return!1}}const ve={heartrate:{min:0,max:300},power:{min:0,max:3e3},cadence:{min:0,max:300}};class Mo{heartrate=[];power=[];cadence=[];laps=[];_persistenceEnabled;_startTime=null;_onChangeCallbacks=[];constructor(e=!0){this._persistenceEnabled=e&&Fe(),this._persistenceEnabled&&typeof window<"u"&&(window.addEventListener("beforeunload",()=>{Oe()}),document.addEventListener("visibilitychange",()=>{document.hidden&&Oe()}))}setStartTime(e){this._startTime=e}getStartTime(){return this._startTime}onChange(e){this._onChangeCallbacks.push(e)}offChange(e){const t=this._onChangeCallbacks.indexOf(e);t>-1&&this._onChangeCallbacks.splice(t,1)}_notifyChange(){for(const e of this._onChangeCallbacks)try{e()}catch(t){console.error("State change callback error:",t)}this._persistenceEnabled&&_o(this.toJSON(),this._startTime)}addHeartrate(e){const{min:t,max:o}=ve.heartrate;if(e.value<=t||e.value>=o){console.warn(`Invalid heartrate value: ${e.value}`);return}this.heartrate.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addPower(e){const{min:t,max:o}=ve.power;if(e.value<t||e.value>=o){console.warn(`Invalid power value: ${e.value}`);return}this.power.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addCadence(e){const{min:t,max:o}=ve.cadence;if(e.value<t||e.value>=o){console.warn(`Invalid cadence value: ${e.value}`);return}this.cadence.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}add(e,t){switch(e){case"heartrate":this.addHeartrate(t);break;case"power":this.addPower(t);break;case"cadence":this.addCadence(t);break;default:throw new Error(`Unknown measurement type: ${e}`)}}async clear(e=!0){this.heartrate=[],this.power=[],this.cadence=[],this.laps=[],this._startTime=null,e&&this._persistenceEnabled&&await Qe(),this._notifyChange()}addLap(e){const t=Date.now(),o=this.laps.length+1,s={timestamp:t,number:o,elapsedMs:e?t-e:void 0};return this.laps.push(s),this._notifyChange(),s}getLapCount(){return this.laps.length}toJSON(){return{heartrate:[...this.heartrate],power:[...this.power],cadence:[...this.cadence],laps:[...this.laps]}}restore(e,t){this.heartrate=[...e.heartrate||[]],this.power=[...e.power||[]],this.cadence=[...e.cadence||[]],this.laps=[...e.laps||[]],this._startTime=t;for(const o of this._onChangeCallbacks)try{o()}catch(s){console.error("State change callback error:",s)}}setPersistenceEnabled(e){this._persistenceEnabled=e&&Fe()}hasData(){return this.heartrate.length>0||this.power.length>0||this.cadence.length>0}getCounts(){return{heartrate:this.heartrate.length,power:this.power.length,cadence:this.cadence.length}}}const Ao=()=>({measurementsState:new Mo,connectionsState:{power:{isConnected:!1,disconnect:null},heartrate:{isConnected:!1,disconnect:null},cadence:{isConnected:!1,disconnect:null}},timeState:{running:!1,startTime:null,endTime:null}}),$o=()=>{let n=null;const e=async()=>{try{"wakeLock"in navigator&&(n=await navigator.wakeLock.request("screen"),console.log("Screen wake lock activated"),n.addEventListener("release",()=>{console.log("Screen wake lock released")}))}catch(t){console.error("Wake lock request failed:",t)}};document.visibilityState==="visible"&&e(),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})},Do="modulepreload",Po=function(n,e){return new URL(n,e).href},Ue={},No=function(e,t,o){let s=Promise.resolve();if(t&&t.length>0){let l=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=l(t.map(d=>{if(d=Po(d,o),d in Ue)return;Ue[d]=!0;const u=d.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(o)for(let g=i.length-1;g>=0;g--){const h=i[g];if(h.href===d&&(!u||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${p}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":Do,u||(m.as="script"),m.crossOrigin="",m.href=d,c&&m.setAttribute("nonce",c),document.head.appendChild(m),u)return new Promise((g,h)=>{m.addEventListener("load",g),m.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return s.then(i=>{for(const a of i||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function zo(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:o,onRegistered:s,onRegisteredSW:r,onRegisterError:i}=n;let a,c;const l=async(u=!0)=>{await c};async function d(){if("serviceWorker"in navigator){if(a=await No(async()=>{const{Workbox:u}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:u}},[],import.meta.url).then(({Workbox:u})=>new u("./sw.js",{scope:"./",type:"classic"})).catch(u=>{i?.(u)}),!a)return;a.addEventListener("activated",u=>{(u.isUpdate||u.isExternal)&&window.location.reload()}),a.addEventListener("installed",u=>{u.isUpdate||o?.()}),a.register({immediate:e}).then(u=>{r?r("./sw.js",u):s?.(u)}).catch(u=>{i?.(u)})}}return c=d(),l}const Ro=()=>{const n=zo({onNeedRefresh(){Oo(n)},onOfflineReady(){console.log("App ready to work offline")},onRegistered(e){console.log("Service Worker registered successfully"),e&&setInterval(()=>{e.update()},36e5)},onRegisterError(e){console.log("Service Worker registration failed:",e)}})},Oo=n=>{const e=document.getElementById("updateNotification");if(!e)return;e.style.display="block",document.getElementById("updateButton")?.addEventListener("click",()=>{n(!0)},{once:!0}),document.getElementById("dismissUpdate")?.addEventListener("click",()=>{e.style.display="none"},{once:!0})};let H=null;const Fo=()=>{window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),H=n,Uo()}),window.addEventListener("appinstalled",()=>{console.log("PWA was installed successfully"),H=null,we()})},Uo=()=>{const n=document.getElementById("installPrompt");if(!n)return;n.style.display="block",document.getElementById("installButton")?.addEventListener("click",async()=>{if(!H)return;await H.prompt();const{outcome:o}=await H.userChoice;console.log(`User response to the install prompt: ${o}`),H=null,we()}),document.getElementById("dismissInstall")?.addEventListener("click",()=>{we()})},we=()=>{const n=document.getElementById("installPrompt");n&&(n.style.display="none")};function Zo({measurementsState:n,connectionsState:e}){typeof window<"u"&&(window.bike=n,window.connectionsState=e)}const G="",Ho="super-secret-bike-tracker-key";function ie(n={}){const e={...n};return e["X-API-Key"]=Ho,e}async function Vo(n){const e=await fetch(`${G}/api/streams/create`,{method:"POST",headers:ie({"Content-Type":"application/json"}),body:JSON.stringify({streamName:n})});if(!e.ok){const t=await e.json();throw new Error(t.error||"Failed to create stream")}return e.json()}async function Wo(){const n=await fetch(`${G}/api/streams`,{headers:ie()});if(!n.ok){const e=await n.text();throw new Error(e||"Failed to list streams")}return n.json()}async function qo(n,e,t="anonymous"){const o=await fetch(`${G}/api/streams/${n}/messages`,{method:"POST",headers:ie({"Content-Type":"application/json"}),body:JSON.stringify({message:e,author:t})});if(!o.ok){const s=await o.json();throw new Error(s.error||"Failed to add message")}return o.json()}function et(n,e,t,o){const s=new AbortController;let r=!0;const i={close:()=>{r=!1,s.abort()},get active(){return r}};return(async()=>{try{const a=await fetch(n,{method:"GET",headers:ie({Accept:"text/event-stream","Cache-Control":"no-cache"}),signal:s.signal});if(!a.ok)throw new Error(`SSE connection failed: ${a.status} ${a.statusText}`);if(!a.body)throw new Error("SSE response has no body");const c=a.body.getReader(),l=new TextDecoder;let d="";for(;r;){const{done:u,value:p}=await c.read();if(u)break;d+=l.decode(p,{stream:!0});const m=d.split(`

`);d=m.pop()||"";for(const g of m){if(!g.trim())continue;const h=g.match(/^data:\s*(.+)$/m);if(h)try{const v=JSON.parse(h[1]);v.type==="connected"&&t?t(v):v.type==="message"&&e(v)}catch(v){console.error("Error parsing SSE data:",v)}}}}catch(a){if(a.name==="AbortError")return;console.error("SSE connection error:",a),o&&o(a)}finally{r=!1}})(),i}function jo(n,e,t,o){const s=`${G}/api/streams/${n}/listen`;return et(s,e,t,o)}function Yo(n,e,t){const o=`${G}/api/streams/listenAll`;return et(o,n,e,t)}async function Ko(n,e){const t=JSON.stringify({power:e.power??null,cadence:e.cadence??null,heartrate:e.heartrate??null,timestamp:e.timestamp,elapsed:e.elapsed,dataType:"workout_metrics"});return qo(n,t,"bike-power-tracker")}class Go{measurementsState;timeState;isStreaming=!1;isPaused=!1;streamName=null;streamInterval=null;lastSentIndex={power:0,cadence:0,heartrate:0};constructor(e,t){this.measurementsState=e,this.timeState=t}async startStreaming(e){if(this.isStreaming)throw new Error("Already streaming");this.streamName=e||`workout-${this._getTimestamp()}`;try{return await Vo(this.streamName),this.isStreaming=!0,this.isPaused=!1,this._startStreamingLoop(),this.streamName}catch(t){throw console.error("Failed to start streaming:",t),this.streamName=null,t}}pauseStreaming(){this.isStreaming&&(this.isPaused=!0)}resumeStreaming(){this.isStreaming&&(this.isPaused=!1)}async stopStreaming(){this.isStreaming&&(this.isStreaming=!1,this.isPaused=!1,this.streamInterval&&(clearInterval(this.streamInterval),this.streamInterval=null),this.streamName=null,this.lastSentIndex={power:0,cadence:0,heartrate:0})}getStatus(){return{isStreaming:this.isStreaming,isPaused:this.isPaused,streamName:this.streamName}}_startStreamingLoop(){this.streamInterval=setInterval(async()=>{if(!(!this.isStreaming||this.isPaused||!this.timeState.running))try{await this._sendCurrentData()}catch(e){console.error("Error sending workout data:",e)}},1e3)}async _sendCurrentData(){if(!this.streamName)return;const e=this._getLatestValue("power"),t=this._getLatestValue("cadence"),o=this._getLatestValue("heartrate");if(e===null&&t===null&&o===null)return;const s=this.timeState.running&&this.timeState.startTime?Date.now()-this.timeState.startTime:this.timeState.endTime&&this.timeState.startTime?this.timeState.endTime-this.timeState.startTime:0,r={power:e,cadence:t,heartrate:o,timestamp:Date.now(),elapsed:se(s)};await Ko(this.streamName,r)}_getLatestValue(e){const t=this.measurementsState[e];if(!t||t.length===0)return null;const o=t.length-1;return o>=this.lastSentIndex[e]&&(this.lastSentIndex[e]=o),t[o].value}_getTimestamp(){const e=new Date,t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),r=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),a=String(e.getSeconds()).padStart(2,"0");return`${t}${o}${s}-${r}${i}${a}`}}class Jo{modal=null;currentConnection=null;streamMetricsSection=null;allStreamsMetricsSection=null;allStreamsConnection=null;streamCards=new Map;streamRows=new Map;isCompactView=!1;constructor(){this.initModal(),this.initInlineViewer(),this.initAllStreamsViewer()}initInlineViewer(){if(this.streamMetricsSection=document.getElementById("streamMetrics"),!this.streamMetricsSection){console.warn("Stream metrics section not found in DOM");return}const e=document.getElementById("closeStreamView");e&&e.addEventListener("click",()=>this.disconnectFromStream())}initAllStreamsViewer(){if(this.allStreamsMetricsSection=document.getElementById("allStreamsMetrics"),!this.allStreamsMetricsSection){console.warn("All streams metrics section not found in DOM");return}const e=document.getElementById("closeAllStreamsView");e&&e.addEventListener("click",()=>this.disconnectFromAllStreams());const t=document.getElementById("toggleViewBtn");t&&t.addEventListener("click",()=>this.toggleAllStreamsView())}toggleAllStreamsView(){this.isCompactView=!this.isCompactView;const e=document.getElementById("allStreamsGrid"),t=document.getElementById("allStreamsList"),o=document.getElementById("toggleViewBtn");this.isCompactView?(e&&(e.style.display="none"),t&&(t.style.display="flex"),o&&(o.textContent="🔲",o.title="Toggle grid view",o.classList.add("active"))):(e&&(e.style.display="grid"),t&&(t.style.display="none"),o&&(o.textContent="📋",o.title="Toggle compact view",o.classList.remove("active")))}initModal(){const e=document.createElement("div");e.id="streamViewerModal",e.className="stream-modal",e.innerHTML=`
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
    `,document.body.appendChild(e),this.modal=e,this.setupEventListeners()}setupEventListeners(){const e=document.getElementById("closeStreamModal"),t=document.getElementById("refreshStreamList"),o=document.getElementById("viewAllStreamsBtn");e&&e.addEventListener("click",()=>this.close()),t&&t.addEventListener("click",()=>this.refreshStreamList()),o&&o.addEventListener("click",()=>this.connectToAllStreams()),this.modal&&this.modal.addEventListener("click",s=>{s.target===this.modal&&this.close()})}async open(){this.modal&&(this.modal.style.display="flex"),await this.refreshStreamList()}close(){this.modal&&(this.modal.style.display="none")}async refreshStreamList(){const e=document.getElementById("streamsList");if(e){e.innerHTML='<p class="loading">Loading streams...</p>';try{const{streams:t}=await Wo();if(t.length===0){e.innerHTML='<p class="no-streams">No active streams found</p>';return}e.innerHTML="",t.forEach(o=>{const s=this.createStreamItem(o);e.appendChild(s)})}catch(t){console.error("Failed to load streams:",t);const o=t instanceof Error?t.message:"Unknown error";e.innerHTML=`<p class="error">Failed to load streams: ${o}</p>`}}}createStreamItem(e){const t=document.createElement("div");t.className="stream-item";const s=e.name.startsWith("workout-")?"🚴":"💬";return t.innerHTML=`
      <div class="stream-item-info">
        <div class="stream-item-name">${s} ${e.name}</div>
        <div class="stream-item-meta">
          ${e.length} message${e.length!==1?"s":""}
        </div>
      </div>
      <button class="connect-button" data-stream="${e.name}">
        👁️ View
      </button>
    `,t.querySelector(".connect-button")?.addEventListener("click",()=>{this.connectToStream(e.name)}),t}connectToStream(e){if(this.disconnectFromStream(),!this.streamMetricsSection){console.error("Stream metrics section not available");return}this.streamMetricsSection.style.display="flex";const t=document.getElementById("toggleStreamMetrics");t&&(t.checked=!0);const o=document.getElementById("streamTitle"),s=document.getElementById("streamStatus");o&&(o.textContent=e),s&&(s.textContent="Connecting...",s.className="status-badge connecting"),this.close(),this.currentConnection=jo(e,r=>this.handleStreamMessage(r),()=>this.handleStreamConnected(),r=>this.handleStreamError(r))}connectToAllStreams(){if(this.disconnectFromStream(),this.disconnectFromAllStreams(),!this.allStreamsMetricsSection){console.error("All streams metrics section not available");return}this.allStreamsMetricsSection.style.display="flex",this.close();const e=document.getElementById("allStreamsGrid"),t=document.getElementById("allStreamsList");e&&(e.innerHTML=""),t&&(t.innerHTML=""),this.streamCards.clear(),this.streamRows.clear();const o=document.getElementById("allStreamsStatus");o&&(o.textContent="Connecting...",o.className="status-badge connecting"),this.allStreamsConnection=Yo(s=>this.handleAllStreamsMessage(s),()=>this.handleAllStreamsConnected(),s=>this.handleAllStreamsError(s))}handleAllStreamsConnected(){console.log("Connected to all streams");const e=document.getElementById("allStreamsStatus");e&&(e.textContent="🟢 Connected",e.className="status-badge connected")}handleAllStreamsError(e){console.error("All streams error:",e);const t=document.getElementById("allStreamsStatus");t&&(this.allStreamsConnection&&this.allStreamsConnection.active?(t.textContent="🔄 Reconnecting...",t.className="status-badge reconnecting"):(t.textContent="🔴 Error",t.className="status-badge error"))}disconnectFromAllStreams(){this.allStreamsConnection&&(this.allStreamsConnection.close(),this.allStreamsConnection=null),this.allStreamsMetricsSection&&(this.allStreamsMetricsSection.style.display="none");const e=document.getElementById("yourMetrics");e&&(e.style.display="flex")}handleAllStreamsMessage(e){try{const t=e.stream,o=typeof e.data=="string"?JSON.parse(e.data):e.data;this.updateStreamCard(t,o)}catch(t){console.error("Error parsing stream message:",t,e)}}updateStreamCard(e,t){const o=document.getElementById("allStreamsGrid"),s=document.getElementById("allStreamsList");let r={};try{t.message?r=JSON.parse(t.message):r=t}catch{}if(o){let i=this.streamCards.get(e);if(i||(i=document.createElement("div"),i.className="stream-card",i.innerHTML=`
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
        `,o.appendChild(i),this.streamCards.set(e,i)),r.power!==void 0&&r.power!==null){const a=i.querySelector(".stream-card-power");a&&(a.textContent=String(r.power))}if(r.cadence!==void 0&&r.cadence!==null){const a=i.querySelector(".card-cadence");a&&(a.textContent=String(r.cadence))}if(r.heartrate!==void 0&&r.heartrate!==null){const a=i.querySelector(".card-heartrate");a&&(a.textContent=String(r.heartrate))}}if(s){let i=this.streamRows.get(e);if(i||(i=document.createElement("div"),i.className="stream-row",i.innerHTML=`
          <span class="stream-row-name" title="${e}">${e}</span>
          <span class="stream-row-power">--</span>
        `,s.appendChild(i),this.streamRows.set(e,i)),r.power!==void 0&&r.power!==null){const a=i.querySelector(".stream-row-power");a&&(a.textContent=String(r.power))}}}disconnectFromStream(){if(this.disconnectFromAllStreams(),this.currentConnection&&(this.currentConnection.close(),this.currentConnection=null),this.streamMetricsSection){this.streamMetricsSection.style.display="none";const t=document.getElementById("toggleStreamMetrics");t&&(t.checked=!1)}const e=document.getElementById("yourMetrics");e&&(e.style.display="flex"),this.resetViewer()}handleStreamConnected(){const e=document.getElementById("streamStatus");e&&(e.textContent="🟢 Connected",e.className="status-badge connected")}handleStreamMessage(e){try{const t=e.data?.message,o=typeof t=="string"?JSON.parse(t):e.data;(o.dataType==="workout_metrics"||o.power!==void 0||o.cadence!==void 0||o.heartrate!==void 0)&&this.updateMetrics(o);const s=document.getElementById("streamLastUpdate");if(s){const r=new Date;s.textContent=`Last update: ${r.toLocaleTimeString()}`}}catch(t){console.error("Error parsing stream message:",t,e)}}updateMetrics(e){const t=document.getElementById("streamPower"),o=document.getElementById("streamCadence"),s=document.getElementById("streamHeartrate"),r=document.getElementById("streamElapsed");t&&e.power!==null&&e.power!==void 0&&(t.textContent=String(e.power)),o&&e.cadence!==null&&e.cadence!==void 0&&(o.textContent=String(e.cadence)),s&&e.heartrate!==null&&e.heartrate!==void 0&&(s.textContent=String(e.heartrate)),r&&e.elapsed&&(r.textContent=e.elapsed)}handleStreamError(e){console.error("Stream error:",e);const t=document.getElementById("streamStatus");t&&(this.currentConnection&&this.currentConnection.active?(t.textContent="🔄 Reconnecting...",t.className="status-badge reconnecting"):(t.textContent="🔴 Error",t.className="status-badge error"))}resetViewer(){["streamPower","streamCadence","streamHeartrate","streamElapsed"].forEach(o=>{const s=document.getElementById(o);s&&(s.textContent="--")});const t=document.getElementById("streamLastUpdate");t&&(t.textContent="Waiting for data...")}}function Xo(){const n=new Jo,e=document.getElementById("viewStreamsButton");return e&&e.addEventListener("click",()=>n.open()),n}function Qo(n,e){const t=document.getElementById("startStreamButton"),o=document.getElementById("streamNameModal"),s=document.getElementById("closeStreamNameModal"),r=document.getElementById("cancelStreamName"),i=document.getElementById("confirmStreamName"),a=document.getElementById("streamNameInput"),c=document.getElementById("activeStreamToolbar"),l=document.getElementById("toolbarStreamName"),d=document.getElementById("streamPlayPauseBtn"),u=document.getElementById("streamStopBtn"),p=document.querySelector(".stream-indicator"),m=b=>{c&&(b.isStreaming?(c.style.display="flex",document.body.classList.add("has-stream-toolbar"),l&&(l.textContent=b.streamName),d&&(b.isPaused?(d.textContent="▶️",d.title="Resume Stream",p?.classList.add("paused")):(d.textContent="⏸️",d.title="Pause Stream",p?.classList.remove("paused")))):(c.style.display="none",document.body.classList.remove("has-stream-toolbar")))};if(!t){console.warn("Start stream button not found in DOM");return}const g=()=>{o&&(o.style.display="none"),a&&(a.value="")},h=async()=>{const b=a?.value.trim()||"";try{const E=await n.startStreaming(b||void 0);t.textContent="🔴 Stop Streaming",t.classList.add("streaming"),m(n.getStatus()),L(`Streaming to: ${E}`,"success"),g()}catch(E){console.error("Failed to start streaming:",E);const y=E instanceof Error?E.message:"Unknown error";L("Failed to start streaming: "+y,"error")}},v=async()=>{try{await n.stopStreaming(),t.textContent="📡 Start Streaming",t.classList.remove("streaming"),m(n.getStatus()),L("Streaming stopped","info")}catch(b){console.error(b),L("Error stopping stream","error")}};d&&d.addEventListener("click",()=>{n.getStatus().isPaused?(n.resumeStreaming(),L("Stream Resumed","success")):(n.pauseStreaming(),L("Stream Paused","info")),m(n.getStatus())}),u&&u.addEventListener("click",async()=>{confirm("Stop streaming?")&&await v()}),s&&s.addEventListener("click",g),r&&r.addEventListener("click",g),i&&i.addEventListener("click",h),a&&a.addEventListener("keypress",b=>{b.key==="Enter"&&h()}),o&&o.addEventListener("click",b=>{b.target===o&&g()}),t.addEventListener("click",async()=>{if(n.isStreaming)await v();else if(o)o.style.display="flex",a?.focus();else try{const b=await n.startStreaming();t.textContent="🔴 Stop Streaming",t.classList.add("streaming"),m(n.getStatus()),L(`Streaming to: ${b}`,"success")}catch(b){console.error("Failed to start streaming:",b);const E=b instanceof Error?b.message:"Unknown error";L("Failed to start streaming: "+E,"error")}});const f=document.getElementById("pauseButton"),w=document.getElementById("stopButton"),S=()=>{e.running===!1&&n.isStreaming&&setTimeout(()=>{!e.running&&n.isStreaming&&(n.stopStreaming(),t.textContent="📡 Start Streaming",t.classList.remove("streaming"),m(n.getStatus()))},100)};f&&f.addEventListener("click",S),w&&w.addEventListener("click",S)}const ce="",es="super-secret-bike-tracker-key";function le(n={}){const e={...n};return e["X-API-Key"]=es,e}async function ts(){try{const n=await fetch(`${ce}/health`,{headers:le()});return n.ok?(await n.json()).database==="connected":!1}catch{return!1}}async function ns({page:n=1,limit:e=20,status:t,userId:o}={}){const s=new URLSearchParams;s.set("page",n.toString()),s.set("limit",e.toString()),t&&s.set("status",t),o&&s.set("userId",o);const r=await fetch(`${ce}/api/workouts?${s}`,{headers:le()});if(!r.ok){const i=await r.json();throw new Error(i.error||"Failed to list workouts")}return r.json()}async function os(n,e=!1){const t=new URLSearchParams;e&&t.set("includeTelemetry","true");const o=await fetch(`${ce}/api/workouts/${n}?${t}`,{headers:le()});if(!o.ok){const s=await o.json();throw new Error(s.error||"Failed to get workout")}return o.json()}async function ss(n){const e=await fetch(`${ce}/api/workouts/${n}`,{method:"DELETE",headers:le()});if(!e.ok){const t=await e.json();throw new Error(t.error||"Failed to delete workout")}return e.json()}function tt(n){if(!n)return"--";const e=Math.floor(n/3600),t=Math.floor(n%3600/60),o=n%60;return e>0?`${e}h ${t}m`:t>0?`${t}m ${o}s`:`${o}s`}function Ee(n){return n?new Date(n).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"--"}let A=1,xe=1,te=!1;function rs(){const n=document.getElementById("workoutHistoryButton"),e=document.getElementById("workoutHistoryModal"),t=document.getElementById("closeWorkoutHistoryModal"),o=document.getElementById("historyPrevPage"),s=document.getElementById("historyNextPage"),r=document.getElementById("historyRefresh");if(!n||!e){console.warn("Workout history elements not found");return}as(),n.addEventListener("click",async()=>{e.style.display="flex",A=1,await K()}),t?.addEventListener("click",()=>{e.style.display="none"}),e.addEventListener("click",i=>{i.target===e&&(e.style.display="none")}),o?.addEventListener("click",async()=>{A>1&&(A--,await K())}),s?.addEventListener("click",async()=>{A<xe&&(A++,await K())}),r?.addEventListener("click",async()=>{await K()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&e.style.display==="flex"&&(e.style.display="none")})}async function as(){const n=document.getElementById("workoutHistoryButton");try{te=await ts(),n&&(n.disabled=!te,n.title=te?"View workout history":"Database not configured")}catch{te=!1,n&&(n.disabled=!0,n.title="Database not available")}}async function K(){const n=document.getElementById("workoutList"),e=document.getElementById("historyPageInfo"),t=document.getElementById("historyPrevPage"),o=document.getElementById("historyNextPage");if(n){n.innerHTML='<div class="workout-loading">Loading workouts...</div>';try{const s=await ns({page:A,limit:10}),{workouts:r,pagination:i}=s;if(xe=i.totalPages,e&&(e.textContent=`Page ${i.page} of ${i.totalPages} (${i.total} total)`),t&&(t.disabled=A<=1),o&&(o.disabled=A>=xe),r.length===0){n.innerHTML=`
        <div class="workout-empty">
          <p>No workouts found</p>
          <p class="workout-empty-hint">Start a workout to see it here!</p>
        </div>
      `;return}n.innerHTML=r.map(a=>is(a)).join(""),n.querySelectorAll(".workout-card").forEach(a=>{const c=a.dataset.workoutId;c&&(a.querySelector(".workout-view-btn")?.addEventListener("click",l=>{l.stopPropagation(),cs(c)}),a.querySelector(".workout-delete-btn")?.addEventListener("click",l=>{l.stopPropagation(),us(c)}))})}catch(s){console.error("Failed to load workouts:",s);const r=s instanceof Error?s.message:"Unknown error";n.innerHTML=`
      <div class="workout-error">
        <p>Failed to load workouts</p>
        <p class="workout-error-detail">${r}</p>
      </div>
    `}}}function is(n){const e=n.status.toLowerCase(),t=n.summary?JSON.parse(n.summary):{};return`
    <div class="workout-card" data-workout-id="${n.id}">
      <div class="workout-card-header">
        <span class="workout-title">${n.title||"Untitled Workout"}</span>
        <span class="workout-status workout-status-${e}">${n.status}</span>
      </div>
      <div class="workout-card-body">
        <div class="workout-date">
          📅 ${Ee(n.startTime)}
        </div>
        <div class="workout-stats">
          ${n.duration?`<span class="workout-stat">⏱️ ${tt(n.duration)}</span>`:""}
          ${t.avgPower?`<span class="workout-stat">⚡ ${t.avgPower}W avg</span>`:""}
          ${t.maxPower?`<span class="workout-stat">⚡ ${t.maxPower}W max</span>`:""}
          ${t.avgHeartrate?`<span class="workout-stat">❤️ ${t.avgHeartrate} bpm</span>`:""}
          ${t.totalEnergy?`<span class="workout-stat">🔥 ${t.totalEnergy} kJ</span>`:""}
        </div>
      </div>
      <div class="workout-card-actions">
        <button class="workout-view-btn" title="View details">👁️ View</button>
        <button class="workout-delete-btn" title="Delete workout">🗑️</button>
      </div>
    </div>
  `}async function cs(n){const e=document.getElementById("workoutDetailPanel"),t=document.getElementById("workoutListPanel");if(!(!e||!t)){t.style.display="none",e.style.display="block",e.innerHTML='<div class="workout-loading">Loading workout details...</div>';try{const o=await os(n,!0);e.innerHTML=ls(o),e.querySelector(".workout-back-btn")?.addEventListener("click",()=>{e.style.display="none",t.style.display="block"}),e.querySelector(".workout-export-btn")?.addEventListener("click",()=>{ds(o)})}catch(o){console.error("Failed to load workout details:",o);const s=o instanceof Error?o.message:"Unknown error";e.innerHTML=`
      <div class="workout-error">
        <p>Failed to load workout</p>
        <p class="workout-error-detail">${s}</p>
        <button class="workout-back-btn">← Back to list</button>
      </div>
    `,e.querySelector(".workout-back-btn")?.addEventListener("click",()=>{e.style.display="none",t.style.display="block"})}}}function ls(n){const e=n.summary?JSON.parse(n.summary):{},t=n.status.toLowerCase();return`
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
          <span class="meta-value">${Ee(n.startTime)}</span>
        </div>
        ${n.endTime?`
          <div class="meta-item">
            <span class="meta-label">End Time</span>
            <span class="meta-value">${Ee(n.endTime)}</span>
          </div>
        `:""}
        ${n.duration?`
          <div class="meta-item">
            <span class="meta-label">Duration</span>
            <span class="meta-value">${tt(n.duration)}</span>
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
  `}function ds(n){const t=`workout-${new Date(n.startTime).toISOString().replace(/[:.]/g,"-").slice(0,19)}`,o={id:n.id,title:n.title,sport:n.sport,startTime:n.startTime,endTime:n.endTime,duration:n.duration,summary:n.summary,telemetry:n.telemetry},s=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),r=URL.createObjectURL(s),i=document.createElement("a");i.href=r,i.download=`${t}.json`,i.click(),URL.revokeObjectURL(r)}async function us(n){if(confirm("Are you sure you want to delete this workout? This cannot be undone."))try{await ss(n),await K()}catch(e){console.error("Failed to delete workout:",e);const t=e instanceof Error?e.message:"Unknown error";alert(`Failed to delete workout: ${t}`)}}const ke="bpt-dark-mode";function nt(){try{const n=localStorage.getItem(ke);return n==="light"||n==="dark"||n==="system"?n:null}catch{return null}}function ms(n){try{localStorage.setItem(ke,n)}catch{}}function Ce(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function V(n){document.documentElement.setAttribute("data-theme",n)}function ot(n){return n==="system"?Ce()?"dark":"light":n}function ps(){const n=nt();if(n){const t=ot(n);return V(t),t==="dark"}const e=Ce();return e&&V("dark"),e}function hs(n){const e=ps();n.checked=e,n.addEventListener("change",()=>{const o=n.checked?"dark":"light";V(o),ms(o),T(`Dark mode ${n.checked?"enabled":"disabled"}`)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",o=>{const s=nt();if(!s||s==="system"){const r=o.matches?"dark":"light";V(r),n.checked=o.matches,T(`Dark mode ${o.matches?"enabled":"disabled"}`)}}),window.addEventListener("storage",o=>{if(o.key===ke){const s=o.newValue;if(s){const r=ot(s);V(r),n.checked=r==="dark"}else{const r=Ce();V(r?"dark":"light"),n.checked=r}}})}const st="bpt-user-profile",Ze={ftp:null,maxHr:null,weight:null,onboardingComplete:!1,lastUpdated:null};function rt(){try{const n=localStorage.getItem(st);if(n)return{...Ze,...JSON.parse(n)}}catch(n){console.warn("Failed to load user profile:",n)}return{...Ze}}function He(n){try{n.lastUpdated=Date.now(),localStorage.setItem(st,JSON.stringify(n))}catch(e){console.warn("Failed to save user profile:",e)}}const z=[{id:"welcome",title:"Welcome to Bike Power Tracker!",icon:"🚴",content:`
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
        `}];function gs(){const n=document.createElement("div");return n.id="onboardingModal",n.className="stream-modal",n.setAttribute("role","dialog"),n.setAttribute("aria-labelledby","onboardingTitle"),n.setAttribute("aria-modal","true"),n.style.display="none",n.innerHTML=`
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
    `,n}function fs(n,e,t){n.innerHTML="";for(let o=0;o<t;o++){const s=document.createElement("span");s.style.cssText=`
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${o===e?"#2196F3":"#d0d7de"};
            transition: background 0.3s ease;
        `,s.setAttribute("aria-hidden","true"),n.appendChild(s)}}function ys(n,e,t,o){const{icon:s,title:r,content:i,inputContainer:a,inputField:c,inputLabel:l,inputUnit:d,helpText:u,prevBtn:p,nextBtn:m,progressDots:g}=o;if(s.textContent=n.icon,r.textContent=n.title,i.innerHTML=n.content,n.inputType==="number"&&n.profileKey){a.style.display="block",l.textContent=n.inputLabel||"",c.placeholder=n.inputPlaceholder||"",c.min=String(n.inputMin||0),c.max=String(n.inputMax||9999),d.textContent=n.inputUnit||"",u.textContent=n.helpText||"";const h=t[n.profileKey];c.value=h?String(h):"",c.focus()}else a.style.display="none";p.style.display=e===0?"none":"inline-block",e===z.length-1?m.textContent="Get Started! 🚀":(n.inputType,m.textContent="Next →"),fs(g,e,z.length),T(`Step ${e+1} of ${z.length}: ${n.title}`)}function vs(n=!1){return new Promise(e=>{const t=rt();if(!n&&t.onboardingComplete){e(t);return}let o=document.getElementById("onboardingModal");o||(o=gs(),document.body.appendChild(o));const s=document.getElementById("onboardingIcon"),r=document.getElementById("onboardingStepTitle"),i=document.getElementById("onboardingContent"),a=document.getElementById("onboardingInput"),c=document.getElementById("onboardingInputField"),l=document.getElementById("onboardingInputLabel"),d=document.getElementById("onboardingInputUnit"),u=document.getElementById("onboardingHelpText"),p=document.getElementById("onboardingPrev"),m=document.getElementById("onboardingNext"),g=document.getElementById("skipOnboarding"),h=document.getElementById("onboardingProgressDots"),v={icon:s,title:r,content:i,inputContainer:a,inputField:c,inputLabel:l,inputUnit:d,helpText:u,prevBtn:p,nextBtn:m,progressDots:h};let f=0;const w=()=>{const x=z[f];if(x.inputType==="number"&&x.profileKey){const k=c.value?parseFloat(c.value):null;k!==null&&x.profileKey!=="onboardingComplete"&&x.profileKey!=="lastUpdated"&&(t[x.profileKey]=k)}},S=()=>{ys(z[f],f,t,v)},b=()=>{if(z[f].inputType==="number"&&!c.checkValidity()){c.reportValidity();return}w(),f<z.length-1?(f++,S()):(t.onboardingComplete=!0,He(t),o.style.display="none",L("Profile saved! Ready to ride 🚴","success"),T("Onboarding complete. Profile saved."),e(t))},E=()=>{w(),f>0&&(f--,S())},y=()=>{t.onboardingComplete=!0,He(t),o.style.display="none",T("Onboarding skipped"),e(t)};m.addEventListener("click",b),p.addEventListener("click",E),g.addEventListener("click",y),c.addEventListener("keydown",x=>{x.key==="Enter"&&b()}),o.style.display="flex",S(),ft(o.querySelector(".stream-modal-content"))})}function bs(){return!rt().onboardingComplete}function ws(){bs()&&setTimeout(()=>{vs()},500)}function Es(n){const e=Math.floor(n/1e3),t=Math.floor(e/60),o=Math.floor(t/60);return o>0?`${o}h ${t%60}m`:t>0?`${t}m ${e%60}s`:`${e}s`}function xs(n){return new Date(n).toLocaleString()}function Ts(n){const e=document.createElement("dialog");e.id="workout-recovery-modal",e.className="modal",e.setAttribute("aria-labelledby","recovery-modal-title");const t=n.power.length+n.heartrate.length+n.cadence.length,o=n.lastUpdated-n.startTime;return e.innerHTML=`
        <div class="modal-content">
            <h2 id="recovery-modal-title">🔄 Recover Workout?</h2>
            <p>An interrupted workout was found from your last session.</p>
            
            <div class="recovery-summary">
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Started</span>
                    <span class="recovery-stat-value">${xs(n.startTime)}</span>
                </div>
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Duration</span>
                    <span class="recovery-stat-value">${Es(o)}</span>
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
    `,e}function Ss(){if(document.getElementById("recovery-modal-styles"))return;const n=document.createElement("style");n.id="recovery-modal-styles",n.textContent=`
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
    `,document.head.appendChild(n)}async function ks(n){Ss();const e=Ts(n);return document.body.appendChild(e),new Promise(t=>{const o=e.querySelector("#recovery-restore-btn"),s=e.querySelector("#recovery-discard-btn"),r=()=>{e.close(),e.remove()};o.addEventListener("click",()=>{r(),t("restore")}),s.addEventListener("click",()=>{r(),t("discard")}),e.addEventListener("cancel",i=>{i.preventDefault()}),e.showModal()})}async function Cs(n,e){try{if(!await Lo())return!1;const t=await Xe();return t?await ks(t)==="restore"?(n.restore({heartrate:t.heartrate,power:t.power,cadence:t.cadence,laps:t.laps},t.startTime),e.startTime=t.startTime,e.running=!1,console.log(`Restored workout with ${t.power.length} power readings`),!0):(await Qe(),console.log("User discarded recovered workout"),!1):!1}catch(t){return console.error("Error during workout recovery:",t),!1}}const{measurementsState:M,connectionsState:Ie,timeState:O}=Ao();Zo({measurementsState:M,connectionsState:Ie});const Is=new Go(M,O);yt(O);const Be=uo({connectionsState:Ie,measurementsState:M});Co({connectionsState:Ie,measurementsState:M});Zn({measurementsState:M,timeState:O,zoneState:Be});Wn(M,Be);Un();qn({measurementsState:M,timeState:O,zoneState:Be});Qo(Is,O);Xo();rs();$o();zn();Ro();Fo();gt();const Ve=document.getElementById("toggleDarkMode");Ve&&hs(Ve);On({measurementsState:M,timeState:O});ws();Cs(M,O).then(n=>{n&&(console.log("Workout recovered from previous session"),document.dispatchEvent(new CustomEvent("workout-recovered")))});console.log("Bike Power Tracker initialized");
//# sourceMappingURL=index-CStn_ACt.js.map
