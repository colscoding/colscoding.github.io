const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ScreenEditorModal-DpK4o2ud.js","assets/index-CmfhMaTA.js","assets/feature-bluetooth-BY8rQx0J.js","assets/vendor-core-Dob3nYDb.js","assets/feature-export-7zlEGvkQ.js","assets/vendor-leaflet-3-yx3GaH.js","assets/index-BmzgHFUM.css"])))=>i.map(i=>d[i]);
import{g as o,_ as c,s as a}from"./feature-bluetooth-BY8rQx0J.js";import{l,f as d,h as u}from"./index-CmfhMaTA.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";function r(s){return[{name:"Active Recovery",min:0,max:Math.round(s*.55),color:"#808080"},{name:"Endurance",min:Math.round(s*.55),max:Math.round(s*.75),color:"#2196f3"},{name:"Tempo",min:Math.round(s*.75),max:Math.round(s*.9),color:"#4caf50"},{name:"Threshold",min:Math.round(s*.9),max:Math.round(s*1.05),color:"#ffeb3b"},{name:"VO2max",min:Math.round(s*1.05),max:Math.round(s*1.2),color:"#ff9800"},{name:"Anaerobic",min:Math.round(s*1.2),max:Math.round(s*1.5),color:"#f44336"},{name:"Neuromuscular",min:Math.round(s*1.5),max:9999,color:"#9c27b0"}]}function h(s){return[{name:"Recovery",min:0,max:Math.round(s*.6),color:"#808080"},{name:"Endurance",min:Math.round(s*.6),max:Math.round(s*.8),color:"#2196f3"},{name:"Tempo",min:Math.round(s*.8),max:Math.round(s*.95),color:"#4caf50"},{name:"Threshold",min:Math.round(s*.95),max:Math.round(s*1.05),color:"#ff9800"},{name:"VO2max",min:Math.round(s*1.05),max:9999,color:"#f44336"}]}function v(s){return[{name:"Endurance",min:0,max:Math.round(s*.75),color:"#2196f3"},{name:"Threshold",min:Math.round(s*.75),max:Math.round(s*1.05),color:"#ff9800"},{name:"High Intensity",min:Math.round(s*1.05),max:9999,color:"#f44336"}]}function p(s,t){switch(t){case"3":return v(s);case"5":return h(s);case"7":return r(s);default:return r(s)}}class g extends HTMLElement{activityType="cycling";screensConfig=null;screenEditor=null;shadowRoot;boundActivityChangeHandler=null;activityFtp=200;activityPowerZoneModel="7";activityAutoPause={enabled:!1,source:"speed",threshold:3,delay:3};activityAutoLap={enabled:!1,source:"distance",distanceKm:1,timeMinutes:5};boundClickHandler=null;boundInputHandler=null;boundChangeHandler=null;constructor(){super(),this.shadowRoot=this.attachShadow({mode:"open"})}connectedCallback(){const t=o();this.activityType=t.sportType||"cycling",this.screensConfig=l(this.activityType),this.loadActivitySettings(),customElements.get("bpt-screen-editor-modal")||c(()=>import("./ScreenEditorModal-DpK4o2ud.js"),__vite__mapDeps([0,1,2,3,4,5,6])).catch(e=>{console.error("[ActivitySettings] Failed to load screen editor:",e)}),this.boundActivityChangeHandler=this.handleActivityChange.bind(this),document.addEventListener("data-fields-activity-changed",this.boundActivityChangeHandler),this.boundClickHandler=this.handleClick.bind(this),this.boundInputHandler=this.handleInput.bind(this),this.boundChangeHandler=this.handleChange.bind(this),this.render(),this.attachEventListeners()}disconnectedCallback(){this.boundActivityChangeHandler&&(document.removeEventListener("data-fields-activity-changed",this.boundActivityChangeHandler),this.boundActivityChangeHandler=null),this.boundClickHandler&&this.shadowRoot.removeEventListener("click",this.boundClickHandler),this.boundInputHandler&&this.shadowRoot.removeEventListener("input",this.boundInputHandler),this.boundChangeHandler&&this.shadowRoot.removeEventListener("change",this.boundChangeHandler),this.screenEditor&&this.screenEditor.parentElement&&(this.screenEditor.remove(),this.screenEditor=null)}render(){if(!this.screensConfig)return;const t=this.screensConfig.screens||[],e=this.activityType==="cycling"||this.activityType==="indoor";this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    padding: 1rem;
                }

                .activity-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .activity-header h3 {
                    margin: 0;
                    font-size: 1.25rem;
                }

                .settings-section {
                    border: 1px solid var(--border-color, #ccc);
                    border-radius: 8px;
                    padding: 1rem;
                    margin-bottom: 1rem;
                    background: var(--card-bg, white);
                }

                .settings-section h4 {
                    margin: 0 0 1rem 0;
                    font-size: 1.1rem;
                    color: var(--text-primary, #333);
                }

                .setting-row {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .setting-row:last-child {
                    margin-bottom: 0;
                }

                .setting-label {
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: var(--text-primary, #333);
                }

                .setting-input-row {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .setting-input {
                    padding: 0.5rem;
                    border: 1px solid var(--border-color, #ccc);
                    border-radius: 4px;
                    font-size: 0.95rem;
                    flex: 1;
                    max-width: 200px;
                }

                .setting-unit {
                    font-size: 0.875rem;
                    color: var(--text-muted, #666);
                    white-space: nowrap;
                }

                .setting-description {
                    font-size: 0.8rem;
                    color: var(--text-muted, #666);
                    margin: 0.25rem 0 0 0;
                }

                .screens-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .screen-item {
                    border: 1px solid var(--border-color, #ccc);
                    border-radius: 8px;
                    padding: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: var(--card-bg, white);
                }

                .screen-info {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .screen-icon {
                    font-size: 1.5rem;
                }

                .screen-name {
                    font-weight: 500;
                }

                .screen-field-count {
                    color: var(--text-muted, #666);
                    font-size: 0.875rem;
                }

                .screen-actions {
                    display: flex;
                    gap: 0.5rem;
                }

                button {
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                    border: 1px solid var(--border-color, #ccc);
                    background: var(--button-bg, white);
                    cursor: pointer;
                    font-size: 0.875rem;
                }

                button:hover {
                    background: var(--button-hover-bg, #f0f0f0);
                }

                .btn-primary {
                    background: var(--primary-color, #007bff);
                    color: white;
                    border-color: var(--primary-color, #007bff);
                }

                .btn-primary:hover {
                    background: var(--primary-hover, #0056b3);
                }

                .btn-danger {
                    color: var(--danger-color, #dc3545);
                }

                .btn-danger:hover {
                    background: var(--danger-bg, #f8d7da);
                }

                .empty-state {
                    text-align: center;
                    padding: 2rem;
                    color: var(--text-muted, #666);
                }

                .reset-section {
                    margin-top: 2rem;
                    padding-top: 1rem;
                    border-top: 1px solid var(--border-color, #ccc);
                }

                @media (max-width: 768px) {
                    .screen-item {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.75rem;
                    }

                    .screen-actions {
                        width: 100%;
                        flex-wrap: wrap;
                    }

                    button {
                        flex: 1;
                        min-width: 100px;
                    }

                    .setting-input {
                        max-width: 100%;
                    }
                }
            </style>

            <div class="activity-header">
                <h3>📱 Data Screens for ${this.getActivityDisplayName()}</h3>
                <button class="btn-primary" id="add-screen">+ Add Screen</button>
            </div>

            ${e?`
                <div class="settings-section">
                    <h4>⚡ Power Settings</h4>
                    <div class="setting-row">
                        <label class="setting-label" for="activity-ftp">Functional Threshold Power (FTP)</label>
                        <div class="setting-input-row">
                            <input
                                type="number"
                                id="activity-ftp"
                                class="setting-input"
                                min="0"
                                max="2000"
                                value="${this.activityFtp}"
                                placeholder="e.g. 200-350"
                            />
                            <span class="setting-unit">Watts</span>
                        </div>
                        <p class="setting-description">
                            Your one-hour maximum sustainable power for ${this.getActivityDisplayName()}. Used for zone calculations.
                        </p>
                    </div>
                    <div class="setting-row">
                        <label class="setting-label" for="activity-power-zone-model">Power Zone Model</label>
                        <select id="activity-power-zone-model" class="setting-input" style="max-width: 200px;">
                            <option value="3" ${this.activityPowerZoneModel==="3"?"selected":""}>3 Zones (Polarized)</option>
                            <option value="5" ${this.activityPowerZoneModel==="5"?"selected":""}>5 Zones (Standard)</option>
                            <option value="7" ${this.activityPowerZoneModel==="7"?"selected":""}>7 Zones (Coggan)</option>
                        </select>
                        <p class="setting-description">
                            Choose how power zones are calculated: 3 zones for polarized training, 7 zones for detailed analysis.
                        </p>
                    </div>
                </div>
            `:""}

            <div class="settings-section">
                <h4>⏸️ Auto-Pause</h4>
                <div class="setting-row">
                    <label class="setting-input-row" style="cursor: pointer;">
                        <input
                            type="checkbox"
                            id="activity-auto-pause-enabled"
                            ${this.activityAutoPause.enabled?"checked":""}
                            style="width: 20px; height: 20px;"
                        />
                        <span class="setting-label">Enable Auto-Pause</span>
                    </label>
                    <p class="setting-description">
                        Automatically pause when activity drops below threshold.
                    </p>
                </div>
                ${this.activityAutoPause.enabled?`
                    <div class="setting-row">
                        <label class="setting-label" for="activity-auto-pause-source">Monitor</label>
                        <select id="activity-auto-pause-source" class="setting-input" style="max-width: 200px;">
                            <option value="speed" ${this.activityAutoPause.source==="speed"?"selected":""}>Speed</option>
                            <option value="power" ${this.activityAutoPause.source==="power"?"selected":""}>Power</option>
                            <option value="cadence" ${this.activityAutoPause.source==="cadence"?"selected":""}>Cadence</option>
                        </select>
                    </div>
                    <div class="setting-row">
                        <label class="setting-label" for="activity-auto-pause-threshold">Threshold</label>
                        <div class="setting-input-row">
                            <input
                                type="number"
                                id="activity-auto-pause-threshold"
                                class="setting-input"
                                min="0"
                                max="100"
                                step="0.5"
                                value="${this.activityAutoPause.threshold}"
                                style="max-width: 100px;"
                            />
                            <span class="setting-unit" id="auto-pause-unit">${this.getAutoPauseUnit()}</span>
                        </div>
                    </div>
                    <div class="setting-row">
                        <label class="setting-label" for="activity-auto-pause-delay">Delay</label>
                        <div class="setting-input-row">
                            <input
                                type="number"
                                id="activity-auto-pause-delay"
                                class="setting-input"
                                min="1"
                                max="30"
                                step="1"
                                value="${this.activityAutoPause.delay}"
                                style="max-width: 100px;"
                            />
                            <span class="setting-unit">seconds</span>
                        </div>
                        <p class="setting-description">
                            Workout will pause after being below threshold for this duration.
                        </p>
                    </div>
                    `:""}
            </div>

            <div class="settings-section">
                <h4>🏁 Auto-Lap</h4>
                <div class="setting-row">
                    <label class="setting-input-row" style="cursor: pointer;">
                        <input
                            type="checkbox"
                            id="activity-auto-lap-enabled"
                            ${this.activityAutoLap.enabled?"checked":""}
                            style="width: 20px; height: 20px;"
                        />
                        <span class="setting-label">Enable Auto-Lap</span>
                    </label>
                    <p class="setting-description">
                        Automatically mark laps at intervals.
                    </p>
                </div>
                ${this.activityAutoLap.enabled?`
                    <div class="setting-row">
                        <label class="setting-label" for="activity-auto-lap-source">Trigger</label>
                        <select id="activity-auto-lap-source" class="setting-input" style="max-width: 200px;">
                            <option value="distance" ${this.activityAutoLap.source==="distance"?"selected":""}>Distance</option>
                            <option value="time" ${this.activityAutoLap.source==="time"?"selected":""}>Time</option>
                        </select>
                    </div>
                    ${this.activityAutoLap.source==="distance"?`
                        <div class="setting-row">
                            <label class="setting-label" for="activity-auto-lap-distance">Every</label>
                            <select id="activity-auto-lap-distance" class="setting-input" style="max-width: 200px;">
                                <option value="0.4" ${this.activityAutoLap.distanceKm===.4?"selected":""}>400m</option>
                                <option value="1" ${this.activityAutoLap.distanceKm===1?"selected":""}>1 km</option>
                                <option value="1.60934" ${this.activityAutoLap.distanceKm===1.60934?"selected":""}>1 mile</option>
                                <option value="2" ${this.activityAutoLap.distanceKm===2?"selected":""}>2 km</option>
                                <option value="5" ${this.activityAutoLap.distanceKm===5?"selected":""}>5 km</option>
                                <option value="10" ${this.activityAutoLap.distanceKm===10?"selected":""}>10 km</option>
                            </select>
                        </div>
                        `:`
                        <div class="setting-row">
                            <label class="setting-label" for="activity-auto-lap-time">Every</label>
                            <select id="activity-auto-lap-time" class="setting-input" style="max-width: 200px;">
                                <option value="1" ${this.activityAutoLap.timeMinutes===1?"selected":""}>1 minute</option>
                                <option value="5" ${this.activityAutoLap.timeMinutes===5?"selected":""}>5 minutes</option>
                                <option value="10" ${this.activityAutoLap.timeMinutes===10?"selected":""}>10 minutes</option>
                                <option value="15" ${this.activityAutoLap.timeMinutes===15?"selected":""}>15 minutes</option>
                                <option value="30" ${this.activityAutoLap.timeMinutes===30?"selected":""}>30 minutes</option>
                            </select>
                        </div>
                        `}
                    `:""}
            </div>

            ${t.length===0?`
                <div class="empty-state">
                    <p>No screens configured for this activity.</p>
                    <p>Click "Add Screen" to create your first screen.</p>
                </div>
            `:`
                <div class="screens-list">
                    ${t.map((i,n)=>`
                        <div class="screen-item" data-index="${n}">
                            <div class="screen-info">
                                <span class="screen-icon">${i.icon||"📊"}</span>
                                <div>
                                    <div class="screen-name">${i.name}</div>
                                    <div class="screen-field-count">
                                        ${i.slots.length} fields
                                    </div>
                                </div>
                            </div>
                            <div class="screen-actions">
                                <button class="btn-edit" data-index="${n}">Edit</button>
                                <button class="btn-move-up" data-index="${n}" ${n===0?"disabled":""}>↑</button>
                                <button class="btn-move-down" data-index="${n}" ${n===t.length-1?"disabled":""}>↓</button>
                                <button class="btn-danger" data-index="${n}">Delete</button>
                            </div>
                        </div>
                    `).join("")}
                </div>
            `}

            <div class="reset-section">
                <button id="reset-defaults">Reset to Defaults</button>
                <small style="display: block; margin-top: 0.5rem; color: var(--text-muted, #666);">
                    This will restore the default screens for ${this.getActivityDisplayName()}.
                </small>
            </div>
        `}attachEventListeners(){this.boundClickHandler&&this.shadowRoot.removeEventListener("click",this.boundClickHandler),this.boundInputHandler&&this.shadowRoot.removeEventListener("input",this.boundInputHandler),this.boundChangeHandler&&this.shadowRoot.removeEventListener("change",this.boundChangeHandler),this.boundClickHandler&&this.shadowRoot.addEventListener("click",this.boundClickHandler),this.boundInputHandler&&this.shadowRoot.addEventListener("input",this.boundInputHandler),this.boundChangeHandler&&this.shadowRoot.addEventListener("change",this.boundChangeHandler)}handleInput(t){const e=t.target;if(e.id==="activity-ftp"){const i=parseInt(e.value,10);!isNaN(i)&&i>=0&&(this.activityFtp=i,this.saveActivitySettings())}else if(e.id==="activity-auto-pause-threshold"){const i=parseFloat(e.value);!isNaN(i)&&i>=0&&(this.activityAutoPause.threshold=i,this.saveActivitySettings())}else if(e.id==="activity-auto-pause-delay"){const i=parseInt(e.value,10);!isNaN(i)&&i>=1&&(this.activityAutoPause.delay=i,this.saveActivitySettings())}}handleChange(t){const e=t.target;if(e.id==="activity-power-zone-model"){const i=e.value;(i==="3"||i==="5"||i==="7")&&(this.activityPowerZoneModel=i,this.saveActivitySettings())}else e.id==="activity-auto-pause-enabled"?(this.activityAutoPause.enabled=e.checked,this.saveActivitySettings(),this.render(),this.attachEventListeners()):e.id==="activity-auto-pause-source"?(this.activityAutoPause.source=e.value,this.saveActivitySettings(),this.render(),this.attachEventListeners()):e.id==="activity-auto-lap-enabled"?(this.activityAutoLap.enabled=e.checked,this.saveActivitySettings(),this.render(),this.attachEventListeners()):e.id==="activity-auto-lap-source"?(this.activityAutoLap.source=e.value,this.saveActivitySettings(),this.render(),this.attachEventListeners()):e.id==="activity-auto-lap-distance"?(this.activityAutoLap.distanceKm=parseFloat(e.value),this.saveActivitySettings()):e.id==="activity-auto-lap-time"&&(this.activityAutoLap.timeMinutes=parseInt(e.value,10),this.saveActivitySettings())}loadActivitySettings(){try{const t=`bpt-activity-settings-${this.activityType}`,e=localStorage.getItem(t);if(e){const i=JSON.parse(e);this.activityFtp=i.ftp??a.getAll().ftp,this.activityPowerZoneModel=i.powerZoneModel??a.getAll().powerZoneModel,this.activityAutoPause=i.autoPause??{enabled:!1,source:"speed",threshold:3,delay:3},this.activityAutoLap=i.autoLap??{enabled:!1,source:"distance",distanceKm:1,timeMinutes:5}}else{const i=a.getAll();this.activityFtp=i.ftp,this.activityPowerZoneModel=i.powerZoneModel,this.activityAutoPause={enabled:!1,source:"speed",threshold:3,delay:3},this.activityAutoLap={enabled:!1,source:"distance",distanceKm:1,timeMinutes:5}}}catch(t){console.error("[ActivitySettings] Failed to load activity settings:",t);const e=a.getAll();this.activityFtp=e.ftp,this.activityPowerZoneModel=e.powerZoneModel,this.activityAutoPause={enabled:!1,source:"speed",threshold:3,delay:3},this.activityAutoLap={enabled:!1,source:"distance",distanceKm:1,timeMinutes:5}}}saveActivitySettings(){try{const t=`bpt-activity-settings-${this.activityType}`,e={ftp:this.activityFtp,powerZoneModel:this.activityPowerZoneModel,autoPause:this.activityAutoPause,autoLap:this.activityAutoLap};localStorage.setItem(t,JSON.stringify(e)),a.setMultiple({ftp:this.activityFtp,powerZoneModel:this.activityPowerZoneModel,powerZones:p(this.activityFtp,this.activityPowerZoneModel)});const n={...o(),autoPause:this.activityAutoPause,autoLap:this.activityAutoLap};localStorage.setItem("bpt-settings",JSON.stringify(n)),console.log(`[ActivitySettings] Saved settings for ${this.activityType}:`,e),window.dispatchEvent(new CustomEvent("user-profile-changed"))}catch(t){console.error("[ActivitySettings] Failed to save activity settings:",t)}}handleClick(t){const e=t.target;if(e.id==="add-screen"){this.handleAddScreen();return}if(e.id==="reset-defaults"){this.handleResetDefaults();return}const i=e.dataset.index?parseInt(e.dataset.index,10):null;if(i!==null){if(e.classList.contains("btn-edit")){this.handleEditScreen(i);return}if(e.classList.contains("btn-danger")){this.handleDeleteScreen(i);return}if(e.classList.contains("btn-move-up")){this.handleMoveScreen(i,i-1);return}if(e.classList.contains("btn-move-down")){this.handleMoveScreen(i,i+1);return}}}handleActivityChange(t){const e=t;if(!e.detail)return;const{activityType:i,config:n}=e.detail;this.activityType=i,this.screensConfig=n,this.loadActivitySettings(),this.render(),this.attachEventListeners()}handleAddScreen(){if(!this.screensConfig)return;const t={id:`screen-${Date.now()}`,name:`Screen ${this.screensConfig.screens.length+1}`,icon:"📊",slots:[],layout:"auto"};this.openScreenEditor(t,e=>{this.screensConfig&&(this.screensConfig.screens.push(e),this.saveAndRender())})}handleEditScreen(t){if(!this.screensConfig||!this.screensConfig.screens[t])return;const e=this.screensConfig.screens[t];this.openScreenEditor(e,i=>{this.screensConfig&&(this.screensConfig.screens[t]=i,this.saveAndRender())})}openScreenEditor(t,e){this.screenEditor||(this.screenEditor=document.createElement("bpt-screen-editor-modal"),document.body.appendChild(this.screenEditor)),this.screenEditor.open(t,e)}handleDeleteScreen(t){if(!this.screensConfig||!this.screensConfig.screens[t])return;const e=this.screensConfig.screens[t];if(this.screensConfig.screens.length===1){alert("Cannot delete the last screen. An activity must have at least one screen.");return}confirm(`Delete screen "${e.name}"?

This cannot be undone.`)&&(this.screensConfig.screens.splice(t,1),this.screensConfig.activeScreenIndex>=this.screensConfig.screens.length&&(this.screensConfig.activeScreenIndex=Math.max(0,this.screensConfig.screens.length-1)),this.saveAndRender())}handleMoveScreen(t,e){if(!this.screensConfig)return;if(e<0||e>=this.screensConfig.screens.length){console.warn("[ActivitySettings] Invalid move operation:",{fromIndex:t,toIndex:e});return}const i=this.screensConfig.screens,[n]=i.splice(t,1);i.splice(e,0,n),this.screensConfig.activeScreenIndex===t?this.screensConfig.activeScreenIndex=e:this.screensConfig.activeScreenIndex>t&&this.screensConfig.activeScreenIndex<=e?this.screensConfig.activeScreenIndex--:this.screensConfig.activeScreenIndex<t&&this.screensConfig.activeScreenIndex>=e&&this.screensConfig.activeScreenIndex++,this.saveAndRender()}handleResetDefaults(){confirm(`Reset ${this.getActivityDisplayName()} screens to defaults?

This will delete all custom screens and restore the defaults.`)&&(this.screensConfig=d(this.activityType),this.saveAndRender())}saveAndRender(){if(this.screensConfig)try{u(this.activityType,this.screensConfig);const t=new CustomEvent("data-fields-activity-changed",{detail:{activityType:this.activityType,config:this.screensConfig},bubbles:!0,composed:!0});document.dispatchEvent(t),this.render(),this.attachEventListeners()}catch(t){console.error("[ActivitySettings] Failed to save screens:",t),alert("Failed to save screen configuration. Please try again.")}}getActivityDisplayName(){return{cycling:"Cycling",running:"Running",indoor:"Indoor Cycling",walking:"Walking",custom:"Custom Activity"}[this.activityType]||"Unknown"}getAutoPauseUnit(){switch(this.activityAutoPause.source){case"speed":return"km/h";case"power":return"Watts";case"cadence":return"RPM";default:return""}}}customElements.define("bpt-activity-settings",g);export{g as ActivitySettingsComponent};
//# sourceMappingURL=ActivitySettingsComponent-C0XtsisF.js.map
