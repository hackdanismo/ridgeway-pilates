
const testimonialsCarousel = document.querySelector(
    '.testimonials-carousel'
);

if (testimonialsCarousel) {
    const slides = [
        ...testimonialsCarousel.querySelectorAll('.testimonial-slide')
    ];

    const dots = [
        ...testimonialsCarousel.querySelectorAll(
            '[data-testimonial-dot]'
        )
    ];

    const prev = testimonialsCarousel.querySelector(
        '[data-testimonial-prev]'
    );

    const next = testimonialsCarousel.querySelector(
        '[data-testimonial-next]'
    );

    let currentIndex = 0;

    function showTestimonial(index) {
        currentIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            const active = i === currentIndex;

            slide.hidden = !active;
            slide.classList.toggle('is-active', active);
        });

        dots.forEach((dot, i) => {
            const active = i === currentIndex;

            dot.classList.toggle('is-active', active);

            if (active) {
                dot.setAttribute('aria-current', 'true');
            } else {
                dot.removeAttribute('aria-current');
            }
        });
    }

    prev.addEventListener('click', () => {
        showTestimonial(currentIndex - 1);
    });

    next.addEventListener('click', () => {
        showTestimonial(currentIndex + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });

    showTestimonial(0);
}
