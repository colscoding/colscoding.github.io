import{V as m,h as w,W as k,F as h,G as x}from"./index-N21XmhYf.js";import"./feature-bluetooth-WlFmxkI9.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";const p=(l,t,e)=>({id:l,name:t,description:e,steps:[{type:"warmup",duration:600,target:{type:"power",unit:"percent_ftp",value:50}},{type:"active",duration:300,target:{type:"power",unit:"percent_ftp",value:90}},{type:"recovery",duration:180,target:{type:"power",unit:"percent_ftp",value:50}},{type:"active",duration:300,target:{type:"power",unit:"percent_ftp",value:90}},{type:"recovery",duration:180,target:{type:"power",unit:"percent_ftp",value:50}},{type:"active",duration:300,target:{type:"power",unit:"percent_ftp",value:90}},{type:"cooldown",duration:600,target:{type:"power",unit:"percent_ftp",value:40}}]}),u=(l,t)=>({id:l,name:t,description:"Steady zone 2 effort",steps:[{type:"warmup",duration:300,target:{type:"power",unit:"percent_ftp",value:50}},{type:"active",duration:1800,target:{type:"power",unit:"percent_ftp",value:65}},{type:"cooldown",duration:300,target:{type:"power",unit:"percent_ftp",value:50}}]}),P={id:"plan-ftp-builder-1",name:"4-Week FTP Booster",description:"A focused 4-week block designed to raise your functional threshold power through sweet spot and threshold intervals.",difficulty:"intermediate",created:Date.now(),updated:Date.now(),weeks:[{weekNumber:1,focus:"Introduction",days:[{dayOfWeek:1,isRestDay:!0,notes:"Rest day. Stretch."},{dayOfWeek:2,isRestDay:!1,workout:p("ftp-w1-d2","Intro Intervals","Basic intervals")},{dayOfWeek:3,isRestDay:!1,workout:u("ftp-w1-d3","Aerobic Base")},{dayOfWeek:4,isRestDay:!0},{dayOfWeek:5,isRestDay:!1,workout:p("ftp-w1-d5","Tempo Work","Harder intervals")},{dayOfWeek:6,isRestDay:!0},{dayOfWeek:7,isRestDay:!1,workout:u("ftp-w1-d7","Long Ride")}]},{weekNumber:2,focus:"Build",days:[{dayOfWeek:1,isRestDay:!0},{dayOfWeek:2,isRestDay:!1,workout:p("ftp-w2-d2","Threshold Push","Pushing limits")},{dayOfWeek:3,isRestDay:!1,workout:u("ftp-w2-d3","Recovery Spin")},{dayOfWeek:4,isRestDay:!0},{dayOfWeek:5,isRestDay:!1,workout:p("ftp-w2-d5","O/U Intervals","Over Unders")},{dayOfWeek:6,isRestDay:!0},{dayOfWeek:7,isRestDay:!1,workout:u("ftp-w2-d7","Sunday Long Ride")}]}]},v="bpt-user-plans",y="bpt-plan-progress";class D{systemPlans=[];constructor(){this.registerSystemPlan(P)}registerSystemPlan(t){this.systemPlans.push(t)}getAllPlans(){const t=this.getUserPlans();return[...this.systemPlans,...t]}getPlan(t){return this.getAllPlans().find(e=>e.id===t)}getUserPlans(){try{const t=localStorage.getItem(v);return t?JSON.parse(t):[]}catch(t){return console.error("Failed to load user plans",t),[]}}saveUserPlan(t){const e=this.getUserPlans(),r=e.findIndex(s=>s.id===t.id);r>=0?e[r]=t:e.push(t),localStorage.setItem(v,JSON.stringify(e))}getActiveProgress(){try{const t=localStorage.getItem(y);return t?JSON.parse(t):null}catch{return null}}startPlan(t,e=Date.now()){const r={planId:t,startDate:e,completedDays:{}};localStorage.setItem(y,JSON.stringify(r))}markDayComplete(t,e){const r=this.getActiveProgress();if(!r)return;const s=`${t}-${e}`;r.completedDays[s]=!0,localStorage.setItem(y,JSON.stringify(r))}stopActivePlan(){localStorage.removeItem(y)}}const o=new D;class A{id=m.Plans;container=null;init(t){this.container=t,this.render()}onEnter(){console.log("Entered Plans View"),this.render()}onLeave(){console.log("Left Plans View")}render(){this.container&&this.renderDashboard()}renderDashboard(){if(!this.container)return;const t=o.getActiveProgress(),e=o.getAllPlans();let r=`
            <div class="page-header" style="padding: 16px; border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
                <h2>📅 Training Plans</h2>
            </div>
            <div class="page-content" style="padding: 16px;">
        `;if(t){const s=o.getPlan(t.planId);s&&(r+=this.renderActivePlan(s,t))}r+=`
            <h3>Available Plans</h3>
            <div class="plans-list" style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));">
                ${e.map(s=>this.renderPlanCard(s,t?.planId===s.id)).join("")}
            </div>
        </div>`,this.container.innerHTML=r,this.attachListeners(this.container)}renderActivePlan(t,e){const r=Math.floor((Date.now()-e.startDate)/864e5),s=Math.floor(r/7)+1,a=r%7+1;return`
            <div class="active-plan-card" style="background: var(--card-bg); padding: 16px; border-radius: 8px; margin-bottom: 24px; border: 2px solid var(--color-primary);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                    <h3 style="margin: 0;">Currently Following: ${t.name}</h3>
                    <span class="status-badge" style="background: var(--color-primary); color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8em;">Active</span>
                </div>
                <p><strong>Week ${s}, Day ${a}</strong></p>
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
        `}renderDetails(t){if(!this.container)return;const e=o.getPlan(t);if(!e)return;const r=o.getActiveProgress(),s=r?.planId===t;let a=`
            <div class="page-header" style="padding: 16px; border-bottom: 1px solid var(--color-border); display: flex; gap: 8px; align-items: center;">
                <button class="btn-back-plans" style="background: none; border: none; font-size: 1.2em; cursor: pointer;">←</button>
                <h2 style="margin: 0;">${e.name}</h2>
            </div>
            <div class="page-content" style="padding: 16px;">
                <p>${e.description}</p>
                
                <div style="margin: 16px 0;">
                    ${s?`<button class="workout-btn btn-stop-plan" data-id="${e.id}" style="background: var(--color-error);">Stop Plan</button>`:`<button class="workout-btn btn-start-plan" data-id="${e.id}" style="background: var(--color-success);">Start Plan</button>`}
                </div>
    
                <div class="plan-weeks">
                    ${e.weeks.map(n=>this.renderWeek(n,s?r:null)).join("")}
                </div>
            </div>
        `;this.container.innerHTML=a,this.attachListeners(this.container,t)}renderWeek(t,e){return`
            <div class="plan-week" style="margin-bottom: 20px;">
                <h4 style="background: var(--bg-secondary); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                    Week ${t.weekNumber}: ${t.focus||""}
                </h4>
                <div class="week-days" style="display: grid; gap: 8px;">
                    ${t.days.map(r=>this.renderDay(r,t.weekNumber,e)).join("")}
                </div>
            </div>
        `}renderDay(t,e,r){const s=r?r.completedDays[`${e}-${t.dayOfWeek}`]:!1;let a=!1;if(r){const c=Math.floor((Date.now()-r.startDate)/864e5)+1,b=(e-1)*7+t.dayOfWeek;c===b&&(a=!0)}let n="";return t.isRestDay?n=`<em>Rest Day</em> ${t.notes?`- ${t.notes}`:""}`:t.workout?n=`<strong>${t.workout.name}</strong><br><span style="font-size: 0.85em; color: var(--color-text-secondary);">${w(this.getTotalDuration(t.workout))}</span>`:n=`Workout ID: ${t.workoutId}`,`
            <div class="plan-day" style="
                padding: 12px; 
                border: 1px solid var(--color-border); 
                border-radius: 6px; 
                display: flex; 
                align-items: center; 
                gap: 12px;
                background: ${a?"var(--bg-highlight, rgba(33, 150, 243, 0.1))":"var(--card-bg)"};
                ${a?"border-color: var(--color-primary);":""}
            ">
                <div style="
                    width: 24px; height: 24px; 
                    border-radius: 50%; 
                    background: ${s?"var(--color-success)":"#ccc"}; 
                    color: white;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 0.8em;
                ">${t.dayOfWeek}</div>
                
                <div style="flex: 1;">${n}</div>
    
                ${!t.isRestDay&&t.workout?`
                    <button class="workout-btn btn-preview-workout" style="padding: 4px 8px; font-size: 0.8em;">Preview</button>
                    ${r&&!s?`<button class="workout-btn btn-do-workout" data-week="${e}" data-day="${t.dayOfWeek}" style="margin-left:8px; padding: 4px 8px; font-size: 0.8em; background: var(--color-primary);">Start</button>`:""}
                `:""}
            </div>
        `}getTotalDuration(t){return t.steps.reduce((e,r)=>e+r.duration,0)}attachListeners(t,e){t.onclick=r=>{const s=r.target;if(s.classList.contains("btn-view-plan")){const a=s.dataset.id;a&&this.renderDetails(a)}if(s.classList.contains("btn-back-plans")&&this.renderDashboard(),s.classList.contains("btn-start-plan")){const a=s.dataset.id;a&&confirm("Start this training plan? This will become your active plan.")&&(o.startPlan(a),this.renderDetails(a))}if(s.classList.contains("btn-stop-plan")&&confirm("Are you sure you want to stop the current plan? Progress will be lost.")&&(o.stopActivePlan(),e?this.renderDetails(e):this.renderDashboard()),s.classList.contains("btn-do-workout")){const a=parseInt(s.dataset.week||"0"),n=parseInt(s.dataset.day||"0"),f=o.getActiveProgress();if(!f)return;const c=o.getPlan(f.planId);if(!c)return;const d=c.weeks.find(i=>i.weekNumber===a)?.days.find(i=>i.dayOfWeek===n);if(d){let i=d.workout;!i&&d.workoutId&&(i=k.find(g=>g.id===d.workoutId)||h().find(g=>g.id===d.workoutId)),i?x(i,()=>{o.markDayComplete(a,n),this.render()}):alert("Workout definition not found!")}}}}}export{A as PlansView};
//# sourceMappingURL=PlansView-CCS0yKuU.js.map
