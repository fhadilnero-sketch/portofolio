/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    backToTop.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ===== TYPEWRITER EFFECT ===== */
const roles = [
  'Web Developer',
  'Frontend Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
  'Creative Coder',
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEl = document.getElementById('typewriter');

function type() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typeEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typeEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === current.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

type();

/* ===== PARTICLE BACKGROUND ===== */
const particleContainer = document.getElementById('particles');
const particleCount = 22;

for (let i = 0; i < particleCount; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  const size = Math.random() * 5 + 2;
  const left = Math.random() * 100;
  const dur = Math.random() * 18 + 10;
  const delay = Math.random() * 15;
  const hue = Math.random() > 0.5 ? '124,58,237' : '6,182,212';
  p.style.cssText = `
    width:${size}px;height:${size}px;
    left:${left}%;
    animation-duration:${dur}s;
    animation-delay:${delay}s;
    background:rgb(${hue});
  `;
  particleContainer.appendChild(p);
}

/* ===== SCROLL REVEAL (AOS-LIKE) ===== */
const aosElements = document.querySelectorAll('[data-aos]');

const aosObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.getAttribute('data-aos-delay') || 0);
      setTimeout(() => {
        entry.target.classList.add('aos-animate');
      }, delay);
      aosObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

aosElements.forEach(el => aosObserver.observe(el));

/* ===== SKILL BAR ANIMATION ===== */
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const width = fill.getAttribute('data-width');
      fill.style.width = width + '%';
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

/* ===== IMAGE FALLBACK (show placeholder if image fails) ===== */
function handleImageLoad(imgId, placeholderId) {
  const img = document.getElementById(imgId);
  const placeholder = document.getElementById(placeholderId);
  if (!img || !placeholder) return;

  img.onload = () => {
    img.style.display = 'block';
    placeholder.style.display = 'none';
  };
  img.onerror = () => {
    img.style.display = 'none';
    placeholder.style.display = 'flex';
  };

  if (img.complete && img.naturalWidth > 0) {
    img.style.display = 'block';
    placeholder.style.display = 'none';
  } else if (img.complete) {
    img.style.display = 'none';
    placeholder.style.display = 'flex';
  }
}

handleImageLoad('heroPhoto', 'heroPhotoPlaceholder');
handleImageLoad('aboutPhoto', 'aboutPhotoPlaceholder');


/* ===== CONTACT FORM ===== */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Harap isi Nama, Email, dan Pesan terlebih dahulu!';
    formStatus.style.color = '#f87171';
    return;
  }

  const waNumber = '6285157500960';
  const text = `Halo Hariz! 👋\n\n*Nama:* ${name}\n*Email:* ${email}${subject ? '\n*Subjek:* ' + subject : ''}\n\n*Pesan:*\n${message}`;
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

  formStatus.textContent = 'Mengalihkan ke WhatsApp...';
  formStatus.style.color = 'var(--accent2)';

  setTimeout(() => {
    window.open(waUrl, '_blank');
    contactForm.reset();
    formStatus.textContent = '✓ WhatsApp dibuka! Silakan kirim pesanmu. 🎉';
    formStatus.style.color = '#4ade80';
    setTimeout(() => { formStatus.textContent = ''; }, 5000);
  }, 600);
});

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.style.color = 'var(--accent2)';
      } else {
        link.style.color = '';
      }
    }
  });
});
