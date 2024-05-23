document.addEventListener('DOMContentLoaded', () => {
    const transitionElement = document.querySelector('.transition-fade');

    // Adicionar animação de entrada ao carregar a página
    setTimeout(() => {
        transitionElement.classList.add('fade-out');
    }, 500);
});

function animateAndNavigate(targetUrl) {
    const transitionElement = document.querySelector('.transition-fade');
    const clickSound = document.getElementById('click-sound');

    // Tocar som de clique
    clickSound.play();

    // Adicionar classe para fade-in
    transitionElement.classList.remove('fade-out');
    transitionElement.classList.add('fade-in');

    // Esperar a animação antes de navegar
    setTimeout(() => {
        window.location.replace(targetUrl);
    }, 500);
}

function sobre() {
    animateAndNavigate('index.html');
}

function projetos() {
    animateAndNavigate('projetos.html');
}

function contatos() {
    animateAndNavigate('contatos.html');
}