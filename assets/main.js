// RAM Website Builders — shared client JS

(() => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll progress bar (injected so all pages get it without HTML edits)
  let progressBar = null;
  if (!reduceMotion) {
    progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
  }

  // Hero parallax — text scales down & fades as you scroll past the hero
  const hero = document.querySelector('.hero');
  const heroInner = document.querySelector('.hero-inner');

  let ticking = false;
  const updateOnScroll = () => {
    ticking = false;
    const y = window.scrollY || window.pageYOffset || 0;

    // Sticky nav scrolled state
    if (nav) nav.classList.toggle('scrolled', y > 8);

    if (reduceMotion) return;

    // Scroll progress bar
    if (progressBar) {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      progressBar.style.width = (scrollable > 0 ? Math.min(y / scrollable, 1) * 100 : 0) + '%';
    }

    // Hero shrink / fade
    if (hero && heroInner) {
      const h = hero.offsetHeight || 1;
      const p = Math.min(Math.max(y / h, 0), 1); // 0 → 1 across the hero
      const scale = 1 - p * 0.16;                // down to 0.84
      const shift = p * -40;                     // drifts up
      heroInner.style.transform = 'translateY(' + shift + 'px) scale(' + scale + ')';
      heroInner.style.opacity = String(Math.max(1 - p * 1.15, 0));
    }
  };
  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(updateOnScroll); }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateOnScroll();

  // Mobile menu toggle
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // Staggered reveal for card grids — children animate in one after another
  if (!reduceMotion) {
    document.querySelectorAll(
      '.trustbar-grid.reveal, .steps.reveal, .pricing.reveal, .hosting.reveal, .why-grid.reveal, .faqs.reveal, .split.reveal, .timeline.reveal'
    ).forEach(grid => {
      grid.classList.add('stagger');
      Array.prototype.forEach.call(grid.children, (child, i) => {
        child.style.transitionDelay = (i * 90) + 'ms';
      });
    });
  }

  // Scroll reveal
  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && els.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.classList.add('in'));
  }

  // Mark active nav link based on current pathname
  const path = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === path) a.classList.add('active');
  });
})();
