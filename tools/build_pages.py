# Generates the 9 HTML pages from one shared template (run: python3 build_pages.py)
HEAD = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="theme-color" content="#101B35">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="website">
<link rel="icon" href="images/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div id="site-header"></div>
<noscript><div class="noscript">JavaScript is needed to show the navigation and page content. You can still reach us at rehmat.developers022@gmail.com or +92 328 4461097.</div></noscript>
<main id="main">
{body}
</main>
<div id="site-footer"></div>
<script src="assets/js/data.js"></script>
<script src="assets/js/components.js"></script>
<script src="assets/js/main.js"></script>
</body>
</html>
'''

def phero(h, p, crumb):
    return f'''<section class="page-hero"><div class="container">
<nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><span>{crumb}</span></nav>
<h1>{h}</h1><p>{p}</p></div></section>'''

def head(h, p):
    return f'<div class="section-head"><h2>{h}</h2><p>{p}</p></div>'

def cta(h, p, extra=''):
    return f'''<section class="section"><div class="container"><div class="cta"><div><h2>{h}</h2><p>{p}</p></div>
<div class="btns"><a class="btn btn--light" href="contact.html">Get a free quote</a><a class="btn btn--outline-light" href="https://wa.me/923284461097?text=Hi%20Rehmat%20Developers!" target="_blank" rel="noopener">WhatsApp us</a></div></div></div></section>'''

def fact(icon, h, p):
    return f'<div class="fact"><span data-icon="{icon}"></span><h4>{h}</h4><p>{p}</p></div>'

pages = {}

pages['index.html'] = ("Rehmat Developers | Transforming Ideas Into Digital Reality",
 "Rehmat Developers is a web development agency in Raja Jang, Kasur, Pakistan, building custom websites, web applications, e-commerce stores and digital experiences.",
 '''<section class="hero"><div class="container hero-grid">
<div>
<span class="badge"><i></i>Available for new projects</span>
<h1>Transforming ideas into digital reality.</h1>
<p>Rehmat Developers is a web development agency crafting fast, visually polished digital solutions that help your business stand out and win your audience.</p>
<div class="hero-cta"><a class="btn btn--primary" href="contact.html">Start your project</a><a class="btn btn--outline-light" href="portfolio.html">View our work</a></div>
<ul class="hero-points"><li data-i="check">Responsive on every device</li><li data-i="check">Milestone-based payments</li><li data-i="check">Live staging previews</li></ul>
</div>
<div class="hero-art"><img src="images/hero.svg" width="840" height="700" alt="Illustration of a business website on desktop and a banking app on mobile, designed and built by Rehmat Developers"></div>
</div></section>
<section class="strip"><div class="container"><strong>Technologies we work with</strong><div class="tags"><span class="tag">HTML5</span><span class="tag">CSS3</span><span class="tag">JavaScript</span><span class="tag">React.js</span><span class="tag">Next.js</span><span class="tag">Node.js</span><span class="tag">Python</span><span class="tag">MongoDB</span><span class="tag">WordPress</span><span class="tag">Figma</span><span class="tag">Tailwind CSS</span></div></div></section>
<section class="section"><div class="container split">
<div><h2 style="margin-bottom:18px">A web partner that stays close to your project</h2>
<p>Rehmat Developers helps businesses build a professional digital presence through modern websites, thoughtful design and practical web solutions. We are based in Raja Jang, Kasur, Pakistan, and work with startups, local businesses and growing brands around the world.</p>
<p>Founder &amp; CEO Muhammad Waleed stays directly involved in planning, development and client communication, so every project gets personal attention and a clear direction from first call to launch.</p>
<a class="btn btn--ghost center-cta" href="about.html">About our company</a></div>
<div class="facts">'''+fact('pin','Based in Pakistan','Raja Jang, Kasur, Punjab')+fact('shield','Clear process','Scope and milestones agreed in advance')+fact('eye','Live previews','Staging links before each phase')+fact('chat','Direct contact','Email and WhatsApp with the CEO')+'''</div></div></section>
<section class="section section--tint"><div class="container">
<div class="row-head">'''+head('Services built around your goals','Nine services covering everything from a first website to a full web application and the care it needs afterwards.')+'''<a class="btn btn--ghost" href="services.html">View all 9 services</a></div>
<div data-mount="services" data-limit="6"></div></div></section>
<section class="section"><div class="container">
<div class="row-head">'''+head('Recent work','A selection of websites, stores, applications and designs from our portfolio.')+'''<a class="btn btn--ghost" href="portfolio.html">See the full portfolio</a></div>
<div data-mount="projects" data-featured="1" data-limit="3"></div></div></section>
<section class="section section--tint"><div class="container"><div data-mount="founder"></div></div></section>
<section class="section"><div class="container">
<div class="row-head">'''+head('Meet the team','The people bringing custom web development and WordPress expertise to your project.')+'''<a class="btn btn--ghost" href="about.html#team">Meet the full team</a></div>
<div data-mount="team"></div></div></section>
<section class="section section--navy"><div class="container">'''+head('How we work','A clear, four-step workflow that takes your project from first conversation to launch and beyond.')+'''<div data-mount="process"></div></div></section>
<section class="section"><div class="container">
<div class="row-head">'''+head('What our clients say','Genuine feedback from the people we have worked with.')+'''<a class="btn btn--ghost" href="reviews.html">Read all reviews</a></div>
<div data-mount="reviews" data-limit="3"></div></div></section>
'''+cta('Ready to build something extraordinary?','Tell us about your project and we will help you turn the idea into a polished, working website.'))

pages['about.html'] = ("About Us | Rehmat Developers",
 "Meet Muhammad Waleed, Founder & CEO of Rehmat Developers, and learn about our story, mission, vision, values and team.",
 phero('Our story','Rehmat Developers helps businesses build a professional digital presence through modern websites, thoughtful design and practical web solutions.','About Us')+'''
