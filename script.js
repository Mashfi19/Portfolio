/* ═══════════════════════════════════════════════════════════
   MASHFI.TECH — SCRIPT.JS
   Dark Universe Portfolio — 2026 Edition
═══════════════════════════════════════════════════════════ */

'use strict';

/* ─── Project Data ─── */
const PROJECTS = [
  {
    title: 'GhorKhuji',
    icon: 'fa-home',
    tags: ['Full Stack', 'Web App'],
    desc: 'A comprehensive property finding platform connecting buyers, sellers, and renters across Bangladesh. Features advanced property search, map integration, user authentication, and a powerful admin dashboard for property management.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Google Maps API'],
    challenges: [
      'Implemented real-time property search with complex filtering and geolocation',
      'Built secure multi-role authentication (admin, agent, user)',
      'Optimized database queries for large property datasets',
      'Designed a responsive UI that works across all device sizes',
    ],
    gh: 'https://github.com/Mashfi19',
    live: '#',
  },
  {
    title: 'Car Rental System',
    icon: 'fa-car',
    tags: ['Full Stack', 'Management'],
    desc: 'A complete car rental management platform with an intuitive booking flow, real-time fleet availability tracking, payment processing, and comprehensive reporting dashboards for administrators.',
    stack: ['React.js', 'Express.js', 'MySQL', 'Node.js', 'Bootstrap', 'REST API'],
    challenges: [
      'Implemented complex date-based availability calculations for vehicle fleet',
      'Built automated pricing engine based on duration, category, and season',
      'Designed admin analytics dashboard with revenue and utilization reports',
      'Created smooth multi-step booking wizard with validation',
    ],
    gh: 'https://github.com/Mashfi19',
    live: '#',
  },
  {
    title: 'Travel Management',
    icon: 'fa-plane',
    tags: ['Web App', 'Full Stack'],
    desc: 'A smart travel management system for planning and tracking trips. Users can create itineraries, book accommodations, track expenses, and share travel plans with companions.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    challenges: [
      'Built dynamic itinerary builder with drag-and-drop day planning',
      'Integrated hotel and transport booking APIs',
      'Implemented collaborative trip sharing with role-based access',
      'Created visual expense tracker with budget alerts',
    ],
    gh: 'https://github.com/Mashfi19',
    live: '#',
  },
  {
    title: 'E-Commerce Platform',
    icon: 'fa-shopping-cart',
    tags: ['E-Commerce', 'Full Stack'],
    desc: 'A feature-rich e-commerce platform supporting multiple product categories, a smart shopping cart, secure checkout, order tracking, and a comprehensive vendor and inventory management system.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Stripe API', 'Redux', 'Tailwind CSS'],
    challenges: [
      'Built real-time cart synchronization across devices',
      'Implemented secure payment processing with Stripe integration',
      'Designed scalable product catalog with dynamic filtering',
      'Created vendor dashboard with inventory and order management',
    ],
    gh: 'https://github.com/Mashfi19',
    live: '#',
  },
  {
    title: 'Weather Dashboard',
    icon: 'fa-cloud-sun',
    tags: ['API Integration', 'Tool'],
    desc: 'A real-time weather analytics dashboard providing current conditions, 7-day forecasts, weather maps, and historical data visualization for locations worldwide.',
    stack: ['JavaScript', 'OpenWeather API', 'Chart.js', 'CSS3', 'HTML5', 'Geolocation API'],
    challenges: [
      'Integrated multiple weather APIs for reliable data across locations',
      'Built interactive charts for temperature, humidity, and wind data',
      'Implemented auto-detect location with browser geolocation API',
      'Designed animated weather icons and background themes',
    ],
    gh: 'https://github.com/Mashfi19',
    live: '#',
  },
  {
    title: 'Scientific Calculator',
    icon: 'fa-calculator',
    tags: ['Tool', 'Frontend'],
    desc: 'An advanced scientific calculator with standard arithmetic, trigonometric functions, logarithms, factorials, and calculation history. Featuring a beautiful glassmorphism UI.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Math.js'],
    challenges: [
      'Implemented proper order of operations with expression parsing',
      'Built history panel with re-usable calculation results',
      'Designed keyboard support for fast calculation entry',
      'Created smooth animations for button interactions',
    ],
    gh: 'https://github.com/Mashfi19',
    live: '#',
  },
  {
    title: 'Student Management',
    icon: 'fa-user-graduate',
    tags: ['Full Stack', 'Management'],
    desc: 'A comprehensive student management system for educational institutions. Manages student records, attendance tracking, grade management, and generates performance reports.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'JavaScript', 'HTML5'],
    challenges: [
      'Built automated attendance tracking with reporting system',
      'Designed grade calculator with weighted GPA computation',
      'Created role-based access for admin, teacher, and student views',
      'Implemented PDF report generation for student transcripts',
    ],
    gh: 'https://github.com/Mashfi19',
    live: '#',
  },
  {
    title: 'Task Management',
    icon: 'fa-tasks',
    tags: ['Tool', 'Frontend'],
    desc: 'A Kanban-style task management app with drag-and-drop card functionality, priority levels, deadline tracking, labels, and persistent local storage.',
    stack: ['React.js', 'CSS3', 'Drag & Drop API', 'Local Storage', 'JavaScript'],
    challenges: [
      'Implemented smooth drag-and-drop between Kanban columns',
      'Built priority and deadline-based task sorting algorithms',
      'Designed real-time progress tracking across columns',
      'Created persistent state management with localStorage',
    ],
    gh: 'https://github.com/Mashfi19',
    live: '#',
  },
  {
    title: 'AI Assistant',
    icon: 'fa-brain',
    tags: ['AI', 'Web App'],
    desc: 'An intelligent AI assistant interface with natural language conversations, context memory, conversation history export, and a beautiful futuristic UI.',
    stack: ['JavaScript', 'AI API', 'React.js', 'CSS3', 'LocalStorage'],
    challenges: [
      'Integrated AI language model API with streaming responses',
      'Built conversation context management for multi-turn dialogues',
      'Implemented markdown rendering for formatted AI responses',
      'Designed typing animation for realistic conversational feel',
    ],
    gh: 'https://github.com/Mashfi19',
    live: '#',
  },
  {
    title: 'Portfolio Platform',
    icon: 'fa-globe',
    tags: ['Portfolio', 'Frontend'],
    desc: 'The Mashfi.Tech digital universe — this very website. A cinematic portfolio experience with particle systems, 3D animations, GitHub live integration, and an immersive design system.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'GitHub API', 'Animations'],
    challenges: [
      'Built a custom particle system on HTML5 Canvas for performance',
      'Designed animated orbit ring system with CSS 3D transforms',
      'Integrated live GitHub API for real-time repository data',
      'Created boot sequence and section reveal animation system',
    ],
    gh: 'https://github.com/Mashfi19',
    live: '#',
  },
];

