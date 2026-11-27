/* Rehmat Developers - page behavior (vanilla JS) */
(function () {
  var RD = window.RD, U = RD.ui, S = RD.site, i = U.i, esc = U.esc;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var LS_KEY = 'rd_reviews_local';

  /* ---------- storage helpers ---------- */
  function getLocal() { try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch (e) { return []; } }
  function saveLocal(a) { try { localStorage.setItem(LS_KEY, JSON.stringify(a)); return true; } catch (e) { return false; } }
  function allReviews() {
    return RD.reviews.map(function (r) { return Object.assign({}, r); })
      .concat(getLocal().map(function (r) { return Object.assign({local: true}, r); }));
  }

  /* ---------- shell ---------- */
  function mountShell() {
    var h = $('#site-header'), f = $('#site-footer');
    if (h) h.outerHTML = U.header();
    if (f) f.outerHTML = U.footer();
    inflateIcons();
    $$('[data-year]').forEach(function (e) { e.textContent = new Date().getFullYear(); });
  }

  function inflateIcons() {
    $$('[data-icon]').forEach(function (el) {
      var svg = i(el.dataset.icon);
      if (el.tagName === 'SPAN') el.outerHTML = svg; else el.insertAdjacentHTML('afterbegin', svg);
    });
    $$('[data-i]').forEach(function (el) { el.insertAdjacentHTML('afterbegin', i(el.dataset.i)); });
  }

  function initNav() {
    var btn = $('#menu-btn'), panel = $('#nav-panel');
    if (!btn || !panel) return;
    function set(open) { panel.classList.toggle('open', open); btn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
    btn.addEventListener('click', function (e) { e.stopPropagation(); set(!panel.classList.contains('open')); });
    panel.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('click', function (e) { if (!e.target.closest('.nav')) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 1180) set(false); });
    var top = $('#to-top');
    if (top) {
      window.addEventListener('scroll', function () { top.classList.toggle('show', window.scrollY > 600); }, {passive: true});
      top.addEventListener('click', function () { window.scrollTo({top: 0, behavior: 'smooth'}); });
    }
  }

  /* ---------- mounts (reusable card rendering) ---------- */
  var mounts = {
    services: function (el) {
      var full = el.dataset.variant === 'full', n = +el.dataset.limit || RD.services.length;
      el.className = 'grid ' + (full ? 'g2' : 'g3');
      el.innerHTML = RD.services.slice(0, n).map(function (s) { return U.serviceCard(s, full); }).join('');
    },
    projects: function (el) {
      var list = RD.projects.map(function (p, k) { return {p: p, k: k}; });
      if (el.dataset.featured) list = list.filter(function (x) { return x.p.featured; });
      var n = +el.dataset.limit || list.length;
      el.className = 'grid ' + (el.dataset.cols === '4' ? 'g4' : 'g3');
      el.innerHTML = list.slice(0, n).map(function (x) { return U.projectCard(x.p, x.k); }).join('');
    },
    team: function (el) { el.className = 'grid team-grid'; el.innerHTML = RD.team.map(U.teamCard).join(''); },
    founder: function (el) { el.innerHTML = U.founderCard(); },
    plans: function (el) { el.className = 'grid g3'; el.innerHTML = RD.plans.map(U.planCard).join(''); },
    compare: function (el) { el.innerHTML = U.compareTable(); },
    process: function (el) { el.className = 'steps'; el.innerHTML = RD.process.map(U.stepCard).join(''); },
    values: function (el) { el.className = 'grid g3'; el.innerHTML = RD.values.map(U.iconCard).join(''); },
    policy: function (el) { el.className = 'policy'; el.innerHTML = RD.policy.map(U.iconCard).join(''); },
    industries: function (el) { el.className = 'grid g3'; el.innerHTML = RD.industries.map(U.industryCard).join(''); },
    tech: function (el) { el.className = 'tags'; el.innerHTML = RD.tech.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join(''); },
    featuredPost: function (el) { el.innerHTML = U.featuredPost(RD.posts.filter(function (p) { return p.featured; })[0]); },
    posts: function (el) { el.className = 'grid g3'; el.innerHTML = RD.posts.filter(function (p) { return !p.featured; }).map(U.postCard).join(''); },
    reviews: renderReviews
  };

  function renderReviews(el) {
    var all = allReviews().reverse(), n = +el.dataset.limit || all.length;
    if (!all.length) {
      el.className = '';
      el.innerHTML = '<div class="empty"><h3>No client reviews published yet</h3><p>We only publish genuine feedback from people we have worked with. If you are a client, we would value your review.</p><a class="btn btn--primary" href="reviews.html#review-form">Write a review</a></div>';
      return;
    }
    el.className = 'grid ' + (el.dataset.cols === '1' ? '' : el.dataset.cols === '2' ? 'g2' : 'g3');
    el.innerHTML = all.slice(0, n).map(U.quoteCard).join('');
  }

  function mountSections() {
    $$('[data-mount]').forEach(function (el) { var f = mounts[el.dataset.mount]; if (f) f(el); });
  }

  /* ---------- modal ---------- */
  var dlg;
  function openModal(html) {
    if (!dlg) {
      dlg = document.createElement('dialog'); dlg.className = 'modal'; dlg.setAttribute('aria-label', 'Details');
      document.body.appendChild(dlg);
      dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.closest('[data-close]')) dlg.close(); });
    }
    dlg.innerHTML = '<button class="x" data-close aria-label="Close">' + i('x') + '</button>' + html;
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
  }
  function projectModal(id) {
    var k = RD.projects.findIndex(function (p) { return p.id === id; }), p = RD.projects[k]; if (!p) return;
    openModal(U.cover(p, k) + '<div class="mbody"><span class="cat">' + RD.cats[p.cat] + '</span><h2>' + esc(p.title) + '</h2><p>' + esc(p.desc) + '</p>' +
      '<h4 style="margin:22px 0 12px">What this project includes</h4><ul class="feat">' + p.points.map(function (t) { return '<li>' + i('check') + '<span>' + esc(t) + '</span></li>'; }).join('') + '</ul>' +
      '<div class="btn-row"><a class="btn btn--primary" href="contact.html?topic=' + encodeURIComponent(p.title) + '">Start a similar project</a><a class="btn btn--wa" target="_blank" rel="noopener" href="' + U.wa('Hi Rehmat Developers! I saw the ' + p.title + ' project in your portfolio and want to discuss something similar.') + '">' + i('whatsapp') + ' WhatsApp</a></div></div>');
  }
  function postModal(id) {
    var p = RD.posts.filter(function (x) { return x.id === id; })[0]; if (!p) return;
    openModal(U.cover(p, 1, 'wide') + '<div class="mbody"><div class="meta"><span class="cat" style="margin:0">' + esc(p.cat) + '</span><span>' + i('calendar') + esc(p.date) + '</span>' + (p.read ? '<span>' + i('clock') + esc(p.read) + '</span>' : '') + '</div><h2>' + esc(p.title) + '</h2><p>' + esc(p.excerpt) + '</p>' +
      '<p style="margin-top:14px">Want this topic applied to your own website? Talk to Muhammad Waleed and the team directly.</p>' +
      '<div class="btn-row"><a class="btn btn--primary" href="contact.html?topic=' + encodeURIComponent(p.title) + '">Discuss this topic</a><a class="btn btn--wa" target="_blank" rel="noopener" href="' + U.wa('Hi Rehmat Developers! I read about "' + p.title + '" and have a question.') + '">' + i('whatsapp') + ' WhatsApp</a></div></div>');
  }
  function initModals() {
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-open]'); if (!t) return;
      var a = t.dataset.open.split(':');
      if (a[0] === 'project') projectModal(a[1]); else if (a[0] === 'post') postModal(a[1]);
    });
  }

  /* ---------- filters (portfolio + blog) ---------- */
  function buildChips(root, items, counts, onPick) {
    root.innerHTML = items.map(function (it, k) { return '<button type="button" class="chipbtn" data-f="' + esc(it.v) + '" aria-pressed="' + (k === 0) + '">' + esc(it.l) + '<small>' + counts[it.v] + '</small></button>'; }).join('');
    root.addEventListener('click', function (e) {
      var b = e.target.closest('.chipbtn'); if (!b) return;
      $$('.chipbtn', root).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      onPick(b.dataset.f);
    });
  }
  function applyFilter(grid, cat, q, countEl, emptyEl) {
    var shown = 0;
    $$('.card', grid).forEach(function (c) {
      var ok = (cat === 'all' || c.dataset.cat === cat) && (!q || c.textContent.toLowerCase().indexOf(q) > -1);
      c.hidden = !ok; if (ok) shown++;
    });
    if (countEl) countEl.textContent = 'Showing ' + shown + ' of ' + $$('.card', grid).length;
    if (emptyEl) emptyEl.hidden = shown > 0;
  }
  function initPortfolio() {
    var grid = $('#project-grid'), bar = $('#project-filters'); if (!grid || !bar) return;
    var counts = {all: RD.projects.length}; RD.projects.forEach(function (p) { counts[p.cat] = (counts[p.cat] || 0) + 1; });
    var items = [{v: 'all', l: 'All projects'}].concat(Object.keys(RD.cats).map(function (k) { return {v: k, l: RD.cats[k]}; }));
    var cnt = $('#project-count'), emp = $('#project-empty');
    buildChips(bar, items, counts, function (c) { applyFilter(grid, c, '', cnt, emp); });
    applyFilter(grid, 'all', '', cnt, emp);
  }
  function initBlog() {
    var grid = $('#post-grid'), bar = $('#post-filters'); if (!grid || !bar) return;
    var posts = RD.posts.filter(function (p) { return !p.featured; }), counts = {all: posts.length}, cats = [];
    posts.forEach(function (p) { if (cats.indexOf(p.cat) < 0) cats.push(p.cat); counts[p.cat] = (counts[p.cat] || 0) + 1; });
    var items = [{v: 'all', l: 'All posts'}].concat(cats.map(function (c) { return {v: c, l: c}; }));
    var cur = 'all', q = '', input = $('#post-search'), cnt = $('#post-count'), emp = $('#post-empty');
    function run() { applyFilter(grid, cur, q, cnt, emp); }
    buildChips(bar, items, counts, function (c) { cur = c; run(); });
    if (input) input.addEventListener('input', function () { q = input.value.trim().toLowerCase(); run(); });
    run();
  }

  /* ---------- FAQ ---------- */
  function initFaq() {
    var root = $('#faq-root'); if (!root) return;
    var html = '', n = 0;
    RD.faqCats.forEach(function (c) {
      var items = RD.faqs.filter(function (f) { return f.c === c.id; }); if (!items.length) return;
      html += '<section class="faq-group" data-cat="' + c.id + '" id="' + c.id + '"><h2><span class="ico">' + i(c.icon) + '</span>' + esc(c.title) + '</h2>' +
        items.map(function (f) {
          n++; return '<div class="faq-item" data-text="' + esc((f.q + ' ' + f.a.replace(/<[^>]+>/g, '')).toLowerCase()) + '"><h3><button type="button" class="faq-q" aria-expanded="false" aria-controls="fa' + n + '" id="fq' + n + '"><span>' + esc(f.q) + '</span>' + i('chevron') + '</button></h3><div class="faq-a" id="fa' + n + '" role="region" aria-labelledby="fq' + n + '"><div><p>' + f.a + '</p></div></div></div>';
        }).join('') + '</section>';
    });
    root.innerHTML = html;
    var bar = $('#faq-filters'), counts = {all: RD.faqs.length};
    RD.faqs.forEach(function (f) { counts[f.c] = (counts[f.c] || 0) + 1; });
    var cur = 'all', q = '', input = $('#faq-search'), empty = $('#faq-empty');
    function run() {
      var any = 0;
      $$('.faq-group', root).forEach(function (g) {
        var vis = 0;
        $$('.faq-item', g).forEach(function (it) {
          var ok = (cur === 'all' || g.dataset.cat === cur) && (!q || it.dataset.text.indexOf(q) > -1);
          it.hidden = !ok; if (ok) { vis++; if (q) setOpen(it, true); }
        });
        g.hidden = vis === 0; any += vis;
      });
      if (empty) empty.hidden = any > 0;
    }
    function setOpen(it, open) {
      it.classList.toggle('open', open); $('.faq-q', it).setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    root.addEventListener('click', function (e) {
      var b = e.target.closest('.faq-q'); if (!b) return;
      var it = b.closest('.faq-item'); setOpen(it, !it.classList.contains('open'));
    });
    buildChips(bar, [{v: 'all', l: 'All'}].concat(RD.faqCats.map(function (c) { return {v: c.id, l: c.title}; })), counts, function (c) { cur = c; run(); });
    input.addEventListener('input', function () { q = input.value.trim().toLowerCase(); if (!q) $$('.faq-item', root).forEach(function (it) { setOpen(it, false); }); run(); });
    var clear = $('#faq-clear'); if (clear) clear.addEventListener('click', function () { input.value = ''; q = ''; run(); input.focus(); });
  }

  /* ---------- forms ---------- */
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, PHONE = /^[+()\d\s-]{7,20}$/;
  function setErr(field, msg) {
    var f = field.closest('.field'); if (!f) return;
    f.classList.toggle('err', !!msg); var m = $('.msg', f); if (m) m.textContent = msg || '';
    field.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }
  function check(form) {
    var ok = true, first = null;
    $$('[data-v]', form).forEach(function (el) {
      var v = (el.value || '').trim(), rules = el.dataset.v.split(','), msg = '';
      if (rules.indexOf('required') > -1 && !v) msg = 'This field is required.';
      else if (v && rules.indexOf('email') > -1 && !EMAIL.test(v)) msg = 'Enter a valid email address, like name@example.com.';
      else if (v && rules.indexOf('phone') > -1 && !PHONE.test(v)) msg = 'Enter a valid phone number, for example +92 300 1234567.';
      else if (v && el.dataset.min && v.length < +el.dataset.min) msg = 'Please write at least ' + el.dataset.min + ' characters.';
      setErr(el, msg); if (msg) { ok = false; first = first || el; }
    });
    if (first) first.focus();
    return ok;
  }
  function liveClear(form) {
    form.addEventListener('input', function (e) { if (e.target.matches('[data-v]')) setErr(e.target, ''); });
  }
  function showAlert(form, html) { var a = $('.alert', form); if (a) { a.innerHTML = html; a.classList.add('show'); a.scrollIntoView({behavior: 'smooth', block: 'nearest'}); } }

  function initContact() {
    var form = $('#contact-form'); if (!form) return;
    liveClear(form);
    var sel = $('#service', form), p = new URLSearchParams(location.search);
    var want = p.get('package') || p.get('service'); if (want && sel) sel.value = want;
    var topic = p.get('topic'); if (topic) $('#message', form).value = 'Hi, I would like to discuss: ' + topic + '.\n\n';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!check(form)) return;
      var d = {name: $('#name', form).value.trim(), email: $('#email', form).value.trim(), phone: $('#phone', form).value.trim(), service: sel.options[sel.selectedIndex].text, message: $('#message', form).value.trim()};
      var body = 'Name: ' + d.name + '\nEmail: ' + d.email + '\nPhone / WhatsApp: ' + (d.phone || 'Not provided') + '\nInterested in: ' + d.service + '\n\nMessage:\n' + d.message;
      var via = (e.submitter && e.submitter.dataset.via) || 'email';
      if (via === 'wa') {
        window.open(U.wa('Hi Rehmat Developers!\n\n' + body), '_blank', 'noopener');
        showAlert(form, 'WhatsApp is opening with your message ready. Press send there to reach us.');
      } else {
        var url = 'mailto:' + S.email + '?subject=' + encodeURIComponent('Project inquiry from ' + d.name) + '&body=' + encodeURIComponent(body);
        window.location.href = url;
        showAlert(form, 'Your email app should open with your message ready. If nothing opens, <a href="' + url + '">click here</a>, email <b>' + S.email + '</b> directly, or message us on WhatsApp.');
      }
    });
  }

  function initReviewForm() {
    var form = $('#review-form'); if (!form) return;
    liveClear(form);
    var ratingBox = $('.rating', form), ratingField = ratingBox.closest('.field');
    form.addEventListener('change', function (e) { if (e.target.name === 'rating') { ratingField.classList.remove('err'); } });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = check(form), r = form.querySelector('input[name=rating]:checked');
      if (!r) { ratingField.classList.add('err'); $('.msg', ratingField).textContent = 'Choose a star rating from 1 to 5.'; ok = false; }
      if (!ok) return;
      var rec = {name: $('#r-name', form).value.trim(), business: $('#r-business', form).value.trim(), rating: +r.value, text: $('#r-text', form).value.trim(), date: new Date().toISOString().slice(0, 10)};
      var list = getLocal(); list.push(rec); var saved = saveLocal(list);
      var body = 'New review for Rehmat Developers\n\nName: ' + rec.name + '\nBusiness / service: ' + (rec.business || 'Not provided') + '\nEmail: ' + ($('#r-email', form).value.trim() || 'Not provided') + '\nRating: ' + rec.rating + '/5\n\n' + rec.text;
      var url = 'mailto:' + S.email + '?subject=' + encodeURIComponent('Client review from ' + rec.name) + '&body=' + encodeURIComponent(body);
      form.reset();
      var lst = $('#review-list'); if (lst) renderReviews(lst);
      showAlert(form, 'Thank you, ' + esc(rec.name) + '! ' + (saved ? 'Your review is shown below on this device. ' : '') + 'To have it considered for publication on the site, <a href="' + url + '">send it to us by email</a> or <a href="' + U.wa('Hi Rehmat Developers! Here is my review:\n\n' + rec.text + '\n\nRating: ' + rec.rating + '/5 - ' + rec.name) + '" target="_blank" rel="noopener">via WhatsApp</a>.');
    });
  }

  function initNewsletter() {
    var form = $('#nl-form'); if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var inp = $('input', form), err = $('#nl-err'), ok = $('#nl-ok'), v = inp.value.trim();
      ok.style.display = 'none';
      if (!EMAIL.test(v)) { err.textContent = 'Enter a valid email address, like name@example.com.'; err.style.display = 'block'; inp.setAttribute('aria-invalid', 'true'); inp.focus(); return; }
      err.style.display = 'none'; inp.setAttribute('aria-invalid', 'false');
      window.location.href = 'mailto:' + S.email + '?subject=' + encodeURIComponent('Newsletter subscription request') + '&body=' + encodeURIComponent('Please add this email to the Rehmat Developers newsletter: ' + v);
      ok.textContent = 'Your email app is opening to send your subscription request. Press send to finish.'; ok.style.display = 'block';
      form.reset();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    mountShell(); initNav(); mountSections(); initModals();
    initPortfolio(); initBlog(); initFaq(); initContact(); initReviewForm(); initNewsletter();
  });
})();
