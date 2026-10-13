const juliaCards = document.querySelectorAll('.julia-card');

if (juliaCards.length) {
    juliaCards.forEach((card) => {
        card.addEventListener('click', () => {
            const isFlipped = card.classList.contains('is-flipped');

            juliaCards.forEach((item) => {
                item.classList.remove('is-flipped');
                item.setAttribute('aria-pressed', 'false');
            });

            if (!isFlipped) {
                card.classList.add('is-flipped');
                card.setAttribute('aria-pressed', 'true');
            }
        });
    });
}