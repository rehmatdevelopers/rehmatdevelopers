/* ============================================
   REHMAT DEVELOPERS — PREMIUM JAVASCRIPT
   CEO: Muhammad Waleed
   Global Reviews: Firebase Firestore
   ============================================ */

// ===== FIREBASE CONFIG (YOUR PROJECT) =====
const firebaseConfig = {
  apiKey: "AIzaSyAILcD4WQVlf6_2qRUeecZYRjgD6CmnzhE",
  authDomain: "rehmat-developers.firebaseapp.com",
  projectId: "rehmat-developers",
  storageBucket: "rehmat-developers.firebasestorage.app",
  messagingSenderId: "70200725412",
  appId: "1:70200725412:web:2f8353934bb2cfb996fb31",
  measurementId: "G-0NKGMFJLLG"
};

let db = null;
try {
  if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
  } else {
    console.warn('Firebase SDK missing. Add firebase-app-compat.js + firebase-firestore-compat.js before script.js');
  }
} catch (err) {
  console.error('Firebase init error:', err);
}

// ===== PRELOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.classList.add('hidden');
      setTimeout(() => preloader.remove(), 800);
    }
  }, 1800);
});

// ===== CUSTOM CURSOR =====
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

if (cursorDot && cursorRing && window.innerWidth > 768) {
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverElements = document.querySelectorAll('a, button, .btn, .glass-card, .filter-btn, .faq-question, .skill-tag, .portfolio-card, .star');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorDot.classList.add('hover');
      cursorRing.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursorDot.classList.remove('hover');
      cursorRing.classList.remove('hover');
    });
  });
}

// ===== PARTICLES BACKGROUND =====
const canvas = document.getElementById('particles-canvas') || document.getElementById('particles');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.8 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.4 + 0.05;
      this.color = Math.random() > 0.5 ? '0, 212, 255' : '124, 58, 237';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.fill();
    }
  }

  const particleCount = window.innerWidth > 768 ? 90 : 40;
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function connectParticles() {
    const maxDist = 130;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const opacity = 0.06 * (1 - dist / maxDist);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    connectParticles();
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ===== MOBILE MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ===== SCROLL PROGRESS BAR =====
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) progressBar.style.width = progress + '%';
});

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== SCROLL REVEAL ANIMATIONS =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// ===== COUNTER ANIMATION =====
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.counter');
      counters.forEach(counter => {
        if (counter.dataset.counted) return;
        counter.dataset.counted = 'true';
        const target = parseInt(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          counter.textContent = current + suffix;
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + suffix;
          }
        }
        requestAnimationFrame(updateCounter);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsGrid = document.querySelector('.stats-grid');
if (statsGrid) counterObserver.observe(statsGrid);

// ===== 3D TILT EFFECT ON CARDS =====
if (window.innerWidth > 768) {
  document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

/* =======================================================
   ✅ ACTIVE NAV LINK (FIXED DUAL BUBBLES) 
   ======================================================= */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a:not(.btn)').forEach(link => {
  // 1. Sabse pehle copy-paste ki gayi hardcoded 'active' class ko remove karein
  link.classList.remove('active');
  
  // 2. Sirf jo page open hai, usi link ko 'active' karein
  const href = link.getAttribute('href');
  if (href) {
    const linkPath = href.split('/').pop();
    if (linkPath === currentPage || (currentPage === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  }
});

// ===== TYPING EFFECT (Hero Page) =====
const typingElement = document.querySelector('.typing-text');
if (typingElement) {
  const words = JSON.parse(typingElement.getAttribute('data-words') || '["Websites", "Web Apps", "E-Commerce", "Digital Experiences"]');
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }
  setTimeout(typeEffect, 1000);
}

// ===== PORTFOLIO FILTER =====
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

if (filterButtons.length > 0 && portfolioCards.length > 0) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.85)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 350);
        }
      });
    });
  });
}

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(faq => {
      faq.classList.remove('active');
    });

    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// ===== STAR RATING (Feedback Form) =====
const starRating = document.querySelector('.star-rating');
if (starRating) {
  const stars = starRating.querySelectorAll('.star');
  let selectedRating = 0;

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      selectedRating = index + 1;
      updateStars();
      const ratingInput = document.getElementById('feedbackRating');
      if (ratingInput) ratingInput.value = selectedRating;
    });

    star.addEventListener('mouseenter', () => {
      stars.forEach((s, i) => {
        s.classList.toggle('active', i <= index);
      });
    });
  });

  starRating.addEventListener('mouseleave', () => {
    updateStars();
  });

  function updateStars() {
    stars.forEach((s, i) => {
      s.classList.toggle('active', i < selectedRating);
    });
  }
}

