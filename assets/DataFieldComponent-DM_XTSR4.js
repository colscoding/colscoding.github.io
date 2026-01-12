import{D as _,a as b,i as z,T as ne,p as oe,r as ie,g as le}from"./index-WoRBJzVU.js";import"./feature-bluetooth-VMdsGD3M.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";function y(e,t,r=Date.now()){if(e.length===0)return null;const a=r-t,n=e.filter(i=>i.timestamp>=a);return n.length===0?null:n.reduce((i,l)=>i+l.value,0)/n.length}function S(e){return e.length===0?null:e.reduce((r,a)=>r+a.value,0)/e.length}function D(e){return e.length===0?null:Math.max(...e.map(t=>t.value))}function g(e,t=5e3){if(e.length===0)return null;const r=e[e.length-1];return Date.now()-r.timestamp<=t?r.value:null}function N(e,t,r){if(e===null||t===null||t<=0)return null;const a=e/t*100;for(const o of r)if(a>=o.minPercent&&a<o.maxPercent)return o.zone;const n=r[r.length-1];return n&&a>=n.minPercent?n.zone:null}function E(e,t,r){const a=N(e,t,r);if(a===null)return null;const n=r.find(o=>o.zone===a);return n?{zone:a,zoneName:n.name,bg:I(n.color,.15),text:H(n.color,20),border:n.color}:null}function U(e,t){return e===null||t===null||t<=0?null:e/t*100}function I(e,t){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!r)return e;const a=parseInt(r[1],16),n=parseInt(r[2],16),o=parseInt(r[3],16);return`rgba(${a}, ${n}, ${o}, ${t})`}function H(e,t){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!r)return e;const a=1-t/100,n=Math.round(parseInt(r[1],16)*a),o=Math.round(parseInt(r[2],16)*a),i=Math.round(parseInt(r[3],16)*a);return`#${n.toString(16).padStart(2,"0")}${o.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}`}function P(e,t=!1){const r=Math.floor(e/1e3),a=Math.floor(r/3600),n=Math.floor(r%3600/60),o=r%60;return a>0||t?`${a}:${n.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`:`${n}:${o.toString().padStart(2,"0")}`}function j(e,t=!1){if(e===null||e<=0)return"--:--";const a=(t?1609.344:1e3)/e,n=Math.floor(a/60),o=Math.floor(a%60);return`${n}:${o.toString().padStart(2,"0")}`}const k=(e,t)=>E(e,t.ftp,t.powerZones||_),se={id:"power-current",name:"Power",shortName:"PWR",category:"power",description:"Current power output from power meter",unit:"W",sourceType:"sensor",updateFrequency:"realtime",defaultSize:"medium",supportedSizes:["small","medium","large","xlarge","xxlarge","jumbo"],icon:"⚡",requiresSensor:["power"],decimals:0,minValue:0,maxValue:2500,formatter:e=>e!==null?Math.round(e).toString():"--",colorizer:k},ce={id:"power-3s",name:"Power (3s)",shortName:"3s PWR",category:"power",description:"3-second rolling average power for smoother display",unit:"W",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large","xlarge","xxlarge","jumbo"],icon:"⚡",requiresSensor:["power"],decimals:0,minValue:0,maxValue:2500,calculator:e=>y(e.power,3e3),formatter:e=>e!==null?Math.round(e).toString():"--",colorizer:k},ue={id:"power-10s",name:"Power (10s)",shortName:"10s PWR",category:"power",description:"10-second rolling average power",unit:"W",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large","xlarge","xxlarge","jumbo"],icon:"⚡",requiresSensor:["power"],decimals:0,calculator:e=>y(e.power,1e4),formatter:e=>e!==null?Math.round(e).toString():"--",colorizer:k},de={id:"power-30s",name:"Power (30s)",shortName:"30s PWR",category:"power",description:"30-second rolling average power",unit:"W",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large","xlarge","xxlarge","jumbo"],icon:"⚡",requiresSensor:["power"],decimals:0,calculator:e=>y(e.power,3e4),formatter:e=>e!==null?Math.round(e).toString():"--",colorizer:k},me={id:"power-avg",name:"Avg Power",shortName:"Avg PWR",category:"power",description:"Average power for entire workout",unit:"W",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚡",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:0,calculator:e=>S(e.power),formatter:e=>e!==null?Math.round(e).toString():"--"},pe={id:"power-lap-avg",name:"Lap Avg Power",shortName:"Lap PWR",category:"power",description:"Average power for current lap",unit:"W",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚡",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t)=>{if(!t.lapStartTime)return null;const r=e.power.filter(a=>a.timestamp>=t.lapStartTime);return S(r)},formatter:e=>e!==null?Math.round(e).toString():"--"},fe={id:"power-max",name:"Max Power",shortName:"Max PWR",category:"power",description:"Maximum power during workout",unit:"W",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚡",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:0,calculator:e=>D(e.power),formatter:e=>e!==null?Math.round(e).toString():"--"},ge={id:"power-zone",name:"Power Zone",shortName:"P Zone",category:"power",description:"Current power training zone (1-7)",unit:null,sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🎯",requiresSensor:["power"],decimals:0,calculator:(e,t,r)=>{const a=g(e.power);return N(a,r.ftp,r.powerZones||_)},formatter:(e,t)=>e===null?"--":(t.powerZones||_).find(n=>n.zone===e)?`Z${e}`:`Z${e}`,colorizer:(e,t)=>{if(e===null)return null;const a=(t.powerZones||_).find(n=>n.zone===e);return a?{zone:e,zoneName:a.name,bg:a.color+"26",text:a.color,border:a.color}:null}},he={id:"power-percent-ftp",name:"Power % FTP",shortName:"% FTP",category:"power",description:"Current power as percentage of FTP",unit:"%",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📊",requiresSensor:["power"],decimals:0,calculator:(e,t,r)=>{const a=g(e.power);return U(a,r.ftp)},formatter:e=>e!==null?Math.round(e).toString():"--",colorizer:k},R={id:"power-normalized",name:"Normalized Power",shortName:"NP",category:"power",description:"Normalized Power - accounts for variability in effort",unit:"W",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚡",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:0,calculator:e=>{const t=e.power;if(t.length<30)return null;const r=[],a=3e4;for(let i=0;i<t.length;i++){const l=t[i].timestamp,s=l-a,c=t.filter(d=>d.timestamp>=s&&d.timestamp<=l);if(c.length>0){const d=c.reduce((m,u)=>m+u.value,0)/c.length;r.push(d)}}if(r.length===0)return null;const n=r.map(i=>Math.pow(i,4)),o=n.reduce((i,l)=>i+l,0)/n.length;return Math.pow(o,.25)},formatter:e=>e!==null?Math.round(e).toString():"--"},Se={id:"power-if",name:"Intensity Factor",shortName:"IF",category:"power",description:"Intensity Factor - NP divided by FTP",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📈",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:2,calculator:(e,t,r)=>{if(!r.ftp||r.ftp<=0)return null;const a=R.calculator;if(!a)return null;const n=a(e,t,r);return n===null?null:n/r.ftp},formatter:e=>e!==null?e.toFixed(2):"--"},ye={id:"power-tss",name:"TSS",shortName:"TSS",category:"power",description:"Training Stress Score - workout load metric",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📊",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t,r)=>{if(!r.ftp||r.ftp<=0)return null;const a=R.calculator;if(!a)return null;const n=a(e,t,r);if(n===null)return null;const o=t.elapsedTime/1e3,i=n/r.ftp;return o*n*i/(r.ftp*3600)*100},formatter:e=>e!==null?Math.round(e).toString():"--"},ze={id:"power-kj",name:"Kilojoules",shortName:"kJ",category:"power",description:"Total work done in kilojoules",unit:"kJ",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔥",requiresSensor:["power"],requiresWorkoutActive:!0,decimals:0,calculator:e=>{const t=e.power;if(t.length<2)return null;let r=0;for(let a=1;a<t.length;a++){const n=t[a-1],o=t[a],i=(o.timestamp-n.timestamp)/1e3,l=(n.value+o.value)/2;r+=l*i}return r/1e3},formatter:e=>e!==null?Math.round(e).toString():"--"},we={id:"power-wkg",name:"W/kg",shortName:"W/kg",category:"power",description:"Power to weight ratio",unit:"W/kg",sourceType:"calculated",updateFrequency:"realtime",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚖️",requiresSensor:["power"],decimals:2,calculator:(e,t,r)=>{const a=g(e.power);return a===null||!r.weight||r.weight<=0?null:a/r.weight},formatter:e=>e!==null?e.toFixed(2):"--"},G=[se,ce,ue,de,me,pe,fe,ge,he,R,Se,ye,ze,we],A=(e,t)=>E(e,t.maxHr,t.hrZones||b),xe={id:"heartrate-current",name:"Heart Rate",shortName:"HR",category:"heartrate",description:"Current heart rate from heart rate monitor",unit:"bpm",sourceType:"sensor",updateFrequency:"realtime",defaultSize:"medium",supportedSizes:["small","medium","large","xlarge","xxlarge","jumbo"],icon:"❤️",requiresSensor:["heartrate"],decimals:0,minValue:30,maxValue:220,formatter:e=>e!==null?Math.round(e).toString():"--",colorizer:A},ve={id:"hr-5s",name:"HR (5s)",shortName:"5s HR",category:"heartrate",description:"5-second rolling average heart rate",unit:"bpm",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large","xlarge","xxlarge","jumbo"],icon:"❤️",requiresSensor:["heartrate"],decimals:0,calculator:e=>y(e.heartrate,5e3),formatter:e=>e!==null?Math.round(e).toString():"--",colorizer:A},Me={id:"hr-30s",name:"HR (30s)",shortName:"30s HR",category:"heartrate",description:"30-second rolling average heart rate",unit:"bpm",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"❤️",requiresSensor:["heartrate"],decimals:0,calculator:e=>y(e.heartrate,3e4),formatter:e=>e!==null?Math.round(e).toString():"--",colorizer:A},qe={id:"hr-avg",name:"Avg HR",shortName:"Avg HR",category:"heartrate",description:"Average heart rate for entire workout",unit:"bpm",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"❤️",requiresSensor:["heartrate"],requiresWorkoutActive:!0,decimals:0,calculator:e=>S(e.heartrate),formatter:e=>e!==null?Math.round(e).toString():"--"},Te={id:"hr-lap-avg",name:"Lap Avg HR",shortName:"Lap HR",category:"heartrate",description:"Average heart rate for current lap",unit:"bpm",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"❤️",requiresSensor:["heartrate"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t)=>{if(!t.lapStartTime)return null;const r=e.heartrate.filter(a=>a.timestamp>=t.lapStartTime);return S(r)},formatter:e=>e!==null?Math.round(e).toString():"--"},Fe={id:"hr-max",name:"Max HR",shortName:"Max HR",category:"heartrate",description:"Maximum heart rate during workout",unit:"bpm",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"❤️",requiresSensor:["heartrate"],requiresWorkoutActive:!0,decimals:0,calculator:e=>D(e.heartrate),formatter:e=>e!==null?Math.round(e).toString():"--"},_e={id:"hr-min",name:"Min HR",shortName:"Min HR",category:"heartrate",description:"Minimum heart rate during workout",unit:"bpm",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"❤️",requiresSensor:["heartrate"],requiresWorkoutActive:!0,decimals:0,calculator:e=>{const t=e.heartrate;return t.length===0?null:Math.min(...t.map(r=>r.value))},formatter:e=>e!==null?Math.round(e).toString():"--"},be={id:"hr-zone",name:"HR Zone",shortName:"HR Zone",category:"heartrate",description:"Current heart rate training zone (1-5)",unit:null,sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🎯",requiresSensor:["heartrate"],decimals:0,calculator:(e,t,r)=>{const a=g(e.heartrate);return N(a,r.maxHr,r.hrZones||b)},formatter:(e,t)=>e===null?"--":(t.hrZones||b).find(n=>n.zone===e)?`Z${e}`:`Z${e}`,colorizer:(e,t)=>{if(e===null)return null;const a=(t.hrZones||b).find(n=>n.zone===e);return a?{zone:e,zoneName:a.name,bg:a.color+"26",text:a.color,border:a.color}:null}},ke={id:"hr-percent-max",name:"HR % Max",shortName:"% Max",category:"heartrate",description:"Current heart rate as percentage of max HR",unit:"%",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📊",requiresSensor:["heartrate"],decimals:0,calculator:(e,t,r)=>{const a=g(e.heartrate);return U(a,r.maxHr)},formatter:e=>e!==null?Math.round(e).toString():"--",colorizer:A},De={id:"hr-percent-reserve",name:"HR % Reserve",shortName:"% HRR",category:"heartrate",description:"Current heart rate as percentage of heart rate reserve",unit:"%",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📊",requiresSensor:["heartrate"],decimals:0,calculator:(e,t,r)=>{const a=g(e.heartrate);if(a===null||!r.maxHr||!r.restingHr)return null;const n=r.maxHr-r.restingHr;return n<=0?null:(a-r.restingHr)/n*100},formatter:e=>e!==null?Math.round(e).toString():"--"},Ne={id:"hr-calories",name:"Calories",shortName:"Cal",category:"heartrate",description:"Estimated calories burned based on heart rate",unit:"kcal",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔥",requiresSensor:["heartrate"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t,r)=>{const a=e.heartrate;if(a.length<2||!r.weight||!r.maxHr)return null;let n=0;for(let o=1;o<a.length;o++){const i=a[o-1],l=a[o],s=(l.timestamp-i.timestamp)/6e4,d=(.6309*((i.value+l.value)/2)+.1988*r.weight)/4.184;n+=d*s}return n},formatter:e=>e!==null?Math.round(e).toString():"--"},Pe={id:"hr-time-in-zone",name:"Time in Zone",shortName:"T-Zone",category:"heartrate",description:"Time spent in each heart rate zone",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"large",supportedSizes:["large"],icon:"⏱️",requiresSensor:["heartrate"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t,r)=>{const a=e.heartrate;if(a.length<2||!r.maxHr)return null;const n=r.hrZones||b,o=new Array(n.length).fill(0);for(let l=1;l<a.length;l++){const s=a[l-1],c=a[l],d=c.timestamp-s.timestamp,m=(s.value+c.value)/2,u=N(m,r.maxHr,n);u!==null&&u>0&&u<=n.length&&(o[u-1]+=d)}return o.indexOf(Math.max(...o))+1},formatter:e=>e!==null?`Z${e}`:"--"},Ae=[xe,ve,Me,qe,Te,Fe,_e,be,ke,De,Ne,Pe],w={veryLow:{max:60},low:{max:75},optimal:{max:95},high:{max:110}},p={veryLow:"#9CA3AF",low:"#3B82F6",optimal:"#10B981",high:"#F59E0B",veryHigh:"#EF4444"},W=e=>e===null?null:e<w.veryLow.max?{zone:1,zoneName:"Very Low",bg:p.veryLow+"26",text:p.veryLow,border:p.veryLow}:e<w.low.max?{zone:2,zoneName:"Low",bg:p.low+"26",text:p.low,border:p.low}:e<w.optimal.max?{zone:3,zoneName:"Optimal",bg:p.optimal+"26",text:p.optimal,border:p.optimal}:e<w.high.max?{zone:4,zoneName:"High",bg:p.high+"26",text:p.high,border:p.high}:{zone:5,zoneName:"Very High",bg:p.veryHigh+"26",text:p.veryHigh,border:p.veryHigh},Le={id:"cadence-current",name:"Cadence",shortName:"CAD",category:"cadence",description:"Current pedaling cadence from sensor",unit:"rpm",sourceType:"sensor",updateFrequency:"realtime",defaultSize:"medium",supportedSizes:["small","medium","large","xlarge","xxlarge","jumbo"],icon:"🔄",requiresSensor:["cadence"],decimals:0,minValue:0,maxValue:200,formatter:e=>e!==null?Math.round(e).toString():"--",colorizer:e=>W(e)},Ce={id:"cadence-5s",name:"Cadence (5s)",shortName:"5s CAD",category:"cadence",description:"5-second rolling average cadence",unit:"rpm",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔄",requiresSensor:["cadence"],decimals:0,calculator:e=>y(e.cadence,5e3),formatter:e=>e!==null?Math.round(e).toString():"--",colorizer:e=>W(e)},Ee={id:"cadence-30s",name:"Cadence (30s)",shortName:"30s CAD",category:"cadence",description:"30-second rolling average cadence",unit:"rpm",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔄",requiresSensor:["cadence"],decimals:0,calculator:e=>y(e.cadence,3e4),formatter:e=>e!==null?Math.round(e).toString():"--",colorizer:e=>W(e)},Ie={id:"cadence-avg",name:"Avg Cadence",shortName:"Avg CAD",category:"cadence",description:"Average cadence for entire workout (excluding zeros)",unit:"rpm",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔄",requiresSensor:["cadence"],requiresWorkoutActive:!0,decimals:0,calculator:e=>{const t=e.cadence.filter(r=>r.value>0);return S(t)},formatter:e=>e!==null?Math.round(e).toString():"--"},He={id:"cadence-lap-avg",name:"Lap Avg Cadence",shortName:"Lap CAD",category:"cadence",description:"Average cadence for current lap (excluding zeros)",unit:"rpm",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔄",requiresSensor:["cadence"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t)=>{if(!t.lapStartTime)return null;const r=e.cadence.filter(a=>a.timestamp>=t.lapStartTime&&a.value>0);return S(r)},formatter:e=>e!==null?Math.round(e).toString():"--"},Re={id:"cadence-max",name:"Max Cadence",shortName:"Max CAD",category:"cadence",description:"Maximum cadence during workout",unit:"rpm",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔄",requiresSensor:["cadence"],requiresWorkoutActive:!0,decimals:0,calculator:e=>D(e.cadence),formatter:e=>e!==null?Math.round(e).toString():"--"},We={id:"cadence-zone",name:"Cadence Zone",shortName:"CAD Zone",category:"cadence",description:"Current cadence zone (Very Low, Low, Optimal, High, Very High)",unit:null,sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🎯",requiresSensor:["cadence"],decimals:0,calculator:e=>{const t=g(e.cadence);return t===null?null:t<w.veryLow.max?1:t<w.low.max?2:t<w.optimal.max?3:t<w.high.max?4:5},formatter:e=>e===null?"--":["V.Low","Low","Optimal","High","V.High"][e-1]||"--",colorizer:e=>{if(e===null)return null;const t=["Very Low","Low","Optimal","High","Very High"],r=[p.veryLow,p.low,p.optimal,p.high,p.veryHigh];return{zone:e,zoneName:t[e-1],bg:r[e-1]+"26",text:r[e-1],border:r[e-1]}}},$e={id:"cadence-balance",name:"Pedal Balance",shortName:"Balance",category:"cadence",description:"Left/Right pedal balance percentage",unit:"%",sourceType:"sensor",updateFrequency:"realtime",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⚖️",requiresSensor:["power"],decimals:0,minValue:0,maxValue:100,formatter:e=>e===null?"--":`${Math.round(e)}/${Math.round(100-e)}`,colorizer:e=>{if(e===null)return null;const t=Math.abs(50-e);return t<3?{zone:1,zoneName:"Balanced",bg:"#10B98126",text:"#10B981",border:"#10B981"}:t<5?{zone:2,zoneName:"Slight Imbalance",bg:"#F59E0B26",text:"#F59E0B",border:"#F59E0B"}:{zone:3,zoneName:"Imbalanced",bg:"#EF444426",text:"#EF4444",border:"#EF4444"}}},Ze={id:"cadence-pedaling-time",name:"Pedaling Time",shortName:"Pedal %",category:"cadence",description:"Percentage of time actively pedaling",unit:"%",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏱️",requiresSensor:["cadence"],requiresWorkoutActive:!0,decimals:0,calculator:e=>{const t=e.cadence;if(t.length<2)return null;let r=0,a=0;for(let n=1;n<t.length;n++){const o=t[n-1],i=t[n],l=i.timestamp-o.timestamp;a+=l,(o.value>0||i.value>0)&&(r+=l)}return a===0?null:r/a*100},formatter:e=>e!==null?Math.round(e).toString():"--"},Ve={id:"cadence-revolutions",name:"Total Revolutions",shortName:"Revs",category:"cadence",description:"Total crank revolutions during workout",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🔢",requiresSensor:["cadence"],requiresWorkoutActive:!0,decimals:0,calculator:e=>{const t=e.cadence;if(t.length<2)return null;let r=0;for(let a=1;a<t.length;a++){const n=t[a-1],o=t[a],i=(o.timestamp-n.timestamp)/6e4,l=(n.value+o.value)/2;r+=l*i}return Math.round(r)},formatter:e=>e!==null?e.toLocaleString():"--"},Be=[Le,Ce,Ee,Ie,He,Re,We,$e,Ze,Ve],K=e=>e*3.6,Oe=e=>e*2.23694,M=(e,t)=>e===null?null:z(t)?Oe(e):K(e),J=(e,t)=>{if(e===null||e<=0)return null;const r=K(e);if(r<=0)return null;const a=60/r;return z(t)?a*1.60934:a},Ue={id:"speed-current",name:"Speed",shortName:"SPD",category:"speed",description:"Current speed from GPS",unit:"km/h",sourceType:"sensor",updateFrequency:"realtime",defaultSize:"medium",supportedSizes:["small","medium","large","xlarge","xxlarge","jumbo"],icon:"🚴",requiresSensor:["gps"],decimals:1,minValue:0,maxValue:100,calculator:(e,t,r)=>{const a=g(e.speed);return M(a,r)},formatter:e=>e===null?"--":`${e.toFixed(1)}`},je={id:"speed-5s",name:"Speed (5s)",shortName:"5s SPD",category:"speed",description:"5-second rolling average speed",unit:"km/h",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🚴",requiresSensor:["gps"],decimals:1,calculator:(e,t,r)=>{const a=y(e.speed,5e3);return M(a,r)},formatter:e=>e!==null?e.toFixed(1):"--"},Ge={id:"speed-30s",name:"Speed (30s)",shortName:"30s SPD",category:"speed",description:"30-second rolling average speed",unit:"km/h",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🚴",requiresSensor:["gps"],decimals:1,calculator:(e,t,r)=>{const a=y(e.speed,3e4);return M(a,r)},formatter:e=>e!==null?e.toFixed(1):"--"},Ke={id:"speed-avg",name:"Avg Speed",shortName:"Avg SPD",category:"speed",description:"Average speed for entire workout (moving time)",unit:"km/h",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🚴",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:1,calculator:(e,t,r)=>{const a=e.speed.filter(o=>o.value>.5),n=S(a);return M(n,r)},formatter:e=>e!==null?e.toFixed(1):"--"},Je={id:"speed-lap-avg",name:"Lap Avg Speed",shortName:"Lap SPD",category:"speed",description:"Average speed for current lap",unit:"km/h",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🚴",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:1,calculator:(e,t,r)=>{if(!t.lapStartTime)return null;const a=e.speed.filter(o=>o.timestamp>=t.lapStartTime&&o.value>.5),n=S(a);return M(n,r)},formatter:e=>e!==null?e.toFixed(1):"--"},Ye={id:"speed-max",name:"Max Speed",shortName:"Max SPD",category:"speed",description:"Maximum speed during workout",unit:"km/h",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🚴",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:1,calculator:(e,t,r)=>{const a=D(e.speed);return M(a,r)},formatter:e=>e!==null?e.toFixed(1):"--"},Qe={id:"speed-pace",name:"Pace",shortName:"Pace",category:"speed",description:"Current pace (time per km or mile)",unit:"min/km",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏱️",requiresSensor:["gps"],decimals:0,calculator:(e,t,r)=>{const a=g(e.speed);return J(a,r)},formatter:e=>e===null||e>30?"--":j(e)},Xe={id:"speed-pace-avg",name:"Avg Pace",shortName:"Avg Pace",category:"speed",description:"Average pace for entire workout",unit:"min/km",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏱️",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t,r)=>{const a=e.speed.filter(o=>o.value>.5),n=S(a);return J(n,r)},formatter:e=>e===null||e>30?"--":j(e)},et={id:"speed-moving-time",name:"Moving Time",shortName:"Moving",category:"speed",description:"Time spent moving (speed > 0.5 m/s)",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏱️",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:e=>{const t=e.speed;if(t.length<2)return null;let r=0;const a=.5;for(let n=1;n<t.length;n++){const o=t[n-1],i=t[n],l=i.timestamp-o.timestamp;(o.value+i.value)/2>a&&(r+=l)}return r},formatter:e=>{if(e===null)return"--";const t=Math.floor(e/1e3),r=Math.floor(t/3600),a=Math.floor(t%3600/60),n=t%60;return r>0?`${r}:${a.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`:`${a}:${n.toString().padStart(2,"0")}`}},tt={id:"speed-stopped-time",name:"Stopped Time",shortName:"Stopped",category:"speed",description:"Time spent stopped (speed < 0.5 m/s)",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏸️",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:e=>{const t=e.speed;if(t.length<2)return null;let r=0;const a=.5;for(let n=1;n<t.length;n++){const o=t[n-1],i=t[n],l=i.timestamp-o.timestamp;(o.value+i.value)/2<=a&&(r+=l)}return r},formatter:e=>{if(e===null)return"--";const t=Math.floor(e/1e3),r=Math.floor(t/3600),a=Math.floor(t%3600/60),n=t%60;return r>0?`${r}:${a.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`:`${a}:${n.toString().padStart(2,"0")}`}},rt={id:"speed-vertical",name:"Vertical Speed",shortName:"VAM",category:"speed",description:"Vertical climbing rate in meters per hour",unit:"m/h",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📈",requiresSensor:["gps"],decimals:0,calculator:e=>{const t=e.altitude;if(t.length<2)return null;const r=3e4,a=Date.now(),n=t.filter(c=>c.timestamp>=a-r);if(n.length<2)return null;const o=n[0],i=n[n.length-1],l=i.value-o.value,s=(i.timestamp-o.timestamp)/36e5;return s<=0?null:Math.max(0,l/s)},formatter:e=>e!==null?Math.round(e).toString():"--"},at={id:"speed-efficiency",name:"Efficiency Factor",shortName:"EF",category:"speed",description:"Speed per watt of power (efficiency indicator)",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📊",requiresSensor:["gps","power"],requiresWorkoutActive:!0,decimals:2,calculator:(e,t,r)=>{const a=e.speed.filter(s=>s.value>.5),n=e.power.filter(s=>s.value>0);if(a.length===0||n.length===0)return null;const o=S(a),i=S(n);if(!o||!i||i<=0)return null;const l=M(o,r);return l?l/i:null},formatter:e=>e!==null?e.toFixed(3):"--"},nt=[Ue,je,Ge,Ke,Je,Ye,Qe,Xe,et,tt,rt,at],Y=e=>e/1e3,Q=e=>e/1609.344,X=(e,t)=>e===null?null:z(t)?Q(e):Y(e),ot={id:"distance-total",name:"Distance",shortName:"Dist",category:"distance",description:"Total distance traveled",unit:"km",sourceType:"calculated",updateFrequency:"second",defaultSize:"large",supportedSizes:["small","medium","large"],icon:"📏",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:2,calculator:(e,t,r)=>{const a=e.gps;if(a.length<2)return 0;let n=0;for(let o=1;o<a.length;o++){const i=a[o-1],l=a[o],s=6371e3,c=i.lat*Math.PI/180,d=l.lat*Math.PI/180,m=(l.lat-i.lat)*Math.PI/180,u=(l.lon-i.lon)*Math.PI/180,f=Math.sin(m/2)*Math.sin(m/2)+Math.cos(c)*Math.cos(d)*Math.sin(u/2)*Math.sin(u/2),h=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f));n+=s*h}return X(n,r)},formatter:e=>e===null?"--":e.toFixed(2)},it={id:"distance-lap",name:"Lap Distance",shortName:"Lap Dist",category:"distance",description:"Distance for current lap",unit:"km",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📏",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:2,calculator:(e,t,r)=>{if(!t.lapStartTime)return 0;const a=e.gps.filter(o=>o.timestamp>=t.lapStartTime);if(a.length<2)return 0;let n=0;for(let o=1;o<a.length;o++){const i=a[o-1],l=a[o],s=6371e3,c=i.lat*Math.PI/180,d=l.lat*Math.PI/180,m=(l.lat-i.lat)*Math.PI/180,u=(l.lon-i.lon)*Math.PI/180,f=Math.sin(m/2)*Math.sin(m/2)+Math.cos(c)*Math.cos(d)*Math.sin(u/2)*Math.sin(u/2),h=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f));n+=s*h}return X(n,r)},formatter:e=>e!==null?e.toFixed(2):"--"},lt={id:"distance-to-marker",name:"To Next Marker",shortName:"To Marker",category:"distance",description:"Distance remaining to next km/mile marker",unit:"km",sourceType:"calculated",updateFrequency:"second",defaultSize:"small",supportedSizes:["small","medium"],icon:"🎯",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:2,calculator:(e,t,r)=>{const a=e.gps;if(a.length<2)return null;let n=0;for(let l=1;l<a.length;l++){const s=a[l-1],c=a[l],d=6371e3,m=s.lat*Math.PI/180,u=c.lat*Math.PI/180,f=(c.lat-s.lat)*Math.PI/180,h=(c.lon-s.lon)*Math.PI/180,x=Math.sin(f/2)*Math.sin(f/2)+Math.cos(m)*Math.cos(u)*Math.sin(h/2)*Math.sin(h/2),F=2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));n+=d*F}const o=z(r)?Q(n):Y(n);return Math.ceil(o)-o},formatter:e=>e===null?"--":e.toFixed(2)},st=[ot,it,lt],ct={id:"time-elapsed",name:"Elapsed Time",shortName:"Time",category:"time",description:"Total elapsed time since workout start",unit:null,sourceType:"calculated",updateFrequency:"second",defaultSize:"large",supportedSizes:["small","medium","large"],icon:"⏱️",requiresWorkoutActive:!0,decimals:0,calculator:(e,t)=>t.elapsedTime,formatter:e=>e!==null?P(e):"--"},ut={id:"time-lap",name:"Lap Time",shortName:"Lap",category:"time",description:"Elapsed time for current lap",unit:null,sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏱️",requiresWorkoutActive:!0,decimals:0,calculator:(e,t)=>t.lapStartTime?Date.now()-t.lapStartTime:0,formatter:e=>e!==null?P(e):"--"},dt={id:"time-last-lap",name:"Last Lap Time",shortName:"Last Lap",category:"time",description:"Duration of the previous lap",unit:null,sourceType:"calculated",updateFrequency:"on-change",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⏱️",requiresWorkoutActive:!0,decimals:0,calculator:(e,t)=>{const r=t.laps||[];if(r.length===0)return null;const a=r[r.length-1];return a.endTime-a.startTime},formatter:e=>e!==null?P(e):"--"},mt={id:"time-clock",name:"Time of Day",shortName:"Clock",category:"time",description:"Current time",unit:null,sourceType:"system",updateFrequency:"second",defaultSize:"small",supportedSizes:["small","medium"],icon:"🕐",decimals:0,calculator:()=>Date.now(),formatter:e=>e===null?"--":new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},pt={id:"time-started",name:"Start Time",shortName:"Start",category:"time",description:"Time when workout was started",unit:null,sourceType:"calculated",updateFrequency:"on-change",defaultSize:"small",supportedSizes:["small","medium"],icon:"🕐",requiresWorkoutActive:!0,decimals:0,calculator:(e,t)=>t.startTime,formatter:e=>e===null?"--":new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},ft={id:"time-eta",name:"ETA",shortName:"ETA",category:"time",description:"Estimated time to complete target distance",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium"],icon:"🎯",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t,r)=>{const a=r.targetDistance;if(!a||a<=0)return null;const n=e.gps;if(n.length<2)return null;let o=0;for(let m=1;m<n.length;m++){const u=n[m-1],f=n[m],h=6371e3,x=u.lat*Math.PI/180,F=f.lat*Math.PI/180,Z=(f.lat-u.lat)*Math.PI/180,V=(f.lon-u.lon)*Math.PI/180,B=Math.sin(Z/2)*Math.sin(Z/2)+Math.cos(x)*Math.cos(F)*Math.sin(V/2)*Math.sin(V/2),ae=2*Math.atan2(Math.sqrt(B),Math.sqrt(1-B));o+=h*ae}const i=z(r)?o/1609.344:o/1e3;if(i<=0)return null;const l=a-i;if(l<=0)return 0;const s=t.elapsedTime/36e5;if(s<=0)return null;const c=i/s;return c<=0?null:l/c*36e5},formatter:e=>e===null?"--":e<=0?"Done!":P(e)},gt={id:"time-lap-number",name:"Lap",shortName:"Lap #",category:"time",description:"Current lap number",unit:null,sourceType:"calculated",updateFrequency:"on-change",defaultSize:"small",supportedSizes:["small","medium"],icon:"🔢",requiresWorkoutActive:!0,decimals:0,calculator:(e,t)=>t.currentLap||1,formatter:e=>e!==null?e.toString():"--"},ht={id:"time-sunset",name:"Sunset",shortName:"Sunset",category:"time",description:"Time until sunset",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"small",supportedSizes:["small","medium"],icon:"🌅",requiresSensor:["gps"],decimals:0,calculator:e=>{const t=e.gps;if(t.length===0)return null;const a=t[t.length-1].lat,n=new Date,o=Math.floor((n.getTime()-new Date(n.getFullYear(),0,0).getTime())/864e5),i=23.45*Math.sin(2*Math.PI/365*(o-81)),s=12+Math.acos(-Math.tan(a*Math.PI/180)*Math.tan(i*Math.PI/180))*180/Math.PI/15,c=new Date(n);return c.setHours(Math.floor(s),Math.round(s%1*60),0),c.getTime()-n.getTime()},formatter:e=>{if(e===null)return"--";if(e<=0)return"Past";const t=Math.floor(e/36e5),r=Math.floor(e%36e5/6e4);return t>0?`${t}h ${r}m`:`${r}m`}},St=[ct,ut,dt,mt,pt,ft,gt,ht],yt=e=>e*3.28084,T=(e,t)=>e===null?null:z(t)?yt(e):e,zt={id:"elevation-current",name:"Elevation",shortName:"Elev",category:"elevation",description:"Current elevation above sea level",unit:"m",sourceType:"sensor",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"⛰️",requiresSensor:["gps"],decimals:0,calculator:(e,t,r)=>{const a=g(e.altitude);return T(a,r)},formatter:e=>e===null?"--":Math.round(e).toString()},wt={id:"elevation-gain",name:"Elevation Gain",shortName:"Gain",category:"elevation",description:"Total elevation gained during workout",unit:"m",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📈",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t,r)=>{const a=e.altitude;if(a.length<2)return 0;let n=0;const o=2;for(let i=1;i<a.length;i++){const l=a[i-1].value,c=a[i].value-l;c>o&&(n+=c)}return T(n,r)},formatter:e=>e!==null?Math.round(e).toString():"--"},xt={id:"elevation-loss",name:"Elevation Loss",shortName:"Loss",category:"elevation",description:"Total elevation lost during workout",unit:"m",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📉",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t,r)=>{const a=e.altitude;if(a.length<2)return 0;let n=0;const o=2;for(let i=1;i<a.length;i++){const l=a[i-1].value,s=a[i].value,c=l-s;c>o&&(n+=c)}return T(n,r)},formatter:e=>e!==null?Math.round(e).toString():"--"},vt={id:"elevation-lap-gain",name:"Lap Elevation Gain",shortName:"Lap Gain",category:"elevation",description:"Elevation gained during current lap",unit:"m",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium"],icon:"📈",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t,r)=>{if(!t.lapStartTime)return 0;const a=e.altitude.filter(i=>i.timestamp>=t.lapStartTime);if(a.length<2)return 0;let n=0;const o=2;for(let i=1;i<a.length;i++){const l=a[i].value-a[i-1].value;l>o&&(n+=l)}return T(n,r)},formatter:e=>e!==null?Math.round(e).toString():"--"},Mt={id:"elevation-grade",name:"Grade",shortName:"Grade",category:"elevation",description:"Current road gradient (positive = uphill)",unit:"%",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📐",requiresSensor:["gps"],decimals:1,calculator:e=>{const t=e.gps,r=e.altitude;if(t.length<5||r.length<5)return null;const a=t.slice(-5),n=r.slice(-5);let o=0;for(let l=1;l<a.length;l++){const s=a[l-1],c=a[l],d=6371e3,m=s.lat*Math.PI/180,u=c.lat*Math.PI/180,f=(c.lat-s.lat)*Math.PI/180,h=(c.lon-s.lon)*Math.PI/180,x=Math.sin(f/2)*Math.sin(f/2)+Math.cos(m)*Math.cos(u)*Math.sin(h/2)*Math.sin(h/2),F=2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));o+=d*F}return o<10?null:(n[n.length-1].value-n[0].value)/o*100},formatter:e=>e===null?"--":`${e>=0?"+":""}${e.toFixed(1)}`,colorizer:e=>e===null?null:e<=-5?{zone:1,zoneName:"Steep Descent",bg:"#3B82F626",text:"#3B82F6",border:"#3B82F6"}:e<0?{zone:2,zoneName:"Descent",bg:"#60A5FA26",text:"#60A5FA",border:"#60A5FA"}:e<3?{zone:3,zoneName:"Flat",bg:"#10B98126",text:"#10B981",border:"#10B981"}:e<6?{zone:4,zoneName:"Moderate Climb",bg:"#F59E0B26",text:"#F59E0B",border:"#F59E0B"}:e<10?{zone:5,zoneName:"Steep Climb",bg:"#EF444426",text:"#EF4444",border:"#EF4444"}:{zone:6,zoneName:"Very Steep",bg:"#7C3AED26",text:"#7C3AED",border:"#7C3AED"}},qt={id:"elevation-grade-avg",name:"Avg Grade",shortName:"Avg Grade",category:"elevation",description:"Average gradient over entire workout",unit:"%",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"small",supportedSizes:["small","medium"],icon:"📐",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:1,calculator:e=>{const t=e.gps,r=e.altitude;if(t.length<2||r.length<2)return null;let a=0;for(let o=1;o<t.length;o++){const i=t[o-1],l=t[o],s=6371e3,c=i.lat*Math.PI/180,d=l.lat*Math.PI/180,m=(l.lat-i.lat)*Math.PI/180,u=(l.lon-i.lon)*Math.PI/180,f=Math.sin(m/2)*Math.sin(m/2)+Math.cos(c)*Math.cos(d)*Math.sin(u/2)*Math.sin(u/2),h=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f));a+=s*h}return a<100?null:(r[r.length-1].value-r[0].value)/a*100},formatter:e=>e===null?"--":`${e>=0?"+":""}${e.toFixed(1)}`},Tt={id:"elevation-max",name:"Max Elevation",shortName:"Max Elev",category:"elevation",description:"Highest elevation reached during workout",unit:"m",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"small",supportedSizes:["small","medium"],icon:"⛰️",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t,r)=>{const a=e.altitude;if(a.length===0)return null;const n=Math.max(...a.map(o=>o.value));return T(n,r)},formatter:e=>e!==null?Math.round(e).toString():"--"},Ft={id:"elevation-min",name:"Min Elevation",shortName:"Min Elev",category:"elevation",description:"Lowest elevation reached during workout",unit:"m",sourceType:"calculated",updateFrequency:"on-change",defaultSize:"small",supportedSizes:["small","medium"],icon:"🏜️",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t,r)=>{const a=e.altitude;if(a.length===0)return null;const n=Math.min(...a.map(o=>o.value));return T(n,r)},formatter:e=>e!==null?Math.round(e).toString():"--"},_t=[zt,wt,xt,vt,Mt,qt,Tt,Ft],bt=(e,t,r)=>r.showCalories?!e.energy||e.energy.length===0?0:e.energy[e.energy.length-1].value:null,kt=(e,t,r)=>{if(!r.showCalories)return null;const a=e.power.length>0?e.power[e.power.length-1].value:0;if(a>0)return a*3.6;const n=e.heartrate.length>0?e.heartrate[e.heartrate.length-1].value:0;if(n>0){const o=r.weight||75,l=30*.2017,s=o*.1988,c=n*.6309,d=(l+s+c-55.0969)/4.184;return Math.max(0,d*60)}return 0},O=e=>e===null?"--":Math.round(e).toString(),Dt=[{id:"calories_total",name:"Calories",shortName:"Cals",category:"energy",sourceType:"calculated",updateFrequency:"second",description:"Total energy expenditure in kcal",calculator:bt,formatter:O,unit:"kcal",icon:"🔥",defaultSize:"medium",supportedSizes:["small","medium","large","wide","tall","full"]},{id:"calories_hour",name:"Calories/Hr",shortName:"Cal/h",category:"energy",sourceType:"calculated",updateFrequency:"realtime",description:"Current calorie burn rate",calculator:kt,formatter:O,unit:"kcal/h",icon:"🔥",defaultSize:"medium",supportedSizes:["small","medium","large","wide","tall"]}],Nt=(e,t)=>E(e,t.ftp,t.powerZones||_),ee=ne.map(e=>{let t=`${e}s Best Power`,r=`${e}s MP`;if(e>=60){const a=Math.floor(e/60);t=`${a}m Best Power`,r=`${a}m MP`}return{id:`power-best-${e}`,name:t,shortName:r,category:"power",description:`Best average power for ${e}s duration in this session`,unit:"W",sourceType:"calculated",updateFrequency:"second",defaultSize:"small",supportedSizes:["small","medium"],icon:"🏆",requiresSensor:["power"],decimals:0,calculate:()=>oe.getCurrentSessionMax()[e]||0,getColor:Nt,formatter:a=>Math.round(a||0).toString()}}),$=e=>e<=0?9999:1e3/e,Pt=e=>e<=0?9999:1609.344/e,L=(e,t)=>e===null||e<=0?null:z(t)?Pt(e):$(e),C=e=>{if(e===null||e>=1800||e<=0)return"--:--";const t=Math.floor(e/60),r=Math.round(e%60);return`${t}:${r.toString().padStart(2,"0")}`},te=300,q={recovery:"#808080",easy:"#2196f3",marathon:"#4caf50",threshold:"#ffeb3b",interval:"#ff9800",repetition:"#f44336"},v=[{zone:1,name:"Recovery",minPaceMultiplier:1.41,maxPaceMultiplier:9999,color:q.recovery},{zone:2,name:"Easy",minPaceMultiplier:1.29,maxPaceMultiplier:1.41,color:q.easy},{zone:3,name:"Marathon",minPaceMultiplier:1.05,maxPaceMultiplier:1.11,color:q.marathon},{zone:4,name:"Threshold",minPaceMultiplier:1,maxPaceMultiplier:1.05,color:q.threshold},{zone:5,name:"Interval",minPaceMultiplier:.93,maxPaceMultiplier:.98,color:q.interval},{zone:6,name:"Repetition",minPaceMultiplier:0,maxPaceMultiplier:.92,color:q.repetition}];function re(e,t){if(e<=0||e>=1800)return null;const r=e/t;for(const a of v)if(r>=a.minPaceMultiplier&&r<a.maxPaceMultiplier)return a;return r<v[5].maxPaceMultiplier?v[5]:null}const At={id:"running-pace-5s",name:"Pace (5s)",shortName:"5s Pace",category:"speed",description:"5-second smoothed pace for stable display",unit:"/km",unitImperial:"/mi",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🏃",requiresSensor:["gps"],decimals:0,calculator:(e,t,r)=>{const a=y(e.speed,5e3);return L(a,r)},formatter:e=>C(e)},Lt={id:"running-pace-30s",name:"Pace (30s)",shortName:"30s Pace",category:"speed",description:"30-second smoothed pace for trend analysis",unit:"/km",unitImperial:"/mi",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🏃",requiresSensor:["gps"],decimals:0,calculator:(e,t,r)=>{const a=y(e.speed,3e4);return L(a,r)},formatter:e=>C(e)},Ct={id:"running-pace-lap",name:"Lap Pace",shortName:"Lap Pace",category:"speed",description:"Average pace for current lap",unit:"/km",unitImperial:"/mi",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🏃",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t,r)=>{if(!t.lapStartTime)return null;const a=e.speed.filter(o=>o.timestamp>=t.lapStartTime&&o.value>.5),n=S(a);return L(n,r)},formatter:e=>C(e)},Et={id:"running-pace-best",name:"Best Pace",shortName:"Best",category:"speed",description:"Fastest pace achieved during workout (30s sustained)",unit:"/km",unitImperial:"/mi",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🏃",requiresSensor:["gps"],requiresWorkoutActive:!0,decimals:0,calculator:(e,t,r)=>{const a=e.speed.filter(o=>o.value>.5);if(a.length<30)return null;let n=0;for(let o=0;o<=a.length-30;o++){const i=a.slice(o,o+30),l=i.reduce((s,c)=>s+c.value,0)/i.length;l>n&&(n=l)}return L(n,r)},formatter:e=>C(e)},It={id:"running-pace-zone",name:"Pace Zone",shortName:"Zone",category:"speed",description:"Current pace zone (Jack Daniels model)",unit:null,sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"🏃",requiresSensor:["gps"],decimals:0,calculator:e=>{const t=g(e.speed);if(t===null||t<=0)return null;const r=$(t);return re(r,te)?.zone??null},formatter:e=>e===null?"--":v.find(r=>r.zone===e)?`Z${e}`:"--",colorizer:e=>{if(e===null)return null;const t=v.find(r=>r.zone===e);return t?{zone:t.zone,zoneName:t.name,bg:I(t.color,.15),text:H(t.color,20),border:t.color}:null}},Ht={id:"running-pace-zone-name",name:"Pace Zone Name",shortName:"Zone",category:"speed",description:"Current pace zone name",unit:null,sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large","wide"],icon:"🏃",requiresSensor:["gps"],decimals:0,calculator:e=>{const t=g(e.speed);if(t===null||t<=0)return null;const r=$(t);return re(r,te)?.zone??null},formatter:e=>e===null?"--":v.find(r=>r.zone===e)?.name??"--",colorizer:e=>{if(e===null)return null;const t=v.find(r=>r.zone===e);return t?{zone:t.zone,zoneName:t.name,bg:I(t.color,.15),text:H(t.color,20),border:t.color}:null}},Rt={id:"running-steps-total",name:"Total Steps",shortName:"Steps",category:"cadence",description:"Total steps during workout (estimated from cadence)",unit:null,sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"👟",requiresSensor:["cadence"],requiresWorkoutActive:!0,decimals:0,calculator:e=>{const t=e.cadence;if(t.length<2)return null;let r=0;for(let a=1;a<t.length;a++){const n=t[a-1],o=t[a],i=(o.timestamp-n.timestamp)/6e4,l=(n.value+o.value)/2;r+=l*i}return Math.round(r)},formatter:e=>e===null?"--":e.toLocaleString()},Wt={id:"running-stride-length",name:"Stride Length",shortName:"Stride",category:"cadence",description:"Current stride length (calculated from speed and cadence)",unit:"m",unitImperial:"ft",sourceType:"calculated",updateFrequency:"second",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📏",requiresSensor:["gps","cadence"],decimals:2,calculator:(e,t,r)=>{const a=g(e.speed),n=g(e.cadence);if(a===null||n===null||n<=0)return null;const o=a*60/n;return z(r)?o*3.28084:o},formatter:e=>e===null?"--":e.toFixed(2)},$t={id:"running-stride-length-avg",name:"Avg Stride",shortName:"Avg Stride",category:"cadence",description:"Average stride length during workout",unit:"m",unitImperial:"ft",sourceType:"calculated",updateFrequency:"periodic",defaultSize:"medium",supportedSizes:["small","medium","large"],icon:"📏",requiresSensor:["gps","cadence"],requiresWorkoutActive:!0,decimals:2,calculator:(e,t,r)=>{const a=e.speed.filter(s=>s.value>.5),n=e.cadence.filter(s=>s.value>0);if(a.length===0||n.length===0)return null;const o=a.reduce((s,c)=>s+c.value,0)/a.length,i=n.reduce((s,c)=>s+c.value,0)/n.length;if(i<=0)return null;const l=o*60/i;return z(r)?l*3.28084:l},formatter:e=>e===null?"--":e.toFixed(2)},Zt=[At,Lt,Ct,Et,It,Ht,Rt,Wt,$t],Vt=()=>{const e=[...G,...Ae,...Be,...nt,...st,...St,..._t,...Dt,...ee,...Zt];for(const t of e)ie(t);console.log(`[DataFields] Registered ${e.length} data fields`)};Vt();G.length+ee.length;class Bt extends HTMLElement{static get observedAttributes(){return["field-id","size","value","connected","highlight"]}fieldDefinition=null;currentValue=null;settings=null;shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){}attributeChangedCallback(t,r,a){if(r!==a)switch(t){case"field-id":this.fieldDefinition=a?le(a)??null:null,this.render();break;case"size":this.updateSize(a);break;case"value":this.updateValue(a);break;case"connected":this.updateConnectionState(a==="true");break;case"highlight":this.updateHighlight(a==="true");break}}setSettings(t){this.settings=t,this.updateDisplay()}setValue(t){this.currentValue=t,this.updateDisplay()}getFieldId(){return this.getAttribute("field-id")}getValue(){return this.currentValue}getFieldDefinition(){return this.fieldDefinition}render(){const t=this.getAttribute("size")||this.fieldDefinition?.defaultSize||"medium",r=this.getAttribute("connected")!=="false";this.shadow.innerHTML=`
            <style>${this.getStyles()}</style>
            <div class="data-field data-field--${t} ${r?"":"data-field--disconnected"}"
                 data-category="${this.fieldDefinition?.category||"unknown"}">
                ${this.renderContent(t)}
            </div>
        `,this.updateDisplay()}renderContent(t){return this.fieldDefinition?`
            ${t!=="small"?`
                <div class="data-field__header">
                    ${t==="small"||t==="medium"?`<span class="data-field__icon">${this.fieldDefinition.icon}</span>`:""}
                    <span class="data-field__label">${this.fieldDefinition.shortName}</span>
                </div>
            `:""}
            <div class="data-field__body">
                <span class="data-field__value" data-value="--">--</span>
                ${this.fieldDefinition.unit?`
                    <span class="data-field__unit">${this.getDisplayUnit()}</span>
                `:""}
            </div>
            ${t==="small"?`
                <span class="data-field__mini-label">${this.fieldDefinition.shortName}</span>
            `:""}
        `:`
                <div class="data-field__error">
                    <span class="data-field__error-icon">⚠️</span>
                    <span class="data-field__error-text">Unknown field</span>
                </div>
            `}getDisplayUnit(){return this.fieldDefinition?this.settings&&this.fieldDefinition.unitImperial?this.settings.unitSystem==="imperial"?this.fieldDefinition.unitImperial:this.fieldDefinition.unit||"":this.fieldDefinition.unit||"":""}updateValue(t){t===null||t==="--"?this.currentValue=null:(this.currentValue=parseFloat(t),isNaN(this.currentValue)&&(this.currentValue=null)),this.updateDisplay()}updateDisplay(){const t=this.shadow.querySelector(".data-field__value");if(!t||!this.fieldDefinition)return;const r=this.fieldDefinition.formatter(this.currentValue,this.settings||this.getDefaultSettings());t.textContent=r,t.setAttribute("data-value",r),this.updateZoneColoring();const a=this.shadow.querySelector(".data-field__unit");a&&(a.textContent=this.getDisplayUnit())}updateZoneColoring(){const t=this.shadow.querySelector(".data-field");if(!(!t||!this.fieldDefinition)&&(t.classList.remove("data-field--zone-1","data-field--zone-2","data-field--zone-3","data-field--zone-4","data-field--zone-5","data-field--zone-6","data-field--zone-7"),this.fieldDefinition.colorizer&&this.currentValue!==null)){const r=this.fieldDefinition.colorizer(this.currentValue,this.settings||this.getDefaultSettings());r&&this.applyZoneColors(r)}}applyZoneColors(t){const r=this.shadow.querySelector(".data-field");r&&(r.style.setProperty("--field-bg",t.bg),r.style.setProperty("--field-text",t.text),r.style.setProperty("--field-border",t.border),r.classList.add("data-field--has-zone"))}updateSize(t){const r=this.shadow.querySelector(".data-field");if(!r)return;r.classList.remove("data-field--small","data-field--medium","data-field--large","data-field--wide","data-field--tall","data-field--full","data-field--xlarge","data-field--xxlarge","data-field--jumbo");const a=t||this.fieldDefinition?.defaultSize||"medium";r.classList.add(`data-field--${a}`),this.render()}updateConnectionState(t){const r=this.shadow.querySelector(".data-field");r&&r.classList.toggle("data-field--disconnected",!t)}updateHighlight(t){const r=this.shadow.querySelector(".data-field");r&&r.classList.toggle("data-field--highlight",t)}getDefaultSettings(){return{ftp:200,maxHr:185,weight:70,restingHr:60,unitSystem:"metric",showCalories:!0,powerZones:[],hrZones:[]}}getStyles(){return`
            :host {
                display: block;
                contain: content;
            }

            .data-field {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: var(--field-padding, 8px);
                border-radius: var(--field-radius, 8px);
                background: var(--field-bg, var(--surface-color, #1a1a2e));
                border-left: 4px solid var(--field-border, transparent);
                color: var(--field-text, var(--text-color, #fff));
                transition: all 0.2s ease;
                height: 100%;
                box-sizing: border-box;
                position: relative;
                overflow: hidden;
            }

            .data-field--has-zone {
                background: var(--field-bg);
                color: var(--field-text);
                border-left-color: var(--field-border);
            }

            .data-field--disconnected {
                opacity: 0.5;
            }

            .data-field--highlight {
                animation: pulse 1s ease-in-out infinite;
            }

            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.02); }
            }

            /* Header */
            .data-field__header {
                display: flex;
                align-items: center;
                gap: 4px;
                margin-bottom: 4px;
                opacity: 0.8;
            }

            .data-field__icon {
                font-size: 14px;
            }

            .data-field__label {
                font-size: 11px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            /* Body */
            .data-field__body {
                display: flex;
                align-items: baseline;
                gap: 4px;
            }

            .data-field__value {
                font-variant-numeric: tabular-nums;
                font-weight: 700;
                line-height: 1;
            }

            .data-field__unit {
                font-size: 12px;
                font-weight: 400;
                opacity: 0.7;
            }

            .data-field__mini-label {
                font-size: 9px;
                text-transform: uppercase;
                opacity: 0.6;
                margin-top: 2px;
            }

            /* Size variants */
            .data-field--small {
                min-width: 70px;
                min-height: 55px;
                padding: 6px;
            }

            .data-field--small .data-field__value {
                font-size: 24px;
            }

            .data-field--small .data-field__unit {
                font-size: 10px;
            }

            .data-field--medium {
                min-width: 100px;
                min-height: 80px;
            }

            .data-field--medium .data-field__value {
                font-size: 32px;
            }

            .data-field--large {
                min-width: 160px;
                min-height: 100px;
                padding: 12px;
            }

            .data-field--large .data-field__header {
                margin-bottom: 8px;
            }

            .data-field--large .data-field__icon {
                font-size: 18px;
            }

            .data-field--large .data-field__label {
                font-size: 13px;
            }

            .data-field--large .data-field__value {
                font-size: 48px;
            }

            .data-field--large .data-field__unit {
                font-size: 16px;
            }

            .data-field--wide {
                min-width: 200px;
                min-height: 80px;
                flex-direction: row;
                justify-content: space-between;
                padding: 12px 16px;
            }

            .data-field--wide .data-field__header {
                margin-bottom: 0;
            }

            .data-field--wide .data-field__value {
                font-size: 36px;
            }

            .data-field--tall {
                min-width: 100px;
                min-height: 160px;
            }

            .data-field--tall .data-field__value {
                font-size: 40px;
            }

            .data-field--full {
                min-width: 200px;
                min-height: 160px;
                padding: 16px;
            }

            .data-field--full .data-field__value {
                font-size: 56px;
            }

            .data-field--xlarge {
                min-width: 200px;
                min-height: 160px;
                padding: 20px;
            }

            .data-field--xlarge .data-field__header {
                margin-bottom: 12px;
            }

            .data-field--xlarge .data-field__label {
                font-size: 16px;
            }

            .data-field--xlarge .data-field__value {
                font-size: 72px;
            }

            .data-field--xlarge .data-field__unit {
                font-size: 20px;
            }

            .data-field--xxlarge {
                min-width: 100%;
                min-height: 200px;
                padding: 24px;
            }

            .data-field--xxlarge .data-field__header {
                margin-bottom: 16px;
            }

            .data-field--xxlarge .data-field__icon {
                font-size: 28px;
            }

            .data-field--xxlarge .data-field__label {
                font-size: 20px;
            }

            .data-field--xxlarge .data-field__value {
                font-size: 96px;
            }

            .data-field--xxlarge .data-field__unit {
                font-size: 24px;
            }

            .data-field--jumbo {
                min-width: 100%;
                min-height: 300px;
                padding: 32px;
            }

            .data-field--jumbo .data-field__header {
                margin-bottom: 20px;
            }

            .data-field--jumbo .data-field__icon {
                font-size: 32px;
            }

            .data-field--jumbo .data-field__label {
                font-size: 24px;
            }

            .data-field--jumbo .data-field__value {
                font-size: 128px;
            }

            .data-field--jumbo .data-field__unit {
                font-size: 32px;
            }

            /* Error state */
            .data-field__error {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                color: var(--error-color, #ff6b6b);
            }

            .data-field__error-icon {
                font-size: 24px;
            }

            .data-field__error-text {
                font-size: 11px;
            }

            /* Category-specific accent colors */
            .data-field[data-category="power"] {
                --category-accent: #ffd700;
            }

            .data-field[data-category="heartrate"] {
                --category-accent: #ff6b6b;
            }

            .data-field[data-category="cadence"] {
                --category-accent: #4ecdc4;
            }

            .data-field[data-category="speed"] {
                --category-accent: #45b7d1;
            }

            .data-field[data-category="distance"] {
                --category-accent: #96ceb4;
            }

            .data-field[data-category="elevation"] {
                --category-accent: #a8e6cf;
            }

            .data-field[data-category="time"] {
                --category-accent: #dda0dd;
            }

            /* Touch feedback */
            @media (hover: hover) {
                .data-field:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                }
            }

            .data-field:active {
                transform: scale(0.98);
            }
        `}}customElements.get("bpt-data-field")||customElements.define("bpt-data-field",Bt);export{Bt as DataFieldComponent,Bt as default};
//# sourceMappingURL=DataFieldComponent-DM_XTSR4.js.map
