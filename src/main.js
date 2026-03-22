import { siteConfig } from './site.config.js';

// =====================================================
//  Config-Driven Page Visibility
//  Edit src/site.config.js to show/hide pages.
// =====================================================
(function applyPageVisibility() {
  const pages = siteConfig.pages;
  Object.keys(pages).forEach(pageKey => {
    const page = pages[pageKey];
    // Select nav links (desktop + mobile)
    const navLinks = document.querySelectorAll(`[data-page-nav="${pageKey}"]`);
    // Select footer links
    const footerLinks = document.querySelectorAll(`[data-footer-page="${pageKey}"]`);
    const allLinks = [...navLinks, ...footerLinks];

    allLinks.forEach(link => {
      if (!page.enabled) {
        link.classList.add('page-hidden');
      } else {
        link.classList.remove('page-hidden');
      }
    });
  });
})();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileLinks = document.getElementById('mobile-links');

if (mobileBtn && mobileLinks) {
  mobileBtn.addEventListener('click', () => {
    mobileLinks.classList.toggle('active');
    const spans = mobileBtn.querySelectorAll('span');
    if(mobileLinks.classList.contains('active')) {
      if(spans[0]) spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
      if(spans[1]) spans[1].style.opacity = '0';
      if(spans[2]) spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
      if(spans[0]) spans[0].style.transform = 'none';
      if(spans[1]) spans[1].style.opacity = '1';
      if(spans[2]) spans[2].style.transform = 'none';
    }
  });
}

// Close mobile menu when a link is clicked
if (mobileLinks) {
  const mobileNavLinks = mobileLinks.querySelectorAll('a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileLinks.classList.remove('active');
      if (mobileBtn) {
        const spans = mobileBtn.querySelectorAll('span');
        if(spans[0]) spans[0].style.transform = 'none';
        if(spans[1]) spans[1].style.opacity = '1';
        if(spans[2]) spans[2].style.transform = 'none';
      }
    });
  });
}

// Team Toggle Logic
const teamToggles = document.querySelectorAll('.team-toggle');
const teamViews = document.querySelectorAll('.team-view');

teamToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    // Remove active class from all buttons and views
    teamToggles.forEach(t => t.classList.remove('active'));
    teamViews.forEach(v => v.classList.remove('active'));

    // Add active class to clicked button and target view
    toggle.classList.add('active');
    const targetId = toggle.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
// Initialize theme from storage or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';

function updateThemeIcons(theme) {
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  if (sunIcon && moonIcon) {
    if (theme === 'light') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }
}

if (currentTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
}
updateThemeIcons(currentTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
      updateThemeIcons('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      updateThemeIcons('light');
    }
  });
}

// Seamless Marquee Duplication & Highlight
const marqueeContent = document.querySelector('.marquee-content');
if (marqueeContent) {
  const logos = Array.from(marqueeContent.children);
  logos.forEach(logo => {
    if(logo.nodeType === 1 && (logo.classList.contains('placeholder-logo') || logo.classList.contains('client-logo'))) {
      marqueeContent.appendChild(logo.cloneNode(true));
    }
  });

  // Client Logo Center Highlight Observer
  const allLogos = document.querySelectorAll('.placeholder-logo img, .client-logo');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('highlighted');
      } else {
        entry.target.classList.remove('highlighted');
      }
    });
  }, {
    root: null,
    rootMargin: '0px -45% 0px -45%', // Trigger in the middle 10% of the screen
    threshold: 0
  });

  allLogos.forEach(img => observer.observe(img));
}
