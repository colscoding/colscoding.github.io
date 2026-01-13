import{B as l}from"./index-CWIKcEoG.js";import{s as c}from"./shared-DoXdG5VT.js";import{e as i}from"./elementCache-Cg-Rl8c9.js";import"./feature-bluetooth-MdnGXiet.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";class d extends l{static get observedAttributes(){return["label","value","unit","icon","zone","zone-name","connected","show-avg"]}getStyles(){return`
            ${c}

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
        `}getTemplate(){const t=this.getAttribute("label")||"",n=this.getAttribute("value")||"--",o=this.getAttribute("unit")||"",e=this.getAttribute("icon")||"",r=this.getAttribute("zone-name")||"",a=this.hasAttribute("show-avg"),s=this.getAttribute("connected")!=="false";return`
            <div class="label">
                ${e?`<span class="icon" aria-hidden="true">${e}</span>`:""}
                <span>${t}</span>
            </div>
            <div class="value-container">
                <span class="value ${s?"":"disconnected"}" 
                      aria-live="polite" 
                      aria-label="${t}: ${n} ${o}">
                    ${n}${a?'<span class="avg-indicator">(3s)</span>':""}
                </span>
                ${o?`<span class="unit">${o}</span>`:""}
            </div>
            <div class="zone-badge" aria-live="polite">
                ${r?`Zone: ${r}`:""}
            </div>
        `}onAttributeChanged(t,n,o){if(t==="value"&&this.shadow.childElementCount>0){const e=i.getShadow(this,".value");if(e){if(e.firstChild?.nodeType===Node.TEXT_NODE){e.firstChild.textContent=o||"--";const r=this.getAttribute("label")||"",a=this.getAttribute("unit")||"";e.setAttribute("aria-label",`${r}: ${o} ${a}`);return}else if(!e.firstChild){e.textContent=o||"--";return}}}if(t==="zone-name"&&this.shadow.childElementCount>0){const e=i.getShadow(this,".zone-badge");if(e){e.textContent=o?`Zone: ${o}`:"";return}}t==="zone"&&this.shadow.childElementCount>0||this.render()}setValue(t){this.setAttribute("value",String(t))}setZone(t,n){t!==null?(this.setAttribute("zone",String(t)),n&&this.setAttribute("zone-name",n)):(this.removeAttribute("zone"),this.removeAttribute("zone-name"))}setConnected(t){this.setAttribute("connected",String(t))}}customElements.define("bpt-metric-display",d);export{d as MetricDisplay};
//# sourceMappingURL=MetricDisplay-Pz67aHzL.js.map
