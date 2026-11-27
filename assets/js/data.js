/* Rehmat Developers - central content. Edit here; every page updates. */
window.RD = window.RD || {};
RD.site = {
  name: "Rehmat Developers",
  tagline: "Transforming ideas into powerful digital experiences.",
  email: "rehmat.developers022@gmail.com",
  phoneDisplay: "+92 (328) 446-1097",
  phoneTel: "+923284461097",
  wa: "923284461097",
  address: "Raja Jang, Kasur, Punjab, Pakistan",
  map: "https://maps.app.goo.gl/6MBJ13cBZTisaQM1A",
  mapEmbed: "https://www.google.com/maps?q=Raja+Jang,+Kasur,+Punjab,+Pakistan&output=embed",
  github: "https://github.com/rehmatdevelopers"
};

RD.nav = [
  ["Home","index.html"],["About","about.html"],["Services","services.html"],
  ["Portfolio","portfolio.html"],["Blog","blog.html"],["Pricing","pricing.html"],
  ["FAQ","faq.html"],["Reviews","reviews.html"],["Contact","contact.html"]
];

RD.services = [
 {id:"custom-web",icon:"globe",title:"Custom Web Development",
  summary:"Tailor-made websites built from scratch with clean, hand-written code.",
  desc:"We build websites from the ground up using modern web technologies. No templates and no shortcuts: just clean, hand-crafted code that delivers fast performance, polished visuals and an experience that keeps visitors coming back. Whether you need a corporate website, a personal portfolio or a multi-page platform, the result is as unique as your brand.",
  features:["Custom-coded solutions","Responsive, mobile-first design","SEO-friendly architecture","Optimized for fast loading","Cross-browser compatibility","Accessibility best practices"]},
 {id:"full-stack",icon:"layers",title:"Full-Stack Web Applications",
  summary:"Dynamic frontends, solid backends and secure database integrations.",
  desc:"Need more than a website? Our full-stack service delivers scalable web applications with dynamic frontends, robust backends and secure database integrations. From project management tools and real-time chat to custom dashboards and CRMs, we build digital products that solve real business problems and can grow with your users.",
  features:["React.js and Next.js frontends","Node.js, Python or PHP backends","MongoDB, MySQL or PostgreSQL databases","REST and GraphQL API development","Real-time features with WebSockets","User authentication and authorization","Cloud deployment (AWS or Vercel)"]},
 {id:"ecommerce",icon:"cart",title:"E-Commerce Solutions",
  summary:"Online stores designed to turn visitors into paying customers.",
  desc:"Launch your online store with confidence. We build feature-rich e-commerce platforms, from product catalogs and shopping carts to secure payments and order management, with every step of the buying journey tuned for conversion. We work with Shopify, WooCommerce and custom-built solutions to match your requirements and budget.",
  features:["Custom online store design","Payment gateways (Stripe, PayPal, JazzCash)","Inventory and order management","Multi-currency and multi-language support","Shipping and tax calculations","Customer reviews and wishlists","Mobile-optimized checkout flow"]},
 {id:"ui-ux",icon:"pen",title:"UI/UX Design",
  summary:"Interfaces that look polished and feel effortless to use.",
  desc:"Great design is the foundation of every successful digital product. We combine visual quality with user research to create interfaces that are attractive, intuitive and easy to navigate. We deliver wireframes, interactive prototypes and complete design systems so every screen and touchpoint stays consistent.",
  features:["User research and personas","Wireframing and information architecture","Interactive prototyping in Figma","Design system creation","Usability testing and iteration","Brand identity and visual guidelines"]},
 {id:"landing-pages",icon:"rocket",title:"Landing Page Design",
  summary:"Focused pages built to capture leads and drive action.",
  desc:"First impressions matter, and a well-built landing page can be the difference between a visitor and a customer. We create landing pages with clear messaging, strong visuals and well-placed calls to action. Whether you are launching a product, running a campaign or collecting leads, the page is built to guide visitors to one outcome.",
  features:["Conversion-focused layout","A/B-test-ready structure","Persuasive copywriting support","Fast-loading pages","Analytics and tracking integration","Lead capture forms and CTAs"]},
 {id:"responsive",icon:"phone-ui",title:"Responsive & Mobile Design",
  summary:"Layouts that work smoothly on phones, tablets and desktops.",
  desc:"A large share of web traffic now comes from mobile devices, so a mobile-friendly website is essential. We make your site look and perform well on every screen, from smartphones and tablets to laptops and wide monitors, using a mobile-first approach so the majority of your visitors get the best experience.",
  features:["Mobile-first development","Touch-friendly interactions","Adaptive images and media","Fluid grid layouts","Testing across devices","Progressive Web App ready"]},
 {id:"wordpress",icon:"layout",title:"WordPress Development",
  summary:"Custom themes, plugins and stores you can manage yourself.",
  desc:"WordPress is flexible, scalable and easy to manage. We build custom themes and plugins tailored to your brand, along with WooCommerce stores, membership sites and blog platforms. Our WordPress builds are optimized for speed, security and SEO, giving you control over your content without writing code.",
  features:["Custom theme development","Plugin development and integration","WooCommerce store setup","Page builder setup (Elementor, Divi)","Speed and security optimization","Migration from other platforms"]},
 {id:"seo",icon:"trend",title:"SEO & Digital Marketing",
  summary:"Technical SEO and content strategy that helps customers find you.",
  desc:"A beautiful website only works if people can find it. We apply technical SEO best practices during development and offer ongoing optimization, including keyword research, on-page SEO, content strategy and performance monitoring, to help your site earn organic traffic that converts.",
  features:["Technical SEO audit and implementation","Keyword research and strategy","On-page and off-page SEO","Google Analytics and Search Console setup","Local SEO (Google Business Profile)","Content strategy and blog optimization","Regular performance reports"]},
 {id:"maintenance",icon:"wrench",title:"Maintenance & Support",
  summary:"Updates, security and fixes so your site stays healthy.",
  desc:"Your website needs regular care to stay secure, fast and up to date. Our maintenance and support plans cover updates, security checks, performance optimization, bug fixes and content changes. Think of us as your in-house tech team, reachable on WhatsApp and email without the overhead of a full-time hire.",
  features:["Security patches and updates","Regular backups","Uptime and health checks","Bug fixes and troubleshooting","Content and image updates","Performance optimization","Priority support via WhatsApp"]}
];

