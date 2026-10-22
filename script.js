// Inicialização dos ícones do Lucide
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});

// Função para alternar o menu hambúrguer em dispositivos móveis
function toggleMenu() {
    const nav = document.getElementById('nav-links');
    const button = document.querySelector('.menu-toggle');
    nav.classList.toggle('active');
    const expanded = nav.classList.contains('active');
    button.setAttribute('aria-expanded', expanded);
}

