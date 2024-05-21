document.addEventListener('DOMContentLoaded', () => {
    const transitionElement = document.querySelector('.transition-fade');

    // Remover a animação ao carregar a página
    setTimeout(() => {
        transitionElement.classList.add('fade-out');
    }, 500);
});

function animateAndNavigate(targetUrl) {
    const transitionElement = document.querySelector('.transition-fade');
    transitionElement.classList.remove('fade-out');

    setTimeout(() => {
        window.location.replace(targetUrl);
    }, 300);
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