<section class="section"><div class="container split">
<div><h2 style="margin-bottom:18px">Built on honest communication and quality work</h2>
<p>Rehmat Developers was founded by Muhammad Waleed with a passion for technology, creativity and meaningful digital experiences. The company is based in Raja Jang, Kasur, Punjab, Pakistan, and serves clients locally and internationally.</p>
<p>The name Rehmat honors family roots, while day-to-day work and client communication are handled directly by Muhammad Waleed and the core team. The aim is simple: combine modern design, reliable functionality and practical business value in every project.</p></div>
<div><img class="about-img" src="images/about.svg" width="720" height="440" loading="lazy" alt="Code editor and website preview representing how the team designs and builds client websites"><div class="facts" style="margin-top:16px">'''+fact('shield','Clear process','Milestones agreed in advance')+fact('eye','Progress previews','Shared at agreed stages')+fact('refresh','Scoped revisions','Agreed before work begins')+fact('pin','Based in Pakistan','Raja Jang, Kasur')+'''</div></div></div></section>
<section class="section section--tint"><div class="container">'''+head('Mission and vision','The principles behind how we plan, build and support every project.')+'''
<div class="grid g2">
<article class="card"><div class="ico" data-icon="target"></div><h3>Our mission</h3><p>Our mission is to help businesses build a strong digital presence through modern, user-friendly and reliable web solutions. We aim to understand each client\u2019s needs and turn their ideas into practical digital experiences.</p></article>
<article class="card"><div class="ico" data-icon="compass"></div><h3>Our vision</h3><p>Our vision is to become a trusted web development partner by delivering thoughtful digital solutions, maintaining honest relationships and continuously improving the way we work.</p></article></div></div></section>
<section class="section"><div class="container"><div data-mount="founder"></div></div></section>
<section class="section section--tint" id="team"><div class="container">'''+head('Meet our team','A focused team bringing custom web development and WordPress expertise together.')+'''<div data-mount="team"></div>
<p class="team-note">We introduce our team members individually and keep this page accurate. As the team grows, new members will appear here.</p></div></section>
<section class="section"><div class="container">'''+head('Our values','Why clients choose to work with Rehmat Developers.')+'''<div data-mount="values"></div>
<div class="note"><span data-icon="shield"></span><p><b>Project terms.</b> Before work begins, the written proposal or agreement confirms the scope, deliverables, payment schedule, revision limits, expected timeline and any preview or handover arrangements. Exact terms vary by project, so please review and agree to them before making a payment.</p></div></div></section>
'''+cta('Ready to start your project?','Work with a clearly planned process, transparent communication and a website that represents your business professionally.'))

pages['services.html'] = ("Services | Rehmat Developers",
 "Nine web services from Rehmat Developers: custom web development, full-stack apps, e-commerce, UI/UX, landing pages, responsive design, WordPress, SEO and maintenance.",
 phero('Our services','Comprehensive digital solutions, from a first website to a full web application and the support it needs afterwards.','Services')+'''
