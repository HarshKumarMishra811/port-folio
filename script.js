/* =================================================
   PROFILE DATA — edit this object to update the site
   ================================================= */
const profile = {
  name: 'Harsh Kumar Mishra',
  initials: 'HKM',
  title: 'Software Developer',
  bio: 'Dedicated Software Developer with a strong foundation in JavaScript, Java, and MySQL, complemented by hands-on experience in NodeJS, Express, and ReactJS. Skilled in designing and developing scalable web applications and optimizing system performance.',
  location: 'Varanasi, UP, India',
  email: 'harshkmishra2@gmail.com',
  phone: '+91 7310007607',
  linkedin: 'https://www.linkedin.com/in/harsh-kumar-mishra-438b14287',
  github: null,

  stats: [
    { value: '4+',  label: 'Projects Built' },
    { value: '8+',  label: 'Technologies' },
    { value: 'MCA', label: 'Highest Degree' },
    { value: '2+',  label: 'Certifications' },
  ],

  skills: [
    {
      category: 'Programming',
      color: 'linear-gradient(90deg,#10b981,#14b8a6)',
      labelColor: 'bg-emerald',
      items: [
        { name: 'JavaScript', pct: 88 },
        { name: 'Java',       pct: 82 },
      ],
    },
    {
      category: 'Web Development',
      color: 'linear-gradient(90deg,#38bdf8,#22d3ee)',
      items: [
        { name: 'ReactJS', pct: 85 },
        { name: 'NodeJS',  pct: 83 },
        { name: 'Express', pct: 80 },
      ],
    },
    {
      category: 'Tools & Databases',
      color: 'linear-gradient(90deg,#f59e0b,#f97316)',
      items: [
        { name: 'MySQL',  pct: 82 },
        { name: 'Git',    pct: 80 },
        { name: 'GitHub', pct: 80 },
        { name: 'VS Code', pct: 90 },
      ],
    },
  ],

  softSkills: ['Problem-Solving', 'Teamwork', 'Self-Learning', 'Self-Motivation'],

  projects: [
    {
      title: 'Fees Management System',
      description: 'Designed and developed software to manage student fee records, including registration, fee tracking, and receipt generation. Enhanced codebase performance using NetBeans IDE and MySQL.',
      image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Java', 'AWT', 'Swing', 'JDBC', 'MySQL', 'NetBeans'],
      live: null,
      repo: null,
    },
    {
      title: 'My Note',
      description: 'Built a web-based note-taking application with full CRUD functionality. Leveraged Hibernate, Spring, and JSP for seamless user interaction.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Hibernate', 'Spring', 'JSP', 'Java'],
      live: null,
      repo: null,
    },
    {
      title: 'Profile Page',
      description: 'Designed and hosted a responsive, dynamically generated profile page on GitHub Pages. Used JavaScript for data fetching and dynamic rendering with HTML, CSS, and GitHub workflows.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['JavaScript', 'HTML', 'CSS', 'GitHub Pages'],
      live: null,
      repo: null,
    },
    {
      title: 'Currency Converter',
      description: 'Developed a real-time currency conversion web application with a user-friendly interface. Integrated Currency Price API for live exchange rates and GPS API for location tracking.',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['JavaScript', 'Currency API', 'GPS API', 'HTML', 'CSS'],
      live: null,
      repo: null,
    },
  ],

  education: [
    {
      degree: 'MCA',
      institution: 'LNCT University Bhopal',
      year: '2025',
      grade: '72.60%',
    },
    {
      degree: 'PG Diploma in Web Designing',
      institution: 'Board of Technical Education, Uttar Pradesh',
      year: '2023',
      grade: '68.61%',
    },
    {
      degree: 'B.A.',
      institution: 'MGKVP Varanasi',
      year: '2022',
      grade: '58.61%',
    },
  ],

  achievements: [
    {
      icon: '🛡️',
      title: 'Cyber-security Badge',
      desc: 'Awarded by Cisco Skills for All — demonstrating foundational knowledge in cybersecurity principles.',
    },
    {
      icon: '🐍',
      title: 'Python Badge',
      desc: 'Awarded by Cisco Skills for All — recognising proficiency in Python programming.',
    },
    {
      icon: '💻',
      title: 'Competitive Coding',
      desc: 'Completed coding challenges across LeetCode, HackerRank, and GeeksForGeeks.',
    },
  ],

  hobbies: [
    {
      icon: '💡',
      title: 'Tech Enthusiast',
      desc: 'Passionate about exploring emerging technologies and staying updated with innovative advancements.',
      bg: 'rgba(16,185,129,.08)',
      border: 'rgba(16,185,129,.2)',
    },
    {
      icon: '🏋️',
      title: 'Fitness & Recreation',
      desc: 'Committed to regular exercise, recreational sports, and gaming for mental and physical wellness.',
      bg: 'rgba(56,189,248,.08)',
      border: 'rgba(56,189,248,.2)',
    },
    {
      icon: '🎵',
      title: 'Music Lover',
      desc: 'Enjoys discovering diverse genres of music to relax and recharge.',
      bg: 'rgba(244,114,182,.08)',
      border: 'rgba(244,114,182,.2)',
    },
    {
      icon: '🧭',
      title: 'Adventure Seeker',
      desc: 'Thrives on traveling, visiting spiritual destinations, and exploring the world on bike.',
      bg: 'rgba(251,191,36,.08)',
      border: 'rgba(251,191,36,.2)',
    },
  ],
};

