// Инициализация particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00ff9d'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff9d',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Инициализация Typed.js
new Typed('.typewriter', {
    strings: ['Кодер, создающий цифровую магию'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false
});

// Список технологий
const technologies = [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'CSS', icon: '🎨' },
    { name: 'HTML', icon: '🌐' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'React', icon: '⚛️' }
];

// Добавление технологий в секцию
const techList = document.querySelector('.tech-list');
technologies.forEach(tech => {
    const techItem = document.createElement('div');
    techItem.className = 'tech-item';
    techItem.innerHTML = `${tech.icon} ${tech.name}`;
    techList.appendChild(techItem);
});

// Обработка донатов
document.getElementById('donateBtn').addEventListener('click', () => {
    const yoomoneyUrl = 'https://yoomoney.ru/to/4100118741703485';
    window.open(yoomoneyUrl, '_blank');
});

// Счетчик посетителей
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount = parseInt(visitorCount) + 1;
localStorage.setItem('visitorCount', visitorCount);
document.getElementById('visitorCount').textContent = visitorCount;

// Получение IP адреса
async function getVisitorIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        console.log('IP посетителя:', data.ip);
        // Здесь можно добавить логику для отправки IP на сервер
    } catch (error) {
        console.error('Ошибка при получении IP:', error);
    }
}

getVisitorIP();

// Анимация при скролле
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
}); 