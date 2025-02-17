// GSAP Animations
gsap.to(".hero-title", { opacity: 1, y: 0, duration: 1, delay: 0.3 });
gsap.to(".hero-subtitle", { opacity: 1, y: 0, duration: 1, delay: 0.6 });
gsap.to(".hero-btn", { opacity: 1, y: 0, duration: 1, delay: 0.9 });

// Mouse Move Effect
document.addEventListener("mousemove", (e) => {
    let x = e.clientX / window.innerWidth - 0.5;
    let y = e.clientY / window.innerHeight - 0.5;

    gsap.to(".hero-title", { x: x * 20, y: y * 20, duration: 0.5 });
    gsap.to(".hero-subtitle", { x: x * 15, y: y * 15, duration: 0.5 });
    gsap.to(".hero-btn", { x: x * 10, y: y * 10, duration: 0.5 });
});

// Adding floating circles dynamically
function createFloatingCircles() {
    for (let i = 0; i < 8; i++) {
        let circle = document.createElement("div");
        circle.classList.add("floating-circle");
        document.body.appendChild(circle);

        // Randomize position and size
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let size = Math.random() * 80 + 30;

        gsap.set(circle, { left: x, top: y, width: size, height: size });
    }
}

createFloatingCircles();

// Typing Animation for Title
const words = ["Welcome to Pha5e", "Innovate.", "Create.", "Inspire."];
let wordIndex = 0;
let charIndex = 0;
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

function type() {
    if (charIndex < words[wordIndex].length) {
        typedText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
});

// Parallax Effect on Scroll
window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    gsap.to(".hero", { backgroundPositionY: scrollY * 0.5 });
});
