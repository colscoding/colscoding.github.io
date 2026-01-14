import{S as m,e as c}from"./index-CmfhMaTA.js";import"./feature-bluetooth-BY8rQx0J.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";class v extends HTMLElement{screen=null;isOpen=!1;onSaveCallback=null;shadowRoot;constructor(){super(),this.shadowRoot=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}open(t,e){this.screen=JSON.parse(JSON.stringify(t)),this.onSaveCallback=e,this.isOpen=!0,this.render(),this.attachEventListeners()}close(){this.isOpen=!1,this.screen=null,this.onSaveCallback=null,this.render()}render(){if(!this.isOpen||!this.screen){this.shadowRoot.innerHTML="";return}const t=this.screen.style??"default";this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                }

                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    padding: 1rem;
                }

                .modal {
                    background: var(--card-bg, white);
                    border-radius: 12px;
                    width: 100%;
                    max-width: 800px;
                    max-height: 90vh;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                }

                .modal-header {
                    padding: 1.5rem;
                    border-bottom: 1px solid var(--border-color, #ccc);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .modal-header h2 {
                    margin: 0;
                    font-size: 1.5rem;
                }

                .close-btn {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.25rem 0.5rem;
                    color: var(--text-color, #333);
                }

                .modal-body {
                    padding: 1.5rem;
                    overflow-y: auto;
                    flex: 1;
                }

                .modal-footer {
                    padding: 1rem 1.5rem;
                    border-top: 1px solid var(--border-color, #ccc);
                    display: flex;
                    gap: 1rem;
                    justify-content: flex-end;
                }

                .section {
                    margin-bottom: 2rem;
                }

                .section h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.1rem;
                    color: var(--text-color, #333);
                }

                .form-group {
                    margin-bottom: 1rem;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                    color: var(--text-muted, #666);
                }

                .form-group input,
                .form-group select {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid var(--border-color, #ccc);
                    border-radius: 6px;
                    font-size: 1rem;
                    box-sizing: border-box;
                }

                .form-group input:focus,
                .form-group select:focus {
                    outline: none;
                    border-color: var(--primary-color, #007bff);
                }

                .icon-picker {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
                    gap: 0.5rem;
                    max-height: 150px;
                    overflow-y: auto;
                    padding: 0.5rem;
                    border: 1px solid var(--border-color, #ccc);
                    border-radius: 6px;
                }

                .icon-option {
                    padding: 0.75rem;
                    border: 2px solid transparent;
                    border-radius: 6px;
                    cursor: pointer;
                    text-align: center;
                    font-size: 1.5rem;
                    transition: all 0.2s;
                }

                .icon-option:hover {
                    background: var(--hover-bg, #f0f0f0);
                }

                .icon-option.selected {
                    border-color: var(--primary-color, #007bff);
                    background: var(--primary-light, #e3f2fd);
                }

                .fields-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    max-height: 300px;
                    overflow-y: auto;
                }

                .field-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 0.75rem;
                    background: var(--card-bg, #f8f9fa);
                    border: 1px solid var(--border-color, #ccc);
                    border-radius: 6px;
                }

                .field-item-info {
                    flex: 1;
                }

                .field-item-name {
                    font-weight: 500;
                    margin-bottom: 0.25rem;
                }

                .field-item-id {
                    font-size: 0.875rem;
                    color: var(--text-muted, #666);
                }

                .field-item select {
                    padding: 0.5rem;
                    border: 1px solid var(--border-color, #ccc);
                    border-radius: 4px;
                }

                .field-actions {
                    display: flex;
                    gap: 0.5rem;
                }

                .btn-icon {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                    font-size: 1.25rem;
                    border-radius: 4px;
                }

                .btn-icon:hover {
                    background: var(--hover-bg, #f0f0f0);
                }

                .add-field-section {
                    margin-top: 1rem;
                    padding: 1rem;
                    border: 2px dashed var(--border-color, #ccc);
                    border-radius: 6px;
                }

                .add-field-section h4 {
                    margin: 0 0 1rem 0;
                    font-size: 1rem;
                }

                .available-fields {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 0.5rem;
                    max-height: 200px;
                    overflow-y: auto;
                }

                .available-field {
                    padding: 0.75rem;
                    background: var(--card-bg, white);
                    border: 1px solid var(--border-color, #ccc);
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .available-field:hover {
                    background: var(--primary-light, #e3f2fd);
                    border-color: var(--primary-color, #007bff);
                }

                .available-field.disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .available-field-name {
                    font-weight: 500;
                    margin-bottom: 0.25rem;
                }

                .available-field-category {
                    font-size: 0.875rem;
                    color: var(--text-muted, #666);
                }

                button {
                    padding: 0.75rem 1.5rem;
                    border-radius: 6px;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 500;
                    transition: all 0.2s;
                }

                .btn-primary {
                    background: var(--primary-color, #007bff);
                    color: white;
                }

                .btn-primary:hover {
                    background: var(--primary-hover, #0056b3);
                }

                .btn-secondary {
                    background: var(--secondary-bg, #6c757d);
                    color: white;
                }

                .btn-secondary:hover {
                    background: var(--secondary-hover, #5a6268);
                }

                .empty-state {
                    text-align: center;
                    padding: 2rem;
                    color: var(--text-muted, #666);
                }

                @media (max-width: 768px) {
                    .modal {
                        max-width: 100%;
                        max-height: 100vh;
                        border-radius: 0;
                    }

                    .icon-picker {
                        grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
                    }

                    .available-fields {
                        grid-template-columns: 1fr;
                    }
                }
            </style>

            <div class="modal-overlay">
                <div class="modal">
                    <div class="modal-header">
                        <h2>📊 Edit Screen</h2>
                        <button class="close-btn" id="closeBtn" aria-label="Close">×</button>
                    </div>

                    <div class="modal-body">
                        <!-- Basic Info Section -->
                        <div class="section">
                            <h3>Basic Information</h3>
                            
                            <div class="form-group">
                                <label for="screenName">Screen Name</label>
                                <input 
                                    type="text" 
                                    id="screenName" 
                                    value="${this.screen.name}"
                                    placeholder="e.g., Power Focus"
                                />
                            </div>

                            <div class="form-group">
                                <label>Screen Icon</label>
                                <div class="icon-picker">
                                    ${this.renderIconPicker()}
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="screenLayout">Layout Mode</label>
                                <select id="screenLayout">
                                    <option value="auto" ${this.screen.layout==="auto"?"selected":""}>
                                        Auto (fits field count)
                                    </option>
                                    <option value="grid-2" ${this.screen.layout==="grid-2"?"selected":""}>
                                        Grid - 2 Columns
                                    </option>
                                    <option value="grid-3" ${this.screen.layout==="grid-3"?"selected":""}>
                                        Grid - 3 Columns
                                    </option>
                                    <option value="grid-4" ${this.screen.layout==="grid-4"?"selected":""}>
                                        Grid - 4 Columns
                                    </option>
                                    <option value="list" ${this.screen.layout==="list"?"selected":""}>
                                        List (1 Column)
                                    </option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="screenStyle">Visual Style</label>
                                <select id="screenStyle">
                                    ${Object.values(m).map(e=>`
                                        <option value="${e.id}" ${t===e.id?"selected":""}>
                                            ${e.icon} ${e.name} - ${e.description}
                                        </option>
                                    `).join("")}
                                </select>
                            </div>
                        </div>

                        <!-- Data Fields Section -->
                        <div class="section">
                            <h3>Data Fields (${this.screen.slots.length})</h3>
                            
                            ${this.screen.slots.length===0?'<div class="empty-state">No fields added yet. Add fields from below.</div>':`<div class="fields-list">${this.renderFieldsList()}</div>`}

                            <div class="add-field-section">
                                <h4>➕ Add Data Field</h4>
                                <div class="available-fields">
                                    ${this.renderAvailableFields()}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button class="btn-secondary" id="cancelBtn">Cancel</button>
                        <button class="btn-primary" id="saveBtn">Save Changes</button>
                    </div>
                </div>
            </div>
        `}renderIconPicker(){return["📊","⚡","❤️","🚴","🏃","⛰️","🔥","💨","📈","🎯","⏱️","🏁"].map(e=>`
            <div class="icon-option ${this.screen?.icon===e?"selected":""}" data-icon="${e}">
                ${e}
            </div>
        `).join("")}renderFieldsList(){return this.screen?this.screen.slots.map((t,e)=>{const o=c().find(a=>a.id===t.fieldId);return o?`
                <div class="field-item" data-slot-id="${t.id}">
                    <div class="field-item-info">
                        <div class="field-item-name">${o.name}</div>
                        <div class="field-item-id">${o.id}</div>
                    </div>
                    
                    <select class="size-select" data-slot-id="${t.id}">
                        <option value="small" ${t.size==="small"?"selected":""}>Small</option>
                        <option value="medium" ${t.size==="medium"?"selected":""}>Medium</option>
                        <option value="large" ${t.size==="large"?"selected":""}>Large</option>
                        <option value="jumbo" ${t.size==="jumbo"?"selected":""}>Jumbo</option>
                    </select>

                    <div class="field-actions">
                        <button class="btn-icon move-up" data-index="${e}" ${e===0?"disabled":""}>
                            ↑
                        </button>
                        <button class="btn-icon move-down" data-index="${e}" ${e===this.screen.slots.length-1?"disabled":""}>
                            ↓
                        </button>
                        <button class="btn-icon remove-field" data-slot-id="${t.id}">
                            🗑️
                        </button>
                    </div>
                </div>
            `:""}).join(""):""}renderAvailableFields(){if(!this.screen)return"";const t=new Set(this.screen.slots.map(e=>e.fieldId));return c().map(e=>{const o=t.has(e.id);return`
                <div 
                    class="available-field ${o?"disabled":""}" 
                    data-field-id="${e.id}"
                    ${o?"":'role="button" tabindex="0"'}
                >
                    <div class="available-field-name">${e.name}</div>
                    <div class="available-field-category">${e.category}</div>
                </div>
            `}).join("")}attachEventListeners(){this.shadowRoot.getElementById("closeBtn")?.addEventListener("click",()=>this.close()),this.shadowRoot.getElementById("cancelBtn")?.addEventListener("click",()=>this.close()),this.shadowRoot.getElementById("saveBtn")?.addEventListener("click",()=>this.handleSave()),this.shadowRoot.getElementById("screenName")?.addEventListener("input",i=>{this.screen&&(this.screen.name=i.target.value)}),this.shadowRoot.getElementById("screenLayout")?.addEventListener("change",i=>{this.screen&&(this.screen.layout=i.target.value)}),this.shadowRoot.getElementById("screenStyle")?.addEventListener("change",i=>{this.screen&&(this.screen.style=i.target.value)}),this.shadowRoot.querySelectorAll(".icon-option").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.icon;r&&this.screen&&(this.screen.icon=r,this.render(),this.attachEventListeners())})}),this.shadowRoot.querySelectorAll(".size-select").forEach(i=>{i.addEventListener("change",r=>{const s=r.target.dataset.slotId,h=r.target.value;this.handleSizeChange(s,h)})}),this.shadowRoot.querySelectorAll(".move-up").forEach(i=>{i.addEventListener("click",r=>{const s=parseInt(r.target.dataset.index||"0",10);this.handleMoveField(s,s-1)})}),this.shadowRoot.querySelectorAll(".move-down").forEach(i=>{i.addEventListener("click",r=>{const s=parseInt(r.target.dataset.index||"0",10);this.handleMoveField(s,s+1)})}),this.shadowRoot.querySelectorAll(".remove-field").forEach(i=>{i.addEventListener("click",r=>{const s=r.target.dataset.slotId;this.handleRemoveField(s)})}),this.shadowRoot.querySelectorAll(".available-field:not(.disabled)").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.fieldId;r&&this.handleAddField(r)})});const l=this.shadowRoot.querySelector(".modal-overlay");l?.addEventListener("click",i=>{i.target===l&&this.close()})}handleSizeChange(t,e){if(!this.screen)return;const o=this.screen.slots.find(a=>a.id===t);o&&(o.size=e)}handleMoveField(t,e){if(!this.screen||e<0||e>=this.screen.slots.length)return;const o=this.screen.slots,[a]=o.splice(t,1);o.splice(e,0,a),o.forEach((n,d)=>{n.position=d+1}),this.render(),this.attachEventListeners()}handleRemoveField(t){this.screen&&(this.screen.slots=this.screen.slots.filter(e=>e.id!==t),this.screen.slots.forEach((e,o)=>{e.position=o+1}),this.render(),this.attachEventListeners())}handleAddField(t){if(!this.screen||this.screen.slots.some(o=>o.fieldId===t))return;const e={id:`slot-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,fieldId:t,size:"medium",position:this.screen.slots.length+1};this.screen.slots.push(e),this.render(),this.attachEventListeners()}handleSave(){if(!(!this.screen||!this.onSaveCallback)){if(!this.screen.name.trim()){alert("Please enter a screen name");return}this.onSaveCallback(this.screen),this.close()}}}customElements.define("bpt-screen-editor-modal",v);export{v as ScreenEditorModal};
//# sourceMappingURL=ScreenEditorModal-DpK4o2ud.js.map
