import{g as o,d as p,e as d,f as h}from"./index-B84kQ3Pu.js";import"./feature-bluetooth-WlFmxkI9.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";class s extends HTMLElement{shadow;isOpen=!1;selectedCategory="all";searchQuery="";selectedFieldId=null;selectedSize="medium";static CATEGORY_ICONS={all:"📊",power:"⚡",heartrate:"❤️",cadence:"🔄",speed:"🚴",distance:"📍",elevation:"⛰️",time:"⏱️",laps:"🏁",energy:"🔥",environment:"🌡️",device:"🔋",charts:"📈",map:"🗺️"};static CATEGORY_NAMES={all:"All Fields",power:"Power",heartrate:"Heart Rate",cadence:"Cadence",speed:"Speed & Pace",distance:"Distance",elevation:"Elevation",time:"Time",laps:"Laps",energy:"Energy",environment:"Environment",device:"Device",charts:"Charts",map:"Map"};constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners()}disconnectedCallback(){this.removeEventListeners()}open(e){if(this.isOpen=!0,this.selectedFieldId=e??null,e){const r=o(e);r&&(this.selectedCategory=r.category,this.selectedSize=r.defaultSize)}this.render(),this.setAttribute("open",""),requestAnimationFrame(()=>{this.shadow.querySelector(".picker__search")?.focus()})}close(){this.isOpen=!1,this.removeAttribute("open"),this.render(),this.dispatchEvent(new CustomEvent("close"))}getIsOpen(){return this.isOpen}render(){if(!this.isOpen){this.shadow.innerHTML=`<style>${this.getStyles()}</style>`;return}const e=this.getFilteredFields(),r=this.getAvailableCategories();this.shadow.innerHTML=`
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
                        ${r.map(t=>`
                            <button 
                                class="picker__category ${t===this.selectedCategory?"picker__category--active":""}"
                                data-category="${t}"
                            >
                                <span class="picker__category-icon">${s.CATEGORY_ICONS[t]}</span>
                                <span class="picker__category-name">${s.CATEGORY_NAMES[t]}</span>
                            </button>
                        `).join("")}
                    </div>
                    
                    <div class="picker__fields">
                        ${e.length===0?'<p class="picker__empty">No fields found</p>':e.map(t=>this.renderFieldOption(t)).join("")}
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
        `}renderSizeSelector(){const e=o(this.selectedFieldId);return e?`
            <div class="picker__size-selector">
                <label class="picker__size-label">Field Size:</label>
                <div class="picker__sizes">
                    ${e.supportedSizes.map(t=>`
                        <button 
                            class="picker__size ${t===this.selectedSize?"picker__size--active":""}"
                            data-size="${t}"
                        >
                            ${this.getSizeLabel(t)}
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
        `}setupEventListeners(){this.shadow.addEventListener("click",this.handleClick.bind(this)),this.shadow.addEventListener("input",this.handleInput.bind(this))}removeEventListeners(){}handleClick(e){const r=e.target,t=r.closest("[data-action]")?.getAttribute("data-action");if(t==="close"){this.close();return}if(t==="confirm"){this.confirmSelection();return}const i=r.closest("[data-category]");if(i){this.selectedCategory=i.dataset.category,this.render();return}const a=r.closest("[data-field-id]");if(a){const l=a.dataset.fieldId;this.selectedFieldId=l;const n=o(l);n&&(this.selectedSize=n.defaultSize),this.render();return}const c=r.closest("[data-size]");if(c){this.selectedSize=c.dataset.size,this.render();return}}handleInput(e){const r=e.target;r.classList.contains("picker__search")&&(this.searchQuery=r.value,this.render())}confirmSelection(){if(!this.selectedFieldId)return;const e=o(this.selectedFieldId);if(!e)return;const r=new CustomEvent("select",{detail:{fieldId:this.selectedFieldId,field:e,size:this.selectedSize}});this.dispatchEvent(r),this.close()}getFilteredFields(){let e;if(this.searchQuery.trim())e=p(this.searchQuery);else if(this.selectedCategory==="all"){e=[];const r=d();for(const[t,i]of r)e.push(...i)}else e=h(this.selectedCategory);return e}getAvailableCategories(){const e=d(),r=["all"];for(const t of e.keys())r.push(t);return r}escapeHtml(e){const r=document.createElement("div");return r.textContent=e,r.innerHTML}}customElements.get("bpt-field-picker")||customElements.define("bpt-field-picker",s);export{s as FieldPickerComponent};
//# sourceMappingURL=FieldPickerComponent-d7Wn2bpv.js.map