/* ═══════════════════════════════════════════════════════════
   BOOT SEQUENCE
═══════════════════════════════════════════════════════════ */
(function initBoot() {
  const bootScreen = document.getElementById('bootScreen');
  const progressFill = document.getElementById('bootProgress');
  const percentEl = document.getElementById('bootPercent');
  const skipBtn = document.getElementById('bootSkip');
  const statusEls = document.querySelectorAll('.boot-item-status');

  let progress = 0;
  let done = false;

  function finishBoot() {
    if (done) return;
    done = true;
    bootScreen.classList.add('hide');
    setTimeout(() => { bootScreen.style.display = 'none'; }, 700);
    document.body.style.overflow = '';
  }

  skipBtn.addEventListener('click', finishBoot);
  document.body.style.overflow = 'hidden';

  const interval = setInterval(() => {
    progress += Math.random() * 4 + 1.5;
    if (progress >= 100) { progress = 100; clearInterval(interval); setTimeout(finishBoot, 600); }
    progressFill.style.width = progress + '%';
    percentEl.textContent = Math.round(progress) + '%';

    const idx = Math.floor((progress / 100) * statusEls.length);
    statusEls.forEach((el, i) => {
      if (i < idx) { el.textContent = '[ OK ]'; el.style.color = 'var(--accent)'; }
    });
  }, 60);
})();

