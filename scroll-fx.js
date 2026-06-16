/* ===========================================================
   The Deliberate Pause — scroll FX
   Tiny, framework-free. Respects prefers-reduced-motion.
   =========================================================== */

(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Year stamp ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Avatar fallback (used by <img onerror=...>) ---------- */
  // When a testimonial photo file is missing, replace the <img> with the person's initials.
  // Avoids HTML-attribute quote-escaping nightmares.
  window.tdpAvatarFallback = function (img) {
    if (!img || !img.parentElement) return;
    const span = document.createElement('span');
    span.className = 'initials';
    span.textContent = img.dataset.initials || (img.alt || '?').slice(0, 2).toUpperCase();
    img.replaceWith(span);
  };

  /* ---------- Mobile menu ---------- */
  // Inject the menu DOM if it doesn't exist (so it works on every page automatically)
  let menu = document.querySelector('.mobile-menu');
  if (!menu) {
    menu = document.createElement('div');
    menu.className = 'mobile-menu';
    menu.setAttribute('aria-hidden', 'true');
    menu.innerHTML = `
      <div class="mobile-menu-overlay" data-menu-close></div>
      <aside class="mobile-menu-panel" role="dialog" aria-label="Site navigation">
        <div class="mobile-menu-top">
          <span class="brand">The Deliberate Pause</span>
          <button class="mobile-menu-close" type="button" aria-label="Close menu" data-menu-close>×</button>
        </div>
        <ul class="mobile-menu-list">
          <li><a href="read.html">Read</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="https://thedeliberatepause.substack.com/subscribe" rel="noopener">Subscribe</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
        <div class="mobile-menu-cta">
          <a href="https://thedeliberatepause.substack.com/subscribe" class="btn" rel="noopener">Subscribe <span class="arrow">→</span></a>
          <p class="micro">Every Monday · 11:11 AM</p>
        </div>
      </aside>
    `;
    document.body.appendChild(menu);
  }

  const toggleBtn = document.querySelector('.nav-mobile-toggle');
  function openMenu() {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
  }
  if (toggleBtn) toggleBtn.addEventListener('click', openMenu);
  menu.querySelectorAll('[data-menu-close]').forEach((el) => el.addEventListener('click', closeMenu));
  // Tap any menu link → close (so the link still navigates after the slide-out)
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });

  /* ---------- Newsletter popup ---------- */
  let popup = document.querySelector('.tdp-popup');
  if (!popup) {
    popup = document.createElement('div');
    popup.className = 'tdp-popup';
    popup.setAttribute('aria-hidden', 'true');
    popup.innerHTML = `
      <div class="tdp-popup__overlay" data-popup-close></div>
      <section class="tdp-popup__panel" role="dialog" aria-modal="true" aria-labelledby="tdp-popup-title">
        <button class="tdp-popup__close" type="button" aria-label="Close popup" data-popup-close>×</button>
        <div class="tdp-popup__content">
          <div class="tdp-popup__copy">
            <h2 id="tdp-popup-title">You have a courage problem.</h2>
            <p>Join founders training mental models for pressure, uncertainty, and better decisions. Mondays at 11:11.</p>
            <div class="tdp-popup__actions">
              <a class="popup-primary" href="https://thedeliberatepause.substack.com/subscribe" rel="noopener">Subscribe <span class="arrow">→</span></a>
            </div>
          </div>
          <div class="tdp-popup__image" aria-hidden="true"></div>
        </div>
      </section>
    `;
    document.body.appendChild(popup);
  }

  const popupDismissedKey = 'tdp-popup-dismissed';
  const forcePopup = new URLSearchParams(window.location.search).has('popup') || window.location.hash === '#popup';
  let popupTimer = null;
  function openPopup(options = {}) {
    if (!options.ignoreDismissed && sessionStorage.getItem(popupDismissedKey) === '1') return;
    if (popup.classList.contains('is-open') || document.body.classList.contains('menu-open')) return;
    popup.classList.add('is-open');
    popup.setAttribute('aria-hidden', 'false');
    document.body.classList.add('popup-open');
  }
  function closePopup() {
    popup.classList.remove('is-open');
    popup.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('popup-open');
    sessionStorage.setItem(popupDismissedKey, '1');
  }
  popup.querySelectorAll('[data-popup-close]').forEach((el) => el.addEventListener('click', closePopup));
  popup.querySelectorAll('a').forEach((a) => a.addEventListener('click', closePopup));
  document.querySelectorAll('[data-popup-trigger]').forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      sessionStorage.removeItem(popupDismissedKey);
      openPopup({ ignoreDismissed: true });
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('is-open')) closePopup();
  });
  if (forcePopup) {
    sessionStorage.removeItem(popupDismissedKey);
    popupTimer = window.setTimeout(() => openPopup({ ignoreDismissed: true }), 350);
  } else if (!sessionStorage.getItem(popupDismissedKey)) {
    popupTimer = window.setTimeout(openPopup, 4500);
  }
  window.addEventListener('beforeunload', () => {
    if (popupTimer) window.clearTimeout(popupTimer);
  });

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
