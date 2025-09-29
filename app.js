// Portfolio data with Indonesian Graphic Designer information
const portfolioData = {
  "personalInfo": {
    "name": "Ariza",
    "title": "Novice Designer", 
    "tagline": "Creating visual stories through design and creativity",
    "bio": "Passionate graphic designer dengan expertise di Adobe Creative Suite dan modern design tools. Saya mengkhususkan diri dalam menciptakan identitas visual yang compelling, graphics yang stunning, dan layouts professional yang komunikatif dengan efektif.",
    "Image": "https://i.ibb.co.com/0pyDsz0j/1000090479.jpg",
    "location": "Banjarbaru, Indonesia", 
    "email": "ariza0562@gmail.com",
    "phone": "6285388368199"
  },
  "socialLinks": [
    {"name": "Instagram", "url": "https://www.instagram.com/arkh_tong?igsh=czVud3IyeDF4cmxp", "icon": "instagram"},
    {"name": "LinkedIn", "url": "https://www.linkedin.com/in/ariza-kholish-1557772a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "icon": "linkedin"}
  ],
  "skills": [
    {"name": "Adobe Illustrator", "level": 85, "icon": "adobe-illustrator", "brandColor": "#FF9A00"},
    {"name": "CorelDraw", "level": 80, "icon": "coreldraw", "brandColor": "#00A859"},
    {"name": "Adobe Photoshop", "level": 75, "icon": "adobe-photoshop", "brandColor": "#31A8FF"},
    {"name": "MS Word", "level": 90, "icon": "microsoft-word", "brandColor": "#0078D4"},
    {"name": "Canva", "level": 85, "icon": "canva", "brandColor": "#00C4CC"}
  ],
  "projects": [
    {
      "id": 1,
      "title": "Brand Identity Design",
      "description": "Complete brand identity package including logo, color palette, typography, and brand guidelines for a tech startup.",
      "image": "https://i.ibb.co.com/1fj1Gh1q/LOKA-Recovered.jpg",
      "techStack": ["Adobe Illustrator", "Adobe Photoshop", "CorelDraw"],
      "liveUrl": "#",
      "githubUrl": "#",
      "category": "Brand Design"
    },
    {
      "id": 2, 
      "title": "Poster Campaign Series",
      "description": "Eye-catching poster series for environmental awareness campaign with modern typography and compelling visuals.",
      "image": "https://i.ibb.co.com/fG1rwftk/1000090486-1.jpg",
      "techStack": ["Adobe Illustrator", "Adobe Photoshop", "Canva"],
      "liveUrl": "#",
      "githubUrl": "#", 
      "category": "Print Design"
    },
    {
      "id": 3,
      "title": "Logo Collection 2024",
      "description": "Diverse collection of logos designed for various clients including restaurants, tech companies, and creative agencies.",
      "image": "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=600&h=400&fit=crop",
      "techStack": ["Adobe Illustrator", "CorelDraw"],
      "liveUrl": "#",
      "githubUrl": "#",
      "category": "Logo Design"
    },
    {
      "id": 4,
      "title": "Digital Marketing Materials", 
      "description": "Complete set of digital marketing assets including social media graphics, web banners, and email templates.",
      "image": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      "techStack": ["Canva", "Adobe Photoshop", "MS Word"],
      "liveUrl": "#",
      "githubUrl": "#",
      "category": "Digital Design"
    }
  ],
  "experience": [
    {
      "company": "Creative Studio Indonesia",
      "position": "Senior Graphic Designer",
      "period": "2021 - Present",
      "description": "Leading design projects for various clients, specializing in brand identity and print design using Adobe Creative Suite."
    },
    {
      "company": "Digital Agency Jakarta", 
      "position": "Junior Designer",
      "period": "2019 - 2021",
      "description": "Created digital marketing materials and social media graphics using modern design tools and software."
    }
  ]
};

// Authentic brand logos as SVG or text representations
const brandLogos = {
  "adobe-illustrator": {
    type: "text",
    content: "Ai",
    brandClass: "adobe-illustrator"
  },
  "adobe-photoshop": {
    type: "text", 
    content: "Ps",
    brandClass: "adobe-photoshop"
  },
  "coreldraw": {
    type: "text",
    content: "CD",
    brandClass: "coreldraw"
  },
  "microsoft-word": {
    type: "text",
    content: "W",
    brandClass: "microsoft-word"
  },
  "canva": {
    type: "text",
    content: "C",
    brandClass: "canva"
  }
};

// DOM Elements
let cursor, cursorTrail, navbar, navMenu, navToggle, loading;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    populateProjects();
    populateSkills();
    setupScrollAnimations();
    hideLoadingScreen();
    setupCustomCursor();
    setupSmoothScrolling();
});

