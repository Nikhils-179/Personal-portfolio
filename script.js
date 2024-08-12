document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    for (let link of navLinks) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    }

    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + document.querySelector('header').offsetHeight;

        sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                const currentId = section.getAttribute('id');
                document.querySelector('nav ul li a.active').classList.remove('active');
                document.querySelector(`nav ul li a[href="#${currentId}"]`).classList.add('active');
            }
        });
    });

    // Animation for "About Me" section
    const aboutSection = document.querySelector('.about-section');
    const aboutContent = document.querySelector('.about-content');
    window.addEventListener('scroll', function () {
        const sectionPos = aboutSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;
        if (sectionPos < screenPos) {
            aboutContent.classList.add('visible');
        }
    });

    // Animation for other sections
    const animatedTexts = document.querySelectorAll('.animated-text');
    let delay = 0;
    for (let text of animatedTexts) {
        setTimeout(() => {
            text.classList.add('visible');
        }, delay);
        delay += 300;
    }
});