document.documentElement.classList.add('js');

// 紹介文を1行ずつ表示
const lines = document.querySelectorAll('.about-text p');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  lines.forEach((p) => io.observe(p));
} else {
  lines.forEach((p) => p.classList.add('is-visible'));
}

// 「視聴する」：リンク先が未設定(#)の間は案内を表示
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (btn.getAttribute('href') === '#') {
      e.preventDefault();
      alert(`「${btn.dataset.title}」の動画URLは未設定です。\nindex.html の href を動画のURLに変更してください。`);
    }
  });
});
