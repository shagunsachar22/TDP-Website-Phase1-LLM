/* ===========================================================
   The Deliberate Pause — scroll FX
   Tiny, framework-free. Respects prefers-reduced-motion.
   =========================================================== */

(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Year stamp ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav: condense on scroll ---------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onNavScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    onNavScroll();
    window.addEventListener('scroll', onNavScroll, { passive: true });
  }

  /* ---------- Scroll progress bar ---------- */
  const bar = document.querySelector('.scroll-progress');
  if (bar) {
    const onProgress = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.width = pct + '%';
    };
    onProgress();
    window.addEventListener('scroll', onProgress, { passive: true });
    window.addEventListener('resize', onProgress);
  }

  /* ---------- Smooth in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        }
      }
    });
  });

  if (reduceMotion) return; /* skip the rest */

  /* ---------- Reveal-words: split into spans ---------- */
  document.querySelectorAll('.reveal-words').forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    words.forEach((w, i) => {
      const span = document.createElement('span');
      span.className = 'word';
      span.style.setProperty('--word-i', i);
      span.textContent = w;
      el.appendChild(span);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
  });

  /* ---------- IntersectionObserver: reveal sections ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
          /* Counter trigger */
          if (entry.target.dataset.counter) {
            animateCounter(entry.target, parseInt(entry.target.dataset.counter, 10));
          }
        }
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-scroll-fx], .reveal-words, [data-counter]').forEach((el) => io.observe(el));

  /* ---------- Animated counter ---------- */
  function animateCounter(el, end) {
    const duration = 1400;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); /* easeOutCubic */
      el.textContent = Math.round(end * eased);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = end;
    };
    requestAnimationFrame(tick);
  }

  /* ---------- Parallax on data-parallax="0.15" ---------- */
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length) {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        parallaxEls.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
          if (!inView) return;
          const speed = parseFloat(el.dataset.parallax) || 0.12;
          const offset = (rect.top - window.innerHeight / 2) * speed * -1;
          el.style.setProperty('--parallax-y', offset.toFixed(1) + 'px');
        });
        raf = null;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Magnetic CTA hover ---------- */
  document.querySelectorAll('.btn-magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  /* ---------- Marquee duplicate (so loop is seamless) ---------- */
  document.querySelectorAll('.marquee-track').forEach((track) => {
    if (track.dataset.duped === '1') return;
    const clone = track.innerHTML;
    track.innerHTML = clone + clone;
    track.dataset.duped = '1';
  });
})();
