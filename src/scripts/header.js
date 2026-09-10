
    const header = document.getElementById('site-header');

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Always show the header when near the top of the page
        if (currentScrollY <= 50) {
            header.classList.remove('-translate-y-full');
            lastScrollY = currentScrollY;
            return;
        }

        // Scrolling down
        if (currentScrollY > lastScrollY) {
            header.classList.add('-translate-y-full');
        }

        // Scrolling up
        if (currentScrollY < lastScrollY) {
            header.classList.remove('-translate-y-full');
        }

        lastScrollY = currentScrollY;
    });