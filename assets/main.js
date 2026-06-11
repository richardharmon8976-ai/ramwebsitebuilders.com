// RAM Website Builders — shared client JS

(() => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');

  // Sticky nav scrolled state
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

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

  // Scroll-driven motion: hero shrink/fade + blob parallax + progress bar
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reading-progress bar
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  document.body.appendChild(progress);

  const heroInner = document.querySelector('.hero-inner');
  const heroSection = document.querySelector('.hero');

  let ticking = false;
  const render = () => {
    ticking = false;

    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0})`;

    if (reduceMotion || !heroInner || !heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    const h = rect.height || 1;
    // 0 while hero top is at viewport top, 1 once the hero has scrolled fully away
    const p = Math.min(1, Math.max(0, -rect.top / h));
    const scale = 1 - p * 0.16;
    const drift = p * 32;
    heroInner.style.transform = `translate3d(0, ${drift}px, 0) scale(${scale})`;
    heroInner.style.opacity = String(1 - p * 0.8);
    heroSection.style.setProperty('--hero-shift-1', `${p * 90}px`);
    heroSection.style.setProperty('--hero-shift-2', `${p * -70}px`);
  };
  const onScrollMotion = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(render); }
  };
  window.addEventListener('scroll', onScrollMotion, { passive: true });
  window.addEventListener('resize', onScrollMotion, { passive: true });
  render();

  // Contact / newsletter forms -> FormSubmit (AJAX, lands in the owner's inbox)
  document.querySelectorAll('form[data-mailform]').forEach(form => {
    const status = form.querySelector('.form-status');
    const submitBtn = form.querySelector('[type="submit"]');
    const setStatus = (msg, kind) => {
      if (!status) return;
      status.textContent = msg;
      status.className = 'form-status' + (kind ? ' ' + kind : '');
    };
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      // Honeypot: if filled, silently pretend success (it's a bot)
      const honey = form.querySelector('input[name="_honey"]');
      if (honey && honey.value) { form.reset(); setStatus(form.dataset.success || 'Thanks!', 'ok'); return; }
      const originalLabel = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
      setStatus('', '');
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new URLSearchParams(new FormData(form))
        });
        let ok = res.ok;
        try { const data = await res.json(); ok = ok && (data.success === true || data.success === 'true'); } catch (_) {}
        if (!ok) throw new Error('bad response');
        form.reset();
        setStatus(form.dataset.success || "Thanks — we'll be in touch shortly.", 'ok');
      } catch (_) {
        setStatus("Couldn't send that — please email richard.harmon8976@gmail.com directly.", 'err');
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
      }
    });
  });

  // Gentle 3D tilt: panel cards lean toward the cursor
  if (!reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.tier, .hosting-card, .split-card, .proof').forEach(card => {
      let raf = 0;
      card.addEventListener('mousemove', (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          card.style.setProperty('--ry', ((px - 0.5) * 5).toFixed(2) + 'deg');
          card.style.setProperty('--rx', ((0.5 - py) * 5).toFixed(2) + 'deg');
        });
      });
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      });
    });
  }

  // Mark active nav link based on current pathname
  const path = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === path) a.classList.add('active');
  });
})();
