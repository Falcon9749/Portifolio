document.addEventListener('DOMContentLoaded', () => {
    const transitionElement = document.querySelector('.page-transition');

    // Adicionar animação de entrada ao carregar a página
    setTimeout(() => {
        transitionElement.style.transform = 'none';
    }, 500);
});

function animateAndNavigate(targetUrl) {
    const transitionElement = document.querySelector('.page-transition');
    const clickSound = document.getElementById('click-sound');


    setTimeout(() => {
        window.location.replace(targetUrl);
    }, 300);// Tocar som de clique
    clickSound.play();

    console.log('Iniciando animação de virar página');
    
    // Adicionar classe para animação de virar a página
    transitionElement.classList.add('page-flip');

    // Esperar a animação antes de navegar
    setTimeout(() => {
        console.log('Navegando para:', targetUrl);
        window.location.replace(targetUrl);
    }, 800);
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
