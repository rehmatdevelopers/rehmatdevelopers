/* ============================================
   REHMAT DEVELOPERS — PREMIUM JAVASCRIPT
   CEO: Muhammad Waleed
   ============================================ */

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

  // Hover effects
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
const canvas = document.getElementById('particles-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

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
    animationId = requestAnimationFrame(animateParticles);
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

  // Close on outside click
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
          // Ease out cubic
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

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
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
      typingSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 400; // Pause before new word
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

    // Close all
    document.querySelectorAll('.faq-item').forEach(faq => {
      faq.classList.remove('active');
    });

    // Open clicked (if wasn't active)
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

// ===== FEEDBACK SYSTEM (localStorage) =====
const FeedbackSystem = {
  STORAGE_KEY: 'rd_feedbacks',
  ADMIN_KEY: 'rd_admin',
  ADMIN_PASSWORD: 'waleed2025',

  // Get all feedbacks
  getAll() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  // Save a new feedback
  add(feedback) {
    const feedbacks = this.getAll();
    feedback.id = Date.now();
    feedback.date = new Date().toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
    feedbacks.unshift(feedback);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(feedbacks));
    return feedback;
  },

  // Delete a specific feedback by ID
  delete(id) {
    let feedbacks = this.getAll();
    feedbacks = feedbacks.filter(f => f.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(feedbacks));
  },

  // Admin check
  isAdmin() {
    return sessionStorage.getItem(this.ADMIN_KEY) === 'true';
  },

  login(password) {
    if (password === this.ADMIN_PASSWORD) {
      sessionStorage.setItem(this.ADMIN_KEY, 'true');
      document.body.classList.add('admin-mode');
      return true;
    }
    return false;
  },

  logout() {
    sessionStorage.removeItem(this.ADMIN_KEY);
    document.body.classList.remove('admin-mode');
  },

  // Render all feedbacks on page
  render() {
    const container = document.getElementById('feedbackContainer');
    if (!container) return;

    const feedbacks = this.getAll();
    const isAdmin = this.isAdmin();

    if (feedbacks.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding:60px 20px; grid-column: 1/-1;">
          <p style="font-size:3rem; margin-bottom:16px;">💬</p>
          <h3 style="font-family:var(--font-heading); color:#fff; margin-bottom:8px;">No Feedback Yet</h3>
          <p style="color:var(--text-muted);">Be the first to share your experience with us!</p>
        </div>
      `;
      return;
    }

    container.innerHTML = feedbacks.map(fb => {
      const starsHtml = '★'.repeat(fb.rating) + '☆'.repeat(5 - fb.rating);
      const initials = fb.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
      return `
        <div class="glass-card feedback-card" data-id="${fb.id}">
          <span class="date">${fb.date}</span>
          <div class="rating">${starsHtml}</div>
          <p class="message">"${fb.message}"</p>
          <div class="author">
            <div class="author-avatar">${initials}</div>
            <div>
              <h4>${fb.name}</h4>
              <span>${fb.service || 'Client'}</span>
            </div>
          </div>
          <button class="delete-btn" onclick="FeedbackSystem.deleteFeedback(${fb.id})" title="Delete Feedback">🗑</button>
        </div>
      `;
    }).join('');

    // Re-observe for animations
    container.querySelectorAll('.feedback-card').forEach(card => {
      revealObserver.observe(card);
    });

    // Update admin mode
    if (isAdmin) {
      document.body.classList.add('admin-mode');
    }
  },

  // Delete with confirmation
  deleteFeedback(id) {
    if (confirm('Are you sure you want to delete this feedback?')) {
      this.delete(id);
      this.render();
    }
  }
};

// Render feedbacks on page load
if (document.getElementById('feedbackContainer')) {
  FeedbackSystem.render();
  if (FeedbackSystem.isAdmin()) {
    document.body.classList.add('admin-mode');
  }
}

// ===== FEEDBACK FORM SUBMISSION =====
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('fbName').value.trim();
    const email = document.getElementById('fbEmail').value.trim();
    const service = document.getElementById('fbService').value.trim();
    const message = document.getElementById('fbMessage').value.trim();
    const rating = parseInt(document.getElementById('feedbackRating').value) || 0;

    if (!name || !message || rating === 0) {
      alert('Please fill in your name, message, and select a star rating.');
      return;
    }

    FeedbackSystem.add({ name, email, service, message, rating });
    FeedbackSystem.render();

    // Reset form
    feedbackForm.reset();
    document.querySelectorAll('.star-rating .star').forEach(s => s.classList.remove('active'));
    document.getElementById('feedbackRating').value = '0';

    // Show success
    const successMsg = document.getElementById('feedbackSuccess');
    if (successMsg) {
      successMsg.style.display = 'block';
      setTimeout(() => { successMsg.style.display = 'none'; }, 4000);
    }
  });
}

// ===== ADMIN LOGIN MODAL =====
const adminModal = document.querySelector('.admin-modal-overlay');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminLogoutBtn = document.getElementById('adminLogoutBtn');
const adminPasswordInput = document.getElementById('adminPassword');
const adminErrorMsg = document.querySelector('.admin-modal .error-msg');

// Open admin modal: Ctrl + Shift + A
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'A') {
    e.preventDefault();
    if (adminModal) adminModal.classList.add('show');
  }
});

// Also open by clicking footer logo 5 times
let logoClickCount = 0;
let logoClickTimer;
const footerLogo = document.querySelector('.footer .logo');
if (footerLogo) {
  footerLogo.addEventListener('click', (e) => {
    e.preventDefault();
    logoClickCount++;
    clearTimeout(logoClickTimer);
    logoClickTimer = setTimeout(() => { logoClickCount = 0; }, 2000);
    if (logoClickCount >= 5) {
      logoClickCount = 0;
      if (adminModal) adminModal.classList.add('show');
    }
  });
}

// Admin Login
if (adminLoginBtn) {
  adminLoginBtn.addEventListener('click', () => {
    const password = adminPasswordInput.value;
    if (FeedbackSystem.login(password)) {
      adminModal.classList.remove('show');
      adminPasswordInput.value = '';
      if (adminErrorMsg) adminErrorMsg.style.display = 'none';
      FeedbackSystem.render();
      alert('✅ Admin Mode Activated! You can now delete feedbacks.');
    } else {
      if (adminErrorMsg) adminErrorMsg.style.display = 'block';
      adminPasswordInput.value = '';
    }
  });
}

// Admin Logout
if (adminLogoutBtn) {
  adminLogoutBtn.addEventListener('click', () => {
    FeedbackSystem.logout();
    FeedbackSystem.render();
    alert('Admin Mode Deactivated.');
  });
}

// Close modal on outside click
if (adminModal) {
  adminModal.addEventListener('click', (e) => {
    if (e.target === adminModal) {
      adminModal.classList.remove('show');
    }
  });
}

// Admin password enter key
if (adminPasswordInput) {
  adminPasswordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      adminLoginBtn.click();
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
