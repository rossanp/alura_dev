var dados = []


const save = document.querySelector('#btn-save')


function aplicaHighlight() {

    const title = document.querySelector('.title-data').value
    const description = document.querySelector('.description-data').value
    const language = document.querySelector('#linguagem').value
    const areaCodigo = document.querySelector('.inpt-dev')

    const cod = areaCodigo.innerText

    dados = [
        {
            title: title,
            description: description,
            linguagen: language,
            cod: cod
        }
    ]

    console.log(dados)

}

save.addEventListener('click', () => {
    aplicaHighlight()
})