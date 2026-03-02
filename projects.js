// Theme switching function
function setTheme(themeName) {
    document.body.setAttribute('data-theme', themeName);
    localStorage.setItem('selectedTheme', themeName);
    
    const colorDots = document.querySelectorAll('.color-dot');
    colorDots.forEach(dot => dot.classList.remove('active'));
    
    const activeDot = document.querySelector(`.dot-${themeName}`);
    if (activeDot) activeDot.classList.add('active');
}

// Load saved theme
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
    setTheme(savedTheme);
}

// Handle image errors and show fallbacks
function handleImageErrors() {
    // Handle project images
    const projectImages = document.querySelectorAll('.project-preview-img');
    projectImages.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const fallback = this.parentElement.querySelector('.image-fallback');
            if (fallback) {
                fallback.style.display = 'flex';
            }
        });
    });
    
    // Handle tech stack images with CDN fallback
    const techImages = document.querySelectorAll('.skill img');
    techImages.forEach(img => {
        img.addEventListener('error', function() {
            const parent = this.parentElement;
            const techName = this.alt;
            
            const iconMap = {
                'HTML5': 'code',
                'CSS3': 'palette',
                'Tailwind CSS': 'style',
                'JavaScript': 'javascript',
                'React': 'code',
                'Node.js': 'settings',
                'Express': 'bolt',
                'Bash': 'terminal',
                'Babel': 'transform',
                'npm': 'folder',
                'Git': 'share',
                'GitHub Pages': 'cloud',
                'WordPress': 'web',
                'Canva': 'brush',
                'Photoshop': 'brush',
                'Firebase': 'storage',
                'AWS': 'cloud',
                'Google Cloud': 'cloud',
                'Salesforce': 'cloud',
                'Windows': 'window',
                'Unix/Linux': 'terminal'
            };
            
            parent.innerHTML = `
                <span class="material-icons">${iconMap[techName] || 'code'}</span>
                <span>${techName}</span>
            `;
        });
    });
}

// Mobile menu toggle functionality (if needed)
function initMobileMenu() {
    const toggleBtn = document.querySelector('.toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Animation on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply animations to project cards and skills
    document.querySelectorAll('.project-card, .skill').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add active state to theme dots
function initThemeDots() {
    const darkDot = document.querySelector('.dot-dark');
    const lightDot = document.querySelector('.dot-light');
    
    if (darkDot) {
        darkDot.addEventListener('click', () => setTheme('dark'));
    }
    
    if (lightDot) {
        lightDot.addEventListener('click', () => setTheme('light'));
    }
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', function() {
    loadSavedTheme();
    handleImageErrors();
    initMobileMenu();
    initScrollAnimations();
    initThemeDots();
    
    // Add image paths for fallback (if needed)
    const imagePaths = {
        'cv-resume': './img/cv-resume.jpeg',
        'projects': './img/projects.jpg',
        'schety': './img/schety.jpg',
        'annex': './img/Annex.jpg',
        'thesis': './img/thesis.jpg',
        'tumblr-theme': './img/tumblr-theme.jpeg',
        'tic-tac-toe': './img/tic-tac-toe.gif',
        'halloween': './img/HelloweenApp.jpg'
    };
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }
});
