/* ============================================================
   Sohail Azain — Portfolio
   js/main.js  —  Scroll reveal animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 4 * 0.08) + 's';
    observer.observe(el);
  });
});
