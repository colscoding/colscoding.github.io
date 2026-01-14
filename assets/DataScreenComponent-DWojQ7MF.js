import"./DataFieldComponent-C-CAvKGs.js";import"./index-CmfhMaTA.js";import"./feature-bluetooth-BY8rQx0J.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";class i extends HTMLElement{static get observedAttributes(){return["layout"]}screen=null;fieldElements=new Map;settings=null;shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){this.cleanup()}attributeChangedCallback(e,t,s){t!==s&&e==="layout"&&this.screen&&(this.screen={...this.screen,layout:s},this.updateLayout())}setScreen(e){this.screen=e,this.render()}getScreen(){return this.screen}setSettings(e){this.settings=e;for(const t of this.fieldElements.values())t.setSettings(e)}updateFieldValue(e,t){const s=this.fieldElements.get(e);s&&s.setValue(t)}updateFieldValues(e){for(const[t,s]of e)this.updateFieldValue(t,s)}updateFieldByFieldId(e,t){for(const[s,a]of this.fieldElements)a.getFieldId()===e&&a.setValue(t)}getFieldElement(e){return this.fieldElements.get(e)}getAllFieldElements(){return new Map(this.fieldElements)}setSensorConnected(e,t){for(const s of this.fieldElements.values())s.getFieldDefinition()?.requiresSensor?.includes(e)&&s.setAttribute("connected",String(t))}highlightField(e,t=1e3){const s=this.fieldElements.get(e);s&&(s.setAttribute("highlight","true"),setTimeout(()=>{s.removeAttribute("highlight")},t))}render(){if(this.cleanup(),!this.screen){this.shadow.innerHTML=`
                <style>${this.getStyles()}</style>
                <div class="data-screen data-screen--empty">
                    <p>No screen configured</p>
                </div>
            `;return}const e=this.screen.style||"default",t=e!=="default"?` data-screen--style-${e}`:"";this.shadow.innerHTML=`
            <style>${this.getStyles()}</style>
            <div class="data-screen data-screen--${this.screen.layout}${t}" 
                 data-slot-count="${this.screen.slots.length}">
                ${this.renderSlots()}
            </div>
        `,this.setupFieldElements()}renderSlots(){return this.screen?this.screen.slots.sort((e,t)=>e.position-t.position).map(e=>this.renderSlot(e)).join(""):""}renderSlot(e){return`
            <div class="data-screen__slot data-screen__slot--${e.size}"
                 data-slot-id="${e.id}"
                 style="order: ${e.position}">
                <bpt-data-field 
                    field-id="${e.fieldId}" 
                    size="${e.size}"
                    data-slot-id="${e.id}">
                </bpt-data-field>
            </div>
        `}setupFieldElements(){this.shadow.querySelectorAll("bpt-data-field").forEach(t=>{const s=t,a=s.getAttribute("data-slot-id");a&&(this.fieldElements.set(a,s),this.settings&&s.setSettings(this.settings))})}updateLayout(){const e=this.shadow.querySelector(".data-screen");!e||!this.screen||(e.className="data-screen",e.classList.add(`data-screen--${this.screen.layout}`))}cleanup(){this.fieldElements.clear()}getStyles(){return`
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

            /* ================================================================
             * Style Variants
             * ================================================================ */

            /* Style: Compact - Maximum data density */
            .data-screen--style-compact {
                --field-padding: 8px;
                --field-radius: 4px;
                --screen-gap: 4px;
                --screen-padding: 4px;
            }

            /* Style: Spacious - Maximum readability */
            .data-screen--style-spacious {
                --field-padding: 24px;
                --field-radius: 12px;
                --screen-gap: 16px;
                --screen-padding: 16px;
            }

            /* Style: Minimal - Clean, distraction-free */
            .data-screen--style-minimal {
                --field-padding: 12px;
                --field-radius: 0px;
                --field-bg: transparent;
                --screen-gap: 8px;
                --screen-padding: 8px;
            }

            /* Style: Sport - High contrast for outdoor visibility */
            .data-screen--style-sport {
                --field-padding: 20px;
                --field-radius: 8px;
                --field-bg: rgba(0, 0, 0, 0.9);
                --screen-gap: 12px;
                --screen-padding: 12px;
            }

            /* Style: Elegant - Premium aesthetic */
            .data-screen--style-elegant {
                --field-padding: 20px;
                --field-radius: 16px;
                --screen-gap: 10px;
                --screen-padding: 12px;
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

            .data-screen__slot--full,
            .data-screen__slot--xlarge {
                grid-column: span 2;
                grid-row: span 2;
            }

            .data-screen__slot--xxlarge {
                grid-column: span 4;
                grid-row: span 2;
            }

            .data-screen__slot--jumbo {
                grid-column: span 4;
                grid-row: span 3;
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
        `}}customElements.get("bpt-data-screen")||customElements.define("bpt-data-screen",i);export{i as DataScreenComponent,i as default};
//# sourceMappingURL=DataScreenComponent-DWojQ7MF.js.map
