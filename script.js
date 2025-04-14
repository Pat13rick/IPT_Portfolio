function toggleMusic() {
    const music = document.getElementById('background-music');
    const button = document.getElementById('musicButton');

    if (music.paused) {
        music.play();
        button.classList.add('playing');
    } else {
        music.pause();
        button.classList.remove('playing');
    }
}

window.addEventListener('scroll', () => {
    const scrollAmount = window.scrollY;
    const scrollText = document.getElementById('scrollText');

    if (scrollText) {
        scrollText.style.transform = `translateX(${-scrollAmount / 2}px)`; // moves left as you scroll down
    }
});

// Slow smooth scroll when clicking anchor links
document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector(".header"); 
    const navigationHeight = navigation.offsetHeight;
    document.documentElement.style.setProperty(
        "--scroll-padding",
        navigationHeight + "px"
    );
});

function scrollToSection(id, offset = 0) {
    const element = document.getElementById(id); // Get the target section
    const yOffset = offset; // Adjust this to set how far you want the section to land from the top
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset; // Calculate the scroll position

    window.scrollTo({ top: y, behavior: 'smooth' });
}

document.querySelector('.skills-button').addEventListener('click', () => scrollToSection('SkillsSection', -100));  // Adjust landing 100px above the section
document.querySelector('.aboutme-button').addEventListener('click', () => scrollToSection('AboutmeSection', -150)); // Adjust landing 150px above the section
document.querySelector('.projects-button').addEventListener('click', () => scrollToSection('ProjectsSection', -200)); // Adjust landing 200px above the section
function sendMessage() {
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill in both fields.');
        return;
    }

    // For now we just show a success message
    alert('Message sent!');

    // Clear fields after sending
    email.value = '';
    message.value = '';
}
