document.addEventListener('DOMContentLoaded', () => {
    const transitionElement = document.querySelector('.transition-fade');

    // Remover a animação ao carregar a página
    setTimeout(() => {
        transitionElement.classList.add('fade-out');
    }, 500);

    function navigate(url) {
        transitionElement.classList.remove('fade-out');

        setTimeout(() => {
            window.location.replace(url);
        }, 500);
    }

    window.sobre = () => navigate('index.html');
    window.projetos = () => navigate('projetos.html');
    window.contatos = () => navigate('contatos.html');
});
