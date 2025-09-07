document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const links = document.querySelectorAll('a');

    // 1. Lógica do Cursor Customizado
    document.addEventListener('mousemove', (e) => {
        // Atualiza a posição do cursor para seguir o mouse
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Adiciona efeito de hover para todos os links
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
        });
    });
});