<section class="section"><div class="container">'''+head('End-to-end digital solutions','Every service is tailored to your goals and budget. Pick one, or combine several in a single project.')+'''<div data-mount="services" data-variant="full"></div></div></section>
<section class="section section--navy"><div class="container">'''+head('How we work','A transparent workflow from the first conversation to launch and ongoing support.')+'''<div data-mount="process"></div></div></section>
<section class="section section--tint"><div class="container">'''+head('Technologies we use','We choose the stack that fits your project, not the other way round.')+'''<div data-mount="tech"></div></div></section>
'''+cta('Not sure which service you need?','Get in touch for a free consultation. We will look at your business needs and recommend the right solution, with no pressure.'))

pages['portfolio.html'] = ("Portfolio | Rehmat Developers",
 "Browse websites, web apps, e-commerce stores, UI/UX designs and landing pages by Rehmat Developers. Filter by category and open any project for details.",
 phero('Our portfolio','Websites, applications, stores and designs we have built for businesses across different industries.','Portfolio')+'''
<section class="section"><div class="container">'''+head('Projects','Filter by category, then open any project to see what it includes.')+'''
<div class="toolbar"><div class="filters" id="project-filters" role="group" aria-label="Filter projects by category"></div><span class="count" id="project-count" aria-live="polite"></span></div>
<div data-mount="projects" id="project-grid"></div>
<div class="empty" id="project-empty" hidden><h3>No projects in this category yet</h3><p>Choose another category, or tell us about the project you have in mind.</p><a class="btn btn--primary" href="contact.html">Start your project</a></div></div></section>
<section class="section section--tint"><div class="container">'''+head('Industries we serve','Our work spans several industries, which helps us understand the challenges behind each brief.')+'''<div data-mount="industries"></div></div></section>
'''+cta('Ready to be our next success story?','Share your vision and we will turn it into a website or application you are proud to show.'))

pages['blog.html'] = ("Blog | Rehmat Developers",
 "Articles on web development, UI/UX design, SEO and business growth from the Rehmat Developers team.",
 phero('Our blog','Practical insights on web development, design, SEO and growing your business online.','Blog')+'''
<section class="section"><div class="container">
<div data-mount="featuredPost"></div>
<div class="toolbar mt"><div class="filters" id="post-filters" role="group" aria-label="Filter articles by category"></div>
<div class="search" style="width:min(320px,100%)"><span data-icon="search"></span><label class="sr" for="post-search" style="position:absolute;left:-999px">Search articles</label><input id="post-search" type="search" placeholder="Search articles" autocomplete="off"></div></div>
<p class="count" id="post-count" style="margin-bottom:20px" aria-live="polite"></p>
<div data-mount="posts" id="post-grid"></div>
<div class="empty" id="post-empty" hidden><h3>No articles match your search</h3><p>Try a different keyword or category.</p></div></div></section>
<section class="section section--tint"><div class="container"><div class="newsletter">
<div><h2>Get new articles by email</h2><p>Practical web development tips, design ideas and honest business advice. Enter your email and we will add you to the list.</p></div>
<div><form id="nl-form" class="nl-form" novalidate><label class="sr" for="nl-email" style="position:absolute;left:-999px">Email address</label><input id="nl-email" type="email" placeholder="you@example.com" autocomplete="email"><button class="btn btn--primary" type="submit">Subscribe</button></form>
<div class="nl-err" id="nl-err" role="alert"></div><div class="nl-ok" id="nl-ok" role="status"></div></div></div></div></section>''')

pages['pricing.html'] = ("Pricing | Rehmat Developers",
 "Transparent web development pricing: Starter $299, Professional $799 and Enterprise $2,499, with milestone payments and a Quality & Work Protection Policy.",
 phero('Simple, transparent pricing','No hidden fees and no surprises. Choose a package that fits your project, protected by our Quality &amp; Work Protection Policy.','Pricing')+'''