RD.tech = ["HTML5","CSS3","JavaScript","TypeScript","React.js","Next.js","Vue.js","Node.js","Express.js","Python","Django","PHP / Laravel","MongoDB","MySQL","PostgreSQL","Firebase","WordPress","WooCommerce","Shopify","Tailwind CSS","Bootstrap","Figma","Git / GitHub","REST APIs","GraphQL","Stripe / PayPal","Google Analytics"];

RD.cats = {website:"Website",ecommerce:"E-Commerce",webapp:"Web App",uiux:"UI/UX Design",landing:"Landing Page"};
RD.projects = [
 {id:"khan",featured:true,title:"Khan Enterprises",cat:"website",icon:"building",desc:"A modern corporate website with CMS integration, a blog and lead generation forms, built with Next.js and a headless CMS for performance.",points:["Corporate website","CMS integration","Blog","Lead generation forms","Next.js with headless CMS"]},
 {id:"stylehub",featured:true,title:"StyleHub Fashion Store",cat:"ecommerce",icon:"bag",desc:"A full-featured online fashion store with a payment gateway, inventory management, wishlist and customer reviews.",points:["Payment gateway","Inventory management","Wishlist","Customer reviews"]},
 {id:"taskflow",featured:true,title:"TaskFlow Dashboard",cat:"webapp",icon:"chart-bar",desc:"A full-stack project management application with real-time collaboration, team chat, Kanban boards and an analytics dashboard.",points:["Real-time collaboration","Team chat","Kanban boards","Analytics dashboard"]},
 {id:"finbank",featured:true,title:"FinBank Mobile App",cat:"uiux",icon:"card",desc:"Complete UI/UX design for a modern mobile banking application, with a clean, intuitive interface focused on security and user trust.",points:["Mobile banking UI","Intuitive navigation","Security-first interface"]},
 {id:"premier",title:"Premier Real Estate",cat:"website",icon:"home",desc:"A property listing platform with advanced search and filtering, map integration, virtual tours and agent profiles in a responsive design.",points:["Advanced search and filters","Map integration","Virtual tours","Agent profiles"]},
 {id:"analytics",title:"Analytics Pro Dashboard",cat:"webapp",icon:"chart",desc:"An interactive data visualization dashboard with real-time charts, custom reports and multi-user support, built with React and D3.js.",points:["Real-time charts","Custom reports","Multi-user support","React and D3.js"]},
 {id:"saas",title:"SaaS Product Launch",cat:"landing",icon:"rocket",desc:"A landing page for a SaaS startup launch, built around persuasive copy and smooth animations.",points:["Persuasive copy","Smooth animations","Lead capture"]},
 {id:"foodexpress",title:"FoodExpress Delivery",cat:"ecommerce",icon:"food",desc:"A food delivery platform with restaurant listings, menu management, order tracking and payment integration (JazzCash, EasyPaisa).",points:["Restaurant listings","Menu management","Order tracking","JazzCash and EasyPaisa payments"]},
 {id:"edulearn",title:"EduLearn Platform",cat:"uiux",icon:"cap",desc:"UI/UX design for an online learning platform with a course catalog, video lessons, quizzes and student progress tracking.",points:["Course catalog","Video lessons","Quizzes","Progress tracking"]},
 {id:"medicare",title:"MediCare Clinic",cat:"website",icon:"plus",desc:"A professional medical clinic website with appointment booking, doctor profiles, a services showcase and patient portal integration.",points:["Appointment booking","Doctor profiles","Services showcase","Patient portal integration"]},
 {id:"fitlife",title:"FitLife Gym Membership",cat:"landing",icon:"dumbbell",desc:"An energetic landing page for a gym membership campaign, featuring a video background, pricing plans, trainer profiles and a signup form.",points:["Video background","Pricing plans","Trainer profiles","Signup form"]},
 {id:"chatsphere",title:"ChatSphere Messenger",cat:"webapp",icon:"chat",desc:"A real-time chat application with group messaging, file sharing and voice notes, built with Socket.io and Node.js.",points:["Group messaging","File sharing","Voice notes","Socket.io and Node.js"]}
];

