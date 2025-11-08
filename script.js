// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Navbar scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// About section toggle
const aboutLinks = document.querySelectorAll('.about-link');
const aboutSection = document.getElementById('about');
const closeAbout = document.getElementById('closeAbout');

aboutLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    aboutSection.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

closeAbout.addEventListener('click', () => {
  aboutSection.classList.remove('active');
  document.body.style.overflow = 'auto';
});

aboutSection.addEventListener('click', (e) => {
  if (e.target === aboutSection) {
    aboutSection.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Contact section toggle
const contactLinks = document.querySelectorAll('.contact-link');
const contactSection = document.getElementById('contact');
const closeContact = document.getElementById('closeContact');

contactLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    contactSection.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

closeContact.addEventListener('click', () => {
  contactSection.classList.remove('active');
  document.body.style.overflow = 'auto';
});

contactSection.addEventListener('click', (e) => {
  if (e.target === contactSection) {
    contactSection.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// HOME link - close all overlays and scroll to top
const homeLinks = document.querySelectorAll('a[href="#hero"]');
homeLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Close about section
    aboutSection.classList.remove('active');
    
    // Close contact section
    contactSection.classList.remove('active');
    
    // Enable scrolling
    document.body.style.overflow = 'auto';
    
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#hero' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Create floating particles
function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 4 + 's';
  particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
  document.querySelector('.animated-bg').appendChild(particle);
  
  setTimeout(() => particle.remove(), 7000);
}

// Generate particles periodically
setInterval(createParticle, 300);

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});