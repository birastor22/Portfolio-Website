document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add CDN script for Typed.js
    const typedScript = document.createElement('script');
    typedScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js';
    typedScript.onload = initializeTyped;
    document.head.appendChild(typedScript);
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