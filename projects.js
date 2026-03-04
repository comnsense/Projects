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

// Mobile menu toggle functionality
function initMobileMenu() {
    const toggleBtn = document.querySelector('.toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = toggleBtn.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = toggleBtn.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
            });
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
    
    // Apply animations to project cards, skills, and office cards
    document.querySelectorAll('.project-card, .skill, .office-skill-card, .skill-category').forEach(el => {
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

// Load courses data
function loadCoursesData() {
    const coursesData = [
        { bg: "Въведение в предприемачеството", en: "Introduction to Entrepreneurship" },
        { bg: "Въведение в компютърните науки", en: "Introduction to Computer Science" },
        { bg: "Компютърни архитектури", en: "Computer Architectures" },
        { bg: "Линейна алгебра и аналитична геометрия", en: "Linear Algebra & Analytic Geometry" },
        { bg: "Академично писане", en: "Academic Writing" },
        { bg: "Програмиране", en: "Programming" },
        { bg: "Операционни системи", en: "Operating Systems" },
        { bg: "Уеб технологии", en: "Web Technologies" },
        { bg: "Математически анализ", en: "Mathematical Analysis" },
        { bg: "ИТ средства за анализ на данни", en: "IT Tools for Data Analysis" },
        { bg: "Обектно-ориентирано програмиране", en: "Object-Oriented Programming" },
        { bg: "Структури от данни и алгоритми", en: "Data Structures & Algorithms" },
        { bg: "Потребителски интерфейси и използваемост", en: "User Interfaces & Usability" },
        { bg: "Компютърни мрежи и комуникации", en: "Computer Networks & Communications" },
        { bg: "Математически основи на информатиката", en: "Mathematical Foundations of Informatics" },
        { bg: "Бази данни", en: "Databases" },
        { bg: "Вероятности и статистика", en: "Probability & Statistics" },
        { bg: "Програмиране с PHP", en: "Programming with PHP" },
        { bg: "Техники на програмиране", en: "Programming Techniques" },
        { bg: "3D моделиране и принтиране", en: "3D Modeling & Printing" },
        { bg: "JavaScript технологии", en: "JavaScript Technologies" },
        { bg: "Въведение в микроконтролерите", en: "Introduction to Microcontrollers" },
        { bg: "Компютърна графика", en: "Computer Graphics" },
        { bg: "Програмиране с Python", en: "Programming with Python" },
        { bg: "Криптография", en: "Cryptography" },
        { bg: "Въведение в мениджмънта", en: "Introduction to Management" },
        { bg: "Софтуерно инженерство", en: "Software Engineering" },
        { bg: "Разработка на мобилни приложения", en: "Mobile App Development" },
        { bg: "Психология на интелекта", en: "Psychology of Intelligence" },
        { bg: "Киберсигурност", en: "Cybersecurity" },
        { bg: "Уеб услуги и облачни технологии", en: "Web Services & Cloud Technologies" },
        { bg: "Анимация в уеб", en: "Web Animation" },
        { bg: "Функционално програмиране", en: "Functional Programming" },
        { bg: "Управление на бизнес процеси", en: "Business Process Management" },
        { bg: "Софтуерни архитектури", en: "Software Architectures" },
        { bg: "Научноизследователски стаж", en: "Research Internship" },
        { bg: "Интелигентни системи", en: "Intelligent Systems" },
        { bg: "Електронен бизнес", en: "E-business" },
        { bg: "Мултимедийни системи – практикум", en: "Multimedia Systems – practicum" },
        { bg: "Уеб дизайн – практикум", en: "Web Design – practicum" },
        { bg: "Операционни системи /практикум/", en: "Operating Systems practicum" },
        { bg: "Невронауки", en: "Neurosciences" },
        { bg: "Преддипломна практика/стаж", en: "Pre-graduation internship" }
    ];

    const tbody = document.getElementById('courses-table-body');
    if (tbody) {
        coursesData.forEach(c => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${c.bg}</td><td>${c.en}</td>`;
            tbody.appendChild(row);
        });
    }
}

// Load office skills data
function loadOfficeSkills() {
    const officeSkills = [
        { 
            name: "BulMar Office", 
            description: "Счетоводство+, ТРЗ - счетоводен софтуер", 
            icon: "fa-calculator", 
            link: "https://bulmar.com/bg/accounting-software" 
        },
        { 
            name: "Кредо 2000", 
            description: "ERP система за счетоводство и управление", 
            icon: "fa-database", 
            link: "#" 
        },
        { 
            name: "MS Office", 
            description: "Excel, Word, Outlook, PowerPoint", 
            icon: "fa-file-excel", 
            link: "#" 
        },
        { 
            name: "Google Workspace", 
            description: "Gmail, Drive, Docs, Sheets, Calendar, Meet", 
            icon: "fa-cloud", 
            link: "#" 
        },
        { 
            name: "Google Analytics", 
            description: "Анализ на уеб трафик, проследяване на посетители, поведенчески анализи, GA4 конфигурация", 
            icon: "fa-chart-line", 
            link: "#" 
        },
        { 
            name: "CRM Системи", 
            description: "Управление на клиентски взаимоотношения и продажби", 
            icon: "fa-handshake", 
            link: "#" 
        }
    ];

    const container = document.getElementById('officeSkillsContainer');
    if (container) {
        officeSkills.forEach(skill => {
            const card = document.createElement('div');
            card.className = 'office-skill-card';
            const linkHref = skill.link && skill.link !== '#' ? skill.link : '#';
            card.innerHTML = `
                <div class="office-skill-header">
                    <div class="office-skill-icon"><i class="fas ${skill.icon}"></i></div>
                    <h3 class="office-skill-name">${skill.name}</h3>
                </div>
                <p class="office-skill-description">${skill.description}</p>
                <a href="${linkHref}" class="office-skill-link" target="${linkHref !== '#' ? '_blank' : '_self'}">
                    <span>Научете повече</span> <i class="fas fa-arrow-right"></i>
                </a>
            `;
            container.appendChild(card);
        });
    }
}

// Add smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Handle window resize
function handleResize() {
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const toggleBtn = document.querySelector('.toggle i');
            if (toggleBtn) {
                toggleBtn.className = 'fas fa-bars';
            }
        }
    }
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', function() {
    loadSavedTheme();
    handleImageErrors();
    initMobileMenu();
    initScrollAnimations();
    initThemeDots();
    initSmoothScroll();
    loadCoursesData();
    loadOfficeSkills();
    
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
window.addEventListener('resize', handleResize);