<section class="section"><div class="container">'''+head('Choose your plan','All plans include custom UI/UX design, custom code development, mobile responsiveness and milestone-based delivery.')+'''
<div data-mount="plans"></div>
<div class="note"><span data-icon="globe"></span><p><b>Domain and hosting.</b> Our packages cover website design, coding, testing and deployment. Domain name and hosting fees are separate and paid directly to the providers. You can bring your own, or we will help you purchase them for free under your own account and name, so you keep full ownership of your website assets.</p></div></div></section>
<section class="section section--tint"><div class="container">'''+head('Plan comparison','Every feature, side by side.')+'''<div data-mount="compare"></div></div></section>
<section class="section"><div class="container">'''+head('Quality &amp; Work Protection Policy','A milestone system keeps you in control of direction, quality and funds from kick-off to deployment. Post-delivery cash refunds are not offered.')+'''
<div data-mount="policy"></div>
<h3 style="margin:44px 0 16px">Fair, structured revisions</h3>
<div class="rev"><div class="card"><b>2 rounds</b><p>Starter</p></div><div class="card"><b>3 rounds</b><p>Professional</p></div><div class="card"><b>4 rounds</b><p>Enterprise</p></div></div>
<ul class="feat" style="max-width:760px">
<li><span data-icon="check"></span><span><b>Within approved scope:</b> refinements such as layout polish, content updates, spacing, colors and typography.</span></li>
<li><span data-icon="check"></span><span><b>Quoted separately:</b> major redesigns, new features, extra pages or anything outside the agreed scope.</span></li>
<li><span data-icon="check"></span><span><b>Consolidated feedback:</b> one combined feedback list per round keeps changes organized and faster to deliver.</span></li>
<li><span data-icon="check"></span><span><b>Friendly and transparent:</b> if you are unsure whether a request fits a revision round, just ask before any extra work begins.</span></li></ul></div></section>
<section class="section section--tint"><div class="container"><div class="cta"><div><h2>Need a custom proposal?</h2><p>For complex web applications or unique scopes, CEO Muhammad Waleed will personally prepare a tailored proposal.</p></div>
<div class="btns"><a class="btn btn--light" href="contact.html?package=custom">Request a custom quote</a><a class="btn btn--outline-light" href="https://wa.me/923284461097?text=Hi%20Rehmat%20Developers!%20I%20want%20to%20discuss%20a%20custom%20web%20project." target="_blank" rel="noopener">WhatsApp us</a></div></div></div></section>''')

pages['faq.html'] = ("FAQ | Rehmat Developers",
 "Answers about Rehmat Developers' services, pricing, payments, revisions, timelines, support and technology. Search or browse by category.",
 phero('Frequently asked questions','Everything you need to know about working with Rehmat Developers: pricing, process, timelines, support and more.','FAQ')+'''
