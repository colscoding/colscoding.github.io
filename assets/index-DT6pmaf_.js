(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();class Xt extends HTMLElement{shadow;_initialized=!1;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._initialized||(this.render(),this.setupEventListeners(),this._initialized=!0),this.onConnected()}disconnectedCallback(){this.onDisconnected()}attributeChangedCallback(e,i,r){i!==r&&this._initialized&&this.onAttributeChanged(e,i,r)}getBaseStyles(){return`
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
        `}setupEventListeners(){}onConnected(){}onDisconnected(){}onAttributeChanged(e,i,r){}emit(e,i){this.dispatchEvent(new CustomEvent(e,{detail:i,bubbles:!0,composed:!0}))}query(e){return this.shadow.querySelector(e)}queryAll(e){return this.shadow.querySelectorAll(e)}}const Vr=`
  /* Import design tokens */
  :host {
    /* Zone colors */
    --zone-1-color: var(--zone-1-color, #808080);
    --zone-2-color: var(--zone-2-color, #2196f3);
    --zone-3-color: var(--zone-3-color, #4caf50);
    --zone-4-color: var(--zone-4-color, #ffeb3b);
    --zone-5-color: var(--zone-5-color, #ff9800);
    --zone-6-color: var(--zone-6-color, #f44336);
    --zone-7-color: var(--zone-7-color, #9c27b0);

    /* Semantic colors */
    --bg-primary: var(--bg-primary, #fafafa);
    --bg-secondary: var(--bg-secondary, #f5f5f5);
    --text-primary: var(--text-primary, #212121);
    --text-secondary: var(--text-secondary, #616161);

    /* Spacing */
    --space-2: var(--space-2, 0.5rem);
    --space-3: var(--space-3, 0.75rem);
    --space-4: var(--space-4, 1rem);

    /* Typography */
    --font-family-sans: var(--font-family-sans, sans-serif);
    --font-size-metric-value: var(--font-size-metric-value, 2rem);
    --font-size-metric-label: var(--font-size-metric-label, 0.875rem);
  }
`;class pd extends Xt{static get observedAttributes(){return["label","value","unit","icon","zone","zone-name","connected","show-avg"]}getStyles(){return`
            ${Vr}

            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: var(--space-2);
                transition: background-color var(--transition-normal), border-color var(--transition-normal);
                border-radius: var(--radius-md);
                min-width: 100px;
                background-color: var(--zone-bg, var(--bg-secondary));
                color: var(--text-primary);
            }
            
            /* Zone bindings */
            :host([zone="1"]) { --zone-color: var(--zone-1-color); --zone-bg: var(--zone-1-color-bg); }
            :host([zone="2"]) { --zone-color: var(--zone-2-color); --zone-bg: var(--zone-2-color-bg); }
            :host([zone="3"]) { --zone-color: var(--zone-3-color); --zone-bg: var(--zone-3-color-bg); }
            :host([zone="4"]) { --zone-color: var(--zone-4-color); --zone-bg: var(--zone-4-color-bg); }
            :host([zone="5"]) { --zone-color: var(--zone-5-color); --zone-bg: var(--zone-5-color-bg); }
            :host([zone="6"]) { --zone-color: var(--zone-6-color); --zone-bg: var(--zone-6-color-bg); }
            :host([zone="7"]) { --zone-color: var(--zone-7-color); --zone-bg: var(--zone-7-color-bg); }

            :host([zone]) {
                border-left: 4px solid var(--zone-color, transparent);
            }
            
            .label {
                font-size: var(--font-size-metric-label);
                color: var(--text-secondary);
                margin-bottom: var(--space-1);
                display: flex;
                align-items: center;
                gap: var(--space-1);
            }
            
            .icon {
                font-size: 1.1em;
            }
            
            .value-container {
                display: flex;
                align-items: baseline;
                gap: var(--space-1);
            }
            
            .value {
                font-size: var(--font-size-metric-value);
                font-weight: var(--font-weight-bold);
                color: var(--zone-color, var(--text-primary));
                line-height: 1;
                transition: color var(--transition-normal);
            }
            
            .value.disconnected {
                color: var(--text-tertiary);
            }
            
            .unit {
                font-size: var(--font-size-metric-unit);
                color: var(--text-secondary);
            }
            
            .avg-indicator {
                font-size: var(--font-size-xs);
                color: var(--text-tertiary);
                vertical-align: super;
            }
            
            .zone-badge {
                font-size: var(--font-size-sm);
                padding: 2px 8px;
                border-radius: 12px;
                margin-top: var(--space-1);
                background-color: var(--zone-bg, transparent);
                color: var(--zone-color, var(--text-secondary));
                font-weight: var(--font-weight-medium);
                opacity: 0;
                transform: translateY(-4px);
                transition: opacity var(--transition-fast), transform var(--transition-fast);
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
        `}getTemplate(){const e=this.getAttribute("label")||"",i=this.getAttribute("value")||"--",r=this.getAttribute("unit")||"",s=this.getAttribute("icon")||"",c=this.getAttribute("zone-name")||"",d=this.hasAttribute("show-avg"),u=this.getAttribute("connected")!=="false";return`
            <div class="label">
                ${s?`<span class="icon" aria-hidden="true">${s}</span>`:""}
                <span>${e}</span>
            </div>
            <div class="value-container">
                <span class="value ${u?"":"disconnected"}" 
                      aria-live="polite" 
                      aria-label="${e}: ${i} ${r}">
                    ${i}${d?'<span class="avg-indicator">(3s)</span>':""}
                </span>
                ${r?`<span class="unit">${r}</span>`:""}
            </div>
            <div class="zone-badge" aria-live="polite">
                ${c?`Zone: ${c}`:""}
            </div>
        `}onAttributeChanged(e,i,r){this.render()}setValue(e){this.setAttribute("value",String(e))}setZone(e,i){e!==null?(this.setAttribute("zone",String(e)),i&&this.setAttribute("zone-name",i)):(this.removeAttribute("zone"),this.removeAttribute("zone-name"))}setConnected(e){this.setAttribute("connected",String(e))}}customElements.define("bpt-metric-display",pd);const Ht=[{name:"Recovery",min:0,max:.55},{name:"Endurance",min:.55,max:.75},{name:"Tempo",min:.75,max:.9},{name:"Threshold",min:.9,max:1.05},{name:"VO2 Max",min:1.05,max:1.2},{name:"Anaerobic",min:1.2,max:1.5},{name:"Neuromuscular",min:1.5,max:99.9}];class fd extends Xt{animationFrame=null;currentDisplayValue=0;static get observedAttributes(){return["value","ftp","max","show-zones","size"]}getStyles(){return`
            ${Vr}

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
        `}getTemplate(){const e=parseInt(this.getAttribute("size")||"200",10);this.style.setProperty("--gauge-size",`${e}px`);const i=parseInt(this.getAttribute("value")||"0",10),r=parseInt(this.getAttribute("ftp")||"200",10),s=parseInt(this.getAttribute("max")||"500",10),c=this.getAttribute("show-zones")!=="false",d=80,u=2*Math.PI*d,h=u*.75,p=r>0?i/r:0,_=this.getZone(p),f=_?Ht.indexOf(_):-1,v=f>=0?f+1:0;let y="var(--color-primary-500)";v>0&&(y=`var(--zone-${v}-color)`);const b=Math.min(i/s,1),S=h*(1-b);return this.style.setProperty("--gauge-color",y),`
            <div class="gauge-container">
                <svg class="gauge-svg" viewBox="0 0 200 200">
                    <!-- Background arc -->
                    <circle 
                        class="gauge-background"
                        cx="100" cy="100" r="${d}"
                        stroke-dasharray="${h} ${u}"
                    />
                    
                    ${c?this.renderZoneArcs(d,h,u,p):""}
                    
                    <!-- Value arc -->
                    <circle 
                        class="gauge-value-arc ${p>1.2?"high-power":""}"
                        cx="100" cy="100" r="${d}"
                        stroke-dasharray="${h} ${u}"
                        stroke-dashoffset="${S}"
                    />
                </svg>
                
                <div class="gauge-center">
                    <div class="gauge-value">${i}</div>
                    <div class="gauge-unit">watts</div>
                    ${_?`<div class="gauge-zone-label">${_.name}</div>`:""}
                    ${r>0?`<div class="gauge-ftp">FTP: ${r}W</div>`:""}
                </div>
            </div>
        `}renderZoneArcs(e,i,r,s){const c=parseInt(this.getAttribute("ftp")||"200",10),d=parseInt(this.getAttribute("max")||"500",10);return c<=0?"":Ht.map((u,h)=>{const p=u.min*c/d,_=Math.min(u.max*c/d,1),f=(_-p)*i,v=i*(1-_);return`
                <circle 
                    class="gauge-zone ${s>=u.min&&s<u.max?"active":""}"
                    cx="100" cy="100" r="${e}"
                    stroke-dasharray="${f} ${r}"
                    stroke-dashoffset="${v}"
                    data-zone="${h+1}"
                />
            `}).join("")}getZone(e){for(const i of Ht)if(e>=i.min&&e<i.max)return i;return e>=Ht[Ht.length-1].max?Ht[Ht.length-1]:null}onAttributeChanged(){this.render()}onDisconnected(){this.animationFrame&&cancelAnimationFrame(this.animationFrame)}animateToValue(e,i=300){const r=this.currentDisplayValue,s=performance.now(),c=d=>{const u=d-s,h=Math.min(u/i,1),p=1-Math.pow(1-h,3),_=Math.round(r+(e-r)*p);this.currentDisplayValue=_,this.setAttribute("value",String(_)),h<1&&(this.animationFrame=requestAnimationFrame(c))};this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(c)}setValue(e,i=!1){i?this.animateToValue(e):(this.currentDisplayValue=e,this.setAttribute("value",String(e)))}setFTP(e){this.setAttribute("ftp",String(e))}}customElements.define("bpt-power-gauge",fd);class gd extends Xt{static get observedAttributes(){return["zone","zone-name","percent","type","compact"]}getStyles(){return`
            ${Vr}

            :host {
                display: flex;
                flex-direction: column;
                gap: 4px;
                padding: var(--space-2);
                border-radius: var(--radius-md);
                background: var(--zone-bg, var(--bg-secondary));
                transition: background-color var(--transition-normal);
                min-width: 80px;
            }

            :host([compact]) {
                padding: 4px 8px;
                min-width: 60px;
            }

            /* Zone bindings */
            :host([zone="1"]) { --zone-color: var(--zone-1-color); --zone-bg: var(--zone-1-color-bg); }
            :host([zone="2"]) { --zone-color: var(--zone-2-color); --zone-bg: var(--zone-2-color-bg); }
            :host([zone="3"]) { --zone-color: var(--zone-3-color); --zone-bg: var(--zone-3-color-bg); }
            :host([zone="4"]) { --zone-color: var(--zone-4-color); --zone-bg: var(--zone-4-color-bg); }
            :host([zone="5"]) { --zone-color: var(--zone-5-color); --zone-bg: var(--zone-5-color-bg); }
            :host([zone="6"]) { --zone-color: var(--zone-6-color); --zone-bg: var(--zone-6-color-bg); }
            :host([zone="7"]) { --zone-color: var(--zone-7-color); --zone-bg: var(--zone-7-color-bg); }

            .zone-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;
            }

            .zone-number {
                font-size: var(--font-size-xs);
                font-weight: var(--font-weight-bold);
                color: var(--text-primary);
                background: var(--zone-color, #d0d7de);
                padding: 2px 8px;
                border-radius: 10px;
                white-space: nowrap;
                /* Optimize contrast for zone number badge if needed, for now using text-primary on zone-color might be tricky without contrast calc.
                   Let's assume zone colors are light enough or we'd need a specific text color for badges. 
                   Actually, looking at previous code, it used a specific fill color and text color. 
                   Let's use our background colors which are transparent, so maybe we want solid colors for badges?
                   The previous code used 'fill' which was solid color for the badge background, and valid text color.
                   Let's stick to using the zone color for text and background for bg, or maybe reverse for pill.
                */
                background: var(--zone-color);
                color: white; /* Most zone colors work well with white text except maybe yellow */
            }
            
            /* Specific overrides for light colors if needed - zone 4 is yellow */
            :host([zone="4"]) .zone-number {
                color: black;
            }

            :host([compact]) .zone-number {
                font-size: 10px;
                padding: 1px 6px;
            }

            .zone-name {
                font-size: 11px;
                color: var(--text-secondary);
                font-weight: var(--font-weight-medium);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            :host([compact]) .zone-name {
                display: none;
            }

            .gauge-container {
                height: 8px;
                background: var(--bg-tertiary);
                border-radius: 4px;
                overflow: hidden;
                position: relative;
            }

            :host([compact]) .gauge-container {
                height: 6px;
            }

            .gauge-fill {
                height: 100%;
                background: var(--zone-color, var(--interactive-default));
                border-radius: 4px;
                transition: width var(--transition-normal), background-color var(--transition-normal);
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
        `}getTemplate(){const e=this.getAttribute("zone")||"",i=this.getAttribute("zone-name")||"",r=parseFloat(this.getAttribute("percent")||"0");return`
            <div class="zone-header">
                <span class="zone-number" aria-label="Zone ${e}">Z${e}</span>
                <span class="zone-name">${i}</span>
            </div>
            <div class="gauge-container" role="progressbar" aria-valuenow="${r}" aria-valuemin="0" aria-valuemax="100" aria-label="${i} zone progress">
                <div class="gauge-fill" style="width: ${Math.max(4,r)}%"></div>
                <div class="gauge-markers">
                    <span class="gauge-marker"></span>
                    <span class="gauge-marker"></span>
                    <span class="gauge-marker"></span>
                </div>
            </div>
        `}onAttributeChanged(e,i,r){e==="percent"&&this.updateGaugeFill(parseFloat(r||"0")),(e==="zone"||e==="zone-name")&&this.render()}updateGaugeFill(e){const i=this.shadow.querySelector(".gauge-fill"),r=this.shadow.querySelector(".gauge-container");i&&(i.style.width=`${Math.max(4,e)}%`),r&&r.setAttribute("aria-valuenow",String(e))}setZone(e,i,r){this.setAttribute("zone",String(e)),this.setAttribute("zone-name",i),this.setAttribute("percent",String(Math.round(r)))}clear(){this.removeAttribute("zone"),this.removeAttribute("zone-name"),this.setAttribute("percent","0")}}customElements.define("bpt-zone-gauge",gd);const gn={power:{color:"#f97316",gradientStart:"rgba(249, 115, 22, 0.4)",gradientEnd:"rgba(249, 115, 22, 0.05)",label:"Power",unit:"W",defaultMax:400},heartrate:{color:"#ef4444",gradientStart:"rgba(239, 68, 68, 0.4)",gradientEnd:"rgba(239, 68, 68, 0.05)",label:"Heart Rate",unit:"bpm",defaultMax:200}};class vd extends Xt{_data=[];_animationId=null;_lastRenderTime=0;_isVisible=!0;_duration=60;_maxValue;_type;_svgPath=null;_svgArea=null;_currentValueEl=null;_avgValueEl=null;static get observedAttributes(){return["type","duration","max-value","hidden"]}constructor(){super(),this._type="power",this._maxValue=gn.power.defaultMax}getStyles(){return`
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
        `}getTemplate(){const e=gn[this._type]||gn.power;return`
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
        `}onConnected(){this._svgPath=this.shadow.getElementById("chartLine"),this._svgArea=this.shadow.getElementById("chartArea"),this._currentValueEl=this.shadow.getElementById("currentValue"),this._avgValueEl=this.shadow.getElementById("avgValue");const e=gn[this._type]||gn.power;this.style.setProperty("--chart-color",e.color),this.startAnimation(),document.addEventListener("visibilitychange",this.handleVisibilityChange)}onDisconnected(){this.stopAnimation(),document.removeEventListener("visibilitychange",this.handleVisibilityChange)}onAttributeChanged(e,i,r){switch(e){case"type":this._type=r||"power",this._maxValue=gn[this._type]?.defaultMax||400,this.render(),this.onConnected();break;case"duration":this._duration=parseInt(r||"60",10),this.render();break;case"max-value":this._maxValue=parseInt(r||"400",10),this.render();break;case"hidden":this._isVisible=r===null,this._isVisible?this.startAnimation():this.stopAnimation();break}}handleVisibilityChange=()=>{document.hidden?this.stopAnimation():this._isVisible&&this.startAnimation()};addDataPoint(e,i=Date.now()){this._data.push({timestamp:i,value:e});const r=i-(this._duration+5)*1e3;for(;this._data.length>0&&this._data[0].timestamp<r;)this._data.shift();e>this._maxValue*.9&&(this._maxValue=Math.ceil(e*1.2/50)*50)}clear(){this._data=[],this.renderChart()}startAnimation(){if(this._animationId!==null)return;const e=i=>{i-this._lastRenderTime>=33&&(this.renderChart(),this._lastRenderTime=i),this._animationId=requestAnimationFrame(e)};this._animationId=requestAnimationFrame(e)}stopAnimation(){this._animationId!==null&&(cancelAnimationFrame(this._animationId),this._animationId=null)}renderChart(){if(!this._svgPath||!this._svgArea)return;const i=Date.now()-this._duration*1e3,r=this._data.filter(p=>p.timestamp>=i),s=this.shadow.getElementById("noDataMessage");if(s&&(s.style.display=r.length===0?"block":"none"),r.length===0){this._svgPath.setAttribute("d",""),this._svgArea.setAttribute("d","M0,80 L300,80");return}const c=300,d=80,u=[],h=[];if(r.forEach(p=>{const _=(p.timestamp-i)/(this._duration*1e3)*c,f=d-Math.min(p.value,this._maxValue)/this._maxValue*d;u.push(`${_.toFixed(1)},${f.toFixed(1)}`),h.push(`${_.toFixed(1)},${f.toFixed(1)}`)}),u.length>0){const p="M"+u.join(" L");this._svgPath.setAttribute("d",p);const _=(r[0].timestamp-i)/(this._duration*1e3)*c,f=(r[r.length-1].timestamp-i)/(this._duration*1e3)*c,v=`M${_.toFixed(1)},${d} L`+h.join(" L")+` L${f.toFixed(1)},${d} Z`;this._svgArea.setAttribute("d",v)}if(this._currentValueEl&&r.length>0){const p=r[r.length-1].value;this._currentValueEl.textContent=Math.round(p).toString()}if(this._avgValueEl&&r.length>0){const p=r.reduce((_,f)=>_+f.value,0)/r.length;this._avgValueEl.textContent=Math.round(p).toString()}}getData(){return[...this._data]}}customElements.define("bpt-live-chart",vd);class yd extends Xt{intervalId=null;startTimestamp=0;pausedElapsed=0;static get observedAttributes(){return["elapsed","state","show-milliseconds"]}getStyles(){return`
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
        `}getTemplate(){const e=parseInt(this.getAttribute("elapsed")||"0",10),i=this.hasAttribute("show-milliseconds"),r=this.formatTime(e,i);return`
            <time class="timer" datetime="PT${e}S" aria-live="off">
                ${r}
            </time>
        `}formatTime(e,i=!1){const r=Math.floor(e/3600),s=Math.floor(e%3600/60),c=Math.floor(e%60),d=h=>h.toString().padStart(2,"0");let u=`${d(r)}:${d(s)}:${d(c)}`;if(i){const h=Math.floor(e%1*100);u+=`<span class="milliseconds">.${d(h)}</span>`}return u}onAttributeChanged(e){e==="state"&&this.handleStateChange(),this.render()}handleStateChange(){const e=this.getAttribute("state");e==="recording"&&!this.intervalId?this.startTicking():e!=="recording"&&this.intervalId&&this.stopTicking()}startTicking(){this.startTimestamp=Date.now()-this.pausedElapsed*1e3,this.intervalId=window.setInterval(()=>{const e=(Date.now()-this.startTimestamp)/1e3;this.setAttribute("elapsed",String(e))},100)}stopTicking(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null),this.pausedElapsed=parseFloat(this.getAttribute("elapsed")||"0")}onDisconnected(){this.stopTicking()}start(){this.setAttribute("state","recording"),this.emit("timer-start")}pause(){this.setAttribute("state","paused"),this.emit("timer-pause")}resume(){this.setAttribute("state","recording"),this.emit("timer-resume")}stop(){this.setAttribute("state","idle"),this.pausedElapsed=0,this.emit("timer-stop",{elapsed:parseFloat(this.getAttribute("elapsed")||"0")})}reset(){this.pausedElapsed=0,this.startTimestamp=Date.now(),this.setAttribute("elapsed","0"),this.emit("timer-reset")}getElapsed(){return parseFloat(this.getAttribute("elapsed")||"0")}getState(){return this.getAttribute("state")||"idle"}}customElements.define("bpt-workout-timer",yd);const ia={info:{bg:"#1d4ed8",icon:"ℹ️"},success:{bg:"#15803d",icon:"✅"},error:{bg:"#b91c1c",icon:"❌"},warning:{bg:"#a16207",icon:"⚠️"}};class Vt extends Xt{timeoutId=null;static get observedAttributes(){return["message","type","duration","dismissible"]}getStyles(){return`
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

            :host(.stacked) {
                position: relative;
                top: auto;
                left: auto;
                transform: translateX(100%); /* Start from right */
                margin-bottom: 10px;
                pointer-events: auto; /* Container handles layout */
                opacity: 0;
            }
            
            :host(.visible) {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
                pointer-events: auto;
            }

            :host(.stacked.visible) {
                transform: translateX(0);
                opacity: 1;
            }
            
            :host(.hiding) {
                transform: translateX(-50%) translateY(-20px);
                opacity: 0;
            }

            :host(.stacked.hiding) {
                transform: translateX(100%);
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
        `}getTemplate(){const e=this.getAttribute("message")||"",i=this.getAttribute("type")||"info",r=this.getAttribute("dismissible")!=="false",s=ia[i]||ia.info;return this.style.setProperty("--toast-bg",s.bg),`
            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <span class="icon" aria-hidden="true">${s.icon}</span>
                <span class="message">${e}</span>
                ${r?`
                    <button class="dismiss-btn" aria-label="Dismiss notification">&times;</button>
                `:""}
            </div>
        `}setupEventListeners(){const e=this.query(".dismiss-btn");e&&e.addEventListener("click",()=>this.dismiss())}onConnected(){requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.classList.add("visible")})});const e=parseInt(this.getAttribute("duration")||"3000",10);e>0&&(this.timeoutId=window.setTimeout(()=>this.dismiss(),e))}onDisconnected(){this.timeoutId&&clearTimeout(this.timeoutId)}onAttributeChanged(e,i,r){this.render(),this.setupEventListeners()}dismiss(){this.timeoutId&&clearTimeout(this.timeoutId),this.classList.remove("visible"),this.classList.add("hiding"),setTimeout(()=>{this.remove()},300)}static show(e,i="info",r={}){const s=document.createElement("bpt-toast");return s.setAttribute("message",e),s.setAttribute("type",i),r.duration!==void 0&&s.setAttribute("duration",String(r.duration)),r.dismissible!==void 0&&s.setAttribute("dismissible",String(r.dismissible)),document.body.appendChild(s),s}static info(e,i){return Vt.show(e,"info",i)}static success(e,i){return Vt.show(e,"success",i)}static error(e,i){return Vt.show(e,"error",i)}static warning(e,i){return Vt.show(e,"warning",i)}}customElements.define("bpt-toast",Vt);class _d extends Xt{previousActiveElement=null;focusTrapHandler=null;static get observedAttributes(){return["title","icon","open","close-on-overlay"]}getStyles(){return`
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
        `}getTemplate(){const e=this.getAttribute("title")||"",i=this.getAttribute("icon")||"";return`
            <div class="overlay" part="overlay"></div>
            <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div class="header">
                    <h2 class="title" id="modal-title">
                        ${i?`<span class="icon" aria-hidden="true">${i}</span>`:""}
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
        `}setupEventListeners(){this.query(".close-btn")?.addEventListener("click",()=>this.close()),this.query(".overlay")?.addEventListener("click",()=>{this.getAttribute("close-on-overlay")!=="false"&&this.close()}),this.addEventListener("keydown",r=>{r.key==="Escape"&&this.close()}),this.addEventListener("click",r=>{const c=r.target.dataset?.action;c&&(this.emit("modal-action",{action:c}),(c==="cancel"||c==="confirm")&&this.close())})}onConnected(){this.hasAttribute("open")&&this.onOpen()}onAttributeChanged(e,i,r){e==="open"&&(r!==null?this.onOpen():this.onClose())}onOpen(){this.previousActiveElement=document.activeElement,this.setupFocusTrap(),requestAnimationFrame(()=>{this.shadow.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')?.focus()}),this.emit("modal-open")}onClose(){this.removeFocusTrap(),this.previousActiveElement?.focus(),this.emit("modal-close")}setupFocusTrap(){this.focusTrapHandler=e=>{if(e.key!=="Tab")return;const i=this.shadow.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=i[0],s=i[i.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),s?.focus()):!e.shiftKey&&document.activeElement===s&&(e.preventDefault(),r?.focus())},this.addEventListener("keydown",this.focusTrapHandler)}removeFocusTrap(){this.focusTrapHandler&&(this.removeEventListener("keydown",this.focusTrapHandler),this.focusTrapHandler=null)}open(){this.setAttribute("open","")}close(){this.removeAttribute("open")}toggle(){this.hasAttribute("open")?this.close():this.open()}static confirm(e){return new Promise(i=>{const r=document.createElement("bpt-modal");r.setAttribute("title",e.title),e.icon&&r.setAttribute("icon",e.icon);const s=document.createElement("div");typeof e.message=="string"?s.innerHTML=`<p>${e.message}</p>`:s.appendChild(e.message),r.appendChild(s);const c=document.createElement("div");c.setAttribute("slot","footer");const d=document.createElement("button");d.className="btn btn-secondary",d.textContent=e.cancelText||"Cancel",d.dataset.action="cancel";const u=document.createElement("button");u.className=`btn btn-${e.variant||"primary"}`,u.textContent=e.confirmText||"Confirm",u.dataset.action="confirm",c.appendChild(d),c.appendChild(u),r.appendChild(c),r.addEventListener("modal-action",(h=>{i(h.detail.action==="confirm"),r.remove()})),r.addEventListener("modal-close",()=>{i(!1),r.remove()}),document.body.appendChild(r),r.open()})}static alert(e,i,r){return new Promise(s=>{const c=document.createElement("bpt-modal");c.setAttribute("title",e),r&&c.setAttribute("icon",r);const d=document.createElement("p");d.textContent=i,c.appendChild(d);const u=document.createElement("div");u.setAttribute("slot","footer");const h=document.createElement("button");h.className="btn btn-primary",h.textContent="OK",h.dataset.action="confirm",u.appendChild(h),c.appendChild(u),c.addEventListener("modal-close",()=>{s(),c.remove()}),document.body.appendChild(c),c.open()})}}customElements.define("bpt-modal",_d);const Bn=n=>n.unitSystem==="imperial",ui=[{zone:1,name:"Recovery",minPercent:0,maxPercent:55,color:"#9ca3af"},{zone:2,name:"Endurance",minPercent:55,maxPercent:75,color:"#22c55e"},{zone:3,name:"Tempo",minPercent:75,maxPercent:90,color:"#eab308"},{zone:4,name:"Threshold",minPercent:90,maxPercent:105,color:"#f97316"},{zone:5,name:"VO2max",minPercent:105,maxPercent:120,color:"#ef4444"},{zone:6,name:"Anaerobic",minPercent:120,maxPercent:150,color:"#a855f7"},{zone:7,name:"Neuromuscular",minPercent:150,maxPercent:999,color:"#ec4899"}],En=[{zone:1,name:"Recovery",minPercent:50,maxPercent:60,color:"#9ca3af"},{zone:2,name:"Aerobic",minPercent:60,maxPercent:70,color:"#22c55e"},{zone:3,name:"Tempo",minPercent:70,maxPercent:80,color:"#eab308"},{zone:4,name:"Threshold",minPercent:80,maxPercent:90,color:"#f97316"},{zone:5,name:"VO2max",minPercent:90,maxPercent:100,color:"#ef4444"}];function wd(){return`slot-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function Ga(){return`screen-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function bd(n,e="📊"){return{id:Ga(),name:n,icon:e,layout:"auto",slots:[]}}function xd(n,e="medium",i=1){return{id:wd(),fieldId:n,size:e,position:i}}function Ya(n,e,i="medium"){const r=n.slots.length+1;return{...n,slots:[...n.slots,xd(e,i,r)]}}function Ka(n,e){const r=n.slots.filter(s=>s.id!==e).map((s,c)=>({...s,position:c+1}));return{...n,slots:r}}function Ja(n,e,i){return{...n,slots:n.slots.map(r=>r.id===e?{...r,...i}:r)}}function Sd(n,e){const i=new Map(n.slots.map(s=>[s.id,s])),r=e.map((s,c)=>{const d=i.get(s);return d?{...d,position:c+1}:null}).filter(s=>s!==null);return{...n,slots:r}}const go=new Map,Xa=[];function Ed(n){if(go.has(n.id)){console.warn(`Data field '${n.id}' is already registered. Skipping duplicate.`);return}if(!n.id||!n.name||!n.category||!n.formatter)throw new Error(`Invalid data field definition: missing required properties for '${n.id}'`);go.set(n.id,n),Xa.push(n.id)}function gt(n){return go.get(n)}function Pn(){return Xa.map(n=>go.get(n))}function Qa(n){return Pn().filter(e=>e.category===n)}function Mr(){const n=new Map;for(const e of Pn()){const i=n.get(e.category)||[];i.push(e),n.set(e.category,i)}return n}function ec(n){const e=n.toLowerCase().trim();return e?Pn().filter(i=>i.name.toLowerCase().includes(e)||i.shortName.toLowerCase().includes(e)||i.description.toLowerCase().includes(e)||i.id.toLowerCase().includes(e)):Pn()}function yt(n,e,i=Date.now()){if(n.length===0)return null;const r=i-e,s=n.filter(d=>d.timestamp>=r);return s.length===0?null:s.reduce((d,u)=>d+u.value,0)/s.length}function Ye(n){return n.length===0?null:n.reduce((i,r)=>i+r.value,0)/n.length}function ko(n){return n.length===0?null:Math.max(...n.map(e=>e.value))}function rt(n,e=5e3){if(n.length===0)return null;const i=n[n.length-1];return Date.now()-i.timestamp<=e?i.value:null}function To(n,e,i){if(n===null||e===null||e<=0)return null;const r=n/e*100;for(const c of i)if(r>=c.minPercent&&r<c.maxPercent)return c.zone;const s=i[i.length-1];return s&&r>=s.minPercent?s.zone:null}function tc(n,e,i){const r=To(n,e,i);if(r===null)return null;const s=i.find(c=>c.zone===r);return s?{zone:r,zoneName:s.name,bg:kd(s.color,.15),text:Td(s.color,20),border:s.color}:null}function nc(n,e){return n===null||e===null||e<=0?null:n/e*100}function kd(n,e){const i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);if(!i)return n;const r=parseInt(i[1],16),s=parseInt(i[2],16),c=parseInt(i[3],16);return`rgba(${r}, ${s}, ${c}, ${e})`}function Td(n,e){const i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);if(!i)return n;const r=1-e/100,s=Math.round(parseInt(i[1],16)*r),c=Math.round(parseInt(i[2],16)*r),d=Math.round(parseInt(i[3],16)*r);return`#${s.toString(16).padStart(2,"0")}${c.toString(16).padStart(2,"0")}${d.toString(16).padStart(2,"0")}`}function Lo(n,e=!1){const i=Math.floor(n/1e3),r=Math.floor(i/3600),s=Math.floor(i%3600/60),c=i%60;return r>0||e?`${r}:${s.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`:`${s}:${c.toString().padStart(2,"0")}`}function ic(n,e=!1){if(n===null||n<=0)return"--:--";const r=(e?1609.344:1e3)/n,s=Math.floor(r/60),c=Math.floor(r%60);return`${s}:${c.toString().padStart(2,"0")}`}let po=0;function M(n,e="medium"){return po++,{id:`default-slot-${po}`,fieldId:n,size:e,position:po}}function Te(){po=0}function Ld(){return Te(),{id:"cycling-main",name:"Main",icon:"🚴",layout:"auto",slots:[M("power-current","large"),M("heartrate-current","medium"),M("cadence-current","medium"),M("speed-current","medium"),M("distance-total","medium"),M("time-elapsed","medium")]}}function Cd(){return Te(),{id:"cycling-power",name:"Power",icon:"⚡",layout:"auto",slots:[M("power-current","large"),M("power-3s","medium"),M("power-avg","medium"),M("power-normalized","medium"),M("power-max","medium"),M("power-zone","medium")]}}function Pd(){return Te(),{id:"cycling-hr",name:"Heart Rate",icon:"❤️",layout:"auto",slots:[M("heartrate-current","large"),M("heartrate-avg","medium"),M("heartrate-max","medium"),M("heartrate-zone","medium"),M("heartrate-percent-max","medium"),M("calories-burned","medium")]}}function Md(){return Te(),{id:"cycling-climb",name:"Climbing",icon:"⛰️",layout:"auto",slots:[M("grade-current","large"),M("elevation-current","medium"),M("elevation-gain","medium"),M("elevation-loss","medium"),M("vertical-speed","medium"),M("power-current","medium")]}}function Id(){return Te(),{id:"cycling-laps",name:"Laps",icon:"🏁",layout:"auto",slots:[M("time-lap-number","medium"),M("time-lap","large"),M("distance-lap","medium"),M("power-lap-avg","medium"),M("hr-lap-avg","medium"),M("speed-lap-avg","medium")]}}function Ad(){return Te(),{id:"cycling-simple",name:"Simple",icon:"📊",layout:"grid-2",slots:[M("speed-current","large"),M("distance-total","large"),M("time-elapsed","large"),M("elevation-gain","large")]}}function Dd(){return Te(),{id:"indoor-main",name:"Main",icon:"🏠",layout:"auto",slots:[M("power-current","large"),M("heartrate-current","medium"),M("cadence-current","medium"),M("time-elapsed","medium"),M("power-avg","medium"),M("kilojoules","medium")]}}function zd(){return Te(),{id:"indoor-power",name:"Power",icon:"⚡",layout:"auto",slots:[M("power-current","large"),M("power-3s","medium"),M("power-10s","medium"),M("power-30s","medium"),M("power-normalized","medium"),M("intensity-factor","medium")]}}function Bd(){return Te(),{id:"indoor-training",name:"Training",icon:"📈",layout:"auto",slots:[M("tss","large"),M("intensity-factor","medium"),M("power-normalized","medium"),M("kilojoules","medium"),M("time-elapsed","medium"),M("power-avg","medium")]}}function $d(){return Te(),{id:"indoor-zones",name:"Zones",icon:"🎯",layout:"auto",slots:[M("power-zone","large"),M("heartrate-zone","large"),M("power-percent-ftp","medium"),M("heartrate-percent-max","medium"),M("cadence-zone","medium"),M("time-elapsed","medium")]}}function Od(){return Te(),{id:"running-main",name:"Main",icon:"🏃",layout:"auto",slots:[M("pace-current","large"),M("heartrate-current","medium"),M("cadence-current","medium"),M("distance-total","medium"),M("time-elapsed","medium"),M("pace-avg","medium")]}}function Nd(){return Te(),{id:"running-pace",name:"Pace",icon:"⏱️",layout:"auto",slots:[M("pace-current","large"),M("pace-avg","medium"),M("speed-current","medium"),M("speed-avg","medium"),M("distance-total","medium"),M("time-elapsed","medium")]}}const Co={id:"default-cycling",name:"Outdoor Cycling",activityType:"cycling",icon:"🚴",screens:[Ld(),Cd(),Pd(),Md(),Id()],activeScreenIndex:0},Ur={id:"default-indoor",name:"Indoor Training",activityType:"indoor",icon:"🏠",screens:[Dd(),zd(),Bd(),$d()],activeScreenIndex:0},Fd={id:"default-running",name:"Running",activityType:"running",icon:"🏃",screens:[Od(),Nd()],activeScreenIndex:0},Rd={id:"default-simple",name:"Simple",activityType:"cycling",icon:"📊",screens:[Ad()],activeScreenIndex:0},Qi=[Co,Ur,Fd,Rd],Ir={profiles:[JSON.parse(JSON.stringify(Co)),JSON.parse(JSON.stringify(Ur))],activeProfileId:"default-cycling",unitSystem:"metric",fieldPreferences:{},version:1};function Hd(){return JSON.parse(JSON.stringify(Ur))}function Zd(){return JSON.parse(JSON.stringify(Ir))}function qd(n){Te();const e=[];return n.power!==!1&&e.push(M("power-current","large")),n.heartrate!==!1&&e.push(M("heartrate-current","medium")),n.cadence!==!1&&e.push(M("cadence-current","medium")),n.speed!==!1&&e.push(M("speed-current","medium")),n.distance!==!1&&e.push(M("distance-total","medium")),n.altitude!==!1&&e.push(M("elevation-current","medium")),e.length===0?Zd():{profiles:[{id:"migrated-profile",name:"Migrated",activityType:"cycling",icon:"🚴",screens:[{id:"migrated-main",name:"Main",icon:"📊",layout:"auto",slots:e.map((r,s)=>({...r,position:s+1}))}],activeScreenIndex:0},Hd()],activeProfileId:"migrated-profile",unitSystem:"metric",fieldPreferences:{},version:1}}Te(),M("power-3s","large"),M("power-avg","medium"),M("power-normalized","medium"),M("watts-per-kg","medium"),M("cadence-current","medium"),M("heartrate-current","medium");Te(),M("heartrate-zone","large"),M("time-elapsed","medium"),M("distance-total","medium"),M("speed-avg","medium"),M("elevation-gain","medium"),M("calories-burned","medium");Te(),M("power-current","large"),M("time-lap","large"),M("power-lap-avg","medium"),M("heartrate-current","medium"),M("time-lap-number","medium"),M("time-elapsed","medium");const Wd={realtime:100,second:1e3,periodic:5e3,"on-change":0,manual:0};class Vd{constructor(e,i,r,s={}){this.measurements=e,this.workoutState=i,this.settings=r,this.config={enableRealtime:s.enableRealtime??!0,updateIntervals:{...Wd,...s.updateIntervals}},this.categorizeFieldsByFrequency()}calculatedValues=new Map;updateTimers=new Map;listeners=new Set;isRunning=!1;config;fieldsByFrequency=new Map;start(){if(!this.isRunning){this.isRunning=!0,this.calculateAllFields();for(const[e,i]of this.fieldsByFrequency){if(i.length===0)continue;const r=this.config.updateIntervals[e];if(r===void 0||r<=0||e==="realtime"&&!this.config.enableRealtime)continue;const s=window.setInterval(()=>{this.calculateFieldsForFrequency(e)},r);this.updateTimers.set(e,s)}}}stop(){if(this.isRunning){this.isRunning=!1;for(const e of this.updateTimers.values())clearInterval(e);this.updateTimers.clear()}}pause(){this.stop()}resume(){this.isRunning||this.start()}isActive(){return this.isRunning}updateMeasurements(e){this.measurements=e}updateWorkoutState(e){this.workoutState=e}updateSettings(e){this.settings=e,this.isRunning&&this.calculateAllFields()}onUpdate(e){return this.listeners.add(e),()=>this.listeners.delete(e)}removeAllListeners(){this.listeners.clear()}getValue(e){return this.calculatedValues.get(e)??null}getAllValues(){return new Map(this.calculatedValues)}getValues(e){const i=new Map;for(const r of e)i.set(r,this.calculatedValues.get(r)??null);return i}calculateField(e){const i=gt(e);if(!i)return null;const r=this.executeCalculation(i);return this.updateValue(e,r),r}calculateAllFields(){const e=Pn(),i=[];for(const r of e)if(r.calculator){const s=this.executeCalculation(r);i.push({fieldId:r.id,value:s,timestamp:Date.now()})}for(const r of i)this.updateValue(r.fieldId,r.value)}calculateFieldsForFrequency(e){const i=this.fieldsByFrequency.get(e);if(i){for(const r of i)if(r.calculator){const s=this.executeCalculation(r);this.updateValue(r.id,s)}}}categorizeFieldsByFrequency(){this.fieldsByFrequency.clear();const e=["realtime","second","periodic","on-change","manual"];for(const r of e)this.fieldsByFrequency.set(r,[]);const i=Pn();for(const r of i)if(r.calculator){const s=this.fieldsByFrequency.get(r.updateFrequency);s&&s.push(r)}}executeCalculation(e){if(!e.calculator)return null;try{return e.calculator(this.measurements,this.workoutState,this.settings)}catch(i){return console.warn(`Calculation error for field ${e.id}:`,i),null}}updateValue(e,i){this.calculatedValues.get(e)!==i&&(this.calculatedValues.set(e,i),this.notifyListeners(e,i))}notifyListeners(e,i){for(const r of this.listeners)try{r(e,i)}catch(s){console.warn("Error in field update listener:",s)}}}function Ud(n,e,i,r){return new Vd(n,e,i,r)}const oa={power:"power-current",heartrate:"heartrate-current",cadence:"cadence-current",speed:"speed-current",distance:"distance-total",altitude:"elevation-current"};class jr{measurementsState;connectionsState;timeState;calculationManager;activeProfile;carouselComponent=null;updateIntervalId=null;listeners=new Map;static UPDATE_INTERVAL_MS=100;constructor(e){this.measurementsState=e.measurementsState,this.connectionsState=e.connectionsState,this.timeState=e.timeState,this.activeProfile=e.initialProfile??Co,this.calculationManager=Ud(this.measurementsState,this.createWorkoutState(),this.createUserSettings()),this.calculationManager.onUpdate((i,r)=>{this.notifyFieldUpdate(i,r),this.updateCarouselField(i,r)})}start(){this.calculationManager.start(),this.startUpdateLoop(),console.log("[DataFieldsManager] Started")}stop(){this.calculationManager.stop(),this.stopUpdateLoop(),console.log("[DataFieldsManager] Stopped")}setProfile(e){this.activeProfile=e,this.carouselComponent&&this.carouselComponent.setProfile(e)}getProfile(){return this.activeProfile}attachToCarousel(e){this.carouselComponent=e,e.setProfile(this.activeProfile),this.updateSensorConnections()}detachFromCarousel(){this.carouselComponent=null}getFieldValue(e){if(!gt(e))return null;for(const[r,s]of Object.entries(oa))if(s===e)return this.getSensorValue(r);return this.calculationManager.calculateField(e)}onFieldUpdate(e,i){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(i),()=>{const r=this.listeners.get(e);r&&(r.delete(i),r.size===0&&this.listeners.delete(e))}}getActiveFields(){const e=new Set;for(const i of this.activeProfile.screens)for(const r of i.slots)e.add(r.fieldId);return Array.from(e)}startUpdateLoop(){this.updateIntervalId===null&&(this.updateIntervalId=window.setInterval(()=>{this.updateSensorFields(),this.updateSensorConnections()},jr.UPDATE_INTERVAL_MS))}stopUpdateLoop(){this.updateIntervalId!==null&&(window.clearInterval(this.updateIntervalId),this.updateIntervalId=null)}updateSensorFields(){for(const[e,i]of Object.entries(oa)){const r=this.getSensorValue(e);this.notifyFieldUpdate(i,r),this.updateCarouselField(i,r)}if(this.timeState){const e=this.getElapsedTime();this.notifyFieldUpdate("time-elapsed",e),this.updateCarouselField("time-elapsed",e)}}updateSensorConnections(){if(!this.carouselComponent)return;const e=this.connectionsState,i=e.power?.isConnected??!1;this.carouselComponent.setSensorConnected("power",i);const r=e.heartrate?.isConnected??!1;this.carouselComponent.setSensorConnected("heartrate",r);const s=e.cadence?.isConnected??!1;this.carouselComponent.setSensorConnected("cadence",s);const c=e.gps?.isConnected??!1;this.carouselComponent.setSensorConnected("speed",c)}getSensorValue(e){const i=this.measurementsState;switch(e){case"power":return this.getLatestValue(i.power);case"heartrate":return this.getLatestValue(i.heartrate);case"cadence":return this.getLatestValue(i.cadence);case"speed":return this.getLatestValue(i.speed);case"distance":return this.getLatestValue(i.distance);case"altitude":return this.getLatestValue(i.altitude);default:return null}}getLatestValue(e){return!e||e.length===0?null:e[e.length-1].value}notifyFieldUpdate(e,i){const r=this.listeners.get(e);if(r)for(const s of r)s(i)}updateCarouselField(e,i){this.carouselComponent&&this.carouselComponent.updateFieldValue(e,i)}createWorkoutState(){const e=this.measurementsState.laps||[],i=e.length,s=(i>0?e[i-1].timestamp:null)??this.timeState?.startTime??null;return{isActive:this.timeState?.running??!1,isPaused:!1,startTime:this.timeState?.startTime??null,elapsedTime:this.getElapsedTime(),movingTime:this.getElapsedTime(),pausedTime:0,currentLap:i+1,lapStartTime:s,lapElapsedTime:s?Date.now()-s:0,laps:e.map((c,d)=>({lapNumber:c.number,startTime:d===0?this.timeState?.startTime??c.timestamp:e[d-1].timestamp,endTime:c.timestamp,duration:c.elapsedMs??0,distance:0,avgPower:null,avgHeartrate:null,avgCadence:null,avgSpeed:null,elevationGain:0}))}}getElapsedTime(){return!this.timeState?.running||!this.timeState.startTime?0:Date.now()-this.timeState.startTime}createUserSettings(){return{unitSystem:"metric",ftp:200,maxHr:190,weight:70,restingHr:60,showCalories:!0,powerZones:ui,hrZones:En}}}function jd(n){return new jr(n)}const Gr="bpt-data-fields",Gd="bpt-settings",oc=1;function gi(){try{const n=localStorage.getItem(Gr);if(n){const i=JSON.parse(n),r=Jd(i);if(Xd(r))return r;console.warn("[DataFields] Invalid stored settings, using defaults")}const e=localStorage.getItem(Gd);if(e)try{const i=JSON.parse(e),r=qd(i);return kn(r),r}catch{console.warn("[DataFields] Failed to migrate legacy settings")}return{...Ir}}catch(n){return console.error("[DataFields] Error loading settings:",n),{...Ir}}}function vi(){const n=gi();return n.profiles.find(i=>i.id===n.activeProfileId)??n.profiles[0]??Co}function kn(n){try{const e={version:oc,settings:n};return localStorage.setItem(Gr,JSON.stringify(e)),!0}catch(e){return console.error("[DataFields] Error saving settings:",e),!1}}function Yd(n){const e=gi(),i=e.profiles.findIndex(r=>r.id===n.id);return i>=0?e.profiles[i]=n:e.profiles.push(n),kn(e)}function Kd(n,e){const i=gi(),r=i.profiles.find(s=>s.id===n);return r?(r.activeScreenIndex=Math.max(0,Math.min(e,r.screens.length-1)),kn(i)):!1}function Jd(n){let e=n.settings,i=n.version;for(;i<oc;)i===0&&(e.fieldPreferences=e.fieldPreferences??{}),i++;return e}function Xd(n){if(!n||typeof n!="object")return!1;const e=n;return!Array.isArray(e.profiles)||e.profiles.length===0||typeof e.activeProfileId!="string"||!["metric","imperial"].includes(e.unitSystem)?!1:e.profiles.every(Qd)}function Qd(n){if(!n||typeof n!="object")return!1;const e=n;return!(typeof e.id!="string"||e.id.length===0||typeof e.name!="string"||e.name.length===0||!Array.isArray(e.screens))}const eu=new Set;typeof window<"u"&&window.addEventListener("storage",n=>{if(n.key===Gr&&n.newValue)try{const e=JSON.parse(n.newValue);for(const i of eu)i(e.settings)}catch{}});const Si=(n,e)=>tc(n,e.ftp,e.powerZones||ui),tu={id:"power-current",name:"Power",shortName:"PWR",category:"power",description:"Current power output from power meter",unit:"W",sourceType:"sensor",updateFrequency:"realtime",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚡",requiresSensor:["power"],decimals:0,minValue:0,maxValue:2500,formatter:n=>n!==null?Math.round(n).toString():"--",colorizer:Si},nu={id:"power-3s",name:"Power (3s)",shortName:"3s PWR",category:"power",description:"3-second rolling average power for smoother display",unit:"W",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚡",requiresSensor:["power"],decimals:0,minValue:0,maxValue:2500,calculator:n=>yt(n.power,3e3),formatter:n=>n!==null?Math.round(n).toString():"--",colorizer:Si},iu={id:"power-10s",name:"Power (10s)",shortName:"10s PWR",category:"power",description:"10-second rolling average power",unit:"W",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚡",requiresSensor:["power"],decimals:0,calculator:n=>yt(n.power,1e4),formatter:n=>n!==null?Math.round(n).toString():"--",colorizer:Si},ou={id:"power-30s",name:"Power (30s)",shortName:"30s PWR",category:"power",description:"30-second rolling average power",unit:"W",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚡",requiresSensor:["power"],decimals:0,calculator:n=>yt(n.power,3e4),formatter:n=>n!==null?Math.round(n).toString():"--",colorizer:Si},ru={id:"power-avg",name:"Avg Power",shortName:"Avg PWR",category:"power",description:"Average power for entire workout",unit:"W",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚡",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:0,calculator:n=>Ye(n.power),formatter:n=>n!==null?Math.round(n).toString():"--"},su={id:"power-lap-avg",name:"Lap Avg Power",shortName:"Lap PWR",category:"power",description:"Average power for current lap",unit:"W",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚡",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:0,calculator:(n,e)=>{if(!e.lapStartTime)return null;const i=n.power.filter(r=>r.timestamp>=e.lapStartTime);return Ye(i)},formatter:n=>n!==null?Math.round(n).toString():"--"},au={id:"power-max",name:"Max Power",shortName:"Max PWR",category:"power",description:"Maximum power during workout",unit:"W",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚡",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:0,calculator:n=>ko(n.power),formatter:n=>n!==null?Math.round(n).toString():"--"},cu={id:"power-zone",name:"Power Zone",shortName:"P Zone",category:"power",description:"Current power training zone (1-7)",unit:null,sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🎯",requiresSensor:["power"],decimals:0,calculator:(n,e,i)=>{const r=rt(n.power);return To(r,i.ftp,i.powerZones||ui)},formatter:(n,e)=>n===null?"--":(e.powerZones||ui).find(s=>s.zone===n)?`Z${n}`:`Z${n}`,colorizer:(n,e)=>{if(n===null)return null;const r=(e.powerZones||ui).find(s=>s.zone===n);return r?{zone:n,zoneName:r.name,bg:r.color+"26",text:r.color,border:r.color}:null}},lu={id:"power-percent-ftp",name:"Power % FTP",shortName:"% FTP",category:"power",description:"Current power as percentage of FTP",unit:"%",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📊",requiresSensor:["power"],decimals:0,calculator:(n,e,i)=>{const r=rt(n.power);return nc(r,i.ftp)},formatter:n=>n!==null?Math.round(n).toString():"--",colorizer:Si},Yr={id:"power-normalized",name:"Normalized Power",shortName:"NP",category:"power",description:"Normalized Power - accounts for variability in effort",unit:"W",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚡",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:0,calculator:n=>{const e=n.power;if(e.length<30)return null;const i=[],r=3e4;for(let d=0;d<e.length;d++){const u=e[d].timestamp,h=u-r,p=e.filter(_=>_.timestamp>=h&&_.timestamp<=u);if(p.length>0){const _=p.reduce((f,v)=>f+v.value,0)/p.length;i.push(_)}}if(i.length===0)return null;const s=i.map(d=>Math.pow(d,4)),c=s.reduce((d,u)=>d+u,0)/s.length;return Math.pow(c,.25)},formatter:n=>n!==null?Math.round(n).toString():"--"},du={id:"power-if",name:"Intensity Factor",shortName:"IF",category:"power",description:"Intensity Factor - NP divided by FTP",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📈",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:2,calculator:(n,e,i)=>{if(!i.ftp||i.ftp<=0)return null;const r=Yr.calculator;if(!r)return null;const s=r(n,e,i);return s===null?null:s/i.ftp},formatter:n=>n!==null?n.toFixed(2):"--"},uu={id:"power-tss",name:"TSS",shortName:"TSS",category:"power",description:"Training Stress Score - workout load metric",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📊",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:0,calculator:(n,e,i)=>{if(!i.ftp||i.ftp<=0)return null;const r=Yr.calculator;if(!r)return null;const s=r(n,e,i);if(s===null)return null;const c=e.elapsedTime/1e3,d=s/i.ftp;return c*s*d/(i.ftp*3600)*100},formatter:n=>n!==null?Math.round(n).toString():"--"},hu={id:"power-kj",name:"Kilojoules",shortName:"kJ",category:"power",description:"Total work done in kilojoules",unit:"kJ",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔥",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:0,calculator:n=>{const e=n.power;if(e.length<2)return null;let i=0;for(let r=1;r<e.length;r++){const s=e[r-1],c=e[r],d=(c.timestamp-s.timestamp)/1e3,u=(s.value+c.value)/2;i+=u*d}return i/1e3},formatter:n=>n!==null?Math.round(n).toString():"--"},mu={id:"power-wkg",name:"W/kg",shortName:"W/kg",category:"power",description:"Power to weight ratio",unit:"W/kg",sourceType:"calculated",updateFrequency:"realtime",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚖️",requiresSensor:["power"],decimals:2,calculator:(n,e,i)=>{const r=rt(n.power);return r===null||!i.weight||i.weight<=0?null:r/i.weight},formatter:n=>n!==null?n.toFixed(2):"--"},pu=[tu,nu,iu,ou,ru,su,au,cu,lu,Yr,du,uu,hu,mu],Po=(n,e)=>tc(n,e.maxHr,e.hrZones||En),fu={id:"heartrate-current",name:"Heart Rate",shortName:"HR",category:"heartrate",description:"Current heart rate from heart rate monitor",unit:"bpm",sourceType:"sensor",updateFrequency:"realtime",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"❤️",requiresSensor:["heartrate"],decimals:0,minValue:30,maxValue:220,formatter:n=>n!==null?Math.round(n).toString():"--",colorizer:Po},gu={id:"hr-5s",name:"HR (5s)",shortName:"5s HR",category:"heartrate",description:"5-second rolling average heart rate",unit:"bpm",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"❤️",requiresSensor:["heartrate"],decimals:0,calculator:n=>yt(n.heartrate,5e3),formatter:n=>n!==null?Math.round(n).toString():"--",colorizer:Po},vu={id:"hr-30s",name:"HR (30s)",shortName:"30s HR",category:"heartrate",description:"30-second rolling average heart rate",unit:"bpm",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"❤️",requiresSensor:["heartrate"],decimals:0,calculator:n=>yt(n.heartrate,3e4),formatter:n=>n!==null?Math.round(n).toString():"--",colorizer:Po},yu={id:"hr-avg",name:"Avg HR",shortName:"Avg HR",category:"heartrate",description:"Average heart rate for entire workout",unit:"bpm",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"❤️",requiresSensor:["heartrate"],requiresWorkoutActive:!0,decimals:0,calculator:n=>Ye(n.heartrate),formatter:n=>n!==null?Math.round(n).toString():"--"},_u={id:"hr-lap-avg",name:"Lap Avg HR",shortName:"Lap HR",category:"heartrate",description:"Average heart rate for current lap",unit:"bpm",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"❤️",requiresSensor:["heartrate"],requiresWorkoutActive:!0,decimals:0,calculator:(n,e)=>{if(!e.lapStartTime)return null;const i=n.heartrate.filter(r=>r.timestamp>=e.lapStartTime);return Ye(i)},formatter:n=>n!==null?Math.round(n).toString():"--"},wu={id:"hr-max",name:"Max HR",shortName:"Max HR",category:"heartrate",description:"Maximum heart rate during workout",unit:"bpm",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"❤️",requiresSensor:["heartrate"],requiresWorkoutActive:!0,decimals:0,calculator:n=>ko(n.heartrate),formatter:n=>n!==null?Math.round(n).toString():"--"},bu={id:"hr-min",name:"Min HR",shortName:"Min HR",category:"heartrate",description:"Minimum heart rate during workout",unit:"bpm",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"❤️",requiresSensor:["heartrate"],requiresWorkoutActive:!0,decimals:0,calculator:n=>{const e=n.heartrate;return e.length===0?null:Math.min(...e.map(i=>i.value))},formatter:n=>n!==null?Math.round(n).toString():"--"},xu={id:"hr-zone",name:"HR Zone",shortName:"HR Zone",category:"heartrate",description:"Current heart rate training zone (1-5)",unit:null,sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🎯",requiresSensor:["heartrate"],decimals:0,calculator:(n,e,i)=>{const r=rt(n.heartrate);return To(r,i.maxHr,i.hrZones||En)},formatter:(n,e)=>n===null?"--":(e.hrZones||En).find(s=>s.zone===n)?`Z${n}`:`Z${n}`,colorizer:(n,e)=>{if(n===null)return null;const r=(e.hrZones||En).find(s=>s.zone===n);return r?{zone:n,zoneName:r.name,bg:r.color+"26",text:r.color,border:r.color}:null}},Su={id:"hr-percent-max",name:"HR % Max",shortName:"% Max",category:"heartrate",description:"Current heart rate as percentage of max HR",unit:"%",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📊",requiresSensor:["heartrate"],decimals:0,calculator:(n,e,i)=>{const r=rt(n.heartrate);return nc(r,i.maxHr)},formatter:n=>n!==null?Math.round(n).toString():"--",colorizer:Po},Eu={id:"hr-percent-reserve",name:"HR % Reserve",shortName:"% HRR",category:"heartrate",description:"Current heart rate as percentage of heart rate reserve",unit:"%",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📊",requiresSensor:["heartrate"],decimals:0,calculator:(n,e,i)=>{const r=rt(n.heartrate);if(r===null||!i.maxHr||!i.restingHr)return null;const s=i.maxHr-i.restingHr;return s<=0?null:(r-i.restingHr)/s*100},formatter:n=>n!==null?Math.round(n).toString():"--"},ku={id:"hr-calories",name:"Calories",shortName:"Cal",category:"heartrate",description:"Estimated calories burned based on heart rate",unit:"kcal",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔥",requiresSensor:["heartrate"],requiresWorkoutActive:!0,decimals:0,calculator:(n,e,i)=>{const r=n.heartrate;if(r.length<2||!i.weight||!i.maxHr)return null;let s=0;for(let c=1;c<r.length;c++){const d=r[c-1],u=r[c],h=(u.timestamp-d.timestamp)/6e4,_=(.6309*((d.value+u.value)/2)+.1988*i.weight)/4.184;s+=_*h}return s},formatter:n=>n!==null?Math.round(n).toString():"--"},Tu={id:"hr-time-in-zone",name:"Time in Zone",shortName:"T-Zone",category:"heartrate",description:"Time spent in each heart rate zone",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"large",supportedSizes:["large"],icon:"⏱️",requiresSensor:["heartrate"],requiresWorkoutActive:!0,decimals:0,calculator:(n,e,i)=>{const r=n.heartrate;if(r.length<2||!i.maxHr)return null;const s=i.hrZones||En,c=new Array(s.length).fill(0);for(let u=1;u<r.length;u++){const h=r[u-1],p=r[u],_=p.timestamp-h.timestamp,f=(h.value+p.value)/2,v=To(f,i.maxHr,s);v!==null&&v>0&&v<=s.length&&(c[v-1]+=_)}return c.indexOf(Math.max(...c))+1},formatter:n=>n!==null?`Z${n}`:"--"},Lu=[fu,gu,vu,yu,_u,wu,bu,xu,Su,Eu,ku,Tu],St={veryLow:{max:60},low:{max:75},optimal:{max:95},high:{max:110}},ge={veryLow:"#9CA3AF",low:"#3B82F6",optimal:"#10B981",high:"#F59E0B",veryHigh:"#EF4444"},Kr=n=>n===null?null:n<St.veryLow.max?{zone:1,zoneName:"Very Low",bg:ge.veryLow+"26",text:ge.veryLow,border:ge.veryLow}:n<St.low.max?{zone:2,zoneName:"Low",bg:ge.low+"26",text:ge.low,border:ge.low}:n<St.optimal.max?{zone:3,zoneName:"Optimal",bg:ge.optimal+"26",text:ge.optimal,border:ge.optimal}:n<St.high.max?{zone:4,zoneName:"High",bg:ge.high+"26",text:ge.high,border:ge.high}:{zone:5,zoneName:"Very High",bg:ge.veryHigh+"26",text:ge.veryHigh,border:ge.veryHigh},Cu={id:"cadence-current",name:"Cadence",shortName:"CAD",category:"cadence",description:"Current pedaling cadence from sensor",unit:"rpm",sourceType:"sensor",updateFrequency:"realtime",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔄",requiresSensor:["cadence"],decimals:0,minValue:0,maxValue:200,formatter:n=>n!==null?Math.round(n).toString():"--",colorizer:n=>Kr(n)},Pu={id:"cadence-5s",name:"Cadence (5s)",shortName:"5s CAD",category:"cadence",description:"5-second rolling average cadence",unit:"rpm",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔄",requiresSensor:["cadence"],decimals:0,calculator:n=>yt(n.cadence,5e3),formatter:n=>n!==null?Math.round(n).toString():"--",colorizer:n=>Kr(n)},Mu={id:"cadence-30s",name:"Cadence (30s)",shortName:"30s CAD",category:"cadence",description:"30-second rolling average cadence",unit:"rpm",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔄",requiresSensor:["cadence"],decimals:0,calculator:n=>yt(n.cadence,3e4),formatter:n=>n!==null?Math.round(n).toString():"--",colorizer:n=>Kr(n)},Iu={id:"cadence-avg",name:"Avg Cadence",shortName:"Avg CAD",category:"cadence",description:"Average cadence for entire workout (excluding zeros)",unit:"rpm",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔄",requiresSensor:["cadence"],requiresWorkoutActive:!0,decimals:0,calculator:n=>{const e=n.cadence.filter(i=>i.value>0);return Ye(e)},formatter:n=>n!==null?Math.round(n).toString():"--"},Au={id:"cadence-lap-avg",name:"Lap Avg Cadence",shortName:"Lap CAD",category:"cadence",description:"Average cadence for current lap (excluding zeros)",unit:"rpm",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔄",requiresSensor:["cadence"],requiresWorkoutActive:!0,decimals:0,calculator:(n,e)=>{if(!e.lapStartTime)return null;const i=n.cadence.filter(r=>r.timestamp>=e.lapStartTime&&r.value>0);return Ye(i)},formatter:n=>n!==null?Math.round(n).toString():"--"},Du={id:"cadence-max",name:"Max Cadence",shortName:"Max CAD",category:"cadence",description:"Maximum cadence during workout",unit:"rpm",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔄",requiresSensor:["cadence"],requiresWorkoutActive:!0,decimals:0,calculator:n=>ko(n.cadence),formatter:n=>n!==null?Math.round(n).toString():"--"},zu={id:"cadence-zone",name:"Cadence Zone",shortName:"CAD Zone",category:"cadence",description:"Current cadence zone (Very Low, Low, Optimal, High, Very High)",unit:null,sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🎯",requiresSensor:["cadence"],decimals:0,calculator:n=>{const e=rt(n.cadence);return e===null?null:e<St.veryLow.max?1:e<St.low.max?2:e<St.optimal.max?3:e<St.high.max?4:5},formatter:n=>n===null?"--":["V.Low","Low","Optimal","High","V.High"][n-1]||"--",colorizer:n=>{if(n===null)return null;const e=["Very Low","Low","Optimal","High","Very High"],i=[ge.veryLow,ge.low,ge.optimal,ge.high,ge.veryHigh];return{zone:n,zoneName:e[n-1],bg:i[n-1]+"26",text:i[n-1],border:i[n-1]}}},Bu={id:"cadence-balance",name:"Pedal Balance",shortName:"Balance",category:"cadence",description:"Left/Right pedal balance percentage",unit:"%",sourceType:"sensor",updateFrequency:"realtime",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚖️",requiresSensor:["power"],decimals:0,minValue:0,maxValue:100,formatter:n=>n===null?"--":`${Math.round(n)}/${Math.round(100-n)}`,colorizer:n=>{if(n===null)return null;const e=Math.abs(50-n);return e<3?{zone:1,zoneName:"Balanced",bg:"#10B98126",text:"#10B981",border:"#10B981"}:e<5?{zone:2,zoneName:"Slight Imbalance",bg:"#F59E0B26",text:"#F59E0B",border:"#F59E0B"}:{zone:3,zoneName:"Imbalanced",bg:"#EF444426",text:"#EF4444",border:"#EF4444"}}},$u={id:"cadence-pedaling-time",name:"Pedaling Time",shortName:"Pedal %",category:"cadence",description:"Percentage of time actively pedaling",unit:"%",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏱️",requiresSensor:["cadence"],requiresWorkoutActive:!0,decimals:0,calculator:n=>{const e=n.cadence;if(e.length<2)return null;let i=0,r=0;for(let s=1;s<e.length;s++){const c=e[s-1],d=e[s],u=d.timestamp-c.timestamp;r+=u,(c.value>0||d.value>0)&&(i+=u)}return r===0?null:i/r*100},formatter:n=>n!==null?Math.round(n).toString():"--"},Ou={id:"cadence-revolutions",name:"Total Revolutions",shortName:"Revs",category:"cadence",description:"Total crank revolutions during workout",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔢",requiresSensor:["cadence"],requiresWorkoutActive:!0,decimals:0,calculator:n=>{const e=n.cadence;if(e.length<2)return null;let i=0;for(let r=1;r<e.length;r++){const s=e[r-1],c=e[r],d=(c.timestamp-s.timestamp)/6e4,u=(s.value+c.value)/2;i+=u*d}return Math.round(i)},formatter:n=>n!==null?n.toLocaleString():"--"},Nu=[Cu,Pu,Mu,Iu,Au,Du,zu,Bu,$u,Ou],rc=n=>n*3.6,Fu=n=>n*2.23694,Qt=(n,e)=>n===null?null:Bn(e)?Fu(n):rc(n),sc=(n,e)=>{if(n===null||n<=0)return null;const i=rc(n);if(i<=0)return null;const r=60/i;return Bn(e)?r*1.60934:r},Ru={id:"speed-current",name:"Speed",shortName:"SPD",category:"speed",description:"Current speed from GPS",unit:"km/h",sourceType:"sensor",updateFrequency:"realtime",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🚴",requiresSensor:["gps"],decimals:1,minValue:0,maxValue:100,calculator:(n,e,i)=>{const r=rt(n.speed);return Qt(r,i)},formatter:n=>n===null?"--":`${n.toFixed(1)}`},Hu={id:"speed-5s",name:"Speed (5s)",shortName:"5s SPD",category:"speed",description:"5-second rolling average speed",unit:"km/h",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🚴",requiresSensor:["gps"],decimals:1,calculator:(n,e,i)=>{const r=yt(n.speed,5e3);return Qt(r,i)},formatter:n=>n!==null?n.toFixed(1):"--"},Zu={id:"speed-30s",name:"Speed (30s)",shortName:"30s SPD",category:"speed",description:"30-second rolling average speed",unit:"km/h",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🚴",requiresSensor:["gps"],decimals:1,calculator:(n,e,i)=>{const r=yt(n.speed,3e4);return Qt(r,i)},formatter:n=>n!==null?n.toFixed(1):"--"},qu={id:"speed-avg",name:"Avg Speed",shortName:"Avg SPD",category:"speed",description:"Average speed for entire workout (moving time)",unit:"km/h",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🚴",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:1,calculator:(n,e,i)=>{const r=n.speed.filter(c=>c.value>.5),s=Ye(r);return Qt(s,i)},formatter:n=>n!==null?n.toFixed(1):"--"},Wu={id:"speed-lap-avg",name:"Lap Avg Speed",shortName:"Lap SPD",category:"speed",description:"Average speed for current lap",unit:"km/h",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🚴",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:1,calculator:(n,e,i)=>{if(!e.lapStartTime)return null;const r=n.speed.filter(c=>c.timestamp>=e.lapStartTime&&c.value>.5),s=Ye(r);return Qt(s,i)},formatter:n=>n!==null?n.toFixed(1):"--"},Vu={id:"speed-max",name:"Max Speed",shortName:"Max SPD",category:"speed",description:"Maximum speed during workout",unit:"km/h",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🚴",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:1,calculator:(n,e,i)=>{const r=ko(n.speed);return Qt(r,i)},formatter:n=>n!==null?n.toFixed(1):"--"},Uu={id:"speed-pace",name:"Pace",shortName:"Pace",category:"speed",description:"Current pace (time per km or mile)",unit:"min/km",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏱️",requiresSensor:["gps"],decimals:0,calculator:(n,e,i)=>{const r=rt(n.speed);return sc(r,i)},formatter:n=>n===null||n>30?"--":ic(n)},ju={id:"speed-pace-avg",name:"Avg Pace",shortName:"Avg Pace",category:"speed",description:"Average pace for entire workout",unit:"min/km",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏱️",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(n,e,i)=>{const r=n.speed.filter(c=>c.value>.5),s=Ye(r);return sc(s,i)},formatter:n=>n===null||n>30?"--":ic(n)},Gu={id:"speed-moving-time",name:"Moving Time",shortName:"Moving",category:"speed",description:"Time spent moving (speed > 0.5 m/s)",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏱️",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:n=>{const e=n.speed;if(e.length<2)return null;let i=0;const r=.5;for(let s=1;s<e.length;s++){const c=e[s-1],d=e[s],u=d.timestamp-c.timestamp;(c.value+d.value)/2>r&&(i+=u)}return i},formatter:n=>{if(n===null)return"--";const e=Math.floor(n/1e3),i=Math.floor(e/3600),r=Math.floor(e%3600/60),s=e%60;return i>0?`${i}:${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`:`${r}:${s.toString().padStart(2,"0")}`}},Yu={id:"speed-stopped-time",name:"Stopped Time",shortName:"Stopped",category:"speed",description:"Time spent stopped (speed < 0.5 m/s)",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏸️",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:n=>{const e=n.speed;if(e.length<2)return null;let i=0;const r=.5;for(let s=1;s<e.length;s++){const c=e[s-1],d=e[s],u=d.timestamp-c.timestamp;(c.value+d.value)/2<=r&&(i+=u)}return i},formatter:n=>{if(n===null)return"--";const e=Math.floor(n/1e3),i=Math.floor(e/3600),r=Math.floor(e%3600/60),s=e%60;return i>0?`${i}:${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`:`${r}:${s.toString().padStart(2,"0")}`}},Ku={id:"speed-vertical",name:"Vertical Speed",shortName:"VAM",category:"speed",description:"Vertical climbing rate in meters per hour",unit:"m/h",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📈",requiresSensor:["gps"],decimals:0,calculator:n=>{const e=n.altitude;if(e.length<2)return null;const i=3e4,r=Date.now(),s=e.filter(p=>p.timestamp>=r-i);if(s.length<2)return null;const c=s[0],d=s[s.length-1],u=d.value-c.value,h=(d.timestamp-c.timestamp)/36e5;return h<=0?null:Math.max(0,u/h)},formatter:n=>n!==null?Math.round(n).toString():"--"},Ju={id:"speed-efficiency",name:"Efficiency Factor",shortName:"EF",category:"speed",description:"Speed per watt of power (efficiency indicator)",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📊",requiresSensor:["gps","power"],requiresWorkoutActive:!0,decimals:2,calculator:(n,e,i)=>{const r=n.speed.filter(h=>h.value>.5),s=n.power.filter(h=>h.value>0);if(r.length===0||s.length===0)return null;const c=Ye(r),d=Ye(s);if(!c||!d||d<=0)return null;const u=Qt(c,i);return u?u/d:null},formatter:n=>n!==null?n.toFixed(3):"--"},Xu=[Ru,Hu,Zu,qu,Wu,Vu,Uu,ju,Gu,Yu,Ku,Ju],ac=n=>n/1e3,cc=n=>n/1609.344,lc=(n,e)=>n===null?null:Bn(e)?cc(n):ac(n),Qu={id:"distance-total",name:"Distance",shortName:"Dist",category:"distance",description:"Total distance traveled",unit:"km",sourceType:"calculated",updateFrequency:"second",defaultSize:"large",supportedSizes:["small","medium","large"],icon:"📏",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:2,calculator:(n,e,i)=>{const r=n.gps;if(r.length<2)return 0;let s=0;for(let c=1;c<r.length;c++){const d=r[c-1],u=r[c],h=6371e3,p=d.lat*Math.PI/180,_=u.lat*Math.PI/180,f=(u.lat-d.lat)*Math.PI/180,v=(u.lon-d.lon)*Math.PI/180,y=Math.sin(f/2)*Math.sin(f/2)+Math.cos(p)*Math.cos(_)*Math.sin(v/2)*Math.sin(v/2),b=2*Math.atan2(Math.sqrt(y),Math.sqrt(1-y));s+=h*b}return lc(s,i)},formatter:n=>n===null?"--":n.toFixed(2)},eh={id:"distance-lap",name:"Lap Distance",shortName:"Lap Dist",category:"distance",description:"Distance for current lap",unit:"km",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📏",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:2,calculator:(n,e,i)=>{if(!e.lapStartTime)return 0;const r=n.gps.filter(c=>c.timestamp>=e.lapStartTime);if(r.length<2)return 0;let s=0;for(let c=1;c<r.length;c++){const d=r[c-1],u=r[c],h=6371e3,p=d.lat*Math.PI/180,_=u.lat*Math.PI/180,f=(u.lat-d.lat)*Math.PI/180,v=(u.lon-d.lon)*Math.PI/180,y=Math.sin(f/2)*Math.sin(f/2)+Math.cos(p)*Math.cos(_)*Math.sin(v/2)*Math.sin(v/2),b=2*Math.atan2(Math.sqrt(y),Math.sqrt(1-y));s+=h*b}return lc(s,i)},formatter:n=>n!==null?n.toFixed(2):"--"},th={id:"distance-to-marker",name:"To Next Marker",shortName:"To Marker",category:"distance",description:"Distance remaining to next km/mile marker",unit:"km",sourceType:"calculated",updateFrequency:"second",defaultSize:"small",supportedSizes:["small","medium"],icon:"🎯",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:2,calculator:(n,e,i)=>{const r=n.gps;if(r.length<2)return null;let s=0;for(let u=1;u<r.length;u++){const h=r[u-1],p=r[u],_=6371e3,f=h.lat*Math.PI/180,v=p.lat*Math.PI/180,y=(p.lat-h.lat)*Math.PI/180,b=(p.lon-h.lon)*Math.PI/180,S=Math.sin(y/2)*Math.sin(y/2)+Math.cos(f)*Math.cos(v)*Math.sin(b/2)*Math.sin(b/2),E=2*Math.atan2(Math.sqrt(S),Math.sqrt(1-S));s+=_*E}const c=Bn(i)?cc(s):ac(s);return Math.ceil(c)-c},formatter:n=>n===null?"--":n.toFixed(2)},nh=[Qu,eh,th],ih={id:"time-elapsed",name:"Elapsed Time",shortName:"Time",category:"time",description:"Total elapsed time since workout start",unit:null,sourceType:"calculated",updateFrequency:"second",defaultSize:"large",supportedSizes:["small","medium","large"],icon:"⏱️",requiresWorkoutActive:!0,decimals:0,calculator:(n,e)=>e.elapsedTime,formatter:n=>n!==null?Lo(n):"--"},oh={id:"time-lap",name:"Lap Time",shortName:"Lap",category:"time",description:"Elapsed time for current lap",unit:null,sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏱️",requiresWorkoutActive:!0,decimals:0,calculator:(n,e)=>e.lapStartTime?Date.now()-e.lapStartTime:0,formatter:n=>n!==null?Lo(n):"--"},rh={id:"time-last-lap",name:"Last Lap Time",shortName:"Last Lap",category:"time",description:"Duration of the previous lap",unit:null,sourceType:"calculated",updateFrequency:"on-change",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏱️",requiresWorkoutActive:!0,decimals:0,calculator:(n,e)=>{const i=e.laps||[];if(i.length===0)return null;const r=i[i.length-1];return r.endTime-r.startTime},formatter:n=>n!==null?Lo(n):"--"},sh={id:"time-clock",name:"Time of Day",shortName:"Clock",category:"time",description:"Current time",unit:null,sourceType:"system",updateFrequency:"second",defaultSize:"small",supportedSizes:["small","medium"],icon:"🕐",decimals:0,calculator:()=>Date.now(),formatter:n=>n===null?"--":new Date(n).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},ah={id:"time-started",name:"Start Time",shortName:"Start",category:"time",description:"Time when workout was started",unit:null,sourceType:"calculated",updateFrequency:"on-change",defaultSize:"small",supportedSizes:["small","medium"],icon:"🕐",requiresWorkoutActive:!0,decimals:0,calculator:(n,e)=>e.startTime,formatter:n=>n===null?"--":new Date(n).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},ch={id:"time-eta",name:"ETA",shortName:"ETA",category:"time",description:"Estimated time to complete target distance",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium"],icon:"🎯",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(n,e,i)=>{const r=i.targetDistance;if(!r||r<=0)return null;const s=n.gps;if(s.length<2)return null;let c=0;for(let f=1;f<s.length;f++){const v=s[f-1],y=s[f],b=6371e3,S=v.lat*Math.PI/180,E=y.lat*Math.PI/180,P=(y.lat-v.lat)*Math.PI/180,T=(y.lon-v.lon)*Math.PI/180,D=Math.sin(P/2)*Math.sin(P/2)+Math.cos(S)*Math.cos(E)*Math.sin(T/2)*Math.sin(T/2),z=2*Math.atan2(Math.sqrt(D),Math.sqrt(1-D));c+=b*z}const d=Bn(i)?c/1609.344:c/1e3;if(d<=0)return null;const u=r-d;if(u<=0)return 0;const h=e.elapsedTime/36e5;if(h<=0)return null;const p=d/h;return p<=0?null:u/p*36e5},formatter:n=>n===null?"--":n<=0?"Done!":Lo(n)},lh={id:"time-lap-number",name:"Lap",shortName:"Lap #",category:"time",description:"Current lap number",unit:null,sourceType:"calculated",updateFrequency:"on-change",defaultSize:"small",supportedSizes:["small","medium"],icon:"🔢",requiresWorkoutActive:!0,decimals:0,calculator:(n,e)=>e.currentLap||1,formatter:n=>n!==null?n.toString():"--"},dh={id:"time-sunset",name:"Sunset",shortName:"Sunset",category:"time",description:"Time until sunset",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"small",supportedSizes:["small","medium"],icon:"🌅",requiresSensor:["gps"],decimals:0,calculator:n=>{const e=n.gps;if(e.length===0)return null;const r=e[e.length-1].lat,s=new Date,c=Math.floor((s.getTime()-new Date(s.getFullYear(),0,0).getTime())/864e5),d=23.45*Math.sin(2*Math.PI/365*(c-81)),h=12+Math.acos(-Math.tan(r*Math.PI/180)*Math.tan(d*Math.PI/180))*180/Math.PI/15,p=new Date(s);return p.setHours(Math.floor(h),Math.round(h%1*60),0),p.getTime()-s.getTime()},formatter:n=>{if(n===null)return"--";if(n<=0)return"Past";const e=Math.floor(n/36e5),i=Math.floor(n%36e5/6e4);return e>0?`${e}h ${i}m`:`${i}m`}},uh=[ih,oh,rh,sh,ah,ch,lh,dh],hh=n=>n*3.28084,$n=(n,e)=>n===null?null:Bn(e)?hh(n):n,mh={id:"elevation-current",name:"Elevation",shortName:"Elev",category:"elevation",description:"Current elevation above sea level",unit:"m",sourceType:"sensor",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⛰️",requiresSensor:["gps"],decimals:0,calculator:(n,e,i)=>{const r=rt(n.altitude);return $n(r,i)},formatter:n=>n===null?"--":Math.round(n).toString()},ph={id:"elevation-gain",name:"Elevation Gain",shortName:"Gain",category:"elevation",description:"Total elevation gained during workout",unit:"m",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📈",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(n,e,i)=>{const r=n.altitude;if(r.length<2)return 0;let s=0;const c=2;for(let d=1;d<r.length;d++){const u=r[d-1].value,p=r[d].value-u;p>c&&(s+=p)}return $n(s,i)},formatter:n=>n!==null?Math.round(n).toString():"--"},fh={id:"elevation-loss",name:"Elevation Loss",shortName:"Loss",category:"elevation",description:"Total elevation lost during workout",unit:"m",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📉",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(n,e,i)=>{const r=n.altitude;if(r.length<2)return 0;let s=0;const c=2;for(let d=1;d<r.length;d++){const u=r[d-1].value,h=r[d].value,p=u-h;p>c&&(s+=p)}return $n(s,i)},formatter:n=>n!==null?Math.round(n).toString():"--"},gh={id:"elevation-lap-gain",name:"Lap Elevation Gain",shortName:"Lap Gain",category:"elevation",description:"Elevation gained during current lap",unit:"m",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium"],icon:"📈",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(n,e,i)=>{if(!e.lapStartTime)return 0;const r=n.altitude.filter(d=>d.timestamp>=e.lapStartTime);if(r.length<2)return 0;let s=0;const c=2;for(let d=1;d<r.length;d++){const u=r[d].value-r[d-1].value;u>c&&(s+=u)}return $n(s,i)},formatter:n=>n!==null?Math.round(n).toString():"--"},vh={id:"elevation-grade",name:"Grade",shortName:"Grade",category:"elevation",description:"Current road gradient (positive = uphill)",unit:"%",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📐",requiresSensor:["gps"],decimals:1,calculator:n=>{const e=n.gps,i=n.altitude;if(e.length<5||i.length<5)return null;const r=e.slice(-5),s=i.slice(-5);let c=0;for(let u=1;u<r.length;u++){const h=r[u-1],p=r[u],_=6371e3,f=h.lat*Math.PI/180,v=p.lat*Math.PI/180,y=(p.lat-h.lat)*Math.PI/180,b=(p.lon-h.lon)*Math.PI/180,S=Math.sin(y/2)*Math.sin(y/2)+Math.cos(f)*Math.cos(v)*Math.sin(b/2)*Math.sin(b/2),E=2*Math.atan2(Math.sqrt(S),Math.sqrt(1-S));c+=_*E}return c<10?null:(s[s.length-1].value-s[0].value)/c*100},formatter:n=>n===null?"--":`${n>=0?"+":""}${n.toFixed(1)}`,colorizer:n=>n===null?null:n<=-5?{zone:1,zoneName:"Steep Descent",bg:"#3B82F626",text:"#3B82F6",border:"#3B82F6"}:n<0?{zone:2,zoneName:"Descent",bg:"#60A5FA26",text:"#60A5FA",border:"#60A5FA"}:n<3?{zone:3,zoneName:"Flat",bg:"#10B98126",text:"#10B981",border:"#10B981"}:n<6?{zone:4,zoneName:"Moderate Climb",bg:"#F59E0B26",text:"#F59E0B",border:"#F59E0B"}:n<10?{zone:5,zoneName:"Steep Climb",bg:"#EF444426",text:"#EF4444",border:"#EF4444"}:{zone:6,zoneName:"Very Steep",bg:"#7C3AED26",text:"#7C3AED",border:"#7C3AED"}},yh={id:"elevation-grade-avg",name:"Avg Grade",shortName:"Avg Grade",category:"elevation",description:"Average gradient over entire workout",unit:"%",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"small",supportedSizes:["small","medium"],icon:"📐",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:1,calculator:n=>{const e=n.gps,i=n.altitude;if(e.length<2||i.length<2)return null;let r=0;for(let c=1;c<e.length;c++){const d=e[c-1],u=e[c],h=6371e3,p=d.lat*Math.PI/180,_=u.lat*Math.PI/180,f=(u.lat-d.lat)*Math.PI/180,v=(u.lon-d.lon)*Math.PI/180,y=Math.sin(f/2)*Math.sin(f/2)+Math.cos(p)*Math.cos(_)*Math.sin(v/2)*Math.sin(v/2),b=2*Math.atan2(Math.sqrt(y),Math.sqrt(1-y));r+=h*b}return r<100?null:(i[i.length-1].value-i[0].value)/r*100},formatter:n=>n===null?"--":`${n>=0?"+":""}${n.toFixed(1)}`},_h={id:"elevation-max",name:"Max Elevation",shortName:"Max Elev",category:"elevation",description:"Highest elevation reached during workout",unit:"m",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"small",supportedSizes:["small","medium"],icon:"⛰️",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(n,e,i)=>{const r=n.altitude;if(r.length===0)return null;const s=Math.max(...r.map(c=>c.value));return $n(s,i)},formatter:n=>n!==null?Math.round(n).toString():"--"},wh={id:"elevation-min",name:"Min Elevation",shortName:"Min Elev",category:"elevation",description:"Lowest elevation reached during workout",unit:"m",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"small",supportedSizes:["small","medium"],icon:"🏜️",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(n,e,i)=>{const r=n.altitude;if(r.length===0)return null;const s=Math.min(...r.map(c=>c.value));return $n(s,i)},formatter:n=>n!==null?Math.round(n).toString():"--"},bh=[mh,ph,fh,gh,vh,yh,_h,wh],xh=(n,e,i)=>i.showCalories?!n.energy||n.energy.length===0?0:n.energy[n.energy.length-1].value:null,Sh=(n,e,i)=>{if(!i.showCalories)return null;const r=n.power.length>0?n.power[n.power.length-1].value:0;if(r>0)return r*3.6;const s=n.heartrate.length>0?n.heartrate[n.heartrate.length-1].value:0;if(s>0){const c=i.weight||75,u=30*.2017,h=c*.1988,p=s*.6309,_=(u+h+p-55.0969)/4.184;return Math.max(0,_*60)}return 0},ra=n=>n===null?"--":Math.round(n).toString(),Eh=[{id:"calories_total",name:"Calories",shortName:"Cals",category:"energy",sourceType:"calculated",updateFrequency:"second",description:"Total energy expenditure in kcal",calculator:xh,formatter:ra,unit:"kcal",icon:"🔥",defaultSize:"medium",supportedSizes:["small","medium","large","wide","tall","full"]},{id:"calories_hour",name:"Calories/Hr",shortName:"Cal/h",category:"energy",sourceType:"calculated",updateFrequency:"realtime",description:"Current calorie burn rate",calculator:Sh,formatter:ra,unit:"kcal/h",icon:"🔥",defaultSize:"medium",supportedSizes:["small","medium","large","wide","tall"]}],kh=()=>{const n=[...pu,...Lu,...Nu,...Xu,...nh,...uh,...bh,...Eh];for(const e of n)Ed(e);console.log(`[DataFields] Registered ${n.length} data fields`)};kh();class Th extends HTMLElement{static get observedAttributes(){return["field-id","size","value","connected","highlight"]}fieldDefinition=null;currentValue=null;settings=null;shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){}attributeChangedCallback(e,i,r){if(i!==r)switch(e){case"field-id":this.fieldDefinition=r?gt(r)??null:null,this.render();break;case"size":this.updateSize(r);break;case"value":this.updateValue(r);break;case"connected":this.updateConnectionState(r==="true");break;case"highlight":this.updateHighlight(r==="true");break}}setSettings(e){this.settings=e,this.updateDisplay()}setValue(e){this.currentValue=e,this.updateDisplay()}getFieldId(){return this.getAttribute("field-id")}getValue(){return this.currentValue}getFieldDefinition(){return this.fieldDefinition}render(){const e=this.getAttribute("size")||this.fieldDefinition?.defaultSize||"medium",i=this.getAttribute("connected")!=="false";this.shadow.innerHTML=`
            <style>${this.getStyles()}</style>
            <div class="data-field data-field--${e} ${i?"":"data-field--disconnected"}"
                 data-category="${this.fieldDefinition?.category||"unknown"}">
                ${this.renderContent(e)}
            </div>
        `,this.updateDisplay()}renderContent(e){return this.fieldDefinition?`
            ${e!=="small"?`
                <div class="data-field__header">
                    ${e==="small"||e==="medium"?`<span class="data-field__icon">${this.fieldDefinition.icon}</span>`:""}
                    <span class="data-field__label">${this.fieldDefinition.shortName}</span>
                </div>
            `:""}
            <div class="data-field__body">
                <span class="data-field__value" data-value="--">--</span>
                ${this.fieldDefinition.unit?`
                    <span class="data-field__unit">${this.getDisplayUnit()}</span>
                `:""}
            </div>
            ${e==="small"?`
                <span class="data-field__mini-label">${this.fieldDefinition.shortName}</span>
            `:""}
        `:`
                <div class="data-field__error">
                    <span class="data-field__error-icon">⚠️</span>
                    <span class="data-field__error-text">Unknown field</span>
                </div>
            `}getDisplayUnit(){return this.fieldDefinition?this.settings&&this.fieldDefinition.unitImperial?this.settings.unitSystem==="imperial"?this.fieldDefinition.unitImperial:this.fieldDefinition.unit||"":this.fieldDefinition.unit||"":""}updateValue(e){e===null||e==="--"?this.currentValue=null:(this.currentValue=parseFloat(e),isNaN(this.currentValue)&&(this.currentValue=null)),this.updateDisplay()}updateDisplay(){const e=this.shadow.querySelector(".data-field__value");if(!e||!this.fieldDefinition)return;const i=this.fieldDefinition.formatter(this.currentValue,this.settings||this.getDefaultSettings());e.textContent=i,e.setAttribute("data-value",i),this.updateZoneColoring();const r=this.shadow.querySelector(".data-field__unit");r&&(r.textContent=this.getDisplayUnit())}updateZoneColoring(){const e=this.shadow.querySelector(".data-field");if(!(!e||!this.fieldDefinition)&&(e.classList.remove("data-field--zone-1","data-field--zone-2","data-field--zone-3","data-field--zone-4","data-field--zone-5","data-field--zone-6","data-field--zone-7"),this.fieldDefinition.colorizer&&this.currentValue!==null)){const i=this.fieldDefinition.colorizer(this.currentValue,this.settings||this.getDefaultSettings());i&&this.applyZoneColors(i)}}applyZoneColors(e){const i=this.shadow.querySelector(".data-field");i&&(i.style.setProperty("--field-bg",e.bg),i.style.setProperty("--field-text",e.text),i.style.setProperty("--field-border",e.border),i.classList.add("data-field--has-zone"))}updateSize(e){const i=this.shadow.querySelector(".data-field");if(!i)return;i.classList.remove("data-field--small","data-field--medium","data-field--large","data-field--wide","data-field--tall","data-field--full");const r=e||this.fieldDefinition?.defaultSize||"medium";i.classList.add(`data-field--${r}`),this.render()}updateConnectionState(e){const i=this.shadow.querySelector(".data-field");i&&i.classList.toggle("data-field--disconnected",!e)}updateHighlight(e){const i=this.shadow.querySelector(".data-field");i&&i.classList.toggle("data-field--highlight",e)}getDefaultSettings(){return{ftp:200,maxHr:185,weight:70,restingHr:60,unitSystem:"metric",showCalories:!0,powerZones:[],hrZones:[]}}getStyles(){return`
            :host {
                display: block;
                contain: content;
            }

            .data-field {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: var(--field-padding, 8px);
                border-radius: var(--field-radius, 8px);
                background: var(--field-bg, var(--surface-color, #1a1a2e));
                border-left: 4px solid var(--field-border, transparent);
                color: var(--field-text, var(--text-color, #fff));
                transition: all 0.2s ease;
                height: 100%;
                box-sizing: border-box;
                position: relative;
                overflow: hidden;
            }

            .data-field--has-zone {
                background: var(--field-bg);
                color: var(--field-text);
                border-left-color: var(--field-border);
            }

            .data-field--disconnected {
                opacity: 0.5;
            }

            .data-field--highlight {
                animation: pulse 1s ease-in-out infinite;
            }

            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.02); }
            }

            /* Header */
            .data-field__header {
                display: flex;
                align-items: center;
                gap: 4px;
                margin-bottom: 4px;
                opacity: 0.8;
            }

            .data-field__icon {
                font-size: 14px;
            }

            .data-field__label {
                font-size: 11px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            /* Body */
            .data-field__body {
                display: flex;
                align-items: baseline;
                gap: 4px;
            }

            .data-field__value {
                font-variant-numeric: tabular-nums;
                font-weight: 700;
                line-height: 1;
            }

            .data-field__unit {
                font-size: 12px;
                font-weight: 400;
                opacity: 0.7;
            }

            .data-field__mini-label {
                font-size: 9px;
                text-transform: uppercase;
                opacity: 0.6;
                margin-top: 2px;
            }

            /* Size variants */
            .data-field--small {
                min-width: 70px;
                min-height: 55px;
                padding: 6px;
            }

            .data-field--small .data-field__value {
                font-size: 24px;
            }

            .data-field--small .data-field__unit {
                font-size: 10px;
            }

            .data-field--medium {
                min-width: 100px;
                min-height: 80px;
            }

            .data-field--medium .data-field__value {
                font-size: 32px;
            }

            .data-field--large {
                min-width: 160px;
                min-height: 100px;
                padding: 12px;
            }

            .data-field--large .data-field__header {
                margin-bottom: 8px;
            }

            .data-field--large .data-field__icon {
                font-size: 18px;
            }

            .data-field--large .data-field__label {
                font-size: 13px;
            }

            .data-field--large .data-field__value {
                font-size: 48px;
            }

            .data-field--large .data-field__unit {
                font-size: 16px;
            }

            .data-field--wide {
                min-width: 200px;
                min-height: 80px;
                flex-direction: row;
                justify-content: space-between;
                padding: 12px 16px;
            }

            .data-field--wide .data-field__header {
                margin-bottom: 0;
            }

            .data-field--wide .data-field__value {
                font-size: 36px;
            }

            .data-field--tall {
                min-width: 100px;
                min-height: 160px;
            }

            .data-field--tall .data-field__value {
                font-size: 40px;
            }

            .data-field--full {
                min-width: 200px;
                min-height: 160px;
                padding: 16px;
            }

            .data-field--full .data-field__value {
                font-size: 56px;
            }

            /* Error state */
            .data-field__error {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                color: var(--error-color, #ff6b6b);
            }

            .data-field__error-icon {
                font-size: 24px;
            }

            .data-field__error-text {
                font-size: 11px;
            }

            /* Category-specific accent colors */
            .data-field[data-category="power"] {
                --category-accent: #ffd700;
            }

            .data-field[data-category="heartrate"] {
                --category-accent: #ff6b6b;
            }

            .data-field[data-category="cadence"] {
                --category-accent: #4ecdc4;
            }

            .data-field[data-category="speed"] {
                --category-accent: #45b7d1;
            }

            .data-field[data-category="distance"] {
                --category-accent: #96ceb4;
            }

            .data-field[data-category="elevation"] {
                --category-accent: #a8e6cf;
            }

            .data-field[data-category="time"] {
                --category-accent: #dda0dd;
            }

            /* Touch feedback */
            @media (hover: hover) {
                .data-field:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                }
            }

            .data-field:active {
                transform: scale(0.98);
            }
        `}}customElements.get("bpt-data-field")||customElements.define("bpt-data-field",Th);class Lh extends HTMLElement{static get observedAttributes(){return["layout"]}screen=null;fieldElements=new Map;settings=null;shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){this.cleanup()}attributeChangedCallback(e,i,r){i!==r&&e==="layout"&&this.screen&&(this.screen={...this.screen,layout:r},this.updateLayout())}setScreen(e){this.screen=e,this.render()}getScreen(){return this.screen}setSettings(e){this.settings=e;for(const i of this.fieldElements.values())i.setSettings(e)}updateFieldValue(e,i){const r=this.fieldElements.get(e);r&&r.setValue(i)}updateFieldValues(e){for(const[i,r]of e)this.updateFieldValue(i,r)}updateFieldByFieldId(e,i){for(const[r,s]of this.fieldElements)s.getFieldId()===e&&s.setValue(i)}getFieldElement(e){return this.fieldElements.get(e)}getAllFieldElements(){return new Map(this.fieldElements)}setSensorConnected(e,i){for(const r of this.fieldElements.values())r.getFieldDefinition()?.requiresSensor?.includes(e)&&r.setAttribute("connected",String(i))}highlightField(e,i=1e3){const r=this.fieldElements.get(e);r&&(r.setAttribute("highlight","true"),setTimeout(()=>{r.removeAttribute("highlight")},i))}render(){if(this.cleanup(),!this.screen){this.shadow.innerHTML=`
                <style>${this.getStyles()}</style>
                <div class="data-screen data-screen--empty">
                    <p>No screen configured</p>
                </div>
            `;return}this.shadow.innerHTML=`
            <style>${this.getStyles()}</style>
            <div class="data-screen data-screen--${this.screen.layout}" 
                 data-slot-count="${this.screen.slots.length}">
                ${this.renderSlots()}
            </div>
        `,this.setupFieldElements()}renderSlots(){return this.screen?this.screen.slots.sort((e,i)=>e.position-i.position).map(e=>this.renderSlot(e)).join(""):""}renderSlot(e){return`
            <div class="data-screen__slot data-screen__slot--${e.size}"
                 data-slot-id="${e.id}"
                 style="order: ${e.position}">
                <bpt-data-field 
                    field-id="${e.fieldId}" 
                    size="${e.size}"
                    data-slot-id="${e.id}">
                </bpt-data-field>
            </div>
        `}setupFieldElements(){this.shadow.querySelectorAll("bpt-data-field").forEach(i=>{const r=i,s=r.getAttribute("data-slot-id");s&&(this.fieldElements.set(s,r),this.settings&&r.setSettings(this.settings))})}updateLayout(){const e=this.shadow.querySelector(".data-screen");!e||!this.screen||(e.className="data-screen",e.classList.add(`data-screen--${this.screen.layout}`))}cleanup(){this.fieldElements.clear()}getStyles(){return`
            :host {
                display: block;
                width: 100%;
                height: 100%;
            }

            .data-screen {
                display: grid;
                gap: var(--screen-gap, 8px);
                padding: var(--screen-padding, 8px);
                height: 100%;
                box-sizing: border-box;
                align-content: start;
            }

            .data-screen--empty {
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-muted, #888);
            }

            /* Auto layout - responsive grid */
            .data-screen--auto {
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            }

            /* Fixed column layouts */
            .data-screen--grid-2 {
                grid-template-columns: repeat(2, 1fr);
            }

            .data-screen--grid-3 {
                grid-template-columns: repeat(3, 1fr);
            }

            .data-screen--grid-4 {
                grid-template-columns: repeat(4, 1fr);
            }

            /* List layout - single column */
            .data-screen--list {
                grid-template-columns: 1fr;
            }

            /* Custom layout - explicit positioning */
            .data-screen--custom {
                grid-template-columns: repeat(4, 1fr);
                grid-auto-rows: minmax(80px, auto);
            }

            /* Slot container */
            .data-screen__slot {
                display: flex;
                min-height: 60px;
            }

            .data-screen__slot > * {
                flex: 1;
            }

            /* Size-based grid spanning */
            .data-screen__slot--large,
            .data-screen__slot--wide {
                grid-column: span 2;
            }

            .data-screen__slot--tall {
                grid-row: span 2;
            }

            .data-screen__slot--full {
                grid-column: span 2;
                grid-row: span 2;
            }

            /* Responsive adjustments */
            @media (max-width: 400px) {
                .data-screen--auto {
                    grid-template-columns: repeat(2, 1fr);
                }

                .data-screen--grid-3,
                .data-screen--grid-4 {
                    grid-template-columns: repeat(2, 1fr);
                }

                .data-screen__slot--large,
                .data-screen__slot--wide {
                    grid-column: span 2;
                }
            }

            @media (min-width: 600px) {
                .data-screen--auto {
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                }
            }

            @media (min-width: 900px) {
                .data-screen--auto {
                    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                }

                .data-screen {
                    gap: var(--screen-gap, 12px);
                    padding: var(--screen-padding, 12px);
                }
            }

            /* Animation for slot changes */
            .data-screen__slot {
                transition: transform 0.2s ease, opacity 0.2s ease;
            }

            .data-screen__slot:empty {
                opacity: 0.3;
                border: 2px dashed var(--border-color, #444);
                border-radius: 8px;
            }
        `}}customElements.get("bpt-data-screen")||customElements.define("bpt-data-screen",Lh);class Ch extends HTMLElement{profile=null;activeIndex=0;screenElements=[];settings=null;shadow;touchStartX=0;touchStartY=0;touchDeltaX=0;isSwiping=!1;swipeThreshold=50;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners()}disconnectedCallback(){this.removeEventListeners()}setProfile(e){this.profile=e,this.activeIndex=e.activeScreenIndex,this.render()}getProfile(){return this.profile}setSettings(e){this.settings=e;for(const i of this.screenElements)i.setSettings(e)}nextScreen(){if(!this.profile)return;const e=(this.activeIndex+1)%this.profile.screens.length;this.goToScreen(e,"next")}prevScreen(){if(!this.profile)return;const e=this.activeIndex===0?this.profile.screens.length-1:this.activeIndex-1;this.goToScreen(e,"prev")}goToScreen(e,i="direct"){if(!this.profile)return;const r=Math.max(0,Math.min(e,this.profile.screens.length-1));r!==this.activeIndex&&(this.activeIndex=r,this.updateActiveScreen(),this.dispatchScreenChange(i))}getActiveIndex(){return this.activeIndex}getActiveScreen(){return this.profile?.screens[this.activeIndex]??null}getActiveScreenElement(){return this.screenElements[this.activeIndex]??null}updateFieldValue(e,i){const r=this.getActiveScreenElement();r&&r.updateFieldByFieldId(e,i)}updateAllFieldValues(e){for(const i of this.screenElements)for(const[r,s]of e)i.updateFieldByFieldId(r,s)}setSensorConnected(e,i){for(const r of this.screenElements)r.setSensorConnected(e,i)}render(){if(this.screenElements=[],!this.profile||this.profile.screens.length===0){this.shadow.innerHTML=`
                <style>${this.getStyles()}</style>
                <div class="carousel carousel--empty">
                    <p>No screens configured</p>
                </div>
            `;return}this.shadow.innerHTML=`
            <style>${this.getStyles()}</style>
            <div class="carousel">
                <div class="carousel__track" style="transform: translateX(-${this.activeIndex*100}%)">
                    ${this.renderScreens()}
                </div>
                ${this.renderIndicator()}
            </div>
        `,this.setupScreenElements()}renderScreens(){return this.profile?this.profile.screens.map((e,i)=>`
                <div class="carousel__slide ${i===this.activeIndex?"carousel__slide--active":""}"
                     data-index="${i}">
                    <bpt-data-screen data-screen-index="${i}"></bpt-data-screen>
                </div>
            `).join(""):""}renderIndicator(){return!this.profile||this.profile.screens.length<=1?"":`
            <div class="carousel__indicator">
                <button class="carousel__arrow carousel__arrow--prev" 
                        aria-label="Previous screen"
                        title="Previous screen (←)">
                    ‹
                </button>
                <div class="carousel__dots">
                    ${this.profile.screens.map((i,r)=>`
                <button class="carousel__dot ${r===this.activeIndex?"carousel__dot--active":""}"
                        data-index="${r}"
                        aria-label="Go to ${i.name} screen"
                        title="${i.name}">
                    <span class="carousel__dot-icon">${i.icon}</span>
                </button>
            `).join("")}
                </div>
                <button class="carousel__arrow carousel__arrow--next" 
                        aria-label="Next screen"
                        title="Next screen (→)">
                    ›
                </button>
            </div>
        `}setupScreenElements(){if(!this.profile)return;this.shadow.querySelectorAll("bpt-data-screen").forEach((i,r)=>{const s=i,c=this.profile.screens[r];s.setScreen(c),this.settings&&s.setSettings(this.settings),this.screenElements.push(s)})}updateActiveScreen(){const e=this.shadow.querySelector(".carousel__track");e&&(e.style.transform=`translateX(-${this.activeIndex*100}%)`),this.shadow.querySelectorAll(".carousel__slide").forEach((s,c)=>{s.classList.toggle("carousel__slide--active",c===this.activeIndex)}),this.shadow.querySelectorAll(".carousel__dot").forEach((s,c)=>{s.classList.toggle("carousel__dot--active",c===this.activeIndex)})}setupEventListeners(){const e=this.shadow.querySelector(".carousel");e&&(e.addEventListener("touchstart",this.handleTouchStart.bind(this),{passive:!0}),e.addEventListener("touchmove",this.handleTouchMove.bind(this),{passive:!1}),e.addEventListener("touchend",this.handleTouchEnd.bind(this),{passive:!0}),e.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this)))}removeEventListeners(){}handleTouchStart(e){this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.touchDeltaX=0,this.isSwiping=!1}handleTouchMove(e){if(!this.profile||this.profile.screens.length<=1)return;const i=e.touches[0].clientX-this.touchStartX,r=e.touches[0].clientY-this.touchStartY;if(!this.isSwiping&&Math.abs(i)>Math.abs(r)&&Math.abs(i)>10&&(this.isSwiping=!0),this.isSwiping){e.preventDefault(),this.touchDeltaX=i;const s=this.shadow.querySelector(".carousel__track");if(s){const c=-this.activeIndex*100,d=i/this.offsetWidth*100;s.style.transform=`translateX(calc(${c}% + ${d}%))`,s.style.transition="none"}}}handleTouchEnd(e){if(!this.isSwiping)return;const i=this.shadow.querySelector(".carousel__track");i&&(i.style.transition=""),Math.abs(this.touchDeltaX)>this.swipeThreshold?this.touchDeltaX>0?this.prevScreen():this.nextScreen():this.updateActiveScreen(),this.isSwiping=!1,this.touchDeltaX=0}handleClick(e){const i=e.target;if(i.closest(".carousel__arrow--prev")){this.prevScreen();return}if(i.closest(".carousel__arrow--next")){this.nextScreen();return}const c=i.closest(".carousel__dot");if(c){const d=parseInt(c.dataset.index||"0",10),u=d>this.activeIndex?"next":"prev";this.goToScreen(d,u)}}handleKeydown(e){switch(e.key){case"ArrowLeft":e.preventDefault(),this.prevScreen();break;case"ArrowRight":e.preventDefault(),this.nextScreen();break}}dispatchScreenChange(e){const i=this.getActiveScreen();if(!i)return;const r=new CustomEvent("screen-change",{detail:{screenIndex:this.activeIndex,screen:i,direction:e},bubbles:!0,composed:!0});this.dispatchEvent(r)}getStyles(){return`
            :host {
                display: block;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            .carousel {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            .carousel--empty {
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-muted, #888);
            }

            .carousel__track {
                display: flex;
                height: calc(100% - 40px);
                transition: transform 0.3s ease-out;
                will-change: transform;
            }

            .carousel__slide {
                flex: 0 0 100%;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            .carousel__slide > * {
                width: 100%;
                height: 100%;
            }

            /* Screen indicator */
            .carousel__indicator {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;
                padding: 8px;
                height: 32px;
                background: var(--surface-color, #1a1a2e);
            }

            .carousel__dots {
                display: flex;
                gap: 8px;
            }

            .carousel__arrow {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 28px;
                height: 28px;
                padding: 0;
                border: none;
                border-radius: 50%;
                background: var(--arrow-bg, rgba(255, 255, 255, 0.1));
                color: var(--arrow-color, rgba(255, 255, 255, 0.7));
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 18px;
                font-weight: bold;
                line-height: 1;
            }

            .carousel__arrow:hover {
                background: var(--arrow-hover-bg, rgba(255, 255, 255, 0.2));
                color: var(--arrow-hover-color, #fff);
            }

            .carousel__arrow:active {
                transform: scale(0.95);
            }

            .carousel__arrow:focus {
                outline: 2px solid var(--focus-color, #4ecdc4);
                outline-offset: 2px;
            }

            .carousel__arrow:focus:not(:focus-visible) {
                outline: none;
            }

            .carousel__dot {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 24px;
                padding: 0;
                border: none;
                border-radius: 12px;
                background: var(--dot-bg, rgba(255, 255, 255, 0.2));
                color: var(--dot-color, rgba(255, 255, 255, 0.6));
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 12px;
            }

            .carousel__dot:hover {
                background: var(--dot-hover-bg, rgba(255, 255, 255, 0.3));
            }

            .carousel__dot--active {
                background: var(--primary-color, #4ecdc4);
                color: var(--primary-text, #000);
                width: 48px;
            }

            .carousel__dot-icon {
                font-size: 14px;
            }

            /* Hide indicator for single screen */
            .carousel__indicator:has(.carousel__dot:only-child) {
                display: none;
            }

            /* Animation classes */
            .carousel__slide--entering {
                animation: slideIn 0.3s ease-out;
            }

            .carousel__slide--leaving {
                animation: slideOut 0.3s ease-out;
            }

            @keyframes slideIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }

            @keyframes slideOut {
                from { opacity: 1; transform: scale(1); }
                to { opacity: 0; transform: scale(0.95); }
            }

            /* Touch feedback */
            .carousel__track.is-dragging {
                cursor: grabbing;
            }

            /* Accessibility */
            .carousel__dot:focus {
                outline: 2px solid var(--focus-color, #4ecdc4);
                outline-offset: 2px;
            }

            .carousel__dot:focus:not(:focus-visible) {
                outline: none;
            }
        `}}customElements.get("bpt-screen-carousel")||customElements.define("bpt-screen-carousel",Ch);class vo extends HTMLElement{shadow;isOpen=!1;selectedCategory="all";searchQuery="";selectedFieldId=null;selectedSize="medium";static CATEGORY_ICONS={all:"📊",power:"⚡",heartrate:"❤️",cadence:"🔄",speed:"🚴",distance:"📍",elevation:"⛰️",time:"⏱️",laps:"🏁",energy:"🔥",environment:"🌡️",device:"🔋",charts:"📈",map:"🗺️"};static CATEGORY_NAMES={all:"All Fields",power:"Power",heartrate:"Heart Rate",cadence:"Cadence",speed:"Speed & Pace",distance:"Distance",elevation:"Elevation",time:"Time",laps:"Laps",energy:"Energy",environment:"Environment",device:"Device",charts:"Charts",map:"Map"};constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners()}disconnectedCallback(){this.removeEventListeners()}open(e){if(this.isOpen=!0,this.selectedFieldId=e??null,e){const i=gt(e);i&&(this.selectedCategory=i.category,this.selectedSize=i.defaultSize)}this.render(),this.setAttribute("open",""),requestAnimationFrame(()=>{this.shadow.querySelector(".picker__search")?.focus()})}close(){this.isOpen=!1,this.removeAttribute("open"),this.render(),this.dispatchEvent(new CustomEvent("close"))}getIsOpen(){return this.isOpen}render(){if(!this.isOpen){this.shadow.innerHTML=`<style>${this.getStyles()}</style>`;return}const e=this.getFilteredFields(),i=this.getAvailableCategories();this.shadow.innerHTML=`
            <style>${this.getStyles()}</style>
            <div class="picker__overlay" data-action="close">
                <div class="picker__dialog" role="dialog" aria-modal="true" aria-label="Select Data Field">
                    <header class="picker__header">
                        <h2 class="picker__title">Select Data Field</h2>
                        <button class="picker__close" data-action="close" aria-label="Close">×</button>
                    </header>
                    
                    <div class="picker__search-container">
                        <input 
                            type="search" 
                            class="picker__search" 
                            placeholder="Search fields..."
                            value="${this.escapeHtml(this.searchQuery)}"
                        >
                    </div>
                    
                    <div class="picker__categories">
                        ${i.map(r=>`
                            <button 
                                class="picker__category ${r===this.selectedCategory?"picker__category--active":""}"
                                data-category="${r}"
                            >
                                <span class="picker__category-icon">${vo.CATEGORY_ICONS[r]}</span>
                                <span class="picker__category-name">${vo.CATEGORY_NAMES[r]}</span>
                            </button>
                        `).join("")}
                    </div>
                    
                    <div class="picker__fields">
                        ${e.length===0?'<p class="picker__empty">No fields found</p>':e.map(r=>this.renderFieldOption(r)).join("")}
                    </div>
                    
                    ${this.selectedFieldId?this.renderSizeSelector():""}
                    
                    <footer class="picker__footer">
                        <button class="picker__btn picker__btn--cancel" data-action="close">Cancel</button>
                        <button 
                            class="picker__btn picker__btn--confirm" 
                            data-action="confirm"
                            ${this.selectedFieldId?"":"disabled"}
                        >
                            Add Field
                        </button>
                    </footer>
                </div>
            </div>
        `}renderFieldOption(e){return`
            <button 
                class="picker__field ${e.id===this.selectedFieldId?"picker__field--selected":""}"
                data-field-id="${e.id}"
            >
                <span class="picker__field-icon">${e.icon}</span>
                <div class="picker__field-info">
                    <span class="picker__field-name">${this.escapeHtml(e.name)}</span>
                    <span class="picker__field-desc">${this.escapeHtml(e.description)}</span>
                </div>
                ${e.requiresSensor?.length?`
                    <span class="picker__field-badge" title="Requires sensor">📡</span>
                `:""}
                ${e.requiresWorkoutActive?`
                    <span class="picker__field-badge" title="Requires active workout">▶️</span>
                `:""}
            </button>
        `}renderSizeSelector(){const e=gt(this.selectedFieldId);return e?`
            <div class="picker__size-selector">
                <label class="picker__size-label">Field Size:</label>
                <div class="picker__sizes">
                    ${e.supportedSizes.map(r=>`
                        <button 
                            class="picker__size ${r===this.selectedSize?"picker__size--active":""}"
                            data-size="${r}"
                        >
                            ${this.getSizeLabel(r)}
                        </button>
                    `).join("")}
                </div>
            </div>
        `:""}getSizeLabel(e){return{small:"S",medium:"M",large:"L",wide:"W",tall:"T",full:"XL"}[e]}getStyles(){return`
            :host {
                display: contents;
            }
            
            :host(:not([open])) .picker__overlay {
                display: none;
            }
            
            .picker__overlay {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.6);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                padding: 1rem;
            }
            
            .picker__dialog {
                background: var(--color-bg, #1a1a2e);
                border-radius: 12px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
                width: 100%;
                max-width: 500px;
                max-height: 80vh;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }
            
            .picker__header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1rem;
                border-bottom: 1px solid var(--color-border, #333);
            }
            
            .picker__title {
                margin: 0;
                font-size: 1.25rem;
                font-weight: 600;
                color: var(--color-text, #fff);
            }
            
            .picker__close {
                background: none;
                border: none;
                color: var(--color-text-secondary, #999);
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.25rem 0.5rem;
                line-height: 1;
                border-radius: 4px;
            }
            
            .picker__close:hover {
                background: var(--color-bg-hover, #333);
            }
            
            .picker__search-container {
                padding: 0.75rem 1rem;
                border-bottom: 1px solid var(--color-border, #333);
            }
            
            .picker__search {
                width: 100%;
                padding: 0.5rem 0.75rem;
                border: 1px solid var(--color-border, #333);
                border-radius: 6px;
                background: var(--color-bg-secondary, #252540);
                color: var(--color-text, #fff);
                font-size: 0.9rem;
            }
            
            .picker__search::placeholder {
                color: var(--color-text-secondary, #999);
            }
            
            .picker__categories {
                display: flex;
                gap: 0.5rem;
                padding: 0.75rem 1rem;
                overflow-x: auto;
                border-bottom: 1px solid var(--color-border, #333);
                -webkit-overflow-scrolling: touch;
            }
            
            .picker__category {
                display: flex;
                align-items: center;
                gap: 0.25rem;
                padding: 0.375rem 0.625rem;
                border: 1px solid var(--color-border, #333);
                border-radius: 16px;
                background: none;
                color: var(--color-text-secondary, #999);
                font-size: 0.8rem;
                cursor: pointer;
                white-space: nowrap;
                transition: all 0.2s ease;
            }
            
            .picker__category:hover {
                border-color: var(--color-primary, #4361ee);
                color: var(--color-text, #fff);
            }
            
            .picker__category--active {
                background: var(--color-primary, #4361ee);
                border-color: var(--color-primary, #4361ee);
                color: #fff;
            }
            
            .picker__category-icon {
                font-size: 1rem;
            }
            
            .picker__fields {
                flex: 1;
                overflow-y: auto;
                padding: 0.5rem;
            }
            
            .picker__empty {
                text-align: center;
                color: var(--color-text-secondary, #999);
                padding: 2rem;
            }
            
            .picker__field {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                width: 100%;
                padding: 0.75rem;
                border: 2px solid transparent;
                border-radius: 8px;
                background: var(--color-bg-secondary, #252540);
                color: var(--color-text, #fff);
                cursor: pointer;
                text-align: left;
                margin-bottom: 0.5rem;
                transition: all 0.2s ease;
            }
            
            .picker__field:hover {
                border-color: var(--color-primary, #4361ee);
            }
            
            .picker__field--selected {
                border-color: var(--color-primary, #4361ee);
                background: rgba(67, 97, 238, 0.1);
            }
            
            .picker__field-icon {
                font-size: 1.5rem;
            }
            
            .picker__field-info {
                flex: 1;
                min-width: 0;
            }
            
            .picker__field-name {
                display: block;
                font-weight: 500;
                margin-bottom: 0.125rem;
            }
            
            .picker__field-desc {
                display: block;
                font-size: 0.75rem;
                color: var(--color-text-secondary, #999);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .picker__field-badge {
                font-size: 0.9rem;
                opacity: 0.7;
            }
            
            .picker__size-selector {
                padding: 0.75rem 1rem;
                border-top: 1px solid var(--color-border, #333);
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            
            .picker__size-label {
                color: var(--color-text-secondary, #999);
                font-size: 0.9rem;
            }
            
            .picker__sizes {
                display: flex;
                gap: 0.5rem;
            }
            
            .picker__size {
                width: 2.5rem;
                height: 2.5rem;
                border: 2px solid var(--color-border, #333);
                border-radius: 6px;
                background: none;
                color: var(--color-text, #fff);
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .picker__size:hover {
                border-color: var(--color-primary, #4361ee);
            }
            
            .picker__size--active {
                border-color: var(--color-primary, #4361ee);
                background: var(--color-primary, #4361ee);
            }
            
            .picker__footer {
                display: flex;
                justify-content: flex-end;
                gap: 0.75rem;
                padding: 1rem;
                border-top: 1px solid var(--color-border, #333);
            }
            
            .picker__btn {
                padding: 0.5rem 1rem;
                border-radius: 6px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .picker__btn--cancel {
                background: none;
                border: 1px solid var(--color-border, #333);
                color: var(--color-text, #fff);
            }
            
            .picker__btn--cancel:hover {
                background: var(--color-bg-hover, #333);
            }
            
            .picker__btn--confirm {
                background: var(--color-primary, #4361ee);
                border: none;
                color: #fff;
            }
            
            .picker__btn--confirm:hover:not(:disabled) {
                background: var(--color-primary-hover, #3451de);
            }
            
            .picker__btn--confirm:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        `}setupEventListeners(){this.shadow.addEventListener("click",this.handleClick.bind(this)),this.shadow.addEventListener("input",this.handleInput.bind(this))}removeEventListeners(){}handleClick(e){const i=e.target,r=i.closest("[data-action]")?.getAttribute("data-action");if(r==="close"){this.close();return}if(r==="confirm"){this.confirmSelection();return}const s=i.closest("[data-category]");if(s){this.selectedCategory=s.dataset.category,this.render();return}const c=i.closest("[data-field-id]");if(c){const u=c.dataset.fieldId;this.selectedFieldId=u;const h=gt(u);h&&(this.selectedSize=h.defaultSize),this.render();return}const d=i.closest("[data-size]");if(d){this.selectedSize=d.dataset.size,this.render();return}}handleInput(e){const i=e.target;i.classList.contains("picker__search")&&(this.searchQuery=i.value,this.render())}confirmSelection(){if(!this.selectedFieldId)return;const e=gt(this.selectedFieldId);if(!e)return;const i=new CustomEvent("select",{detail:{fieldId:this.selectedFieldId,field:e,size:this.selectedSize}});this.dispatchEvent(i),this.close()}getFilteredFields(){let e;if(this.searchQuery.trim())e=ec(this.searchQuery);else if(this.selectedCategory==="all"){e=[];const i=Mr();for(const[r,s]of i)e.push(...s)}else e=Qa(this.selectedCategory);return e}getAvailableCategories(){const e=Mr(),i=["all"];for(const r of e.keys())i.push(r);return i}escapeHtml(e){const i=document.createElement("div");return i.textContent=e,i.innerHTML}}customElements.get("bpt-field-picker")||customElements.define("bpt-field-picker",vo);class Jr extends HTMLElement{shadow;screen=null;draggedSlotId=null;fieldPicker=null;editingSlotId=null;static LAYOUTS=[{value:"auto",label:"Auto"},{value:"grid-2",label:"2 Columns"},{value:"grid-3",label:"3 Columns"},{value:"grid-4",label:"4 Columns"},{value:"list",label:"List"}];constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners()}disconnectedCallback(){this.removeEventListeners()}setScreen(e){this.screen={...e,slots:[...e.slots]},this.render()}getScreen(){return this.screen}reset(e){this.screen={...e,slots:[...e.slots]},this.render()}render(){if(!this.screen){this.shadow.innerHTML=`
                <style>${this.getStyles()}</style>
                <div class="editor editor--empty">
                    <p>No screen selected</p>
                </div>
            `;return}this.shadow.innerHTML=`
            <style>${this.getStyles()}</style>
            <div class="editor">
                <header class="editor__header">
                    <div class="editor__name-group">
                        <span class="editor__icon">${this.screen.icon}</span>
                        <input 
                            type="text" 
                            class="editor__name-input" 
                            value="${this.escapeHtml(this.screen.name)}"
                            placeholder="Screen Name"
                            data-action="rename"
                        >
                    </div>
                    <select class="editor__layout-select" data-action="layout">
                        ${Jr.LAYOUTS.map(e=>`
                            <option value="${e.value}" ${e.value===this.screen.layout?"selected":""}>
                                ${e.label}
                            </option>
                        `).join("")}
                    </select>
                </header>
                
                <div class="editor__slots">
                    ${this.screen.slots.length===0?'<p class="editor__empty">No fields added yet. Click "Add Field" to get started.</p>':this.screen.slots.map(e=>this.renderSlot(e)).join("")}
                </div>
                
                <div class="editor__actions">
                    <button class="editor__btn editor__btn--add" data-action="add-field">
                        <span>+</span> Add Field
                    </button>
                </div>
                
                <footer class="editor__footer">
                    <button class="editor__btn editor__btn--cancel" data-action="cancel">Cancel</button>
                    <button class="editor__btn editor__btn--save" data-action="save">Save Changes</button>
                </footer>
            </div>
        `}renderSlot(e){const i=gt(e.fieldId),r=i?.name??"Unknown Field",s=i?.icon??"❓";return`
            <div 
                class="editor__slot" 
                data-slot-id="${e.id}"
                draggable="true"
            >
                <div class="editor__slot-drag" title="Drag to reorder">⋮⋮</div>
                <span class="editor__slot-icon">${s}</span>
                <div class="editor__slot-info">
                    <span class="editor__slot-name">${this.escapeHtml(r)}</span>
                    <span class="editor__slot-size">${e.size}</span>
                </div>
                <div class="editor__slot-actions">
                    <button class="editor__slot-btn" data-action="edit-slot" data-slot-id="${e.id}" title="Edit">
                        ✏️
                    </button>
                    <button class="editor__slot-btn editor__slot-btn--delete" data-action="delete-slot" data-slot-id="${e.id}" title="Remove">
                        🗑️
                    </button>
                </div>
            </div>
        `}getStyles(){return`
            :host {
                display: block;
            }
            
            .editor {
                background: var(--color-bg, #1a1a2e);
                border-radius: 12px;
                overflow: hidden;
            }
            
            .editor--empty {
                padding: 2rem;
                text-align: center;
                color: var(--color-text-secondary, #999);
            }
            
            .editor__header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                padding: 1rem;
                border-bottom: 1px solid var(--color-border, #333);
            }
            
            .editor__name-group {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                flex: 1;
            }
            
            .editor__icon {
                font-size: 1.5rem;
            }
            
            .editor__name-input {
                flex: 1;
                padding: 0.5rem;
                border: 1px solid transparent;
                border-radius: 6px;
                background: transparent;
                color: var(--color-text, #fff);
                font-size: 1.125rem;
                font-weight: 600;
            }
            
            .editor__name-input:hover,
            .editor__name-input:focus {
                border-color: var(--color-border, #333);
                background: var(--color-bg-secondary, #252540);
            }
            
            .editor__layout-select {
                padding: 0.5rem 0.75rem;
                border: 1px solid var(--color-border, #333);
                border-radius: 6px;
                background: var(--color-bg-secondary, #252540);
                color: var(--color-text, #fff);
                font-size: 0.9rem;
                cursor: pointer;
            }
            
            .editor__slots {
                padding: 1rem;
                min-height: 200px;
            }
            
            .editor__empty {
                text-align: center;
                color: var(--color-text-secondary, #999);
                padding: 2rem;
            }
            
            .editor__slot {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem;
                background: var(--color-bg-secondary, #252540);
                border: 2px solid transparent;
                border-radius: 8px;
                margin-bottom: 0.5rem;
                cursor: grab;
                transition: all 0.2s ease;
            }
            
            .editor__slot:hover {
                border-color: var(--color-border, #333);
            }
            
            .editor__slot.dragging {
                opacity: 0.5;
                cursor: grabbing;
            }
            
            .editor__slot.drag-over {
                border-color: var(--color-primary, #4361ee);
                border-style: dashed;
            }
            
            .editor__slot-drag {
                color: var(--color-text-secondary, #999);
                font-weight: bold;
                cursor: grab;
            }
            
            .editor__slot-icon {
                font-size: 1.25rem;
            }
            
            .editor__slot-info {
                flex: 1;
                min-width: 0;
            }
            
            .editor__slot-name {
                display: block;
                font-weight: 500;
                color: var(--color-text, #fff);
            }
            
            .editor__slot-size {
                display: block;
                font-size: 0.75rem;
                color: var(--color-text-secondary, #999);
                text-transform: uppercase;
            }
            
            .editor__slot-actions {
                display: flex;
                gap: 0.25rem;
            }
            
            .editor__slot-btn {
                background: none;
                border: none;
                padding: 0.375rem;
                cursor: pointer;
                border-radius: 4px;
                opacity: 0.6;
                transition: all 0.2s ease;
            }
            
            .editor__slot-btn:hover {
                opacity: 1;
                background: var(--color-bg-hover, #333);
            }
            
            .editor__slot-btn--delete:hover {
                background: rgba(255, 0, 0, 0.2);
            }
            
            .editor__actions {
                padding: 0 1rem 1rem;
            }
            
            .editor__btn {
                padding: 0.625rem 1rem;
                border-radius: 6px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .editor__btn--add {
                width: 100%;
                background: var(--color-bg-secondary, #252540);
                border: 2px dashed var(--color-border, #333);
                color: var(--color-text, #fff);
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            }
            
            .editor__btn--add:hover {
                border-color: var(--color-primary, #4361ee);
                background: rgba(67, 97, 238, 0.1);
            }
            
            .editor__btn--add span {
                font-size: 1.25rem;
                font-weight: bold;
            }
            
            .editor__footer {
                display: flex;
                justify-content: flex-end;
                gap: 0.75rem;
                padding: 1rem;
                border-top: 1px solid var(--color-border, #333);
            }
            
            .editor__btn--cancel {
                background: none;
                border: 1px solid var(--color-border, #333);
                color: var(--color-text, #fff);
            }
            
            .editor__btn--cancel:hover {
                background: var(--color-bg-hover, #333);
            }
            
            .editor__btn--save {
                background: var(--color-primary, #4361ee);
                border: none;
                color: #fff;
            }
            
            .editor__btn--save:hover {
                background: var(--color-primary-hover, #3451de);
            }
        `}setupEventListeners(){const e=this.shadow.querySelector(".editor");e&&(this.shadow.addEventListener("click",this.handleClick.bind(this)),this.shadow.addEventListener("input",this.handleInput.bind(this)),this.shadow.addEventListener("change",this.handleChange.bind(this)),e.addEventListener("dragstart",this.handleDragStart.bind(this)),e.addEventListener("dragover",this.handleDragOver.bind(this)),e.addEventListener("drop",this.handleDrop.bind(this)),e.addEventListener("dragend",this.handleDragEnd.bind(this)))}removeEventListeners(){}handleClick(e){const r=e.target.closest("[data-action]");if(!r)return;const s=r.dataset.action,c=r.dataset.slotId;switch(s){case"add-field":this.openFieldPicker();break;case"edit-slot":c&&this.editSlot(c);break;case"delete-slot":c&&this.deleteSlot(c);break;case"save":this.saveChanges();break;case"cancel":this.dispatchEvent(new CustomEvent("cancel"));break}}handleInput(e){const i=e.target;i.classList.contains("editor__name-input")&&this.screen&&(this.screen.name=i.value)}handleChange(e){const i=e.target;i.classList.contains("editor__layout-select")&&this.screen&&(this.screen.layout=i.value)}handleDragStart(e){const i=e.target.closest(".editor__slot");i&&(this.draggedSlotId=i.dataset.slotId??null,i.classList.add("dragging"),e.dataTransfer&&(e.dataTransfer.effectAllowed="move"))}handleDragOver(e){e.preventDefault();const i=e.target.closest(".editor__slot");!i||i.dataset.slotId===this.draggedSlotId||(this.shadow.querySelectorAll(".editor__slot").forEach(r=>{r.classList.remove("drag-over")}),i.classList.add("drag-over"))}handleDrop(e){e.preventDefault();const i=e.target.closest(".editor__slot");if(!i||!this.draggedSlotId||!this.screen)return;const r=i.dataset.slotId;if(!r||r===this.draggedSlotId)return;const s=this.screen.slots.map(u=>u.id),c=s.indexOf(this.draggedSlotId),d=s.indexOf(r);c>=0&&d>=0&&(s.splice(c,1),s.splice(d,0,this.draggedSlotId),this.screen=Sd(this.screen,s),this.render())}handleDragEnd(e){this.draggedSlotId=null,this.shadow.querySelectorAll(".editor__slot").forEach(i=>{i.classList.remove("dragging","drag-over")})}openFieldPicker(e){this.fieldPicker||(this.fieldPicker=document.createElement("bpt-field-picker"),this.fieldPicker.addEventListener("select",this.handleFieldSelect.bind(this)),this.fieldPicker.addEventListener("close",()=>{this.editingSlotId=null}),document.body.appendChild(this.fieldPicker)),this.editingSlotId=e??null;let i;e&&this.screen&&(i=this.screen.slots.find(s=>s.id===e)?.fieldId),this.fieldPicker.open(i)}handleFieldSelect(e){const i=e.detail;this.screen&&(this.editingSlotId?this.screen=Ja(this.screen,this.editingSlotId,{fieldId:i.fieldId,size:i.size}):this.screen=Ya(this.screen,i.fieldId,i.size),this.editingSlotId=null,this.render())}editSlot(e){this.openFieldPicker(e)}deleteSlot(e){this.screen&&(this.screen=Ka(this.screen,e),this.render())}saveChanges(){this.screen&&this.dispatchEvent(new CustomEvent("save",{detail:{screen:this.screen}}))}escapeHtml(e){const i=document.createElement("div");return i.textContent=e,i.innerHTML}}customElements.get("bpt-screen-editor")||customElements.define("bpt-screen-editor",Jr);class Ph extends HTMLElement{shadow;settings=gi();activeProfile;draggedScreenId=null;editingScreen=null;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.activeProfile=vi()}connectedCallback(){this.render(),this.setupEventListeners()}disconnectedCallback(){this.removeEventListeners()}refresh(){this.settings=gi(),this.activeProfile=vi(),this.render()}render(){this.shadow.innerHTML=`
            <style>${this.getStyles()}</style>
            <div class="profile-settings">
                ${this.renderProfileSelector()}
                ${this.renderScreensList()}
                ${this.renderScreenActions()}
            </div>
            ${this.renderScreenEditorModal()}
        `,this.setupEventListeners()}renderProfileSelector(){const e=this.settings.profiles,i=this.settings.activeProfileId;return`
            <div class="profile-selector">
                <label for="profile-select">Activity Profile:</label>
                <select id="profile-select" class="profile-dropdown">
                    ${e.map(r=>`
                        <option value="${r.id}" ${r.id===i?"selected":""}>
                            ${r.icon} ${r.name}
                        </option>
                    `).join("")}
                </select>
                <button class="btn-icon btn-add-profile" title="Add Profile" aria-label="Add new profile">
                    ➕
                </button>
            </div>
            <p class="profile-description">
                ${this.activeProfile.screens.length} screen${this.activeProfile.screens.length!==1?"s":""} • 
                Swipe or tap dots to switch screens during workout
            </p>
        `}renderScreensList(){const e=this.activeProfile.screens;return e.length===0?`
                <div class="screens-empty">
                    <p>No screens configured.</p>
                    <button class="btn-primary btn-add-screen">➕ Add Screen</button>
                </div>
            `:`
            <div class="screens-list" role="list" aria-label="Data screens">
                ${e.map((i,r)=>this.renderScreenItem(i,r)).join("")}
            </div>
        `}renderScreenItem(e,i){return`
            <div class="screen-item ${i===this.activeProfile.activeScreenIndex?"screen-item--active":""}"
                 role="listitem"
                 draggable="true"
                 data-screen-id="${e.id}"
                 data-index="${i}">
                <div class="screen-drag-handle" aria-hidden="true">⋮⋮</div>
                <div class="screen-icon">${e.icon}</div>
                <div class="screen-info">
                    <div class="screen-name">${e.name}</div>
                    <div class="screen-details">${e.slots.length} field${e.slots.length!==1?"s":""}</div>
                </div>
                <div class="screen-actions">
                    <button class="btn-icon btn-edit-screen" 
                            data-screen-id="${e.id}"
                            title="Edit screen"
                            aria-label="Edit ${e.name} screen">
                        ✏️
                    </button>
                    <button class="btn-icon btn-duplicate-screen" 
                            data-screen-id="${e.id}"
                            title="Duplicate screen"
                            aria-label="Duplicate ${e.name} screen">
                        📋
                    </button>
                    <button class="btn-icon btn-delete-screen ${this.activeProfile.screens.length<=1?"btn-disabled":""}" 
                            data-screen-id="${e.id}"
                            title="Delete screen"
                            aria-label="Delete ${e.name} screen"
                            ${this.activeProfile.screens.length<=1?"disabled":""}>
                        🗑️
                    </button>
                </div>
            </div>
        `}renderScreenActions(){return`
            <div class="screen-actions-bar">
                <button class="btn-secondary btn-add-screen">
                    ➕ Add Screen
                </button>
                <button class="btn-secondary btn-reset-profile" title="Reset to default screens">
                    🔄 Reset to Defaults
                </button>
            </div>
        `}renderScreenEditorModal(){return`
            <div class="screen-editor-modal" id="screenEditorModal" style="display: none;">
                <div class="modal-backdrop"></div>
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 id="screenEditorTitle">Edit Screen</h3>
                        <button class="btn-close" id="closeScreenEditor" aria-label="Close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <bpt-screen-editor id="screenEditor"></bpt-screen-editor>
                    </div>
                    <div class="modal-footer">
                        <button class="btn-secondary" id="cancelScreenEdit">Cancel</button>
                        <button class="btn-primary" id="saveScreenEdit">Save Changes</button>
                    </div>
                </div>
            </div>
        `}getStyles(){return`
            :host {
                display: block;
                font-family: var(--font-family, system-ui, -apple-system, sans-serif);
            }

            .profile-settings {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }

            /* Profile Selector */
            .profile-selector {
                display: flex;
                align-items: center;
                gap: 12px;
                flex-wrap: wrap;
            }

            .profile-selector label {
                font-weight: 500;
                font-size: 14px;
                color: var(--color-text-secondary, #666);
            }

            .profile-dropdown {
                flex: 1;
                min-width: 180px;
                padding: 8px 12px;
                border: 1px solid var(--color-border, #d0d7de);
                border-radius: 6px;
                font-size: 16px;
                background: var(--input-bg, white);
                color: var(--color-text-primary, #1a1a1a);
            }

            .profile-description {
                font-size: 13px;
                color: var(--color-text-secondary, #666);
                margin: -8px 0 8px;
            }

            /* Screens List */
            .screens-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
                min-height: 100px;
            }

            .screens-empty {
                text-align: center;
                padding: 24px;
                background: var(--bg-secondary, #f6f8fa);
                border-radius: 8px;
                color: var(--color-text-secondary, #666);
            }

            .screen-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 12px;
                background: var(--bg-secondary, #f6f8fa);
                border: 1px solid var(--color-border, #d0d7de);
                border-radius: 8px;
                cursor: grab;
                transition: all 0.15s ease;
            }

            .screen-item:hover {
                border-color: var(--color-primary, #2196F3);
                background: var(--bg-primary, white);
            }

            .screen-item--active {
                border-color: var(--color-primary, #2196F3);
                border-width: 2px;
                background: var(--bg-primary, white);
            }

            .screen-item--dragging {
                opacity: 0.5;
                transform: scale(0.98);
            }

            .screen-item--drag-over {
                border-style: dashed;
                border-color: var(--color-primary, #2196F3);
            }

            .screen-drag-handle {
                color: var(--color-text-secondary, #666);
                font-size: 14px;
                cursor: grab;
                padding: 4px;
                user-select: none;
            }

            .screen-icon {
                font-size: 24px;
                width: 36px;
                text-align: center;
            }

            .screen-info {
                flex: 1;
                min-width: 0;
            }

            .screen-name {
                font-weight: 500;
                font-size: 15px;
                color: var(--color-text-primary, #1a1a1a);
            }

            .screen-details {
                font-size: 13px;
                color: var(--color-text-secondary, #666);
            }

            .screen-actions {
                display: flex;
                gap: 4px;
            }

            /* Buttons */
            .btn-icon {
                padding: 6px 8px;
                border: none;
                background: transparent;
                cursor: pointer;
                font-size: 16px;
                border-radius: 4px;
                transition: background 0.15s ease;
            }

            .btn-icon:hover {
                background: var(--color-border, #d0d7de);
            }

            .btn-icon.btn-disabled {
                opacity: 0.4;
                cursor: not-allowed;
            }

            .btn-icon.btn-disabled:hover {
                background: transparent;
            }

            .btn-primary {
                padding: 10px 16px;
                border: none;
                background: var(--color-primary, #2196F3);
                color: white;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: background 0.15s ease;
            }

            .btn-primary:hover {
                background: var(--color-primary-dark, #1976D2);
            }

            .btn-secondary {
                padding: 10px 16px;
                border: 1px solid var(--color-border, #d0d7de);
                background: var(--bg-primary, white);
                color: var(--color-text-primary, #1a1a1a);
                border-radius: 6px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.15s ease;
            }

            .btn-secondary:hover {
                background: var(--bg-secondary, #f6f8fa);
            }

            .screen-actions-bar {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                padding-top: 8px;
                border-top: 1px solid var(--color-border, #d0d7de);
            }

            /* Modal */
            .screen-editor-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1000;
            }

            .modal-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
            }

            .modal-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 90%;
                max-width: 600px;
                max-height: 90vh;
                background: var(--bg-primary, white);
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }

            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 20px;
                border-bottom: 1px solid var(--color-border, #d0d7de);
            }

            .modal-header h3 {
                margin: 0;
                font-size: 18px;
            }

            .btn-close {
                padding: 4px 8px;
                border: none;
                background: transparent;
                font-size: 24px;
                cursor: pointer;
                color: var(--color-text-secondary, #666);
            }

            .modal-body {
                flex: 1;
                overflow-y: auto;
                padding: 20px;
            }

            .modal-footer {
                display: flex;
                justify-content: flex-end;
                gap: 8px;
                padding: 16px 20px;
                border-top: 1px solid var(--color-border, #d0d7de);
            }

            /* Add Profile Dialog */
            .add-profile-dialog {
                padding: 20px;
            }

            .form-group {
                margin-bottom: 16px;
            }

            .form-group label {
                display: block;
                margin-bottom: 6px;
                font-weight: 500;
                font-size: 14px;
            }

            .form-input {
                width: 100%;
                padding: 10px 12px;
                border: 1px solid var(--color-border, #d0d7de);
                border-radius: 6px;
                font-size: 16px;
            }

            .template-options {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .template-option {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 12px;
                border: 1px solid var(--color-border, #d0d7de);
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.15s ease;
            }

            .template-option:hover {
                border-color: var(--color-primary, #2196F3);
            }

            .template-option input {
                width: 18px;
                height: 18px;
            }
        `}setupEventListeners(){this.shadow.getElementById("profile-select")?.addEventListener("change",this.handleProfileChange.bind(this)),this.shadow.querySelector(".btn-add-profile")?.addEventListener("click",this.handleAddProfile.bind(this)),this.shadow.querySelectorAll(".btn-add-screen").forEach(p=>p.addEventListener("click",this.handleAddScreen.bind(this))),this.shadow.querySelector(".btn-reset-profile")?.addEventListener("click",this.handleResetProfile.bind(this)),this.shadow.querySelectorAll(".btn-edit-screen").forEach(p=>{p.addEventListener("click",this.handleEditScreen.bind(this))}),this.shadow.querySelectorAll(".btn-duplicate-screen").forEach(p=>{p.addEventListener("click",this.handleDuplicateScreen.bind(this))}),this.shadow.querySelectorAll(".btn-delete-screen").forEach(p=>{p.addEventListener("click",this.handleDeleteScreen.bind(this))}),this.shadow.querySelectorAll(".screen-item").forEach(p=>{const _=p;_.addEventListener("dragstart",f=>this.handleDragStart(f)),_.addEventListener("dragend",f=>this.handleDragEnd(f)),_.addEventListener("dragover",f=>this.handleDragOver(f)),_.addEventListener("dragleave",f=>this.handleDragLeave(f)),_.addEventListener("drop",f=>this.handleDrop(f))}),this.shadow.getElementById("closeScreenEditor")?.addEventListener("click",this.closeScreenEditor.bind(this)),this.shadow.getElementById("cancelScreenEdit")?.addEventListener("click",this.closeScreenEditor.bind(this)),this.shadow.getElementById("saveScreenEdit")?.addEventListener("click",this.handleSaveScreen.bind(this)),this.shadow.querySelector(".modal-backdrop")?.addEventListener("click",this.closeScreenEditor.bind(this))}removeEventListeners(){}handleProfileChange(e){const r=e.target.value;this.settings.activeProfileId=r,kn(this.settings);const s=this.settings.profiles.find(c=>c.id===r);s&&(this.activeProfile=s,this.render(),this.dispatchProfileChanged())}handleAddProfile(){const e=prompt("Enter profile name:","My Profile");if(!e)return;const i=Qi.find(s=>s.activityType==="cycling")||Qi[0],r={id:`profile-${Date.now()}`,name:e,activityType:i.activityType,icon:i.icon,screens:JSON.parse(JSON.stringify(i.screens)),activeScreenIndex:0};this.settings.profiles.push(r),this.settings.activeProfileId=r.id,kn(this.settings),this.activeProfile=r,this.render(),this.dispatchProfileChanged()}handleResetProfile(){if(!confirm("Reset all screens to defaults? Your custom screens will be lost."))return;const e=Qi.find(i=>i.activityType===this.activeProfile.activityType)||Qi[0];this.activeProfile.screens=JSON.parse(JSON.stringify(e.screens)),this.activeProfile.activeScreenIndex=0,this.saveCurrentProfile(),this.render(),this.dispatchProfileChanged()}handleAddScreen(){const e=bd(`Screen ${this.activeProfile.screens.length+1}`,"📊");this.activeProfile.screens.push(e),this.saveCurrentProfile(),this.render(),this.dispatchProfileChanged(),this.openScreenEditor(e,!0)}handleEditScreen(e){const r=e.currentTarget.dataset.screenId,s=this.activeProfile.screens.find(c=>c.id===r);s&&this.openScreenEditor(s,!1)}handleDuplicateScreen(e){const r=e.currentTarget.dataset.screenId,s=this.activeProfile.screens.find(c=>c.id===r);if(s){const c={...JSON.parse(JSON.stringify(s)),id:Ga(),name:`${s.name} (Copy)`};this.activeProfile.screens.push(c),this.saveCurrentProfile(),this.render(),this.dispatchProfileChanged()}}handleDeleteScreen(e){const i=e.currentTarget;if(i.classList.contains("btn-disabled"))return;const r=i.dataset.screenId,s=this.activeProfile.screens.find(c=>c.id===r);if(s&&confirm(`Delete "${s.name}" screen?`)){const c=this.activeProfile.screens.findIndex(d=>d.id===r);this.activeProfile.screens.splice(c,1),this.activeProfile.activeScreenIndex>=this.activeProfile.screens.length&&(this.activeProfile.activeScreenIndex=Math.max(0,this.activeProfile.screens.length-1)),this.saveCurrentProfile(),this.render(),this.dispatchProfileChanged()}}handleDragStart(e){const i=e.currentTarget;i.classList.add("screen-item--dragging"),this.draggedScreenId=i.dataset.screenId||null,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",this.draggedScreenId||""))}handleDragEnd(e){e.currentTarget.classList.remove("screen-item--dragging"),this.draggedScreenId=null,this.shadow.querySelectorAll(".screen-item--drag-over").forEach(r=>{r.classList.remove("screen-item--drag-over")})}handleDragOver(e){e.preventDefault();const i=e.currentTarget;i.dataset.screenId!==this.draggedScreenId&&i.classList.add("screen-item--drag-over")}handleDragLeave(e){e.currentTarget.classList.remove("screen-item--drag-over")}handleDrop(e){e.preventDefault();const i=e.currentTarget;i.classList.remove("screen-item--drag-over");const r=this.draggedScreenId,s=i.dataset.screenId;if(r&&s&&r!==s){const c=this.activeProfile.screens,d=c.findIndex(h=>h.id===r),u=c.findIndex(h=>h.id===s);if(d!==-1&&u!==-1){const[h]=c.splice(d,1);c.splice(u,0,h),this.activeProfile.activeScreenIndex===d?this.activeProfile.activeScreenIndex=u:this.activeProfile.activeScreenIndex>d&&this.activeProfile.activeScreenIndex<=u?this.activeProfile.activeScreenIndex--:this.activeProfile.activeScreenIndex<d&&this.activeProfile.activeScreenIndex>=u&&this.activeProfile.activeScreenIndex++,this.saveCurrentProfile(),this.render(),this.dispatchProfileChanged()}}}openScreenEditor(e,i){this.editingScreen=e;const r=this.shadow.getElementById("screenEditorModal"),s=this.shadow.getElementById("screenEditorTitle"),c=this.shadow.getElementById("screenEditor");r&&s&&c&&(s.textContent=i?"New Screen":`Edit: ${e.name}`,c.setScreen(e),r.style.display="block")}closeScreenEditor(){const e=this.shadow.getElementById("screenEditorModal");e&&(e.style.display="none"),this.editingScreen=null}handleSaveScreen(){const i=this.shadow.getElementById("screenEditor")?.getScreen();if(i&&this.editingScreen){const r=this.activeProfile.screens.findIndex(s=>s.id===this.editingScreen.id);if(r!==-1)this.activeProfile.screens[r]=i;else{const s=this.activeProfile.screens.findIndex(c=>c.id===i.id);s!==-1&&(this.activeProfile.screens[s]=i)}this.saveCurrentProfile(),this.closeScreenEditor(),this.render(),this.dispatchProfileChanged()}}saveCurrentProfile(){const e=this.settings.profiles.findIndex(i=>i.id===this.activeProfile.id);e!==-1&&(this.settings.profiles[e]=this.activeProfile,kn(this.settings))}dispatchProfileChanged(){const e=new CustomEvent("profile-changed",{detail:{profile:this.activeProfile},bubbles:!0,composed:!0});this.dispatchEvent(e),document.dispatchEvent(new CustomEvent("data-fields-profile-changed",{detail:{profile:this.activeProfile}}))}}customElements.get("bpt-profile-settings")||customElements.define("bpt-profile-settings",Ph);function Mh(){console.log("[DataFieldComponents] Components registered")}const Ih="BikeTrackerDB",Ah=4,kt="activeWorkout",Tt="completedWorkouts",Lt="rawDebugData";let eo=null;async function st(){return eo||new Promise((n,e)=>{const i=indexedDB.open(Ih,Ah);i.onerror=()=>{console.error("Failed to open IndexedDB:",i.error),e(i.error)},i.onsuccess=()=>{eo=i.result,n(eo)},i.onupgradeneeded=r=>{const s=r.target.result;if(s.objectStoreNames.contains(kt)||s.createObjectStore(kt,{keyPath:"id"}),s.objectStoreNames.contains(Tt)||s.createObjectStore(Tt,{keyPath:"id"}).createIndex("startTime","startTime",{unique:!1}),!s.objectStoreNames.contains(Lt)){const c=s.createObjectStore(Lt,{keyPath:"id",autoIncrement:!0});c.createIndex("timestamp","timestamp",{unique:!1}),c.createIndex("sensor","sensor",{unique:!1})}}})}async function dc(n,e){try{const i=await st(),r={timestamp:Date.now(),sensor:n,data:e};return new Promise((s,c)=>{const h=i.transaction([Lt],"readwrite").objectStore(Lt).add(r);h.onsuccess=()=>s(),h.onerror=()=>c(h.error)})}catch(i){console.warn("Could not save debug log:",i)}}async function Ar(){try{const n=await st();return new Promise((e,i)=>{const d=n.transaction([Lt],"readonly").objectStore(Lt).index("timestamp").getAll();d.onsuccess=()=>e(d.result||[]),d.onerror=()=>i(d.error)})}catch(n){return console.warn("Could not load debug logs:",n),[]}}async function uc(){try{const n=await st();return new Promise((e,i)=>{const c=n.transaction([Lt],"readwrite").objectStore(Lt).clear();c.onsuccess=()=>e(),c.onerror=()=>i(c.error)})}catch(n){console.warn("Could not clear debug logs:",n)}}async function Xr(n,e){try{const i=await st(),r={id:"current",startTime:e??Date.now(),lastUpdated:Date.now(),heartrate:n.heartrate,power:n.power,cadence:n.cadence,speed:n.speed,distance:n.distance,altitude:n.altitude,gps:n.gps,treadmill:n.treadmill||[],laps:n.laps||[]};return new Promise((s,c)=>{const h=i.transaction([kt],"readwrite").objectStore(kt).put(r);h.onsuccess=()=>s(),h.onerror=()=>c(h.error)})}catch(i){console.warn("Could not save active workout:",i)}}async function Mo(){try{const n=await st();return new Promise((e,i)=>{const c=n.transaction([kt],"readwrite").objectStore(kt).delete("current");c.onsuccess=()=>e(),c.onerror=()=>i(c.error)})}catch(n){console.warn("Could not clear active workout:",n)}}async function Io(){try{const n=await st();return new Promise((e,i)=>{const c=n.transaction([kt],"readonly").objectStore(kt).get("current");c.onsuccess=()=>{if(c.result){const d=c.result;d.treadmill||(d.treadmill=[]),d.laps||(d.laps=[]),e(d)}else e(null)},c.onerror=()=>i(c.error)})}catch(n){return console.warn("Could not load active workout:",n),null}}async function hc(n,e,i){const r=`workout_${e}`;try{const s=await st(),c={id:r,startTime:e,lastUpdated:i,isCompleted:!0,measurements:{...n},synced:!1};return new Promise((d,u)=>{const _=s.transaction([Tt],"readwrite").objectStore(Tt).put(c);_.onsuccess=()=>d(r),_.onerror=()=>u(_.error)})}catch(s){throw console.error("Failed to save completed workout:",s),s}}async function mc(){try{const n=await st();return new Promise((e,i)=>{const d=n.transaction([Tt],"readonly").objectStore(Tt).index("startTime").getAll();d.onsuccess=()=>{e((d.result||[]).reverse())},d.onerror=()=>i(d.error)})}catch(n){return console.warn("Could not load workout history:",n),[]}}let Tn=null,pt=null;const pc=(n,e,i)=>{pt={measurements:n,startTime:e},Tn||(Tn=setTimeout(async()=>{pt&&(await Xr(pt.measurements,pt.startTime),pt=null),Tn=null},2e3))},yo=async()=>{Tn&&(clearTimeout(Tn),Tn=null),pt&&(await Xr(pt.measurements,pt.startTime),pt=null)},yi=()=>typeof window<"u"&&"indexedDB"in window,fc=async()=>{await yo();const n=await Io();return n?(await hc({heartrate:n.heartrate,power:n.power,cadence:n.cadence,speed:n.speed,distance:n.distance,altitude:n.altitude,gps:n.gps,treadmill:n.treadmill,laps:n.laps},n.startTime,n.lastUpdated),await Mo(),`workout_${n.startTime}`):null},gc=async()=>!!await Io(),Qr=mc,vc=async n=>{const e=await st();return new Promise((i,r)=>{const c=e.transaction(Tt,"readwrite").objectStore(Tt),d=c.get(n);d.onsuccess=()=>{const u=d.result;u?(u.synced=!0,u.syncedTime=Date.now(),c.put(u),i()):r(new Error("Workout not found"))},d.onerror=()=>r(d.error)})},Dh=Object.freeze(Object.defineProperty({__proto__:null,archiveWorkout:fc,clearActiveWorkout:Mo,clearDebugLogs:uc,flushPendingSave:yo,getCompletedWorkouts:Qr,getDebugLogs:Ar,getWorkoutHistory:mc,hasRecoverableWorkout:gc,isIndexedDBSupported:yi,loadActiveWorkout:Io,markWorkoutSynced:vc,openDatabase:st,saveActiveWorkout:Xr,saveCompletedWorkout:hc,saveDebugLog:dc,throttledSave:pc},Symbol.toStringTag,{value:"Module"}));function zh(n,e,i,r){const c=n*Math.PI/180,d=i*Math.PI/180,u=(i-n)*Math.PI/180,h=(r-e)*Math.PI/180,p=Math.sin(u/2)*Math.sin(u/2)+Math.cos(c)*Math.cos(d)*Math.sin(h/2)*Math.sin(h/2);return 6371e3*(2*Math.atan2(Math.sqrt(p),Math.sqrt(1-p)))}const Zt={heartrate:{min:0,max:300},power:{min:0,max:3e3},cadence:{min:0,max:300},speed:{min:0,max:150},distance:{min:0,max:1e6},altitude:{min:-500,max:9e3}},Dr=(n,e)=>e.some(i=>n instanceof i);let sa,aa;function Bh(){return sa||(sa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $h(){return aa||(aa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zr=new WeakMap,fr=new WeakMap,Ao=new WeakMap;function Oh(n){const e=new Promise((i,r)=>{const s=()=>{n.removeEventListener("success",c),n.removeEventListener("error",d)},c=()=>{i(Yt(n.result)),s()},d=()=>{r(n.error),s()};n.addEventListener("success",c),n.addEventListener("error",d)});return Ao.set(e,n),e}function Nh(n){if(zr.has(n))return;const e=new Promise((i,r)=>{const s=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",d),n.removeEventListener("abort",d)},c=()=>{i(),s()},d=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",c),n.addEventListener("error",d),n.addEventListener("abort",d)});zr.set(n,e)}let Br={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return zr.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Yt(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yc(n){Br=n(Br)}function Fh(n){return $h().includes(n)?function(...e){return n.apply($r(this),e),Yt(this.request)}:function(...e){return Yt(n.apply($r(this),e))}}function Rh(n){return typeof n=="function"?Fh(n):(n instanceof IDBTransaction&&Nh(n),Dr(n,Bh())?new Proxy(n,Br):n)}function Yt(n){if(n instanceof IDBRequest)return Oh(n);if(fr.has(n))return fr.get(n);const e=Rh(n);return e!==n&&(fr.set(n,e),Ao.set(e,n)),e}const $r=n=>Ao.get(n);function Hh(n,e,{blocked:i,upgrade:r,blocking:s,terminated:c}={}){const d=indexedDB.open(n,e),u=Yt(d);return r&&d.addEventListener("upgradeneeded",h=>{r(Yt(d.result),h.oldVersion,h.newVersion,Yt(d.transaction),h)}),i&&d.addEventListener("blocked",h=>i(h.oldVersion,h.newVersion,h)),u.then(h=>{c&&h.addEventListener("close",()=>c()),s&&h.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),u}const Zh=["get","getKey","getAll","getAllKeys","count"],qh=["put","add","delete","clear"],gr=new Map;function ca(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gr.get(e))return gr.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,s=qh.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zh.includes(i)))return;const c=async function(d,...u){const h=this.transaction(d,s?"readwrite":"readonly");let p=h.store;return r&&(p=p.index(u.shift())),(await Promise.all([p[i](...u),s&&h.done]))[0]};return gr.set(e,c),c}yc(n=>({...n,get:(e,i,r)=>ca(e,i)||n.get(e,i,r),has:(e,i)=>!!ca(e,i)||n.has(e,i)}));const Wh=["continue","continuePrimaryKey","advance"],la={},Or=new WeakMap,_c=new WeakMap,Vh={get(n,e){if(!Wh.includes(e))return n[e];let i=la[e];return i||(i=la[e]=function(...r){Or.set(this,_c.get(this)[e](...r))}),i}};async function*Uh(...n){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...n)),!e)return;e=e;const i=new Proxy(e,Vh);for(_c.set(i,e),Ao.set(i,$r(e));e;)yield i,e=await(Or.get(i)||e.continue()),Or.delete(i)}function da(n,e){return e===Symbol.asyncIterator&&Dr(n,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&Dr(n,[IDBIndex,IDBObjectStore])}yc(n=>({...n,get(e,i,r){return da(e,i)?Uh:n.get(e,i,r)},has(e,i){return da(e,i)||n.has(e,i)}}));const vr={weight:75,height:175,age:30,gender:"other",ftp:200,maxHeartrate:190,restingHeartrate:60,units:"metric",dateFormat:"ISO",clockFormat:"24h",energyMethod:"combined",gapThreshold:20,stalenessThreshold:5,powerZones:[{name:"Recovery",min:0,max:55,color:"#808080"},{name:"Endurance",min:55,max:75,color:"#2196f3"},{name:"Tempo",min:75,max:90,color:"#4caf50"},{name:"Threshold",min:90,max:105,color:"#ffeb3b"},{name:"VO2max",min:105,max:120,color:"#ff9800"},{name:"Anaerobic",min:120,max:150,color:"#f44336"},{name:"Neuromuscular",min:150,max:1e3,color:"#9c27b0"}],heartrateZones:[{name:"Recovery",min:0,max:60,color:"#808080"},{name:"Endurance",min:60,max:70,color:"#2196f3"},{name:"Tempo",min:70,max:80,color:"#4caf50"},{name:"Threshold",min:80,max:90,color:"#ff9800"},{name:"VO2max",min:90,max:100,color:"#f44336"}]};class jh{settings={...vr};listeners=[];db=null;initialized=!1;async initialize(){if(!this.initialized){try{this.db=await Hh("bpt-settings",1,{upgrade(i){i.createObjectStore("settings")}});const e=await this.db.get("settings","user");e&&(this.settings={...vr,...e})}catch(e){console.warn("Settings storage unavailable, using defaults/in-memory:",e)}this.initialized=!0,this.notifyListeners()}}get(e){return this.settings[e]}getAll(){return{...this.settings}}async set(e,i){this.settings[e]=i,await this.persist(),this.notifyListeners()}async setMultiple(e){this.settings={...this.settings,...e},await this.persist(),this.notifyListeners()}async reset(){this.settings={...vr},await this.persist(),this.notifyListeners()}onChange(e){return this.listeners.push(e),()=>{const i=this.listeners.indexOf(e);i!==-1&&this.listeners.splice(i,1)}}async persist(){if(this.db)try{await this.db.put("settings",this.settings,"user")}catch(e){console.error("Failed to save settings:",e)}}notifyListeners(){const e=this.getAll();for(const i of this.listeners)try{i(e)}catch(r){console.error("Settings listener error:",r)}}}const to=new jh;function Gh(n,e){return n<=0||e<=0?0:n*e/1e3}function Yh(n,e,i){if(n<=0||e<=0||i<=0)return 0;const r=30,s=i/60,c=r*.2017,d=e*.1988,u=n*.6309,h=(c+d+u-55.0969)/4.184;return Math.max(0,h*s)}class Kh{heartrate=[];power=[];cadence=[];speed=[];distance=[];altitude=[];energy=[];gps=[];treadmill=[];treadmillSpeed=[];laps=[];_persistenceEnabled;_startTime=null;_onChangeCallbacks=[];_lastEnergyTime=0;_lastPowerTime=0;_totalEnergy=0;constructor(e=!0){this._persistenceEnabled=e&&yi(),to.onChange(i=>{this.onSettingsChange(i)}),typeof window<"u"&&(window.addEventListener("beforeunload",()=>{yo()}),document.addEventListener("visibilitychange",()=>{document.hidden&&yo()}))}setStartTime(e){this._startTime=e}getStartTime(){return this._startTime}onChange(e){this._onChangeCallbacks.push(e)}offChange(e){const i=this._onChangeCallbacks.indexOf(e);i>-1&&this._onChangeCallbacks.splice(i,1)}get userWeight(){return to.get("weight")}get gapThreshold(){return to.get("gapThreshold")*1e3}onSettingsChange(e){}_updateEnergy(e,i,r){const s=to.get("energyMethod");if(s==="power"&&r!=="power"||s==="heartrate"&&r!=="heartrate")return;if(s==="combined")if(r==="heartrate"){if(e-this._lastPowerTime<this.gapThreshold)return}else r==="power"&&(this._lastPowerTime=e);if(this._lastEnergyTime===0||e-this._lastEnergyTime>this.gapThreshold){this._lastEnergyTime=e;return}const c=(e-this._lastEnergyTime)/1e3;if(c<=0)return;let d=0;r==="power"?d=Gh(i,c):d=Yh(i,this.userWeight,c),d>0&&(this._totalEnergy+=d,this.energy.push({timestamp:e,value:this._totalEnergy})),this._lastEnergyTime=e}_notifyChange(){for(const e of this._onChangeCallbacks)try{e(this)}catch(i){console.error("State change callback error:",i)}this._persistenceEnabled&&pc(this.toJSON(),this._startTime)}addHeartrate(e){const{min:i,max:r}=Zt.heartrate;if(e.value<=i||e.value>=r){console.warn(`Invalid heartrate value: ${e.value}`);return}this.heartrate.push({timestamp:e.timestamp,value:e.value}),(this._lastPowerTime===0||e.timestamp-this._lastPowerTime>5e3)&&this._updateEnergy(e.timestamp,e.value,"heartrate"),this._notifyChange()}addPower(e){const{min:i,max:r}=Zt.power;if(e.value<i||e.value>=r){console.warn(`Invalid power value: ${e.value}`);return}this.power.push({timestamp:e.timestamp,value:e.value}),this._lastPowerTime=e.timestamp,this._updateEnergy(e.timestamp,e.value,"power"),this._notifyChange()}addCadence(e){const{min:i,max:r}=Zt.cadence;if(e.value<i||e.value>=r){console.warn(`Invalid cadence value: ${e.value}`);return}this.cadence.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addSpeed(e){const{min:i,max:r}=Zt.speed;if(e.value<i||e.value>=r){console.warn(`Invalid speed value: ${e.value}`);return}this.speed.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addDistance(e){const{min:i,max:r}=Zt.distance;if(e.value<i||e.value>=r){console.warn(`Invalid distance value: ${e.value}`);return}this.distance.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addAltitude(e){const{min:i,max:r}=Zt.altitude;if(e.value<i||e.value>=r){console.warn(`Invalid altitude value: ${e.value}`);return}this.altitude.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addTreadmillSpeed(e){const{min:i,max:r}=Zt.speed;if(e.value<i||e.value>=r){console.warn(`Invalid treadmill speed value: ${e.value}`);return}this.treadmillSpeed.push({timestamp:e.timestamp,value:e.value}),this._notifyChange()}addGps(e){if(this.gps.length>0){const i=this.gps[this.gps.length-1],r=zh(i.lat,i.lon,e.lat,e.lon);let s=0;this.distance.length>0&&(s=this.distance[this.distance.length-1].value),this.addDistance({timestamp:e.timestamp,value:s+r})}else this.distance.length===0&&this.addDistance({timestamp:e.timestamp,value:0});e.speed!==null&&this.addSpeed({timestamp:e.timestamp,value:e.speed*3.6}),e.altitude!==null&&this.addAltitude({timestamp:e.timestamp,value:e.altitude}),this.gps.push(e),this._notifyChange()}add(e,i){switch(e){case"heartrate":this.addHeartrate(i);break;case"power":this.addPower(i);break;case"cadence":this.addCadence(i);break;case"speed":this.addSpeed(i);break;case"distance":this.addDistance(i);break;case"altitude":this.addAltitude(i);break;case"treadmillSpeed":this.addTreadmillSpeed(i);break;default:throw new Error(`Unknown measurement type: ${e}`)}}async clear(e=!0){this.heartrate=[],this.power=[],this.cadence=[],this.speed=[],this.distance=[],this.altitude=[],this.treadmillSpeed=[],this.laps=[],this._startTime=null,e&&this._persistenceEnabled&&await Mo(),this._notifyChange()}addLap(e){const i=Date.now(),r=this.laps.length+1,s={timestamp:i,number:r,elapsedMs:e?i-e:void 0};return this.laps.push(s),this._notifyChange(),s}getLapCount(){return this.laps.length}toJSON(){return{heartrate:[...this.heartrate],power:[...this.power],cadence:[...this.cadence],speed:[...this.speed],distance:[...this.distance],altitude:[...this.altitude],treadmillSpeed:[...this.treadmillSpeed],gps:[...this.gps],laps:[...this.laps]}}restore(e,i){this.heartrate=[...e.heartrate||[]],this.power=[...e.power||[]],this.cadence=[...e.cadence||[]],this.speed=[...e.speed||[]],this.distance=[...e.distance||[]],this.altitude=[...e.altitude||[]],this.treadmillSpeed=[...e.treadmillSpeed||[]],this.laps=[...e.laps||[]],this._startTime=i;for(const r of this._onChangeCallbacks)try{r(this)}catch(s){console.error("State change callback error:",s)}}setPersistenceEnabled(e){this._persistenceEnabled=e&&yi()}hasData(){return this.heartrate.length>0||this.power.length>0||this.cadence.length>0}getCounts(){return{heartrate:this.heartrate.length,power:this.power.length,cadence:this.cadence.length,speed:this.speed.length,distance:this.distance.length,altitude:this.altitude.length,gps:this.gps.length,treadmillSpeed:this.treadmillSpeed.length,energy:this.energy.length}}addTreadmillData(e){if(this.treadmill.push(e),e.speed!=null){const i={timestamp:e.timestamp,value:e.speed};this.addTreadmillSpeed(i),this.addSpeed(i)}e.speed==null&&this._notifyChange()}}const Jh=()=>({measurementsState:new Kh,connectionsState:{power:{isConnected:!1,disconnect:null},heartrate:{isConnected:!1,disconnect:null},cadence:{isConnected:!1,disconnect:null},speed:{isConnected:!1,disconnect:null},distance:{isConnected:!1,disconnect:null},altitude:{isConnected:!1,disconnect:null},gps:{isConnected:!1,disconnect:null}},timeState:{running:!1,startTime:null,endTime:null}});function Xh({measurementsState:n,connectionsState:e}){typeof window<"u"&&(window.bike=n,window.connectionsState=e)}var Mn;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Mn||(Mn={}));class yr extends Error{constructor(e,i,r){super(e),this.message=e,this.code=i,this.data=r}}const Qh=n=>{var e,i;return n?.androidBridge?"android":!((i=(e=n?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||i===void 0)&&i.bridge?"ios":"web"},em=n=>{const e=n.CapacitorCustomPlatform||null,i=n.Capacitor||{},r=i.Plugins=i.Plugins||{},s=()=>e!==null?e.name:Qh(n),c=()=>s()!=="web",d=f=>{const v=p.get(f);return!!(v?.platforms.has(s())||u(f))},u=f=>{var v;return(v=i.PluginHeaders)===null||v===void 0?void 0:v.find(y=>y.name===f)},h=f=>n.console.error(f),p=new Map,_=(f,v={})=>{const y=p.get(f);if(y)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),y.proxy;const b=s(),S=u(f);let E;const P=async()=>(!E&&b in v?E=typeof v[b]=="function"?E=await v[b]():E=v[b]:e!==null&&!E&&"web"in v&&(E=typeof v.web=="function"?E=await v.web():E=v.web),E),T=(F,q)=>{var te,Y;if(S){const W=S?.methods.find(re=>q===re.name);if(W)return W.rtype==="promise"?re=>i.nativePromise(f,q.toString(),re):(re,ae)=>i.nativeCallback(f,q.toString(),re,ae);if(F)return(te=F[q])===null||te===void 0?void 0:te.bind(F)}else{if(F)return(Y=F[q])===null||Y===void 0?void 0:Y.bind(F);throw new yr(`"${f}" plugin is not implemented on ${b}`,Mn.Unimplemented)}},D=F=>{let q;const te=(...Y)=>{const W=P().then(re=>{const ae=T(re,F);if(ae){const Ke=ae(...Y);return q=Ke?.remove,Ke}else throw new yr(`"${f}.${F}()" is not implemented on ${b}`,Mn.Unimplemented)});return F==="addListener"&&(W.remove=async()=>q()),W};return te.toString=()=>`${F.toString()}() { [capacitor code] }`,Object.defineProperty(te,"name",{value:F,writable:!1,configurable:!1}),te},z=D("addListener"),$=D("removeListener"),A=(F,q)=>{const te=z({eventName:F},q),Y=async()=>{const re=await te;$({eventName:F,callbackId:re},q)},W=new Promise(re=>te.then(()=>re({remove:Y})));return W.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Y()},W},O=new Proxy({},{get(F,q){switch(q){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return S?A:z;case"removeListener":return $;default:return D(q)}}});return r[f]=O,p.set(f,{name:f,proxy:O,platforms:new Set([...Object.keys(v),...S?[b]:[]])}),O};return i.convertFileSrc||(i.convertFileSrc=f=>f),i.getPlatform=s,i.handleError=h,i.isNativePlatform=c,i.isPluginAvailable=d,i.registerPlugin=_,i.Exception=yr,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i},tm=n=>n.Capacitor=em(n),ke=tm(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),On=ke.registerPlugin;class es{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,i){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(i);const c=this.windowListeners[e];c&&!c.registered&&this.addWindowListener(c),r&&this.sendRetainedArgumentsForEvent(e);const d=async()=>this.removeListener(e,i);return Promise.resolve({remove:d})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,i,r){const s=this.listeners[e];if(!s){if(r){let c=this.retainedEventArguments[e];c||(c=[]),c.push(i),this.retainedEventArguments[e]=c}return}s.forEach(c=>c(i))}hasListeners(e){var i;return!!(!((i=this.listeners[e])===null||i===void 0)&&i.length)}registerWindowListener(e,i){this.windowListeners[i]={registered:!1,windowEventName:e,pluginEventName:i,handler:r=>{this.notifyListeners(i,r)}}}unimplemented(e="not implemented"){return new ke.Exception(e,Mn.Unimplemented)}unavailable(e="not available"){return new ke.Exception(e,Mn.Unavailable)}async removeListener(e,i){const r=this.listeners[e];if(!r)return;const s=r.indexOf(i);this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const i=this.retainedEventArguments[e];i&&(delete this.retainedEventArguments[e],i.forEach(r=>{this.notifyListeners(e,r)}))}}const ua=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),ha=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class nm extends es{async getCookies(){const e=document.cookie,i={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[s,c]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=ha(s).trim(),c=ha(c).trim(),i[s]=c}),i}async setCookie(e){try{const i=ua(e.key),r=ua(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,c=(e.path||"/").replace("path=",""),d=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${i}=${r||""}${s}; path=${c}; ${d};`}catch(i){return Promise.reject(i)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(i){return Promise.reject(i)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const i of e)document.cookie=i.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}On("CapacitorCookies",{web:()=>new nm});const im=async n=>new Promise((e,i)=>{const r=new FileReader;r.onload=()=>{const s=r.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},r.onerror=s=>i(s),r.readAsDataURL(n)}),om=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,c,d)=>(s[c]=n[e[d]],s),{})},rm=(n,e=!0)=>n?Object.entries(n).reduce((r,s)=>{const[c,d]=s;let u,h;return Array.isArray(d)?(h="",d.forEach(p=>{u=e?encodeURIComponent(p):p,h+=`${c}=${u}&`}),h.slice(0,-1)):(u=e?encodeURIComponent(d):d,h=`${c}=${u}`),`${r}&${h}`},"").substr(1):null,sm=(n,e={})=>{const i=Object.assign({method:n.method||"GET",headers:n.headers},e),s=om(n.headers)["content-type"]||"";if(typeof n.data=="string")i.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const c=new URLSearchParams;for(const[d,u]of Object.entries(n.data||{}))c.set(d,u);i.body=c.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const c=new FormData;if(n.data instanceof FormData)n.data.forEach((u,h)=>{c.append(h,u)});else for(const u of Object.keys(n.data))c.append(u,n.data[u]);i.body=c;const d=new Headers(i.headers);d.delete("content-type"),i.headers=d}else(s.includes("application/json")||typeof n.data=="object")&&(i.body=JSON.stringify(n.data));return i};class am extends es{async request(e){const i=sm(e,e.webFetchExtra),r=rm(e.params,e.shouldEncodeUrlParams),s=r?`${e.url}?${r}`:e.url,c=await fetch(s,i),d=c.headers.get("content-type")||"";let{responseType:u="text"}=c.ok?e:{};d.includes("application/json")&&(u="json");let h,p;switch(u){case"arraybuffer":case"blob":p=await c.blob(),h=await im(p);break;case"json":h=await c.json();break;default:h=await c.text()}const _={};return c.headers.forEach((f,v)=>{_[v]=f}),{data:h,headers:_,status:c.status,url:c.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}On("CapacitorHttp",{web:()=>new am});var ma;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(ma||(ma={}));var pa;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(pa||(pa={}));class cm extends es{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}On("SystemBars",{web:()=>new cm});const lm="modulepreload",dm=function(n){return"/"+n},fa={},Et=function(e,i,r){let s=Promise.resolve();if(i&&i.length>0){let h=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),u=d?.nonce||d?.getAttribute("nonce");s=h(i.map(p=>{if(p=dm(p),p in fa)return;fa[p]=!0;const _=p.endsWith(".css"),f=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${f}`))return;const v=document.createElement("link");if(v.rel=_?"stylesheet":lm,_||(v.as="script"),v.crossOrigin="",v.href=p,u&&v.setAttribute("nonce",u),document.head.appendChild(v),_)return new Promise((y,b)=>{v.addEventListener("load",y),v.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(d){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=d,window.dispatchEvent(u),!u.defaultPrevented)throw d}return s.then(d=>{for(const u of d||[])u.status==="rejected"&&c(u.reason);return e().catch(c)})},ga=On("App",{web:()=>Et(()=>import("./web-peuiGedN.js"),[]).then(n=>new n.AppWeb)});class um{views=new Map;routes=[];currentViewId=null;container;isNative;constructor(e){this.container=e,this.isNative=ke.isNativePlatform(),window.addEventListener("popstate",()=>{this.handleLocationChange()}),this.isNative&&window.addEventListener("hashchange",()=>{this.handleLocationChange()}),this.isNative&&ga.addListener("backButton",({canGoBack:i})=>{i?window.history.back():ga.exitApp()})}registerView(e){this.views.set(e.id,e);let i=document.getElementById(`page-${e.id}`);i||(i=document.createElement("div"),i.id=`page-${e.id}`,i.className="page-view",i.style.display="none",this.container.appendChild(i)),e.init(i)}addRoute(e,i){this.routes.push({path:e,viewId:i})}navigate(e,i=!1){this.isNative?i?window.location.replace("#"+e):window.location.hash=e:(i?window.history.replaceState({},"",e):window.history.pushState({},"",e),this.handleLocationChange())}start(){this.isNative&&(window.location.hash||(window.location.hash="/")),this.handleLocationChange()}back(){window.history.back()}handleLocationChange(){let e;if(this.isNative){const r=window.location.hash;e=r?r.slice(1):"/",(!e||e==="")&&(e="/")}else e=window.location.pathname,(e.endsWith("/index.html")||e.endsWith(".html"))&&(e="/");let i=this.routes.find(r=>r.path===e);i||(i=this.routes.find(r=>r.path==="/")||this.routes[0]),i&&this.switchView(i.viewId)}switchView(e){if(this.currentViewId===e)return;if(this.currentViewId){const r=this.views.get(this.currentViewId);if(r){r.onLeave();const s=document.getElementById(`page-${this.currentViewId}`);s&&(s.style.display="none")}}const i=this.views.get(e);if(i){const r=document.getElementById(`page-${e}`);r&&(r.style.display=""),i.onEnter(),this.currentViewId=e,window.dispatchEvent(new CustomEvent("route-changed",{detail:{viewId:e}}))}}}class hm{id="dashboard";init(e){console.log("Dashboard View initialized")}onEnter(){console.log("Entered Dashboard View")}onLeave(){console.log("Left Dashboard View")}}const Nn="https://api.bikepowertracker.com",mm="super-secret-bike-tracker-key";async function Ei(n){try{const e=await n.json();return{status:n.status,message:e.error||e.message||"Unknown error",code:e.code,details:e.details}}catch{return{status:n.status,message:n.statusText||"Unknown error"}}}function Fn(n={}){const e={...n};return e["X-API-Key"]=mm,e}async function wc(){try{const n=await fetch(`${Nn}/health`,{headers:Fn()});return n.ok?(await n.json()).database==="connected":!1}catch{return!1}}async function pm({streamName:n,title:e,sport:i="cycling",userId:r}){const s=await fetch(`${Nn}/api/workouts`,{method:"POST",headers:Fn({"Content-Type":"application/json"}),body:JSON.stringify({streamName:n,title:e,sport:i,userId:r})});if(!s.ok){const c=await Ei(s);throw new Error(c.message)}return s.json()}async function Do({page:n=1,limit:e=20,status:i,userId:r,startDate:s,endDate:c,sport:d}={}){const u=new URLSearchParams;u.set("page",n.toString()),u.set("limit",e.toString()),i&&u.set("status",i),r&&u.set("userId",r),s&&u.set("startDate",s.toISOString()),c&&u.set("endDate",c.toISOString()),d&&u.set("sport",d);const h=await fetch(`${Nn}/api/workouts?${u}`,{headers:Fn()});if(!h.ok){const p=await Ei(h);throw new Error(p.message)}return h.json()}async function fm(n,e=!1){const i=new URLSearchParams;e&&i.set("includeTelemetry","true");const r=await fetch(`${Nn}/api/workouts/${n}?${i}`,{headers:Fn()});if(!r.ok){const s=await Ei(r);throw new Error(s.message)}return r.json()}async function gm(n,e=!0){const i=await fetch(`${Nn}/api/workouts/${n}/complete`,{method:"POST",headers:Fn({"Content-Type":"application/json"}),body:JSON.stringify({archiveTelemetry:e})});if(!i.ok){const r=await Ei(i);throw new Error(r.message)}return i.json()}async function vm(n){const e=await fetch(`${Nn}/api/workouts/${n}`,{method:"DELETE",headers:Fn()});if(!e.ok){const i=await Ei(e);throw new Error(i.message)}return e.json()}function Ie(n){if(!n)return"--";const e=Math.floor(n/3600),i=Math.floor(n%3600/60),r=n%60;return e>0?`${e}h ${i}m`:i>0?`${i}m ${r}s`:`${r}s`}function Ct(n){return n?new Date(n).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"--"}const ym="https://api.bikepowertracker.com",_m="super-secret-bike-tracker-key";async function wm(n){const e={"Content-Type":"application/json"};e["X-API-Key"]=_m;const i=await fetch(`${ym}/api/users/${n}/ftp-history`,{headers:e});if(!i.ok)throw new Error(`Failed to fetch FTP history: ${i.statusText}`);return i.json()}function V(n,e="polite"){const i=document.getElementById("srAnnouncements");i&&(i.setAttribute("aria-live",e),i.textContent=n,setTimeout(()=>{i.textContent=""},1e3))}const bc=[];function qt(n){bc.push(n)}function bm(n){const e=n.target;if(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable){n.key==="Escape"&&e.blur();return}for(const i of bc){const r=n.key.toLowerCase()===i.key.toLowerCase(),s=i.ctrl?n.ctrlKey||n.metaKey:!n.ctrlKey&&!n.metaKey,c=i.shift?n.shiftKey:!n.shiftKey,d=i.alt?n.altKey:!n.altKey;if(r&&s&&c&&d){n.preventDefault(),i.action();return}}}function xm(){qt({key:" ",description:"Start/pause/resume workout (context-aware)",action:()=>{const e=document.getElementById("startButton"),i=document.getElementById("pauseButton"),r=document.getElementById("resumeButton");e&&e.style.display!=="none"?e.click():i&&i.style.display!=="none"?i.click():r&&r.style.display!=="none"&&r.click()}}),qt({key:"Escape",description:"Close modal or menu",action:()=>{const e=document.querySelectorAll('.stream-modal[style*="display: block"], .stream-modal:not([style*="display: none"])');for(const r of e)if(r.style.display!=="none"){const s=r.querySelector(".close-button");if(s){s.click(),V("Dialog closed");return}}const i=document.querySelector("details[open]");i&&(i.removeAttribute("open"),V("Menu closed"))}}),qt({key:"m",description:"Toggle menu",action:()=>{const e=document.querySelector("header details");if(e)if(e.hasAttribute("open"))e.removeAttribute("open"),V("Menu closed");else{e.setAttribute("open",""),V("Menu opened");const r=e.querySelector("#controls button");r&&r.focus()}}}),qt({key:"s",description:"Open settings",action:()=>{const e=document.getElementById("settingsButton");e&&(e.click(),V("Settings opened"))}}),qt({key:"h",description:"Open workout history",action:()=>{const e=window.router;if(e)e.navigate("/history"),V("Workout history opened");else{const i=document.getElementById("workoutHistoryButton");i&&(i.click(),V("Workout history opened"))}}}),qt({key:"e",description:"Export workout data",action:()=>{const e=document.getElementById("exportData");e&&e.click()}}),qt({key:"l",description:"Mark lap",action:()=>{const e=document.getElementById("lapButton");e&&e.click()}}),document.addEventListener("keydown",bm);const n=document.querySelector("header summary");n&&n.setAttribute("aria-keyshortcuts","M"),console.log("Keyboard navigation initialized")}function Sm(n){const e=n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(e.length===0)return;const i=e[0],r=e[e.length-1];i.focus(),n.addEventListener("keydown",s=>{s.key==="Tab"&&(s.shiftKey?document.activeElement===i&&(s.preventDefault(),r.focus()):document.activeElement===r&&(s.preventDefault(),i.focus()))})}function _o(n){const e=document.getElementById("startButton"),i=document.getElementById("pauseButton"),r=document.getElementById("resumeButton"),s=document.getElementById("stopButton");e&&e.setAttribute("aria-label","Start workout"),i&&i.setAttribute("aria-label","Pause workout"),r&&r.setAttribute("aria-label","Resume workout"),s&&s.setAttribute("aria-label","Stop and save workout");const c=document.getElementById("workoutControls");c&&c.setAttribute("data-workout-state",n)}function Em(n){const e=document.createElement("div");e.className="custom-modal",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-labelledby","modal-title");const i=n.icon?`${n.icon} ${n.title}`:n.title;e.innerHTML=`
        <div class="custom-modal-overlay"></div>
        <div class="custom-modal-container">
            <div class="custom-modal-header">
                <h2 id="modal-title">${i}</h2>
                <button class="modal-close-btn" aria-label="Close dialog">&times;</button>
            </div>
            <div class="custom-modal-body"></div>
            <div class="custom-modal-footer"></div>
        </div>
    `;const r=e.querySelector(".custom-modal-body");typeof n.content=="string"?r.innerHTML=n.content:r.appendChild(n.content);const s=e.querySelector(".custom-modal-footer");return n.buttons.forEach((c,d)=>{const u=document.createElement("button");u.textContent=c.text,u.className=`modal-btn modal-btn-${c.variant}`,u.addEventListener("click",c.onClick),(c.variant==="primary"||d===0&&!n.buttons.some(h=>h.variant==="primary"))&&u.setAttribute("data-autofocus","true"),s.appendChild(u)}),e}function km(n){const e=n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=e[0],r=e[e.length-1],s=c=>{c.key==="Tab"&&(c.shiftKey?document.activeElement===i&&(c.preventDefault(),r?.focus()):document.activeElement===r&&(c.preventDefault(),i?.focus()))};return n.addEventListener("keydown",s),()=>n.removeEventListener("keydown",s)}function ki(n){const e=Em(n),i=document.activeElement;document.body.appendChild(e),e.offsetHeight,e.classList.add("modal-visible");const r=km(e),s=e.querySelector("[data-autofocus]");setTimeout(()=>{s?.focus()},50);const c=()=>{e.classList.remove("modal-visible"),setTimeout(()=>{e.remove(),r(),i?.focus(),n.onClose?.()},200)};e.querySelector(".modal-close-btn")?.addEventListener("click",c),n.closeOnOverlay!==!1&&e.querySelector(".custom-modal-overlay")?.addEventListener("click",c);const u=p=>{p.key==="Escape"&&(p.preventDefault(),c())};document.addEventListener("keydown",u);const h=n.onClose;return n.onClose=()=>{document.removeEventListener("keydown",u),h?.()},V(`${n.title} dialog opened`,"polite"),c}function xc(n,e,i={}){return new Promise(r=>{const{confirmText:s="Confirm",cancelText:c="Cancel",confirmVariant:d="primary",icon:u}=i;let h=null;h=ki({title:n,content:`<p class="modal-message">${e}</p>`,icon:u,buttons:[{text:c,variant:"secondary",onClick:()=>{h?.(),r(!1)}},{text:s,variant:d,onClick:()=>{h?.(),r(!0)}}],onClose:()=>r(!1)})})}function ts(n,e,i,r){const s=v=>{if(v.length===0)return{avg:null,max:null,count:0};const y=v.map(S=>S.value),b=y.reduce((S,E)=>S+E,0);return{avg:Math.round(b/y.length),max:Math.max(...y),count:y.length}},c=i.power.map(v=>v.value),d=[],u=[1,5,10,30,60,300,1200,3600],h=v=>{if(c.length<v)return 0;let y=0;for(let S=0;S<v;S++)y+=c[S];let b=y/v;for(let S=v;S<c.length;S++)y=y-c[S-v]+c[S],y/v>b&&(b=y/v);return Math.round(b)};for(const v of u)c.length>=v&&d.push({duration:v,watts:h(v)});let p=0,_=0;try{const v=localStorage.getItem("bpt-user-profile");if(v&&c.length>0){const b=JSON.parse(v).ftp||200,S=[];let E=0;for(let P=0;P<c.length;P++)E+=c[P],P>=30&&(E-=c[P-30]),P>=29&&S.push(E/30);if(S.length>0){const P=S.map($=>Math.pow($,4)),T=P.reduce(($,A)=>$+A,0)/P.length,D=Math.pow(T,.25);_=D/b,p=(e-n)/1e3*D*_/(b*3600)*100}}}catch(v){console.warn("Error calculating TSS",v)}const f={duration:e-n,startTime:n,endTime:e,power:s(i.power),heartrate:s(i.heartrate),cadence:s(i.cadence),powerCurve:d.length>0?d:void 0,trainingLoad:p>0?Math.round(p):void 0,intensityFactor:_>0?parseFloat(_.toFixed(2)):void 0};if(r){const v=r.getPowerZoneDistribution(),y=r.getHrZoneDistribution();v.totalTimeMs>0&&(f.powerZoneDistribution=v),y.totalTimeMs>0&&(f.hrZoneDistribution=y)}return f}function Tm(n){const e=Math.floor(n/1e3),i=Math.floor(e/3600),r=Math.floor(e%3600/60),s=e%60,c=[];return i>0&&c.push(`${i}h`),r>0&&c.push(`${r}m`),(s>0||c.length===0)&&c.push(`${s}s`),c.join(" ")}function Lm(n){const e=Math.floor(n/60),i=n%60;return`${e}:${String(i).padStart(2,"0")}`}const Cm={1:"#3b82f6",2:"#22c55e",3:"#eab308",4:"#f97316",5:"#ef4444",6:"#a855f7",7:"#ec4899"};function va(n,e){const i=document.createElement("div");if(i.className="zone-distribution",n.zones.filter(c=>c.timeInZoneMs>0).length===0)return i;const s=Math.max(...n.zones.map(c=>c.timeInZoneMs));return i.innerHTML=`
        <h4 class="zone-distribution-title">${e}</h4>
        <div class="zone-chart">
            ${n.zones.map(c=>{const d=s>0?c.timeInZoneMs/s*100:0,u=Math.round(c.timeInZoneMs/1e3),h=Cm[c.zone]||"#888",p=Lm(u);return`
                    <div class="zone-bar-row" title="${c.name}: ${p}">
                        <span class="zone-bar-label">Z${c.zone}</span>
                        <div class="zone-bar-container">
                            <div class="zone-bar" style="width: ${Math.max(d,2)}%; background-color: ${h};" aria-valuenow="${u}" aria-label="${c.name}"></div>
                        </div>
                        <span class="zone-bar-time">${p}</span>
                    </div>
                `}).join("")}
        </div>
    `,i}function Pm(n,e=[]){const i=document.createElement("div");i.className="workout-summary";const r=(c,d)=>c!==null?`${c}${d}`:"--";let s="";if(e.length>0&&(s=`
            <div class="summary-records" style="background: rgba(255, 215, 0, 0.1); border: 1px solid var(--color-accent); border-radius: 8px; padding: 12px; margin-bottom: 16px;">
                <h4 style="margin: 0 0 8px 0; color: var(--color-accent); display: flex; align-items: center; gap: 8px;">
                    🏆 New Personal Records!
                </h4>
                <ul style="margin: 0; padding-left: 20px; list-style-type: none;">
                    ${e.map(c=>`<li style="margin-bottom: 4px;">🆕 ${c}</li>`).join("")}
                </ul>
            </div>
        `),i.innerHTML=`
        ${s}
        <div class="summary-duration">
            <span class="summary-label">Duration</span>
            <span class="summary-value">${Tm(n.duration)}</span>
        </div>
        <div class="summary-grid">
            <div class="summary-metric">
                <span class="summary-metric-icon">⚡</span>
                <span class="summary-metric-label">Power</span>
                <div class="summary-metric-values">
                    <span class="summary-avg">Avg: ${r(n.power.avg,"W")}</span>
                    <span class="summary-max">Max: ${r(n.power.max,"W")}</span>
                </div>
            </div>
            <div class="summary-metric">
                <span class="summary-metric-icon">❤️</span>
                <span class="summary-metric-label">Heart Rate</span>
                <div class="summary-metric-values">
                    <span class="summary-avg">Avg: ${r(n.heartrate.avg," bpm")}</span>
                    <span class="summary-max">Max: ${r(n.heartrate.max," bpm")}</span>
                </div>
            </div>
            <div class="summary-metric">
                <span class="summary-metric-icon">🚴</span>
                <span class="summary-metric-label">Cadence</span>
                <div class="summary-metric-values">
                    <span class="summary-avg">Avg: ${r(n.cadence.avg," rpm")}</span>
                    <span class="summary-max">Max: ${r(n.cadence.max," rpm")}</span>
                </div>
            </div>
        </div>
        <div class="summary-samples">
            <span class="summary-samples-text">
                ${n.power.count+n.heartrate.count+n.cadence.count} data points recorded
            </span>
        </div>
    `,n.powerZoneDistribution&&n.powerZoneDistribution.totalTimeMs>0){const c=va(n.powerZoneDistribution,"⚡ Power Zone Distribution");i.appendChild(c)}if(n.hrZoneDistribution&&n.hrZoneDistribution.totalTimeMs>0){const c=va(n.hrZoneDistribution,"❤️ Heart Rate Zone Distribution");i.appendChild(c)}return i}function Mm(n,e,i=[]){return new Promise(r=>{let s=null;const c=Pm(n,i);s=ki({title:"Workout Complete",content:c,icon:"🏁",closeOnOverlay:!1,buttons:[{text:"🗑️ Discard",variant:"danger",onClick:()=>{s?.(),e.onDiscard(),r("discard")}},{text:"▶️ Keep Recording",variant:"secondary",onClick:()=>{s?.(),e.onKeepRecording(),r("keep")}},{text:"💾 Save & Finish",variant:"primary",onClick:()=>{s?.(),e.onExport(),r("export")}}],onClose:()=>{e.onKeepRecording(),r("keep")}})})}function si(n,e,i={}){if(!n)return;const r=i.height||200,s=i.color||"var(--color-accent)",c=20,d=30,u=40,h=10;if(!e||e.length<2){n.innerHTML=`
            <div style="
                display:flex; 
                justify-content:center; 
                align-items:center; 
                height:${r}px; 
                color: var(--color-text-secondary);
                background: var(--card-bg);
                border-radius: 8px;
            ">
                No data available
            </div>
        `;return}const p=Im(e,500),_=p.map(W=>W.x),f=p.map(W=>W.y),v=Math.min(..._),y=Math.max(..._);let b=i.yMin??Math.min(...f),S=i.yMax??Math.max(...f);const E=S-b;E===0?(S+=10,b-=10):(i.yMin===void 0&&(b-=E*.1),S+=E*.1);const P=n.clientWidth||n.parentElement?.clientWidth||600,T=W=>u+(W-v)/(y-v)*(P-u-h),D=W=>r-d-(W-b)/(S-b)*(r-c-d),z=`M ${p.map(W=>`${T(W.x).toFixed(1)},${D(W.y).toFixed(1)}`).join(" L ")}`,$=`${z} L ${T(p[p.length-1].x).toFixed(1)},${r-d} L ${T(p[0].x).toFixed(1)},${r-d} Z`,A=[],O=(S-b)/4;for(let W=0;W<=4;W++){const re=b+W*O,ae=D(re);A.push(`
            <line x1="${u}" y1="${ae}" x2="${P-h}" y2="${ae}" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4" opacity="0.5" />
            <text x="${u-5}" y="${ae+4}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">${Math.round(re)}</text>
        `)}const F=_r(0),q=_r((y-v)/2),te=_r(y-v),Y=`
        <svg width="100%" height="${r}" viewBox="0 0 ${P} ${r}" style="background: var(--card-bg); border-radius: 8px;">
            <defs>
                <linearGradient id="chartGradient-${i.title?.replace(/\s/g,"")}" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stop-color="${s}" stop-opacity="0.2"/>
                    <stop offset="100%" stop-color="${s}" stop-opacity="0"/>
                </linearGradient>
            </defs>

            <!-- Grid -->
            ${A.join("")}

            <!-- Axis Labels -->
            <text x="${u}" y="${r-10}" text-anchor="start" font-size="10" fill="var(--color-text-secondary)">${F}</text>
            <text x="${P/2}" y="${r-10}" text-anchor="middle" font-size="10" fill="var(--color-text-secondary)">${q}</text>
            <text x="${P-h}" y="${r-10}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">${te}</text>

            <!-- Data Area -->
            <path d="${$}" fill="url(#chartGradient-${i.title?.replace(/\s/g,"")})" stroke="none" />
            
            <!-- Data Line -->
            <path d="${z}" fill="none" stroke="${s}" stroke-width="2" vector-effect="non-scaling-stroke" />

            <!-- Title -->
            ${i.title?`<text x="${P/2}" y="15" text-anchor="middle" font-weight="bold" font-size="12" fill="var(--color-text-primary)">${i.title}</text>`:""}
        </svg>
    `;n.innerHTML=Y}function Im(n,e){if(n.length<=e)return n;const i=Math.ceil(n.length/e),r=[];for(let s=0;s<n.length;s+=i)r.push(n[s]);return r}function _r(n){const e=Math.floor(n/1e3),i=Math.floor(e/3600),r=Math.floor(e%3600/60),s=e%60;return i>0?`${i}:${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`:`${r}:${s.toString().padStart(2,"0")}`}function Am(n,e,i={}){if(!n)return;const r=i.height||200,s=i.color||"var(--color-accent)",c=30,d=30,u=40,h=10,p=4;if(!e||e.length===0){n.innerHTML=`
            <div style="
                display:flex; 
                justify-content:center; 
                align-items:center; 
                height:${r}px; 
                color: var(--color-text-secondary);
                background: var(--card-bg);
                border-radius: 8px;
            ">
                No data available
            </div>
        `;return}const _=e.map(q=>q.y);let f=i.yMax??Math.max(..._)*1.1,v=i.yMin??0;f===v&&(f+=10);const y=n.clientWidth||n.parentElement?.clientWidth||600,b=y-u-h,S=Math.max(2,b/e.length-p),E=q=>u+q*(S+p)+p/2,P=q=>r-d-(q-v)/(f-v)*(r-c-d),T=e.map((q,te)=>{const Y=E(te),W=P(q.y),re=Math.max(0,r-d-W);return re<=0||isNaN(W)||isNaN(re)?"":`<rect x="${Y.toFixed(1)}" y="${W.toFixed(1)}" width="${S.toFixed(1)}" height="${re.toFixed(1)}" fill="${s}" rx="2" opacity="0.8" />`}),z=Math.max(1,Math.floor(e.length/7)),$=e.map((q,te)=>{if(te%z!==0)return"";const Y=new Date(q.x),W=`${Y.getDate()}/${Y.getMonth()+1}`;return`<text x="${(E(te)+S/2).toFixed(1)}" y="${r-5}" text-anchor="middle" font-size="10" fill="var(--color-text-secondary)">${W}</text>`}),A=[],O=(f-v)/4;for(let q=0;q<=4;q++){const te=v+q*O,Y=P(te);A.push(`
            <line x1="${u}" y1="${Y}" x2="${y-h}" y2="${Y}" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4" opacity="0.3" />
            <text x="${u-5}" y="${Y+4}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">${Math.round(te)}</text>
        `)}const F=`
        <svg width="100%" height="${r}" viewBox="0 0 ${y} ${r}" style="background: var(--card-bg); border-radius: 8px;">
            ${A.join("")}
            ${T.join("")}
            ${$.join("")}
            <!-- Axis Lines -->
            <line x1="${u}" y1="${c}" x2="${u}" y2="${r-d}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${u}" y1="${r-d}" x2="${y-h}" y2="${r-d}" stroke="var(--color-border)" stroke-width="1" />
            <!-- Title -->
             ${i.title?`<text x="${y/2}" y="15" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--color-text-primary)">${i.title}</text>`:""}
        </svg>
    `;n.innerHTML=F}const oi=()=>({count:0,distance:0,duration:0,elevation:0,energy:0,avgPower:0,avgHr:0,avgCadence:0,weightedPowerSum:0,weightedHrSum:0,weightedCadenceSum:0,totalDurationForAvg:0});function Sc(n){if(!n.summary)return{};if(typeof n.summary=="string")try{return JSON.parse(n.summary)}catch{return{}}return n.summary}let Ec=[],ai="distance";function Dm(n,e){const i=document.getElementById(n);if(!i)return;Ec=e;let r=document.getElementById("periodStatsContainer");r||(r=document.createElement("div"),r.id="periodStatsContainer",r.style.display="grid",r.style.gap="16px",r.style.marginBottom="20px",i.insertBefore(r,i.firstChild)),zm(r,e),Bm(r)}function zm(n,e){let i=document.getElementById("statsTableCard");i||(i=document.createElement("div"),i.id="statsTableCard",i.className="card",i.style.background="var(--card-bg)",i.style.padding="16px",i.style.borderRadius="8px",i.style.border="1px solid var(--color-border)",n.appendChild(i));const r=new Date,s=new Date(r),c=s.getDay()||7;c!==1?s.setHours(-24*(c-1)):s.setHours(0,0,0,0),s.setHours(0,0,0,0);const d=new Date(s);d.setDate(d.getDate()-7);const u=new Date(s),h=new Date(r.getFullYear(),r.getMonth(),1),p=new Date(r.getFullYear(),r.getMonth()-1,1),_=new Date(r.getFullYear(),r.getMonth(),0,23,59,59),f=new Date(r.getFullYear(),0,1),v={thisWeek:oi(),lastWeek:oi(),thisMonth:oi(),lastMonth:oi(),thisYear:oi()};e.forEach(E=>{const P=new Date(E.startTime),T=Sc(E),D=[];P>=s&&D.push(v.thisWeek),P>=d&&P<u&&D.push(v.lastWeek),P>=h&&D.push(v.thisMonth),P>=p&&P<=_&&D.push(v.lastMonth),P>=f&&D.push(v.thisYear),D.forEach(z=>{z.count++,z.duration+=E.duration||0,z.distance+=T.totalDistance||0,z.elevation+=T.totalElevationGain||0,T.totalEnergy?z.energy+=T.totalEnergy:T.avgPower&&E.duration&&(z.energy+=T.avgPower*E.duration/1e3);const $=E.duration||0;$>0&&(T.avgPower&&(z.weightedPowerSum+=T.avgPower*$),T.avgHeartrate&&(z.weightedHrSum+=T.avgHeartrate*$),T.avgCadence&&(z.weightedCadenceSum+=T.avgCadence*$),z.totalDurationForAvg+=$)})}),Object.values(v).forEach(E=>{E.totalDurationForAvg>0&&(E.avgPower=Math.round(E.weightedPowerSum/E.totalDurationForAvg),E.avgHr=Math.round(E.weightedHrSum/E.totalDurationForAvg),E.avgCadence=Math.round(E.weightedCadenceSum/E.totalDurationForAvg))});const y=E=>`<td style="padding: 8px; text-align: right; border-bottom: 1px solid var(--color-border);">${E}</td>`,S=[{label:"Workouts",key:"count",fmt:E=>E.toString()},{label:"Distance",key:"distance",fmt:E=>(E/1e3).toFixed(1)+" km"},{label:"Time",key:"duration",fmt:E=>Ie(E)},{label:"Elevation",key:"elevation",fmt:E=>E+" m"},{label:"Avg Power",key:"avgPower",fmt:E=>E+" W"},{label:"Avg HR",key:"avgHr",fmt:E=>E+" bpm"},{label:"Energy",key:"energy",fmt:E=>Math.round(E)+" kJ"}];i.innerHTML=`
        <h4 style="margin: 0 0 12px 0;">📊 Period Statistics</h4>
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9em;">
                <thead>
                    <tr style="background: var(--color-bg-secondary);">
                        <th style="text-align: left; padding: 8px; border-bottom: 2px solid var(--color-border);">Metric</th>
                        <th style="text-align: right; padding: 8px; border-bottom: 2px solid var(--color-border);">This Week</th>
                        <th style="text-align: right; padding: 8px; border-bottom: 2px solid var(--color-border); color: var(--color-text-secondary);">Last Week</th>
                        <th style="text-align: right; padding: 8px; border-bottom: 2px solid var(--color-border);">This Month</th>
                        <th style="text-align: right; padding: 8px; border-bottom: 2px solid var(--color-border); color: var(--color-text-secondary);">Last Month</th>
                        <th style="text-align: right; padding: 8px; border-bottom: 2px solid var(--color-border);">This Year</th>
                    </tr>
                </thead>
                <tbody>
                    ${S.map(E=>`
                        <tr>
                            <td style="padding: 8px; font-weight: 500; border-bottom: 1px solid var(--color-border);">${E.label}</td>
                            ${y(E.fmt(v.thisWeek[E.key]))}
                            ${y(E.fmt(v.lastWeek[E.key]))}
                            ${y(E.fmt(v.thisMonth[E.key]))}
                            ${y(E.fmt(v.lastMonth[E.key]))}
                            ${y(E.fmt(v.thisYear[E.key]))}
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Bm(n){let e=document.getElementById("statsChartCard");e||(e=document.createElement("div"),e.id="statsChartCard",e.className="card",e.style.background="var(--card-bg)",e.style.padding="16px",e.style.borderRadius="8px",e.style.border="1px solid var(--color-border)",e.innerHTML=`
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <h4 style="margin: 0;">📈 Weekly Trends (Last 12 Weeks)</h4>
                <select id="trendMetricSelect" style="padding: 4px; border-radius: 4px; border: 1px solid var(--color-border);">
                    <option value="distance">Distance</option>
                    <option value="duration">Time</option>
                    <option value="energy">Energy</option>
                    <option value="count">Workouts</option>
                </select>
            </div>
            <div id="trendChartContainer" style="height: 200px;"></div>
        `,n.appendChild(e),e.querySelector("#trendMetricSelect")?.addEventListener("change",r=>{ai=r.target.value,ya()})),ya()}function ya(){const n=document.getElementById("trendChartContainer");if(!n)return;const e=document.getElementById("trendMetricSelect");e&&(e.value=ai);const i={},r=new Date;for(let d=11;d>=0;d--){const u=new Date(r);u.setDate(u.getDate()-d*7);const h=_a(u);i[h]=0}Ec.forEach(d=>{const u=new Date(d.startTime),h=_a(u);if(i.hasOwnProperty(h)){const p=Sc(d);switch(ai){case"distance":i[h]+=(p.totalDistance||0)/1e3;break;case"duration":i[h]+=d.duration||0;break;case"energy":p.totalEnergy?i[h]+=p.totalEnergy:p.avgPower&&d.duration&&(i[h]+=p.avgPower*d.duration/1e3);break;case"count":i[h]+=1;break}}});const s=Object.entries(i).sort((d,u)=>d[0].localeCompare(u[0])).map(([d,u])=>{const[h,p]=d.split("-W").map(Number);return{x:$m(h,p).getTime(),y:u}});let c="";switch(ai){case"distance":c="Distance (km)";break;case"duration":c="Time (hours)";break;case"energy":c="Energy (kJ)";break;case"count":c="Number of Workouts";break}ai==="duration"&&s.forEach(d=>d.y=d.y/3600),Am(n,s,{title:c,height:200,color:"var(--color-accent)"})}function _a(n){const e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())),i=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-i);const r=new Date(Date.UTC(e.getUTCFullYear(),0,1)),s=Math.ceil(((e.getTime()-r.getTime())/864e5+1)/7);return`${e.getUTCFullYear()}-W${s.toString().padStart(2,"0")}`}function $m(n,e){const i=new Date(n,0,1+(e-1)*7),r=i.getDay(),s=i.getDate()-r+(r===0?-6:1);return new Date(i.setDate(s))}function wa(n,e,i,r){const s=Math.max(e,i),c=Math.max(s,r),d=f=>f.filter(v=>v.timestamp>=s&&v.timestamp<=c),u={heartrate:d(n.heartrate||[]),power:d(n.power||[]),cadence:d(n.cadence||[]),speed:d(n.speed||[]),distance:d(n.distance||[]),altitude:d(n.altitude||[]),gps:(n.gps||[]).filter(f=>f.timestamp>=s&&f.timestamp<=c),treadmill:(n.treadmill||[]).filter(f=>f.timestamp>=s&&f.timestamp<=c),treadmillSpeed:d(n.treadmillSpeed||[]),laps:(n.laps||[]).filter(f=>f.timestamp>=s&&f.timestamp<=c)},h=Math.floor((c-s)/1e3),p=ts(s,c,{power:u.power,heartrate:u.heartrate,cadence:u.cadence}),_={startTime:s,endTime:c,totalDuration:h,avgPower:p.power.avg??void 0,maxPower:p.power.max??void 0,avgHeartrate:p.heartrate.avg??void 0,maxHeartrate:p.heartrate.max??void 0,avgCadence:p.cadence.avg??void 0,maxCadence:p.cadence.max??void 0};if(_.avgPower&&(_.totalEnergy=Math.round(_.avgPower*h/1e3)),u.distance.length>0){const f=u.distance[0].value,v=u.distance[u.distance.length-1].value;_.totalDistance=Math.max(0,v-f)}return{startTime:s,endTime:c,duration:h,measurements:u,summary:_}}let je=1,ci=1,ri=!1,Jt="",_i="",wi="",Ut="list",ot=new Date,In="cloud";function vt(n){if(!n.summary)return{};if(typeof n.summary=="string")try{return JSON.parse(n.summary)}catch{return{}}return n.summary}function Om(){const n=document.getElementById("historyPrevPage"),e=document.getElementById("historyNextPage"),i=document.getElementById("historyRefresh"),r=document.getElementById("workoutTypeFilter"),s=document.getElementById("workoutDateStart"),c=document.getElementById("workoutDateEnd"),d=document.getElementById("viewListBtn"),u=document.getElementById("viewCalendarBtn"),h=document.getElementById("viewAnalyticsBtn"),p=document.getElementById("workoutListView"),_=document.getElementById("workoutCalendarView"),f=document.getElementById("workoutAnalyticsView"),v=document.getElementById("calendarPrevMonth"),y=document.getElementById("calendarNextMonth"),b=document.getElementById("sourceCloudBtn"),S=document.getElementById("sourceLocalBtn");b&&S&&(b.addEventListener("click",()=>ba("cloud")),S.addEventListener("click",()=>ba("local"))),Nm();const E=T=>{Ut=T,d&&(d.classList.toggle("active",T==="list"),d.setAttribute("aria-pressed",(T==="list").toString()),d.style.background=T==="list"?"var(--color-bg-active)":"transparent"),u&&(u.classList.toggle("active",T==="calendar"),u.setAttribute("aria-pressed",(T==="calendar").toString()),u.style.background=T==="calendar"?"var(--color-bg-active)":"transparent"),h&&(h.classList.toggle("active",T==="analytics"),h.setAttribute("aria-pressed",(T==="analytics").toString()),h.style.background=T==="analytics"?"var(--color-bg-active)":"transparent"),p&&(p.style.display=T==="list"?"block":"none"),_&&(_.style.display=T==="calendar"?"block":"none"),f&&(f.style.display=T==="analytics"?"block":"none")};d?.addEventListener("click",()=>{E("list"),ft()}),u?.addEventListener("click",()=>{E("calendar"),li()}),h?.addEventListener("click",()=>{E("analytics"),Nr()});const P=()=>{r&&(Jt=r.value),s&&(_i=s.value),c&&(wi=c.value),je=1,Ut==="list"?ft():Ut==="calendar"?li():Ut==="analytics"&&Nr()};r?.addEventListener("change",P),s?.addEventListener("change",P),c?.addEventListener("change",P),v?.addEventListener("click",()=>{ot.setMonth(ot.getMonth()-1),li()}),y?.addEventListener("click",()=>{ot.setMonth(ot.getMonth()+1),li()}),n?.addEventListener("click",async()=>{je>1&&(je--,await ft())}),e?.addEventListener("click",async()=>{je<ci&&(je++,await ft())}),i?.addEventListener("click",async()=>{await ft()})}async function Nm(){const n=document.getElementById("workoutHistoryButton"),e=yi();try{ri=await wc()}catch{ri=!1}!ri&&e&&(In="local",kc()),n&&(n.disabled=!(ri||e),n.title=ri||e?"View workout history":"History not available")}function Fm(n){const e=ts(n.startTime,n.lastUpdated,n.measurements);return{id:n.id,title:"Local Workout",sport:"cycling",startTime:new Date(n.startTime).toISOString(),endTime:new Date(n.lastUpdated).toISOString(),duration:Math.round((n.lastUpdated-n.startTime)/1e3),status:"COMPLETED",summary:JSON.stringify(e),createdAt:new Date(n.startTime).toISOString(),updatedAt:new Date(n.lastUpdated).toISOString(),_synced:n.synced}}async function ft(){const n=document.getElementById("workoutList"),e=document.getElementById("historyPageInfo"),i=document.getElementById("historyPrevPage"),r=document.getElementById("historyNextPage");if(n){n.innerHTML='<div class="workout-loading">Loading workouts...</div>';try{let s=[];if(In==="local"){const c=await Qr();c.sort((p,_)=>_.startTime-p.startTime);const d=c.length;ci=Math.ceil(d/10)||1;const u=(je-1)*10;s=c.slice(u,u+10).map(Fm),e&&(e.textContent=`Page ${je} of ${ci} (${d} local)`)}else{const c={page:je,limit:10};Jt&&(c.sport=Jt),_i&&(c.startDate=new Date(_i)),wi&&(c.endDate=new Date(wi));const d=await Do(c);s=d.workouts;const{pagination:u}=d;ci=u.totalPages,e&&(e.textContent=`Page ${u.page} of ${u.totalPages} (${u.total} total)`)}if(i&&(i.disabled=je<=1),r&&(r.disabled=je>=ci),s.length===0){n.innerHTML=`
        <div class="workout-empty">
          <p>No workouts found</p>
          <p class="workout-empty-hint">Start a workout to see it here!</p>
        </div>
      `;return}n.innerHTML=s.map(c=>Hm(c)).join(""),n.querySelectorAll(".workout-card").forEach(c=>{const d=c.dataset.workoutId;d&&(c.querySelector(".workout-view-btn")?.addEventListener("click",u=>{u.stopPropagation(),An(d)}),c.querySelector(".workout-delete-btn")?.addEventListener("click",u=>{u.stopPropagation(),Wm(d)}),c.querySelector(".workout-sync-btn")?.addEventListener("click",u=>{u.stopPropagation(),Rm(d)}))})}catch(s){console.error("Failed to load workouts:",s);const c=s instanceof Error?s.message:"Unknown error";n.innerHTML=`
      <div class="workout-error">
        <p>Failed to load workouts</p>
        <p class="workout-error-detail">${c}</p>
      </div>
    `}}}function ba(n){In!==n&&(In=n,kc(),je=1,ft())}function kc(){const n=document.getElementById("sourceCloudBtn"),e=document.getElementById("sourceLocalBtn");n&&e&&(In==="cloud"?(n.classList.add("active"),n.setAttribute("aria-pressed","true"),n.style.background="var(--color-bg-active)",e.classList.remove("active"),e.setAttribute("aria-pressed","false"),e.style.background="transparent"):(e.classList.add("active"),e.setAttribute("aria-pressed","true"),e.style.background="var(--color-bg-active)",n.classList.remove("active"),n.setAttribute("aria-pressed","false"),n.style.background="transparent"))}async function Rm(n){const i=(await Qr()).find(r=>r.id===n);if(i)try{V("Syncing workout...","polite");const r=await pm({streamName:`sync-${n}`,title:`Synced: ${Ct(new Date(i.startTime))}`,sport:"cycling"});if(r.success&&r.workout)if((await gm(r.workout.id,!1)).success)await vc(n),V("Workout synced successfully","assertive"),await ft();else throw new Error("Failed to complete workout on server")}catch(r){console.error("Sync failed",r),V("Sync failed","assertive")}}function Hm(n){const e=n.status.toLowerCase(),i=vt(n),s=n._synced===!1?'<button class="workout-sync-btn" title="Upload to server">☁️ Sync</button>':n._synced===!0?'<span title="Synced" style="margin-right:8px;">✅</span>':"";return`
    <div class="workout-card" data-workout-id="${n.id}">
      <div class="workout-card-header">
        <span class="workout-title">${n.title||"Untitled Workout"}</span>
        <span class="workout-status workout-status-${e}">${n.status}</span>
      </div>
      <div class="workout-card-body">
        <div class="workout-date">
          📅 ${Ct(n.startTime)}
        </div>
        <div class="workout-stats">
          ${n.duration?`<span class="workout-stat">⏱️ ${Ie(n.duration)}</span>`:""}
          ${i.avgPower?`<span class="workout-stat">⚡ ${i.avgPower}W avg</span>`:""}
          ${i.maxPower?`<span class="workout-stat">⚡ ${i.maxPower}W max</span>`:""}
          ${i.avgHeartrate?`<span class="workout-stat">❤️ ${i.avgHeartrate} bpm</span>`:""}
          ${i.totalEnergy?`<span class="workout-stat">🔥 ${i.totalEnergy} kJ</span>`:""}
        </div>
      </div>
      <div class="workout-card-actions">
        ${s}
        <button class="workout-view-btn" title="View details">👁️ View</button>
        <button class="workout-delete-btn" title="Delete workout">🗑️</button>
      </div>
    </div>
  `}async function An(n){const e=document.getElementById("workoutDetailPanel"),i=document.getElementById("workoutListPanel");if(!(!e||!i)){i.style.display="none",e.style.display="block",e.innerHTML='<div class="workout-loading">Loading workout details...</div>';try{const r=await fm(n,!0);e.innerHTML=Zm(r),r.telemetry&&requestAnimationFrame(()=>{tp(r.telemetry,r.startTime)}),e.querySelector(".workout-back-btn")?.addEventListener("click",()=>{e.style.display="none",i.style.display="block"}),e.querySelector(".workout-export-btn")?.addEventListener("click",()=>{qm(r)}),e.querySelector(".workout-crop-btn")?.addEventListener("click",()=>{np(r)})}catch(r){console.error("Failed to load workout details:",r);const s=r instanceof Error?r.message:"Unknown error";e.innerHTML=`
      <div class="workout-error">
        <p>Failed to load workout</p>
        <p class="workout-error-detail">${s}</p>
        <button class="workout-back-btn">← Back to list</button>
      </div>
    `,e.querySelector(".workout-back-btn")?.addEventListener("click",()=>{e.style.display="none",i.style.display="block"})}}}function Zm(n){const e=vt(n),i=n.status.toLowerCase();return`
    <div class="workout-detail">
      <div class="workout-detail-header">
        <button class="workout-back-btn">← Back</button>
        <h3>${n.title||"Untitled Workout"}</h3>
        <span class="workout-status workout-status-${i}">${n.status}</span>
      </div>

      <div class="workout-detail-meta">
        <div class="meta-item">
          <span class="meta-label">Sport</span>
          <span class="meta-value">${n.sport||"cycling"}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Start Time</span>
          <span class="meta-value">${Ct(n.startTime)}</span>
        </div>
        ${n.endTime?`
          <div class="meta-item">
            <span class="meta-label">End Time</span>
            <span class="meta-value">${Ct(n.endTime)}</span>
          </div>
        `:""}
        ${n.duration?`
          <div class="meta-item">
            <span class="meta-label">Duration</span>
            <span class="meta-value">${Ie(n.duration)}</span>
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

      ${n.telemetry?`
        <div class="workout-detail-charts">
            <h4>Charts</h4>
            <div id="wd-chart-power" class="chart-container" style="height: 200px; margin-bottom: 20px;"></div>
            <div id="wd-chart-hr" class="chart-container" style="height: 200px; margin-bottom: 20px;"></div>
            <div id="wd-chart-cadence" class="chart-container" style="height: 200px; margin-bottom: 20px;"></div>
            <div id="wd-chart-altitude" class="chart-container" style="height: 200px; margin-bottom: 20px;"></div>
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
          <button class="workout-action-btn workout-crop-btn">✂️ Crop</button>
          <button class="workout-export-btn">💾 Export Data</button>
        `:""}
      </div>
    </div>
  `}function qm(n){const i=`workout-${new Date(n.startTime).toISOString().replace(/[:.]/g,"-").slice(0,19)}`,r={id:n.id,title:n.title,sport:n.sport,startTime:n.startTime,endTime:n.endTime,duration:n.duration,summary:n.summary,telemetry:n.telemetry},s=new Blob([JSON.stringify(r,null,2)],{type:"application/json"}),c=URL.createObjectURL(s),d=document.createElement("a");d.href=c,d.download=`${i}.json`,d.click(),URL.revokeObjectURL(c)}async function Wm(n){if(confirm("Are you sure you want to delete this workout? This cannot be undone."))try{await vm(n),await ft()}catch(e){console.error("Failed to delete workout:",e);const i=e instanceof Error?e.message:"Unknown error";alert(`Failed to delete workout: ${i}`)}}async function li(){const n=document.getElementById("workoutCalendarGrid"),e=document.getElementById("calendarMonthLabel");if(!n||!e)return;const i=["January","February","March","April","May","June","July","August","September","October","November","December"];e.textContent=`${i[ot.getMonth()]} ${ot.getFullYear()}`,n.innerHTML='<div style="grid-column: 1 / -1; text-align: center; padding: 20px;">Loading calendar...</div>';const r=ot.getFullYear(),s=ot.getMonth(),c=new Date(r,s,1),d=new Date(r,s+1,0,23,59,59,999);try{const u={startDate:c,endDate:d,limit:1e3};Jt&&(u.sport=Jt);const p=(await Do(u)).workouts;Vm(p),Um(p)}catch(u){console.error("Failed to load calendar:",u),n.innerHTML='<div style="grid-column: 1 / -1; text-align: center; color: var(--color-error);">Failed to load calendar data</div>'}}function Vm(n){const e=document.getElementById("workoutCalendarGrid");if(!e)return;e.innerHTML="",["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach(u=>{const h=document.createElement("div");h.textContent=u,h.style.textAlign="center",h.style.fontWeight="bold",h.style.padding="4px",h.style.fontSize="0.9em",h.style.color="var(--color-text-secondary)",e.appendChild(h)});const r=ot.getFullYear(),s=ot.getMonth(),c=new Date(r,s,1).getDay(),d=new Date(r,s+1,0).getDate();for(let u=0;u<c;u++){const h=document.createElement("div");e.appendChild(h)}for(let u=1;u<=d;u++){const h=document.createElement("div");h.style.border="1px solid var(--color-border)",h.style.borderRadius="4px",h.style.minHeight="60px",h.style.padding="4px",h.style.background="var(--card-bg)",h.style.position="relative";const p=document.createElement("div");p.textContent=u.toString(),p.style.fontSize="0.8em",p.style.marginBottom="4px",h.appendChild(p),n.filter(v=>{const y=new Date(v.startTime);return y.getDate()===u&&y.getMonth()===s&&y.getFullYear()===r}).forEach(v=>{const y=document.createElement("div");y.title=`${v.title||"Workout"} (${Ie(v.duration||0)})`,y.style.fontSize="0.7em",y.style.whiteSpace="nowrap",y.style.overflow="hidden",y.style.textOverflow="ellipsis",y.style.cursor="pointer",y.style.padding="2px",y.style.marginTop="2px",y.style.borderRadius="2px",y.style.background="var(--color-bg-active)",y.style.color="var(--color-text-primary)";const b=v.sport==="running"?"🏃":"🚴";y.textContent=`${b} ${Ie(v.duration||0)}`,y.addEventListener("click",S=>{S.stopPropagation(),An(v.id)}),h.appendChild(y)});const f=new Date;u===f.getDate()&&s===f.getMonth()&&r===f.getFullYear()&&(h.style.borderColor="var(--color-accent)",p.style.fontWeight="bold",p.style.color="var(--color-accent)"),e.appendChild(h)}}function Um(n){const e=document.getElementById("monthlyStats");if(!e)return;const i=n.length,r=n.reduce((d,u)=>d+(u.duration||0),0),s=n.reduce((d,u)=>{const h=vt(u);return d+(h.totalDistance||0)},0),c=n.reduce((d,u)=>{const h=vt(u);return d+(h.totalEnergy||0)},0);e.innerHTML=`
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Workouts</div>
            <div style="font-weight: bold;">${i}</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Duration</div>
            <div style="font-weight: bold;">${Ie(r)}</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Distance</div>
            <div style="font-weight: bold;">${(s/1e3).toFixed(1)} km</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Energy</div>
            <div style="font-weight: bold;">${c.toFixed(0)} kJ</div>
        </div>
    `}async function Nr(){if(!document.getElementById("workoutAnalyticsView"))return;const e=document.getElementById("prList");e&&(e.innerHTML='<div style="padding: 12px; text-align: center;">Loading records...</div>');try{const i={limit:1e3};Jt&&(i.sport=Jt),_i&&(i.startDate=new Date(_i)),wi&&(i.endDate=new Date(wi));const s=(await Do(i)).workouts;let c=[];if(s.length>0&&s[0].userId)try{c=await wm(s[0].userId)}catch(d){console.warn("Failed to load FTP history",d)}jm(s,c)}catch(i){console.error("Failed to load analytics:",i),e&&(e.innerHTML='<div style="color: var(--color-error); text-align: center;">Failed to load data</div>')}}function jm(n,e=[]){Dm("workoutAnalyticsView",n),Gm(n),Ym(n),Km(n),Xm(n),Qm(e),ep(n)}function Gm(n){const e=document.getElementById("prList");if(!e)return;let i={val:0,date:"",id:""},r={val:0,date:"",id:""},s={val:0,date:"",id:""},c={val:0,date:"",id:""};n.forEach(u=>{const h=vt(u),p=Ct(u.startTime);h.maxPower&&h.maxPower>i.val&&(i={val:h.maxPower,date:p,id:u.id}),h.maxHeartrate&&h.maxHeartrate>r.val&&(r={val:h.maxHeartrate,date:p,id:u.id}),u.duration&&u.duration>s.val&&(s={val:u.duration,date:p,id:u.id}),h.totalDistance&&h.totalDistance>c.val&&(c={val:h.totalDistance,date:p,id:u.id})});const d=(u,h,p,_)=>`
        <div class="pr-row" data-id="${_}" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--color-border); cursor: pointer;">
            <div style="font-weight: 500;">${u}</div>
            <div style="text-align: right;">
                <div style="font-weight: bold; color: var(--color-accent);">${h}</div>
                <div style="font-size: 0.8em; color: var(--color-text-secondary);">${p}</div>
            </div>
        </div>
    `;e.innerHTML=`
        ${i.val>0?d("Max Power (1s)",`${i.val} W`,i.date,i.id):""}
        ${r.val>0?d("Max Heart Rate",`${r.val} bpm`,r.date,r.id):""}
        ${s.val>0?d("Longest Duration",Ie(s.val),s.date,s.id):""}
        ${c.val>0?d("Longest Distance",`${(c.val/1e3).toFixed(1)} km`,c.date,c.id):""}
    `,e.querySelectorAll(".pr-row").forEach(u=>{u.addEventListener("click",()=>{const h=u.dataset.id;h&&An(h)})})}function Ym(n){const e=document.getElementById("trainingLoadChart");if(!e)return;const i={};for(let s=3;s>=0;s--){const c=new Date;c.setDate(c.getDate()-s*7);const d=xa(c);i[`${c.getFullYear()}-W${d}`]=0}n.forEach(s=>{const c=vt(s);if(c.trainingLoad){const d=new Date(s.startTime),u=`${d.getFullYear()}-W${xa(d)}`;i[u]!==void 0&&(i[u]+=c.trainingLoad)}});const r=Math.max(...Object.values(i),100);e.innerHTML=Object.entries(i).map(([s,c])=>{const d=c/r*100;return`
            <div style="display: flex; flex-direction: column; align-items: center; width: 20%;">
                <div style="font-size: 0.8em; font-weight: bold; margin-bottom: 4px;">${Math.round(c)}</div>
                <div style="width: 100%; height: 100px; display: flex; align-items: flex-end; justify-content: center;">
                    <div style="width: 80%; background: var(--color-accent); height: ${d}%; border-radius: 4px 4px 0 0; min-height: 4px;"></div>
                </div>
                <div style="font-size: 0.7em; color: var(--color-text-secondary); margin-top: 4px;">${s.split("-")[1]}</div>
            </div>
        `}).join("")}function xa(n){n=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())),n.setUTCDate(n.getUTCDate()+4-(n.getUTCDay()||7));const e=new Date(Date.UTC(n.getUTCFullYear(),0,1));return Math.ceil(((n.getTime()-e.getTime())/864e5+1)/7)}function Km(n){const e=document.getElementById("powerCurveChart");if(!e)return;const i={},r=[1,5,10,30,60,300,1200,3600];if(n.forEach(f=>{const v=vt(f);v.powerCurve&&v.powerCurve.forEach(y=>{(!i[y.duration]||y.watts>i[y.duration])&&(i[y.duration]=y.watts)}),v.maxPower&&(!i[1]||v.maxPower>i[1])&&(i[1]=v.maxPower)}),Object.keys(i).length===0){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">No power data available</div>';return}const s=e.clientWidth||300,c=200,d=30,u=Math.max(...Object.values(i))*1.1,h=r.map((f,v)=>{if(!i[f])return null;const y=d+v*((s-d*2)/(r.length-1)),b=c-d-i[f]/u*(c-d*2);return{x:y,y:b,val:i[f],duration:f}}).filter(f=>f!==null);if(h.length<2){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">Insufficient data points</div>';return}const p=`M ${h.map(f=>`${f.x},${f.y}`).join(" L ")}`,_=`
        <svg width="100%" height="100%" viewBox="0 0 ${s} ${c}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${d}" y1="${d}" x2="${d}" y2="${c-d}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${d}" y1="${c-d}" x2="${s-d}" y2="${c-d}" stroke="var(--color-border)" stroke-width="1" />
            
            <!-- Path -->
            <path d="${p}" fill="none" stroke="var(--color-accent)" stroke-width="2" />
            
            <!-- Points -->
            ${h.map(f=>`
                <circle cx="${f.x}" cy="${f.y}" r="4" fill="var(--card-bg)" stroke="var(--color-accent)" stroke-width="2" />
                <text x="${f.x}" y="${f.y-10}" text-anchor="middle" font-size="10" fill="var(--color-text-primary)">${f.val}W</text>
                <text x="${f.x}" y="${c-10}" text-anchor="middle" font-size="10" fill="var(--color-text-secondary)">${Jm(f.duration)}</text>
            `).join("")}
        </svg>
    `;e.innerHTML=_}function Jm(n){return n<60?`${n}s`:n<3600?`${n/60}m`:`${n/3600}h`}function Xm(n){const e=document.getElementById("fitnessTrendChart");if(!e)return;const i=[...n].sort((O,F)=>new Date(O.startTime).getTime()-new Date(F.startTime).getTime());if(i.length<2){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">Not enough data for trend analysis</div>';return}const r=new Map;i.forEach(O=>{const F=vt(O);if(F.trainingLoad){const q=new Date(O.startTime).toISOString().split("T")[0],te=r.get(q)||0;r.set(q,te+F.trainingLoad)}});const s=[],c=new Date(i[0].startTime),d=new Date,u=Math.exp(-1/42),h=Math.exp(-1/7);let p=0,_=0;for(let O=new Date(c);O<=d;O.setDate(O.getDate()+1)){const F=O.toISOString().split("T")[0],q=r.get(F)||0;p=p*u+q*(1-u),_=_*h+q*(1-h),s.push({date:new Date(O),ctl:p,atl:_,tsb:p-_})}const f=e.clientWidth||600,v=250,y={top:20,right:30,bottom:30,left:40},b=f-y.left-y.right,S=v-y.top-y.bottom,E=Math.max(...s.map(O=>Math.max(O.ctl,O.atl)))*1.1,P=d.getTime()-c.getTime();if(P===0)return;const T=O=>y.left+(O.getTime()-c.getTime())/P*b,D=O=>y.top+S-O/E*S,z="M "+s.map(O=>`${T(O.date)},${D(O.ctl)}`).join(" L "),$="M "+s.map(O=>`${T(O.date)},${D(O.atl)}`).join(" L "),A=`
        <svg width="100%" height="100%" viewBox="0 0 ${f} ${v}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${y.left}" y1="${y.top}" x2="${y.left}" y2="${v-y.bottom}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${y.left}" y1="${v-y.bottom}" x2="${f-y.right}" y2="${v-y.bottom}" stroke="var(--color-border)" stroke-width="1" />
            
            <!-- CTL Line (Fitness) - Blue -->
            <path d="${z}" fill="none" stroke="#3b82f6" stroke-width="2" />
            
            <!-- ATL Line (Fatigue) - Pink/Purple -->
            <path d="${$}" fill="none" stroke="#ec4899" stroke-width="2" stroke-dasharray="4" />
            
            <!-- Legend -->
            <g transform="translate(${y.left+10}, ${y.top})">
                <rect x="0" y="0" width="10" height="10" fill="#3b82f6" />
                <text x="15" y="10" font-size="12" fill="var(--color-text-secondary)">Fitness (CTL)</text>
                
                <rect x="100" y="0" width="10" height="10" fill="none" stroke="#ec4899" stroke-width="2" stroke-dasharray="4" />
                <text x="115" y="10" font-size="12" fill="var(--color-text-secondary)">Fatigue (ATL)</text>
            </g>

            <!-- Latest Stats -->
             <text x="${f-y.right}" y="${y.top}" text-anchor="end" font-size="12" fill="var(--color-text-primary)">
                CTL: ${Math.round(p)} | ATL: ${Math.round(_)} | TSB: ${Math.round(p-_)}
            </text>
        </svg>
    `;e.innerHTML=A}function Qm(n){const e=document.getElementById("ftpHistoryChart");if(!e)return;if(n.length===0){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">No FTP history available</div>';return}const i=[...n].sort((T,D)=>new Date(T.createdAt).getTime()-new Date(D.createdAt).getTime()),r=e.clientWidth||600,s=200,c={top:20,right:30,bottom:30,left:40},d=r-c.left-c.right,u=s-c.top-c.bottom,h=Math.max(...i.map(T=>T.ftp))*1.1,p=Math.max(0,Math.min(...i.map(T=>T.ftp))*.9),_=h-p||100,f=new Date(i[0].createdAt),y=new Date().getTime()-f.getTime(),b=T=>{const D=new Date(T);return c.left+(D.getTime()-f.getTime())/y*d},S=T=>c.top+u-(T-p)/_*u;let E="";if(i.length>0){E=`M ${b(i[0].createdAt)},${S(i[0].ftp)}`;for(let T=1;T<i.length;T++){const D=b(i[T].createdAt),z=S(i[T-1].ftp),$=S(i[T].ftp);E+=` L ${D},${z} L ${D},${$}`}E+=` L ${r-c.right},${S(i[i.length-1].ftp)}`}const P=`
        <svg width="100%" height="100%" viewBox="0 0 ${r} ${s}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${c.left}" y1="${c.top}" x2="${c.left}" y2="${s-c.bottom}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${c.left}" y1="${s-c.bottom}" x2="${r-c.right}" y2="${s-c.bottom}" stroke="var(--color-border)" stroke-width="1" />
            
            <!-- FTP Line -->
            <path d="${E}" fill="none" stroke="var(--color-accent)" stroke-width="2" />
            
            <!-- Points -->
            ${i.map(T=>`
                <circle cx="${b(T.createdAt)}" cy="${S(T.ftp)}" r="4" fill="var(--card-bg)" stroke="var(--color-accent)" stroke-width="2">
                    <title>${T.ftp} W (${Ct(T.createdAt)})</title>
                </circle>
                <text x="${b(T.createdAt)}" y="${S(T.ftp)-10}" text-anchor="middle" font-size="10" fill="var(--color-text-primary)">${T.ftp}</text>
            `).join("")}

            <!-- Axis Labels (simplified) -->
            <text x="${c.left}" y="${s-10}" font-size="10" fill="var(--color-text-secondary)">${Ct(f)}</text>
            <text x="${r-c.right}" y="${s-10}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">Today</text>
        </svg>
    `;e.innerHTML=P}function ep(n){const e=document.getElementById("prHistoryList");if(!e)return;const i=[...n].sort((h,p)=>new Date(h.startTime).getTime()-new Date(p.startTime).getTime()),r=[];let s=0,c=0;const d={};if(i.forEach(h=>{const p=vt(h),_=Ct(h.startTime);if(p.maxPower&&p.maxPower>s){if(s>0){const f=p.maxPower-s;r.push({date:_,metric:"Max Power",value:`${p.maxPower} W`,improvement:`+${f} W`,workoutId:h.id})}else r.push({date:_,metric:"Max Power",value:`${p.maxPower} W`,improvement:"New!",workoutId:h.id});s=p.maxPower}if(p.maxHeartrate&&p.maxHeartrate>c){if(c>0){const f=p.maxHeartrate-c;r.push({date:_,metric:"Max Heart Rate",value:`${p.maxHeartrate} bpm`,improvement:`+${f} bpm`,workoutId:h.id})}else r.push({date:_,metric:"Max Heart Rate",value:`${p.maxHeartrate} bpm`,improvement:"New!",workoutId:h.id});c=p.maxHeartrate}if(p.powerCurve){const f=[60,300,1200],v={60:"1m Power",300:"5m Power",1200:"20m Power"};p.powerCurve.forEach(y=>{if(f.includes(y.duration)){const b=d[y.duration]||0;y.watts>b&&(b>0?r.push({date:_,metric:v[y.duration],value:`${y.watts} W`,improvement:`+${y.watts-b} W`,workoutId:h.id}):r.push({date:_,metric:v[y.duration],value:`${y.watts} W`,improvement:"New!",workoutId:h.id}),d[y.duration]=y.watts)}})}}),r.length===0){e.innerHTML='<div style="text-align: center; color: var(--color-text-secondary); padding: 20px;">No records found</div>';return}const u=r.reverse();e.innerHTML=u.map(h=>`
        <div class="pr-history-row" data-id="${h.workoutId}" style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border-bottom: 1px solid var(--color-border); cursor: pointer;">
            <div style="flex: 1;">
                <div style="font-weight: 500;">${h.metric}</div>
                <div style="font-size: 0.8em; color: var(--color-text-secondary);">${h.date}</div>
            </div>
            <div style="text-align: right;">
                <div style="font-weight: bold; color: var(--color-accent);">${h.value}</div>
                <div style="font-size: 0.8em; color: var(--color-success);">${h.improvement}</div>
            </div>
        </div>
    `).join(""),e.querySelectorAll(".pr-history-row").forEach(h=>{h.addEventListener("click",()=>{const p=h.dataset.id;p&&An(p)})})}async function Sa(){Ut==="list"?await ft():Ut==="calendar"?await li():Ut==="analytics"&&await Nr()}function tp(n,e){try{const i=JSON.parse(n),r=typeof e=="string"?new Date(e).getTime():e,s=document.getElementById("wd-chart-power");if(s&&i.power&&i.power.length>0){const h=i.power.map(p=>({x:p.timestamp-r,y:p.value}));si(s,h,{title:"Power",color:"#fbbf24",yLabel:"Watts",yMin:0})}else s&&(s.style.display="none");const c=document.getElementById("wd-chart-hr");if(c&&i.heartrate&&i.heartrate.length>0){const h=i.heartrate.map(p=>({x:p.timestamp-r,y:p.value}));si(c,h,{title:"Heart Rate",color:"#f87171",yLabel:"BPM",yMin:40})}else c&&(c.style.display="none");const d=document.getElementById("wd-chart-cadence");if(d&&i.cadence&&i.cadence.length>0){const h=i.cadence.map(p=>({x:p.timestamp-r,y:p.value}));si(d,h,{title:"Cadence",color:"#60a5fa",yLabel:"RPM",yMin:0})}else d&&(d.style.display="none");const u=document.getElementById("wd-chart-altitude");if(u&&i.altitude&&i.altitude.length>0){const p=i.altitude.map(_=>({x:_.timestamp-r,y:_.value})).filter(_=>_.y!==0);p.length>0?si(u,p,{title:"Altitude",color:"#34d399",yLabel:"Meters"}):u.style.display="none"}else u&&(u.style.display="none")}catch(i){console.error("Failed to parse telemetry for charts",i)}}function np(n){if(!n.telemetry||!n.startTime){alert("No telemetry data available for cropping");return}const e=document.getElementById("workoutDetailPanel");if(!e)return;let i=null;try{i=JSON.parse(n.telemetry)}catch(E){console.error("Invalid telemetry",E),alert("Failed to parse workout data");return}if(!i)return;const r=new Date(n.startTime).getTime(),s=n.endTime?new Date(n.endTime).getTime():r+(n.duration||0)*1e3;let c=r,d=s;const u=s-r;e.innerHTML=`
    <div class="workout-crop-tool">
      <div class="workout-detail-header">
        <button id="cancelCropBtn" class="workout-back-btn">Cancel</button>
        <h3>Crop Workout</h3>
        <button id="saveCropBtn" class="workout-action-btn workout-status-completed">Save Changes</button>
      </div>

      <div class="crop-controls" style="margin: 20px 0; padding: 20px; background: var(--color-bg-secondary); border-radius: 8px;">
         <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
             <div>
                 <label>Start Time offset</label>
                 <div class="value-display" id="cropStartDisplay">00:00</div>
                 <input type="range" id="cropStartSlider" min="0" max="${u}" value="0" style="width: 100%">
             </div>
             <div style="text-align: right;">
                 <label>End Time offset</label>
                 <div class="value-display" id="cropEndDisplay">${Ie(u/1e3)}</div>
                 <input type="range" id="cropEndSlider" min="0" max="${u}" value="${u}" style="width: 100%">
             </div>
         </div>
         
         <div style="text-align: center; font-weight: bold; margin-bottom: 10px;">
            New Duration: <span id="cropDurationDisplay">${Ie(u/1e3)}</span>
         </div>
         
         <div id="cropPreviewChart" style="height: 150px; background: var(--card-bg); border-radius: 8px;"></div>
      </div>
      
      <div class="crop-info" style="font-size: 0.9em; color: var(--color-text-secondary); margin-top: 10px;">
          <p>⚠️ Saving will overwrite the original workout data. This cannot be undone.</p>
      </div>
    </div>
  `;const h=document.getElementById("cropStartSlider"),p=document.getElementById("cropEndSlider"),_=document.getElementById("cropStartDisplay"),f=document.getElementById("cropEndDisplay"),v=document.getElementById("cropDurationDisplay"),y=document.getElementById("cropPreviewChart"),b=()=>{if(i&&i.power){const P=wa(i,r,c,d).measurements.power.map(T=>({x:T.timestamp-c,y:T.value}));si(y,P,{title:"Preview (Power)",color:"#fbbf24",yMin:0,height:150})}},S=()=>{const E=parseInt(h.value),P=parseInt(p.value);if(E>=P){document.activeElement===h?h.value=(P-1e4).toString():p.value=(E+1e4).toString();return}c=r+parseInt(h.value),d=r+parseInt(p.value),_&&(_.textContent=Ie(parseInt(h.value)/1e3)),f&&(f.textContent=Ie(parseInt(p.value)/1e3)),v&&(v.textContent=Ie((d-c)/1e3)),b()};h.addEventListener("input",S),p.addEventListener("input",S),setTimeout(b,0),document.getElementById("cancelCropBtn")?.addEventListener("click",()=>{An(n.id)}),document.getElementById("saveCropBtn")?.addEventListener("click",async()=>{const E=document.getElementById("saveCropBtn");E.disabled=!0,E.textContent="Saving...";try{const P=wa(i,r,c,d);if(yi()){const{saveCompletedWorkout:T}=await Et(async()=>{const{saveCompletedWorkout:D}=await Promise.resolve().then(()=>Dh);return{saveCompletedWorkout:D}},void 0);await T(P.measurements,P.startTime,P.endTime),P.startTime}if(In==="local"||n.id.startsWith("workout_")?(P.startTime,alert("Workout cropped and saved locally.")):alert("Cropping currently only supported for local workouts (Server update not implemented). Changes are saved to local history."),P.startTime!==r&&n.id.startsWith("workout_")){const T=document.getElementById("workoutListPanel");e&&T&&(e.style.display="none",T.style.display="block",document.getElementById("historyRefresh")?.click())}else An(n.id)}catch(P){console.error("Failed to save crop",P),alert("Error saving cropped workout"),E.disabled=!1,E.textContent="Save Changes"}})}class ip{id="history";isInitialized=!1;init(e){const i=document.getElementById("workoutHistoryTemplate");if(i){const r=i.content.cloneNode(!0);e.appendChild(r),setTimeout(()=>{Om(),this.isInitialized=!0},0)}else console.error("History template not found!"),e.innerHTML="<p>Error loading history view</p>"}onEnter(){this.isInitialized?Sa():setTimeout(()=>Sa(),50)}onLeave(){}}const op=(n,e,i)=>Array.from({length:i}).map((r,s)=>{const c=n+s*e;return{type:"active",duration:60,target:{type:"power",unit:"watts",value:c},name:`Step ${s+1}`,description:`${c} Watts`}}),rp={id:"ramp-test",name:"Ramp Test",description:"Standard Ramp Test to estimate FTP. Start at 100W, increase by 20W every minute until failure.",tags:["test","ftp"],category:"Testing",steps:[{type:"warmup",duration:300,target:{type:"open",unit:"watts",min:80,max:120},description:"Free warmup"},...op(100,20,25)]},sp={id:"sweet-spot-3x10",name:"Sweet Spot 3x10",description:"Classic Sweet Spot workout. 3 intervals of 10 minutes at 90% FTP.",tags:["sweet-spot","aerobic"],category:"Sweet Spot",steps:[{type:"warmup",duration:600,target:{type:"power",unit:"percent_ftp",value:50},name:"Warmup"},{type:"active",duration:600,target:{type:"power",unit:"percent_ftp",value:90},name:"Sweet Spot"},{type:"recovery",duration:300,target:{type:"power",unit:"percent_ftp",value:50},name:"Recovery"},{type:"active",duration:600,target:{type:"power",unit:"percent_ftp",value:90},name:"Sweet Spot"},{type:"recovery",duration:300,target:{type:"power",unit:"percent_ftp",value:50},name:"Recovery"},{type:"active",duration:600,target:{type:"power",unit:"percent_ftp",value:90},name:"Sweet Spot"},{type:"cooldown",duration:600,target:{type:"power",unit:"percent_ftp",value:50},name:"Cooldown"}]},ap={id:"vo2-30-30",name:"VO2 Max 30/30s",description:"High intensity intervals. 2 sets of 8x 30s ON / 30s OFF.",tags:["vo2max","hiit"],category:"VO2 Max",steps:[{type:"warmup",duration:600,target:{type:"power",unit:"percent_ftp",value:50},name:"Warmup"},{type:"warmup",duration:60,target:{type:"power",unit:"percent_ftp",value:100},name:"Opener"},{type:"rest",duration:120,target:{type:"power",unit:"percent_ftp",value:50},name:"Recover"},...Array.from({length:8}).flatMap((n,e)=>[{type:"active",duration:30,target:{type:"power",unit:"percent_ftp",value:120},name:`Rep ${e+1}`},{type:"rest",duration:30,target:{type:"power",unit:"percent_ftp",value:50},name:"Float"}]),{type:"rest",duration:300,target:{type:"power",unit:"percent_ftp",value:50},name:"Set Recovery"},...Array.from({length:8}).flatMap((n,e)=>[{type:"active",duration:30,target:{type:"power",unit:"percent_ftp",value:120},name:`Rep ${e+1}`},{type:"rest",duration:30,target:{type:"power",unit:"percent_ftp",value:50},name:"Float"}]),{type:"cooldown",duration:600,target:{type:"power",unit:"percent_ftp",value:40},name:"Cooldown"}]},Tc=[rp,sp,ap];function cp(n){return n.steps.reduce((e,i)=>e+i.duration,0)}const Lc="bpt-user-profile",wr={ftp:null,maxHr:null,weight:null,onboardingComplete:!1,lastUpdated:null};function bi(){try{if(typeof localStorage>"u")return{...wr};const n=localStorage.getItem(Lc);if(n)return{...wr,...JSON.parse(n)}}catch(n){console.warn("Failed to load user profile:",n)}return{...wr}}function Fr(n){try{if(typeof localStorage>"u"){console.warn("localStorage not available, profile not saved");return}n.lastUpdated=Date.now(),localStorage.setItem(Lc,JSON.stringify(n))}catch(e){console.warn("Failed to save user profile:",e)}}class lp{audioCtx=null;gainNode=null;isMuted=!1;constructor(){}init(){this.ensureContext()}ensureContext(){if(!this.audioCtx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.audioCtx=new e,this.gainNode=this.audioCtx.createGain(),this.gainNode.connect(this.audioCtx.destination),this.gainNode.gain.value=.5)}this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume()}setMuted(e){this.isMuted=e}beep(e=440,i=200,r="sine"){if(this.isMuted||(this.ensureContext(),!this.audioCtx||!this.gainNode))return;const s=this.audioCtx.createOscillator(),c=this.audioCtx.createGain();s.type=r,s.frequency.setValueAtTime(e,this.audioCtx.currentTime),c.gain.setValueAtTime(0,this.audioCtx.currentTime),c.gain.linearRampToValueAtTime(.5,this.audioCtx.currentTime+.01),c.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+i/1e3),s.connect(c),c.connect(this.gainNode),s.start(),s.stop(this.audioCtx.currentTime+i/1e3)}playCountdown(){this.beep(440,150)}playStart(){this.beep(880,400)}playSuccess(){if(this.isMuted||(this.ensureContext(),!this.audioCtx||!this.gainNode))return;const e=this.audioCtx.currentTime;this.scheduleNote(523.25,e,.1),this.scheduleNote(659.25,e+.1,.1),this.scheduleNote(783.99,e+.2,.2)}scheduleNote(e,i,r){if(!this.audioCtx||!this.gainNode)return;const s=this.audioCtx.createOscillator(),c=this.audioCtx.createGain();s.frequency.value=e,c.gain.setValueAtTime(0,i),c.gain.linearRampToValueAtTime(.3,i+.01),c.gain.exponentialRampToValueAtTime(.001,i+r),s.connect(c),c.connect(this.gainNode),s.start(i),s.stop(i+r)}speak(e){if(this.isMuted||!window.speechSynthesis)return;window.speechSynthesis.cancel();const i=new SpeechSynthesisUtterance(e);i.rate=1,i.pitch=1,i.volume=1,window.speechSynthesis.speak(i)}}const fo=new lp;class dp{state;timerInterval=null;onStateChange=null;userFtp=200;constructor(e,i){if(i?.userFtp)this.userFtp=i.userFtp;else try{const s=bi();s.ftp&&(this.userFtp=s.ftp)}catch{}const r=e.steps.reduce((s,c)=>s+c.duration,0);this.state={workout:e,isRunning:!1,isPaused:!0,isFinished:!1,currentStepIndex:0,startTime:null,stepElapsedTime:0,stepTimeRemaining:e.steps[0].duration,totalElapsedTime:0,totalDuration:r,currentStep:e.steps[0],nextStep:e.steps.length>1?e.steps[1]:null,totalSteps:e.steps.length,currentAbsoluteTarget:void 0},this.updateCurrentTarget()}getWorkoutName(){return this.state.workout.name}setCallback(e){this.onStateChange=e,e(this.state)}start(){this.state.isFinished||this.state.isRunning&&!this.state.isPaused||(this.state.startTime||(this.state.startTime=Date.now()),this.state.isRunning=!0,this.state.isPaused=!1,this.emitState(),this.timerInterval=setInterval(()=>{this.tick()},1e3))}pause(){this.state.isPaused=!0,this.state.isRunning=!1,this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this.emitState()}nextStep(){this.advanceStep()}stop(){this.pause(),this.onStateChange=null}tick(){this.state.isPaused||this.state.isFinished||(this.state.stepElapsedTime++,this.state.totalElapsedTime++,this.state.stepTimeRemaining=Math.max(0,this.state.currentStep.duration-this.state.stepElapsedTime),this.updateCurrentTarget(),this.state.stepTimeRemaining<=3&&this.state.stepTimeRemaining>0&&this.safePlaySound("countdown"),this.state.stepElapsedTime>=this.state.currentStep.duration?this.advanceStep():this.emitState())}advanceStep(){const e=this.state.currentStepIndex+1;if(e>=this.state.workout.steps.length){this.finish();return}this.state.currentStepIndex=e,this.state.currentStep=this.state.workout.steps[e],this.state.nextStep=e+1<this.state.workout.steps.length?this.state.workout.steps[e+1]:null,this.state.stepElapsedTime=0,this.state.stepTimeRemaining=this.state.currentStep.duration,this.updateCurrentTarget(),this.safePlaySound("start"),this.emitState()}finish(){this.state.isFinished=!0,this.state.isRunning=!1,this.pause(),this.safePlaySound("success"),this.emitState()}safePlaySound(e){try{e==="countdown"&&fo.playCountdown(),e==="start"&&fo.playStart(),e==="success"&&fo.playSuccess()}catch{}}updateCurrentTarget(){const e=this.state.currentStep;if(e.rampStart&&e.rampEnd){const i=this.resolveValue(e.rampStart.value,e.rampStart.unit),r=this.resolveValue(e.rampEnd.value,e.rampEnd.unit);if(i!==null&&r!==null){const s=this.state.stepElapsedTime/e.duration,c=i+(r-i)*s;this.state.currentAbsoluteTarget={type:e.rampStart.type,unit:"watts",value:Math.round(c),min:Math.round(c-5),max:Math.round(c+5)}}}else if(e.target){const i=this.resolveValue(e.target.value,e.target.unit),r=this.resolveValue(e.target.min,e.target.unit),s=this.resolveValue(e.target.max,e.target.unit);i!==null||r!==null&&s!==null?(this.state.currentAbsoluteTarget={type:e.target.type,unit:"watts",value:i||(r+s)/2,min:r||(i?i-10:0),max:s||(i?i+10:999)},e.target.type==="heartrate"&&(this.state.currentAbsoluteTarget.unit="bpm")):this.state.currentAbsoluteTarget=void 0}else this.state.currentAbsoluteTarget=void 0}resolveValue(e,i){return e===void 0?null:i==="watts"||i==="bpm"||i==="rpm"?e:i==="percent_ftp"?Math.round(this.userFtp*(e/100)):e}emitState(){this.onStateChange&&this.onStateChange({...this.state})}getState(){return{...this.state}}}const Cc="bpt_custom_workouts";function zo(){try{const n=localStorage.getItem(Cc);return n?JSON.parse(n):[]}catch(n){return console.error("Failed to load custom workouts",n),[]}}function Pc(n){const e=zo(),i=e.findIndex(r=>r.id===n.id);i>=0?e[i]=n:e.push(n),Mc(e)}function up(n){const i=zo().filter(r=>r.id!==n);Mc(i)}function Mc(n){try{localStorage.setItem(Cc,JSON.stringify(n))}catch(e){console.error("Failed to save custom workouts",e),alert("Failed to save workout. Storage might be full.")}}let Ae=null;function hp(){gp(),mp(),Dn()}function mp(){const n=document.getElementById("importWorkoutBtn"),e=document.getElementById("importWorkoutInput");n&&e&&(n.addEventListener("click",()=>{e.click()}),e.addEventListener("change",i=>{const r=i.target.files;r&&r.length>0&&(pp(r[0]),e.value="")}))}async function pp(n){try{const e=await n.text(),i=JSON.parse(e);if(!i.name||!Array.isArray(i.steps))throw new Error("Invalid workout format");i.id=crypto.randomUUID(),i.tags=[...i.tags||[],"imported"],Pc(i),Dn(),V(`Imported workout: ${i.name}`,"assertive")}catch(e){console.error("Import failed",e),alert("Failed to import workout: Invalid file format.")}}function fp(n){const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(n,null,2)),i=document.createElement("a");i.setAttribute("href",e),i.setAttribute("download",`${n.name.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.json`),document.body.appendChild(i),i.click(),i.remove()}function Dn(){const n=document.getElementById("workoutList");if(!n)return;n.innerHTML="";const e=zo();if(e.length>0){const i=document.createElement("h3");i.textContent="My Workouts",i.style.margin="0 0 8px 0",i.style.fontSize="1rem",i.style.color="var(--color-text-secondary)",n.appendChild(i),e.forEach(c=>Ea(c,n,!0));const r=document.createElement("hr");r.style.margin="16px 0",r.style.border="0",r.style.borderTop="1px solid var(--color-border)",n.appendChild(r);const s=document.createElement("h3");s.textContent="Library",s.style.margin="0 0 8px 0",s.style.fontSize="1rem",s.style.color="var(--color-text-secondary)",n.appendChild(s)}Tc.forEach(i=>Ea(i,n,!1))}function Ea(n,e,i){const r=cp(n),s=document.createElement("div");s.className="workout-item",s.setAttribute("role","button"),s.setAttribute("tabindex","0"),s.style.position="relative";let c="";c+=`<button class="export-workout-btn" aria-label="Export ${n.name}" title="Export JSON" style="background: none; border: none; font-size: 1.2rem; cursor: pointer;">📤</button>`,i&&(c+=`<button class="delete-workout-btn" aria-label="Delete ${n.name}" title="Delete" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--color-error);">🗑️</button>`);const d="position: absolute; right: 10px; top: 10px; display: flex; gap: 8px; z-index: 2;";s.innerHTML=`
        <div class="workout-item-header">
            <span class="workout-item-title">${n.name}</span>
            <span class="workout-item-duration">⏱️ ${Ie(r*1e3)}</span>
        </div>
        <div class="workout-item-desc">${n.description}</div>
        <div class="workout-tags">
            ${(n.tags||[]).map(h=>`<span class="workout-tag">${h}</span>`).join("")}
        </div>
        <div style="${d}">
            ${c}
        </div>
    `,s.querySelector(".export-workout-btn")?.addEventListener("click",h=>{h.stopPropagation(),fp(n)}),i&&s.querySelector(".delete-workout-btn")?.addEventListener("click",p=>{p.stopPropagation(),confirm(`Delete workout "${n.name}"?`)&&(up(n.id),Dn(),V(`Deleted workout: ${n.name}`,"assertive"))}),s.addEventListener("click",h=>{if(h.target.tagName==="BUTTON")return;Rr(n);const p=document.getElementById("workoutSelectionModal");p&&(p.style.display="none")}),s.addEventListener("keydown",h=>{if(h.key==="Enter"||h.key===" "){h.preventDefault(),Rr(n);const p=document.getElementById("workoutSelectionModal");p&&(p.style.display="none")}}),e.appendChild(s)}function Rr(n,e){if(Ae){if(!confirm("A workout is already active. Stop it and start this one?"))return;Ae.stop()}fo.init(),Ae=new dp(n);let i=!1;Ae.setCallback(s=>{vp(s),s.isFinished&&!i&&e&&(i=!0,e())});const r=document.getElementById("workoutPlayerOverlay");r&&(r.style.display="block"),V(`Starting workout: ${n.name}. Ready to start.`,"assertive")}function gp(){const n=document.getElementById("workoutPlayerOverlay"),e=document.getElementById("wpMinimize"),i=document.getElementById("wpClose"),r=document.getElementById("wpSkip");n&&(i?.addEventListener("click",()=>{Ae&&confirm("Stop current workout?")&&(Ae.stop(),Ae=null,n.style.display="none",V("Workout stopped","polite"))}),e?.addEventListener("click",()=>{const s=n.querySelector(".workout-player-body");if(s){const c=s.style.display==="none";s.style.display=c?"block":"none",e.textContent=c?"_":"□"}}),r?.addEventListener("click",()=>{Ae&&(Ae.nextStep(),V("Skipped to next step","polite"))}))}function vp(n){const e=document.getElementById("wpWorkoutName"),i=document.getElementById("wpStepDescription"),r=document.getElementById("wpStepTime"),s=document.getElementById("wpStepDuration"),c=document.getElementById("wpTargetPower"),d=document.getElementById("wpNextStep"),u=document.getElementById("wpProgress");if(e&&(e.textContent=n.workout.name),n.currentStep){i&&(i.textContent=n.currentStep.description||n.currentStep.name||n.currentStep.type.toUpperCase());const h=n.currentStep.duration-n.stepElapsedTime;r&&(r.textContent=br(Math.max(0,h))),s&&(s.textContent=br(n.currentStep.duration)),c&&(c.textContent=n.currentAbsoluteTarget?.value?Math.round(n.currentAbsoluteTarget.value).toString():"--")}if(d)if(n.nextStep){const h=yp(n.nextStep);d.textContent=`${n.nextStep.type} (${br(n.nextStep.duration)}${h})`}else d.textContent="Finish";if(u){const h=n.stepElapsedTime/n.currentStep.duration*100;u.style.width=`${Math.min(100,Math.max(0,h))}%`,n.currentStep.type==="active"?u.style.backgroundColor="#ff9800":n.currentStep.type==="rest"||n.currentStep.type==="warmup"?u.style.backgroundColor="#2196F3":u.style.backgroundColor="#4CAF50"}if(n.isFinished){const h=document.getElementById("workoutPlayerOverlay");h&&(h.style.display="none"),Ae=null,alert("Workout Complete!"),V("Workout Complete!","assertive")}}function br(n){const e=Math.floor(n/60),i=n%60;return`${e.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}function yp(n){const e=n.target;return e&&e.value?` @ ~${e.value}${e.unit==="percent_ftp"?"%":"W"}`:""}function Ic(){Ae&&Ae.start()}function Ac(){Ae&&Ae.pause()}let Kt=[];function Dc(){const n=document.getElementById("createWorkoutBtn"),e=document.getElementById("closeBuilderModal"),i=document.getElementById("wbCancel"),r=document.getElementById("wbSave"),s=document.getElementById("wbAddStepRef");n&&n.addEventListener("click",_p),e&&e.addEventListener("click",Hr),i&&i.addEventListener("click",Hr),r&&r.addEventListener("click",xp),s&&s.addEventListener("click",bp);const c=document.getElementById("wbTargetType");c&&c.addEventListener("change",()=>{const d=document.getElementById("wbTargetValue");d&&(d.parentElement.style.display=c.value==="open"?"none":"block")})}function _p(){const n=document.getElementById("workoutBuilderModal"),e=document.getElementById("workoutSelectionModal");e&&(e.style.display="none"),n&&(n.style.display="flex",wp())}function Hr(){const n=document.getElementById("workoutBuilderModal");n&&(n.style.display="none")}function wp(){Kt=[],document.getElementById("wbName").value="",document.getElementById("wbDesc").value="",ns()}function bp(){const n=document.getElementById("wbStepType").value,e=document.getElementById("wbStepDuration").value,i=document.getElementById("wbTargetType").value,r=document.getElementById("wbTargetValue").value,s=parseInt(e,10),c=i;if(isNaN(s)||s<=0){alert("Invalid duration");return}let d;if(c!=="open"&&(d=parseInt(r,10),isNaN(d))){alert("Invalid target value");return}const h={type:n,duration:s,target:{type:c==="open"?"open":"power",unit:c==="percent_ftp"?"percent_ftp":"watts",value:d},description:`${zc(n)} (${Bc(s)})`};Kt.push(h),ns(),V(`Added step: ${h.description}`,"polite")}function ns(){const n=document.getElementById("wbStepsList");if(n){if(Kt.length===0){n.innerHTML=`<div class="wb-step-empty" style="text-align: center; color: var(--color-text-secondary); padding: 1rem; border: 1px dashed var(--color-border);">
                        No steps added yet.
                    </div>`;return}n.innerHTML="",Kt.forEach((e,i)=>{const r=document.createElement("div");r.className="wb-step-item",r.style.background="var(--card-bg-hover)",r.style.padding="8px",r.style.borderRadius="4px",r.style.display="flex",r.style.justifyContent="space-between",r.style.alignItems="center",r.style.border="1px solid var(--color-border)";const s=e.target,c=!s||s.type==="open"?"Open effort":`${s.value} ${s.unit==="percent_ftp"?"%":"W"}`;r.innerHTML=`
            <div>
                <strong>${i+1}. ${zc(e.type)}</strong> - ${Bc(e.duration)}
                <div style="font-size: 0.85em; color: var(--color-text-secondary)">${c}</div>
            </div>
            <button class="remove-step-btn" data-index="${i}" style="color: var(--color-error); background: none; border: none; cursor: pointer;">🗑️</button>
        `,n.appendChild(r)}),n.querySelectorAll(".remove-step-btn").forEach(e=>{e.addEventListener("click",i=>{const r=parseInt(i.target.getAttribute("data-index")||"-1",10);r>=0&&(Kt.splice(r,1),ns())})})}}function xp(){const n=document.getElementById("wbName").value.trim(),e=document.getElementById("wbDesc").value.trim();if(!n){alert("Please enter a workout name");return}if(Kt.length===0){alert("Please add at least one step");return}const i={id:crypto.randomUUID(),name:n,description:e,steps:Kt,tags:["custom"]};Pc(i),Dn(),Hr(),V(`Workout saved: ${n}`,"assertive")}function zc(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Bc(n){const e=Math.floor(n/60),i=n%60;return e>0?`${e}m ${i}s`:`${i}s`}class Sp{id="workouts";isInitialized=!1;init(e){const i=document.getElementById("workoutSelectionTemplate");if(i){const r=i.content.cloneNode(!0);e.appendChild(r),setTimeout(()=>{hp(),Dc(),this.isInitialized=!0},0)}else console.error("Workouts template not found!"),e.innerHTML="<p>Error loading workouts view</p>"}onEnter(){this.isInitialized?Dn():setTimeout(()=>Dn(),50)}onLeave(){}}function he(n,e="info",i=3e3){if(customElements.get("bpt-toast")){Vt.show(n,e,{duration:i});return}const r=document.createElement("div"),s=e==="error"?"#b91c1c":e==="success"?"#15803d":e==="warning"?"#a16207":"#1d4ed8";r.setAttribute("role","alert"),r.setAttribute("aria-live","assertive"),r.style.cssText=`
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
  `,r.textContent=n,document.body.appendChild(r),setTimeout(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches?r.remove():(r.style.opacity="0",r.style.transition="opacity 0.3s ease",setTimeout(()=>r.remove(),300))},i)}function $e(n){const e=document.getElementById(n);if(!e)throw new Error(`Critical DOM element missing: #${n}. Ensure index.html is correct.`);return e}const jt=[{id:"welcome",title:"Welcome to Bike Power Tracker!",icon:"🚴",content:`
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
        `}];function Ep(){const n=document.createElement("div");return n.id="onboardingModal",n.className="stream-modal",n.setAttribute("role","dialog"),n.setAttribute("aria-labelledby","onboardingTitle"),n.setAttribute("aria-modal","true"),n.style.display="none",n.innerHTML=`
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
    `,n}function kp(n,e,i){n.innerHTML="";for(let r=0;r<i;r++){const s=document.createElement("span");s.style.cssText=`
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${r===e?"#2196F3":"#d0d7de"};
            transition: background 0.3s ease;
        `,s.setAttribute("aria-hidden","true"),n.appendChild(s)}}function Tp(n,e,i,r){const{icon:s,title:c,content:d,inputContainer:u,inputField:h,inputLabel:p,inputUnit:_,helpText:f,prevBtn:v,nextBtn:y,progressDots:b}=r;if(s.textContent=n.icon,c.textContent=n.title,d.innerHTML=n.content,n.inputType==="number"&&n.profileKey){u.style.display="block",p.textContent=n.inputLabel||"",h.placeholder=n.inputPlaceholder||"",h.min=String(n.inputMin||0),h.max=String(n.inputMax||9999),_.textContent=n.inputUnit||"",f.textContent=n.helpText||"";const S=i[n.profileKey];h.value=S?String(S):"",h.focus()}else u.style.display="none";v.style.display=e===0?"none":"inline-block",e===jt.length-1?y.textContent="Get Started! 🚀":(n.inputType,y.textContent="Next →"),kp(b,e,jt.length),V(`Step ${e+1} of ${jt.length}: ${n.title}`)}function Lp(n=!1){return new Promise(e=>{const i=bi();if(!n&&i.onboardingComplete){e(i);return}let r=document.getElementById("onboardingModal");r||(r=Ep(),document.body.appendChild(r));const s=$e("onboardingIcon"),c=$e("onboardingStepTitle"),d=$e("onboardingContent"),u=$e("onboardingInput"),h=$e("onboardingInputField"),p=$e("onboardingInputLabel"),_=$e("onboardingInputUnit"),f=$e("onboardingHelpText"),v=$e("onboardingPrev"),y=$e("onboardingNext"),b=$e("skipOnboarding"),S=$e("onboardingProgressDots"),E={icon:s,title:c,content:d,inputContainer:u,inputField:h,inputLabel:p,inputUnit:_,helpText:f,prevBtn:v,nextBtn:y,progressDots:S};let P=0;const T=()=>{const O=jt[P];if(O.inputType==="number"&&O.profileKey){const F=h.value?parseFloat(h.value):null;F!==null&&O.profileKey!=="onboardingComplete"&&O.profileKey!=="lastUpdated"&&(i[O.profileKey]=F)}},D=()=>{Tp(jt[P],P,i,E)},z=()=>{if(jt[P].inputType==="number"&&!h.checkValidity()){h.reportValidity();return}T(),P<jt.length-1?(P++,D()):(i.onboardingComplete=!0,Fr(i),r.style.display="none",he("Profile saved! Ready to ride 🚴","success"),V("Onboarding complete. Profile saved."),e(i))},$=()=>{T(),P>0&&(P--,D())},A=()=>{i.onboardingComplete=!0,Fr(i),r.style.display="none",V("Onboarding skipped"),e(i)};y.addEventListener("click",z),v.addEventListener("click",$),b.addEventListener("click",A),h.addEventListener("keydown",O=>{O.key==="Enter"&&z()}),r.style.display="flex",D(),Sm(r.querySelector(".stream-modal-content"))})}function Cp(){return!bi().onboardingComplete}function Pp(){Cp()&&setTimeout(()=>{Lp()},500)}const $c="bpt-settings",_n={enabled:!1,source:"speed",threshold:3,delay:3},wo={promptForNotes:!0,promptForExertion:!0},hi={duration:0,enableBeep:!0,enableVoice:!1},wn={enabled:!1,source:"distance",distanceKm:1,timeMinutes:5},xt={power:!0,heartrate:!0,cadence:!1,speed:!0,distance:!0,time:!0},mi={timeIntervalMinutes:0,distanceIntervalKm:0,metrics:{...xt},speechRate:1},bn={enabled:!1,apiKey:"",athleteId:"i",autoUpload:!1},le={power:!0,cadence:!0,heartrate:!0,speed:!0,distance:!0,altitude:!0,treadmillSpeed:!1,power3s:!1,highContrast:!1,colorblindPatterns:!1,voiceEnabled:!1,voiceLaps:!0,voiceZones:!0,exportTcx:!0,exportCsv:!0,exportJson:!1,exportFit:!1,autoPause:{..._n},workoutMetadata:{...wo},countdown:{...hi},autoLap:{...wn},enhancedVoice:{...mi},intervals:{...bn},weightKg:75,showCalories:!1,debugMode:!1};function ve(){const n=localStorage.getItem($c);if(n){const e=JSON.parse(n);return{...le,...e,autoPause:{..._n,...e.autoPause||{}},workoutMetadata:{...wo,...e.workoutMetadata||{}},countdown:{...hi,...e.countdown||{}},autoLap:{...wn,...e.autoLap||{}},enhancedVoice:{...mi,...e.enhancedVoice||{},metrics:{...xt,...e.enhancedVoice?.metrics||{}}},intervals:{...bn,...e.intervals||{}},weightKg:e.weightKg??75,showCalories:e.showCalories??!1}}return{...le}}function Mp(n){localStorage.setItem($c,JSON.stringify(n)),window.dispatchEvent(new CustomEvent("settings-changed"))}const Oe={listeners:new Set,isEnabled(){return!!ve().debugMode},async log(n,e){const i=this.bufferToHex(e.buffer);if(this.listeners.forEach(r=>r(n,i)),!!this.isEnabled())try{await dc(n,i)}catch(r){console.warn("Failed to log debug data",r)}},addListener(n){this.listeners.add(n)},removeListener(n){this.listeners.delete(n)},bufferToHex(n){return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,"0")).join("").toUpperCase()},async exportLogs(){const n=await Ar(),e=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),i=URL.createObjectURL(e),r=document.createElement("a");r.href=i,r.download=`bpt-debug-logs-${Date.now()}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i)},async clearLogs(){await uc()},async getLogCount(){return(await Ar()).length}};let Gt=null;const Ip=()=>{window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Gt=n,Zr()}),window.addEventListener("appinstalled",()=>{console.log("PWA was installed successfully"),Gt=null,Zr()})},ka=()=>Gt!==null,Ap=async()=>{if(!Gt)return"unavailable";try{await Gt.prompt();const{outcome:n}=await Gt.userChoice;return console.log(`User response to the install prompt: ${n}`),Gt=null,Zr(),n}catch(n){return console.error("Error triggering install prompt:",n),"unavailable"}},Zr=()=>{const n=document.getElementById("installPwaButton"),e=document.getElementById("installPwaContainer");n&&(n.style.display=ka()?"block":"none"),e&&(e.style.display=ka()?"block":"none")};class Dp{measurementsState;timeState;callbacks;state;changeCallback=null;constructor(e,i,r){this.measurementsState=e,this.timeState=i,this.callbacks=r,this.state={isAutoPaused:!1,belowThresholdSince:null,delayTimer:null}}start(){this.stop();const e=ve();if(!e.autoPause.enabled){console.log("[AutoPause] Disabled, not starting");return}console.log("[AutoPause] Starting with settings:",e.autoPause),this.changeCallback=()=>this.checkMetric(),this.measurementsState.onChange(this.changeCallback),this.startPeriodicCheck()}stop(){this.changeCallback&&(this.measurementsState.offChange(this.changeCallback),this.changeCallback=null),this.clearDelayTimer(),this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null),this.state={isAutoPaused:!1,belowThresholdSince:null,delayTimer:null},console.log("[AutoPause] Stopped")}get isAutoPaused(){return this.state.isAutoPaused}getCurrentValue(e){const s=Date.now()-5e3;let c;switch(e){case"speed":c=this.measurementsState.speed;break;case"power":c=this.measurementsState.power;break;case"cadence":c=this.measurementsState.cadence;break;default:return null}const d=c.filter(h=>h.timestamp>=s);return d.length===0?null:d[d.length-1].value}checkMetric(){const e=ve();if(!e.autoPause.enabled||!this.timeState.startTime)return;const{source:i,threshold:r,delay:s}=e.autoPause,c=this.getCurrentValue(i);if(c===null)return;const d=c>=r,u=Date.now();if(d)this.clearDelayTimer(),this.state.belowThresholdSince=null,this.state.isAutoPaused&&!this.timeState.running&&(console.log(`[AutoPause] Resuming - ${i} at ${c.toFixed(1)} (threshold: ${r})`),this.state.isAutoPaused=!1,this.callbacks.onAutoResume());else{this.state.belowThresholdSince||(this.state.belowThresholdSince=u);const h=u-this.state.belowThresholdSince,p=s*1e3;!this.state.isAutoPaused&&this.timeState.running&&h>=p&&(console.log(`[AutoPause] Pausing - ${i} at ${c.toFixed(1)} (threshold: ${r}) for ${(h/1e3).toFixed(1)}s`),this.state.isAutoPaused=!0,this.callbacks.onAutoPause())}}clearDelayTimer(){this.state.delayTimer&&(clearTimeout(this.state.delayTimer),this.state.delayTimer=null)}intervalId=null;startPeriodicCheck(){this.intervalId&&clearInterval(this.intervalId),this.intervalId=setInterval(()=>{this.checkMetric()},1e3)}reset(){this.stop(),this.state={isAutoPaused:!1,belowThresholdSince:null,delayTimer:null}}getStatus(){const e=ve();return{enabled:e.autoPause.enabled,isAutoPaused:this.state.isAutoPaused,source:e.autoPause.source,threshold:e.autoPause.threshold,currentValue:this.getCurrentValue(e.autoPause.source)}}}function zp(n){switch(n){case"speed":return"km/h";case"power":return"W";case"cadence":return"rpm";default:return""}}const Ta={activeSport:"cycling",running:{targetPaceMin:300,targetPaceMax:360,useRunningCadence:!0,showPace:!0},cycling:{showPower:!0}},Oc="bpt-sport-settings";function La(){try{const n=localStorage.getItem(Oc);if(n)return{...Ta,...JSON.parse(n)}}catch(n){console.warn("Failed to load sport settings:",n)}return{...Ta}}function Bp(n){localStorage.setItem(Oc,JSON.stringify(n)),window.dispatchEvent(new CustomEvent("sport-settings-changed",{detail:n}))}function $p(n){if(n>=9999||n<=0)return"--:--";const e=Math.floor(n/60),i=Math.round(n%60);return`${e}:${i.toString().padStart(2,"0")}`}function Op(){const n=document.getElementById("saveSettings"),e=document.getElementById("settingFtp"),i=document.getElementById("settingMaxHr"),r=document.getElementById("settingWeight"),s=document.getElementById("settingSpeed"),c=document.getElementById("settingDistance"),d=document.getElementById("settingAltitude"),u=document.getElementById("settingShowCalories"),h=document.getElementById("settingPower"),p=document.getElementById("settingCadence"),_=document.getElementById("settingHeartrate"),f=document.getElementById("settingTreadmillSpeed"),v=document.getElementById("settingPower3s"),y=document.getElementById("settingHighContrast"),b=document.getElementById("settingColorblindPatterns"),S=document.getElementById("settingVoiceEnabled"),E=document.getElementById("settingVoiceLaps"),P=document.getElementById("settingVoiceZones"),T=document.getElementById("settingAutoPauseEnabled"),D=document.getElementById("settingAutoPauseSource"),z=document.getElementById("settingAutoPauseThreshold"),$=document.getElementById("settingAutoPauseDelay"),A=document.getElementById("autoPauseOptions"),O=document.getElementById("autoPauseThresholdUnit"),F=document.getElementById("settingExportTcx"),q=document.getElementById("settingExportCsv"),te=document.getElementById("settingExportJson"),Y=document.getElementById("settingExportFit"),W=document.getElementById("settingPromptForNotes"),re=document.getElementById("settingPromptForExertion"),ae=document.getElementById("settingCountdownDuration"),Ke=document.getElementById("settingCountdownBeep"),we=document.getElementById("settingCountdownVoice"),De=document.getElementById("settingAutoLapEnabled"),R=document.getElementById("settingAutoLapSource"),Pt=document.getElementById("settingAutoLapDistance"),H=document.getElementById("settingAutoLapTime"),ne=document.getElementById("autoLapOptions"),be=document.getElementById("autoLapDistanceOption"),xe=document.getElementById("autoLapTimeOption"),se=document.getElementById("settingVoiceTimeInterval"),Q=document.getElementById("settingVoiceDistanceInterval"),G=document.getElementById("settingVoiceSpeechRate"),ze=document.getElementById("settingVoiceMetricPower"),Ne=document.getElementById("settingVoiceMetricHeartrate"),tn=document.getElementById("settingVoiceMetricCadence"),Mt=document.getElementById("settingVoiceMetricSpeed"),It=document.getElementById("settingVoiceMetricDistance"),at=document.getElementById("settingVoiceMetricTime"),Fe=document.getElementById("settingSportType"),nn=document.getElementById("settingShowPace"),At=document.getElementById("settingThresholdPace"),Rn=document.getElementById("runningOptions"),Je=document.getElementById("settingIntervalsEnabled"),We=document.getElementById("settingIntervalsApiKey"),Hn=document.getElementById("toggleIntervalsApiKey"),on=document.getElementById("settingIntervalsAthleteId"),Dt=document.getElementById("settingIntervalsAutoUpload"),Zn=document.getElementById("intervalsOptions"),rn=document.getElementById("settingDebugMode"),Pi=document.getElementById("debugControls"),No=document.getElementById("downloadDebugLogs"),qn=document.getElementById("clearDebugLogs"),Mi=document.getElementById("installPwaButton"),Wn=()=>{Zn&&Je&&(Zn.style.display=Je.checked?"flex":"none")},Ii=()=>{if(Rn&&Fe){const I=Fe.value==="running"||Fe.value==="walking";Rn.style.display=I?"block":"none"}},Ai=I=>{const ie=I.match(/^(\d{1,2}):([0-5]\d)$/);if(!ie)return null;const _t=parseInt(ie[1],10),ct=parseInt(ie[2],10);return _t*60+ct},Di=()=>{const I=La();if(Fe&&(I.activeSport=Fe.value),nn!==null&&(I.running.showPace=nn.checked),At?.value){const ie=Ai(At.value);ie!==null&&(I.running.targetPaceMin=ie-30,I.running.targetPaceMax=ie+30)}Bp(I)},Fo=()=>{const I=La();if(Fe&&(Fe.value=I.activeSport),nn&&(nn.checked=I.running.showPace),At){const ie=Math.round((I.running.targetPaceMin+I.running.targetPaceMax)/2);At.value=$p(ie)}Ii()};Fe?.addEventListener("change",Ii),Hn?.addEventListener("click",()=>{if(We){const I=We.type==="password";We.type=I?"text":"password",Hn&&(Hn.textContent=I?"🙈":"👁️")}}),Je?.addEventListener("change",Wn);const sn=()=>{if(A&&T&&(A.style.opacity=T.checked?"1":"0.5",A.style.pointerEvents=T.checked?"auto":"none"),O&&D){const I=zp(D.value);O.textContent=I}};T?.addEventListener("change",sn),D?.addEventListener("change",sn);const zt=()=>{if(ne&&De&&(ne.style.opacity=De.checked?"1":"0.5",ne.style.pointerEvents=De.checked?"auto":"none"),be&&xe&&R){const I=R.value==="distance";be.style.display=I?"flex":"none",xe.style.display=I?"none":"flex"}};De?.addEventListener("change",zt),R?.addEventListener("change",zt);const Vn=I=>{const ie=(ct,zi)=>{document.querySelectorAll(`.metric-group-${ct}`).forEach(Ho=>{Ho.style.display=zi?"flex":"none"})};ie("speed",I.speed),ie("distance",I.distance),ie("altitude",I.altitude),ie("energy",I.showCalories),ie("power",I.power),ie("cadence",I.cadence),ie("heartrate",I.heartrate),ie("treadmillSpeed",I.treadmillSpeed),document.querySelectorAll(".metric-group-power").forEach(ct=>{I.power3s?ct.setAttribute("data-show-avg","true"):ct.removeAttribute("data-show-avg")}),I.highContrast?document.documentElement.setAttribute("data-high-contrast","true"):document.documentElement.removeAttribute("data-high-contrast"),I.colorblindPatterns?document.documentElement.setAttribute("data-colorblind-patterns","true"):document.documentElement.removeAttribute("data-colorblind-patterns"),Pi&&(Pi.style.display=I.debugMode?"flex":"none")},Ro=()=>{const ie={...bi(),ftp:e?.value?Number(e.value):null,maxHr:i?.value?Number(i.value):null,weight:r?.value?Number(r.value):null};Fr(ie),window.dispatchEvent(new CustomEvent("user-profile-changed"));const _t={speed:s?.checked??le.speed,distance:c?.checked??le.distance,altitude:d?.checked??le.altitude,weightKg:r?.value?Number(r.value):le.weightKg,showCalories:u?.checked??le.showCalories,power:h?.checked??le.power,cadence:p?.checked??le.cadence,heartrate:_?.checked??le.heartrate,treadmillSpeed:f?.checked??le.treadmillSpeed,power3s:v?.checked??le.power3s,highContrast:y?.checked??le.highContrast,colorblindPatterns:b?.checked??le.colorblindPatterns,voiceEnabled:S?.checked??le.voiceEnabled,voiceLaps:E?.checked??le.voiceLaps,voiceZones:P?.checked??le.voiceZones,autoPause:{enabled:T?.checked??_n.enabled,source:D?.value??_n.source,threshold:z?.value?Number(z.value):_n.threshold,delay:$?.value?Number($.value):_n.delay},workoutMetadata:{promptForNotes:W?.checked??wo.promptForNotes,promptForExertion:re?.checked??wo.promptForExertion},countdown:{duration:ae?.value?parseInt(ae.value):hi.duration,enableBeep:Ke?.checked??hi.enableBeep,enableVoice:we?.checked??hi.enableVoice},autoLap:{enabled:De?.checked??wn.enabled,source:R?.value??wn.source,distanceKm:Pt?.value?Number(Pt.value):wn.distanceKm,timeMinutes:H?.value?Number(H.value):wn.timeMinutes},enhancedVoice:{timeIntervalMinutes:se?.value?parseInt(se.value):mi.timeIntervalMinutes,distanceIntervalKm:Q?.value?parseInt(Q.value):mi.distanceIntervalKm,metrics:{power:ze?.checked??xt.power,heartrate:Ne?.checked??xt.heartrate,cadence:tn?.checked??xt.cadence,speed:Mt?.checked??xt.speed,distance:It?.checked??xt.distance,time:at?.checked??xt.time},speechRate:G?.value?parseFloat(G.value):mi.speechRate},intervals:{enabled:Je?.checked??bn.enabled,apiKey:We?.value??bn.apiKey,athleteId:on?.value??bn.athleteId,autoUpload:Dt?.checked??bn.autoUpload},exportTcx:F?.checked??le.exportTcx,exportCsv:q?.checked??le.exportCsv,exportJson:te?.checked??le.exportJson,exportFit:Y?.checked??le.exportFit,debugMode:rn?.checked??le.debugMode};Mp(_t),Di(),Vn(_t)},Bt=()=>{const I=ve(),ie=bi();e&&(e.value=ie.ftp?.toString()??""),i&&(i.value=ie.maxHr?.toString()??""),r&&(r.value=ie.weight?.toString()??""),h&&(h.checked=I.power),p&&(p.checked=I.cadence),_&&(_.checked=I.heartrate),s&&(s.checked=I.speed),c&&(c.checked=I.distance),d&&(d.checked=I.altitude),u&&(u.checked=I.showCalories),f&&(f.checked=I.treadmillSpeed),v&&(v.checked=I.power3s),y&&(y.checked=I.highContrast),b&&(b.checked=I.colorblindPatterns),S&&(S.checked=I.voiceEnabled),E&&(E.checked=I.voiceLaps),P&&(P.checked=I.voiceZones),T&&(T.checked=I.autoPause.enabled),D&&(D.value=I.autoPause.source),z&&(z.value=I.autoPause.threshold.toString()),$&&($.value=I.autoPause.delay.toString()),sn(),F&&(F.checked=I.exportTcx),q&&(q.checked=I.exportCsv),te&&(te.checked=I.exportJson),Y&&(Y.checked=I.exportFit),W&&(W.checked=I.workoutMetadata.promptForNotes),re&&(re.checked=I.workoutMetadata.promptForExertion),ae&&(ae.value=I.countdown.duration.toString()),Ke&&(Ke.checked=I.countdown.enableBeep),we&&(we.checked=I.countdown.enableVoice),De&&(De.checked=I.autoLap.enabled),R&&(R.value=I.autoLap.source),Pt&&(Pt.value=I.autoLap.distanceKm.toString()),H&&(H.value=I.autoLap.timeMinutes.toString()),zt(),se&&(se.value=I.enhancedVoice.timeIntervalMinutes.toString()),Q&&(Q.value=I.enhancedVoice.distanceIntervalKm.toString()),G&&(G.value=I.enhancedVoice.speechRate.toString()),ze&&(ze.checked=I.enhancedVoice.metrics.power),Ne&&(Ne.checked=I.enhancedVoice.metrics.heartrate),tn&&(tn.checked=I.enhancedVoice.metrics.cadence),Mt&&(Mt.checked=I.enhancedVoice.metrics.speed),It&&(It.checked=I.enhancedVoice.metrics.distance),at&&(at.checked=I.enhancedVoice.metrics.time),Je&&(Je.checked=I.intervals.enabled),We&&(We.value=I.intervals.apiKey),on&&(on.value=I.intervals.athleteId),Dt&&(Dt.checked=I.intervals.autoUpload),Wn(),rn&&(rn.checked=I.debugMode),Fo(),Vn(I)};n?.addEventListener("click",Ro),No?.addEventListener("click",()=>{Oe.exportLogs()}),qn?.addEventListener("click",async()=>{confirm("Are you sure you want to clear all debug logs?")&&(await Oe.clearLogs(),alert("Logs cleared."))}),Mi?.addEventListener("click",async()=>{const I=await Ap();I==="accepted"?console.log("PWA installation accepted"):I==="dismissed"?console.log("PWA installation dismissed"):alert("Installation is not available at this time. The app may already be installed or your browser does not support installation.")}),Bt()}let ye={profile:vi(),selectedScreenIndex:0,isEditing:!1,searchQuery:"",selectedCategory:"all"};const qr=new Set;function Np(n){return qr.add(n),()=>qr.delete(n)}function Nc(){qr.forEach(n=>n())}function Ln(n){ye={...ye,...n},Nc()}function Fp(){const n=vi();Ln({profile:n,selectedScreenIndex:Math.min(ye.selectedScreenIndex,n.screens.length-1)})}function Rp(){const n=Yd(ye.profile);return n&&document.dispatchEvent(new CustomEvent("data-fields-profile-changed",{detail:{profile:ye.profile}})),n}function en(){return ye.profile.screens[ye.selectedScreenIndex]??null}function Hp(n,e="medium"){const i=en();if(!i)return;const r=Ya(i,n,e);Ti(r)}function Zp(n){const e=en();if(!e)return;const i=Ka(e,n);Ti(i)}function qp(n,e){const i=en();if(!i)return;const r=Ja(i,n,e);Ti(r)}function Wp(n){const e=en();if(!e)return;const i={...e,layout:n};Ti(i)}function Ti(n){const e=[...ye.profile.screens];e[ye.selectedScreenIndex]=n,Ln({profile:{...ye.profile,screens:e}})}function Vp(n,e){const i=en();if(!i)return;const r=[...i.slots],[s]=r.splice(n,1);r.splice(e,0,s);const c=r.map((d,u)=>({...d,position:u}));Ti({...i,slots:c})}function Up(){let n;if(ye.searchQuery.trim())n=ec(ye.searchQuery);else if(ye.selectedCategory==="all"){const e=Mr();n=Array.from(e.values()).flat()}else n=Qa(ye.selectedCategory);return n}const jp={all:"📊",power:"⚡",heartrate:"❤️",cadence:"🔄",speed:"🚴",distance:"📍",elevation:"⛰️",time:"⏱️",laps:"🏁",energy:"🔥",environment:"🌡️",device:"🔋",charts:"📈",map:"🗺️"};function Gp(n){n.innerHTML=`
        <div class="data-fields-config">
            <div class="dfc-header">
                <h3>📊 Data Fields</h3>
                <p class="dfc-help-text">Configure which metrics appear on your dashboard screens.</p>
            </div>
            
            <div class="dfc-screens">
                <div class="dfc-screens-tabs" role="tablist"></div>
            </div>
            
            <div class="dfc-current-screen">
                <div class="dfc-screen-header">
                    <span class="dfc-screen-name"></span>
                    <select class="dfc-layout-select" aria-label="Screen layout">
                        <option value="auto">Auto Layout</option>
                        <option value="grid-2">2 Columns</option>
                        <option value="grid-3">3 Columns</option>
                        <option value="grid-4">4 Columns</option>
                        <option value="list">List</option>
                    </select>
                </div>
                <div class="dfc-fields-list" role="list" aria-label="Current screen fields"></div>
                <button class="dfc-add-field-btn" type="button">
                    <span>+</span> Add Field
                </button>
            </div>
            
            <div class="dfc-field-picker" style="display: none;">
                <div class="dfc-picker-header">
                    <h4>Select a Field</h4>
                    <button class="dfc-picker-close" type="button" aria-label="Close field picker">&times;</button>
                </div>
                <input type="search" class="dfc-search" placeholder="Search fields..." aria-label="Search data fields">
                <div class="dfc-categories" role="tablist"></div>
                <div class="dfc-available-fields" role="listbox" aria-label="Available fields"></div>
            </div>
            
            <div class="dfc-actions">
                <button class="dfc-save-btn" type="button">Save Changes</button>
                <button class="dfc-reset-btn" type="button">Reset to Defaults</button>
            </div>
        </div>
    `,Xp(n),Ca(n),Np(()=>Ca(n))}function Ca(n){Yp(n),Kp(n),Jp(n)}function Yp(n){const e=n.querySelector(".dfc-screens-tabs");e&&(e.innerHTML=ye.profile.screens.map((i,r)=>`
            <button 
                class="dfc-screen-tab ${r===ye.selectedScreenIndex?"dfc-screen-tab--active":""}"
                data-screen-index="${r}"
                role="tab"
                aria-selected="${r===ye.selectedScreenIndex}"
                aria-label="${i.name} screen"
            >
                <span class="dfc-tab-icon">${i.icon}</span>
                <span class="dfc-tab-name">${bo(i.name)}</span>
            </button>
        `).join(""))}function Kp(n){const e=en(),i=n.querySelector(".dfc-screen-name"),r=n.querySelector(".dfc-layout-select"),s=n.querySelector(".dfc-fields-list");if(!(!e||!i||!s||!r)){if(i.textContent=`${e.icon} ${e.name}`,r.value=e.layout,e.slots.length===0){s.innerHTML=`
            <div class="dfc-empty-screen">
                <p>No fields on this screen</p>
                <p class="dfc-empty-hint">Click "Add Field" to add metrics</p>
            </div>
        `;return}s.innerHTML=e.slots.sort((c,d)=>c.position-d.position).map(c=>{const d=gt(c.fieldId),u=d?.name??"Unknown",h=d?.icon??"❓";return`
                <div class="dfc-field-item" data-slot-id="${c.id}" role="listitem" draggable="true">
                    <span class="dfc-field-drag" title="Drag to reorder">⋮⋮</span>
                    <span class="dfc-field-icon">${h}</span>
                    <div class="dfc-field-info">
                        <span class="dfc-field-name">${bo(u)}</span>
                        <span class="dfc-field-id">${c.fieldId}</span>
                    </div>
                    <select class="dfc-field-size" data-slot-id="${c.id}" aria-label="Field size">
                        <option value="small" ${c.size==="small"?"selected":""}>Small</option>
                        <option value="medium" ${c.size==="medium"?"selected":""}>Medium</option>
                        <option value="large" ${c.size==="large"?"selected":""}>Large</option>
                    </select>
                    <button class="dfc-field-remove" data-slot-id="${c.id}" aria-label="Remove ${u}" title="Remove">
                        🗑️
                    </button>
                </div>
            `}).join("")}}function Jp(n){const e=n.querySelector(".dfc-categories"),i=n.querySelector(".dfc-available-fields");if(!e||!i)return;const r=["all","power","heartrate","cadence","speed","distance","elevation","time"];e.innerHTML=r.map(u=>`
            <button 
                class="dfc-category-btn ${u===ye.selectedCategory?"dfc-category-btn--active":""}"
                data-category="${u}"
                role="tab"
                aria-selected="${u===ye.selectedCategory}"
            >
                <span>${jp[u]}</span>
                <span>${u==="all"?"All":u.charAt(0).toUpperCase()+u.slice(1)}</span>
            </button>
        `).join("");const s=Up(),c=en(),d=new Set(c?.slots.map(u=>u.fieldId)??[]);i.innerHTML=s.map(u=>{const h=d.has(u.id);return`
                <button 
                    class="dfc-available-field ${h?"dfc-available-field--used":""}"
                    data-field-id="${u.id}"
                    role="option"
                    aria-selected="false"
                    ${h?"disabled":""}
                >
                    <span class="dfc-af-icon">${u.icon}</span>
                    <div class="dfc-af-info">
                        <span class="dfc-af-name">${bo(u.name)}</span>
                        <span class="dfc-af-desc">${bo(u.description)}</span>
                    </div>
                    ${h?'<span class="dfc-af-badge">Added</span>':""}
                </button>
            `}).join("")}function Xp(n){n.addEventListener("click",i=>{const r=i.target,s=r.closest(".dfc-screen-tab");if(s){const h=parseInt(s.dataset.screenIndex??"0",10);Ln({selectedScreenIndex:h});return}if(r.closest(".dfc-add-field-btn")){ef(n);return}if(r.closest(".dfc-picker-close")){tf(n);return}const c=r.closest(".dfc-category-btn");if(c){const h=c.dataset.category;Ln({selectedCategory:h});return}const d=r.closest(".dfc-available-field");if(d&&!d.hasAttribute("disabled")){const h=d.dataset.fieldId;h&&(Hp(h),Nc());return}const u=r.closest(".dfc-field-remove");if(u){const h=u.dataset.slotId;h&&Zp(h);return}if(r.closest(".dfc-save-btn")){Rp()?Wr("Settings saved!","success"):Wr("Failed to save settings","error");return}if(r.closest(".dfc-reset-btn")){confirm("Reset data fields to defaults? This cannot be undone.")&&nf();return}}),n.addEventListener("change",i=>{const r=i.target;if(r.classList.contains("dfc-layout-select")){Wp(r.value);return}if(r.classList.contains("dfc-field-size")){const s=r.dataset.slotId;s&&qp(s,{size:r.value});return}});const e=n.querySelector(".dfc-search");e&&e.addEventListener("input",i=>{const r=i.target;Ln({searchQuery:r.value})}),Qp(n)}function Qp(n){const e=n.querySelector(".dfc-fields-list");if(!e)return;let i=null,r=-1;e.addEventListener("dragstart",s=>{i=s.target.closest(".dfc-field-item"),i&&(r=Array.from(e.children).indexOf(i),i.classList.add("dfc-field-item--dragging"))}),e.addEventListener("dragend",()=>{i&&i.classList.remove("dfc-field-item--dragging"),i=null,r=-1}),e.addEventListener("dragover",s=>{s.preventDefault();const d=s.target.closest(".dfc-field-item");d&&d!==i&&Array.from(e.querySelectorAll(".dfc-field-item:not(.dfc-field-item--dragging)")).indexOf(d)!==-1&&d.classList.add("dfc-field-item--drag-over")}),e.addEventListener("dragleave",s=>{const d=s.target.closest(".dfc-field-item");d&&d.classList.remove("dfc-field-item--drag-over")}),e.addEventListener("drop",s=>{s.preventDefault();const d=s.target.closest(".dfc-field-item");if(e.querySelectorAll(".dfc-field-item--drag-over").forEach(u=>{u.classList.remove("dfc-field-item--drag-over")}),d&&i&&d!==i){const h=Array.from(e.querySelectorAll(".dfc-field-item")).indexOf(d);r!==-1&&h!==-1&&r!==h&&Vp(r,h)}})}function ef(n){const e=n.querySelector(".dfc-field-picker");if(e){e.style.display="block";const i=e.querySelector(".dfc-search");i&&i.focus()}}function tf(n){const e=n.querySelector(".dfc-field-picker");e&&(e.style.display="none",Ln({searchQuery:"",selectedCategory:"all"}))}function nf(){localStorage.removeItem("bpt-data-fields"),Fp(),Wr("Data fields reset to defaults","info")}function Wr(n,e){const i=new CustomEvent("show-notification",{detail:{message:n,type:e}});document.dispatchEvent(i),console.log(`[DataFieldsConfig] ${e}: ${n}`)}function bo(n){const e=document.createElement("div");return e.textContent=n,e.innerHTML}function of(){const n=document.querySelector("#page-settings .page-content");if(!n){console.warn("[DataFieldsConfig] Settings page content not found");return}if(n.querySelector(".data-fields-config"))return;const e=document.createElement("fieldset");e.className="settings-fieldset",e.style.cssText="border: 1px solid #d0d7de; border-radius: 8px; padding: 16px; margin-bottom: 20px;",e.innerHTML='<legend style="font-weight: 600; padding: 0 8px;">📊 Data Fields Configuration</legend>';const i=n.querySelector("fieldset:nth-child(4)");i&&i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e),Gp(e),console.log("[DataFieldsConfig] Initialized")}class rf{id="settings";init(e){const i=document.getElementById("settingsTemplate");if(i){const r=i.content.cloneNode(!0);e.appendChild(r),setTimeout(()=>{Op(),of()},0)}else console.error("Settings template not found!"),e.innerHTML="<p>Error loading settings view</p>"}onEnter(){console.log("Entered Settings View")}onLeave(){console.log("Left Settings View")}}var Ce=(n=>(n.Dashboard="dashboard",n.History="history",n.Workouts="workouts",n.Settings="settings",n.Plans="plans",n.Debug="debug",n))(Ce||{});const no=(n,e,i)=>({id:n,name:e,description:i,steps:[{type:"warmup",duration:600,target:{type:"power",unit:"percent_ftp",value:50}},{type:"active",duration:300,target:{type:"power",unit:"percent_ftp",value:90}},{type:"recovery",duration:180,target:{type:"power",unit:"percent_ftp",value:50}},{type:"active",duration:300,target:{type:"power",unit:"percent_ftp",value:90}},{type:"recovery",duration:180,target:{type:"power",unit:"percent_ftp",value:50}},{type:"active",duration:300,target:{type:"power",unit:"percent_ftp",value:90}},{type:"cooldown",duration:600,target:{type:"power",unit:"percent_ftp",value:40}}]}),io=(n,e)=>({id:n,name:e,description:"Steady zone 2 effort",steps:[{type:"warmup",duration:300,target:{type:"power",unit:"percent_ftp",value:50}},{type:"active",duration:1800,target:{type:"power",unit:"percent_ftp",value:65}},{type:"cooldown",duration:300,target:{type:"power",unit:"percent_ftp",value:50}}]}),sf={id:"plan-ftp-builder-1",name:"4-Week FTP Booster",description:"A focused 4-week block designed to raise your functional threshold power through sweet spot and threshold intervals.",difficulty:"intermediate",created:Date.now(),updated:Date.now(),weeks:[{weekNumber:1,focus:"Introduction",days:[{dayOfWeek:1,isRestDay:!0,notes:"Rest day. Stretch."},{dayOfWeek:2,isRestDay:!1,workout:no("ftp-w1-d2","Intro Intervals","Basic intervals")},{dayOfWeek:3,isRestDay:!1,workout:io("ftp-w1-d3","Aerobic Base")},{dayOfWeek:4,isRestDay:!0},{dayOfWeek:5,isRestDay:!1,workout:no("ftp-w1-d5","Tempo Work","Harder intervals")},{dayOfWeek:6,isRestDay:!0},{dayOfWeek:7,isRestDay:!1,workout:io("ftp-w1-d7","Long Ride")}]},{weekNumber:2,focus:"Build",days:[{dayOfWeek:1,isRestDay:!0},{dayOfWeek:2,isRestDay:!1,workout:no("ftp-w2-d2","Threshold Push","Pushing limits")},{dayOfWeek:3,isRestDay:!1,workout:io("ftp-w2-d3","Recovery Spin")},{dayOfWeek:4,isRestDay:!0},{dayOfWeek:5,isRestDay:!1,workout:no("ftp-w2-d5","O/U Intervals","Over Unders")},{dayOfWeek:6,isRestDay:!0},{dayOfWeek:7,isRestDay:!1,workout:io("ftp-w2-d7","Sunday Long Ride")}]}]},Pa="bpt-user-plans",oo="bpt-plan-progress";class af{systemPlans=[];constructor(){this.registerSystemPlan(sf)}registerSystemPlan(e){this.systemPlans.push(e)}getAllPlans(){const e=this.getUserPlans();return[...this.systemPlans,...e]}getPlan(e){return this.getAllPlans().find(i=>i.id===e)}getUserPlans(){try{const e=localStorage.getItem(Pa);return e?JSON.parse(e):[]}catch(e){return console.error("Failed to load user plans",e),[]}}saveUserPlan(e){const i=this.getUserPlans(),r=i.findIndex(s=>s.id===e.id);r>=0?i[r]=e:i.push(e),localStorage.setItem(Pa,JSON.stringify(i))}getActiveProgress(){try{const e=localStorage.getItem(oo);return e?JSON.parse(e):null}catch{return null}}startPlan(e,i=Date.now()){const r={planId:e,startDate:i,completedDays:{}};localStorage.setItem(oo,JSON.stringify(r))}markDayComplete(e,i){const r=this.getActiveProgress();if(!r)return;const s=`${e}-${i}`;r.completedDays[s]=!0,localStorage.setItem(oo,JSON.stringify(r))}stopActivePlan(){localStorage.removeItem(oo)}}const nt=new af;class cf{id=Ce.Plans;container=null;init(e){this.container=e,this.render()}onEnter(){console.log("Entered Plans View"),this.render()}onLeave(){console.log("Left Plans View")}render(){this.container&&this.renderDashboard()}renderDashboard(){if(!this.container)return;const e=nt.getActiveProgress(),i=nt.getAllPlans();let r=`
            <div class="page-header" style="padding: 16px; border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
                <h2>📅 Training Plans</h2>
            </div>
            <div class="page-content" style="padding: 16px;">
        `;if(e){const s=nt.getPlan(e.planId);s&&(r+=this.renderActivePlan(s,e))}r+=`
            <h3>Available Plans</h3>
            <div class="plans-list" style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));">
                ${i.map(s=>this.renderPlanCard(s,e?.planId===s.id)).join("")}
            </div>
        </div>`,this.container.innerHTML=r,this.attachListeners(this.container)}renderActivePlan(e,i){const r=Math.floor((Date.now()-i.startDate)/864e5),s=Math.floor(r/7)+1,c=r%7+1;return`
            <div class="active-plan-card" style="background: var(--card-bg); padding: 16px; border-radius: 8px; margin-bottom: 24px; border: 2px solid var(--color-primary);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                    <h3 style="margin: 0;">Currently Following: ${e.name}</h3>
                    <span class="status-badge" style="background: var(--color-primary); color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8em;">Active</span>
                </div>
                <p><strong>Week ${s}, Day ${c}</strong></p>
                <div style="margin-top: 12px;">
                    <button class="workout-btn btn-stop-plan" data-id="${e.id}" style="background: var(--color-error); font-size: 0.9em;">Stop Plan</button>
                    <button class="workout-btn btn-view-plan" data-id="${e.id}" style="font-size: 0.9em;">View Schedule</button>
                </div>
            </div>
        `}renderPlanCard(e,i){return`
            <div class="plan-card" style="background: var(--card-bg); padding: 16px; border-radius: 8px; border: 1px solid var(--color-border); ${i?"opacity: 0.6;":""}">
                <h4 style="margin: 0 0 8px 0;">${e.name}</h4>
                <div style="font-size: 0.9em; color: var(--color-text-secondary); margin-bottom: 12px;">
                    ${e.weeks.length} Weeks • ${e.difficulty||"Intermediate"}
                </div>
                <p style="font-size: 0.9em; margin-bottom: 16px; line-height: 1.4;">${e.description}</p>
                <button class="workout-btn btn-view-plan" data-id="${e.id}" style="width: 100%;">View Details</button>
            </div>
        `}renderDetails(e){if(!this.container)return;const i=nt.getPlan(e);if(!i)return;const r=nt.getActiveProgress(),s=r?.planId===e;let c=`
            <div class="page-header" style="padding: 16px; border-bottom: 1px solid var(--color-border); display: flex; gap: 8px; align-items: center;">
                <button class="btn-back-plans" style="background: none; border: none; font-size: 1.2em; cursor: pointer;">←</button>
                <h2 style="margin: 0;">${i.name}</h2>
            </div>
            <div class="page-content" style="padding: 16px;">
                <p>${i.description}</p>
                
                <div style="margin: 16px 0;">
                    ${s?`<button class="workout-btn btn-stop-plan" data-id="${i.id}" style="background: var(--color-error);">Stop Plan</button>`:`<button class="workout-btn btn-start-plan" data-id="${i.id}" style="background: var(--color-success);">Start Plan</button>`}
                </div>
    
                <div class="plan-weeks">
                    ${i.weeks.map(d=>this.renderWeek(d,s?r:null)).join("")}
                </div>
            </div>
        `;this.container.innerHTML=c,this.attachListeners(this.container,e)}renderWeek(e,i){return`
            <div class="plan-week" style="margin-bottom: 20px;">
                <h4 style="background: var(--bg-secondary); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                    Week ${e.weekNumber}: ${e.focus||""}
                </h4>
                <div class="week-days" style="display: grid; gap: 8px;">
                    ${e.days.map(r=>this.renderDay(r,e.weekNumber,i)).join("")}
                </div>
            </div>
        `}renderDay(e,i,r){const s=r?r.completedDays[`${i}-${e.dayOfWeek}`]:!1;let c=!1;if(r){const h=Math.floor((Date.now()-r.startDate)/864e5)+1,p=(i-1)*7+e.dayOfWeek;h===p&&(c=!0)}let d="";return e.isRestDay?d=`<em>Rest Day</em> ${e.notes?`- ${e.notes}`:""}`:e.workout?d=`<strong>${e.workout.name}</strong><br><span style="font-size: 0.85em; color: var(--color-text-secondary);">${Ie(this.getTotalDuration(e.workout))}</span>`:d=`Workout ID: ${e.workoutId}`,`
            <div class="plan-day" style="
                padding: 12px; 
                border: 1px solid var(--color-border); 
                border-radius: 6px; 
                display: flex; 
                align-items: center; 
                gap: 12px;
                background: ${c?"var(--bg-highlight, rgba(33, 150, 243, 0.1))":"var(--card-bg)"};
                ${c?"border-color: var(--color-primary);":""}
            ">
                <div style="
                    width: 24px; height: 24px; 
                    border-radius: 50%; 
                    background: ${s?"var(--color-success)":"#ccc"}; 
                    color: white;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 0.8em;
                ">${e.dayOfWeek}</div>
                
                <div style="flex: 1;">${d}</div>
    
                ${!e.isRestDay&&e.workout?`
                    <button class="workout-btn btn-preview-workout" style="padding: 4px 8px; font-size: 0.8em;">Preview</button>
                    ${r&&!s?`<button class="workout-btn btn-do-workout" data-week="${i}" data-day="${e.dayOfWeek}" style="margin-left:8px; padding: 4px 8px; font-size: 0.8em; background: var(--color-primary);">Start</button>`:""}
                `:""}
            </div>
        `}getTotalDuration(e){return e.steps.reduce((i,r)=>i+r.duration,0)}attachListeners(e,i){e.onclick=r=>{const s=r.target;if(s.classList.contains("btn-view-plan")){const c=s.dataset.id;c&&this.renderDetails(c)}if(s.classList.contains("btn-back-plans")&&this.renderDashboard(),s.classList.contains("btn-start-plan")){const c=s.dataset.id;c&&confirm("Start this training plan? This will become your active plan.")&&(nt.startPlan(c),this.renderDetails(c))}if(s.classList.contains("btn-stop-plan")&&confirm("Are you sure you want to stop the current plan? Progress will be lost.")&&(nt.stopActivePlan(),i?this.renderDetails(i):this.renderDashboard()),s.classList.contains("btn-do-workout")){const c=parseInt(s.dataset.week||"0"),d=parseInt(s.dataset.day||"0"),u=nt.getActiveProgress();if(!u)return;const h=nt.getPlan(u.planId);if(!h)return;const _=h.weeks.find(f=>f.weekNumber===c)?.days.find(f=>f.dayOfWeek===d);if(_){let f=_.workout;!f&&_.workoutId&&(f=Tc.find(v=>v.id===_.workoutId)||zo().find(v=>v.id===_.workoutId)),f?Rr(f,()=>{nt.markDayComplete(c,d),this.render()}):alert("Workout definition not found!")}}}}}var Ma;(function(n){n[n.SCAN_MODE_LOW_POWER=0]="SCAN_MODE_LOW_POWER",n[n.SCAN_MODE_BALANCED=1]="SCAN_MODE_BALANCED",n[n.SCAN_MODE_LOW_LATENCY=2]="SCAN_MODE_LOW_LATENCY"})(Ma||(Ma={}));var Ia;(function(n){n[n.CONNECTION_PRIORITY_BALANCED=0]="CONNECTION_PRIORITY_BALANCED",n[n.CONNECTION_PRIORITY_HIGH=1]="CONNECTION_PRIORITY_HIGH",n[n.CONNECTION_PRIORITY_LOW_POWER=2]="CONNECTION_PRIORITY_LOW_POWER"})(Ia||(Ia={}));function lf(n){return new DataView(Uint8Array.from(n).buffer)}function df(n){return Array.from(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}function uf(n){return`0000${n.toString(16).padStart(4,"0")}-0000-1000-8000-00805f9b34fb`}function Fc(n){const e=[];let i,r,s=1,c=0;for(i=0;i<n.length;i++)r=n.charCodeAt(i),(r>47&&r<58||r>64&&r<71||r>96&&r<103)&&(c=c<<4^(r>64?r+9:r)&15,(s^=1)&&e.push(c&255));return lf(e)}function pi(n){return df(n).map(e=>{let i=e.toString(16);return i.length==1&&(i="0"+i),i}).join("")}function vy(n){if(typeof n=="string")return n;if(typeof n=="number")return uf(n);throw new Error("Invalid UUID")}function yy(n){const e={};if(n)return n.forEach((i,r)=>{e[r.toString()]=i}),e}function Aa(n){if(n!==void 0){if(typeof n=="string"){const e=Fc(n);return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}return n instanceof DataView?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):n}}function ro(n){if(n!==void 0)return n instanceof DataView?pi(n):pi(new DataView(n.buffer,n.byteOffset,n.byteLength))}const J=On("BluetoothLe",{web:()=>Et(()=>import("./web-DCkniLd6.js"),[]).then(n=>new n.BluetoothLeWeb)}),hf=()=>{let n=Promise.resolve();return e=>new Promise((i,r)=>{n=n.then(()=>e()).then(i).catch(r)})};function xr(n){return n?hf():e=>e()}function fe(n){if(typeof n!="string")throw new Error(`Invalid UUID type ${typeof n}. Expected string.`);if(n=n.toLowerCase(),!(n.search(/^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/)>=0))throw new Error(`Invalid UUID format ${n}. Expected 128 bit string (e.g. "0000180d-0000-1000-8000-00805f9b34fb").`);return n}class mf{constructor(){this.scanListener=null,this.eventListeners=new Map,this.queue=xr(!0)}enableQueue(){this.queue=xr(!0)}disableQueue(){this.queue=xr(!1)}async initialize(e){await this.queue(async()=>{await J.initialize(e)})}async isEnabled(){return await this.queue(async()=>(await J.isEnabled()).value)}async requestEnable(){await this.queue(async()=>{await J.requestEnable()})}async enable(){await this.queue(async()=>{await J.enable()})}async disable(){await this.queue(async()=>{await J.disable()})}async startEnabledNotifications(e){await this.queue(async()=>{var i;const r="onEnabledChanged";await((i=this.eventListeners.get(r))===null||i===void 0?void 0:i.remove());const s=await J.addListener(r,c=>{e(c.value)});this.eventListeners.set(r,s),await J.startEnabledNotifications()})}async stopEnabledNotifications(){await this.queue(async()=>{var e;const i="onEnabledChanged";await((e=this.eventListeners.get(i))===null||e===void 0?void 0:e.remove()),this.eventListeners.delete(i),await J.stopEnabledNotifications()})}async isLocationEnabled(){return await this.queue(async()=>(await J.isLocationEnabled()).value)}async openLocationSettings(){await this.queue(async()=>{await J.openLocationSettings()})}async openBluetoothSettings(){await this.queue(async()=>{await J.openBluetoothSettings()})}async openAppSettings(){await this.queue(async()=>{await J.openAppSettings()})}async setDisplayStrings(e){await this.queue(async()=>{await J.setDisplayStrings(e)})}async requestDevice(e){return e=e?this.validateRequestBleDeviceOptions(e):void 0,await this.queue(async()=>await J.requestDevice(e))}async requestLEScan(e,i){e=this.validateRequestBleDeviceOptions(e),await this.queue(async()=>{var r;await((r=this.scanListener)===null||r===void 0?void 0:r.remove()),this.scanListener=await J.addListener("onScanResult",s=>{const c=Object.assign(Object.assign({},s),{manufacturerData:this.convertObject(s.manufacturerData),serviceData:this.convertObject(s.serviceData),rawAdvertisement:s.rawAdvertisement?this.convertValue(s.rawAdvertisement):void 0});i(c)}),await J.requestLEScan(e)})}async stopLEScan(){await this.queue(async()=>{var e;await((e=this.scanListener)===null||e===void 0?void 0:e.remove()),this.scanListener=null,await J.stopLEScan()})}async getDevices(e){if(!Array.isArray(e))throw new Error("deviceIds must be an array");return this.queue(async()=>(await J.getDevices({deviceIds:e})).devices)}async getConnectedDevices(e){if(!Array.isArray(e))throw new Error("services must be an array");return e=e.map(fe),this.queue(async()=>(await J.getConnectedDevices({services:e})).devices)}async getBondedDevices(){return this.queue(async()=>(await J.getBondedDevices()).devices)}async connect(e,i,r){await this.queue(async()=>{var s;if(i){const c=`disconnected|${e}`;await((s=this.eventListeners.get(c))===null||s===void 0?void 0:s.remove());const d=await J.addListener(c,()=>{i(e)});this.eventListeners.set(c,d)}await J.connect(Object.assign({deviceId:e},r))})}async createBond(e,i){await this.queue(async()=>{await J.createBond(Object.assign({deviceId:e},i))})}async isBonded(e){return await this.queue(async()=>(await J.isBonded({deviceId:e})).value)}async disconnect(e){await this.queue(async()=>{await J.disconnect({deviceId:e})})}async getServices(e){return await this.queue(async()=>(await J.getServices({deviceId:e})).services)}async discoverServices(e){await this.queue(async()=>{await J.discoverServices({deviceId:e})})}async getMtu(e){return await this.queue(async()=>(await J.getMtu({deviceId:e})).value)}async requestConnectionPriority(e,i){await this.queue(async()=>{await J.requestConnectionPriority({deviceId:e,connectionPriority:i})})}async readRssi(e){return await this.queue(async()=>{const r=await J.readRssi({deviceId:e});return parseFloat(r.value)})}async read(e,i,r,s){return i=fe(i),r=fe(r),await this.queue(async()=>{const d=await J.read(Object.assign({deviceId:e,service:i,characteristic:r},s));return this.convertValue(d.value)})}async write(e,i,r,s,c){return i=fe(i),r=fe(r),this.queue(async()=>{if(!s?.buffer)throw new Error("Invalid data.");let d=s;ke.getPlatform()!=="web"&&(d=pi(s)),await J.write(Object.assign({deviceId:e,service:i,characteristic:r,value:d},c))})}async writeWithoutResponse(e,i,r,s,c){i=fe(i),r=fe(r),await this.queue(async()=>{if(!s?.buffer)throw new Error("Invalid data.");let d=s;ke.getPlatform()!=="web"&&(d=pi(s)),await J.writeWithoutResponse(Object.assign({deviceId:e,service:i,characteristic:r,value:d},c))})}async readDescriptor(e,i,r,s,c){return i=fe(i),r=fe(r),s=fe(s),await this.queue(async()=>{const u=await J.readDescriptor(Object.assign({deviceId:e,service:i,characteristic:r,descriptor:s},c));return this.convertValue(u.value)})}async writeDescriptor(e,i,r,s,c,d){return i=fe(i),r=fe(r),s=fe(s),this.queue(async()=>{if(!c?.buffer)throw new Error("Invalid data.");let u=c;ke.getPlatform()!=="web"&&(u=pi(c)),await J.writeDescriptor(Object.assign({deviceId:e,service:i,characteristic:r,descriptor:s,value:u},d))})}async startNotifications(e,i,r,s,c){i=fe(i),r=fe(r),await this.queue(async()=>{var d;const u=`notification|${e}|${i}|${r}`;await((d=this.eventListeners.get(u))===null||d===void 0?void 0:d.remove());const h=await J.addListener(u,p=>{s(this.convertValue(p?.value))});this.eventListeners.set(u,h),await J.startNotifications(Object.assign({deviceId:e,service:i,characteristic:r},c))})}async stopNotifications(e,i,r){i=fe(i),r=fe(r),await this.queue(async()=>{var s;const c=`notification|${e}|${i}|${r}`;await((s=this.eventListeners.get(c))===null||s===void 0?void 0:s.remove()),this.eventListeners.delete(c),await J.stopNotifications({deviceId:e,service:i,characteristic:r})})}validateRequestBleDeviceOptions(e){return e.services&&(e.services=e.services.map(fe)),e.optionalServices&&(e.optionalServices=e.optionalServices.map(fe)),e.serviceData&&ke.getPlatform()!=="web"&&(e.serviceData=e.serviceData.map(i=>Object.assign(Object.assign({},i),{serviceUuid:fe(i.serviceUuid),dataPrefix:ro(i.dataPrefix),mask:ro(i.mask)}))),e.manufacturerData&&(ke.getPlatform()!=="web"?e.manufacturerData=e.manufacturerData.map(i=>Object.assign(Object.assign({},i),{dataPrefix:ro(i.dataPrefix),mask:ro(i.mask)})):e.manufacturerData=e.manufacturerData.map(i=>Object.assign(Object.assign({},i),{dataPrefix:Aa(i.dataPrefix),mask:Aa(i.mask)}))),e}convertValue(e){return typeof e=="string"?Fc(e):e===void 0?new DataView(new ArrayBuffer(0)):e}convertObject(e){if(e===void 0)return;const i={};for(const r of Object.keys(e))i[r]=this.convertValue(e[r]);return i}}const de=new mf,Rc=n=>{const e=n.getUint16(0,!0);let i=2;const r={},s=(e&2)!==0,c=(e&4)!==0,d=(e&8)!==0;if(n.byteLength>=i+2){const u=n.getUint16(i,!0);r.speed=u/100,i+=2}if(s&&n.byteLength>=i+2){const u=n.getUint16(i,!0);r.averageSpeed=u/100,i+=2}if(c&&n.byteLength>=i+3){const u=n.getUint8(i),h=n.getUint8(i+1),p=n.getUint8(i+2),_=u+(h<<8)+(p<<16);r.totalDistance=_,i+=3}if(d&&n.byteLength>=i+4){const u=n.getInt16(i,!0);r.incline=u/10,i+=2;const h=n.getInt16(i,!0);r.rampAngle=h/10,i+=2}return r},Sr="00001818-0000-1000-8000-00805f9b34fb",Da="00002a63-0000-1000-8000-00805f9b34fb",so="0000180d-0000-1000-8000-00805f9b34fb",za="00002a37-0000-1000-8000-00805f9b34fb",ao="00001816-0000-1000-8000-00805f9b34fb",Ba="00002a5b-0000-1000-8000-00805f9b34fb",co="00001826-0000-1000-8000-00805f9b34fb",$a="00002acd-0000-1000-8000-00805f9b34fb",Ge=5,Bo=1e3;let Oa=!1;const $o=async()=>{if(!Oa)try{await de.initialize(),Oa=!0}catch(n){throw console.error("Failed to initialize BleClient:",n),n}},pf=async()=>{const n=[],e=[];let i=null,r=!1,s=0;await $o();let c;try{c=await de.requestDevice({services:[Sr],optionalServices:[]})}catch(f){throw console.error("Error requesting Power device:",f),f}i=c.deviceId;const d=c.name||"Power Sensor",u=f=>{e.forEach(v=>v(f))},h=async()=>{i&&(await de.connect(i,_),u("connected"),await de.startNotifications(i,Sr,Da,f=>{Oe.log(d,f);const v=f.getInt16(2,!0),y={timestamp:Date.now(),value:v};n.forEach(b=>b(y))}),s=0)},p=async()=>{if(r||s>=Ge){s>=Ge&&(console.error("Native Power sensor: Max reconnection attempts reached"),u("failed"));return}s++;const f=Bo*Math.pow(2,s-1);console.log(`Native Power sensor: Reconnection attempt ${s}/${Ge} in ${f}ms`),u("reconnecting"),await new Promise(v=>setTimeout(v,f));try{await h(),console.log("Native Power sensor: Reconnected successfully")}catch(v){console.error("Native Power sensor: Reconnection failed:",v),p()}},_=f=>{f===i&&!r&&(console.log("Native Power sensor: Disconnected"),u("disconnected"),p())};return await h(),{disconnect:async()=>{if(r=!0,i)try{await de.stopNotifications(i,Sr,Da),await de.disconnect(i)}catch(f){console.error("Error disconnecting native bluetooth:",f)}},addListener:f=>{n.push(f)},deviceName:d,onStatusChange:f=>{e.push(f)}}},ff=async()=>{const n=[],e=[];let i=null,r=!1,s=0;await $o();let c;try{c=await de.requestDevice({services:[so],optionalServices:[so]})}catch(f){throw console.error("Error requesting Heart Rate device:",f),f}i=c.deviceId;const d=c.name||"Heart Rate Monitor",u=f=>{e.forEach(v=>v(f))},h=async()=>{i&&(await de.connect(i,_),u("connected"),await de.startNotifications(i,so,za,f=>{Oe.log(d,f);const v=f.getUint8(0);let y;v&1?y=f.getUint16(1,!0):y=f.getUint8(1);const b={timestamp:Date.now(),value:y};n.forEach(S=>S(b))}),s=0)},p=async()=>{if(r||s>=Ge){s>=Ge&&(console.error("Native Heart Rate sensor: Max reconnection attempts reached"),u("failed"));return}s++;const f=Bo*Math.pow(2,s-1);console.log(`Native Heart Rate sensor: Reconnection attempt ${s}/${Ge} in ${f}ms`),u("reconnecting"),await new Promise(v=>setTimeout(v,f));try{await h(),console.log("Native Heart Rate sensor: Reconnected successfully")}catch(v){console.error("Native Heart Rate sensor: Reconnection failed:",v),p()}},_=f=>{f===i&&!r&&(console.log("Native Heart Rate sensor: Disconnected"),u("disconnected"),p())};return await h(),{disconnect:async()=>{if(r=!0,i)try{await de.stopNotifications(i,so,za),await de.disconnect(i)}catch(f){console.error("Error disconnecting native bluetooth:",f)}},addListener:f=>{n.push(f)},deviceName:d,onStatusChange:f=>{e.push(f)}}},gf=async()=>{const n=[],e=[];let i=null,r=null,s=null,c=!1,d=0;await $o();let u;try{u=await de.requestDevice({services:[ao],optionalServices:[ao]})}catch(y){throw console.error("Error requesting Cadence device:",y),y}i=u.deviceId;const h=u.name||"Cadence Sensor",p=y=>{e.forEach(b=>b(y))},_=async()=>{i&&(await de.connect(i,v),p("connected"),await de.startNotifications(i,ao,Ba,y=>{Oe.log(h,y);const b=y.getUint8(0);if(b&2){let S=1;b&1&&(S=7);const E=y.getUint16(S,!0),P=y.getUint16(S+2,!0);if(r!==null&&s!==null){let T=E-r,D=P-s;if(T<0&&(T+=65536),D<0&&(D+=65536),D>0){const z=D/1024,$=Math.round(T/z*60);if($>=0&&$<300){const A={timestamp:Date.now(),value:$};n.forEach(O=>O(A))}}}r=E,s=P}}),d=0)},f=async()=>{if(c||d>=Ge){d>=Ge&&(console.error("Native Cadence sensor: Max reconnection attempts reached"),p("failed"));return}d++;const y=Bo*Math.pow(2,d-1);console.log(`Native Cadence sensor: Reconnection attempt ${d}/${Ge} in ${y}ms`),p("reconnecting"),await new Promise(b=>setTimeout(b,y));try{await _(),console.log("Native Cadence sensor: Reconnected successfully")}catch(b){console.error("Native Cadence sensor: Reconnection failed:",b),f()}},v=y=>{y===i&&!c&&(console.log("Native Cadence sensor: Disconnected"),p("disconnected"),f())};return await _(),{disconnect:async()=>{if(c=!0,i)try{await de.stopNotifications(i,ao,Ba),await de.disconnect(i)}catch(y){console.error("Error disconnecting native bluetooth:",y)}},addListener:y=>{n.push(y)},deviceName:h,onStatusChange:y=>{e.push(y)}}},vf=async()=>{const n=[],e=[];let i=null,r=!1,s=0;await $o();let c;try{c=await de.requestDevice({services:[co],optionalServices:[co]})}catch(f){throw console.error("Error requesting Treadmill device:",f),f}i=c.deviceId;const d=c.name||"Treadmill",u=f=>{e.forEach(v=>v(f))},h=f=>{f===i&&!r&&(console.log("Treadmill: Connection lost, attempting to reconnect..."),u("disconnected"),_())},p=async()=>{i&&(await de.connect(i,h),u("connected"),await de.startNotifications(i,co,$a,f=>{Oe.log(d,f);try{const v=Rc(f);if(v.speed!==void 0||v.incline!==void 0){const y={timestamp:Date.now(),speed:v.speed??null,incline:v.incline??null};n.forEach(b=>b(y))}}catch(v){console.error("Error parsing treadmill data",v)}}),s=0)},_=async()=>{if(r)return;if(s>=Ge){console.error("Treadmill: Max reconnection attempts reached"),u("failed");return}s++;const f=Bo*Math.pow(2,s-1);console.log(`Treadmill: Reconnection attempt ${s}/${Ge} in ${f}ms`),u("reconnecting"),await new Promise(v=>setTimeout(v,f));try{await p(),console.log("Treadmill: Reconnected successfully")}catch(v){console.error("Treadmill: Reconnection failed:",v),_()}};try{await p()}catch(f){if(i)try{await de.disconnect(i)}catch{}throw f}return{disconnect:async()=>{if(r=!0,i)try{await de.stopNotifications(i,co,$a),await de.disconnect(i)}catch(f){console.error("Error disconnecting treadmill",f)}u("disconnected")},addListener:f=>{n.push(f)},deviceName:d,onStatusChange:f=>{e.push(f)}}},Pe=5,Li=1e3,yf=async()=>{const n=[],e=[];let i=!1,r=0,s=null;const c=await navigator.bluetooth.requestDevice({filters:[{services:["cycling_power"]}],optionalServices:["cycling_power"]});if(!c.gatt)throw new Error("GATT server not available");const d=c.name||"Power Sensor",u=f=>{e.forEach(v=>v(f))},h=f=>{const y=f.target.value;if(!y)return;Oe.log(d,y);const b=y.getInt16(2,!0),S={timestamp:Date.now(),value:b};n.forEach(E=>E(S))},p=async()=>{if(!c.gatt)return;s=await(await(await c.gatt.connect()).getPrimaryService("cycling_power")).getCharacteristic("cycling_power_measurement"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",h),r=0,u("connected")},_=async()=>{if(i||r>=Pe){r>=Pe&&(console.error("Power sensor: Max reconnection attempts reached"),u("failed"));return}r++;const f=Li*Math.pow(2,r-1);console.log(`Power sensor: Reconnection attempt ${r}/${Pe} in ${f}ms`),u("reconnecting"),await new Promise(v=>setTimeout(v,f));try{await p(),console.log("Power sensor: Reconnected successfully")}catch(v){console.error("Power sensor: Reconnection failed:",v),_()}};return c.addEventListener("gattserverdisconnected",()=>{i||(console.log("Power sensor: Connection lost, attempting to reconnect..."),u("disconnected"),_())}),await p(),{disconnect:()=>{i=!0,s&&(s.removeEventListener("characteristicvaluechanged",h),s.stopNotifications().catch(()=>{})),c.gatt?.disconnect()},addListener:f=>{n.push(f)},deviceName:d,onStatusChange:f=>{e.push(f)}}},_f=async()=>{const n=[],e=[];let i=!1,r=0,s=null;const c=await navigator.bluetooth.requestDevice({filters:[{services:["heart_rate"]}],optionalServices:["heart_rate"]});if(!c.gatt)throw new Error("GATT server not available");const d=c.name||"Heart Rate Monitor",u=f=>{e.forEach(v=>v(f))},h=f=>{const y=f.target.value;if(!y)return;Oe.log(d,y);const b=y.getUint8(0);let S;b&1?S=y.getUint16(1,!0):S=y.getUint8(1);const E={timestamp:Date.now(),value:S};n.forEach(P=>P(E))},p=async()=>{if(!c.gatt)return;s=await(await(await c.gatt.connect()).getPrimaryService("heart_rate")).getCharacteristic("heart_rate_measurement"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",h),r=0,u("connected")},_=async()=>{if(i||r>=Pe){r>=Pe&&(console.error("Heart rate sensor: Max reconnection attempts reached"),u("failed"));return}r++;const f=Li*Math.pow(2,r-1);console.log(`Heart rate sensor: Reconnection attempt ${r}/${Pe} in ${f}ms`),u("reconnecting"),await new Promise(v=>setTimeout(v,f));try{await p(),console.log("Heart rate sensor: Reconnected successfully")}catch(v){console.error("Heart rate sensor: Reconnection failed:",v),_()}};return c.addEventListener("gattserverdisconnected",()=>{i||(console.log("Heart rate sensor: Connection lost, attempting to reconnect..."),u("disconnected"),_())}),await p(),{disconnect:()=>{i=!0,s&&(s.removeEventListener("characteristicvaluechanged",h),s.stopNotifications().catch(()=>{})),c.gatt?.disconnect()},addListener:f=>{n.push(f)},deviceName:d,onStatusChange:f=>{e.push(f)}}},wf=async()=>{const n=[],e=[];let i=!1,r=0,s=null,c=null,d=null;const u=await navigator.bluetooth.requestDevice({filters:[{services:["cycling_speed_and_cadence"]}],optionalServices:["cycling_speed_and_cadence"]});if(!u.gatt)throw new Error("GATT server not available");const h=u.name||"Cadence Sensor",p=y=>{e.forEach(b=>b(y))},_=y=>{const S=y.target.value;if(!S)return;Oe.log(h,S);const E=S.getUint8(0);if(E&2){let P=1;E&1&&(P=7);const T=S.getUint16(P,!0),D=S.getUint16(P+2,!0);if(c!==null&&d!==null){let z=T-c,$=D-d;if(z<0&&(z+=65536),$<0&&($+=65536),$>0){const A=$/1024,O=Math.round(z/A*60);if(O>=0&&O<300){const F={timestamp:Date.now(),value:O};n.forEach(q=>q(F))}}}c=T,d=D}},f=async()=>{if(!u.gatt)return;s=await(await(await u.gatt.connect()).getPrimaryService("cycling_speed_and_cadence")).getCharacteristic("csc_measurement"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",_),r=0,p("connected")},v=async()=>{if(i||r>=Pe){r>=Pe&&(console.error("Cadence sensor: Max reconnection attempts reached"),p("failed"));return}r++;const y=Li*Math.pow(2,r-1);console.log(`Cadence sensor: Reconnection attempt ${r}/${Pe} in ${y}ms`),p("reconnecting"),await new Promise(b=>setTimeout(b,y));try{await f(),console.log("Cadence sensor: Reconnected successfully")}catch(b){console.error("Cadence sensor: Reconnection failed:",b),v()}};return u.addEventListener("gattserverdisconnected",()=>{i||(console.log("Cadence sensor: Connection lost, attempting to reconnect..."),p("disconnected"),v())}),await f(),{disconnect:()=>{i=!0,s&&(s.removeEventListener("characteristicvaluechanged",_),s.stopNotifications().catch(()=>{})),u.gatt?.disconnect()},addListener:y=>{n.push(y)},deviceName:h,onStatusChange:y=>{e.push(y)}}},bf=async()=>{const n=[],e=[];let i=!1,r=0,s=null,c;const d=await navigator.bluetooth.requestDevice({filters:[{services:["fitness_machine"]}],optionalServices:["fitness_machine"]});if(!d.gatt)throw new Error("GATT server not available");const u=d.name||"Treadmill",h=v=>{e.forEach(y=>y(v))},p=v=>{const b=v.target.value;if(b){Oe.log(u,b);try{const S=Rc(b);if(S.speed!==void 0||S.incline!==void 0){const E={timestamp:Date.now(),speed:S.speed??null,incline:S.incline??null};n.forEach(P=>P(E))}}catch(S){console.error("Error parsing treadmill data",S)}}},_=async()=>{if(!d.gatt)return;c=await d.gatt.connect(),s=await(await c.getPrimaryService("fitness_machine")).getCharacteristic("treadmill_data"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",p),r=0,h("connected")},f=async()=>{if(i||r>=Pe){r>=Pe&&(console.error("Treadmill: Max reconnection attempts reached"),h("failed"));return}r++;const v=Li*Math.pow(2,r-1);console.log(`Treadmill: Reconnection attempt ${r}/${Pe} in ${v}ms`),h("reconnecting"),await new Promise(y=>setTimeout(y,v));try{await _(),console.log("Treadmill: Reconnected successfully")}catch(y){console.error("Treadmill: Reconnection failed:",y),f()}};d.addEventListener("gattserverdisconnected",()=>{i||(console.log("Treadmill: Connection lost, attempting to reconnect..."),h("disconnected"),f())});try{await _()}catch(v){throw c&&c.connected&&c.disconnect(),v}return{disconnect:()=>{if(i=!0,s)try{s.stopNotifications(),s.removeEventListener("characteristicvaluechanged",p)}catch{}d.gatt?.connected&&d.gatt.disconnect(),h("disconnected")},addListener:v=>{n.push(v)},deviceName:u,onStatusChange:v=>{e.push(v)}}},xf=async()=>{const n=[],e=[];let i=!1,r=0,s=null,c;const d=await navigator.bluetooth.requestDevice({filters:[{services:["fitness_machine"]}],optionalServices:["fitness_machine"]}),u=d.name||"Unknown Rower",h=v=>{e.forEach(y=>y(v))},p=v=>{const b=v.target.value;if(!b)return;Oe.log("rower",b);const S={timestamp:Date.now(),strokeRate:null,power:null};n.forEach(E=>E(S))},_=async()=>{if(!d.gatt)return;c=await d.gatt.connect(),s=await(await c.getPrimaryService("fitness_machine")).getCharacteristic("rower_data"),await s.startNotifications(),s.addEventListener("characteristicvaluechanged",p),r=0,h("connected")},f=async()=>{if(i||r>=Pe){r>=Pe&&(console.error("Rower: Max reconnection attempts reached"),h("failed"));return}r++;const v=Li*Math.pow(2,r-1);console.log(`Rower: Reconnection attempt ${r}/${Pe} in ${v}ms`),h("reconnecting"),await new Promise(y=>setTimeout(y,v));try{await _(),console.log("Rower: Reconnected successfully")}catch(y){console.error("Rower: Reconnection failed:",y),f()}};d.addEventListener("gattserverdisconnected",()=>{i||(console.log("Rower: Connection lost, attempting to reconnect..."),h("disconnected"),f())});try{await _()}catch(v){throw c&&c.connected&&c.disconnect(),v}return{disconnect:()=>{if(i=!0,s)try{s.stopNotifications(),s.removeEventListener("characteristicvaluechanged",p)}catch{}d.gatt?.connected&&d.gatt.disconnect(),h("disconnected")},addListener:v=>{n.push(v)},deviceName:u,onStatusChange:v=>{e.push(v)}}},zn={connectPower:async()=>{if(typeof window<"u"&&window.useMockSensors){const{MockPowerSensor:n}=await Et(async()=>{const{MockPowerSensor:i}=await import("./mock-DGG0-SkM.js");return{MockPowerSensor:i}},[]),e=new n;return await e.connect(),window.mockSensor=e,e}return ke.isNativePlatform()?pf():yf()},connectHeartRate:async()=>{if(typeof window<"u"&&window.useMockSensors){const{MockHeartrateSensor:n}=await Et(async()=>{const{MockHeartrateSensor:i}=await import("./mock-DGG0-SkM.js");return{MockHeartrateSensor:i}},[]),e=new n;return await e.connect(),window.mockSensor=e,e}return ke.isNativePlatform()?ff():_f()},connectCadence:async()=>{if(typeof window<"u"&&window.useMockSensors){const{MockCadenceSensor:n}=await Et(async()=>{const{MockCadenceSensor:i}=await import("./mock-DGG0-SkM.js");return{MockCadenceSensor:i}},[]),e=new n;return await e.connect(),window.mockSensor=e,e}return ke.isNativePlatform()?gf():wf()},connectTreadmill:async()=>ke.isNativePlatform()?vf():bf(),connectRowing:async()=>{if(ke.isNativePlatform())throw new Error("Native rowing connection not implemented");return xf()}};class Sf{id=Ce.Debug;logArea=null;boundOnLog=this.onLog.bind(this);logBuffer=[];init(e){const i=document.getElementById("debugTemplate");if(i){const r=i.content.cloneNode(!0);e.appendChild(r),this.setupEvents(e)}else console.error("Debug template not found"),e.innerHTML="<p>Error loading debug view</p>"}onEnter(){Oe.addListener(this.boundOnLog)}onLeave(){Oe.removeListener(this.boundOnLog)}onLog(e,i){const r=new Date().toISOString();if(this.logBuffer.push({timestamp:r,sensor:e,data:i}),this.logArea){const s=r.split("T")[1].slice(0,-1);this.logArea.value+=`[${s}] ${e}: ${i}
`,this.logArea.scrollTop=this.logArea.scrollHeight}}setupEvents(e){this.logArea=e.querySelector("#debugLog");const i=e.querySelector("#connectTreadmillDebug"),r=e.querySelector("#connectRowerDebug"),s=e.querySelector("#downloadLogs");i?.addEventListener("click",async()=>{try{this.log("System","Connecting to Treadmill..."),await zn.connectTreadmill(),this.log("System","Connected to Treadmill")}catch(c){this.log("System",`Treadmill connection failed: ${c}`)}}),r?.addEventListener("click",async()=>{try{this.log("System","Connecting to Rower..."),await zn.connectRowing(),this.log("System","Connected to Rower")}catch(c){this.log("System",`Rower connection failed: ${c}`)}}),s?.addEventListener("click",()=>{this.downloadLocalLogs()})}downloadLocalLogs(){const e=new Blob([JSON.stringify(this.logBuffer,null,2)],{type:"application/json"}),i=URL.createObjectURL(e),r=document.createElement("a");r.href=i,r.download=`bpt-debug-session-${Date.now()}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i)}log(e,i){if(this.logArea){const r=new Date().toISOString().split("T")[1].slice(0,-1);this.logArea.value+=`[${r}] ${e}: ${i}
`,this.logArea.scrollTop=this.logArea.scrollHeight}}}class Ef{container;router;constructor(e){this.router=e,this.container=document.createElement("nav"),this.container.id="bottom-nav",this.container.className="bottom-nav",this.render(),document.body.appendChild(this.container),window.addEventListener("route-changed",i=>{const r=i.detail;this.setActive(r.viewId)})}render(){this.container.innerHTML=`
            <button class="nav-item active" data-target="${Ce.Dashboard}" data-testid="nav-dashboard">
                <span class="nav-icon">📊</span>
                <span class="nav-label">Dashboard</span>
            </button>
            <button class="nav-item" data-target="${Ce.History}" data-testid="nav-history">
                <span class="nav-icon">📅</span>
                <span class="nav-label">History</span>
            </button>
            <button class="nav-item" data-target="${Ce.Workouts}" data-testid="nav-workouts">
                <span class="nav-icon">🏋️</span>
                <span class="nav-label">Workouts</span>
            </button>
            <button class="nav-item" data-target="${Ce.Plans}" data-testid="nav-plans">
                <span class="nav-icon">📋</span>
                <span class="nav-label">Plans</span>
            </button>
            <button class="nav-item" data-target="${Ce.Settings}" data-testid="nav-settings">
                <span class="nav-icon">⚙️</span>
                <span class="nav-label">Settings</span>
            </button>
        `,this.container.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.target;i===Ce.Dashboard?this.router.navigate("/"):i&&this.router.navigate("/"+i)})})}setActive(e){this.container.querySelectorAll(".nav-item").forEach(i=>{i.dataset.target===e?(i.classList.add("active"),i.setAttribute("aria-current","page")):(i.classList.remove("active"),i.removeAttribute("aria-current"))})}}function kf(){const n=new um($e("mainContent")),e=new hm,i=new ip,r=new Sp,s=new rf,c=new cf,d=new Sf;n.registerView(e),n.registerView(i),n.registerView(r),n.registerView(s),n.registerView(c),n.registerView(d),n.addRoute("/",Ce.Dashboard),n.addRoute("/history",Ce.History),n.addRoute("/workouts",Ce.Workouts),n.addRoute("/plans",Ce.Plans),n.addRoute("/settings",Ce.Settings),n.addRoute("/debug",Ce.Debug),new Ef(n);const u=document.getElementById("settingsButton");u&&u.addEventListener("click",()=>{n.navigate("/settings");const _=document.querySelector("nav details");_&&(_.open=!1)});const h=document.getElementById("workoutsButton");h&&h.addEventListener("click",()=>{n.navigate("/workouts");const _=document.querySelector("nav details");_&&(_.open=!1)});const p=document.getElementById("plansButton");return p&&p.addEventListener("click",()=>{n.navigate("/plans");const _=document.querySelector("nav details");_&&(_.open=!1)}),n}const xo=n=>{const e=Math.floor(n/1e3),i=Math.floor(e/3600),r=Math.floor(e%3600/60),s=e%60;return`${i.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`};function Na(n){if(n.length<2)return 0;let e=0;const i=6371e3;for(let r=1;r<n.length;r++){const s=n[r-1],c=n[r],d=s.lat*Math.PI/180,u=c.lat*Math.PI/180,h=(c.lat-s.lat)*Math.PI/180,p=(c.lon-s.lon)*Math.PI/180,_=Math.sin(h/2)*Math.sin(h/2)+Math.cos(d)*Math.cos(u)*Math.sin(p/2)*Math.sin(p/2),f=2*Math.atan2(Math.sqrt(_),Math.sqrt(1-_));e+=i*f}return e/1e3}class Tf{synth;voice=null;measurementsState=null;timeState=null;lastTimeIntervalMs=0;lastDistanceIntervalKm=0;checkInterval=null;isActive=!1;constructor(){if(typeof window<"u"?this.synth=window.speechSynthesis||null:this.synth=null,!this.synth){console.warn("Speech Synthesis not supported on this device");return}this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=()=>this.loadVoice()),this.loadVoice()}init(e,i){this.measurementsState=e,this.timeState=i}startIntervalAnnouncements(){if(this.isActive||!this.measurementsState||!this.timeState)return;const e=ve();e.enhancedVoice.timeIntervalMinutes===0&&e.enhancedVoice.distanceIntervalKm===0||(this.isActive=!0,this.lastTimeIntervalMs=0,this.lastDistanceIntervalKm=0,this.checkInterval=setInterval(()=>this.checkIntervalAnnouncements(),1e3),console.log("Enhanced voice announcements started"))}stopIntervalAnnouncements(){this.checkInterval&&(clearInterval(this.checkInterval),this.checkInterval=null),this.isActive=!1,this.lastTimeIntervalMs=0,this.lastDistanceIntervalKm=0}reset(){this.stopIntervalAnnouncements()}loadVoice(){if(!this.synth)return;const e=this.synth.getVoices();this.voice=e.find(i=>i.lang.startsWith("en"))||e[0]||null}formatTimeForSpeech(e){const i=Math.floor(e/1e3),r=Math.floor(i/3600),s=Math.floor(i%3600/60),c=i%60,d=[];return r>0&&d.push(`${r} hour${r!==1?"s":""}`),s>0&&d.push(`${s} minute${s!==1?"s":""}`),(c>0||d.length===0)&&d.push(`${c} second${c!==1?"s":""}`),d.join(" ")}formatTimeShort(e){const i=Math.floor(e/1e3),r=Math.floor(i/3600),s=Math.floor(i%3600/60);return r>0?`${r} hour${r!==1?"s":""} ${s} minute${s!==1?"s":""}`:`${s} minute${s!==1?"s":""}`}speak(e){if(!this.synth)return;const i=ve();if(!i.voiceEnabled)return;this.synth.speaking&&this.synth.cancel();const r=new SpeechSynthesisUtterance(e);this.voice&&(r.voice=this.voice),r.rate=i.enhancedVoice.speechRate,this.synth.speak(r)}announceLap(e,i,r){if(!this.synth||!ve().voiceLaps)return;const c=this.formatTimeForSpeech(i),d=`Lap ${e}. Time ${c}. Average Power ${Math.round(r)} watts.`;this.speak(d)}announceZoneChange(e){if(!this.synth||!ve().voiceZones)return;const r=`Entering ${e} Zone`;this.speak(r)}announceCountdown(e){if(!this.synth||!ve().countdown.enableVoice)return;const r=e===0?"Go!":`${e}`;this.speak(r)}checkIntervalAnnouncements(){if(!this.measurementsState||!this.timeState||!this.timeState.running)return;const e=ve();e.enhancedVoice.timeIntervalMinutes>0&&this.checkTimeAnnouncement(e.enhancedVoice.timeIntervalMinutes),e.enhancedVoice.distanceIntervalKm>0&&this.checkDistanceAnnouncement(e.enhancedVoice.distanceIntervalKm)}checkTimeAnnouncement(e){if(!this.timeState||!this.timeState.startTime)return;const i=Date.now()-this.timeState.startTime,r=e*60*1e3,s=Math.floor(i/r),c=Math.floor(this.lastTimeIntervalMs/r);s>c&&i>0&&(this.announceCurrentMetrics("time"),this.lastTimeIntervalMs=i)}checkDistanceAnnouncement(e){if(!this.measurementsState)return;const i=Na(this.measurementsState.gps),r=Math.floor(i/e),s=Math.floor(this.lastDistanceIntervalKm/e);r>s&&i>0&&(this.announceCurrentMetrics("distance"),this.lastDistanceIntervalKm=i)}getCurrentMetrics(){const e={power:null,heartrate:null,cadence:null,speedKmh:null,distanceKm:null,elapsedMs:0};if(!this.measurementsState||!this.timeState)return e;const i=Date.now(),r=i-5e3,s=this.measurementsState.power.filter(h=>h.timestamp>r);s.length>0&&(e.power=Math.round(s[s.length-1].value));const c=this.measurementsState.heartrate.filter(h=>h.timestamp>r);c.length>0&&(e.heartrate=Math.round(c[c.length-1].value));const d=this.measurementsState.cadence.filter(h=>h.timestamp>r);d.length>0&&(e.cadence=Math.round(d[d.length-1].value));const u=this.measurementsState.speed.filter(h=>h.timestamp>r);return u.length>0&&(e.speedKmh=Math.round(u[u.length-1].value*10)/10),e.distanceKm=Math.round(Na(this.measurementsState.gps)*100)/100,this.timeState.startTime&&(e.elapsedMs=i-this.timeState.startTime),e}announceCurrentMetrics(e){const r=ve().enhancedVoice.metrics,s=this.getCurrentMetrics(),c=[];if(e==="time"&&r.time?c.push(this.formatTimeShort(s.elapsedMs)):e==="distance"&&r.distance&&s.distanceKm!==null&&c.push(`${s.distanceKm.toFixed(1)} kilometers`),r.power&&s.power!==null&&c.push(`power ${s.power} watts`),r.heartrate&&s.heartrate!==null&&c.push(`heart rate ${s.heartrate}`),r.speed&&s.speedKmh!==null&&c.push(`speed ${s.speedKmh.toFixed(1)} k p h`),r.cadence&&s.cadence!==null&&c.push(`cadence ${s.cadence}`),e==="time"&&r.distance&&s.distanceKm!==null&&s.distanceKm>0&&c.push(`distance ${s.distanceKm.toFixed(1)} kilometers`),e==="distance"&&r.time&&c.push(`time ${this.formatTimeShort(s.elapsedMs)}`),c.length>0){const d=c.join(". ")+".";this.speak(d),console.log(`Voice announcement (${e}): ${d}`)}}}const it=new Tf;async function Lf(n){const e=ve(),i=e.countdown.duration;if(i===0){n();return}return new Promise(r=>{const s=Cf();document.body.appendChild(s);let c=i,d,u=!1;const h=v=>{const y=s.querySelector(".countdown__number");y&&(y.textContent=v===0?"GO!":v.toString(),y.className="countdown__number",requestAnimationFrame(()=>{y.classList.add("countdown__number--pulse")})),e.countdown.enableVoice&&it.announceCountdown(v),e.countdown.enableBeep&&Pf(v===0);const b=v===0?"Go! Workout starting":`${v}`;V(b,"assertive")},p=s.querySelector(".countdown__cancel"),_=()=>{u=!0,clearInterval(d),document.body.removeChild(s),V("Countdown cancelled","assertive"),r()};p?.addEventListener("click",_);const f=v=>{v.key==="Escape"&&(_(),document.removeEventListener("keydown",f))};document.addEventListener("keydown",f),h(c),d=window.setInterval(()=>{c--,c>=0&&h(c),c<0&&(clearInterval(d),document.removeEventListener("keydown",f),u||(document.body.removeChild(s),n()),r())},1e3)})}function Cf(){const n=document.createElement("div");return n.className="countdown-overlay",n.setAttribute("role","alertdialog"),n.setAttribute("aria-labelledby","countdownTitle"),n.setAttribute("aria-live","assertive"),n.innerHTML=`
        <div class="countdown__backdrop"></div>
        <div class="countdown__content">
            <h2 id="countdownTitle" class="countdown__title">Get Ready!</h2>
            <div class="countdown__number"></div>
            <button class="countdown__cancel" aria-label="Cancel countdown">
                Cancel (ESC)
            </button>
        </div>
    `,n}function Pf(n=!1){try{const e=new(window.AudioContext||window.webkitAudioContext),i=e.createOscillator(),r=e.createGain();i.connect(r),r.connect(e.destination),i.frequency.value=n?880:440,i.type="sine",r.gain.setValueAtTime(.3,e.currentTime),r.gain.exponentialRampToValueAtTime(.01,e.currentTime+.1),i.start(e.currentTime),i.stop(e.currentTime+.1)}catch(e){console.warn("Failed to play beep:",e)}}function Mf(n){return n.startTime?n.running?"recording":"paused":"idle"}function fi(n,e){const{startButton:i,pauseButton:r,resumeButton:s,stopButton:c}=n;switch(i.style.display="none",r.style.display="none",s.style.display="none",c.style.display="none",e){case"idle":i.style.display="inline-flex";break;case"recording":r.style.display="inline-flex";break;case"paused":s.style.display="inline-flex",c.style.display="inline-flex";break}}let xi=null;function Hc(n,e=!1){!n.running||!n.startTime||(n.running=!1,n.endTime=Date.now(),Ac(),xi&&fi(xi,"paused"),_o("paused"),e?(he("⏸️ Auto-paused","info"),V("Auto paused due to low activity","polite")):V("Workout paused. Press resume to continue or stop to save.","assertive"))}function Zc(n,e=!1){if(!(n.running||!n.startTime)){if(n.endTime&&n.startTime){const i=Date.now()-n.endTime;n.startTime+=i}n.endTime=null,n.running=!0,Ic(),xi&&fi(xi,"recording"),_o("recording"),e?(he("▶️ Auto-resumed","info"),V("Auto resumed","polite")):V("Workout resumed","assertive")}}const If=n=>{const e=document.getElementById("startButton"),i=document.getElementById("pauseButton"),r=document.getElementById("resumeButton"),s=document.getElementById("stopButton"),c=document.getElementById("time");if(!e||!i||!r||!s||!c){console.warn("Workout control elements not found in DOM");return}const d={startButton:e,pauseButton:i,resumeButton:r,stopButton:s};xi=d,setInterval(()=>{let h="00:00:00";if(n.startTime&&n.running){const p=Date.now()-n.startTime;h=xo(p)}else if(n.startTime&&n.endTime){const p=n.endTime-n.startTime;h=xo(p)}c.textContent!==h&&(c.textContent=h)},100),fi(d,Mf(n));const u=(h,p)=>{const _=f=>{f.stopPropagation(),f.preventDefault(),p()};h.addEventListener("click",_)};u(e,()=>{console.log("[time.ts] Start button clicked"),Lf(()=>{n.startTime=Date.now(),n.endTime=null,n.running=!0,Ic(),fi(d,"recording"),_o("recording"),V("Workout started","assertive"),document.dispatchEvent(new CustomEvent("workoutStarted"))})}),u(i,()=>{Hc(n,!1)}),u(r,()=>{Zc(n,!1)}),u(s,()=>{n.running=!1,Ac(),fi(d,"paused"),_o("paused"),V("Workout stopped and saved. Press resume to continue or export your data.","assertive");const h=new CustomEvent("workoutComplete",{detail:{startTime:n.startTime,endTime:n.endTime,duration:n.endTime&&n.startTime?n.endTime-n.startTime:0}});document.dispatchEvent(h)})},mt=(n,e)=>{const i=[];let r=0;for(const s of e){for(;r<n.length&&n[r].timestamp<s;)r++;const c=r-1;let d;const u=r>=n.length;if(c<0)d=n[r];else if(u)d=n[c];else{const h=n[c]?.timestamp??0,p=n[r]?.timestamp??0;d=s-h<=p-s?n[c]:n[r]}d?.timestamp!==void 0&&Math.abs(d.timestamp-s)<1e3?i.push(d.value):i.push(null)}return i},is=n=>{const e=n.gps.map(A=>({timestamp:A.timestamp,value:A.lat})),i=n.gps.map(A=>({timestamp:A.timestamp,value:A.lon})),r=n.energy||[],s=[n.heartrate,n.cadence,n.power,n.speed,n.distance,n.altitude,e,r];if(!s.some(A=>A.length>0))return[];const d=s.map(A=>A.length>0?A[0].timestamp:1/0),u=Math.min(...d),h=Math.max(...s.map(A=>A.length>0?A[A.length-1].timestamp:-1/0)),p=1e3,_=[];let f=u;for(;f<=h;)_.push(f),f+=p;const v=mt(n.heartrate,_),y=mt(n.cadence,_),b=mt(n.power,_),S=mt(n.speed,_),E=mt(n.distance,_),P=mt(n.altitude,_),T=mt(e,_),D=mt(i,_),z=mt(r,_),$=[];for(let A=0;A<_.length;A++)$.push({timestamp:_[A],heartrate:v[A],cadence:y[A],power:b[A],speed:S[A],distance:E[A],altitude:P[A],lat:T[A],lon:D[A],energy:z[A]});return $};function Af(n,e){if(e.length===0)return 1;let i=1;for(const r of e)if(n>=r.timestamp)i=r.number+1;else break;return i}const Df=n=>{const e=is(n);if(!e||e.length===0)return"";const i=n.laps||[],r="timestamp,lap,power,cadence,heartrate,speed,distance,altitude,lat,lon",s=e.map(c=>{const d=new Date(c.timestamp).toISOString(),u=Af(c.timestamp,i),h=c.power!==null?Math.round(c.power):"",p=c.cadence!==null?Math.round(c.cadence):"",_=c.heartrate!==null?Math.round(c.heartrate):"",f=c.speed!==null?c.speed.toFixed(1):"",v=c.distance!==null?Math.round(c.distance):"",y=c.altitude!==null?Math.round(c.altitude):"",b=c.lat!==null?c.lat.toFixed(6):"",S=c.lon!==null?c.lon.toFixed(6):"";return`${d},${u},${h},${p},${_},${f},${v},${y},${b},${S}`});return[r,...s].join(`
`)};function zf(n){switch(n){case"running":return"Running";case"walking":return"Other";default:return"Biking"}}const Bf=n=>n!==null?`<HeartRateBpm><Value>${Math.round(n)}</Value></HeartRateBpm>`:"",$f=n=>n!==null?`<Cadence>${Math.round(n)}</Cadence>`:"",Of=n=>n===null?"":`<Extensions>
              <TPX xmlns="http://www.garmin.com/xmlschemas/ActivityExtension/v2">
                <Watts>${Math.round(n)}</Watts>
              </TPX>
            </Extensions>`,Nf=n=>{const e=new Date(n.timestamp).toISOString();let i="";n.lat!==null&&n.lon!==null&&(i=`
        <Position>
            <LatitudeDegrees>${n.lat}</LatitudeDegrees>
            <LongitudeDegrees>${n.lon}</LongitudeDegrees>
        </Position>`);let r="";n.altitude!==null&&(r=`<AltitudeMeters>${n.altitude}</AltitudeMeters>`);let s="";n.distance!==null&&(s=`<DistanceMeters>${n.distance}</DistanceMeters>`);const c=[];return n.heartrate!==null&&c.push(Bf(n.heartrate)),n.cadence!==null&&c.push($f(n.cadence)),n.power!==null&&c.push(Of(n.power)),`
<Trackpoint>
    <Time>${e}</Time>
    ${i}
    ${r}
    ${s}
    ${c.join(`
`)}
</Trackpoint>
    `.trim()},qc=(n,e)=>{const i=is(n);if(!i||i.length===0)return"";const r=i[0].timestamp,s=i[i.length-1].timestamp,c=new Date(r).toISOString(),d=n.laps||[],h=Ff(r,s,d).map((f,v)=>{const y=i.filter(F=>F.timestamp>=f.start&&F.timestamp<f.end);if(y.length===0)return"";const b=new Date(f.start).toISOString(),S=Math.round((f.end-f.start)/1e3),E=Er(y.map(F=>F.heartrate)),P=Rf(y.map(F=>F.heartrate)),T=Er(y.map(F=>F.cadence)),D=Er(y.map(F=>F.power)),z=y.filter(F=>F.distance!==null),$=z.length>0?z[z.length-1].distance-(z[0].distance||0):0,A=y.filter(F=>F.energy!==null),O=A.length>0?A[A.length-1].energy-(A[0].energy||0):0;return`
                <Lap StartTime="${b}">
                    <TotalTimeSeconds>${S}</TotalTimeSeconds>
                    <DistanceMeters>${Math.round($)}</DistanceMeters>
                    <Calories>${Math.round(O)}</Calories>
                    ${E!==null?`<AverageHeartRateBpm><Value>${Math.round(E)}</Value></AverageHeartRateBpm>`:""}
                    ${P!==null?`<MaximumHeartRateBpm><Value>${Math.round(P)}</Value></MaximumHeartRateBpm>`:""}
                    <Intensity>Active</Intensity>
                    <TriggerMethod>${f.isManual?"Manual":"Distance"}</TriggerMethod>
                    ${T!==null?`<Cadence>${Math.round(T)}</Cadence>`:""}
                    <Extensions>
                        <LX xmlns="http://www.garmin.com/xmlschemas/ActivityExtension/v2">
                            ${D!==null?`<AvgWatts>${Math.round(D)}</AvgWatts>`:""}
                        </LX>
                    </Extensions>
                    <Track>
${y.map(Nf).join(`
`)}
                    </Track>
                </Lap>`});return`<?xml version="1.0" encoding="UTF-8"?>
    <TrainingCenterDatabase xmlns="http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2">
        <Activities>
            <Activity Sport="${zf(e)}">
                <Id>${c}</Id>
${h.join(`
`)}
            </Activity>
        </Activities>
    </TrainingCenterDatabase>`};function Ff(n,e,i){if(i.length===0)return[{start:n,end:e+1,isManual:!1}];const r=[];let s=n;for(const c of i)r.push({start:s,end:c.timestamp,isManual:!0}),s=c.timestamp;return r.push({start:s,end:e+1,isManual:!1}),r}function Er(n){const e=n.filter(i=>i!==null);return e.length===0?null:e.reduce((i,r)=>i+r,0)/e.length}function Rf(n){const e=n.filter(i=>i!==null);return e.length===0?null:Math.max(...e)}const Hf=32,Fa=2067,Zf=0,qf=1,Wf=34,Vf=18,Uf=19,jf=20,Gf=21,qe=0,kr=2,Wt=132,Ee=134,Yf=0,Kf=1,Jf=2,Xf=3,Qf=4,eg=253,tg=3,ng=4,ig=7,og=253,rg=2,sg=7,ag=8,cg=9,lg=11,dg=5,ug=6,hg=0,mg=1,pg=253,fg=2,gg=7,vg=8,yg=9,_g=11,wg=0,bg=1,xg=253,Sg=0,Eg=1,kg=253,Tg=0,Lg=1,Cg=2,Pg=3,Mg=4,Ig=5,Ag=4,Dg=255,zg=2,Bg=1,$g=11,Og=6,Ra=0,Ha=0,Ng=8,Fg=9,Rg=26,Hg=0,lo=1,Zg=0,qg=Date.UTC(1989,11,31,0,0,0);function Za(n,e,i){const r=[0,52225,55297,5120,61441,15360,10240,58369,40961,27648,30720,46081,20480,39937,34817,17408];let s=0;for(let c=e;c<i;c++){const d=n[c];let u=r[s&15];s=s>>4&4095,s=s^u^r[d&15],u=r[s&15],s=s>>4&4095,s=s^u^r[d>>4&15]}return s}function Tr(n){return Math.round((n-qg)/1e3)}class Wg{buffer=[];definedMessages=new Map;writeHeader(){this.buffer.push(14),this.buffer.push(Hf),this.buffer.push(Fa&255),this.buffer.push(Fa>>8&255),this.buffer.push(0,0,0,0),this.buffer.push(46,70,73,84),this.buffer.push(0,0)}writeDefinition(e,i,r){this.buffer.push(64|e&15),this.buffer.push(0),this.buffer.push(0),this.buffer.push(i&255),this.buffer.push(i>>8&255),this.buffer.push(r.length);for(const s of r)this.buffer.push(s.fieldDefNum),this.buffer.push(s.size),this.buffer.push(s.baseType);this.definedMessages.set(e,!0)}writeData(e,i){this.buffer.push(e&15);for(const r of i);}writeUint8(e){this.buffer.push(e&255)}writeUint16(e){this.buffer.push(e&255),this.buffer.push(e>>8&255)}writeUint32(e){this.buffer.push(e&255),this.buffer.push(e>>8&255),this.buffer.push(e>>16&255),this.buffer.push(e>>24&255)}writeDataHeader(e){this.buffer.push(e&15)}finalize(){const e=new Uint8Array(this.buffer),i=this.buffer.length-14;e[4]=i&255,e[5]=i>>8&255,e[6]=i>>16&255,e[7]=i>>24&255;const r=Za(e,0,12);e[12]=r&255,e[13]=r>>8&255;const s=Za(e,0,e.length),c=new Uint8Array(e.length+2);return c.set(e),c[e.length]=s&255,c[e.length+1]=s>>8&255,c}getBuffer(){return this.buffer}}function Vg(n){switch(n){case"running":return{sport:Bg,subSport:Ra};case"walking":return{sport:$g,subSport:Ra};default:return{sport:zg,subSport:Og}}}const os=(n,e)=>{const i=is(n);if(!i||i.length===0)return null;const r=Vg(e),s=new Wg;s.writeHeader();const c=i[0].timestamp,d=i[i.length-1].timestamp,u=Tr(c),h=Tr(d),p=(d-c)/1e3,_=Math.round(p*1e3),f=i.filter(A=>A.energy!==null),v=f.length>0?Math.round(f[f.length-1].energy-(f[0].energy||0)):0,y=i.filter(A=>A.distance!==null),b=y.length>0&&y[y.length-1].distance>(y[0].distance||0)?Math.round(y[y.length-1].distance-(y[0].distance||0)):0,S=0,E=1,P=2,T=3,D=4,z=5,$=6;s.writeDefinition(S,Zf,[{fieldDefNum:Yf,size:1,baseType:qe},{fieldDefNum:Kf,size:2,baseType:Wt},{fieldDefNum:Jf,size:2,baseType:Wt},{fieldDefNum:Xf,size:4,baseType:Ee},{fieldDefNum:Qf,size:4,baseType:Ee}]),s.writeDataHeader(S),s.writeUint8(Ag),s.writeUint16(Dg),s.writeUint16(1),s.writeUint32(12345678),s.writeUint32(u),s.writeDefinition(E,qf,[{fieldDefNum:0,size:2,baseType:Wt},{fieldDefNum:1,size:1,baseType:kr}]),s.writeDataHeader(E),s.writeUint16(100),s.writeUint8(1),s.writeDefinition(P,Gf,[{fieldDefNum:xg,size:4,baseType:Ee},{fieldDefNum:Sg,size:1,baseType:qe},{fieldDefNum:Eg,size:1,baseType:qe}]),s.writeDataHeader(P),s.writeUint32(u),s.writeUint8(Ha),s.writeUint8(Hg),s.writeDefinition(T,jf,[{fieldDefNum:eg,size:4,baseType:Ee},{fieldDefNum:tg,size:1,baseType:kr},{fieldDefNum:ng,size:1,baseType:kr},{fieldDefNum:ig,size:2,baseType:Wt}]);for(const A of i){const O=Tr(A.timestamp);s.writeDataHeader(T),s.writeUint32(O),s.writeUint8(A.heartrate!==null?Math.min(255,Math.round(A.heartrate)):255),s.writeUint8(A.cadence!==null?Math.min(255,Math.round(A.cadence)):255),s.writeUint16(A.power!==null?Math.round(A.power):65535)}return s.writeDataHeader(P),s.writeUint32(h),s.writeUint8(Ha),s.writeUint8(lo),s.writeDefinition(D,Uf,[{fieldDefNum:pg,size:4,baseType:Ee},{fieldDefNum:fg,size:4,baseType:Ee},{fieldDefNum:gg,size:4,baseType:Ee},{fieldDefNum:vg,size:4,baseType:Ee},{fieldDefNum:yg,size:4,baseType:Ee},{fieldDefNum:_g,size:2,baseType:Wt},{fieldDefNum:wg,size:1,baseType:qe},{fieldDefNum:bg,size:1,baseType:qe}]),s.writeDataHeader(D),s.writeUint32(h),s.writeUint32(u),s.writeUint32(_),s.writeUint32(_),s.writeUint32(b),s.writeUint16(v),s.writeUint8(Fg),s.writeUint8(lo),s.writeDefinition(z,Vf,[{fieldDefNum:og,size:4,baseType:Ee},{fieldDefNum:rg,size:4,baseType:Ee},{fieldDefNum:sg,size:4,baseType:Ee},{fieldDefNum:ag,size:4,baseType:Ee},{fieldDefNum:cg,size:4,baseType:Ee},{fieldDefNum:lg,size:2,baseType:Wt},{fieldDefNum:dg,size:1,baseType:qe},{fieldDefNum:ug,size:1,baseType:qe},{fieldDefNum:hg,size:1,baseType:qe},{fieldDefNum:mg,size:1,baseType:qe}]),s.writeDataHeader(z),s.writeUint32(h),s.writeUint32(u),s.writeUint32(_),s.writeUint32(_),s.writeUint32(b),s.writeUint16(v),s.writeUint8(r.sport),s.writeUint8(r.subSport),s.writeUint8(Ng),s.writeUint8(lo),s.writeDefinition($,Wf,[{fieldDefNum:kg,size:4,baseType:Ee},{fieldDefNum:Tg,size:4,baseType:Ee},{fieldDefNum:Lg,size:2,baseType:Wt},{fieldDefNum:Cg,size:1,baseType:qe},{fieldDefNum:Pg,size:1,baseType:qe},{fieldDefNum:Mg,size:1,baseType:qe},{fieldDefNum:Ig,size:4,baseType:Ee}]),s.writeDataHeader($),s.writeUint32(h),s.writeUint32(_),s.writeUint16(1),s.writeUint8(Zg),s.writeUint8(Rg),s.writeUint8(lo),s.writeUint32(h),s.finalize()},Lr={1:{label:"1 - Very Light",description:"Barely any effort",color:"#3b82f6"},2:{label:"2 - Light",description:"Easy breathing",color:"#22c55e"},3:{label:"3 - Light",description:"Could do this all day",color:"#22c55e"},4:{label:"4 - Moderate",description:"Comfortable effort",color:"#84cc16"},5:{label:"5 - Moderate",description:"Starting to breathe harder",color:"#eab308"},6:{label:"6 - Hard",description:"Can speak in sentences",color:"#eab308"},7:{label:"7 - Hard",description:"Can only speak in phrases",color:"#f97316"},8:{label:"8 - Very Hard",description:"Difficult to maintain",color:"#ef4444"},9:{label:"9 - Very Hard",description:"Almost maximal effort",color:"#dc2626"},10:{label:"10 - Maximum",description:"All-out effort",color:"#991b1b"}};function Cn(n){const e=n?new Date(n):new Date,i=e.getHours();let r="Morning";i>=12&&i<17?r="Afternoon":i>=17&&i<21?r="Evening":(i>=21||i<5)&&(r="Night");const s=e.toLocaleDateString("en-US",{month:"short",day:"numeric"});return`${r} Ride - ${s}`}function Ug(n){const e=document.createElement("div");e.className="rpe-selector",e.innerHTML=`
        <label class="metadata-label">Perceived Exertion (RPE)</label>
        <div class="rpe-grid">
            ${[1,2,3,4,5,6,7,8,9,10].map(r=>{const s=Lr[r];return`
                    <button type="button"
                        class="rpe-button ${n===r?"selected":""}"
                        data-rpe="${r}"
                        title="${s.label}: ${s.description}"
                        style="--rpe-color: ${s.color};">
                        ${r}
                    </button>
                `}).join("")}
        </div>
        <div class="rpe-description" id="rpeDescription">
            Select how hard the workout felt
        </div>
    `;const i=e.querySelectorAll(".rpe-button");return i.forEach(r=>{r.addEventListener("click",()=>{i.forEach(d=>d.classList.remove("selected")),r.classList.add("selected");const s=parseInt(r.getAttribute("data-rpe")||"5",10),c=e.querySelector("#rpeDescription");c&&(c.textContent=`${Lr[s].label}: ${Lr[s].description}`)})}),e}function jg(n,e,i){const r=document.createElement("div");r.className="workout-metadata-form";const s=document.createElement("div");if(s.className="metadata-field",s.innerHTML=`
        <label class="metadata-label" for="workoutTitle">Workout Title</label>
        <input type="text"
            id="workoutTitle"
            class="metadata-input"
            value="${Cn(n)}"
            placeholder="Enter workout title..."
            maxlength="100">
    `,r.appendChild(s),e){const c=document.createElement("div");c.className="metadata-field",c.innerHTML=`
            <label class="metadata-label" for="workoutNotes">Notes (optional)</label>
            <textarea
                id="workoutNotes"
                class="metadata-textarea"
                placeholder="How did the workout go? Any observations..."
                rows="3"
                maxlength="1000"></textarea>
        `,r.appendChild(c)}if(i){const c=document.createElement("div");c.className="metadata-field",c.appendChild(Ug()),r.appendChild(c)}return r}function Gg(n){const e=n.querySelector("#workoutTitle"),i=n.querySelector("#workoutNotes"),r=n.querySelector(".rpe-button.selected"),s={title:e?.value.trim()||Cn()};if(i?.value.trim()&&(s.notes=i.value.trim()),r){const c=parseInt(r.getAttribute("data-rpe")||"0",10);c>=1&&c<=10&&(s.perceivedExertion=c)}return s}function Wc(n){const e=ve(),{promptForNotes:i,promptForExertion:r}=e.workoutMetadata;return!i&&!r?Promise.resolve({title:Cn(n)}):new Promise(s=>{let c=null;const d=jg(n,i,r);c=ki({title:"Workout Details",content:d,icon:"📝",closeOnOverlay:!1,buttons:[{text:"Skip",variant:"secondary",onClick:()=>{c?.(),s({title:Cn(n)})}},{text:"Save",variant:"primary",onClick:()=>{const u=Gg(d);c?.(),s(u)}}],onClose:()=>{s({title:Cn(n)})}}),setTimeout(()=>{const u=d.querySelector("#workoutTitle");u?.focus(),u?.select()},100)})}function Vc(){const n=ve();return n.workoutMetadata.promptForNotes||n.workoutMetadata.promptForExertion}const Yg=Object.freeze(Object.defineProperty({__proto__:null,generateDefaultTitle:Cn,shouldShowMetadataModal:Vc,showWorkoutMetadataModal:Wc},Symbol.toStringTag,{value:"Module"})),Kg=5e3;function Jg(n){const{message:e,onUndo:i,onExpire:r,timeout:s=Kg,icon:c="🗑️"}=n;document.querySelector(".undo-notification")?.remove();const u=document.createElement("div");u.className="undo-notification",u.setAttribute("role","alert"),u.setAttribute("aria-live","assertive");const h=Math.ceil(s/1e3);let p=h;u.innerHTML=`
        <div class="undo-notification-content">
            <span class="undo-notification-icon" aria-hidden="true">${c}</span>
            <span class="undo-notification-message">${e}</span>
        </div>
        <div class="undo-notification-actions">
            <button class="undo-notification-btn" type="button">
                Undo <span class="undo-countdown">(${p}s)</span>
            </button>
        </div>
        <div class="undo-progress-bar">
            <div class="undo-progress-fill"></div>
        </div>
    `,document.body.appendChild(u);const _=u.querySelector(".undo-notification-btn"),f=u.querySelector(".undo-countdown"),v=u.querySelector(".undo-progress-fill"),y=window.matchMedia("(prefers-reduced-motion: reduce)").matches;y||(v.style.transition=`width ${s}ms linear`,v.offsetHeight),v.style.width="0%",requestAnimationFrame(()=>{u.classList.add("undo-notification-visible")});let b=!1,S=null,E=null;const P=(T=!1)=>{S&&(clearInterval(S),S=null),E&&(clearTimeout(E),E=null),y?(u.remove(),T&&!b&&r&&r()):(u.classList.remove("undo-notification-visible"),u.classList.add("undo-notification-hiding"),setTimeout(()=>{u.remove(),T&&!b&&r&&r()},200))};return S=setInterval(()=>{p--,p>0?f.textContent=`(${p}s)`:S&&clearInterval(S)},1e3),E=setTimeout(()=>{P(!0)},s),_.addEventListener("click",()=>{b=!0,P(!1),i(),V("Action undone","assertive")}),_.focus(),V(`${e} Press undo within ${h} seconds to restore.`,"assertive"),()=>P(!1)}function Xg(n,e){return{power:[...n.power],heartrate:[...n.heartrate],cadence:[...n.cadence],startTime:e.startTime,endTime:e.endTime,running:e.running}}function Qg(n,e,i){e.power=[...n.power],e.heartrate=[...n.heartrate],e.cadence=[...n.cadence],i.startTime=n.startTime,i.endTime=n.endTime,i.running=n.running}function ev({measurementsState:n,timeState:e}){const i=document.getElementById("lapButton"),r=document.getElementById("lapCounter"),s=document.getElementById("lapCount"),c=document.getElementById("startButton"),d=document.getElementById("pauseButton"),u=document.getElementById("resumeButton"),h=document.getElementById("stopButton");if(!i||!r||!s){console.warn("Lap button elements not found in DOM");return}const p=()=>{const y=n.getLapCount();s.textContent=String(y),r.style.display=y>0?"block":"none"},_=()=>{const y=e.running&&e.startTime!==null;i.style.display=y?"inline-flex":"none"},f=()=>{if(!e.running||!e.startTime)return;const y=n.laps,b=y.length>0?y[y.length-1].timestamp:e.startTime,S=n.addLap(e.startTime);p();const E=S.timestamp,P=E-b,T=n.power.filter(A=>A.timestamp>=b&&A.timestamp<=E),D=T.length>0?T.reduce((A,O)=>A+O.value,0)/T.length:0;it.announceLap(S.number,P,D);const z=S.elapsedMs?xo(S.elapsedMs):"",$=`Lap ${S.number}${z?` at ${z}`:""}`;he(`🏁 ${$}`,"info"),V($,"assertive"),console.log(`Lap marked: ${S.number} at ${new Date(S.timestamp).toISOString()}`)};i.addEventListener("click",f);const v=new MutationObserver(()=>{_()});[c,d,u,h].forEach(y=>{y&&v.observe(y,{attributes:!0,attributeFilter:["style"]})}),_(),p(),c?.addEventListener("click",()=>{setTimeout(_,10)}),d?.addEventListener("click",()=>{setTimeout(_,10)}),u?.addEventListener("click",()=>{setTimeout(_,10)}),h?.addEventListener("click",()=>{setTimeout(()=>{_()},10)}),console.log("Lap button initialized")}function tv(){const n=document.getElementById("lapCounter"),e=document.getElementById("lapCount");n&&e&&(e.textContent="0",n.style.display="none")}class nv{state={maxPower:0,maxHr:0,longestDuration:0,longestDistance:0,powerCurve:{}};constructor(e){this.processHistory(e)}processHistory(e){e.forEach(i=>{const r=iv(i);r.power?.max&&r.power.max>this.state.maxPower&&(this.state.maxPower=r.power.max),r.heartrate?.max&&r.heartrate.max>this.state.maxHr&&(this.state.maxHr=r.heartrate.max),i.duration&&i.duration>this.state.longestDuration&&(this.state.longestDuration=i.duration),r.powerCurve&&r.powerCurve.forEach(s=>{const c=this.state.powerCurve[s.duration]||0;s.watts>c&&(this.state.powerCurve[s.duration]=s.watts)})})}checkNewRecords(e){const i=[];if(e.power.max&&e.power.max>this.state.maxPower&&i.push(`Max Power: ${e.power.max} W`),e.heartrate.max&&e.heartrate.max>this.state.maxHr&&i.push(`Max Heart Rate: ${e.heartrate.max} bpm`),e.duration&&e.duration>this.state.longestDuration&&i.push(`Longest Ride: ${ov(e.duration)}`),e.powerCurve){const r=[1,5,60,300,1200,3600],s={1:"1s Power",5:"5s Power",60:"1m Power",300:"5m Power",1200:"20m Power",3600:"1h Power"};e.powerCurve.forEach(c=>{if(r.includes(c.duration)){const d=this.state.powerCurve[c.duration]||0;if(c.watts>d){if(c.duration===1&&i.some(u=>u.startsWith("Max Power")))return;i.push(`${s[c.duration]}: ${c.watts} W`)}}})}return i}}function iv(n){if(!n.summary)return{};if(typeof n.summary=="string")try{return JSON.parse(n.summary)}catch{return{}}return n.summary}function ov(n){const e=Math.floor(n/1e3),i=Math.floor(e/3600),r=Math.floor(e%3600/60),s=e%60;return i>0?`${i}h ${r}m`:`${r}m ${s}s`}class rv{static API_BASE="https://intervals.icu/api/v1";static async uploadWorkout(e,i){const r=ve();if(!(!r.intervals.enabled||!r.intervals.apiKey))try{const s=os(e);if(!s){console.warn("[Intervals] No data to upload");return}const c=new Blob([s],{type:"application/fit"}),d=new FormData;d.append("file",c,i);const u=r.intervals.athleteId||"i",h=`${this.API_BASE}/athlete/${u}/activities`,p=btoa(`API_KEY:${r.intervals.apiKey}`);he("Uploading to Intervals.icu...","info");const _=await fetch(h,{method:"POST",headers:{Authorization:`Basic ${p}`},body:d});if(_.ok){const f=await _.json();console.log("[Intervals] Upload success:",f),he("Uploaded to Intervals.icu! 🚀","success")}else{const f=await _.text();console.error("[Intervals] Upload failed:",_.status,f),he(`Upload failed: ${_.status}`,"error")}}catch(s){console.error("[Intervals] Network error:",s),he("Upload network error","error")}}}const qa={power:!0,cadence:!0,heartrate:!0,exportTcx:!0,exportCsv:!0,exportJson:!1,exportFit:!1},sv="https://www.strava.com/upload/select";class xn{static instance;accessToken=null;constructor(){}static getInstance(){return xn.instance||(xn.instance=new xn),xn.instance}isConnected(){return!!this.accessToken}async handleUpload(e,i){try{let r,s;const c=new Date().toISOString().slice(0,10),d=new Date().toISOString().slice(11,16).replace(":","-"),u=`bike-power-tracker-${c}-${d}`;try{const h=os(e,void 0);if(h)r=new Blob([h],{type:"application/octet-stream"}),s=`${u}.fit`;else throw new Error("No FIT data generated")}catch(h){console.warn("FIT generation failed, falling back to TCX",h);const p=qc(e);r=new Blob([p],{type:"application/vnd.garmin.tcx+xml"}),s=`${u}.tcx`}this.downloadFile(r,s),this.openStravaUpload(),V("Workout file downloaded. Please upload closely in the new Strava tab.","assertive")}catch(r){console.error("Strava upload preparation failed:",r),alert("Failed to prepare Strava upload.")}}downloadFile(e,i){const r=URL.createObjectURL(e),s=document.createElement("a");s.href=r,s.download=i,document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(r),100)}openStravaUpload(){window.open(sv,"_blank")}}const av=xn.getInstance(),cv=()=>{const n=document.getElementById("toggleYourMetrics"),e=document.getElementById("yourMetrics");n&&e&&(n.checked=e.style.display!=="none",n.addEventListener("change",s=>{const c=s.target;e.style.display=c.checked?"flex":"none"}));const i=document.getElementById("toggleStreamMetrics"),r=document.getElementById("streamMetrics");i&&r&&(i.checked=r.style.display!=="none",i.addEventListener("change",s=>{const c=s.target;r.style.display=c.checked?"flex":"none"}))},lv=({measurementsState:n,timeState:e,zoneState:i})=>{const r=document.getElementById("discardButton");if(!r){console.warn("Discard button not found in DOM");return}((c,d)=>{const u=h=>{h.stopPropagation(),d()};c.addEventListener("click",u)})(r,async()=>{if(!(n.power.length>0||n.heartrate.length>0||n.cadence.length>0||e.startTime!==null)){So(n,e);return}const d=n.power.length+n.heartrate.length+n.cadence.length;if(await xc("Discard Workout",`Are you sure you want to discard this workout? You have ${d} data points that will be deleted. You'll have 5 seconds to undo this action.`,{confirmText:"Discard",cancelText:"Keep Data",confirmVariant:"danger",icon:"🗑️"})){const h=Xg(n,e);So(n,e),i&&i.reset(),document.dispatchEvent(new CustomEvent("workout-discarded")),tv(),Jg({message:"Workout data discarded",icon:"🗑️",timeout:5e3,onUndo:()=>{Qg(h,n,e),dv(h),V("Workout data restored","polite")},onExpire:()=>{V("Discard complete","polite")}})}})};function dv(n){const e=document.getElementById("startButton"),i=document.getElementById("pauseButton"),r=document.getElementById("resumeButton"),s=document.getElementById("stopButton"),c=document.getElementById("time");if(n.running?(e&&(e.style.display="none"),i&&(i.style.display="inline-flex"),r&&(r.style.display="none"),s&&(s.style.display="inline-flex")):n.startTime!==null&&(e&&(e.style.display="none"),i&&(i.style.display="none"),r&&(r.style.display="inline-flex"),s&&(s.style.display="inline-flex")),c&&n.startTime!==null){const d=(n.endTime||Date.now())-n.startTime,u=Math.floor(d/1e3),h=Math.floor(u/3600),p=Math.floor(u%3600/60),_=u%60;c.textContent=`${String(h).padStart(2,"0")}:${String(p).padStart(2,"0")}:${String(_).padStart(2,"0")}`}}function So(n,e){e.running=!1,e.startTime=null,e.endTime=null,n.power=[],n.heartrate=[],n.cadence=[];const i=document.getElementById("startButton"),r=document.getElementById("pauseButton"),s=document.getElementById("resumeButton"),c=document.getElementById("stopButton");i&&(i.style.display="inline-flex"),r&&(r.style.display="none"),s&&(s.style.display="none"),c&&(c.style.display="none");const d=document.getElementById("time");d&&(d.textContent="00:00:00")}function Uc(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}-${String(n.getHours()).padStart(2,"0")}-${String(n.getMinutes()).padStart(2,"0")}-${String(n.getSeconds()).padStart(2,"0")}`}function uo(n,e){const i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=e,r.click(),URL.revokeObjectURL(i)}const uv=(n,e)=>{const i=document.getElementById("exportData");if(!i){console.warn("Export button not found in DOM");return}((s,c)=>{const d=u=>{u.stopPropagation(),c()};s.addEventListener("click",d)})(i,()=>{try{const s=localStorage.getItem("bpt-settings"),c=s?{...qa,...JSON.parse(s)}:qa,d=Uc(),u=jc(),h=u?.title?u.title.replace(/[^a-z0-9]+/gi,"-").substring(0,30).toLowerCase():"workout";xc("Export Options","Choose an action for your workout data:",{confirmText:"Download Files",confirmVariant:"primary",cancelText:"Upload to Strava",icon:"💾"}).then(p=>{if(p){if(c.exportJson){const _={metadata:u?{title:u.title,notes:u.notes||null,perceivedExertion:u.perceivedExertion||null}:null,power:n.power,heartrate:n.heartrate,cadence:n.cadence};if(e){const y=e.toJSON();(y.powerZones.some(b=>b.timeInZoneMs>0)||y.hrZones.some(b=>b.timeInZoneMs>0))&&(_.zoneDistribution={power:y.powerZones.map(b=>({zone:b.zone,name:b.name,timeSeconds:Math.round(b.timeInZoneMs/1e3)})),hr:y.hrZones.map(b=>({zone:b.zone,name:b.name,timeSeconds:Math.round(b.timeInZoneMs/1e3)}))})}const f=JSON.stringify(_,null,2),v=new Blob([f],{type:"application/json"});uo(v,`${h}-${d}.json`)}if(c.exportCsv){const _=Df(n),f=new Blob([_],{type:"text/csv"});uo(f,`${h}-${d}.csv`)}if(c.exportTcx){const _=qc(n),f=new Blob([_],{type:"application/vnd.garmin.tcx+xml"});uo(f,`${h}-${d}.tcx`)}try{const _=os(n,void 0);if(_){const f=new Blob([_],{type:"application/octet-stream"});uo(f,`${h}-${d}.fit`)}}catch{}V("Workout files downloaded","assertive")}else av.handleUpload(n,u||void 0)})}catch(s){console.error("Export failed:",s),he("Failed to export data","error")}})};let Eo=null;function jc(){return Eo}function Wa(){Eo=null}const hv=({measurementsState:n,timeState:e,zoneState:i})=>{document.addEventListener("workoutComplete",async r=>{const s=r.detail;if(!(n.power.length>0||n.heartrate.length>0||n.cadence.length>0)&&!s.startTime)return;const d=ts(s.startTime||e.startTime||Date.now(),s.endTime||e.endTime||Date.now(),n,i);let u=[];try{if(await wc()){const h=await Do({limit:1e3});u=new nv(h.workouts).checkNewRecords(d),u.length>0&&V(`Congratulations! You set ${u.length} new personal records!`,"assertive")}}catch(h){console.warn("Failed to check for PRs:",h)}await Mm(d,{onExport:async()=>{if(Vc())Eo=await Wc(s.startTime||e.startTime);else{const{generateDefaultTitle:p}=await Et(async()=>{const{generateDefaultTitle:_}=await Promise.resolve().then(()=>Yg);return{generateDefaultTitle:_}},void 0);Eo={title:p(s.startTime||e.startTime)}}try{await fc(),V("Workout saved to local history","polite");const p=ve();if(p.intervals&&p.intervals.enabled&&p.intervals.autoUpload)try{const _=jc(),f=_?.title?_.title.replace(/[^a-z0-9]+/gi,"-").substring(0,30).toLowerCase():"workout",v=Uc();await rv.uploadWorkout(n,`${f}-${v}.fit`)}catch(_){console.error("Intervals auto-upload failed",_)}}catch(p){console.error("Failed to save to local history",p),V("Failed to save to local history","assertive")}document.getElementById("exportData")?.click(),So(n,e),Wa()},onDiscard:()=>{So(n,e),Wa(),V("Workout discarded","polite")},onKeepRecording:()=>{document.getElementById("resumeButton")?.click()}},u)})},mv="bpt-user-profile";function pv(){try{const n=localStorage.getItem(mv);if(n)return JSON.parse(n)}catch(n){console.warn("Failed to load user profile:",n)}return{ftp:null,maxHr:null}}function Gc(n){return[{name:"Active Recovery",min:0,max:Math.round(n*.55)},{name:"Endurance",min:Math.round(n*.55),max:Math.round(n*.75)},{name:"Tempo",min:Math.round(n*.75),max:Math.round(n*.9)},{name:"Threshold",min:Math.round(n*.9),max:Math.round(n*1.05)},{name:"VO2max",min:Math.round(n*1.05),max:Math.round(n*1.2)},{name:"Anaerobic",min:Math.round(n*1.2),max:Math.round(n*1.5)},{name:"Neuromuscular",min:Math.round(n*1.5),max:9999}]}function Yc(n){return[{name:"Recovery",min:Math.round(n*.5),max:Math.round(n*.6)},{name:"Aerobic",min:Math.round(n*.6),max:Math.round(n*.7)},{name:"Tempo",min:Math.round(n*.7),max:Math.round(n*.8)},{name:"Threshold",min:Math.round(n*.8),max:Math.round(n*.9)},{name:"Anaerobic",min:Math.round(n*.9),max:n}]}function fv(n,e){const i=Gc(e);for(let r=0;r<i.length;r++)if(n>=i[r].min&&n<i[r].max)return{zone:r+1,name:i[r].name};return null}function gv(n,e){const i=Yc(e);for(let r=0;r<i.length;r++)if(n>=i[r].min&&n<=i[r].max)return{zone:r+1,name:i[r].name};return null}class vv{_powerZones=[];_hrZones=[];_lastPowerZone=null;_lastHrZone=null;_lastUpdateTime=null;_ftp=null;_maxHr=null;_currentPowerZone=null;_currentHrZone=null;_onChangeCallbacks=[];constructor(){this.loadProfile()}loadProfile(){const e=pv();if(this._ftp=e.ftp,this._maxHr=e.maxHr,this._ftp){const i=Gc(this._ftp);this._powerZones=i.map((r,s)=>({zone:s+1,name:r.name,min:r.min,max:r.max,timeInZoneMs:0}))}if(this._maxHr){const i=Yc(this._maxHr);this._hrZones=i.map((r,s)=>({zone:s+1,name:r.name,min:r.min,max:r.max,timeInZoneMs:0}))}}onChange(e){this._onChangeCallbacks.push(e)}offChange(e){const i=this._onChangeCallbacks.indexOf(e);i>-1&&this._onChangeCallbacks.splice(i,1)}_notifyChange(){for(const e of this._onChangeCallbacks)try{e()}catch(i){console.error("Zone state change callback error:",i)}}updatePower(e,i=Date.now()){if(!this._ftp)return null;const r=fv(e,this._ftp);if(!r)return null;const s=r.zone;if(this._lastUpdateTime!==null&&this._lastPowerZone!==null){const h=i-this._lastUpdateTime,p=this._powerZones[this._lastPowerZone-1];p&&h>0&&h<5e3&&(p.timeInZoneMs+=h)}this._lastPowerZone=s,this._lastUpdateTime=i;const c=this._powerZones[s-1],d=c.max-c.min,u=d>0?Math.min(100,Math.max(0,(e-c.min)/d*100)):50;return this._currentPowerZone={zone:s,name:r.name,percentInZone:u},this._notifyChange(),this._currentPowerZone}updateHeartRate(e,i=Date.now()){if(!this._maxHr)return null;const r=gv(e,this._maxHr);if(!r)return null;const s=r.zone;if(this._lastUpdateTime!==null&&this._lastHrZone!==null){const h=i-this._lastUpdateTime,p=this._hrZones[this._lastHrZone-1];p&&h>0&&h<5e3&&(p.timeInZoneMs+=h)}this._lastHrZone=s,(this._lastUpdateTime===null||i-this._lastUpdateTime>50)&&(this._lastUpdateTime=i);const c=this._hrZones[s-1],d=c.max-c.min,u=d>0?Math.min(100,Math.max(0,(e-c.min)/d*100)):50;return this._currentHrZone={zone:s,name:r.name,percentInZone:u},this._notifyChange(),this._currentHrZone}getCurrentPowerZone(){return this._currentPowerZone}getCurrentHrZone(){return this._currentHrZone}getPowerZoneDistribution(){const e=this._powerZones.reduce((i,r)=>i+r.timeInZoneMs,0);return{zones:[...this._powerZones],totalTimeMs:e}}getHrZoneDistribution(){const e=this._hrZones.reduce((i,r)=>i+r.timeInZoneMs,0);return{zones:[...this._hrZones],totalTimeMs:e}}hasPowerZones(){return this._ftp!==null&&this._ftp>0}hasHrZones(){return this._maxHr!==null&&this._maxHr>0}getFtp(){return this._ftp}getMaxHr(){return this._maxHr}reset(){this._powerZones.forEach(e=>e.timeInZoneMs=0),this._hrZones.forEach(e=>e.timeInZoneMs=0),this._lastPowerZone=null,this._lastHrZone=null,this._lastUpdateTime=null,this._currentPowerZone=null,this._currentHrZone=null,this._notifyChange()}toJSON(){return{powerZones:[...this._powerZones],hrZones:[...this._hrZones],ftp:this._ftp,maxHr:this._maxHr}}}const Va=5e3,yv=100;let vn;function _v(){let n=document.getElementById("powerLiveChart"),e=document.getElementById("hrLiveChart"),i=document.getElementById("liveChartsContainer");if(!i){const r=document.getElementById("yourMetrics");if(r){i=document.createElement("div"),i.id="liveChartsContainer",i.className="live-charts-container",i.style.display="none";const s=document.getElementById("dataFieldsCarousel");s&&s.nextSibling?r.insertBefore(i,s.nextSibling):r.appendChild(i)}}return i&&(n||(n=document.createElement("bpt-live-chart"),n.id="powerLiveChart",n.setAttribute("type","power"),n.setAttribute("duration","60"),i.appendChild(n)),e||(e=document.createElement("bpt-live-chart"),e.id="hrLiveChart",e.setAttribute("type","heartrate"),e.setAttribute("duration","60"),i.appendChild(e))),{powerChart:n,hrChart:e}}function wv(n){let e=document.getElementById("toggleLiveCharts");if(!e){const i=document.getElementById("topBarControls");if(i){e=document.createElement("button"),e.id="toggleLiveCharts",e.className="workout-btn workout-btn-chart",e.setAttribute("aria-label","Toggle live charts"),e.setAttribute("title","Toggle Charts"),e.innerHTML="📊",e.style.display="none";const r=document.querySelector(".workout-controls");r?i.insertBefore(e,r):i.appendChild(e)}}return e&&e.setAttribute("aria-pressed",n?"true":"false"),e}const bv=({measurementsState:n})=>{vn=new vv;const{powerChart:e,hrChart:i}=_v();let r=localStorage.getItem("bpt-charts-visible")==="true";const s=wv(r),c=document.getElementById("liveChartsContainer");c&&(c.style.display=r?"flex":"none"),s&&s.addEventListener("click",()=>{r=!r,localStorage.setItem("bpt-charts-visible",r?"true":"false"),s.setAttribute("aria-pressed",r?"true":"false"),c&&(c.style.display=r?"flex":"none")});let d=0,u=0,h=null,p=null;const _=()=>{if(e&&n.power.length>d){for(let v=d;v<n.power.length;v++){const y=n.power[v];e.addDataPoint(y.value,y.timestamp)}d=n.power.length}if(i&&n.heartrate.length>u){for(let v=u;v<n.heartrate.length;v++){const y=n.heartrate[v];i.addDataPoint(y.value,y.timestamp)}u=n.heartrate.length}},f=()=>{if(n.power.length>0){const v=n.power[n.power.length-1];if(Date.now()-v.timestamp<Va){const y=vn.updatePower(v.value,v.timestamp),b=y?.zone??null;b!==h&&(b!==null&&h!==null&&it.announceZoneChange(y.name),h=b)}}if(n.heartrate.length>0){const v=n.heartrate[n.heartrate.length-1];if(Date.now()-v.timestamp<Va){const y=vn.updateHeartRate(v.value,v.timestamp),b=y?.zone??null;b!==p&&(b!==null&&p!==null&&it.announceZoneChange(y.name),p=b)}}};return setInterval(()=>{f(),_()},yv),document.addEventListener("workoutStarted",()=>{s&&(s.style.display="inline-flex")}),document.addEventListener("workoutStopped",()=>{s&&(s.style.display="none")}),window.addEventListener("storage",v=>{v.key==="bpt-user-profile"&&vn.loadProfile()}),document.addEventListener("workout-discarded",()=>{vn.reset(),d=0,u=0,e&&e.clear(),i&&i.clear()}),vn},Ci="https://api.bikepowertracker.com",xv="super-secret-bike-tracker-key";function Oo(n={}){const e={...n};return e["X-API-Key"]=xv,e}async function Sv(n){const e=await fetch(`${Ci}/api/streams/create`,{method:"POST",headers:Oo({"Content-Type":"application/json"}),body:JSON.stringify({streamName:n})});if(!e.ok){const i=await e.json();throw new Error(i.error||"Failed to create stream")}return e.json()}async function Ev(){const n=await fetch(`${Ci}/api/streams`,{headers:Oo()});if(!n.ok){const e=await n.text();throw new Error(e||"Failed to list streams")}return n.json()}async function kv(n,e,i="anonymous"){const r=await fetch(`${Ci}/api/streams/${n}/messages`,{method:"POST",headers:Oo({"Content-Type":"application/json"}),body:JSON.stringify({message:e,author:i})});if(!r.ok){const s=await r.json();throw new Error(s.error||"Failed to add message")}return r.json()}function Kc(n,e,i,r){const s=new AbortController;let c=!0;const d={close:()=>{c=!1,s.abort()},get active(){return c}};return(async()=>{try{const u=await fetch(n,{method:"GET",headers:Oo({Accept:"text/event-stream","Cache-Control":"no-cache"}),signal:s.signal});if(!u.ok)throw new Error(`SSE connection failed: ${u.status} ${u.statusText}`);if(!u.body)throw new Error("SSE response has no body");const h=u.body.getReader(),p=new TextDecoder;let _="";for(;c;){const{done:f,value:v}=await h.read();if(f)break;_+=p.decode(v,{stream:!0});const y=_.split(`

`);_=y.pop()||"";for(const b of y){if(!b.trim())continue;const S=b.match(/^data:\s*(.+)$/m);if(S)try{const E=JSON.parse(S[1]);E.type==="connected"&&i?i(E):E.type==="message"&&e(E)}catch(E){console.error("Error parsing SSE data:",E)}}}}catch(u){if(u.name==="AbortError")return;console.error("SSE connection error:",u),r&&r(u)}finally{c=!1}})(),d}function Tv(n,e,i,r){const s=`${Ci}/api/streams/${n}/listen`;return Kc(s,e,i,r)}function Lv(n,e,i){const r=`${Ci}/api/streams/listenAll`;return Kc(r,n,e,i)}async function Cv(n,e){const i=JSON.stringify({power:e.power??null,cadence:e.cadence??null,heartrate:e.heartrate??null,speed:e.speed??null,distance:e.distance??null,altitude:e.altitude??null,incline:e.incline??null,timestamp:e.timestamp,elapsed:e.elapsed,dataType:"workout_metrics"});return kv(n,i,"bike-power-tracker")}class Pv{modal=null;currentConnection=null;streamMetricsSection=null;allStreamsMetricsSection=null;allStreamsConnection=null;streamCards=new Map;streamRows=new Map;isCompactView=!1;constructor(){this.initModal(),this.initInlineViewer(),this.initAllStreamsViewer()}initInlineViewer(){if(this.streamMetricsSection=document.getElementById("streamMetrics"),!this.streamMetricsSection){console.warn("Stream metrics section not found in DOM");return}const e=document.getElementById("closeStreamView");e&&e.addEventListener("click",()=>this.disconnectFromStream())}initAllStreamsViewer(){if(this.allStreamsMetricsSection=document.getElementById("allStreamsMetrics"),!this.allStreamsMetricsSection){console.warn("All streams metrics section not found in DOM");return}const e=document.getElementById("closeAllStreamsView");e&&e.addEventListener("click",()=>this.disconnectFromAllStreams());const i=document.getElementById("toggleViewBtn");i&&i.addEventListener("click",()=>this.toggleAllStreamsView())}toggleAllStreamsView(){this.isCompactView=!this.isCompactView;const e=document.getElementById("allStreamsGrid"),i=document.getElementById("allStreamsList"),r=document.getElementById("toggleViewBtn");this.isCompactView?(e&&(e.style.display="none"),i&&(i.style.display="flex"),r&&(r.textContent="🔲",r.title="Toggle grid view",r.classList.add("active"))):(e&&(e.style.display="grid"),i&&(i.style.display="none"),r&&(r.textContent="📋",r.title="Toggle compact view",r.classList.remove("active")))}initModal(){const e=document.createElement("div");e.id="streamViewerModal",e.className="stream-modal",e.innerHTML=`
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
    `,document.body.appendChild(e),this.modal=e,this.setupEventListeners()}setupEventListeners(){const e=document.getElementById("closeStreamModal"),i=document.getElementById("refreshStreamList"),r=document.getElementById("viewAllStreamsBtn");e&&e.addEventListener("click",()=>this.close()),i&&i.addEventListener("click",()=>this.refreshStreamList()),r&&r.addEventListener("click",()=>this.connectToAllStreams()),this.modal&&this.modal.addEventListener("click",s=>{s.target===this.modal&&this.close()})}async open(){this.modal&&(this.modal.style.display="flex"),await this.refreshStreamList()}close(){this.modal&&(this.modal.style.display="none")}async refreshStreamList(){const e=document.getElementById("streamsList");if(e){e.innerHTML='<p class="loading">Loading streams...</p>';try{const{streams:i}=await Ev();if(i.length===0){e.innerHTML='<p class="no-streams">No active streams found</p>';return}e.innerHTML="",i.forEach(r=>{const s=this.createStreamItem(r);e.appendChild(s)})}catch(i){console.error("Failed to load streams:",i);const r=i instanceof Error?i.message:"Unknown error";e.innerHTML=`<p class="error">Failed to load streams: ${r}</p>`}}}createStreamItem(e){const i=document.createElement("div");i.className="stream-item";const s=e.name.startsWith("workout-")?"🚴":"💬";return i.innerHTML=`
      <div class="stream-item-info">
        <div class="stream-item-name">${s} ${e.name}</div>
        <div class="stream-item-meta">
          ${e.length} message${e.length!==1?"s":""}
        </div>
      </div>
      <button class="connect-button" data-stream="${e.name}">
        👁️ View
      </button>
    `,i.querySelector(".connect-button")?.addEventListener("click",()=>{this.connectToStream(e.name)}),i}connectToStream(e){if(this.disconnectFromStream(),!this.streamMetricsSection){console.error("Stream metrics section not available");return}this.streamMetricsSection.style.display="flex";const i=document.getElementById("toggleStreamMetrics");i&&(i.checked=!0);const r=document.getElementById("streamTitle"),s=document.getElementById("streamStatus");r&&(r.textContent=e),s&&(s.textContent="Connecting...",s.className="status-badge connecting"),this.close(),this.currentConnection=Tv(e,c=>this.handleStreamMessage(c),()=>this.handleStreamConnected(),c=>this.handleStreamError(c))}connectToAllStreams(){if(this.disconnectFromStream(),this.disconnectFromAllStreams(),!this.allStreamsMetricsSection){console.error("All streams metrics section not available");return}this.allStreamsMetricsSection.style.display="flex",this.close();const e=document.getElementById("allStreamsGrid"),i=document.getElementById("allStreamsList");e&&(e.innerHTML=""),i&&(i.innerHTML=""),this.streamCards.clear(),this.streamRows.clear();const r=document.getElementById("allStreamsStatus");r&&(r.textContent="Connecting...",r.className="status-badge connecting"),this.allStreamsConnection=Lv(s=>this.handleAllStreamsMessage(s),()=>this.handleAllStreamsConnected(),s=>this.handleAllStreamsError(s))}handleAllStreamsConnected(){console.log("Connected to all streams");const e=document.getElementById("allStreamsStatus");e&&(e.textContent="🟢 Connected",e.className="status-badge connected")}handleAllStreamsError(e){console.error("All streams error:",e);const i=document.getElementById("allStreamsStatus");i&&(this.allStreamsConnection&&this.allStreamsConnection.active?(i.textContent="🔄 Reconnecting...",i.className="status-badge reconnecting"):(i.textContent="🔴 Error",i.className="status-badge error"))}disconnectFromAllStreams(){this.allStreamsConnection&&(this.allStreamsConnection.close(),this.allStreamsConnection=null),this.allStreamsMetricsSection&&(this.allStreamsMetricsSection.style.display="none");const e=document.getElementById("yourMetrics");e&&(e.style.display="flex")}handleAllStreamsMessage(e){try{const i=e.stream,r=typeof e.data=="string"?JSON.parse(e.data):e.data;this.updateStreamCard(i,r)}catch(i){console.error("Error parsing stream message:",i,e)}}updateStreamCard(e,i){const r=document.getElementById("allStreamsGrid"),s=document.getElementById("allStreamsList");let c={};try{i.message?c=JSON.parse(i.message):c=i}catch{}if(r){let d=this.streamCards.get(e);if(d||(d=document.createElement("div"),d.className="stream-card",d.innerHTML=`
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
        `,r.appendChild(d),this.streamCards.set(e,d)),c.power!==void 0&&c.power!==null){const u=d.querySelector(".stream-card-power");u&&(u.textContent=String(c.power))}if(c.cadence!==void 0&&c.cadence!==null){const u=d.querySelector(".card-cadence");u&&(u.textContent=String(c.cadence))}if(c.heartrate!==void 0&&c.heartrate!==null){const u=d.querySelector(".card-heartrate");u&&(u.textContent=String(c.heartrate))}}if(s){let d=this.streamRows.get(e);if(d||(d=document.createElement("div"),d.className="stream-row",d.innerHTML=`
          <span class="stream-row-name" title="${e}">${e}</span>
          <span class="stream-row-power">--</span>
        `,s.appendChild(d),this.streamRows.set(e,d)),c.power!==void 0&&c.power!==null){const u=d.querySelector(".stream-row-power");u&&(u.textContent=String(c.power))}}}disconnectFromStream(){if(this.disconnectFromAllStreams(),this.currentConnection&&(this.currentConnection.close(),this.currentConnection=null),this.streamMetricsSection){this.streamMetricsSection.style.display="none";const i=document.getElementById("toggleStreamMetrics");i&&(i.checked=!1)}const e=document.getElementById("yourMetrics");e&&(e.style.display="flex"),this.resetViewer()}handleStreamConnected(){const e=document.getElementById("streamStatus");e&&(e.textContent="🟢 Connected",e.className="status-badge connected")}handleStreamMessage(e){try{const i=e.data?.message,r=typeof i=="string"?JSON.parse(i):e.data;(r.dataType==="workout_metrics"||r.power!==void 0||r.cadence!==void 0||r.heartrate!==void 0)&&this.updateMetrics(r);const s=document.getElementById("streamLastUpdate");if(s){const c=new Date;s.textContent=`Last update: ${c.toLocaleTimeString()}`}}catch(i){console.error("Error parsing stream message:",i,e)}}updateMetrics(e){const i=document.getElementById("streamPower"),r=document.getElementById("streamCadence"),s=document.getElementById("streamHeartrate"),c=document.getElementById("streamSpeed"),d=document.getElementById("streamDistance"),u=document.getElementById("streamAltitude"),h=document.getElementById("streamElapsed");i&&e.power!==null&&e.power!==void 0&&(i.textContent=String(e.power)),r&&e.cadence!==null&&e.cadence!==void 0&&(r.textContent=String(e.cadence)),s&&e.heartrate!==null&&e.heartrate!==void 0&&(s.textContent=String(e.heartrate)),c&&e.speed!==null&&e.speed!==void 0&&(c.textContent=String(e.speed)),d&&e.distance!==null&&e.distance!==void 0&&(d.textContent=String(e.distance)),u&&e.altitude!==null&&e.altitude!==void 0&&(u.textContent=String(e.altitude)),h&&e.elapsed&&(h.textContent=e.elapsed)}handleStreamError(e){console.error("Stream error:",e);const i=document.getElementById("streamStatus");i&&(this.currentConnection&&this.currentConnection.active?(i.textContent="🔄 Reconnecting...",i.className="status-badge reconnecting"):(i.textContent="🔴 Error",i.className="status-badge error"))}resetViewer(){["streamPower","streamCadence","streamHeartrate","streamSpeed","streamDistance","streamAltitude","streamElapsed"].forEach(r=>{const s=document.getElementById(r);s&&(s.textContent="--")});const i=document.getElementById("streamLastUpdate");i&&(i.textContent="Waiting for data...")}}function Mv(){const n=new Pv,e=document.getElementById("viewStreamsButton");return e&&e.addEventListener("click",()=>n.open()),n}function Iv(n,e){const i=document.getElementById("startStreamButton"),r=document.getElementById("streamNameModal"),s=document.getElementById("closeStreamNameModal"),c=document.getElementById("cancelStreamName"),d=document.getElementById("confirmStreamName"),u=document.getElementById("streamNameInput"),h=document.getElementById("activeStreamToolbar"),p=document.getElementById("toolbarStreamName"),_=document.getElementById("streamPlayPauseBtn"),f=document.getElementById("streamStopBtn"),v=document.querySelector(".stream-indicator"),y=z=>{h&&(z.isStreaming?(h.style.display="flex",document.body.classList.add("has-stream-toolbar"),p&&(p.textContent=z.streamName),_&&(z.isPaused?(_.textContent="▶️",_.title="Resume Stream",v?.classList.add("paused")):(_.textContent="⏸️",_.title="Pause Stream",v?.classList.remove("paused")))):(h.style.display="none",document.body.classList.remove("has-stream-toolbar")))};if(!i){console.warn("Start stream button not found in DOM");return}const b=()=>{r&&(r.style.display="none"),u&&(u.value="")},S=async()=>{const z=u?.value.trim()||"";try{const $=await n.startStreaming(z||void 0);i.textContent="🔴 Stop Streaming",i.classList.add("streaming"),y(n.getStatus()),he(`Streaming to: ${$}`,"success"),b()}catch($){console.error("Failed to start streaming:",$);const A=$ instanceof Error?$.message:"Unknown error";he("Failed to start streaming: "+A,"error")}},E=async()=>{try{await n.stopStreaming(),i.textContent="📡 Start Streaming",i.classList.remove("streaming"),y(n.getStatus()),he("Streaming stopped","info")}catch(z){console.error(z),he("Error stopping stream","error")}};_&&_.addEventListener("click",()=>{n.getStatus().isPaused?(n.resumeStreaming(),he("Stream Resumed","success")):(n.pauseStreaming(),he("Stream Paused","info")),y(n.getStatus())}),f&&f.addEventListener("click",async()=>{confirm("Stop streaming?")&&await E()}),s&&s.addEventListener("click",b),c&&c.addEventListener("click",b),d&&d.addEventListener("click",S),u&&u.addEventListener("keypress",z=>{z.key==="Enter"&&S()}),r&&r.addEventListener("click",z=>{z.target===r&&b()}),i.addEventListener("click",async()=>{if(n.isStreaming)await E();else if(r)r.style.display="flex",u?.focus();else try{const z=await n.startStreaming();i.textContent="🔴 Stop Streaming",i.classList.add("streaming"),y(n.getStatus()),he(`Streaming to: ${z}`,"success")}catch(z){console.error("Failed to start streaming:",z);const $=z instanceof Error?z.message:"Unknown error";he("Failed to start streaming: "+$,"error")}});const P=document.getElementById("pauseButton"),T=document.getElementById("stopButton"),D=()=>{e.running===!1&&n.isStreaming&&setTimeout(()=>{!e.running&&n.isStreaming&&(n.stopStreaming(),i.textContent="📡 Start Streaming",i.classList.remove("streaming"),y(n.getStatus()))},100)};P&&P.addEventListener("click",D),T&&T.addEventListener("click",D)}const rs="bpt-dark-mode";function Jc(){try{const n=localStorage.getItem(rs);return n==="light"||n==="dark"||n==="system"?n:null}catch{return null}}function Av(n){try{localStorage.setItem(rs,n)}catch{}}function ss(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function Sn(n){document.documentElement.setAttribute("data-theme",n)}function Xc(n){return n==="system"?ss()?"dark":"light":n}function Dv(){const n=Jc();if(n){const i=Xc(n);return Sn(i),i==="dark"}const e=ss();return e&&Sn("dark"),e}function zv(n){const e=Dv();n.checked=e,n.addEventListener("change",()=>{const r=n.checked?"dark":"light";Sn(r),Av(r),V(`Dark mode ${n.checked?"enabled":"disabled"}`)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",r=>{const s=Jc();if(!s||s==="system"){const c=r.matches?"dark":"light";Sn(c),n.checked=r.matches,V(`Dark mode ${r.matches?"enabled":"disabled"}`)}}),window.addEventListener("storage",r=>{if(r.key===rs){const s=r.newValue;if(s){const c=Xc(s);Sn(c),n.checked=c==="dark"}else{const c=ss();Sn(c?"dark":"light"),n.checked=c}}})}function Bv(n){const e=Math.floor(n/1e3),i=Math.floor(e/60),r=Math.floor(i/60);return r>0?`${r}h ${i%60}m`:i>0?`${i}m ${e%60}s`:`${e}s`}function $v(n){return new Date(n).toLocaleString()}function Ov(n){const e=document.createElement("dialog");e.id="workout-recovery-modal",e.className="modal",e.setAttribute("aria-labelledby","recovery-modal-title");const i=n.power.length+n.heartrate.length+n.cadence.length,r=n.lastUpdated-n.startTime;return e.innerHTML=`
        <div class="modal-content">
            <h2 id="recovery-modal-title">🔄 Recover Workout?</h2>
            <p>An interrupted workout was found from your last session.</p>
            
            <div class="recovery-summary">
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Started</span>
                    <span class="recovery-stat-value">${$v(n.startTime)}</span>
                </div>
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Duration</span>
                    <span class="recovery-stat-value">${Bv(r)}</span>
                </div>
                <div class="recovery-stat">
                    <span class="recovery-stat-label">Data Points</span>
                    <span class="recovery-stat-value">${i.toLocaleString()}</span>
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
    `,e}function Nv(){if(document.getElementById("recovery-modal-styles"))return;const n=document.createElement("style");n.id="recovery-modal-styles",n.textContent=`
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
    `,document.head.appendChild(n)}async function Fv(n){Nv();const e=Ov(n);return document.body.appendChild(e),new Promise(i=>{const r=e.querySelector("#recovery-restore-btn"),s=e.querySelector("#recovery-discard-btn"),c=()=>{e.close(),e.remove()};r.addEventListener("click",()=>{c(),i("restore")}),s.addEventListener("click",()=>{c(),i("discard")}),e.addEventListener("cancel",d=>{d.preventDefault()}),e.showModal()})}async function Rv(n,e){try{if(!await gc())return!1;const i=await Io();return i?await Fv(i)==="restore"?(n.restore({heartrate:i.heartrate,power:i.power,cadence:i.cadence,speed:i.speed,distance:i.distance,altitude:i.altitude,laps:i.laps,gps:i.gps||[]},i.startTime),e.startTime=i.startTime,e.running=!1,console.log(`Restored workout with ${i.power.length} power readings`),!0):(await Mo(),console.log("User discarded recovered workout"),!1):!1}catch(i){return console.error("Error during workout recovery:",i),!1}}function Hv(){const n=document.getElementById("aboutButton"),e=document.getElementById("aboutModal"),i=document.getElementById("closeAboutModal");if(!n||!e)return;const r=()=>{e.style.display="flex";const c=document.querySelector("header details");c&&c.removeAttribute("open")},s=()=>{e.style.display="none"};n.addEventListener("click",r),i?.addEventListener("click",s),window.addEventListener("click",c=>{c.target===e&&s()})}const Zv=()=>{let n=null;const e=async()=>{try{"wakeLock"in navigator&&(n=await navigator.wakeLock.request("screen"),console.log("Screen wake lock activated"),n.addEventListener("release",()=>{console.log("Screen wake lock released")}))}catch(i){console.error("Wake lock request failed:",i)}};document.visibilityState==="visible"&&e(),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})};function qv(n={}){const{immediate:e=!1,onNeedRefresh:i,onOfflineReady:r,onRegistered:s,onRegisteredSW:c,onRegisterError:d}=n;let u,h;const p=async(f=!0)=>{await h};async function _(){if("serviceWorker"in navigator){if(u=await Et(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/sw.js",{scope:"/",type:"classic"})).catch(f=>{d?.(f)}),!u)return;u.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),u.addEventListener("installed",f=>{f.isUpdate||r?.()}),u.register({immediate:e}).then(f=>{c?c("/sw.js",f):s?.(f)}).catch(f=>{d?.(f)})}}return h=_(),p}const Wv=()=>{if(ke.isNativePlatform()){console.log("Service Worker disabled on native platform"),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(e=>{for(const i of e)i.unregister()});return}const n=qv({onNeedRefresh(){Vv(n)},onOfflineReady(){console.log("App ready to work offline")},onRegistered(e){console.log("Service Worker registered successfully"),e&&setInterval(()=>{e.update()},3600*1e3)},onRegisterError(e){console.log("Service Worker registration failed:",e)}})},Vv=n=>{const e=document.getElementById("updateNotification");if(!e)return;e.style.display="block",document.getElementById("updateButton")?.addEventListener("click",()=>{n(!0)},{once:!0}),document.getElementById("dismissUpdate")?.addEventListener("click",()=>{e.style.display="none"},{once:!0})};function Uv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var di={exports:{}};var jv=di.exports,Ua;function Gv(){return Ua||(Ua=1,(function(n,e){(function(i,r){r(e)})(jv,(function(i){var r="1.9.4";function s(t){var o,a,l,m;for(a=1,l=arguments.length;a<l;a++){m=arguments[a];for(o in m)t[o]=m[o]}return t}var c=Object.create||(function(){function t(){}return function(o){return t.prototype=o,new t}})();function d(t,o){var a=Array.prototype.slice;if(t.bind)return t.bind.apply(t,a.call(arguments,1));var l=a.call(arguments,2);return function(){return t.apply(o,l.length?l.concat(a.call(arguments)):arguments)}}var u=0;function h(t){return"_leaflet_id"in t||(t._leaflet_id=++u),t._leaflet_id}function p(t,o,a){var l,m,g,w;return w=function(){l=!1,m&&(g.apply(a,m),m=!1)},g=function(){l?m=arguments:(t.apply(a,arguments),setTimeout(w,o),l=!0)},g}function _(t,o,a){var l=o[1],m=o[0],g=l-m;return t===l&&a?t:((t-m)%g+g)%g+m}function f(){return!1}function v(t,o){if(o===!1)return t;var a=Math.pow(10,o===void 0?6:o);return Math.round(t*a)/a}function y(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function b(t){return y(t).split(/\s+/)}function S(t,o){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?c(t.options):{});for(var a in o)t.options[a]=o[a];return t.options}function E(t,o,a){var l=[];for(var m in t)l.push(encodeURIComponent(a?m.toUpperCase():m)+"="+encodeURIComponent(t[m]));return(!o||o.indexOf("?")===-1?"?":"&")+l.join("&")}var P=/\{ *([\w_ -]+) *\}/g;function T(t,o){return t.replace(P,function(a,l){var m=o[l];if(m===void 0)throw new Error("No value provided for variable "+a);return typeof m=="function"&&(m=m(o)),m})}var D=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function z(t,o){for(var a=0;a<t.length;a++)if(t[a]===o)return a;return-1}var $="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function A(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var O=0;function F(t){var o=+new Date,a=Math.max(0,16-(o-O));return O=o+a,window.setTimeout(t,a)}var q=window.requestAnimationFrame||A("RequestAnimationFrame")||F,te=window.cancelAnimationFrame||A("CancelAnimationFrame")||A("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function Y(t,o,a){if(a&&q===F)t.call(o);else return q.call(window,d(t,o))}function W(t){t&&te.call(window,t)}var re={__proto__:null,extend:s,create:c,bind:d,get lastId(){return u},stamp:h,throttle:p,wrapNum:_,falseFn:f,formatNum:v,trim:y,splitWords:b,setOptions:S,getParamString:E,template:T,isArray:D,indexOf:z,emptyImageUrl:$,requestFn:q,cancelFn:te,requestAnimFrame:Y,cancelAnimFrame:W};function ae(){}ae.extend=function(t){var o=function(){S(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},a=o.__super__=this.prototype,l=c(a);l.constructor=o,o.prototype=l;for(var m in this)Object.prototype.hasOwnProperty.call(this,m)&&m!=="prototype"&&m!=="__super__"&&(o[m]=this[m]);return t.statics&&s(o,t.statics),t.includes&&(Ke(t.includes),s.apply(null,[l].concat(t.includes))),s(l,t),delete l.statics,delete l.includes,l.options&&(l.options=a.options?c(a.options):{},s(l.options,t.options)),l._initHooks=[],l.callInitHooks=function(){if(!this._initHooksCalled){a.callInitHooks&&a.callInitHooks.call(this),this._initHooksCalled=!0;for(var g=0,w=l._initHooks.length;g<w;g++)l._initHooks[g].call(this)}},o},ae.include=function(t){var o=this.prototype.options;return s(this.prototype,t),t.options&&(this.prototype.options=o,this.mergeOptions(t.options)),this},ae.mergeOptions=function(t){return s(this.prototype.options,t),this},ae.addInitHook=function(t){var o=Array.prototype.slice.call(arguments,1),a=typeof t=="function"?t:function(){this[t].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(a),this};function Ke(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=D(t)?t:[t];for(var o=0;o<t.length;o++)t[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var we={on:function(t,o,a){if(typeof t=="object")for(var l in t)this._on(l,t[l],o);else{t=b(t);for(var m=0,g=t.length;m<g;m++)this._on(t[m],o,a)}return this},off:function(t,o,a){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var l in t)this._off(l,t[l],o);else{t=b(t);for(var m=arguments.length===1,g=0,w=t.length;g<w;g++)m?this._off(t[g]):this._off(t[g],o,a)}return this},_on:function(t,o,a,l){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(t,o,a)===!1){a===this&&(a=void 0);var m={fn:o,ctx:a};l&&(m.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(m)}},_off:function(t,o,a){var l,m,g;if(this._events&&(l=this._events[t],!!l)){if(arguments.length===1){if(this._firingCount)for(m=0,g=l.length;m<g;m++)l[m].fn=f;delete this._events[t];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var w=this._listens(t,o,a);if(w!==!1){var x=l[w];this._firingCount&&(x.fn=f,this._events[t]=l=l.slice()),l.splice(w,1)}}},fire:function(t,o,a){if(!this.listens(t,a))return this;var l=s({},o,{type:t,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var m=this._events[t];if(m){this._firingCount=this._firingCount+1||1;for(var g=0,w=m.length;g<w;g++){var x=m[g],k=x.fn;x.once&&this.off(t,k,x.ctx),k.call(x.ctx||this,l)}this._firingCount--}}return a&&this._propagateEvent(l),this},listens:function(t,o,a,l){typeof t!="string"&&console.warn('"string" type argument expected');var m=o;typeof o!="function"&&(l=!!o,m=void 0,a=void 0);var g=this._events&&this._events[t];if(g&&g.length&&this._listens(t,m,a)!==!1)return!0;if(l){for(var w in this._eventParents)if(this._eventParents[w].listens(t,o,a,l))return!0}return!1},_listens:function(t,o,a){if(!this._events)return!1;var l=this._events[t]||[];if(!o)return!!l.length;a===this&&(a=void 0);for(var m=0,g=l.length;m<g;m++)if(l[m].fn===o&&l[m].ctx===a)return m;return!1},once:function(t,o,a){if(typeof t=="object")for(var l in t)this._on(l,t[l],o,!0);else{t=b(t);for(var m=0,g=t.length;m<g;m++)this._on(t[m],o,a,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[h(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[h(t)],this},_propagateEvent:function(t){for(var o in this._eventParents)this._eventParents[o].fire(t.type,s({layer:t.target,propagatedFrom:t.target},t),!0)}};we.addEventListener=we.on,we.removeEventListener=we.clearAllEventListeners=we.off,we.addOneTimeEventListener=we.once,we.fireEvent=we.fire,we.hasEventListeners=we.listens;var De=ae.extend(we);function R(t,o,a){this.x=a?Math.round(t):t,this.y=a?Math.round(o):o}var Pt=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};R.prototype={clone:function(){return new R(this.x,this.y)},add:function(t){return this.clone()._add(H(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(H(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new R(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new R(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Pt(this.x),this.y=Pt(this.y),this},distanceTo:function(t){t=H(t);var o=t.x-this.x,a=t.y-this.y;return Math.sqrt(o*o+a*a)},equals:function(t){return t=H(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=H(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+v(this.x)+", "+v(this.y)+")"}};function H(t,o,a){return t instanceof R?t:D(t)?new R(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new R(t.x,t.y):new R(t,o,a)}function ne(t,o){if(t)for(var a=o?[t,o]:t,l=0,m=a.length;l<m;l++)this.extend(a[l])}ne.prototype={extend:function(t){var o,a;if(!t)return this;if(t instanceof R||typeof t[0]=="number"||"x"in t)o=a=H(t);else if(t=be(t),o=t.min,a=t.max,!o||!a)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=a.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(a.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(a.y,this.max.y)),this},getCenter:function(t){return H((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return H(this.min.x,this.max.y)},getTopRight:function(){return H(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var o,a;return typeof t[0]=="number"||t instanceof R?t=H(t):t=be(t),t instanceof ne?(o=t.min,a=t.max):o=a=t,o.x>=this.min.x&&a.x<=this.max.x&&o.y>=this.min.y&&a.y<=this.max.y},intersects:function(t){t=be(t);var o=this.min,a=this.max,l=t.min,m=t.max,g=m.x>=o.x&&l.x<=a.x,w=m.y>=o.y&&l.y<=a.y;return g&&w},overlaps:function(t){t=be(t);var o=this.min,a=this.max,l=t.min,m=t.max,g=m.x>o.x&&l.x<a.x,w=m.y>o.y&&l.y<a.y;return g&&w},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var o=this.min,a=this.max,l=Math.abs(o.x-a.x)*t,m=Math.abs(o.y-a.y)*t;return be(H(o.x-l,o.y-m),H(a.x+l,a.y+m))},equals:function(t){return t?(t=be(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function be(t,o){return!t||t instanceof ne?t:new ne(t,o)}function xe(t,o){if(t)for(var a=o?[t,o]:t,l=0,m=a.length;l<m;l++)this.extend(a[l])}xe.prototype={extend:function(t){var o=this._southWest,a=this._northEast,l,m;if(t instanceof Q)l=t,m=t;else if(t instanceof xe){if(l=t._southWest,m=t._northEast,!l||!m)return this}else return t?this.extend(G(t)||se(t)):this;return!o&&!a?(this._southWest=new Q(l.lat,l.lng),this._northEast=new Q(m.lat,m.lng)):(o.lat=Math.min(l.lat,o.lat),o.lng=Math.min(l.lng,o.lng),a.lat=Math.max(m.lat,a.lat),a.lng=Math.max(m.lng,a.lng)),this},pad:function(t){var o=this._southWest,a=this._northEast,l=Math.abs(o.lat-a.lat)*t,m=Math.abs(o.lng-a.lng)*t;return new xe(new Q(o.lat-l,o.lng-m),new Q(a.lat+l,a.lng+m))},getCenter:function(){return new Q((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Q(this.getNorth(),this.getWest())},getSouthEast:function(){return new Q(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof Q||"lat"in t?t=G(t):t=se(t);var o=this._southWest,a=this._northEast,l,m;return t instanceof xe?(l=t.getSouthWest(),m=t.getNorthEast()):l=m=t,l.lat>=o.lat&&m.lat<=a.lat&&l.lng>=o.lng&&m.lng<=a.lng},intersects:function(t){t=se(t);var o=this._southWest,a=this._northEast,l=t.getSouthWest(),m=t.getNorthEast(),g=m.lat>=o.lat&&l.lat<=a.lat,w=m.lng>=o.lng&&l.lng<=a.lng;return g&&w},overlaps:function(t){t=se(t);var o=this._southWest,a=this._northEast,l=t.getSouthWest(),m=t.getNorthEast(),g=m.lat>o.lat&&l.lat<a.lat,w=m.lng>o.lng&&l.lng<a.lng;return g&&w},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,o){return t?(t=se(t),this._southWest.equals(t.getSouthWest(),o)&&this._northEast.equals(t.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function se(t,o){return t instanceof xe?t:new xe(t,o)}function Q(t,o,a){if(isNaN(t)||isNaN(o))throw new Error("Invalid LatLng object: ("+t+", "+o+")");this.lat=+t,this.lng=+o,a!==void 0&&(this.alt=+a)}Q.prototype={equals:function(t,o){if(!t)return!1;t=G(t);var a=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return a<=(o===void 0?1e-9:o)},toString:function(t){return"LatLng("+v(this.lat,t)+", "+v(this.lng,t)+")"},distanceTo:function(t){return Ne.distance(this,G(t))},wrap:function(){return Ne.wrapLatLng(this)},toBounds:function(t){var o=180*t/40075017,a=o/Math.cos(Math.PI/180*this.lat);return se([this.lat-o,this.lng-a],[this.lat+o,this.lng+a])},clone:function(){return new Q(this.lat,this.lng,this.alt)}};function G(t,o,a){return t instanceof Q?t:D(t)&&typeof t[0]!="object"?t.length===3?new Q(t[0],t[1],t[2]):t.length===2?new Q(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new Q(t.lat,"lng"in t?t.lng:t.lon,t.alt):o===void 0?null:new Q(t,o,a)}var ze={latLngToPoint:function(t,o){var a=this.projection.project(t),l=this.scale(o);return this.transformation._transform(a,l)},pointToLatLng:function(t,o){var a=this.scale(o),l=this.transformation.untransform(t,a);return this.projection.unproject(l)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var o=this.projection.bounds,a=this.scale(t),l=this.transformation.transform(o.min,a),m=this.transformation.transform(o.max,a);return new ne(l,m)},infinite:!1,wrapLatLng:function(t){var o=this.wrapLng?_(t.lng,this.wrapLng,!0):t.lng,a=this.wrapLat?_(t.lat,this.wrapLat,!0):t.lat,l=t.alt;return new Q(a,o,l)},wrapLatLngBounds:function(t){var o=t.getCenter(),a=this.wrapLatLng(o),l=o.lat-a.lat,m=o.lng-a.lng;if(l===0&&m===0)return t;var g=t.getSouthWest(),w=t.getNorthEast(),x=new Q(g.lat-l,g.lng-m),k=new Q(w.lat-l,w.lng-m);return new xe(x,k)}},Ne=s({},ze,{wrapLng:[-180,180],R:6371e3,distance:function(t,o){var a=Math.PI/180,l=t.lat*a,m=o.lat*a,g=Math.sin((o.lat-t.lat)*a/2),w=Math.sin((o.lng-t.lng)*a/2),x=g*g+Math.cos(l)*Math.cos(m)*w*w,k=2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));return this.R*k}}),tn=6378137,Mt={R:tn,MAX_LATITUDE:85.0511287798,project:function(t){var o=Math.PI/180,a=this.MAX_LATITUDE,l=Math.max(Math.min(a,t.lat),-a),m=Math.sin(l*o);return new R(this.R*t.lng*o,this.R*Math.log((1+m)/(1-m))/2)},unproject:function(t){var o=180/Math.PI;return new Q((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*o,t.x*o/this.R)},bounds:(function(){var t=tn*Math.PI;return new ne([-t,-t],[t,t])})()};function It(t,o,a,l){if(D(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=o,this._c=a,this._d=l}It.prototype={transform:function(t,o){return this._transform(t.clone(),o)},_transform:function(t,o){return o=o||1,t.x=o*(this._a*t.x+this._b),t.y=o*(this._c*t.y+this._d),t},untransform:function(t,o){return o=o||1,new R((t.x/o-this._b)/this._a,(t.y/o-this._d)/this._c)}};function at(t,o,a,l){return new It(t,o,a,l)}var Fe=s({},Ne,{code:"EPSG:3857",projection:Mt,transformation:(function(){var t=.5/(Math.PI*Mt.R);return at(t,.5,-t,.5)})()}),nn=s({},Fe,{code:"EPSG:900913"});function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Rn(t,o){var a="",l,m,g,w,x,k;for(l=0,g=t.length;l<g;l++){for(x=t[l],m=0,w=x.length;m<w;m++)k=x[m],a+=(m?"L":"M")+k.x+" "+k.y;a+=o?N.svg?"z":"x":""}return a||"M0 0"}var Je=document.documentElement.style,We="ActiveXObject"in window,Hn=We&&!document.addEventListener,on="msLaunchUri"in navigator&&!("documentMode"in document),Dt=Xe("webkit"),Zn=Xe("android"),rn=Xe("android 2")||Xe("android 3"),Pi=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),No=Zn&&Xe("Google")&&Pi<537&&!("AudioNode"in window),qn=!!window.opera,Mi=!on&&Xe("chrome"),Wn=Xe("gecko")&&!Dt&&!qn&&!We,Ii=!Mi&&Xe("safari"),Ai=Xe("phantom"),Di="OTransition"in Je,Fo=navigator.platform.indexOf("Win")===0,sn=We&&"transition"in Je,zt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!rn,Vn="MozPerspective"in Je,Ro=!window.L_DISABLE_3D&&(sn||zt||Vn)&&!Di&&!Ai,Bt=typeof orientation<"u"||Xe("mobile"),I=Bt&&Dt,ie=Bt&&zt,_t=!window.PointerEvent&&window.MSPointerEvent,ct=!!(window.PointerEvent||_t),zi="ontouchstart"in window||!!window.TouchEvent,as=!window.L_NO_TOUCH&&(zi||ct),Ho=Bt&&qn,tl=Bt&&Wn,nl=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,il=(function(){var t=!1;try{var o=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",f,o),window.removeEventListener("testPassiveEventSupport",f,o)}catch{}return t})(),ol=(function(){return!!document.createElement("canvas").getContext})(),Zo=!!(document.createElementNS&&At("svg").createSVGRect),rl=!!Zo&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),sl=!Zo&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var o=t.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}})(),al=navigator.platform.indexOf("Mac")===0,cl=navigator.platform.indexOf("Linux")===0;function Xe(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var N={ie:We,ielt9:Hn,edge:on,webkit:Dt,android:Zn,android23:rn,androidStock:No,opera:qn,chrome:Mi,gecko:Wn,safari:Ii,phantom:Ai,opera12:Di,win:Fo,ie3d:sn,webkit3d:zt,gecko3d:Vn,any3d:Ro,mobile:Bt,mobileWebkit:I,mobileWebkit3d:ie,msPointer:_t,pointer:ct,touch:as,touchNative:zi,mobileOpera:Ho,mobileGecko:tl,retina:nl,passiveEvents:il,canvas:ol,svg:Zo,vml:sl,inlineSvg:rl,mac:al,linux:cl},cs=N.msPointer?"MSPointerDown":"pointerdown",ls=N.msPointer?"MSPointerMove":"pointermove",ds=N.msPointer?"MSPointerUp":"pointerup",us=N.msPointer?"MSPointerCancel":"pointercancel",qo={touchstart:cs,touchmove:ls,touchend:ds,touchcancel:us},hs={touchstart:pl,touchmove:Bi,touchend:Bi,touchcancel:Bi},an={},ms=!1;function ll(t,o,a){return o==="touchstart"&&ml(),hs[o]?(a=hs[o].bind(this,a),t.addEventListener(qo[o],a,!1),a):(console.warn("wrong event specified:",o),f)}function dl(t,o,a){if(!qo[o]){console.warn("wrong event specified:",o);return}t.removeEventListener(qo[o],a,!1)}function ul(t){an[t.pointerId]=t}function hl(t){an[t.pointerId]&&(an[t.pointerId]=t)}function ps(t){delete an[t.pointerId]}function ml(){ms||(document.addEventListener(cs,ul,!0),document.addEventListener(ls,hl,!0),document.addEventListener(ds,ps,!0),document.addEventListener(us,ps,!0),ms=!0)}function Bi(t,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var a in an)o.touches.push(an[a]);o.changedTouches=[o],t(o)}}function pl(t,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&Se(o),Bi(t,o)}function fl(t){var o={},a,l;for(l in t)a=t[l],o[l]=a&&a.bind?a.bind(t):a;return t=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var gl=200;function vl(t,o){t.addEventListener("dblclick",o);var a=0,l;function m(g){if(g.detail!==1){l=g.detail;return}if(!(g.pointerType==="mouse"||g.sourceCapabilities&&!g.sourceCapabilities.firesTouchEvents)){var w=_s(g);if(!(w.some(function(k){return k instanceof HTMLLabelElement&&k.attributes.for})&&!w.some(function(k){return k instanceof HTMLInputElement||k instanceof HTMLSelectElement}))){var x=Date.now();x-a<=gl?(l++,l===2&&o(fl(g))):l=1,a=x}}}return t.addEventListener("click",m),{dblclick:o,simDblclick:m}}function yl(t,o){t.removeEventListener("dblclick",o.dblclick),t.removeEventListener("click",o.simDblclick)}var Wo=Ni(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Un=Ni(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),fs=Un==="webkitTransition"||Un==="OTransition"?Un+"End":"transitionend";function gs(t){return typeof t=="string"?document.getElementById(t):t}function jn(t,o){var a=t.style[o]||t.currentStyle&&t.currentStyle[o];if((!a||a==="auto")&&document.defaultView){var l=document.defaultView.getComputedStyle(t,null);a=l?l[o]:null}return a==="auto"?null:a}function ee(t,o,a){var l=document.createElement(t);return l.className=o||"",a&&a.appendChild(l),l}function ce(t){var o=t.parentNode;o&&o.removeChild(t)}function $i(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function cn(t){var o=t.parentNode;o&&o.lastChild!==t&&o.appendChild(t)}function ln(t){var o=t.parentNode;o&&o.firstChild!==t&&o.insertBefore(t,o.firstChild)}function Vo(t,o){if(t.classList!==void 0)return t.classList.contains(o);var a=Oi(t);return a.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(a)}function j(t,o){if(t.classList!==void 0)for(var a=b(o),l=0,m=a.length;l<m;l++)t.classList.add(a[l]);else if(!Vo(t,o)){var g=Oi(t);Uo(t,(g?g+" ":"")+o)}}function ue(t,o){t.classList!==void 0?t.classList.remove(o):Uo(t,y((" "+Oi(t)+" ").replace(" "+o+" "," ")))}function Uo(t,o){t.className.baseVal===void 0?t.className=o:t.className.baseVal=o}function Oi(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function Re(t,o){"opacity"in t.style?t.style.opacity=o:"filter"in t.style&&_l(t,o)}function _l(t,o){var a=!1,l="DXImageTransform.Microsoft.Alpha";try{a=t.filters.item(l)}catch{if(o===1)return}o=Math.round(o*100),a?(a.Enabled=o!==100,a.Opacity=o):t.style.filter+=" progid:"+l+"(opacity="+o+")"}function Ni(t){for(var o=document.documentElement.style,a=0;a<t.length;a++)if(t[a]in o)return t[a];return!1}function $t(t,o,a){var l=o||new R(0,0);t.style[Wo]=(N.ie3d?"translate("+l.x+"px,"+l.y+"px)":"translate3d("+l.x+"px,"+l.y+"px,0)")+(a?" scale("+a+")":"")}function me(t,o){t._leaflet_pos=o,N.any3d?$t(t,o):(t.style.left=o.x+"px",t.style.top=o.y+"px")}function Ot(t){return t._leaflet_pos||new R(0,0)}var Gn,Yn,jo;if("onselectstart"in document)Gn=function(){U(window,"selectstart",Se)},Yn=function(){oe(window,"selectstart",Se)};else{var Kn=Ni(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Gn=function(){if(Kn){var t=document.documentElement.style;jo=t[Kn],t[Kn]="none"}},Yn=function(){Kn&&(document.documentElement.style[Kn]=jo,jo=void 0)}}function Go(){U(window,"dragstart",Se)}function Yo(){oe(window,"dragstart",Se)}var Fi,Ko;function Jo(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Ri(),Fi=t,Ko=t.style.outlineStyle,t.style.outlineStyle="none",U(window,"keydown",Ri))}function Ri(){Fi&&(Fi.style.outlineStyle=Ko,Fi=void 0,Ko=void 0,oe(window,"keydown",Ri))}function vs(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Xo(t){var o=t.getBoundingClientRect();return{x:o.width/t.offsetWidth||1,y:o.height/t.offsetHeight||1,boundingClientRect:o}}var wl={__proto__:null,TRANSFORM:Wo,TRANSITION:Un,TRANSITION_END:fs,get:gs,getStyle:jn,create:ee,remove:ce,empty:$i,toFront:cn,toBack:ln,hasClass:Vo,addClass:j,removeClass:ue,setClass:Uo,getClass:Oi,setOpacity:Re,testProp:Ni,setTransform:$t,setPosition:me,getPosition:Ot,get disableTextSelection(){return Gn},get enableTextSelection(){return Yn},disableImageDrag:Go,enableImageDrag:Yo,preventOutline:Jo,restoreOutline:Ri,getSizedParentNode:vs,getScale:Xo};function U(t,o,a,l){if(o&&typeof o=="object")for(var m in o)er(t,m,o[m],a);else{o=b(o);for(var g=0,w=o.length;g<w;g++)er(t,o[g],a,l)}return this}var Qe="_leaflet_events";function oe(t,o,a,l){if(arguments.length===1)ys(t),delete t[Qe];else if(o&&typeof o=="object")for(var m in o)tr(t,m,o[m],a);else if(o=b(o),arguments.length===2)ys(t,function(x){return z(o,x)!==-1});else for(var g=0,w=o.length;g<w;g++)tr(t,o[g],a,l);return this}function ys(t,o){for(var a in t[Qe]){var l=a.split(/\d/)[0];(!o||o(l))&&tr(t,l,null,null,a)}}var Qo={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function er(t,o,a,l){var m=o+h(a)+(l?"_"+h(l):"");if(t[Qe]&&t[Qe][m])return this;var g=function(x){return a.call(l||t,x||window.event)},w=g;!N.touchNative&&N.pointer&&o.indexOf("touch")===0?g=ll(t,o,g):N.touch&&o==="dblclick"?g=vl(t,g):"addEventListener"in t?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?t.addEventListener(Qo[o]||o,g,N.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(g=function(x){x=x||window.event,ir(t,x)&&w(x)},t.addEventListener(Qo[o],g,!1)):t.addEventListener(o,w,!1):t.attachEvent("on"+o,g),t[Qe]=t[Qe]||{},t[Qe][m]=g}function tr(t,o,a,l,m){m=m||o+h(a)+(l?"_"+h(l):"");var g=t[Qe]&&t[Qe][m];if(!g)return this;!N.touchNative&&N.pointer&&o.indexOf("touch")===0?dl(t,o,g):N.touch&&o==="dblclick"?yl(t,g):"removeEventListener"in t?t.removeEventListener(Qo[o]||o,g,!1):t.detachEvent("on"+o,g),t[Qe][m]=null}function Nt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function nr(t){return er(t,"wheel",Nt),this}function Jn(t){return U(t,"mousedown touchstart dblclick contextmenu",Nt),t._leaflet_disable_click=!0,this}function Se(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Ft(t){return Se(t),Nt(t),this}function _s(t){if(t.composedPath)return t.composedPath();for(var o=[],a=t.target;a;)o.push(a),a=a.parentNode;return o}function ws(t,o){if(!o)return new R(t.clientX,t.clientY);var a=Xo(o),l=a.boundingClientRect;return new R((t.clientX-l.left)/a.x-o.clientLeft,(t.clientY-l.top)/a.y-o.clientTop)}var bl=N.linux&&N.chrome?window.devicePixelRatio:N.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function bs(t){return N.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/bl:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function ir(t,o){var a=o.relatedTarget;if(!a)return!0;try{for(;a&&a!==t;)a=a.parentNode}catch{return!1}return a!==t}var xl={__proto__:null,on:U,off:oe,stopPropagation:Nt,disableScrollPropagation:nr,disableClickPropagation:Jn,preventDefault:Se,stop:Ft,getPropagationPath:_s,getMousePosition:ws,getWheelDelta:bs,isExternalTarget:ir,addListener:U,removeListener:oe},xs=De.extend({run:function(t,o,a,l){this.stop(),this._el=t,this._inProgress=!0,this._duration=a||.25,this._easeOutPower=1/Math.max(l||.5,.2),this._startPos=Ot(t),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Y(this._animate,this),this._step()},_step:function(t){var o=+new Date-this._startTime,a=this._duration*1e3;o<a?this._runFrame(this._easeOut(o/a),t):(this._runFrame(1),this._complete())},_runFrame:function(t,o){var a=this._startPos.add(this._offset.multiplyBy(t));o&&a._round(),me(this._el,a),this.fire("step")},_complete:function(){W(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),X=De.extend({options:{crs:Fe,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,o){o=S(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=d(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(G(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Un&&N.any3d&&!N.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),U(this._proxy,fs,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,o,a){if(o=o===void 0?this._zoom:this._limitZoom(o),t=this._limitCenter(G(t),o,this.options.maxBounds),a=a||{},this._stop(),this._loaded&&!a.reset&&a!==!0){a.animate!==void 0&&(a.zoom=s({animate:a.animate},a.zoom),a.pan=s({animate:a.animate,duration:a.duration},a.pan));var l=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,o,a.zoom):this._tryAnimatedPan(t,a.pan);if(l)return clearTimeout(this._sizeTimer),this}return this._resetView(t,o,a.pan&&a.pan.noMoveStart),this},setZoom:function(t,o){return this._loaded?this.setView(this.getCenter(),t,{zoom:o}):(this._zoom=t,this)},zoomIn:function(t,o){return t=t||(N.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,o)},zoomOut:function(t,o){return t=t||(N.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,o)},setZoomAround:function(t,o,a){var l=this.getZoomScale(o),m=this.getSize().divideBy(2),g=t instanceof R?t:this.latLngToContainerPoint(t),w=g.subtract(m).multiplyBy(1-1/l),x=this.containerPointToLatLng(m.add(w));return this.setView(x,o,{zoom:a})},_getBoundsCenterZoom:function(t,o){o=o||{},t=t.getBounds?t.getBounds():se(t);var a=H(o.paddingTopLeft||o.padding||[0,0]),l=H(o.paddingBottomRight||o.padding||[0,0]),m=this.getBoundsZoom(t,!1,a.add(l));if(m=typeof o.maxZoom=="number"?Math.min(o.maxZoom,m):m,m===1/0)return{center:t.getCenter(),zoom:m};var g=l.subtract(a).divideBy(2),w=this.project(t.getSouthWest(),m),x=this.project(t.getNorthEast(),m),k=this.unproject(w.add(x).divideBy(2).add(g),m);return{center:k,zoom:m}},fitBounds:function(t,o){if(t=se(t),!t.isValid())throw new Error("Bounds are not valid.");var a=this._getBoundsCenterZoom(t,o);return this.setView(a.center,a.zoom,o)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,o){return this.setView(t,this._zoom,{pan:o})},panBy:function(t,o){if(t=H(t).round(),o=o||{},!t.x&&!t.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new xs,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){j(this._mapPane,"leaflet-pan-anim");var a=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,a,o.duration||.25,o.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,o,a){if(a=a||{},a.animate===!1||!N.any3d)return this.setView(t,o,a);this._stop();var l=this.project(this.getCenter()),m=this.project(t),g=this.getSize(),w=this._zoom;t=G(t),o=o===void 0?w:o;var x=Math.max(g.x,g.y),k=x*this.getZoomScale(w,o),C=m.distanceTo(l)||1,B=1.42,Z=B*B;function K(pe){var Xi=pe?-1:1,dd=pe?k:x,ud=k*k-x*x+Xi*Z*Z*C*C,hd=2*dd*Z*C,pr=ud/hd,na=Math.sqrt(pr*pr+1)-pr,md=na<1e-9?-18:Math.log(na);return md}function Le(pe){return(Math.exp(pe)-Math.exp(-pe))/2}function _e(pe){return(Math.exp(pe)+Math.exp(-pe))/2}function Ze(pe){return Le(pe)/_e(pe)}var Me=K(0);function fn(pe){return x*(_e(Me)/_e(Me+B*pe))}function sd(pe){return x*(_e(Me)*Ze(Me+B*pe)-Le(Me))/Z}function ad(pe){return 1-Math.pow(1-pe,1.5)}var cd=Date.now(),ea=(K(1)-Me)/B,ld=a.duration?1e3*a.duration:1e3*ea*.8;function ta(){var pe=(Date.now()-cd)/ld,Xi=ad(pe)*ea;pe<=1?(this._flyToFrame=Y(ta,this),this._move(this.unproject(l.add(m.subtract(l).multiplyBy(sd(Xi)/C)),w),this.getScaleZoom(x/fn(Xi),w),{flyTo:!0})):this._move(t,o)._moveEnd(!0)}return this._moveStart(!0,a.noMoveStart),ta.call(this),this},flyToBounds:function(t,o){var a=this._getBoundsCenterZoom(t,o);return this.flyTo(a.center,a.zoom,o)},setMaxBounds:function(t){return t=se(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var o=this.options.minZoom;return this.options.minZoom=t,this._loaded&&o!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var o=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&o!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,o){this._enforcingBounds=!0;var a=this.getCenter(),l=this._limitCenter(a,this._zoom,se(t));return a.equals(l)||this.panTo(l,o),this._enforcingBounds=!1,this},panInside:function(t,o){o=o||{};var a=H(o.paddingTopLeft||o.padding||[0,0]),l=H(o.paddingBottomRight||o.padding||[0,0]),m=this.project(this.getCenter()),g=this.project(t),w=this.getPixelBounds(),x=be([w.min.add(a),w.max.subtract(l)]),k=x.getSize();if(!x.contains(g)){this._enforcingBounds=!0;var C=g.subtract(x.getCenter()),B=x.extend(g).getSize().subtract(k);m.x+=C.x<0?-B.x:B.x,m.y+=C.y<0?-B.y:B.y,this.panTo(this.unproject(m),o),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=s({animate:!1,pan:!0},t===!0?{animate:!0}:t);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var a=this.getSize(),l=o.divideBy(2).round(),m=a.divideBy(2).round(),g=l.subtract(m);return!g.x&&!g.y?this:(t.animate&&t.pan?this.panBy(g):(t.pan&&this._rawPanBy(g),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(d(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:a}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=s({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=d(this._handleGeolocationResponse,this),a=d(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,a,t):navigator.geolocation.getCurrentPosition(o,a,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var o=t.code,a=t.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+a+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var o=t.coords.latitude,a=t.coords.longitude,l=new Q(o,a),m=l.toBounds(t.coords.accuracy*2),g=this._locateOptions;if(g.setView){var w=this.getBoundsZoom(m);this.setView(l,g.maxZoom?Math.min(w,g.maxZoom):w)}var x={latlng:l,bounds:m,timestamp:t.timestamp};for(var k in t.coords)typeof t.coords[k]=="number"&&(x[k]=t.coords[k]);this.fire("locationfound",x)}},addHandler:function(t,o){if(!o)return this;var a=this[t]=new o(this);return this._handlers.push(a),this.options[t]&&a.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),ce(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(W(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)ce(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,o){var a="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),l=ee("div",a,o||this._mapPane);return t&&(this._panes[t]=l),l},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),o=this.unproject(t.getBottomLeft()),a=this.unproject(t.getTopRight());return new xe(o,a)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,o,a){t=se(t),a=H(a||[0,0]);var l=this.getZoom()||0,m=this.getMinZoom(),g=this.getMaxZoom(),w=t.getNorthWest(),x=t.getSouthEast(),k=this.getSize().subtract(a),C=be(this.project(x,l),this.project(w,l)).getSize(),B=N.any3d?this.options.zoomSnap:1,Z=k.x/C.x,K=k.y/C.y,Le=o?Math.max(Z,K):Math.min(Z,K);return l=this.getScaleZoom(Le,l),B&&(l=Math.round(l/(B/100))*(B/100),l=o?Math.ceil(l/B)*B:Math.floor(l/B)*B),Math.max(m,Math.min(g,l))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new R(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,o){var a=this._getTopLeftPoint(t,o);return new ne(a,a.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,o){var a=this.options.crs;return o=o===void 0?this._zoom:o,a.scale(t)/a.scale(o)},getScaleZoom:function(t,o){var a=this.options.crs;o=o===void 0?this._zoom:o;var l=a.zoom(t*a.scale(o));return isNaN(l)?1/0:l},project:function(t,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(G(t),o)},unproject:function(t,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(H(t),o)},layerPointToLatLng:function(t){var o=H(t).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(t){var o=this.project(G(t))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(G(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(se(t))},distance:function(t,o){return this.options.crs.distance(G(t),G(o))},containerPointToLayerPoint:function(t){return H(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return H(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var o=this.containerPointToLayerPoint(H(t));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(G(t)))},mouseEventToContainerPoint:function(t){return ws(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var o=this._container=gs(t);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");U(o,"scroll",this._onScroll,this),this._containerId=h(o)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&N.any3d,j(t,"leaflet-container"+(N.touch?" leaflet-touch":"")+(N.retina?" leaflet-retina":"")+(N.ielt9?" leaflet-oldie":"")+(N.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=jn(t,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),me(this._mapPane,new R(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(j(t.markerPane,"leaflet-zoom-hide"),j(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,o,a){me(this._mapPane,new R(0,0));var l=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var m=this._zoom!==o;this._moveStart(m,a)._move(t,o)._moveEnd(m),this.fire("viewreset"),l&&this.fire("load")},_moveStart:function(t,o){return t&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(t,o,a,l){o===void 0&&(o=this._zoom);var m=this._zoom!==o;return this._zoom=o,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),l?a&&a.pinch&&this.fire("zoom",a):((m||a&&a.pinch)&&this.fire("zoom",a),this.fire("move",a)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return W(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){me(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[h(this._container)]=this;var o=t?oe:U;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),N.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){W(this._resizeRequest),this._resizeRequest=Y(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,o){for(var a=[],l,m=o==="mouseout"||o==="mouseover",g=t.target||t.srcElement,w=!1;g;){if(l=this._targets[h(g)],l&&(o==="click"||o==="preclick")&&this._draggableMoved(l)){w=!0;break}if(l&&l.listens(o,!0)&&(m&&!ir(g,t)||(a.push(l),m))||g===this._container)break;g=g.parentNode}return!a.length&&!w&&!m&&this.listens(o,!0)&&(a=[this]),a},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var o=t.target||t.srcElement;if(!(!this._loaded||o._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(o))){var a=t.type;a==="mousedown"&&Jo(o),this._fireDOMEvent(t,a)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,o,a){if(t.type==="click"){var l=s({},t);l.type="preclick",this._fireDOMEvent(l,l.type,a)}var m=this._findEventTargets(t,o);if(a){for(var g=[],w=0;w<a.length;w++)a[w].listens(o,!0)&&g.push(a[w]);m=g.concat(m)}if(m.length){o==="contextmenu"&&Se(t);var x=m[0],k={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var C=x.getLatLng&&(!x._radius||x._radius<=10);k.containerPoint=C?this.latLngToContainerPoint(x.getLatLng()):this.mouseEventToContainerPoint(t),k.layerPoint=this.containerPointToLayerPoint(k.containerPoint),k.latlng=C?x.getLatLng():this.layerPointToLatLng(k.layerPoint)}for(w=0;w<m.length;w++)if(m[w].fire(o,k,!0),k.originalEvent._stopped||m[w].options.bubblingMouseEvents===!1&&z(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,o=this._handlers.length;t<o;t++)this._handlers[t].disable()},whenReady:function(t,o){return this._loaded?t.call(o||this,{target:this}):this.on("load",t,o),this},_getMapPanePos:function(){return Ot(this._mapPane)||new R(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,o){var a=t&&o!==void 0?this._getNewPixelOrigin(t,o):this.getPixelOrigin();return a.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,o){var a=this.getSize()._divideBy(2);return this.project(t,o)._subtract(a)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,o,a){var l=this._getNewPixelOrigin(a,o);return this.project(t,o)._subtract(l)},_latLngBoundsToNewLayerBounds:function(t,o,a){var l=this._getNewPixelOrigin(a,o);return be([this.project(t.getSouthWest(),o)._subtract(l),this.project(t.getNorthWest(),o)._subtract(l),this.project(t.getSouthEast(),o)._subtract(l),this.project(t.getNorthEast(),o)._subtract(l)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,o,a){if(!a)return t;var l=this.project(t,o),m=this.getSize().divideBy(2),g=new ne(l.subtract(m),l.add(m)),w=this._getBoundsOffset(g,a,o);return Math.abs(w.x)<=1&&Math.abs(w.y)<=1?t:this.unproject(l.add(w),o)},_limitOffset:function(t,o){if(!o)return t;var a=this.getPixelBounds(),l=new ne(a.min.add(t),a.max.add(t));return t.add(this._getBoundsOffset(l,o))},_getBoundsOffset:function(t,o,a){var l=be(this.project(o.getNorthEast(),a),this.project(o.getSouthWest(),a)),m=l.min.subtract(t.min),g=l.max.subtract(t.max),w=this._rebound(m.x,-g.x),x=this._rebound(m.y,-g.y);return new R(w,x)},_rebound:function(t,o){return t+o>0?Math.round(t-o)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(o))},_limitZoom:function(t){var o=this.getMinZoom(),a=this.getMaxZoom(),l=N.any3d?this.options.zoomSnap:1;return l&&(t=Math.round(t/l)*l),Math.max(o,Math.min(a,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){ue(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,o){var a=this._getCenterOffset(t)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(a)?!1:(this.panBy(a,o),!0)},_createAnimProxy:function(){var t=this._proxy=ee("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(o){var a=Wo,l=this._proxy.style[a];$t(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),l===this._proxy.style[a]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ce(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),o=this.getZoom();$t(this._proxy,this.project(t,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,o,a){if(this._animatingZoom)return!0;if(a=a||{},!this._zoomAnimated||a.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var l=this.getZoomScale(o),m=this._getCenterOffset(t)._divideBy(1-1/l);return a.animate!==!0&&!this.getSize().contains(m)?!1:(Y(function(){this._moveStart(!0,a.noMoveStart||!1)._animateZoom(t,o,!0)},this),!0)},_animateZoom:function(t,o,a,l){this._mapPane&&(a&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=o,j(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:o,noUpdate:l}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(d(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&ue(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Sl(t,o){return new X(t,o)}var Ve=ae.extend({options:{position:"topright"},initialize:function(t){S(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var o=this._map;return o&&o.removeControl(this),this.options.position=t,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var o=this._container=this.onAdd(t),a=this.getPosition(),l=t._controlCorners[a];return j(o,"leaflet-control"),a.indexOf("bottom")!==-1?l.insertBefore(o,l.firstChild):l.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(ce(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),Xn=function(t){return new Ve(t)};X.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},o="leaflet-",a=this._controlContainer=ee("div",o+"control-container",this._container);function l(m,g){var w=o+m+" "+o+g;t[m+g]=ee("div",w,a)}l("top","left"),l("top","right"),l("bottom","left"),l("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)ce(this._controlCorners[t]);ce(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Ss=Ve.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,o,a,l){return a<l?-1:l<a?1:0}},initialize:function(t,o,a){S(this,a),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var l in t)this._addLayer(t[l],l);for(l in o)this._addLayer(o[l],l,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Ve.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,o){return this._addLayer(t,o),this._map?this._update():this},addOverlay:function(t,o){return this._addLayer(t,o,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var o=this._getLayer(h(t));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){j(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(j(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):ue(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return ue(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",o=this._container=ee("div",t),a=this.options.collapsed;o.setAttribute("aria-haspopup",!0),Jn(o),nr(o);var l=this._section=ee("section",t+"-list");a&&(this._map.on("click",this.collapse,this),U(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var m=this._layersLink=ee("a",t+"-toggle",o);m.href="#",m.title="Layers",m.setAttribute("role","button"),U(m,{keydown:function(g){g.keyCode===13&&this._expandSafely()},click:function(g){Se(g),this._expandSafely()}},this),a||this.expand(),this._baseLayersList=ee("div",t+"-base",l),this._separator=ee("div",t+"-separator",l),this._overlaysList=ee("div",t+"-overlays",l),o.appendChild(l)},_getLayer:function(t){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&h(this._layers[o].layer)===t)return this._layers[o]},_addLayer:function(t,o,a){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:o,overlay:a}),this.options.sortLayers&&this._layers.sort(d(function(l,m){return this.options.sortFunction(l.layer,m.layer,l.name,m.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;$i(this._baseLayersList),$i(this._overlaysList),this._layerControlInputs=[];var t,o,a,l,m=0;for(a=0;a<this._layers.length;a++)l=this._layers[a],this._addItem(l),o=o||l.overlay,t=t||!l.overlay,m+=l.overlay?0:1;return this.options.hideSingleBase&&(t=t&&m>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=o&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var o=this._getLayer(h(t.target)),a=o.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;a&&this._map.fire(a,o)},_createRadioElement:function(t,o){var a='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(o?' checked="checked"':"")+"/>",l=document.createElement("div");return l.innerHTML=a,l.firstChild},_addItem:function(t){var o=document.createElement("label"),a=this._map.hasLayer(t.layer),l;t.overlay?(l=document.createElement("input"),l.type="checkbox",l.className="leaflet-control-layers-selector",l.defaultChecked=a):l=this._createRadioElement("leaflet-base-layers_"+h(this),a),this._layerControlInputs.push(l),l.layerId=h(t.layer),U(l,"click",this._onInputClick,this);var m=document.createElement("span");m.innerHTML=" "+t.name;var g=document.createElement("span");o.appendChild(g),g.appendChild(l),g.appendChild(m);var w=t.overlay?this._overlaysList:this._baseLayersList;return w.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,o,a,l=[],m=[];this._handlingClick=!0;for(var g=t.length-1;g>=0;g--)o=t[g],a=this._getLayer(o.layerId).layer,o.checked?l.push(a):o.checked||m.push(a);for(g=0;g<m.length;g++)this._map.hasLayer(m[g])&&this._map.removeLayer(m[g]);for(g=0;g<l.length;g++)this._map.hasLayer(l[g])||this._map.addLayer(l[g]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,o,a,l=this._map.getZoom(),m=t.length-1;m>=0;m--)o=t[m],a=this._getLayer(o.layerId).layer,o.disabled=a.options.minZoom!==void 0&&l<a.options.minZoom||a.options.maxZoom!==void 0&&l>a.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,U(t,"click",Se),this.expand();var o=this;setTimeout(function(){oe(t,"click",Se),o._preventClick=!1})}}),El=function(t,o,a){return new Ss(t,o,a)},or=Ve.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var o="leaflet-control-zoom",a=ee("div",o+" leaflet-bar"),l=this.options;return this._zoomInButton=this._createButton(l.zoomInText,l.zoomInTitle,o+"-in",a,this._zoomIn),this._zoomOutButton=this._createButton(l.zoomOutText,l.zoomOutTitle,o+"-out",a,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),a},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,o,a,l,m){var g=ee("a",a,l);return g.innerHTML=t,g.href="#",g.title=o,g.setAttribute("role","button"),g.setAttribute("aria-label",o),Jn(g),U(g,"click",Ft),U(g,"click",m,this),U(g,"click",this._refocusOnMap,this),g},_updateDisabled:function(){var t=this._map,o="leaflet-disabled";ue(this._zoomInButton,o),ue(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(j(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(j(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});X.mergeOptions({zoomControl:!0}),X.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new or,this.addControl(this.zoomControl))});var kl=function(t){return new or(t)},Es=Ve.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var o="leaflet-control-scale",a=ee("div",o),l=this.options;return this._addScales(l,o+"-line",a),t.on(l.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),a},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,o,a){t.metric&&(this._mScale=ee("div",o,a)),t.imperial&&(this._iScale=ee("div",o,a))},_update:function(){var t=this._map,o=t.getSize().y/2,a=t.distance(t.containerPointToLatLng([0,o]),t.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(a)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var o=this._getRoundNum(t),a=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,a,o/t)},_updateImperial:function(t){var o=t*3.2808399,a,l,m;o>5280?(a=o/5280,l=this._getRoundNum(a),this._updateScale(this._iScale,l+" mi",l/a)):(m=this._getRoundNum(o),this._updateScale(this._iScale,m+" ft",m/o))},_updateScale:function(t,o,a){t.style.width=Math.round(this.options.maxWidth*a)+"px",t.innerHTML=o},_getRoundNum:function(t){var o=Math.pow(10,(Math.floor(t)+"").length-1),a=t/o;return a=a>=10?10:a>=5?5:a>=3?3:a>=2?2:1,o*a}}),Tl=function(t){return new Es(t)},Ll='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',rr=Ve.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(N.inlineSvg?Ll+" ":"")+"Leaflet</a>"},initialize:function(t){S(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=ee("div","leaflet-control-attribution"),Jn(this._container);for(var o in t._layers)t._layers[o].getAttribution&&this.addAttribution(t._layers[o].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var o in this._attributions)this._attributions[o]&&t.push(o);var a=[];this.options.prefix&&a.push(this.options.prefix),t.length&&a.push(t.join(", ")),this._container.innerHTML=a.join(' <span aria-hidden="true">|</span> ')}}});X.mergeOptions({attributionControl:!0}),X.addInitHook(function(){this.options.attributionControl&&new rr().addTo(this)});var Cl=function(t){return new rr(t)};Ve.Layers=Ss,Ve.Zoom=or,Ve.Scale=Es,Ve.Attribution=rr,Xn.layers=El,Xn.zoom=kl,Xn.scale=Tl,Xn.attribution=Cl;var et=ae.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});et.addTo=function(t,o){return t.addHandler(o,this),this};var Pl={Events:we},ks=N.touch?"touchstart mousedown":"mousedown",wt=De.extend({options:{clickTolerance:3},initialize:function(t,o,a,l){S(this,l),this._element=t,this._dragStartTarget=o||t,this._preventOutline=a},enable:function(){this._enabled||(U(this._dragStartTarget,ks,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(wt._dragging===this&&this.finishDrag(!0),oe(this._dragStartTarget,ks,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!Vo(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){wt._dragging===this&&this.finishDrag();return}if(!(wt._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(wt._dragging=this,this._preventOutline&&Jo(this._element),Go(),Gn(),!this._moving)){this.fire("down");var o=t.touches?t.touches[0]:t,a=vs(this._element);this._startPoint=new R(o.clientX,o.clientY),this._startPos=Ot(this._element),this._parentScale=Xo(a);var l=t.type==="mousedown";U(document,l?"mousemove":"touchmove",this._onMove,this),U(document,l?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var o=t.touches&&t.touches.length===1?t.touches[0]:t,a=new R(o.clientX,o.clientY)._subtract(this._startPoint);!a.x&&!a.y||Math.abs(a.x)+Math.abs(a.y)<this.options.clickTolerance||(a.x/=this._parentScale.x,a.y/=this._parentScale.y,Se(t),this._moved||(this.fire("dragstart"),this._moved=!0,j(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),j(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(a),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),me(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){ue(document.body,"leaflet-dragging"),this._lastTarget&&(ue(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),oe(document,"mousemove touchmove",this._onMove,this),oe(document,"mouseup touchend touchcancel",this._onUp,this),Yo(),Yn();var o=this._moved&&this._moving;this._moving=!1,wt._dragging=!1,o&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Ts(t,o,a){var l,m=[1,4,2,8],g,w,x,k,C,B,Z,K;for(g=0,B=t.length;g<B;g++)t[g]._code=Rt(t[g],o);for(x=0;x<4;x++){for(Z=m[x],l=[],g=0,B=t.length,w=B-1;g<B;w=g++)k=t[g],C=t[w],k._code&Z?C._code&Z||(K=Hi(C,k,Z,o,a),K._code=Rt(K,o),l.push(K)):(C._code&Z&&(K=Hi(C,k,Z,o,a),K._code=Rt(K,o),l.push(K)),l.push(k));t=l}return t}function Ls(t,o){var a,l,m,g,w,x,k,C,B;if(!t||t.length===0)throw new Error("latlngs not passed");He(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var Z=G([0,0]),K=se(t),Le=K.getNorthWest().distanceTo(K.getSouthWest())*K.getNorthEast().distanceTo(K.getNorthWest());Le<1700&&(Z=sr(t));var _e=t.length,Ze=[];for(a=0;a<_e;a++){var Me=G(t[a]);Ze.push(o.project(G([Me.lat-Z.lat,Me.lng-Z.lng])))}for(x=k=C=0,a=0,l=_e-1;a<_e;l=a++)m=Ze[a],g=Ze[l],w=m.y*g.x-g.y*m.x,k+=(m.x+g.x)*w,C+=(m.y+g.y)*w,x+=w*3;x===0?B=Ze[0]:B=[k/x,C/x];var fn=o.unproject(H(B));return G([fn.lat+Z.lat,fn.lng+Z.lng])}function sr(t){for(var o=0,a=0,l=0,m=0;m<t.length;m++){var g=G(t[m]);o+=g.lat,a+=g.lng,l++}return G([o/l,a/l])}var Ml={__proto__:null,clipPolygon:Ts,polygonCenter:Ls,centroid:sr};function Cs(t,o){if(!o||!t.length)return t.slice();var a=o*o;return t=Dl(t,a),t=Al(t,a),t}function Ps(t,o,a){return Math.sqrt(Qn(t,o,a,!0))}function Il(t,o,a){return Qn(t,o,a)}function Al(t,o){var a=t.length,l=typeof Uint8Array<"u"?Uint8Array:Array,m=new l(a);m[0]=m[a-1]=1,ar(t,m,o,0,a-1);var g,w=[];for(g=0;g<a;g++)m[g]&&w.push(t[g]);return w}function ar(t,o,a,l,m){var g=0,w,x,k;for(x=l+1;x<=m-1;x++)k=Qn(t[x],t[l],t[m],!0),k>g&&(w=x,g=k);g>a&&(o[w]=1,ar(t,o,a,l,w),ar(t,o,a,w,m))}function Dl(t,o){for(var a=[t[0]],l=1,m=0,g=t.length;l<g;l++)zl(t[l],t[m])>o&&(a.push(t[l]),m=l);return m<g-1&&a.push(t[g-1]),a}var Ms;function Is(t,o,a,l,m){var g=l?Ms:Rt(t,a),w=Rt(o,a),x,k,C;for(Ms=w;;){if(!(g|w))return[t,o];if(g&w)return!1;x=g||w,k=Hi(t,o,x,a,m),C=Rt(k,a),x===g?(t=k,g=C):(o=k,w=C)}}function Hi(t,o,a,l,m){var g=o.x-t.x,w=o.y-t.y,x=l.min,k=l.max,C,B;return a&8?(C=t.x+g*(k.y-t.y)/w,B=k.y):a&4?(C=t.x+g*(x.y-t.y)/w,B=x.y):a&2?(C=k.x,B=t.y+w*(k.x-t.x)/g):a&1&&(C=x.x,B=t.y+w*(x.x-t.x)/g),new R(C,B,m)}function Rt(t,o){var a=0;return t.x<o.min.x?a|=1:t.x>o.max.x&&(a|=2),t.y<o.min.y?a|=4:t.y>o.max.y&&(a|=8),a}function zl(t,o){var a=o.x-t.x,l=o.y-t.y;return a*a+l*l}function Qn(t,o,a,l){var m=o.x,g=o.y,w=a.x-m,x=a.y-g,k=w*w+x*x,C;return k>0&&(C=((t.x-m)*w+(t.y-g)*x)/k,C>1?(m=a.x,g=a.y):C>0&&(m+=w*C,g+=x*C)),w=t.x-m,x=t.y-g,l?w*w+x*x:new R(m,g)}function He(t){return!D(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function As(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),He(t)}function Ds(t,o){var a,l,m,g,w,x,k,C;if(!t||t.length===0)throw new Error("latlngs not passed");He(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var B=G([0,0]),Z=se(t),K=Z.getNorthWest().distanceTo(Z.getSouthWest())*Z.getNorthEast().distanceTo(Z.getNorthWest());K<1700&&(B=sr(t));var Le=t.length,_e=[];for(a=0;a<Le;a++){var Ze=G(t[a]);_e.push(o.project(G([Ze.lat-B.lat,Ze.lng-B.lng])))}for(a=0,l=0;a<Le-1;a++)l+=_e[a].distanceTo(_e[a+1])/2;if(l===0)C=_e[0];else for(a=0,g=0;a<Le-1;a++)if(w=_e[a],x=_e[a+1],m=w.distanceTo(x),g+=m,g>l){k=(g-l)/m,C=[x.x-k*(x.x-w.x),x.y-k*(x.y-w.y)];break}var Me=o.unproject(H(C));return G([Me.lat+B.lat,Me.lng+B.lng])}var Bl={__proto__:null,simplify:Cs,pointToSegmentDistance:Ps,closestPointOnSegment:Il,clipSegment:Is,_getEdgeIntersection:Hi,_getBitCode:Rt,_sqClosestPointOnSegment:Qn,isFlat:He,_flat:As,polylineCenter:Ds},cr={project:function(t){return new R(t.lng,t.lat)},unproject:function(t){return new Q(t.y,t.x)},bounds:new ne([-180,-90],[180,90])},lr={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ne([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var o=Math.PI/180,a=this.R,l=t.lat*o,m=this.R_MINOR/a,g=Math.sqrt(1-m*m),w=g*Math.sin(l),x=Math.tan(Math.PI/4-l/2)/Math.pow((1-w)/(1+w),g/2);return l=-a*Math.log(Math.max(x,1e-10)),new R(t.lng*o*a,l)},unproject:function(t){for(var o=180/Math.PI,a=this.R,l=this.R_MINOR/a,m=Math.sqrt(1-l*l),g=Math.exp(-t.y/a),w=Math.PI/2-2*Math.atan(g),x=0,k=.1,C;x<15&&Math.abs(k)>1e-7;x++)C=m*Math.sin(w),C=Math.pow((1-C)/(1+C),m/2),k=Math.PI/2-2*Math.atan(g*C)-w,w+=k;return new Q(w*o,t.x*o/a)}},$l={__proto__:null,LonLat:cr,Mercator:lr,SphericalMercator:Mt},Ol=s({},Ne,{code:"EPSG:3395",projection:lr,transformation:(function(){var t=.5/(Math.PI*lr.R);return at(t,.5,-t,.5)})()}),zs=s({},Ne,{code:"EPSG:4326",projection:cr,transformation:at(1/180,1,-1/180,.5)}),Nl=s({},ze,{projection:cr,transformation:at(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,o){var a=o.lng-t.lng,l=o.lat-t.lat;return Math.sqrt(a*a+l*l)},infinite:!0});ze.Earth=Ne,ze.EPSG3395=Ol,ze.EPSG3857=Fe,ze.EPSG900913=nn,ze.EPSG4326=zs,ze.Simple=Nl;var Ue=De.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[h(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[h(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var o=t.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var a=this.getEvents();o.on(a,this),this.once("remove",function(){o.off(a,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});X.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var o=h(t);return this._layers[o]?this:(this._layers[o]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var o=h(t);return this._layers[o]?(this._loaded&&t.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return h(t)in this._layers},eachLayer:function(t,o){for(var a in this._layers)t.call(o,this._layers[a]);return this},_addLayers:function(t){t=t?D(t)?t:[t]:[];for(var o=0,a=t.length;o<a;o++)this.addLayer(t[o])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[h(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var o=h(t);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,o=-1/0,a=this._getZoomSpan();for(var l in this._zoomBoundLayers){var m=this._zoomBoundLayers[l].options;t=m.minZoom===void 0?t:Math.min(t,m.minZoom),o=m.maxZoom===void 0?o:Math.max(o,m.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=t===1/0?void 0:t,a!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var dn=Ue.extend({initialize:function(t,o){S(this,o),this._layers={};var a,l;if(t)for(a=0,l=t.length;a<l;a++)this.addLayer(t[a])},addLayer:function(t){var o=this.getLayerId(t);return this._layers[o]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var o=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(t){var o=typeof t=="number"?t:this.getLayerId(t);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var o=Array.prototype.slice.call(arguments,1),a,l;for(a in this._layers)l=this._layers[a],l[t]&&l[t].apply(l,o);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,o){for(var a in this._layers)t.call(o,this._layers[a]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return h(t)}}),Fl=function(t,o){return new dn(t,o)},lt=dn.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),dn.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),dn.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new xe;for(var o in this._layers){var a=this._layers[o];t.extend(a.getBounds?a.getBounds():a.getLatLng())}return t}}),Rl=function(t,o){return new lt(t,o)},un=ae.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){S(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,o){var a=this._getIconUrl(t);if(!a){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var l=this._createImg(a,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(l,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),l},_setIconStyles:function(t,o){var a=this.options,l=a[o+"Size"];typeof l=="number"&&(l=[l,l]);var m=H(l),g=H(o==="shadow"&&a.shadowAnchor||a.iconAnchor||m&&m.divideBy(2,!0));t.className="leaflet-marker-"+o+" "+(a.className||""),g&&(t.style.marginLeft=-g.x+"px",t.style.marginTop=-g.y+"px"),m&&(t.style.width=m.x+"px",t.style.height=m.y+"px")},_createImg:function(t,o){return o=o||document.createElement("img"),o.src=t,o},_getIconUrl:function(t){return N.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function Hl(t){return new un(t)}var ei=un.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof ei.imagePath!="string"&&(ei.imagePath=this._detectIconPath()),(this.options.imagePath||ei.imagePath)+un.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var o=function(a,l,m){var g=l.exec(a);return g&&g[m]};return t=o(t,/^url\((['"])?(.+)\1\)$/,2),t&&o(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=ee("div","leaflet-default-icon-path",document.body),o=jn(t,"background-image")||jn(t,"backgroundImage");if(document.body.removeChild(t),o=this._stripUrl(o),o)return o;var a=document.querySelector('link[href$="leaflet.css"]');return a?a.href.substring(0,a.href.length-11-1):""}}),Bs=et.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new wt(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),j(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&ue(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var o=this._marker,a=o._map,l=this._marker.options.autoPanSpeed,m=this._marker.options.autoPanPadding,g=Ot(o._icon),w=a.getPixelBounds(),x=a.getPixelOrigin(),k=be(w.min._subtract(x).add(m),w.max._subtract(x).subtract(m));if(!k.contains(g)){var C=H((Math.max(k.max.x,g.x)-k.max.x)/(w.max.x-k.max.x)-(Math.min(k.min.x,g.x)-k.min.x)/(w.min.x-k.min.x),(Math.max(k.max.y,g.y)-k.max.y)/(w.max.y-k.max.y)-(Math.min(k.min.y,g.y)-k.min.y)/(w.min.y-k.min.y)).multiplyBy(l);a.panBy(C,{animate:!1}),this._draggable._newPos._add(C),this._draggable._startPos._add(C),me(o._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=Y(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(W(this._panRequest),this._panRequest=Y(this._adjustPan.bind(this,t)))},_onDrag:function(t){var o=this._marker,a=o._shadow,l=Ot(o._icon),m=o._map.layerPointToLatLng(l);a&&me(a,l),o._latlng=m,t.latlng=m,t.oldLatLng=this._oldLatLng,o.fire("move",t).fire("drag",t)},_onDragEnd:function(t){W(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Zi=Ue.extend({options:{icon:new ei,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,o){S(this,o),this._latlng=G(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var o=this._latlng;return this._latlng=G(t),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),a=t.icon.createIcon(this._icon),l=!1;a!==this._icon&&(this._icon&&this._removeIcon(),l=!0,t.title&&(a.title=t.title),a.tagName==="IMG"&&(a.alt=t.alt||"")),j(a,o),t.keyboard&&(a.tabIndex="0",a.setAttribute("role","button")),this._icon=a,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&U(a,"focus",this._panOnFocus,this);var m=t.icon.createShadow(this._shadow),g=!1;m!==this._shadow&&(this._removeShadow(),g=!0),m&&(j(m,o),m.alt=""),this._shadow=m,t.opacity<1&&this._updateOpacity(),l&&this.getPane().appendChild(this._icon),this._initInteraction(),m&&g&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&oe(this._icon,"focus",this._panOnFocus,this),ce(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ce(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&me(this._icon,t),this._shadow&&me(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var o=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(j(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Bs)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Bs(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&Re(this._icon,t),this._shadow&&Re(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var o=this.options.icon.options,a=o.iconSize?H(o.iconSize):H(0,0),l=o.iconAnchor?H(o.iconAnchor):H(0,0);t.panInside(this._latlng,{paddingTopLeft:l,paddingBottomRight:a.subtract(l)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Zl(t,o){return new Zi(t,o)}var bt=Ue.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return S(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),qi=bt.extend({options:{fill:!0,radius:10},initialize:function(t,o){S(this,o),this._latlng=G(t),this._radius=this.options.radius},setLatLng:function(t){var o=this._latlng;return this._latlng=G(t),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var o=t&&t.radius||this._radius;return bt.prototype.setStyle.call(this,t),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,o=this._radiusY||t,a=this._clickTolerance(),l=[t+a,o+a];this._pxBounds=new ne(this._point.subtract(l),this._point.add(l))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function ql(t,o){return new qi(t,o)}var dr=qi.extend({initialize:function(t,o,a){if(typeof o=="number"&&(o=s({},a,{radius:o})),S(this,o),this._latlng=G(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new xe(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:bt.prototype.setStyle,_project:function(){var t=this._latlng.lng,o=this._latlng.lat,a=this._map,l=a.options.crs;if(l.distance===Ne.distance){var m=Math.PI/180,g=this._mRadius/Ne.R/m,w=a.project([o+g,t]),x=a.project([o-g,t]),k=w.add(x).divideBy(2),C=a.unproject(k).lat,B=Math.acos((Math.cos(g*m)-Math.sin(o*m)*Math.sin(C*m))/(Math.cos(o*m)*Math.cos(C*m)))/m;(isNaN(B)||B===0)&&(B=g/Math.cos(Math.PI/180*o)),this._point=k.subtract(a.getPixelOrigin()),this._radius=isNaN(B)?0:k.x-a.project([C,t-B]).x,this._radiusY=k.y-w.y}else{var Z=l.unproject(l.project(this._latlng).subtract([this._mRadius,0]));this._point=a.latLngToLayerPoint(this._latlng),this._radius=this._point.x-a.latLngToLayerPoint(Z).x}this._updateBounds()}});function Wl(t,o,a){return new dr(t,o,a)}var dt=bt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,o){S(this,o),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var o=1/0,a=null,l=Qn,m,g,w=0,x=this._parts.length;w<x;w++)for(var k=this._parts[w],C=1,B=k.length;C<B;C++){m=k[C-1],g=k[C];var Z=l(t,m,g,!0);Z<o&&(o=Z,a=l(t,m,g))}return a&&(a.distance=Math.sqrt(o)),a},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ds(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,o){return o=o||this._defaultShape(),t=G(t),o.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new xe,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return He(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var o=[],a=He(t),l=0,m=t.length;l<m;l++)a?(o[l]=G(t[l]),this._bounds.extend(o[l])):o[l]=this._convertLatLngs(t[l]);return o},_project:function(){var t=new ne;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),o=new R(t,t);this._rawPxBounds&&(this._pxBounds=new ne([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(t,o,a){var l=t[0]instanceof Q,m=t.length,g,w;if(l){for(w=[],g=0;g<m;g++)w[g]=this._map.latLngToLayerPoint(t[g]),a.extend(w[g]);o.push(w)}else for(g=0;g<m;g++)this._projectLatlngs(t[g],o,a)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,a,l,m,g,w,x,k;for(a=0,m=0,g=this._rings.length;a<g;a++)for(k=this._rings[a],l=0,w=k.length;l<w-1;l++)x=Is(k[l],k[l+1],t,l,!0),x&&(o[m]=o[m]||[],o[m].push(x[0]),(x[1]!==k[l+1]||l===w-2)&&(o[m].push(x[1]),m++))}},_simplifyPoints:function(){for(var t=this._parts,o=this.options.smoothFactor,a=0,l=t.length;a<l;a++)t[a]=Cs(t[a],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,o){var a,l,m,g,w,x,k=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(a=0,g=this._parts.length;a<g;a++)for(x=this._parts[a],l=0,w=x.length,m=w-1;l<w;m=l++)if(!(!o&&l===0)&&Ps(t,x[m],x[l])<=k)return!0;return!1}});function Vl(t,o){return new dt(t,o)}dt._flat=As;var hn=dt.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ls(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var o=dt.prototype._convertLatLngs.call(this,t),a=o.length;return a>=2&&o[0]instanceof Q&&o[0].equals(o[a-1])&&o.pop(),o},_setLatLngs:function(t){dt.prototype._setLatLngs.call(this,t),He(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return He(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,o=this.options.weight,a=new R(o,o);if(t=new ne(t.min.subtract(a),t.max.add(a)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var l=0,m=this._rings.length,g;l<m;l++)g=Ts(this._rings[l],t,!0),g.length&&this._parts.push(g)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var o=!1,a,l,m,g,w,x,k,C;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(g=0,k=this._parts.length;g<k;g++)for(a=this._parts[g],w=0,C=a.length,x=C-1;w<C;x=w++)l=a[w],m=a[x],l.y>t.y!=m.y>t.y&&t.x<(m.x-l.x)*(t.y-l.y)/(m.y-l.y)+l.x&&(o=!o);return o||dt.prototype._containsPoint.call(this,t,!0)}});function Ul(t,o){return new hn(t,o)}var ut=lt.extend({initialize:function(t,o){S(this,o),this._layers={},t&&this.addData(t)},addData:function(t){var o=D(t)?t:t.features,a,l,m;if(o){for(a=0,l=o.length;a<l;a++)m=o[a],(m.geometries||m.geometry||m.features||m.coordinates)&&this.addData(m);return this}var g=this.options;if(g.filter&&!g.filter(t))return this;var w=Wi(t,g);return w?(w.feature=ji(t),w.defaultOptions=w.options,this.resetStyle(w),g.onEachFeature&&g.onEachFeature(t,w),this.addLayer(w)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=s({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(o){this._setLayerStyle(o,t)},this)},_setLayerStyle:function(t,o){t.setStyle&&(typeof o=="function"&&(o=o(t.feature)),t.setStyle(o))}});function Wi(t,o){var a=t.type==="Feature"?t.geometry:t,l=a?a.coordinates:null,m=[],g=o&&o.pointToLayer,w=o&&o.coordsToLatLng||ur,x,k,C,B;if(!l&&!a)return null;switch(a.type){case"Point":return x=w(l),$s(g,t,x,o);case"MultiPoint":for(C=0,B=l.length;C<B;C++)x=w(l[C]),m.push($s(g,t,x,o));return new lt(m);case"LineString":case"MultiLineString":return k=Vi(l,a.type==="LineString"?0:1,w),new dt(k,o);case"Polygon":case"MultiPolygon":return k=Vi(l,a.type==="Polygon"?1:2,w),new hn(k,o);case"GeometryCollection":for(C=0,B=a.geometries.length;C<B;C++){var Z=Wi({geometry:a.geometries[C],type:"Feature",properties:t.properties},o);Z&&m.push(Z)}return new lt(m);case"FeatureCollection":for(C=0,B=a.features.length;C<B;C++){var K=Wi(a.features[C],o);K&&m.push(K)}return new lt(m);default:throw new Error("Invalid GeoJSON object.")}}function $s(t,o,a,l){return t?t(o,a):new Zi(a,l&&l.markersInheritOptions&&l)}function ur(t){return new Q(t[1],t[0],t[2])}function Vi(t,o,a){for(var l=[],m=0,g=t.length,w;m<g;m++)w=o?Vi(t[m],o-1,a):(a||ur)(t[m]),l.push(w);return l}function hr(t,o){return t=G(t),t.alt!==void 0?[v(t.lng,o),v(t.lat,o),v(t.alt,o)]:[v(t.lng,o),v(t.lat,o)]}function Ui(t,o,a,l){for(var m=[],g=0,w=t.length;g<w;g++)m.push(o?Ui(t[g],He(t[g])?0:o-1,a,l):hr(t[g],l));return!o&&a&&m.length>0&&m.push(m[0].slice()),m}function mn(t,o){return t.feature?s({},t.feature,{geometry:o}):ji(o)}function ji(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var mr={toGeoJSON:function(t){return mn(this,{type:"Point",coordinates:hr(this.getLatLng(),t)})}};Zi.include(mr),dr.include(mr),qi.include(mr),dt.include({toGeoJSON:function(t){var o=!He(this._latlngs),a=Ui(this._latlngs,o?1:0,!1,t);return mn(this,{type:(o?"Multi":"")+"LineString",coordinates:a})}}),hn.include({toGeoJSON:function(t){var o=!He(this._latlngs),a=o&&!He(this._latlngs[0]),l=Ui(this._latlngs,a?2:o?1:0,!0,t);return o||(l=[l]),mn(this,{type:(a?"Multi":"")+"Polygon",coordinates:l})}}),dn.include({toMultiPoint:function(t){var o=[];return this.eachLayer(function(a){o.push(a.toGeoJSON(t).geometry.coordinates)}),mn(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(t){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(t);var a=o==="GeometryCollection",l=[];return this.eachLayer(function(m){if(m.toGeoJSON){var g=m.toGeoJSON(t);if(a)l.push(g.geometry);else{var w=ji(g);w.type==="FeatureCollection"?l.push.apply(l,w.features):l.push(w)}}}),a?mn(this,{geometries:l,type:"GeometryCollection"}):{type:"FeatureCollection",features:l}}});function Os(t,o){return new ut(t,o)}var jl=Os,Gi=Ue.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,o,a){this._url=t,this._bounds=se(o),S(this,a)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(j(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ce(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&cn(this._image),this},bringToBack:function(){return this._map&&ln(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=se(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",o=this._image=t?this._url:ee("img");if(j(o,"leaflet-image-layer"),this._zoomAnimated&&j(o,"leaflet-zoom-animated"),this.options.className&&j(o,this.options.className),o.onselectstart=f,o.onmousemove=f,o.onload=d(this.fire,this,"load"),o.onerror=d(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(t){var o=this._map.getZoomScale(t.zoom),a=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;$t(this._image,a,o)},_reset:function(){var t=this._image,o=new ne(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),a=o.getSize();me(t,o.min),t.style.width=a.x+"px",t.style.height=a.y+"px"},_updateOpacity:function(){Re(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Gl=function(t,o,a){return new Gi(t,o,a)},Ns=Gi.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",o=this._image=t?this._url:ee("video");if(j(o,"leaflet-image-layer"),this._zoomAnimated&&j(o,"leaflet-zoom-animated"),this.options.className&&j(o,this.options.className),o.onselectstart=f,o.onmousemove=f,o.onloadeddata=d(this.fire,this,"load"),t){for(var a=o.getElementsByTagName("source"),l=[],m=0;m<a.length;m++)l.push(a[m].src);this._url=a.length>0?l:[o.src];return}D(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var g=0;g<this._url.length;g++){var w=ee("source");w.src=this._url[g],o.appendChild(w)}}});function Yl(t,o,a){return new Ns(t,o,a)}var Fs=Gi.extend({_initImage:function(){var t=this._image=this._url;j(t,"leaflet-image-layer"),this._zoomAnimated&&j(t,"leaflet-zoom-animated"),this.options.className&&j(t,this.options.className),t.onselectstart=f,t.onmousemove=f}});function Kl(t,o,a){return new Fs(t,o,a)}var tt=Ue.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,o){t&&(t instanceof Q||D(t))?(this._latlng=G(t),S(this,o)):(S(this,t),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&Re(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&Re(this._container,1),this.bringToFront(),this.options.interactive&&(j(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(Re(this._container,0),this._removeTimeout=setTimeout(d(ce,void 0,this._container),200)):ce(this._container),this.options.interactive&&(ue(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=G(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&cn(this._container),this},bringToBack:function(){return this._map&&ln(this._container),this},_prepareOpen:function(t){var o=this._source;if(!o._map)return!1;if(o instanceof lt){o=null;var a=this._source._layers;for(var l in a)if(a[l]._map){o=a[l];break}if(!o)return!1;this._source=o}if(!t)if(o.getCenter)t=o.getCenter();else if(o.getLatLng)t=o.getLatLng();else if(o.getBounds)t=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")t.innerHTML=o;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),o=H(this.options.offset),a=this._getAnchor();this._zoomAnimated?me(this._container,t.add(a)):o=o.add(t).add(a);var l=this._containerBottom=-o.y,m=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=l+"px",this._container.style.left=m+"px"}},_getAnchor:function(){return[0,0]}});X.include({_initOverlay:function(t,o,a,l){var m=o;return m instanceof t||(m=new t(l).setContent(o)),a&&m.setLatLng(a),m}}),Ue.include({_initOverlay:function(t,o,a,l){var m=a;return m instanceof t?(S(m,l),m._source=this):(m=o&&!l?o:new t(l,this),m.setContent(a)),m}});var Yi=tt.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,tt.prototype.openOn.call(this,t)},onAdd:function(t){tt.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof bt||this._source.on("preclick",Nt))},onRemove:function(t){tt.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof bt||this._source.off("preclick",Nt))},getEvents:function(){var t=tt.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",o=this._container=ee("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),a=this._wrapper=ee("div",t+"-content-wrapper",o);if(this._contentNode=ee("div",t+"-content",a),Jn(o),nr(this._contentNode),U(o,"contextmenu",Nt),this._tipContainer=ee("div",t+"-tip-container",o),this._tip=ee("div",t+"-tip",this._tipContainer),this.options.closeButton){var l=this._closeButton=ee("a",t+"-close-button",o);l.setAttribute("role","button"),l.setAttribute("aria-label","Close popup"),l.href="#close",l.innerHTML='<span aria-hidden="true">&#215;</span>',U(l,"click",function(m){Se(m),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,o=t.style;o.width="",o.whiteSpace="nowrap";var a=t.offsetWidth;a=Math.min(a,this.options.maxWidth),a=Math.max(a,this.options.minWidth),o.width=a+1+"px",o.whiteSpace="",o.height="";var l=t.offsetHeight,m=this.options.maxHeight,g="leaflet-popup-scrolled";m&&l>m?(o.height=m+"px",j(t,g)):ue(t,g),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var o=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),a=this._getAnchor();me(this._container,o.add(a))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,o=parseInt(jn(this._container,"marginBottom"),10)||0,a=this._container.offsetHeight+o,l=this._containerWidth,m=new R(this._containerLeft,-a-this._containerBottom);m._add(Ot(this._container));var g=t.layerPointToContainerPoint(m),w=H(this.options.autoPanPadding),x=H(this.options.autoPanPaddingTopLeft||w),k=H(this.options.autoPanPaddingBottomRight||w),C=t.getSize(),B=0,Z=0;g.x+l+k.x>C.x&&(B=g.x+l-C.x+k.x),g.x-B-x.x<0&&(B=g.x-x.x),g.y+a+k.y>C.y&&(Z=g.y+a-C.y+k.y),g.y-Z-x.y<0&&(Z=g.y-x.y),(B||Z)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([B,Z]))}},_getAnchor:function(){return H(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Jl=function(t,o){return new Yi(t,o)};X.mergeOptions({closePopupOnClick:!0}),X.include({openPopup:function(t,o,a){return this._initOverlay(Yi,t,o,a).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),Ue.include({bindPopup:function(t,o){return this._popup=this._initOverlay(Yi,this._popup,t,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof lt||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){Ft(t);var o=t.layer||t.target;if(this._popup._source===o&&!(o instanceof bt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=o,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Ki=tt.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){tt.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){tt.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=tt.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",o=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ee("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var o,a,l=this._map,m=this._container,g=l.latLngToContainerPoint(l.getCenter()),w=l.layerPointToContainerPoint(t),x=this.options.direction,k=m.offsetWidth,C=m.offsetHeight,B=H(this.options.offset),Z=this._getAnchor();x==="top"?(o=k/2,a=C):x==="bottom"?(o=k/2,a=0):x==="center"?(o=k/2,a=C/2):x==="right"?(o=0,a=C/2):x==="left"?(o=k,a=C/2):w.x<g.x?(x="right",o=0,a=C/2):(x="left",o=k+(B.x+Z.x)*2,a=C/2),t=t.subtract(H(o,a,!0)).add(B).add(Z),ue(m,"leaflet-tooltip-right"),ue(m,"leaflet-tooltip-left"),ue(m,"leaflet-tooltip-top"),ue(m,"leaflet-tooltip-bottom"),j(m,"leaflet-tooltip-"+x),me(m,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&Re(this._container,t)},_animateZoom:function(t){var o=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(o)},_getAnchor:function(){return H(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Xl=function(t,o){return new Ki(t,o)};X.include({openTooltip:function(t,o,a){return this._initOverlay(Ki,t,o,a).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),Ue.include({bindTooltip:function(t,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ki,this._tooltip,t,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var o=t?"off":"on",a={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?a.add=this._openTooltip:(a.mouseover=this._openTooltip,a.mouseout=this.closeTooltip,a.click=this._openTooltip,this._map?this._addFocusListeners():a.add=this._addFocusListeners),this._tooltip.options.sticky&&(a.mousemove=this._moveTooltip),this[o](a),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof lt||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var o=typeof t.getElement=="function"&&t.getElement();o&&(U(o,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),U(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var o=typeof t.getElement=="function"&&t.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var o=t.latlng,a,l;this._tooltip.options.sticky&&t.originalEvent&&(a=this._map.mouseEventToContainerPoint(t.originalEvent),l=this._map.containerPointToLayerPoint(a),o=this._map.layerPointToLatLng(l)),this._tooltip.setLatLng(o)}});var Rs=un.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var o=t&&t.tagName==="DIV"?t:document.createElement("div"),a=this.options;if(a.html instanceof Element?($i(o),o.appendChild(a.html)):o.innerHTML=a.html!==!1?a.html:"",a.bgPos){var l=H(a.bgPos);o.style.backgroundPosition=-l.x+"px "+-l.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function Ql(t){return new Rs(t)}un.Default=ei;var ti=Ue.extend({options:{tileSize:256,opacity:1,updateWhenIdle:N.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){S(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),ce(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(cn(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ln(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=p(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof R?t:new R(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var o=this.getPane().children,a=-t(-1/0,1/0),l=0,m=o.length,g;l<m;l++)g=o[l].style.zIndex,o[l]!==this._container&&g&&(a=t(a,+g));isFinite(a)&&(this.options.zIndex=a+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!N.ielt9){Re(this._container,this.options.opacity);var t=+new Date,o=!1,a=!1;for(var l in this._tiles){var m=this._tiles[l];if(!(!m.current||!m.loaded)){var g=Math.min(1,(t-m.loaded)/200);Re(m.el,g),g<1?o=!0:(m.active?a=!0:this._onOpaqueTile(m),m.active=!0)}}a&&!this._noPrune&&this._pruneTiles(),o&&(W(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this))}},_onOpaqueTile:f,_initContainer:function(){this._container||(this._container=ee("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,o=this.options.maxZoom;if(t!==void 0){for(var a in this._levels)a=Number(a),this._levels[a].el.children.length||a===t?(this._levels[a].el.style.zIndex=o-Math.abs(t-a),this._onUpdateLevel(a)):(ce(this._levels[a].el),this._removeTilesAtZoom(a),this._onRemoveLevel(a),delete this._levels[a]);var l=this._levels[t],m=this._map;return l||(l=this._levels[t]={},l.el=ee("div","leaflet-tile-container leaflet-zoom-animated",this._container),l.el.style.zIndex=o,l.origin=m.project(m.unproject(m.getPixelOrigin()),t).round(),l.zoom=t,this._setZoomTransform(l,m.getCenter(),m.getZoom()),f(l.el.offsetWidth),this._onCreateLevel(l)),this._level=l,l}},_onUpdateLevel:f,_onRemoveLevel:f,_onCreateLevel:f,_pruneTiles:function(){if(this._map){var t,o,a=this._map.getZoom();if(a>this.options.maxZoom||a<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)o=this._tiles[t],o.retain=o.current;for(t in this._tiles)if(o=this._tiles[t],o.current&&!o.active){var l=o.coords;this._retainParent(l.x,l.y,l.z,l.z-5)||this._retainChildren(l.x,l.y,l.z,l.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var o in this._tiles)this._tiles[o].coords.z===t&&this._removeTile(o)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)ce(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,o,a,l){var m=Math.floor(t/2),g=Math.floor(o/2),w=a-1,x=new R(+m,+g);x.z=+w;var k=this._tileCoordsToKey(x),C=this._tiles[k];return C&&C.active?(C.retain=!0,!0):(C&&C.loaded&&(C.retain=!0),w>l?this._retainParent(m,g,w,l):!1)},_retainChildren:function(t,o,a,l){for(var m=2*t;m<2*t+2;m++)for(var g=2*o;g<2*o+2;g++){var w=new R(m,g);w.z=a+1;var x=this._tileCoordsToKey(w),k=this._tiles[x];if(k&&k.active){k.retain=!0;continue}else k&&k.loaded&&(k.retain=!0);a+1<l&&this._retainChildren(m,g,a+1,l)}},_resetView:function(t){var o=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var o=this.options;return o.minNativeZoom!==void 0&&t<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<t?o.maxNativeZoom:t},_setView:function(t,o,a,l){var m=Math.round(o);this.options.maxZoom!==void 0&&m>this.options.maxZoom||this.options.minZoom!==void 0&&m<this.options.minZoom?m=void 0:m=this._clampZoom(m);var g=this.options.updateWhenZooming&&m!==this._tileZoom;(!l||g)&&(this._tileZoom=m,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),m!==void 0&&this._update(t),a||this._pruneTiles(),this._noPrune=!!a),this._setZoomTransforms(t,o)},_setZoomTransforms:function(t,o){for(var a in this._levels)this._setZoomTransform(this._levels[a],t,o)},_setZoomTransform:function(t,o,a){var l=this._map.getZoomScale(a,t.zoom),m=t.origin.multiplyBy(l).subtract(this._map._getNewPixelOrigin(o,a)).round();N.any3d?$t(t.el,m,l):me(t.el,m)},_resetGrid:function(){var t=this._map,o=t.options.crs,a=this._tileSize=this.getTileSize(),l=this._tileZoom,m=this._map.getPixelWorldBounds(this._tileZoom);m&&(this._globalTileRange=this._pxBoundsToTileRange(m)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,o.wrapLng[0]],l).x/a.x),Math.ceil(t.project([0,o.wrapLng[1]],l).x/a.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([o.wrapLat[0],0],l).y/a.x),Math.ceil(t.project([o.wrapLat[1],0],l).y/a.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var o=this._map,a=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),l=o.getZoomScale(a,this._tileZoom),m=o.project(t,this._tileZoom).floor(),g=o.getSize().divideBy(l*2);return new ne(m.subtract(g),m.add(g))},_update:function(t){var o=this._map;if(o){var a=this._clampZoom(o.getZoom());if(t===void 0&&(t=o.getCenter()),this._tileZoom!==void 0){var l=this._getTiledPixelBounds(t),m=this._pxBoundsToTileRange(l),g=m.getCenter(),w=[],x=this.options.keepBuffer,k=new ne(m.getBottomLeft().subtract([x,-x]),m.getTopRight().add([x,-x]));if(!(isFinite(m.min.x)&&isFinite(m.min.y)&&isFinite(m.max.x)&&isFinite(m.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var C in this._tiles){var B=this._tiles[C].coords;(B.z!==this._tileZoom||!k.contains(new R(B.x,B.y)))&&(this._tiles[C].current=!1)}if(Math.abs(a-this._tileZoom)>1){this._setView(t,a);return}for(var Z=m.min.y;Z<=m.max.y;Z++)for(var K=m.min.x;K<=m.max.x;K++){var Le=new R(K,Z);if(Le.z=this._tileZoom,!!this._isValidTile(Le)){var _e=this._tiles[this._tileCoordsToKey(Le)];_e?_e.current=!0:w.push(Le)}}if(w.sort(function(Me,fn){return Me.distanceTo(g)-fn.distanceTo(g)}),w.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Ze=document.createDocumentFragment();for(K=0;K<w.length;K++)this._addTile(w[K],Ze);this._level.el.appendChild(Ze)}}}},_isValidTile:function(t){var o=this._map.options.crs;if(!o.infinite){var a=this._globalTileRange;if(!o.wrapLng&&(t.x<a.min.x||t.x>a.max.x)||!o.wrapLat&&(t.y<a.min.y||t.y>a.max.y))return!1}if(!this.options.bounds)return!0;var l=this._tileCoordsToBounds(t);return se(this.options.bounds).overlaps(l)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var o=this._map,a=this.getTileSize(),l=t.scaleBy(a),m=l.add(a),g=o.unproject(l,t.z),w=o.unproject(m,t.z);return[g,w]},_tileCoordsToBounds:function(t){var o=this._tileCoordsToNwSe(t),a=new xe(o[0],o[1]);return this.options.noWrap||(a=this._map.wrapLatLngBounds(a)),a},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var o=t.split(":"),a=new R(+o[0],+o[1]);return a.z=+o[2],a},_removeTile:function(t){var o=this._tiles[t];o&&(ce(o.el),delete this._tiles[t],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){j(t,"leaflet-tile");var o=this.getTileSize();t.style.width=o.x+"px",t.style.height=o.y+"px",t.onselectstart=f,t.onmousemove=f,N.ielt9&&this.options.opacity<1&&Re(t,this.options.opacity)},_addTile:function(t,o){var a=this._getTilePos(t),l=this._tileCoordsToKey(t),m=this.createTile(this._wrapCoords(t),d(this._tileReady,this,t));this._initTile(m),this.createTile.length<2&&Y(d(this._tileReady,this,t,null,m)),me(m,a),this._tiles[l]={el:m,coords:t,current:!0},o.appendChild(m),this.fire("tileloadstart",{tile:m,coords:t})},_tileReady:function(t,o,a){o&&this.fire("tileerror",{error:o,tile:a,coords:t});var l=this._tileCoordsToKey(t);a=this._tiles[l],a&&(a.loaded=+new Date,this._map._fadeAnimated?(Re(a.el,0),W(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this)):(a.active=!0,this._pruneTiles()),o||(j(a.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:a.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),N.ielt9||!this._map._fadeAnimated?Y(this._pruneTiles,this):setTimeout(d(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var o=new R(this._wrapX?_(t.x,this._wrapX):t.x,this._wrapY?_(t.y,this._wrapY):t.y);return o.z=t.z,o},_pxBoundsToTileRange:function(t){var o=this.getTileSize();return new ne(t.min.unscaleBy(o).floor(),t.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function ed(t){return new ti(t)}var pn=ti.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,o){this._url=t,o=S(this,o),o.detectRetina&&N.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,o){return this._url===t&&o===void 0&&(o=!0),this._url=t,o||this.redraw(),this},createTile:function(t,o){var a=document.createElement("img");return U(a,"load",d(this._tileOnLoad,this,o,a)),U(a,"error",d(this._tileOnError,this,o,a)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(a.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(a.referrerPolicy=this.options.referrerPolicy),a.alt="",a.src=this.getTileUrl(t),a},getTileUrl:function(t){var o={r:N.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var a=this._globalTileRange.max.y-t.y;this.options.tms&&(o.y=a),o["-y"]=a}return T(this._url,s(o,this.options))},_tileOnLoad:function(t,o){N.ielt9?setTimeout(d(t,this,null,o),0):t(null,o)},_tileOnError:function(t,o,a){var l=this.options.errorTileUrl;l&&o.getAttribute("src")!==l&&(o.src=l),t(a,o)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,o=this.options.maxZoom,a=this.options.zoomReverse,l=this.options.zoomOffset;return a&&(t=o-t),t+l},_getSubdomain:function(t){var o=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var t,o;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(o=this._tiles[t].el,o.onload=f,o.onerror=f,!o.complete)){o.src=$;var a=this._tiles[t].coords;ce(o),delete this._tiles[t],this.fire("tileabort",{tile:o,coords:a})}},_removeTile:function(t){var o=this._tiles[t];if(o)return o.el.setAttribute("src",$),ti.prototype._removeTile.call(this,t)},_tileReady:function(t,o,a){if(!(!this._map||a&&a.getAttribute("src")===$))return ti.prototype._tileReady.call(this,t,o,a)}});function Hs(t,o){return new pn(t,o)}var Zs=pn.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,o){this._url=t;var a=s({},this.defaultWmsParams);for(var l in o)l in this.options||(a[l]=o[l]);o=S(this,o);var m=o.detectRetina&&N.retina?2:1,g=this.getTileSize();a.width=g.x*m,a.height=g.y*m,this.wmsParams=a},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,pn.prototype.onAdd.call(this,t)},getTileUrl:function(t){var o=this._tileCoordsToNwSe(t),a=this._crs,l=be(a.project(o[0]),a.project(o[1])),m=l.min,g=l.max,w=(this._wmsVersion>=1.3&&this._crs===zs?[m.y,m.x,g.y,g.x]:[m.x,m.y,g.x,g.y]).join(","),x=pn.prototype.getTileUrl.call(this,t);return x+E(this.wmsParams,x,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+w},setParams:function(t,o){return s(this.wmsParams,t),o||this.redraw(),this}});function td(t,o){return new Zs(t,o)}pn.WMS=Zs,Hs.wms=td;var ht=Ue.extend({options:{padding:.1},initialize:function(t){S(this,t),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),j(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,o){var a=this._map.getZoomScale(o,this._zoom),l=this._map.getSize().multiplyBy(.5+this.options.padding),m=this._map.project(this._center,o),g=l.multiplyBy(-a).add(m).subtract(this._map._getNewPixelOrigin(t,o));N.any3d?$t(this._container,g,a):me(this._container,g)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,o=this._map.getSize(),a=this._map.containerPointToLayerPoint(o.multiplyBy(-t)).round();this._bounds=new ne(a,a.add(o.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),qs=ht.extend({options:{tolerance:0},getEvents:function(){var t=ht.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){ht.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");U(t,"mousemove",this._onMouseMove,this),U(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),U(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){W(this._redrawRequest),delete this._ctx,ce(this._container),oe(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var o in this._layers)t=this._layers[o],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ht.prototype._update.call(this);var t=this._bounds,o=this._container,a=t.getSize(),l=N.retina?2:1;me(o,t.min),o.width=l*a.x,o.height=l*a.y,o.style.width=a.x+"px",o.style.height=a.y+"px",N.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){ht.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[h(t)]=t;var o=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var o=t._order,a=o.next,l=o.prev;a?a.prev=l:this._drawLast=l,l?l.next=a:this._drawFirst=a,delete t._order,delete this._layers[h(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var o=t.options.dashArray.split(/[, ]+/),a=[],l,m;for(m=0;m<o.length;m++){if(l=Number(o[m]),isNaN(l))return;a.push(l)}t.options._dashArray=a}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||Y(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var o=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ne,this._redrawBounds.extend(t._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(t._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var o=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,o=this._redrawBounds;if(this._ctx.save(),o){var a=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,a.x,a.y),this._ctx.clip()}this._drawing=!0;for(var l=this._drawFirst;l;l=l.next)t=l.layer,(!o||t._pxBounds&&t._pxBounds.intersects(o))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,o){if(this._drawing){var a,l,m,g,w=t._parts,x=w.length,k=this._ctx;if(x){for(k.beginPath(),a=0;a<x;a++){for(l=0,m=w[a].length;l<m;l++)g=w[a][l],k[l?"lineTo":"moveTo"](g.x,g.y);o&&k.closePath()}this._fillStroke(k,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var o=t._point,a=this._ctx,l=Math.max(Math.round(t._radius),1),m=(Math.max(Math.round(t._radiusY),1)||l)/l;m!==1&&(a.save(),a.scale(1,m)),a.beginPath(),a.arc(o.x,o.y/m,l,0,Math.PI*2,!1),m!==1&&a.restore(),this._fillStroke(a,t)}},_fillStroke:function(t,o){var a=o.options;a.fill&&(t.globalAlpha=a.fillOpacity,t.fillStyle=a.fillColor||a.color,t.fill(a.fillRule||"evenodd")),a.stroke&&a.weight!==0&&(t.setLineDash&&t.setLineDash(o.options&&o.options._dashArray||[]),t.globalAlpha=a.opacity,t.lineWidth=a.weight,t.strokeStyle=a.color,t.lineCap=a.lineCap,t.lineJoin=a.lineJoin,t.stroke())},_onClick:function(t){for(var o=this._map.mouseEventToLayerPoint(t),a,l,m=this._drawFirst;m;m=m.next)a=m.layer,a.options.interactive&&a._containsPoint(o)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(a))&&(l=a);this._fireEvent(l?[l]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,o)}},_handleMouseOut:function(t){var o=this._hoveredLayer;o&&(ue(this._container,"leaflet-interactive"),this._fireEvent([o],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,o){if(!this._mouseHoverThrottled){for(var a,l,m=this._drawFirst;m;m=m.next)a=m.layer,a.options.interactive&&a._containsPoint(o)&&(l=a);l!==this._hoveredLayer&&(this._handleMouseOut(t),l&&(j(this._container,"leaflet-interactive"),this._fireEvent([l],t,"mouseover"),this._hoveredLayer=l)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(d(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,o,a){this._map._fireDOMEvent(o,a||o.type,t)},_bringToFront:function(t){var o=t._order;if(o){var a=o.next,l=o.prev;if(a)a.prev=l;else return;l?l.next=a:a&&(this._drawFirst=a),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(t)}},_bringToBack:function(t){var o=t._order;if(o){var a=o.next,l=o.prev;if(l)l.next=a;else return;a?a.prev=l:l&&(this._drawLast=l),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(t)}}});function Ws(t){return N.canvas?new qs(t):null}var ni=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),nd={_initContainer:function(){this._container=ee("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(ht.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var o=t._container=ni("shape");j(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",t._path=ni("path"),o.appendChild(t._path),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){var o=t._container;this._container.appendChild(o),t.options.interactive&&t.addInteractiveTarget(o)},_removePath:function(t){var o=t._container;ce(o),t.removeInteractiveTarget(o),delete this._layers[h(t)]},_updateStyle:function(t){var o=t._stroke,a=t._fill,l=t.options,m=t._container;m.stroked=!!l.stroke,m.filled=!!l.fill,l.stroke?(o||(o=t._stroke=ni("stroke")),m.appendChild(o),o.weight=l.weight+"px",o.color=l.color,o.opacity=l.opacity,l.dashArray?o.dashStyle=D(l.dashArray)?l.dashArray.join(" "):l.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=l.lineCap.replace("butt","flat"),o.joinstyle=l.lineJoin):o&&(m.removeChild(o),t._stroke=null),l.fill?(a||(a=t._fill=ni("fill")),m.appendChild(a),a.color=l.fillColor||l.color,a.opacity=l.fillOpacity):a&&(m.removeChild(a),t._fill=null)},_updateCircle:function(t){var o=t._point.round(),a=Math.round(t._radius),l=Math.round(t._radiusY||a);this._setPath(t,t._empty()?"M0 0":"AL "+o.x+","+o.y+" "+a+","+l+" 0,"+65535*360)},_setPath:function(t,o){t._path.v=o},_bringToFront:function(t){cn(t._container)},_bringToBack:function(t){ln(t._container)}},Ji=N.vml?ni:At,ii=ht.extend({_initContainer:function(){this._container=Ji("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ji("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ce(this._container),oe(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ht.prototype._update.call(this);var t=this._bounds,o=t.getSize(),a=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,a.setAttribute("width",o.x),a.setAttribute("height",o.y)),me(a,t.min),a.setAttribute("viewBox",[t.min.x,t.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(t){var o=t._path=Ji("path");t.options.className&&j(o,t.options.className),t.options.interactive&&j(o,"leaflet-interactive"),this._updateStyle(t),this._layers[h(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){ce(t._path),t.removeInteractiveTarget(t._path),delete this._layers[h(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var o=t._path,a=t.options;o&&(a.stroke?(o.setAttribute("stroke",a.color),o.setAttribute("stroke-opacity",a.opacity),o.setAttribute("stroke-width",a.weight),o.setAttribute("stroke-linecap",a.lineCap),o.setAttribute("stroke-linejoin",a.lineJoin),a.dashArray?o.setAttribute("stroke-dasharray",a.dashArray):o.removeAttribute("stroke-dasharray"),a.dashOffset?o.setAttribute("stroke-dashoffset",a.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),a.fill?(o.setAttribute("fill",a.fillColor||a.color),o.setAttribute("fill-opacity",a.fillOpacity),o.setAttribute("fill-rule",a.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(t,o){this._setPath(t,Rn(t._parts,o))},_updateCircle:function(t){var o=t._point,a=Math.max(Math.round(t._radius),1),l=Math.max(Math.round(t._radiusY),1)||a,m="a"+a+","+l+" 0 1,0 ",g=t._empty()?"M0 0":"M"+(o.x-a)+","+o.y+m+a*2+",0 "+m+-a*2+",0 ";this._setPath(t,g)},_setPath:function(t,o){t._path.setAttribute("d",o)},_bringToFront:function(t){cn(t._path)},_bringToBack:function(t){ln(t._path)}});N.vml&&ii.include(nd);function Vs(t){return N.svg||N.vml?new ii(t):null}X.include({getRenderer:function(t){var o=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var o=this._paneRenderers[t];return o===void 0&&(o=this._createRenderer({pane:t}),this._paneRenderers[t]=o),o},_createRenderer:function(t){return this.options.preferCanvas&&Ws(t)||Vs(t)}});var Us=hn.extend({initialize:function(t,o){hn.prototype.initialize.call(this,this._boundsToLatLngs(t),o)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=se(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function id(t,o){return new Us(t,o)}ii.create=Ji,ii.pointsToPath=Rn,ut.geometryToLayer=Wi,ut.coordsToLatLng=ur,ut.coordsToLatLngs=Vi,ut.latLngToCoords=hr,ut.latLngsToCoords=Ui,ut.getFeature=mn,ut.asFeature=ji,X.mergeOptions({boxZoom:!0});var js=et.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){U(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){oe(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ce(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Gn(),Go(),this._startPoint=this._map.mouseEventToContainerPoint(t),U(document,{contextmenu:Ft,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=ee("div","leaflet-zoom-box",this._container),j(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var o=new ne(this._point,this._startPoint),a=o.getSize();me(this._box,o.min),this._box.style.width=a.x+"px",this._box.style.height=a.y+"px"},_finish:function(){this._moved&&(ce(this._box),ue(this._container,"leaflet-crosshair")),Yn(),Yo(),oe(document,{contextmenu:Ft,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(d(this._resetState,this),0);var o=new xe(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});X.addInitHook("addHandler","boxZoom",js),X.mergeOptions({doubleClickZoom:!0});var Gs=et.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var o=this._map,a=o.getZoom(),l=o.options.zoomDelta,m=t.originalEvent.shiftKey?a-l:a+l;o.options.doubleClickZoom==="center"?o.setZoom(m):o.setZoomAround(t.containerPoint,m)}});X.addInitHook("addHandler","doubleClickZoom",Gs),X.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Ys=et.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new wt(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}j(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){ue(this._map._container,"leaflet-grab"),ue(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=se(this._map.options.maxBounds);this._offsetLimit=be(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var o=this._lastTime=+new Date,a=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(a),this._times.push(o),this._prunePositions(o)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,o){return t-(t-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;t.x<o.min.x&&(t.x=this._viscousLimit(t.x,o.min.x)),t.y<o.min.y&&(t.y=this._viscousLimit(t.y,o.min.y)),t.x>o.max.x&&(t.x=this._viscousLimit(t.x,o.max.x)),t.y>o.max.y&&(t.y=this._viscousLimit(t.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,o=Math.round(t/2),a=this._initialWorldOffset,l=this._draggable._newPos.x,m=(l-o+a)%t+o-a,g=(l+o+a)%t-o-a,w=Math.abs(m+a)<Math.abs(g+a)?m:g;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=w},_onDragEnd:function(t){var o=this._map,a=o.options,l=!a.inertia||t.noInertia||this._times.length<2;if(o.fire("dragend",t),l)o.fire("moveend");else{this._prunePositions(+new Date);var m=this._lastPos.subtract(this._positions[0]),g=(this._lastTime-this._times[0])/1e3,w=a.easeLinearity,x=m.multiplyBy(w/g),k=x.distanceTo([0,0]),C=Math.min(a.inertiaMaxSpeed,k),B=x.multiplyBy(C/k),Z=C/(a.inertiaDeceleration*w),K=B.multiplyBy(-Z/2).round();!K.x&&!K.y?o.fire("moveend"):(K=o._limitOffset(K,o.options.maxBounds),Y(function(){o.panBy(K,{duration:Z,easeLinearity:w,noMoveStart:!0,animate:!0})}))}}});X.addInitHook("addHandler","dragging",Ys),X.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Ks=et.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),U(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),oe(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,o=document.documentElement,a=t.scrollTop||o.scrollTop,l=t.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(l,a)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var o=this._panKeys={},a=this.keyCodes,l,m;for(l=0,m=a.left.length;l<m;l++)o[a.left[l]]=[-1*t,0];for(l=0,m=a.right.length;l<m;l++)o[a.right[l]]=[t,0];for(l=0,m=a.down.length;l<m;l++)o[a.down[l]]=[0,t];for(l=0,m=a.up.length;l<m;l++)o[a.up[l]]=[0,-1*t]},_setZoomDelta:function(t){var o=this._zoomKeys={},a=this.keyCodes,l,m;for(l=0,m=a.zoomIn.length;l<m;l++)o[a.zoomIn[l]]=t;for(l=0,m=a.zoomOut.length;l<m;l++)o[a.zoomOut[l]]=-t},_addHooks:function(){U(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){oe(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var o=t.keyCode,a=this._map,l;if(o in this._panKeys){if(!a._panAnim||!a._panAnim._inProgress)if(l=this._panKeys[o],t.shiftKey&&(l=H(l).multiplyBy(3)),a.options.maxBounds&&(l=a._limitOffset(H(l),a.options.maxBounds)),a.options.worldCopyJump){var m=a.wrapLatLng(a.unproject(a.project(a.getCenter()).add(l)));a.panTo(m)}else a.panBy(l)}else if(o in this._zoomKeys)a.setZoom(a.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&a._popup&&a._popup.options.closeOnEscapeKey)a.closePopup();else return;Ft(t)}}});X.addInitHook("addHandler","keyboard",Ks),X.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Js=et.extend({addHooks:function(){U(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){oe(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var o=bs(t),a=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var l=Math.max(a-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(d(this._performZoom,this),l),Ft(t)},_performZoom:function(){var t=this._map,o=t.getZoom(),a=this._map.options.zoomSnap||0;t._stop();var l=this._delta/(this._map.options.wheelPxPerZoomLevel*4),m=4*Math.log(2/(1+Math.exp(-Math.abs(l))))/Math.LN2,g=a?Math.ceil(m/a)*a:m,w=t._limitZoom(o+(this._delta>0?g:-g))-o;this._delta=0,this._startTime=null,w&&(t.options.scrollWheelZoom==="center"?t.setZoom(o+w):t.setZoomAround(this._lastMousePos,o+w))}});X.addInitHook("addHandler","scrollWheelZoom",Js);var od=600;X.mergeOptions({tapHold:N.touchNative&&N.safari&&N.mobile,tapTolerance:15});var Xs=et.extend({addHooks:function(){U(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){oe(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var o=t.touches[0];this._startPos=this._newPos=new R(o.clientX,o.clientY),this._holdTimeout=setTimeout(d(function(){this._cancel(),this._isTapValid()&&(U(document,"touchend",Se),U(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),od),U(document,"touchend touchcancel contextmenu",this._cancel,this),U(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){oe(document,"touchend",Se),oe(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),oe(document,"touchend touchcancel contextmenu",this._cancel,this),oe(document,"touchmove",this._onMove,this)},_onMove:function(t){var o=t.touches[0];this._newPos=new R(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,o){var a=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});a._simulated=!0,o.target.dispatchEvent(a)}});X.addInitHook("addHandler","tapHold",Xs),X.mergeOptions({touchZoom:N.touch,bounceAtZoomLimits:!0});var Qs=et.extend({addHooks:function(){j(this._map._container,"leaflet-touch-zoom"),U(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){ue(this._map._container,"leaflet-touch-zoom"),oe(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var o=this._map;if(!(!t.touches||t.touches.length!==2||o._animatingZoom||this._zooming)){var a=o.mouseEventToContainerPoint(t.touches[0]),l=o.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(a.add(l)._divideBy(2))),this._startDist=a.distanceTo(l),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),U(document,"touchmove",this._onTouchMove,this),U(document,"touchend touchcancel",this._onTouchEnd,this),Se(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var o=this._map,a=o.mouseEventToContainerPoint(t.touches[0]),l=o.mouseEventToContainerPoint(t.touches[1]),m=a.distanceTo(l)/this._startDist;if(this._zoom=o.getScaleZoom(m,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&m<1||this._zoom>o.getMaxZoom()&&m>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,m===1)return}else{var g=a._add(l)._divideBy(2)._subtract(this._centerPoint);if(m===1&&g.x===0&&g.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(g),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),W(this._animRequest);var w=d(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Y(w,this,!0),Se(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,W(this._animRequest),oe(document,"touchmove",this._onTouchMove,this),oe(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});X.addInitHook("addHandler","touchZoom",Qs),X.BoxZoom=js,X.DoubleClickZoom=Gs,X.Drag=Ys,X.Keyboard=Ks,X.ScrollWheelZoom=Js,X.TapHold=Xs,X.TouchZoom=Qs,i.Bounds=ne,i.Browser=N,i.CRS=ze,i.Canvas=qs,i.Circle=dr,i.CircleMarker=qi,i.Class=ae,i.Control=Ve,i.DivIcon=Rs,i.DivOverlay=tt,i.DomEvent=xl,i.DomUtil=wl,i.Draggable=wt,i.Evented=De,i.FeatureGroup=lt,i.GeoJSON=ut,i.GridLayer=ti,i.Handler=et,i.Icon=un,i.ImageOverlay=Gi,i.LatLng=Q,i.LatLngBounds=xe,i.Layer=Ue,i.LayerGroup=dn,i.LineUtil=Bl,i.Map=X,i.Marker=Zi,i.Mixin=Pl,i.Path=bt,i.Point=R,i.PolyUtil=Ml,i.Polygon=hn,i.Polyline=dt,i.Popup=Yi,i.PosAnimation=xs,i.Projection=$l,i.Rectangle=Us,i.Renderer=ht,i.SVG=ii,i.SVGOverlay=Fs,i.TileLayer=pn,i.Tooltip=Ki,i.Transformation=It,i.Util=re,i.VideoOverlay=Ns,i.bind=d,i.bounds=be,i.canvas=Ws,i.circle=Wl,i.circleMarker=ql,i.control=Xn,i.divIcon=Ql,i.extend=s,i.featureGroup=Rl,i.geoJSON=Os,i.geoJson=jl,i.gridLayer=ed,i.icon=Hl,i.imageOverlay=Gl,i.latLng=G,i.latLngBounds=se,i.layerGroup=Fl,i.map=Sl,i.marker=Zl,i.point=H,i.polygon=Ul,i.polyline=Vl,i.popup=Jl,i.rectangle=id,i.setOptions=S,i.stamp=h,i.svg=Vs,i.svgOverlay=Kl,i.tileLayer=Hs,i.tooltip=Xl,i.transformation=at,i.version=r,i.videoOverlay=Yl;var rd=window.L;i.noConflict=function(){return window.L=rd,this},window.L=i}))})(di,di.exports)),di.exports}var Yv=Gv();const ho=Uv(Yv);class Kv{state;map=null;routeLine=null;currentPosMarker=null;mounted=!1;animationFrameId=null;lastGpsCount=0;defaultZoom=15;followUser=!0;constructor(e){this.state=e}mount(e){if(!document.getElementById(e)){console.warn(`MapComponent: Element with ID "${e}" not found.`);return}this.map=ho.map(e);const r=this.state.gps.length>0,s=r?this.state.gps[this.state.gps.length-1].lat:0,c=r?this.state.gps[this.state.gps.length-1].lon:0,d=r?this.defaultZoom:2;this.map.setView([s,c],d),ho.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map),this.routeLine=ho.polyline([],{color:"var(--color-primary, #007bff)",weight:5,opacity:.7}).addTo(this.map),this.currentPosMarker=ho.circleMarker([s,c],{radius:8,fillColor:"var(--color-accent, #28a745)",color:"#ffffff",weight:2,opacity:1,fillOpacity:.8}),r&&this.currentPosMarker.addTo(this.map),this.mounted=!0,this.lastGpsCount=0,this.startLoop(),this.update(),setTimeout(()=>{this.map?.invalidateSize()},100)}unmount(){this.mounted=!1,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.map&&(this.map.remove(),this.map=null),this.routeLine=null,this.currentPosMarker=null}update(){if(!this.mounted||!this.map||!this.routeLine||!this.currentPosMarker)return;const e=this.state.gps;if(e.length===this.lastGpsCount)return;const i=e.map(r=>[r.lat,r.lon]);if(this.routeLine.setLatLngs(i),e.length>0){const r=e[e.length-1],s=[r.lat,r.lon];this.currentPosMarker.setLatLng(s),this.map.hasLayer(this.currentPosMarker)||this.currentPosMarker.addTo(this.map),this.followUser&&(this.lastGpsCount===0?this.map.setView(s,this.defaultZoom):this.map.panTo(s,{animate:!0}))}this.lastGpsCount=e.length}startLoop(){const e=()=>{this.mounted&&(this.update(),this.animationFrameId=requestAnimationFrame(e))};this.animationFrameId=requestAnimationFrame(e)}resize(){this.map?.invalidateSize()}}function Jv(n,e){const i="gpsMap",r="toggleMapBtn",s="dataFieldsCarousel",c=document.getElementById(r),d=document.getElementById(i),u=document.getElementById(s);if(!c||!d||!u){console.warn("Map initialization failed: Missing elements");return}const h=new Kv(n);let p=!1;c.style.display="none",c.addEventListener("click",()=>{p=!p,p?(u.style.display="none",d.style.display="block",c.classList.add("active"),c.style.background="#ccc",h.mount(i),setTimeout(()=>{h.resize()},100)):(d.style.display="none",u.style.display="block",c.classList.remove("active"),c.style.background="")}),setInterval(()=>{const _=n.gps.length>0;(e.gps?.isConnected||_)&&c.style.display==="none"&&(c.style.display="inline-block")},2e3)}function Xv(n){if(n.length<2)return 0;let e=0;const i=6371e3;for(let r=1;r<n.length;r++){const s=n[r-1],c=n[r],d=s.lat*Math.PI/180,u=c.lat*Math.PI/180,h=(c.lat-s.lat)*Math.PI/180,p=(c.lon-s.lon)*Math.PI/180,_=Math.sin(h/2)*Math.sin(h/2)+Math.cos(d)*Math.cos(u)*Math.sin(p/2)*Math.sin(p/2),f=2*Math.atan2(Math.sqrt(_),Math.sqrt(1-_));e+=i*f}return e}class Qv{measurementsState=null;timeState=null;lastLapDistanceKm=0;lastLapTimeMs=0;checkInterval=null;isActive=!1;onLapCallback=null;init(e,i){this.measurementsState=e,this.timeState=i}onLap(e){this.onLapCallback=e}start(){if(this.isActive||!this.measurementsState||!this.timeState)return;const e=ve();e.autoLap.enabled&&(this.isActive=!0,this.lastLapDistanceKm=0,this.lastLapTimeMs=0,this.checkInterval=setInterval(()=>this.checkAutoLap(),1e3),console.log(`AutoLap started: ${e.autoLap.source} mode`))}stop(){this.checkInterval&&(clearInterval(this.checkInterval),this.checkInterval=null),this.isActive=!1,this.lastLapDistanceKm=0,this.lastLapTimeMs=0}reset(){this.stop()}checkAutoLap(){if(!this.measurementsState||!this.timeState||!this.timeState.running)return;const e=ve();if(!e.autoLap.enabled){this.stop();return}e.autoLap.source==="distance"?this.checkDistanceAutoLap(e.autoLap.distanceKm):e.autoLap.source==="time"&&this.checkTimeAutoLap(e.autoLap.timeMinutes)}checkDistanceAutoLap(e){if(!this.measurementsState)return;const r=Xv(this.measurementsState.gps)/1e3,s=Math.floor(r/e),c=Math.floor(this.lastLapDistanceKm/e);s>c&&r>0&&(this.triggerAutoLap(),this.lastLapDistanceKm=r)}checkTimeAutoLap(e){if(!this.timeState||!this.timeState.startTime)return;const i=Date.now()-this.timeState.startTime,r=e*60*1e3,s=Math.floor(i/r),c=Math.floor(this.lastLapTimeMs/r);s>c&&i>0&&(this.triggerAutoLap(),this.lastLapTimeMs=i)}triggerAutoLap(){if(!this.measurementsState||!this.timeState)return;const e=this.measurementsState.laps,i=e.length>0?e[e.length-1].timestamp:this.timeState.startTime||Date.now(),r=this.measurementsState.addLap(this.timeState.startTime),s=r.timestamp,c=s-i,d=this.measurementsState.power.filter(h=>h.timestamp>=i&&h.timestamp<=s),u=d.length>0?d.reduce((h,p)=>h+p.value,0)/d.length:0;it.announceLap(r.number,c,u),console.log(`Auto-lap marked: ${r.number} at ${new Date(r.timestamp).toISOString()}`),this.onLapCallback&&this.onLapCallback(r.number)}isAutoLapActive(){return this.isActive}}const yn=new Qv;function ey({measurementsState:n,timeState:e,connectionsState:i,streamManager:r}){If(e);const s=bv({measurementsState:n});Jv(n,i);const c=document.getElementById("dataFieldsCarousel");let d=null;if(c)try{const p=vi();d=jd({measurementsState:n,connectionsState:i,timeState:e,initialProfile:p}),d.attachToCarousel(c),d.start(),console.log("[DataFields] Manager initialized with profile:",p.name),document.addEventListener("data-fields-profile-changed",_=>{const f=_;d&&f.detail?.profile&&(d.setProfile(f.detail.profile),console.log("[DataFields] Profile updated from settings"))}),c.addEventListener("screen-change",_=>{const f=_;f.detail&&p&&Kd(p.id,f.detail.screenIndex)})}catch(p){console.error("[DataFields] Failed to initialize:",p)}Zv(),Wv(),Ip(),Hv(),Mv(),Iv(r,e),Dc(),xm();const u=document.getElementById("toggleDarkMode");u&&zv(u),Pp(),ev({measurementsState:n,timeState:e});const h=new Dp(n,e,{onAutoPause:()=>Hc(e,!0),onAutoResume:()=>Zc(e,!0)});return yn.init(n,e),yn.onLap(p=>{const f=n.laps.find(v=>v.number===p);if(f){const v=f.elapsedMs?xo(f.elapsedMs):"",y=`Auto Lap ${f.number}${v?` at ${v}`:""}`;he(`🏁 ${y}`,"info"),V(y,"assertive")}}),it.init(n,e),document.addEventListener("workoutStarted",()=>{h.start(),yn.start(),it.startIntervalAnnouncements()}),document.addEventListener("workoutDiscarded",()=>{h.reset(),yn.reset(),it.reset()}),window.addEventListener("settings-changed",()=>{e.running&&(h.stop(),h.start(),yn.stop(),yn.start(),it.stopIntervalAnnouncements(),it.startIntervalAnnouncements())}),Rv(n,e).then(p=>{p&&(console.log("Workout recovered from previous session"),document.dispatchEvent(new CustomEvent("workout-recovered")))}),lv({measurementsState:n,timeState:e,zoneState:s}),uv(n,s),cv(),hv({measurementsState:n,timeState:e,zoneState:s}),s}const ty=async()=>zn.connectCadence(),ny=async()=>zn.connectHeartRate(),iy=async()=>zn.connectPower(),oy=async()=>zn.connectTreadmill(),Cr=On("BackgroundGeolocation"),ry=()=>{let n=null;return{start:async e=>{try{n=await Cr.addWatcher({backgroundMessage:"Tracking your ride.",backgroundTitle:"Bike Power Tracker",requestPermissions:!0,stale:!1,distanceFilter:10},(i,r)=>{if(r)return r.code==="NOT_AUTHORIZED"&&window.confirm(`This app needs your location, but does not have permission.

Open settings now?`)&&Cr.openSettings(),console.error(r);if(i){const s={timestamp:i.time||Date.now(),lat:i.latitude,lon:i.longitude,accuracy:i.accuracy,altitude:i.altitude,speed:i.speed,heading:i.bearing};e(s)}})}catch(i){console.error("Error starting native GPS:",i)}},stop:async()=>{n&&(await Cr.removeWatcher({id:n}),n=null)}}},sy=()=>{let n=null;return{start:async e=>{if(!("geolocation"in navigator)){console.warn("Geolocation is not supported by this browser.");return}n=navigator.geolocation.watchPosition(i=>{const r={timestamp:i.timestamp,lat:i.coords.latitude,lon:i.coords.longitude,accuracy:i.coords.accuracy,altitude:i.coords.altitude,speed:i.coords.speed,heading:i.coords.heading};e(r)},i=>{console.error("Error watching position:",i)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},stop:async()=>{n!==null&&(navigator.geolocation.clearWatch(n),n=null)}}},ay={create:()=>ke.isNativePlatform()?ry():sy()},cy=async n=>{const e=ay.create();return await e.start(n),{stop:async()=>e.stop(),deviceName:"GPS Sensor"}};function Be(n){return document.getElementById(n)}const Pr={get power(){return{display:Be("power"),connect:Be("connectPower")}},get heartrate(){return{display:Be("heartrate"),connect:Be("connectHeartrate")}},get cadence(){return{display:Be("cadence"),connect:Be("connectCadence")}},get gps(){return{display:null,connect:Be("connectGps")}},get speed(){return{display:Be("speed"),connect:null}},get distance(){return{display:Be("distance"),connect:null}},get altitude(){return{display:Be("altitude"),connect:null}},get treadmill(){return{display:Be("value-incline"),connect:Be("connectTreadmill")}},get treadmillSpeed(){return{display:Be("treadmillSpeed"),connect:null}}},Qc={power:"Power Meter",heartrate:"Heart Rate Monitor",cadence:"Cadence Sensor",speed:"Speed Sensor",distance:"Distance Sensor",altitude:"Altimeter",gps:"GPS",treadmill:"Treadmill",treadmillSpeed:"Treadmill Speed",energy:"Energy"},el={power:"⚡",heartrate:"❤️",cadence:"🚴",speed:"💨",distance:"📏",altitude:"🏔️",gps:"📍",treadmill:"🏃",treadmillSpeed:"🏃",energy:"🔥"};function ly(n,e){const i=Qc[e],r=n instanceof Error?n.message:String(n),s=n instanceof Error?n.name:"";return r.includes("User cancelled")||r.includes("cancelled the requestDevice")?{title:"Connection Cancelled",message:`${i} pairing was cancelled.`,suggestions:["Click the connect button to try again","Make sure your sensor is powered on and in range"],canRetry:!0}:r.includes("Bluetooth adapter not available")||r.includes("Web Bluetooth API is not available")||s==="NotFoundError"&&r.includes("Bluetooth")?{title:"Bluetooth Unavailable",message:"Bluetooth is not available on this device or browser.",suggestions:["Check that Bluetooth is enabled in your device settings","Try using Chrome, Edge, or another browser that supports Web Bluetooth","On macOS, ensure Bluetooth permissions are granted in System Preferences","On Windows, check that your Bluetooth adapter is working"],canRetry:!1}:r.includes("No Bluetooth devices")||r.includes("No devices found")||s==="NotFoundError"&&!r.includes("Bluetooth")?{title:"No Sensors Found",message:`No compatible ${i.toLowerCase()} was found nearby.`,suggestions:["Make sure your sensor is powered on","Wake up the sensor by spinning the pedals or moving","Bring the sensor closer to your device","Check that the sensor battery is not depleted","Ensure the sensor is not connected to another device"],canRetry:!0}:r.includes("GATT")||r.includes("Connection failed")||r.includes("connect")&&r.includes("fail")?{title:"Connection Failed",message:`Could not connect to the ${i.toLowerCase()}.`,suggestions:["Try moving closer to the sensor","Power cycle the sensor (turn off and on again)","Check that no other device is connected to this sensor","Restart Bluetooth on your device","If using a phone, try closing other Bluetooth apps"],canRetry:!0}:r.includes("SecurityError")||r.includes("permission")||s==="SecurityError"?{title:"Permission Denied",message:"Bluetooth permission was denied.",suggestions:["Check your browser settings to allow Bluetooth access",'If prompted, click "Allow" to grant Bluetooth permission',"Try refreshing the page and connecting again","On some browsers, you may need to access this site over HTTPS"],canRetry:!0}:r.includes("NetworkError")||r.includes("timeout")||s==="NetworkError"?{title:"Connection Timed Out",message:`The connection to your ${i.toLowerCase()} timed out.`,suggestions:["Make sure the sensor is in range and powered on","Try moving closer to the sensor","Power cycle the sensor and try again","Check for interference from other wireless devices"],canRetry:!0}:r.includes("Service")&&r.includes("not found")?{title:"Incompatible Sensor",message:`This device doesn't appear to be a compatible ${i.toLowerCase()}.`,suggestions:["Make sure you selected the correct sensor type","Check that your sensor supports standard Bluetooth protocols","Some sensors may require a firmware update","Consult your sensor's documentation for compatibility"],canRetry:!0}:{title:"Connection Error",message:`Failed to connect to ${i.toLowerCase()}.`,suggestions:["Make sure the sensor is powered on and nearby","Try power cycling the sensor","Restart Bluetooth on your device","Refresh the page and try again"],canRetry:!0}}function dy(n){const e=document.createElement("div");e.className="connection-error-content";const i=document.createElement("p");if(i.className="connection-error-message",i.textContent=n.message,e.appendChild(i),n.suggestions.length>0){const r=document.createElement("div");r.className="connection-error-troubleshooting";const s=document.createElement("h3");s.textContent="💡 Troubleshooting Tips",r.appendChild(s);const c=document.createElement("ul");c.setAttribute("role","list"),n.suggestions.forEach(d=>{const u=document.createElement("li");u.textContent=d,c.appendChild(u)}),r.appendChild(c),e.appendChild(r)}return e}function uy(n,e,i){return new Promise(r=>{const s=ly(n,e),c=el[e],d=dy(s);console.error(`[${e}] Connection error:`,n),V(`${s.title}. ${s.message}`,"assertive");let u=null;const h=[];h.push({text:"Dismiss",variant:"secondary",onClick:()=>{u?.(),r(!1)}}),s.canRetry&&h.push({text:"Try Again",variant:"primary",onClick:()=>{u?.(),i&&i(),r(!0)}}),u=ki({title:s.title,icon:c,content:d,buttons:h,closeOnOverlay:!0,onClose:()=>r(!1)})})}function hy(n,e){const i=Qc[n],r=el[n],s=document.createElement("div");s.className="connection-error-content";const c=document.createElement("p");c.className="connection-error-message",c.textContent=`Lost connection to your ${i.toLowerCase()} and automatic reconnection failed.`,s.appendChild(c);const d=document.createElement("div");d.className="connection-error-troubleshooting";const u=document.createElement("h3");u.textContent="💡 To reconnect:",d.appendChild(u);const h=document.createElement("ul");h.setAttribute("role","list"),["Make sure the sensor is still powered on","Move closer to the sensor",'Click "Try Again" to reconnect manually'].forEach(_=>{const f=document.createElement("li");f.textContent=_,h.appendChild(f)}),d.appendChild(h),s.appendChild(d),V(`${i} connection lost. Automatic reconnection failed.`,"assertive");let p=null;p=ki({title:"Connection Lost",icon:r,content:s,buttons:[{text:"Dismiss",variant:"secondary",onClick:()=>{p?.()}},{text:"Try Again",variant:"primary",onClick:()=>{p?.(),e?.()}}],closeOnOverlay:!0})}const my={power:"⚡",heartrate:"❤️",cadence:"🚴",speed:"💨",distance:"📏",altitude:"🏔️",gps:"📍",treadmill:"🏃",treadmillSpeed:"🏃"},mo=n=>n.charAt(0).toUpperCase()+n.slice(1),py=({connectionsState:n,measurementsState:e})=>{const i=(h,p,_)=>{const f=Pr[h]?.connect;if(!f)return;const v=mo(h),y=my[h];switch(p){case"connected":_?f.textContent=`${y} Disconnect ${v} (${_})`:f.textContent=`${y} Disconnect ${v}`;break;case"reconnecting":f.textContent=`${y} Reconnecting ${v}...`;break;case"disconnected":f.textContent=`${y} Connect ${v}`;break}},r=h=>{const p=n[h];if(p&&typeof p.disconnect=="function"){p.disconnect(),p.disconnect=null,p.isConnected=!1,i(h,"disconnected");const _=Pr[h]?.display;_&&(_.textContent="--")}},s=(h,p)=>_=>{const f=mo(h);switch(_){case"connected":i(h,"connected",p),he(`${f} sensor reconnected`,"success");break;case"reconnecting":i(h,"reconnecting");break;case"failed":n[h]&&(n[h].isConnected=!1,n[h].disconnect=null),i(h,"disconnected"),hy(h,()=>c(h));break}},c=async h=>{try{i(h,"reconnecting");let p;if(h==="gps"){const b=await cy(E=>{e.addGps(E)}),S=n[h];S&&(S.disconnect=async()=>{await b.stop()},S.isConnected=!0),i(h,"connected",b.deviceName),he(`Connected to ${mo(h)}`,"success");return}else if(h==="treadmill")p=await oy(),p.addListener(b=>{e.addTreadmillData(b)});else if(h==="power")p=await iy(),p.addListener(b=>{e.addPower(b)});else if(h==="heartrate")p=await ny(),p.addListener(b=>{e.addHeartrate(b)});else if(h==="cadence")p=await ty(),p.addListener(b=>{e.addCadence(b)});else return;const{disconnect:_,deviceName:f,onStatusChange:v}=p,y=n[h];y&&(y.disconnect=_,y.isConnected=!0),i(h,"connected",f),he(`Connected to ${mo(h)}`,"success"),v&&v(s(h,f||"Sensor"))}catch(p){i(h,"disconnected"),await uy(p,h,()=>c(h))||n[h]&&(n[h].isConnected=!1)}},d=h=>{const p=Pr[h]?.connect;if(!p)return;const _=f=>{f.stopPropagation(),n[h]?.isConnected?r(h):c(h)};p.addEventListener("click",_)};["power","heartrate","cadence","gps","treadmill"].forEach(d)};class fy{isStreaming=!1;isPaused=!1;streamName=null;streamInterval=null;measurementsState;timeState;constructor(e,i){this.measurementsState=e,this.timeState=i}async startStreaming(e){if(this.isStreaming)return this.streamName;try{const i=e||`workout-${Date.now()}`,r=await Sv(i);if(!r.success)throw new Error("Failed to create stream");return this.streamName=r.streamName,this.isStreaming=!0,this.isPaused=!1,this._startStreamingLoop(),this.streamName}catch(i){throw console.error("Failed to start streaming:",i),this.streamName=null,i}}pauseStreaming(){this.isStreaming&&(this.isPaused=!0)}resumeStreaming(){this.isStreaming&&(this.isPaused=!1)}async stopStreaming(){this.isStreaming&&(this.isStreaming=!1,this.isPaused=!1,this.streamInterval&&(clearInterval(this.streamInterval),this.streamInterval=null),this.streamName=null)}getStatus(){return{isStreaming:this.isStreaming,isPaused:this.isPaused,streamName:this.streamName}}_startStreamingLoop(){this.streamInterval=setInterval(async()=>{if(!(!this.isStreaming||this.isPaused||!this.timeState.running))try{await this._sendCurrentData()}catch(e){console.error("Error sending workout data:",e)}},1e3)}async _sendCurrentData(){if(!this.streamName)return;const e=this._getLatestValue("power"),i=this._getLatestValue("cadence"),r=this._getLatestValue("heartrate"),s=this._getLatestValue("speed"),c=this._getLatestValue("distance"),d=this._getLatestValue("altitude"),u=this._getLatestTreadmillIncline();if(e===null&&i===null&&r===null&&s===null&&c===null&&d===null&&u===null)return;const h=this.timeState.running&&this.timeState.startTime?Date.now()-this.timeState.startTime:this.timeState.endTime&&this.timeState.startTime?this.timeState.endTime-this.timeState.startTime:0;await Cv(this.streamName,{timestamp:Date.now(),elapsed:Math.floor(h/1e3).toString(),power:e,cadence:i,heartrate:r,speed:s,distance:c,altitude:d,incline:u})}_getLatestValue(e){const i=this.measurementsState[e];if(!Array.isArray(i)||i.length===0)return null;const r=i[i.length-1];return Date.now()-r.timestamp>5e3?null:r.value}_getLatestTreadmillIncline(){const e=this.measurementsState.treadmill;if(!Array.isArray(e)||e.length===0)return null;const i=e[e.length-1];return Date.now()-i.timestamp>5e3?null:i.incline}}function gy({measurementsState:n,connectionsState:e,timeState:i}){return py({connectionsState:e,measurementsState:n}),{streamManager:new fy(n,i)}}const ja=()=>{try{Mh();const{measurementsState:n,connectionsState:e,timeState:i}=Jh();Xh({measurementsState:n,connectionsState:e});const{streamManager:r}=gy({measurementsState:n,connectionsState:e,timeState:i});ey({measurementsState:n,timeState:i,connectionsState:e,streamManager:r});const s=kf();s.start(),window.router=s}catch(n){console.error("Failed to initialize app:",n)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ja,{once:!0}):ja();console.log("Bike Power Tracker initialized");export{es as W,Fc as h,yy as m,vy as w};
//# sourceMappingURL=index-DT6pmaf_.js.map