/* =================================================
   SVG ICONS
   ================================================= */
const icons = {
  mail:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  phone:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 18z"/></svg>`,
  map:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  linkedin:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  github:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  link:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  code:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  cap:     `🎓`,
  trophy:  `🏆`,
};

/* =================================================
   RENDER HELPERS
   ================================================= */
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') node.className = v;
    else if (k === 'style') node.style.cssText = v;
    else if (k === 'html') node.innerHTML = v;
    else node.setAttribute(k, v);
  });
  children.forEach(c => {
    if (typeof c === 'string') node.insertAdjacentHTML('beforeend', c);
    else if (c) node.appendChild(c);
  });
  return node;
}

/* =================================================
   NAV — scroll + mobile toggle
   ================================================= */
function initNav() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });
  // Trigger on load in case page is already scrolled
  navbar.classList.toggle('scrolled', window.scrollY > 30);

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

/* =================================================
   HERO
   ================================================= */
function renderHero() {
  document.getElementById('heroAvatar').textContent = profile.initials;

  document.getElementById('heroName').textContent  = profile.name;
  document.getElementById('heroTitle').textContent = profile.title;
  document.getElementById('heroBio').textContent   = profile.bio;

  // Contact items
  const contact = document.getElementById('heroContact');
  const contactItems = [
    profile.location && { icon: icons.map,    text: profile.location,  href: null },
    profile.email    && { icon: icons.mail,   text: profile.email,     href: `mailto:${profile.email}` },
    profile.phone    && { icon: icons.phone,  text: profile.phone,     href: `tel:${profile.phone}` },
  ].filter(Boolean);

  contactItems.forEach(({ icon, text, href }) => {
    const item = el('span', { class: 'hero-contact-item' });
    item.innerHTML = icon;
    if (href) {
      const a = el('a', { href }, text);
      item.appendChild(a);
    } else {
      item.insertAdjacentText('beforeend', text);
    }
    contact.appendChild(item);
  });

  // Action buttons
  const actions = document.getElementById('heroActions');
  if (profile.email) {
    actions.appendChild(
      el('a', { class: 'btn btn-primary', href: `mailto:${profile.email}` },
        icons.mail, 'Hire Me')
    );
  }
  if (profile.linkedin) {
    actions.appendChild(
      el('a', { class: 'btn btn-ghost', href: profile.linkedin, target: '_blank', rel: 'noopener noreferrer' },
        icons.linkedin, 'LinkedIn')
    );
  }
  if (profile.github) {
    actions.appendChild(
      el('a', { class: 'btn btn-ghost', href: profile.github, target: '_blank', rel: 'noopener noreferrer' },
        icons.github, 'GitHub')
    );
  }

  // Stats
  const statsEl = document.getElementById('heroStats');
  profile.stats.forEach(s => {
    statsEl.appendChild(el('div', { class: 'stat-card' },
      el('div', { class: 'stat-val' }, s.value),
      el('div', { class: 'stat-lbl' }, s.label)
    ));
  });
}