<section class="section"><div class="container">
<div class="faq-tools"><div class="search"><span data-icon="search"></span><label class="sr" for="faq-search" style="position:absolute;left:-999px">Search questions</label><input id="faq-search" type="search" placeholder="Search questions, e.g. refund or revisions" autocomplete="off"></div>
<div class="filters" id="faq-filters" role="group" aria-label="Filter questions by category" style="margin:0"></div></div>
<div class="empty" id="faq-empty" hidden><h3>No questions match your search</h3><p>Try different keywords, or ask us directly and we will answer.</p><div class="btn-row"><button class="btn btn--ghost" id="faq-clear" type="button">Clear search</button><a class="btn btn--primary" href="contact.html">Contact us</a></div></div>
<div id="faq-root"></div></div></section>
'''+cta('Still have questions?','Ask us anything about your project, budget or timeline. We are happy to chat, with no obligation.'))

pages['reviews.html'] = ("Client Reviews | Rehmat Developers",
 "Read genuine client reviews of Rehmat Developers and share your own experience working with Muhammad Waleed and the team.",
 phero('Client reviews','Genuine feedback from people who worked with Rehmat Developers. We never publish invented testimonials.','Reviews')+'''
<section class="section"><div class="container reviews-grid">
<div><div class="card form-card" id="review-form-card"><h2 style="font-size:1.5rem;margin-bottom:8px">Share your experience</h2><p style="color:var(--muted);margin-bottom:22px">Worked with us? Tell others how it went. Your review appears below on this device, and you can send it to us to be considered for publication.</p>
<form id="review-form" novalidate>
<div class="two"><div class="field"><label for="r-name">Full name <i>*</i></label><input id="r-name" name="name" autocomplete="name" data-v="required" data-min="2"><span class="msg" role="alert"></span></div>
<div class="field"><label for="r-business">Business or service</label><input id="r-business" name="business"></div></div>
<div class="field"><label for="r-email">Email <small style="font-weight:400;color:var(--muted)">(optional, never shown)</small></label><input id="r-email" type="email" autocomplete="email" data-v="email"><span class="msg" role="alert"></span></div>
<div class="field"><label id="rate-l">Star rating <i>*</i></label><div class="rating" role="radiogroup" aria-labelledby="rate-l">
<input type="radio" id="s5" name="rating" value="5"><label for="s5" title="5 stars"><span data-icon="star"></span><span class="sr" style="position:absolute;left:-999px">5 stars</span></label>
<input type="radio" id="s4" name="rating" value="4"><label for="s4" title="4 stars"><span data-icon="star"></span><span class="sr" style="position:absolute;left:-999px">4 stars</span></label>
<input type="radio" id="s3" name="rating" value="3"><label for="s3" title="3 stars"><span data-icon="star"></span><span class="sr" style="position:absolute;left:-999px">3 stars</span></label>
<input type="radio" id="s2" name="rating" value="2"><label for="s2" title="2 stars"><span data-icon="star"></span><span class="sr" style="position:absolute;left:-999px">2 stars</span></label>
<input type="radio" id="s1" name="rating" value="1"><label for="s1" title="1 star"><span data-icon="star"></span><span class="sr" style="position:absolute;left:-999px">1 star</span></label></div><span class="msg" role="alert"></span></div>
<div class="field"><label for="r-text">Your review <i>*</i></label><textarea id="r-text" data-v="required" data-min="20" placeholder="What did you work on together, and how was the experience?"></textarea><span class="msg" role="alert"></span></div>
<button class="btn btn--primary" type="submit">Submit review</button><div class="alert" role="status"></div></form></div></div>
<div><h2 style="font-size:1.5rem;margin-bottom:20px">What clients say</h2><div data-mount="reviews" id="review-list" data-cols="1"></div></div></div></section>''')

OPTIONS = '''<option value="">Select a plan or service</option>
<optgroup label="Packages"><option value="starter">Starter Web Plan ($299)</option><option value="professional">Professional Plan ($799)</option><option value="enterprise">Enterprise / E-Commerce ($2,499)</option><option value="custom">Custom project</option></optgroup>
<optgroup label="Services"><option value="custom-web">Custom Web Development</option><option value="full-stack">Full-Stack Web Applications</option><option value="ecommerce">E-Commerce Solutions</option><option value="ui-ux">UI/UX Design</option><option value="landing-pages">Landing Page Design</option><option value="responsive">Responsive &amp; Mobile Design</option><option value="wordpress">WordPress Development</option><option value="seo">SEO &amp; Digital Marketing</option><option value="maintenance">Maintenance &amp; Support</option></optgroup>'''
pages['contact.html'] = ("Contact | Rehmat Developers",
 "Contact Rehmat Developers in Raja Jang, Kasur, Pakistan. Send an inquiry, email rehmat.developers022@gmail.com or message +92 328 4461097 on WhatsApp.",
 phero('Get in touch','Have a project in mind, need a custom quote or just want to say hello? Send a message or reach us directly by WhatsApp or email.','Contact')+'''
