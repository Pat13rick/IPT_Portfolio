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
        scrollText.style.transform = `translateX(${-scrollAmount / 2}px)`; 
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector(".header"); 
    const navigationHeight = navigation.offsetHeight;
    document.documentElement.style.setProperty(
        "--scroll-padding",
        navigationHeight + "px"
    );
});

function scrollToSection(id, offset = 0) {
    const element = document.getElementById(id); 
    const yOffset = offset; 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset; 

    window.scrollTo({ top: y, behavior: 'smooth' });
}

document.querySelector('.skills-button').addEventListener('click', () => scrollToSection('SkillsSection', -100)); 
document.querySelector('.aboutme-button').addEventListener('click', () => scrollToSection('AboutmeSection', -150)); 
document.querySelector('.projects-button').addEventListener('click', () => scrollToSection('ProjectsSection', -200));
function sendMessage() {
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill in both fields.');
        return;
    }


    alert('Message sent!');

    email.value = '';
    message.value = '';
}
