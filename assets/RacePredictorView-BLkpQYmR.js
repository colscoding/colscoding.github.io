import{V as p}from"./index-Pr4wYPmb.js";import"./feature-bluetooth-CV0r-lfI.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";const d={"800m":800,"1500m":1500,"1 Mile":1609.34,"3000m":3e3,"5K":5e3,"10K":1e4,"Half Marathon":21097.5,Marathon:42195,"50K":5e4,"100K":1e5};function h(n,t){const r=n/t*60,o=t/60,a=-4.6+.182258*r+104e-6*r*r,s=.8+.1894393*Math.exp(-.012778*o)+.2989558*Math.exp(-.1932605*o),i=a/s;return{vdot:Math.round(i*10)/10,vo2max:Math.round(i*10)/10}}function v(n){const r=1e3/((n+4.6-Math.sqrt((n+4.6)**2-416e-6*n))/208e-6/60);return{easy:Math.round(r*1.35),marathon:Math.round(r*1.2),threshold:Math.round(r*1.15),interval:Math.round(r*1),repetition:Math.round(r*.9)}}function u(n,t,e){const r=e/n;return t*Math.pow(r,1.06)}function g(n,t){const e=d["Half Marathon"],r=d["10K"];return Math.abs(n-e)<100?t*2.11:Math.abs(n-r)<100?t*4.66:null}function f(n,t){const e=t/1e3,r=.8+.1894393*Math.exp(-.012778*e)+.2989558*Math.exp(-.1932605*e),o=n*r,a=104e-6,s=.182258,i=-4.6-o,m=(-s+Math.sqrt(s*s-4*a*i))/(2*a)/60;return t/m}function M(n,t,e="vdot"){const r=d[n],o=e==="vdot"?h(r,t).vdot:0,a=[];for(const[s,i]of Object.entries(d)){let c;e==="vdot"?c=f(o,i):e==="riegel"?c=u(r,t,i):s==="Marathon"?c=g(r,t)||u(r,t,i):c=u(r,t,i),a.push({distance:s,distanceMeters:i,timeSeconds:c,timeFormatted:y(c),pacePerKm:l(c/(i/1e3)),pacePerMile:l(c/(i/1e3)*1.60934)})}return a}function y(n){const t=Math.floor(n/3600),e=Math.floor(n%3600/60),r=Math.floor(n%60);return t>0?`${t}:${String(e).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`${e}:${String(r).padStart(2,"0")}`}function l(n){const t=Math.floor(n/60),e=Math.floor(n%60);return`${t}:${String(e).padStart(2,"0")}`}function T(n){const t=n.split(":").map(e=>parseInt(e,10));return t.some(isNaN)?null:t.length===3?t[0]*3600+t[1]*60+t[2]:t.length===2?t[0]*60+t[1]:null}function P(n){switch(n){case"vdot":return"**Jack Daniels' VDOT Method** - The most comprehensive approach. Calculates your VDOT (VO2max + running economy) from your race performance, then predicts times based on sustainable percentages of VO2max for each distance. Most accurate for trained runners at standard distances.";case"riegel":return"**Riegel Formula** - A simple power law: T2 = T1 × (D2/D1)^1.06. Assumes performance degrades with distance at a constant rate. Works well for distances between 5K and Marathon, but less accurate for very short or ultra distances.";case"cameron":return"**Cameron Formula** - More conservative for marathon predictions. Uses empirical ratios from thousands of race results: Marathon = Half Marathon × 2.11. Accounts for the difficulty of maintaining pace over 42K."}}class R{id=p.RacePredictor;container=null;currentVDOT=null;currentPredictions=null;currentTrainingPaces=null;currentFormula="vdot";init(t){this.container=t,this.render()}onEnter(){console.log("Entered Race Predictor View"),this.render()}onLeave(){console.log("Left Race Predictor View")}render(){this.container&&(this.container.innerHTML=`
            <div class="race-predictor-view">
                <header class="race-predictor-header">
                    <h1>🏁 Race Time Predictor</h1>
                    <p class="subtitle">Predict race times and calculate training paces from your recent performances</p>
                </header>

                <section class="input-section">
                    <h2>Enter Recent Race Performance</h2>
                    
                    <div class="input-group">
                        <label for="race-distance">Race Distance</label>
                        <select id="race-distance" class="input-field">
                            ${Object.keys(d).map(t=>`<option value="${t}">${t}</option>`).join("")}
                        </select>
                    </div>

                    <div class="input-group">
                        <label for="race-time">Race Time (MM:SS or HH:MM:SS)</label>
                        <input 
                            type="text" 
                            id="race-time" 
                            class="input-field" 
                            placeholder="25:30 or 1:45:30"
                            pattern="[0-9]{1,2}:[0-9]{2}(:[0-9]{2})?"
                        />
                    </div>

                    <div class="input-group">
                        <label for="prediction-formula">Prediction Formula</label>
                        <select id="prediction-formula" class="input-field">
                            <option value="vdot" selected>VDOT (Jack Daniels) - Most Accurate</option>
                            <option value="riegel">Riegel - Simple Power Law</option>
                            <option value="cameron">Cameron - Conservative Marathon</option>
                        </select>
                    </div>

                    <button id="calculate-btn" class="btn btn-primary">Calculate Predictions</button>

                    <div id="formula-explanation" class="formula-explanation"></div>
                </section>

                <section id="results-section" class="results-section" style="display: none;">
                    <div id="vdot-results" class="results-card"></div>
                    <div id="race-predictions" class="results-card"></div>
                    <div id="training-paces" class="results-card"></div>
                </section>

                <section class="info-section">
                    <h2>About the Formulas</h2>
                    
                    <details>
                        <summary><strong>Jack Daniels' VDOT Method</strong></summary>
                        <p>VDOT combines VO2max with running economy to create a single fitness metric. The calculation:</p>
                        <ol>
                            <li>Calculates oxygen cost at your race pace</li>
                            <li>Determines the percentage of VO2max you sustained</li>
                            <li>Derives your VDOT value</li>
                            <li>Predicts other race times based on sustainable VO2max percentages</li>
                        </ol>
                        <p><strong>Best for:</strong> Trained runners at standard distances (800m - Marathon)</p>
                    </details>

                    <details>
                        <summary><strong>Riegel Formula</strong></summary>
                        <p>A simple power law: <code>T2 = T1 × (D2/D1)^1.06</code></p>
                        <p>The 1.06 exponent represents the fatigue factor - how much slower you get as distance increases.</p>
                        <p><strong>Best for:</strong> Quick estimates between similar distances (5K - Marathon)</p>
                        <p><strong>Limitations:</strong> Less accurate for very short (<800m) or ultra (>50K) distances</p>
                    </details>

                    <details>
                        <summary><strong>Cameron Formula</strong></summary>
                        <p>Conservative marathon predictions based on empirical data:</p>
                        <ul>
                            <li>Marathon = Half Marathon × 2.11</li>
                            <li>Marathon = 10K × 4.66</li>
                        </ul>
                        <p><strong>Best for:</strong> Marathon predictions from 10K or Half Marathon times</p>
                        <p><strong>Why conservative:</strong> Accounts for the difficulty of pacing and fueling over 42K</p>
                    </details>

                    <details>
                        <summary><strong>Training Pace Zones (VDOT-based)</strong></summary>
                        <ul>
                            <li><strong>Easy (E):</strong> 59-74% VDOT velocity - Recovery and long runs</li>
                            <li><strong>Marathon (M):</strong> 80-85% VDOT velocity - Marathon pace</li>
                            <li><strong>Threshold (T):</strong> 83-88% VDOT velocity - Lactate threshold, tempo</li>
                            <li><strong>Interval (I):</strong> 95-100% VDOT velocity - VO2max intervals</li>
                            <li><strong>Repetition (R):</strong> 105-120% VDOT velocity - Speed and form</li>
                        </ul>
                    </details>
                </section>
            </div>
        `,this.attachEventListeners(),this.updateFormulaExplanation())}attachEventListeners(){const t=document.getElementById("calculate-btn"),e=document.getElementById("race-time"),r=document.getElementById("prediction-formula");t&&t.addEventListener("click",()=>this.handleCalculate()),e&&e.addEventListener("keypress",o=>{o.key==="Enter"&&this.handleCalculate()}),r&&r.addEventListener("change",()=>{this.currentFormula=r.value,this.updateFormulaExplanation(),this.currentPredictions&&this.handleCalculate()})}updateFormulaExplanation(){const t=document.getElementById("formula-explanation");t&&(t.innerHTML=`<p>${P(this.currentFormula)}</p>`)}handleCalculate(){const t=document.getElementById("race-distance"),e=document.getElementById("race-time");if(!t||!e)return;const r=t.value,o=e.value.trim(),a=T(o);if(!a){this.showError("Invalid time format. Use MM:SS or HH:MM:SS");return}const s=d[r],i=a/(s/1e3);if(i<120){this.showError("Time seems too fast. Please check your input.");return}if(i>900){this.showError("Time seems too slow. Please check your input.");return}this.currentVDOT=h(s,a),this.currentTrainingPaces=this.currentFormula==="vdot"?v(this.currentVDOT.vdot):null,this.currentPredictions=M(r,a,this.currentFormula),this.displayResults()}displayResults(){const t=document.getElementById("results-section");if(t){if(t.style.display="block",this.currentFormula==="vdot"&&this.currentVDOT)this.displayVDOTResults();else{const e=document.getElementById("vdot-results");e&&(e.innerHTML="")}if(this.displayRacePredictions(),this.currentFormula==="vdot"&&this.currentTrainingPaces)this.displayTrainingPaces();else{const e=document.getElementById("training-paces");e&&(e.innerHTML="")}t.scrollIntoView({behavior:"smooth",block:"nearest"})}}displayVDOTResults(){const t=document.getElementById("vdot-results");!t||!this.currentVDOT||(t.innerHTML=`
            <h2>Your Running Fitness</h2>
            <div class="vdot-metrics">
                <div class="metric-card">
                    <div class="metric-value">${this.currentVDOT.vdot}</div>
                    <div class="metric-label">VDOT</div>
                    <div class="metric-description">Running fitness score</div>
                </div>
                <div class="metric-card">
                    <div class="metric-value">${this.currentVDOT.vo2max}</div>
                    <div class="metric-label">Est. VO2max</div>
                    <div class="metric-description">ml/kg/min</div>
                </div>
            </div>
            <p class="info-text">VDOT combines VO2max with running economy. Higher values indicate better fitness.</p>
        `)}displayRacePredictions(){const t=document.getElementById("race-predictions");if(!t||!this.currentPredictions)return;const e=this.currentFormula==="vdot"?"VDOT":this.currentFormula==="riegel"?"Riegel":"Cameron/Riegel";t.innerHTML=`
            <h2>Predicted Race Times (${e})</h2>
            <div class="predictions-table">
                <table>
                    <thead>
                        <tr>
                            <th>Distance</th>
                            <th>Time</th>
                            <th>Pace/km</th>
                            <th>Pace/mile</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.currentPredictions.map(r=>`
                            <tr>
                                <td><strong>${r.distance}</strong></td>
                                <td>${r.timeFormatted}</td>
                                <td>${r.pacePerKm}</td>
                                <td>${r.pacePerMile}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `}displayTrainingPaces(){const t=document.getElementById("training-paces");!t||!this.currentTrainingPaces||(t.innerHTML=`
            <h2>Training Pace Zones</h2>
            <div class="training-paces-table">
                <table>
                    <thead>
                        <tr>
                            <th>Zone</th>
                            <th>Purpose</th>
                            <th>Pace/km</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="zone-easy">
                            <td><strong>Easy (E)</strong></td>
                            <td>Recovery, long runs</td>
                            <td>${l(this.currentTrainingPaces.easy)}</td>
                        </tr>
                        <tr class="zone-marathon">
                            <td><strong>Marathon (M)</strong></td>
                            <td>Marathon pace</td>
                            <td>${l(this.currentTrainingPaces.marathon)}</td>
                        </tr>
                        <tr class="zone-threshold">
                            <td><strong>Threshold (T)</strong></td>
                            <td>Tempo runs</td>
                            <td>${l(this.currentTrainingPaces.threshold)}</td>
                        </tr>
                        <tr class="zone-interval">
                            <td><strong>Interval (I)</strong></td>
                            <td>VO2max intervals</td>
                            <td>${l(this.currentTrainingPaces.interval)}</td>
                        </tr>
                        <tr class="zone-repetition">
                            <td><strong>Repetition (R)</strong></td>
                            <td>Speed work</td>
                            <td>${l(this.currentTrainingPaces.repetition)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="info-text">
                These paces are calculated from your VDOT and represent optimal training intensities for different workout types.
            </p>
        `)}showError(t){const e=document.getElementById("results-section");e&&(e.style.display="block",e.innerHTML=`
                <div class="error-card">
                    <p>❌ ${t}</p>
                </div>
            `)}destroy(){this.container&&(this.container.innerHTML="")}}export{R as RacePredictorView};
//# sourceMappingURL=RacePredictorView-BLkpQYmR.js.map