// ===== HELPER: ESCAPE HTML =====
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ===== GLOBAL FEEDBACK SYSTEM (FIREBASE FIRESTORE) =====
const FeedbackSystem = {
  COLLECTION: 'reviews',

  async getAll() {
    if (!db) return [];
    try {
      const snap = await db.collection(this.COLLECTION).orderBy('createdAt', 'desc').get();
      return snap.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name || 'Client',
        email: doc.data().email || '',
        service: doc.data().service || 'Client',
        message: doc.data().message || '',
        rating: parseInt(doc.data().rating, 10) || 5,
        date: doc.data().date || ''
      }));
    } catch (e) {
      console.error('Error loading reviews:', e);
      return [];
    }
  },

  async add(feedback) {
    if (!db) throw new Error('Firebase not connected');
    const payload = {
      name: feedback.name,
      email: feedback.email || '',
      service: feedback.service || 'Client',
      message: feedback.message,
      rating: parseInt(feedback.rating, 10) || 5,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
      }),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    const ref = await db.collection(this.COLLECTION).add(payload);
    return { id: ref.id, ...payload };
  },

  async render() {
    const container = document.getElementById('feedbackContainer');
    const feedbacks = await this.getAll();

    if (container) {
      if (feedbacks.length === 0) {
        container.innerHTML = `
          <div style="text-align:center; padding:60px 20px; width:100%;">
            <p style="font-size:3rem; margin-bottom:16px;">💬</p>
            <h3 style="font-family:var(--font-heading); color:#fff; margin-bottom:8px;">No Feedback Yet</h3>
            <p style="color:var(--text-muted);">Be the first to share your experience with us!</p>
          </div>
        `;
      } else {
        container.innerHTML = feedbacks.map(fb => {
          const rating = parseInt(fb.rating, 10) || 5;
          const starsHtml = '★'.repeat(rating) + '☆'.repeat(5 - rating);
          const safeName = escapeHtml(fb.name || 'Client');
          const initials = (fb.name || 'C').split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
          const safeMessage = escapeHtml(fb.message || '');
          const safeService = escapeHtml(fb.service || 'Client');
          const safeDate = escapeHtml(fb.date || '');

          return `
            <div class="glass-card feedback-card reveal" data-id="${escapeHtml(fb.id)}">
              <span class="date">${safeDate}</span>
              <div class="rating">${starsHtml}</div>
              <p class="message">"${safeMessage}"</p>
              <div class="author">
                <div class="author-avatar">${escapeHtml(initials)}</div>
                <div>
                  <h4>${safeName}</h4>
                  <span>${safeService}</span>
                </div>
              </div>
            </div>
          `;
        }).join('');

        container.querySelectorAll('.feedback-card').forEach(card => {
          if (typeof revealObserver !== 'undefined') revealObserver.observe(card);
        });
      }
    }

    this.renderHomepageSlider(feedbacks);
  },

  renderHomepageSlider(feedbacks) {
    const track =
      document.getElementById('testimonialsSliderTrack') ||
      document.getElementById('homeTestimonials') ||
      document.getElementById('testimonialsContainer');

    if (!track) return;

    const list = feedbacks || [];

    if (list.length === 0) {
      track.innerHTML = `
        <div style="text-align:center; padding:40px 20px; width:100%;">
          <p style="color:var(--text-muted, #94a3b8);">No client reviews yet. Be the first to share feedback on our Reviews page.</p>
        </div>
      `;
      return;
    }

    track.innerHTML = list.map(fb => {
      const rating = parseInt(fb.rating, 10) || 5;
      const starsHtml = '★'.repeat(rating) + '☆'.repeat(5 - rating);
      const safeName = escapeHtml(fb.name || 'Client');
      const initials = (fb.name || 'C').split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
      const safeMessage = escapeHtml(fb.message || '');
      const safeService = escapeHtml(fb.service || 'Verified Client');

      return `
        <div class="testimonial-card glass-card" style="min-width:min(320px, 85vw); max-width:400px; margin:10px; flex-shrink:0;">
          <div class="rating" style="color:#f59e0b; letter-spacing:2px; margin-bottom:12px;">${starsHtml}</div>
          <p class="message" style="color:#cbd5e1; font-style:italic; line-height:1.6; margin-bottom:16px;">"${safeMessage}"</p>
          <div class="author" style="display:flex; align-items:center; gap:12px;">
            <div class="author-avatar" style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#7c3aed);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:0.85rem;">${escapeHtml(initials)}</div>
            <div>
              <h4 style="margin:0; color:#f8fafc; font-size:1rem;">${safeName}</h4>
              <span style="color:#94a3b8; font-size:0.85rem;">${safeService}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  async sendEmailNotification(feedback) {
    try {
      const formData = new FormData();
      formData.append('access_key', 'cdabd95e-b135-49fa-814a-f97f62c001e7');
      formData.append('subject', `New Client Review — ${feedback.name}`);
      formData.append('from_name', 'Rehmat Developers Reviews');
      formData.append('Reviewer Name', feedback.name);
      formData.append('Reviewer Email', feedback.email || 'Not provided');
      formData.append('Service', feedback.service || 'General');
      formData.append('Rating', `${feedback.rating} Stars`);
      formData.append('Review', feedback.message);

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
    } catch (err) {
      console.log('Review email notification error:', err);
    }
  }
};

// Load global reviews on page open
FeedbackSystem.render();

// ===== FEEDBACK FORM SUBMISSION (GLOBAL) =====
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameEl = document.getElementById('fbName');
    const emailEl = document.getElementById('fbEmail');
    const serviceEl = document.getElementById('fbService');
    const messageEl = document.getElementById('fbMessage');
    const ratingEl = document.getElementById('feedbackRating');

    const name = nameEl ? nameEl.value.trim() : '';
    const email = emailEl ? emailEl.value.trim() : '';
    const service = serviceEl ? serviceEl.value.trim() : '';
    const message = messageEl ? messageEl.value.trim() : '';
    const rating = parseInt(ratingEl ? ratingEl.value : '0', 10) || 0;

    if (!name || !message || rating === 0) {
      alert('Please fill in your name, message, and select a star rating.');
      return;
    }

    if (!db) {
      alert('Database not connected. Make sure Firebase scripts are loaded before js/script.js');
      return;
    }

    const submitBtn = feedbackForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Publishing...';
    }

    try {
      const feedback = { name, email, service, message, rating };
      await FeedbackSystem.add(feedback);
      await FeedbackSystem.render();
      FeedbackSystem.sendEmailNotification(feedback);

      feedbackForm.reset();
      document.querySelectorAll('.star-rating .star').forEach(s => s.classList.remove('active'));
      if (ratingEl) ratingEl.value = '0';

      const successMsg = document.getElementById('feedbackSuccess');
      if (successMsg) {
        successMsg.style.display = 'block';
        setTimeout(() => { successMsg.style.display = 'none'; }, 4000);
      }

      const container = document.getElementById('feedbackContainer');
      if (container) {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } catch (err) {
      console.error(err);
      alert('Could not publish review. Check internet / Firestore rules and try again.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit Feedback';
      }
    }
  });
}

/* =======================================================
   ✅ CONTACT FORM (Google Apps Script / Web3Forms Fix)
   ======================================================= */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const statusEl = document.getElementById('formStatus');
    const btn = contactForm.querySelector('button[type="submit"]');

    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.color = '#3b82f6';
      statusEl.textContent = 'Sending message...';
    }
    if (btn) btn.disabled = true;

    try {
      const formData = new FormData(contactForm);
      const scriptURL = contactForm.getAttribute('action'); // HTML form ka action lay ga (Google Apps Script URL)

      const res = await fetch(scriptURL || 'https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const result = await res.json();

      // Check success for both Google Apps Script and Web3Forms response styles
      if (result.result === "success" || result.result === "bot_detected" || result.success) {
        if (statusEl) {
          statusEl.style.color = '#10b981';
          statusEl.textContent = 'Thank you! Your message has been sent successfully.';
        }
        contactForm.reset();
      } else {
        throw new Error(result.error || result.message || 'Failed');
      }
    } catch (err) {
      if (statusEl) {
        statusEl.style.color = '#ef4444';
        statusEl.textContent = 'Error sending message. Please try WhatsApp or email directly.';
      }
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== PARALLAX ON HERO ORBS =====
if (window.innerWidth > 768) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.hero-orb').forEach((orb, i) => {
      const speed = (i + 1) * 0.05;
      orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// ===== MAGNETIC BUTTON EFFECT =====
if (window.innerWidth > 768) {
  document.querySelectorAll('.btn-primary, .btn-whatsapp').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

// ===== NAVBAR HIDE/SHOW ON SCROLL =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (navbar) {
    if (currentScroll > lastScroll && currentScroll > 200) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
  }
  lastScroll = currentScroll;
});

// ===== TEXT SPLIT ANIMATION (Hero h1) =====
const heroTitle = document.querySelector('.hero h1');
if (heroTitle && window.innerWidth > 768) {
  heroTitle.style.opacity = '1';
}

// ===== CONSOLE EASTER EGG =====
console.log('%c🚀 Rehmat Developers', 'font-size:24px; font-weight:bold; background:linear-gradient(135deg,#00d4ff,#7c3aed); -webkit-background-clip:text; -webkit-text-fill-color:transparent;');
console.log('%cCEO: Muhammad Waleed | Raja Jang, Kasur', 'font-size:12px; color:#94a3b8;');
console.log('%c💡 Want to work with us? → rehmat.developers022@gmail.com', 'font-size:11px; color:#00d4ff;');
