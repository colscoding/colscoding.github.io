import{g as l}from"./index-CmfhMaTA.js";import"./FieldPickerComponent-BN11wGYd.js";import"./feature-bluetooth-BY8rQx0J.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";function c(){return`slot-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function _(i,e="medium",t=1){return{id:c(),fieldId:i,size:e,position:t}}function h(i,e,t="medium"){const r=i.slots.length+1;return{...i,slots:[...i.slots,_(e,t,r)]}}function p(i,e){const r=i.slots.filter(o=>o.id!==e).map((o,s)=>({...o,position:s+1}));return{...i,slots:r}}function g(i,e,t){return{...i,slots:i.slots.map(r=>r.id===e?{...r,...t}:r)}}function m(i,e){const t=new Map(i.slots.map(o=>[o.id,o])),r=e.map((o,s)=>{const d=t.get(o);return d?{...d,position:s+1}:null}).filter(o=>o!==null);return{...i,slots:r}}class n extends HTMLElement{shadow;screen=null;draggedSlotId=null;fieldPicker=null;editingSlotId=null;static LAYOUTS=[{value:"auto",label:"Auto"},{value:"grid-2",label:"2 Columns"},{value:"grid-3",label:"3 Columns"},{value:"grid-4",label:"4 Columns"},{value:"list",label:"List"}];constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners()}disconnectedCallback(){this.removeEventListeners()}setScreen(e){this.screen={...e,slots:[...e.slots]},this.render()}getScreen(){return this.screen}reset(e){this.screen={...e,slots:[...e.slots]},this.render()}render(){if(!this.screen){this.shadow.innerHTML=`
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
                        ${n.LAYOUTS.map(e=>`
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
        `}renderSlot(e){const t=l(e.fieldId),r=t?.name??"Unknown Field",o=t?.icon??"❓";return`
            <div 
                class="editor__slot" 
                data-slot-id="${e.id}"
                draggable="true"
            >
                <div class="editor__slot-drag" title="Drag to reorder">⋮⋮</div>
                <span class="editor__slot-icon">${o}</span>
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

            /* Mobile Responsive Styles */
            @media (max-width: 768px) {
                :host {
                    max-width: 100%;
                }

                .editor__header {
                    flex-direction: column;
                    align-items: stretch;
                    gap: 0.75rem;
                    padding: 0.75rem;
                }

                .editor__name-group {
                    flex-direction: column;
                    align-items: stretch;
                    gap: 0.5rem;
                }

                .editor__icon {
                    font-size: 1.25rem;
                    align-self: flex-start;
                }

                .editor__name-input {
                    font-size: 1rem;
                    padding: 0.375rem;
                }

                .editor__layout-select {
                    width: 100%;
                    font-size: 0.875rem;
                    padding: 0.5rem;
                }

                .editor__slots {
                    padding: 0.75rem;
                    min-height: 150px;
                }

                .editor__slot {
                    gap: 0.5rem;
                    padding: 0.625rem;
                }

                .editor__slot-icon {
                    font-size: 1.125rem;
                }

                .editor__slot-name {
                    font-size: 0.875rem;
                }

                .editor__slot-size {
                    font-size: 0.6875rem;
                }

                .editor__slot-actions {
                    gap: 0.125rem;
                }

                .editor__slot-btn {
                    padding: 0.25rem;
                    font-size: 0.875rem;
                }

                .editor__actions {
                    padding: 0 0.75rem 0.75rem;
                }

                .editor__btn {
                    padding: 0.5rem 0.75rem;
                    font-size: 0.875rem;
                }

                .editor__footer {
                    gap: 0.5rem;
                    padding: 0.75rem;
                    flex-wrap: wrap;
                }

                .editor__footer button {
                    flex: 1;
                    min-width: 120px;
                }
            }

            @media (max-width: 480px) {
                .editor__header {
                    padding: 0.625rem;
                }

                .editor__name-input {
                    font-size: 0.9375rem;
                }

                .editor__layout-select {
                    font-size: 0.8125rem;
                    padding: 0.375rem;
                }

                .editor__slots {
                    padding: 0.625rem;
                }

                .editor__slot {
                    gap: 0.375rem;
                    padding: 0.5rem;
                }

                .editor__slot-drag {
                    font-size: 0.875rem;
                }

                .editor__slot-icon {
                    font-size: 1rem;
                }

                .editor__slot-name {
                    font-size: 0.8125rem;
                }

                .editor__slot-size {
                    font-size: 0.625rem;
                }

                .editor__btn {
                    padding: 0.5rem;
                    font-size: 0.8125rem;
                }

                .editor__footer {
                    padding: 0.625rem;
                }

                .editor__footer button {
                    min-width: 100px;
                }
            }
        `}setupEventListeners(){const e=this.shadow.querySelector(".editor");e&&(this.shadow.addEventListener("click",this.handleClick.bind(this)),this.shadow.addEventListener("input",this.handleInput.bind(this)),this.shadow.addEventListener("change",this.handleChange.bind(this)),e.addEventListener("dragstart",this.handleDragStart.bind(this)),e.addEventListener("dragover",this.handleDragOver.bind(this)),e.addEventListener("drop",this.handleDrop.bind(this)),e.addEventListener("dragend",this.handleDragEnd.bind(this)))}removeEventListeners(){}handleClick(e){const r=e.target.closest("[data-action]");if(!r)return;const o=r.dataset.action,s=r.dataset.slotId;switch(o){case"add-field":this.openFieldPicker();break;case"edit-slot":s&&this.editSlot(s);break;case"delete-slot":s&&this.deleteSlot(s);break;case"save":this.saveChanges();break;case"cancel":this.dispatchEvent(new CustomEvent("cancel"));break}}handleInput(e){const t=e.target;t.classList.contains("editor__name-input")&&this.screen&&(this.screen.name=t.value)}handleChange(e){const t=e.target;t.classList.contains("editor__layout-select")&&this.screen&&(this.screen.layout=t.value)}handleDragStart(e){const t=e.target.closest(".editor__slot");t&&(this.draggedSlotId=t.dataset.slotId??null,t.classList.add("dragging"),e.dataTransfer&&(e.dataTransfer.effectAllowed="move"))}handleDragOver(e){e.preventDefault();const t=e.target.closest(".editor__slot");!t||t.dataset.slotId===this.draggedSlotId||(this.shadow.querySelectorAll(".editor__slot").forEach(r=>{r.classList.remove("drag-over")}),t.classList.add("drag-over"))}handleDrop(e){e.preventDefault();const t=e.target.closest(".editor__slot");if(!t||!this.draggedSlotId||!this.screen)return;const r=t.dataset.slotId;if(!r||r===this.draggedSlotId)return;const o=this.screen.slots.map(a=>a.id),s=o.indexOf(this.draggedSlotId),d=o.indexOf(r);s>=0&&d>=0&&(o.splice(s,1),o.splice(d,0,this.draggedSlotId),this.screen=m(this.screen,o),this.render())}handleDragEnd(e){this.draggedSlotId=null,this.shadow.querySelectorAll(".editor__slot").forEach(t=>{t.classList.remove("dragging","drag-over")})}openFieldPicker(e){this.fieldPicker||(this.fieldPicker=document.createElement("bpt-field-picker"),this.fieldPicker.addEventListener("select",this.handleFieldSelect.bind(this)),this.fieldPicker.addEventListener("close",()=>{this.editingSlotId=null}),document.body.appendChild(this.fieldPicker)),this.editingSlotId=e??null;let t;e&&this.screen&&(t=this.screen.slots.find(o=>o.id===e)?.fieldId),this.fieldPicker.open(t)}handleFieldSelect(e){const t=e.detail;this.screen&&(this.editingSlotId?this.screen=g(this.screen,this.editingSlotId,{fieldId:t.fieldId,size:t.size}):this.screen=h(this.screen,t.fieldId,t.size),this.editingSlotId=null,this.render())}editSlot(e){this.openFieldPicker(e)}deleteSlot(e){this.screen&&(this.screen=p(this.screen,e),this.render())}saveChanges(){this.screen&&this.dispatchEvent(new CustomEvent("save",{detail:{screen:this.screen}}))}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}}customElements.get("bpt-screen-editor")||customElements.define("bpt-screen-editor",n);export{n as ScreenEditorComponent};
//# sourceMappingURL=ScreenEditorComponent-T9zXb4lc.js.map