/* ═══════════════════════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════════════════════ */
(function initCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .skill-planet, .project-module, .service-card, .contact-item, .filter-btn, .skill-tab').forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('hovered'); ring.classList.add('hovered'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('hovered'); ring.classList.remove('hovered'); });
  });
})();

/* ═══════════════════════════════════════════════════════════
   HERO CANVAS — PARTICLE SYSTEM
═══════════════════════════════════════════════════════════ */
(function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -1000, y: -1000 };
  const PARTICLE_COUNT = 120;
  const CONNECTION_DIST = 140;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r = Math.random() * 2 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        this.x -= dx * 0.02;
        this.y -= dy * 0.02;
      }
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,245,255,${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  document.getElementById('hero').addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  document.getElementById('hero').addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < CONNECTION_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,245,255,${0.08 * (1 - d / CONNECTION_DIST)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ═══════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════ */
(function initNav() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
  });

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });
})();

/* Back to top */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ═══════════════════════════════════════════════════════════
   TYPING EFFECT
═══════════════════════════════════════════════════════════ */
(function initTyping() {
  const el = document.getElementById('titleDynamic');
  const words = ['Full-Stack Developer', 'CSE Student', 'UI/UX Designer', 'Problem Solver', 'Future Architect'];
  let wi = 0, ci = 0, deleting = false;

  function type() {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(type, deleting ? 60 : 95);
  }
  setTimeout(type, 1200);
})();

/* ═══════════════════════════════════════════════════════════
   SKILLS TABS
═══════════════════════════════════════════════════════════ */
document.querySelectorAll('.skill-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.skills-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`[data-panel="${target}"]`).classList.add('active');
  });
});

