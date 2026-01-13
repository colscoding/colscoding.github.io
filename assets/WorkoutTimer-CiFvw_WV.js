import{B as l}from"./index-CWIKcEoG.js";import"./feature-bluetooth-MdnGXiet.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";class m extends l{intervalId=null;startTimestamp=0;pausedElapsed=0;static get observedAttributes(){return["elapsed","state","show-milliseconds"]}getStyles(){return`
            :host {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-family: 'SF Mono', 'Monaco', 'Menlo', monospace;
            }
            
            .timer {
                font-size: clamp(20px, 5vw, 32px);
                font-weight: 600;
                color: var(--color-text-primary, #1f2328);
                letter-spacing: 0.5px;
                transition: color 0.3s ease;
            }
            
            :host([state="recording"]) .timer {
                color: var(--color-success, #15803d);
            }
            
            :host([state="paused"]) .timer {
                color: var(--color-warning, #a16207);
                animation: blink 1s ease-in-out infinite;
            }
            
            :host([state="idle"]) .timer {
                color: var(--color-text-muted, #8b949e);
            }
            
            .milliseconds {
                font-size: 0.5em;
                opacity: 0.7;
            }
            
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
            
            /* Reduced motion */
            @media (prefers-reduced-motion: reduce) {
                :host([state="paused"]) .timer {
                    animation: none;
                }
            }
        `}getTemplate(){const t=parseInt(this.getAttribute("elapsed")||"0",10),s=this.hasAttribute("show-milliseconds"),i=this.formatTime(t,s);return`
            <time class="timer" datetime="PT${t}S" aria-live="off">
                ${i}
            </time>
        `}formatTime(t,s=!1){const i=Math.floor(t/3600),o=Math.floor(t%3600/60),n=Math.floor(t%60),e=r=>r.toString().padStart(2,"0");let a=`${e(i)}:${e(o)}:${e(n)}`;if(s){const r=Math.floor(t%1*100);a+=`<span class="milliseconds">.${e(r)}</span>`}return a}onAttributeChanged(t){t==="state"&&this.handleStateChange(),this.render()}handleStateChange(){const t=this.getAttribute("state");t==="recording"&&!this.intervalId?this.startTicking():t!=="recording"&&this.intervalId&&this.stopTicking()}startTicking(){this.startTimestamp=Date.now()-this.pausedElapsed*1e3,this.intervalId=window.setInterval(()=>{const t=(Date.now()-this.startTimestamp)/1e3;this.setAttribute("elapsed",String(t))},100)}stopTicking(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null),this.pausedElapsed=parseFloat(this.getAttribute("elapsed")||"0")}onDisconnected(){this.stopTicking()}start(){this.setAttribute("state","recording"),this.emit("timer-start")}pause(){this.setAttribute("state","paused"),this.emit("timer-pause")}resume(){this.setAttribute("state","recording"),this.emit("timer-resume")}stop(){this.setAttribute("state","idle"),this.pausedElapsed=0,this.emit("timer-stop",{elapsed:parseFloat(this.getAttribute("elapsed")||"0")})}reset(){this.pausedElapsed=0,this.startTimestamp=Date.now(),this.setAttribute("elapsed","0"),this.emit("timer-reset")}getElapsed(){return parseFloat(this.getAttribute("elapsed")||"0")}getState(){return this.getAttribute("state")||"idle"}}customElements.define("bpt-workout-timer",m);export{m as WorkoutTimer};
//# sourceMappingURL=WorkoutTimer-CiFvw_WV.js.map
