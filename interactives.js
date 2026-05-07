/* ===========================================================
   The Deliberate Pause — practice page interactives
   Self-contained. Each widget initialises if its DOM is present.
   =========================================================== */

(function () {

  /* ============================================================
     1. JACKSON TRIANGLE — three corners, tap each
     DOM expects:
       .jt-widget [data-corner="ego|other|intent"] elements
       .jt-counter span (count display)
       .jt-reset button
       .jt-done — element shown when 3/3
     ============================================================ */
  const jt = document.querySelector('.jt-widget');
  if (jt) {
    const corners = jt.querySelectorAll('[data-corner]');
    const counter = jt.querySelector('.jt-counter span');
    const resetBtn = jt.querySelector('.jt-reset');
    const done = jt.querySelector('.jt-done');
    let tapped = new Set();

    function update() {
      counter.textContent = tapped.size;
      if (tapped.size === 3) {
        done?.classList.add('is-visible');
      } else {
        done?.classList.remove('is-visible');
      }
    }
    function tap(corner) {
      const id = corner.dataset.corner;
      if (tapped.has(id)) return;
      tapped.add(id);
      corner.classList.add('is-tapped');
      update();
    }
    function reset() {
      tapped.clear();
      corners.forEach((c) => c.classList.remove('is-tapped'));
      update();
    }
    corners.forEach((c) => {
      c.addEventListener('click', () => tap(c));
      c.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tap(c); }
      });
    });
    resetBtn?.addEventListener('click', reset);
  }

  /* ============================================================
     2. THINK BOX / PLAY BOX — toggle
     DOM expects:
       .tbpb-toggle [data-pane="think|play"] buttons
       .tbpb-pane[data-pane-id="think|play"] content panels
     ============================================================ */
  const tbpbToggles = document.querySelectorAll('.tbpb-toggle [data-pane]');
  if (tbpbToggles.length) {
    const panes = document.querySelectorAll('.tbpb-pane');
    function show(id) {
      tbpbToggles.forEach((b) => b.classList.toggle('is-active', b.dataset.pane === id));
      tbpbToggles.forEach((b) => b.setAttribute('aria-selected', b.dataset.pane === id ? 'true' : 'false'));
      panes.forEach((p) => p.classList.toggle('is-active', p.dataset.paneId === id));
    }
    tbpbToggles.forEach((b) => b.addEventListener('click', () => show(b.dataset.pane)));
    /* default: think */
    show(tbpbToggles[0]?.dataset.pane || 'think');
  }

  /* ============================================================
     3. 90-SECOND RECOVERY — countdown timer with stroke ring
     DOM expects:
       .ninety-widget — root
       .nw-time — text "1:30"
       .nw-status — text label "READY" / "RUNNING" / "DONE"
       .nw-ring  — SVG circle with stroke-dasharray
       .nw-start — start button
       .nw-reset — reset button
     ============================================================ */
  const nw = document.querySelector('.ninety-widget');
  if (nw) {
    const TOTAL = 90; // seconds
    const timeEl  = nw.querySelector('.nw-time');
    const statusEl = nw.querySelector('.nw-status');
    const ring    = nw.querySelector('.nw-ring');
    const startBtn = nw.querySelector('.nw-start');
    const resetBtn = nw.querySelector('.nw-reset');
    const ringLen = ring ? Math.round(2 * Math.PI * parseFloat(ring.getAttribute('r'))) : 0;
    if (ring) {
      ring.style.strokeDasharray = ringLen;
      ring.style.strokeDashoffset = '0';
    }

    let startedAt = null;
    let raf = null;
    let state = 'ready';

    function fmt(s) {
      const m = Math.floor(s / 60);
      const r = Math.floor(s % 60);
      return `${m}:${r.toString().padStart(2, '0')}`;
    }
    function setRing(progress01) {
      if (!ring) return;
      ring.style.strokeDashoffset = (ringLen * progress01).toFixed(1);
    }
    function tick(t) {
      const elapsed = (t - startedAt) / 1000;
      const remaining = Math.max(0, TOTAL - elapsed);
      timeEl.textContent = fmt(remaining);
      setRing(elapsed / TOTAL);
      if (remaining <= 0) {
        finish();
        return;
      }
      raf = requestAnimationFrame(tick);
    }
    function start() {
      if (state === 'running') return;
      state = 'running';
      statusEl.textContent = 'Running';
      statusEl.dataset.state = 'running';
      startedAt = performance.now();
      nw.classList.add('is-running');
      raf = requestAnimationFrame(tick);
    }
    function reset() {
      cancelAnimationFrame(raf);
      state = 'ready';
      timeEl.textContent = fmt(TOTAL);
      statusEl.textContent = 'Ready';
      statusEl.dataset.state = 'ready';
      setRing(0);
      nw.classList.remove('is-running', 'is-done');
    }
    function finish() {
      cancelAnimationFrame(raf);
      state = 'done';
      timeEl.textContent = '0:00';
      statusEl.textContent = 'Done';
      statusEl.dataset.state = 'done';
      setRing(1);
      nw.classList.remove('is-running');
      nw.classList.add('is-done');
    }
    /* init */
    timeEl.textContent = fmt(TOTAL);
    setRing(0);

    startBtn?.addEventListener('click', start);
    resetBtn?.addEventListener('click', reset);
  }

})();