/* =================================================
   ABOUT
   ================================================= */
function renderAbout() {
  // Summary card
  const summary = document.getElementById('aboutSummary');
  summary.innerHTML = `<h3>Professional Summary</h3><p>${profile.bio}</p>`;

  // Info card
  const info = document.getElementById('aboutInfo');
  info.innerHTML = `<h3>Quick Info</h3>`;

  const rows = [
    { label: 'Location', icon: icons.map,    val: profile.location },
    { label: 'Email',    icon: icons.mail,   val: `<a href="mailto:${profile.email}">${profile.email}</a>` },
    { label: 'Phone',    icon: icons.phone,  val: `<a href="tel:${profile.phone}">${profile.phone}</a>` },
    profile.linkedin && { label: 'LinkedIn', icon: icons.linkedin, val: `<a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">View Profile</a>` },
  ].filter(Boolean);

  rows.forEach(({ label, icon, val }) => {
    const row = el('div', { class: 'info-row' });
    row.innerHTML = `${icon}<span class="info-label">${label}</span><span class="info-val">${val}</span>`;
    info.appendChild(row);
  });
}

/* =================================================
   SKILLS
   ================================================= */
function renderSkills() {
  const container = document.getElementById('skillsContent');

  profile.skills.forEach(group => {
    const section = el('div', { class: 'skills-category reveal' });

    // Divider with category label
    const divider = el('div', { class: 'divider' });
    divider.innerHTML = `
      <div class="divider-line"></div>
      <span class="divider-label" style="background:${group.color.replace('linear-gradient(90deg,','').split(',')[0]}18;color:${group.color.replace('linear-gradient(90deg,','').split(',')[0]}">${group.category}</span>
      <div class="divider-line"></div>`;
    section.appendChild(divider);

    const cards = el('div', { class: 'skill-cards' });
    group.items.forEach(skill => {
      const card = el('div', { class: 'skill-card' });
      card.innerHTML = `
        <div class="skill-top">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-pct">${skill.pct}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-fill" data-pct="${skill.pct}" style="background:${group.color}"></div>
        </div>`;
      cards.appendChild(card);
    });
    section.appendChild(cards);
    container.appendChild(section);
  });

  // Soft skills box
  const softBox = el('div', { class: 'soft-skills-box reveal' });
  softBox.innerHTML = `<h3>Soft Skills</h3><div class="soft-chips">${
    profile.softSkills.map(s => `<span class="soft-chip">${s}</span>`).join('')
  }</div>`;
  container.appendChild(softBox);
}

/* =================================================
   PROJECTS
   ================================================= */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  profile.projects.forEach(p => {
    const card = el('article', { class: 'project-card reveal' });

    const imgSection = el('div', { class: 'project-img' });
    if (p.image) {
      imgSection.innerHTML = `<img src="${p.image}" alt="${p.title}" loading="lazy" />`;
    } else {
      imgSection.innerHTML = `<div class="project-img-placeholder">💻</div>`;
    }

    // Overlay buttons
    const overlay = el('div', { class: 'project-overlay' });
    if (p.live) {
      overlay.innerHTML += `<a href="${p.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding:7px 14px;font-size:.8rem">${icons.link} Live</a>`;
    }
    if (p.repo) {
      overlay.innerHTML += `<a href="${p.repo}" target="_blank" rel="noopener noreferrer" class="btn" style="padding:7px 14px;font-size:.8rem;background:rgba(255,255,255,.9);color:#0f172a">${icons.code} Code</a>`;
    }
    imgSection.appendChild(overlay);
    card.appendChild(imgSection);

    const body = el('div', { class: 'project-body' });
    body.innerHTML = `
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="tech-chips">${p.tech.map(t => `<span class="tech-chip">${t}</span>`).join('')}</div>`;
    card.appendChild(body);
    grid.appendChild(card);
  });
}

