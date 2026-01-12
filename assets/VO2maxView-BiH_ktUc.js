import{V as R,v as x}from"./index-WoRBJzVU.js";import"./feature-bluetooth-VMdsGD3M.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";function $(a,e){const{avgPace:t,avgHeartRate:n,duration:i}=a,{maxHr:s,restingHr:o,age:c}=e;if(!s||!o||!c)throw new Error("Profile must include maxHr, restingHr, and age");const u=1e3/t,l=u*3.6,p=u*60,h=.2*p+.9*p+3.5,f=s-o,g=(n-o)/f,r=h/Math.max(.5,Math.min(.95,g)),d=c>25?1-(c-25)*.01:1,E=r*d;let b="medium",v="";return i>=600&&g>=.7&&g<=.9&&l>=8&&l<=20?(b="high",v="Ideal conditions for VO2max estimation (steady-state aerobic run)"):i<300||g<.6||g>.95||l<6?(b="low",i<300?v="Duration too short for reliable estimate":g<.6?v="Intensity too low for accurate VO2max estimation":g>.95?v="Intensity too high (likely anaerobic)":v="Pace too slow for reliable estimation"):v="Moderate confidence - reasonable workout conditions",{vo2max:Math.round(E*10)/10,confidence:b,method:"Running (Firstbeat-style)",timestamp:Date.now(),activityType:"running",notes:v}}function C(a,e){const{avgPower:t,avgHeartRate:n,duration:i,normalizedPower:s}=a,{maxHr:o,restingHr:c,weight:u}=e;if(!o||!c||!u)throw new Error("Profile must include maxHr, restingHr, and weight");const l=s||t,p=l*10.8/u+7,h=o-c,m=(n-c)/h,g=p/Math.max(.6,Math.min(.95,m));let r="medium",d="";return i>=1200&&m>=.85&&m<=.95&&l>=150?(r="high",d="Ideal conditions for VO2max estimation (sustained threshold effort)"):i<600||m<.7||m>.98||l<100?(r="low",i<600?d="Duration too short for reliable estimate":m<.7?d="Intensity too low for accurate VO2max estimation":m>.98?d="Intensity at maximum (unsustainable)":d="Power too low for reliable estimation"):d="Moderate confidence - reasonable workout conditions",{vo2max:Math.round(g*10)/10,confidence:r,method:"Cycling (Power-based)",timestamp:Date.now(),activityType:"cycling",notes:d}}function H(a){const e=(a-504.9)/44.73;let t="medium",n="";return a>=2400&&a<=3600?(t="high",n="Distance suggests maximal effort"):a<2e3||a>4e3?(t="low",n="Distance outside typical range - verify test was maximal effort"):n="Standard Cooper test protocol",{vo2max:Math.round(e*10)/10,confidence:t,method:"Cooper 12-minute test",timestamp:Date.now(),activityType:"running",notes:n}}const O="bpt-vo2max-history";function P(a){const e=y();e.push(a);const t=e.slice(-100);try{localStorage.setItem(O,JSON.stringify(t))}catch(n){console.error("Failed to save VO2max estimate:",n)}}function y(){try{const a=localStorage.getItem(O);return a?JSON.parse(a):[]}catch(a){return console.error("Failed to load VO2max history:",a),[]}}function w(a){const e=y();if(e.length===0)return null;const t=a?e.filter(i=>i.activityType===a):e;if(t.length===0)return null;const n=t.filter(i=>i.confidence==="high");return n.length>0?n[n.length-1]:t[t.length-1]}function V(a,e=90){const t=y();if(t.length<2)return null;const n=Date.now()-e*24*60*60*1e3;let i=t.filter(r=>r.timestamp>=n);if(a&&(i=i.filter(r=>r.activityType===a)),i.length<2)return null;const s=i.map(r=>r.vo2max),o=s.reduce((r,d)=>r+d,0)/s.length,c=Date.now()-720*60*60*1e3,u=i.filter(r=>r.timestamp>=c).map(r=>r.vo2max),l=Math.min(5,i.length),p=u.length>=l?u:s.slice(-l),h=p.reduce((r,d)=>r+d,0)/p.length,f=(h-o)/o*100;let m="stable";f>2?m="improving":f<-2&&(m="declining");const g=i.map(r=>({timestamp:r.timestamp,vo2max:r.vo2max,confidence:r.confidence}));return{averageVO2max:Math.round(o*10)/10,recentVO2max:Math.round(h*10)/10,trend:m,changePercent:Math.round(f*10)/10,dataPoints:g}}function k(a,e,t="male"){const n={"20-29":[38,43,52,56],"30-39":[35,40,48,53],"40-49":[33,38,46,51],"50-59":[31,35,43,48],"60+":[28,32,40,44]},i={"20-29":[32,37,44,48],"30-39":[30,34,41,45],"40-49":[28,32,39,43],"50-59":[26,30,36,41],"60+":[23,27,34,38]};let s="60+";e<30?s="20-29":e<40?s="30-39":e<50?s="40-49":e<60&&(s="50-59");const o=t==="male"?n[s]:i[s],[c,u,l,p]=o;return a<c?"Poor":a<u?"Fair":a<l?"Good":a<p?"Excellent":"Superior"}function S(a,e="male"){return e==="male"?a<30?[43,52]:a<40?[40,48]:a<50?[38,46]:a<60?[35,43]:[32,40]:a<30?[37,44]:a<40?[34,41]:a<50?[32,39]:a<60?[30,36]:[27,34]}class L{id=R.VO2max;container=null;init(e){this.container=e,this.render()}onEnter(){console.log("Entered VO2max View"),this.render()}onLeave(){console.log("Left VO2max View")}render(){if(!this.container)return;const e=w("running"),t=w("cycling"),n=y();this.container.innerHTML=`
            <div class="vo2max-view">
                <header class="vo2max-header">
                    <h1>🫁 VO2max Estimator</h1>
                    <p class="subtitle">Estimate and track your cardiovascular fitness</p>
                </header>

                <!-- Current VO2max Summary -->
                <section class="vo2max-summary">
                    <div class="summary-cards">
                        <div class="summary-card ${e?"":"no-data"}">
                            <div class="card-icon">🏃</div>
                            <div class="card-content">
                                <div class="card-label">Running VO2max</div>
                                <div class="card-value">${e?e.vo2max:"--"}</div>
                                <div class="card-unit">ml/kg/min</div>
                                ${e?`<div class="card-badge badge-${e.confidence}">${e.confidence} confidence</div>`:'<div class="card-info">No estimates yet</div>'}
                            </div>
                        </div>
                        <div class="summary-card ${t?"":"no-data"}">
                            <div class="card-icon">🚴</div>
                            <div class="card-content">
                                <div class="card-label">Cycling VO2max</div>
                                <div class="card-value">${t?t.vo2max:"--"}</div>
                                <div class="card-unit">ml/kg/min</div>
                                ${t?`<div class="card-badge badge-${t.confidence}">${t.confidence} confidence</div>`:'<div class="card-info">No estimates yet</div>'}
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Activity Type Selector -->
                <section class="input-section">
                    <h2>Estimate VO2max</h2>
                    
                    <div class="activity-tabs">
                        <button class="activity-tab active" data-activity="running">
                            <span class="tab-icon">🏃</span>
                            <span class="tab-label">Running</span>
                        </button>
                        <button class="activity-tab" data-activity="cycling">
                            <span class="tab-icon">🚴</span>
                            <span class="tab-label">Cycling</span>
                        </button>
                        <button class="activity-tab" data-activity="cooper">
                            <span class="tab-icon">⏱️</span>
                            <span class="tab-label">Cooper Test</span>
                        </button>
                    </div>

                    <!-- Running Form -->
                    <div id="running-form" class="estimation-form">
                        <div class="form-description">
                            <p>Estimate VO2max from a steady-state run. Best results with 10+ minute runs at moderate-high intensity (70-90% max HR).</p>
                        </div>
                        
                        <div class="input-group">
                            <label for="running-pace">Average Pace (min:sec per km)</label>
                            <input type="text" id="running-pace" class="input-field" placeholder="5:00" />
                        </div>

                        <div class="input-group">
                            <label for="running-hr">Average Heart Rate (bpm)</label>
                            <input type="number" id="running-hr" class="input-field" placeholder="165" min="60" max="220" />
                        </div>

                        <div class="input-group">
                            <label for="running-duration">Duration (minutes)</label>
                            <input type="number" id="running-duration" class="input-field" placeholder="30" min="1" max="300" />
                        </div>

                        <div class="input-group">
                            <label for="running-distance">Distance (km)</label>
                            <input type="number" id="running-distance" class="input-field" placeholder="6.0" step="0.1" min="0.1" />
                        </div>

                        <button class="btn btn-primary" data-form="running">Calculate Running VO2max</button>
                    </div>

                    <!-- Cycling Form -->
                    <div id="cycling-form" class="estimation-form" style="display: none;">
                        <div class="form-description">
                            <p>Estimate VO2max from a power-based cycling workout. Best results with 20+ minute efforts at threshold intensity (85-95% max HR).</p>
                        </div>
                        
                        <div class="input-group">
                            <label for="cycling-power">Average Power (watts)</label>
                            <input type="number" id="cycling-power" class="input-field" placeholder="250" min="50" max="800" />
                        </div>

                        <div class="input-group">
                            <label for="cycling-hr">Average Heart Rate (bpm)</label>
                            <input type="number" id="cycling-hr" class="input-field" placeholder="170" min="60" max="220" />
                        </div>

                        <div class="input-group">
                            <label for="cycling-duration">Duration (minutes)</label>
                            <input type="number" id="cycling-duration" class="input-field" placeholder="20" min="1" max="300" />
                        </div>

                        <button class="btn btn-primary" data-form="cycling">Calculate Cycling VO2max</button>
                    </div>

                    <!-- Cooper Test Form -->
                    <div id="cooper-form" class="estimation-form" style="display: none;">
                        <div class="form-description">
                            <p>The Cooper 12-minute test: Run as far as possible in 12 minutes at maximum effort.</p>
                        </div>
                        
                        <div class="input-group">
                            <label for="cooper-distance">Distance Covered (meters)</label>
                            <input type="number" id="cooper-distance" class="input-field" placeholder="2800" min="1000" max="5000" />
                        </div>

                        <button class="btn btn-primary" data-form="cooper">Calculate VO2max from Cooper Test</button>
                    </div>

                    <div id="profile-warning" class="warning-box" style="display: none;">
                        ⚠️ Please set your profile data (age, weight, max HR, resting HR) in Settings for accurate VO2max estimation.
                    </div>
                </section>

                <!-- Results Section -->
                <section id="results-section" class="results-section" style="display: none;"></section>

                <!-- Trend Section -->
                ${n.length>=2?this.renderTrendSection():""}

                <!-- History Section -->
                ${n.length>0?this.renderHistorySection():""}

                <!-- Info Section -->
                <section class="info-section">
                    <h2>About VO2max</h2>
                    
                    <details>
                        <summary><strong>What is VO2max?</strong></summary>
                        <p>VO2max (maximal oxygen uptake) is the maximum rate at which your body can consume oxygen during exercise. It's measured in milliliters per kilogram of body weight per minute (ml/kg/min).</p>
                        <p>VO2max is considered the gold standard measure of cardiovascular fitness and aerobic endurance capacity.</p>
                    </details>

                    <details>
                        <summary><strong>Running Estimation Method</strong></summary>
                        <p>Uses a Firstbeat-inspired algorithm that considers:</p>
                        <ul>
                            <li>Running speed and oxygen cost (ACSM formula)</li>
                            <li>Heart rate relative to maximum HR</li>
                            <li>Your age, weight, and resting heart rate</li>
                        </ul>
                        <p><strong>Best conditions:</strong> Steady-state run for 10+ minutes at 70-90% max HR</p>
                    </details>

                    <details>
                        <summary><strong>Cycling Estimation Method</strong></summary>
                        <p>Uses power output to estimate oxygen consumption:</p>
                        <ul>
                            <li>Mechanical power efficiency (~24% for cycling)</li>
                            <li>VO2 (ml/kg/min) = (Power × 10.8 / weight) + 7</li>
                            <li>Adjusted based on heart rate intensity</li>
                        </ul>
                        <p><strong>Best conditions:</strong> 20+ minute FTP test or threshold effort at 85-95% max HR</p>
                    </details>

                    <details>
                        <summary><strong>Confidence Levels</strong></summary>
                        <ul>
                            <li><strong>High:</strong> Ideal workout conditions (duration, intensity, data quality)</li>
                            <li><strong>Medium:</strong> Reasonable conditions but some factors not optimal</li>
                            <li><strong>Low:</strong> Suboptimal conditions (too short, too easy/hard, poor data)</li>
                        </ul>
                        <p>Higher confidence estimates are more reliable for tracking fitness changes.</p>
                    </details>

                    <details>
                        <summary><strong>VO2max Norms by Age</strong></summary>
                        <p>Average VO2max values for healthy adults (ml/kg/min):</p>
                        <table class="norms-table">
                            <tr>
                                <th>Age</th>
                                <th>Male (Fair-Good)</th>
                                <th>Female (Fair-Good)</th>
                            </tr>
                            <tr><td>20-29</td><td>38-52</td><td>32-44</td></tr>
                            <tr><td>30-39</td><td>35-48</td><td>30-41</td></tr>
                            <tr><td>40-49</td><td>33-46</td><td>28-39</td></tr>
                            <tr><td>50-59</td><td>31-43</td><td>26-36</td></tr>
                            <tr><td>60+</td><td>28-40</td><td>23-34</td></tr>
                        </table>
                        <p><small>Source: ACSM and Cooper Institute norms</small></p>
                    </details>
                </section>
            </div>
        `,this.attachEventListeners(),this.checkProfileData()}renderTrendSection(){const e=V("running",90),t=V("cycling",90);if(!e&&!t)return"";let n='<section class="trend-section"><h2>📈 Fitness Trends (Last 90 Days)</h2>';return e&&(n+=this.renderTrendCard("Running",e,"🏃")),t&&(n+=this.renderTrendCard("Cycling",t,"🚴")),n+="</section>",n}renderTrendCard(e,t,n){const i=t.trend==="improving"?"📈":t.trend==="declining"?"📉":"➡️",s=t.trend==="improving"?"improving":t.trend==="declining"?"declining":"stable";return`
            <div class="trend-card">
                <div class="trend-header">
                    <span class="trend-icon">${n}</span>
                    <h3>${e} VO2max Trend</h3>
                </div>
                <div class="trend-stats">
                    <div class="trend-stat">
                        <div class="stat-label">Recent Average</div>
                        <div class="stat-value">${t.recentVO2max} <span class="stat-unit">ml/kg/min</span></div>
                    </div>
                    <div class="trend-stat">
                        <div class="stat-label">90-Day Average</div>
                        <div class="stat-value">${t.averageVO2max} <span class="stat-unit">ml/kg/min</span></div>
                    </div>
                    <div class="trend-stat">
                        <div class="stat-label">Trend</div>
                        <div class="stat-value trend-${s}">
                            ${i} ${t.changePercent>0?"+":""}${t.changePercent}%
                        </div>
                    </div>
                </div>
                <div class="trend-message ${s}">
                    ${this.getTrendMessage(t)}
                </div>
            </div>
        `}getTrendMessage(e){return e.trend==="improving"?"Your fitness is improving! Keep up the consistent training.":e.trend==="declining"?"Your fitness is declining. Consider reviewing your training volume and consistency.":"Your fitness is stable. Consistent training is maintaining your current level."}renderHistorySection(){return`
            <section class="history-section">
                <h2>📋 Recent Estimates</h2>
                <div class="history-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Activity</th>
                                <th>VO2max</th>
                                <th>Confidence</th>
                                <th>Method</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${y().slice(-10).reverse().map(t=>`
                                <tr>
                                    <td>${new Date(t.timestamp).toLocaleDateString()}</td>
                                    <td>${t.activityType==="running"?"🏃 Running":"🚴 Cycling"}</td>
                                    <td><strong>${t.vo2max}</strong> ml/kg/min</td>
                                    <td><span class="badge-${t.confidence}">${t.confidence}</span></td>
                                    <td>${t.method}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            </section>
        `}attachEventListeners(){if(!this.container)return;this.container.querySelectorAll(".activity-tab").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.activity;this.switchActivity(i)})}),this.container.querySelectorAll(".btn-primary").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.form;this.handleCalculate(i)})})}switchActivity(e){if(!this.container)return;this.container.querySelectorAll(".activity-tab").forEach(i=>{i.classList.remove("active")}),this.container.querySelector(`[data-activity="${e}"]`)?.classList.add("active"),this.container.querySelectorAll(".estimation-form").forEach(i=>{i.style.display="none"});const t=e==="cooper"?"cooper-form":`${e}-form`,n=this.container.querySelector(`#${t}`);n&&(n.style.display="block")}checkProfileData(){const e=x(),t=document.getElementById("profile-warning"),n=e.maxHr!==null&&e.weight!==null&&e.maxHr>0&&e.weight>0;t&&(t.style.display=n?"none":"block")}handleCalculate(e){const t=x();if(!t.weight||!t.maxHr||!t.age||!t.restingHr){this.showError("Please complete your profile in Settings (Weight, Max HR, Age, and Resting HR) before estimating VO2max.");return}let n=null;try{e==="running"?n=this.calculateRunningVO2max(t):e==="cycling"?n=this.calculateCyclingVO2max(t):e==="cooper"&&(n=this.calculateCooperVO2max(t)),n&&(P(n),this.displayResult(n,t))}catch(i){this.showError(i instanceof Error?i.message:"Invalid input. Please check your data.")}}calculateRunningVO2max(e){const t=document.getElementById("running-pace").value.trim(),n=parseInt(document.getElementById("running-hr").value),i=parseFloat(document.getElementById("running-duration").value)*60,s=parseFloat(document.getElementById("running-distance").value)*1e3,o=t.match(/^(\d+):(\d+)$/);if(!o)throw new Error("Invalid pace format. Use MM:SS (e.g., 5:00)");const c=parseInt(o[1]),u=parseInt(o[2]),l=c*60+u;if(!l||!n||!i||!s)throw new Error("Please fill in all fields");if(l<120||l>900)throw new Error("Pace must be between 2:00 and 15:00 per km");return $({avgPace:l,avgHeartRate:n,duration:i},e)}calculateCyclingVO2max(e){const t=parseInt(document.getElementById("cycling-power").value),n=parseInt(document.getElementById("cycling-hr").value),i=parseFloat(document.getElementById("cycling-duration").value)*60;if(!t||!n||!i)throw new Error("Please fill in all fields");if(t<50||t>800)throw new Error("Power must be between 50 and 800 watts");return C({avgPower:t,avgHeartRate:n,duration:i},e)}calculateCooperVO2max(e){const t=parseInt(document.getElementById("cooper-distance").value);if(!t)throw new Error("Please enter the distance covered");if(t<1e3||t>5e3)throw new Error("Distance must be between 1000 and 5000 meters");return H(t)}displayResult(e,t){const n=document.getElementById("results-section");if(!n)return;const i=k(e.vo2max,t.age||30,t.gender||"male"),[s,o]=S(t.age||30,t.gender||"male");n.style.display="block",n.innerHTML=`
            <div class="result-card">
                <h2>📊 Estimation Result</h2>
                
                <div class="result-main">
                    <div class="result-value">${e.vo2max}</div>
                    <div class="result-unit">ml/kg/min</div>
                </div>

                <div class="result-details">
                    <div class="result-row">
                        <span class="result-label">Fitness Level:</span>
                        <span class="result-data"><strong>${i}</strong></span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Confidence:</span>
                        <span class="result-data badge-${e.confidence}">${e.confidence}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Method:</span>
                        <span class="result-data">${e.method}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Activity:</span>
                        <span class="result-data">${e.activityType==="running"?"🏃 Running":"🚴 Cycling"}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">Recommended Range:</span>
                        <span class="result-data">${s}-${o} ml/kg/min</span>
                    </div>
                </div>

                ${e.notes?`<div class="result-notes">ℹ️ ${e.notes}</div>`:""}

                <div class="result-actions">
                    <button class="btn btn-secondary" onclick="window.location.reload()">New Estimate</button>
                </div>
            </div>
        `,n.scrollIntoView({behavior:"smooth",block:"nearest"})}showError(e){const t=document.getElementById("results-section");t&&(t.style.display="block",t.innerHTML=`
                <div class="error-card">
                    <p>❌ ${e}</p>
                </div>
            `)}destroy(){this.container&&(this.container.innerHTML="")}}export{L as VO2maxView};
//# sourceMappingURL=VO2maxView-BiH_ktUc.js.map