RD.industries = [
 ["building","Corporate","Business websites that build credibility, present services and generate leads."],
 ["bag","Retail & Fashion","Online stores with smooth shopping experiences and secure checkout."],
 ["plus","Healthcare","Clinic websites with appointment booking and doctor profiles."],
 ["cap","Education","Course platforms and websites for schools and online academies."],
 ["home","Real Estate","Listing platforms with search, maps and agent profiles."],
 ["food","Restaurants","Online ordering, menu management and delivery platforms."],
 ["card","Finance & Banking","Dashboards and interfaces designed around security and trust."],
 ["dumbbell","Fitness & Wellness","Gym websites, membership pages and coaching platforms."],
 ["rocket","Startups & SaaS","Launch-ready sites, MVPs and conversion-focused landing pages."]
];

RD.team = [
 {name:"Muhammad Waleed",role:"Founder & CEO",sub:"Frontend & Backend Developer",photo:"images/waleed.jpg",initials:"MW",
  bio:"Leads Rehmat Developers and builds responsive, functional websites through custom frontend and backend development."},
 {name:"Muhammad Ahsan Jameel",role:"WordPress Website Development Expert",sub:"",photo:"images/ahsan.png",initials:"AJ",
  bio:"Specializes in creating, customizing and managing professional WordPress websites tailored to business needs."}
];
RD.founder = {
  paras:[
   "Muhammad Waleed founded Rehmat Developers with a passion for technology, creativity and building meaningful digital experiences. His focus is on delivering solutions that combine modern design, reliable functionality and practical business value.",
   "By staying directly involved in project planning, development and client communication, he gives every project personal attention and a clear direction.",
   "His vision is to build lasting client relationships through honest communication, quality work and a commitment to continuous improvement."
  ]
};

RD.process = [
 {icon:"chat",title:"Discovery & Consultation",desc:"We talk through your business, goals, audience and requirements on a call or WhatsApp chat, then document the scope so everyone starts aligned."},
 {icon:"pen",title:"Strategy & Design",desc:"We plan the structure and design the look and feel, sharing previews for your feedback and refining until the direction is approved."},
 {icon:"code",title:"Development & Testing",desc:"We build with clean, maintainable code and share live staging previews, testing across devices, browsers and screen sizes as we go."},
 {icon:"rocket",title:"Launch & Support",desc:"After your final approval we deploy the site, handle SSL and go-live checks, and support you through the free support window in your plan."}
];

RD.values = [
 {icon:"shield",title:"Clear Project Process",desc:"We agree on scope, deliverables, payment milestones and revision rounds before development begins. Previews are shared at agreed stages."},
 {icon:"zap",title:"Strong Performance",desc:"Clean code, optimized images and efficient assets help your site load quickly and run smoothly across devices."},
 {icon:"pen",title:"Modern Design",desc:"Clean layouts, thoughtful UI/UX and purposeful motion give your business a professional look that supports your content."},
 {icon:"phone-ui",title:"Responsive First",desc:"Every site is built to work on mobile phones, tablets and desktop screens, wherever your customers are."},
 {icon:"chat",title:"Direct Communication",desc:"CEO Muhammad Waleed stays involved in project communication. Reach us by email or WhatsApp for progress, questions and feedback."},
 {icon:"code",title:"Maintainable Code",desc:"An organized structure that can be extended later with new pages, features and content as your business grows."}
];

