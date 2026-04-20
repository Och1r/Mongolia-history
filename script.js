// Loading Screen
function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }
}

// Wait for video to be ready or use a minimum time
const video = document.querySelector('.hero-video');
let loaderTimeout;

if (video) {
    // If video loads successfully
    video.addEventListener('canplay', () => {
        clearTimeout(loaderTimeout);
        // Give loader animations time to complete (2 seconds)
        setTimeout(hideLoader, 2000);
    });
    
    // Fallback: if video doesn't load or loads very slowly
    loaderTimeout = setTimeout(() => {
        hideLoader();
    }, 4000);
} else {
    // Fallback for when no video exists
    window.addEventListener('load', () => {
        setTimeout(hideLoader, 2000);
    });
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
    observer.observe(el);
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