/* =================================================
   EDUCATION
   ================================================= */
function renderEducation() {
  const list = document.getElementById('eduList');
  profile.education.forEach(e => {
    const item = el('div', { class: 'edu-item reveal' });
    item.innerHTML = `
      <div class="edu-icon">${icons.cap}</div>
      <div class="edu-body">
        <div class="edu-inst">${e.institution}</div>
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-meta">
          <span class="edu-year">${e.year}</span>
          <span class="edu-grade">Grade: ${e.grade}</span>
        </div>
      </div>`;
    list.appendChild(item);
  });
}

/* =================================================
   ACHIEVEMENTS
   ================================================= */
function renderAchievements() {
  const grid = document.getElementById('achGrid');
  profile.achievements.forEach(a => {
    const card = el('div', { class: 'ach-card reveal' });
    card.innerHTML = `
      <div class="ach-icon">${a.icon}</div>
      <div class="ach-title">${a.title}</div>
      <div class="ach-desc">${a.desc}</div>`;
    grid.appendChild(card);
  });
}

/* =================================================
   HOBBIES
   ================================================= */
function renderHobbies() {
  const grid = document.getElementById('hobbiesGrid');
  profile.hobbies.forEach(h => {
    const card = el('div', { class: 'hobby-card reveal' });
    card.style.background = h.bg;
    card.style.borderColor = h.border;
    card.innerHTML = `
      <div class="hobby-icon-wrap">${h.icon}</div>
      <div class="hobby-title">${h.title}</div>
      <div class="hobby-desc">${h.desc}</div>`;
    grid.appendChild(card);
  });
}

/* =================================================
   FOOTER
   ================================================= */
function renderFooter() {
  const footer = document.getElementById('footerContent');
  footer.innerHTML = `
    <div>
      <div class="footer-headline">${profile.name}</div>
      <p class="footer-subtext">Open to new opportunities. Feel free to reach out for collaboration, freelance work, or just a conversation about tech.</p>
    </div>
    <div>
      <div class="footer-contact-label">Get in Touch</div>
      <div class="footer-contact-list">
        ${profile.email    ? `<a href="mailto:${profile.email}" class="footer-contact-item">${icons.mail}<span>${profile.email}</span></a>` : ''}
        ${profile.phone    ? `<a href="tel:${profile.phone}" class="footer-contact-item">${icons.phone}<span>${profile.phone}</span></a>` : ''}
        ${profile.location ? `<div class="footer-contact-item">${icons.map}<span>${profile.location}</span></div>` : ''}
        ${profile.linkedin ? `<a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="footer-contact-item">${icons.linkedin}<span>LinkedIn Profile</span></a>` : ''}
      </div>
    </div>`;

  document.getElementById('footerCopy').textContent =
    `© ${new Date().getFullYear()} ${profile.name}. All rights reserved.`;
}

/* =================================================
   SCROLL ANIMATIONS — IntersectionObserver
   ================================================= */
function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger children of grids
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('visible'), delay);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  // Observe all .reveal elements (rendered after DOMContentLoaded)
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.dataset.delay = (i % 4) * 80; // stagger by position in row
    io.observe(el);
  });
}

/* =================================================
   SKILL BAR ANIMATION — triggered on first visibility
   ================================================= */
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.pct + '%';
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  fills.forEach(f => io.observe(f));
}

/* =================================================
   ACTIVE NAV LINK — highlight on scroll
   ================================================= */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navAs = document.querySelectorAll('#navLinks a');

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAs.forEach(a => {
            a.style.color = '';
            if (a.getAttribute('href') === '#' + entry.target.id) {
              a.style.color = '#10b981';
            }
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );
  sections.forEach(s => io.observe(s));
}

/* =================================================
   BOOT
   ================================================= */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderEducation();
  renderAchievements();
  renderHobbies();
  renderFooter();
  initReveal();
  initSkillBars();
  initActiveNav();
});
