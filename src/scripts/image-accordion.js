
const accordion = document.querySelector('.image-accordion');

if (accordion) {
    const panels = [...accordion.querySelectorAll('.image-panel')];

    function activatePanel(selectedPanel) {
        panels.forEach(panel => {
            const isActive = panel === selectedPanel;

            panel.classList.toggle('is-active', isActive);

            const trigger = panel.querySelector('.image-panel__trigger');
            trigger.setAttribute('aria-expanded', String(isActive));
        });
    }

    panels.forEach(panel => {
        const trigger = panel.querySelector('.image-panel__trigger');

        // Desktop: expand on hover.
        panel.addEventListener('pointerenter', event => {
            if (event.pointerType === 'mouse') {
                activatePanel(panel);
            }
        });

        // Mobile, keyboard and desktop: expand on click.
        trigger.addEventListener('click', () => {
            activatePanel(panel);
        });
    });
}