/* ═══════════════════════════════════════════════════════════
   GITHUB API
═══════════════════════════════════════════════════════════ */
(function initGitHub() {
  const USER = 'Mashfi19';
  const LANG_COLORS = {
    JavaScript: '#f7df1e', HTML: '#e34f26', CSS: '#264de4', Python: '#3776ab',
    Java: '#b07219', 'C++': '#f34b7d', 'C#': '#178600', PHP: '#777bb4',
    TypeScript: '#2b7489', Shell: '#89e051', Vue: '#41b883', Ruby: '#701516',
  };

  async function fetchGH() {
    try {
      const [userRes, repoRes] = await Promise.all([
        fetch(`https://api.github.com/users/${USER}`),
        fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`),
      ]);
      const user = await userRes.json();
      const repos = await repoRes.json();

      // Profile stats
      document.getElementById('ghName').textContent = user.name || 'Mashfi Rahman';
      document.getElementById('ghBio').textContent = user.bio || 'Full-Stack Developer | CSE Student';
      document.getElementById('ghRepos').textContent = user.public_repos || '—';
      document.getElementById('ghFollowers').textContent = user.followers || '—';
      document.getElementById('ghFollowing').textContent = user.following || '—';

      // Stars
      const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
      document.getElementById('ghStars').textContent = stars;

      // Recent repos (top 6)
      const reposGrid = document.getElementById('githubRepos');
      reposGrid.innerHTML = '';
      repos.slice(0, 6).forEach(r => {
        const card = document.createElement('a');
        card.href = r.html_url;
        card.target = '_blank';
        card.className = 'gh-repo-card';
        card.innerHTML = `
          <div class="gh-repo-name">${r.name}</div>
          <div class="gh-repo-desc">${r.description || 'No description available.'}</div>
          <div class="gh-repo-meta">
            <span class="gh-repo-lang">${r.language || 'Code'}</span>
            <span>⭐ ${r.stargazers_count}</span>
            <span>🍴 ${r.forks_count}</span>
          </div>`;
        reposGrid.appendChild(card);
      });

      // Language distribution
      const langMap = {};
      repos.forEach(r => {
        if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1;
      });
      const total = Object.values(langMap).reduce((a, b) => a + b, 0);
      const sorted = Object.entries(langMap).sort((a, b) => b[1] - a[1]).slice(0, 7);
      const langContainer = document.getElementById('githubLanguages');
      langContainer.innerHTML = '';

      // ── Sync About + Stats counters to LIVE GitHub data ──
      const liveRepoCount = user.public_repos || repos.length || 0;
      const liveLangCount = Object.keys(langMap).length || 0;
      window.__GH_LIVE__ = { repos: liveRepoCount, langs: liveLangCount };
      if (typeof window.syncLiveStats === 'function') {
        window.syncLiveStats(liveRepoCount, liveLangCount);
      }

      sorted.forEach(([lang, count]) => {
        const pct = ((count / total) * 100).toFixed(1);
        const item = document.createElement('div');
        item.className = 'gh-lang-item';
        item.innerHTML = `
          <span class="gh-lang-name">${lang}</span>
          <div class="gh-lang-bar"><div class="gh-lang-fill" style="width:0%;background:${LANG_COLORS[lang] || '#00F5FF'}"></div></div>
          <span class="gh-lang-pct">${pct}%</span>`;
        langContainer.appendChild(item);
        setTimeout(() => { item.querySelector('.gh-lang-fill').style.width = pct + '%'; }, 200);
      });

    } catch (err) {
      document.getElementById('githubRepos').innerHTML = '<p style="color:var(--text-dim);padding:20px;font-size:.85rem;">GitHub API limit reached. <a href="https://github.com/Mashfi19" target="_blank" style="color:var(--primary)">Visit profile directly →</a></p>';
      console.log('GitHub API error:', err);
    }
  }
  fetchGH();
})();

/* ═══════════════════════════════════════════════════════════
   PROJECT FILTER
═══════════════════════════════════════════════════════════ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-module').forEach(m => {
      const cat = m.dataset.cat;
      const show = filter === 'all' || cat === filter;
      m.style.opacity = show ? '1' : '0';
      m.style.transform = show ? 'scale(1)' : 'scale(0.92)';
      m.style.pointerEvents = show ? '' : 'none';
      m.style.transition = 'opacity 0.35s, transform 0.35s';
    });
  });
});

/* ═══════════════════════════════════════════════════════════
   PROJECT MODAL
═══════════════════════════════════════════════════════════ */
window.openProject = function(idx) {
  const p = PROJECTS[idx];
  const modal = document.getElementById('projectModal');
  const body = document.getElementById('modalBody');

  body.innerHTML = `
    <div class="modal-project-icon"><i class="fas ${p.icon}"></i></div>
    <h2 class="modal-title">${p.title}</h2>
    <div class="modal-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    <p class="modal-desc">${p.desc}</p>
    <div class="modal-section-title">TECH STACK</div>
    <div class="modal-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
    <div class="modal-section-title">CHALLENGES SOLVED</div>
    <div class="modal-challenges">${p.challenges.map(c => `<div class="modal-challenge-item">${c}</div>`).join('')}</div>
    <div class="modal-links">
      <a href="${p.gh}" target="_blank" class="modal-link modal-link-gh"><i class="fab fa-github"></i> GitHub</a>
      <a href="${p.live}" class="modal-link modal-link-live"><i class="fas fa-external-link-alt"></i> Live Demo</a>
    </div>`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('projectModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  document.getElementById('projectModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════════════════
   COUNTER ANIMATION
═══════════════════════════════════════════════════════════ */
function animateCounter(el) {
  const target = +el.dataset.target;
  const suffix = el.dataset.suffix || '';
  const dur = 2000;
  const start = performance.now();

  function step(now) {
    const t = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(ease * target) + suffix;
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ═══════════════════════════════════════════════════════════
   INTERSECTION OBSERVER — REVEAL + COUNTERS
═══════════════════════════════════════════════════════════ */
(function initObservers() {
  // Section reveals
  const revealEls = document.querySelectorAll(
    '.project-module, .service-card, .gh-stat-card, .stat-card, .contact-item, .skill-planet, .about-stat, .timeline-item'
  );
  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ${(i % 4) * 0.08}s ease, transform 0.5s ${(i % 4) * 0.08}s ease`;
  });

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => revealObs.observe(el));

  // Section headers
  document.querySelectorAll('.section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        obs.unobserve(el);
      }
    }, { threshold: 0.2 });
    obs.observe(el);
  });

  // About stats counters
  const aboutStats = document.querySelectorAll('.ast-num');
  const aboutObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.target;
        let current = 0;
        const step = () => {
          current = Math.min(current + Math.ceil(target / 40), target);
          el.textContent = current + '+';
          if (current < target) setTimeout(step, 40);
        };
        step();
        aboutObs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  aboutStats.forEach(el => aboutObs.observe(el));

  // Big stat counters
  const counters = document.querySelectorAll('.stat-counter');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animateCounter(entry.target); counterObs.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObs.observe(el));

  // Stat bars
  const bars = document.querySelectorAll('.stat-bar-fill');
  const barObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = getComputedStyle(entry.target).getPropertyValue('--w');
        barObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(el => barObs.observe(el));
})();

