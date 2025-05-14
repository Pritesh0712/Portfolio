// Preloader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.preloader').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.preloader').style.display = 'none';
        }, 500);
    }, 1000); // 1 seconds loading animation
});

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Typed.js
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-text', {
        strings: [
            'Python &amp; Java Developer',
            'Web &amp; Software Enthusiast',
            'Problem Solver',
            'Continuous Learner'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });
});

// Particles.js
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#4a6bff"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#4a6bff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        }
    }
});

// Progress bar animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Form submission with animation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    const submitBtn = document.querySelector('.form-submit');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Sending...';
    
    setTimeout(function() {
        submitBtn.innerHTML = '<i class="fas fa-check me-2"></i> Message Sent!';
        submitBtn.style.backgroundColor = 'green';
        
        setTimeout(function() {
            submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i> Send Message';
            submitBtn.style.backgroundColor = '';
        }, 3000);
    }, 2000);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = 'none';
    }
});

// DOM Content Loaded Event Handler
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if it's open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
                
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    setActiveNavLink();
    toggleScrollToTopButton();
    
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            // Small delay to ensure page is fully loaded
            setTimeout(() => {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }, 300);
        }
    }
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

function setActiveNavLink() {
    let currentSection = '';
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; 
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('scroll', function() {
    const skillsSection = document.querySelector('#skills');
    if (skillsSection && isInViewport(skillsSection)) {
        animateSkills();
    }
    
    setActiveNavLink();
    toggleScrollToTopButton();
});

// Scroll to top functionality
const scrollToTopBtn = document.querySelector('.scroll-to-top');

function toggleScrollToTopButton() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('active');
    } else {
        scrollToTopBtn.classList.remove('active');
    }
}

// Scroll to top button click event
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
