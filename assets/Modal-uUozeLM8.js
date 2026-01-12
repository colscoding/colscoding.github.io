import{B as l}from"./index-DiG7OM9t.js";import"./feature-bluetooth-DIdcc21I.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";class c extends l{previousActiveElement=null;focusTrapHandler=null;static get observedAttributes(){return["title","icon","open","close-on-overlay"]}getStyles(){return`
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
        `}getTemplate(){const e=this.getAttribute("title")||"",n=this.getAttribute("icon")||"";return`
            <div class="overlay" part="overlay"></div>
            <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div class="header">
                    <h2 class="title" id="modal-title">
                        ${n?`<span class="icon" aria-hidden="true">${n}</span>`:""}
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
        `}setupEventListeners(){this.query(".close-btn")?.addEventListener("click",()=>this.close()),this.query(".overlay")?.addEventListener("click",()=>{this.getAttribute("close-on-overlay")!=="false"&&this.close()}),this.addEventListener("keydown",t=>{t.key==="Escape"&&this.close()}),this.addEventListener("click",t=>{const o=t.target.dataset?.action;o&&(this.emit("modal-action",{action:o}),(o==="cancel"||o==="confirm")&&this.close())})}onConnected(){this.hasAttribute("open")&&this.onOpen()}onAttributeChanged(e,n,t){e==="open"&&(t!==null?this.onOpen():this.onClose())}onOpen(){this.previousActiveElement=document.activeElement,this.setupFocusTrap(),requestAnimationFrame(()=>{this.shadow.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')?.focus()}),this.emit("modal-open")}onClose(){this.removeFocusTrap(),this.previousActiveElement?.focus(),this.emit("modal-close")}setupFocusTrap(){this.focusTrapHandler=e=>{if(e.key!=="Tab")return;const n=this.shadow.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),t=n[0],r=n[n.length-1];e.shiftKey&&document.activeElement===t?(e.preventDefault(),r?.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),t?.focus())},this.addEventListener("keydown",this.focusTrapHandler)}removeFocusTrap(){this.focusTrapHandler&&(this.removeEventListener("keydown",this.focusTrapHandler),this.focusTrapHandler=null)}open(){this.setAttribute("open","")}close(){this.removeAttribute("open")}toggle(){this.hasAttribute("open")?this.close():this.open()}static confirm(e){return new Promise(n=>{const t=document.createElement("bpt-modal");t.setAttribute("title",e.title),e.icon&&t.setAttribute("icon",e.icon);const r=document.createElement("div");typeof e.message=="string"?r.innerHTML=`<p>${e.message}</p>`:r.appendChild(e.message),t.appendChild(r);const o=document.createElement("div");o.setAttribute("slot","footer");const i=document.createElement("button");i.className="btn btn-secondary",i.textContent=e.cancelText||"Cancel",i.dataset.action="cancel";const a=document.createElement("button");a.className=`btn btn-${e.variant||"primary"}`,a.textContent=e.confirmText||"Confirm",a.dataset.action="confirm",o.appendChild(i),o.appendChild(a),t.appendChild(o),t.addEventListener("modal-action",(s=>{n(s.detail.action==="confirm"),t.remove()})),t.addEventListener("modal-close",()=>{n(!1),t.remove()}),document.body.appendChild(t),t.open()})}static alert(e,n,t){return new Promise(r=>{const o=document.createElement("bpt-modal");o.setAttribute("title",e),t&&o.setAttribute("icon",t);const i=document.createElement("p");i.textContent=n,o.appendChild(i);const a=document.createElement("div");a.setAttribute("slot","footer");const s=document.createElement("button");s.className="btn btn-primary",s.textContent="OK",s.dataset.action="confirm",a.appendChild(s),o.appendChild(a),o.addEventListener("modal-close",()=>{r(),o.remove()}),document.body.appendChild(o),o.open()})}}customElements.define("bpt-modal",c);export{c as Modal};
//# sourceMappingURL=Modal-uUozeLM8.js.map