/* ═══════════════════════════════════════════════════════════
   CONTACT FORM — EmailJS integration
═══════════════════════════════════════════════════════════ */
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form    = this;
  const btn     = document.getElementById('formSubmit');
  const success = document.getElementById('formSuccess');

  btn.classList.add('sending');
  btn.disabled = true;

  // Pull values
  const name    = document.getElementById('formName').value.trim();
  const email   = document.getElementById('formEmail').value.trim();
  const subject = document.getElementById('formSubject').value.trim();
  const message = document.getElementById('formMessage').value.trim();

  // Payload covers common EmailJS template variable names so the
  // template will fill correctly regardless of how it was authored.
  const payload = {
    name, from_name: name, user_name: name,
    email, from_email: email, user_email: email, reply_to: email,
    subject, title: subject,
    message,
    time: new Date().toLocaleString(),
  };

  try {
    if (typeof emailjs === 'undefined') throw new Error('EmailJS SDK not loaded');
    await emailjs.send('service_mashfi', 'template_mtpvse8', payload);

    btn.classList.remove('sending');
    btn.style.display = 'none';
    success.classList.add('show');
    success.querySelector('span').textContent =
      "Message transmitted successfully! I'll respond within 24 hours.";
    form.reset();
  } catch (err) {
    console.error('EmailJS error:', err);
    btn.classList.remove('sending');
    success.classList.add('show');
    success.style.background  = 'rgba(255,107,107,0.08)';
    success.style.borderColor = 'rgba(255,107,107,0.3)';
    success.style.color       = 'var(--warn)';
    success.querySelector('i').className = 'fas fa-exclamation-triangle';
    success.querySelector('span').textContent =
      'Transmission failed. Please email me directly or try again.';
  } finally {
    setTimeout(() => {
      success.classList.remove('show');
      success.style.background = success.style.borderColor = success.style.color = '';
      success.querySelector('i').className = 'fas fa-check-circle';
      btn.style.display = '';
      btn.disabled = false;
    }, 6000);
  }
});

/* ═══════════════════════════════════════════════════════════
   TILT EFFECT (Services Cards)
═══════════════════════════════════════════════════════════ */
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-8px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ═══════════════════════════════════════════════════════════
   SMOOTH SCROLL for anchor links
═══════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ═══════════════════════════════════════════════════════════
   ORBIT PARALLAX
═══════════════════════════════════════════════════════════ */
document.getElementById('hero').addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  const orbit = document.getElementById('orbitContainer');
  if (orbit) orbit.style.transform = `translateY(-50%) translate(${x * 0.3}px, ${y * 0.3}px)`;
});

/* ═══════════════════════════════════════════════════════════
   RESUME BUTTON — placeholder
═══════════════════════════════════════════════════════════ */
document.getElementById('resumeBtn').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Resume download coming soon! For now, connect on LinkedIn or email directly.');
});

