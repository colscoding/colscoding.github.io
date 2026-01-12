import{l as f,b as v,s as p,c as h}from"./index-DiG7OM9t.js";import{c as g,g as b}from"./screens-D6jiR1Sk.js";import"./ScreenEditorComponent-BXmTVkKS.js";import"./feature-bluetooth-DIdcc21I.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";import"./FieldPickerComponent-Dn-AMgZU.js";class m extends HTMLElement{shadow;settings=f();activeProfile;draggedScreenId=null;editingScreen=null;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.activeProfile=v()}connectedCallback(){this.render(),this.setupEventListeners()}disconnectedCallback(){this.removeEventListeners()}refresh(){this.settings=f(),this.activeProfile=v(),this.render()}render(){this.shadow.innerHTML=`
            <style>${this.getStyles()}</style>
            <div class="profile-settings">
                ${this.renderProfileSelector()}
                ${this.renderScreensList()}
                ${this.renderScreenActions()}
            </div>
            ${this.renderScreenEditorModal()}
        `,this.setupEventListeners()}renderProfileSelector(){const e=this.settings.profiles,t=this.settings.activeProfileId;return`
            <div class="profile-selector">
                <label for="profile-select">Activity Profile:</label>
                <select id="profile-select" class="profile-dropdown">
                    ${e.map(r=>`
                        <option value="${r.id}" ${r.id===t?"selected":""}>
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
                    <p>No screens configured. (Cannot render Profile Settings)</p>
                    <button class="btn-primary btn-add-screen">➕ Add Screen</button>
                </div>
            `:`
            <div class="screens-list" role="list" aria-label="Data screens">
                ${e.map((t,r)=>this.renderScreenItem(t,r)).join("")}
            </div>
        `}renderScreenItem(e,t){return`
            <div class="screen-item ${t===this.activeProfile.activeScreenIndex?"screen-item--active":""}"
                 role="listitem"
                 draggable="true"
                 data-screen-id="${e.id}"
                 data-index="${t}">
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
        `}setupEventListeners(){this.shadow.getElementById("profile-select")?.addEventListener("change",this.handleProfileChange.bind(this)),this.shadow.querySelector(".btn-add-profile")?.addEventListener("click",this.handleAddProfile.bind(this)),this.shadow.querySelectorAll(".btn-add-screen").forEach(s=>s.addEventListener("click",this.handleAddScreen.bind(this))),this.shadow.querySelector(".btn-reset-profile")?.addEventListener("click",this.handleResetProfile.bind(this)),this.shadow.querySelectorAll(".btn-edit-screen").forEach(s=>{s.addEventListener("click",this.handleEditScreen.bind(this))}),this.shadow.querySelectorAll(".btn-duplicate-screen").forEach(s=>{s.addEventListener("click",this.handleDuplicateScreen.bind(this))}),this.shadow.querySelectorAll(".btn-delete-screen").forEach(s=>{s.addEventListener("click",this.handleDeleteScreen.bind(this))}),this.shadow.querySelectorAll(".screen-item").forEach(s=>{const l=s;l.addEventListener("dragstart",o=>this.handleDragStart(o)),l.addEventListener("dragend",o=>this.handleDragEnd(o)),l.addEventListener("dragover",o=>this.handleDragOver(o)),l.addEventListener("dragleave",o=>this.handleDragLeave(o)),l.addEventListener("drop",o=>this.handleDrop(o))}),this.shadow.getElementById("closeScreenEditor")?.addEventListener("click",this.closeScreenEditor.bind(this)),this.shadow.getElementById("cancelScreenEdit")?.addEventListener("click",this.closeScreenEditor.bind(this)),this.shadow.getElementById("saveScreenEdit")?.addEventListener("click",this.handleSaveScreen.bind(this)),this.shadow.querySelector(".modal-backdrop")?.addEventListener("click",this.closeScreenEditor.bind(this))}removeEventListeners(){}handleProfileChange(e){const r=e.target.value;this.settings.activeProfileId=r,p(this.settings);const i=this.settings.profiles.find(n=>n.id===r);i&&(this.activeProfile=i,this.render(),this.dispatchProfileChanged())}handleAddProfile(){const e=prompt("Enter profile name:","My Profile");if(!e)return;const t=h.find(i=>i.activityType==="cycling")||h[0],r={id:`profile-${Date.now()}`,name:e,activityType:t.activityType,icon:t.icon,screens:JSON.parse(JSON.stringify(t.screens)),activeScreenIndex:0};this.settings.profiles.push(r),this.settings.activeProfileId=r.id,p(this.settings),this.activeProfile=r,this.render(),this.dispatchProfileChanged()}handleResetProfile(){if(!confirm("Reset all screens to defaults? Your custom screens will be lost."))return;const e=h.find(t=>t.activityType===this.activeProfile.activityType)||h[0];this.activeProfile.screens=JSON.parse(JSON.stringify(e.screens)),this.activeProfile.activeScreenIndex=0,this.saveCurrentProfile(),this.render(),this.dispatchProfileChanged()}handleAddScreen(){const e=g(`Screen ${this.activeProfile.screens.length+1}`,"📊");this.activeProfile.screens.push(e),this.saveCurrentProfile(),this.render(),this.dispatchProfileChanged(),this.openScreenEditor(e,!0)}handleEditScreen(e){const r=e.currentTarget.dataset.screenId,i=this.activeProfile.screens.find(n=>n.id===r);i&&this.openScreenEditor(i,!1)}handleDuplicateScreen(e){const r=e.currentTarget.dataset.screenId,i=this.activeProfile.screens.find(n=>n.id===r);if(i){const n={...JSON.parse(JSON.stringify(i)),id:b(),name:`${i.name} (Copy)`};this.activeProfile.screens.push(n),this.saveCurrentProfile(),this.render(),this.dispatchProfileChanged()}}handleDeleteScreen(e){const t=e.currentTarget;if(t.classList.contains("btn-disabled"))return;const r=t.dataset.screenId,i=this.activeProfile.screens.find(n=>n.id===r);if(i&&confirm(`Delete "${i.name}" screen?`)){const n=this.activeProfile.screens.findIndex(d=>d.id===r);this.activeProfile.screens.splice(n,1),this.activeProfile.activeScreenIndex>=this.activeProfile.screens.length&&(this.activeProfile.activeScreenIndex=Math.max(0,this.activeProfile.screens.length-1)),this.saveCurrentProfile(),this.render(),this.dispatchProfileChanged()}}handleDragStart(e){const t=e.currentTarget;t.classList.add("screen-item--dragging"),this.draggedScreenId=t.dataset.screenId||null,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",this.draggedScreenId||""))}handleDragEnd(e){e.currentTarget.classList.remove("screen-item--dragging"),this.draggedScreenId=null,this.shadow.querySelectorAll(".screen-item--drag-over").forEach(r=>{r.classList.remove("screen-item--drag-over")})}handleDragOver(e){e.preventDefault();const t=e.currentTarget;t.dataset.screenId!==this.draggedScreenId&&t.classList.add("screen-item--drag-over")}handleDragLeave(e){e.currentTarget.classList.remove("screen-item--drag-over")}handleDrop(e){e.preventDefault();const t=e.currentTarget;t.classList.remove("screen-item--drag-over");const r=this.draggedScreenId,i=t.dataset.screenId;if(r&&i&&r!==i){const n=this.activeProfile.screens,d=n.findIndex(c=>c.id===r),a=n.findIndex(c=>c.id===i);if(d!==-1&&a!==-1){const[c]=n.splice(d,1);n.splice(a,0,c),this.activeProfile.activeScreenIndex===d?this.activeProfile.activeScreenIndex=a:this.activeProfile.activeScreenIndex>d&&this.activeProfile.activeScreenIndex<=a?this.activeProfile.activeScreenIndex--:this.activeProfile.activeScreenIndex<d&&this.activeProfile.activeScreenIndex>=a&&this.activeProfile.activeScreenIndex++,this.saveCurrentProfile(),this.render(),this.dispatchProfileChanged()}}}openScreenEditor(e,t){this.editingScreen=e;const r=this.shadow.getElementById("screenEditorModal"),i=this.shadow.getElementById("screenEditorTitle"),n=this.shadow.getElementById("screenEditor");r&&i&&n&&(i.textContent=t?"New Screen":`Edit: ${e.name}`,n.setScreen(e),r.style.display="block")}closeScreenEditor(){const e=this.shadow.getElementById("screenEditorModal");e&&(e.style.display="none"),this.editingScreen=null}handleSaveScreen(){const t=this.shadow.getElementById("screenEditor")?.getScreen();if(t&&this.editingScreen){const r=this.activeProfile.screens.findIndex(i=>i.id===this.editingScreen.id);if(r!==-1)this.activeProfile.screens[r]=t;else{const i=this.activeProfile.screens.findIndex(n=>n.id===t.id);i!==-1&&(this.activeProfile.screens[i]=t)}this.saveCurrentProfile(),this.closeScreenEditor(),this.render(),this.dispatchProfileChanged()}}saveCurrentProfile(){const e=this.settings.profiles.findIndex(t=>t.id===this.activeProfile.id);e!==-1&&(this.settings.profiles[e]=this.activeProfile,p(this.settings))}dispatchProfileChanged(){const e=new CustomEvent("profile-changed",{detail:{profile:this.activeProfile},bubbles:!0,composed:!0});this.dispatchEvent(e),document.dispatchEvent(new CustomEvent("data-fields-profile-changed",{detail:{profile:this.activeProfile}}))}}customElements.get("bpt-profile-settings")||customElements.define("bpt-profile-settings",m);export{m as ProfileSettingsComponent};
//# sourceMappingURL=ProfileSettingsComponent-D29voiC9.js.map
