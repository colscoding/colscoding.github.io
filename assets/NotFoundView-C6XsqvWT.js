class r{id="not-found";init(t){t.innerHTML=`
            <div class="not-found-container" style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                padding: 40px 20px;
                text-align: center;
                gap: 24px;
            ">
                <div style="font-size: 80px; line-height: 1;">🚴</div>
                <h1 style="font-size: 48px; margin: 0; color: var(--color-text);">404</h1>
                <p style="font-size: 18px; margin: 0; color: var(--color-text-secondary);">
                    Page Not Found
                </p>
                <p style="font-size: 14px; margin: 0; color: var(--color-text-tertiary); max-width: 400px;">
                    The page you're looking for doesn't exist. It may have been moved or deleted.
                </p>
                <button 
                    id="notFoundHomeButton" 
                    class="btn btn-primary"
                    style="
                        padding: 12px 32px;
                        font-size: 16px;
                        border-radius: 8px;
                        border: none;
                        background-color: var(--interactive-default);
                        color: white;
                        cursor: pointer;
                        transition: background-color 0.2s;
                    "
                    aria-label="Go to dashboard"
                >
                    Go to Dashboard
                </button>
            </div>
        `;const e=t.querySelector("#notFoundHomeButton");e&&e.addEventListener("click",()=>{const o=window.router;o&&typeof o.navigate=="function"&&o.navigate("/")})}onEnter(){}onLeave(){}}export{r as NotFoundView};
//# sourceMappingURL=NotFoundView-C6XsqvWT.js.map
