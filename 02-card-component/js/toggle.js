const contenedorRedes = document.querySelector('.redes-desktop');
const btn = document.getElementById('btn_share');

btn.addEventListener('click', () => {
    contenedorRedes.classList.toggle('toggle');
});