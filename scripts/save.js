var dados = []

const save = document.querySelector('#btn-save')

function saveCode() {

    const title = document.querySelector('.title-data').value
    const description = document.querySelector('.description-data').value
    const language = document.querySelector('#linguagem').value
    const areaCodigo = document.querySelector('.inpt-dev')
    const cor = document.getElementById('colorVal').value

    const cod = areaCodigo.innerText

    dados = [
        {
            title: title,
            description: description,
            linguagen: language,
            cod: cod,
            cor: cor
        }
    ]

    console.log(dados)

}

save.addEventListener('click', () => {
    saveCode()
})