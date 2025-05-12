// LinguaBoost JavaScript Functionality

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Intersection Observer for scroll animations
    initScrollAnimations();
    
    // Add classes to elements for animations
    addAnimationClasses();
    
    // Initialize FAQ accordion functionality
    initFaqAccordion();
    
    // Initialize theme toggle functionality
    initThemeToggle();
});

// Add animation classes to elements
function addAnimationClasses() {
    // Add animation classes to feature cards
    document.querySelectorAll('#features .bg-gray-50').forEach((card, index) => {
        card.classList.add('feature-card', 'fade-in-section');
        // Add slight delay to each card for staggered animation
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add animation classes to language cards
    document.querySelectorAll('#languages .bg-white').forEach((card, index) => {
        card.classList.add('hover-lift', 'fade-in-section');
        card.style.transitionDelay = `${index * 0.05}s`;
    });
    
    // Add animation classes to testimonial cards
    document.querySelectorAll('#testimonials .bg-gray-50').forEach((card) => {
        card.classList.add('testimonial-card', 'fade-in-section');
    });
    
    // Add animation classes to pricing cards
    document.querySelectorAll('#pricing .bg-white').forEach((card, index) => {
        card.classList.add('pricing-card', 'fade-in-section');
        if (index === 1) {
            card.classList.add('featured');
        }
    });
    
    // Add animation to hero image
    const heroImage = document.querySelector('.hero-section img');
    if (heroImage) {
        heroImage.classList.add('hero-image');
    }
    
    // Add animation to app screenshots
    document.querySelectorAll('.app-screenshot').forEach((img) => {
        img.classList.add('fade-in-section');
    });
    
    // Add button effects
    document.querySelectorAll('.bg-primary').forEach((button) => {
        button.classList.add('btn-primary');
    });
}

// Initialize Intersection Observer for scroll animations
function initScrollAnimations() {
    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Observe all elements with fade-in-section class
    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize FAQ accordion functionality
function initFaqAccordion() {
    const detailsElements = document.querySelectorAll('#faq details');
    
    detailsElements.forEach((details) => {
        details.addEventListener('toggle', () => {
            if (details.open) {
                // Close other open details
                detailsElements.forEach((otherDetails) => {
                    if (otherDetails !== details && otherDetails.open) {
                        otherDetails.open = false;
                    }
                });
            }
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Account for fixed header
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update URL without page jump
            history.pushState(null, null, targetId);
        }
    });
});

// Add dark mode class to body for transitions
document.body.classList.add('dark-mode-transition');

// Add app screenshot classes
window.addEventListener('load', function() {
    const appScreenshots = document.querySelectorAll('.md\\:w-1\\/2.relative img');
    appScreenshots.forEach(img => {
        img.classList.add('app-screenshot');
    });
});
