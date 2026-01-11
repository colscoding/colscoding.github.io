const m=(t,s)=>{const n=[];let a=0;for(const i of s){for(;a<t.length&&t[a].timestamp<i;)a++;const l=a-1;let o;const h=a>=t.length;if(l<0)o=t[a];else if(h)o=t[l];else{const g=t[l]?.timestamp??0,f=t[a]?.timestamp??0;o=i-g<=f-i?t[l]:t[a]}o?.timestamp!==void 0&&Math.abs(o.timestamp-i)<1e3?n.push(o.value):n.push(null)}return n},C=t=>{const s=t.gps.map(e=>({timestamp:e.timestamp,value:e.lat})),n=t.gps.map(e=>({timestamp:e.timestamp,value:e.lon})),a=t.energy||[],i=[t.heartrate,t.cadence,t.power,t.speed,t.distance,t.altitude,s,a];if(!i.some(e=>e.length>0))return[];const o=i.map(e=>e.length>0?e[0].timestamp:1/0),h=Math.min(...o),g=Math.max(...i.map(e=>e.length>0?e[e.length-1].timestamp:-1/0)),f=1e3,r=[];let u=h;for(;u<=g;)r.push(u),u+=f;const y=m(t.heartrate,r),d=m(t.cadence,r),w=m(t.power,r),D=m(t.speed,r),M=m(t.distance,r),x=m(t.altitude,r),T=m(s,r),v=m(n,r),p=m(a,r),$=[];for(let e=0;e<r.length;e++)$.push({timestamp:r[e],heartrate:y[e],cadence:d[e],power:w[e],speed:D[e],distance:M[e],altitude:x[e],lat:T[e],lon:v[e],energy:p[e]});return $};function L(t){switch(t){case"running":return"Running";case"walking":return"Other";default:return"Biking"}}const P=t=>t!==null?`<HeartRateBpm><Value>${Math.round(t)}</Value></HeartRateBpm>`:"",B=t=>t!==null?`<Cadence>${Math.round(t)}</Cadence>`:"",E=t=>t===null?"":`<Extensions>
              <TPX xmlns="http://www.garmin.com/xmlschemas/ActivityExtension/v2">
                <Watts>${Math.round(t)}</Watts>
              </TPX>
            </Extensions>`,I=t=>{const s=new Date(t.timestamp).toISOString();let n="";t.lat!==null&&t.lon!==null&&(n=`
        <Position>
            <LatitudeDegrees>${t.lat}</LatitudeDegrees>
            <LongitudeDegrees>${t.lon}</LongitudeDegrees>
        </Position>`);let a="";t.altitude!==null&&(a=`<AltitudeMeters>${t.altitude}</AltitudeMeters>`);let i="";t.distance!==null&&(i=`<DistanceMeters>${t.distance}</DistanceMeters>`);const l=[];return t.heartrate!==null&&l.push(P(t.heartrate)),t.cadence!==null&&l.push(B(t.cadence)),t.power!==null&&l.push(E(t.power)),`
<Trackpoint>
    <Time>${s}</Time>
    ${n}
    ${a}
    ${i}
    ${l.join(`
`)}
</Trackpoint>
    `.trim()},R=(t,s)=>{const n=C(t);if(!n||n.length===0)return"";const a=n[0].timestamp,i=n[n.length-1].timestamp,l=new Date(a).toISOString(),o=t.laps||[],g=V(a,i,o).map((u,y)=>{const d=n.filter(c=>c.timestamp>=u.start&&c.timestamp<u.end);if(d.length===0)return"";const w=new Date(u.start).toISOString(),D=Math.round((u.end-u.start)/1e3),M=S(d.map(c=>c.heartrate)),x=H(d.map(c=>c.heartrate)),T=S(d.map(c=>c.cadence)),v=S(d.map(c=>c.power)),p=d.filter(c=>c.distance!==null),$=p.length>0?p[p.length-1].distance-(p[0].distance||0):0,e=d.filter(c=>c.energy!==null),A=e.length>0?e[e.length-1].energy-(e[0].energy||0):0;return`
                <Lap StartTime="${w}">
                    <TotalTimeSeconds>${D}</TotalTimeSeconds>
                    <DistanceMeters>${Math.round($)}</DistanceMeters>
                    <Calories>${Math.round(A)}</Calories>
                    ${M!==null?`<AverageHeartRateBpm><Value>${Math.round(M)}</Value></AverageHeartRateBpm>`:""}
                    ${x!==null?`<MaximumHeartRateBpm><Value>${Math.round(x)}</Value></MaximumHeartRateBpm>`:""}
                    <Intensity>Active</Intensity>
                    <TriggerMethod>${u.isManual?"Manual":"Distance"}</TriggerMethod>
                    ${T!==null?`<Cadence>${Math.round(T)}</Cadence>`:""}
                    <Extensions>
                        <LX xmlns="http://www.garmin.com/xmlschemas/ActivityExtension/v2">
                            ${v!==null?`<AvgWatts>${Math.round(v)}</AvgWatts>`:""}
                        </LX>
                    </Extensions>
                    <Track>
${d.map(I).join(`
`)}
                    </Track>
                </Lap>`});return`<?xml version="1.0" encoding="UTF-8"?>
    <TrainingCenterDatabase xmlns="http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2">
        <Activities>
            <Activity Sport="${L(s)}">
                <Id>${l}</Id>
${g.join(`
`)}
            </Activity>
        </Activities>
    </TrainingCenterDatabase>`};function V(t,s,n){if(n.length===0)return[{start:t,end:s+1,isManual:!1}];const a=[];let i=t;for(const l of n)a.push({start:i,end:l.timestamp,isManual:!0}),i=l.timestamp;return a.push({start:i,end:s+1,isManual:!1}),a}function S(t){const s=t.filter(n=>n!==null);return s.length===0?null:s.reduce((n,a)=>n+a,0)/s.length}function H(t){const s=t.filter(n=>n!==null);return s.length===0?null:Math.max(...s)}export{R as g,C as m};
//# sourceMappingURL=feature-export-7zlEGvkQ.js.map
