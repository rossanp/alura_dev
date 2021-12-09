/* Buscando o estado do checkbox */
let checkbox = document.querySelector('#esconder')

/* Criando a função ao ouvir o checkbox, esconder e aparecer a barra lateral */
checkbox.addEventListener('click', function () {

    let menu = document.getElementById("menu-hamburguer");
    
    /* Modificando o CSS */
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
})