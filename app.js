const header = document.querySelector('.global-nav');
const revealSections = Array.from(document.querySelectorAll('.reveal'));

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 8);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (revealSections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  revealSections.forEach((section) => observer.observe(section));
}
