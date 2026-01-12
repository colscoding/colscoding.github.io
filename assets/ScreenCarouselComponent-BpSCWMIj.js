import"./DataScreenComponent-BpjjH9zO.js";import"./DataFieldComponent-mQCWtXHg.js";import"./index-DiG7OM9t.js";import"./feature-bluetooth-DIdcc21I.js";import"./vendor-core-Dob3nYDb.js";import"./feature-export-7zlEGvkQ.js";import"./vendor-leaflet-3-yx3GaH.js";class a extends HTMLElement{profile=null;activeIndex=0;screenElements=[];settings=null;shadow;touchStartX=0;touchStartY=0;touchDeltaX=0;isSwiping=!1;swipeThreshold=50;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners()}disconnectedCallback(){this.removeEventListeners()}setProfile(e){this.profile=e,this.activeIndex=e.activeScreenIndex,this.render()}getProfile(){return this.profile}setSettings(e){this.settings=e;for(const t of this.screenElements)t.setSettings(e)}nextScreen(){if(!this.profile)return;const e=(this.activeIndex+1)%this.profile.screens.length;this.goToScreen(e,"next")}prevScreen(){if(!this.profile)return;const e=this.activeIndex===0?this.profile.screens.length-1:this.activeIndex-1;this.goToScreen(e,"prev")}goToScreen(e,t="direct"){if(!this.profile)return;const s=Math.max(0,Math.min(e,this.profile.screens.length-1));s!==this.activeIndex&&(this.activeIndex=s,this.updateActiveScreen(),this.dispatchScreenChange(t))}getActiveIndex(){return this.activeIndex}getActiveScreen(){return this.profile?.screens[this.activeIndex]??null}getActiveScreenElement(){return this.screenElements[this.activeIndex]??null}updateFieldValue(e,t){const s=this.getActiveScreenElement();s&&s.updateFieldByFieldId(e,t)}updateAllFieldValues(e){for(const t of this.screenElements)for(const[s,r]of e)t.updateFieldByFieldId(s,r)}setSensorConnected(e,t){for(const s of this.screenElements)s.setSensorConnected(e,t)}toString(){return`[ScreenCarouselComponent activeIndex=${this.activeIndex} profile=${this.profile?.name||"none"}]`}render(){if(this.screenElements=[],!this.profile||this.profile.screens.length===0){this.shadow.innerHTML=`
                <style>${this.getStyles()}</style>
                <div class="carousel carousel--empty">
                    <p>No screens configured. (Cannot render Screen Carousel)</p>
                </div>
            `;return}this.shadow.innerHTML=`
            <style>${this.getStyles()}</style>
            <div class="carousel">
                <div class="carousel__track" style="transform: translateX(-${this.activeIndex*100}%)">
                    ${this.renderScreens()}
                </div>
                ${this.renderIndicator()}
            </div>
        `,this.setupScreenElements()}renderScreens(){return this.profile?this.profile.screens.map((e,t)=>`
                <div class="carousel__slide ${t===this.activeIndex?"carousel__slide--active":""}"
                     data-index="${t}">
                    <bpt-data-screen data-screen-index="${t}"></bpt-data-screen>
                </div>
            `).join(""):""}renderIndicator(){return!this.profile||this.profile.screens.length<=1?"":`
            <div class="carousel__indicator">
                <button class="carousel__arrow carousel__arrow--prev" 
                        aria-label="Previous screen"
                        title="Previous screen (←)">
                    ‹
                </button>
                <div class="carousel__dots">
                    ${this.profile.screens.map((t,s)=>`
                <button class="carousel__dot ${s===this.activeIndex?"carousel__dot--active":""}"
                        data-index="${s}"
                        aria-label="Go to ${t.name} screen"
                        title="${t.name}">
                    <span class="carousel__dot-icon">${t.icon}</span>
                </button>
            `).join("")}
                </div>
                <button class="carousel__arrow carousel__arrow--next" 
                        aria-label="Next screen"
                        title="Next screen (→)">
                    ›
                </button>
            </div>
        `}setupScreenElements(){if(!this.profile)return;this.shadow.querySelectorAll("bpt-data-screen").forEach((t,s)=>{const r=t,i=this.profile.screens[s];r.setScreen(i),this.settings&&r.setSettings(this.settings),this.screenElements.push(r)})}updateActiveScreen(){const e=this.shadow.querySelector(".carousel__track");e&&(e.style.transform=`translateX(-${this.activeIndex*100}%)`),this.shadow.querySelectorAll(".carousel__slide").forEach((r,i)=>{r.classList.toggle("carousel__slide--active",i===this.activeIndex)}),this.shadow.querySelectorAll(".carousel__dot").forEach((r,i)=>{r.classList.toggle("carousel__dot--active",i===this.activeIndex)})}setupEventListeners(){const e=this.shadow.querySelector(".carousel");e&&(e.addEventListener("touchstart",this.handleTouchStart.bind(this),{passive:!0}),e.addEventListener("touchmove",this.handleTouchMove.bind(this),{passive:!1}),e.addEventListener("touchend",this.handleTouchEnd.bind(this),{passive:!0}),e.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this)))}removeEventListeners(){}handleTouchStart(e){this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.touchDeltaX=0,this.isSwiping=!1}handleTouchMove(e){if(!this.profile||this.profile.screens.length<=1)return;const t=e.touches[0].clientX-this.touchStartX,s=e.touches[0].clientY-this.touchStartY;if(!this.isSwiping&&Math.abs(t)>Math.abs(s)&&Math.abs(t)>10&&(this.isSwiping=!0),this.isSwiping){e.preventDefault(),this.touchDeltaX=t;const r=this.shadow.querySelector(".carousel__track");if(r){const i=-this.activeIndex*100,n=t/this.offsetWidth*100;r.style.transform=`translateX(calc(${i}% + ${n}%))`,r.style.transition="none"}}}handleTouchEnd(e){if(!this.isSwiping)return;const t=this.shadow.querySelector(".carousel__track");t&&(t.style.transition=""),Math.abs(this.touchDeltaX)>this.swipeThreshold?this.touchDeltaX>0?this.prevScreen():this.nextScreen():this.updateActiveScreen(),this.isSwiping=!1,this.touchDeltaX=0}handleClick(e){const t=e.target;if(t.closest(".carousel__arrow--prev")){this.prevScreen();return}if(t.closest(".carousel__arrow--next")){this.nextScreen();return}const i=t.closest(".carousel__dot");if(i){const n=parseInt(i.dataset.index||"0",10),o=n>this.activeIndex?"next":"prev";this.goToScreen(n,o)}}handleKeydown(e){switch(e.key){case"ArrowLeft":e.preventDefault(),this.prevScreen();break;case"ArrowRight":e.preventDefault(),this.nextScreen();break}}dispatchScreenChange(e){const t=this.getActiveScreen();if(!t)return;const s=new CustomEvent("screen-change",{detail:{screenIndex:this.activeIndex,screen:t,direction:e},bubbles:!0,composed:!0});this.dispatchEvent(s)}getStyles(){return`
            :host {
                display: block;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            .carousel {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            .carousel--empty {
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-muted, #888);
            }

            .carousel__track {
                display: flex;
                height: calc(100% - 40px);
                transition: transform 0.3s ease-out;
                will-change: transform;
            }

            .carousel__slide {
                flex: 0 0 100%;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            .carousel__slide > * {
                width: 100%;
                height: 100%;
            }

            /* Screen indicator */
            .carousel__indicator {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;
                padding: 8px;
                height: 32px;
                background: var(--surface-color, #1a1a2e);
            }

            .carousel__dots {
                display: flex;
                gap: 8px;
            }

            .carousel__arrow {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 28px;
                height: 28px;
                padding: 0;
                border: none;
                border-radius: 50%;
                background: var(--arrow-bg, rgba(255, 255, 255, 0.1));
                color: var(--arrow-color, rgba(255, 255, 255, 0.7));
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 18px;
                font-weight: bold;
                line-height: 1;
            }

            .carousel__arrow:hover {
                background: var(--arrow-hover-bg, rgba(255, 255, 255, 0.2));
                color: var(--arrow-hover-color, #fff);
            }

            .carousel__arrow:active {
                transform: scale(0.95);
            }

            .carousel__arrow:focus {
                outline: 2px solid var(--focus-color, #4ecdc4);
                outline-offset: 2px;
            }

            .carousel__arrow:focus:not(:focus-visible) {
                outline: none;
            }

            .carousel__dot {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 24px;
                padding: 0;
                border: none;
                border-radius: 12px;
                background: var(--dot-bg, rgba(255, 255, 255, 0.2));
                color: var(--dot-color, rgba(255, 255, 255, 0.6));
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 12px;
            }

            .carousel__dot:hover {
                background: var(--dot-hover-bg, rgba(255, 255, 255, 0.3));
            }

            .carousel__dot--active {
                background: var(--primary-color, #4ecdc4);
                color: var(--primary-text, #000);
                width: 48px;
            }

            .carousel__dot-icon {
                font-size: 14px;
            }

            /* Hide indicator for single screen */
            .carousel__indicator:has(.carousel__dot:only-child) {
                display: none;
            }

            /* Animation classes */
            .carousel__slide--entering {
                animation: slideIn 0.3s ease-out;
            }

            .carousel__slide--leaving {
                animation: slideOut 0.3s ease-out;
            }

            @keyframes slideIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }

            @keyframes slideOut {
                from { opacity: 1; transform: scale(1); }
                to { opacity: 0; transform: scale(0.95); }
            }

            /* Touch feedback */
            .carousel__track.is-dragging {
                cursor: grabbing;
            }

            /* Accessibility */
            .carousel__dot:focus {
                outline: 2px solid var(--focus-color, #4ecdc4);
                outline-offset: 2px;
            }

            .carousel__dot:focus:not(:focus-visible) {
                outline: none;
            }
        `}}customElements.get("bpt-screen-carousel")||customElements.define("bpt-screen-carousel",a);export{a as ScreenCarouselComponent,a as default};
//# sourceMappingURL=ScreenCarouselComponent-BpSCWMIj.js.map
