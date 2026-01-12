import{B as p}from"./index-WoRBJzVU.js";import{s as m}from"./shared-DoXdG5VT.js";import"./feature-bluetooth-VMdsGD3M.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";class P extends p{static get observedAttributes(){return["current-time","duration"]}_workout=null;canvas=null;set workout(e){this._workout=e,this.renderCanvas()}getTemplate(){return`
            <div class="profile-container">
                <canvas></canvas>
            </div>
        `}getStyles(){return`
            ${m}
            :host {
                display: block;
                width: 100%;
                height: 100px;
                margin: 1rem 0;
            }
            .profile-container {
                width: 100%;
                height: 100%;
                position: relative;
            }
            canvas {
                width: 100%;
                height: 100%;
                display: block;
            }
        `}onAttributeChanged(e,t,i){e==="current-time"&&this.renderCanvas()}connectedCallback(){super.connectedCallback(),this.canvas=this.shadowRoot.querySelector("canvas"),new ResizeObserver(()=>{this.renderCanvas()}).observe(this)}renderCanvas(){if(!this.canvas||!this._workout)return;const e=this.getBoundingClientRect();this.canvas.width=e.width*window.devicePixelRatio,this.canvas.height=e.height*window.devicePixelRatio;const t=this.canvas.getContext("2d");if(!t)return;t.scale(window.devicePixelRatio,window.devicePixelRatio);const i=e.width,o=e.height;t.clearRect(0,0,i,o);const c=this._workout.steps.reduce((s,l)=>s+l.duration,0),g=this.getMaxPower();let n=0;const v=this._workout.steps,h=parseFloat(this.getAttribute("current-time")||"0");v.forEach(s=>{const l=s.duration/c*i;let r=0;s.target?.unit==="percent_ftp"?r=s.target.value||0:s.target?.unit==="watts"?r=(s.target.value||0)/300*100:r=50;const u=r/g*o*.9;let a="#2196F3";r<60?a="#999":r<76?a="#2196F3":r<90?a="#4CAF50":r<105?a="#FFC107":r<120?a="#FF9800":a="#F44336";const f=n/i*c+s.duration,w=n/i*c;f<h?t.globalAlpha=.3:w<=h&&f>=h?t.globalAlpha=1:t.globalAlpha=.6,t.fillStyle=a,t.fillRect(n,o-u,l,u),t.strokeStyle="#fff",t.lineWidth=1,t.strokeRect(n,o-u,l,u),n+=l});const d=h/c*i;t.globalAlpha=1,t.beginPath(),t.moveTo(d,0),t.lineTo(d,o),t.strokeStyle="#fff",t.lineWidth=2,t.setLineDash([5,3]),t.stroke()}getMaxPower(){if(!this._workout)return 100;let e=0;return this._workout.steps.forEach(t=>{let i=0;t.target?.unit==="percent_ftp"?i=t.target.value||0:t.target?.unit==="watts"?i=(t.target.value||0)/3:i=100,i>e&&(e=i)}),Math.max(e,120)}}export{P as WorkoutProfile};
//# sourceMappingURL=WorkoutProfile-Dnn6yw4Y.js.map
