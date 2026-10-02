// ===============================
// CAFÉ ELORA - WEBSITE JAVASCRIPT
// ===============================


// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ===============================
// NAVBAR ACTIVE LINK
// ===============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".section, .menu-card, .review-card, .info-item, .contact-item"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});


// ===============================
// HERO LOADING EFFECT
// ===============================

window.addEventListener("load", function () {

    document.body.classList.add("page-loaded");

});


// ===============================
// BUTTON CLICK EFFECT
// ===============================

const buttons = document.querySelectorAll(
    ".primary-button, .outline-button, .whatsapp-button, .nav-button"
);

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        this.classList.add("clicked");

        setTimeout(function () {

            button.classList.remove("clicked");

        }, 250);

    });

});
