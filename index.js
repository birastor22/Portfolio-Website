document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Check if this is the back to top button
            if (targetId === '#top') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTyped();

    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            opacity: {
                value: 0.2,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: false,
                    mode: 'repulse'
                },
                onclick: {
                    enable: false,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: -200,    // How far the attraction reaches (negative = attract)
                    duration: 0.4      // Smoothness of the effect
                },
                push: {
                    particles_nb: 4    // Number of particles added on click
                }
            }
        },
        retina_detect: true
    });
});

// EmailJS — replace placeholders with your actual keys from emailjs.com
emailjs.init("_WFvSCIzf1Bq61ME5");

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const status = document.getElementById("form-status");
    emailjs.sendForm("service_yxv3px7", "template_6ug4t2n", this)
        .then(() => {
            status.textContent = "Message sent! I'll get back to you soon.";
            status.className = "text-base text-white";
            status.classList.remove("hidden");
            this.reset();
        }, () => {
            status.textContent = "Something went wrong. Please try emailing me directly.";
            status.className = "text-base text-red-400";
            status.classList.remove("hidden");
        });
});

// Initialize Typed.js animations
function initializeTyped() {
    // Create containers for typed elements
    const nameElement = document.querySelector(".name");
    const titleElement = document.querySelector(".title");
    
    // Store content
    const nameText = nameElement.textContent;
    const titleTexts = ['Software Engineer', 'Data Scientist', 'AI Enthusiast', 'Researcher', 'Problem Solver', 'Builder'];
    
    // Clear the elements to prepare for typing animation
    nameElement.innerHTML = '<span class="typed-name"></span>';
    titleElement.innerHTML = '<span class="typed-title"></span>';
    
    setTimeout(() => {
        new Typed('.typed-name', {
            strings: [nameText],
            typeSpeed: 80,
            showCursor: false,
            onComplete: () => {
                // Start title typing after name is complete
                setTimeout(() => {
                    new Typed('.typed-title', {
                        strings: titleTexts,
                        typeSpeed: 50,
                        backSpeed: 30,
                        backDelay: 1500,
                        loop: true,
                        showCursor: true,
                        cursorChar: '|'
                    });
                }, 300);
            }
        });
    }, 500);
}