<section class="section"><div class="container contact-grid">
<div><h2 style="margin-bottom:12px">Let\u2019s talk about your project</h2>
<p style="color:var(--muted);margin-bottom:24px">Whether you are starting from scratch or refreshing an existing website, CEO Muhammad Waleed and the team are here to guide you.</p>
<div class="contact-list">
<div class="contact-item"><div class="ico" data-icon="pin"></div><div><h3>Location</h3><a href="https://maps.app.goo.gl/6MBJ13cBZTisaQM1A" target="_blank" rel="noopener">Raja Jang, Kasur, Punjab, Pakistan</a></div></div>
<div class="contact-item"><div class="ico" data-icon="mail"></div><div><h3>Email</h3><a href="mailto:rehmat.developers022@gmail.com">rehmat.developers022@gmail.com</a></div></div>
<div class="contact-item"><div class="ico" data-icon="phone"></div><div><h3>Phone and WhatsApp</h3><a href="tel:+923284461097">+92 (328) 446-1097</a></div></div>
<div class="contact-item"><div class="ico" data-icon="clock"></div><div><h3>Response time</h3><p>We aim to reply within 24 hours.</p></div></div></div>
<div class="btn-row" style="margin-top:20px"><a class="btn btn--wa" href="https://wa.me/923284461097?text=Hi%20Rehmat%20Developers!%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener"><span data-icon="whatsapp"></span> Chat on WhatsApp</a><a class="btn btn--ghost" href="mailto:rehmat.developers022@gmail.com"><span data-icon="mail"></span> Send an email</a></div>
<div class="map"><iframe title="Map of Raja Jang, Kasur, Punjab, Pakistan" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Raja+Jang,+Kasur,+Punjab,+Pakistan&amp;output=embed"></iframe></div></div>
<div class="card form-card"><h2 style="font-size:1.5rem;margin-bottom:8px">Send an inquiry</h2><p style="color:var(--muted);margin-bottom:22px">Fill in the form and send it by email or WhatsApp. Fields marked * are required.</p>
<form id="contact-form" novalidate>
<div class="two"><div class="field"><label for="name">Your name <i>*</i></label><input id="name" autocomplete="name" data-v="required" data-min="2"><span class="msg" role="alert"></span></div>
<div class="field"><label for="email">Email address <i>*</i></label><input id="email" type="email" autocomplete="email" data-v="required,email"><span class="msg" role="alert"></span></div></div>
<div class="two"><div class="field"><label for="phone">Phone / WhatsApp</label><input id="phone" type="tel" autocomplete="tel" data-v="phone"><span class="msg" role="alert"></span></div>
<div class="field"><label for="service">Interested in <i>*</i></label><select id="service" data-v="required">'''+OPTIONS+'''</select><span class="msg" role="alert"></span></div></div>
<div class="field"><label for="message">Project details <i>*</i></label><textarea id="message" data-v="required" data-min="15" placeholder="Tell us about your business, goals and any deadlines."></textarea><span class="msg" role="alert"></span></div>
<div class="btn-row"><button class="btn btn--primary" type="submit" data-via="email"><span data-icon="send"></span> Send by email</button><button class="btn btn--wa" type="submit" data-via="wa"><span data-icon="whatsapp"></span> Send on WhatsApp</button></div>
<div class="alert" role="status"></div></form></div></div></section>''')

for fn,(t,d,b) in pages.items():
    open(fn,'w',encoding='utf-8').write(HEAD.format(title=t,desc=d,body=b))
print('built', len(pages))
