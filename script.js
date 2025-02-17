// Données des projets (à personnaliser)
const projects = [
    {
        title: "Juneo Supernet",
        description: "Animation de la communauté Discord pour le lancement d'une collection NFT",
        metrics: "+20K membres, +5K ventes",
        image: "./assets/projects/juneo.jpg"
    },
    {
        title: "Agora GameFi",
        description: "Stratégie de lancement pour un projet GameFi",
        metrics: "+100K joueurs actifs",
        image: "./assets/projects/agora.webp"
    },
    {
        title: "20 minutes",
        description: "Gestion de communauté pour une plateforme DeFi",
        metrics: "+50K followers, +30% engagement",
        image: "./assets/projects/20min.webp"
    }
];

// Fonction pour afficher les projets
function displayProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'skill-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <p class="project-metrics">${project.metrics}</p>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Animation du scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation au scroll pour les éléments
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
});

// Burger Menu Logic
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Animation des projets au scroll
function handleIntersection(entries, observer) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Ajoute un délai progressif pour chaque carte
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200); // 200ms de délai entre chaque carte
        }
    });
}

// Configuration de l'Intersection Observer pour les animations au scroll
const projectObserver = new IntersectionObserver(handleIntersection, {
    threshold: 0.1,
    rootMargin: '0px'
});

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');
        
        // Toggle answer visibility
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        
        // Rotate icon
        icon.style.transform = answer.style.display === 'none' ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});

// Availability Counter
function updateAvailability() {
    const availabilitySpan = document.querySelector('.availability-alert span');
    if (availabilitySpan) {
        const slots = 3; // Nombre de créneaux disponibles
        availabilitySpan.innerHTML = `Disponibilité limitée : ${slots} créneaux cette semaine`;
    }
}

// Smooth Scroll pour tous les liens d'ancrage
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

// Animation des badges au scroll
const badgeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1)';
            entry.target.style.opacity = '1';
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.badge').forEach(badge => {
    badge.style.transform = 'scale(0.8)';
    badge.style.opacity = '0';
    badge.style.transition = 'all 0.5s ease-out';
    badgeObserver.observe(badge);
});

// Animation des témoignages
const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.testimonial-card').forEach(card => {
    testimonialObserver.observe(card);
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    updateAvailability();
    
    // Initialiser l'état des FAQ
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'none';
    });
    
    // Observer pour les animations des projets
    document.querySelectorAll('.projects-grid .skill-card').forEach(card => {
        projectObserver.observe(card);
    });
});

// Floating button visibility
window.addEventListener('scroll', () => {
    const floatingButton = document.querySelector('.floating-contact');
    if (window.scrollY > 300) {
        floatingButton.style.opacity = '1';
        floatingButton.style.transform = 'translateY(0)';
    } else {
        floatingButton.style.opacity = '0';
        floatingButton.style.transform = 'translateY(20px)';
    }
});

// Effet de parallaxe léger sur le fond
document.addEventListener('mousemove', (e) => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        heroBackground.style.transform = `
            translate(${mouseX * 20}px, ${mouseY * 20}px)
            scale(1.1)
        `;
    }
});

// Animation du texte dans la section hero
const heroText = document.querySelector('.hero-content p');
if (heroText) {
    heroText.style.opacity = '0';
    setTimeout(() => {
        heroText.style.opacity = '1';
    }, 500);
}