/* ═══════════════════════════════════════════════════════════
   HERO TAGLINE ANIMATION
═══════════════════════════════════════════════════════════ */
(function animateHero() {
  const words = document.querySelectorAll('.tagline-word');
  words.forEach((w, i) => {
    w.style.opacity = '0';
    w.style.transform = 'translateY(20px)';
    w.style.transition = `opacity 0.5s ${1.2 + i * 0.15}s ease, transform 0.5s ${1.2 + i * 0.15}s ease`;
    setTimeout(() => {
      w.style.opacity = '1';
      w.style.transform = 'translateY(0)';
    }, (1200 + i * 150));
  });

  const name1 = document.getElementById('nameLine1');
  const name2 = document.getElementById('nameLine2');
  [name1, name2].forEach((el, i) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateX(-30px)';
    el.style.transition = `opacity 0.6s ${0.5 + i * 0.2}s ease, transform 0.6s ${0.5 + i * 0.2}s ease`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateX(0)';
    }, (500 + i * 200));
  });
})();

console.log('%c Mashfi.Tech 🚀 ', 'background:#050816;color:#00F5FF;font-size:16px;font-weight:bold;padding:8px 16px;border:1px solid #00F5FF;border-radius:6px;');
console.log('%c Built with passion by Mashfi Rahman ', 'color:#7C3AED;font-size:12px;');

/* ═══════════════════════════════════════════════════════════
   ID CARD — 3D PARALLAX TILT
═══════════════════════════════════════════════════════════ */
(function initIdCardTilt() {
  const wrap = document.querySelector('[data-tilt-photo]');
  if (!wrap) return;
  const card = wrap.querySelector('.id-card');
  if (!card) return;

  const MAX = 10; // degrees
  let raf = null;

  function onMove(e) {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      wrap.classList.add('tilt-active');
      card.style.setProperty('--ry', (x * MAX).toFixed(2) + 'deg');
      card.style.setProperty('--rx', (-y * MAX).toFixed(2) + 'deg');
    });
  }
  function onLeave() {
    if (raf) cancelAnimationFrame(raf);
    wrap.classList.remove('tilt-active');
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  }
  card.addEventListener('mousemove', onMove);
  card.addEventListener('mouseleave', onLeave);
})();

/* ═══════════════════════════════════════════════════════════
   LIVE GITHUB STATS SYNC — Projects & Technologies auto-update
   from your real GitHub account whenever the page loads.
═══════════════════════════════════════════════════════════ */
(function initLiveStatsSync() {
  // Match by section + label text so order in HTML doesn't matter.
  function findStat(rootSelector, labelSelector, valueSelector, matchText) {
    const target = matchText.toLowerCase();
    return [...document.querySelectorAll(rootSelector)].find(card => {
      const lbl = card.querySelector(labelSelector);
      return lbl && lbl.textContent.trim().toLowerCase() === target;
    })?.querySelector(valueSelector) || null;
  }

  function setCounter(el, value) {
    if (!el) return;
    el.dataset.target = String(value);
    const suffix = el.dataset.suffix || '+';
    const dur = 1400;
    const start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(ease * value) + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function setAboutStat(el, value) {
    if (!el) return;
    el.dataset.target = String(value);
    const dur = 1200;
    const start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(ease * value) + '+';
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  window.syncLiveStats = function (repos, langs) {
    // BIG stats block (Achievement Nexus)
    const projectsBuilt = findStat('.stat-card', '.stat-label', '.stat-counter', 'Projects Built');
    const reposCard     = findStat('.stat-card', '.stat-label', '.stat-counter', 'Repositories');
    const techCard      = findStat('.stat-card', '.stat-label', '.stat-counter', 'Technologies');
    setCounter(projectsBuilt, repos);
    setCounter(reposCard, repos);
    setCounter(techCard, langs);

    // About-section mini stats
    const aboutProjects = findStat('.about-stat', '.ast-label', '.ast-num', 'Projects');
    const aboutTech     = findStat('.about-stat', '.ast-label', '.ast-num', 'Technologies');
    setAboutStat(aboutProjects, repos);
    setAboutStat(aboutTech, langs);
  };

  // If GitHub already loaded before this ran, sync immediately.
  if (window.__GH_LIVE__) {
    window.syncLiveStats(window.__GH_LIVE__.repos, window.__GH_LIVE__.langs);
  }
})();

