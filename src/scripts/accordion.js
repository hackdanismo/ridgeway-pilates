
  document.querySelectorAll('.faq-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-icon');
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      trigger.setAttribute('aria-expanded', String(!isOpen));

      if (isOpen) {
        content.style.maxHeight = '0px';
        content.classList.remove('opacity-100');
        content.classList.add('opacity-0');
        icon.classList.remove('rotate-180');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.remove('opacity-0');
        content.classList.add('opacity-100');
        icon.classList.add('rotate-180');
      }
    });
  });
