document.documentElement.classList.add('js');

// キャラクターカードをスクロールに合わせて順番に表示
const chars = document.querySelectorAll('.char');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const i = [...e.target.parentElement.children].indexOf(e.target) % 3;
      e.target.style.transitionDelay = `${i * 80}ms`;
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  chars.forEach((c) => io.observe(c));
} else {
  chars.forEach((c) => c.classList.add('is-visible'));
}