// Initialize DOM elements
function initializeElements() {
    cursor = document.querySelector('.cursor');
    cursorTrail = document.querySelector('.cursor-trail');
    navbar = document.getElementById('navbar');
    navMenu = document.getElementById('nav-menu');
    navToggle = document.getElementById('nav-toggle');
    loading = document.getElementById('loading');
}

// Setup event listeners
function setupEventListeners() {
    // Scroll event for navbar visibility and animations
    window.addEventListener('scroll', handleScroll);
    
    // Mobile navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation link clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Mouse movement for custom cursor
    document.addEventListener('mousemove', updateCursor);
    
    // Window resize for responsive adjustments
    window.addEventListener('resize', handleResize);
}

// Hide loading screen
function hideLoadingScreen() {
    setTimeout(() => {
        if (loading) {
            loading.classList.add('hidden');
        }
        // Show navbar after loading
        if (navbar) {
            navbar.classList.add('visible');
        }
    }, 1500);
}

// Custom cursor functionality
function setupCustomCursor() {
    if (!cursor || !cursorTrail) return;
    
    // Hide cursor on touch devices
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        cursorTrail.style.display = 'none';
        return;
    }
    
    // Interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .social-link, .skill-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorTrail.style.transform = 'scale(0.8)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorTrail.style.transform = 'scale(1)';
        });
    });
}

// Update cursor position
function updateCursor(e) {
    if (!cursor || !cursorTrail) return;
    
    const x = e.clientX;
    const y = e.clientY;
    
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    
    setTimeout(() => {
        cursorTrail.style.left = x + 'px';
        cursorTrail.style.top = y + 'px';
    }, 100);
}

