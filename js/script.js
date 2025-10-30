// ===== Atualiza o copyright automaticamente =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Scroll suave para menu =====
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Só aplica rolagem se for um link interno
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});


// ===== Destaca menu da seção ativa =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const menu = document.querySelector('#mobile-menu');
const navLink = document.querySelector('.nav-links');

  menu.addEventListener('click', () => {
    navLink.classList.toggle('active');
    menu.classList.toggle('open');
  });

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== Fade-in e slide dos elementos com sequencia =====
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if(entry.target.classList.contains('techs') || entry.target.classList.contains('projects-container')){
                // animação sequencial dos filhos
                const children = Array.from(entry.target.children);
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, index * 150); // atraso de 150ms entre cada
                });
            } else {
                entry.target.classList.add('visible');
            }
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section, .project-card, .tech').forEach(el => observer.observe(el));

// ===== Botão Voltar ao Topo =====
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
