const language = document.querySelector('.linguagem')
const areaCodigo = document.querySelector('.inpt-dev')
const botao = document.querySelector('.btn-highlight')

function aplicaHighlight() {
    const codigo = areaCodigo.innerText
    areaCodigo.innerHTML = `<code class="preview hljs ${language.value}" contenteditable="true" aria-label="Editor de código"></code>`
    areaCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaCodigo.querySelector("code"))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})