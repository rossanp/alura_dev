/* Pegando os valores do input da cor e do background da area do código */
const input = document.getElementById('colorVal')
const fundoCodigo = document.getElementById('fundo-codigo')

/* Criando um evento para pegar a cor do input ao modifica-lo e chamando a function */
input.addEventListener('input', setColor)

/* Criando a function para mudança da cor no input e no background do código */
function setColor() {
    fundoCodigo.style.backgroundColor = input.value
    input.style.backgroundColor = input.value
}