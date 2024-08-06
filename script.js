document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll(".animated-text");
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
