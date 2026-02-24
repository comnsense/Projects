<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>web design · responsive</title>
  <!-- Font Awesome 6 (free) for clean icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    /* ===============================================
       СЪВРЕМЕННИ CSS ТЕХНИКИ, ИЗПОЛЗВАНИ В ПРОЕКТА:
       
       1. clamp() - за responsive типография, която се мащабира спрямо екрана
       2. backdrop-filter - за замъгляване на header-a при скролване
       3. CSS Grid и Flexbox - за гъвкави и адаптивни layouts
       4. CSS променливи (system-ui) - за бързо зареждане
       5. Градиенти (linear-gradient) - за декоративни елементи като подчертавания
       6. transition - за плавни анимации при hover ефекти
       7. scroll-behavior: smooth - за плавно скролване към секциите
       =============================================== */

    /* ===== RESET & BASE ===== */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
      background: #f8fafc;
      color: #0f172a;
      line-height: 1.5;
      scroll-behavior: smooth; /* ПЛАВНО СКРОЛВАНЕ КЪМ СЕКЦИИТЕ */
    }

    /* ===== TYPOGRAPHY & UTILITY ===== */
    h1, h2, h3 {
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    h1 {
      /* RESPONSIVE ТИПОГРАФИЯ С clamp(): 
         минимален размер 2.5rem, предпочитан 8% от viewport, максимален 4rem */
      font-size: clamp(2.5rem, 8vw, 4rem);
    }

    h2 {
      font-size: clamp(2rem, 6vw, 2.8rem);
      margin-bottom: 1.5rem;
      position: relative;
      display: inline-block;
    }
    
    /* ДЕКОРАТИВНА АНИМИРАНА ЛИНИЯ ПОД ЗАГЛАВИЯТА */
    h2:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 70px;
      height: 4px;
      /* ГРАДИЕНТ ЗА МОДЕРЕН ВИЗУАЛЕН ЕФЕКТ */
      background: linear-gradient(90deg, #2563eb, #7c3aed);
      border-radius: 4px;
      /* ПЛАВНА АНИМАЦИЯ ПРИ HOVER (няма директно, но може да се добави) */
      transition: width 0.3s ease;
    }
    
    /* ЛИНИЯТА СЕ РАЗШИРЯВА ПРИ HOVER НА ЗАГЛАВИЕТО */
    h2:hover:after {
      width: 120px;
    }

    .section-padding {
      padding: 5rem 1.5rem;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* ===== HEADER / NAV ===== */
    .site-header {
      /* STICKY HEADER - ОСТАВА ОТГОРЕ ПРИ СКРОЛВАНЕ */
      position: sticky;
      top: 0;
      z-index: 100;
      
      /* BACKDROP-FILTER ЗА ЗАМЪГЛЯНЕ - модерен ефект на стъкло */
      background: rgba(255,255,255,0.85);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      
      box-shadow: 0 4px 30px rgba(0,0,0,0.03);
      border-bottom: 1px solid rgba(226, 232, 240, 0.6);
    }

    .navbar {
      /* FLEXBOX ЗА НАВИГАЦИЯТА */
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 1.5rem;
    }

    .logo {
      font-size: 1.8rem;
      font-weight: 800;
      /* ГРАДИЕНТЕН ТЕКСТ - модерен визуален ефект */
      background: linear-gradient(135deg, #1e3c72, #2a5298);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.02em;
    }

    .nav-links {
      display: flex;
      gap: 2.5rem;
      font-weight: 500;
    }
    .nav-links a {
      text-decoration: none;
      color: #1e293b;
      /* ПЛАВЕН ПРЕХОД ЗА HOVER ЕФЕКТА */
      transition: color 0.2s;
      font-size: 1.1rem;
    }
    
    /* HOVER ЕФЕКТ НА ЛИНКОВЕТЕ - промяна на цвета */
    .nav-links a:hover {
      color: #2563eb;
    }

    /* MOBILE MENU TOGGLE - скрит на десктоп */
    .menu-toggle {
      display: none;
      font-size: 1.8rem;
      background: none;
      border: none;
      color: #0f172a;
      cursor: pointer;
    }

    /* ===== HERO SECTION ===== */
    .hero {
      background: linear-gradient(145deg, #f1f5f9 0%, #ffffff 100%);
      overflow: hidden;
    }
    
    /* FLEXBOX ЗА HERO - две колони на десктоп, една на мобилно */
    .hero-grid {
      display: flex;
      align-items: center;
      gap: 3rem;
      flex-wrap: wrap;
    }
    .hero-content {
      flex: 1 1 400px;
    }
    .hero-content p {
      font-size: 1.25rem;
      color: #334155;
      margin: 1.5rem 0 2rem;
      max-width: 600px;
    }
    .hero-image {
      flex: 1 1 300px;
      display: flex;
      justify-content: center;
    }
    .hero-image svg {
      width: 100%;
      max-width: 500px;
      height: auto;
      filter: drop-shadow(0 20px 25px -5px rgba(0,0,0,0.1));
    }

    /* ОСНОВЕН БУТОН С HOVER ЕФЕКТ */
    .btn {
      display: inline-block;
      background: #2563eb;
      color: white;
      font-weight: 600;
      padding: 0.9rem 2rem;
      border-radius: 60px;
      text-decoration: none;
      /* ПЛАВНИ ПРЕХОДИ ЗА HOVER ЕФЕКТИТЕ */
      transition: all 0.2s;
      border: none;
      font-size: 1.1rem;
      box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
    }
    
    /* HOVER ЕФЕКТ НА БУТОН - повдигане и по-силна сянка */
    .btn:hover {
      background: #1d4ed8;
      transform: translateY(-3px);
      box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.4);
    }
    
    /* OUTLINE БУТОН - вторичен стил */
    .btn-outline {
      background: transparent;
      color: #1e293b;
      box-shadow: none;
      border: 2px solid #cbd5e1;
      margin-left: 1rem;
    }
    .btn-outline:hover {
      background: #ffffff;
      border-color: #2563eb;
      color: #2563eb;
      transform: translateY(-3px);
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
    }

    /* ===== SERVICES SECTION ===== */
    .services {
      background: #ffffff;
    }
    
    /* CSS GRID ЗА УСЛУГИТЕ - auto-fit създава адаптивна мрежа */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
    
    /* КАРТА ЗА УСЛУГА С HOVER ЕФЕКТ */
    .service-card {
      background: #ffffff;
      padding: 2rem 1.5rem;
      border-radius: 2rem;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.08);
      /* ПЛАВЕН ПРЕХОД ЗА HOVER ЕФЕКТА */
      transition: all 0.25s ease;
      border: 1px solid #eef2f6;
    }
    
    /* HOVER ЕФЕКТ НА КАРТАТА - леко увеличение и промяна на бордера */
    .service-card:hover {
      transform: scale(1.02);
      border-color: #b1c5e0;
      box-shadow: 0 30px 60px -15px rgba(37, 99, 235, 0.2);
    }
    
    .service-icon {
      font-size: 2.8rem;
      /* ГРАДИЕНТЕН ФОН ЗА ИКОНИТЕ */
      background: linear-gradient(145deg, #dbeafe, #ede9fe);
      width: 80px;
      height: 80px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.8rem;
      color: #2563eb;
    }
    .service-card h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    .service-card p {
      color: #475569;
    }

    /* ===== PORTFOLIO SHOWCASE ===== */
    .portfolio {
      background: #f1f5f9;
    }
    
    /* CSS GRID ЗА ПОРТФОЛИОТО */
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
    
    .portfolio-item {
      background: white;
      border-radius: 2rem;
      overflow: hidden;
      box-shadow: 0 8px 20px rgba(0,0,0,0.02);
      transition: all 0.25s;
      border: 1px solid #e2e8f0;
    }
    
    /* HOVER ЕФЕКТ НА ПОРТФОЛИО КАРТА - по-силна сянка */
    .portfolio-item:hover {
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
    }
    
    .portfolio-img {
      background: linear-gradient(145deg, #2563eb10, #7c3aed10);
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #64748b;
      font-size: 3rem;
    }
    .portfolio-desc {
      padding: 1.8rem 1.5rem 2rem;
    }
    .portfolio-desc h3 {
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
    }
    .tag {
      display: inline-block;
      background: #e2e8f0;
      padding: 0.25rem 1rem;
      border-radius: 40px;
      font-size: 0.9rem;
      font-weight: 500;
      color: #334155;
      margin-top: 1rem;
    }

    /* ===== CONTACT / ABOUT ===== */
    .contact {
      background: white;
    }
    
    /* FLEXBOX ЗА КОНТАКТ СЕКЦИЯТА */
    .contact-container {
      display: flex;
      gap: 3rem;
      flex-wrap: wrap;
      align-items: center;
    }
    .contact-text {
      flex: 1 1 300px;
    }
    .contact-text p {
      font-size: 1.2rem;
      color: #334155;
      margin: 1.5rem 0;
    }
    .contact-details {
      list-style: none;
      margin: 2rem 0;
    }
    .contact-details li {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.1rem;
    }
    .contact-details i {
      width: 40px;
      height: 40px;
      background: #dbeafe;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #2563eb;
    }
    
    /* СОЦИАЛНИ ИКОНИ С HOVER ЕФЕКТ */
    .contact-text > div i {
      transition: transform 0.2s, color 0.2s;
      cursor: pointer;
    }
    .contact-text > div i:hover {
      transform: translateY(-5px);
      color: #1e3c72;
    }
    
    /* ФОРМА ЗА КОНТАКТИ */
    .contact-form {
      flex: 1 1 380px;
      background: #f8fafc;
      padding: 2.5rem;
      border-radius: 2.5rem;
      box-shadow: 0 25px 40px -20px rgba(0,0,0,0.1);
      border: 1px solid #e9eef3;
    }
    .form-group {
      margin-bottom: 1.2rem;
    }
    input, textarea {
      width: 100%;
      padding: 1rem 1.2rem;
      border: 2px solid #e2e8f0;
      border-radius: 50px;
      font-size: 1rem;
      background: white;
      transition: border 0.2s;
    }
    textarea {
      border-radius: 30px;
      resize: vertical;
    }
    
    /* ФОКУС ЕФЕКТ НА ПОЛЕТАТА */
    input:focus, textarea:focus {
      outline: none;
      border-color: #2563eb;
    }
    
    .form-btn {
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 60px;
      padding: 1rem 2rem;
      font-weight: 600;
      font-size: 1.1rem;
      width: 100%;
      cursor: pointer;
      transition: background 0.2s;
    }
    .form-btn:hover {
      background: #1e40af;
    }

    /* ===== FOOTER ===== */
    .footer {
      background: #0f172a;
      color: #cbd5e1;
      text-align: center;
      padding: 2.5rem 1.5rem;
      font-size: 1rem;
    }
    .footer a {
      color: #94a3b8;
      text-decoration: none;
      margin: 0 0.5rem;
      transition: color 0.2s;
    }
    .footer a:hover {
      color: white;
    }

    /* ===============================================
       RESPONSIVE DESIGN - АДАПТИВНОСТ ЗА ВСИЧКИ УСТРОЙСТВА
       
       1. Mobile (до 768px):
          - Менюто се скрива и се появява hamburger бутон
          - Бутоните стават цяла ширина
          - Заглавията се центрират
          - Услугите и иконите се центрират
       
       2. Tablet (769px - 1024px):
          - Оптимизирани разстояния между елементите
          - Гъвкава мрежа за услуги и портфолио
       
       3. Desktop (над 1024px):
          - Максимална ширина 1200px
          - Две колони в hero и contact секциите
          - Много колони за услугите
       =============================================== */

    /* MOBILE (до 768px) */
    @media screen and (max-width: 768px) {
      .navbar {
        flex-wrap: wrap;
      }
      
      /* МЕНЮТО СЕ СКРИВА - показва се само при клик */
      .nav-links {
        display: none;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 1.2rem;
        padding: 1.5rem 0 1rem;
        background: white;
        border-radius: 40px;
        margin-top: 1rem;
        box-shadow: 0 15px 30px -12px rgba(0,0,0,0.1);
      }
      .nav-links.show {
        display: flex;
      }
      
      /* HAMBURGER БУТОН - появява се на mobile */
      .menu-toggle {
        display: block;
      }
      
      /* БУТОНИТЕ СТАВАТ ЦЯЛА ШИРИНА */
      .hero-content .btn {
        display: block;
        width: 100%;
        text-align: center;
        margin: 0.5rem 0;
      }
      .btn-outline {
        margin-left: 0;
        margin-top: 0.5rem;
      }
      
      /* ЗАГЛАВИЯТА СЕ ЦЕНТРИРАТ */
      h2:after {
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
      }
      h2 {
        text-align: center;
        display: block;
      }
      
      /* УСЛУГИТЕ И ИКОНИТЕ СЕ ЦЕНТРИРАТ */
      .service-card {
        text-align: center;
      }
      .service-icon {
        margin-left: auto;
        margin-right: auto;
      }
    }

    /* TABLET (между 769px и 1024px) */
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      .hero-grid {
        gap: 1rem;
      }
    }
  </style>
</head>
<body>
  <!-- ===============================================
       HEADER - НАВИГАЦИЯ
       
       - Sticky header: остава отгоре при скролване
       - Лого с градиентен текст
       - Навигационни линкове: Home, Services, Work, Contact
       - Mobile меню с hamburger бутон
       =============================================== -->
  <header class="site-header">
    <nav class="navbar">
      <div class="logo">web design<span style="color:#2563eb; -webkit-text-fill-color: #2563eb;">.</span></div>
      <button class="menu-toggle" id="menuToggle" aria-label="menu"><i class="fas fa-bars"></i></button>
      <div class="nav-links" id="navLinks">
        <a href="#">Home</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </header>

  <main>
    <!-- ===============================================
         HERO SECTION - НАЧАЛНА СЕКЦИЯ
         
         - Заглавие с responsive текст (clamp)
         - Подзаглавие с описание
         - Два бутона с hover ефекти (повдигане)
         - SVG илюстрация с абстрактен дизайн
         =============================================== -->
    <section class="hero section-padding">
      <div class="container hero-grid">
        <div class="hero-content">
          <h1>Crafting digital experiences <br> through <span style="color:#2563eb;">web design</span></h1>
          <p>We blend aesthetics with function — responsive, human‑centered websites that engage and convert. Every layout tells your story.</p>
          <div>
            <a href="#contact" class="btn">Start a project</a>
            <a href="#work" class="btn btn-outline">See our work</a>
          </div>
        </div>
        <div class="hero-image">
          <!-- SVG илюстрация - абстрактен дизайн с цветни елементи -->
          <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="140" height="100" rx="20" fill="#2563eb" fill-opacity="0.1" stroke="#2563eb" stroke-width="2" />
            <rect x="210" y="40" width="140" height="100" rx="20" fill="#7c3aed" fill-opacity="0.1" stroke="#7c3aed" stroke-width="2" />
            <rect x="30" y="170" width="140" height="140" rx="20" fill="#2563eb" fill-opacity="0.1" stroke="#2563eb" stroke-width="2" />
            <rect x="210" y="170" width="140" height="140" rx="20" fill="#7c3aed" fill-opacity="0.1" stroke="#7c3aed" stroke-width="2" />
            <circle cx="100" cy="240" r="16" fill="#2563eb" />
            <circle cx="280" cy="240" r="16" fill="#7c3aed" />
            <path d="M130 100 L250 100" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 6" />
            <path d="M130 220 L250 220" stroke="#7c3aed" stroke-width="3" stroke-dasharray="6 6" />
            <circle cx="340" cy="80" r="8" fill="#facc15" />
            <circle cx="40" cy="310" r="8" fill="#f97316" />
          </svg>
        </div>
      </div>
    </section>

    <!-- ===============================================
         SERVICES SECTION - УСЛУГИ
         
         - Четири услуги с икони
         - Всяка карта има hover ефект (леко увеличение)
         - Иконите са с градиентен фон
         - CSS Grid за responsive подредба
         =============================================== -->
    <section id="services" class="services section-padding">
      <div class="container">
        <h2>web design expertise</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon"><i class="fas fa-pen-ruler"></i></div>
            <h3>UI/UX design</h3>
            <p>Wireframes, prototypes and user‑centered interfaces that feel intuitive on any device.</p>
          </div>
          <div class="service-card">
            <div class="service-icon"><i class="fas fa-code"></i></div>
            <h3>front‑end dev</h3>
            <p>HTML, CSS, JavaScript — pixel‑perfect responsive implementations with performance in mind.</p>
          </div>
          <div class="service-card">
            <div class="service-icon"><i class="fas fa-mobile-screen"></i></div>
            <h3>mobile first</h3>
            <p>From smartphone to 4K, your website will look stunning and work flawlessly everywhere.</p>
          </div>
          <div class="service-card">
            <div class="service-icon"><i class="fas fa-chart-line"></i></div>
            <h3>SEO & strategy</h3>
            <p>Beautiful design that also ranks — we build with discoverability and business goals.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===============================================
         PORTFOLIO SECTION - ПРОЕКТИ
         
         - Четири примерни проекта
         - Всеки с икона, заглавие, описание и таг
         - Hover ефект със засилена сянка
         - CSS Grid за responsive подредба
         =============================================== -->
    <section id="work" class="portfolio section-padding">
      <div class="container">
        <h2>selected projects</h2>
        <div class="portfolio-grid">
          <div class="portfolio-item">
            <div class="portfolio-img"><i class="fas fa-palette"></i></div>
            <div class="portfolio-desc">
              <h3>minimalist studio</h3>
              <p>Art gallery site with fluid grid and soft transitions.</p>
              <span class="tag">creative</span>
            </div>
          </div>
          <div class="portfolio-item">
            <div class="portfolio-img"><i class="fas fa-cart-shopping"></i></div>
            <div class="portfolio-desc">
              <h3>urban store</h3>
              <p>E‑commerce with seamless cart & product filtering.</p>
              <span class="tag">shop</span>
            </div>
          </div>
          <div class="portfolio-item">
            <div class="portfolio-img"><i class="fas fa-leaf"></i></div>
            <div class="portfolio-desc">
              <h3>green energy</h3>
              <p>Corporate site with animated infographics, fully responsive.</p>
              <span class="tag">sustainable</span>
            </div>
          </div>
          <div class="portfolio-item">
            <div class="portfolio-img"><i class="fas fa-utensils"></i></div>
            <div class="portfolio-desc">
              <h3>savory cafe</h3>
              <p>Menu & booking system with mobile‑friendly design.</p>
              <span class="tag">local biz</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===============================================
         CONTACT SECTION - КОНТАКТИ
         
         Лява част:
         - Заглавие и описание
         - Контактни данни с икони (имейл, телефон, локация)
         - Социални икони с hover ефект
         
         Дясна част (форма):
         - Поле за име
         - Поле за имейл (с валидация)
         - Текстово поле (textarea)
         - Бутон за изпращане
         - Фокус ефекти на полетата
         =============================================== -->
    <section id="contact" class="contact section-padding">
      <div class="container contact-container">
        <div class="contact-text">
          <h2>let's connect</h2>
          <p>We're always excited to talk about web design, new ideas or collaboration. Drop us a message.</p>
          <ul class="contact-details">
            <li><i class="fas fa-envelope"></i> hello@webdesign.studio</li>
            <li><i class="fas fa-phone-alt"></i> +1 (415) 555‑design</li>
            <li><i class="fas fa-map-pin"></i> San Francisco / remote</li>
          </ul>
          <!-- СОЦИАЛНИ ИКОНИ С HOVER ЕФЕКТ -->
          <div style="display: flex; gap: 1.5rem; font-size: 1.8rem; color:#2563eb;">
            <i class="fab fa-behance"></i>
            <i class="fab fa-dribbble"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
        <div class="contact-form">
          <form action="#" method="post">
            <div class="form-group">
              <input type="text" placeholder="Your name" required>
            </div>
            <div class="form-group">
              <!-- EMAIL VALIDATION - браузърът проверява за валиден имейл -->
              <input type="email" placeholder="Email address" required>
            </div>
            <div class="form-group">
              <textarea rows="4" placeholder="Tell us about your web design idea..."></textarea>
            </div>
            <button type="submit" class="form-btn">send message</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- ===============================================
       FOOTER - ДОЛЕН КОЛОНТИТУЛ
       
       - Копирайт текст
       - Линкове с hover ефект
       - Тъмен дизайн за контраст
       =============================================== -->
  <footer class="footer">
    <p>© 2025 web design studio — responsive by design</p>
    <p style="margin-top: 0.8rem;">
      <a href="#">style guide</a> • <a href="#">licenses</a> • <a href="#">changelog</a>
    </p>
  </footer>

  <!-- ===============================================
       JAVASCRIPT - ИНТЕРАКТИВНОСТ
       
       - Mobile менюто се отваря/затваря с бутон
       - Автоматично затваряне на менюто след клик на линк (на mobile)
       =============================================== -->
  <script>
    // ВЗИМАМЕ РЕФЕРЕНЦИИ КЪМ ЕЛЕМЕНТИТЕ
    const toggleBtn = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // СЪБИТИЕ ЗА КЛИК ВЪРХУ HAMBURGER БУТОНА
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show'); // ПОКАЗВА/СКРИВА МЕНЮТО
    });

    // ЗАТВАРЯНЕ НА МЕНЮТО СЛЕД КЛИК ВЪРХУ ЛИНК (ЗА ПО-ДОБРО UX)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', (e) => {
        // ПРОВЕРЯВАМЕ ДАЛИ СМЕ НА MOBILE (ширина под 768px)
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('show'); // СКРИВА МЕНЮТО
        }
      });
    });
  </script>
  
  <!-- ===============================================
       ОБОБЩЕНИЕ НА ВСИЧКИ КОМПОНЕНТИ И ФУНКЦИОНАЛНОСТИ:
       
       1. HEADER: Sticky навигация, лого, мобилно меню
       2. HERO: Заглавие, бутони, SVG илюстрация
       3. SERVICES: 4 услуги с икони и hover ефект
       4. PORTFOLIO: 4 примера с тагове и hover ефект
       5. CONTACT: Контактна информация и форма
       6. FOOTER: Долен колонтитул
       
       RESPONSIVE ДИЗАЙН:
       - Mobile: до 768px (hamburger, центриране, бутони цяла ширина)
       - Tablet: 769-1024px (оптимизирани разстояния)
       - Desktop: над 1024px (максимална ширина, две колони)
       
       CSS ТЕХНИКИ:
       - clamp() за responsive текст
       - backdrop-filter за замъгляване
       - CSS Grid & Flexbox за layouts
       - Градиенти за декорация
       - Плавни transition за hover ефекти
       - scroll-behavior: smooth
       
       ИНТЕРАКТИВНОСТ:
       - Hover ефекти на бутони, карти, линкове
       - Фокус ефекти на формата
       - Mobile меню с JavaScript
       =============================================== -->
</body>
</html>
DEMO : https://comnsense.github.io/Projects/Halloween%20Website 
SOURCE: [https://github.com/comnsense/Projects/](https://github.com/comnsense/Projects/tree/main/Halloween%20Website)
 
!([Halloween Website/Halloween Website.jpg](https://github.com/comnsense/Projects/blob/5210a34695f0471cb7d11df93b20c81118882242/Halloween%20Website/Halloween%20Website.jpg)



 
