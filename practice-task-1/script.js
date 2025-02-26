// �����-���
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

// ������������� �����-���
showSlide(currentSlide);
setInterval(nextSlide, 1000);

// ���� "������ �����"
let targetNumber = sessionStorage.getItem('targetNumber');
if (!targetNumber) {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem('targetNumber', targetNumber);
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const message = document.getElementById('message');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = '������� ����� �� 1 �� 100!';
        return;
    }

    if (userGuess === parseInt(targetNumber)) {
        message.textContent = '�����������! �� ������� �����!';
    } else if (userGuess < targetNumber) {
        message.textContent = '���������� ����� ������!';
    } else {
        message.textContent = '���������� ����� ������!';
    }
}

function newGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem('targetNumber', targetNumber);
    document.getElementById('message').textContent = '';
    document.getElementById('userGuess').value = '';
}