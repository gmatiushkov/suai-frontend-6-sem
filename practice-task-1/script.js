// Слайд-шоу
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Инициализация слайд-шоу
showSlide(currentSlide);
setInterval(nextSlide, 1000);

// Игра "Угадай число"
let targetNumber = sessionStorage.getItem('targetNumber');
if (!targetNumber) {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem('targetNumber', targetNumber);
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const message = document.getElementById('message');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Введите число от 1 до 100!';
        return;
    }

    if (userGuess === parseInt(targetNumber)) {
        message.textContent = 'Поздравляем! Вы угадали число!';
    } else if (userGuess < targetNumber) {
        message.textContent = 'Загаданное число больше!';
    } else {
        message.textContent = 'Загаданное число меньше!';
    }
}

function newGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem('targetNumber', targetNumber);
    document.getElementById('message').textContent = '';
    document.getElementById('userGuess').value = '';
}