RD.plans = [
 {id:"starter",name:"Starter Web Plan",price:"$299",blurb:"Ideal for startups, personal brands and high-converting landing pages.",
  features:["Up to 5 custom pages","Bespoke responsive layout","Contact and inquiry form","Essential on-page SEO","Instant WhatsApp widget","2 revision rounds","30 days free support","Secure milestone payments"]},
 {id:"professional",name:"Professional Plan",price:"$799",popular:true,blurb:"For growing businesses that need a multi-page corporate web platform.",
  features:["Up to 10 custom pages","Premium custom UI/UX design","Interactive animations","Blog / portfolio engine","Advanced SEO and speed tuning","Content-management ready","3 revision rounds","60 days free support","Live staging preview links"]},
 {id:"enterprise",name:"Enterprise / E-Commerce",price:"$2,499",blurb:"Online stores, custom web apps and complex business systems. Pages and products are set by the agreed project scope.",
  features:["Pages and products based on agreed scope","Complete e-commerce storefront","Custom payment gateway setup","Admin dashboard and inventory","SEO and analytics integration","Custom API integrations","4 revision rounds","90 days priority support","Priority development queue"]}
];
RD.compare = [
 ["Package price","$299","$799","$2,499"],
 ["Number of pages","Up to 5","Up to 10","Based on agreed project scope"],
 ["Revision rounds","2 rounds","3 rounds","4 rounds"],
 ["Domain & hosting fee","Client-owned (separate)","Client-owned (separate)","Client-owned (separate)"],
 ["Custom UI/UX design","Standard custom","Bespoke premium","Enterprise grade"],
 ["E-commerce & payments",0,0,"Full setup"],
 ["Admin / content dashboard",0,"Basic CMS","Custom admin"],
 ["Blog / portfolio engine",0,1,1],
 ["SEO & performance","On-page basic","Advanced speed + SEO","Full suite + analytics"],
 ["Complimentary support","30 days","60 days","90 days priority"],
 ["Milestone payments",1,1,1],
 ["Live staging links",1,1,1]
];
RD.policy = [
 {icon:"card",title:"Milestone Payments",desc:"Payments are tied to approved deliverables, so you never pay everything upfront."},
 {icon:"eye",title:"Live Staging Previews",desc:"Review your site on a private staging link before authorizing the next phase."},
 {icon:"refresh",title:"Structured Revisions",desc:"A fixed number of revision rounds per package during active development."},
 {icon:"check",title:"Approval Control",desc:"Work moves forward only when you give approval on each phase."}
];

RD.posts = [
 {id:"high-performance",featured:true,title:"The Complete Guide to Building a High-Performance Website",cat:"Web Development",date:"February 2026",read:"2 min read",author:"Muhammad Waleed",icon:"rocket",
  excerpt:"In today's competitive digital landscape, having a website is no longer enough. From optimizing Core Web Vitals to ensuring pristine mobile responsiveness, discover the foundational engineering practices required to build web applications that rank well and load instantly."},
 {id:"responsive-design",title:"Why Responsive Web Design Is No Longer Optional",cat:"Web Development",date:"February 2026",icon:"phone-ui",excerpt:"Many visitors browse on phones, so responsive design is essential for a usable business website."},
 {id:"color-psychology",title:"The Psychology of Color in Web Design",cat:"UI/UX Design",date:"January 2026",icon:"pen",excerpt:"Color is a powerful tool capable of influencing user emotions, maintaining brand consistency and guiding navigation decisions."},
 {id:"on-page-seo",title:"On-Page SEO: 25 Actionable Steps to Improve Search Rankings",cat:"SEO",date:"February 2026",icon:"search",excerpt:"On-page SEO helps visitors and search engines understand what each page covers. A checklist of 25 actionable on-page SEO steps."},
 {id:"revenue-growth",title:"How a Professional Website Drives Revenue Growth",cat:"Business",date:"December 2025",icon:"trend",excerpt:"Many see their website as a digital business card. Learn how modern web engineering turns your site into a trustworthy lead generation tool."},
 {id:"github-pages",title:"Guide: Deploying Your Static Website on GitHub Pages",cat:"Tutorials",date:"December 2025",icon:"code",excerpt:"GitHub Pages offers hosting for static websites at no cost on supported plans. A step-by-step tutorial to deploy your website with SSL included."},
 {id:"web-security",title:"Web Security Fundamentals Every Business Must Understand",cat:"Web Development",date:"November 2025",icon:"shield",excerpt:"Digital security is more critical than ever. Learn the essential protocols, from HTTPS to Content Security Policies, that help keep your website safe."},
 {id:"micro-interactions",title:"Micro-Interactions: Enhancing User Experiences",cat:"UI/UX Design",date:"November 2025",icon:"zap",excerpt:"Small animation details and feedback moments can elevate user engagement and brand perception on modern digital platforms."},
 {id:"voice-search",title:"Voice Search Optimization: Preparing for Conversational SEO",cat:"SEO",date:"October 2025",icon:"chat",excerpt:"As people use voice assistants and conversational searches, clear answers make your content easier to understand. Learn to structure content for natural language queries."},
 {id:"dev-partner",title:"Choosing a Web Development Partner: Red & Green Flags",cat:"Business",date:"October 2025",icon:"users",excerpt:"Selecting the wrong web partner can cost you time and resources. Learn the indicators that separate reliable developers from unreliable ones."}
];

