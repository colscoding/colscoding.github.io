import{b as it,i as st,m as ut,_ as yt}from"./feature-bluetooth-WlFmxkI9.js";import{h as D,j as lt,k as pt,m as K,n as I,o as gt,p as vt,q as J,t as ht,u as ft}from"./index-N21XmhYf.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";const xt="https://api.bikepowertracker.com",wt="super-secret-bike-tracker-key";async function bt(t){const e={"Content-Type":"application/json"};e["X-API-Key"]=wt;const a=await fetch(`${xt}/api/users/${t}/ftp-history`,{headers:e});if(!a.ok)throw new Error(`Failed to fetch FTP history: ${a.statusText}`);return a.json()}function R(t,e,a={}){if(!t)return;const o=a.height||200,r=a.color||"var(--color-accent)",n=20,s=30,i=40,l=10;if(!e||e.length<2){t.innerHTML=`
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
        `;return}const c=$t(e,500),g=c.map(k=>k.x),u=c.map(k=>k.y),p=Math.min(...g),d=Math.max(...g);let h=a.yMin??Math.min(...u),f=a.yMax??Math.max(...u);const m=f-h;m===0?(f+=10,h-=10):(a.yMin===void 0&&(h-=m*.1),f+=m*.1);const v=t.clientWidth||t.parentElement?.clientWidth||600,y=k=>i+(k-p)/(d-p)*(v-i-l),w=k=>o-s-(k-h)/(f-h)*(o-n-s),b=`M ${c.map(k=>`${y(k.x).toFixed(1)},${w(k.y).toFixed(1)}`).join(" L ")}`,T=`${b} L ${y(c[c.length-1].x).toFixed(1)},${o-s} L ${y(c[0].x).toFixed(1)},${o-s} Z`,W=[],x=(f-h)/4;for(let k=0;k<=4;k++){const H=h+k*x,G=w(H);W.push(`
            <line x1="${i}" y1="${G}" x2="${v-l}" y2="${G}" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4" opacity="0.5" />
            <text x="${i-5}" y="${G+4}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">${Math.round(H)}</text>
        `)}const M=q(0),$=q((d-p)/2),E=q(d-p),S=`
        <svg width="100%" height="${o}" viewBox="0 0 ${v} ${o}" style="background: var(--card-bg); border-radius: 8px;">
            <defs>
                <linearGradient id="chartGradient-${a.title?.replace(/\s/g,"")}" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stop-color="${r}" stop-opacity="0.2"/>
                    <stop offset="100%" stop-color="${r}" stop-opacity="0"/>
                </linearGradient>
            </defs>

            <!-- Grid -->
            ${W.join("")}

            <!-- Axis Labels -->
            <text x="${i}" y="${o-10}" text-anchor="start" font-size="10" fill="var(--color-text-secondary)">${M}</text>
            <text x="${v/2}" y="${o-10}" text-anchor="middle" font-size="10" fill="var(--color-text-secondary)">${$}</text>
            <text x="${v-l}" y="${o-10}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">${E}</text>

            <!-- Data Area -->
            <path d="${T}" fill="url(#chartGradient-${a.title?.replace(/\s/g,"")})" stroke="none" />
            
            <!-- Data Line -->
            <path d="${b}" fill="none" stroke="${r}" stroke-width="2" vector-effect="non-scaling-stroke" />

            <!-- Title -->
            ${a.title?`<text x="${v/2}" y="15" text-anchor="middle" font-weight="bold" font-size="12" fill="var(--color-text-primary)">${a.title}</text>`:""}
        </svg>
    `;t.innerHTML=S}function $t(t,e){if(t.length<=e)return t;const a=Math.ceil(t.length/e),o=[];for(let r=0;r<t.length;r+=a)o.push(t[r]);return o}function q(t){const e=Math.floor(t/1e3),a=Math.floor(e/3600),o=Math.floor(e%3600/60),r=e%60;return a>0?`${a}:${o.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:`${o}:${r.toString().padStart(2,"0")}`}function kt(t,e,a={}){if(!t)return;const o=a.height||200,r=a.color||"var(--color-accent)",n=30,s=30,i=40,l=10,c=4;if(!e||e.length===0){t.innerHTML=`
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
        `;return}const g=e.map($=>$.y);let u=a.yMax??Math.max(...g)*1.1,p=a.yMin??0;u===p&&(u+=10);const d=t.clientWidth||t.parentElement?.clientWidth||600,h=d-i-l,f=Math.max(2,h/e.length-c),m=$=>i+$*(f+c)+c/2,v=$=>o-s-($-p)/(u-p)*(o-n-s),y=e.map(($,E)=>{const S=m(E),k=v($.y),H=Math.max(0,o-s-k);return H<=0||isNaN(k)||isNaN(H)?"":`<rect x="${S.toFixed(1)}" y="${k.toFixed(1)}" width="${f.toFixed(1)}" height="${H.toFixed(1)}" fill="${r}" rx="2" opacity="0.8" />`}),b=Math.max(1,Math.floor(e.length/7)),T=e.map(($,E)=>{if(E%b!==0)return"";const S=new Date($.x),k=`${S.getDate()}/${S.getMonth()+1}`;return`<text x="${(m(E)+f/2).toFixed(1)}" y="${o-5}" text-anchor="middle" font-size="10" fill="var(--color-text-secondary)">${k}</text>`}),W=[],x=(u-p)/4;for(let $=0;$<=4;$++){const E=p+$*x,S=v(E);W.push(`
            <line x1="${i}" y1="${S}" x2="${d-l}" y2="${S}" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4" opacity="0.3" />
            <text x="${i-5}" y="${S+4}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">${Math.round(E)}</text>
        `)}const M=`
        <svg width="100%" height="${o}" viewBox="0 0 ${d} ${o}" style="background: var(--card-bg); border-radius: 8px;">
            ${W.join("")}
            ${y.join("")}
            ${T.join("")}
            <!-- Axis Lines -->
            <line x1="${i}" y1="${n}" x2="${i}" y2="${o-s}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${i}" y1="${o-s}" x2="${d-l}" y2="${o-s}" stroke="var(--color-border)" stroke-width="1" />
            <!-- Title -->
             ${a.title?`<text x="${d/2}" y="15" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--color-text-primary)">${a.title}</text>`:""}
        </svg>
    `;t.innerHTML=M}const z=()=>({count:0,distance:0,duration:0,elevation:0,energy:0,avgPower:0,avgHr:0,avgCadence:0,weightedPowerSum:0,weightedHrSum:0,weightedCadenceSum:0,totalDurationForAvg:0});function ct(t){if(!t.summary)return{};if(typeof t.summary=="string")try{return JSON.parse(t.summary)}catch{return{}}return t.summary}let dt=[],U="distance";function Tt(t,e){const a=document.getElementById(t);if(!a)return;dt=e;let o=document.getElementById("periodStatsContainer");o||(o=document.createElement("div"),o.id="periodStatsContainer",o.style.display="grid",o.style.gap="16px",o.style.marginBottom="20px",a.insertBefore(o,a.firstChild)),Dt(o,e),Et(o)}function Dt(t,e){let a=document.getElementById("statsTableCard");a||(a=document.createElement("div"),a.id="statsTableCard",a.className="card",a.style.background="var(--card-bg)",a.style.padding="16px",a.style.borderRadius="8px",a.style.border="1px solid var(--color-border)",t.appendChild(a));const o=new Date,r=new Date(o),n=r.getDay()||7;n!==1?r.setHours(-24*(n-1)):r.setHours(0,0,0,0),r.setHours(0,0,0,0);const s=new Date(r);s.setDate(s.getDate()-7);const i=new Date(r),l=new Date(o.getFullYear(),o.getMonth(),1),c=new Date(o.getFullYear(),o.getMonth()-1,1),g=new Date(o.getFullYear(),o.getMonth(),0,23,59,59),u=new Date(o.getFullYear(),0,1),p={thisWeek:z(),lastWeek:z(),thisMonth:z(),lastMonth:z(),thisYear:z()};e.forEach(m=>{const v=new Date(m.startTime),y=ct(m),w=[];v>=r&&w.push(p.thisWeek),v>=s&&v<i&&w.push(p.lastWeek),v>=l&&w.push(p.thisMonth),v>=c&&v<=g&&w.push(p.lastMonth),v>=u&&w.push(p.thisYear),w.forEach(b=>{b.count++,b.duration+=m.duration||0,b.distance+=y.totalDistance||0,b.elevation+=y.totalElevationGain||0,y.totalEnergy?b.energy+=y.totalEnergy:y.avgPower&&m.duration&&(b.energy+=y.avgPower*m.duration/1e3);const T=m.duration||0;T>0&&(y.avgPower&&(b.weightedPowerSum+=y.avgPower*T),y.avgHeartrate&&(b.weightedHrSum+=y.avgHeartrate*T),y.avgCadence&&(b.weightedCadenceSum+=y.avgCadence*T),b.totalDurationForAvg+=T)})}),Object.values(p).forEach(m=>{m.totalDurationForAvg>0&&(m.avgPower=Math.round(m.weightedPowerSum/m.totalDurationForAvg),m.avgHr=Math.round(m.weightedHrSum/m.totalDurationForAvg),m.avgCadence=Math.round(m.weightedCadenceSum/m.totalDurationForAvg))});const d=m=>`<td style="padding: 8px; text-align: right; border-bottom: 1px solid var(--color-border);">${m}</td>`,f=[{label:"Workouts",key:"count",fmt:m=>m.toString()},{label:"Distance",key:"distance",fmt:m=>(m/1e3).toFixed(1)+" km"},{label:"Time",key:"duration",fmt:m=>D(m)},{label:"Elevation",key:"elevation",fmt:m=>m+" m"},{label:"Avg Power",key:"avgPower",fmt:m=>m+" W"},{label:"Avg HR",key:"avgHr",fmt:m=>m+" bpm"},{label:"Energy",key:"energy",fmt:m=>Math.round(m)+" kJ"}];a.innerHTML=`
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
                    ${f.map(m=>`
                        <tr>
                            <td style="padding: 8px; font-weight: 500; border-bottom: 1px solid var(--color-border);">${m.label}</td>
                            ${d(m.fmt(p.thisWeek[m.key]))}
                            ${d(m.fmt(p.lastWeek[m.key]))}
                            ${d(m.fmt(p.thisMonth[m.key]))}
                            ${d(m.fmt(p.lastMonth[m.key]))}
                            ${d(m.fmt(p.thisYear[m.key]))}
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Et(t){let e=document.getElementById("statsChartCard");e||(e=document.createElement("div"),e.id="statsChartCard",e.className="card",e.style.background="var(--card-bg)",e.style.padding="16px",e.style.borderRadius="8px",e.style.border="1px solid var(--color-border)",e.innerHTML=`
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
        `,t.appendChild(e),e.querySelector("#trendMetricSelect")?.addEventListener("change",o=>{U=o.target.value,Q()})),Q()}function Q(){const t=document.getElementById("trendChartContainer");if(!t)return;const e=document.getElementById("trendMetricSelect");e&&(e.value=U);const a={},o=new Date;for(let s=11;s>=0;s--){const i=new Date(o);i.setDate(i.getDate()-s*7);const l=tt(i);a[l]=0}dt.forEach(s=>{const i=new Date(s.startTime),l=tt(i);if(a.hasOwnProperty(l)){const c=ct(s);switch(U){case"distance":a[l]+=(c.totalDistance||0)/1e3;break;case"duration":a[l]+=s.duration||0;break;case"energy":c.totalEnergy?a[l]+=c.totalEnergy:c.avgPower&&s.duration&&(a[l]+=c.avgPower*s.duration/1e3);break;case"count":a[l]+=1;break}}});const r=Object.entries(a).sort((s,i)=>s[0].localeCompare(i[0])).map(([s,i])=>{const[l,c]=s.split("-W").map(Number);return{x:Lt(l,c).getTime(),y:i}});let n="";switch(U){case"distance":n="Distance (km)";break;case"duration":n="Time (hours)";break;case"energy":n="Energy (kJ)";break;case"count":n="Number of Workouts";break}U==="duration"&&r.forEach(s=>s.y=s.y/3600),kt(t,r,{title:n,height:200,color:"var(--color-accent)"})}function tt(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),a=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-a);const o=new Date(Date.UTC(e.getUTCFullYear(),0,1)),r=Math.ceil(((e.getTime()-o.getTime())/864e5+1)/7);return`${e.getUTCFullYear()}-W${r.toString().padStart(2,"0")}`}function Lt(t,e){const a=new Date(t,0,1+(e-1)*7),o=a.getDay(),r=a.getDate()-o+(o===0?-6:1);return new Date(a.setDate(r))}function et(t,e,a,o){const r=Math.max(e,a),n=Math.max(r,o),s=u=>u.filter(p=>p.timestamp>=r&&p.timestamp<=n),i={heartrate:s(t.heartrate||[]),power:s(t.power||[]),cadence:s(t.cadence||[]),speed:s(t.speed||[]),distance:s(t.distance||[]),altitude:s(t.altitude||[]),gps:(t.gps||[]).filter(u=>u.timestamp>=r&&u.timestamp<=n),treadmill:(t.treadmill||[]).filter(u=>u.timestamp>=r&&u.timestamp<=n),treadmillSpeed:s(t.treadmillSpeed||[]),laps:(t.laps||[]).filter(u=>u.timestamp>=r&&u.timestamp<=n)},l=Math.floor((n-r)/1e3),c=lt(r,n,{power:i.power,heartrate:i.heartrate,cadence:i.cadence}),g={startTime:r,endTime:n,totalDuration:l,avgPower:c.power.avg??void 0,maxPower:c.power.max??void 0,avgHeartrate:c.heartrate.avg??void 0,maxHeartrate:c.heartrate.max??void 0,avgCadence:c.cadence.avg??void 0,maxCadence:c.cadence.max??void 0};if(g.avgPower&&(g.totalEnergy=Math.round(g.avgPower*l/1e3)),i.distance.length>0){const u=i.distance[0].value,p=i.distance[i.distance.length-1].value;g.totalDistance=Math.max(0,p-u)}return{startTime:r,endTime:n,duration:l,measurements:i,summary:g}}let L=1,Y=1,O=!1,A="",Z="",_="",F="list",C=new Date,j="cloud";function B(t){if(!t.summary)return{};if(typeof t.summary=="string")try{return JSON.parse(t.summary)}catch{return{}}return t.summary}function Mt(){const t=document.getElementById("historyPrevPage"),e=document.getElementById("historyNextPage"),a=document.getElementById("historyRefresh"),o=document.getElementById("workoutTypeFilter"),r=document.getElementById("workoutDateStart"),n=document.getElementById("workoutDateEnd"),s=document.getElementById("viewListBtn"),i=document.getElementById("viewCalendarBtn"),l=document.getElementById("viewAnalyticsBtn"),c=document.getElementById("workoutListView"),g=document.getElementById("workoutCalendarView"),u=document.getElementById("workoutAnalyticsView"),p=document.getElementById("calendarPrevMonth"),d=document.getElementById("calendarNextMonth"),h=document.getElementById("sourceCloudBtn"),f=document.getElementById("sourceLocalBtn");h&&f&&(h.addEventListener("click",()=>at("cloud")),f.addEventListener("click",()=>at("local"))),St();const m=y=>{F=y,s&&(s.classList.toggle("active",y==="list"),s.setAttribute("aria-pressed",(y==="list").toString()),s.style.background=y==="list"?"var(--color-bg-active)":"transparent"),i&&(i.classList.toggle("active",y==="calendar"),i.setAttribute("aria-pressed",(y==="calendar").toString()),i.style.background=y==="calendar"?"var(--color-bg-active)":"transparent"),l&&(l.classList.toggle("active",y==="analytics"),l.setAttribute("aria-pressed",(y==="analytics").toString()),l.style.background=y==="analytics"?"var(--color-bg-active)":"transparent"),c&&(c.style.display=y==="list"?"block":"none"),g&&(g.style.display=y==="calendar"?"block":"none"),u&&(u.style.display=y==="analytics"?"block":"none")};s?.addEventListener("click",()=>{m("list"),P()}),i?.addEventListener("click",()=>{m("calendar"),V()}),l?.addEventListener("click",()=>{m("analytics"),X()});const v=()=>{o&&(A=o.value),r&&(Z=r.value),n&&(_=n.value),L=1,F==="list"?P():F==="calendar"?V():F==="analytics"&&X()};o?.addEventListener("change",v),r?.addEventListener("change",v),n?.addEventListener("change",v),p?.addEventListener("click",()=>{C.setMonth(C.getMonth()-1),V()}),d?.addEventListener("click",()=>{C.setMonth(C.getMonth()+1),V()}),t?.addEventListener("click",async()=>{L>1&&(L--,await P())}),e?.addEventListener("click",async()=>{L<Y&&(L++,await P())}),a?.addEventListener("click",async()=>{await P()})}async function St(){const t=document.getElementById("workoutHistoryButton"),e=st();try{O=await pt()}catch{O=!1}!O&&e&&(j="local",mt()),t&&(t.disabled=!(O||e),t.title=O||e?"View workout history":"History not available")}function Ct(t){const e=lt(t.startTime,t.lastUpdated,t.measurements);return{id:t.id,title:"Local Workout",sport:"cycling",startTime:new Date(t.startTime).toISOString(),endTime:new Date(t.lastUpdated).toISOString(),duration:Math.round((t.lastUpdated-t.startTime)/1e3),status:"COMPLETED",summary:JSON.stringify(e),createdAt:new Date(t.startTime).toISOString(),updatedAt:new Date(t.lastUpdated).toISOString(),_synced:t.synced}}async function P(){const t=document.getElementById("workoutList"),e=document.getElementById("historyPageInfo"),a=document.getElementById("historyPrevPage"),o=document.getElementById("historyNextPage");if(t){t.innerHTML='<div class="workout-loading">Loading workouts...</div>';try{let r=[];if(j==="local"){const n=await it();n.sort((c,g)=>g.startTime-c.startTime);const s=n.length;Y=Math.ceil(s/10)||1;const i=(L-1)*10;r=n.slice(i,i+10).map(Ct),e&&(e.textContent=`Page ${L} of ${Y} (${s} local)`)}else{const n={page:L,limit:10};A&&(n.sport=A),Z&&(n.startDate=new Date(Z)),_&&(n.endDate=new Date(_));const s=await K(n);r=s.workouts;const{pagination:i}=s;Y=i.totalPages,e&&(e.textContent=`Page ${i.page} of ${i.totalPages} (${i.total} total)`)}if(a&&(a.disabled=L<=1),o&&(o.disabled=L>=Y),r.length===0){t.innerHTML=`
        <div class="workout-empty">
          <p>No workouts found</p>
          <p class="workout-empty-hint">Start a workout to see it here!</p>
        </div>
      `;return}t.innerHTML=r.map(n=>Pt(n)).join(""),t.querySelectorAll(".workout-card").forEach(n=>{const s=n.dataset.workoutId;s&&(n.querySelector(".workout-view-btn")?.addEventListener("click",i=>{i.stopPropagation(),N(s)}),n.querySelector(".workout-delete-btn")?.addEventListener("click",i=>{i.stopPropagation(),Ht(s)}),n.querySelector(".workout-sync-btn")?.addEventListener("click",i=>{i.stopPropagation(),Bt(s)}))})}catch(r){console.error("Failed to load workouts:",r);const n=r instanceof Error?r.message:"Unknown error";t.innerHTML=`
      <div class="workout-error">
        <p>Failed to load workouts</p>
        <p class="workout-error-detail">${n}</p>
      </div>
    `}}}function at(t){j!==t&&(j=t,mt(),L=1,P())}function mt(){const t=document.getElementById("sourceCloudBtn"),e=document.getElementById("sourceLocalBtn");t&&e&&(j==="cloud"?(t.classList.add("active"),t.setAttribute("aria-pressed","true"),t.style.background="var(--color-bg-active)",e.classList.remove("active"),e.setAttribute("aria-pressed","false"),e.style.background="transparent"):(e.classList.add("active"),e.setAttribute("aria-pressed","true"),e.style.background="var(--color-bg-active)",t.classList.remove("active"),t.setAttribute("aria-pressed","false"),t.style.background="transparent"))}async function Bt(t){const a=(await it()).find(o=>o.id===t);if(a)try{J("Syncing workout...","polite");const o=await ht({streamName:`sync-${t}`,title:`Synced: ${I(new Date(a.startTime))}`,sport:"cycling"});if(o.success&&o.workout)if((await ft(o.workout.id,!1)).success)await ut(t),J("Workout synced successfully","assertive"),await P();else throw new Error("Failed to complete workout on server")}catch(o){console.error("Sync failed",o),J("Sync failed","assertive")}}function Pt(t){const e=t.status.toLowerCase(),a=B(t),r=t._synced===!1?'<button class="workout-sync-btn" title="Upload to server">☁️ Sync</button>':t._synced===!0?'<span title="Synced" style="margin-right:8px;">✅</span>':"";return`
    <div class="workout-card" data-workout-id="${t.id}">
      <div class="workout-card-header">
        <span class="workout-title">${t.title||"Untitled Workout"}</span>
        <span class="workout-status workout-status-${e}">${t.status}</span>
      </div>
      <div class="workout-card-body">
        <div class="workout-date">
          📅 ${I(t.startTime)}
        </div>
        <div class="workout-stats">
          ${t.duration?`<span class="workout-stat">⏱️ ${D(t.duration)}</span>`:""}
          ${a.avgPower?`<span class="workout-stat">⚡ ${a.avgPower}W avg</span>`:""}
          ${a.maxPower?`<span class="workout-stat">⚡ ${a.maxPower}W max</span>`:""}
          ${a.avgHeartrate?`<span class="workout-stat">❤️ ${a.avgHeartrate} bpm</span>`:""}
          ${a.totalEnergy?`<span class="workout-stat">🔥 ${a.totalEnergy} kJ</span>`:""}
        </div>
      </div>
      <div class="workout-card-actions">
        ${r}
        <button class="workout-view-btn" title="View details">👁️ View</button>
        <button class="workout-delete-btn" title="Delete workout">🗑️</button>
      </div>
    </div>
  `}async function N(t){const e=document.getElementById("workoutDetailPanel"),a=document.getElementById("workoutListPanel");if(!(!e||!a)){a.style.display="none",e.style.display="block",e.innerHTML='<div class="workout-loading">Loading workout details...</div>';try{const o=await gt(t,!0);e.innerHTML=It(o);const r=B(o);r.powerZoneDistribution&&nt("wd-chart-power-zones",r.powerZoneDistribution,"Power Zones"),r.hrZoneDistribution&&nt("wd-chart-hr-zones",r.hrZoneDistribution,"Heart Rate Zones"),o.telemetry&&requestAnimationFrame(()=>{Gt(o.telemetry,o.startTime)}),e.querySelector(".workout-back-btn")?.addEventListener("click",()=>{e.style.display="none",a.style.display="block"}),e.querySelector(".workout-export-btn")?.addEventListener("click",()=>{Wt(o)}),e.querySelector(".workout-crop-btn")?.addEventListener("click",()=>{Jt(o)})}catch(o){console.error("Failed to load workout details:",o);const r=o instanceof Error?o.message:"Unknown error";e.innerHTML=`
      <div class="workout-error">
        <p>Failed to load workout</p>
        <p class="workout-error-detail">${r}</p>
        <button class="workout-back-btn">← Back to list</button>
      </div>
    `,e.querySelector(".workout-back-btn")?.addEventListener("click",()=>{e.style.display="none",a.style.display="block"})}}}function It(t){const e=B(t),a=t.status.toLowerCase();return`
    <div class="workout-detail">
      <div class="workout-detail-header">
        <button class="workout-back-btn">← Back</button>
        <h3>${t.title||"Untitled Workout"}</h3>
        <span class="workout-status workout-status-${a}">${t.status}</span>
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

      ${Object.keys(e).length>0?`
        <div class="workout-detail-summary">
          <h4>Summary</h4>
          <div class="summary-grid">
            ${e.avgPower?`
              <div class="summary-item">
                <span class="summary-label">Avg Power</span>
                <span class="summary-value">${e.avgPower} W</span>
              </div>
            `:""}
            ${e.maxPower?`
              <div class="summary-item">
                <span class="summary-label">Max Power</span>
                <span class="summary-value">${e.maxPower} W</span>
              </div>
            `:""}
            ${e.avgCadence?`
              <div class="summary-item">
                <span class="summary-label">Avg Cadence</span>
                <span class="summary-value">${e.avgCadence} rpm</span>
              </div>
            `:""}
            ${e.avgHeartrate?`
              <div class="summary-item">
                <span class="summary-label">Avg Heart Rate</span>
                <span class="summary-value">${e.avgHeartrate} bpm</span>
              </div>
            `:""}
            ${e.totalEnergy?`
              <div class="summary-item">
                <span class="summary-label">Total Energy</span>
                <span class="summary-value">${e.totalEnergy} kJ</span>
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
            
            <h4>Zone Distribution</h4>
            <div id="wd-chart-power-zones" class="chart-container" style="margin-bottom: 20px;"></div>
            <div id="wd-chart-hr-zones" class="chart-container" style="margin-bottom: 20px;"></div>
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
  `}function Wt(t){const a=`workout-${new Date(t.startTime).toISOString().replace(/[:.]/g,"-").slice(0,19)}`,o={id:t.id,title:t.title,sport:t.sport,startTime:t.startTime,endTime:t.endTime,duration:t.duration,summary:t.summary,telemetry:t.telemetry},r=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),n=URL.createObjectURL(r),s=document.createElement("a");s.href=n,s.download=`${a}.json`,s.click(),URL.revokeObjectURL(n)}async function Ht(t){if(confirm("Are you sure you want to delete this workout? This cannot be undone."))try{await vt(t),await P()}catch(e){console.error("Failed to delete workout:",e);const a=e instanceof Error?e.message:"Unknown error";alert(`Failed to delete workout: ${a}`)}}async function V(){const t=document.getElementById("workoutCalendarGrid"),e=document.getElementById("calendarMonthLabel");if(!t||!e)return;const a=["January","February","March","April","May","June","July","August","September","October","November","December"];e.textContent=`${a[C.getMonth()]} ${C.getFullYear()}`,t.innerHTML='<div style="grid-column: 1 / -1; text-align: center; padding: 20px;">Loading calendar...</div>';const o=C.getFullYear(),r=C.getMonth(),n=new Date(o,r,1),s=new Date(o,r+1,0,23,59,59,999);try{const i={startDate:n,endDate:s,limit:1e3};A&&(i.sport=A);const c=(await K(i)).workouts;Ft(c),At(c)}catch(i){console.error("Failed to load calendar:",i),t.innerHTML='<div style="grid-column: 1 / -1; text-align: center; color: var(--color-error);">Failed to load calendar data</div>'}}function Ft(t){const e=document.getElementById("workoutCalendarGrid");if(!e)return;e.innerHTML="",["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach(i=>{const l=document.createElement("div");l.textContent=i,l.style.textAlign="center",l.style.fontWeight="bold",l.style.padding="4px",l.style.fontSize="0.9em",l.style.color="var(--color-text-secondary)",e.appendChild(l)});const o=C.getFullYear(),r=C.getMonth(),n=new Date(o,r,1).getDay(),s=new Date(o,r+1,0).getDate();for(let i=0;i<n;i++){const l=document.createElement("div");e.appendChild(l)}for(let i=1;i<=s;i++){const l=document.createElement("div");l.style.border="1px solid var(--color-border)",l.style.borderRadius="4px",l.style.minHeight="60px",l.style.padding="4px",l.style.background="var(--card-bg)",l.style.position="relative";const c=document.createElement("div");c.textContent=i.toString(),c.style.fontSize="0.8em",c.style.marginBottom="4px",l.appendChild(c),t.filter(p=>{const d=new Date(p.startTime);return d.getDate()===i&&d.getMonth()===r&&d.getFullYear()===o}).forEach(p=>{const d=document.createElement("div");d.title=`${p.title||"Workout"} (${D(p.duration||0)})`,d.style.fontSize="0.7em",d.style.whiteSpace="nowrap",d.style.overflow="hidden",d.style.textOverflow="ellipsis",d.style.cursor="pointer",d.style.padding="2px",d.style.marginTop="2px",d.style.borderRadius="2px",d.style.background="var(--color-bg-active)",d.style.color="var(--color-text-primary)";const h=p.sport==="running"?"🏃":"🚴";d.textContent=`${h} ${D(p.duration||0)}`,d.addEventListener("click",f=>{f.stopPropagation(),N(p.id)}),l.appendChild(d)});const u=new Date;i===u.getDate()&&r===u.getMonth()&&o===u.getFullYear()&&(l.style.borderColor="var(--color-accent)",c.style.fontWeight="bold",c.style.color="var(--color-accent)"),e.appendChild(l)}}function At(t){const e=document.getElementById("monthlyStats");if(!e)return;const a=t.length,o=t.reduce((s,i)=>s+(i.duration||0),0),r=t.reduce((s,i)=>{const l=B(i);return s+(l.totalDistance||0)},0),n=t.reduce((s,i)=>{const l=B(i);return s+(l.totalEnergy||0)},0);e.innerHTML=`
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Workouts</div>
            <div style="font-weight: bold;">${a}</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Duration</div>
            <div style="font-weight: bold;">${D(o)}</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Distance</div>
            <div style="font-weight: bold;">${(r/1e3).toFixed(1)} km</div>
        </div>
        <div class="stat-item" style="background: var(--card-bg); padding: 8px; border-radius: 4px; text-align: center;">
            <div style="font-size: 0.8em; color: var(--color-text-secondary);">Energy</div>
            <div style="font-weight: bold;">${n.toFixed(0)} kJ</div>
        </div>
    `}async function X(){if(!document.getElementById("workoutAnalyticsView"))return;const e=document.getElementById("prList");e&&(e.innerHTML='<div style="padding: 12px; text-align: center;">Loading records...</div>');try{const a={limit:1e3};A&&(a.sport=A),Z&&(a.startDate=new Date(Z)),_&&(a.endDate=new Date(_));const r=(await K(a)).workouts;let n=[];if(r.length>0&&r[0].userId)try{n=await bt(r[0].userId)}catch(s){console.warn("Failed to load FTP history",s)}jt(r,n)}catch(a){console.error("Failed to load analytics:",a),e&&(e.innerHTML='<div style="color: var(--color-error); text-align: center;">Failed to load data</div>')}}function jt(t,e=[]){Tt("workoutAnalyticsView",t),Nt(t),zt(t),Ot(t),Ut(t),Yt(e),Vt(t)}function Nt(t){const e=document.getElementById("prList");if(!e)return;let a={val:0,date:"",id:""},o={val:0,date:"",id:""},r={val:0,date:"",id:""},n={val:0,date:"",id:""};t.forEach(i=>{const l=B(i),c=I(i.startTime);l.maxPower&&l.maxPower>a.val&&(a={val:l.maxPower,date:c,id:i.id}),l.maxHeartrate&&l.maxHeartrate>o.val&&(o={val:l.maxHeartrate,date:c,id:i.id}),i.duration&&i.duration>r.val&&(r={val:i.duration,date:c,id:i.id}),l.totalDistance&&l.totalDistance>n.val&&(n={val:l.totalDistance,date:c,id:i.id})});const s=(i,l,c,g)=>`
        <div class="pr-row" data-id="${g}" style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--color-border); cursor: pointer;">
            <div style="font-weight: 500;">${i}</div>
            <div style="text-align: right;">
                <div style="font-weight: bold; color: var(--color-accent);">${l}</div>
                <div style="font-size: 0.8em; color: var(--color-text-secondary);">${c}</div>
            </div>
        </div>
    `;e.innerHTML=`
        ${a.val>0?s("Max Power (1s)",`${a.val} W`,a.date,a.id):""}
        ${o.val>0?s("Max Heart Rate",`${o.val} bpm`,o.date,o.id):""}
        ${r.val>0?s("Longest Duration",D(r.val),r.date,r.id):""}
        ${n.val>0?s("Longest Distance",`${(n.val/1e3).toFixed(1)} km`,n.date,n.id):""}
    `,e.querySelectorAll(".pr-row").forEach(i=>{i.addEventListener("click",()=>{const l=i.dataset.id;l&&N(l)})})}function zt(t){const e=document.getElementById("trainingLoadChart");if(!e)return;const a={};for(let r=3;r>=0;r--){const n=new Date;n.setDate(n.getDate()-r*7);const s=ot(n);a[`${n.getFullYear()}-W${s}`]=0}t.forEach(r=>{const n=B(r);if(n.trainingLoad){const s=new Date(r.startTime),i=`${s.getFullYear()}-W${ot(s)}`;a[i]!==void 0&&(a[i]+=n.trainingLoad)}});const o=Math.max(...Object.values(a),100);e.innerHTML=Object.entries(a).map(([r,n])=>{const s=n/o*100;return`
            <div style="display: flex; flex-direction: column; align-items: center; width: 20%;">
                <div style="font-size: 0.8em; font-weight: bold; margin-bottom: 4px;">${Math.round(n)}</div>
                <div style="width: 100%; height: 100px; display: flex; align-items: flex-end; justify-content: center;">
                    <div style="width: 80%; background: var(--color-accent); height: ${s}%; border-radius: 4px 4px 0 0; min-height: 4px;"></div>
                </div>
                <div style="font-size: 0.7em; color: var(--color-text-secondary); margin-top: 4px;">${r.split("-")[1]}</div>
            </div>
        `}).join("")}function ot(t){t=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),t.setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));const e=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t.getTime()-e.getTime())/864e5+1)/7)}function Ot(t){const e=document.getElementById("powerCurveChart");if(!e)return;const a={},o=[1,5,10,30,60,300,1200,3600];if(t.forEach(u=>{const p=B(u);p.powerCurve&&p.powerCurve.forEach(d=>{(!a[d.duration]||d.watts>a[d.duration])&&(a[d.duration]=d.watts)}),p.maxPower&&(!a[1]||p.maxPower>a[1])&&(a[1]=p.maxPower)}),Object.keys(a).length===0){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">No power data available</div>';return}const r=e.clientWidth||300,n=200,s=30,i=Math.max(...Object.values(a))*1.1,l=o.map((u,p)=>{if(!a[u])return null;const d=s+p*((r-s*2)/(o.length-1)),h=n-s-a[u]/i*(n-s*2);return{x:d,y:h,val:a[u],duration:u}}).filter(u=>u!==null);if(l.length<2){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">Insufficient data points</div>';return}const c=`M ${l.map(u=>`${u.x},${u.y}`).join(" L ")}`,g=`
        <svg width="100%" height="100%" viewBox="0 0 ${r} ${n}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${s}" y1="${s}" x2="${s}" y2="${n-s}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${s}" y1="${n-s}" x2="${r-s}" y2="${n-s}" stroke="var(--color-border)" stroke-width="1" />
            
            <!-- Path -->
            <path d="${c}" fill="none" stroke="var(--color-accent)" stroke-width="2" />
            
            <!-- Points -->
            ${l.map(u=>`
                <circle cx="${u.x}" cy="${u.y}" r="4" fill="var(--card-bg)" stroke="var(--color-accent)" stroke-width="2" />
                <text x="${u.x}" y="${u.y-10}" text-anchor="middle" font-size="10" fill="var(--color-text-primary)">${u.val}W</text>
                <text x="${u.x}" y="${n-10}" text-anchor="middle" font-size="10" fill="var(--color-text-secondary)">${Rt(u.duration)}</text>
            `).join("")}
        </svg>
    `;e.innerHTML=g}function Rt(t){return t<60?`${t}s`:t<3600?`${t/60}m`:`${t/3600}h`}function Ut(t){const e=document.getElementById("fitnessTrendChart");if(!e)return;const a=[...t].sort((x,M)=>new Date(x.startTime).getTime()-new Date(M.startTime).getTime());if(a.length<2){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">Not enough data for trend analysis</div>';return}const o=new Map;a.forEach(x=>{const M=B(x);if(M.trainingLoad){const $=new Date(x.startTime).toISOString().split("T")[0],E=o.get($)||0;o.set($,E+M.trainingLoad)}});const r=[],n=new Date(a[0].startTime),s=new Date,i=Math.exp(-1/42),l=Math.exp(-1/7);let c=0,g=0;for(let x=new Date(n);x<=s;x.setDate(x.getDate()+1)){const M=x.toISOString().split("T")[0],$=o.get(M)||0;c=c*i+$*(1-i),g=g*l+$*(1-l),r.push({date:new Date(x),ctl:c,atl:g,tsb:c-g})}const u=e.clientWidth||600,p=250,d={top:20,right:30,bottom:30,left:40},h=u-d.left-d.right,f=p-d.top-d.bottom,m=Math.max(...r.map(x=>Math.max(x.ctl,x.atl)))*1.1,v=s.getTime()-n.getTime();if(v===0)return;const y=x=>d.left+(x.getTime()-n.getTime())/v*h,w=x=>d.top+f-x/m*f,b="M "+r.map(x=>`${y(x.date)},${w(x.ctl)}`).join(" L "),T="M "+r.map(x=>`${y(x.date)},${w(x.atl)}`).join(" L "),W=`
        <svg width="100%" height="100%" viewBox="0 0 ${u} ${p}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${d.left}" y1="${d.top}" x2="${d.left}" y2="${p-d.bottom}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${d.left}" y1="${p-d.bottom}" x2="${u-d.right}" y2="${p-d.bottom}" stroke="var(--color-border)" stroke-width="1" />
            
            <!-- CTL Line (Fitness) - Blue -->
            <path d="${b}" fill="none" stroke="#3b82f6" stroke-width="2" />
            
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
             <text x="${u-d.right}" y="${d.top}" text-anchor="end" font-size="12" fill="var(--color-text-primary)">
                CTL: ${Math.round(c)} | ATL: ${Math.round(g)} | TSB: ${Math.round(c-g)}
            </text>
        </svg>
    `;e.innerHTML=W}function Yt(t){const e=document.getElementById("ftpHistoryChart");if(!e)return;if(t.length===0){e.innerHTML='<div style="display:flex; justify-content:center; align-items:center; height:100%; color: var(--color-text-secondary);">No FTP history available</div>';return}const a=[...t].sort((y,w)=>new Date(y.createdAt).getTime()-new Date(w.createdAt).getTime()),o=e.clientWidth||600,r=200,n={top:20,right:30,bottom:30,left:40},s=o-n.left-n.right,i=r-n.top-n.bottom,l=Math.max(...a.map(y=>y.ftp))*1.1,c=Math.max(0,Math.min(...a.map(y=>y.ftp))*.9),g=l-c||100,u=new Date(a[0].createdAt),d=new Date().getTime()-u.getTime(),h=y=>{const w=new Date(y);return n.left+(w.getTime()-u.getTime())/d*s},f=y=>n.top+i-(y-c)/g*i;let m="";if(a.length>0){m=`M ${h(a[0].createdAt)},${f(a[0].ftp)}`;for(let y=1;y<a.length;y++){const w=h(a[y].createdAt),b=f(a[y-1].ftp),T=f(a[y].ftp);m+=` L ${w},${b} L ${w},${T}`}m+=` L ${o-n.right},${f(a[a.length-1].ftp)}`}const v=`
        <svg width="100%" height="100%" viewBox="0 0 ${o} ${r}" preserveAspectRatio="none">
            <!-- Grid Lines -->
            <line x1="${n.left}" y1="${n.top}" x2="${n.left}" y2="${r-n.bottom}" stroke="var(--color-border)" stroke-width="1" />
            <line x1="${n.left}" y1="${r-n.bottom}" x2="${o-n.right}" y2="${r-n.bottom}" stroke="var(--color-border)" stroke-width="1" />
            
            <!-- FTP Line -->
            <path d="${m}" fill="none" stroke="var(--color-accent)" stroke-width="2" />
            
            <!-- Points -->
            ${a.map(y=>`
                <circle cx="${h(y.createdAt)}" cy="${f(y.ftp)}" r="4" fill="var(--card-bg)" stroke="var(--color-accent)" stroke-width="2">
                    <title>${y.ftp} W (${I(y.createdAt)})</title>
                </circle>
                <text x="${h(y.createdAt)}" y="${f(y.ftp)-10}" text-anchor="middle" font-size="10" fill="var(--color-text-primary)">${y.ftp}</text>
            `).join("")}

            <!-- Axis Labels (simplified) -->
            <text x="${n.left}" y="${r-10}" font-size="10" fill="var(--color-text-secondary)">${I(u)}</text>
            <text x="${o-n.right}" y="${r-10}" text-anchor="end" font-size="10" fill="var(--color-text-secondary)">Today</text>
        </svg>
    `;e.innerHTML=v}function Vt(t){const e=document.getElementById("prHistoryList");if(!e)return;const a=[...t].sort((l,c)=>new Date(l.startTime).getTime()-new Date(c.startTime).getTime()),o=[];let r=0,n=0;const s={};if(a.forEach(l=>{const c=B(l),g=I(l.startTime);if(c.maxPower&&c.maxPower>r){if(r>0){const u=c.maxPower-r;o.push({date:g,metric:"Max Power",value:`${c.maxPower} W`,improvement:`+${u} W`,workoutId:l.id})}else o.push({date:g,metric:"Max Power",value:`${c.maxPower} W`,improvement:"New!",workoutId:l.id});r=c.maxPower}if(c.maxHeartrate&&c.maxHeartrate>n){if(n>0){const u=c.maxHeartrate-n;o.push({date:g,metric:"Max Heart Rate",value:`${c.maxHeartrate} bpm`,improvement:`+${u} bpm`,workoutId:l.id})}else o.push({date:g,metric:"Max Heart Rate",value:`${c.maxHeartrate} bpm`,improvement:"New!",workoutId:l.id});n=c.maxHeartrate}if(c.powerCurve){const u=[60,300,1200],p={60:"1m Power",300:"5m Power",1200:"20m Power"};c.powerCurve.forEach(d=>{if(u.includes(d.duration)){const h=s[d.duration]||0;d.watts>h&&(h>0?o.push({date:g,metric:p[d.duration],value:`${d.watts} W`,improvement:`+${d.watts-h} W`,workoutId:l.id}):o.push({date:g,metric:p[d.duration],value:`${d.watts} W`,improvement:"New!",workoutId:l.id}),s[d.duration]=d.watts)}})}}),o.length===0){e.innerHTML='<div style="text-align: center; color: var(--color-text-secondary); padding: 20px;">No records found</div>';return}const i=o.reverse();e.innerHTML=i.map(l=>`
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
    `).join(""),e.querySelectorAll(".pr-history-row").forEach(l=>{l.addEventListener("click",()=>{const c=l.dataset.id;c&&N(c)})})}async function rt(){F==="list"?await P():F==="calendar"?await V():F==="analytics"&&await X()}const Zt={1:"#3b82f6",2:"#22c55e",3:"#eab308",4:"#f97316",5:"#ef4444",6:"#a855f7",7:"#ec4899"};function _t(t){const e=Math.round(t/1e3);if(e<3600){const a=Math.floor(e/60),o=e%60;return`${a}m ${o}s`}else{const a=Math.floor(e/3600),o=Math.floor(e%3600/60);return`${a}h ${o}m`}}function nt(t,e,a){const o=document.getElementById(t);if(!o||!e||!e.zones)return;const r=e.zones,n=Math.max(...r.map(i=>i.timeInZoneMs));if(n===0){o.style.display="none";return}const s=`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <div style="font-weight: bold; margin-bottom: 8px;">${a}</div>
      ${r.map(i=>{const l=n>0?i.timeInZoneMs/n*100:0,c=e.totalTimeMs>0?i.timeInZoneMs/e.totalTimeMs*100:0,g=Zt[i.zone]||"#888",u=_t(i.timeInZoneMs);return`
          <div style="display: flex; align-items: center; gap: 10px; font-size: 0.9em;">
            <div style="width: 30px; font-weight: bold; color: var(--color-text-secondary);">Z${i.zone}</div>
            <div style="flex: 1; background: var(--color-bg-tertiary); height: 24px; border-radius: 4px; overflow: hidden; position: relative;">
               <div style="width: ${l}%; height: 100%; background-color: ${g}; transition: width 0.5s;"></div>
               <span style="position: absolute; left: 8px; top: 0; bottom: 0; display: flex; align-items: center; color: var(--color-text-inverse); text-shadow: 0 0 2px rgba(0,0,0,0.5); font-size: 0.8em;">
                 ${Math.round(c)}%
               </span>
            </div>
            <div style="width: 60px; text-align: right; font-family: monospace;">${u}</div>
          </div>
        `}).join("")}
    </div>
  `;o.innerHTML=s}function Gt(t,e){try{const a=JSON.parse(t),o=typeof e=="string"?new Date(e).getTime():e,r=document.getElementById("wd-chart-power");if(r&&a.power&&a.power.length>0){const l=a.power.map(c=>({x:c.timestamp-o,y:c.value}));R(r,l,{title:"Power",color:"#fbbf24",yLabel:"Watts",yMin:0})}else r&&(r.style.display="none");const n=document.getElementById("wd-chart-hr");if(n&&a.heartrate&&a.heartrate.length>0){const l=a.heartrate.map(c=>({x:c.timestamp-o,y:c.value}));R(n,l,{title:"Heart Rate",color:"#f87171",yLabel:"BPM",yMin:40})}else n&&(n.style.display="none");const s=document.getElementById("wd-chart-cadence");if(s&&a.cadence&&a.cadence.length>0){const l=a.cadence.map(c=>({x:c.timestamp-o,y:c.value}));R(s,l,{title:"Cadence",color:"#60a5fa",yLabel:"RPM",yMin:0})}else s&&(s.style.display="none");const i=document.getElementById("wd-chart-altitude");if(i&&a.altitude&&a.altitude.length>0){const c=a.altitude.map(g=>({x:g.timestamp-o,y:g.value})).filter(g=>g.y!==0);c.length>0?R(i,c,{title:"Altitude",color:"#34d399",yLabel:"Meters"}):i.style.display="none"}else i&&(i.style.display="none")}catch(a){console.error("Failed to parse telemetry for charts",a)}}function Jt(t){if(!t.telemetry||!t.startTime){alert("No telemetry data available for cropping");return}const e=document.getElementById("workoutDetailPanel");if(!e)return;let a=null;try{a=JSON.parse(t.telemetry)}catch(m){console.error("Invalid telemetry",m),alert("Failed to parse workout data");return}if(!a)return;const o=new Date(t.startTime).getTime(),r=t.endTime?new Date(t.endTime).getTime():o+(t.duration||0)*1e3;let n=o,s=r;const i=r-o;e.innerHTML=`
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
                 <input type="range" id="cropStartSlider" min="0" max="${i}" value="0" style="width: 100%">
             </div>
             <div style="text-align: right;">
                 <label>End Time offset</label>
                 <div class="value-display" id="cropEndDisplay">${D(i/1e3)}</div>
                 <input type="range" id="cropEndSlider" min="0" max="${i}" value="${i}" style="width: 100%">
             </div>
         </div>
         
         <div style="text-align: center; font-weight: bold; margin-bottom: 10px;">
            New Duration: <span id="cropDurationDisplay">${D(i/1e3)}</span>
         </div>
         
         <div id="cropPreviewChart" style="height: 150px; background: var(--card-bg); border-radius: 8px;"></div>
      </div>
      
      <div class="crop-info" style="font-size: 0.9em; color: var(--color-text-secondary); margin-top: 10px;">
          <p>⚠️ Saving will overwrite the original workout data. This cannot be undone.</p>
      </div>
    </div>
  `;const l=document.getElementById("cropStartSlider"),c=document.getElementById("cropEndSlider"),g=document.getElementById("cropStartDisplay"),u=document.getElementById("cropEndDisplay"),p=document.getElementById("cropDurationDisplay"),d=document.getElementById("cropPreviewChart"),h=()=>{if(a&&a.power){const v=et(a,o,n,s).measurements.power.map(y=>({x:y.timestamp-n,y:y.value}));R(d,v,{title:"Preview (Power)",color:"#fbbf24",yMin:0,height:150})}},f=()=>{const m=parseInt(l.value),v=parseInt(c.value);if(m>=v){document.activeElement===l?l.value=(v-1e4).toString():c.value=(m+1e4).toString();return}n=o+parseInt(l.value),s=o+parseInt(c.value),g&&(g.textContent=D(parseInt(l.value)/1e3)),u&&(u.textContent=D(parseInt(c.value)/1e3)),p&&(p.textContent=D((s-n)/1e3)),h()};l.addEventListener("input",f),c.addEventListener("input",f),setTimeout(h,0),document.getElementById("cancelCropBtn")?.addEventListener("click",()=>{N(t.id)}),document.getElementById("saveCropBtn")?.addEventListener("click",async()=>{const m=document.getElementById("saveCropBtn");m.disabled=!0,m.textContent="Saving...";try{const v=et(a,o,n,s);if(st()){const{saveCompletedWorkout:y}=await yt(async()=>{const{saveCompletedWorkout:w}=await import("./feature-bluetooth-WlFmxkI9.js").then(b=>b.y);return{saveCompletedWorkout:w}},[]);await y(v.measurements,v.startTime,v.endTime),v.startTime}if(j==="local"||t.id.startsWith("workout_")?(v.startTime,alert("Workout cropped and saved locally.")):alert("Cropping currently only supported for local workouts (Server update not implemented). Changes are saved to local history."),v.startTime!==o&&t.id.startsWith("workout_")){const y=document.getElementById("workoutListPanel");e&&y&&(e.style.display="none",y.style.display="block",document.getElementById("historyRefresh")?.click())}else N(t.id)}catch(v){console.error("Failed to save crop",v),alert("Error saving cropped workout"),m.disabled=!1,m.textContent="Save Changes"}})}class ee{id="history";isInitialized=!1;init(e){const a=document.getElementById("workoutHistoryTemplate");if(a){const o=a.content.cloneNode(!0);e.appendChild(o),setTimeout(()=>{Mt(),this.isInitialized=!0},0)}else console.error("History template not found!"),e.innerHTML="<p>Error loading history view</p>"}onEnter(){this.isInitialized?rt():setTimeout(()=>rt(),50)}onLeave(){}}export{ee as HistoryView};
//# sourceMappingURL=HistoryView-Cn1ZhpbW.js.map
