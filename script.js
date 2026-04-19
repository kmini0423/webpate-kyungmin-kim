/**
 * Kyungmin Kim Portfolio - Interactivity
 * Focus: Dark mode, Scroll animations, and Smooth interaction
 */

document.addEventListener('DOMContentLoaded', () => {
    // 0. Car Entry Animation (Attracting entrance)
    const overlay = document.getElementById('entry-overlay');
    const car = document.getElementById('car-animation');
    
    if (overlay && car && document.body.classList.contains('home-page')) {
        // Start driving
        car.classList.add('car-driving');
        
        // After car passes halfway (roughly 1.5s), fade out overlay
        setTimeout(() => {
            overlay.classList.add('fade-out');
        }, 1500);
        
        // Completely remove car and overlay after animation ends
        setTimeout(() => {
            car.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
                car.remove();
            }, 500);
        }, 3500);
    } else if (overlay) {
        // Just remove overlay if not on home page
        overlay.remove();
    }

    // 1. Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        // We handle visibility of two icons instead of injecting HTML strings
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }

    // 2. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once visible, we can stop observing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // 3. Simple Dynamic Greeting (Optional extra polish)
    const heroIntro = document.querySelector('.hero-intro');
    if (heroIntro && heroIntro.innerHTML.includes('Welcome')) {
        const hour = new Date().getHours();
        let greeting = 'Welcome';
        if (hour < 12) greeting = 'Good morning';
        else if (hour < 18) greeting = 'Good afternoon';
        else greeting = 'Good evening';
        
        // This is a subtle touch
        // heroIntro.innerHTML = heroIntro.innerHTML.replace('Welcome', greeting);
    }

    // 4. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
