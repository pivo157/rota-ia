
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
document.querySelectorAll('a[href*="go.hotmart.com/U107411763I"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const destino = this.href;

    if (typeof fbq === 'function') {
      fbq('track', 'ViewContent');
    }

    setTimeout(function() {
      window.location.href = destino;
    }, 500);
  });
});
