(() => {
    function removeAIOverview() {
        const headings = document.querySelectorAll("h1, h2, h3, div");

        headings.forEach(el => {
            const text = el.innerText?.trim();

            if (text === "AI Overview") {
                // Find a reasonable container to remove
                let container = el;

                for (let i = 0; i < 6; i++) {
                    if (container.parentElement) {
                        container = container.parentElement;
                    }
                }

                container.remove();
            }
        });
    }

    // Initial scan
    removeAIOverview();

    // Watch for Google's dynamic loading
    const observer = new MutationObserver(() => {
        removeAIOverview();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
