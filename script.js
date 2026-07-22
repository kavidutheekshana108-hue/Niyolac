// script.js

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const icon = document.getElementById('menu-icon');
    
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
        icon.classList.replace("fa-xmark", "fa-bars");
    } else {
        mobileMenu.style.display = "block";
        icon.classList.replace("fa-bars", "fa-xmark");
    }
}

function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you! Your message has been received.\n\nOur Niyolac team will contact you shortly.");
    e.target.reset();
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== "#") {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log("%cNiyolac Company Website Loaded Successfully", "color: #10b981; font-weight: bold");