const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const form = new FormData(contactForm);
    const subject = encodeURIComponent(`Natural Fibres Ireland enquiry — ${form.get('interest') || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${form.get('name') || ''}\nOrganisation: ${form.get('organisation') || ''}\nEmail: ${form.get('email') || ''}\nInterest: ${form.get('interest') || ''}\n\n${form.get('message') || ''}`
    );
    window.location.href = `mailto:hello@naturalfibresireland.ie?subject=${subject}&body=${body}`;
  });
}
