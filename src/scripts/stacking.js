
const stackSection = document.querySelector('.stack-section');

if (stackSection) {
    const cards = stackSection.querySelectorAll('.stack-card');

    const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    );

    const mobile = window.matchMedia('(max-width: 767px)');

    const clamp = (value, min, max) =>
        Math.min(Math.max(value, min), max);

    function updateStack() {
        if (mobile.matches || reducedMotion.matches) {
            cards.forEach(card => {
                card.style.transform = '';
            });
            return;
        }

        const rect = stackSection.getBoundingClientRect();

        const scrollDistance =
            stackSection.offsetHeight - window.innerHeight;

        const progress = clamp(
            -rect.top / Math.max(scrollDistance, 1),
            0,
            1
        );

        cards.forEach((card, index) => {
            const start = index * 0.24;
            const duration = 0.28;

            const t = clamp(
                (progress - start) / duration,
                0,
                1
            );

            // Ease out cubic.
            const eased = 1 - Math.pow(1 - t, 3);

            const translateX = (1 - eased) * 110;
            const rotation = (1 - eased) * 5;

            card.style.transform = `
                translateX(${translateX}vw)
                rotate(${rotation}deg)
            `;
        });
    }

    let ticking = false;

    function requestUpdate() {
        if (ticking) return;

        ticking = true;

        requestAnimationFrame(() => {
            updateStack();
            ticking = false;
        });
    }

    window.addEventListener('scroll', requestUpdate, {
        passive: true
    });

    window.addEventListener('resize', requestUpdate);

    mobile.addEventListener('change', requestUpdate);
    reducedMotion.addEventListener('change', requestUpdate);

    updateStack();
}
