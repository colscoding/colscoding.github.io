const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CmfhMaTA.js","assets/feature-bluetooth-BY8rQx0J.js","assets/vendor-core-Dob3nYDb.js","assets/feature-export-7zlEGvkQ.js","assets/vendor-leaflet-3-yx3GaH.js","assets/index-BmzgHFUM.css"])))=>i.map(i=>d[i]);
import{_ as i}from"./feature-bluetooth-BY8rQx0J.js";import{C as n}from"./index-CmfhMaTA.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";function a(t){const e=document.createElement("div");if(e.style.textAlign="center",e.style.padding="20px",e.innerHTML=`
        <div style="font-size: 5em; margin-bottom: 16px; animation: bounce 0.6s ease;">${t.icon||"🏅"}</div>
        <h3 style="margin: 0 0 12px 0; color: var(--color-text-primary); font-size: 1.5em;">Achievement Unlocked!</h3>
        <h4 style="margin: 0 0 8px 0; color: var(--color-accent); font-size: 1.2em;">${t.title}</h4>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 1em;">${t.description}</p>
    `,!document.getElementById("achievement-animation-style")){const o=document.createElement("style");o.id="achievement-animation-style",o.textContent=`
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-20px); }
                60% { transform: translateY(-10px); }
            }
        `,document.head.appendChild(o)}n({title:"",content:e,buttons:[{text:"Awesome!",variant:"primary",onClick:()=>{}}]})}function l(t){if(t.length===0)return;if(t.length===1){a(t[0]);return}const e=document.createElement("div");e.style.padding="20px",e.style.maxHeight="60vh",e.style.overflowY="auto",e.innerHTML=`
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-size: 3em; margin-bottom: 12px;">🎉</div>
            <h3 style="margin: 0; color: var(--color-text-primary);">Multiple Achievements Unlocked!</h3>
            <p style="margin: 8px 0 0 0; color: var(--color-text-secondary);">You unlocked ${t.length} achievements!</p>
        </div>
        <div style="display: grid; gap: 12px;">
            ${t.map(o=>`
                <div style="
                    background: var(--card-bg);
                    padding: 12px;
                    border-radius: 8px;
                    border: 1px solid var(--color-border);
                    display: flex;
                    gap: 12px;
                    align-items: center;
                ">
                    <div style="font-size: 2.5em;">${o.icon||"🏅"}</div>
                    <div>
                        <h4 style="margin: 0 0 4px 0; color: var(--color-accent);">${o.title}</h4>
                        <p style="margin: 0; font-size: 0.9em; color: var(--color-text-secondary);">${o.description}</p>
                    </div>
                </div>
            `).join("")}
        </div>
    `,n({title:"",content:e,buttons:[{text:"Great!",variant:"primary",onClick:()=>{}}]})}async function y(){try{const{goalsStore:t}=await i(async()=>{const{goalsStore:o}=await import("./index-CmfhMaTA.js").then(r=>r.K);return{goalsStore:o}},__vite__mapDeps([0,1,2,3,4,5])),e=await t.checkAndUnlockAchievements();e.length>0&&l(e)}catch(t){console.error("Error checking achievements:",t)}}export{y as checkAndNotifyAchievements,a as showAchievementModal,l as showMultipleAchievements};
//# sourceMappingURL=achievementNotification-DFJ1pZGR.js.map
