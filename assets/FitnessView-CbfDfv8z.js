import{E as s,F as a,G as n}from"./index-CWIKcEoG.js";import{getClientPMCData as l}from"./fitnessService-Bd38Prnj.js";import"./feature-bluetooth-MdnGXiet.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";a.register(...n);class v{id="fitness";container=null;chart=null;init(e){this.container=e,this.container.innerHTML=`
            <div class="view-header" style="display: flex; align-items: center; justify-content: space-between;">
                <h2>Fitness & Freshness</h2>
                <button id="fitness-help-btn" class="icon-btn" aria-label="Help" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">ℹ️</button>
            </div>
            <div class="fitness-content" style="padding: 1rem; max-width: 1200px; margin: 0 auto;">
                
                <!-- Current Status Cards -->
                <div id="fitness-summary" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                    <!-- Populated by JS -->
                </div>

                <!-- Interpretation Message -->
                <div id="fitness-advice" class="status-card" style="margin-bottom: 2rem; padding: 1rem; border-radius: 8px; background: var(--bg-secondary); border-left: 4px solid var(--color-primary-500); display: none;">
                    <!-- Populated by JS -->
                </div>

                <div class="chart-container" style="position: relative; height: 400px; width: 100%; margin-bottom: 2rem;">
                    <canvas id="pmcChart"></canvas>
                </div>
                
                <div id="fitness-status" class="status-message" style="margin-top: 1rem; text-align: center; color: var(--text-muted);">Loading data...</div>
            </div>
        `,this.container.querySelector("#fitness-help-btn")?.addEventListener("click",()=>{this.showHelpModal()})}showHelpModal(){const e=document.createElement("div");e.innerHTML=`
            <div style="display: grid; gap: 1.5rem;">
                <div>
                    <h4 style="color: rgb(75, 192, 192); margin-bottom: 0.5rem; font-size: 1.1em;">Fitness (CTL)</h4>
                    <p style="font-size: 0.95em; line-height: 1.5; color: var(--text-secondary);">
                        <strong>Your long-term endurance (42-day avg).</strong><br>
                        Shows how much training load you've built up over the last 6 weeks. Higher is generally better for endurance performance.
                    </p>
                </div>
                <div>
                    <h4 style="color: rgb(255, 99, 132); margin-bottom: 0.5rem; font-size: 1.1em;">Fatigue (ATL)</h4>
                    <p style="font-size: 0.95em; line-height: 1.5; color: var(--text-secondary);">
                        <strong>Your recent tiredness (7-day avg).</strong><br>
                        Tracks short-term exhaustion from hard efforts this week. Spikes quickly after training and drops when you rest.
                    </p>
                </div>
                <div>
                    <h4 style="color: rgb(255, 205, 86); margin-bottom: 0.5rem; font-size: 1.1em;">Form (TSB)</h4>
                    <p style="font-size: 0.95em; line-height: 1.5; color: var(--text-secondary);">
                        <strong>Your race readiness (Fitness - Fatigue).</strong><br>
                        • <strong>Positive:</strong> You are fresh and ready for race day.<br>
                        • <strong>Negative:</strong> You are in a heavy training block and building fitness.
                    </p>
                </div>
            </div>
        `,s({title:"Chart Metrics Guide",content:e,closeOnOverlay:!0,buttons:[{text:"Close",variant:"secondary",onClick:()=>{document.querySelector(".modal-close-btn")?.click()}}]})}async onEnter(){await this.loadData()}onLeave(){this.chart&&(this.chart.destroy(),this.chart=null)}async loadData(){try{console.log("FitnessView: Loading data...");const e=await l();console.log("FitnessView: Data loaded",e.length);const t=this.container?.querySelector("#fitness-status");if(e.length===0){t&&(t.textContent="No fitness data available yet. Complete a workout with power data to see your stats!",t.classList.remove("loading")),this.chart&&(this.chart.destroy(),this.chart=null);return}this.renderChart(e),this.renderSummary(e),t&&(t.textContent="",t.classList.remove("loading"))}catch(e){console.error("FitnessView Error:",e);const t=this.container?.querySelector("#fitness-status");t&&(t.textContent="Error loading fitness data. See console for details.",t.classList.remove("loading"))}}renderSummary(e){const t=this.container?.querySelector("#fitness-summary"),o=this.container?.querySelector("#fitness-advice");if(!t||!o||e.length===0)return;const i=e[e.length-1],r=this.getFormStatus(i.tsb);t.innerHTML=`
            <div style="background: var(--bg-elevated); padding: 1rem; border-radius: 8px; text-align: center; box-shadow: var(--shadow-sm);">
                <div style="font-size: 0.9em; color: var(--text-secondary); margin-bottom: 0.5rem;">Fitness (CTL)</div>
                <div style="font-size: 1.8em; font-weight: bold; color: rgb(75, 192, 192);">${Math.round(i.ctl)}</div>
            </div>
            <div style="background: var(--bg-elevated); padding: 1rem; border-radius: 8px; text-align: center; box-shadow: var(--shadow-sm);">
                <div style="font-size: 0.9em; color: var(--text-secondary); margin-bottom: 0.5rem;">Fatigue (ATL)</div>
                <div style="font-size: 1.8em; font-weight: bold; color: rgb(255, 99, 132);">${Math.round(i.atl)}</div>
            </div>
            <div style="background: var(--bg-elevated); padding: 1rem; border-radius: 8px; text-align: center; box-shadow: var(--shadow-sm);">
                <div style="font-size: 0.9em; color: var(--text-secondary); margin-bottom: 0.5rem;">Form (TSB)</div>
                <div style="font-size: 1.8em; font-weight: bold; color: ${r.color};">${Math.round(i.tsb)}</div>
            </div>
        `,o.innerHTML=`
            <div style="font-weight: bold; margin-bottom: 0.5rem; color: ${r.color}; font-size: 1.1em;">${r.label}</div>
            <div style="color: var(--text-primary); line-height: 1.5;">${r.description}</div>
        `,o.style.display="block",o.style.borderLeftColor=r.color}getFormStatus(e){return e>25?{label:"Transition Phase",color:"var(--color-info-main)",description:"You are very fresh. This zone is typical when taking a break or tapering significantly before a major race. Prolonged time here means you are losing fitness."}:e>=5?{label:"Fresh & Ready",color:"var(--color-success-main)",description:"You are well-rested and primed for performance. This is the ideal state for race day or a personal best attempt."}:e>=-10?{label:"Neutral / Maintenance",color:"var(--color-text-secondary)",description:"A balanced state. You are maintaining your fitness levels without accumulating excessive fatigue."}:e>=-30?{label:"Productive Training",color:"var(--color-warning-main)",description:"Optimal training zone. You are pushing your body enough to stimulate fitness gains, but not so hard that you risk crashing."}:{label:"High Fatigue Risk",color:"var(--color-error-main)",description:"You are digging deep. Short periods here are okay for overload blocks, but stay here too long and you risk overtraining or illness. Consider a rest week."}}renderChart(e){const t=this.container?.querySelector("#pmcChart")?.getContext("2d");if(!t)return;this.chart&&this.chart.destroy();const o=getComputedStyle(document.body).getPropertyValue("--text-primary").trim()||"#666666",i=getComputedStyle(document.body).getPropertyValue("--border-default").trim()||"rgba(128, 128, 128, 0.1)";this.chart=new a(t,{type:"line",data:{labels:e.map(r=>r.date),datasets:[{label:"Fitness (CTL)",data:e.map(r=>r.ctl),borderColor:"rgb(75, 192, 192)",backgroundColor:"rgba(75, 192, 192, 0.2)",yAxisID:"y",fill:!0,tension:.1},{label:"Fatigue (ATL)",data:e.map(r=>r.atl),borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.2)",yAxisID:"y",fill:!1,tension:.1},{label:"Form (TSB)",data:e.map(r=>r.tsb),borderColor:"rgb(255, 205, 86)",backgroundColor:r=>r.raw<0?"rgba(255, 99, 132, 0.5)":"rgba(75, 192, 192, 0.5)",yAxisID:"y1",type:"bar",barThickness:"flex",maxBarThickness:10}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:o},grid:{color:i}},y:{type:"linear",display:!0,position:"left",title:{display:!0,text:"Load (TSS/day)",color:o},ticks:{color:o},grid:{color:i}},y1:{type:"linear",display:!0,position:"right",title:{display:!0,text:"Form",color:o},grid:{drawOnChartArea:!1},ticks:{color:o}}}}})}}export{v as FitnessView};
//# sourceMappingURL=FitnessView-CbfDfv8z.js.map