RD.faqCats = [
 {id:"general",icon:"globe",title:"General"},
 {id:"pricing",icon:"card",title:"Pricing & Payment"},
 {id:"design",icon:"pen",title:"Design Process"},
 {id:"timeline",icon:"clock",title:"Timeline"},
 {id:"support",icon:"wrench",title:"Support"},
 {id:"technical",icon:"code",title:"Technical"}
];
RD.faqs = [
 {c:"general",q:"What is Rehmat Developers and who runs it?",a:"Rehmat Developers is a web design and development studio based in Raja Jang, Kasur, Punjab, Pakistan. It is led by Founder &amp; CEO <b>Muhammad Waleed</b>. We build websites, UI/UX designs, e-commerce platforms and custom web applications for startups, local businesses and growing brands. Day-to-day work and client communication are handled directly by Muhammad Waleed and the core team."},
 {c:"general",q:"What services do you offer?",a:"We offer nine services: custom web development, full-stack web applications, e-commerce solutions, UI/UX design, landing page design, responsive and mobile design, WordPress development, SEO and digital marketing, and maintenance and support. See the details on our <a href=\"services.html\">Services page</a>, or ask about something more specialized and we will scope a custom package."},
 {c:"general",q:"Do you only work with clients in Pakistan?",a:"No. Although we are based in Pakistan, we work with clients internationally. Communication is primarily in English, and in Urdu when preferred. Delivery, previews and handoff are all done online through secure links, screen shares and chat."},
 {c:"general",q:"How do I get started with a project?",a:"Visit our <a href=\"contact.html\">Contact page</a>, send us your project details, or message us on <a href=\"https://wa.me/923284461097\" target=\"_blank\" rel=\"noopener\">WhatsApp</a>. We aim to reply within 24 hours, discuss your goals, recommend the right plan or a custom quote, and outline next steps including milestones and timeline."},
 {c:"pricing",q:"What are your pricing plans?",a:"We offer three one-time packages: <b>Starter ($299)</b> with up to 5 custom pages, <b>Professional ($799)</b> with up to 10 pages, a blog or portfolio engine and advanced SEO, and <b>Enterprise ($2,499)</b> for e-commerce, custom web apps and complex systems, where pages and products follow the agreed scope. See the full comparison on the <a href=\"pricing.html\">Pricing page</a>."},
 {c:"pricing",q:"Are there any hidden fees?",a:"No. The price quoted is the price you pay for the agreed scope. Domain name and hosting fees are separate and paid directly to the providers. Work outside the original scope, such as extra pages or new features, is discussed and quoted before we begin."},
 {c:"pricing",q:"How do payments work? Do I pay everything upfront?",a:"No. We use a milestone-based structure: payments are tied to approved deliverables, and you review live staging previews before authorizing the next phase. The exact schedule is confirmed in writing before work starts so both sides are protected."},
 {c:"pricing",q:"Do you offer refunds?",a:"We do not offer post-delivery cash refunds. Instead, our <b>Quality &amp; Work Protection Policy</b> protects you with milestone payments, live staging previews, structured revision rounds and approval control at each phase, so you only pay for stages you have reviewed and approved. Details are on the <a href=\"pricing.html\">Pricing page</a>."},
 {c:"design",q:"What does your typical project process look like?",a:"1) Discovery: goals, audience, references and content needs. 2) Proposal and milestones: scope, timeline and payment stages. 3) Design: layout direction and UI shared via previews. 4) Development: the build, with staging links and revisions. 5) Review and polish: final checks on speed, SEO basics and responsiveness. 6) Launch and handoff: go live, credentials, a short guide and your support window."},
 {c:"design",q:"How many revisions do I get?",a:"Starter includes 2 revision rounds, Professional includes 3 and Enterprise includes 4, all during active development. Revisions cover refinements within the approved scope, such as layout polish, content updates, spacing, colors and typography. Major redesigns, new features and extra pages are quoted separately. Please send one combined feedback list per round."},
 {c:"design",q:"Can I see the website before it goes live?",a:"Yes. You receive live staging preview links so you can click through every page on phone and desktop, test forms and request changes. Nothing goes live without your go-ahead."},
 {c:"design",q:"Who provides the text and images?",a:"You can provide your own logo, photos and copy, which is best for brand accuracy. If you need help, we can guide the structure and polish your wording. Full custom photography or long-form copywriting can be added as an optional extra."},
 {c:"timeline",q:"How long does a website take to complete?",a:"It depends on the scope and how quickly content and feedback arrive. A realistic timeline is confirmed in your written proposal before work begins. Smaller sites such as landing pages move faster than multi-page platforms or custom applications."},
 {c:"timeline",q:"Can you deliver urgently?",a:"Often yes, depending on our current workload and the scope. Rush delivery may need a tighter feedback turnaround from your side and sometimes a rush fee. Message us your deadline and we will tell you honestly what is possible."},
 {c:"timeline",q:"What do you need from me to avoid delays?",a:"Clear goals, brand assets (logo and colors), page content or rough draft text, reference sites you like, timely feedback on previews and milestone payments as agreed. The faster those arrive, the faster we ship."},
 {c:"support",q:"What support do I get after launch?",a:"Every package includes complimentary post-launch support: 30 days for Starter, 60 days for Professional and 90 days of priority support for Enterprise. This covers bug fixes, small text or image updates and basic technical help. After that window you can arrange a maintenance plan."},
 {c:"support",q:"How can I contact you for updates or issues?",a:"WhatsApp is fastest: <a href=\"https://wa.me/923284461097\" target=\"_blank\" rel=\"noopener\">+92 328 4461097</a>. You can also email <a href=\"mailto:rehmat.developers022@gmail.com\">rehmat.developers022@gmail.com</a> or use the <a href=\"contact.html\">Contact form</a>. We aim to respond within 24 hours."},
 {c:"support",q:"Will I be able to edit the website myself later?",a:"That depends on the build. Static sites are updated by requesting changes. Professional and Enterprise projects with a content-management setup let you manage certain content yourself after a short walkthrough. We explain exactly what you can change at handoff."},
 {c:"technical",q:"What technologies do you use?",a:"We choose the stack to match your goals: semantic HTML5, CSS3 and vanilla JavaScript for fast, dependency-light sites, and React, Next.js, Node.js, Python, WordPress, Shopify and more where a project needs them. Performance and clarity come first, not unnecessary complexity."},
 {c:"technical",q:"Will my website be mobile-friendly and fast?",a:"Yes. Every site is fully responsive across mobile, tablet and desktop and built with performance in mind, with optimized assets and clean code. We test on real devices and screen sizes before launch."},
 {c:"technical",q:"Do you handle domain, hosting and SSL?",a:"Domain and hosting fees are separate from our packages. You can bring your own, or we will help you purchase them for free under your own account and name, so you keep full ownership. We set up SSL (HTTPS) and handle DNS and go-live."},
 {c:"technical",q:"Is SEO included?",a:"Yes, at the level of your plan: Starter includes essential on-page SEO, Professional adds advanced SEO and speed tuning, and Enterprise adds SEO with analytics integration. Ongoing content SEO can be discussed separately."}
];

/* Genuine, approved client reviews only. Add real ones here, for example:
   {name:"Client Name", business:"Company", rating:5, text:"Their real feedback.", date:"2026-01-15"} */
RD.reviews = [];

/* Illustrated images (generated). Replace any with a real screenshot by setting img on the item. */
RD.projects.forEach(function(p){p.img=p.img||'images/projects/'+p.id+'.png';});
RD.posts.forEach(function(p){p.img=p.img||'images/blog/'+p.id+'.svg';});