// Handle scroll events
function handleScroll() {
    const scrollY = window.scrollY;
    
    // Navbar visibility with dark glassmorphism background
    if (navbar) {
        if (scrollY > 100) {
            navbar.style.background = 'rgba(15, 15, 15, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(15, 15, 15, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    }
    
    // Update active navigation link
    updateActiveNavLink();
    
    // Trigger scroll animations
    triggerScrollAnimations();
    
    // Parallax effect for hero background
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const parallaxSpeed = scrollY * 0.3;
        heroBackground.style.transform = `translateY(${parallaxSpeed}px)`;
    }
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Trigger scroll animations
function triggerScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Setup scroll animations observer
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars with brand colors
                if (entry.target.classList.contains('skill-item')) {
                    const skillBar = entry.target.querySelector('.skill-bar');
                    const skillLevel = skillBar.dataset.level;
                    setTimeout(() => {
                        skillBar.style.width = skillLevel + '%';
                        // Add glow effect on animation
                        skillBar.style.boxShadow = `0 0 10px ${skillBar.dataset.brandColor}40`;
                    }, 300);
                }
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    if (navMenu && navToggle) {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    }
}

// Handle navigation link clicks
function handleNavClick(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Close mobile menu if open
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Setup smooth scrolling for all anchor links
function setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Populate projects section
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    portfolioData.projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card animate-on-scroll';
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
        <div class="project-content">
            <div class="project-category">${project.category}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.liveUrl}" class="project-link" target="_blank">Live Demo</a>
                <a href="${project.githubUrl}" class="project-link" target="_blank">Portfolio</a>
            </div>
        </div>
    `;
    
    // Add hover animation with brand-aware glow
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '';
    });
    
    return card;
}

// Populate skills section with authentic brand logos
function populateSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    portfolioData.skills.forEach(skill => {
        const skillItem = createSkillItem(skill);
        skillsGrid.appendChild(skillItem);
    });
}

// Create skill item element with authentic brand logo
function createSkillItem(skill) {
    const item = document.createElement('div');
    item.className = 'skill-item animate-on-scroll';
    
    const logoInfo = brandLogos[skill.icon];
    const logoElement = createBrandLogo(logoInfo);
    
    item.innerHTML = `
        ${logoElement}
        <h3 class="skill-name">${skill.name}</h3>
        <div class="skill-progress">
            <div class="skill-bar ${logoInfo.brandClass}" data-level="${skill.level}" data-brand-color="${skill.brandColor}" style="width: 0%"></div>
        </div>
        <span class="skill-percentage">${skill.level}%</span>
    `;
    
    // Add brand-specific hover effects
    item.addEventListener('mouseenter', function() {
        const logo = this.querySelector('.skill-logo');
        const progressBar = this.querySelector('.skill-bar');
        
        if (logo && progressBar) {
            logo.style.boxShadow = `0 0 20px ${skill.brandColor}60`;
            progressBar.style.boxShadow = `0 0 15px ${skill.brandColor}80`;
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const logo = this.querySelector('.skill-logo');
        const progressBar = this.querySelector('.skill-bar');
        
        if (logo && progressBar) {
            logo.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            progressBar.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.2)';
        }
    });
    
    return item;
}

// Create authentic brand logo element
function createBrandLogo(logoInfo) {
    if (logoInfo.type === 'text') {
        return `<div class="skill-logo ${logoInfo.brandClass}">${logoInfo.content}</div>`;
    }
    
    // Fallback for other logo types
    return `<div class="skill-logo ${logoInfo.brandClass}">${logoInfo.content}</div>`;
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('.submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const buttonLoader = submitButton.querySelector('.button-loader');
    
    // Show loading state
    buttonText.classList.add('hidden');
    buttonLoader.classList.remove('hidden');
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Reset button state
        buttonText.classList.remove('hidden');
        buttonLoader.classList.add('hidden');
        submitButton.disabled = false;
        
        // Show success message
        showNotification('Pesan berhasil dikirim! Terima kasih.', 'success');
    }, 2000);
}

// Show notification with dark glassmorphism theme styling
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    // Dark glassmorphism theme notification styling
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(0, 212, 255, 0.3);
        border-radius: 12px;
        padding: 16px 24px;
        color: #00d4ff;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        font-weight: 500;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Handle window resize
function handleResize() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
}

// Enhanced particle background for dark glassmorphism theme
function createParticleBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    
    document.body.appendChild(canvas);
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5,
            // Cool blue/cyan color palette for dark theme
            color: `rgba(${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 100) + 180}, ${Math.floor(Math.random() * 50) + 200}, 0.6)`
        };
    }
    
    const particles = [];
    for (let i = 0; i < 30; i++) {
        particles.push(createParticle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.y > canvas.height) particle.y = 0;
            if (particle.y < 0) particle.y = canvas.height;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    resize();
    animate();
    window.addEventListener('resize', resize);
}

// Initialize subtle particle background for dark glassmorphism theme
setTimeout(createParticleBackground, 2000);

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimizations
const debouncedResize = debounce(handleResize, 250);
const throttledScroll = throttle(handleScroll, 16);

// Replace original event listeners with optimized versions
window.removeEventListener('scroll', handleScroll);
window.removeEventListener('resize', handleResize);
window.addEventListener('scroll', throttledScroll);
window.addEventListener('resize', debouncedResize);

// Export functions for global access
window.scrollToSection = scrollToSection;

// Console welcome message with brand theme colors
console.log('%c🎨 Alex Rivera Portfolio - Professional Brand Edition', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cFeaturing authentic software logos with glassmorphism dark theme!', 'color: #7c3aed; font-size: 12px;');
console.log('%cAdobe Illustrator • CorelDraw • Adobe Photoshop • MS Word • Canva', 'color: #ffffff; font-size: 10px;');
