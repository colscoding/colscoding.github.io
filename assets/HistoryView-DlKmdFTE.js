import{b as nt,i as it,m as ut,_ as mt}from"./feature-bluetooth-WlFmxkI9.js";import{h as D,j as st,k as yt,m as Z,n as I,o as pt,p as gt,q,t as vt,u as ht}from"./index-B84kQ3Pu.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";const ft="https://api.bikepowertracker.com",xt="super-secret-bike-tracker-key";async function bt(t){const a={"Content-Type":"application/json"};a["X-API-Key"]=xt;const e=await fetch(`${ft}/api/users/${t}/ftp-history`,{headers:a});if(!e.ok)throw new Error(`Failed to fetch FTP history: ${e.statusText}`);return e.json()}function R(t,a,e={}){if(!t)return;const o=e.height||200,n=e.color||"var(--color-accent)",r=20,i=30,s=40,l=10;if(!a||a.length<2){t.innerHTML=`
            <div style="
                display:flex; 
                justify-content:center; 
                align-items:center; 
                height:${o}px; 
                color: var(--color-text-secondary);
                background: var(--card-bg);
                border-radius: 8px;
            ">
                No data available
            </div>
        `;return}const c=wt(a,500),g=c.map(k=>k.x),m=c.map(k=>k.y),p=Math.min(...g),d=Math.max(...g);let h=e.yMin??Math.min(...m),f=e.yMax??Math.max(...m);const u=f-h;u===0?(f+=10,h-=10):(e.yMin===void 0&&(h-=u*.1),f+=u*.1);const v=t.clientWidth||t.parentElement?.clientWidth||600,y=k=>s+(k-p)/(d-p)*(v-s-l),b=k=>o-i-(k-h)/(f-h)*(o-r-i),w=`M ${c.map(k=>`${y(k.x).toFixed(1)},${b(k.y).toFixed(1)}`).join(" L ")}`,T=`${w} L ${y(c[c.length-1].x).toFixed(1)},${o-i} L ${y(c[0].x).toFixed(1)},${o-i} Z`,W=[],x=(f-h)/4;for(let k=0;k<=4;k++){const H=h+k*x,J=b(H);W.push(`
            <line x1="${s}" y1="${J}" x2="${v-l}" y2="${J}" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4" opacity="0.5" />
            <text x="${s-5}" y="${J+4}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">${Math.round(H)}</text>
        `)}const M=X(0),$=X((d-p)/2),E=X(d-p),S=`
        <svg width="100%" height="${o}" viewBox="0 0 ${v} ${o}" style="background: var(--card-bg); border-radius: 8px;">
            <defs>
                <linearGradient id="chartGradient-${e.title?.replace(/\s/g,"")}" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stop-color="${n}" stop-opacity="0.2"/>
                    <stop offset="100%" stop-color="${n}" stop-opacity="0"/>
                </linearGradient>
            </defs>

            <!-- Grid -->
            ${W.join("")}

            <!-- Axis Labels -->
            <text x="${s}" y="${o-10}" text-anchor="start" font-size="10" fill="var(--color-text-secondary)">${M}</text>
            <text x="${v/2}" y="${o-10}" text-anchor="middle" font-size="10" fill="var(--color-text-secondary)">${$}</text>
            <text x="${v-l}" y="${o-10}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">${E}</text>

            <!-- Data Area -->
            <path d="${T}" fill="url(#chartGradient-${e.title?.replace(/\s/g,"")})" stroke="none" />
            
            <!-- Data Line -->
            <path d="${w}" fill="none" stroke="${n}" stroke-width="2" vector-effect="non-scaling-stroke" />

            <!-- Title -->
            ${e.title?`<text x="${v/2}" y="15" text-anchor="middle" font-weight="bold" font-size="12" fill="var(--color-text-primary)">${e.title}</text>`:""}
        </svg>
    `;t.innerHTML=S}function wt(t,a){if(t.length<=a)return t;const e=Math.ceil(t.length/a),o=[];for(let n=0;n<t.length;n+=e)o.push(t[n]);return o}function X(t){const a=Math.floor(t/1e3),e=Math.floor(a/3600),o=Math.floor(a%3600/60),n=a%60;return e>0?`${e}:${o.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`:`${o}:${n.toString().padStart(2,"0")}`}function $t(t,a,e={}){if(!t)return;const o=e.height||200,n=e.color||"var(--color-accent)",r=30,i=30,s=40,l=10,c=4;if(!a||a.length===0){t.innerHTML=`
            <div style="
                display:flex; 
                justify-content:center; 
                align-items:center; 
                height:${o}px; 
                color: var(--color-text-secondary);
                background: var(--card-bg);
                border-radius: 8px;
            ">
                No data available
            </div>
        `;return}const g=a.map($=>$.y);let m=e.yMax??Math.max(...g)*1.1,p=e.yMin??0;m===p&&(m+=10);const d=t.clientWidth||t.parentElement?.clientWidth||600,h=d-s-l,f=Math.max(2,h/a.length-c),u=$=>s+$*(f+c)+c/2,v=$=>o-i-($-p)/(m-p)*(o-r-i),y=a.map(($,E)=>{const S=u(E),k=v($.y),H=Math.max(0,o-i-k);return H<=0||isNaN(k)||isNaN(H)?"":`<rect x="${S.toFixed(1)}" y="${k.toFixed(1)}" width="${f.toFixed(1)}" height="${H.toFixed(1)}" fill="${n}" rx="2" opacity="0.8" />`}),w=Math.max(1,Math.floor(a.length/7)),T=a.map(($,E)=>{if(E%w!==0)return"";const S=new Date($.x),k=`${S.getDate()}/${S.getMonth()+1}`;return`<text x="${(u(E)+f/2).toFixed(1)}" y="${o-5}" text-anchor="middle" font-size="10" fill="var(--color-text-secondary)">${k}</text>`}),W=[],x=(m-p)/4;for(let $=0;$<=4;$++){const E=p+$*x,S=v(E);W.push(`
            <line x1="${s}" y1="${S}" x2="${d-l}" y2="${S}" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4" opacity="0.3" />
            <text x="${s-5}" y="${S+4}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">${Math.round(E)}</text>
        `)}const M=`
        <svg width="100%" height="${o}" viewBox="0 0 ${d} ${o}" style="background: var(--card-bg); border-radius: 8px;">
            ${W.join("")}
            ${y.join("")}
            ${T.join("")}
            <!-- Axis Lines -->
            <line x1="${s}" y1="${r}" x2="${s}" y2="${o-i}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${s}" y1="${o-i}" x2="${d-l}" y2="${o-i}" stroke="var(--color-border)" stroke-width="1" />
            <!-- Title -->
             ${e.title?`<text x="${d/2}" y="15" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--color-text-primary)">${e.title}</text>`:""}
        </svg>
    `;t.innerHTML=M}const O=()=>({count:0,distance:0,duration:0,elevation:0,energy:0,avgPower:0,avgHr:0,avgCadence:0,weightedPowerSum:0,weightedHrSum:0,weightedCadenceSum:0,totalDurationForAvg:0});function lt(t){if(!t.summary)return{};if(typeof t.summary=="string")try{return JSON.parse(t.summary)}catch{return{}}return t.summary}let ct=[],U="distance";function kt(t,a){const e=document.getElementById(t);if(!e)return;ct=a;let o=document.getElementById("periodStatsContainer");o||(o=document.createElement("div"),o.id="periodStatsContainer",o.style.display="grid",o.style.gap="16px",o.style.marginBottom="20px",e.insertBefore(o,e.firstChild)),Tt(o,a),Dt(o)}function Tt(t,a){let e=document.getElementById("statsTableCard");e||(e=document.createElement("div"),e.id="statsTableCard",e.className="card",e.style.background="var(--card-bg)",e.style.padding="16px",e.style.borderRadius="8px",e.style.border="1px solid var(--color-border)",t.appendChild(e));const o=new Date,n=new Date(o),r=n.getDay()||7;r!==1?n.setHours(-24*(r-1)):n.setHours(0,0,0,0),n.setHours(0,0,0,0);const i=new Date(n);i.setDate(i.getDate()-7);const s=new Date(n),l=new Date(o.getFullYear(),o.getMonth(),1),c=new Date(o.getFullYear(),o.getMonth()-1,1),g=new Date(o.getFullYear(),o.getMonth(),0,23,59,59),m=new Date(o.getFullYear(),0,1),p={thisWeek:O(),lastWeek:O(),thisMonth:O(),lastMonth:O(),thisYear:O()};a.forEach(u=>{const v=new Date(u.startTime),y=lt(u),b=[];v>=n&&b.push(p.thisWeek),v>=i&&v<s&&b.push(p.lastWeek),v>=l&&b.push(p.thisMonth),v>=c&&v<=g&&b.push(p.lastMonth),v>=m&&b.push(p.thisYear),b.forEach(w=>{w.count++,w.duration+=u.duration||0,w.distance+=y.totalDistance||0,w.elevation+=y.totalElevationGain||0,y.totalEnergy?w.energy+=y.totalEnergy:y.avgPower&&u.duration&&(w.energy+=y.avgPower*u.duration/1e3);const T=u.duration||0;T>0&&(y.avgPower&&(w.weightedPowerSum+=y.avgPower*T),y.avgHeartrate&&(w.weightedHrSum+=y.avgHeartrate*T),y.avgCadence&&(w.weightedCadenceSum+=y.avgCadence*T),w.totalDurationForAvg+=T)})}),Object.values(p).forEach(u=>{u.totalDurationForAvg>0&&(u.avgPower=Math.round(u.weightedPowerSum/u.totalDurationForAvg),u.avgHr=Math.round(u.weightedHrSum/u.totalDurationForAvg),u.avgCadence=Math.round(u.weightedCadenceSum/u.totalDurationForAvg))});const d=u=>`<td style="padding: 8px; text-align: right; border-bottom: 1px solid var(--color-border);">${u}</td>`,f=[{label:"Workouts",key:"count",fmt:u=>u.toString()},{label:"Distance",key:"distance",fmt:u=>(u/1e3).toFixed(1)+" km"},{label:"Time",key:"duration",fmt:u=>D(u)},{label:"Elevation",key:"elevation",fmt:u=>u+" m"},{label:"Avg Power",key:"avgPower",fmt:u=>u+" W"},{label:"Avg HR",key:"avgHr",fmt:u=>u+" bpm"},{label:"Energy",key:"energy",fmt:u=>Math.round(u)+" kJ"}];e.innerHTML=`
        <h4 style="margin: 0 0 12px 0;">📊 Period Statistics</h4>
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9em;">
                <thead>
                    <tr style="background: var(--color-bg-secondary);">
                        <th style="text-align: left; padding: 8px; border-bottom: 2px solid var(--color-border);">Metric</th>
                        <th style="text-align: right; padding: 8px; border-bottom: 2px solid var(--color-border);">This Week</th>
                        <th style="text-align: right; padding: 8px; border-bottom: 2px solid var(--color-border); color: var(--color-text-secondary);">Last Week</th>
                        <th style="text-align: right; padding: 8px; border-bottom: 2px solid var(--color-border);">This Month</th>
                        <th style="text-align: right; padding: 8px; border-bottom: 2px solid var(--color-border); color: var(--color-text-secondary);">Last Month</th>
                        <th style="text-align: right; padding: 8px; border-bottom: 2px solid var(--color-border);">This Year</th>
                    </tr>
                </thead>
                <tbody>
                    ${f.map(u=>`
                        <tr>
                            <td style="padding: 8px; font-weight: 500; border-bottom: 1px solid var(--color-border);">${u.label}</td>
                            ${d(u.fmt(p.thisWeek[u.key]))}
                            ${d(u.fmt(p.lastWeek[u.key]))}
                            ${d(u.fmt(p.thisMonth[u.key]))}
                            ${d(u.fmt(p.lastMonth[u.key]))}
                            ${d(u.fmt(p.thisYear[u.key]))}
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Dt(t){let a=document.getElementById("statsChartCard");a||(a=document.createElement("div"),a.id="statsChartCard",a.className="card",a.style.background="var(--card-bg)",a.style.padding="16px",a.style.borderRadius="8px",a.style.border="1px solid var(--color-border)",a.innerHTML=`
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <h4 style="margin: 0;">📈 Weekly Trends (Last 12 Weeks)</h4>
                <select id="trendMetricSelect" style="padding: 4px; border-radius: 4px; border: 1px solid var(--color-border);">
                    <option value="distance">Distance</option>
                    <option value="duration">Time</option>
                    <option value="energy">Energy</option>
                    <option value="count">Workouts</option>
                </select>
            </div>
            <div id="trendChartContainer" style="height: 200px;"></div>
        `,t.appendChild(a),a.querySelector("#trendMetricSelect")?.addEventListener("change",o=>{U=o.target.value,Q()})),Q()}function Q(){const t=document.getElementById("trendChartContainer");if(!t)return;const a=document.getElementById("trendMetricSelect");a&&(a.value=U);const e={},o=new Date;for(let i=11;i>=0;i--){const s=new Date(o);s.setDate(s.getDate()-i*7);const l=tt(s);e[l]=0}ct.forEach(i=>{const s=new Date(i.startTime),l=tt(s);if(e.hasOwnProperty(l)){const c=lt(i);switch(U){case"distance":e[l]+=(c.totalDistance||0)/1e3;break;case"duration":e[l]+=i.duration||0;break;case"energy":c.totalEnergy?e[l]+=c.totalEnergy:c.avgPower&&i.duration&&(e[l]+=c.avgPower*i.duration/1e3);break;case"count":e[l]+=1;break}}});const n=Object.entries(e).sort((i,s)=>i[0].localeCompare(s[0])).map(([i,s])=>{const[l,c]=i.split("-W").map(Number);return{x:Et(l,c).getTime(),y:s}});let r="";switch(U){case"distance":r="Distance (km)";break;case"duration":r="Time (hours)";break;case"energy":r="Energy (kJ)";break;case"count":r="Number of Workouts";break}U==="duration"&&n.forEach(i=>i.y=i.y/3600),$t(t,n,{title:r,height:200,color:"var(--color-accent)"})}function tt(t){const a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),e=a.getUTCDay()||7;a.setUTCDate(a.getUTCDate()+4-e);const o=new Date(Date.UTC(a.getUTCFullYear(),0,1)),n=Math.ceil(((a.getTime()-o.getTime())/864e5+1)/7);return`${a.getUTCFullYear()}-W${n.toString().padStart(2,"0")}`}function Et(t,a){const e=new Date(t,0,1+(a-1)*7),o=e.getDay(),n=e.getDate()-o+(o===0?-6:1);return new Date(e.setDate(n))}function et(t,a,e,o){const n=Math.max(a,e),r=Math.max(n,o),i=m=>m.filter(p=>p.timestamp>=n&&p.timestamp<=r),s={heartrate:i(t.heartrate||[]),power:i(t.power||[]),cadence:i(t.cadence||[]),speed:i(t.speed||[]),distance:i(t.distance||[]),altitude:i(t.altitude||[]),gps:(t.gps||[]).filter(m=>m.timestamp>=n&&m.timestamp<=r),treadmill:(t.treadmill||[]).filter(m=>m.timestamp>=n&&m.timestamp<=r),treadmillSpeed:i(t.treadmillSpeed||[]),laps:(t.laps||[]).filter(m=>m.timestamp>=n&&m.timestamp<=r)},l=Math.floor((r-n)/1e3),c=st(n,r,{power:s.power,heartrate:s.heartrate,cadence:s.cadence}),g={startTime:n,endTime:r,totalDuration:l,avgPower:c.power.avg??void 0,maxPower:c.power.max??void 0,avgHeartrate:c.heartrate.avg??void 0,maxHeartrate:c.heartrate.max??void 0,avgCadence:c.cadence.avg??void 0,maxCadence:c.cadence.max??void 0};if(g.avgPower&&(g.totalEnergy=Math.round(g.avgPower*l/1e3)),s.distance.length>0){const m=s.distance[0].value,p=s.distance[s.distance.length-1].value;g.totalDistance=Math.max(0,p-m)}return{startTime:n,endTime:r,duration:l,measurements:s,summary:g}}let L=1,Y=1,z=!1,A="",_="",G="",F="list",C=new Date,j="cloud";function P(t){if(!t.summary)return{};if(typeof t.summary=="string")try{return JSON.parse(t.summary)}catch{return{}}return t.summary}function Lt(){const t=document.getElementById("historyPrevPage"),a=document.getElementById("historyNextPage"),e=document.getElementById("historyRefresh"),o=document.getElementById("workoutTypeFilter"),n=document.getElementById("workoutDateStart"),r=document.getElementById("workoutDateEnd"),i=document.getElementById("viewListBtn"),s=document.getElementById("viewCalendarBtn"),l=document.getElementById("viewAnalyticsBtn"),c=document.getElementById("workoutListView"),g=document.getElementById("workoutCalendarView"),m=document.getElementById("workoutAnalyticsView"),p=document.getElementById("calendarPrevMonth"),d=document.getElementById("calendarNextMonth"),h=document.getElementById("sourceCloudBtn"),f=document.getElementById("sourceLocalBtn");h&&f&&(h.addEventListener("click",()=>at("cloud")),f.addEventListener("click",()=>at("local"))),Mt();const u=y=>{F=y,i&&(i.classList.toggle("active",y==="list"),i.setAttribute("aria-pressed",(y==="list").toString()),i.style.background=y==="list"?"var(--color-bg-active)":"transparent"),s&&(s.classList.toggle("active",y==="calendar"),s.setAttribute("aria-pressed",(y==="calendar").toString()),s.style.background=y==="calendar"?"var(--color-bg-active)":"transparent"),l&&(l.classList.toggle("active",y==="analytics"),l.setAttribute("aria-pressed",(y==="analytics").toString()),l.style.background=y==="analytics"?"var(--color-bg-active)":"transparent"),c&&(c.style.display=y==="list"?"block":"none"),g&&(g.style.display=y==="calendar"?"block":"none"),m&&(m.style.display=y==="analytics"?"block":"none")};i?.addEventListener("click",()=>{u("list"),B()}),s?.addEventListener("click",()=>{u("calendar"),V()}),l?.addEventListener("click",()=>{u("analytics"),K()});const v=()=>{o&&(A=o.value),n&&(_=n.value),r&&(G=r.value),L=1,F==="list"?B():F==="calendar"?V():F==="analytics"&&K()};o?.addEventListener("change",v),n?.addEventListener("change",v),r?.addEventListener("change",v),p?.addEventListener("click",()=>{C.setMonth(C.getMonth()-1),V()}),d?.addEventListener("click",()=>{C.setMonth(C.getMonth()+1),V()}),t?.addEventListener("click",async()=>{L>1&&(L--,await B())}),a?.addEventListener("click",async()=>{L<Y&&(L++,await B())}),e?.addEventListener("click",async()=>{await B()})}async function Mt(){const t=document.getElementById("workoutHistoryButton"),a=it();try{z=await yt()}catch{z=!1}!z&&a&&(j="local",dt()),t&&(t.disabled=!(z||a),t.title=z||a?"View workout history":"History not available")}function St(t){const a=st(t.startTime,t.lastUpdated,t.measurements);return{id:t.id,title:"Local Workout",sport:"cycling",startTime:new Date(t.startTime).toISOString(),endTime:new Date(t.lastUpdated).toISOString(),duration:Math.round((t.lastUpdated-t.startTime)/1e3),status:"COMPLETED",summary:JSON.stringify(a),createdAt:new Date(t.startTime).toISOString(),updatedAt:new Date(t.lastUpdated).toISOString(),_synced:t.synced}}async function B(){const t=document.getElementById("workoutList"),a=document.getElementById("historyPageInfo"),e=document.getElementById("historyPrevPage"),o=document.getElementById("historyNextPage");if(t){t.innerHTML='<div class="workout-loading">Loading workouts...</div>';try{let n=[];if(j==="local"){const r=await nt();r.sort((c,g)=>g.startTime-c.startTime);const i=r.length;Y=Math.ceil(i/10)||1;const s=(L-1)*10;n=r.slice(s,s+10).map(St),a&&(a.textContent=`Page ${L} of ${Y} (${i} local)`)}else{const r={page:L,limit:10};A&&(r.sport=A),_&&(r.startDate=new Date(_)),G&&(r.endDate=new Date(G));const i=await Z(r);n=i.workouts;const{pagination:s}=i;Y=s.totalPages,a&&(a.textContent=`Page ${s.page} of ${s.totalPages} (${s.total} total)`)}if(e&&(e.disabled=L<=1),o&&(o.disabled=L>=Y),n.length===0){t.innerHTML=`
        <div class="workout-empty">
          <p>No workouts found</p>
          <p class="workout-empty-hint">Start a workout to see it here!</p>
        </div>
      `;return}t.innerHTML=n.map(r=>Bt(r)).join(""),t.querySelectorAll(".workout-card").forEach(r=>{const i=r.dataset.workoutId;i&&(r.querySelector(".workout-view-btn")?.addEventListener("click",s=>{s.stopPropagation(),N(i)}),r.querySelector(".workout-delete-btn")?.addEventListener("click",s=>{s.stopPropagation(),Wt(i)}),r.querySelector(".workout-sync-btn")?.addEventListener("click",s=>{s.stopPropagation(),Ct(i)}))})}catch(n){console.error("Failed to load workouts:",n);const r=n instanceof Error?n.message:"Unknown error";t.innerHTML=`
      <div class="workout-error">
        <p>Failed to load workouts</p>
        <p class="workout-error-detail">${r}</p>
      </div>
    `}}}function at(t){j!==t&&(j=t,dt(),L=1,B())}function dt(){const t=document.getElementById("sourceCloudBtn"),a=document.getElementById("sourceLocalBtn");t&&a&&(j==="cloud"?(t.classList.add("active"),t.setAttribute("aria-pressed","true"),t.style.background="var(--color-bg-active)",a.classList.remove("active"),a.setAttribute("aria-pressed","false"),a.style.background="transparent"):(a.classList.add("active"),a.setAttribute("aria-pressed","true"),a.style.background="var(--color-bg-active)",t.classList.remove("active"),t.setAttribute("aria-pressed","false"),t.style.background="transparent"))}async function Ct(t){const e=(await nt()).find(o=>o.id===t);if(e)try{q("Syncing workout...","polite");const o=await vt({streamName:`sync-${t}`,title:`Synced: ${I(new Date(e.startTime))}`,sport:"cycling"});if(o.success&&o.workout)if((await ht(o.workout.id,!1)).success)await ut(t),q("Workout synced successfully","assertive"),await B();else throw new Error("Failed to complete workout on server")}catch(o){console.error("Sync failed",o),q("Sync failed","assertive")}}function Bt(t){const a=t.status.toLowerCase(),e=P(t),n=t._synced===!1?'<button class="workout-sync-btn" title="Upload to server">☁️ Sync</button>':t._synced===!0?'<span title="Synced" style="margin-right:8px;">✅</span>':"";return`
    <div class="workout-card" data-workout-id="${t.id}">
      <div class="workout-card-header">
        <span class="workout-title">${t.title||"Untitled Workout"}</span>
        <span class="workout-status workout-status-${a}">${t.status}</span>
      </div>
      <div class="workout-card-body">
        <div class="workout-date">
          📅 ${I(t.startTime)}
        </div>
        <div class="workout-stats">
          ${t.duration?`<span class="workout-stat">⏱️ ${D(t.duration)}</span>`:""}
          ${e.avgPower?`<span class="workout-stat">⚡ ${e.avgPower}W avg</span>`:""}
          ${e.maxPower?`<span class="workout-stat">⚡ ${e.maxPower}W max</span>`:""}
          ${e.avgHeartrate?`<span class="workout-stat">❤️ ${e.avgHeartrate} bpm</span>`:""}
          ${e.totalEnergy?`<span class="workout-stat">🔥 ${e.totalEnergy} kJ</span>`:""}
        </div>
      </div>
      <div class="workout-card-actions">
        ${n}
        <button class="workout-view-btn" title="View details">👁️ View</button>
        <button class="workout-delete-btn" title="Delete workout">🗑️</button>
      </div>
    </div>
  `}async function N(t){const a=document.getElementById("workoutDetailPanel"),e=document.getElementById("workoutListPanel");if(!(!a||!e)){e.style.display="none",a.style.display="block",a.innerHTML='<div class="workout-loading">Loading workout details...</div>';try{const o=await pt(t,!0);a.innerHTML=Pt(o),o.telemetry&&requestAnimationFrame(()=>{Vt(o.telemetry,o.startTime)}),a.querySelector(".workout-back-btn")?.addEventListener("click",()=>{a.style.display="none",e.style.display="block"}),a.querySelector(".workout-export-btn")?.addEventListener("click",()=>{It(o)}),a.querySelector(".workout-crop-btn")?.addEventListener("click",()=>{_t(o)})}catch(o){console.error("Failed to load workout details:",o);const n=o instanceof Error?o.message:"Unknown error";a.innerHTML=`
      <div class="workout-error">
        <p>Failed to load workout</p>
        <p class="workout-error-detail">${n}</p>
        <button class="workout-back-btn">← Back to list</button>
      </div>
    `,a.querySelector(".workout-back-btn")?.addEventListener("click",()=>{a.style.display="none",e.style.display="block"})}}}function Pt(t){const a=P(t),e=t.status.toLowerCase();return`
    <div class="workout-detail">
      <div class="workout-detail-header">
        <button class="workout-back-btn">← Back</button>
        <h3>${t.title||"Untitled Workout"}</h3>
        <span class="workout-status workout-status-${e}">${t.status}</span>
      </div>

      <div class="workout-detail-meta">
        <div class="meta-item">
          <span class="meta-label">Sport</span>
          <span class="meta-value">${t.sport||"cycling"}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Start Time</span>
          <span class="meta-value">${I(t.startTime)}</span>
        </div>
        ${t.endTime?`
          <div class="meta-item">
            <span class="meta-label">End Time</span>
            <span class="meta-value">${I(t.endTime)}</span>
          </div>
        `:""}
        ${t.duration?`
          <div class="meta-item">
            <span class="meta-label">Duration</span>
            <span class="meta-value">${D(t.duration)}</span>
          </div>
        `:""}
      </div>

      ${Object.keys(a).length>0?`
        <div class="workout-detail-summary">
          <h4>Summary</h4>
          <div class="summary-grid">
            ${a.avgPower?`
              <div class="summary-item">
                <span class="summary-label">Avg Power</span>
                <span class="summary-value">${a.avgPower} W</span>
              </div>
            `:""}
            ${a.maxPower?`
              <div class="summary-item">
                <span class="summary-label">Max Power</span>
                <span class="summary-value">${a.maxPower} W</span>
              </div>
            `:""}
            ${a.avgCadence?`
              <div class="summary-item">
                <span class="summary-label">Avg Cadence</span>
                <span class="summary-value">${a.avgCadence} rpm</span>
              </div>
            `:""}
            ${a.avgHeartrate?`
              <div class="summary-item">
                <span class="summary-label">Avg Heart Rate</span>
                <span class="summary-value">${a.avgHeartrate} bpm</span>
              </div>
            `:""}
            ${a.totalEnergy?`
              <div class="summary-item">
                <span class="summary-label">Total Energy</span>
                <span class="summary-value">${a.totalEnergy} kJ</span>
              </div>
            `:""}
          </div>
        </div>
      `:""}

      ${t.telemetry?`
        <div class="workout-detail-charts">
            <h4>Charts</h4>
            <div id="wd-chart-power" class="chart-container" style="height: 200px; margin-bottom: 20px;"></div>
            <div id="wd-chart-hr" class="chart-container" style="height: 200px; margin-bottom: 20px;"></div>
            <div id="wd-chart-cadence" class="chart-container" style="height: 200px; margin-bottom: 20px;"></div>
            <div id="wd-chart-altitude" class="chart-container" style="height: 200px; margin-bottom: 20px;"></div>
        </div>
      `:""}

      ${t.description?`
        <div class="workout-detail-description">
          <h4>Notes</h4>
          <p>${t.description}</p>
        </div>
      `:""}

      <div class="workout-detail-actions">
        ${t.telemetry?`
          <button class="workout-action-btn workout-crop-btn">✂️ Crop</button>
          <button class="workout-export-btn">💾 Export Data</button>
        `:""}
      </div>
    </div>
  `}function It(t){const e=`workout-${new Date(t.startTime).toISOString().replace(/[:.]/g,"-").slice(0,19)}`,o={id:t.id,title:t.title,sport:t.sport,startTime:t.startTime,endTime:t.endTime,duration:t.duration,summary:t.summary,telemetry:t.telemetry},n=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=`${e}.json`,i.click(),URL.revokeObjectURL(r)}async function Wt(t){if(confirm("Are you sure you want to delete this workout? This cannot be undone."))try{await gt(t),await B()}catch(a){console.error("Failed to delete workout:",a);const e=a instanceof Error?a.message:"Unknown error";alert(`Failed to delete workout: ${e}`)}}async function V(){const t=document.getElementById("workoutCalendarGrid"),a=document.getElementById("calendarMonthLabel");if(!t||!a)return;const e=["January","February","March","April","May","June","July","August","September","October","November","December"];a.textContent=`${e[C.getMonth()]} ${C.getFullYear()}`,t.innerHTML='<div style="grid-column: 1 / -1; text-align: center; padding: 20px;">Loading calendar...</div>';const o=C.getFullYear(),n=C.getMonth(),r=new Date(o,n,1),i=new Date(o,n+1,0,23,59,59,999);try{const s={startDate:r,endDate:i,limit:1e3};A&&(s.sport=A);const c=(await Z(s)).workouts;Ht(c),Ft(c)}catch(s){console.error("Failed to load calendar:",s),t.innerHTML='<div style="grid-column: 1 / -1; text-align: center; color: var(--color-error);">Failed to load calendar data</div>'}}function Ht(t){const a=document.getElementById("workoutCalendarGrid");if(!a)return;a.innerHTML="",["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach(s=>{const l=document.createElement("div");l.textContent=s,l.style.textAlign="center",l.style.fontWeight="bold",l.style.padding="4px",l.style.fontSize="0.9em",l.style.color="var(--color-text-secondary)",a.appendChild(l)});const o=C.getFullYear(),n=C.getMonth(),r=new Date(o,n,1).getDay(),i=new Date(o,n+1,0).getDate();for(let s=0;s<r;s++){const l=document.createElement("div");a.appendChild(l)}for(let s=1;s<=i;s++){const l=document.createElement("div");l.style.border="1px solid var(--color-border)",l.style.borderRadius="4px",l.style.minHeight="60px",l.style.padding="4px",l.style.background="var(--card-bg)",l.style.position="relative";const c=document.createElement("div");c.textContent=s.toString(),c.style.fontSize="0.8em",c.style.marginBottom="4px",l.appendChild(c),t.filter(p=>{const d=new Date(p.startTime);return d.getDate()===s&&d.getMonth()===n&&d.getFullYear()===o}).forEach(p=>{const d=document.createElement("div");d.title=`${p.title||"Workout"} (${D(p.duration||0)})`,d.style.fontSize="0.7em",d.style.whiteSpace="nowrap",d.style.overflow="hidden",d.style.textOverflow="ellipsis",d.style.cursor="pointer",d.style.padding="2px",d.style.marginTop="2px",d.style.borderRadius="2px",d.style.background="var(--color-bg-active)",d.style.color="var(--color-text-primary)";const h=p.sport==="running"?"🏃":"🚴";d.textContent=`${h} ${D(p.duration||0)}`,d.addEventListener("click",f=>{f.stopPropagation(),N(p.id)}),l.appendChild(d)});const m=new Date;s===m.getDate()&&n===m.getMonth()&&o===m.getFullYear()&&(l.style.borderColor="var(--color-accent)",c.style.fontWeight="bold",c.style.color="var(--color-accent)"),a.appendChild(l)}}function Ft(t){const a=document.getElementById("monthlyStats");if(!a)return;const e=t.length,o=t.reduce((i,s)=>i+(s.duration||0),0),n=t.reduce((i,s)=>{const l=P(s);return i+(l.totalDistance||0)},0),r=t.reduce((i,s)=>{const l=P(s);return i+(l.totalEnergy||0)},0);a.innerHTML=`
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Workouts</div>
            <div style="font-weight: bold;">${e}</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Duration</div>
            <div style="font-weight: bold;">${D(o)}</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Distance</div>
            <div style="font-weight: bold;">${(n/1e3).toFixed(1)} km</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Energy</div>
            <div style="font-weight: bold;">${r.toFixed(0)} kJ</div>
        </div>
    `}async function K(){if(!document.getElementById("workoutAnalyticsView"))return;const a=document.getElementById("prList");a&&(a.innerHTML='<div style="padding: 12px; text-align: center;">Loading records...</div>');try{const e={limit:1e3};A&&(e.sport=A),_&&(e.startDate=new Date(_)),G&&(e.endDate=new Date(G));const n=(await Z(e)).workouts;let r=[];if(n.length>0&&n[0].userId)try{r=await bt(n[0].userId)}catch(i){console.warn("Failed to load FTP history",i)}At(n,r)}catch(e){console.error("Failed to load analytics:",e),a&&(a.innerHTML='<div style="color: var(--color-error); text-align: center;">Failed to load data</div>')}}function At(t,a=[]){kt("workoutAnalyticsView",t),jt(t),Nt(t),Ot(t),Rt(t),Ut(a),Yt(t)}function jt(t){const a=document.getElementById("prList");if(!a)return;let e={val:0,date:"",id:""},o={val:0,date:"",id:""},n={val:0,date:"",id:""},r={val:0,date:"",id:""};t.forEach(s=>{const l=P(s),c=I(s.startTime);l.maxPower&&l.maxPower>e.val&&(e={val:l.maxPower,date:c,id:s.id}),l.maxHeartrate&&l.maxHeartrate>o.val&&(o={val:l.maxHeartrate,date:c,id:s.id}),s.duration&&s.duration>n.val&&(n={val:s.duration,date:c,id:s.id}),l.totalDistance&&l.totalDistance>r.val&&(r={val:l.totalDistance,date:c,id:s.id})});const i=(s,l,c,g)=>`
        <div class="pr-row" data-id="${g}" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--color-border); cursor: pointer;">
            <div style="font-weight: 500;">${s}</div>
            <div style="text-align: right;">
                <div style="font-weight: bold; color: var(--color-accent);">${l}</div>
                <div style="font-size: 0.8em; color: var(--color-text-secondary);">${c}</div>
            </div>
        </div>
    `;a.innerHTML=`
        ${e.val>0?i("Max Power (1s)",`${e.val} W`,e.date,e.id):""}
        ${o.val>0?i("Max Heart Rate",`${o.val} bpm`,o.date,o.id):""}
        ${n.val>0?i("Longest Duration",D(n.val),n.date,n.id):""}
        ${r.val>0?i("Longest Distance",`${(r.val/1e3).toFixed(1)} km`,r.date,r.id):""}
    `,a.querySelectorAll(".pr-row").forEach(s=>{s.addEventListener("click",()=>{const l=s.dataset.id;l&&N(l)})})}function Nt(t){const a=document.getElementById("trainingLoadChart");if(!a)return;const e={};for(let n=3;n>=0;n--){const r=new Date;r.setDate(r.getDate()-n*7);const i=ot(r);e[`${r.getFullYear()}-W${i}`]=0}t.forEach(n=>{const r=P(n);if(r.trainingLoad){const i=new Date(n.startTime),s=`${i.getFullYear()}-W${ot(i)}`;e[s]!==void 0&&(e[s]+=r.trainingLoad)}});const o=Math.max(...Object.values(e),100);a.innerHTML=Object.entries(e).map(([n,r])=>{const i=r/o*100;return`
            <div style="display: flex; flex-direction: column; align-items: center; width: 20%;">
                <div style="font-size: 0.8em; font-weight: bold; margin-bottom: 4px;">${Math.round(r)}</div>
                <div style="width: 100%; height: 100px; display: flex; align-items: flex-end; justify-content: center;">
                    <div style="width: 80%; background: var(--color-accent); height: ${i}%; border-radius: 4px 4px 0 0; min-height: 4px;"></div>
                </div>
                <div style="font-size: 0.7em; color: var(--color-text-secondary); margin-top: 4px;">${n.split("-")[1]}</div>
            </div>
        `}).join("")}function ot(t){t=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),t.setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));const a=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t.getTime()-a.getTime())/864e5+1)/7)}function Ot(t){const a=document.getElementById("powerCurveChart");if(!a)return;const e={},o=[1,5,10,30,60,300,1200,3600];if(t.forEach(m=>{const p=P(m);p.powerCurve&&p.powerCurve.forEach(d=>{(!e[d.duration]||d.watts>e[d.duration])&&(e[d.duration]=d.watts)}),p.maxPower&&(!e[1]||p.maxPower>e[1])&&(e[1]=p.maxPower)}),Object.keys(e).length===0){a.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">No power data available</div>';return}const n=a.clientWidth||300,r=200,i=30,s=Math.max(...Object.values(e))*1.1,l=o.map((m,p)=>{if(!e[m])return null;const d=i+p*((n-i*2)/(o.length-1)),h=r-i-e[m]/s*(r-i*2);return{x:d,y:h,val:e[m],duration:m}}).filter(m=>m!==null);if(l.length<2){a.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">Insufficient data points</div>';return}const c=`M ${l.map(m=>`${m.x},${m.y}`).join(" L ")}`,g=`
        <svg width="100%" height="100%" viewBox="0 0 ${n} ${r}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${i}" y1="${i}" x2="${i}" y2="${r-i}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${i}" y1="${r-i}" x2="${n-i}" y2="${r-i}" stroke="var(--color-border)" stroke-width="1" />
            
            <!-- Path -->
            <path d="${c}" fill="none" stroke="var(--color-accent)" stroke-width="2" />
            
            <!-- Points -->
            ${l.map(m=>`
                <circle cx="${m.x}" cy="${m.y}" r="4" fill="var(--card-bg)" stroke="var(--color-accent)" stroke-width="2" />
                <text x="${m.x}" y="${m.y-10}" text-anchor="middle" font-size="10" fill="var(--color-text-primary)">${m.val}W</text>
                <text x="${m.x}" y="${r-10}" text-anchor="middle" font-size="10" fill="var(--color-text-secondary)">${zt(m.duration)}</text>
            `).join("")}
        </svg>
    `;a.innerHTML=g}function zt(t){return t<60?`${t}s`:t<3600?`${t/60}m`:`${t/3600}h`}function Rt(t){const a=document.getElementById("fitnessTrendChart");if(!a)return;const e=[...t].sort((x,M)=>new Date(x.startTime).getTime()-new Date(M.startTime).getTime());if(e.length<2){a.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">Not enough data for trend analysis</div>';return}const o=new Map;e.forEach(x=>{const M=P(x);if(M.trainingLoad){const $=new Date(x.startTime).toISOString().split("T")[0],E=o.get($)||0;o.set($,E+M.trainingLoad)}});const n=[],r=new Date(e[0].startTime),i=new Date,s=Math.exp(-1/42),l=Math.exp(-1/7);let c=0,g=0;for(let x=new Date(r);x<=i;x.setDate(x.getDate()+1)){const M=x.toISOString().split("T")[0],$=o.get(M)||0;c=c*s+$*(1-s),g=g*l+$*(1-l),n.push({date:new Date(x),ctl:c,atl:g,tsb:c-g})}const m=a.clientWidth||600,p=250,d={top:20,right:30,bottom:30,left:40},h=m-d.left-d.right,f=p-d.top-d.bottom,u=Math.max(...n.map(x=>Math.max(x.ctl,x.atl)))*1.1,v=i.getTime()-r.getTime();if(v===0)return;const y=x=>d.left+(x.getTime()-r.getTime())/v*h,b=x=>d.top+f-x/u*f,w="M "+n.map(x=>`${y(x.date)},${b(x.ctl)}`).join(" L "),T="M "+n.map(x=>`${y(x.date)},${b(x.atl)}`).join(" L "),W=`
        <svg width="100%" height="100%" viewBox="0 0 ${m} ${p}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${d.left}" y1="${d.top}" x2="${d.left}" y2="${p-d.bottom}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${d.left}" y1="${p-d.bottom}" x2="${m-d.right}" y2="${p-d.bottom}" stroke="var(--color-border)" stroke-width="1" />
            
            <!-- CTL Line (Fitness) - Blue -->
            <path d="${w}" fill="none" stroke="#3b82f6" stroke-width="2" />
            
            <!-- ATL Line (Fatigue) - Pink/Purple -->
            <path d="${T}" fill="none" stroke="#ec4899" stroke-width="2" stroke-dasharray="4" />
            
            <!-- Legend -->
            <g transform="translate(${d.left+10}, ${d.top})">
                <rect x="0" y="0" width="10" height="10" fill="#3b82f6" />
                <text x="15" y="10" font-size="12" fill="var(--color-text-secondary)">Fitness (CTL)</text>
                
                <rect x="100" y="0" width="10" height="10" fill="none" stroke="#ec4899" stroke-width="2" stroke-dasharray="4" />
                <text x="115" y="10" font-size="12" fill="var(--color-text-secondary)">Fatigue (ATL)</text>
            </g>

            <!-- Latest Stats -->
             <text x="${m-d.right}" y="${d.top}" text-anchor="end" font-size="12" fill="var(--color-text-primary)">
                CTL: ${Math.round(c)} | ATL: ${Math.round(g)} | TSB: ${Math.round(c-g)}
            </text>
        </svg>
    `;a.innerHTML=W}function Ut(t){const a=document.getElementById("ftpHistoryChart");if(!a)return;if(t.length===0){a.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">No FTP history available</div>';return}const e=[...t].sort((y,b)=>new Date(y.createdAt).getTime()-new Date(b.createdAt).getTime()),o=a.clientWidth||600,n=200,r={top:20,right:30,bottom:30,left:40},i=o-r.left-r.right,s=n-r.top-r.bottom,l=Math.max(...e.map(y=>y.ftp))*1.1,c=Math.max(0,Math.min(...e.map(y=>y.ftp))*.9),g=l-c||100,m=new Date(e[0].createdAt),d=new Date().getTime()-m.getTime(),h=y=>{const b=new Date(y);return r.left+(b.getTime()-m.getTime())/d*i},f=y=>r.top+s-(y-c)/g*s;let u="";if(e.length>0){u=`M ${h(e[0].createdAt)},${f(e[0].ftp)}`;for(let y=1;y<e.length;y++){const b=h(e[y].createdAt),w=f(e[y-1].ftp),T=f(e[y].ftp);u+=` L ${b},${w} L ${b},${T}`}u+=` L ${o-r.right},${f(e[e.length-1].ftp)}`}const v=`
        <svg width="100%" height="100%" viewBox="0 0 ${o} ${n}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${r.left}" y1="${r.top}" x2="${r.left}" y2="${n-r.bottom}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${r.left}" y1="${n-r.bottom}" x2="${o-r.right}" y2="${n-r.bottom}" stroke="var(--color-border)" stroke-width="1" />
            
            <!-- FTP Line -->
            <path d="${u}" fill="none" stroke="var(--color-accent)" stroke-width="2" />
            
            <!-- Points -->
            ${e.map(y=>`
                <circle cx="${h(y.createdAt)}" cy="${f(y.ftp)}" r="4" fill="var(--card-bg)" stroke="var(--color-accent)" stroke-width="2">
                    <title>${y.ftp} W (${I(y.createdAt)})</title>
                </circle>
                <text x="${h(y.createdAt)}" y="${f(y.ftp)-10}" text-anchor="middle" font-size="10" fill="var(--color-text-primary)">${y.ftp}</text>
            `).join("")}

            <!-- Axis Labels (simplified) -->
            <text x="${r.left}" y="${n-10}" font-size="10" fill="var(--color-text-secondary)">${I(m)}</text>
            <text x="${o-r.right}" y="${n-10}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">Today</text>
        </svg>
    `;a.innerHTML=v}function Yt(t){const a=document.getElementById("prHistoryList");if(!a)return;const e=[...t].sort((l,c)=>new Date(l.startTime).getTime()-new Date(c.startTime).getTime()),o=[];let n=0,r=0;const i={};if(e.forEach(l=>{const c=P(l),g=I(l.startTime);if(c.maxPower&&c.maxPower>n){if(n>0){const m=c.maxPower-n;o.push({date:g,metric:"Max Power",value:`${c.maxPower} W`,improvement:`+${m} W`,workoutId:l.id})}else o.push({date:g,metric:"Max Power",value:`${c.maxPower} W`,improvement:"New!",workoutId:l.id});n=c.maxPower}if(c.maxHeartrate&&c.maxHeartrate>r){if(r>0){const m=c.maxHeartrate-r;o.push({date:g,metric:"Max Heart Rate",value:`${c.maxHeartrate} bpm`,improvement:`+${m} bpm`,workoutId:l.id})}else o.push({date:g,metric:"Max Heart Rate",value:`${c.maxHeartrate} bpm`,improvement:"New!",workoutId:l.id});r=c.maxHeartrate}if(c.powerCurve){const m=[60,300,1200],p={60:"1m Power",300:"5m Power",1200:"20m Power"};c.powerCurve.forEach(d=>{if(m.includes(d.duration)){const h=i[d.duration]||0;d.watts>h&&(h>0?o.push({date:g,metric:p[d.duration],value:`${d.watts} W`,improvement:`+${d.watts-h} W`,workoutId:l.id}):o.push({date:g,metric:p[d.duration],value:`${d.watts} W`,improvement:"New!",workoutId:l.id}),i[d.duration]=d.watts)}})}}),o.length===0){a.innerHTML='<div style="text-align: center; color: var(--color-text-secondary); padding: 20px;">No records found</div>';return}const s=o.reverse();a.innerHTML=s.map(l=>`
        <div class="pr-history-row" data-id="${l.workoutId}" style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border-bottom: 1px solid var(--color-border); cursor: pointer;">
            <div style="flex: 1;">
                <div style="font-weight: 500;">${l.metric}</div>
                <div style="font-size: 0.8em; color: var(--color-text-secondary);">${l.date}</div>
            </div>
            <div style="text-align: right;">
                <div style="font-weight: bold; color: var(--color-accent);">${l.value}</div>
                <div style="font-size: 0.8em; color: var(--color-success);">${l.improvement}</div>
            </div>
        </div>
    `).join(""),a.querySelectorAll(".pr-history-row").forEach(l=>{l.addEventListener("click",()=>{const c=l.dataset.id;c&&N(c)})})}async function rt(){F==="list"?await B():F==="calendar"?await V():F==="analytics"&&await K()}function Vt(t,a){try{const e=JSON.parse(t),o=typeof a=="string"?new Date(a).getTime():a,n=document.getElementById("wd-chart-power");if(n&&e.power&&e.power.length>0){const l=e.power.map(c=>({x:c.timestamp-o,y:c.value}));R(n,l,{title:"Power",color:"#fbbf24",yLabel:"Watts",yMin:0})}else n&&(n.style.display="none");const r=document.getElementById("wd-chart-hr");if(r&&e.heartrate&&e.heartrate.length>0){const l=e.heartrate.map(c=>({x:c.timestamp-o,y:c.value}));R(r,l,{title:"Heart Rate",color:"#f87171",yLabel:"BPM",yMin:40})}else r&&(r.style.display="none");const i=document.getElementById("wd-chart-cadence");if(i&&e.cadence&&e.cadence.length>0){const l=e.cadence.map(c=>({x:c.timestamp-o,y:c.value}));R(i,l,{title:"Cadence",color:"#60a5fa",yLabel:"RPM",yMin:0})}else i&&(i.style.display="none");const s=document.getElementById("wd-chart-altitude");if(s&&e.altitude&&e.altitude.length>0){const c=e.altitude.map(g=>({x:g.timestamp-o,y:g.value})).filter(g=>g.y!==0);c.length>0?R(s,c,{title:"Altitude",color:"#34d399",yLabel:"Meters"}):s.style.display="none"}else s&&(s.style.display="none")}catch(e){console.error("Failed to parse telemetry for charts",e)}}function _t(t){if(!t.telemetry||!t.startTime){alert("No telemetry data available for cropping");return}const a=document.getElementById("workoutDetailPanel");if(!a)return;let e=null;try{e=JSON.parse(t.telemetry)}catch(u){console.error("Invalid telemetry",u),alert("Failed to parse workout data");return}if(!e)return;const o=new Date(t.startTime).getTime(),n=t.endTime?new Date(t.endTime).getTime():o+(t.duration||0)*1e3;let r=o,i=n;const s=n-o;a.innerHTML=`
    <div class="workout-crop-tool">
      <div class="workout-detail-header">
        <button id="cancelCropBtn" class="workout-back-btn">Cancel</button>
        <h3>Crop Workout</h3>
        <button id="saveCropBtn" class="workout-action-btn workout-status-completed">Save Changes</button>
      </div>

      <div class="crop-controls" style="margin: 20px 0; padding: 20px; background: var(--color-bg-secondary); border-radius: 8px;">
         <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
             <div>
                 <label>Start Time offset</label>
                 <div class="value-display" id="cropStartDisplay">00:00</div>
                 <input type="range" id="cropStartSlider" min="0" max="${s}" value="0" style="width: 100%">
             </div>
             <div style="text-align: right;">
                 <label>End Time offset</label>
                 <div class="value-display" id="cropEndDisplay">${D(s/1e3)}</div>
                 <input type="range" id="cropEndSlider" min="0" max="${s}" value="${s}" style="width: 100%">
             </div>
         </div>
         
         <div style="text-align: center; font-weight: bold; margin-bottom: 10px;">
            New Duration: <span id="cropDurationDisplay">${D(s/1e3)}</span>
         </div>
         
         <div id="cropPreviewChart" style="height: 150px; background: var(--card-bg); border-radius: 8px;"></div>
      </div>
      
      <div class="crop-info" style="font-size: 0.9em; color: var(--color-text-secondary); margin-top: 10px;">
          <p>⚠️ Saving will overwrite the original workout data. This cannot be undone.</p>
      </div>
    </div>
  `;const l=document.getElementById("cropStartSlider"),c=document.getElementById("cropEndSlider"),g=document.getElementById("cropStartDisplay"),m=document.getElementById("cropEndDisplay"),p=document.getElementById("cropDurationDisplay"),d=document.getElementById("cropPreviewChart"),h=()=>{if(e&&e.power){const v=et(e,o,r,i).measurements.power.map(y=>({x:y.timestamp-r,y:y.value}));R(d,v,{title:"Preview (Power)",color:"#fbbf24",yMin:0,height:150})}},f=()=>{const u=parseInt(l.value),v=parseInt(c.value);if(u>=v){document.activeElement===l?l.value=(v-1e4).toString():c.value=(u+1e4).toString();return}r=o+parseInt(l.value),i=o+parseInt(c.value),g&&(g.textContent=D(parseInt(l.value)/1e3)),m&&(m.textContent=D(parseInt(c.value)/1e3)),p&&(p.textContent=D((i-r)/1e3)),h()};l.addEventListener("input",f),c.addEventListener("input",f),setTimeout(h,0),document.getElementById("cancelCropBtn")?.addEventListener("click",()=>{N(t.id)}),document.getElementById("saveCropBtn")?.addEventListener("click",async()=>{const u=document.getElementById("saveCropBtn");u.disabled=!0,u.textContent="Saving...";try{const v=et(e,o,r,i);if(it()){const{saveCompletedWorkout:y}=await mt(async()=>{const{saveCompletedWorkout:b}=await import("./feature-bluetooth-WlFmxkI9.js").then(w=>w.y);return{saveCompletedWorkout:b}},[]);await y(v.measurements,v.startTime,v.endTime),v.startTime}if(j==="local"||t.id.startsWith("workout_")?(v.startTime,alert("Workout cropped and saved locally.")):alert("Cropping currently only supported for local workouts (Server update not implemented). Changes are saved to local history."),v.startTime!==o&&t.id.startsWith("workout_")){const y=document.getElementById("workoutListPanel");a&&y&&(a.style.display="none",y.style.display="block",document.getElementById("historyRefresh")?.click())}else N(t.id)}catch(v){console.error("Failed to save crop",v),alert("Error saving cropped workout"),u.disabled=!1,u.textContent="Save Changes"}})}class Zt{id="history";isInitialized=!1;init(a){const e=document.getElementById("workoutHistoryTemplate");if(e){const o=e.content.cloneNode(!0);a.appendChild(o),setTimeout(()=>{Lt(),this.isInitialized=!0},0)}else console.error("History template not found!"),a.innerHTML="<p>Error loading history view</p>"}onEnter(){this.isInitialized?rt():setTimeout(()=>rt(),50)}onLeave(){}}export{Zt as HistoryView};
//# sourceMappingURL=HistoryView-DlKmdFTE.js.map
