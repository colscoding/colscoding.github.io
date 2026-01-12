import"./DataFieldComponent-mQCWtXHg.js";import"./index-DiG7OM9t.js";import"./feature-bluetooth-DIdcc21I.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";class a extends HTMLElement{static get observedAttributes(){return["layout"]}screen=null;fieldElements=new Map;settings=null;shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){this.cleanup()}attributeChangedCallback(e,s,t){s!==t&&e==="layout"&&this.screen&&(this.screen={...this.screen,layout:t},this.updateLayout())}setScreen(e){this.screen=e,this.render()}getScreen(){return this.screen}setSettings(e){this.settings=e;for(const s of this.fieldElements.values())s.setSettings(e)}updateFieldValue(e,s){const t=this.fieldElements.get(e);t&&t.setValue(s)}updateFieldValues(e){for(const[s,t]of e)this.updateFieldValue(s,t)}updateFieldByFieldId(e,s){for(const[t,i]of this.fieldElements)i.getFieldId()===e&&i.setValue(s)}getFieldElement(e){return this.fieldElements.get(e)}getAllFieldElements(){return new Map(this.fieldElements)}setSensorConnected(e,s){for(const t of this.fieldElements.values())t.getFieldDefinition()?.requiresSensor?.includes(e)&&t.setAttribute("connected",String(s))}highlightField(e,s=1e3){const t=this.fieldElements.get(e);t&&(t.setAttribute("highlight","true"),setTimeout(()=>{t.removeAttribute("highlight")},s))}render(){if(this.cleanup(),!this.screen){this.shadow.innerHTML=`
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
        `,this.setupFieldElements()}renderSlots(){return this.screen?this.screen.slots.sort((e,s)=>e.position-s.position).map(e=>this.renderSlot(e)).join(""):""}renderSlot(e){return`
            <div class="data-screen__slot data-screen__slot--${e.size}"
                 data-slot-id="${e.id}"
                 style="order: ${e.position}">
                <bpt-data-field 
                    field-id="${e.fieldId}" 
                    size="${e.size}"
                    data-slot-id="${e.id}">
                </bpt-data-field>
            </div>
        `}setupFieldElements(){this.shadow.querySelectorAll("bpt-data-field").forEach(s=>{const t=s,i=t.getAttribute("data-slot-id");i&&(this.fieldElements.set(i,t),this.settings&&t.setSettings(this.settings))})}updateLayout(){const e=this.shadow.querySelector(".data-screen");!e||!this.screen||(e.className="data-screen",e.classList.add(`data-screen--${this.screen.layout}`))}cleanup(){this.fieldElements.clear()}getStyles(){return`
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
        `}}customElements.get("bpt-data-screen")||customElements.define("bpt-data-screen",a);export{a as DataScreenComponent,a as default};
//# sourceMappingURL=DataScreenComponent-BpjjH9zO.js.map
