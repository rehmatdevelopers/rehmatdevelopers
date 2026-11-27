/* Rehmat Developers - reusable components (header, footer, cards, icons) */
(function () {
  var RD = window.RD, S = RD.site;
  var ICONS = {
    globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    layers:'<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    cart:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
    pen:'<path d="m12 19 7-7 3 3-7 7z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18z"/><path d="m2 2 7.6 7.6"/><circle cx="11" cy="11" r="2"/>',
    rocket:'<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9s-2.1-.8-2.9-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
    "phone-ui":'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
    layout:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    trend:'<path d="m23 6-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>',
    wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
    building:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    bag:'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
    "chart-bar":'<path d="M18 20V10M12 20V4M6 20v-6"/>',
    chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-7"/>',
    card:'<rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>',
    home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    food:'<path d="M3 2v7a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2M6 2v20M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3zm0 0v7"/>',
    cap:'<path d="m22 10-10-5L2 10l10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
    plus:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/>',
    dumbbell:'<path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11"/>',
    chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    code:'<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    refresh:'<path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.5 9a9 9 0 0 1 14.9-3.4L23 10M1 14l4.6 4.4A9 9 0 0 0 20.5 15"/>',
    shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
    check:'<path d="M20 6 9 17l-5-5"/>',
    search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    pin:'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    whatsapp:'<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-.8.8c-.8-.4-1.600-1.200-2-2l.8-.8-1-2z"/>',
    github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.8 12.8 0 0 0-6.7 0C6.7 2.7 5.6 3 5.6 3a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 4 10.2c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.6V22"/>',
    star:'<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.800 5.800 21l1.200-6.800-5-4.900 6.900-1z"/>',
    arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',
    menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
    x:'<path d="M18 6 6 18M6 6l12 12"/>',
    chevron:'<path d="m6 9 6 6 6-6"/>',
    send:'<path d="m22 2-11 11M22 2l-7 20-4-9-9-4z"/>',
    heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.500 5.500 0 0 0 0-7.800z"/>',
    target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    compass:'<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/>',
    up:'<path d="m18 15-6-6-6 6"/>'
  };
  function i(n, c) { return '<svg class="i ' + (c || '') + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (ICONS[n] || '') + '</svg>'; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function wa(t) { return 'https://wa.me/' + S.wa + (t ? '?text=' + encodeURIComponent(t) : ''); }
  function stars(n) { var h = ''; for (var k = 1; k <= 5; k++) h += i('star', k <= n ? '' : 'off'); return '<div class="stars" role="img" aria-label="' + n + ' out of 5 stars">' + h + '</div>'; }

  var LOGO_SVG = '<img src="images/logo.png" alt="Rehmat Developers" width="100px">';
  function logo() { return '<a class="logo" href="index.html" aria-label="Rehmat Developers - home">' + LOGO_SVG + '</a>'; }

  function header() {
    var cur = (location.pathname.split('/').pop() || 'index.html');
    var links = RD.nav.map(function (n) { return '<li><a href="' + n[1] + '"' + (n[1] === cur ? ' aria-current="page"' : '') + '>' + n[0] + '</a></li>'; }).join('');
    return '<header class="site-header"><nav class="nav" aria-label="Main">' + logo() +
      '<div class="nav-panel" id="nav-panel"><ul class="nav-links">' + links + '</ul><a class="btn btn--primary btn--sm" href="contact.html">Let\u2019s Talk</a></div>' +
      '<button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="nav-panel" aria-label="Toggle menu">' + i('menu', 'm') + i('x', 'x') + '</button></nav></header>';
  }

  function footer() {
    var q = RD.nav.map(function (n) { return '<li><a href="' + n[1] + '">' + (n[0] === 'About' ? 'About Us' : n[0]) + '</a></li>'; }).join('');
    var ids = ['custom-web', 'full-stack', 'ecommerce', 'ui-ux', 'seo', 'wordpress', 'maintenance'];
    var sv = RD.services.filter(function (s) { return ids.indexOf(s.id) > -1; }).map(function (s) { return '<li><a href="services.html#' + s.id + '">' + esc(s.title) + '</a></li>'; }).join('');
    return '<footer class="site-footer"><div class="container"><div class="foot-grid">' +
      '<div>' + logo() + '<p>' + esc(S.tagline) + ' We build modern, high-performance websites that help businesses present themselves professionally and grow online.</p>' +
      '<div class="socials"><a href="' + S.github + '" target="_blank" rel="noopener" aria-label="GitHub">' + i('github') + '</a><a href="' + wa('Hi Rehmat Developers!') + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + i('whatsapp') + '</a><a href="mailto:' + S.email + '" aria-label="Email">' + i('mail') + '</a><a href="' + S.map + '" target="_blank" rel="noopener" aria-label="Location on Google Maps">' + i('pin') + '</a></div></div>' +
      '<div><h4>Quick Links</h4><ul>' + q + '</ul></div>' +
      '<div><h4>Our Services</h4><ul>' + sv + '</ul></div>' +
      '<div><h4>Contact Details</h4><ul class="foot-contact">' +
      '<li>' + i('pin') + '<a href="' + S.map + '" target="_blank" rel="noopener">' + S.address + '</a></li>' +
      '<li>' + i('mail') + '<a href="mailto:' + S.email + '">' + S.email + '</a></li>' +
      '<li>' + i('phone') + '<a href="tel:' + S.phoneTel + '">' + S.phoneDisplay + '</a></li>' +
      '<li>' + i('whatsapp') + '<a href="' + wa() + '" target="_blank" rel="noopener">WhatsApp us</a></li></ul></div></div>' +
      '<div class="foot-bottom"><span>\u00A9 ' + new Date().getFullYear() + ' Rehmat Developers. All rights reserved.</span><span>Made with care by Muhammad Waleed</span></div></div></footer>' +
      '<div class="fab"><a class="wa" href="' + wa('Hi Rehmat Developers! I have a question.') + '" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">' + i('whatsapp') + '</a><button class="top" id="to-top" aria-label="Back to top">' + i('arrow') + '</button></div>';
  }

  function cover(p, idx, big) {
    var inner = p.img ? '<img src="' + esc(p.img) + '" alt="' + esc(p.title ? 'Preview of ' + p.title : '') + '" loading="lazy">' : '<div class="pic">' + i(p.icon) + '</div><div class="sk"><b></b><b></b><b></b></div>';
    return '<div class="cover g' + (idx % 4) + (big ? ' ' + big : '') + '">' + inner + '</div>';
  }
  function serviceCard(s, full) {
    var feats = full ? '<ul class="feat">' + s.features.map(function (f) { return '<li>' + i('check') + '<span>' + esc(f) + '</span></li>'; }).join('') + '</ul>' : '';
    var link = full ? '<a class="link" href="contact.html?service=' + s.id + '">Request this service ' + i('arrow') + '</a>' : '<a class="link" href="services.html#' + s.id + '">Learn more ' + i('arrow') + '</a>';
    return '<article class="card service' + (full ? ' full' : '') + '" id="' + s.id + '"><div class="ico">' + i(s.icon) + '</div><h3>' + esc(s.title) + '</h3><p>' + esc(full ? s.desc : s.summary) + '</p>' + feats + link + '</article>';
  }
  function projectCard(p, idx) {
    return '<button type="button" class="card project" data-cat="' + p.cat + '" data-open="project:' + p.id + '" aria-label="View details: ' + esc(p.title) + '">' + cover(p, idx) +
      '<div class="body"><span class="cat">' + RD.cats[p.cat] + '</span><h3>' + esc(p.title) + '</h3><p>' + esc(p.desc) + '</p></div></button>';
  }
  function photo(m, cls) {
    return '<div class="ph"><img src="' + m.photo + '" alt="' + esc(m.name + ', ' + m.role) + '" loading="lazy" data-initials="' + m.initials + '" data-alt="https://rehmatdevelopers.github.io/rehmatdevelopers/' + m.photo + '" onerror="RD.imgFail(this)"></div>';
  }
  function teamCard(m) {
    return '<article class="card team-card">' + photo(m) + '<div class="body"><h3>' + esc(m.name) + '</h3><div class="role">' + esc(m.role) + (m.sub ? ' | ' + esc(m.sub) : '') + '</div><p>' + esc(m.bio) + '</p></div></article>';
  }
  function founderCard() {
    var m = RD.team[0];
    return '<article class="founder">' + photo(m) + '<div class="txt"><h2>' + esc(m.name) + '</h2><div class="role">Founder &amp; CEO | Frontend &amp; Backend Developer</div>' +
      RD.founder.paras.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') +
      '<a class="btn btn--primary" href="contact.html">Work with us ' + i('arrow') + '</a></div></article>';
  }
  function planCard(p) {
    return '<article class="card plan' + (p.popular ? ' pop' : '') + '">' + (p.popular ? '<span class="pop-tag">Most popular</span>' : '') +
      '<h3>' + esc(p.name) + '</h3><p class="blurb">' + esc(p.blurb) + '</p><div class="price">' + p.price + '</div><div class="per">One-time package price</div>' +
      '<ul class="feat">' + p.features.map(function (f) { return '<li>' + i('check') + '<span>' + esc(f) + '</span></li>'; }).join('') + '</ul>' +
      '<a class="btn ' + (p.popular ? 'btn--primary' : 'btn--ghost') + ' btn--block" href="contact.html?package=' + p.id + '">Get started</a></article>';
  }
  function quoteCard(r) {
    var ini = (r.name || '?').trim().split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join('').toUpperCase();
    return '<article class="card quote">' + stars(r.rating) + '<p>' + esc(r.text) + '</p>' + (r.local ? '<span class="tag-local">Saved on this device</span>' : '') +
      '<div class="who"><div class="av">' + esc(ini) + '</div><div><b>' + esc(r.name) + '</b><small>' + esc(r.business || 'Client') + '</small></div></div></article>';
  }
  function postCard(p) {
    return '<button type="button" class="card post" data-cat="' + esc(p.cat) + '" data-open="post:' + p.id + '" aria-label="Read: ' + esc(p.title) + '">' + cover(p, p.id.length, 'wide') +
      '<div class="body"><div class="meta"><span class="cat" style="margin:0">' + esc(p.cat) + '</span><span>' + i('calendar') + esc(p.date) + '</span></div><h3>' + esc(p.title) + '</h3><p>' + esc(p.excerpt) + '</p></div></button>';
  }
  function featuredPost(p) {
    return '<article class="feature-post">' + cover(p, 0, 'wide') + '<div class="body"><span class="cat">Featured</span><div class="meta"><span>' + i('calendar') + esc(p.date) + '</span><span>' + i('clock') + esc(p.read) + '</span><span>' + i('users') + esc(p.author) + '</span></div><h2>' + esc(p.title) + '</h2><p>' + esc(p.excerpt) + '</p><button class="btn btn--primary" style="margin-top:22px" data-open="post:' + p.id + '">Read the summary ' + i('arrow') + '</button></div></article>';
  }
  function stepCard(s) { return '<div class="step"><h3>' + esc(s.title) + '</h3><p>' + esc(s.desc) + '</p></div>'; }
  function iconCard(s) { return '<article class="card"><div class="ico">' + i(s.icon) + '</div><h3>' + esc(s.title) + '</h3><p>' + esc(s.desc) + '</p></article>'; }
  function industryCard(x) { return '<article class="card"><div class="ico">' + i(x[0]) + '</div><h3>' + esc(x[1]) + '</h3><p>' + esc(x[2]) + '</p></article>'; }
  function compareTable() {
    function cell(v) { return v === 1 ? i('check') + '<span class="sr" style="position:absolute;left:-999px">Included</span>' : v === 0 ? '<span class="dash" aria-label="Not included">\u2014</span>' : esc(v); }
    var rows = RD.compare.map(function (r) { return '<tr><th scope="row">' + esc(r[0]) + '</th><td>' + cell(r[1]) + '</td><td>' + cell(r[2]) + '</td><td>' + cell(r[3]) + '</td></tr>'; }).join('');
    return '<div class="table-wrap" tabindex="0" role="region" aria-label="Plan comparison table"><table><thead><tr><th scope="col">Feature</th><th scope="col">Starter</th><th scope="col">Professional</th><th scope="col">Enterprise</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
  }

  RD.imgFail = function (img) {
    var alt = img.getAttribute('data-alt');
    if (alt && !img.dataset.t) { img.dataset.t = 1; img.src = alt; return; }
    var p = img.parentElement, ini = img.getAttribute('data-initials') || '';
    img.remove(); p.insertAdjacentHTML('beforeend', '<div class="avatar" role="img" aria-label="' + esc(ini) + '">' + esc(ini) + '</div>');
  };
  RD.ui = {i: i, esc: esc, wa: wa, stars: stars, header: header, footer: footer, cover: cover, serviceCard: serviceCard, projectCard: projectCard, teamCard: teamCard, founderCard: founderCard, planCard: planCard, quoteCard: quoteCard, postCard: postCard, featuredPost: featuredPost, stepCard: stepCard, iconCard: iconCard, industryCard: industryCard, compareTable: compareTable};
})();
