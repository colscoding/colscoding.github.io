import{V as b,H as s,I as g,W as m,J as v,K as y}from"./index-CWIKcEoG.js";import"./feature-bluetooth-MdnGXiet.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";class D{id=b.Plans;container=null;init(t){this.container=t,this.render()}onEnter(){console.log("Entered Plans View"),this.render()}onLeave(){console.log("Left Plans View")}render(){this.container&&this.renderDashboard()}renderDashboard(){if(!this.container)return;const t=s.getActiveProgress(),e=s.getAllPlans();let a=`
            <div class="page-header" style="padding: 16px; border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
                <h2>📅 Training Plans</h2>
            </div>
            <div class="page-content" style="padding: 16px;">
        `;if(t){const r=s.getPlan(t.planId);r&&(a+=this.renderActivePlan(r,t))}a+=`
            <h3>Available Plans</h3>
            <div class="plans-list" style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));">
                ${e.map(r=>this.renderPlanCard(r,t?.planId===r.id)).join("")}
            </div>
        </div>`,this.container.innerHTML=a,this.attachListeners(this.container)}renderActivePlan(t,e){const a=Math.floor((Date.now()-e.startDate)/864e5),r=Math.floor(a/7)+1,n=a%7+1;return`
            <div class="active-plan-card" style="background: var(--card-bg); padding: 16px; border-radius: 8px; margin-bottom: 24px; border: 2px solid var(--color-primary);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                    <h3 style="margin: 0;">Currently Following: ${t.name}</h3>
                    <span class="status-badge" style="background: var(--color-primary); color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8em;">Active</span>
                </div>
                <p><strong>Week ${r}, Day ${n}</strong></p>
                <div style="margin-top: 12px;">
                    <button class="workout-btn btn-stop-plan" data-id="${t.id}" style="background: var(--color-error); font-size: 0.9em;">Stop Plan</button>
                    <button class="workout-btn btn-view-plan" data-id="${t.id}" style="font-size: 0.9em;">View Schedule</button>
                </div>
            </div>
        `}renderPlanCard(t,e){return`
            <div class="plan-card" style="background: var(--card-bg); padding: 16px; border-radius: 8px; border: 1px solid var(--color-border); ${e?"opacity: 0.6;":""}">
                <h4 style="margin: 0 0 8px 0;">${t.name}</h4>
                <div style="font-size: 0.9em; color: var(--color-text-secondary); margin-bottom: 12px;">
                    ${t.weeks.length} Weeks • ${t.difficulty||"Intermediate"}
                </div>
                <p style="font-size: 0.9em; margin-bottom: 16px; line-height: 1.4;">${t.description}</p>
                <button class="workout-btn btn-view-plan" data-id="${t.id}" style="width: 100%;">View Details</button>
            </div>
        `}renderDetails(t){if(!this.container)return;const e=s.getPlan(t);if(!e)return;const a=s.getActiveProgress(),r=a?.planId===t;let n=`
            <div class="page-header" style="padding: 16px; border-bottom: 1px solid var(--color-border); display: flex; gap: 8px; align-items: center;">
                <button class="btn-back-plans" style="background: none; border: none; font-size: 1.2em; cursor: pointer;">←</button>
                <h2 style="margin: 0;">${e.name}</h2>
            </div>
            <div class="page-content" style="padding: 16px;">
                <p>${e.description}</p>
                
                <div style="margin: 16px 0;">
                    ${r?`<button class="workout-btn btn-stop-plan" data-id="${e.id}" style="background: var(--color-error);">Stop Plan</button>`:`<button class="workout-btn btn-start-plan" data-id="${e.id}" style="background: var(--color-success);">Start Plan</button>`}
                </div>
    
                <div class="plan-weeks">
                    ${e.weeks.map(o=>this.renderWeek(o,r?a:null)).join("")}
                </div>
            </div>
        `;this.container.innerHTML=n,this.attachListeners(this.container,t)}renderWeek(t,e){return`
            <div class="plan-week" style="margin-bottom: 20px;">
                <h4 style="background: var(--bg-secondary); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                    Week ${t.weekNumber}: ${t.focus||""}
                </h4>
                <div class="week-days" style="display: grid; gap: 8px;">
                    ${t.days.map(a=>this.renderDay(a,t.weekNumber,e)).join("")}
                </div>
            </div>
        `}renderDay(t,e,a){const r=a?a.completedDays[`${e}-${t.dayOfWeek}`]:!1;let n=!1;if(a){const l=Math.floor((Date.now()-a.startDate)/864e5)+1,u=(e-1)*7+t.dayOfWeek;l===u&&(n=!0)}let o="";return t.isRestDay?o=`<em>Rest Day</em> ${t.notes?`- ${t.notes}`:""}`:t.workout?o=`<strong>${t.workout.name}</strong><br><span style="font-size: 0.85em; color: var(--color-text-secondary);">${g(this.getTotalDuration(t.workout))}</span>`:o=`Workout ID: ${t.workoutId}`,`
            <div class="plan-day" style="
                padding: 12px; 
                border: 1px solid var(--color-border); 
                border-radius: 6px; 
                display: flex; 
                align-items: center; 
                gap: 12px;
                background: ${n?"var(--bg-highlight, rgba(33, 150, 243, 0.1))":"var(--card-bg)"};
                ${n?"border-color: var(--color-primary);":""}
            ">
                <div style="
                    width: 24px; height: 24px; 
                    border-radius: 50%; 
                    background: ${r?"var(--color-success)":"#ccc"}; 
                    color: white;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 0.8em;
                ">${t.dayOfWeek}</div>
                
                <div style="flex: 1;">${o}</div>
    
                ${!t.isRestDay&&t.workout?`
                    <button class="workout-btn btn-preview-workout" style="padding: 4px 8px; font-size: 0.8em;">Preview</button>
                    ${a&&!r?`<button class="workout-btn btn-do-workout" data-week="${e}" data-day="${t.dayOfWeek}" style="margin-left:8px; padding: 4px 8px; font-size: 0.8em; background: var(--color-primary);">Start</button>`:""}
                `:""}
            </div>
        `}getTotalDuration(t){return t.steps.reduce((e,a)=>e+a.duration,0)}attachListeners(t,e){t.onclick=a=>{const r=a.target;if(r.classList.contains("btn-view-plan")){const n=r.dataset.id;n&&this.renderDetails(n)}if(r.classList.contains("btn-back-plans")&&this.renderDashboard(),r.classList.contains("btn-start-plan")){const n=r.dataset.id;n&&confirm("Start this training plan? This will become your active plan.")&&(s.startPlan(n),this.renderDetails(n))}if(r.classList.contains("btn-stop-plan")&&confirm("Are you sure you want to stop the current plan? Progress will be lost.")&&(s.stopActivePlan(),e?this.renderDetails(e):this.renderDashboard()),r.classList.contains("btn-do-workout")){const n=parseInt(r.dataset.week||"0"),o=parseInt(r.dataset.day||"0"),c=s.getActiveProgress();if(!c)return;const l=s.getPlan(c.planId);if(!l)return;const d=l.weeks.find(i=>i.weekNumber===n)?.days.find(i=>i.dayOfWeek===o);if(d){let i=d.workout;!i&&d.workoutId&&(i=m.find(p=>p.id===d.workoutId)||v().find(p=>p.id===d.workoutId)),i?y(i,()=>{s.markDayComplete(n,o),this.render()}):alert("Workout definition not found!")}}}}}export{D as PlansView};
//# sourceMappingURL=PlansView-BMb49fy4.js.map
